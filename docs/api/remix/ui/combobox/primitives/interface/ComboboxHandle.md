---
title: ComboboxHandle
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/combobox/primitives.tsx#L60
---

# ComboboxHandle

## Signature

```ts
interface ComboboxHandle {
  activeOptionId: string | null;
  close: () => void;
  id: string;
  inputText: string;
  isOpen: boolean;
  label: string | null;
  open: (strategy?: ComboboxOpenStrategy) => Promise<void>;
  value: string | null;
}

```