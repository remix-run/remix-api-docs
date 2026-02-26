---
title: PresenceKeyframeConfig
---

# PresenceKeyframeConfig

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/dom.ts#L74" target="_blank">View Source</a>

## Summary

Shorthand presence configuration with a single keyframe.
For enter: defines the starting state (animates FROM these values TO natural styles).
For exit: defines the ending state (animates FROM current styles TO these values).

## Signature

```ts
interface PresenceKeyframeConfig {
  accentColor?: string | number;
  alignContent?: string | number;
  alignItems?: string | number;
  alignmentBaseline?: string | number;
  alignSelf?: string | number;
  all?: string | number;
  animation?: string | number;
  animationComposition?: string | number;
  animationDelay?: string | number;
  animationDirection?: string | number;
  animationDuration?: string | number;
  animationFillMode?: string | number;
  animationIterationCount?: string | number;
  animationName?: string | number;
  animationPlayState?: string | number;
  animationTimingFunction?: string | number;
  appearance?: string | number;
  aspectRatio?: string | number;
  backdropFilter?: string | number;
  backfaceVisibility?: string | number;
  background?: string | number;
  backgroundAttachment?: string | number;
  backgroundBlendMode?: string | number;
  backgroundClip?: string | number;
  backgroundColor?: string | number;
  backgroundImage?: string | number;
  backgroundOrigin?: string | number;
  backgroundPosition?: string | number;
  backgroundPositionX?: string | number;
  backgroundPositionY?: string | number;
  backgroundRepeat?: string | number;
  backgroundSize?: string | number;
  baselineShift?: string | number;
  baselineSource?: string | number;
  blockSize?: string | number;
  border?: string | number;
  borderBlock?: string | number;
  borderBlockColor?: string | number;
  borderBlockEnd?: string | number;
  borderBlockEndColor?: string | number;
  borderBlockEndStyle?: string | number;
  borderBlockEndWidth?: string | number;
  borderBlockStart?: string | number;
  borderBlockStartColor?: string | number;
  borderBlockStartStyle?: string | number;
  borderBlockStartWidth?: string | number;
  borderBlockStyle?: string | number;
  borderBlockWidth?: string | number;
  borderBottom?: string | number;
  borderBottomColor?: string | number;
  borderBottomLeftRadius?: string | number;
  borderBottomRightRadius?: string | number;
  borderBottomStyle?: string | number;
  borderBottomWidth?: string | number;
  borderCollapse?: string | number;
  borderColor?: string | number;
  borderEndEndRadius?: string | number;
  borderEndStartRadius?: string | number;
  borderImage?: string | number;
  borderImageOutset?: string | number;
  borderImageRepeat?: string | number;
  borderImageSlice?: string | number;
  borderImageSource?: string | number;
  borderImageWidth?: string | number;
  borderInline?: string | number;
  borderInlineColor?: string | number;
  borderInlineEnd?: string | number;
  borderInlineEndColor?: string | number;
  borderInlineEndStyle?: string | number;
  borderInlineEndWidth?: string | number;
  borderInlineStart?: string | number;
  borderInlineStartColor?: string | number;
  borderInlineStartStyle?: string | number;
  borderInlineStartWidth?: string | number;
  borderInlineStyle?: string | number;
  borderInlineWidth?: string | number;
  borderLeft?: string | number;
  borderLeftColor?: string | number;
  borderLeftStyle?: string | number;
  borderLeftWidth?: string | number;
  borderRadius?: string | number;
  borderRight?: string | number;
  borderRightColor?: string | number;
  borderRightStyle?: string | number;
  borderRightWidth?: string | number;
  borderSpacing?: string | number;
  borderStartEndRadius?: string | number;
  borderStartStartRadius?: string | number;
  borderStyle?: string | number;
  borderTop?: string | number;
  borderTopColor?: string | number;
  borderTopLeftRadius?: string | number;
  borderTopRightRadius?: string | number;
  borderTopStyle?: string | number;
  borderTopWidth?: string | number;
  borderWidth?: string | number;
  bottom?: string | number;
  boxDecorationBreak?: string | number;
  boxShadow?: string | number;
  boxSizing?: string | number;
  breakAfter?: string | number;
  breakBefore?: string | number;
  breakInside?: string | number;
  captionSide?: string | number;
  caretColor?: string | number;
  clear?: string | number;
  clip?: string | number;
  clipPath?: string | number;
  clipRule?: string | number;
  color?: string | number;
  colorInterpolation?: string | number;
  colorInterpolationFilters?: string | number;
  colorScheme?: string | number;
  columnCount?: string | number;
  columnFill?: string | number;
  columnGap?: string | number;
  columnRule?: string | number;
  columnRuleColor?: string | number;
  columnRuleStyle?: string | number;
  columnRuleWidth?: string | number;
  columns?: string | number;
  columnSpan?: string | number;
  columnWidth?: string | number;
  composite?: CompositeOperationOrAuto;
  contain?: string | number;
  container?: string | number;
  containerName?: string | number;
  containerType?: string | number;
  containIntrinsicBlockSize?: string | number;
  containIntrinsicHeight?: string | number;
  containIntrinsicInlineSize?: string | number;
  containIntrinsicSize?: string | number;
  containIntrinsicWidth?: string | number;
  content?: string | number;
  contentVisibility?: string | number;
  counterIncrement?: string | number;
  counterReset?: string | number;
  counterSet?: string | number;
  cursor?: string | number;
  cx?: string | number;
  cy?: string | number;
  d?: string | number;
  delay?: number;
  direction?: string | number;
  display?: string | number;
  dominantBaseline?: string | number;
  duration: number;
  easing?: string;
  emptyCells?: string | number;
  fill?: string | number;
  fillOpacity?: string | number;
  fillRule?: string | number;
  filter?: string | number;
  flex?: string | number;
  flexBasis?: string | number;
  flexDirection?: string | number;
  flexFlow?: string | number;
  flexGrow?: string | number;
  flexShrink?: string | number;
  flexWrap?: string | number;
  float?: string | number;
  floodColor?: string | number;
  floodOpacity?: string | number;
  font?: string | number;
  fontFamily?: string | number;
  fontFeatureSettings?: string | number;
  fontKerning?: string | number;
  fontOpticalSizing?: string | number;
  fontPalette?: string | number;
  fontSize?: string | number;
  fontSizeAdjust?: string | number;
  fontStretch?: string | number;
  fontStyle?: string | number;
  fontSynthesis?: string | number;
  fontSynthesisSmallCaps?: string | number;
  fontSynthesisStyle?: string | number;
  fontSynthesisWeight?: string | number;
  fontVariant?: string | number;
  fontVariantAlternates?: string | number;
  fontVariantCaps?: string | number;
  fontVariantEastAsian?: string | number;
  fontVariantLigatures?: string | number;
  fontVariantNumeric?: string | number;
  fontVariantPosition?: string | number;
  fontVariationSettings?: string | number;
  fontWeight?: string | number;
  forcedColorAdjust?: string | number;
  gap?: string | number;
  grid?: string | number;
  gridArea?: string | number;
  gridAutoColumns?: string | number;
  gridAutoFlow?: string | number;
  gridAutoRows?: string | number;
  gridColumn?: string | number;
  gridColumnEnd?: string | number;
  gridColumnGap?: string | number;
  gridColumnStart?: string | number;
  gridGap?: string | number;
  gridRow?: string | number;
  gridRowEnd?: string | number;
  gridRowGap?: string | number;
  gridRowStart?: string | number;
  gridTemplate?: string | number;
  gridTemplateAreas?: string | number;
  gridTemplateColumns?: string | number;
  gridTemplateRows?: string | number;
  height?: string | number;
  hyphenateCharacter?: string | number;
  hyphenateLimitChars?: string | number;
  hyphens?: string | number;
  imageOrientation?: string | number;
  imageRendering?: string | number;
  inlineSize?: string | number;
  inset?: string | number;
  insetBlock?: string | number;
  insetBlockEnd?: string | number;
  insetBlockStart?: string | number;
  insetInline?: string | number;
  insetInlineEnd?: string | number;
  insetInlineStart?: string | number;
  isolation?: string | number;
  justifyContent?: string | number;
  justifyItems?: string | number;
  justifySelf?: string | number;
  keyframes?: undefined;
  left?: string | number;
  letterSpacing?: string | number;
  lightingColor?: string | number;
  lineBreak?: string | number;
  lineHeight?: string | number;
  listStyle?: string | number;
  listStyleImage?: string | number;
  listStylePosition?: string | number;
  listStyleType?: string | number;
  margin?: string | number;
  marginBlock?: string | number;
  marginBlockEnd?: string | number;
  marginBlockStart?: string | number;
  marginBottom?: string | number;
  marginInline?: string | number;
  marginInlineEnd?: string | number;
  marginInlineStart?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marker?: string | number;
  markerEnd?: string | number;
  markerMid?: string | number;
  markerStart?: string | number;
  mask?: string | number;
  maskClip?: string | number;
  maskComposite?: string | number;
  maskImage?: string | number;
  maskMode?: string | number;
  maskOrigin?: string | number;
  maskPosition?: string | number;
  maskRepeat?: string | number;
  maskSize?: string | number;
  maskType?: string | number;
  mathDepth?: string | number;
  mathStyle?: string | number;
  maxBlockSize?: string | number;
  maxHeight?: string | number;
  maxInlineSize?: string | number;
  maxWidth?: string | number;
  minBlockSize?: string | number;
  minHeight?: string | number;
  minInlineSize?: string | number;
  minWidth?: string | number;
  mixBlendMode?: string | number;
  objectFit?: string | number;
  objectPosition?: string | number;
  offset?: number;
  offsetAnchor?: string | number;
  offsetDistance?: string | number;
  offsetPath?: string | number;
  offsetPosition?: string | number;
  offsetRotate?: string | number;
  opacity?: string | number;
  order?: string | number;
  orphans?: string | number;
  outline?: string | number;
  outlineColor?: string | number;
  outlineOffset?: string | number;
  outlineStyle?: string | number;
  outlineWidth?: string | number;
  overflow?: string | number;
  overflowAnchor?: string | number;
  overflowBlock?: string | number;
  overflowClipMargin?: string | number;
  overflowInline?: string | number;
  overflowWrap?: string | number;
  overflowX?: string | number;
  overflowY?: string | number;
  overscrollBehavior?: string | number;
  overscrollBehaviorBlock?: string | number;
  overscrollBehaviorInline?: string | number;
  overscrollBehaviorX?: string | number;
  overscrollBehaviorY?: string | number;
  padding?: string | number;
  paddingBlock?: string | number;
  paddingBlockEnd?: string | number;
  paddingBlockStart?: string | number;
  paddingBottom?: string | number;
  paddingInline?: string | number;
  paddingInlineEnd?: string | number;
  paddingInlineStart?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  page?: string | number;
  pageBreakAfter?: string | number;
  pageBreakBefore?: string | number;
  pageBreakInside?: string | number;
  paintOrder?: string | number;
  perspective?: string | number;
  perspectiveOrigin?: string | number;
  placeContent?: string | number;
  placeItems?: string | number;
  placeSelf?: string | number;
  pointerEvents?: string | number;
  position?: string | number;
  printColorAdjust?: string | number;
  quotes?: string | number;
  r?: string | number;
  resize?: string | number;
  right?: string | number;
  rotate?: string | number;
  rowGap?: string | number;
  rubyAlign?: string | number;
  rubyPosition?: string | number;
  rx?: string | number;
  ry?: string | number;
  scale?: string | number;
  scrollbarColor?: string | number;
  scrollbarGutter?: string | number;
  scrollbarWidth?: string | number;
  scrollBehavior?: string | number;
  scrollMargin?: string | number;
  scrollMarginBlock?: string | number;
  scrollMarginBlockEnd?: string | number;
  scrollMarginBlockStart?: string | number;
  scrollMarginBottom?: string | number;
  scrollMarginInline?: string | number;
  scrollMarginInlineEnd?: string | number;
  scrollMarginInlineStart?: string | number;
  scrollMarginLeft?: string | number;
  scrollMarginRight?: string | number;
  scrollMarginTop?: string | number;
  scrollPadding?: string | number;
  scrollPaddingBlock?: string | number;
  scrollPaddingBlockEnd?: string | number;
  scrollPaddingBlockStart?: string | number;
  scrollPaddingBottom?: string | number;
  scrollPaddingInline?: string | number;
  scrollPaddingInlineEnd?: string | number;
  scrollPaddingInlineStart?: string | number;
  scrollPaddingLeft?: string | number;
  scrollPaddingRight?: string | number;
  scrollPaddingTop?: string | number;
  scrollSnapAlign?: string | number;
  scrollSnapStop?: string | number;
  scrollSnapType?: string | number;
  shapeImageThreshold?: string | number;
  shapeMargin?: string | number;
  shapeOutside?: string | number;
  shapeRendering?: string | number;
  stopColor?: string | number;
  stopOpacity?: string | number;
  stroke?: string | number;
  strokeDasharray?: string | number;
  strokeDashoffset?: string | number;
  strokeLinecap?: string | number;
  strokeLinejoin?: string | number;
  strokeMiterlimit?: string | number;
  strokeOpacity?: string | number;
  strokeWidth?: string | number;
  tableLayout?: string | number;
  tabSize?: string | number;
  textAlign?: string | number;
  textAlignLast?: string | number;
  textAnchor?: string | number;
  textBox?: string | number;
  textBoxEdge?: string | number;
  textBoxTrim?: string | number;
  textCombineUpright?: string | number;
  textDecoration?: string | number;
  textDecorationColor?: string | number;
  textDecorationLine?: string | number;
  textDecorationSkipInk?: string | number;
  textDecorationStyle?: string | number;
  textDecorationThickness?: string | number;
  textEmphasis?: string | number;
  textEmphasisColor?: string | number;
  textEmphasisPosition?: string | number;
  textEmphasisStyle?: string | number;
  textIndent?: string | number;
  textOrientation?: string | number;
  textOverflow?: string | number;
  textRendering?: string | number;
  textShadow?: string | number;
  textTransform?: string | number;
  textUnderlineOffset?: string | number;
  textUnderlinePosition?: string | number;
  textWrap?: string | number;
  textWrapMode?: string | number;
  textWrapStyle?: string | number;
  top?: string | number;
  touchAction?: string | number;
  transform?: string | number;
  transformBox?: string | number;
  transformOrigin?: string | number;
  transformStyle?: string | number;
  transition?: string | number;
  transitionBehavior?: string | number;
  transitionDelay?: string | number;
  transitionDuration?: string | number;
  transitionProperty?: string | number;
  transitionTimingFunction?: string | number;
  translate?: string | number;
  unicodeBidi?: string | number;
  userSelect?: string | number;
  vectorEffect?: string | number;
  verticalAlign?: string | number;
  viewTransitionClass?: string | number;
  viewTransitionName?: string | number;
  visibility?: string | number;
  webkitAlignContent?: string | number;
  webkitAlignItems?: string | number;
  webkitAlignSelf?: string | number;
  webkitAnimation?: string | number;
  webkitAnimationDelay?: string | number;
  webkitAnimationDirection?: string | number;
  webkitAnimationDuration?: string | number;
  webkitAnimationFillMode?: string | number;
  webkitAnimationIterationCount?: string | number;
  webkitAnimationName?: string | number;
  webkitAnimationPlayState?: string | number;
  webkitAnimationTimingFunction?: string | number;
  webkitAppearance?: string | number;
  webkitBackfaceVisibility?: string | number;
  webkitBackgroundClip?: string | number;
  webkitBackgroundOrigin?: string | number;
  webkitBackgroundSize?: string | number;
  webkitBorderBottomLeftRadius?: string | number;
  webkitBorderBottomRightRadius?: string | number;
  webkitBorderRadius?: string | number;
  webkitBorderTopLeftRadius?: string | number;
  webkitBorderTopRightRadius?: string | number;
  webkitBoxAlign?: string | number;
  webkitBoxFlex?: string | number;
  webkitBoxOrdinalGroup?: string | number;
  webkitBoxOrient?: string | number;
  webkitBoxPack?: string | number;
  webkitBoxShadow?: string | number;
  webkitBoxSizing?: string | number;
  webkitFilter?: string | number;
  webkitFlex?: string | number;
  webkitFlexBasis?: string | number;
  webkitFlexDirection?: string | number;
  webkitFlexFlow?: string | number;
  webkitFlexGrow?: string | number;
  webkitFlexShrink?: string | number;
  webkitFlexWrap?: string | number;
  webkitJustifyContent?: string | number;
  webkitLineClamp?: string | number;
  webkitMask?: string | number;
  webkitMaskBoxImage?: string | number;
  webkitMaskBoxImageOutset?: string | number;
  webkitMaskBoxImageRepeat?: string | number;
  webkitMaskBoxImageSlice?: string | number;
  webkitMaskBoxImageSource?: string | number;
  webkitMaskBoxImageWidth?: string | number;
  webkitMaskClip?: string | number;
  webkitMaskComposite?: string | number;
  webkitMaskImage?: string | number;
  webkitMaskOrigin?: string | number;
  webkitMaskPosition?: string | number;
  webkitMaskRepeat?: string | number;
  webkitMaskSize?: string | number;
  webkitOrder?: string | number;
  webkitPerspective?: string | number;
  webkitPerspectiveOrigin?: string | number;
  webkitTextFillColor?: string | number;
  webkitTextSizeAdjust?: string | number;
  webkitTextStroke?: string | number;
  webkitTextStrokeColor?: string | number;
  webkitTextStrokeWidth?: string | number;
  webkitTransform?: string | number;
  webkitTransformOrigin?: string | number;
  webkitTransformStyle?: string | number;
  webkitTransition?: string | number;
  webkitTransitionDelay?: string | number;
  webkitTransitionDuration?: string | number;
  webkitTransitionProperty?: string | number;
  webkitTransitionTimingFunction?: string | number;
  webkitUserSelect?: string | number;
  whiteSpace?: string | number;
  whiteSpaceCollapse?: string | number;
  widows?: string | number;
  width?: string | number;
  willChange?: string | number;
  wordBreak?: string | number;
  wordSpacing?: string | number;
  wordWrap?: string | number;
  writingMode?: string | number;
  x?: string | number;
  y?: string | number;
  zIndex?: string | number;
  zoom?: string | number;
}

```

