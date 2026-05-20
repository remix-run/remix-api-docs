---
title: MapHandler
---

# MapHandler

## Summary

Infer the correct handler type (Action or Controller) based on the map target.

## Signature

```ts
type MapHandler<target, context> = target extends string
  ? Action<target, context>
  : target extends RoutePattern<infer pattern extends string>
    ? Action<RoutePattern<pattern>, context>
    : target extends Route<any, any>
      ? Action<target, context>
      : target extends RouteMap
        ? Controller<target, context>
        : never;

```