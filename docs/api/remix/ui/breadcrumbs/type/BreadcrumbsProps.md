---
title: BreadcrumbsProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/ui/src/components/breadcrumbs/breadcrumbs.tsx#L13
---

# BreadcrumbsProps

## Signature

```ts
type BreadcrumbsProps = Omit<Props<"nav">, "children"> & {
  items: BreadcrumbItem[];
  separator?: RemixNode;
};

```