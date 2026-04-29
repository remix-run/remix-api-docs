---
title: AssetServerOptions
---

# AssetServerOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/assets/src/lib/asset-server.ts#L56" target="_blank">View Source</a>

## Signature

```ts
interface AssetServerOptions {
  allow: readonly string[];
  deny?: readonly string[];
  fileMap: Readonly<Record<string, string>>;
  fingerprint?: FingerprintOptions;
  minify?: boolean;
  onError?: (error: unknown) => void | Response | Promise<void | Response>;
  rootDir?: string;
  scripts?: AssetServerScriptOptions;
  sourceMaps?: AssetSourceMaps;
  sourceMapSourcePaths?: AssetSourceMapSourcePaths;
  target?: AssetTarget;
  watch?: boolean | AssetServerWatchOptions;
}

```

## Properties

### allow

Glob patterns or file paths that are allowed to be served. Relative values are resolved from `rootDir`.

### deny

Glob patterns or file paths that are denied from being served. Relative values are resolved from `rootDir`.

### fileMap

File patterns keyed by public URL patterns.

### fingerprint

Controls optional source-based URL fingerprinting for rewritten asset URLs.

When omitted, all served assets use stable non-fingerprinted URLs with `Cache-Control: no-cache`.
Cannot be used together with active watch mode. Set `watch: false` when fingerprinting.

### minify

Minification setting for emitted scripts and styles.

### onError

Handles unexpected request-time compilation errors. Return a `Response` to override the
default `500 Internal Server Error` response, or return nothing to use the default.

### rootDir

Root directory used to resolve relative file paths. Defaults to `process.cwd()`.

### scripts

Script-only configuration.

### sourceMaps

Source map mode for scripts and styles.
- `'external'`: serve source maps as separate `.map` files
- `'inline'`: embed source maps as a base64 data URL in the compiled asset

### sourceMapSourcePaths

Source path strategy for source map `sources`.
- `'url'` (default): use the stable server path (e.g. `'/assets/app/entry.ts'`)
- `'absolute'`: use the original filesystem path on disk

### target

Shared compatibility target for scripts and styles. Browser targets apply to both
pipelines, and `es` only affects scripts.

### watch

Enable filesystem-backed cache invalidation for long-lived server instances.
Enabled by default. Pass `true` to use the default watcher options, an options
object to customize watcher behavior, or `false` to disable watching.