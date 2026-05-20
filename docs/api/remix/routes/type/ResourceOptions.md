---
title: ResourceOptions
---

# ResourceOptions

## Summary

Options for generating singleton resource routes.

## Signature

```ts
type ResourceOptions = {
  names?: {
    create?: string;
    destroy?: string;
    edit?: string;
    new?: string;
    show?: string;
    update?: string;
  };
} & (
  | { exclude?: never; only?: ResourceMethod[] }
  | { exclude?: ResourceMethod[]; only?: never }
);

```