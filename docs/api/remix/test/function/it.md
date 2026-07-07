---
title: it
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/framework.ts#L192
---

# it

## Summary

Defines a single test case. The optional `TestContext` argument `t` provides
mock helpers and per-test cleanup registration.

## Signature

```ts
const it: (name: string, fn: TestFn) => void;

const it: (name: string, meta: TestMeta, fn: TestFn) => void;

```

## Example

```ts
it('returns 200 for the home route', async () => {
  const res = await router.fetch('/')
  assert.equal(res.status, 200)
})

// Modifiers
it.skip('not ready yet', () => { ... })
it.skip('not ready yet', 'blocked by missing fixture')
it.only('focused test', () => { ... })
it.todo('coming soon')
it.todo('coming soon', 'needs retry coverage')
it('fails if it takes too long', { timeout: 5_000 }, async (t) => {
  await fetch('/api/data', { signal: t.signal })
})
```

## Parameters

### `name`

The test name shown in reporter output.

### `fn`

The test body, receiving a [`TestContext`](/api/remix/test/interface/TestContext/) as its first argument.

### `meta`

Test metadata such as `skip`, `only`, `todo`, `timeout`, or `signal`.