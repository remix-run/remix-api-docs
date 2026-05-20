---
title: MigrateOptions
---

# MigrateOptions

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