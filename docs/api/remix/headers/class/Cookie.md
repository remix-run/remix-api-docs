---
title: Cookie
---

# Cookie

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/cookie.ts#L17" target="_blank">View Source</a>

## Summary

The value of a `Cookie` HTTP header.

[MDN `Cookie` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc6265#section-4.2)

## Constructor

### init

## Properties

### names

An array of the names of the cookies in the header.

### size

The number of cookies in the header.

### values

An array of the values of the cookies in the header.

## Methods

### [iterator](): IterableIterator<[string, string]>

### clear(): void

Removes all cookies from the header.

### delete(name: string): void

Removes a cookie with the given name from the header.

#### name

The name of the cookie

### entries(): IterableIterator<[string, string]>

Returns an iterator of all cookie name and value pairs.

### forEach(callback: (name: string, value: string, header: Cookie) => void, thisArg: any): void

Invokes the callback for each cookie name and value pair.

#### callback

The function to call for each pair

#### thisArg

The value to use as `this` when calling the callback

### get(name: string): string | null

Gets the value of a cookie with the given name from the header.

#### name

The name of the cookie

### has(name: string): boolean

True if a cookie with the given name exists in the header.

#### name

The name of the cookie

### set(name: string, value: string): void

Sets a cookie with the given name and value in the header.

#### name

The name of the cookie

#### value

The value of the cookie

### toString(): string

Returns the string representation of the header value.

### from(value: string | CookieInit | null): Cookie

Parse a Cookie header value.

#### value

The header value (string, init object, or null)