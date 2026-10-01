import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import { createMixin as e } from "/assets/packages/component/src/runtime/mixins/mixin.js";
import { on as t } from "/assets/packages/component/src/runtime/mixins/on-mixin.js";export const onKeyDown=e(()=>(e,n)=>t(`keydown`,t=>{t.key===e&&(t.preventDefault(),n(t))}));