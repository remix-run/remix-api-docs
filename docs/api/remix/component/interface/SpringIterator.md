---
title: SpringIterator
---

# SpringIterator

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/spring.ts#L32" target="_blank">View Source</a>

## Summary

Iterator returned by spring, decorated for CSS and WAAPI use.

## Signature

```ts
interface SpringIterator {
  duration: number;
  easing: string;
  [iterator](): IterableIterator<number, any, any>;
  next(__namedParameters: [] | [any]): IteratorResult<number, any>;
  return(value: any): IteratorResult<number, any>;
  throw(e: any): IteratorResult<number, any>;
  toString(): string;
}

```

## Properties

### duration

Time when spring settles to rest (milliseconds)

### easing

CSS linear() easing function

## Methods

### [iterator](): IterableIterator<number, any, any>

### next(__namedParameters: [] | [any]): IteratorResult<number, any>

#### __namedParameters

### return(value: any): IteratorResult<number, any>

#### value

### throw(e: any): IteratorResult<number, any>

#### e

### toString(): string

Returns "duration ms linear(...)" for CSS transitions