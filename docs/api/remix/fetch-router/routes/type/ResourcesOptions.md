---
title: ResourcesOptions
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/resources.ts#L16
---

# ResourcesOptions

## Summary

Options for generating collection resource routes.

## Signature

```ts
type ResourcesOptions = {
  names?: {
    create?: string;
    destroy?: string;
    edit?: string;
    index?: string;
    new?: string;
    show?: string;
    update?: string;
  };
  param?: string;
} & (
  | { exclude?: never; only?: ResourcesMethod[] }
  | { exclude?: ResourcesMethod[]; only?: never }
);

```