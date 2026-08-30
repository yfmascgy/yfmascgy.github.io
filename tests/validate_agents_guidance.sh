#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
guidance_file="${repo_root}/AGENTS.md"

test -f "${guidance_file}"
grep -Fq "Commit every completed, validated change" "${guidance_file}"
grep -Fq "Every functional change must include a corresponding automated test" "${guidance_file}"
grep -Fq "Do not commit when required tests or validations fail" "${guidance_file}"

echo "AGENTS.md guidance validation passed."
