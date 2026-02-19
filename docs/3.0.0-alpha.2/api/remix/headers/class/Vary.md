---
title: Vary
---

# Vary

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/vary.ts#L22" target="_blank">View Source</a>

## Summary

The value of a `Vary` HTTP header.

The `Vary` header indicates which request headers affect whether a cached
response can be used, enabling proper content negotiation caching.

Header names are normalized to lowercase for case-insensitive comparison.

[MDN `Vary` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)

[HTTP/1.1 Specification](https://httpwg.org/specs/rfc9110.html#field.vary)

## Constructor

### init

## Properties

### headerNames

An array of the header names (normalized to lowercase).

### size

The number of header names in the Vary header.

## Methods

### [iterator](): IterableIterator<string>

### add(headerName: string): void

Adds a header name to the Vary header (case-insensitive).
If the header name already exists, this is a no-op.

#### headerName

The header name to add.

### clear(): void

Removes all header names from the Vary header.

### delete(headerName: string): void

Removes a header name from the Vary header (case-insensitive).

#### headerName

The header name to remove.

### forEach(callback: (headerName: string, vary: Vary) => void, thisArg: any): void

Calls a callback function for each header name in the Vary header.

#### callback

The callback function to call for each header name.

#### thisArg

Optional value to use as `this` when executing the callback.

### has(headerName: string): boolean

Checks if the Vary header includes the given header name (case-insensitive).

#### headerName

The header name to check for.

### toString(): string

### from(value: string | string[] | VaryInit | null): Vary

Parse a Vary header value.

#### value

The header value (string, string[], init object, or null)