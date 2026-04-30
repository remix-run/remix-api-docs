---
title: BreadcrumbsProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/components/breadcrumbs/breadcrumbs.tsx#L15
---

# BreadcrumbsProps

## Signature

```ts
type BreadcrumbsProps = Omit<Props<"nav">, "children"> & {
  items: BreadcrumbItem[];
  separator?: RemixNode;
};

```