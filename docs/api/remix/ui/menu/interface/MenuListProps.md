---
title: MenuListProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/components/menu/menu.tsx#L1386
---

# MenuListProps

## Summary

Get the props for a specific element type.

## Signature

```ts
interface MenuListProps {
  about?: string
  accesskey?: string
  accessKey?: string
  aria-activedescendant?: string
  aria-atomic?: Booleanish
  aria-autocomplete?: "list" | "none" | "inline" | "both"
  aria-braillelabel?: string
  aria-brailleroledescription?: string
  aria-busy?: Booleanish
  aria-checked?: Booleanish | "mixed"
  aria-colcount?: number
  aria-colindex?: number
  aria-colindextext?: string
  aria-colspan?: number
  aria-controls?: string
  aria-current?: "time" | "page" | Booleanish | "step" | "location" | "date"
  aria-describedby?: string
  aria-description?: string
  aria-details?: string
  aria-disabled?: Booleanish
  aria-dropeffect?: "copy" | "link" | "none" | "execute" | "move" | "popup"
  aria-errormessage?: string
  aria-expanded?: Booleanish
  aria-flowto?: string
  aria-grabbed?: Booleanish
  aria-haspopup?: "dialog" | "menu" | "grid" | "listbox" | "tree" | Booleanish
  aria-hidden?: Booleanish
  aria-invalid?: Booleanish | "grammar" | "spelling"
  aria-keyshortcuts?: string
  aria-label?: string
  aria-labelledby?: string
  aria-level?: number
  aria-live?: "off" | "assertive" | "polite"
  aria-modal?: Booleanish
  aria-multiline?: Booleanish
  aria-multiselectable?: Booleanish
  aria-orientation?: "horizontal" | "vertical"
  aria-owns?: string
  aria-placeholder?: string
  aria-posinset?: number
  aria-pressed?: Booleanish | "mixed"
  aria-readonly?: Booleanish
  aria-relevant?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"
  aria-required?: Booleanish
  aria-roledescription?: string
  aria-rowcount?: number
  aria-rowindex?: number
  aria-rowindextext?: string
  aria-rowspan?: number
  aria-selected?: Booleanish
  aria-setsize?: number
  aria-sort?: "none" | "ascending" | "descending" | "other"
  aria-valuemax?: number
  aria-valuemin?: number
  aria-valuenow?: number
  aria-valuetext?: string
  autocapitalize?: "none" | "off" | "on" | "sentences" | "words" | "characters"
  autoCapitalize?: "none" | "off" | "on" | "sentences" | "words" | "characters"
  autocorrect?: string
  autoCorrect?: string
  autofocus?: boolean
  autoFocus?: boolean
  children?: RemixNode
  class?: string
  className?: string
  contenteditable?: "" | Booleanish | "plaintext-only" | "inherit"
  contentEditable?: "" | Booleanish | "plaintext-only" | "inherit"
  datatype?: string
  dir?: "auto" | "rtl" | "ltr"
  disablePictureInPicture?: boolean
  draggable?: boolean
  elementtiming?: string
  elementTiming?: string
  enterkeyhint?: "search" | "enter" | "done" | "go" | "next" | "previous" | "send"
  exportparts?: string
  hidden?: boolean | "hidden" | "until-found"
  id?: string
  inert?: boolean
  inlist?: any
  innerHTML?: string
  inputmode?: string
  inputMode?: string
  is?: string
  itemid?: string
  itemID?: string
  itemprop?: string
  itemProp?: string
  itemref?: string
  itemRef?: string
  itemscope?: boolean
  itemScope?: boolean
  itemtype?: string
  itemType?: string
  key?: any
  lang?: string
  mix?: MixinDescriptor<HTMLDivElement, any, ElementProps>[]
  nonce?: string
  part?: string
  popover?: boolean | "auto" | "hint" | "manual"
  prefix?: string
  property?: string
  resource?: string
  results?: number
  role?: AriaRole
  slot?: string
  spellcheck?: boolean
  style?: string | StyleProps
  tabindex?: number
  tabIndex?: number
  title?: string
  translate?: boolean
  typeof?: string
  vocab?: string

}
```

## Properties

### `about`

The `about` HTML attribute.

### `accesskey`

The `accesskey` HTML attribute.

### `accessKey`

The `accessKey` HTML attribute.

### `aria-activedescendant`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

### `aria-atomic`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

### `aria-autocomplete`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

### `aria-braillelabel`

Defines a string value that labels the current element, which is intended to be converted into Braille.

### `aria-brailleroledescription`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

### `aria-busy`

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

### `aria-checked`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

### `aria-colcount`

Defines the total number of columns in a table, grid, or treegrid.

### `aria-colindex`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

### `aria-colindextext`

Defines a human readable text alternative of aria-colindex.

### `aria-colspan`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

### `aria-controls`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

### `aria-current`

Indicates the element that represents the current item within a container or set of related elements.

### `aria-describedby`

Identifies the element (or elements) that describes the object.

### `aria-description`

Defines a string value that describes or annotates the current element.

### `aria-details`

Identifies the element that provides a detailed, extended description for the object.

### `aria-disabled`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

### `aria-dropeffect`

Indicates what functions can be performed when a dragged object is released on the drop target.

