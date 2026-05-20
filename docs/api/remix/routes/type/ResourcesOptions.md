---
title: ResourcesOptions
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