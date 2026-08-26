---
title: ListboxRef
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/listbox/index.ts#L46
---

# ListboxRef

## Signature

```ts
interface ListboxRef {
  active: ListboxRegisteredOption | undefined
  highlight: (value: ListboxValue) => void
  highlightSearchMatch: (text: string) => void
  matchSearchText: (text: string, fromValue?: ListboxValue) => ListboxRegisteredOption | null
  navigateFirst: () => void
  navigateLast: () => void
  navigateNext: () => void
  navigatePrevious: () => void
  options: readonly ListboxRegisteredOption[]
  scrollActiveOptionIntoView: () => void
  select: (value: ListboxValue) => Promise<void>
  selectActive: () => Promise<void>
  selected: ListboxRegisteredOption | undefined
}

```