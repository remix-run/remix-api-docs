---
title: SpringOptions
---

# SpringOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/spring.ts#L20" target="_blank">View Source</a>

## Summary

Options for generating a spring easing iterator.

## Signature

```ts
interface SpringOptions {
  bounce?: number;
  duration?: number;
  velocity?: number;
}

```

## Properties

### bounce

Spring bounce amount from overdamped (`< 0`) to bouncy (`> 0`).

### duration

Perceptual duration in milliseconds used to derive spring stiffness.

### velocity

Initial velocity in units per second.