## Properties

### accentColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/accent-color)

### alignContent

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content)

### alignItems

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items)

### alignmentBaseline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/alignment-baseline)

### alignSelf

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self)

### all

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/all)

### animation

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation)

### animationComposition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-composition)

### animationDelay

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)

### animationDirection

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)

### animationDuration

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)

### animationFillMode

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)

### animationIterationCount

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)

### animationName

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)

### animationPlayState

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)

### animationTimingFunction

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)

### appearance

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance)

### aspectRatio

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio)

### backdropFilter

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter)

### backfaceVisibility

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)

### background

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background)

### backgroundAttachment

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment)

### backgroundBlendMode

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode)

### backgroundClip

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)

### backgroundColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color)

### backgroundImage

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image)

### backgroundOrigin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)

### backgroundPosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position)

### backgroundPositionX

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x)

### backgroundPositionY

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y)

### backgroundRepeat

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat)

### backgroundSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)

### baselineShift

### baselineSource

### blockSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size)

### border

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border)

### borderBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block)

### borderBlockColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color)

### borderBlockEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end)

### borderBlockEndColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color)

### borderBlockEndStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style)

### borderBlockEndWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width)

### borderBlockStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start)

### borderBlockStartColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color)

### borderBlockStartStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style)

### borderBlockStartWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width)

### borderBlockStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style)

### borderBlockWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width)

### borderBottom

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom)

### borderBottomColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color)

### borderBottomLeftRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)

### borderBottomRightRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)

### borderBottomStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style)

### borderBottomWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width)

### borderCollapse

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse)

### borderColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color)

### borderEndEndRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius)

### borderEndStartRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius)

### borderImage

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image)

### borderImageOutset

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset)

### borderImageRepeat

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat)

### borderImageSlice

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice)

### borderImageSource

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source)

### borderImageWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width)

### borderInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline)

### borderInlineColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color)

### borderInlineEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end)

### borderInlineEndColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color)

### borderInlineEndStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style)

### borderInlineEndWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width)

### borderInlineStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start)

### borderInlineStartColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color)

### borderInlineStartStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style)

### borderInlineStartWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width)

### borderInlineStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style)

### borderInlineWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width)

### borderLeft

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left)

### borderLeftColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color)

### borderLeftStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style)

### borderLeftWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width)

### borderRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)

### borderRight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right)

### borderRightColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color)

### borderRightStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style)

### borderRightWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width)

### borderSpacing

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing)

### borderStartEndRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius)

### borderStartStartRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius)

### borderStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style)

