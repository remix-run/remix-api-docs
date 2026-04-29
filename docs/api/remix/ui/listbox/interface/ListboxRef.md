---
title: ListboxRef
---

# ListboxRef

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/listbox/listbox.ts#L56" target="_blank">View Source</a>

## Signature

```ts
interface ListboxRef {
  active: ListboxRegisteredOption | undefined;
  highlight: (value: ListboxValue) => void;
  highlightSearchMatch: (text: string) => void;
  matchSearchText: (
    text: string,
    fromValue?: ListboxValue,
  ) => ListboxRegisteredOption | null;
  navigateFirst: () => void;
  navigateLast: () => void;
  navigateNext: () => void;
  navigatePrevious: () => void;
  options: readonly ListboxRegisteredOption[];
  scrollActiveOptionIntoView: () => void;
  select: (value: ListboxValue) => Promise<void>;
  selectActive: () => Promise<void>;
  selected: ListboxRegisteredOption | undefined;
}

```