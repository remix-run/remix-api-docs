---
title: RemixDbAdapterConfig
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/cli/src/lib/remix-config.ts#L53
---

# RemixDbAdapterConfig

## Signature

```ts
type RemixDbAdapterConfig =
  | { busyTimeout?: number; filename: RemixDbString; foreignKeys?: boolean; type: 'sqlite' }
  | {
      connectionString: RemixDbString
      maintenanceDatabase?: string
      template?: string
      type: 'postgres'
    }
  | { characterSet?: string; collation?: string; type: 'mysql'; uri: RemixDbString }

```