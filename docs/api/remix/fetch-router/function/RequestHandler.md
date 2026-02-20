---
title: RequestHandler
---

# RequestHandler

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/controller.ts#L72" target="_blank">View Source</a>

## Summary

## Signature

```ts
interface RequestHandler {
  (context: RequestContext<method, params>): Response | Promise<Response>;
}

```

## Params

### context

The request context

## Returns

The response