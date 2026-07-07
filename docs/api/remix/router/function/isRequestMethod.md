---
title: isRequestMethod
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-methods.ts#L26
---

# isRequestMethod

## Summary

Check if a string is one of the request methods supported by the router.

## Signature

```ts
function isRequestMethod(method: string): method is RequestMethod;

```

## Parameters

### `method`

The request method to check

## Returns

`true` if the method is supported by the router