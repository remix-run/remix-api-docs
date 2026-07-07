---
title: RemixTestConfig
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/config.ts#L188
---

# RemixTestConfig

## Summary

User-facing configuration for the `remix-test` CLI. Every field is
optional — unset fields fall back to runner defaults. The same shape can
be exported from a config file (see `--config`) or passed inline to
runRemixTest via the corresponding flags.

## Signature

```ts
interface RemixTestConfig {
  browser?: { echo?: boolean; open?: boolean };
  concurrency?: string | number;
  coverage?:
    | boolean
    | {
        branches?: string | number;
        dir?: string;
        exclude?: string | string[];
        functions?: string | number;
        include?: string | string[];
        lines?: string | number;
        statements?: string | number;
      };
  glob?: {
    browser?: string | string[];
    e2e?: string | string[];
    exclude?: string | string[];
    test?: string | string[];
  };
  playwrightConfig?: string | PlaywrightTestConfig;
  pool?: RemixTestPool;
  project?: string | string[];
  reporter?: string;
  setup?: string;
  type?: string | string[];
  watch?: boolean;
}

```

## Properties

### `browser`

Options for controlling the playwright browser
 - `browser.echo`: Echo browser console output to stdout (--browser.echo)
 - `browser.open`: Open browser window and keep open after test finish (--browser.open)

### `concurrency`

Max number of concurrent test workers (--concurrency)

### `coverage`

Coverage configuration. `true` enables with defaults; an object enables with settings;
`false` disables. CLI `--coverage` flag overrides the boolean aspect.

### `glob`

Glob patterns to identify test files. Each field accepts a single pattern
or an array of patterns; arrays are unioned during discovery.
 - `glob.test`: Glob pattern(s) for all test files (--glob.test)
 - `glob.browser`: Glob pattern(s) for the subset of browser test files (--glob.browser)
 - `glob.e2e`: Glob pattern(s) for the subset of e2e test files (--glob.e2e)
 - `glob.exclude`: Glob pattern(s) for paths to exclude from discovery (--glob.exclude)

### `playwrightConfig`

Playwright configuration — either a path to a playwright config file or an inline
PlaywrightTestConfig object. CLI `--playwrightConfig` only accepts a file path.

### `pool`

Pool used to run server and E2E test files. Forked child processes are the default,
but worker threads are available for projects that prefer the previous behavior.

### `project`

Filter tests to specific playwright project(s) (--project). Accepts a single
project name or an array of names; `--project` may be repeated on the CLI.

### `reporter`

Test reporter (--reporter)

### `setup`

Path to a module that exports `globalSetup` and/or `globalTeardown` functions,
called once before and after the test run respectively. (--setup)

### `type`

Test type(s) to run (--type). Accepts a single type or an array of types;
`--type` may be repeated on the CLI. Valid values: "server", "browser", "e2e".

### `watch`

Watch mode — re-run tests on file changes (--watch)