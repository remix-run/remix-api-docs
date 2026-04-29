---
title: AsyncRequestContext
---

# AsyncRequestContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/async-context-middleware/src/lib/async-context.ts#L7" target="_blank">View Source</a>

## Signature

```ts
type AsyncRequestContext = AsyncContextTypes extends {
  requestContext: infer context extends RequestContext<any, any>;
}
  ? context
  : RequestContext;

```