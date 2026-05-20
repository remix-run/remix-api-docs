---
title: AsyncRequestContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/async-context-middleware/src/lib/async-context.ts#L17
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