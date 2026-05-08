---
title: runRemix
source: https://github.com/remix-run/remix/blob/main/packages/cli/src/lib/cli.ts#L42
---

# runRemix

## Summary

Entry point for the `remix` CLI. Parses `argv`, dispatches to the matching
subcommand (`new`, `doctor`, `routes`, `test`, `version`, `completion`,
`help`), and resolves with the exit code the process should use.

## Signature

```ts
function runRemix(argv: string[], options: RunRemixOptions): Promise<number>;

```

## Example

```ts
import { runRemix } from "@remix-run/cli";

let exitCode = await runRemix(process.argv.slice(2));
process.exit(exitCode);

```

## Parameters

### `argv`

Argument vector to parse, excluding the node and script paths
            (default `process.argv.slice(2)`).

### `options`

Overrides for CLI context resolution.

## Returns

The numeric exit code (`0` on success, non-zero on failure).