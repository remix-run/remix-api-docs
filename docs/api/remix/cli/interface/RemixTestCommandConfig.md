---
title: RemixTestCommandConfig
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.1/packages/cli/src/lib/remix-config.ts#L86
---

# RemixTestCommandConfig

## Signature

```ts
interface RemixTestCommandConfig {
  browserFiles?: string[]
  concurrency?: number
  coverage?: {
    branches?: number
    dir?: string
    enabled?: boolean
    exclude?: string[]
    functions?: number
    include?: string[]
    lines?: number
    statements?: number
  }
  e2eFiles?: string[]
  exclude?: string[]
  files?: string[]
  only?: string[]
  playwright?: { configFile?: string; echo?: boolean; open?: boolean; projects?: string[] }
  pool?: 'forks' | 'threads'
  quiet?: boolean
  reporter?: 'files' | 'spec' | 'tap' | 'dot'
  setup?: string
  type?: ('server' | 'browser' | 'e2e')[]
  watch?: boolean
}

```