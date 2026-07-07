---
title: RoutePatternJSON
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/route-pattern.ts#L39
---

# RoutePatternJSON

## Summary

Serialized URL pattern parts returned by the [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) `toJSON` method.

## Signature

```ts
interface RoutePatternJSON {
  hostname: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
}

```

## Properties

### `hostname`

Serialized hostname pattern, or an empty string when omitted.

### `pathname`

Serialized pathname pattern without a leading `/`.

### `port`

Serialized port constraint, or an empty string when omitted.

### `protocol`

Serialized protocol constraint, or an empty string when omitted.

### `search`

Serialized search constraint string without a leading `?`.