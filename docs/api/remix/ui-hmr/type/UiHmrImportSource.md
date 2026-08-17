---
title: UiHmrImportSource
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/ui-hmr/src/lib/transform.ts#L29
---

# UiHmrImportSource

## Summary

Package prefix used for generated UI refresh and HMR runtime imports.

Use `'remix'` for imports such as `remix/ui-hmr/runtime/browser`, `'@remix-run'` for the
equivalent scoped packages, or a custom prefix that exposes the same subpaths.

## Signature

```ts
type UiHmrImportSource = 'remix' | '@remix-run' | (string & {})

```