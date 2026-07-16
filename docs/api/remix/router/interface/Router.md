---
title: Router
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/router.ts#L235
---

# Router

## Summary

A router maps incoming requests to request handlers.

## Signature

```ts
interface Router<context> {
  [routeBuilderContext]?: context
  delete: VerbMethod<'DELETE', context>
  get: VerbMethod<'GET', context>
  head: VerbMethod<'HEAD', context>
  options: VerbMethod<'OPTIONS', context>
  patch: VerbMethod<'PATCH', context>
  post: VerbMethod<'POST', context>
  put: VerbMethod<'PUT', context>
  fetch(input: string | Request | URL, init: RequestInit): Promise<Response>
  map<
    target extends MapTarget,
    handlerContext extends AnyContext,
    middleware extends readonly AnyMiddleware[],
  >(
    target: target,
    handler: MapHandler<target, handlerContext, middleware> &
      ContextCompatibility<context, handlerContext, middleware>,
  ): void
  mount<pattern extends string>(
    prefix: pattern | RoutePattern<pattern>,
    installer: RouteInstaller<ContextWithParams<context, MatchParams<pattern>>>,
  ): void
  route<
    method extends RequestMethod | 'ANY',
    pattern extends string,
    actionContext extends AnyContext,
    middleware extends readonly AnyMiddleware[],
  >(
    method: method,
    pattern: RouteTarget<pattern, method>,
    action: Action<RouteTarget<pattern, method>, actionContext, middleware> &
      ContextCompatibility<context, actionContext, middleware>,
  ): void
}

```

## Properties

### `[routeBuilderContext]`

### `delete`

Shorthand for registering a `DELETE` route.

### `get`

Shorthand for registering a `GET` route.

### `head`

Shorthand for registering a `HEAD` route.

### `options`

Shorthand for registering an `OPTIONS` route.

### `patch`

Shorthand for registering a `PATCH` route.

### `post`

Shorthand for registering a `POST` route.

### `put`

Shorthand for registering a `PUT` route.

## Methods

### `fetch(input: string | Request | URL, init: RequestInit): Promise<Response>`

Fetch a response from the router.

#### Parameters

##### `input`

The request input to fetch

##### `init`

The request init options

### `map<target extends MapTarget, handlerContext extends AnyContext, middleware extends readonly AnyMiddleware[]>(target: target, handler: MapHandler<target, handlerContext, middleware> & ContextCompatibility<context, handlerContext, middleware>): void`

Maps either a single route target to an action or a route map to a controller.



### `mount<pattern extends string>(prefix: pattern | RoutePattern<pattern>, installer: RouteInstaller<ContextWithParams<context, MatchParams<pattern>>>): void`

Mounts a route installer at a route pattern prefix.



### `route<method extends RequestMethod | "ANY", pattern extends string, actionContext extends AnyContext, middleware extends readonly AnyMiddleware[]>(method: method, pattern: RouteTarget<pattern, method>, action: Action<RouteTarget<pattern, method>, actionContext, middleware> & ContextCompatibility<context, actionContext, middleware>): void`

Registers a handler for a specific request method and route target.

Accepts either a plain request handler or an action object with optional action middleware.

