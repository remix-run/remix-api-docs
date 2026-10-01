---
title: "parseMigrationDirectoryName"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/data-table/src/lib/migrations/directory-name.ts#L13"
---

# parseMigrationDirectoryName

## Summary

Parses a migration directory name into `{ id, name }`.

Expected format: `<digits>_<name>`, such as `0001_create_users` or
`20260228090000_create_users` (`YYYYMMDDHHmmss`).
The prefix must contain 1 to 64 digits.

## Signature

```ts
function parseMigrationDirectoryName(name: string): { id: string; name: string }

```

## Parameters

### `name`

Migration directory basename.

## Returns

Parsed migration id and name.