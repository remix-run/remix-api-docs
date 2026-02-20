---
title: createRedirectResponse
---

# createRedirectResponse

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/response/src/lib/redirect.ts#L9" target="_blank">View Source</a>

## Summary

Creates a redirect [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).

## Aliases

redirect

## Signature

```ts
function createRedirectResponse(
  location: string | URL,
  init: number | ResponseInit,
): Response;

```

## Params

### location

The location to redirect to

### init

The `ResponseInit` object for the response, or a status code

## Returns

A `Response` object with a redirect header