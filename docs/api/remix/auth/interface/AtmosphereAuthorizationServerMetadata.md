---
title: AtmosphereAuthorizationServerMetadata
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/atmosphere.ts#L44
---

# AtmosphereAuthorizationServerMetadata

## Summary

Authorization server metadata used by the Atmosphere provider.

## Signature

```ts
interface AtmosphereAuthorizationServerMetadata {
  authorization_endpoint: string;
  authorization_response_iss_parameter_supported?: boolean;
  client_id_metadata_document_supported?: boolean;
  code_challenge_methods_supported?: string[];
  dpop_signing_alg_values_supported?: string[];
  grant_types_supported?: string[];
  issuer: string;
  pushed_authorization_request_endpoint: string;
  require_pushed_authorization_requests?: boolean;
  response_types_supported?: string[];
  scopes_supported?: string | string[];
  token_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
}

```

## Properties

### `authorization_endpoint`

Browser authorization endpoint used after PAR completes.

### `authorization_response_iss_parameter_supported`

Indicates whether the `iss` query parameter is returned in callbacks.

### `client_id_metadata_document_supported`

Indicates whether the server supports client metadata document lookup.

### `code_challenge_methods_supported`

PKCE challenge methods accepted by the authorization server.

### `dpop_signing_alg_values_supported`

DPoP signing algorithms accepted by the authorization server.

### `grant_types_supported`

OAuth grant types accepted by the authorization server.

### `issuer`

Issuer origin for the authorization server.

### `pushed_authorization_request_endpoint`

Pushed authorization request endpoint required by atproto OAuth.

### `require_pushed_authorization_requests`

Indicates whether the authorization server requires PAR.

### `response_types_supported`

OAuth response types accepted by the authorization server.

### `scopes_supported`

Scopes advertised by the authorization server.

### `token_endpoint`

Token endpoint used for authorization-code exchanges.

### `token_endpoint_auth_methods_supported`

Token endpoint auth methods accepted by the authorization server.

### `token_endpoint_auth_signing_alg_values_supported`

Signing algorithms accepted for private-key JWT client authentication.