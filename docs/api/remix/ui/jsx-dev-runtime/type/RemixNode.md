---
title: RemixNode
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/jsx.ts#L49
---

# RemixNode

## Summary

Anything that Remix can render, including nested arrays of renderable values.
This mirrors how JSX spreads children into arrays (e.g. when using `map`)
and how our reconciler flattens children at runtime.

Particularly useful for `props.children`.

```tsx
function MyComponent({ children }: { children: RemixNode }) {}
```

## Signature

```ts
type RemixNode = Renderable | RemixNode[];

```