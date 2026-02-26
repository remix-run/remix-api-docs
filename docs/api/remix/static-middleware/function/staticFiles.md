---
title: staticFiles
---

# staticFiles

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/static-middleware/src/lib/static.ts#L83" target="_blank">View Source</a>

## Summary

Creates a middleware that serves static files from the filesystem.

Uses the URL pathname to resolve files, removing the leading slash to make it a relative path.
The middleware always falls through to the handler if the file is not found or an error occurs.

## Signature

```ts
function staticFiles(root: string, options: StaticFilesOptions): Middleware;

```

## Params

### root

The root directory to serve files from (absolute or relative to cwd)

### options

Configuration for file responses

## Returns

The static files middleware