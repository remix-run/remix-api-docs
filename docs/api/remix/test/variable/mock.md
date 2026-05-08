---
title: mock
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/mock.ts#L76
---

# mock

## Summary

Utilities for creating mock functions and method spies. Mirrors the names
on Node.js's built-in `MockTracker` from `node:test`.

## Signature

```ts
const mock: {
  fn: (impl?: T) => MockFunction<T>;
  method: (
    obj: T,
    method: K,
    impl?: T[K] extends (args: any[]) => any
      ? (args: Parameters<any[any]>) => any
      : never,
  ) => MockFunction;
};

```

## Example

```ts
// Standalone mock
const fn = mock.fn((x: number) => x * 2);
fn(3);
assert.equal(fn.mock.calls[0].result, 6);

// Mock an existing method
const spy = mock.method(console, "log");
console.log("hello");
assert.equal(spy.mock.calls.length, 1);
spy.mock.restore?.();

```