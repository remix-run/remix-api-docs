---
title: Expectation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/assert/src/lib/expect.ts#L172
---

# Expectation

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