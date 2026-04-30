---
title: VaryInit
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/headers/src/lib/vary.ts#L6
---

# VaryInit

## Summary

Object form for constructing a Vary header value.

## Signature

```ts
interface VaryInit {
  headerNames: string[];
}

```

## Properties

### headerNames

The request header names that determine cache eligibility.