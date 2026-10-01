---
title: "clientEntry"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/client-entries.ts#L101"
---

# clientEntry

## Summary

Marks a component as a client entry for client-side hydration.

## Signature

```ts
function clientEntry<props extends object, context>(
  entryId: string,
  component: (
    handle: Handle<props, context>,
  ) => RenderFn & ([props] extends [SerializableProps<props>] ? unknown : never),
): EntryComponent<props, context>

```

## Example

```ts
export const Counter = clientEntry(
  '/js/counter.js#Counter',
  function Counter(handle: Handle<{ initialCount?: number; label: string }>) {
    let count = handle.props.initialCount ?? 0

    return () => (
      <button
        type="button"
        mix={[
          on('click', () => {
            count++
            handle.update()
          }),
        ]}
      >
        {handle.props.label} {count}
      </button>
    )
  }
)
```

## Parameters

### `entryId`

Module URL with optional export name (format: "/js/module.js#ExportName") by
default, or a custom entry identifier when paired with `resolveClientEntry`

### `component`

Component function that will be hydrated on the client

## Returns

The component augmented with entry metadata