---
title: SpringPreset
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/animation/spring.ts#L15
---

# SpringPreset

## Summary

Spring physics based on SwiftUI's spring math.

Returns a decorated iterator that can be:
- Iterated to get position values (0→1)
- Spread for WAAPI: { ...spring() }
- Stringified for CSS: `transform ${spring()}`

Spring Parameter Conversion (SwiftUI formulas, mass = 1):
  stiffness = (2π ÷ duration)²
  damping = 1 - 4π × bounce ÷ duration  (bounce ≥ 0)
  damping = 4π ÷ (duration + 4π × bounce)  (bounce < 0)

## Signature

```ts
type SpringPreset = "smooth" | "snappy" | "bouncy";

```