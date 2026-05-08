---
title: AsyncRequestContext
source: https://github.com/remix-run/remix/blob/main/packages/async-context-middleware/src/lib/async-context.ts#L28
---

# AsyncRequestContext

## Summary

Resolved type for the request context returned by [`getContext`](/api/remix/async-context-middleware/function/getContext/). By
default this is the framework's generic `RequestContext`; augment
[`AsyncContextTypes`](/api/remix/async-context-middleware/interface/AsyncContextTypes/) with a `requestContext` field in your project to
narrow it to your app's specific context shape.

## Signature

```ts
type AsyncRequestContext = AsyncContextTypes extends {
  requestContext: infer context extends RequestContext<any, any>;
}
  ? context
  : RequestContext;

```