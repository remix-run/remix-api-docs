---
title: FakeTimers
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/fake-timers.ts#L3
---

# FakeTimers

## Signature

```ts
interface FakeTimers {
  advance(ms: number): void;
  advanceAsync(ms: number): Promise<void>;
  restore(): void;
}

```

## Methods

### advance(ms: number): void

#### `ms`

### advanceAsync(ms: number): Promise<void>

Like `advance`, but yields to microtasks between each timer firing so
Promise continuations (and any timers they schedule) can settle before
the next firing is processed. Use this when a callback awaits work that
itself depends on the fake clock.

#### `ms`

### restore(): void