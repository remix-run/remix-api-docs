---
title: AcceptEncoding
---

# AcceptEncoding

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/accept-encoding.ts#L17" target="_blank">View Source</a>

## Summary

The value of a `Accept-Encoding` HTTP header.

[MDN `Accept-Encoding` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.4)

## Constructor

### init

## Properties

### encodings

An array of all encodings in the header.

### size

The number of encodings in the header.

### weights

An array of all weights (q values) in the header.

## Methods

### [iterator](): IterableIterator<[string, number]>

### accepts(encoding: string): boolean

Returns `true` if the header matches the given encoding (i.e. it is "acceptable").

#### encoding

The encoding to check

### clear(): void

Removes all encodings from the header.

### delete(encoding: string): void

Removes the given encoding from the header.

#### encoding

The encoding to remove

### entries(): IterableIterator<[string, number]>

Returns an iterator of all encoding and weight pairs.

### forEach(callback: (encoding: string, weight: number, header: AcceptEncoding) => void, thisArg: any): void

Invokes the callback for each encoding and weight pair.

#### callback

The function to call for each pair

#### thisArg

The value to use as `this` when calling the callback

### get(encoding: string): number | null

Gets the weight of an encoding. If it is not in the header verbatim, this returns `null`.

#### encoding

The encoding to get

### getPreferred(encodings: readonly encoding[]): encoding | null

Returns the most preferred encoding from the given list of encodings.

#### encodings

The encodings to choose from

### getWeight(encoding: string): number

Gets the weight an encoding. Performs wildcard matching so `*` matches all encodings.

#### encoding

The encoding to get

### has(encoding: string): boolean

Checks if the header contains a given encoding.

#### encoding

The encoding to check

### set(encoding: string, weight: number): void

Sets an encoding with the given weight.

#### encoding

The encoding to set

#### weight

The weight of the encoding (default: `1`)

### toString(): string

Returns the string representation of the header value.

### from(value: string | AcceptEncodingInit | null): AcceptEncoding

Parse an Accept-Encoding header value.

#### value

The header value (string, init object, or null)