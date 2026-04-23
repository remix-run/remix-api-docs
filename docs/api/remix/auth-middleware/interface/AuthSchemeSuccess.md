---
title: AuthSchemeSuccess
---

# AuthSchemeSuccess

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth-middleware/src/lib/auth.ts#L67" target="_blank">View Source</a>

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

### identity

Application-defined identity resolved by the scheme.

### status

Marks the scheme result as a successful authentication.