---
title: Router
---

# Router

<a href="https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/router.ts#L77" target="_blank">View Source</a>

## Summary

A router maps incoming requests to request handlers and middleware.

## Signature

```ts
interface Router {
  delete<pattern extends string>(
    route: pattern | RoutePattern<pattern> | Route<"DELETE" | "ANY", pattern>,
    action: Action<"DELETE", pattern>,
  ): void;
  fetch(input: string | Request | URL, init: RequestInit): Promise<Response>;
  get<pattern extends string>(
    route: pattern | RoutePattern<pattern> | Route<"GET" | "ANY", pattern>,
    action: Action<"GET", pattern>,
  ): void;
  head<pattern extends string>(
    route: pattern | RoutePattern<pattern> | Route<"HEAD" | "ANY", pattern>,
    action: Action<"HEAD", pattern>,
  ): void;
  map<target extends MapTarget>(
    target: target,
    handler: MapHandler<target>,
  ): void;
  options<pattern extends string>(
    route: pattern | RoutePattern<pattern> | Route<"OPTIONS" | "ANY", pattern>,
    action: Action<"OPTIONS", pattern>,
  ): void;
  patch<pattern extends string>(
    route: pattern | RoutePattern<pattern> | Route<"PATCH" | "ANY", pattern>,
    action: Action<"PATCH", pattern>,
  ): void;
  post<pattern extends string>(
    route: pattern | RoutePattern<pattern> | Route<"POST" | "ANY", pattern>,
    action: Action<"POST", pattern>,
  ): void;
  put<pattern extends string>(
    route: pattern | RoutePattern<pattern> | Route<"PUT" | "ANY", pattern>,
    action: Action<"PUT", pattern>,
  ): void;
  route<method extends RequestMethod | "ANY", pattern extends string>(
    method: method,
    pattern: pattern | RoutePattern<pattern> | Route<"ANY" | method, pattern>,
    action: Action<method, pattern>,
  ): void;
}

```

## Methods

### delete<pattern extends string>(route: pattern | RoutePattern<pattern> | Route<"DELETE" | "ANY", pattern>, action: Action<"DELETE", pattern>): void

Map a `DELETE` route/pattern to an action.

#### route

The route/pattern to match

#### action

The action to invoke when the route matches

### fetch(input: string | Request | URL, init: RequestInit): Promise<Response>

Fetch a response from the router.

#### input

The request input to fetch

#### init

The request init options

### get<pattern extends string>(route: pattern | RoutePattern<pattern> | Route<"GET" | "ANY", pattern>, action: Action<"GET", pattern>): void

Map a `GET` route/pattern to an action.

#### route

The route/pattern to match

#### action

The action to invoke when the route matches

### head<pattern extends string>(route: pattern | RoutePattern<pattern> | Route<"HEAD" | "ANY", pattern>, action: Action<"HEAD", pattern>): void

Map a `HEAD` route/pattern to an action.

#### route

The route/pattern to match

#### action

The action to invoke when the route matches

### map<target extends MapTarget>(target: target, handler: MapHandler<target>): void

Map a route or route map to an action or controller.

#### target

#### handler

The action or controller to invoke when the route(s) match

### options<pattern extends string>(route: pattern | RoutePattern<pattern> | Route<"OPTIONS" | "ANY", pattern>, action: Action<"OPTIONS", pattern>): void

Map an `OPTIONS` route/pattern to an action.

#### route

The route/pattern to match

#### action

The action to invoke when the route matches

### patch<pattern extends string>(route: pattern | RoutePattern<pattern> | Route<"PATCH" | "ANY", pattern>, action: Action<"PATCH", pattern>): void

Map a `PATCH` route/pattern to an action.

#### route

The route/pattern to match

#### action

The action to invoke when the route matches

### post<pattern extends string>(route: pattern | RoutePattern<pattern> | Route<"POST" | "ANY", pattern>, action: Action<"POST", pattern>): void

Map a `POST` route/pattern to an action.

#### route

The route/pattern to match

#### action

The action to invoke when the route matches

### put<pattern extends string>(route: pattern | RoutePattern<pattern> | Route<"PUT" | "ANY", pattern>, action: Action<"PUT", pattern>): void

Map a `PUT` route/pattern to an action.

#### route

The route/pattern to match

#### action

The action to invoke when the route matches

### route<method extends RequestMethod | "ANY", pattern extends string>(method: method, pattern: pattern | RoutePattern<pattern> | Route<"ANY" | method, pattern>, action: Action<method, pattern>): void

Add a route to the router.

#### method

#### pattern

#### action

The action to invoke when the route matches