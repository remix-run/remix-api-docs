---
title: FrameProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/component.ts#L158
---

# FrameProps

## Summary

Props accepted by the built-in [`Frame`](/api/remix/ui/function/Frame/) component.

## Signature

```ts
interface FrameProps {
  fallback?: Renderable;
  name?: string;
  on?: Record<
    string,
    (event: Event, signal: AbortSignal) => void | Promise<void>
  >;
  src: string;
}

```

## Properties

### `fallback`

Fallback content to render while the frame is pending.

### `name`

Optional frame name used for targeted navigation and lookups.

### `on`

Event handlers invoked for events dispatched from the frame element.

### `src`

Source URL used when the frame loads or reloads its content.