---
title: FrameProps
---

# FrameProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/component.ts#L153" target="_blank">View Source</a>

## Summary

Props accepted by the built-in Frame component.

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

### fallback

Fallback content to render while the frame is pending.

### name

Optional frame name used for targeted navigation and lookups.

### on

Event handlers invoked for events dispatched from the frame element.

### src

Source URL used when the frame loads or reloads its content.