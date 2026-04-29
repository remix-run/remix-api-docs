---
title: ResourcesOptions
---

# ResourcesOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/route-helpers/resources.ts#L16" target="_blank">View Source</a>

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