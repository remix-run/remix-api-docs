---
title: expect
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/assert/src/lib/expect.ts#L586
---

# expect

## Summary

jest/vitest-style expect API. Returns an object of matchers that throw
[`AssertionError`](/api/remix/assert/class/AssertionError/) on failure. Supports `.not` for negation and
`.rejects` / `.resolves` for asserting on promises.

Mock-aware matchers (`toHaveBeenCalled*`) read `received.mock.calls[i].arguments`,
which is the shape produced by `mock.fn()` from `@remix-run/test`.

## Signature

```ts
const expect: Expect;

```

## Example

```ts
expect(value).toBe(42);
expect(value).not.toBeNull();
expect(value).toEqual(expect.objectContaining({ success: true }));
await expect(fetch("/missing")).rejects.toThrow("Not found");
await expect(loadModule()).resolves.toBeUndefined();

```