---
title: CreateHrefErrorDetails
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/href.ts#L208
---

# CreateHrefErrorDetails

## Summary

Structured details for a [`CreateHrefError`](/api/remix/route-pattern/href/class/CreateHrefError/).

## Signature

```ts
type CreateHrefErrorDetails =
  | { pattern: RoutePattern; type: "missing-hostname" }
  | {
      missingParams: string[];
      params: Record<string, unknown>;
      pattern: RoutePattern;
      type: "missing-params";
    }
  | { pattern: RoutePattern; type: "nameless-wildcard" }
  | { char: string; type: "invalid-hostname-variable"; value: string }
  | { char: string; type: "invalid-hostname-wildcard"; value: string }
  | {
      paramName: string;
      pattern: RoutePattern;
      type: "invalid-pathname-variable";
      value: string;
    };

```