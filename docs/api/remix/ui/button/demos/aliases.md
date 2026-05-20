# Button Component

The Button component wraps the low-level style primitives and accepts a tone prop for quick theming.

```tsx
import { Button } from 'remix/ui/button'
import { css } from 'remix/ui'
import { theme } from 'remix/ui/theme'

export default function Example() {
  return () => (
    <div mix={buttonRowCss}>
      <Button tone="primary" type="submit">
        Save
      </Button>
      <Button tone="secondary">Secondary</Button>
      <Button tone="ghost">Ghost</Button>
      <Button tone="danger">Delete</Button>
    </div>
  )
}

const buttonRowCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: theme.space.sm,
})

```