### borderTop

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top)

### borderTopColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color)

### borderTopLeftRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)

### borderTopRightRadius

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)

### borderTopStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style)

### borderTopWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width)

### borderWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width)

### bottom

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/bottom)

### boxDecorationBreak

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-decoration-break)

### boxShadow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)

### boxSizing

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)

### breakAfter

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-after)

### breakBefore

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-before)

### breakInside

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-inside)

### captionSide

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side)

### caretColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color)

### clear

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clear)

### clip

### clipPath

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path)

### clipRule

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-rule)

### color

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color)

### colorInterpolation

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-interpolation)

### colorInterpolationFilters

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-interpolation-filters)

### colorScheme

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-scheme)

### columnCount

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count)

### columnFill

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill)

### columnGap

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-gap)

### columnRule

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule)

### columnRuleColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color)

### columnRuleStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style)

### columnRuleWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width)

### columns

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/columns)

### columnSpan

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span)

### columnWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width)

### composite

How this keyframe's values combine with underlying values

### contain

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain)

### container

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container)

### containerName

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-name)

### containerType

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-type)

### containIntrinsicBlockSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-block-size)

### containIntrinsicHeight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height)

### containIntrinsicInlineSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-inline-size)

### containIntrinsicSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size)

### containIntrinsicWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width)

