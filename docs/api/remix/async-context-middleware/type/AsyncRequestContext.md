---
title: AsyncRequestContext
source: https://github.com/remix-run/remix/blob/main/packages/async-context-middleware/src/lib/async-context.ts#L7
---

# AsyncRequestContext

## Signature

```ts
type AsyncRequestContext = AsyncContextTypes extends {
  requestContext: infer context extends RequestContext<any, any>;
}
  ? context
  : RequestContext;

```