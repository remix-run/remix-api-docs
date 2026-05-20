---
title: VaryInit
---

# VaryInit

## Summary

Object form for constructing a [`Vary`](/api/remix/headers/class/Vary/) header value.

## Signature

```ts
interface VaryInit {
  headerNames: string[];
}

```

## Properties

### `headerNames`

The request header names that determine cache eligibility.