import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import "/assets/packages/component/src/index.js";
import { animateLayout as t } from "/assets/packages/ui/src/animation/animate-layout-mixin.js";
import { spring as n } from "/assets/packages/ui/src/animation/spring.js";import { jsx as r } from "/assets/packages/component/src/runtime/jsx.js";const i=[`#ff0088`,`#dd00ee`,`#9911ff`,`#0d63f8`];function a(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}export function Reordering(o){let s=i;function c(e){let t=setTimeout(async()=>{if(e.aborted)return;s=a(s);let t=await o.update();t.aborted||c(t)},1e3);e.addEventListener(`abort`,()=>clearTimeout(t),{once:!0})}return o.queueTask(c),()=>r(`ul`,{mix:[e({listStyle:`none`,padding:0,margin:0,position:`relative`,display:`flex`,flexWrap:`wrap`,gap:10,width:220,flexDirection:`row`,justifyContent:`center`,alignItems:`center`})],children:s.map(i=>r(`li`,{mix:[e({width:100,height:100,borderRadius:10}),t({...n({duration:600,bounce:.2})})],style:{backgroundColor:i}},i))})}