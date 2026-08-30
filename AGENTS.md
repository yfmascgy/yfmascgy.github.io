# Project Change Policy

These instructions apply to every file in this repository.

## Git version control

- Before editing, inspect `git status` and preserve unrelated user changes.
- Make each logical change on a dedicated branch with a clear `codex/` name.
- Keep commits focused. Stage only files related to the current change.
- Commit every completed, validated change with a descriptive message.
- Never rewrite shared history, force-push, or discard user changes without explicit approval.
- Report the branch name, commit hash, and validation commands when handing work back.

## Tests and validation

- Every functional change must include a corresponding automated test in the same change.
- Cover the intended behavior and important failure or edge cases.
- Run the new test plus the relevant existing test suite before committing.
- Run the project's available build, lint, formatting, and validation checks when applicable.
- For non-executable documentation or configuration changes, add an automated validation when practical; otherwise run a specific validation command and explain why a product test does not apply.
- Do not commit when required tests or validations fail. Fix the failure or clearly stop and report the blocker.

## Change workflow

1. Inspect repository status and existing project conventions.
2. Create or switch to a task-specific branch.
3. Make the smallest complete change and add its tests.
4. Review `git diff` and `git diff --check`.
5. Run all relevant tests and validations.
6. Stage only related files, commit, and confirm the final status.
