# Repository guidance

## Project overview

This repository publishes `fifatables`, a TypeScript library containing table definitions for FIFA 11 through FIFA 23.

- `config/` contains the YAML table definitions and is the source of truth for schema data.
- `src/config/` contains generated JSON definitions and a generated barrel file.
- `src/shared/config.ts` is generated from the supported FIFA versions and tables.
- `src/shared/` contains the public types and utility code.
- `test/` contains Vitest tests.
- `examples/` contains raw table exports used by the YAML preparation script.

## Environment and package manager

- Use the Node.js version in `.nvmrc`; run `nvm use` before project commands.
- Use Bun 1.3.14 and keep `bun.lock` authoritative.
- Install dependencies with `bun install`; use `bun ci` for frozen-lockfile installs.
- Do not run release or publish scripts unless the user explicitly asks for a release.

## Common commands

- Build both package targets: `bun run build`
- Run tests: `bun run test`
- Run tests with CI coverage: `bun run test --coverage --run`
- Regenerate JSON and TypeScript config files from YAML: `bun run yaml-to-json`
- Create YAML definitions from a raw export: `bun run prepare-yaml <fifa-version>`

## Change guidelines

- Keep changes focused and preserve the existing public API unless the task explicitly requires an API change.
- Add or update tests in `test/` when changing behavior in `src/shared/`.
- When changing a table definition, edit the corresponding file under `config/` and run `bun run yaml-to-json`; commit the related generated changes under `src/config/` and `src/shared/config.ts`.
- Treat `src/config/index.ts` and `src/shared/config.ts` as generated files; change their generator instead of editing them by hand.
- Follow the repository's Prettier settings: two spaces, single quotes, semicolons, and no trailing commas.
- Keep GitHub Actions on current supported major versions. Node setup in workflows must use `node-version-file: .nvmrc` rather than duplicating the Node version.

## Validation

For code or data changes, run `bun run build` and `bun run test --coverage --run`. For workflow-only or documentation-only changes, validate the affected YAML or Markdown and run the full suite when practical.
