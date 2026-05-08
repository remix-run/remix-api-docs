---
title: RoutePattern
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/route-pattern.ts#L61
---

# RoutePattern

## Summary

A class for matching and generating URLs based on a defined pattern.

## Signature

```ts
class RoutePattern<source> {
  constructor(source: source): RoutePattern<source>;

  // Properties
  ast: AST;

  // Accessors
  get hostname(): string;
  get pathname(): string;
  get port(): string;
  get protocol(): string;
  get search(): string;
  get source(): string;

  // Methods
  href(args: HrefArgs<source>): string;
  join<other extends string>(
    other: other | RoutePattern<other>,
  ): RoutePattern<Join<source, other>>;
  match(
    url: string | URL,
    options: { ignoreCase?: boolean },
  ): RoutePatternMatch<source> | null;
  test(url: string | URL): boolean;
  toString(): string;
}

```

## Properties

### `ast`

Parsed route-pattern AST used for matching and href generation.

## Accessors

### `hostname`

The hostname portion of the pattern.

### `pathname`

The pathname portion of the pattern without a leading slash.

### `port`

The explicit port portion of the pattern.

### `protocol`

The protocol portion of the pattern without the trailing colon.

### `search`

The serialized search constraints without a leading `?`.

### `source`

The serialized route-pattern source string.

## Methods

### `href(args: HrefArgs<source>): string`

Builds an href from this pattern and the supplied params.

#### Parameters

##### `args`

Path params and optional search params.

### `join<other extends string>(other: other | RoutePattern<other>): RoutePattern<Join<source, other>>`

Joins this pattern with another pathname or route pattern.



### `match(url: string | URL, options: { ignoreCase?: boolean }): RoutePatternMatch<source> | null`

Match a URL against this pattern.

#### Parameters

##### `url`

The URL to match

##### `options`

Match options

### `test(url: string | URL): boolean`

Tests whether a URL matches this route pattern.

#### Parameters

##### `url`

URL to test.

### `toString(): string`

Returns the serialized route-pattern source string.

