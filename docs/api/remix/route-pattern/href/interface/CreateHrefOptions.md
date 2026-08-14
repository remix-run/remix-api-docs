---
title: CreateHrefOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/route-pattern/src/lib/href.ts#L28
---

# CreateHrefOptions

## Summary

Options for href generation.

## Signature

```ts
interface CreateHrefOptions {
  baseURL?: string | URL
  searchParams?: CreateHrefSearchParams
}

```

## Properties

### `baseURL`

Absolute URL used to generate a path-relative href for same-origin targets.

### `searchParams`

Search parameters to include before applying constraints from the route pattern.