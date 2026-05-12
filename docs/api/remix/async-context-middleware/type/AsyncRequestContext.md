---
title: AsyncRequestContext
source: https://github.com/remix-run/remix/blob/main/packages/async-context-middleware/src/lib/async-context.ts#L17
---

# AsyncRequestContext

## Signature

```ts
type AsyncRequestContext = RouterTypes extends {
  context: infer context extends RequestContext<any, any>;
}
  ? RequestContextWithAnyParams<context>
  : RequestContext<AnyParams>;

```