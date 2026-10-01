import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import { on as t } from "/assets/packages/component/src/runtime/mixins/on-mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import "/assets/packages/component/src/index.js";
import { animateLayout as n } from "/assets/packages/ui/src/animation/animate-layout-mixin.js";import { jsx as r } from "/assets/packages/component/src/runtime/jsx.js";export function FlipToggle(i){let a=!1;return()=>r(`button`,{mix:[e({width:90,height:50,backgroundColor:`rgba(153, 17, 255, 0.2)`,borderRadius:50,cursor:`pointer`,display:`flex`,padding:10,border:`none`}),t(`click`,()=>{a=!a,i.update()})],style:{justifyContent:a?`flex-start`:`flex-end`},children:r(`div`,{mix:[e({width:30,height:30,backgroundColor:`#9911ff`,borderRadius:`50%`}),n({duration:200,easing:`ease-in-out`})]})})}