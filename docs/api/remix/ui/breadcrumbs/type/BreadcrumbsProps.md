---
title: BreadcrumbsProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/components/breadcrumbs/breadcrumbs.tsx#L15
---

# BreadcrumbsProps

## Signature

```ts
type BreadcrumbsProps = Omit<Props<"nav">, "children"> & {
  items: BreadcrumbItem[];
  separator?: RemixNode;
};

```