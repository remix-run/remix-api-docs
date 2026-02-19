---
title: AcceptLanguage
---

# AcceptLanguage

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/accept-language.ts#L17" target="_blank">View Source</a>

## Summary

The value of a `Accept-Language` HTTP header.

[MDN `Accept-Language` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.5)

## Constructor

### init

## Properties

### languages

An array of all languages in the header.

### size

The number of languages in the header.

### weights

An array of all weights (q values) in the header.

## Methods

### [iterator](): IterableIterator<[string, number]>

### accepts(language: string): boolean

Returns `true` if the header matches the given language (i.e. it is "acceptable").

#### language

The locale identifier of the language to check

### clear(): void

Removes all languages from the header.

### delete(language: string): void

Removes a language with the given locale identifier.

#### language

The locale identifier of the language to remove

### entries(): IterableIterator<[string, number]>

Returns an iterator of all language and weight pairs.

### forEach(callback: (language: string, weight: number, header: AcceptLanguage) => void, thisArg: any): void

Invokes the callback for each language and weight pair.

#### callback

The function to call for each pair

#### thisArg

The value to use as `this` when calling the callback

### get(language: string): number | null

Gets the weight of a language with the given locale identifier. If it is not in the header
verbatim, this returns `null`.

#### language

The locale identifier of the language to get

### getPreferred(languages: readonly language[]): language | null

Returns the most preferred language from the given list of languages.

#### languages

The locale identifiers of the languages to choose from

### getWeight(language: string): number

Gets the weight of a language with the given locale identifier. Performs wildcard and subtype
matching, so `en` matches `en-US` and `en-GB`, and `*` matches all languages.

#### language

The locale identifier of the language to get

### has(language: string): boolean

Checks if the header contains a language with the given locale identifier.

#### language

The locale identifier of the language to check

### set(language: string, weight: number): void

Sets a language with the given weight.

#### language

The locale identifier of the language to set

#### weight

The weight of the language (default: `1`)

### toString(): string

Returns the string representation of the header value.

### from(value: string | AcceptLanguageInit | null): AcceptLanguage

Parse an Accept-Language header value.

#### value

The header value (string, init object, or null)