---
title: runRemixTest
source: https://github.com/remix-run/remix/blob/main/packages/test/src/cli.ts#L70
---

# runRemixTest

## Summary

Programmatic entry point for the `remix-test` CLI. Loads the user's
RemixTestConfig, discovers test files, and runs them through the
server/browser/E2E pipelines configured by the project. In watch mode the
promise resolves when the user terminates the runner; otherwise it resolves
once the run finishes.

## Signature

```ts
function runRemixTest(options: RunRemixTestOptions): Promise<number>;

```

## Example

```ts
import { runRemixTest } from "@remix-run/test/cli";

let exitCode = await runRemixTest();
process.exit(exitCode);

```

## Parameters

### `options`

Optional overrides for the parsed argv and working directory.

## Returns

The exit code the host process should use (`0` on success, `1` on
         test failure or unrecoverable error).