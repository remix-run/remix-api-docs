---
title: ResourceOptions
---

# ResourceOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/route-helpers/resource.ts#L16" target="_blank">View Source</a>

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