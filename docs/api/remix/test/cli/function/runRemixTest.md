---
title: runRemixTest
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/test/src/cli.ts#L67
---

# runRemixTest

## Summary

Runs Remix tests using structured invocation options. The runner discovers test files and runs
them through the server, browser, and E2E pipelines configured by the caller. In watch mode, the
promise resolves when the user terminates the runner; otherwise, it resolves once the run
finishes.

## Signature

```ts
function runRemixTest(options: RunRemixTestOptions): Promise<number>

```

## Example

```ts
import { runRemixTest } from 'remix/test/cli'

let exitCode = await runRemixTest({
  concurrency: 1,
  cwd: process.cwd(),
  type: ['server'],
})

```

## Parameters

### `options`

Configuration overrides and invocation paths.

## Returns

The exit code the host process should use (`0` on success, `1` on test failure or an
         unrecoverable error).