---
title: Issue
---

# Issue

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L9" target="_blank">View Source</a>

## Summary

A validation issue returned by a schema, compatible with Standard Schema v1.

Issues include a human-readable `message` and an optional `path` that points to the
failing location in the input (e.g. `['user', 'email']` or `[0, 'id']`).

## Signature

```ts
type Issue = StandardSchemaV1.Issue;

```