---
title: ResourceOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-router/src/lib/route-helpers/resource.ts#L16
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