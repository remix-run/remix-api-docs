---
title: transformComponentsForServer
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/ui-hmr/src/lib/transform.ts#L261
---

# transformComponentsForServer

## Summary

Rewrites a server Remix UI module so existing component wrappers call the latest implementation.

The transform instruments supported component and client-entry exports and registers their
implementations under `moduleUrl`. If parsing fails, no supported exports are found, or the
module cannot be updated safely as a whole, the source is returned unchanged with
`transformed: false`.

## Signature

```ts
function transformComponentsForServer(
  source: string,
  options: ServerComponentsHmrTransformOptions,
): ComponentsHmrTransformResult

```

## Parameters

### `source`

Component module source code.

### `options`

Server transform options.

## Returns

Rewritten source, discovered component names, and an optional source map.