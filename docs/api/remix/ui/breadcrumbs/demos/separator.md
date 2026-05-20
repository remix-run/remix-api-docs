# Breadcrumbs with Separator

Pass a custom separator string to override the default chevron icon.

```tsx
import { Breadcrumbs } from 'remix/ui/breadcrumbs'

export default function Example() {
  return () => (
    <Breadcrumbs
      items={[
        { href: '/', label: 'Workspace' },
        { href: '/projects', label: 'Projects' },
        { label: 'RMX_01' },
      ]}
      separator="/"
    />
  )
}

```
