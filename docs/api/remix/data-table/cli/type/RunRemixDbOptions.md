---
title: RunRemixDbOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/cli.ts#L37
---

# RunRemixDbOptions

## Summary

Structured invocation options accepted by [`runRemixDb`](/api/remix/data-table/cli/function/runRemixDb/).

## Signature

```ts
type RunRemixDbOptions =
  | (DatabaseCommandOptions & {
      command: 'migrate'
      journalTable?: string
      migrations: Migrations
      to?: string
    })
  | RollbackCommandOptions
  | (DatabaseCommandOptions & {
      command: 'reset'
      journalTable?: string
      migrations: Migrations
      seed?: Seed
    })
  | (DatabaseCommandOptions & { command: 'seed'; seed: Seed })
  | (DatabaseCommandOptions & { command: 'status'; journalTable?: string; migrations: Migrations })
  | (DatabaseCommandOptions & { command: 'wipe' })

```