---
title: BreadcrumbsProps
---

# BreadcrumbsProps

## Signature

```ts
type BreadcrumbsProps = Omit<Props<"nav">, "children"> & {
  items: BreadcrumbItem[];
  separator?: RemixNode;
};

```