import { addEventListeners, createMixin } from "/assets/pkg/remix/src/ui.js";
export const dragVelocityReleaseEventType = "rmx:drag-velocity-release";
export class DragVelocityEvent extends Event {
	clientX;
	clientY;
	velocityX;
	velocityY;
	constructor(type, init) {
		super(type, {
			bubbles: true,
			cancelable: true
		});
		this.clientX = init.clientX;
		this.clientY = init.clientY;
		this.velocityX = init.velocityX;
		this.velocityY = init.velocityY;
	}
}
const baseDragVelocityEvents = createMixin((handle) => {
	let target;
	let isTracking = false;
	let pointerId = null;
	let lastX = 0;
	let lastY = 0;
	let lastTime = 0;
	let velocityX = 0;
	let velocityY = 0;
	let onPointerDown = (event) => {
		if (!event.isPrimary) return;
		isTracking = true;
		pointerId = event.pointerId;
		lastX = event.clientX;
		lastY = event.clientY;
		lastTime = performance.now();
		velocityX = 0;
		velocityY = 0;
		target.setPointerCapture(event.pointerId);
	};
	let onPointerMove = (event) => {
		if (!isTracking) return;
		if (!event.isPrimary) return;
		if (pointerId != null && event.pointerId !== pointerId) return;
		let now = performance.now();
		let dt = (now - lastTime) / 1e3;
		if (dt > 0) {
			// Smooth velocity with some decay of previous velocity
			let newVelocityX = (event.clientX - lastX) / dt;
			let newVelocityY = (event.clientY - lastY) / dt;
			velocityX = velocityX * .5 + newVelocityX * .5;
			velocityY = velocityY * .5 + newVelocityY * .5;
		}
		lastX = event.clientX;
		lastY = event.clientY;
		lastTime = now;
	};
	let onPointerUp = (event) => {
		if (!isTracking) return;
		if (!event.isPrimary) return;
		if (pointerId != null && event.pointerId !== pointerId) return;
		isTracking = false;
		pointerId = null;
		// If too much time passed since last move, velocity is zero
		let timeSinceLastMove = (performance.now() - lastTime) / 1e3;
		if (timeSinceLastMove > .1) {
			velocityX = 0;
			velocityY = 0;
		}
		target.dispatchEvent(new DragVelocityEvent(dragVelocityReleaseEventType, {
			clientX: event.clientX,
			clientY: event.clientY,
			velocityX,
			velocityY
		}));
	};
	let onPointerCancel = () => {
		isTracking = false;
		pointerId = null;
	};
	handle.addEventListener("insert", (event) => {
		target = event.node;
		addEventListeners(target, handle.signal, {
			pointerdown: onPointerDown,
			pointermove: onPointerMove,
			pointerup: onPointerUp,
			pointercancel: onPointerCancel
		});
	});
});
export const dragVelocityEvents = Object.assign(baseDragVelocityEvents, { release: dragVelocityReleaseEventType });