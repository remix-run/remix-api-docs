---
title: ApplyContextTransform
---

# ApplyContextTransform

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/middleware.ts#L26" target="_blank">View Source</a>

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