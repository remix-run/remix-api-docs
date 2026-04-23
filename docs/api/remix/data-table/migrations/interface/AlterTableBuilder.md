---
title: AlterTableBuilder
---

# AlterTableBuilder

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/migrations.ts#L214" target="_blank">View Source</a>

## Summary

Builder API available inside `schema.alterTable(name, table => ...)`.

## Signature

```ts
interface AlterTableBuilder {
  addCheck(expression: string, options: NamedConstraintOptions): void;
  addColumn(
    name: string,
    definition: ColumnDefinition | ColumnBuilder<unknown>,
  ): void;
  addForeignKey(
    columns: KeyColumns,
    refTable: TableInput,
    refColumns: KeyColumns,
    options: ForeignKeyOptions,
  ): void;
  addIndex(columns: IndexColumns, options: CreateIndexOptions): void;
  addPrimaryKey(columns: KeyColumns, options: NamedConstraintOptions): void;
  addUnique(columns: KeyColumns, options: NamedConstraintOptions): void;
  changeColumn(
    name: string,
    definition: ColumnDefinition | ColumnBuilder<unknown>,
  ): void;
  comment(text: string): void;
  dropCheck(name: string): void;
  dropColumn(name: string, options: { ifExists?: boolean }): void;
  dropForeignKey(name: string): void;
  dropIndex(name: string): void;
  dropPrimaryKey(name: string): void;
  dropUnique(name: string): void;
  renameColumn(from: string, to: string): void;
}

```

## Methods

### addCheck(expression: string, options: NamedConstraintOptions): void

Adds a check constraint during an `alterTable` migration.

#### expression

#### options

### addColumn(name: string, definition: ColumnDefinition | ColumnBuilder<unknown>): void

Adds a column during an `alterTable` migration.

#### name

#### definition

### addForeignKey(columns: KeyColumns, refTable: TableInput, refColumns: KeyColumns, options: ForeignKeyOptions): void

Adds a foreign key during an `alterTable` migration.

#### columns

#### refTable

#### refColumns

#### options

### addIndex(columns: IndexColumns, options: CreateIndexOptions): void

Adds an index during an `alterTable` migration.

#### columns

#### options

### addPrimaryKey(columns: KeyColumns, options: NamedConstraintOptions): void

Adds a primary key during an `alterTable` migration.

#### columns

#### options

### addUnique(columns: KeyColumns, options: NamedConstraintOptions): void

Adds a unique constraint during an `alterTable` migration.

#### columns

#### options

### changeColumn(name: string, definition: ColumnDefinition | ColumnBuilder<unknown>): void

Changes an existing column during an `alterTable` migration.

#### name

#### definition

### comment(text: string): void

Sets the table comment during an `alterTable` migration.

#### text

### dropCheck(name: string): void

Drops a check constraint during an `alterTable` migration.

#### name

### dropColumn(name: string, options: { ifExists?: boolean }): void

Drops a column during an `alterTable` migration.

#### name

#### options

### dropForeignKey(name: string): void

Drops a foreign key during an `alterTable` migration.

#### name

### dropIndex(name: string): void

Drops an index during an `alterTable` migration.

#### name

### dropPrimaryKey(name: string): void

Drops a primary key during an `alterTable` migration.

#### name

### dropUnique(name: string): void

Drops a unique constraint during an `alterTable` migration.

#### name

### renameColumn(from: string, to: string): void

Renames a column during an `alterTable` migration.

#### from

#### to