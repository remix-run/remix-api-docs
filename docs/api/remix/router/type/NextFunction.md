---
title: NextFunction
---

# NextFunction

## Summary

A function that invokes the next middleware or handler in the chain.

## Signature

```ts
type NextFunction = () => Promise<Response>;

```