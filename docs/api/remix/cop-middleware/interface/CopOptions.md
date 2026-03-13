---
title: CopOptions
---

# CopOptions

<a href="https://github.com/remix-run/remix/blob/main/packages/cop-middleware/src/lib/cop.ts#L33" target="_blank">View Source</a>

## Summary

Configuration for the cross-origin protection middleware.

## Signature

```ts
interface CopOptions {
  insecureBypassPatterns?: readonly string[];
  onDeny?: CopDenyHandler;
  trustedOrigins?: readonly string[];
}

```

## Properties

### insecureBypassPatterns

Path patterns that should bypass protection for matching requests.

### onDeny

Optional custom response handler for rejected requests.

### trustedOrigins

Exact origins that should bypass cross-origin rejection.