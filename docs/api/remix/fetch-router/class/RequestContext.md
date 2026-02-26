---
title: RequestContext
---

# RequestContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-router/src/lib/request-context.ts#L15" target="_blank">View Source</a>

## Summary

A context object that contains information about the current request. Every request
handler or middleware in the lifecycle of a request receives the same context object.

## Constructor

### request

The incoming request

## Properties

### headers

The headers of the request.

### method

The request method. This may differ from `request.method` when using the `methodOverride`
middleware, which allows HTML forms to simulate RESTful API request methods like `PUT` and
`DELETE` using a hidden input field.

### params

Params that were parsed from the URL.

### request

The original request that was dispatched to the router.

Note: Various properties of the original request may not be available or may have been
modified by middleware. For example, the request's body may already have been consumed by
the `formData` middleware (available as `context.formData`), or its method may have been
overridden by the `methodOverride` middleware (available as `context.method`). You should
always default to using properties of the `context` object instead of the original request.
However, the original request is made available in case you need it for some edge case.

### storage

Shared application-specific storage.

### url

The URL that was matched by the route.

### files

A map of files that were uploaded in the request.

Note: For requests without a body (e.g. `GET` or `HEAD`), this map will be empty.

### formData

Parsed [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) from the
request body.

Note: This is only available for requests with a body (not `GET` or `HEAD`).

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

### router

The router handling this request.

### session

The current session.

### sessionStarted

Whether the session has been started.