---
title: RunRemixDbOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/cli.ts#L10
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