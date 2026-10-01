import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import { createMixin as e } from "/assets/packages/component/src/runtime/mixins/mixin.js";
import { on as n } from "/assets/packages/component/src/runtime/mixins/on-mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as t } from "/assets/packages/component/src/style/css-mixin.js";import { spring as r } from "/assets/packages/ui/src/animation/spring.js";import { jsx as i } from "/assets/packages/component/src/runtime/jsx.js";export function Press(e){let n=!1;function a(t){n!==t&&(n=t,e.update())}return()=>i(`div`,{tabIndex:0,mix:[t({width:100,height:100,backgroundColor:`#9911ff`,borderRadius:5,transition:`transform ${r()}`,"&:focus":{outline:`4px solid rgba(0,120,255,0.7)`,outlineOffset:1},"&:hover, &:focus":{transform:n?`scale(0.8)`:`scale(1.2)`}}),o(()=>{a(!0)}),s(()=>{a(!1)})]})}const o=e(()=>e=>[n(`pointerdown`,t=>{t.isPrimary!==!1&&e()}),n(`keydown`,t=>{!(t.key===`Enter`||t.key===` `)||t.repeat||(t.preventDefault(),e())})]),s=e(()=>e=>[n(`pointerup`,e),n(`pointerleave`,e),n(`keyup`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e())}),n(`blur`,e)]);