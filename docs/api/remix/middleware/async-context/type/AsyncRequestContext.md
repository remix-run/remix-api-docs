---
title: AsyncRequestContext
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