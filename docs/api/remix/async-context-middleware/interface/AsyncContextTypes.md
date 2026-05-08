---
title: AsyncContextTypes
source: https://github.com/remix-run/remix/blob/main/packages/async-context-middleware/src/lib/async-context.ts#L20
---

# AsyncContextTypes

## Summary

Module-augmentation hook for narrowing [`AsyncRequestContext`](/api/remix/async-context-middleware/type/AsyncRequestContext/) to the
specific `RequestContext` shape your app installs into the
[`asyncContext`](/api/remix/async-context-middleware/function/asyncContext/) middleware. Augment with a `requestContext` property in
your project's types entry to opt in.

## Signature

```ts
interface AsyncContextTypes
```