---
title: Predicate
---

# Predicate

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/operators.ts#L27" target="_blank">View Source</a>

## Summary

Normalized predicate representation consumed by adapters.

## Signature

```ts
type Predicate<column> =
  | {
      column: column;
      operator: ComparisonOperator;
      type: "comparison";
      value: unknown;
      valueType: "value";
    }
  | {
      column: column;
      operator: Exclude<ComparisonOperator, "in" | "notIn">;
      type: "comparison";
      value: column;
      valueType: "column";
    }
  | { column: column; lower: unknown; type: "between"; upper: unknown }
  | { column: column; operator: "isNull" | "notNull"; type: "null" }
  | {
      operator: "and" | "or";
      predicates: Predicate<column>[];
      type: "logical";
    };

```