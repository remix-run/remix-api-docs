---
title: AsyncRequestContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/async-context-middleware/src/lib/async-context.ts#L7
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