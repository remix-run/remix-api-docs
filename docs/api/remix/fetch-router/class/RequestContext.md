---
title: RequestContext
---

# RequestContext

<a href="https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L36" target="_blank">View Source</a>

## Summary

A context object that contains information about the current request. Every request
handler or middleware in the lifecycle of a request receives the same context object.

## Signature

```ts
class RequestContext<params> {
  constructor(request: Request): RequestContext<params>;

  // Properties
  headers: Headers;
  method: RequestMethod;
  params: params;
  request: Request;
  url: URL;

  // Accessors
  get router(): Router;

  // Methods
  get<key extends object>(key: key): ContextValue<key>;
  has<key extends object>(key: key): boolean;
  set<key extends object>(key: key, value: ContextValue<key>): void;
}

```

## Constructor Params

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
modified by middleware. For example, the request's body may already have been consumed by the
`formData` middleware (available as `context.get(FormData)`), or its method may have been
overridden by the `methodOverride` middleware (available as `context.method`). You should
default to using properties of the `context` object instead of the original request.
However, the original request is made available in case you need it for some edge case.

### url

The URL that was matched by the route.

## Accessors

### router

The router handling this request.

## Methods

### get<key extends object>(key: key): ContextValue<key>

Get a value from request context.

#### key

### has<key extends object>(key: key): boolean

Check whether a value exists in request context.

#### key

### set<key extends object>(key: key, value: ContextValue<key>): void

Set a value in request context.

#### key

#### value

The value to write