### `aria-errormessage`

Identifies the element that provides an error message for the object.

### `aria-expanded`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

### `aria-flowto`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

### `aria-grabbed`

Indicates an element's "grabbed" state in a drag-and-drop operation.

### `aria-haspopup`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

### `aria-hidden`

Indicates whether the element is exposed to an accessibility API.

### `aria-invalid`

Indicates the entered value does not conform to the format expected by the application.

### `aria-keyshortcuts`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

### `aria-label`

Defines a string value that labels the current element.

### `aria-labelledby`

Identifies the element (or elements) that labels the current element.

### `aria-level`

Defines the hierarchical level of an element within a structure.

### `aria-live`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

### `aria-modal`

Indicates whether an element is modal when displayed.

### `aria-multiline`

Indicates whether a text box accepts multiple lines of input or only a single line.

### `aria-multiselectable`

Indicates that the user may select more than one item from the current selectable descendants.

### `aria-orientation`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

### `aria-owns`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

### `aria-placeholder`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

### `aria-posinset`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

### `aria-pressed`

Indicates the current "pressed" state of toggle buttons.

### `aria-readonly`

Indicates that the element is not editable, but is otherwise operable.

### `aria-relevant`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

### `aria-required`

Indicates that user input is required on the element before a form may be submitted.

### `aria-roledescription`

Defines a human-readable, author-localized description for the role of an element.

### `aria-rowcount`

Defines the total number of rows in a table, grid, or treegrid.

### `aria-rowindex`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

### `aria-rowindextext`

Defines a human readable text alternative of aria-rowindex.

### `aria-rowspan`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

### `aria-selected`

Indicates the current "selected" state of various widgets.

### `aria-setsize`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

### `aria-sort`

Indicates if items in a table or grid are sorted in ascending or descending order.

### `aria-valuemax`

Defines the maximum allowed value for a range widget.

### `aria-valuemin`

Defines the minimum allowed value for a range widget.

### `aria-valuenow`

Defines the current value for a range widget.

### `aria-valuetext`

Defines the human readable text alternative of aria-valuenow for a range widget.

### `autocapitalize`

The `autocapitalize` HTML attribute.

### `autoCapitalize`

The `autoCapitalize` HTML attribute.

### `autocorrect`

The `autocorrect` HTML attribute.

### `autoCorrect`

The `autoCorrect` HTML attribute.

### `autofocus`

The `autofocus` HTML attribute.

### `autoFocus`

The `autoFocus` HTML attribute.

### `children`

Child nodes to render inside the element.

### `class`

The `class` HTML attribute.

### `className`

The `className` HTML attribute.

### `contenteditable`

The `contenteditable` HTML attribute.

### `contentEditable`

The `contentEditable` HTML attribute.

### `datatype`

The `datatype` HTML attribute.

### `dir`

The `dir` HTML attribute.

### `disablePictureInPicture`

The `disablePictureInPicture` HTML attribute.

### `draggable`

The `draggable` HTML attribute.

### `elementtiming`

The `elementtiming` HTML attribute.

### `elementTiming`

The `elementTiming` HTML attribute.

### `enterkeyhint`

The `enterkeyhint` HTML attribute.

### `exportparts`

The `exportparts` HTML attribute.

### `hidden`

The `hidden` HTML attribute.

### `id`

The `id` HTML attribute.

### `inert`

The `inert` HTML attribute.

### `inlist`

The `inlist` HTML attribute.

### `innerHTML`

Set the innerHTML of the element directly.
When provided, children are ignored.
Use with caution as this can expose XSS vulnerabilities if the content is not sanitized.

### `inputmode`

The `inputmode` HTML attribute.

### `inputMode`

The `inputMode` HTML attribute.

### `is`

The `is` HTML attribute.

### `itemid`

The `itemid` HTML attribute.

### `itemID`

The `itemID` HTML attribute.

### `itemprop`

The `itemprop` HTML attribute.

### `itemProp`

The `itemProp` HTML attribute.

### `itemref`

The `itemref` HTML attribute.

### `itemRef`

The `itemRef` HTML attribute.

### `itemscope`

The `itemscope` HTML attribute.

### `itemScope`

The `itemScope` HTML attribute.

### `itemtype`

The `itemtype` HTML attribute.

### `itemType`

The `itemType` HTML attribute.

### `key`

The reconciliation key for the element.

### `lang`

The `lang` HTML attribute.

### `mix`

### `nonce`

The `nonce` HTML attribute.

### `part`

The `part` HTML attribute.

### `popover`

The `popover` HTML attribute.

### `prefix`

The `prefix` HTML attribute.

### `property`

The `property` HTML attribute.

### `resource`

The `resource` HTML attribute.

### `results`

The `results` HTML attribute.

### `role`

The `role` HTML attribute.

### `slot`

The `slot` HTML attribute.

### `spellcheck`

The `spellcheck` HTML attribute.

### `style`

The `style` HTML attribute.

### `tabindex`

The `tabindex` HTML attribute.

### `tabIndex`

The `tabIndex` HTML attribute.

### `title`

The `title` HTML attribute.

### `translate`

The `translate` HTML attribute.

### `typeof`

The `typeof` HTML attribute.

### `vocab`

The `vocab` HTML attribute.