### content

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content)

### contentVisibility

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content-visibility)

### counterIncrement

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment)

### counterReset

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset)

### counterSet

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set)

### cursor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cursor)

### cx

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cx)

### cy

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cy)

### d

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/d)

### delay

Delay before animation starts in milliseconds

### direction

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/direction)

### display

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/display)

### dominantBaseline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/dominant-baseline)

### duration

Animation duration in milliseconds

### easing

Per-keyframe easing function

### emptyCells

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells)

### fill

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/fill)

### fillOpacity

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/fill-opacity)

### fillRule

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/fill-rule)

### filter

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter)

### flex

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex)

### flexBasis

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)

### flexDirection

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)

### flexFlow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)

### flexGrow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)

### flexShrink

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)

### flexWrap

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)

### float

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/float)

### floodColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flood-color)

### floodOpacity

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flood-opacity)

### font

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font)

### fontFamily

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family)

### fontFeatureSettings

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings)

### fontKerning

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning)

### fontOpticalSizing

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing)

### fontPalette

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-palette)

### fontSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size)

### fontSizeAdjust

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust)

### fontStretch

### fontStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style)

### fontSynthesis

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis)

### fontSynthesisSmallCaps

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps)

### fontSynthesisStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style)

### fontSynthesisWeight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight)

