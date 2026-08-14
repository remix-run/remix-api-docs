---
title: runRemixDb
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/data-table/src/cli.ts#L60
---

# runRemixDb

## Summary

Runs a data-table database command from structured invocation options.

## Signature

```ts
function runRemixDb(options: RunRemixDbOptions): Promise<number>

```

## Parameters

### `options`

Database command and application database values.

## Returns

The exit code the host CLI should use. Always resolves `0`;
command failures throw.