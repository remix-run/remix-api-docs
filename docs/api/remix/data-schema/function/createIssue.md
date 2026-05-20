---
title: createIssue
---

# createIssue

## Summary

Creates a Standard Schema issue object.

## Signature

```ts
function createIssue(
  message: string,
  path: readonly (PropertyKey | PathSegment)[] | undefined,
): Issue;

```

## Parameters

### `message`

Human-readable validation message.

### `path`

Optional issue path within the input value.

## Returns

A Standard Schema issue.