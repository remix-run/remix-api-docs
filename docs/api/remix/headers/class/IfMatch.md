---
title: IfMatch
---

# IfMatch

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/if-match.ts#L21" target="_blank">View Source</a>

## Summary

The value of an `If-Match` HTTP header.

[MDN `If-Match` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7232#section-3.1)

## Constructor

### init

## Properties

### tags

The entity tags to compare against the current entity.

## Methods

### has(tag: string): boolean

Checks if the header contains the given entity tag.

Note: This method checks only for exact matches and does not consider wildcards.

#### tag

The entity tag to check for

### matches(tag: string): boolean

Checks if the precondition passes for the given entity tag.

This method always returns `true` if the `If-Match` header is not present
since the precondition passes regardless of the entity tag being checked.

Uses strong comparison as per RFC 9110, meaning weak entity tags (prefixed with `W/`)
will never match.

#### tag

The entity tag to check against

### toString(): string

Returns the string representation of the header value.

### from(value: string | string[] | IfMatchInit | null): IfMatch

Parse an If-Match header value.

#### value

The header value (string, string[], init object, or null)