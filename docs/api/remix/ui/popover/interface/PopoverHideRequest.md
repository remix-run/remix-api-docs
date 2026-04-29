---
title: PopoverHideRequest
---

# PopoverHideRequest

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/popover/popover.ts#L97" target="_blank">View Source</a>

## Signature

```ts
interface PopoverHideRequest {
  reason: "escape-key" | "outside-click";
  target?: Node | null;
}

```