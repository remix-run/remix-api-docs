---
title: spring
---

# spring

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/spring.ts#L65" target="_blank">View Source</a>

## Summary

Create a spring iterator for animations.

## Signature

```ts
function spring(options: SpringOptions): SpringIterator;

```

## Example

```ts
let s = spring('bouncy')

// As CSS transition
element.style.transition = `transform ${s}`

// Spread for WAAPI
element.animate(keyframes, { ...spring() })

// Iterate for JS animation
for (let position of spring()) {
  element.style.transform = `translateX(${position * 100}px)`
}
```

## Params

### options