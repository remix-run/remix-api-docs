---
title: ListboxProviderProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/components/listbox/listbox.ts#L46
---

# ListboxProviderProps

## Signature

```ts
interface ListboxProviderProps {
  activeValue: ListboxValue;
  children?: RemixNode;
  flashSelection?: boolean;
  onHighlight: (value: ListboxValue, option?: ListboxRegisteredOption) => void;
  onSelect: (value: ListboxValue, option?: ListboxRegisteredOption) => void;
  onSelectSettled?: (
    value: ListboxValue,
    option?: ListboxRegisteredOption,
  ) => void | Promise<void>;
  ref?: (ref: ListboxRef) => void;
  selectionFlashAttribute?: string;
  value: ListboxValue;
}

```