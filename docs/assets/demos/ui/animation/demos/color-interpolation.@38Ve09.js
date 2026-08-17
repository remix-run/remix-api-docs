import{css as e}from"/assets/pkg/remix/src/ui.@MEkBXl.js";import{jsx as t,jsxs as n}from"/assets/pkg/remix/src/ui/jsx-runtime.@B-uW1j.js";export function ColorInterpolation(){return()=>n(`div`,{mix:[e({display:`flex`,gap:30,alignItems:`center`,justifyContent:`center`})],children:[t(`style`,{children:`
          @property --color-t {
            syntax: '<number>';
            inherits: false;
            initial-value: 0;
          }

          @keyframes color-t-anim {
            0%, 100% { --color-t: 0; }
            50% { --color-t: 1; }
          }

          .oklch-box {
            animation: color-t-anim 4s linear infinite;
            background-color: color-mix(
              in oklch,
              #ff0088 calc((1 - var(--color-t)) * 100%),
              #0d63f8 calc(var(--color-t) * 100%)
            );
          }
        `}),n(`div`,{mix:[e({display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16})],children:[t(`div`,{mix:[e({width:100,height:100,borderRadius:8,backgroundColor:`#ff0088`,"@keyframes srgb-color":{"0%, 100%":{backgroundColor:`#ff0088`},"50%":{backgroundColor:`#0d63f8`}},animation:`srgb-color 4s linear infinite`})]}),t(`div`,{mix:[e({fontSize:14,color:`#666`})],children:`sRGB`})]}),n(`div`,{mix:[e({display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16})],children:[t(`div`,{class:`oklch-box`,mix:[e({width:100,height:100,borderRadius:8})]}),t(`div`,{mix:[e({fontSize:14,color:`#666`})],children:`OKLCH`})]})]})}