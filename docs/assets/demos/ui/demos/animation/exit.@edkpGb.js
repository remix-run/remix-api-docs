import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import { on as t } from "/assets/packages/component/src/runtime/mixins/on-mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import { animateEntrance as n, animateExit as r } from "/assets/packages/ui/src/animation/animate-mixins.js";
import { spring as i } from "/assets/packages/ui/src/animation/spring.js";import { jsx as a, jsxs as o } from "/assets/packages/component/src/runtime/jsx.js";export function ExitAnimation(s){let c=!0,l=!1;return s.queueTask(()=>{l=!0}),()=>o(`div`,{mix:[e({display:`flex`,flexDirection:`column`,width:`100px`,height:`160px`,position:`relative`})],children:[c&&a(`div`,{mix:[e({width:`100px`,height:`100px`,backgroundColor:`#0cdcf7`,borderRadius:`10px`}),n(l&&{opacity:0,transform:`scale(0)`,...i(`snappy`)}),r({opacity:0,transform:`scale(0)`,...i()})]},`exit-animation`),a(`button`,{mix:[e({backgroundColor:`#0cdcf7`,borderRadius:`10px`,padding:`10px 20px`,color:`#0f1115`,border:`none`,cursor:`pointer`,position:`absolute`,bottom:0,left:0,right:0,transition:`transform 100ms ease-in-out`,"&:active":{transform:`translateY(1px)`}}),t(`click`,()=>{c=!c,s.update()})],children:c?`Hide`:`Show`})]})}