---
title: describe
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L113
---

# describe

## Summary

Groups related tests into a named suite. Suites can be nested and will be displayed
as such in reporter output. Lifecycle hooks registered inside
a `describe` block apply only to tests within that block.

## Signature

```ts
const describe: (name: string, fn: () => void) => void;

const describe: (name: string, meta: SuiteMeta, fn: () => void) => void;

```

## Example

```ts
describe('auth', () => {
  it('logs in', async () => { ... })
})

// Modifiers
describe.skip('skipped suite', () => { ... })
describe.only('focused suite', () => { ... })
describe.todo('planned suite')
```

## Parameters

### `name`

The suite name shown in reporter output.

### `fn`

A function that registers the tests and lifecycle hooks in this suite.

### `meta`

Suite metadata such as `skip` or `only`.