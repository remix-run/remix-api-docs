import "/assets/packages/component/src/runtime/jsx.js";
import "/assets/packages/component/src/runtime/typed-event-target.js";
import "/assets/packages/component/src/runtime/invariant.js";
import "/assets/packages/component/src/style/style.js";
import "/assets/packages/component/src/runtime/core/mix.js";
import "/assets/packages/component/src/runtime/mixins/mixin.js";
import { on as t } from "/assets/packages/component/src/runtime/mixins/on-mixin.js";
import "/assets/packages/component/src/style/index.js";
import { css as e } from "/assets/packages/component/src/style/css-mixin.js";import { spring as n } from "/assets/packages/ui/src/animation/spring.js";import { jsx as r, jsxs as i } from "/assets/packages/component/src/runtime/jsx.js";export function RollingSquare(a){let o=!1;return()=>i(`div`,{mix:[e({display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`20px`,minWidth:`300px`})],children:[r(`div`,{mix:[e({width:`80px`,height:`80px`,backgroundColor:`#8df0cc`,borderRadius:`10px`,transition:`transform ${n({duration:500,bounce:.5})}`})],style:{transform:o?`translateX(100%) rotate(180deg)`:`translateX(-100%)`}}),r(`button`,{mix:[e({backgroundColor:`#8df0cc`,color:`#0f1115`,borderRadius:`5px`,padding:`10px`,margin:`10px`,border:`none`,cursor:`pointer`}),t(`click`,()=>{o=!o,a.update()})],children:`Toggle position`})]})}