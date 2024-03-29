# wasmio

[![GitHub Actions](https://github.com/wasmio/wasmio/workflows/CI/badge.svg)](https://github.com/wasmio/wasmio/actions/workflows/ci.yml)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/wasmio/wasmio.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wasmio/wasmio/context:javascript)
[![Codecov](https://img.shields.io/codecov/c/gh/wasmio/wasmio)](https://codecov.io/gh/wasmio/wasmio)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fwasmio%2Fwasmio%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![GitHub release](https://img.shields.io/github/release/wasmio/wasmio)](https://github.com/wasmio/wasmio/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/atlassian/changesets)

> WASM tool chains for Go, Rust, Node and so on

## Packages

This repository is a monorepo managed by [changesets][] what means we actually publish several packages to npm from same codebase, including:

| Package                                      | Description                                   | Version                                                                                                                                                                                                                        |
| -------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`@wasmio/go`](/packages/@wasmio/go)         | WASM tool chain for Go                        | [![npm](https://img.shields.io/npm/v/@wasmio/go.svg)](https://www.npmjs.com/package/@wasmio/go) [![View changelog](https://img.shields.io/badge/changelog-explore-brightgreen)](https://changelogs.xyz/@wasmio/go)             |
| [`@wasmio/tinygo`](/packages/@wasmio/tinygo) | WASM tool chain for TinyGo                    | [![npm](https://img.shields.io/npm/v/@wasmio/tinygo.svg)](https://www.npmjs.com/package/@wasmio/tinygo) [![View changelog](https://img.shields.io/badge/changelog-explore-brightgreen)](https://changelogs.xyz/@wasmio/tinygo) |
| [`wasmio`](/packages/wasmio)                 | WASM tool chains for Go, Rust, Node and so on | [![npm](https://img.shields.io/npm/v/wasmio.svg)](https://www.npmjs.com/package/wasmio) [![View changelog](https://img.shields.io/badge/changelog-explore-brightgreen)](https://changelogs.xyz/wasmio)                         |

## Sponsors

| 1stG                                                                                                                               | RxTS                                                                                                                               | UnTS                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

| 1stG                                                                                                                             | RxTS                                                                                                                             | UnTS                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[changesets]: https://GitHub.com/atlassian/changesets
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
