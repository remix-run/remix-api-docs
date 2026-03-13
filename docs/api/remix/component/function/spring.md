---
title: spring
---

# spring

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/spring.ts#L87" target="_blank">View Source</a>

## Summary

Creates a spring iterator from explicit spring options.

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