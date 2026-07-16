---
title: ListboxContext
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/listbox/index.ts#L27
---

# ListboxContext

## Signature

```ts
interface ListboxContext {
  activeValue: ListboxValue
  highlight: (value: ListboxValue) => void
  highlightSearchMatch: (text: string) => void
  navigate: (direction: NavigationStrategy) => void
  registerOption: (option: RegisteredOption) => void
  scrollActiveOptionIntoView: () => void
  select: (value: ListboxValue) => Promise<void>
  value: ListboxValue
}

```