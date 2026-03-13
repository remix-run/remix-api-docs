---
title: ColumnBuilder
---

# ColumnBuilder

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/column.ts#L7" target="_blank">View Source</a>

## Summary

Chainable builder used to describe physical column definitions.

## Signature

```ts
class ColumnBuilder<output> {
  constructor(definition: ColumnDefinition): ColumnBuilder<output>;

  // Methods
  autoIncrement(): ColumnBuilder<output>;
  build(): ColumnDefinition;
  charset(name: string): ColumnBuilder<output>;
  check(expression: string, name: string): ColumnBuilder<output>;
  collate(name: string): ColumnBuilder<output>;
  comment(text: string): ColumnBuilder<output>;
  computed(
    expression: string,
    options: { stored?: boolean },
  ): ColumnBuilder<output>;
  default(value: unknown): ColumnBuilder<output>;
  defaultNow(): ColumnBuilder<output>;
  defaultSql(expression: string): ColumnBuilder<output>;
  identity(options: IdentityOptions): ColumnBuilder<output>;
  length(value: number): ColumnBuilder<output>;
  notNull(): ColumnBuilder<Exclude<output, null>>;
  nullable(): ColumnBuilder<output | null>;
  onDelete(action: ForeignKeyAction): ColumnBuilder<output>;
  onUpdate(action: ForeignKeyAction): ColumnBuilder<output>;
  precision(value: number, scale: number): ColumnBuilder<output>;
  primaryKey(): ColumnBuilder<output>;
  references(table: string, name: string): ColumnBuilder<output>;
  references(
    table: string,
    columns: string | string[],
    name: string,
  ): ColumnBuilder<output>;
  scale(value: number): ColumnBuilder<output>;
  timezone(enabled: boolean): ColumnBuilder<output>;
  unique(name: string): ColumnBuilder<output>;
  unsigned(): ColumnBuilder<output>;
}

```

## Constructor Params

### definition

## Methods

### autoIncrement(): ColumnBuilder<output>

Marks the column as auto-incrementing when the dialect supports it.

### build(): ColumnDefinition

Builds the immutable column definition.

### charset(name: string): ColumnBuilder<output>

Sets the character set for the column.

#### name

Character set name.

### check(expression: string, name: string): ColumnBuilder<output>

Adds a check constraint for the column.

#### expression

SQL check expression.

#### name

Constraint name.

### collate(name: string): ColumnBuilder<output>

Sets the collation for the column.

#### name

Collation name.

### comment(text: string): ColumnBuilder<output>

Adds a database comment for the column.

#### text

Comment text.

### computed(expression: string, options: { stored?: boolean }): ColumnBuilder<output>

Marks the column as computed from a SQL expression.

#### expression

SQL expression for the computed value.

#### options

Computed-column options.

### default(value: unknown): ColumnBuilder<output>

Sets a literal default value for the column.

#### value

Default value to apply when the column is omitted.

### defaultNow(): ColumnBuilder<output>

Sets the column default to the current timestamp at write time.

### defaultSql(expression: string): ColumnBuilder<output>

Sets a raw SQL expression as the column default.

#### expression

SQL expression used as the default value.

### identity(options: IdentityOptions): ColumnBuilder<output>

Configures an identity column strategy when the dialect supports it.

#### options

Identity sequence options.

### length(value: number): ColumnBuilder<output>

Sets the column length.

#### value

Maximum length value.

### notNull(): ColumnBuilder<Exclude<output, null>>

Marks the column as non-nullable.

### nullable(): ColumnBuilder<output | null>

Marks the column as nullable.

### onDelete(action: ForeignKeyAction): ColumnBuilder<output>

Sets the foreign-key action used when the referenced row is deleted.

#### action

Delete action to apply.

### onUpdate(action: ForeignKeyAction): ColumnBuilder<output>

Sets the foreign-key action used when the referenced row is updated.

#### action

Update action to apply.

### precision(value: number, scale: number): ColumnBuilder<output>

Sets numeric precision and optional scale for the column.

#### value

Precision value.

#### scale

Optional scale value.

### primaryKey(): ColumnBuilder<output>

Marks the column as part of the primary key.

### references(table: string, name: string): ColumnBuilder<output>

Adds a foreign-key reference for the column.

#### table

Referenced table name.

#### name

Constraint name.

### references(table: string, columns: string | string[], name: string): ColumnBuilder<output>

Adds a foreign-key reference for the column.

#### table

Referenced table name.

#### columns

Referenced column list.

#### name

Constraint name.

### scale(value: number): ColumnBuilder<output>

Sets numeric scale for the column.

#### value

Scale value.

### timezone(enabled: boolean): ColumnBuilder<output>

Enables or disables timezone support for time-based columns.

#### enabled

Whether timezone support should be enabled.

### unique(name: string): ColumnBuilder<output>

Marks the column as unique.

#### name

Optional constraint name.

### unsigned(): ColumnBuilder<output>

Marks the column as unsigned when the dialect supports it.