---
title: RemixTestConfig
---

# RemixTestConfig

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/test/src/lib/config.ts#L164" target="_blank">View Source</a>

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
        exclude?: string[];
        functions?: string | number;
        include?: string[];
        lines?: string | number;
        statements?: string | number;
      };
  glob?: { browser?: string; e2e?: string; exclude?: string; test?: string };
  playwrightConfig?: string | PlaywrightTestConfig;
  project?: string;
  reporter?: string;
  setup?: string;
  type?: string;
  watch?: boolean;
}

```

## Properties

### browser

Options for controlling the playwright browser
 - `browser.echo`: Echo browser console output to stdout (--browser.echo)
 - `browser.open`: Open browser window and keep open after test finish (--browser.open)

### concurrency

Max number of concurrent test workers (--concurrency)

### coverage

Coverage configuration. `true` enables with defaults; an object enables with settings;
`false` disables. CLI `--coverage` flag overrides the boolean aspect.

### glob

Glob patterns to identify test files
 - `glob.test`: Glob pattern for all test files (--glob.test)
 - `glob.browser`: Glob pattern for the subset of browser test files (--glob.browser)
 - `glob.e2e`: Glob pattern for the subset of e2e test files (--glob.e2e)
 - `glob.exclude`: Glob pattern for paths to exclude from discovery (--glob.exclude)

### playwrightConfig

Playwright configuration — either a path to a playwright config file or an inline
PlaywrightTestConfig object. CLI `--playwrightConfig` only accepts a file path.

### project

Filter tests to a specific playwright project or comma-separated list of projects (--project)

### reporter

Test reporter (--reporter)

### setup

Path to a module that exports `globalSetup` and/or `globalTeardown` functions,
called once before and after the test run respectively. (--setup)

### type

Comma-separated list of test types to run (--type)

### watch

Watch mode — re-run tests on file changes (--watch)