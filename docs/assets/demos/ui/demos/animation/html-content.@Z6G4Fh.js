import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import { spring as t } from "/assets/packages/ui/src/animation/spring.js";import { jsx as n } from "/assets/packages/component/src/runtime/jsx.js";export function HTMLContent(r){let i=0,a=t({duration:3e3,bounce:0});function o(){if(r.signal.aborted)return;let{value:e,done:t}=a.next();t||(i=Math.round(0+100*e),r.update(),requestAnimationFrame(o))}return r.queueTask(()=>{requestAnimationFrame(o)}),()=>n(`pre`,{mix:[e({fontSize:`64px`,margin:0,color:`#8df0cc`})],children:i})}