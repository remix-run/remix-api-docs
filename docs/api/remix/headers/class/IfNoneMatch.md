---
title: IfNoneMatch
---

# IfNoneMatch

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/if-none-match.ts#L21" target="_blank">View Source</a>

## Summary

The value of an `If-None-Match` HTTP header.

[MDN `If-None-Match` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7232#section-3.2)

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

Checks if this header matches the given entity tag.

#### tag

The entity tag to check for

### toString(): string

Returns the string representation of the header value.

### from(value: string | string[] | IfNoneMatchInit | null): IfNoneMatch

Parse an If-None-Match header value.

#### value

The header value (string, string[], init object, or null)