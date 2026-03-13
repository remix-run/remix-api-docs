---
title: fail
---

# fail

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L684" target="_blank">View Source</a>

## Summary

## Signature

```ts
function fail(message: string, path: (string | number)[]): ValidationFailure;

function fail(issues: readonly ValidationIssue[]): ValidationFailure;

```

## Params

### issues

An array of issues.

### message

A single issue message.

### path

Optional issue path.