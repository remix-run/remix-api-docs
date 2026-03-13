---
title: MigrateOptions
---

# MigrateOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/migrations.ts#L136" target="_blank">View Source</a>

## Summary

Common options for `runner.up(...)` and `runner.down(...)`.
`to` and `step` are mutually exclusive.

## Signature

```ts
type MigrateOptions =
  | { dryRun?: boolean; step?: never; to: string }
  | { dryRun?: boolean; step: number; to?: never }
  | { dryRun?: boolean; step?: undefined; to?: undefined };

```