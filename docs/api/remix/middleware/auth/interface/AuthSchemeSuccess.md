---
title: AuthSchemeSuccess
---

# AuthSchemeSuccess

## Summary

Successful result returned by an auth scheme.

## Signature

```ts
interface AuthSchemeSuccess<identity> {
  identity: identity;
  status: "success";
}

```

## Properties

### `identity`

Application-defined identity resolved by the scheme.

### `status`

Marks the scheme result as a successful authentication.