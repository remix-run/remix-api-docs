---
title: AnimateProp
---

# AnimateProp

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/dom.ts#L101" target="_blank">View Source</a>

## Summary

Presence animation configuration for enter/exit/layout transitions.
Each property can be:
- `true`: Use default animation
- Object: Custom configuration
- Falsy (`false`, `null`, `undefined`): Disabled

Falsy values are useful for conditional animations:
```tsx
animate={{ enter: isReady && { opacity: 0, duration: 200 } }}
```

## Signature

```ts
interface AnimateProp {
  enter?: boolean | PresenceConfig | PresenceKeyframeConfig | null;
  exit?: boolean | PresenceConfig | PresenceKeyframeConfig | null;
  layout?: boolean | LayoutAnimationConfig | null;
}

```

## Properties

### enter

### exit

### layout