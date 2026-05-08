---
title: MigrationSchema
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L255
---

# MigrationSchema

## Summary

DDL-focused operations mixed into the migration `db` object.

## Signature

```ts
interface MigrationSchema {
  addCheck(
    table: TableInput,
    expression: string,
    options: NamedConstraintOptions,
  ): Promise<void>;
  addForeignKey(
    table: TableInput,
    columns: KeyColumns,
    refTable: TableInput,
    refColumns: KeyColumns,
    options: ForeignKeyOptions,
  ): Promise<void>;
  alterTable(
    table: TableInput,
    migrate: (table: AlterTableBuilder) => void,
    options: AlterTableOptions,
  ): Promise<void>;
  createIndex(
    table: TableInput,
    columns: IndexColumns,
    options: CreateIndexOptions,
  ): Promise<void>;
  createTable<table extends AnyTable>(
    table: table,
    options: CreateTableOptions,
  ): Promise<void>;
  dropCheck(table: TableInput, name: string): Promise<void>;
  dropForeignKey(table: TableInput, name: string): Promise<void>;
  dropIndex(
    table: TableInput,
    name: string,
    options: { ifExists?: boolean },
  ): Promise<void>;
  dropTable(table: TableInput, options: DropTableOptions): Promise<void>;
  hasColumn(table: TableInput, column: string): Promise<boolean>;
  hasTable(table: TableInput): Promise<boolean>;
  plan(sql: string | SqlStatement): Promise<void>;
  renameIndex(table: TableInput, from: string, to: string): Promise<void>;
  renameTable(from: TableInput, to: string): Promise<void>;
}

```

## Methods

### `addCheck(table: TableInput, expression: string, options: NamedConstraintOptions): Promise<void>`

Adds a check constraint in the migration schema.



### `addForeignKey(table: TableInput, columns: KeyColumns, refTable: TableInput, refColumns: KeyColumns, options: ForeignKeyOptions): Promise<void>`

Adds a foreign key in the migration schema.



### `alterTable(table: TableInput, migrate: (table: AlterTableBuilder) => void, options: AlterTableOptions): Promise<void>`

Alters an existing table in the migration schema.



### `createIndex(table: TableInput, columns: IndexColumns, options: CreateIndexOptions): Promise<void>`

Creates an index in the migration schema.



### `createTable<table extends AnyTable>(table: table, options: CreateTableOptions): Promise<void>`

Creates a table in the migration schema.



### `dropCheck(table: TableInput, name: string): Promise<void>`

Drops a check constraint in the migration schema.



### `dropForeignKey(table: TableInput, name: string): Promise<void>`

Drops a foreign key in the migration schema.



### `dropIndex(table: TableInput, name: string, options: { ifExists?: boolean }): Promise<void>`

Drops an index from the migration schema.



### `dropTable(table: TableInput, options: DropTableOptions): Promise<void>`

Drops a table from the migration schema.



### `hasColumn(table: TableInput, column: string): Promise<boolean>`

Returns `true` when the column exists on the given table.



### `hasTable(table: TableInput): Promise<boolean>`

Returns `true` when the table exists in the current database.



### `plan(sql: string | SqlStatement): Promise<void>`

Adds raw SQL to the migration plan as a migration operation.



### `renameIndex(table: TableInput, from: string, to: string): Promise<void>`

Renames an index in the migration schema.



### `renameTable(from: TableInput, to: string): Promise<void>`

Renames a table in the migration schema.

