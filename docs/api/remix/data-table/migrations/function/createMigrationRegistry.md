---
title: createMigrationRegistry
---

# createMigrationRegistry

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
import { createMigrationRegistry } from "remix/data-table/migrations";

let registry = createMigrationRegistry();
registry.register({ id, name, up, down });

```

## Parameters

### `initial`

Optional initial migration list.

## Returns

A migration registry with duplicate-id protection.