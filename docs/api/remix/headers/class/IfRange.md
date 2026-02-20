---
title: IfRange
---

# IfRange

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/if-range.ts#L14" target="_blank">View Source</a>

## Summary

The value of an `If-Range` HTTP header.

The `If-Range` header can contain either an entity tag (ETag) or an HTTP date.

[MDN `If-Range` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7233#section-3.2)

## Constructor

### init

## Properties

### value

## Methods

### matches(resource: { etag?: string | null; lastModified?: number | Date | null }): boolean

Checks if the `If-Range` condition is satisfied for the current resource state.

This method always returns `true` if the `If-Range` header is not present,
meaning the range request should proceed unconditionally.

The `If-Range` header can contain either:
- An HTTP date (RFC 7231 IMF-fixdate format)
- An entity tag (ETag)

When comparing ETags, only strong entity tags are matched as per RFC 7233.
Weak entity tags (prefixed with `W/`) are never considered a match.

#### resource

The current resource state to compare against

### toString(): string

Returns the string representation of the header value.

### from(value: string | Date | null): IfRange

Parse an If-Range header value.

#### value

The header value (string, Date, or null)