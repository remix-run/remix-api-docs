---
title: OAuthDpopBinding
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/provider.ts#L6
---

# OAuthDpopBinding

## Summary

DPoP binding material required to sign follow-up requests for DPoP-bound access tokens.

## Signature

```ts
interface OAuthDpopBinding {
  nonce?: string;
  privateJwk: JsonWebKey;
  publicJwk: JsonWebKey;
}

```

## Properties

### nonce

Latest nonce advertised by the target server, when one is required.

### privateJwk

Private JWK used to sign DPoP proofs.

### publicJwk

Public JWK advertised in DPoP proofs.