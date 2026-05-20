---
title: RunRemixOptions
---

# RunRemixOptions

## Summary

Options accepted by [`runRemix`](/api/remix/cli/function/runRemix/).

## Signature

```ts
interface RunRemixOptions {
  cwd?: string;
  remixVersion?: string;
}

```

## Properties

### `cwd`

Directory used as the working root when resolving project files (default
`process.cwd()`).

### `remixVersion`

Override for the Remix version reported by `remix --version`. Defaults to
the version of the installed `@remix-run/cli` package.