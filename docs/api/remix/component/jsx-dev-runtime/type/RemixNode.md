---
title: RemixNode
---

# RemixNode

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/jsx.ts#L45" target="_blank">View Source</a>

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