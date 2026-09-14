import { test, expect } from "bun:test";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync, readdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import { build, codexSkill, walk } from "./build-codex-plugin.mjs";

function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), "matt-astra-test-"));
  try {
    for (const bucket of ["engineering", "productivity"]) mkdirSync(join(root, "skills", bucket), { recursive: true });
    const skill = join(root, "skills", "engineering", "example");
    mkdirSync(join(skill, "agents"), { recursive: true });
    writeFileSync(join(skill, "SKILL.md"), "---\nname: example\ndescription: Example\ndisable-model-invocation: true\nargument-hint: Topic\n---\n\nRead [guide](guide.md).\n");
    writeFileSync(join(skill, "agents", "openai.yaml"), "policy:\n  allow_implicit_invocation: false\n");
    writeFileSync(join(skill, "guide.md"), "# Guide\r\n");
    run(root, skill);
  } finally {
    // This exact directory was created by this test, never a supplied path.
    if (resolve(root).startsWith(resolve(tmpdir()) + "\\") || resolve(root).startsWith(resolve(tmpdir()) + "/")) rmSync(root, { recursive: true });
  }
}
test("portable frontmatter preserves body but removes only Claude fields", () => {
  const out = codexSkill("---\r\nname: a\r\ndescription: A\r\ndisable-model-invocation: true\r\nargument-hint: x\r\n---\r\n\r\nBody\r\n");
  expect(out).toBe("---\nname: a\ndescription: A\n---\n\nBody\n");
});
test("build copies references and preserves explicit-only Codex policy", () => fixture(root => {
  expect(build(root)).toEqual({ skills: 1, files: 3 });
  expect(build(root, true)).toEqual({ skills: 1, files: 3 });
  const target = join(root, "plugins", "matt-skills-astra", "skills", "example");
  expect(readFileSync(join(target, "agents", "openai.yaml"), "utf8")).toContain("allow_implicit_invocation: false");
  expect(readFileSync(join(target, "guide.md"), "utf8")).toBe("# Guide\n");
}));
test("check detects source drift without changing the package", () => fixture((root, skill) => {
  build(root);
  writeFileSync(join(skill, "guide.md"), "# Changed\n");
  expect(() => build(root, true)).toThrow("stale");
}));
test("policy mismatch fails before writing", () => fixture((root, skill) => {
  writeFileSync(join(skill, "agents", "openai.yaml"), "interface:\n  display_name: Example\n");
  expect(() => build(root)).toThrow("Invocation policy mismatch");
}));
test("unexpected generated content is preserved and reported", () => fixture(root => {
  build(root);
  const extra = join(root, "plugins", "matt-skills-astra", "skills", "notes.md");
  writeFileSync(extra, "user work");
  expect(() => build(root)).toThrow("Unexpected generated files");
  expect(readFileSync(extra, "utf8")).toBe("user work");
}));

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const payload = join(repository, "plugins", "matt-skills-astra", "skills");
test("release contains exactly upstream's promoted selection", () => {
  const legacy = JSON.parse(readFileSync(join(repository, ".claude-plugin", "plugin.json"), "utf8"));
  const expected = legacy.skills.map(path => path.replace(/\/$/, "").split("/").at(-1)).sort();
  expect(readdirSync(payload).sort()).toEqual(expected);
  expect(build(repository, true).skills).toBe(25);
});
test("bundled Markdown file references stay inside the plugin and resolve", () => {
  for (const path of walk(payload).filter(path => path.endsWith(".md"))) {
    // Template examples refer to files a future project may create, not package resources.
    const text = readFileSync(path, "utf8").replace(/^\x60\x60\x60[^\n]*\n[\s\S]*?^\x60\x60\x60[ \t]*$/gm, "");
    for (const link of text.matchAll(/\]\(([^)]+)\)/g)) {
      const target = link[1].split("#")[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      const destination = resolve(dirname(path), target);
      expect(destination.startsWith(resolve(payload) + "/") || destination.startsWith(resolve(payload) + "\\")).toBe(true);
      if (!existsSync(destination)) throw new Error("Broken reference in " + path + ": " + target);
    }
  }
});
