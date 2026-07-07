---
title: RunRemixOptions
source: https://github.com/remix-run/remix/blob/main/packages/cli/src/lib/cli.ts#L11
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