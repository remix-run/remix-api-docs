---
title: TabsContextValue
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/ui/src/tabs/primitives.ts#L29
---

# TabsContextValue

## Signature

```ts
interface TabsContextValue {
  activeTab: string | null
  disabled: boolean
  activateTab(name: string): void
  activateTabInDirection(name: string, direction: TabsActivationDirection): void
  getPanelId(name: string): string
  getTabId(name: string): string
  isActiveTab(name: string): boolean
  registerRoot(node: HTMLElement): void
  registerTab(tab: TabsRegisteredTab): void
  unregisterRoot(node: HTMLElement): void
}

```