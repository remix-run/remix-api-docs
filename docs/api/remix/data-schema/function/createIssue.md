---
title: createIssue
---

# createIssue

<a href="https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L289" target="_blank">View Source</a>

## Summary

Creates a Standard Schema issue object.

## Signature

```ts
function createIssue(
  message: string,
  path: readonly (PropertyKey | PathSegment)[] | undefined,
): Issue;

```

## Params

### message

Human-readable validation message.

### path

Optional issue path within the input value.

## Returns

A Standard Schema issue.