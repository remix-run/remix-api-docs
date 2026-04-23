---
title: APIAuthSchemeOptions
---

# APIAuthSchemeOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth-middleware/src/lib/schemes/api-key.ts#L8" target="_blank">View Source</a>

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

#### key

#### context