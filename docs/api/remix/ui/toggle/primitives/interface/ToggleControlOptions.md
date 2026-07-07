---
title: ToggleControlOptions
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/toggle/primitives.ts#L4
---

# ToggleControlOptions

## Signature

```ts
interface ToggleControlOptions {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  form?: string;
  inputRef?: (input: HTMLInputElement, signal: AbortSignal) => void;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  readOnly?: boolean;
  required?: boolean;
  tabIndex?: number;
  value?: string;
}

```