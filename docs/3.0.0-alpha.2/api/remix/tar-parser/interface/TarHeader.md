---
title: TarHeader
---

# TarHeader

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/tar-parser/src/lib/tar.ts#L31" target="_blank">View Source</a>

## Summary

The parsed header of a tar entry.

## Signature

```ts
interface TarHeader {
  devmajor: number | null;
  devminor: number | null;
  gid: number | null;
  gname: string;
  linkname: string | null;
  mode: number | null;
  mtime: number | null;
  name: string;
  pax: Record<string, string> | null;
  size: number;
  type: string;
  uid: number | null;
  uname: string;
}

```

## Properties

### devmajor

### devminor

### gid

### gname

### linkname

### mode

### mtime

### name

### pax

### size

### type

### uid

### uname