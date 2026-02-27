import {
  run
} from "./chunk-FVIRR6GM.js";

// src/client/entry.tsx
var app = run(document, {
  async loadModule(moduleUrl, exportName) {
    let mod = await import(moduleUrl);
    let Component = mod[exportName];
    if (!Component) {
      throw new Error(`Unknown component: ${moduleUrl}#${exportName}`);
    }
    return Component;
  },
  async resolveFrame(src, signal) {
    let response = await fetch(src, { headers: { accept: "text/html" }, signal });
    if (!response.ok) {
      return `<pre>Frame error: ${response.status} ${response.statusText}</pre>`;
    }
    if (response.body) return response.body;
    return response.text();
  }
});
app.ready().catch((error) => {
  console.error("Frame adoption failed:", error);
});
