import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import { createMixin as e } from "/assets/packages/component/src/runtime/mixins/mixin.js";const t=e(e=>{let t=!1,n=()=>{},r=()=>!1,i=!0;return e.addEventListener(`insert`,a=>{let o=a.node;o.ownerDocument.addEventListener(`click`,e=>{let a=e.target instanceof Node?e.target:null;!t||a&&(o.contains(a)||r(a))||(i&&e.stopPropagation(),n(a))},{capture:!0,signal:e.signal})}),(e,a,o=()=>!1,s=!0)=>{t=e,n=a,r=o,i=s}});export{t as onOutsideClick};