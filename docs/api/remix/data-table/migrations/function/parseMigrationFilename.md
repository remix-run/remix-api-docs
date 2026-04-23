---
title: parseMigrationFilename
---

# parseMigrationFilename

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/migrations/filename.ts#L10" target="_blank">View Source</a>

## Summary

Parses a migration filename into `{ id, name }`.

Expected format: `YYYYMMDDHHmmss_name.(ts|js|mts|mjs|cts|cjs)`.

## Signature

```ts
function parseMigrationFilename(filename: string): { id: string; name: string };

```

## Params

### filename

Migration file basename.

## Returns

Parsed migration id and name.