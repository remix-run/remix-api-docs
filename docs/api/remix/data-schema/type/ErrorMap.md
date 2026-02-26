---
title: ErrorMap
---

# ErrorMap

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L40" target="_blank">View Source</a>

## Summary

Function used to customize issue messages.

Return `undefined` to use the default message.

## Signature

```ts
type ErrorMap = (context: ErrorMapContext) => string | undefined;

```