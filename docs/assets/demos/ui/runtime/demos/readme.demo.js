import { addEventListeners, css, on, ref, TypedEventTarget } from "/assets/pkg/remix/src/ui.js";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
// ============================================================================
// Getting Started - Basic App Example
// ============================================================================
function App(handle) {
	let count = 0;
	return () => /* @__PURE__ */ _jsxs("button", {
		mix: [on("click", () => {
			count++;
			handle.update();
		})],
		children: ["Count: ", count]
	});
}
// ============================================================================
// Component State and Updates - Counter
// ============================================================================
function Counter(handle) {
	let count = 0;
	return () => /* @__PURE__ */ _jsxs("div", { children: [/* @__PURE__ */ _jsxs("span", { children: ["Count: ", count] }), /* @__PURE__ */ _jsx("button", {
		mix: [on("click", () => {
			count++;
			handle.update();
		})],
		children: "Increment"
	})] });
}
// ============================================================================
// Components - Greeting
// ============================================================================
function Greeting(handle) {
	return () => /* @__PURE__ */ _jsxs("h1", { children: [
		"Hello, ",
		handle.props.name,
		"!"
	] });
}
// ============================================================================
// Stateful Components - CounterWithSetup
// ============================================================================
function CounterWithSetup(handle) {
	// Component function: runs once
	let count = handle.props.initialCount;
	// Return render function: runs on every update
	return () => /* @__PURE__ */ _jsxs("div", { children: [
		handle.props.label || "Count",
		": ",
		count,
		/* @__PURE__ */ _jsx("button", {
			mix: [on("click", () => {
				count++;
				handle.update();
			})],
			children: "Increment"
		})
	] });
}
// ============================================================================
// Setup Prop vs Props - CounterWithLabel
// ============================================================================
function CounterWithLabel(handle) {
	let count = handle.props.initialCount;
	return () => /* @__PURE__ */ _jsxs("div", { children: [
		handle.props.label,
		": ",
		count,
		/* @__PURE__ */ _jsx("button", {
			mix: [on("click", () => {
				count++;
				handle.update();
			})],
			children: "+"
		})
	] });
}
// ============================================================================
// Events - SearchInput
// ============================================================================
function SearchInput(handle) {
	let query = "";
	let results = [];
	let loading = false;
	return () => /* @__PURE__ */ _jsxs("div", { children: [
		/* @__PURE__ */ _jsx("input", {
			type: "text",
			value: query,
			placeholder: "Type to search...",
			mix: [on("input", (event, signal) => {
				query = event.currentTarget.value;
				loading = true;
				handle.update();
				// Simulated search with timeout
				setTimeout(() => {
					if (signal.aborted) return;
					results = query ? [`Result for "${query}" 1`, `Result for "${query}" 2`] : [];
					loading = false;
					handle.update();
				}, 300);
			})]
		}),
		loading && /* @__PURE__ */ _jsx("div", { children: "Loading..." }),
		!loading && results.length > 0 && /* @__PURE__ */ _jsx("ul", { children: results.map((r) => /* @__PURE__ */ _jsx("li", { children: r })) })
	] });
}
// ============================================================================
// Controlled Input - Slug Form
// ============================================================================
function SlugForm(handle) {
	let slug = "";
	let generatedSlug = "";
	return () => /* @__PURE__ */ _jsxs("form", { children: [/* @__PURE__ */ _jsxs("label", {
		mix: [css({
			display: "flex",
			alignItems: "center",
			gap: "8px"
		})],
		children: [/* @__PURE__ */ _jsx("input", {
			type: "checkbox",
			mix: [on("change", (event) => {
				if (event.currentTarget.checked) {
					generatedSlug = crypto.randomUUID().slice(0, 8);
				} else {
					generatedSlug = "";
				}
				handle.update();
			})]
		}), "Auto-generate slug"]
	}), /* @__PURE__ */ _jsxs("label", {
		mix: [css({
			display: "flex",
			flexDirection: "column",
			gap: "4px"
		})],
		children: ["Slug", /* @__PURE__ */ _jsx("input", {
			type: "text",
			value: generatedSlug || slug,
			disabled: !!generatedSlug,
			mix: [on("input", (event) => {
				slug = event.currentTarget.value;
				handle.update();
			})]
		})]
	})] });
}
// ============================================================================
// Global Events - KeyboardTracker
// ============================================================================
function KeyboardTracker(handle) {
	let keys = [];
	handle.queueTask(() => {
		addEventListeners(document, handle.signal, { keydown: (event) => {
			keys.push(event.key);
			if (keys.length > 10) keys.shift();
			handle.update();
		} });
	});
	return () => /* @__PURE__ */ _jsxs("div", { children: ["Keys: ", keys.join(", ") || "(press some keys)"] });
}
// ============================================================================
// CSS Prop - Button (Basic)
// ============================================================================
function ButtonBasic() {
	return () => /* @__PURE__ */ _jsx("button", {
		mix: [css({
			color: "white",
			backgroundColor: "rgb(54, 113, 246)",
			border: "none",
			padding: "8px 16px",
			borderRadius: "4px",
			cursor: "pointer",
			"&:hover": { backgroundColor: "rgb(37, 90, 210)" },
			"&:active": { transform: "scale(0.98)" }
		})],
		children: "Click me"
	});
}
// ============================================================================
// CSS Prop - Button (Advanced with nested rules)
// ============================================================================
function ButtonAdvanced() {
	return () => /* @__PURE__ */ _jsxs("button", {
		mix: [css({
			color: "white",
			backgroundColor: "rgb(54, 113, 246)",
			border: "none",
			padding: "10px 20px",
			borderRadius: "6px",
			cursor: "pointer",
			position: "relative",
			display: "inline-flex",
			alignItems: "center",
			gap: "8px",
			"&:hover": { backgroundColor: "rgb(37, 90, 210)" },
			"&::before": {
				content: "\"\"",
				position: "absolute",
				inset: "-2px",
				borderRadius: "8px",
				background: "linear-gradient(45deg, rgb(54, 113, 246), rgb(99, 179, 255))",
				zIndex: -1,
				opacity: 0,
				transition: "opacity 0.2s"
			},
			"&:hover::before": { opacity: 1 },
			".icon": {
				width: "16px",
				height: "16px"
			}
		})],
		children: [/* @__PURE__ */ _jsx("span", {
			className: "icon",
			children: "★"
		}), "Click me"]
	});
}
// ============================================================================
// Ref Mixin - Form (Basic)
// ============================================================================
function FormBasic() {
	let inputRef;
	return () => /* @__PURE__ */ _jsxs("div", { children: [/* @__PURE__ */ _jsx("input", {
		type: "text",
		placeholder: "Click the button to select this",
		mix: [ref((node) => inputRef = node), css({
			marginRight: "8px",
			padding: "4px 8px"
		})]
	}), /* @__PURE__ */ _jsx("button", {
		mix: [css({ padding: "4px 12px" }), on("click", () => {
			// Select it from other parts of the form
			inputRef.select();
		})],
		children: "Select Input"
	})] });
}
// ============================================================================
// Ref Mixin with AbortSignal - ResizeObserver Component
// ============================================================================
function ResizeComponent(handle) {
	let dimensions = {
		width: 0,
		height: 0
	};
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [ref((node, signal) => {
			// Set up something that needs cleanup
			let observer = new ResizeObserver((entries) => {
				let entry = entries[0];
				if (entry) {
					dimensions.width = Math.round(entry.contentRect.width);
					dimensions.height = Math.round(entry.contentRect.height);
					handle.update();
				}
			});
			observer.observe(node);
			// Clean up when element is removed
			signal.addEventListener("abort", () => {
				observer.disconnect();
			});
		}), css({
			padding: "20px",
			backgroundColor: "rgba(255, 255, 255, 0.1)",
			borderRadius: "8px",
			resize: "both",
			overflow: "auto",
			minWidth: "100px",
			minHeight: "60px",
			border: "1px solid rgb(209, 213, 219)"
		})],
		children: [
			"Resize me! (",
			dimensions.width,
			" × ",
			dimensions.height,
			")"
		]
	});
}
// ============================================================================
// handle.update() - Player
// ============================================================================
function Player(handle) {
	let isPlaying = false;
	let playButton;
	let stopButton;
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [css({
			display: "flex",
			gap: "8px"
		})],
		children: [/* @__PURE__ */ _jsx("button", {
			disabled: isPlaying,
			mix: [
				ref((node) => playButton = node),
				css({
					padding: "8px 16px",
					opacity: isPlaying ? .5 : 1
				}),
				on("click", async () => {
					isPlaying = true;
					await handle.update();
					// Focus the enabled button after update completes
					stopButton.focus();
				})
			],
			children: "▶ Play"
		}), /* @__PURE__ */ _jsx("button", {
			disabled: !isPlaying,
			mix: [
				ref((node) => stopButton = node),
				css({
					padding: "8px 16px",
					opacity: !isPlaying ? .5 : 1
				}),
				on("click", async () => {
					isPlaying = false;
					await handle.update();
					// Focus the enabled button after update completes
					playButton.focus();
				})
			],
			children: "⏹ Stop"
		})]
	});
}
// ============================================================================
// handle.queueTask - Form with scroll
// ============================================================================
function FormWithScroll(handle) {
	let showDetails = false;
	let detailsSection;
	return () => /* @__PURE__ */ _jsxs("div", { children: [/* @__PURE__ */ _jsxs("label", {
		mix: [css({
			display: "flex",
			alignItems: "center",
			gap: "8px",
			cursor: "pointer"
		})],
		children: [/* @__PURE__ */ _jsx("input", {
			type: "checkbox",
			checked: showDetails,
			mix: [on("change", (event) => {
				showDetails = event.currentTarget.checked;
				handle.update();
				if (showDetails) {
					// Scroll to the expanded section after it renders
					handle.queueTask(() => {
						detailsSection.scrollIntoView({
							behavior: "smooth",
							block: "start"
						});
					});
				}
			})]
		}), "Show additional details"]
	}), showDetails && /* @__PURE__ */ _jsxs("section", {
		mix: [ref((node) => detailsSection = node), css({
			marginTop: "1rem",
			padding: "1rem",
			border: "1px solid rgba(255, 255, 255, 0.2)",
			borderRadius: "8px",
			backgroundColor: "rgba(255, 255, 255, 0.05)"
		})],
		children: [/* @__PURE__ */ _jsx("h3", {
			mix: [css({ margin: "0 0 0.5rem 0" })],
			children: "Additional Details"
		}), /* @__PURE__ */ _jsx("p", {
			mix: [css({ margin: 0 })],
			children: "This section appears when the checkbox is checked."
		})]
	})] });
}
// ============================================================================
// handle.signal - Clock
// ============================================================================
function Clock(handle) {
	handle.queueTask(() => {
		let interval = setInterval(() => {
			handle.update();
		}, 1e3);
		handle.signal.addEventListener("abort", () => clearInterval(interval), { once: true });
	});
	return () => /* @__PURE__ */ _jsx("span", { children: new Date().toLocaleTimeString() });
}
// ============================================================================
// handle.id - LabeledInput
// ============================================================================
function LabeledInput(handle) {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [css({
			display: "flex",
			flexDirection: "column",
			gap: "4px"
		})],
		children: [/* @__PURE__ */ _jsx("label", {
			htmlFor: handle.id,
			children: "Name"
		}), /* @__PURE__ */ _jsx("input", {
			id: handle.id,
			type: "text",
			mix: [css({
				padding: "4px 8px",
				borderRadius: "4px",
				border: "1px solid rgba(255,255,255,0.3)"
			})]
		})]
	});
}
// ============================================================================
// Context API - Theme Provider and Consumer
// ============================================================================
function ThemeProvider(handle) {
	handle.context.set({ theme: "dark" });
	return () => /* @__PURE__ */ _jsx("div", {
		mix: [css({
			display: "flex",
			flexDirection: "column",
			gap: "8px"
		})],
		children: /* @__PURE__ */ _jsx(ThemedHeader, {})
	});
}
function ThemedHeader(handle) {
	// Consume context from ThemeProvider
	let { theme } = handle.context.get(ThemeProvider);
	return () => /* @__PURE__ */ _jsx("header", {
		mix: [css({
			backgroundColor: theme === "dark" ? "#000" : "#fff",
			color: theme === "dark" ? "#fff" : "#000"
		})],
		children: "Header"
	});
}
// ============================================================================
// Context API with EventTarget - Advanced Theme
// ============================================================================
class Theme extends TypedEventTarget {
	#value = "light";
	get value() {
		return this.#value;
	}
	setValue(value) {
		this.#value = value;
		this.dispatchEvent(new Event("change"));
	}
}
function ThemeProviderAdvanced(handle) {
	let theme = new Theme();
	handle.context.set(theme);
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [css({
			display: "flex",
			flexDirection: "column",
			gap: "8px"
		})],
		children: [/* @__PURE__ */ _jsx("button", {
			mix: [css({
				padding: "8px 16px",
				alignSelf: "flex-start"
			}), on("click", () => {
				// no updates in the parent component
				theme.setValue(theme.value === "light" ? "dark" : "light");
			})],
			children: "Toggle Theme (EventTarget)"
		}), /* @__PURE__ */ _jsx(ThemedContent, {})]
	});
}
function ThemedContent(handle) {
	let theme = handle.context.get(ThemeProviderAdvanced);
	// Subscribe to theme changes and update when it changes
	addEventListeners(theme, handle.signal, { change() {
		handle.update();
	} });
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [css({
			padding: "12px",
			borderRadius: "6px",
			backgroundColor: theme.value === "dark" ? "#1a1a1a" : "#f0f0f0",
			color: theme.value === "dark" ? "#fff" : "#000"
		})],
		children: ["Current theme: ", theme.value]
	});
}
// ============================================================================
// Fragments - List
// ============================================================================
function ListWithFragment() {
	return () => /* @__PURE__ */ _jsx("ul", {
		mix: [css({
			margin: 0,
			paddingLeft: "20px"
		})],
		children: /* @__PURE__ */ _jsxs(_Fragment, { children: [
			/* @__PURE__ */ _jsx("li", { children: "Item 1" }),
			/* @__PURE__ */ _jsx("li", { children: "Item 2" }),
			/* @__PURE__ */ _jsx("li", { children: "Item 3" })
		] })
	});
}
// ============================================================================
// Example Container Component
// ============================================================================
function Example(handle) {
	return () => /* @__PURE__ */ _jsxs("div", {
		className: "example",
		children: [/* @__PURE__ */ _jsx("h2", { children: handle.props.title }), /* @__PURE__ */ _jsx("div", {
			className: "example-content",
			children: handle.props.children
		})]
	});
}
// ============================================================================
// Main Demo App
// ============================================================================
/**
* @name README Examples
* @description A gallery of small examples that mirror the package README snippets.
*/
export default function DemoApp() {
	return () => /* @__PURE__ */ _jsxs("div", {
		className: "examples-grid",
		children: [
			/* @__PURE__ */ _jsx(Example, {
				title: "Getting Started - Counter",
				children: /* @__PURE__ */ _jsx(App, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Component State - Counter",
				children: /* @__PURE__ */ _jsx(Counter, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Greeting",
				children: /* @__PURE__ */ _jsx(Greeting, { name: "World" })
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Counter with Setup",
				children: /* @__PURE__ */ _jsx(CounterWithSetup, {
					initialCount: 10,
					label: "Total"
				})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Setup vs Props",
				children: /* @__PURE__ */ _jsx(CounterWithLabel, {
					initialCount: 5,
					label: "Score"
				})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Events - Search Input",
				children: /* @__PURE__ */ _jsx(SearchInput, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Controlled Input - Slug Form",
				children: /* @__PURE__ */ _jsx(SlugForm, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Global Events - Keyboard Tracker",
				children: /* @__PURE__ */ _jsx(KeyboardTracker, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "CSS Prop - Basic Button",
				children: /* @__PURE__ */ _jsx(ButtonBasic, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "CSS Prop - Advanced Button",
				children: /* @__PURE__ */ _jsx(ButtonAdvanced, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Ref Mixin - Form",
				children: /* @__PURE__ */ _jsx(FormBasic, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Ref with AbortSignal - Resize Observer",
				children: /* @__PURE__ */ _jsx(ResizeComponent, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "handle.update() - Player",
				children: /* @__PURE__ */ _jsx(Player, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "handle.queueTask - Scroll to Section",
				children: /* @__PURE__ */ _jsx(FormWithScroll, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "handle.signal - Clock",
				children: /* @__PURE__ */ _jsx(Clock, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "handle.id - Labeled Input",
				children: /* @__PURE__ */ _jsx(LabeledInput, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Context API - Theme Provider",
				children: /* @__PURE__ */ _jsx(ThemeProvider, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Context with EventTarget",
				children: /* @__PURE__ */ _jsx(ThemeProviderAdvanced, {})
			}),
			/* @__PURE__ */ _jsx(Example, {
				title: "Fragments - List",
				children: /* @__PURE__ */ _jsx(ListWithFragment, {})
			})
		]
	});
}