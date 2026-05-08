---
title: FakeTimers
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/fake-timers.ts#L21
---

# FakeTimers

## Summary

Handle returned by `mock.timers.enable()` for driving fake timers during a
test. While enabled, `setTimeout`, `setInterval`, `clearTimeout`,
`clearInterval`, and `Date.now` use the fake clock instead of the real one;
timers fire only when the test calls `advance` (or `advanceAsync`).

## Signature

```ts
interface FakeTimers {
  advance(ms: number): void;
  advanceAsync(ms: number): Promise<void>;
  restore(): void;
}

```

## Methods

### `advance(ms: number): void`

Advance the fake clock by `ms` milliseconds, synchronously firing every
timer whose deadline is reached during the advance.

#### Parameters

##### `ms`

Number of milliseconds to advance.

### `advanceAsync(ms: number): Promise<void>`

Like `advance`, but yields to microtasks between each timer firing so
Promise continuations (and any timers they schedule) can settle before
the next firing is processed. Use this when a callback awaits work that
itself depends on the fake clock.

#### Parameters

##### `ms`

Number of milliseconds to advance.

### `restore(): void`

Restore the original timer functions and the real clock. Called
automatically after the test finishes; may also be called early to
disable fake timers mid-test.

