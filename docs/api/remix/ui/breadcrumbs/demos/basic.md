# Breadcrumbs Basic

A basic breadcrumb trail linking back through the page hierarchy.

```tsx
import { Breadcrumbs } from 'remix/ui/breadcrumbs'

export default function Example() {
  return () => (
    <Breadcrumbs
      items={[
        { href: '/', label: 'Home' },
        { href: '/components', label: 'Components' },
        { label: 'Breadcrumbs' },
      ]}
    />
  )
}

```
