---
title: verifyCredentials
---

# verifyCredentials

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/verify-credentials.ts#L12" target="_blank">View Source</a>

## Summary

Verifies submitted credentials with a credentials auth provider.

## Signature

```ts
function verifyCredentials<
  context extends RequestContext<any, any>,
  input,
  result,
>(
  provider: CredentialsAuthProvider<input, result>,
  context: context,
): Promise<result | null>;

```

## Params

### provider

The credentials provider that parses and verifies the submitted input.

### context

## Returns

The authenticated result when verification succeeds, or `null` when the credentials are rejected.