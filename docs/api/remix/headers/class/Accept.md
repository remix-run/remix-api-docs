---
title: Accept
---

# Accept

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/accept.ts#L17" target="_blank">View Source</a>

## Summary

The value of a `Accept` HTTP header.

[MDN `Accept` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.2)

## Constructor

### init

## Properties

### mediaTypes

An array of all media types in the header.

### size

The number of media types in the `Accept` header.

### weights

An array of all weights (q values) in the header.

## Methods

### [iterator](): IterableIterator<[string, number]>

### accepts(mediaType: string): boolean

Returns `true` if the header matches the given media type (i.e. it is "acceptable").

#### mediaType

The media type to check

### clear(): void

Removes all media types from the header.

### delete(mediaType: string): void

Removes the given media type from the header.

#### mediaType

The media type to remove

### entries(): IterableIterator<[string, number]>

Returns an iterator of all media type and weight pairs.

### forEach(callback: (mediaType: string, weight: number, header: Accept) => void, thisArg: any): void

Invokes the callback for each media type and weight pair.

#### callback

The function to call for each pair

#### thisArg

The value to use as `this` when calling the callback

### get(mediaType: string): number | null

Returns the weight of a media type. If it is not in the header verbatim, this returns `null`.

#### mediaType

The media type to get the weight of

### getPreferred(mediaTypes: readonly mediaType[]): mediaType | null

Returns the most preferred media type from the given list of media types.

#### mediaTypes

The list of media types to choose from

### getWeight(mediaType: string): number

Gets the weight of a given media type. Also supports wildcards, so e.g. `text/*` will match `text/html`.

#### mediaType

The media type to get the weight of

### has(mediaType: string): boolean

Checks if a media type is in the header.

#### mediaType

The media type to check

### set(mediaType: string, weight: number): void

Sets a media type with the given weight.

#### mediaType

The media type to set

#### weight

The weight of the media type (default: `1`)

### toString(): string

Returns the string representation of the header value.

### from(value: string | AcceptInit | null): Accept

Parse an Accept header value.

#### value

The header value (string, init object, or null)