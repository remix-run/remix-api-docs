---
title: ErrorMap
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L40
---

# ErrorMap

## Summary

Function used to customize issue messages.

Return `undefined` to use the default message.

## Signature

```ts
type ErrorMap = (context: ErrorMapContext) => string | undefined;

```