---
title: fail
---

# fail

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-schema/src/lib/schema.ts#L326" target="_blank">View Source</a>

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

## Params

### message

Human-readable validation message.

### path

Optional issue path within the input value.

### options

Optional issue metadata used for localized error mapping.

## Returns

A failure result containing one issue.