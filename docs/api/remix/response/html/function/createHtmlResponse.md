---
title: createHtmlResponse
---

# createHtmlResponse

## Summary

Creates an HTML [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
that ensures the response has a valid DOCTYPE and appropriate `Content-Type` header.

## Signature

```ts
function createHtmlResponse(body: HtmlBody, init: ResponseInit): Response;

```

## Parameters

### `body`

The body of the response

### `init`

The `ResponseInit` object for the response

## Returns

A `Response` object with a HTML body and the appropriate `Content-Type` header