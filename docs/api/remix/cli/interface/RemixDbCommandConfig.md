---
title: RemixDbCommandConfig
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/cli/src/lib/remix-config.ts#L73
---

# RemixDbCommandConfig

## Signature

```ts
interface RemixDbCommandConfig {
  adapter: RemixDbAdapterConfig
  migrations?: { directory: string; journalTable?: string }
  seed?: string
}

```