---
title: Button
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/ui/src/components/button/button.tsx#L218
---

# Button

## Summary

Renders a `<button>` with `baseStyle` and the resolved tone style, along with
optional start and end icons.

## Signature

```ts
function Button(handle: Handle<ButtonProps>): () => RemixNode;

```

## Example

```ts
import { Button } from "@remix-run/ui/button";
import { Glyph } from "@remix-run/ui/glyph";

<Button startIcon={<Glyph name="add" />} tone="primary">
  Create project
</Button>;

```

## Parameters

### `handle`

Component handle providing the runtime API and the resolved [`ButtonProps`](/api/remix/ui/button/type/ButtonProps/).

## Returns

A render function for the button element.