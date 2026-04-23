---
title: AssetServerOptions
---

# AssetServerOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assets/src/lib/asset-server.ts#L56" target="_blank">View Source</a>

## Signature

```ts
interface AssetServerOptions {
  allow: readonly string[];
  deny?: readonly string[];
  fileMap: Readonly<Record<string, string>>;
  fingerprint?: FingerprintOptions;
  onError?: (error: unknown) => void | Response | Promise<void | Response>;
  rootDir?: string;
  scripts?: {
    define?: Record<string, string>;
    external?: string[];
    minify?: boolean;
    sourceMaps?: "inline" | "external";
    sourceMapSourcePaths?: "url" | "absolute";
    target?:
      | "es2015"
      | "es2016"
      | "es2017"
      | "es2018"
      | "es2019"
      | "es2020"
      | "es2021"
      | "es2022"
      | "es2023"
      | "es2024"
      | "es2025"
      | "es2026"
      | "esnext";
  };
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

Controls optional source-based URL fingerprinting for rewritten import URLs.

When omitted, all served modules use stable non-fingerprinted URLs with `Cache-Control: no-cache`.
Cannot be used together with active watch mode. Set `watch: false` when fingerprinting.

### onError

Handles unexpected request-time compilation errors. Return a `Response` to override the
default `500 Internal Server Error` response, or return nothing to use the default.

### rootDir

Root directory used to resolve relative file paths. Defaults to `process.cwd()`.

### scripts

Script pipeline configuration. Omit to use defaults.

### watch

Enable filesystem-backed cache invalidation for long-lived server instances.
Enabled by default. Pass `true` to use the default watcher options, an options
object to customize watcher behavior, or `false` to disable watching.