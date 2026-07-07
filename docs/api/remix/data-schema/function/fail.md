---
title: fail
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L326
---

# fail

## Summary

Creates a Standard Schema failure result with a single issue.

## Signature

```ts
function fail(
  message: string,
  path: readonly (PropertyKey | PathSegment)[] | undefined,
  options: {
    code?: string;
    input?: unknown;
    parseOptions?: ParseOptions;
    values?: Record<string, unknown>;
  },
): FailureResult;

```

## Parameters

### `message`

Human-readable validation message.

### `path`

Optional issue path within the input value.

### `options`

Optional issue metadata used for localized error mapping.

## Returns

A failure result containing one issue.