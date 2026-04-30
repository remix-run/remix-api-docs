---
title: spring
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/animation/spring.ts#L87
---

# spring

## Summary

Creates a spring iterator from a named preset.

## Signature

```ts
function spring(
  preset: SpringPreset,
  overrides: Omit<SpringOptions, "bounce">,
): SpringIterator;

function spring(options: SpringOptions): SpringIterator;

```

## Params

### `options`

Spring parameters.

### `preset`

Preset spring profile to start from.

### `overrides`

Optional preset overrides.

## Returns

A spring iterator.