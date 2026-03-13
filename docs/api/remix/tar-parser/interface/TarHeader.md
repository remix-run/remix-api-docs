---
title: TarHeader
---

# TarHeader

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/tar-parser/src/lib/tar.ts#L31" target="_blank">View Source</a>

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

Major device number for device entries, or `null` when unavailable.

### devminor

Minor device number for device entries, or `null` when unavailable.

### gid

Numeric group ID parsed from the header, or `null` when unavailable.

### gname

Group name parsed from the header.

### linkname

Linked path target for link entries, or `null` when not present.

### mode

File mode parsed from the header, or `null` when unavailable.

### mtime

Last modification time parsed from the header, or `null` when unavailable.

### name

Entry path stored in the archive.

### pax

Decoded PAX metadata attached to the entry, or `null` when none is present.

### size

Entry size in bytes.

### type

Normalized entry type such as `file` or `directory`.

### uid

Numeric user ID parsed from the header, or `null` when unavailable.

### uname

User name parsed from the header.