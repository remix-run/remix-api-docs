---
title: MatchData
---

# MatchData

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-router/src/lib/router.ts#L20" target="_blank">View Source</a>

## Summary

Normalized route match payload stored in the router matcher.

## Signature

```ts
type MatchData = {
  handler: RequestHandler<any>;
  method: RequestMethod | "ANY";
  middleware: Middleware<any>[] | undefined;
};

```