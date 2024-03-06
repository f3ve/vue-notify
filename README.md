# Monorepo Template

This is a starter template for bootstrapping a new monorepo project.

## Features

1. [PNPM workspaces](https://pnpm.io/workspaces)
1. Version handling and changelog generation via [Lerna](https://github.com/lerna/lerna)
1. Force conventional commit messages
1. File linting on commit to ensure no linting errors are ever committed.

## How to use.

1. Clone this repo
2. Install dependencies: `pnpm i`
3. Clear git history: `rm -rf .git`
4. Init a new git history: `git init`
5. Setup new git origin `git remote add origin <URL>`
6. Be sure to update the [`package.json`](/package.json) with your project name. Reset the version number if you wish.
7. Reset the version number in [`lerna.json`](/lerna.json). Be sure to read [Lerna docs](https://lerna.js.org/docs/api-reference/configuration#version) if you wish to change the versioning strategy.
8. Delete the changelog of this repo.
9. Start adding projects to [`packages/*`](/packages)
