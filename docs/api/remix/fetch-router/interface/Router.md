---
title: Router
---

# Router

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/router.ts#L202" target="_blank">View Source</a>

## Summary

A router maps incoming requests to request handlers.

## Signature

```ts
interface Router<context> {
  delete: VerbMethod<"DELETE", context>;
  get: VerbMethod<"GET", context>;
  head: VerbMethod<"HEAD", context>;
  map: MapMethod<context>;
  options: VerbMethod<"OPTIONS", context>;
  patch: VerbMethod<"PATCH", context>;
  post: VerbMethod<"POST", context>;
  put: VerbMethod<"PUT", context>;
  route: RouteMethod<context>;
  fetch(input: string | URL | Request, init: RequestInit): Promise<Response>;
}

```

## Properties

### delete

Shorthand for registering a `DELETE` route.

### get

Shorthand for registering a `GET` route.

### head

Shorthand for registering a `HEAD` route.

### map

Maps either a single route target to an action or a route map to a controller.

### options

Shorthand for registering an `OPTIONS` route.

### patch

Shorthand for registering a `PATCH` route.

### post

Shorthand for registering a `POST` route.

### put

Shorthand for registering a `PUT` route.

### route

Registers a handler for a specific request method and route target.

Accepts either a plain request handler or an action object with optional inline middleware.

## Methods

### fetch(input: string | URL | Request, init: RequestInit): Promise<Response>

Fetch a response from the router.

#### input

The request input to fetch

#### init

The request init options