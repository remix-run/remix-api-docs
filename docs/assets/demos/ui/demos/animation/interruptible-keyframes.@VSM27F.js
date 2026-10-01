import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import { on as t } from "/assets/packages/component/src/runtime/mixins/on-mixin.js";
import "/assets/packages/component/src/style/index.js";
import { ref as n } from "/assets/packages/component/src/runtime/mixins/ref-mixin.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import { jsx as r } from "/assets/packages/component/src/runtime/jsx.js";export function InterruptibleKeyframes(){let i,a=null;function o(){return new DOMMatrix(getComputedStyle(i).transform).a}function s(){a&&=(a.commitStyles(),a.cancel(),null)}return()=>r(`div`,{mix:[n(e=>i=e),e({width:100,height:100,backgroundColor:`#0cdcf7`,borderRadius:5}),t(`pointerenter`,()=>{s();let e=o();a=i.animate([{transform:`scale(${e})`,offset:0,easing:`ease-in-out`},{transform:`scale(1.1)`,offset:.6,easing:`ease-out`},{transform:`scale(1.6)`,offset:1}],{duration:500,fill:`forwards`})}),t(`pointerleave`,()=>{s();let e=o();a=i.animate([{transform:`scale(${e})`},{transform:`scale(1)`}],{duration:300,easing:`ease-out`,fill:`forwards`})})]})}