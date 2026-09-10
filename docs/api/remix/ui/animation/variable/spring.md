---
title: spring
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/animation/spring.ts#L169
---

# spring

## Summary

Create a spring-physics animation iterator for CSS transitions and WAAPI.

The returned iterator can be:
- Iterated to get position values (0→1)
- Spread into WAAPI options: `element.animate(keyframes, { ...spring() })`
- Stringified for CSS: `` `transform ${spring()}` ``

## Signature

```ts
const spring: SpringFunction
```

## Example

```ts
// Named preset
let s = spring('bouncy')
element.style.transition = `transform ${s}`

```