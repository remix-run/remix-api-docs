---
title: RoutePattern
---

# RoutePattern

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/route-pattern/src/lib/route-pattern.ts#L47" target="_blank">View Source</a>

## Summary

A class for matching and generating URLs based on a defined pattern.

## Constructor

### source

## Properties

### ast

### hostname

### pathname

### port

### protocol

### search

### source

## Methods

### href(args: HrefArgs<source>): string

#### args

### join(other: other | RoutePattern<other>): RoutePattern<Join<source, other>>

#### other

### match(url: string | URL, options: { ignoreCase?: boolean }): RoutePatternMatch<source> | null

Match a URL against this pattern.

#### url

The URL to match

#### options

Match options

### test(url: string | URL): boolean

#### url

### toString(): string