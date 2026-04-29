---
title: beforeEach
---

# beforeEach

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/test/src/lib/framework.ts#L206" target="_blank">View Source</a>

## Summary

Registers a hook that runs before **each** test in the current suite (or
globally if called outside a `describe`). Multiple calls are chained in
registration order.

## Signature

```ts
function beforeEach(fn: () => void | Promise<void>): void;

```

## Params

### fn

The setup function to run before each test.