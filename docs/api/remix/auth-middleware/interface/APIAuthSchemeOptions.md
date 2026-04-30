---
title: APIAuthSchemeOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/schemes/api-key.ts#L8
---

# APIAuthSchemeOptions

## Summary

Options for creating an API-key auth scheme.

## Signature

```ts
interface APIAuthSchemeOptions<identity> {
  headerName?: string;
  name?: string;
  verify(
    key: string,
    context: RequestContext,
  ): identity | Promise<identity | null> | null;
}

```

## Properties

### headerName

Request header that carries the API key.

### name

Method name exposed on the resolved auth state.

## Methods

### verify(key: string, context: RequestContext): identity | Promise<identity | null> | null

Verifies a parsed API key and returns the resolved identity on success.

#### `key`

#### `context`