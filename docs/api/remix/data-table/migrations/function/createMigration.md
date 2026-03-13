---
title: createMigration
---

# createMigration

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L80" target="_blank">View Source</a>

## Summary

Creates a migration descriptor with normalized defaults.

## Signature

```ts
function createMigration(input: CreateMigrationInput): Migration;

```

## Example

```ts
import { createMigration, column as c } from 'remix/data-table/migrations'
import { table } from 'remix/data-table'

let users = table({
  name: 'users',
  columns: {
    id: c.integer().primaryKey().autoIncrement(),
    email: c.varchar(255).notNull().unique(),
  },
})

export default createMigration({
  async up({ db, schema }) {
    await schema.createTable(users)

    if (db.adapter.dialect === 'sqlite') {
      await db.exec('pragma foreign_keys = on')
    }
  },
  async down({ schema }) {
    await schema.dropTable('users', { ifExists: true })
  },
})
```

## Params

### input

Migration handlers and transaction mode.

## Returns

A normalized migration object.