import {
  routes
} from "./chunk-I2PUA76T.js";
import {
  clientEntry,
  jsx
} from "./chunk-FVIRR6GM.js";

// src/client/light-dark-toggle.tsx
var LightDarkToggle = clientEntry(
  `${routes.assets.href({ asset: "light-dark-toggle.js" })}#LightDarkToggle`,
  (handle) => {
    let el = null;
    let isDark = false;
    return () => {
      return /* @__PURE__ */ jsx(
        "button",
        {
          css: { height: "100%", width: "44px", cursor: "pointer" },
          connect: (node) => {
            el = node;
            isDark = document.body.classList.contains("dark");
            handle.update();
          },
          on: {
            click: () => {
              document.body.classList.toggle("dark");
              isDark = document.body.classList.contains("dark");
              handle.update();
            }
          },
          children: isDark ? "\u{1F4A1}" : "\u{1F319}"
        }
      );
    };
  }
);
export {
  LightDarkToggle
};