### fontVariant

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant)

### fontVariantAlternates

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates)

### fontVariantCaps

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps)

### fontVariantEastAsian

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian)

### fontVariantLigatures

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures)

### fontVariantNumeric

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric)

### fontVariantPosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position)

### fontVariationSettings

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)

### fontWeight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight)

### forcedColorAdjust

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust)

### gap

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/gap)

### grid

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid)

### gridArea

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area)

### gridAutoColumns

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns)

### gridAutoFlow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow)

### gridAutoRows

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows)

### gridColumn

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column)

### gridColumnEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end)

### gridColumnGap

### gridColumnStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start)

### gridGap

### gridRow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row)

### gridRowEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end)

### gridRowGap

### gridRowStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start)

### gridTemplate

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template)

### gridTemplateAreas

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas)

### gridTemplateColumns

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns)

### gridTemplateRows

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows)

### height

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/height)

### hyphenateCharacter

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-character)

### hyphenateLimitChars

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-limit-chars)

### hyphens

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphens)

### imageOrientation

### imageRendering

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering)

### inlineSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size)

### inset

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset)

### insetBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block)

### insetBlockEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end)

### insetBlockStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start)

### insetInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline)

### insetInlineEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end)

### insetInlineStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start)

### isolation

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/isolation)

### justifyContent

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content)

### justifyItems

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-items)

### justifySelf

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-self)

### keyframes

### left

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/left)

### letterSpacing

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing)

### lightingColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/lighting-color)

### lineBreak

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break)

### lineHeight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height)

### listStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style)

