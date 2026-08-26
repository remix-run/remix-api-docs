---
title: AssetServerOptions
source: https://github.com/remix-run/remix/blob/main/packages/assets/src/lib/asset-server.ts#L179
---

# AssetServerOptions

## Summary

Options used to construct an [`AssetServer`](/api/remix/assets/interface/AssetServer/) via [`createAssetServer`](/api/remix/assets/function/createAssetServer/).

## Signature

```ts
interface AssetServerOptions<transforms> {
  allowFiles: readonly string[]
  allowPackages?: readonly string[]
  basePath: string
  denyFiles?: readonly string[]
  fileMap: Readonly<Record<string, string>>
  files?: AssetServerFilesOptions<transforms>
  fingerprint?: FingerprintOptions
  hmr?: BrowserHmrChannelFactory
  minify?: boolean
  onError?: (error: unknown) => void | Response | Promise<void | Response>
  rootDir?: string
  scripts?: AssetServerScriptOptions
  sourceMaps?: AssetSourceMaps
  sourceMapSourcePaths?: AssetSourceMapSourcePaths
  target?: AssetTarget
  watch?: boolean | AssetServerWatchOptions
}

```

## Properties

### `allowFiles`

Glob patterns or file paths that are allowed to be served. Relative values are resolved from `rootDir`.

### `allowPackages`

Exact package names whose files are allowed to be served. Dependencies and installed optional
dependencies are allowed automatically. Package files must still match `fileMap`.

### `basePath`

Public mount path for this asset server, e.g. `'/assets'`.

### `denyFiles`

Glob patterns or file paths that are denied from being served. Relative values are resolved from `rootDir`.

### `fileMap`

File patterns keyed by public URL patterns.

### `files`

Leaf file asset configuration. Files configured here are served directly and can be
referenced from CSS `url(...)` rules. Compiled asset extensions like `.css` and script
module extensions are not allowed here.

### `fingerprint`

Controls optional source-based URL fingerprinting for rewritten asset URLs.

When omitted, all served assets use stable non-fingerprinted URLs with `Cache-Control: no-cache`.
Cannot be used together with active watch mode. Set `watch: false` when fingerprinting.

### `hmr`

Enables `import.meta.hot` and coordinates browser updates through a server-level HMR runtime.

HMR requires `watch` to be enabled. The factory is called once for this asset server. Returning
`undefined` leaves HMR inactive; a returned channel is closed by `assetServer.close()`.

### `minify`

Minification setting for emitted scripts and styles.

### `onError`

Handles unexpected request-time compilation errors. Return a `Response` to override the
default `500 Internal Server Error` response, or return nothing to use the default.

### `rootDir`

Root directory used to resolve relative file paths. Defaults to `process.cwd()`.

### `scripts`

Script-only configuration.

### `sourceMaps`

Source map mode for scripts and styles.
- `'external'`: serve source maps as separate `.map` files
- `'inline'`: embed source maps as a base64 data URL in the compiled asset

### `sourceMapSourcePaths`

Source path strategy for source map `sources`.
- `'url'` (default): use the stable server path (e.g. `'/assets/app/entry.ts'`)
- `'absolute'`: use the original filesystem path on disk

### `target`

Shared compatibility target for scripts and styles. Browser targets apply to both
pipelines, and `es` only affects scripts.

### `watch`

Enable filesystem-backed cache invalidation for long-lived server instances.
Enabled by default. Pass `true` to use the default watcher options, an options
object to customize watcher behavior, or `false` to disable watching.