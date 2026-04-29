---
title: spring
---

# spring

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/animation/spring.ts#L87" target="_blank">View Source</a>

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

### options

Spring parameters.

### preset

Preset spring profile to start from.

### overrides

Optional preset overrides.

## Returns

A spring iterator.