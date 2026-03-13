---
title: Relation
---

# Relation

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L589" target="_blank">View Source</a>

## Summary

Relation descriptor used by query loading.

## Signature

```ts
type Relation<source, target, cardinality, loaded> = {
  cardinality: cardinality;
  kind: "relation";
  modifiers: RelationModifiers<target>;
  relationKind: RelationKind;
  sourceKey: string[];
  sourceTable: source;
  targetKey: string[];
  targetTable: target;
  through?: ThroughRelationMetadata;
  limit(value: number): Relation<source, target, cardinality, loaded>;
  offset(value: number): Relation<source, target, cardinality, loaded>;
  orderBy(
    column: TableColumnInput<target>,
    direction: OrderDirection,
  ): Relation<source, target, cardinality, loaded>;
  where(
    input: WhereInput<
      | TableColumnName<target>
      | `${TableName<target>}.${TableColumnName<target>}`
    >,
  ): Relation<source, target, cardinality, loaded>;
  with<relations extends RelationMapForTable<target>>(
    relations: relations,
  ): Relation<
    source,
    target,
    cardinality,
    loaded & {
      [key in string | number | symbol]: {
        [name in string | number | symbol]: RelationResult<relations[name]>;
      }[key];
    }
  >;
};

```