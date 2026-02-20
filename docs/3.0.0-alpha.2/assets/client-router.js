import {
  routes
} from "./chunk-I2PUA76T.js";
import {
  Fragment,
  clientEntry,
  jsx
} from "./chunk-3UCC5XUO.js";

// src/client/client-router.tsx
var ClientRouter = clientEntry(
  `${routes.assets.href({ asset: "client-router.js" })}#ClientRouter`,
  (handle) => {
    handle.queueTask(() => {
      handle.on(window.navigation, {
        navigate(event, signal) {
          let shouldNotIntercept = !event.canIntercept || // If this is just a hashChange,
          // just let the browser handle scrolling to the content.
          event.hashChange || // If this is a download,
          // let the browser perform the download.
          event.downloadRequest || // If this is a form submission,
          // let that go to the server.
          event.formData;
          if (shouldNotIntercept) {
            return;
          }
          let nextMatch = routes.docs.match(event.destination.url);
          if (!nextMatch) {
            return;
          }
          let currentMatch = routes.docs.match(window.location.href);
          if (currentMatch?.params.version !== nextMatch.params.version) {
            return;
          }
          event.intercept({
            focusReset: "manual",
            async handler() {
              if (signal.aborted) return;
              handle.frame.src = routes.fragment.href(nextMatch.params);
              await handle.frame.reload();
            }
          });
        }
      });
    });
    return () => /* @__PURE__ */ jsx(Fragment, {});
  }
);
export {
  ClientRouter
};
