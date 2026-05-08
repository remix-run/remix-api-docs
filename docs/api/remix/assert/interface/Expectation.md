---
title: Expectation
source: https://github.com/remix-run/remix/blob/main/packages/assert/src/lib/expect.ts#L177
---

# Expectation

## Summary

Object returned by [`expect`](/api/remix/assert/function/expect/). Exposes the synchronous matcher set
directly on the object, plus the negation and async-resolution gateways
needed for full jest/vitest-style assertions.

## Signature

```ts
interface Expectation {
  not: Matchers;
  rejects: AsyncMatchers;
  resolves: AsyncMatchers;
  toBe(expected: unknown): void;
  toBeCloseTo(n: number, precision: number): void;
  toBeDefined(): void;
  toBeGreaterThan(n: number): void;
  toBeGreaterThanOrEqual(n: number): void;
  toBeInstanceOf(ctor: Function): void;
  toBeLessThan(n: number): void;
  toBeLessThanOrEqual(n: number): void;
  toBeNull(): void;
  toBeTruthy(): void;
  toBeUndefined(): void;
  toContain(item: unknown): void;
  toEqual(expected: unknown): void;
  toHaveBeenCalled(): void;
  toHaveBeenCalledTimes(n: number): void;
  toHaveBeenCalledWith(args: unknown[]): void;
  toHaveBeenNthCalledWith(nth: number, args: unknown[]): void;
  toHaveLength(n: number): void;
  toHaveProperty(key: string, value: unknown): void;
  toMatch(re: string | RegExp): void;
  toMatchObject(expected: object): void;
  toThrow(expected: unknown): void;
}

```

## Properties

### `not`

Negates the next matcher — `expect(x).not.toBe(1)` passes when `x !== 1`.

### `rejects`

Awaits the received promise expecting it to reject, then runs the next
matcher against the rejection value. Use with `await`.

### `resolves`

Awaits the received promise expecting it to resolve, then runs the next
matcher against the resolved value. Use with `await`.