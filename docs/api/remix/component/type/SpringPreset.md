---
title: SpringPreset
---

# SpringPreset

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/spring.ts#L15" target="_blank">View Source</a>

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