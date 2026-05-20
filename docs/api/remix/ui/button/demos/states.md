# Button States

Buttons support normal, disabled, and busy (loading) states using aria attributes.

```tsx
import * as button from 'remix/ui/button'
import { css } from 'remix/ui'
import { Glyph } from 'remix/ui/glyph'
import { theme } from 'remix/ui/theme'

export default function Example() {
  return () => (
    <div mix={buttonRowCss}>
      <button mix={[button.baseStyle, button.primaryStyle]}>
        <Glyph mix={button.iconStyle} name="add" />
        <span mix={button.labelStyle}>New issue</span>
      </button>

      <button mix={[button.baseStyle, button.ghostStyle]}>
        <span mix={button.labelStyle}>Open</span>
        <Glyph mix={button.iconStyle} name="chevronRight" />
      </button>

      <button disabled mix={[button.baseStyle, button.secondaryStyle]}>
        <span mix={button.labelStyle}>Disabled</span>
      </button>

      <button aria-busy="true" mix={[button.baseStyle, button.secondaryStyle]}>
        <Glyph
          mix={[button.iconStyle, spinnerGlyphCss, spinCss]}
          name="spinner"
        />
        <span mix={button.labelStyle}>Saving</span>
      </button>
    </div>
  )
}

const buttonRowCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: theme.space.sm,
})

const spinnerGlyphCss = css({
  opacity: 0.72,
})

const spinCss = css({
  '@keyframes demo-button-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  animation: 'demo-button-spin 1s linear infinite',
})

```
