import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import { animateEntrance as t } from "/assets/packages/ui/src/animation/animate-mixins.js";
import { spring as n } from "/assets/packages/ui/src/animation/spring.js";import { jsx as r } from "/assets/packages/component/src/runtime/jsx.js";export function EnterAnimation(){return()=>r(`div`,{mix:[e({width:100,height:100,backgroundColor:`#dd00ee`,borderRadius:`50%`}),t({opacity:0,transform:`scale(0)`,...n({duration:400,bounce:.5})})]})}