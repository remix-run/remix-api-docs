---
title: afterAll
---

# afterAll

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/test/src/lib/framework.ts#L243" target="_blank">View Source</a>

## Summary

Registers a hook that runs once after **all** tests in the current suite (or
globally if called outside a `describe`). Multiple calls are chained in
reverse registration order.

## Signature

```ts
function afterAll(fn: () => void | Promise<void>): void;

```

## Params

### fn

The teardown function to run once after all tests in the suite.