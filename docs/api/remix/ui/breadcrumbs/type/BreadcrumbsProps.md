---
title: BreadcrumbsProps
---

# BreadcrumbsProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/breadcrumbs/breadcrumbs.tsx#L15" target="_blank">View Source</a>

## Signature

```ts
type BreadcrumbsProps = Omit<Props<"nav">, "children"> & {
  items: BreadcrumbItem[];
  separator?: RemixNode;
};

```