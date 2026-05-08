---
title: IfMatch
source: https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/if-match.ts#L21
---

# IfMatch

## Summary

The value of an `If-Match` HTTP header.

[MDN `If-Match` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7232#section-3.1)

## Signature

```ts
class IfMatch {
  constructor(init: string | string[] | IfMatchInit): IfMatch;

  // Properties
  tags: string[];

  // Methods
  has(tag: string): boolean;
  matches(tag: string): boolean;
  toString(): string;
  from(value: string | string[] | IfMatchInit | null): IfMatch;
}

```

## Properties

### `tags`

Entity tags carried by the header.

## Methods

### `has(tag: string): boolean`

Checks if the header contains the given entity tag.

Note: This method checks only for exact matches and does not consider wildcards.

#### Parameters

##### `tag`

The entity tag to check for

### `matches(tag: string): boolean`

Checks if the precondition passes for the given entity tag.

This method always returns `true` if the `If-Match` header is not present
since the precondition passes regardless of the entity tag being checked.

Uses strong comparison as per RFC 9110, meaning weak entity tags (prefixed with `W/`)
will never match.

#### Parameters

##### `tag`

The entity tag to check against

### `toString(): string`

Returns the string representation of the header value.



### `from(value: string | string[] | IfMatchInit | null): IfMatch`

Parse an If-Match header value.

#### Parameters

##### `value`

The header value (string, string[], init object, or null)