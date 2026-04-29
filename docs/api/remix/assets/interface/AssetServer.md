---
title: AssetServer
---

# AssetServer

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/assets/src/lib/asset-server.ts#L116" target="_blank">View Source</a>

## Signature

```ts
interface AssetServer {
  close(): Promise<void>;
  fetch(request: Request): Promise<Response | null>;
  getHref(filePath: string): Promise<string>;
  getPreloads(filePath: string | readonly string[]): Promise<string[]>;
}

```

## Methods

### close(): Promise<void>

Closes any watcher resources owned by this server instance.

### fetch(request: Request): Promise<Response | null>

Serves a script or style request. Returns `Response | null` — null means the request
was not handled by this server, letting the router fall through to a 404.

#### request

### getHref(filePath: string): Promise<string>

Returns the request href for a served asset file.

#### filePath

### getPreloads(filePath: string | readonly string[]): Promise<string[]>

Returns preload URLs for one or more served asset files, ordered shallowest-first.

#### filePath