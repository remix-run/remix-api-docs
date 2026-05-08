---
title: Button
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/components/button/button.tsx#L208
---

# Button

## Summary

Renders a `<button>` with `baseStyle` and the resolved tone style, along with
optional start and end icons.

## Signature

```ts
function Button(handle: Handle<ButtonProps>): () => RemixElement;

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