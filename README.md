# Jest Circus environment template

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A template for creating custom Jest Circus environments.

## :spiral_notepad: Gist

If you'd rather not use this template, here is a [Gist](https://gist.github.com/ryparker/d3f5cc58913ba7e89b5c34eeabc7bfd9) with the main interface for creating a Jest environment.

## :rocket: Quick start

1. Clone

```shell
git clone https://github.com/ryparker/jest-circus-environment-template.git jest-circus-environment && cd jest-circus-environment
```

2. Install dependencies

```shell
yarn install
```

3. Transpile to JS

```shell
yarn build
```

## :wrench: Using the environment

You will will need to add the environment's path to the `testEnvironment` option in your `jest.config.js`. 

```JSON
{ 
  "testEnvironment": "<rootDir>/my-custom-environment.js",
  "testRunner": "jest-circus/runner"
}
```

See the [official Jest docs](https://jestjs.io/docs/en/configuration#testenvironment-string) for more details.


## Lifecycle events

Updated list available [here](https://github.com/facebook/jest/blob/master/packages/jest-types/src/Circus.ts)

**Bold** items are async test events
**_Italic_** items are synchronous test events

0. **_error_**
1. constructor
2. setup Fn
3. **setup**
4. **_add_hook_**
5. **_start_describe_definition_**
6. **_add_test_**
7. **_finish_describe_definition_**
8. **run_start** / **test_skip** / **test_todo**
9. **run_describe_start**
10. **test_start**
11. **hook_start**
12. **hook_success** / **hook_failure**
13. **test_fn_start**
14. **test_fn_success** / **test_fn_failure** / **error**
15. **test_done**
16. **run_describe_finish**
17. **run_finish**
18. **teardown**
19. teardown Fn

## Related Projects

Jest Reporter: [Template Project](https://github.com/ryparker/jest-reporter-template) | [Gist](https://gist.github.com/ryparker/188849eb0f78f53316ef99bf6a4467d5)
