import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import { animateEntrance as t } from "/assets/packages/ui/src/animation/animate-mixins.js";import { jsx as n } from "/assets/packages/component/src/runtime/jsx.js";export function TransitionOptions(){return()=>n(`div`,{mix:[e({width:100,height:100,borderRadius:`50%`,backgroundColor:`#9911ff`}),t({opacity:0,transform:`scale(0.5)`,duration:800,delay:500,easing:`cubic-bezier(0, 0.71, 0.2, 1.01)`})]})}