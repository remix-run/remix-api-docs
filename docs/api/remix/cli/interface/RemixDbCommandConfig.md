---
title: "RemixDbCommandConfig"
source: "https://github.com/remix-run/remix/blob/main/packages/cli/src/lib/remix-config.ts#L73"
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