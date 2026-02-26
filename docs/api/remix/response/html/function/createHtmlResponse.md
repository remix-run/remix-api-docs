---
title: createHtmlResponse
---

# createHtmlResponse

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/response/src/lib/html.ts#L15" target="_blank">View Source</a>

## Summary

Creates an HTML [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
that ensures the response has a valid DOCTYPE and appropriate `Content-Type` header.

## Signature

```ts
function createHtmlResponse(body: HtmlBody, init: ResponseInit): Response;

```

## Params

### body

The body of the response

### init

The `ResponseInit` object for the response

## Returns

A `Response` object with a HTML body and the appropriate `Content-Type` header