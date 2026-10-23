import "/_assets/packages/component/src/runtime/jsx.js";
import "/_assets/packages/component/src/runtime/typed-event-target.js";
import "/_assets/packages/component/src/runtime/invariant.js";
import "/_assets/packages/component/src/runtime/core/mix.js";
import { createMixin as e } from "/_assets/packages/component/src/runtime/mixins/mixin.js";
import { on as t } from "/_assets/packages/component/src/runtime/mixins/on-mixin.js";export const onKeyDown=e(()=>(e,n)=>t(`keydown`,t=>{t.key===e&&(t.preventDefault(),n(t))}),{ssr:!1});