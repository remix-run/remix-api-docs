---
title: ListboxProviderProps
---

# ListboxProviderProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/listbox/listbox.ts#L46" target="_blank">View Source</a>

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