---
name: wizard
description: "Create a guided setup script when a workflow genuinely needs human-only steps."
---

# Wizard

Identify the steps tools can safely perform and those that require the user, such as interactive account approval. Automate the former within scope and make the latter clear and resumable.

Use the host's actual shell and available tools. For a Bash-capable environment, [template.sh](template.sh) provides an interactive stage runner; inspect its documented interface before adapting the stages. For PowerShell or another host, use a native equivalent rather than assuming Bash exists.

Show prerequisites, current stage, expected result, and actionable failure guidance. Make retries safe; avoid repeating completed external side effects. Request only needed secrets, use protected input or existing secret stores, and never print credentials or dump entire environment files.

Verify syntax and safe non-interactive parts. Leave the full interactive wizard for the user to run, and explain the exact command and remaining manual steps. Keep or remove the script according to its intended use and the user's request; do not automatically commit it or delete it after use.
