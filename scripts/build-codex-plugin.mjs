import { existsSync, readdirSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const promotedBuckets = ["engineering", "productivity"];
const textExtensions = /\.(md|yaml|yml|sh|cjs|mjs|js|ts|json|txt)$/;
export function normalized(path, bytes) {
  return textExtensions.test(path) ? Buffer.from(bytes.toString("utf8").replace(/\r\n/g, "\n")) : bytes;
}
export function codexSkill(source) {
  const text = source.replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error("Invalid SKILL.md frontmatter");
  // Invocation policy lives in agents/openai.yaml. These fields are Claude-only.
  const header = match[1].split("\n").filter(line => !/^(disable-model-invocation|argument-hint):/.test(line)).join("\n");
  return "---\n" + header + "\n---\n" + text.slice(match[0].length);
}
export function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, "en")).flatMap(entry => {
    if (entry.isSymbolicLink()) throw new Error("Symlinks are not portable: " + join(directory, entry.name));
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
export function expectedSkills(root) {
  const result = new Map();
  const names = new Set();
  for (const bucket of promotedBuckets) {
    for (const entry of readdirSync(join(root, "skills", bucket), { withFileTypes: true })) {
      if (entry.isSymbolicLink()) throw new Error("Symlink skill: " + entry.name);
      if (!entry.isDirectory()) continue;
      const source = join(root, "skills", bucket, entry.name);
      const markdown = readFileSync(join(source, "SKILL.md"), "utf8").replace(/\r\n/g, "\n");
      if (!markdown.match(new RegExp("^name: " + entry.name + "$", "m"))) throw new Error("Skill name/path mismatch: " + entry.name);
      if (names.has(entry.name)) throw new Error("Duplicate skill: " + entry.name);
      names.add(entry.name);
      const yaml = readFileSync(join(source, "agents", "openai.yaml"), "utf8");
      const explicit = /^disable-model-invocation: true$/m.test(markdown);
      if (explicit !== /allow_implicit_invocation:\s*false/.test(yaml)) throw new Error("Invocation policy mismatch: " + entry.name);
      for (const file of walk(source)) {
        const rel = join(entry.name, relative(source, file));
        const bytes = file.endsWith("SKILL.md") ? Buffer.from(codexSkill(readFileSync(file, "utf8"))) : normalized(file, readFileSync(file));
        result.set(rel, bytes);
      }
    }
  }
  return { files: result, count: names.size };
}
export function build(root, check = false) {
  root = resolve(root);
  const target = join(root, "plugins", "matt-skills-astra", "skills");
  const expected = expectedSkills(root);
  // Refuse unexpected files instead of deleting potential user work.
  const extras = walk(target).filter(path => !expected.files.has(relative(target, path)));
  if (extras.length) throw new Error("Unexpected generated files; review explicitly: " + extras.join(", "));
  for (const [rel, bytes] of expected.files) {
    const destination = join(target, rel);
    if (check) {
      if (!existsSync(destination) || !normalized(destination, readFileSync(destination)).equals(bytes)) throw new Error("Generated file missing or stale: " + destination);
    } else {
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, bytes);
    }
  }
  return { skills: expected.count, files: expected.files.size };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  console.log(JSON.stringify(build(root, process.argv.includes("--check"))));
}
