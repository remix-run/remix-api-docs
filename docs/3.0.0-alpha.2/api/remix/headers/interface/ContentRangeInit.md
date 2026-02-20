---
title: ContentRangeInit
---

# ContentRangeInit

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/content-range.ts#L6" target="_blank">View Source</a>

## Summary

Initializer for a `Content-Range` header value.

## Signature

```ts
interface ContentRangeInit {
  end?: number | null;
  size?: number | "*";
  start?: number | null;
  unit?: string;
}

```

## Properties

### end

The end position of the range (inclusive)
Set to null for unsatisfied ranges

### size

The total size of the resource
Set to '*' for unknown size

### start

The start position of the range (inclusive)
Set to null for unsatisfied ranges

### unit

The unit of the range, typically "bytes"