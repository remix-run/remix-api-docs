---
title: CredentialsAuthProvider
---

# CredentialsAuthProvider

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/providers/credentials.ts#L6" target="_blank">View Source</a>

## Summary

Public shape for a credentials-based provider used by `verifyCredentials()`.

## Signature

```ts
interface CredentialsAuthProvider<input, result, provider> {
  name: provider;
  parse(context: RequestContext): input | Promise<input>;
  verify(
    input: input,
    context: RequestContext,
  ): result | Promise<result | null> | null;
}

```

## Properties

### name

Provider name used for session metadata and diagnostics.

## Methods

### parse(context: RequestContext): input | Promise<input>

Parses submitted credentials from the current request.

#### context

### verify(input: input, context: RequestContext): result | Promise<result | null> | null

Verifies parsed credentials and returns the authenticated result on success.

#### input

#### context