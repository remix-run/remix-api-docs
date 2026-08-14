---
title: PostgresDatabaseOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/data-table-postgres/src/lib/database.ts#L6
---

# PostgresDatabaseOptions

## Summary

Options for creating a PostgreSQL database.

## Signature

```ts
interface PostgresDatabaseOptions {
  maintenanceDatabase?: string
  now?: () => unknown
  template?: string
}

```

## Properties

### `maintenanceDatabase`

Database used while dropping and recreating the configured database (`postgres` by default).

### `now`

Clock function used for auto-managed timestamps.

### `template`

Template used to recreate the configured database (`template0` by default).