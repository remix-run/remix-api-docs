---
title: clientEntry
---

# clientEntry

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/client-entries.ts#L86" target="_blank">View Source</a>

## Summary

Marks a component as a client entry for client-side hydration.

## Signature

```ts
function clientEntry(
  href: string,
  component: (
    handle: Handle<context>,
    setup: setup,
  ) => (props: props) => RemixNode,
): EntryComponent<context, setup, props>;

```

## Example

```tsx
export const Counter = clientEntry(
  '/js/counter.js#Counter',
  (handle: Handle, setup: number) {
    let count = setup

    return ({ label }: { label: string }) => (
      <button
        type="button"
        on={{
          click: () => {
            count++
            handle.update()
          },
        }}
      >
        {label} {count}
      </button>
    )
  }
)
```

## Params

### href

Module URL with optional export name (format: "/js/module.js#ExportName")

### component

Component function that will be hydrated on the client

## Returns

The component augmented with entry metadata