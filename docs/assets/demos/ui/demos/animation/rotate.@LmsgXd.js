import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import { jsx as t } from "/assets/packages/component/src/runtime/jsx.js";export function Rotate(){return()=>t(`div`,{mix:[e({width:100,height:100,backgroundColor:`#ff0088`,borderRadius:5,"@keyframes rotate-demo":{"0%":{transform:`rotate(0deg)`},"100%":{transform:`rotate(360deg)`}},animation:`rotate-demo 1s ease-in-out 1`})]})}