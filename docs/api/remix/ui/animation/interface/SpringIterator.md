---
title: SpringIterator
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/animation/spring.ts#L32
---

# SpringIterator

## Summary

Iterator returned by [`spring`](/api/remix/ui/animation/function/spring/), decorated for CSS and WAAPI use.

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

### `duration`

Time when spring settles to rest (milliseconds)

### `easing`

CSS linear() easing function

## Methods

### `[iterator](): IterableIterator<number, any, any>`



### `next(__namedParameters: [] | [any]): IteratorResult<number, any>`



### `return(value: any): IteratorResult<number, any>`



### `throw(e: any): IteratorResult<number, any>`



### `toString(): string`

Returns "duration ms linear(...)" for CSS transitions

