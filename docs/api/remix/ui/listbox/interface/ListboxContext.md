---
title: ListboxContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/components/listbox/listbox.ts#L37
---

# ListboxContext

## Signature

```ts
interface ListboxContext {
  activeValue: ListboxValue;
  highlight: (value: ListboxValue) => void;
  highlightSearchMatch: (text: string) => void;
  navigate: (direction: NavigationStrategy) => void;
  registerOption: (option: RegisteredOption) => void;
  scrollActiveOptionIntoView: () => void;
  select: (value: ListboxValue) => Promise<void>;
  value: ListboxValue;
}

```