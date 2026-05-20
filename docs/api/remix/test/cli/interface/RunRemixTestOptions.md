---
title: RunRemixTestOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/test/src/cli.ts#L29
---

# RunRemixTestOptions

## Summary

Options accepted by [`runRemixTest`](/api/remix/test/cli/function/runRemixTest/).

## Signature

```ts
interface RunRemixTestOptions {
  argv?: string[];
  cwd?: string;
}

```

## Properties

### `argv`

Argument vector to parse. When omitted, `process.argv.slice(2)` is used
so the regular CLI flags work transparently.

### `cwd`

Working directory the runner resolves config and test files against
(default `process.cwd()`).