### listStyleImage

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image)

### listStylePosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position)

### listStyleType

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type)

### margin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin)

### marginBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block)

### marginBlockEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end)

### marginBlockStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start)

### marginBottom

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom)

### marginInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline)

### marginInlineEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end)

### marginInlineStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start)

### marginLeft

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left)

### marginRight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right)

### marginTop

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top)

### marker

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker)

### markerEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker-end)

### markerMid

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker-mid)

### markerStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker-start)

### mask

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask)

### maskClip

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)

### maskComposite

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite)

### maskImage

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)

### maskMode

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode)

### maskOrigin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)

### maskPosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)

### maskRepeat

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)

### maskSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)

### maskType

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type)

### mathDepth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/math-depth)

### mathStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/math-style)

### maxBlockSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size)

### maxHeight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height)

### maxInlineSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size)

### maxWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width)

### minBlockSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size)

### minHeight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height)

### minInlineSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size)

### minWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width)

### mixBlendMode

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)

### objectFit

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit)

### objectPosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position)

### offset

Position in timeline (0-1)

### offsetAnchor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-anchor)

### offsetDistance

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance)

### offsetPath

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path)

### offsetPosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-position)

### offsetRotate

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate)

### opacity

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity)

### order

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order)

### orphans

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/orphans)

### outline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline)

### outlineColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color)

### outlineOffset

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset)

### outlineStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style)

### outlineWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width)

### overflow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow)

### overflowAnchor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor)

### overflowBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-block)

### overflowClipMargin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin)

### overflowInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-inline)

### overflowWrap

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)

### overflowX

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x)

### overflowY

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y)

### overscrollBehavior

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior)

### overscrollBehaviorBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block)

### overscrollBehaviorInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline)

### overscrollBehaviorX

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x)

### overscrollBehaviorY

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y)

### padding

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding)

### paddingBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block)

### paddingBlockEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end)

### paddingBlockStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start)

### paddingBottom

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom)

### paddingInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline)

### paddingInlineEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end)

### paddingInlineStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start)

### paddingLeft

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left)

### paddingRight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right)

### paddingTop

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top)

### page

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page)

### pageBreakAfter

### pageBreakBefore

### pageBreakInside

### paintOrder

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order)

### perspective

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective)

### perspectiveOrigin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)

### placeContent

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-content)

### placeItems

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-items)

### placeSelf

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-self)

### pointerEvents

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events)

### position

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/position)

### printColorAdjust

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/print-color-adjust)

### quotes

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/quotes)

### r

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/r)

### resize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/resize)

### right

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/right)

### rotate

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rotate)

### rowGap

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/row-gap)

### rubyAlign

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-align)

### rubyPosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position)

### rx

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rx)

### ry

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ry)

### scale

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scale)

### scrollbarColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-color)

### scrollbarGutter

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter)

### scrollbarWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-width)

### scrollBehavior

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior)

### scrollMargin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin)

### scrollMarginBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block)

### scrollMarginBlockEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end)

### scrollMarginBlockStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start)

### scrollMarginBottom

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom)

### scrollMarginInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline)

### scrollMarginInlineEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end)

### scrollMarginInlineStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start)

### scrollMarginLeft

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left)

### scrollMarginRight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right)

### scrollMarginTop

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top)

### scrollPadding

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding)

### scrollPaddingBlock

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block)

### scrollPaddingBlockEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end)

### scrollPaddingBlockStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start)

### scrollPaddingBottom

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom)

### scrollPaddingInline

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline)

### scrollPaddingInlineEnd

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end)

### scrollPaddingInlineStart

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start)

### scrollPaddingLeft

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left)

### scrollPaddingRight

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right)

### scrollPaddingTop

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top)

### scrollSnapAlign

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align)

### scrollSnapStop

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop)

### scrollSnapType

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type)

### shapeImageThreshold

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold)

### shapeMargin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin)

### shapeOutside

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside)

### shapeRendering

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-rendering)

### stopColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stop-color)

### stopOpacity

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stop-opacity)

### stroke

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke)

### strokeDasharray

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-dasharray)

### strokeDashoffset

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-dashoffset)

### strokeLinecap

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-linecap)

### strokeLinejoin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-linejoin)

