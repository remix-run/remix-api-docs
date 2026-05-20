---
title: parseMigrationDirectoryName
---

# parseMigrationDirectoryName

## Summary

Parses a migration directory name into `{ id, name }`.

Expected format: `YYYYMMDDHHmmss_name`.

## Signature

```ts
function parseMigrationDirectoryName(name: string): {
  id: string;
  name: string;
};

```

## Parameters

### `name`

Migration directory basename.

## Returns

Parsed migration id and name.