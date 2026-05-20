---
title: createRedirectResponse
---

# createRedirectResponse

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

## Parameters

### `location`

The location to redirect to

### `init`

The `ResponseInit` object for the response, or a status code

## Returns

A `Response` object with a redirect header