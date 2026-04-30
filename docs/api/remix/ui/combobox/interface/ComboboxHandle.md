---
title: ComboboxHandle
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/components/combobox/combobox.tsx#L107
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