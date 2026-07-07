---
title: RoutePatternCapture
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/route-pattern.ts#L57
---

# RoutePatternCapture

## Summary

A variable (`:name`) or wildcard (`*name`) declared in a [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/).

## Signature

```ts
interface RoutePatternCapture {
  name: string;
  optional: boolean;
  part: "hostname" | "pathname";
  type: ":" | "*";
}

```

## Properties

### `name`

Capture name, or `*` for an unnamed wildcard.

### `optional`

Whether the capture is inside an optional group.

### `part`

The URL part that contains the capture.

### `type`

The capture token kind: `:` for variables or `*` for wildcards.