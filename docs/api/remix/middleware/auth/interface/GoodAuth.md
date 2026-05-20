---
title: GoodAuth
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/auth-middleware/src/lib/auth.ts#L20
---

# GoodAuth

## Summary

Auth state for a successfully authenticated request.

## Signature

```ts
interface GoodAuth<identity> {
  identity: identity;
  method: string;
  ok: true;
}

```

## Properties

### `identity`

Application-defined identity resolved for the current request.

### `method`

Auth method that successfully authenticated the request.

### `ok`

Indicates that the current request is authenticated.