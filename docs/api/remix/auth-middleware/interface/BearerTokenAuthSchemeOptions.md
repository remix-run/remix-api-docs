---
title: BearerTokenAuthSchemeOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/schemes/bearer.ts#L10
---

# BearerTokenAuthSchemeOptions

## Summary

Options for creating a bearer-token auth scheme.

## Signature

```ts
interface BearerTokenAuthSchemeOptions<identity> {
  challenge?: string;
  headerName?: string;
  name?: string;
  scheme?: string;
  verify(
    token: string,
    context: RequestContext,
  ): identity | Promise<identity | null> | null;
}

```

## Properties

### challenge

Challenge value returned when the scheme rejects credentials.

### headerName

Request header that carries the bearer token.

### name

Method name exposed on the resolved auth state.

### scheme

Authorization scheme prefix expected in the header value.

## Methods

### verify(token: string, context: RequestContext): identity | Promise<identity | null> | null

Verifies a parsed bearer token and returns the resolved identity on success.

#### `token`

#### `context`