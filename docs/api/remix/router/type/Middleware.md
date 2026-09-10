---
title: Middleware
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L70
---

# Middleware

## Summary

A special kind of request handler that either returns a response or passes control
to the next middleware or request handler in the chain.

## Signature

```ts
type Middleware<transform> = (
  context: RequestContext<any>,
  next: NextFunction,
) => Response | (Promise<Response> & { [contextTransform]?: transform })

```