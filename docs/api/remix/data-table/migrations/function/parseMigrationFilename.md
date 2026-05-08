---
title: parseMigrationFilename
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations/filename.ts#L10
---

# parseMigrationFilename

## Summary

Parses a migration filename into `{ id, name }`.

Expected format: `YYYYMMDDHHmmss_name.(ts|js|mts|mjs|cts|cjs)`.

## Signature

```ts
function parseMigrationFilename(filename: string): { id: string; name: string };

```

## Parameters

### `filename`

Migration file basename.

## Returns

Parsed migration id and name.