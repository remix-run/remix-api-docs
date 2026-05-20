---
title: createAssetServer
---

# createAssetServer

## Summary

Create an asset server instance

Compiles TypeScript/JavaScript scripts and CSS styles on demand with optional
source-based URL fingerprinting, caching, and configurable file mapping.

## Signature

```ts
function createAssetServer<
  transforms extends Readonly<
    Record<
      string,
      AssetRequestTransform<string, AssetRequestTransformParamMode>
    >
  >,
>(options: AssetServerCreateOptions<transforms>): AssetServer<transforms>;

```

## Example

```ts
let assetServer = createAssetServer({
  basePath: "/assets",
  fileMap: {
    "/app/*path": "app/*path",
  },
  allow: ["app/**"],
});

route("/assets/*path", ({ request }) => assetServer.fetch(request));

```

## Parameters

### `options`

Server configuration

## Returns

A [`AssetServer`](/api/remix/assets/interface/AssetServer/) with `fetch()`, `getHref()`, and `getPreloads()` methods