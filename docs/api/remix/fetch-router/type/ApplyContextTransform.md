---
title: ApplyContextTransform
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L26
---

# ApplyContextTransform

## Summary

Applies a middleware context transform to a request-context type.

## Signature

```ts
type ApplyContextTransform<currentContext, transform> =
  transform extends ContextEntries
    ? currentContext extends RequestContext<
        infer params extends Record<string, any>,
        infer entries extends ContextEntries
      >
      ? RequestContext<params, [...entries, ...transform]>
      : currentContext
    : transform extends (context: inputContext) => output
      ? output extends RequestContext<any, any>
        ? output
        : currentContext
      : currentContext;

```