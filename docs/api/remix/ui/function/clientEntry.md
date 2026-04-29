---
title: clientEntry
---

# clientEntry

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/client-entries.ts#L89" target="_blank">View Source</a>

## Summary

Marks a component as a client entry for client-side hydration.

## Signature

```ts
function clientEntry<props extends SerializableProps, context>(
  entryId: string,
  component: (handle: Handle<props, context>) => RenderFn,
): EntryComponent<props, context>;

function clientEntry<props extends SerializableProps, context>(
  entryId: string,
  component: (
    handle: Handle<Record<string, never>, context>,
  ) => RenderFn<props>,
): EntryComponent<props, context>;

```

## Example

```tsx
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

## Params

### entryId

Module URL with optional export name (format: "/js/module.js#ExportName") by
default, or a custom entry identifier when paired with `resolveClientEntry`

### component

Component function that will be hydrated on the client

## Returns

The component augmented with entry metadata