---
title: fail
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L684
---

# fail

## Summary

Creates a lifecycle/validation failure result with one or more issues.

## Signature

```ts
function fail(message: string, path: (string | number)[]): ValidationFailure;

function fail(issues: readonly ValidationIssue[]): ValidationFailure;

```

## Example

```ts
import { column as c, fail, table } from 'remix/data-table'

let users = table({
  name: 'users',
  columns: {
    id: c.integer(),
    email: c.varchar(255),
  },
  validate({ value }) {
    if (!value.email) {
      // Fail with a single issue message and optional path
      return fail('Email is required', ['email'])

      // Or fail with multiple issues at once
      return fail([
        { message: 'Id is required', path: ['id'] },
        { message: 'Email is required', path: ['email'] },
      ])
    }

    return { value }
  },
})
```

## Params

### `issues`

An array of issues.

### `message`

A single issue message.

### `path`

Optional issue path.