### strokeMiterlimit

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-miterlimit)

### strokeOpacity

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-opacity)

### strokeWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-width)

### tableLayout

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout)

### tabSize

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size)

### textAlign

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align)

### textAlignLast

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last)

### textAnchor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-anchor)

### textBox

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-box)

### textBoxEdge

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-box-edge)

### textBoxTrim

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-box-trim)

### textCombineUpright

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright)

### textDecoration

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration)

### textDecorationColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color)

### textDecorationLine

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line)

### textDecorationSkipInk

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink)

### textDecorationStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style)

### textDecorationThickness

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness)

### textEmphasis

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis)

### textEmphasisColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color)

### textEmphasisPosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position)

### textEmphasisStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style)

### textIndent

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent)

### textOrientation

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation)

### textOverflow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow)

### textRendering

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering)

### textShadow

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow)

### textTransform

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform)

### textUnderlineOffset

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset)

### textUnderlinePosition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position)

### textWrap

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-wrap)

### textWrapMode

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-wrap-mode)

### textWrapStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-wrap-style)

### top

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/top)

### touchAction

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action)

### transform

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform)

### transformBox

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box)

### transformOrigin

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)

### transformStyle

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)

### transition

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition)

### transitionBehavior

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-behavior)

### transitionDelay

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)

### transitionDuration

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)

### transitionProperty

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)

### transitionTimingFunction

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)

### translate

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/translate)

### unicodeBidi

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi)

### userSelect

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)

### vectorEffect

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vector-effect)

### verticalAlign

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align)

### viewTransitionClass

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/view-transition-class)

### viewTransitionName

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/view-transition-name)

### visibility

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/visibility)

### webkitAlignContent

### webkitAlignItems

### webkitAlignSelf

### webkitAnimation

### webkitAnimationDelay

### webkitAnimationDirection

### webkitAnimationDuration

### webkitAnimationFillMode

### webkitAnimationIterationCount

### webkitAnimationName

### webkitAnimationPlayState

### webkitAnimationTimingFunction

### webkitAppearance

### webkitBackfaceVisibility

### webkitBackgroundClip

### webkitBackgroundOrigin

### webkitBackgroundSize

### webkitBorderBottomLeftRadius

### webkitBorderBottomRightRadius

### webkitBorderRadius

### webkitBorderTopLeftRadius

### webkitBorderTopRightRadius

### webkitBoxAlign

### webkitBoxFlex

### webkitBoxOrdinalGroup

### webkitBoxOrient

### webkitBoxPack

### webkitBoxShadow

### webkitBoxSizing

### webkitFilter

### webkitFlex

### webkitFlexBasis

### webkitFlexDirection

### webkitFlexFlow

### webkitFlexGrow

### webkitFlexShrink

### webkitFlexWrap

### webkitJustifyContent

### webkitLineClamp

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-clamp)

### webkitMask

### webkitMaskBoxImage

### webkitMaskBoxImageOutset

### webkitMaskBoxImageRepeat

### webkitMaskBoxImageSlice

### webkitMaskBoxImageSource

### webkitMaskBoxImageWidth

### webkitMaskClip

### webkitMaskComposite

### webkitMaskImage

### webkitMaskOrigin

### webkitMaskPosition

### webkitMaskRepeat

### webkitMaskSize

### webkitOrder

### webkitPerspective

### webkitPerspectiveOrigin

### webkitTextFillColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color)

### webkitTextSizeAdjust

### webkitTextStroke

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke)

### webkitTextStrokeColor

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color)

### webkitTextStrokeWidth

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width)

### webkitTransform

### webkitTransformOrigin

### webkitTransformStyle

### webkitTransition

### webkitTransitionDelay

### webkitTransitionDuration

### webkitTransitionProperty

### webkitTransitionTimingFunction

### webkitUserSelect

### whiteSpace

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space)

### whiteSpaceCollapse

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space-collapse)

### widows

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/widows)

### width

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/width)

### willChange

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change)

### wordBreak

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break)

### wordSpacing

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing)

### wordWrap

### writingMode

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode)

### x

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/x)

### y

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/y)

### zIndex

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index)

### zoom

[MDN Reference](https://developer.mozilla.org/docs/Web/CSS/zoom)