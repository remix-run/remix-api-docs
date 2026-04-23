---
title: createMigrationRegistry
---

# createMigrationRegistry

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/migrations/registry.ts#L39" target="_blank">View Source</a>

## Summary

Creates an in-memory migration registry.

## Signature

```ts
function createMigrationRegistry(
  initial: MigrationDescriptor[],
): MigrationRegistry;

```

## Example

```ts
import { createMigrationRegistry } from 'remix/data-table/migrations'

let registry = createMigrationRegistry()
registry.register({ id, name, migration })
```

## Params

### initial

Optional initial migration list.

## Returns

A migration registry with duplicate-id protection.