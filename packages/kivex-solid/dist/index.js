import { createComponent as e, createRenderEffect as t, mergeProps as n, sharedConfig as r, splitProps as i, untrack as a } from "solid-js";
//#region ../../node_modules/.pnpm/solid-js@1.9.14/node_modules/solid-js/web/dist/web.js
var o = /*#__PURE__*/ new Set([
	"className",
	"value",
	"readOnly",
	"noValidate",
	"formNoValidate",
	"isMap",
	"noModule",
	"playsInline",
	"adAuctionHeaders",
	"allowFullscreen",
	"browsingTopics",
	"defaultChecked",
	"defaultMuted",
	"defaultSelected",
	"disablePictureInPicture",
	"disableRemotePlayback",
	"preservesPitch",
	"shadowRootClonable",
	"shadowRootCustomElementRegistry",
	"shadowRootDelegatesFocus",
	"shadowRootSerializable",
	"sharedStorageWritable",
	.../* @__PURE__ */ "allowfullscreen.async.alpha.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.hidden.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.adauctionheaders.browsingtopics.credentialless.defaultchecked.defaultmuted.defaultselected.defer.disablepictureinpicture.disableremoteplayback.preservespitch.shadowrootclonable.shadowrootcustomelementregistry.shadowrootdelegatesfocus.shadowrootserializable.sharedstoragewritable".split(".")
]), s = /*#__PURE__*/ new Set([
	"innerHTML",
	"textContent",
	"innerText",
	"children"
]), c = /*#__PURE__*/ Object.assign(Object.create(null), {
	className: "class",
	htmlFor: "for"
}), l = /*#__PURE__*/ Object.assign(Object.create(null), {
	class: "className",
	novalidate: {
		$: "noValidate",
		FORM: 1
	},
	formnovalidate: {
		$: "formNoValidate",
		BUTTON: 1,
		INPUT: 1
	},
	ismap: {
		$: "isMap",
		IMG: 1
	},
	nomodule: {
		$: "noModule",
		SCRIPT: 1
	},
	playsinline: {
		$: "playsInline",
		VIDEO: 1
	},
	readonly: {
		$: "readOnly",
		INPUT: 1,
		TEXTAREA: 1
	},
	adauctionheaders: {
		$: "adAuctionHeaders",
		IFRAME: 1
	},
	allowfullscreen: {
		$: "allowFullscreen",
		IFRAME: 1
	},
	browsingtopics: {
		$: "browsingTopics",
		IMG: 1
	},
	defaultchecked: {
		$: "defaultChecked",
		INPUT: 1
	},
	defaultmuted: {
		$: "defaultMuted",
		AUDIO: 1,
		VIDEO: 1
	},
	defaultselected: {
		$: "defaultSelected",
		OPTION: 1
	},
	disablepictureinpicture: {
		$: "disablePictureInPicture",
		VIDEO: 1
	},
	disableremoteplayback: {
		$: "disableRemotePlayback",
		AUDIO: 1,
		VIDEO: 1
	},
	preservespitch: {
		$: "preservesPitch",
		AUDIO: 1,
		VIDEO: 1
	},
	shadowrootclonable: {
		$: "shadowRootClonable",
		TEMPLATE: 1
	},
	shadowrootdelegatesfocus: {
		$: "shadowRootDelegatesFocus",
		TEMPLATE: 1
	},
	shadowrootserializable: {
		$: "shadowRootSerializable",
		TEMPLATE: 1
	},
	sharedstoragewritable: {
		$: "sharedStorageWritable",
		IFRAME: 1,
		IMG: 1
	}
});
function u(e, t) {
	let n = l[e];
	return typeof n == "object" ? n[t] ? n.$ : void 0 : n;
}
var d = /*#__PURE__*/ new Set([
	"beforeinput",
	"click",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart"
]), ee = {
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace"
};
function f(e, t, n) {
	let r = n.length, i = t.length, a = r, o = 0, s = 0, c = t[i - 1].nextSibling, l = null;
	for (; o < i || s < a;) {
		if (t[o] === n[s]) {
			o++, s++;
			continue;
		}
		for (; t[i - 1] === n[a - 1];) i--, a--;
		if (i === o) {
			let t = a < r ? s ? n[s - 1].nextSibling : n[a - s] : c;
			for (; s < a;) e.insertBefore(n[s++], t);
		} else if (a === s) for (; o < i;) (!l || !l.has(t[o])) && t[o].remove(), o++;
		else if (t[o] === n[a - 1] && n[s] === t[i - 1]) {
			let r = t[--i].nextSibling;
			e.insertBefore(n[s++], t[o++].nextSibling), e.insertBefore(n[--a], r), t[i] = n[a];
		} else {
			if (!l) {
				l = /* @__PURE__ */ new Map();
				let e = s;
				for (; e < a;) l.set(n[e], e++);
			}
			let r = l.get(t[o]);
			if (r != null) if (s < r && r < a) {
				let c = o, u = 1, d;
				for (; ++c < i && c < a && !((d = l.get(t[c])) == null || d !== r + u);) u++;
				if (u > r - s) {
					let i = t[o];
					for (; s < r;) e.insertBefore(n[s++], i);
				} else e.replaceChild(n[s++], t[o++]);
			} else o++;
			else t[o++].remove();
		}
	}
}
var p = "_$DX_DELEGATE";
function m(e, t, n, r) {
	let i, o = () => {
		let t = r ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
		return t.innerHTML = e, n ? t.content.firstChild.firstChild : r ? t.firstChild : t.content.firstChild;
	}, s = t ? () => a(() => document.importNode(i ||= o(), !0)) : () => (i ||= o()).cloneNode(!0);
	return s.cloneNode = s, s;
}
function te(e, t = window.document) {
	let n = t[p] || (t[p] = /* @__PURE__ */ new Set());
	for (let r = 0, i = e.length; r < i; r++) {
		let i = e[r];
		n.has(i) || (n.add(i), t.addEventListener(i, pe));
	}
}
function h(e, t, n) {
	v(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function ne(e, t, n, r) {
	v(e) || (r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r));
}
function re(e, t, n) {
	v(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function ie(e, t) {
	v(e) || (t == null ? e.removeAttribute("class") : e.className = t);
}
function ae(e, t, n, r) {
	if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
	else if (Array.isArray(n)) {
		let r = n[0];
		e.addEventListener(t, n[0] = (t) => r.call(e, n[1], t));
	} else e.addEventListener(t, n, typeof n != "function" && n);
}
function oe(e, t, n = {}) {
	let r = Object.keys(t || {}), i = Object.keys(n), a, o;
	for (a = 0, o = i.length; a < o; a++) {
		let r = i[a];
		!r || r === "undefined" || t[r] || (de(e, r, !1), delete n[r]);
	}
	for (a = 0, o = r.length; a < o; a++) {
		let i = r[a], o = !!t[i];
		!i || i === "undefined" || n[i] === o || !o || (de(e, i, !0), n[i] = o);
	}
	return n;
}
function se(e, t, n) {
	if (!t) return n ? h(e, "style") : t;
	let r = e.style;
	if (typeof t == "string") return r.cssText = t;
	typeof n == "string" && (r.cssText = n = void 0), n ||= {}, t ||= {};
	let i, a;
	for (a in n) t[a] ?? r.removeProperty(a), delete n[a];
	for (a in t) i = t[a], i !== n[a] && (r.setProperty(a, i), n[a] = i);
	return n;
}
function g(e, n = {}, r, i) {
	let a = {};
	return i || t(() => a.children = y(e, n.children, a.children)), t(() => typeof n.ref == "function" && _(n.ref, e)), t(() => le(e, n, r, !0, a, !0)), a;
}
function _(e, t, n) {
	return a(() => e(t, n));
}
function ce(e, n, r, i) {
	if (r !== void 0 && !i && (i = []), typeof n != "function") return y(e, n, i, r);
	t((t) => y(e, n(), t, r), i);
}
function le(e, t, n, r, i = {}, a = !1) {
	t ||= {};
	for (let r in i) if (!(r in t)) {
		if (r === "children") continue;
		i[r] = fe(e, r, null, i[r], n, a, t);
	}
	for (let o in t) {
		if (o === "children") {
			r || y(e, t.children);
			continue;
		}
		let s = t[o];
		i[o] = fe(e, o, s, i[o], n, a, t);
	}
}
function v(e) {
	return !!r.context && !r.done && (!e || e.isConnected);
}
function ue(e) {
	return e.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function de(e, t, n) {
	let r = t.trim().split(/\s+/);
	for (let t = 0, i = r.length; t < i; t++) e.classList.toggle(r[t], n);
}
function fe(e, t, n, r, i, a, l) {
	let f, p, m, g, _;
	if (t === "style") return se(e, n, r);
	if (t === "classList") return oe(e, n, r);
	if (n === r) return r;
	if (t === "ref") a || n(e);
	else if (t.slice(0, 3) === "on:") {
		let i = t.slice(3);
		r && e.removeEventListener(i, r, typeof r != "function" && r), n && e.addEventListener(i, n, typeof n != "function" && n);
	} else if (t.slice(0, 10) === "oncapture:") {
		let i = t.slice(10);
		r && e.removeEventListener(i, r, !0), n && e.addEventListener(i, n, !0);
	} else if (t.slice(0, 2) === "on") {
		let i = t.slice(2).toLowerCase(), a = d.has(i);
		if (!a && r) {
			let t = Array.isArray(r) ? r[0] : r;
			e.removeEventListener(i, t);
		}
		(a || n) && (ae(e, i, n, a), a && te([i]));
	} else if (t.slice(0, 5) === "attr:") h(e, t.slice(5), n);
	else if (t.slice(0, 5) === "bool:") re(e, t.slice(5), n);
	else if ((_ = t.slice(0, 5) === "prop:") || (m = s.has(t)) || !i && ((g = u(t, e.tagName)) || (p = o.has(t))) || (f = e.nodeName.includes("-") || "is" in l)) {
		if (_) t = t.slice(5), p = !0;
		else if (v(e)) return n;
		t === "class" || t === "className" ? ie(e, n) : f && !p && !m ? e[ue(t)] = n : e[g || t] = n;
	} else {
		let r = i && t.indexOf(":") > -1 && ee[t.split(":")[0]];
		r ? ne(e, r, t, n) : h(e, c[t] || t, n);
	}
	return n;
}
function pe(e) {
	if (r.registry && r.events && r.events.find(([t, n]) => n === e)) return;
	let t = e.target, n = `$$${e.type}`, i = e.target, a = e.currentTarget, o = (t) => Object.defineProperty(e, "target", {
		configurable: !0,
		value: t
	}), s = () => {
		let r = t[n];
		if (r && !t.disabled) {
			let i = t[`${n}Data`];
			if (i === void 0 ? r.call(t, e) : r.call(t, i, e), e.cancelBubble) return;
		}
		return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && o(t.host), !0;
	}, c = () => {
		for (; s() && (t = t._$host || t.parentNode || t.host););
	};
	if (Object.defineProperty(e, "currentTarget", {
		configurable: !0,
		get() {
			return t || document;
		}
	}), r.registry && !r.done && (r.done = _$HY.done = !0), e.composedPath) {
		let n = e.composedPath();
		o(n[0]);
		for (let e = 0; e < n.length - 2 && (t = n[e], s()); e++) {
			if (t._$host) {
				t = t._$host, c();
				break;
			}
			if (t.parentNode === a) break;
		}
	} else c();
	o(i);
}
function y(e, n, r, i, a) {
	let o = v(e);
	if (o) {
		!r && (r = [...e.childNodes]);
		let t = [];
		for (let e = 0; e < r.length; e++) {
			let n = r[e];
			n.nodeType === 8 && n.data.slice(0, 2) === "!$" ? n.remove() : t.push(n);
		}
		r = t;
	}
	for (; typeof r == "function";) r = r();
	if (n === r) return r;
	let s = typeof n, c = i !== void 0;
	if (e = c && r[0] && r[0].parentNode || e, s === "string" || s === "number") {
		if (o || s === "number" && (n = n.toString(), n === r)) return r;
		if (c) {
			let t = r[0];
			t && t.nodeType === 3 ? t.data !== n && (t.data = n) : t = document.createTextNode(n), r = x(e, r, i, t);
		} else r = r !== "" && typeof r == "string" ? e.firstChild.data = n : e.textContent = n;
	} else if (n == null || s === "boolean") {
		if (o) return r;
		r = x(e, r, i);
	} else if (s === "function") return t(() => {
		let t = n();
		for (; typeof t == "function";) t = t();
		r = y(e, t, r, i);
	}), () => r;
	else if (Array.isArray(n)) {
		let s = [], l = r && Array.isArray(r);
		if (b(s, n, r, a)) return t(() => r = y(e, s, r, i, !0)), () => r;
		if (o) {
			if (!s.length) return r;
			if (i === void 0) return r = [...e.childNodes];
			let t = s[0];
			if (t.parentNode !== e) return r;
			let n = [t];
			for (; (t = t.nextSibling) !== i;) n.push(t);
			return r = n;
		}
		if (s.length === 0) {
			if (r = x(e, r, i), c) return r;
		} else l ? r.length === 0 ? me(e, s, i) : f(e, r, s) : (r && x(e), me(e, s));
		r = s;
	} else if (n.nodeType) {
		if (o && n.parentNode) return r = c ? [n] : n;
		if (Array.isArray(r)) {
			if (c) return r = x(e, r, i, n);
			x(e, r, null, n);
		} else r == null || r === "" || !e.firstChild ? e.appendChild(n) : e.replaceChild(n, e.firstChild);
		r = n;
	}
	return r;
}
function b(e, t, n, r) {
	let i = !1;
	for (let a = 0, o = t.length; a < o; a++) {
		let o = t[a], s = n && n[e.length], c;
		if (!(o == null || o === !0 || o === !1)) if ((c = typeof o) == "object" && o.nodeType) e.push(o);
		else if (Array.isArray(o)) i = b(e, o, s) || i;
		else if (c === "function") if (r) {
			for (; typeof o == "function";) o = o();
			i = b(e, Array.isArray(o) ? o : [o], Array.isArray(s) ? s : [s]) || i;
		} else e.push(o), i = !0;
		else {
			let t = String(o);
			s && s.nodeType === 3 && s.data === t ? e.push(s) : e.push(document.createTextNode(t));
		}
	}
	return i;
}
function me(e, t, n = null) {
	for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n);
}
function x(e, t, n, r) {
	if (n === void 0) return e.textContent = "";
	let i = r || document.createTextNode("");
	if (t.length) {
		let r = !1;
		for (let a = t.length - 1; a >= 0; a--) {
			let o = t[a];
			if (i !== o) {
				let t = o.parentNode === e;
				!r && !a ? t ? e.replaceChild(i, o) : e.insertBefore(i, n) : t && o.remove();
			} else r = !0;
		}
	} else e.insertBefore(i, n);
	return [i];
}
//#endregion
//#region src/components/IconBase.tsx
var he = /*#__PURE__*/ m("<svg xmlns=http://www.w3.org/2000/svg viewBox=\"0 0 24 24\"fill=none stroke-linecap=round stroke-linejoin=round>");
function S(e) {
	let [t, r] = i(e, [
		"size",
		"color",
		"strokeWidth",
		"children",
		"ref"
	]);
	return (() => {
		var e = he(), i = t.ref;
		return typeof i == "function" ? _(i, e) : t.ref = e, g(e, n({
			get width() {
				return t.size ?? 24;
			},
			get height() {
				return t.size ?? 24;
			},
			get stroke() {
				return t.color ?? "currentColor";
			},
			get "stroke-width"() {
				return t.strokeWidth ?? 2;
			}
		}, r), !0, !0), ce(e, () => t.children), e;
	})();
}
S.displayName = "IconBase";
//#endregion
//#region src/icons/activity.tsx
var ge = /*#__PURE__*/ m("<svg><path d=\"M3 12h2.42a.1.1 0 0 0 .1-.08l2.4-9.57c.02-.1.16-.1.18 0l5.81 19.37c.03.09.16.1.2 0l3.62-9.66a.1.1 0 0 1 .09-.06H21\"></svg>", !1, !0, !1);
function C(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return ge();
	} }));
}
C.displayName = "Activity";
//#endregion
//#region src/icons/alert.tsx
var _e = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), ve = /*#__PURE__*/ m("<svg><path d=\"M12 8v4\"></svg>", !1, !0, !1), ye = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=0.5></svg>", !1, !0, !1);
function w(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_e(),
			ve(),
			ye()
		];
	} }));
}
w.displayName = "Alert";
//#endregion
//#region src/icons/angry.tsx
var be = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), xe = /*#__PURE__*/ m("<svg><path d=\"M8 16c1.77-2.67 6.23-2.67 8 0\"></svg>", !1, !0, !1), Se = /*#__PURE__*/ m("<svg><path d=\"m7 7 2 1\"></svg>", !1, !0, !1), Ce = /*#__PURE__*/ m("<svg><path d=\"m15 8 2-1\"></svg>", !1, !0, !1), we = /*#__PURE__*/ m("<svg><circle cx=8 cy=11 r=0.5></svg>", !1, !0, !1), Te = /*#__PURE__*/ m("<svg><circle cx=16 cy=11 r=0.5></svg>", !1, !0, !1);
function T(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			be(),
			xe(),
			Se(),
			Ce(),
			we(),
			Te()
		];
	} }));
}
T.displayName = "Angry";
//#endregion
//#region src/icons/annoyed.tsx
var Ee = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), De = /*#__PURE__*/ m("<svg><path d=\"M8 15h8\"></svg>", !1, !0, !1), Oe = /*#__PURE__*/ m("<svg><path d=\"M8 9h2\"></svg>", !1, !0, !1), ke = /*#__PURE__*/ m("<svg><path d=\"M14 9h2\"></svg>", !1, !0, !1);
function E(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ee(),
			De(),
			Oe(),
			ke()
		];
	} }));
}
E.displayName = "Annoyed";
//#endregion
//#region src/icons/area-chart.tsx
var Ae = /*#__PURE__*/ m("<svg><path d=\"M3 3v16c0 1.1.9 2 2 2h16\"></svg>", !1, !0, !1), je = /*#__PURE__*/ m("<svg><path d=\"m7.3 11.7 2.56-2.56a.2.2 0 0 1 .28 0l3.23 3.23a.2.2 0 0 0 .27.02l5.03-4.12a.2.2 0 0 1 .33.15V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3.59a1 1 0 0 1 .3-.7Z\"></svg>", !1, !0, !1);
function D(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ae(), je()];
	} }));
}
D.displayName = "AreaChart";
//#endregion
//#region src/icons/arrow-down-from-line.tsx
var Me = /*#__PURE__*/ m("<svg><path d=\"m6 15 5.8 5.87c.1.17.29.17.4 0L18 15\"></svg>", !1, !0, !1), Ne = /*#__PURE__*/ m("<svg><path d=\"M12 19V7\"></svg>", !1, !0, !1), Pe = /*#__PURE__*/ m("<svg><path d=\"M5 3h14\"></svg>", !1, !0, !1);
function O(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Me(),
			Ne(),
			Pe()
		];
	} }));
}
O.displayName = "ArrowDownFromLine";
//#endregion
//#region src/icons/arrow-down-left.tsx
var Fe = /*#__PURE__*/ m("<svg><path d=\"M17 17H7.5a.5.5 0 0 1-.5-.5V7\"></svg>", !1, !0, !1), Ie = /*#__PURE__*/ m("<svg><path d=\"m16 8-9 9\"></svg>", !1, !0, !1);
function k(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Fe(), Ie()];
	} }));
}
k.displayName = "ArrowDownLeft";
//#endregion
//#region src/icons/arrow-down-right.tsx
var Le = /*#__PURE__*/ m("<svg><path d=\"M7 17h9.5a.5.5 0 0 0 .5-.5V7\"></svg>", !1, !0, !1), Re = /*#__PURE__*/ m("<svg><path d=\"m8 8 9 9\"></svg>", !1, !0, !1);
function A(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Le(), Re()];
	} }));
}
A.displayName = "ArrowDownRight";
//#endregion
//#region src/icons/arrow-down-to-line.tsx
var ze = /*#__PURE__*/ m("<svg><path d=\"m6 11 5.8 5.87c.1.17.29.17.4 0L18 11\"></svg>", !1, !0, !1), Be = /*#__PURE__*/ m("<svg><path d=\"M12 15V3\"></svg>", !1, !0, !1), Ve = /*#__PURE__*/ m("<svg><path d=\"M5 21h14\"></svg>", !1, !0, !1);
function j(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ze(),
			Be(),
			Ve()
		];
	} }));
}
j.displayName = "ArrowDownToLine";
//#endregion
//#region src/icons/arrow-down.tsx
var He = /*#__PURE__*/ m("<svg><path d=\"m6 13 5.8 5.87c.1.17.29.17.4 0L18 13\"></svg>", !1, !0, !1), Ue = /*#__PURE__*/ m("<svg><path d=\"M12 17V5\"></svg>", !1, !0, !1);
function M(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [He(), Ue()];
	} }));
}
M.displayName = "ArrowDown";
//#endregion
//#region src/icons/arrow-left-from-line.tsx
var We = /*#__PURE__*/ m("<svg><path d=\"m9 7-5.87 5.8c-.17.1-.17.29 0 .4L9 19\"></svg>", !1, !0, !1), Ge = /*#__PURE__*/ m("<svg><path d=\"M5 13h12\"></svg>", !1, !0, !1), Ke = /*#__PURE__*/ m("<svg><path d=\"M21 6v14\"></svg>", !1, !0, !1);
function N(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			We(),
			Ge(),
			Ke()
		];
	} }));
}
N.displayName = "ArrowLeftFromLine";
//#endregion
//#region src/icons/arrow-left-to-line.tsx
var qe = /*#__PURE__*/ m("<svg><path d=\"m13 6-5.87 5.8c-.17.1-.17.29 0 .4L13 18\"></svg>", !1, !0, !1), Je = /*#__PURE__*/ m("<svg><path d=\"M9 12h12\"></svg>", !1, !0, !1), Ye = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1);
function P(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qe(),
			Je(),
			Ye()
		];
	} }));
}
P.displayName = "ArrowLeftToLine";
//#endregion
//#region src/icons/arrow-left.tsx
var Xe = /*#__PURE__*/ m("<svg><path d=\"m12 5-6.65 6.65a.5.5 0 0 0 0 .7L12 19\"></svg>", !1, !0, !1), Ze = /*#__PURE__*/ m("<svg><path d=\"M6 12h13\"></svg>", !1, !0, !1);
function F(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Xe(), Ze()];
	} }));
}
F.displayName = "ArrowLeft";
//#endregion
//#region src/icons/arrow-right-from-line.tsx
var Qe = /*#__PURE__*/ m("<svg><path d=\"M7 12h12\"></svg>", !1, !0, !1), $e = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1), et = /*#__PURE__*/ m("<svg><path d=\"m15 6 5.85 5.65c.2.2.2.5 0 .7L15 18\"></svg>", !1, !0, !1);
function I(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Qe(),
			$e(),
			et()
		];
	} }));
}
I.displayName = "ArrowRightFromLine";
//#endregion
//#region src/icons/arrow-right-to-line.tsx
var tt = /*#__PURE__*/ m("<svg><path d=\"M3 12.05h12\"></svg>", !1, !0, !1), nt = /*#__PURE__*/ m("<svg><path d=\"M21 5v14\"></svg>", !1, !0, !1), rt = /*#__PURE__*/ m("<svg><path d=\"m11 6 5.65 5.65c.2.2.2.5 0 .7L11 18\"></svg>", !1, !0, !1);
function L(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			tt(),
			nt(),
			rt()
		];
	} }));
}
L.displayName = "ArrowRightToLine";
//#endregion
//#region src/icons/arrow-up-from-line.tsx
var it = /*#__PURE__*/ m("<svg><path d=\"m6 9 5.65-5.85c.2-.2.5-.2.7 0L18 9\"></svg>", !1, !0, !1), at = /*#__PURE__*/ m("<svg><path d=\"M12 3.8V17\"></svg>", !1, !0, !1), ot = /*#__PURE__*/ m("<svg><path d=\"M5 21h14\"></svg>", !1, !0, !1);
function R(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			it(),
			at(),
			ot()
		];
	} }));
}
R.displayName = "ArrowUpFromLine";
//#endregion
//#region src/icons/arrow-up-left.tsx
var st = /*#__PURE__*/ m("<svg><path d=\"m8 8 9 9\"></svg>", !1, !0, !1), ct = /*#__PURE__*/ m("<svg><path d=\"M7 17V7.5c0-.28.22-.5.5-.5H17\"></svg>", !1, !0, !1);
function z(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [st(), ct()];
	} }));
}
z.displayName = "ArrowUpLeft";
//#endregion
//#region src/icons/arrow-up-right.tsx
var lt = /*#__PURE__*/ m("<svg><path d=\"M7 7h9.5c.28 0 .5.22.5.5V17\"></svg>", !1, !0, !1), ut = /*#__PURE__*/ m("<svg><path d=\"m7 17 9-9\"></svg>", !1, !0, !1);
function B(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [lt(), ut()];
	} }));
}
B.displayName = "ArrowUpRight";
//#endregion
//#region src/icons/arrow-up-to-line.tsx
var dt = /*#__PURE__*/ m("<svg><path d=\"m5 13 5.65-5.85c.2-.2.5-.2.7 0L17 13\"></svg>", !1, !0, !1), ft = /*#__PURE__*/ m("<svg><path d=\"M11 8v13.2\"></svg>", !1, !0, !1), pt = /*#__PURE__*/ m("<svg><path d=\"M5 3h14\"></svg>", !1, !0, !1);
function V(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			dt(),
			ft(),
			pt()
		];
	} }));
}
V.displayName = "ArrowUpToLine";
//#endregion
//#region src/icons/bar-chart.tsx
var mt = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), ht = /*#__PURE__*/ m("<svg><path d=\"M7 6h4\"></svg>", !1, !0, !1), gt = /*#__PURE__*/ m("<svg><path d=\"M7 11h12\"></svg>", !1, !0, !1), _t = /*#__PURE__*/ m("<svg><path d=\"M7 16h8\"></svg>", !1, !0, !1);
function H(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mt(),
			ht(),
			gt(),
			_t()
		];
	} }));
}
H.displayName = "BarChart";
//#endregion
//#region src/icons/barcode-read.tsx
var vt = /*#__PURE__*/ m("<svg><path d=\"M8.4 4H5a2 2 0 0 0-2 2v3.33M15.6 4H19a2 2 0 0 1 2 2v3.33M8.4 20H5a2 2 0 0 1-2-2v-3.33M15.6 20H19a2 2 0 0 0 2-2v-3.33\"></svg>", !1, !0, !1), yt = /*#__PURE__*/ m("<svg><path d=\"M7 7v2m0 8v-5\"></svg>", !1, !0, !1), bt = /*#__PURE__*/ m("<svg><path d=\"M8 7v2m0 8v-5\"></svg>", !1, !0, !1), xt = /*#__PURE__*/ m("<svg><path d=\"M12 7v2m0 8v-5\"></svg>", !1, !0, !1), St = /*#__PURE__*/ m("<svg><path d=\"M16 7v2m0 8v-5\"></svg>", !1, !0, !1), Ct = /*#__PURE__*/ m("<svg><path d=\"M17 7v2m0 8v-5\"></svg>", !1, !0, !1), wt = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
function U(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			vt(),
			yt(),
			bt(),
			xt(),
			St(),
			Ct(),
			wt()
		];
	} }));
}
U.displayName = "BarcodeRead";
//#endregion
//#region src/icons/baseline.tsx
var Tt = /*#__PURE__*/ m("<svg><path d=\"M4 20h16\"></svg>", !1, !0, !1), Et = /*#__PURE__*/ m("<svg><path d=\"M18 16 12.02 4.04a.02.02 0 0 0-.04 0L6 16\"></svg>", !1, !0, !1), Dt = /*#__PURE__*/ m("<svg><path d=\"M8 12h8\"></svg>", !1, !0, !1);
function W(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Tt(),
			Et(),
			Dt()
		];
	} }));
}
W.displayName = "Baseline";
//#endregion
//#region src/icons/battery-charging.tsx
var Ot = /*#__PURE__*/ m("<svg><path d=\"M6 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2m8-12h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2\"></svg>", !1, !0, !1), kt = /*#__PURE__*/ m("<svg><path d=\"M22 10v4\"></svg>", !1, !0, !1), At = /*#__PURE__*/ m("<svg><path d=\"m11 8-2.94 3.92q-.03.06.04.08h3.8q.07.02.04.08L9 16\"></svg>", !1, !0, !1);
function G(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ot(),
			kt(),
			At()
		];
	} }));
}
G.displayName = "BatteryCharging";
//#endregion
//#region src/icons/battery-low.tsx
var jt = /*#__PURE__*/ m("<svg><rect width=16 height=12 x=2 y=6 rx=2></svg>", !1, !0, !1), Mt = /*#__PURE__*/ m("<svg><path d=\"M22 10v4\"></svg>", !1, !0, !1), Nt = /*#__PURE__*/ m("<svg><path d=\"M6 10v4\"></svg>", !1, !0, !1);
function K(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jt(),
			Mt(),
			Nt()
		];
	} }));
}
K.displayName = "BatteryLow";
//#endregion
//#region src/icons/battery-medium.tsx
var Pt = /*#__PURE__*/ m("<svg><rect width=16 height=12 x=2 y=6 rx=2></svg>", !1, !0, !1), Ft = /*#__PURE__*/ m("<svg><path d=\"M22 10v4\"></svg>", !1, !0, !1), It = /*#__PURE__*/ m("<svg><path d=\"M6 10v4\"></svg>", !1, !0, !1), Lt = /*#__PURE__*/ m("<svg><path d=\"M10 10v4\"></svg>", !1, !0, !1);
function q(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Pt(),
			Ft(),
			It(),
			Lt()
		];
	} }));
}
q.displayName = "BatteryMedium";
//#endregion
//#region src/icons/battery-warning.tsx
var Rt = /*#__PURE__*/ m("<svg><path d=\"M6 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2m8-12h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2\"></svg>", !1, !0, !1), zt = /*#__PURE__*/ m("<svg><path d=\"M22 10v4\"></svg>", !1, !0, !1), Bt = /*#__PURE__*/ m("<svg><path d=\"M10 7v6\"></svg>", !1, !0, !1), Vt = /*#__PURE__*/ m("<svg><path d=\"M10.01 17H10\"></svg>", !1, !0, !1);
function J(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rt(),
			zt(),
			Bt(),
			Vt()
		];
	} }));
}
J.displayName = "BatteryWarning";
//#endregion
//#region src/icons/battery.tsx
var Ht = /*#__PURE__*/ m("<svg><rect width=16 height=12 x=2 y=6 rx=2></svg>", !1, !0, !1), Ut = /*#__PURE__*/ m("<svg><path d=\"M22 10v4\"></svg>", !1, !0, !1);
function Y(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ht(), Ut()];
	} }));
}
Y.displayName = "Battery";
//#endregion
//#region src/icons/bell-off.tsx
var Wt = /*#__PURE__*/ m("<svg><path d=\"M9 3.81A6 6 0 0 1 12 3c3.44 0 6.22 2.95 6.22 6.59V13\"></svg>", !1, !0, !1), Gt = /*#__PURE__*/ m("<svg><path d=\"M6.5 6.5a7 7 0 0 0-.72 3.09v3.82q0 .88-.38 1.68l-1.02 2.17q-.38.8-.38 1.69V19h15\"></svg>", !1, !0, !1), Kt = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1), qt = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function X(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wt(),
			Gt(),
			Kt(),
			qt()
		];
	} }));
}
X.displayName = "BellOff";
//#endregion
//#region src/icons/bell-ring.tsx
var Jt = /*#__PURE__*/ m("<svg><path d=\"M5.78 9.59C5.78 5.95 8.56 3 12 3s6.22 2.95 6.22 6.59v3.82q0 .89.38 1.68l1.02 2.17q.38.8.38 1.69V19H4v-.05q0-.89.38-1.69L5.4 15.1q.38-.8.38-1.68z\"></svg>", !1, !0, !1), Yt = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1), Xt = /*#__PURE__*/ m("<svg><path d=\"M2 8c.17-.83.5-3.5 3-6\"></svg>", !1, !0, !1), Zt = /*#__PURE__*/ m("<svg><path d=\"M19 2c.83.83 2.6 3.2 3 6\"></svg>", !1, !0, !1);
function Z(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Jt(),
			Yt(),
			Xt(),
			Zt()
		];
	} }));
}
Z.displayName = "BellRing";
//#endregion
//#region src/icons/bell.tsx
var Qt = /*#__PURE__*/ m("<svg><path d=\"M5.78 9.59C5.78 5.95 8.56 3 12 3s6.22 2.95 6.22 6.59v3.82q0 .89.38 1.68l1.02 2.17q.38.8.38 1.69V19H4v-.05q0-.89.38-1.69L5.4 15.1q.38-.8.38-1.68z\"></svg>", !1, !0, !1), $t = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1);
function Q(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Qt(), $t()];
	} }));
}
Q.displayName = "Bell";
//#endregion
//#region src/icons/bitcoin.tsx
var en = /*#__PURE__*/ m("<svg><path d=\"m10.11 2.79-2.2 17.86\"></svg>", !1, !0, !1), tn = /*#__PURE__*/ m("<svg><path d=\"m7.85 4.5 5.46.67a3.5 3.5 0 1 1-.85 6.95L7 11.45\"></svg>", !1, !0, !1), nn = /*#__PURE__*/ m("<svg><path d=\"m7.07 11.46 5.46.67a3.5 3.5 0 0 1-.86 6.94l-5.45-.67\"></svg>", !1, !0, !1), rn = /*#__PURE__*/ m("<svg><path d=\"m14.09 3.23-.25 1.99M11.9 21.1l.25-1.98\"></svg>", !1, !0, !1);
function an(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			en(),
			tn(),
			nn(),
			rn()
		];
	} }));
}
an.displayName = "Bitcoin";
//#endregion
//#region src/icons/blocks.tsx
var on = /*#__PURE__*/ m("<svg><path d=\"M2 14h8m-8 0v7a1 1 0 0 0 1 1h7m-8-8V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7m0 0h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7m0-8v8\"></svg>", !1, !0, !1), sn = /*#__PURE__*/ m("<svg><rect width=8 height=8 x=14 y=2 rx=1></svg>", !1, !0, !1);
function cn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [on(), sn()];
	} }));
}
cn.displayName = "Blocks";
//#endregion
//#region src/icons/bluetooth-connected.tsx
var ln = /*#__PURE__*/ m("<svg><path d=\"M12 12V2.12q.02-.08.09-.03l4.87 4.87q.03.04 0 .08zm0 0v9.88q.02.08.09.03l4.87-4.87a.05.05 0 0 0 0-.08zm0 0L7 7m5 5-5 5\"></svg>", !1, !0, !1), un = /*#__PURE__*/ m("<svg><path d=\"M18 12h3\"></svg>", !1, !0, !1), dn = /*#__PURE__*/ m("<svg><path d=\"M3 12h3\"></svg>", !1, !0, !1);
function fn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ln(),
			un(),
			dn()
		];
	} }));
}
fn.displayName = "BluetoothConnected";
//#endregion
//#region src/icons/bluetooth-off.tsx
var pn = /*#__PURE__*/ m("<svg><path d=\"m12 12-5 5\"></svg>", !1, !0, !1), mn = /*#__PURE__*/ m("<svg><path d=\"m15 9 1.96-1.96a.05.05 0 0 0 0-.08L12.1 2.1a.05.05 0 0 0-.09.03V6\"></svg>", !1, !0, !1), hn = /*#__PURE__*/ m("<svg><path d=\"M12 12v9.88q.02.08.09.03L17 17\"></svg>", !1, !0, !1), gn = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function _n(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			pn(),
			mn(),
			hn(),
			gn()
		];
	} }));
}
_n.displayName = "BluetoothOff";
//#endregion
//#region src/icons/bluetooth-searching.tsx
var vn = /*#__PURE__*/ m("<svg><path d=\"M12 12V2.12q.02-.08.09-.03l4.87 4.87q.03.04 0 .08zm0 0v9.88q.02.08.09.03l4.87-4.87a.05.05 0 0 0 0-.08zm0 0L7 7m5 5-5 5\"></svg>", !1, !0, !1), yn = /*#__PURE__*/ m("<svg><path d=\"M21 9a5 5 0 0 1 0 6\"></svg>", !1, !0, !1), bn = /*#__PURE__*/ m("<svg><path d=\"M18 12.01V12\"></svg>", !1, !0, !1);
function xn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			vn(),
			yn(),
			bn()
		];
	} }));
}
xn.displayName = "BluetoothSearching";
//#endregion
//#region src/icons/bluetooth.tsx
var Sn = /*#__PURE__*/ m("<svg><path d=\"M12 12V2.12q.02-.08.09-.03l4.87 4.87q.03.04 0 .08zm0 0v9.88q.02.08.09.03l4.87-4.87a.05.05 0 0 0 0-.08zm0 0L7 7m5 5-5 5\"></svg>", !1, !0, !1);
function Cn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Sn();
	} }));
}
Cn.displayName = "Bluetooth";
//#endregion
//#region src/icons/bolt.tsx
var wn = /*#__PURE__*/ m("<svg><path d=\"M3 8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18v7.64a2 2 0 0 1-1.03 1.75l-7 3.89a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82z\"></svg>", !1, !0, !1), Tn = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=4></svg>", !1, !0, !1);
function En(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [wn(), Tn()];
	} }));
}
En.displayName = "Bolt";
//#endregion
//#region src/icons/bookmark-check.tsx
var Dn = /*#__PURE__*/ m("<svg><path d=\"m12.52 18.09 4.96 3a1 1 0 0 0 1.52-.86V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16.23a1 1 0 0 0 1.52.86l4.96-3a1 1 0 0 1 1.04 0Z\"></svg>", !1, !0, !1), On = /*#__PURE__*/ m("<svg><path d=\"m9 10 1.86 1.86c.08.08.2.08.28 0L15 8\"></svg>", !1, !0, !1);
function kn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Dn(), On()];
	} }));
}
kn.displayName = "BookmarkCheck";
//#endregion
//#region src/icons/bookmark-minus.tsx
var An = /*#__PURE__*/ m("<svg><path d=\"m12.52 18.09 4.96 3a1 1 0 0 0 1.52-.86V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16.23a1 1 0 0 0 1.52.86l4.96-3a1 1 0 0 1 1.04 0Z\"></svg>", !1, !0, !1), jn = /*#__PURE__*/ m("<svg><path d=\"M9 11h6\"></svg>", !1, !0, !1);
function Mn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [An(), jn()];
	} }));
}
Mn.displayName = "BookmarkMinus";
//#endregion
//#region src/icons/bookmark-plus.tsx
var Nn = /*#__PURE__*/ m("<svg><path d=\"m12.52 18.09 4.96 3a1 1 0 0 0 1.52-.86V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16.23a1 1 0 0 0 1.52.86l4.96-3a1 1 0 0 1 1.04 0Z\"></svg>", !1, !0, !1), Pn = /*#__PURE__*/ m("<svg><path d=\"M9 11h6\"></svg>", !1, !0, !1), Fn = /*#__PURE__*/ m("<svg><path d=\"M12 8v6\"></svg>", !1, !0, !1);
function In(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Nn(),
			Pn(),
			Fn()
		];
	} }));
}
In.displayName = "BookmarkPlus";
//#endregion
//#region src/icons/bookmark-x.tsx
var Ln = /*#__PURE__*/ m("<svg><path d=\"m12.52 18.09 4.96 3a1 1 0 0 0 1.52-.86V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16.23a1 1 0 0 0 1.52.86l4.96-3a1 1 0 0 1 1.04 0Z\"></svg>", !1, !0, !1), Rn = /*#__PURE__*/ m("<svg><path d=\"m15 7-6 6\"></svg>", !1, !0, !1), zn = /*#__PURE__*/ m("<svg><path d=\"m9 7 6 6\"></svg>", !1, !0, !1);
function Bn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ln(),
			Rn(),
			zn()
		];
	} }));
}
Bn.displayName = "BookmarkX";
//#endregion
//#region src/icons/bookmark.tsx
var Vn = /*#__PURE__*/ m("<svg><path d=\"M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.23a1 1 0 0 1-1.52.86l-4.96-3a1 1 0 0 0-1.04 0l-4.96 3A1 1 0 0 1 5 20.23z\"></svg>", !1, !0, !1);
function Hn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Vn();
	} }));
}
Hn.displayName = "Bookmark";
//#endregion
//#region src/icons/bot-smile.tsx
var Un = /*#__PURE__*/ m("<svg><path d=\"M5 9c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.04a2 2 0 0 0-1.56.75l-1.01 1.26a.5.5 0 0 1-.78 0l-1-1.26A2 2 0 0 0 9.03 19H7a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Wn = /*#__PURE__*/ m("<svg><path d=\"M5 16H4a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1\"></svg>", !1, !0, !1), Gn = /*#__PURE__*/ m("<svg><path d=\"M19 16h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1\"></svg>", !1, !0, !1), Kn = /*#__PURE__*/ m("<svg><path d=\"M12 3v4\"></svg>", !1, !0, !1), qn = /*#__PURE__*/ m("<svg><path d=\"M9 3h6\"></svg>", !1, !0, !1), Jn = /*#__PURE__*/ m("<svg><path d=\"M14.5 14.5c-.52.6-1.4 1-2.5 1q-1.79.01-2.5-1\"></svg>", !1, !0, !1), Yn = /*#__PURE__*/ m("<svg><circle cx=9 cy=11 r=0.5></svg>", !1, !0, !1), Xn = /*#__PURE__*/ m("<svg><circle cx=15 cy=11 r=0.5></svg>", !1, !0, !1);
function Zn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Un(),
			Wn(),
			Gn(),
			Kn(),
			qn(),
			Jn(),
			Yn(),
			Xn()
		];
	} }));
}
Zn.displayName = "BotSmile";
//#endregion
//#region src/icons/box.tsx
var Qn = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 8.1 4.32a1 1 0 0 0 .8 0l8.1-4.32\"></svg>", !1, !0, !1), $n = /*#__PURE__*/ m("<svg><path d=\"M12 12v9.5\"></svg>", !1, !0, !1), er = /*#__PURE__*/ m("<svg><path d=\"m12.49 2.27 8 4.44a1 1 0 0 1 .51.88v8.82a1 1 0 0 1-.51.88l-8 4.44a1 1 0 0 1-.98 0l-8-4.44A1 1 0 0 1 3 16.4V7.6c0-.36.2-.7.51-.88l8-4.44a1 1 0 0 1 .98 0Z\"></svg>", !1, !0, !1);
function tr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Qn(),
			$n(),
			er()
		];
	} }));
}
tr.displayName = "Box";
//#endregion
//#region src/icons/boxes.tsx
var nr = /*#__PURE__*/ m("<svg><path d=\"m7.5 5 4.26 1.96q.24.07.48 0L16.5 5\"></svg>", !1, !0, !1), rr = /*#__PURE__*/ m("<svg><path d=\"m12.5 14 4.26 1.96q.24.07.48 0L21.5 14\"></svg>", !1, !0, !1), ir = /*#__PURE__*/ m("<svg><path d=\"m2.5 14 4.26 1.96q.24.07.48 0L11.5 14\"></svg>", !1, !0, !1), ar = /*#__PURE__*/ m("<svg><path d=\"M12 7v11.5\"></svg>", !1, !0, !1), or = /*#__PURE__*/ m("<svg><path d=\"M7 16v5\"></svg>", !1, !0, !1), sr = /*#__PURE__*/ m("<svg><path d=\"M17 16v5\"></svg>", !1, !0, !1), cr = /*#__PURE__*/ m("<svg><path d=\"m12.48 2.27 4 2.2a1 1 0 0 1 .52.87v4.32a1 1 0 0 1-.52.87l-4 2.2a1 1 0 0 1-.96 0l-4-2.2A1 1 0 0 1 7 9.66V5.34c0-.36.2-.7.52-.87l4-2.2a1 1 0 0 1 .96 0Z\"></svg>", !1, !0, !1), lr = /*#__PURE__*/ m("<svg><path d=\"m7.48 11.27 4 2.2a1 1 0 0 1 .52.87v4.32a1 1 0 0 1-.52.87l-4 2.2a1 1 0 0 1-.96 0l-4-2.2a1 1 0 0 1-.52-.87v-4.32c0-.36.2-.7.52-.87l4-2.2a1 1 0 0 1 .96 0Z\"></svg>", !1, !0, !1), ur = /*#__PURE__*/ m("<svg><path d=\"m17.48 11.27 4 2.2a1 1 0 0 1 .52.87v4.32a1 1 0 0 1-.52.87l-4 2.2a1 1 0 0 1-.96 0l-4-2.2a1 1 0 0 1-.52-.87v-4.32c0-.36.2-.7.52-.87l4-2.2a1 1 0 0 1 .96 0Z\"></svg>", !1, !0, !1);
function dr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nr(),
			rr(),
			ir(),
			ar(),
			or(),
			sr(),
			cr(),
			lr(),
			ur()
		];
	} }));
}
dr.displayName = "Boxes";
//#endregion
//#region src/icons/braces.tsx
var fr = /*#__PURE__*/ m("<svg><path d=\"M16 3h1a2 2 0 0 1 2 2v4.76a2 2 0 0 0 1.1 1.8l.54.26a.2.2 0 0 1 0 .36l-.53.27A2 2 0 0 0 19 14.24V19a2 2 0 0 1-2 2h-1\"></svg>", !1, !0, !1), pr = /*#__PURE__*/ m("<svg><path d=\"M8 21H7a2 2 0 0 1-2-2v-4.76a2 2 0 0 0-1.1-1.8l-.54-.26a.2.2 0 0 1 0-.36l.53-.27A2 2 0 0 0 5 9.76V5c0-1.1.9-2 2-2h1\"></svg>", !1, !0, !1);
function mr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [fr(), pr()];
	} }));
}
mr.displayName = "Braces";
//#endregion
//#region src/icons/brain-circuit.tsx
var hr = /*#__PURE__*/ m("<svg><path d=\"M7 4c.27-1.17 1.3-2 2.5-2h1.59c.5 0 .91.4.91.91V21.1c0 .5-.4.91-.91.91H9.5c-1.2 0-2.24-.83-2.51-2\"></svg>", !1, !0, !1), gr = /*#__PURE__*/ m("<svg><path d=\"M17 4c-.27-1.17-1.3-2-2.5-2h-1.6a.9.9 0 0 0-.91.91V21.1c0 .5.4.91.91.91h1.58c1.2 0 2.24-.83 2.51-2\"></svg>", !1, !0, !1), _r = /*#__PURE__*/ m("<svg><path d=\"M5 15a3 3 0 1 1 0-6\"></svg>", !1, !0, !1), vr = /*#__PURE__*/ m("<svg><path d=\"M19 15a3 3 0 1 0 0-6\"></svg>", !1, !0, !1), yr = /*#__PURE__*/ m("<svg><path d=\"M12 12v5a4 4 0 0 0 4-4v-1\"></svg>", !1, !0, !1), br = /*#__PURE__*/ m("<svg><path d=\"M16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), xr = /*#__PURE__*/ m("<svg><path d=\"M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), Sr = /*#__PURE__*/ m("<svg><path d=\"M9 12h3\"></svg>", !1, !0, !1), Cr = /*#__PURE__*/ m("<svg><path d=\"M9 17c0 1.1.9 2 2 2h1v-2\"></svg>", !1, !0, !1), wr = /*#__PURE__*/ m("<svg><path d=\"M15 7a1 1 0 0 0-1-1h-2v1\"></svg>", !1, !0, !1), Tr = /*#__PURE__*/ m("<svg><path d=\"M19 15c.67 1.33 1.2 4.2-2 5\"></svg>", !1, !0, !1), Er = /*#__PURE__*/ m("<svg><path d=\"M17 4c1.33.33 3.6 1.8 2 5\"></svg>", !1, !0, !1), Dr = /*#__PURE__*/ m("<svg><path d=\"M7 4c-1.33.33-3.6 1.8-2 5\"></svg>", !1, !0, !1), Or = /*#__PURE__*/ m("<svg><path d=\"M5 15c-.67 1.33-1.2 4.2 2 5\"></svg>", !1, !0, !1);
function kr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hr(),
			gr(),
			_r(),
			vr(),
			yr(),
			br(),
			xr(),
			Sr(),
			Cr(),
			wr(),
			Tr(),
			Er(),
			Dr(),
			Or()
		];
	} }));
}
kr.displayName = "BrainCircuit";
//#endregion
//#region src/icons/briefcase-conveyor-belt.tsx
var Ar = /*#__PURE__*/ m("<svg><path d=\"M18.4 6H5.6C4.72 6 4 6.58 4 7.29v6.42c0 .71.72 1.29 1.6 1.29h12.8c.88 0 1.6-.58 1.6-1.29V7.3c0-.72-.72-1.3-1.6-1.3\"></svg>", !1, !0, !1), jr = /*#__PURE__*/ m("<svg><path d=\"M8 15V3.44C8 2.64 8.9 2 10 2h4c1.1 0 2 .65 2 1.44V15\"></svg>", !1, !0, !1), Mr = /*#__PURE__*/ m("<svg><path d=\"M4 19h16\"></svg>", !1, !0, !1), Nr = /*#__PURE__*/ m("<svg><path d=\"M6 19v2\"></svg>", !1, !0, !1), Pr = /*#__PURE__*/ m("<svg><path d=\"M10 19v2\"></svg>", !1, !0, !1), Fr = /*#__PURE__*/ m("<svg><path d=\"M14 19v2\"></svg>", !1, !0, !1), Ir = /*#__PURE__*/ m("<svg><path d=\"M18 19v2\"></svg>", !1, !0, !1);
function Lr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ar(),
			jr(),
			Mr(),
			Nr(),
			Pr(),
			Fr(),
			Ir()
		];
	} }));
}
Lr.displayName = "BriefcaseConveyorBelt";
//#endregion
//#region src/icons/briefcase-medical.tsx
var Rr = /*#__PURE__*/ m("<svg><rect width=20 height=14 x=2 y=6 rx=2></svg>", !1, !0, !1), zr = /*#__PURE__*/ m("<svg><path d=\"M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2\"></svg>", !1, !0, !1), Br = /*#__PURE__*/ m("<svg><path d=\"M6 6v14\"></svg>", !1, !0, !1), Vr = /*#__PURE__*/ m("<svg><path d=\"M18 6v14\"></svg>", !1, !0, !1), Hr = /*#__PURE__*/ m("<svg><path d=\"M12 11v4\"></svg>", !1, !0, !1), Ur = /*#__PURE__*/ m("<svg><path d=\"M10 13h4\"></svg>", !1, !0, !1);
function Wr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rr(),
			zr(),
			Br(),
			Vr(),
			Hr(),
			Ur()
		];
	} }));
}
Wr.displayName = "BriefcaseMedical";
//#endregion
//#region src/icons/briefcase.tsx
var Gr = /*#__PURE__*/ m("<svg><rect width=20 height=14 x=2 y=6 rx=2></svg>", !1, !0, !1), Kr = /*#__PURE__*/ m("<svg><path d=\"M8 20V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16\"></svg>", !1, !0, !1);
function qr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Gr(), Kr()];
	} }));
}
qr.displayName = "Briefcase";
//#endregion
//#region src/icons/brush.tsx
var Jr = /*#__PURE__*/ m("<svg><path d=\"m2.25 21.32 2.5-6.67A1 1 0 0 1 5.7 14h12.62a1 1 0 0 1 .93.65l2.5 6.67a.5.5 0 0 1-.46.68H2.72a.5.5 0 0 1-.47-.68\"></svg>", !1, !0, !1), Yr = /*#__PURE__*/ m("<svg><path d=\"M6 14a2 2 0 1 1 0-4h4\"></svg>", !1, !0, !1), Xr = /*#__PURE__*/ m("<svg><path d=\"M14 10h4a2 2 0 1 1 0 4\"></svg>", !1, !0, !1), Zr = /*#__PURE__*/ m("<svg><path d=\"M10 10V4a2 2 0 1 1 4 0v6\"></svg>", !1, !0, !1), Qr = /*#__PURE__*/ m("<svg><path d=\"m8 22 1-4\"></svg>", !1, !0, !1), $r = /*#__PURE__*/ m("<svg><path d=\"m16 22-1-4\"></svg>", !1, !0, !1);
function ei(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Jr(),
			Yr(),
			Xr(),
			Zr(),
			Qr(),
			$r()
		];
	} }));
}
ei.displayName = "Brush";
//#endregion
//#region src/icons/calendar-check.tsx
var ti = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), ni = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), ri = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), ii = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), ai = /*#__PURE__*/ m("<svg><path d=\"m9 16.4 1.93 1.54q.07.05.13 0L15 14\"></svg>", !1, !0, !1);
function oi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ti(),
			ni(),
			ri(),
			ii(),
			ai()
		];
	} }));
}
oi.displayName = "CalendarCheck";
//#endregion
//#region src/icons/calendar-clock.tsx
var si = /*#__PURE__*/ m("<svg><path d=\"M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4\"></svg>", !1, !0, !1), ci = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), li = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), ui = /*#__PURE__*/ m("<svg><path d=\"M3 10h8\"></svg>", !1, !0, !1), di = /*#__PURE__*/ m("<svg><circle cx=17 cy=17 r=5></svg>", !1, !0, !1), fi = /*#__PURE__*/ m("<svg><path d=\"M17 15v2.51l1.5.99\"></svg>", !1, !0, !1);
function pi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			si(),
			ci(),
			li(),
			ui(),
			di(),
			fi()
		];
	} }));
}
pi.displayName = "CalendarClock";
//#endregion
//#region src/icons/calendar-days.tsx
var mi = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), hi = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), gi = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), _i = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), vi = /*#__PURE__*/ m("<svg><circle cx=8 cy=14 r=0.5></svg>", !1, !0, !1), yi = /*#__PURE__*/ m("<svg><circle cx=8 cy=18 r=0.5></svg>", !1, !0, !1), bi = /*#__PURE__*/ m("<svg><circle cx=12 cy=18 r=0.5></svg>", !1, !0, !1), xi = /*#__PURE__*/ m("<svg><circle cx=16 cy=18 r=0.5></svg>", !1, !0, !1), Si = /*#__PURE__*/ m("<svg><circle cx=12 cy=14 r=0.5></svg>", !1, !0, !1), Ci = /*#__PURE__*/ m("<svg><circle cx=16 cy=14 r=0.5></svg>", !1, !0, !1);
function wi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mi(),
			hi(),
			gi(),
			_i(),
			vi(),
			yi(),
			bi(),
			xi(),
			Si(),
			Ci()
		];
	} }));
}
wi.displayName = "CalendarDays";
//#endregion
//#region src/icons/calendar-heart.tsx
var Ti = /*#__PURE__*/ m("<svg><path d=\"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h8\"></svg>", !1, !0, !1), Ei = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Di = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Oi = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), ki = /*#__PURE__*/ m("<svg><path d=\"m18.07 16.6.42.48h.02l.42-.48c1.1-1.25 3.07-.42 3.07 1.3 0 .53-.22 1.05-.6 1.4l-2.83 2.67a.1.1 0 0 1-.14 0l-2.83-2.66c-.38-.36-.6-.88-.6-1.42 0-1.71 1.97-2.54 3.07-1.29Z\"></svg>", !1, !0, !1);
function Ai(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ti(),
			Ei(),
			Di(),
			Oi(),
			ki()
		];
	} }));
}
Ai.displayName = "CalendarHeart";
//#endregion
//#region src/icons/calendar-minus-2.tsx
var ji = /*#__PURE__*/ m("<svg><path d=\"M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z\"></svg>", !1, !0, !1), Mi = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Ni = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Pi = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), Fi = /*#__PURE__*/ m("<svg><path d=\"M10 16h4\"></svg>", !1, !0, !1);
function Ii(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ji(),
			Mi(),
			Ni(),
			Pi(),
			Fi()
		];
	} }));
}
Ii.displayName = "CalendarMinus2";
//#endregion
//#region src/icons/calendar-minus.tsx
var Li = /*#__PURE__*/ m("<svg><path d=\"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h8\"></svg>", !1, !0, !1), Ri = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), zi = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Bi = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), Vi = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function Hi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Li(),
			Ri(),
			zi(),
			Bi(),
			Vi()
		];
	} }));
}
Hi.displayName = "CalendarMinus";
//#endregion
//#region src/icons/calendar-plus-2.tsx
var Ui = /*#__PURE__*/ m("<svg><path d=\"M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z\"></svg>", !1, !0, !1), Wi = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Gi = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Ki = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), qi = /*#__PURE__*/ m("<svg><path d=\"M10 16h4\"></svg>", !1, !0, !1), Ji = /*#__PURE__*/ m("<svg><path d=\"M12 14v4\"></svg>", !1, !0, !1);
function Yi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ui(),
			Wi(),
			Gi(),
			Ki(),
			qi(),
			Ji()
		];
	} }));
}
Yi.displayName = "CalendarPlus2";
//#endregion
//#region src/icons/calendar-plus.tsx
var Xi = /*#__PURE__*/ m("<svg><path d=\"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h8\"></svg>", !1, !0, !1), Zi = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Qi = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), $i = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), ea = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), ta = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1);
function na(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Xi(),
			Zi(),
			Qi(),
			$i(),
			ea(),
			ta()
		];
	} }));
}
na.displayName = "CalendarPlus";
//#endregion
//#region src/icons/calendar-x.tsx
var ra = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), ia = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), aa = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), oa = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), sa = /*#__PURE__*/ m("<svg><path d=\"m10 14 4 4\"></svg>", !1, !0, !1), ca = /*#__PURE__*/ m("<svg><path d=\"m10 18 4-4\"></svg>", !1, !0, !1);
function la(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ra(),
			ia(),
			aa(),
			oa(),
			sa(),
			ca()
		];
	} }));
}
la.displayName = "CalendarX";
//#endregion
//#region src/icons/calendar.tsx
var ua = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=4 rx=2></svg>", !1, !0, !1), da = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), fa = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), pa = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1);
function ma(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ua(),
			da(),
			fa(),
			pa()
		];
	} }));
}
ma.displayName = "Calendar";
//#endregion
//#region src/icons/chart-line.tsx
var ha = /*#__PURE__*/ m("<svg><path d=\"M3 3v16c0 1.1.9 2 2 2h16\"></svg>", !1, !0, !1), ga = /*#__PURE__*/ m("<svg><path d=\"m7 13 2.86-2.86a.2.2 0 0 1 .28 0l3.72 3.72c.08.08.2.08.28 0L19 9\"></svg>", !1, !0, !1);
function _a(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ha(), ga()];
	} }));
}
_a.displayName = "ChartLine";
//#endregion
//#region src/icons/chat-bubble-left-right.tsx
var va = /*#__PURE__*/ m("<svg><path d=\"M18 7.9V5.57C18 4.71 17.28 4 16.4 4H3.6C2.72 4 2 4.7 2 5.57v11.04c0 .32.37.5.64.31l2.94-2.14q.42-.3.95-.3H8\"></svg>", !1, !0, !1), ya = /*#__PURE__*/ m("<svg><path d=\"M15 17.67H9.4c-.77 0-1.4-.65-1.4-1.45V9.45C8 8.65 8.63 8 9.4 8h11.2c.77 0 1.4.65 1.4 1.45v10.19c0 .3-.33.47-.56.29l-2.57-1.98a1.4 1.4 0 0 0-.83-.28z\"></svg>", !1, !0, !1), ba = /*#__PURE__*/ m("<svg><path d=\"M12 11h6\"></svg>", !1, !0, !1), xa = /*#__PURE__*/ m("<svg><path d=\"M12 14h4\"></svg>", !1, !0, !1);
function Sa(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			va(),
			ya(),
			ba(),
			xa()
		];
	} }));
}
Sa.displayName = "ChatBubbleLeftRight";
//#endregion
//#region src/icons/chat.tsx
var Ca = /*#__PURE__*/ m("<svg><path d=\"M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v9.3a2 2 0 0 1-2 2H7.66a2 2 0 0 0-1.19.4L2.8 20.4A.5.5 0 0 1 2 20z\"></svg>", !1, !0, !1), wa = /*#__PURE__*/ m("<svg><path d=\"M6 8h11\"></svg>", !1, !0, !1), Ta = /*#__PURE__*/ m("<svg><path d=\"M6 13h9\"></svg>", !1, !0, !1);
function Ea(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ca(),
			wa(),
			Ta()
		];
	} }));
}
Ea.displayName = "Chat";
//#endregion
//#region src/icons/check-check.tsx
var Da = /*#__PURE__*/ m("<svg><path d=\"m2 11.61 5.28 5.24c.2.2.55.2.75 0L19 5.5\"></svg>", !1, !0, !1), Oa = /*#__PURE__*/ m("<svg><path d=\"m22 9-7.65 8.12a.5.5 0 0 1-.71.02L13 16.5\"></svg>", !1, !0, !1);
function ka(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Da(), Oa()];
	} }));
}
ka.displayName = "CheckCheck";
//#endregion
//#region src/icons/check.tsx
var Aa = /*#__PURE__*/ m("<svg><path d=\"m4 11.61 5.28 5.24c.2.2.55.2.75 0L20 6\"></svg>", !1, !0, !1);
function ja(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Aa();
	} }));
}
ja.displayName = "Check";
//#endregion
//#region src/icons/chevron-down.tsx
var Ma = /*#__PURE__*/ m("<svg><path d=\"m6 9 5.65 5.65c.2.2.5.2.7 0L18 9\"></svg>", !1, !0, !1);
function Na(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Ma();
	} }));
}
Na.displayName = "ChevronDown";
//#endregion
//#region src/icons/chevron-left.tsx
var Pa = /*#__PURE__*/ m("<svg><path d=\"m15 6-5.85 5.65c-.2.2-.2.5 0 .7L15 18\"></svg>", !1, !0, !1);
function Fa(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Pa();
	} }));
}
Fa.displayName = "ChevronLeft";
//#endregion
//#region src/icons/chevron-right.tsx
var Ia = /*#__PURE__*/ m("<svg><path d=\"m9 6 5.85 5.65c.2.2.2.5 0 .7L9 18\"></svg>", !1, !0, !1);
function La(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Ia();
	} }));
}
La.displayName = "ChevronRight";
//#endregion
//#region src/icons/chevron-up.tsx
var Ra = /*#__PURE__*/ m("<svg><path d=\"m6 15 5.65-5.65c.2-.2.5-.2.7 0L18 15\"></svg>", !1, !0, !1);
function za(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Ra();
	} }));
}
za.displayName = "ChevronUp";
//#endregion
//#region src/icons/chevrons-down-up.tsx
var Ba = /*#__PURE__*/ m("<svg><path d=\"m7 4 4.7 4.87a.4.4 0 0 0 .6 0L17 4\"></svg>", !1, !0, !1), Va = /*#__PURE__*/ m("<svg><path d=\"m7 20 4.65-4.65c.2-.2.5-.2.7 0L17 20\"></svg>", !1, !0, !1);
function Ha(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ba(), Va()];
	} }));
}
Ha.displayName = "ChevronsDownUp";
//#endregion
//#region src/icons/chevrons-down.tsx
var Ua = /*#__PURE__*/ m("<svg><path d=\"m7 6 4.7 4.87a.4.4 0 0 0 .6 0L17 6\"></svg>", !1, !0, !1), Wa = /*#__PURE__*/ m("<svg><path d=\"m7 13 4.7 4.87a.4.4 0 0 0 .6 0L17 13\"></svg>", !1, !0, !1);
function Ga(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ua(), Wa()];
	} }));
}
Ga.displayName = "ChevronsDown";
//#endregion
//#region src/icons/chevrons-left-right.tsx
var Ka = /*#__PURE__*/ m("<svg><path d=\"m15 7 4.87 4.7a.4.4 0 0 1 0 .6L15 17\"></svg>", !1, !0, !1), qa = /*#__PURE__*/ m("<svg><path d=\"m9 7-4.87 4.7a.4.4 0 0 0 0 .6L9 17\"></svg>", !1, !0, !1);
function Ja(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ka(), qa()];
	} }));
}
Ja.displayName = "ChevronsLeftRight";
//#endregion
//#region src/icons/chevrons-left.tsx
var Ya = /*#__PURE__*/ m("<svg><path d=\"m18 7-4.87 4.7a.4.4 0 0 0 0 .6L18 17\"></svg>", !1, !0, !1), Xa = /*#__PURE__*/ m("<svg><path d=\"m11 7-4.87 4.7a.4.4 0 0 0 0 .6L11 17\"></svg>", !1, !0, !1);
function Za(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ya(), Xa()];
	} }));
}
Za.displayName = "ChevronsLeft";
//#endregion
//#region src/icons/chevrons-right.tsx
var Qa = /*#__PURE__*/ m("<svg><path d=\"m6 7 4.87 4.7a.4.4 0 0 1 0 .6L6 17\"></svg>", !1, !0, !1), $a = /*#__PURE__*/ m("<svg><path d=\"m13 7 4.87 4.7a.4.4 0 0 1 0 .6L13 17\"></svg>", !1, !0, !1);
function eo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Qa(), $a()];
	} }));
}
eo.displayName = "ChevronsRight";
//#endregion
//#region src/icons/chevrons-up-down.tsx
var to = /*#__PURE__*/ m("<svg><path d=\"m7 9 4.65-4.65c.2-.2.5-.2.7 0L17 9\"></svg>", !1, !0, !1), no = /*#__PURE__*/ m("<svg><path d=\"m7 15 4.65 4.65c.2.2.5.2.7 0L17 15\"></svg>", !1, !0, !1);
function ro(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [to(), no()];
	} }));
}
ro.displayName = "ChevronsUpDown";
//#endregion
//#region src/icons/chevrons-up.tsx
var io = /*#__PURE__*/ m("<svg><path d=\"m7 11 4.65-4.65c.2-.2.5-.2.7 0L17 11\"></svg>", !1, !0, !1), ao = /*#__PURE__*/ m("<svg><path d=\"m7 18 4.65-4.65c.2-.2.5-.2.7 0L17 18\"></svg>", !1, !0, !1);
function oo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [io(), ao()];
	} }));
}
oo.displayName = "ChevronsUp";
//#endregion
//#region src/icons/circle-arrow-down.tsx
var so = /*#__PURE__*/ m("<svg><path d=\"m8 12 3.87 3.91c.07.12.19.12.26 0L16 12\"></svg>", !1, !0, !1), co = /*#__PURE__*/ m("<svg><path d=\"M12 15V8\"></svg>", !1, !0, !1), lo = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function uo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			so(),
			co(),
			lo()
		];
	} }));
}
uo.displayName = "CircleArrowDown";
//#endregion
//#region src/icons/circle-arrow-left.tsx
var fo = /*#__PURE__*/ m("<svg><path d=\"m12 8-3.91 3.87c-.12.07-.12.19 0 .26L12 16\"></svg>", !1, !0, !1), po = /*#__PURE__*/ m("<svg><path d=\"M9 12h7\"></svg>", !1, !0, !1), mo = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z\"></svg>", !1, !0, !1);
function ho(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			fo(),
			po(),
			mo()
		];
	} }));
}
ho.displayName = "CircleArrowLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-left.tsx
var go = /*#__PURE__*/ m("<svg><path d=\"m3 3 8 8\"></svg>", !1, !0, !1), _o = /*#__PURE__*/ m("<svg><path d=\"M2 8V2.5c0-.28.22-.5.5-.5H8\"></svg>", !1, !0, !1), vo = /*#__PURE__*/ m("<svg><path d=\"M2 12A10 10 0 1 0 12 2\"></svg>", !1, !0, !1);
function yo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			go(),
			_o(),
			vo()
		];
	} }));
}
yo.displayName = "CircleArrowOutUpLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-right.tsx
var bo = /*#__PURE__*/ m("<svg><path d=\"M16 2h5.5c.28 0 .5.22.5.5V8\"></svg>", !1, !0, !1), xo = /*#__PURE__*/ m("<svg><path d=\"m13 11 8-8\"></svg>", !1, !0, !1), So = /*#__PURE__*/ m("<svg><path d=\"M22 12A10 10 0 1 1 12 2\"></svg>", !1, !0, !1);
function Co(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			bo(),
			xo(),
			So()
		];
	} }));
}
Co.displayName = "CircleArrowOutUpRight";
//#endregion
//#region src/icons/circle-arrow-right.tsx
var wo = /*#__PURE__*/ m("<svg><path d=\"m12 8 3.91 3.87c.12.07.12.19 0 .26L12 16\"></svg>", !1, !0, !1), To = /*#__PURE__*/ m("<svg><path d=\"M15 12H8\"></svg>", !1, !0, !1), Eo = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z\"></svg>", !1, !0, !1);
function Do(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			wo(),
			To(),
			Eo()
		];
	} }));
}
Do.displayName = "CircleArrowRight";
//#endregion
//#region src/icons/circle-arrow-up.tsx
var Oo = /*#__PURE__*/ m("<svg><path d=\"m8 12 3.87-3.91c.07-.12.19-.12.26 0L16 12\"></svg>", !1, !0, !1), ko = /*#__PURE__*/ m("<svg><path d=\"M12 9v7\"></svg>", !1, !0, !1), Ao = /*#__PURE__*/ m("<svg><path d=\"M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0Z\"></svg>", !1, !0, !1);
function jo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Oo(),
			ko(),
			Ao()
		];
	} }));
}
jo.displayName = "CircleArrowUp";
//#endregion
//#region src/icons/circle-check-big.tsx
var Mo = /*#__PURE__*/ m("<svg><path d=\"M21.54 9A10 10 0 1 1 15 2.46\"></svg>", !1, !0, !1), No = /*#__PURE__*/ m("<svg><path d=\"m9.5 10.5 2.23 1.85a1 1 0 0 0 1.44-.23L21 3\"></svg>", !1, !0, !1);
function Po(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Mo(), No()];
	} }));
}
Po.displayName = "CircleCheckBig";
//#endregion
//#region src/icons/circle-check.tsx
var Fo = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Io = /*#__PURE__*/ m("<svg><path d=\"m9 13 1.73 1.35a1 1 0 0 0 1.44-.23L15 10\"></svg>", !1, !0, !1);
function Lo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Fo(), Io()];
	} }));
}
Lo.displayName = "CircleCheck";
//#endregion
//#region src/icons/circle-chevron-down.tsx
var Ro = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.76 3.9c.13.13.35.13.48 0L16 10\"></svg>", !1, !0, !1), zo = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function Bo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ro(), zo()];
	} }));
}
Bo.displayName = "CircleChevronDown";
//#endregion
//#region src/icons/circle-chevron-left.tsx
var Vo = /*#__PURE__*/ m("<svg><path d=\"m14 16-3.65-3.65a.5.5 0 0 1 0-.7L14 8\"></svg>", !1, !0, !1), Ho = /*#__PURE__*/ m("<svg><path d=\"M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z\"></svg>", !1, !0, !1);
function Uo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Vo(), Ho()];
	} }));
}
Uo.displayName = "CircleChevronLeft";
//#endregion
//#region src/icons/circle-chevron-right.tsx
var Wo = /*#__PURE__*/ m("<svg><path d=\"m10 16 3.65-3.65a.5.5 0 0 0 0-.7L10 8\"></svg>", !1, !0, !1), Go = /*#__PURE__*/ m("<svg><path d=\"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z\"></svg>", !1, !0, !1);
function Ko(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Wo(), Go()];
	} }));
}
Ko.displayName = "CircleChevronRight";
//#endregion
//#region src/icons/circle-chevron-up.tsx
var qo = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14\"></svg>", !1, !0, !1), Jo = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1);
function Yo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [qo(), Jo()];
	} }));
}
Yo.displayName = "CircleChevronUp";
//#endregion
//#region src/icons/circle-user.tsx
var Xo = /*#__PURE__*/ m("<svg><path d=\"M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"></svg>", !1, !0, !1), Zo = /*#__PURE__*/ m("<svg><path d=\"M18 20c0-2.76-2.69-5-6-5s-6 2.24-6 5\"></svg>", !1, !0, !1), Qo = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function $o(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Xo(),
			Zo(),
			Qo()
		];
	} }));
}
$o.displayName = "CircleUser";
//#endregion
//#region src/icons/circle-x.tsx
var es = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), ts = /*#__PURE__*/ m("<svg><path d=\"m9 9 6 6\"></svg>", !1, !0, !1), ns = /*#__PURE__*/ m("<svg><path d=\"m15 9-6 6\"></svg>", !1, !0, !1);
function rs(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			es(),
			ts(),
			ns()
		];
	} }));
}
rs.displayName = "CircleX";
//#endregion
//#region src/icons/clapperboard.tsx
var is = /*#__PURE__*/ m("<svg><path d=\"M3 11v8c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-8\"></svg>", !1, !0, !1), as = /*#__PURE__*/ m("<svg><path d=\"M3 11h18\"></svg>", !1, !0, !1), os = /*#__PURE__*/ m("<svg><path d=\"m3 11 17-5\"></svg>", !1, !0, !1), ss = /*#__PURE__*/ m("<svg><path d=\"m7 6 3 3\"></svg>", !1, !0, !1), cs = /*#__PURE__*/ m("<svg><path d=\"M12.5 4.5 15 7\"></svg>", !1, !0, !1), ls = /*#__PURE__*/ m("<svg><path d=\"m3 11-.53-2.14a2 2 0 0 1 1.37-2.4L17 2.59a2 2 0 0 1 2.5 1.43L20 6\"></svg>", !1, !0, !1);
function us(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			is(),
			as(),
			os(),
			ss(),
			cs(),
			ls()
		];
	} }));
}
us.displayName = "Clapperboard";
//#endregion
//#region src/icons/clipboard-check.tsx
var ds = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), fs = /*#__PURE__*/ m("<svg><rect width=8 height=4 x=8 y=2 rx=2></svg>", !1, !0, !1), ps = /*#__PURE__*/ m("<svg><path d=\"m9 14.12 1.98 1.98q.14.12.28 0L15 12\"></svg>", !1, !0, !1);
function ms(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ds(),
			fs(),
			ps()
		];
	} }));
}
ms.displayName = "ClipboardCheck";
//#endregion
//#region src/icons/clipboard-list.tsx
var hs = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), gs = /*#__PURE__*/ m("<svg><rect width=8 height=4 x=8 y=2 rx=2></svg>", !1, !0, !1), _s = /*#__PURE__*/ m("<svg><path d=\"M12 18h4\"></svg>", !1, !0, !1), vs = /*#__PURE__*/ m("<svg><path d=\"M12 14h4\"></svg>", !1, !0, !1), ys = /*#__PURE__*/ m("<svg><path d=\"M12 10h4\"></svg>", !1, !0, !1), bs = /*#__PURE__*/ m("<svg><circle cx=8 cy=18 r=0.5></svg>", !1, !0, !1), xs = /*#__PURE__*/ m("<svg><circle cx=8 cy=14 r=0.5></svg>", !1, !0, !1), Ss = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1);
function Cs(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hs(),
			gs(),
			_s(),
			vs(),
			ys(),
			bs(),
			xs(),
			Ss()
		];
	} }));
}
Cs.displayName = "ClipboardList";
//#endregion
//#region src/icons/clipboard-plus.tsx
var ws = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), Ts = /*#__PURE__*/ m("<svg><path d=\"M14 2h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4\"></svg>", !1, !0, !1), Es = /*#__PURE__*/ m("<svg><path d=\"M12 11v6\"></svg>", !1, !0, !1), Ds = /*#__PURE__*/ m("<svg><path d=\"M9 14h6\"></svg>", !1, !0, !1);
function Os(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ws(),
			Ts(),
			Es(),
			Ds()
		];
	} }));
}
Os.displayName = "ClipboardPlus";
//#endregion
//#region src/icons/clipboard-x.tsx
var ks = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), As = /*#__PURE__*/ m("<svg><path d=\"M14 2h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4\"></svg>", !1, !0, !1), js = /*#__PURE__*/ m("<svg><path d=\"m9 11 6 6\"></svg>", !1, !0, !1), Ms = /*#__PURE__*/ m("<svg><path d=\"m9 17 6-6\"></svg>", !1, !0, !1);
function Ns(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ks(),
			As(),
			js(),
			Ms()
		];
	} }));
}
Ns.displayName = "ClipboardX";
//#endregion
//#region src/icons/clipboard.tsx
var Ps = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), Fs = /*#__PURE__*/ m("<svg><rect width=8 height=4 x=8 y=2 rx=2></svg>", !1, !0, !1), Is = /*#__PURE__*/ m("<svg><path d=\"M8 10h4\"></svg>", !1, !0, !1), Ls = /*#__PURE__*/ m("<svg><path d=\"M8 14h8\"></svg>", !1, !0, !1), Rs = /*#__PURE__*/ m("<svg><path d=\"M8 18h5\"></svg>", !1, !0, !1);
function zs(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ps(),
			Fs(),
			Is(),
			Ls(),
			Rs()
		];
	} }));
}
zs.displayName = "Clipboard";
//#endregion
//#region src/icons/clock-arrow-left.tsx
var Bs = /*#__PURE__*/ m("<svg><path d=\"M22 12a10 10 0 1 0-10 10\"></svg>", !1, !0, !1), Vs = /*#__PURE__*/ m("<svg><path d=\"m18 13-3.91 3.9c-.12.05-.12.15 0 .2L18 21\"></svg>", !1, !0, !1), Hs = /*#__PURE__*/ m("<svg><path d=\"M15 17h7\"></svg>", !1, !0, !1), Us = /*#__PURE__*/ m("<svg><path d=\"M12 6v5l1 1\"></svg>", !1, !0, !1);
function Ws(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Bs(),
			Vs(),
			Hs(),
			Us()
		];
	} }));
}
Ws.displayName = "ClockArrowLeft";
//#endregion
//#region src/icons/cloud-hail.tsx
var Gs = /*#__PURE__*/ m("<svg><path d=\"M20.79 14q.21-.65.21-1.36a4.3 4.3 0 0 0-4.67-4.35A5.3 5.3 0 0 0 11.47 5a5.4 5.4 0 0 0-5.3 5.45A3.23 3.23 0 0 0 3 13.73c0 1.38.83 2.56 2 3.04\"></svg>", !1, !0, !1), Ks = /*#__PURE__*/ m("<svg><path d=\"M9 15v2\"></svg>", !1, !0, !1), qs = /*#__PURE__*/ m("<svg><path d=\"M13 16v2\"></svg>", !1, !0, !1), Js = /*#__PURE__*/ m("<svg><path d=\"M17 15v2\"></svg>", !1, !0, !1), Ys = /*#__PURE__*/ m("<svg><path d=\"M9.01 21H9\"></svg>", !1, !0, !1), Xs = /*#__PURE__*/ m("<svg><path d=\"M13.01 22H13\"></svg>", !1, !0, !1), Zs = /*#__PURE__*/ m("<svg><path d=\"M17.01 21H17\"></svg>", !1, !0, !1);
function Qs(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gs(),
			Ks(),
			qs(),
			Js(),
			Ys(),
			Xs(),
			Zs()
		];
	} }));
}
Qs.displayName = "CloudHail";
//#endregion
//#region src/icons/cloud-lightning.tsx
var $s = /*#__PURE__*/ m("<svg><path d=\"m12.5 13-2.45 3.71q-.03.07.04.08h3.81q.07.02.04.08L11 21\"></svg>", !1, !0, !1), ec = /*#__PURE__*/ m("<svg><path d=\"M18 16.81c1.74-.54 3-2.2 3-4.17a4.3 4.3 0 0 0-4.67-4.35A5.3 5.3 0 0 0 11.47 5a5.4 5.4 0 0 0-5.3 5.45A3.23 3.23 0 0 0 3 13.73C3 15.53 4.42 17 6.18 17\"></svg>", !1, !0, !1);
function tc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [$s(), ec()];
	} }));
}
tc.displayName = "CloudLightning";
//#endregion
//#region src/icons/cloud-moon.tsx
var nc = /*#__PURE__*/ m("<svg><path d=\"M9.59 12a4.1 4.1 0 0 1 3.79 2.47l.33-.02a3.28 3.28 0 1 1 0 6.55H5.47A2.46 2.46 0 0 1 3 18.55a2.46 2.46 0 0 1 2.47-2.47A4.1 4.1 0 0 1 9.6 12Z\"></svg>", !1, !0, !1), rc = /*#__PURE__*/ m("<svg><path d=\"M18.5 12.3a5.5 5.5 0 0 0 1.77-3.12c.13-.61-.45-1.09-1.08-1.04-3.77.3-4.29-1.85-4.28-3.53 0-.61-.5-1.13-1.08-.94a5 5 0 0 0-3.4 4.31\"></svg>", !1, !0, !1);
function ic(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [nc(), rc()];
	} }));
}
ic.displayName = "CloudMoon";
//#endregion
//#region src/icons/cloud-off.tsx
var ac = /*#__PURE__*/ m("<svg><path d=\"M20.79 15q.21-.65.21-1.36a4.3 4.3 0 0 0-4.67-4.35A5.3 5.3 0 0 0 11.47 6\"></svg>", !1, !0, !1), oc = /*#__PURE__*/ m("<svg><path d=\"M7.37 8a5.5 5.5 0 0 0-1.2 3.45A3.23 3.23 0 0 0 3 14.73C3 16.53 4.42 18 6.18 18H18\"></svg>", !1, !0, !1), sc = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function cc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ac(),
			oc(),
			sc()
		];
	} }));
}
cc.displayName = "CloudOff";
//#endregion
//#region src/icons/cloud-rain-wind.tsx
var lc = /*#__PURE__*/ m("<svg><path d=\"M20.79 14q.21-.65.21-1.36a4.3 4.3 0 0 0-4.67-4.35A5.3 5.3 0 0 0 11.47 5a5.4 5.4 0 0 0-5.3 5.45A3.23 3.23 0 0 0 3 13.73c0 1.38.83 2.56 2 3.04\"></svg>", !1, !0, !1), uc = /*#__PURE__*/ m("<svg><path d=\"M9.76 15 8 19.68\"></svg>", !1, !0, !1), dc = /*#__PURE__*/ m("<svg><path d=\"m13.53 16.24-1.76 4.68\"></svg>", !1, !0, !1), fc = /*#__PURE__*/ m("<svg><path d=\"M17.76 15 16 19.68\"></svg>", !1, !0, !1);
function pc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			lc(),
			uc(),
			dc(),
			fc()
		];
	} }));
}
pc.displayName = "CloudRainWind";
//#endregion
//#region src/icons/cloud-rain.tsx
var mc = /*#__PURE__*/ m("<svg><path d=\"M20.79 14q.21-.65.21-1.36a4.3 4.3 0 0 0-4.67-4.35A5.3 5.3 0 0 0 11.47 5a5.4 5.4 0 0 0-5.3 5.45A3.23 3.23 0 0 0 3 13.73c0 1.38.83 2.56 2 3.04\"></svg>", !1, !0, !1), hc = /*#__PURE__*/ m("<svg><path d=\"M9 15v5\"></svg>", !1, !0, !1), gc = /*#__PURE__*/ m("<svg><path d=\"M13 17v5\"></svg>", !1, !0, !1), _c = /*#__PURE__*/ m("<svg><path d=\"M17 15v5\"></svg>", !1, !0, !1);
function vc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mc(),
			hc(),
			gc(),
			_c()
		];
	} }));
}
vc.displayName = "CloudRain";
//#endregion
//#region src/icons/cloud-snow.tsx
var yc = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"M20.79 14q.21-.65.21-1.36a4.3 4.3 0 0 0-4.67-4.35A5.3 5.3 0 0 0 11.47 5a5.4 5.4 0 0 0-5.3 5.45A3.23 3.23 0 0 0 3 13.73c0 1.38.83 2.56 2 3.04\"></path><path d=\"M9.01 16H9\"></path><path d=\"M9.01 20H9\"></path><path d=\"M13.01 21H13\"></path><path d=\"M17.01 20H17\"></path><path d=\"M13.01 17H13\"></path><path d=\"M17.01 16H17\"></svg>", !1, !0, !1), bc = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function xc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [yc(), bc()];
	} }));
}
xc.displayName = "CloudSnow";
//#endregion
//#region src/icons/cloud-sun.tsx
var Sc = /*#__PURE__*/ m("<svg><path d=\"M9.59 12a4.1 4.1 0 0 1 3.79 2.47l.33-.02a3.28 3.28 0 1 1 0 6.55H5.47A2.46 2.46 0 0 1 3 18.55a2.46 2.46 0 0 1 2.47-2.47A4.1 4.1 0 0 1 9.6 12Z\"></svg>", !1, !0, !1), Cc = /*#__PURE__*/ m("<svg><path d=\"M11 8.11A4 4 0 0 1 15.81 11\"></svg>", !1, !0, !1), wc = /*#__PURE__*/ m("<svg><path d=\"M13 2v2.5\"></svg>", !1, !0, !1), Tc = /*#__PURE__*/ m("<svg><path d=\"M17.5 5.5 19 4\"></svg>", !1, !0, !1), Ec = /*#__PURE__*/ m("<svg><path d=\"M19 9.5h2.5\"></svg>", !1, !0, !1), Dc = /*#__PURE__*/ m("<svg><path d=\"M8.5 5.5 6.5 4\"></svg>", !1, !0, !1);
function Oc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Sc(),
			Cc(),
			wc(),
			Tc(),
			Ec(),
			Dc()
		];
	} }));
}
Oc.displayName = "CloudSun";
//#endregion
//#region src/icons/cloud-upload.tsx
var kc = /*#__PURE__*/ m("<svg><path d=\"M20 14.45c.62-.76 1-1.74 1-2.81a4.3 4.3 0 0 0-4.67-4.35A5.3 5.3 0 0 0 11.47 4a5.4 5.4 0 0 0-5.3 5.45A3.23 3.23 0 0 0 3 12.73c0 .94.38 1.78 1 2.38\"></svg>", !1, !0, !1), Ac = /*#__PURE__*/ m("<svg><path d=\"M12 14v7\"></svg>", !1, !0, !1), jc = /*#__PURE__*/ m("<svg><path d=\"m9 17 2.96-2.96a.05.05 0 0 1 .08 0L15 17\"></svg>", !1, !0, !1);
function Mc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kc(),
			Ac(),
			jc()
		];
	} }));
}
Mc.displayName = "CloudUpload";
//#endregion
//#region src/icons/cloud.tsx
var Nc = /*#__PURE__*/ m("<svg><path d=\"M11.47 6a5.3 5.3 0 0 1 4.87 3.3l.42-.03A4.3 4.3 0 0 1 21 13.64 4.3 4.3 0 0 1 16.76 18H6.18A3.23 3.23 0 0 1 3 14.73a3.23 3.23 0 0 1 3.18-3.29c0-3 2.37-5.44 5.3-5.44Z\"></svg>", !1, !0, !1);
function Pc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Nc();
	} }));
}
Pc.displayName = "Cloud";
//#endregion
//#region src/icons/code-xml.tsx
var Fc = /*#__PURE__*/ m("<svg><path d=\"m18 8 3.86 3.86a.2.2 0 0 1 0 .28L18 16\"></svg>", !1, !0, !1), Ic = /*#__PURE__*/ m("<svg><path d=\"m6 8-3.86 3.86a.2.2 0 0 0 0 .28L6 16\"></svg>", !1, !0, !1), Lc = /*#__PURE__*/ m("<svg><path d=\"m14 4-4 16\"></svg>", !1, !0, !1);
function Rc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Fc(),
			Ic(),
			Lc()
		];
	} }));
}
Rc.displayName = "CodeXml";
//#endregion
//#region src/icons/code.tsx
var zc = /*#__PURE__*/ m("<svg><path d=\"m16 6 5.86 5.86a.2.2 0 0 1 0 .28L16 18\"></svg>", !1, !0, !1), Bc = /*#__PURE__*/ m("<svg><path d=\"m8 6-5.86 5.86a.2.2 0 0 0 0 .28L8 18\"></svg>", !1, !0, !1);
function Vc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [zc(), Bc()];
	} }));
}
Vc.displayName = "Code";
//#endregion
//#region src/icons/cog.tsx
var Hc = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=8></svg>", !1, !0, !1), Uc = /*#__PURE__*/ m("<svg><path d=\"M12 2v2\"></svg>", !1, !0, !1), Wc = /*#__PURE__*/ m("<svg><path d=\"M12 20v2\"></svg>", !1, !0, !1), Gc = /*#__PURE__*/ m("<svg><path d=\"M2 12h2\"></svg>", !1, !0, !1), Kc = /*#__PURE__*/ m("<svg><path d=\"M16 12h6\"></svg>", !1, !0, !1), qc = /*#__PURE__*/ m("<svg><path d=\"M19.07 4.93 18 6\"></svg>", !1, !0, !1), Jc = /*#__PURE__*/ m("<svg><path d=\"m9 15-4.07 4.07\"></svg>", !1, !0, !1), Yc = /*#__PURE__*/ m("<svg><path d=\"M4.93 4.93 9 9\"></svg>", !1, !0, !1), Xc = /*#__PURE__*/ m("<svg><path d=\"m18 18 1.07 1.07\"></svg>", !1, !0, !1), Zc = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=4></svg>", !1, !0, !1), Qc = /*#__PURE__*/ m("<svg><path d=\"m15.83 2.76-.39.93M8.17 21.24l.39-.93\"></svg>", !1, !0, !1), $c = /*#__PURE__*/ m("<svg><path d=\"m21.24 8.17-.92.39\"></svg>", !1, !0, !1), el = /*#__PURE__*/ m("<svg><path d=\"m3.69 15.44-.93.39\"></svg>", !1, !0, !1), tl = /*#__PURE__*/ m("<svg><path d=\"m21.24 15.83-.93-.39\"></svg>", !1, !0, !1), nl = /*#__PURE__*/ m("<svg><path d=\"m3.69 8.56-.93-.39\"></svg>", !1, !0, !1), rl = /*#__PURE__*/ m("<svg><path d=\"m15.83 21.24-.39-.93\"></svg>", !1, !0, !1), il = /*#__PURE__*/ m("<svg><path d=\"m8.56 3.69-.39-.93\"></svg>", !1, !0, !1);
function al(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Hc(),
			Uc(),
			Wc(),
			Gc(),
			Kc(),
			qc(),
			Jc(),
			Yc(),
			Xc(),
			Zc(),
			Qc(),
			$c(),
			el(),
			tl(),
			nl(),
			rl(),
			il()
		];
	} }));
}
al.displayName = "Cog";
//#endregion
//#region src/icons/coin.tsx
var ol = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=8></svg>", !1, !0, !1), sl = /*#__PURE__*/ m("<svg><path d=\"M11 9h.8q.18.02.2.2V15\"></svg>", !1, !0, !1);
function cl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ol(), sl()];
	} }));
}
cl.displayName = "Coin";
//#endregion
//#region src/icons/column-chart-plain-increasing.tsx
var ll = /*#__PURE__*/ m("<svg><path d=\"M5 21v-6\"></svg>", !1, !0, !1), ul = /*#__PURE__*/ m("<svg><path d=\"M19 3v18\"></svg>", !1, !0, !1), dl = /*#__PURE__*/ m("<svg><path d=\"M12 21V9\"></svg>", !1, !0, !1);
function fl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ll(),
			ul(),
			dl()
		];
	} }));
}
fl.displayName = "ColumnChartPlainIncreasing";
//#endregion
//#region src/icons/column-chart.tsx
var pl = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), ml = /*#__PURE__*/ m("<svg><path d=\"M8 17v-4\"></svg>", !1, !0, !1), hl = /*#__PURE__*/ m("<svg><path d=\"M13 5v12\"></svg>", !1, !0, !1), gl = /*#__PURE__*/ m("<svg><path d=\"M18 17V9\"></svg>", !1, !0, !1);
function _l(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			pl(),
			ml(),
			hl(),
			gl()
		];
	} }));
}
_l.displayName = "ColumnChart";
//#endregion
//#region src/icons/columns-2.tsx
var vl = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), yl = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1);
function bl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [vl(), yl()];
	} }));
}
bl.displayName = "Columns2";
//#endregion
//#region src/icons/columns-3.tsx
var xl = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), Sl = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), Cl = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1);
function wl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xl(),
			Sl(),
			Cl()
		];
	} }));
}
wl.displayName = "Columns3";
//#endregion
//#region src/icons/command.tsx
var Tl = /*#__PURE__*/ m("<svg><path d=\"M9 9H6a3 3 0 1 1 3-3zm0 0h6M9 9v9a3 3 0 1 1-3-3h12a3 3 0 1 1-3 3V9m0 0h3a3 3 0 1 0-3-3z\"></svg>", !1, !0, !1);
function El(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Tl();
	} }));
}
El.displayName = "Command";
//#endregion
//#region src/icons/compass.tsx
var Dl = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Ol = /*#__PURE__*/ m("<svg><path d=\"m13.05 14.32-4.67 1.55a.2.2 0 0 1-.25-.25l1.55-4.67a2 2 0 0 1 1.27-1.27l4.67-1.55c.16-.06.3.1.25.25l-1.55 4.67a2 2 0 0 1-1.27 1.27\"></svg>", !1, !0, !1);
function kl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Dl(), Ol()];
	} }));
}
kl.displayName = "Compass";
//#endregion
//#region src/icons/component.tsx
var Al = /*#__PURE__*/ m("<svg><path d=\"m12.68 2.7 2.16 2.16a1 1 0 0 1 0 1.42l-2.16 2.16a1 1 0 0 1-1.42 0L9.11 6.28a1 1 0 0 1 0-1.42l2.15-2.15a1 1 0 0 1 1.42 0Z\"></svg>", !1, !0, !1), jl = /*#__PURE__*/ m("<svg><path d=\"m6.28 9.16 2.16 2.16a1 1 0 0 1 0 1.42l-2.16 2.15a1 1 0 0 1-1.42 0l-2.15-2.15a1 1 0 0 1 0-1.42l2.15-2.16a1 1 0 0 1 1.42 0Z\"></svg>", !1, !0, !1), Ml = /*#__PURE__*/ m("<svg><path d=\"m19.14 9.1 2.15 2.16a1 1 0 0 1 0 1.42l-2.15 2.16a1 1 0 0 1-1.42 0l-2.16-2.16a1 1 0 0 1 0-1.42l2.16-2.15a1 1 0 0 1 1.42 0Z\"></svg>", !1, !0, !1), Nl = /*#__PURE__*/ m("<svg><path d=\"m12.74 15.56 2.15 2.16a1 1 0 0 1 0 1.42l-2.15 2.15a1 1 0 0 1-1.42 0l-2.16-2.15a1 1 0 0 1 0-1.42l2.16-2.16a1 1 0 0 1 1.42 0Z\"></svg>", !1, !0, !1);
function Pl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Al(),
			jl(),
			Ml(),
			Nl()
		];
	} }));
}
Pl.displayName = "Component";
//#endregion
//#region src/icons/copy-check.tsx
var Fl = /*#__PURE__*/ m("<svg><path d=\"M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2\"></svg>", !1, !0, !1), Il = /*#__PURE__*/ m("<svg><path d=\"M20 8H10a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), Ll = /*#__PURE__*/ m("<svg><path d=\"m12 15.12 1.98 1.98q.14.12.28 0L18 13\"></svg>", !1, !0, !1);
function Rl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Fl(),
			Il(),
			Ll()
		];
	} }));
}
Rl.displayName = "CopyCheck";
//#endregion
//#region src/icons/copy-x.tsx
var zl = /*#__PURE__*/ m("<svg><path d=\"M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2\"></svg>", !1, !0, !1), Bl = /*#__PURE__*/ m("<svg><path d=\"M20 8H10a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), Vl = /*#__PURE__*/ m("<svg><path d=\"m12 12 6 6\"></svg>", !1, !0, !1), Hl = /*#__PURE__*/ m("<svg><path d=\"m12 18 6-6\"></svg>", !1, !0, !1);
function Ul(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zl(),
			Bl(),
			Vl(),
			Hl()
		];
	} }));
}
Ul.displayName = "CopyX";
//#endregion
//#region src/icons/copy.tsx
var Wl = /*#__PURE__*/ m("<svg><path d=\"M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2\"></svg>", !1, !0, !1), Gl = /*#__PURE__*/ m("<svg><rect width=14 height=14 x=8 y=8 rx=2></svg>", !1, !0, !1);
function Kl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Wl(), Gl()];
	} }));
}
Kl.displayName = "Copy";
//#endregion
//#region src/icons/cpu-ai.tsx
var ql = /*#__PURE__*/ m("<svg><rect width=16 height=16 x=4 y=4 rx=2></svg>", !1, !0, !1), Jl = /*#__PURE__*/ m("<svg><path d=\"M7 2v2\"></svg>", !1, !0, !1), Yl = /*#__PURE__*/ m("<svg><path d=\"M12 2v2\"></svg>", !1, !0, !1), Xl = /*#__PURE__*/ m("<svg><path d=\"M17 2v2\"></svg>", !1, !0, !1), Zl = /*#__PURE__*/ m("<svg><path d=\"M20 7h2\"></svg>", !1, !0, !1), Ql = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), $l = /*#__PURE__*/ m("<svg><path d=\"M20 17h2\"></svg>", !1, !0, !1), eu = /*#__PURE__*/ m("<svg><path d=\"M4 7H2\"></svg>", !1, !0, !1), tu = /*#__PURE__*/ m("<svg><path d=\"M4 12H2\"></svg>", !1, !0, !1), nu = /*#__PURE__*/ m("<svg><path d=\"M4 17H2\"></svg>", !1, !0, !1), ru = /*#__PURE__*/ m("<svg><path d=\"M7 20v2\"></svg>", !1, !0, !1), iu = /*#__PURE__*/ m("<svg><path d=\"M12 20v2\"></svg>", !1, !0, !1), au = /*#__PURE__*/ m("<svg><path d=\"M17 20v2\"></svg>", !1, !0, !1), ou = /*#__PURE__*/ m("<svg><path d=\"M12 15v-4a2 2 0 1 0-4 0v4\"></svg>", !1, !0, !1), su = /*#__PURE__*/ m("<svg><path d=\"M8 13h4\"></svg>", !1, !0, !1), cu = /*#__PURE__*/ m("<svg><path d=\"M16 9v6\"></svg>", !1, !0, !1);
function lu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ql(),
			Jl(),
			Yl(),
			Xl(),
			Zl(),
			Ql(),
			$l(),
			eu(),
			tu(),
			nu(),
			ru(),
			iu(),
			au(),
			ou(),
			su(),
			cu()
		];
	} }));
}
lu.displayName = "CpuAi";
//#endregion
//#region src/icons/cpu.tsx
var uu = /*#__PURE__*/ m("<svg><rect width=16 height=16 x=4 y=4 rx=2></svg>", !1, !0, !1), du = /*#__PURE__*/ m("<svg><rect width=8 height=8 x=8 y=8 rx=1></svg>", !1, !0, !1), fu = /*#__PURE__*/ m("<svg><path d=\"M7 2v2\"></svg>", !1, !0, !1), pu = /*#__PURE__*/ m("<svg><path d=\"M12 2v2\"></svg>", !1, !0, !1), mu = /*#__PURE__*/ m("<svg><path d=\"M17 2v2\"></svg>", !1, !0, !1), hu = /*#__PURE__*/ m("<svg><path d=\"M20 7h2\"></svg>", !1, !0, !1), gu = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), _u = /*#__PURE__*/ m("<svg><path d=\"M20 17h2\"></svg>", !1, !0, !1), vu = /*#__PURE__*/ m("<svg><path d=\"M4 7H2\"></svg>", !1, !0, !1), yu = /*#__PURE__*/ m("<svg><path d=\"M4 12H2\"></svg>", !1, !0, !1), bu = /*#__PURE__*/ m("<svg><path d=\"M4 17H2\"></svg>", !1, !0, !1), xu = /*#__PURE__*/ m("<svg><path d=\"M7 20v2\"></svg>", !1, !0, !1), Su = /*#__PURE__*/ m("<svg><path d=\"M12 20v2\"></svg>", !1, !0, !1), Cu = /*#__PURE__*/ m("<svg><path d=\"M17 20v2\"></svg>", !1, !0, !1);
function wu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			uu(),
			du(),
			fu(),
			pu(),
			mu(),
			hu(),
			gu(),
			_u(),
			vu(),
			yu(),
			bu(),
			xu(),
			Su(),
			Cu()
		];
	} }));
}
wu.displayName = "Cpu";
//#endregion
//#region src/icons/credit-card-disabled.tsx
var Tu = /*#__PURE__*/ m("<svg><path d=\"M2 10v7c0 1.1.9 2 2 2h7m-9-9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20m0 0v1\"></svg>", !1, !0, !1), Eu = /*#__PURE__*/ m("<svg><circle cx=18 cy=17 r=3></svg>", !1, !0, !1), Du = /*#__PURE__*/ m("<svg><path d=\"m16 16 4 2\"></svg>", !1, !0, !1);
function Ou(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Tu(),
			Eu(),
			Du()
		];
	} }));
}
Ou.displayName = "CreditCardDisabled";
//#endregion
//#region src/icons/credit-card-plus.tsx
var ku = /*#__PURE__*/ m("<svg><path d=\"M2 10v7c0 1.1.9 2 2 2h7m-9-9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20m0 0v3\"></svg>", !1, !0, !1), Au = /*#__PURE__*/ m("<svg><path d=\"M15 18h6\"></svg>", !1, !0, !1), ju = /*#__PURE__*/ m("<svg><path d=\"M18 15v6\"></svg>", !1, !0, !1);
function Mu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ku(),
			Au(),
			ju()
		];
	} }));
}
Mu.displayName = "CreditCardPlus";
//#endregion
//#region src/icons/credit-card.tsx
var Nu = /*#__PURE__*/ m("<svg><path d=\"M2 10v7c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-7M2 10V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20\"></svg>", !1, !0, !1);
function Pu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Nu();
	} }));
}
Pu.displayName = "CreditCard";
//#endregion
//#region src/icons/crown.tsx
var Fu = /*#__PURE__*/ m("<svg><path d=\"M2.13 5.5a.2.2 0 0 1 .3-.21l5.4 3.6c.09.06.22.02.28-.08l3.72-6.5a.2.2 0 0 1 .34 0l3.72 6.5c.06.1.2.14.29.07l5.39-3.6a.2.2 0 0 1 .3.22L19.2 16.24a1 1 0 0 1-.97.76H5.78a1 1 0 0 1-.97-.76z\"></svg>", !1, !0, !1), Iu = /*#__PURE__*/ m("<svg><path d=\"M5 21h14\"></svg>", !1, !0, !1);
function Lu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Fu(), Iu()];
	} }));
}
Lu.displayName = "Crown";
//#endregion
//#region src/icons/database-backup.tsx
var Ru = /*#__PURE__*/ m("<svg><ellipse cx=12 cy=5 rx=9 ry=3></svg>", !1, !0, !1), zu = /*#__PURE__*/ m("<svg><path d=\"M8.5 14.76C5.27 14.31 3 13.24 3 12\"></svg>", !1, !0, !1), Bu = /*#__PURE__*/ m("<svg><path d=\"M21 10V5\"></svg>", !1, !0, !1), Vu = /*#__PURE__*/ m("<svg><path d=\"M10 21.93c-4-.3-7-1.5-7-2.93V5\"></svg>", !1, !0, !1), Hu = /*#__PURE__*/ m("<svg><path d=\"M14.54 16a4 4 0 1 1 .46 4.65\"></svg>", !1, !0, !1), Uu = /*#__PURE__*/ m("<svg><path d=\"m14.5 12-.45 3.57a.5.5 0 0 0 .36.55l3.09.88\"></svg>", !1, !0, !1);
function Wu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ru(),
			zu(),
			Bu(),
			Vu(),
			Hu(),
			Uu()
		];
	} }));
}
Wu.displayName = "DatabaseBackup";
//#endregion
//#region src/icons/database-zap.tsx
var Gu = /*#__PURE__*/ m("<svg><ellipse cx=12 cy=5 rx=9 ry=3></svg>", !1, !0, !1), Ku = /*#__PURE__*/ m("<svg><path d=\"M15 14.83q-1.42.17-3 .17c-4.97 0-9-1.34-9-3\"></svg>", !1, !0, !1), qu = /*#__PURE__*/ m("<svg><path d=\"M21 9V5\"></svg>", !1, !0, !1), Ju = /*#__PURE__*/ m("<svg><path d=\"M14 21.93q-.96.06-2 .07c-4.97 0-9-1.34-9-3V5\"></svg>", !1, !0, !1), Yu = /*#__PURE__*/ m("<svg><path d=\"m20.5 14-2.45 3.71q-.02.07.04.08h3.81q.07.02.04.08L19 22\"></svg>", !1, !0, !1);
function Xu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gu(),
			Ku(),
			qu(),
			Ju(),
			Yu()
		];
	} }));
}
Xu.displayName = "DatabaseZap";
//#endregion
//#region src/icons/database.tsx
var Zu = /*#__PURE__*/ m("<svg><ellipse cx=12 cy=5 rx=9 ry=3></svg>", !1, !0, !1), Qu = /*#__PURE__*/ m("<svg><path d=\"M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3\"></svg>", !1, !0, !1), $u = /*#__PURE__*/ m("<svg><path d=\"M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5\"></svg>", !1, !0, !1);
function ed(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Zu(),
			Qu(),
			$u()
		];
	} }));
}
ed.displayName = "Database";
//#endregion
//#region src/icons/divide.tsx
var td = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1), nd = /*#__PURE__*/ m("<svg><circle cx=12 cy=7 r=1></svg>", !1, !0, !1), rd = /*#__PURE__*/ m("<svg><circle cx=12 cy=17 r=1></svg>", !1, !0, !1);
function id(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			td(),
			nd(),
			rd()
		];
	} }));
}
id.displayName = "Divide";
//#endregion
//#region src/icons/dollar-sign.tsx
var ad = /*#__PURE__*/ m("<svg><path d=\"M11 3v18\"></svg>", !1, !0, !1), od = /*#__PURE__*/ m("<svg><path d=\"M15 6H9a3 3 0 0 0 0 6h4.36\"></svg>", !1, !0, !1), sd = /*#__PURE__*/ m("<svg><path d=\"M9.45 12H13a3 3 0 1 1 0 6H7\"></svg>", !1, !0, !1);
function cd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ad(),
			od(),
			sd()
		];
	} }));
}
cd.displayName = "DollarSign";
//#endregion
//#region src/icons/download.tsx
var ld = /*#__PURE__*/ m("<svg><path d=\"M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4\"></svg>", !1, !0, !1), ud = /*#__PURE__*/ m("<svg><path d=\"m6 10 5.3 5.3a1 1 0 0 0 1.4 0L18 10\"></svg>", !1, !0, !1), dd = /*#__PURE__*/ m("<svg><path d=\"M12 3v11\"></svg>", !1, !0, !1);
function fd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ld(),
			ud(),
			dd()
		];
	} }));
}
fd.displayName = "Download";
//#endregion
//#region src/icons/draft-book.tsx
var pd = /*#__PURE__*/ m("<svg><path d=\"M4 18v2c0 1.1.9 2 2 2h13.86M4 18h15.86M4 18V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v13.86q-.01.13-.14.14m.14 4h-.14m0-4-.58.54a2 2 0 0 0 0 2.92l.58.54\"></svg>", !1, !0, !1), md = /*#__PURE__*/ m("<svg><path d=\"M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.28M12 6h3.5c.28 0 .5.22.5.5v1.28\"></svg>", !1, !0, !1);
function hd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [pd(), md()];
	} }));
}
hd.displayName = "DraftBook";
//#endregion
//#region src/icons/ear-off.tsx
var gd = /*#__PURE__*/ m("<svg><path d=\"M6.32 6.5q-.15.45-.22.93L6 8\"></svg>", !1, !0, !1), _d = /*#__PURE__*/ m("<svg><path d=\"M16.18 16.7a2 2 0 0 0-.25.64l-.2 1A4.54 4.54 0 0 1 11.28 22h-.12A4.4 4.4 0 0 1 7 19\"></svg>", !1, !0, !1), vd = /*#__PURE__*/ m("<svg><path d=\"M9 3.03A6.5 6.5 0 0 1 19 8.5v.62q0 1.64-.5 3.18\"></svg>", !1, !0, !1), yd = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1), bd = /*#__PURE__*/ m("<svg><path d=\"M12 6.06q.24-.06.5-.06C13.88 6 15 7.34 15 9\"></svg>", !1, !0, !1), xd = /*#__PURE__*/ m("<svg><path d=\"M11.95 12c-.17.65-.74 1.33-1.95 2\"></svg>", !1, !0, !1);
function Sd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gd(),
			_d(),
			vd(),
			yd(),
			bd(),
			xd()
		];
	} }));
}
Sd.displayName = "EarOff";
//#endregion
//#region src/icons/ear.tsx
var Cd = /*#__PURE__*/ m("<svg><path d=\"m6 8 .1-.57A6.5 6.5 0 0 1 19 8.5v.62c0 1.88-.51 3.73-1.48 5.35l-1.34 2.23a2 2 0 0 0-.25.64l-.2 1A4.54 4.54 0 0 1 11.28 22h-.12A4.4 4.4 0 0 1 7 19\"></svg>", !1, !0, !1), wd = /*#__PURE__*/ m("<svg><path d=\"M10 9c0-1.66 1.12-3 2.5-3S15 7.34 15 9\"></svg>", !1, !0, !1), Td = /*#__PURE__*/ m("<svg><path d=\"M10 9c1.5.83 3.62 3 0 5\"></svg>", !1, !0, !1);
function Ed(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Cd(),
			wd(),
			Td()
		];
	} }));
}
Ed.displayName = "Ear";
//#endregion
//#region src/icons/equal.tsx
var Dd = /*#__PURE__*/ m("<svg><path d=\"M5 15h14\"></svg>", !1, !0, !1), Od = /*#__PURE__*/ m("<svg><path d=\"M5 9h14\"></svg>", !1, !0, !1);
function kd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Dd(), Od()];
	} }));
}
kd.displayName = "Equal";
//#endregion
//#region src/icons/equalizer.tsx
var Ad = /*#__PURE__*/ m("<svg><path d=\"M2 10v4\"></svg>", !1, !0, !1), jd = /*#__PURE__*/ m("<svg><path d=\"M22 10v4\"></svg>", !1, !0, !1), Md = /*#__PURE__*/ m("<svg><path d=\"M6 6v12\"></svg>", !1, !0, !1), Nd = /*#__PURE__*/ m("<svg><path d=\"M18 5v13\"></svg>", !1, !0, !1), Pd = /*#__PURE__*/ m("<svg><path d=\"M10 3v17.5\"></svg>", !1, !0, !1), Fd = /*#__PURE__*/ m("<svg><path d=\"M14 8v8\"></svg>", !1, !0, !1);
function Id(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ad(),
			jd(),
			Md(),
			Nd(),
			Pd(),
			Fd()
		];
	} }));
}
Id.displayName = "Equalizer";
//#endregion
//#region src/icons/eraser.tsx
var Ld = /*#__PURE__*/ m("<svg><path d=\"M22 21h-9m0 0H8.46a1 1 0 0 1-.76-.35L2.6 14.7a1 1 0 0 1 .05-1.35L13.3 2.7a1 1 0 0 1 1.42 0l7.12 7.12a1 1 0 0 1 .03 1.38z\"></svg>", !1, !0, !1), Rd = /*#__PURE__*/ m("<svg><path d=\"M5.64 10.59 14 19\"></svg>", !1, !0, !1);
function zd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ld(), Rd()];
	} }));
}
zd.displayName = "Eraser";
//#endregion
//#region src/icons/euro.tsx
var Bd = /*#__PURE__*/ m("<svg><path d=\"M19 5.07a8 8 0 1 0 0 13.86\"></svg>", !1, !0, !1), Vd = /*#__PURE__*/ m("<svg><path d=\"M4 9h11\"></svg>", !1, !0, !1), Hd = /*#__PURE__*/ m("<svg><path d=\"M4 14h8\"></svg>", !1, !0, !1);
function Ud(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Bd(),
			Vd(),
			Hd()
		];
	} }));
}
Ud.displayName = "Euro";
//#endregion
//#region src/icons/external-link.tsx
var Wd = /*#__PURE__*/ m("<svg><path d=\"M18 13v7.58c0 .23-.19.42-.42.42H3.42a.4.4 0 0 1-.42-.42V6.42c0-.23.19-.42.42-.42H11\"></svg>", !1, !0, !1), Gd = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5c.28 0 .5.22.5.5V9\"></svg>", !1, !0, !1), Kd = /*#__PURE__*/ m("<svg><path d=\"M10 14 20 4\"></svg>", !1, !0, !1);
function qd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wd(),
			Gd(),
			Kd()
		];
	} }));
}
qd.displayName = "ExternalLink";
//#endregion
//#region src/icons/eye-closed.tsx
var Jd = /*#__PURE__*/ m("<svg><path d=\"M21 8c0 3.31-4.03 6-9 6s-9-2.69-9-6\"></svg>", !1, !0, !1), Yd = /*#__PURE__*/ m("<svg><path d=\"m5 12-3 3\"></svg>", !1, !0, !1), Xd = /*#__PURE__*/ m("<svg><path d=\"m19 12 3 3\"></svg>", !1, !0, !1), Zd = /*#__PURE__*/ m("<svg><path d=\"m9 14-1 4\"></svg>", !1, !0, !1), Qd = /*#__PURE__*/ m("<svg><path d=\"m14 14 1 4\"></svg>", !1, !0, !1);
function $d(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Jd(),
			Yd(),
			Xd(),
			Zd(),
			Qd()
		];
	} }));
}
$d.displayName = "EyeClosed";
//#endregion
//#region src/icons/eye.tsx
var ef = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1), tf = /*#__PURE__*/ m("<svg><path d=\"M2 12C5 6.72 13.2-.68 22 12\"></svg>", !1, !0, !1), nf = /*#__PURE__*/ m("<svg><path d=\"M22 12.02c-3 5.29-11.2 12.68-20 0\"></svg>", !1, !0, !1);
function rf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ef(),
			tf(),
			nf()
		];
	} }));
}
rf.displayName = "Eye";
//#endregion
//#region src/icons/fast-forward.tsx
var af = /*#__PURE__*/ m("<svg><path d=\"M11.3 10.6a1.8 1.8 0 0 1 0 2.8L4.45 19c-.98.8-2.45.1-2.45-1.17V6.17A1.5 1.5 0 0 1 4.45 5z\"></svg>", !1, !0, !1), of = /*#__PURE__*/ m("<svg><path d=\"M21.58 10.84c.73.6.73 1.72 0 2.32L14.45 19c-.98.8-2.45.1-2.45-1.17V6.17A1.5 1.5 0 0 1 14.45 5z\"></svg>", !1, !0, !1);
function sf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [af(), of()];
	} }));
}
sf.displayName = "FastForward";
//#endregion
//#region src/icons/file-check-2.tsx
var cf = /*#__PURE__*/ m("<svg><path d=\"M20 13V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), lf = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), uf = /*#__PURE__*/ m("<svg><path d=\"m14 19.08 2.46 1.97q.04.03.07 0L20 17.08\"></svg>", !1, !0, !1);
function df(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			cf(),
			lf(),
			uf()
		];
	} }));
}
df.displayName = "FileCheck2";
//#endregion
//#region src/icons/file-check.tsx
var ff = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), pf = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), mf = /*#__PURE__*/ m("<svg><path d=\"m9 15 2.46 1.97q.04.02.07 0L15 13\"></svg>", !1, !0, !1);
function hf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ff(),
			pf(),
			mf()
		];
	} }));
}
hf.displayName = "FileCheck";
//#endregion
//#region src/icons/file-clock.tsx
var gf = /*#__PURE__*/ m("<svg><path d=\"M16 22h2a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v3\"></svg>", !1, !0, !1), _f = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), vf = /*#__PURE__*/ m("<svg><path d=\"M8 14v1.97q0 .04.02.04L9.5 17\"></svg>", !1, !0, !1), yf = /*#__PURE__*/ m("<svg><circle cx=8 cy=16 r=6></svg>", !1, !0, !1);
function bf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gf(),
			_f(),
			vf(),
			yf()
		];
	} }));
}
bf.displayName = "FileClock";
//#endregion
//#region src/icons/file-code-corner.tsx
var xf = /*#__PURE__*/ m("<svg><path d=\"M14 22h4a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v9\"></svg>", !1, !0, !1), Sf = /*#__PURE__*/ m("<svg><path d=\"M13 2v5c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), Cf = /*#__PURE__*/ m("<svg><path d=\"m8 17 2.24 2.5q0 0 0 0L8 22\"></svg>", !1, !0, !1), wf = /*#__PURE__*/ m("<svg><path d=\"m4.25 17-2.24 2.5q0 0 0 0L4.25 22\"></svg>", !1, !0, !1);
function Tf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xf(),
			Sf(),
			Cf(),
			wf()
		];
	} }));
}
Tf.displayName = "FileCodeCorner";
//#endregion
//#region src/icons/file-code.tsx
var Ef = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Df = /*#__PURE__*/ m("<svg><path d=\"M13 2v5c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), Of = /*#__PURE__*/ m("<svg><path d=\"m14 13 2.24 2.5q0 0 0 0L14 18\"></svg>", !1, !0, !1), kf = /*#__PURE__*/ m("<svg><path d=\"m10.25 13-2.24 2.5q0 0 0 0l2.24 2.5\"></svg>", !1, !0, !1);
function Af(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ef(),
			Df(),
			Of(),
			kf()
		];
	} }));
}
Af.displayName = "FileCode";
//#endregion
//#region src/icons/file-diff.tsx
var jf = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h8.17a2 2 0 0 1 1.42.59L19.4 6.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Mf = /*#__PURE__*/ m("<svg><path d=\"M12 7v6\"></svg>", !1, !0, !1), Nf = /*#__PURE__*/ m("<svg><path d=\"M9 10h6\"></svg>", !1, !0, !1), Pf = /*#__PURE__*/ m("<svg><path d=\"M9 17h6\"></svg>", !1, !0, !1);
function Ff(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jf(),
			Mf(),
			Nf(),
			Pf()
		];
	} }));
}
Ff.displayName = "FileDiff";
//#endregion
//#region src/icons/file-input.tsx
var If = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), Lf = /*#__PURE__*/ m("<svg><path d=\"M2 14h10\"></svg>", !1, !0, !1), Rf = /*#__PURE__*/ m("<svg><path d=\"m9 11 2.96 2.96q.03.04 0 .08L9 17\"></svg>", !1, !0, !1), zf = /*#__PURE__*/ m("<svg><path d=\"M4 10V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2\"></svg>", !1, !0, !1);
function Bf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			If(),
			Lf(),
			Rf(),
			zf()
		];
	} }));
}
Bf.displayName = "FileInput";
//#endregion
//#region src/icons/file-json-2.tsx
var Vf = /*#__PURE__*/ m("<svg><path d=\"M13 22h5a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v7\"></svg>", !1, !0, !1), Hf = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), Uf = /*#__PURE__*/ m("<svg><path d=\"M8 15a1 1 0 0 1 1 1v1.28a1 1 0 0 0 .43.82l.51.36q.04.04 0 .08l-.51.36a1 1 0 0 0-.43.82V21a1 1 0 0 1-1 1\"></svg>", !1, !0, !1), Wf = /*#__PURE__*/ m("<svg><path d=\"M4 15a1 1 0 0 0-1 1v1.28a1 1 0 0 1-.43.82l-.51.36a.05.05 0 0 0 0 .08l.51.36a1 1 0 0 1 .43.82V21a1 1 0 0 0 1 1\"></svg>", !1, !0, !1);
function Gf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Vf(),
			Hf(),
			Uf(),
			Wf()
		];
	} }));
}
Gf.displayName = "FileJson2";
//#endregion
//#region src/icons/file-json.tsx
var Kf = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), qf = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), Jf = /*#__PURE__*/ m("<svg><path d=\"M14 12a1 1 0 0 1 1 1v.87c0 .33.17.63.45.8l.48.29q.04.04 0 .08l-.48.29a1 1 0 0 0-.45.8V17a1 1 0 0 1-1 1\"></svg>", !1, !0, !1), Yf = /*#__PURE__*/ m("<svg><path d=\"M10 12a1 1 0 0 0-1 1v.87c0 .33-.17.63-.45.8l-.48.29a.05.05 0 0 0 0 .08l.48.29c.28.17.45.47.45.8V17a1 1 0 0 0 1 1\"></svg>", !1, !0, !1);
function Xf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Kf(),
			qf(),
			Jf(),
			Yf()
		];
	} }));
}
Xf.displayName = "FileJson";
//#endregion
//#region src/icons/file-lock.tsx
var Zf = /*#__PURE__*/ m("<svg><path d=\"M14 22h4a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v5\"></svg>", !1, !0, !1), Qf = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), $f = /*#__PURE__*/ m("<svg><rect width=8 height=5 x=2 y=17 rx=1></svg>", !1, !0, !1), ep = /*#__PURE__*/ m("<svg><path d=\"M8 17v-2a2 2 0 1 0-4 0v2\"></svg>", !1, !0, !1);
function tp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Zf(),
			Qf(),
			$f(),
			ep()
		];
	} }));
}
tp.displayName = "FileLock";
//#endregion
//#region src/icons/file-minus-2.tsx
var np = /*#__PURE__*/ m("<svg><path d=\"M18 22H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V14\"></svg>", !1, !0, !1), rp = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), ip = /*#__PURE__*/ m("<svg><path d=\"M14 18h6\"></svg>", !1, !0, !1);
function ap(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			np(),
			rp(),
			ip()
		];
	} }));
}
ap.displayName = "FileMinus2";
//#endregion
//#region src/icons/file-minus.tsx
var op = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), sp = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), cp = /*#__PURE__*/ m("<svg><path d=\"M9 15h6\"></svg>", !1, !0, !1);
function lp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			op(),
			sp(),
			cp()
		];
	} }));
}
lp.displayName = "FileMinus";
//#endregion
//#region src/icons/file-output.tsx
var up = /*#__PURE__*/ m("<svg><path d=\"M4.27 21c.34.6.99 1 1.73 1h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v3\"></svg>", !1, !0, !1), dp = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), fp = /*#__PURE__*/ m("<svg><path d=\"M12 14H2\"></svg>", !1, !0, !1), pp = /*#__PURE__*/ m("<svg><path d=\"m5 11-2.96 2.96a.05.05 0 0 0 0 .08L5 17\"></svg>", !1, !0, !1);
function mp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			up(),
			dp(),
			fp(),
			pp()
		];
	} }));
}
mp.displayName = "FileOutput";
//#endregion
//#region src/icons/file-plus-2.tsx
var hp = /*#__PURE__*/ m("<svg><path d=\"M20 13V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6\"></svg>", !1, !0, !1), gp = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), _p = /*#__PURE__*/ m("<svg><path d=\"M17 16v6\"></svg>", !1, !0, !1), vp = /*#__PURE__*/ m("<svg><path d=\"M14 19h6\"></svg>", !1, !0, !1);
function yp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hp(),
			gp(),
			_p(),
			vp()
		];
	} }));
}
yp.displayName = "FilePlus2";
//#endregion
//#region src/icons/file-plus.tsx
var bp = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), xp = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), Sp = /*#__PURE__*/ m("<svg><path d=\"M12 12v6\"></svg>", !1, !0, !1), Cp = /*#__PURE__*/ m("<svg><path d=\"M9 15h6\"></svg>", !1, !0, !1);
function wp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			bp(),
			xp(),
			Sp(),
			Cp()
		];
	} }));
}
wp.displayName = "FilePlus";
//#endregion
//#region src/icons/file-question-mark.tsx
var Tp = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Ep = /*#__PURE__*/ m("<svg><path d=\"M9 10c.42-1.17 1.57-2 2.91-2C13.61 8 15 9.34 15 11s-2 2.5-3.09 3\"></svg>", !1, !0, !1), Dp = /*#__PURE__*/ m("<svg><path d=\"M12.01 18H12\"></svg>", !1, !0, !1);
function Op(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Tp(),
			Ep(),
			Dp()
		];
	} }));
}
Op.displayName = "FileQuestionMark";
//#endregion
//#region src/icons/file-search-2.tsx
var kp = /*#__PURE__*/ m("<svg><path d=\"M20 12V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4\"></svg>", !1, !0, !1), Ap = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), jp = /*#__PURE__*/ m("<svg><circle cx=15 cy=17 r=3></svg>", !1, !0, !1), Mp = /*#__PURE__*/ m("<svg><path d=\"M17.5 19.5 20 22\"></svg>", !1, !0, !1);
function Np(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kp(),
			Ap(),
			jp(),
			Mp()
		];
	} }));
}
Np.displayName = "FileSearch2";
//#endregion
//#region src/icons/file-symlink.tsx
var Pp = /*#__PURE__*/ m("<svg><path d=\"M4 11V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2h4\"></svg>", !1, !0, !1), Fp = /*#__PURE__*/ m("<svg><path d=\"m8 12 2.96 2.96q.03.04 0 .08L8 18\"></svg>", !1, !0, !1), Ip = /*#__PURE__*/ m("<svg><path d=\"M14 3v5a1 1 0 0 0 1 1h5\"></svg>", !1, !0, !1);
function Lp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Pp(),
			Fp(),
			Ip()
		];
	} }));
}
Lp.displayName = "FileSymlink";
//#endregion
//#region src/icons/file-text.tsx
var Rp = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), zp = /*#__PURE__*/ m("<svg><path d=\"M13 2v5c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), Bp = /*#__PURE__*/ m("<svg><path d=\"M8 10h2\"></svg>", !1, !0, !1), Vp = /*#__PURE__*/ m("<svg><path d=\"M8 14h8\"></svg>", !1, !0, !1), Hp = /*#__PURE__*/ m("<svg><path d=\"M8 18h8\"></svg>", !1, !0, !1);
function Up(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rp(),
			zp(),
			Bp(),
			Vp(),
			Hp()
		];
	} }));
}
Up.displayName = "FileText";
//#endregion
//#region src/icons/file-volume.tsx
var Wp = /*#__PURE__*/ m("<svg><path d=\"M4 10V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2h-3\"></svg>", !1, !0, !1), Gp = /*#__PURE__*/ m("<svg><path d=\"M13 2v5c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), Kp = /*#__PURE__*/ m("<svg><path d=\"M3 19.07v-3.14a1 1 0 0 1 1-1h1.4a1 1 0 0 0 .66-.25l1.11-.96a.5.5 0 0 1 .83.38v6.94a.5.5 0 0 1-.79.41l-1.73-1.2a1 1 0 0 0-.57-.18H4a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), qp = /*#__PURE__*/ m("<svg><path d=\"M11.99 14.53c.76.79 1.82 2.98.02 5.5\"></svg>", !1, !0, !1);
function Jp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wp(),
			Gp(),
			Kp(),
			qp()
		];
	} }));
}
Jp.displayName = "FileVolume";
//#endregion
//#region src/icons/file-x-2.tsx
var Yp = /*#__PURE__*/ m("<svg><path d=\"M20 13V8.83a2 2 0 0 0-.59-1.42L14.6 2.6A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), Xp = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), Zp = /*#__PURE__*/ m("<svg><path d=\"m15 22 5-5\"></svg>", !1, !0, !1), Qp = /*#__PURE__*/ m("<svg><path d=\"m15 17 5 5\"></svg>", !1, !0, !1);
function $p(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yp(),
			Xp(),
			Zp(),
			Qp()
		];
	} }));
}
$p.displayName = "FileX2";
//#endregion
//#region src/icons/file-x.tsx
var em = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4A2 2 0 0 1 20 8.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), tm = /*#__PURE__*/ m("<svg><path d=\"M13 2v4.29c0 .94.9 1.71 2 1.71h5\"></svg>", !1, !0, !1), nm = /*#__PURE__*/ m("<svg><path d=\"m9.5 17.5 5-5\"></svg>", !1, !0, !1), rm = /*#__PURE__*/ m("<svg><path d=\"m9.5 12.5 5 5\"></svg>", !1, !0, !1);
function im(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			em(),
			tm(),
			nm(),
			rm()
		];
	} }));
}
im.displayName = "FileX";
//#endregion
//#region src/icons/file.tsx
var am = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), om = /*#__PURE__*/ m("<svg><path d=\"M13 2v5c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1);
function sm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [am(), om()];
	} }));
}
sm.displayName = "File";
//#endregion
//#region src/icons/film.tsx
var cm = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), lm = /*#__PURE__*/ m("<svg><path d=\"M7 3v18M17 3v18\"></svg>", !1, !0, !1), um = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), dm = /*#__PURE__*/ m("<svg><path d=\"M3 16.5h4\"></svg>", !1, !0, !1), fm = /*#__PURE__*/ m("<svg><path d=\"M3 7.5h4\"></svg>", !1, !0, !1), pm = /*#__PURE__*/ m("<svg><path d=\"M17 7.5h4\"></svg>", !1, !0, !1), mm = /*#__PURE__*/ m("<svg><path d=\"M17 16.5h4\"></svg>", !1, !0, !1);
function hm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			cm(),
			lm(),
			um(),
			dm(),
			fm(),
			pm(),
			mm()
		];
	} }));
}
hm.displayName = "Film";
//#endregion
//#region src/icons/finger-print.tsx
var gm = /*#__PURE__*/ m("<svg><path d=\"M20 6c-1.61-2.43-4.87-4-8-4C7.03 2 2 5 2 12\"></svg>", !1, !0, !1), _m = /*#__PURE__*/ m("<svg><path d=\"M2 16v3\"></svg>", !1, !0, !1), vm = /*#__PURE__*/ m("<svg><path d=\"M21.5 10c.5 1.5.5 5 .5 7\"></svg>", !1, !0, !1), ym = /*#__PURE__*/ m("<svg><path d=\"M17.78 10.5q.21.75.22 1.5v8\"></svg>", !1, !0, !1), bm = /*#__PURE__*/ m("<svg><path d=\"M15 6.87A5.7 5.7 0 0 0 12 6a6.1 6.1 0 0 0-5.11 3\"></svg>", !1, !0, !1), xm = /*#__PURE__*/ m("<svg><path d=\"M6 13v7\"></svg>", !1, !0, !1), Sm = /*#__PURE__*/ m("<svg><path d=\"M10 22v-3\"></svg>", !1, !0, !1), Cm = /*#__PURE__*/ m("<svg><path d=\"M14 22v-5m-4-2v-3a2 2 0 1 1 4 0v1\"></svg>", !1, !0, !1);
function wm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gm(),
			_m(),
			vm(),
			ym(),
			bm(),
			xm(),
			Sm(),
			Cm()
		];
	} }));
}
wm.displayName = "FingerPrint";
//#endregion
//#region src/icons/folder-check.tsx
var Tm = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), Em = /*#__PURE__*/ m("<svg><path d=\"m9 13.08 2.46 1.97q.04.03.07 0L15 11.08\"></svg>", !1, !0, !1);
function Dm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Tm(), Em()];
	} }));
}
Dm.displayName = "FolderCheck";
//#endregion
//#region src/icons/folder-down.tsx
var Om = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), km = /*#__PURE__*/ m("<svg><path d=\"M12 15v-5\"></svg>", !1, !0, !1), Am = /*#__PURE__*/ m("<svg><path d=\"m9 13 2.96 2.96q.04.03.08 0L15 13\"></svg>", !1, !0, !1);
function jm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Om(),
			km(),
			Am()
		];
	} }));
}
jm.displayName = "FolderDown";
//#endregion
//#region src/icons/folder-heart.tsx
var Mm = /*#__PURE__*/ m("<svg><path d=\"M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5.17a2 2 0 0 1 1.42.59L12.4 5.4a2 2 0 0 0 1.42.59H20a2 2 0 0 1 2 2v3\"></svg>", !1, !0, !1), Nm = /*#__PURE__*/ m("<svg><path d=\"m17.51 15.7.47.56h.04l.47-.55c1.25-1.47 3.51-.5 3.51 1.5 0 .63-.25 1.23-.68 1.65l-3.24 3.1a.1.1 0 0 1-.16 0l-3.24-3.1A2.3 2.3 0 0 1 14 17.2c0-2 2.26-2.97 3.51-1.5Z\"></svg>", !1, !0, !1);
function Pm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Mm(), Nm()];
	} }));
}
Pm.displayName = "FolderHeart";
//#endregion
//#region src/icons/folder-lock.tsx
var Fm = /*#__PURE__*/ m("<svg><path d=\"M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5.17a2 2 0 0 1 1.42.59L12.4 5.4a2 2 0 0 0 1.42.59H20a2 2 0 0 1 2 2v2\"></svg>", !1, !0, !1), Im = /*#__PURE__*/ m("<svg><rect width=8 height=5 x=14 y=17 rx=1></svg>", !1, !0, !1), Lm = /*#__PURE__*/ m("<svg><path d=\"M20 17v-2a2 2 0 1 0-4 0v2\"></svg>", !1, !0, !1);
function Rm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Fm(),
			Im(),
			Lm()
		];
	} }));
}
Rm.displayName = "FolderLock";
//#endregion
//#region src/icons/folder-minus.tsx
var zm = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), Bm = /*#__PURE__*/ m("<svg><path d=\"M9 13h6\"></svg>", !1, !0, !1);
function Vm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [zm(), Bm()];
	} }));
}
Vm.displayName = "FolderMinus";
//#endregion
//#region src/icons/folder-open.tsx
var Hm = /*#__PURE__*/ m("<svg><path d=\"M20 10V8a2 2 0 0 0-2-2h-4.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h14.36a2 2 0 0 0 1.96-1.6l1.44-7.2a1 1 0 0 0-.98-1.2zm0 0H10a2 2 0 0 0-1.6.8L6 14\"></svg>", !1, !0, !1);
function Um(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Hm();
	} }));
}
Um.displayName = "FolderOpen";
//#endregion
//#region src/icons/folder-plus.tsx
var Wm = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), Gm = /*#__PURE__*/ m("<svg><path d=\"M12 10v6\"></svg>", !1, !0, !1), Km = /*#__PURE__*/ m("<svg><path d=\"M9 13h6\"></svg>", !1, !0, !1);
function qm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wm(),
			Gm(),
			Km()
		];
	} }));
}
qm.displayName = "FolderPlus";
//#endregion
//#region src/icons/folder-root.tsx
var Jm = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), Ym = /*#__PURE__*/ m("<svg><path d=\"M12 20v-5\"></svg>", !1, !0, !1), Xm = /*#__PURE__*/ m("<svg><circle cx=12 cy=13 r=2></svg>", !1, !0, !1);
function Zm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Jm(),
			Ym(),
			Xm()
		];
	} }));
}
Zm.displayName = "FolderRoot";
//#endregion
//#region src/icons/folder-search-2.tsx
var Qm = /*#__PURE__*/ m("<svg><path d=\"M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5.17a2 2 0 0 1 1.42.59L12.4 5.4a2 2 0 0 0 1.42.59H20a2 2 0 0 1 2 2v4\"></svg>", !1, !0, !1), $m = /*#__PURE__*/ m("<svg><circle cx=16 cy=16 r=3></svg>", !1, !0, !1), eh = /*#__PURE__*/ m("<svg><path d=\"M18.5 18.5 21 21\"></svg>", !1, !0, !1);
function th(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Qm(),
			$m(),
			eh()
		];
	} }));
}
th.displayName = "FolderSearch2";
//#endregion
//#region src/icons/folder-search.tsx
var nh = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), rh = /*#__PURE__*/ m("<svg><circle cx=11.5 cy=12.5 r=2.5></svg>", !1, !0, !1), ih = /*#__PURE__*/ m("<svg><path d=\"m14 15 1 1\"></svg>", !1, !0, !1);
function ah(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nh(),
			rh(),
			ih()
		];
	} }));
}
ah.displayName = "FolderSearch";
//#endregion
//#region src/icons/folder-up.tsx
var oh = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), sh = /*#__PURE__*/ m("<svg><path d=\"M12 11v5\"></svg>", !1, !0, !1), ch = /*#__PURE__*/ m("<svg><path d=\"m9 13 2.96-2.96a.05.05 0 0 1 .08 0L15 13\"></svg>", !1, !0, !1);
function lh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			oh(),
			sh(),
			ch()
		];
	} }));
}
lh.displayName = "FolderUp";
//#endregion
//#region src/icons/folder-x.tsx
var uh = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3Z\"></svg>", !1, !0, !1), dh = /*#__PURE__*/ m("<svg><path d=\"m9.5 15.5 5-5\"></svg>", !1, !0, !1), fh = /*#__PURE__*/ m("<svg><path d=\"m14.5 15.5-5-5\"></svg>", !1, !0, !1);
function ph(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			uh(),
			dh(),
			fh()
		];
	} }));
}
ph.displayName = "FolderX";
//#endregion
//#region src/icons/folder.tsx
var mh = /*#__PURE__*/ m("<svg><path d=\"M9.17 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6.17a2 2 0 0 1-1.42-.59L10.6 3.6A2 2 0 0 0 9.17 3\"></svg>", !1, !0, !1);
function hh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return mh();
	} }));
}
hh.displayName = "Folder";
//#endregion
//#region src/icons/frown.tsx
var gh = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), _h = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), vh = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1), yh = /*#__PURE__*/ m("<svg><path d=\"M8 16a4.6 4.6 0 0 1 8 0\"></svg>", !1, !0, !1);
function bh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gh(),
			_h(),
			vh(),
			yh()
		];
	} }));
}
bh.displayName = "Frown";
//#endregion
//#region src/icons/gallery-horizontal.tsx
var xh = /*#__PURE__*/ m("<svg><path d=\"M2 3v18\"></svg>", !1, !0, !1), Sh = /*#__PURE__*/ m("<svg><path d=\"M22 3v18\"></svg>", !1, !0, !1), Ch = /*#__PURE__*/ m("<svg><rect width=12 height=18 x=6 y=3 rx=2></svg>", !1, !0, !1);
function wh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xh(),
			Sh(),
			Ch()
		];
	} }));
}
wh.displayName = "GalleryHorizontal";
//#endregion
//#region src/icons/gallery-vertical.tsx
var Th = /*#__PURE__*/ m("<svg><path d=\"M2.99 2h18\"></svg>", !1, !0, !1), Eh = /*#__PURE__*/ m("<svg><path d=\"M3.01 22h18\"></svg>", !1, !0, !1), Dh = /*#__PURE__*/ m("<svg><rect width=18 height=12 x=3 y=6 rx=2></svg>", !1, !0, !1);
function Oh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Th(),
			Eh(),
			Dh()
		];
	} }));
}
Oh.displayName = "GalleryVertical";
//#endregion
//#region src/icons/gem.tsx
var kh = /*#__PURE__*/ m("<svg><path d=\"M12.02 21.98h-.04L2.02 9.03A.02.02 0 0 1 2.04 9h19.92q.03 0 .02.03z\"></svg>", !1, !0, !1), Ah = /*#__PURE__*/ m("<svg><path d=\"m2 9 3.4-5.1A2 2 0 0 1 7.08 3h9.86a2 2 0 0 1 1.66.9L22 9\"></svg>", !1, !0, !1), jh = /*#__PURE__*/ m("<svg><path d=\"M10.67 3 8.32 8.3a2 2 0 0 0-.07 1.44L12 21\"></svg>", !1, !0, !1), Mh = /*#__PURE__*/ m("<svg><path d=\"m13.33 3 2.36 5.3a2 2 0 0 1 .06 1.44L12 21\"></svg>", !1, !0, !1);
function Nh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kh(),
			Ah(),
			jh(),
			Mh()
		];
	} }));
}
Nh.displayName = "Gem";
//#endregion
//#region src/icons/generic-layout.tsx
var Ph = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), Fh = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), Ih = /*#__PURE__*/ m("<svg><path d=\"M12 9v12\"></svg>", !1, !0, !1);
function Lh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ph(),
			Fh(),
			Ih()
		];
	} }));
}
Lh.displayName = "GenericLayout";
//#endregion
//#region src/icons/gift.tsx
var Rh = /*#__PURE__*/ m("<svg><rect width=16 height=10 x=4 y=11 rx=2></svg>", !1, !0, !1), zh = /*#__PURE__*/ m("<svg><path d=\"M5.5 11H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.5\"></svg>", !1, !0, !1), Bh = /*#__PURE__*/ m("<svg><path d=\"M12 7v14\"></svg>", !1, !0, !1), Vh = /*#__PURE__*/ m("<svg><path d=\"M8 7 5.85 4.85A1.67 1.67 0 0 1 7.03 2h.42q.55 0 1.04.25l.34.16c.76.38 1.38 1 1.76 1.76L12 7\"></svg>", !1, !0, !1), Hh = /*#__PURE__*/ m("<svg><path d=\"m16 7 2.15-2.15A1.67 1.67 0 0 0 16.97 2h-.42q-.55 0-1.04.25l-.34.16c-.76.38-1.38 1-1.76 1.76L12 7\"></svg>", !1, !0, !1);
function Uh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rh(),
			zh(),
			Bh(),
			Vh(),
			Hh()
		];
	} }));
}
Uh.displayName = "Gift";
//#endregion
//#region src/icons/git-branch-minus.tsx
var Wh = /*#__PURE__*/ m("<svg><path d=\"M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"></svg>", !1, !0, !1), Gh = /*#__PURE__*/ m("<svg><path d=\"M21 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"></svg>", !1, !0, !1), Kh = /*#__PURE__*/ m("<svg><path d=\"M15 6c-3.33-.33-9.8 1-9 9\"></svg>", !1, !0, !1), qh = /*#__PURE__*/ m("<svg><path d=\"M6 3v12\"></svg>", !1, !0, !1), Jh = /*#__PURE__*/ m("<svg><path d=\"M15 18h6\"></svg>", !1, !0, !1);
function Yh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wh(),
			Gh(),
			Kh(),
			qh(),
			Jh()
		];
	} }));
}
Yh.displayName = "GitBranchMinus";
//#endregion
//#region src/icons/git-branch-plus.tsx
var Xh = /*#__PURE__*/ m("<svg><path d=\"M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"></svg>", !1, !0, !1), Zh = /*#__PURE__*/ m("<svg><path d=\"M21 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"></svg>", !1, !0, !1), Qh = /*#__PURE__*/ m("<svg><path d=\"M15 6c-3.33-.33-9.8 1-9 9\"></svg>", !1, !0, !1), $h = /*#__PURE__*/ m("<svg><path d=\"M6 3v12\"></svg>", !1, !0, !1), eg = /*#__PURE__*/ m("<svg><path d=\"M18 15v6\"></svg>", !1, !0, !1), tg = /*#__PURE__*/ m("<svg><path d=\"M15 18h6\"></svg>", !1, !0, !1);
function ng(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Xh(),
			Zh(),
			Qh(),
			$h(),
			eg(),
			tg()
		];
	} }));
}
ng.displayName = "GitBranchPlus";
//#endregion
//#region src/icons/git-branch.tsx
var rg = /*#__PURE__*/ m("<svg><circle cx=6 cy=18 r=3></svg>", !1, !0, !1), ig = /*#__PURE__*/ m("<svg><circle cx=18 cy=6 r=3></svg>", !1, !0, !1), ag = /*#__PURE__*/ m("<svg><path d=\"M15 6c-3.33-.33-9.8 1-9 9\"></svg>", !1, !0, !1), og = /*#__PURE__*/ m("<svg><path d=\"M6 3v12\"></svg>", !1, !0, !1);
function sg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			rg(),
			ig(),
			ag(),
			og()
		];
	} }));
}
sg.displayName = "GitBranch";
//#endregion
//#region src/icons/git-commit-horizontal.tsx
var cg = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1), lg = /*#__PURE__*/ m("<svg><path d=\"M9 12H3\"></svg>", !1, !0, !1), ug = /*#__PURE__*/ m("<svg><path d=\"M15 12h6\"></svg>", !1, !0, !1);
function dg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			cg(),
			lg(),
			ug()
		];
	} }));
}
dg.displayName = "GitCommitHorizontal";
//#endregion
//#region src/icons/git-commit-vertical.tsx
var fg = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1), pg = /*#__PURE__*/ m("<svg><path d=\"M12 9V3\"></svg>", !1, !0, !1), mg = /*#__PURE__*/ m("<svg><path d=\"M12 15v6\"></svg>", !1, !0, !1);
function hg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			fg(),
			pg(),
			mg()
		];
	} }));
}
hg.displayName = "GitCommitVertical";
//#endregion
//#region src/icons/git-compare-arrows.tsx
var gg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 2 8)\"></svg>", !1, !0, !1), _g = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 16 22)\"></svg>", !1, !0, !1), vg = /*#__PURE__*/ m("<svg><path d=\"M19 16V9a2 2 0 0 0-2-2h-5\"></svg>", !1, !0, !1), yg = /*#__PURE__*/ m("<svg><path d=\"M5 8v7c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), bg = /*#__PURE__*/ m("<svg><path d=\"m9 14 2.96 2.96q.03.04 0 .08L9 20\"></svg>", !1, !0, !1), xg = /*#__PURE__*/ m("<svg><path d=\"M14.98 10 12 7.04a.05.05 0 0 1 0-.08L14.98 4\"></svg>", !1, !0, !1);
function Sg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gg(),
			_g(),
			vg(),
			yg(),
			bg(),
			xg()
		];
	} }));
}
Sg.displayName = "GitCompareArrows";
//#endregion
//#region src/icons/git-compare.tsx
var Cg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 3 9)\"></svg>", !1, !0, !1), wg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 15 21)\"></svg>", !1, !0, !1), Tg = /*#__PURE__*/ m("<svg><path d=\"M18 15V8a2 2 0 0 0-2-2h-3\"></svg>", !1, !0, !1), Eg = /*#__PURE__*/ m("<svg><path d=\"M6 9v7c0 1.1.9 2 2 2h3\"></svg>", !1, !0, !1);
function Dg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Cg(),
			wg(),
			Tg(),
			Eg()
		];
	} }));
}
Dg.displayName = "GitCompare";
//#endregion
//#region src/icons/git-fork.tsx
var Og = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 3 9)\"></svg>", !1, !0, !1), kg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 15 9)\"></svg>", !1, !0, !1), Ag = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 9 21)\"></svg>", !1, !0, !1), jg = /*#__PURE__*/ m("<svg><path d=\"M6 9v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9\"></svg>", !1, !0, !1), Mg = /*#__PURE__*/ m("<svg><path d=\"M12 15v-3\"></svg>", !1, !0, !1);
function Ng(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Og(),
			kg(),
			Ag(),
			jg(),
			Mg()
		];
	} }));
}
Ng.displayName = "GitFork";
//#endregion
//#region src/icons/git-merge.tsx
var Pg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 3 9)\"></svg>", !1, !0, !1), Fg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 15 21)\"></svg>", !1, !0, !1), Ig = /*#__PURE__*/ m("<svg><path d=\"M15 18c-3.33.33-9.8-1-9-9\"></svg>", !1, !0, !1), Lg = /*#__PURE__*/ m("<svg><path d=\"M6 21V9\"></svg>", !1, !0, !1);
function Rg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Pg(),
			Fg(),
			Ig(),
			Lg()
		];
	} }));
}
Rg.displayName = "GitMerge";
//#endregion
//#region src/icons/git-pull-request.tsx
var zg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 3 9)\"></svg>", !1, !0, !1), Bg = /*#__PURE__*/ m("<svg><circle cx=3 cy=3 r=3 transform=\"matrix(1 0 0 -1 15 21)\"></svg>", !1, !0, !1), Vg = /*#__PURE__*/ m("<svg><path d=\"M6 21V9\"></svg>", !1, !0, !1), Hg = /*#__PURE__*/ m("<svg><path d=\"M18 15V8a2 2 0 0 0-2-2h-3\"></svg>", !1, !0, !1);
function Ug(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zg(),
			Bg(),
			Vg(),
			Hg()
		];
	} }));
}
Ug.displayName = "GitPullRequest";
//#endregion
//#region src/icons/globe-check.tsx
var Wg = /*#__PURE__*/ m("<svg><path d=\"M11 2.05A10 10 0 1 0 22 12\"></svg>", !1, !0, !1), Gg = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), Kg = /*#__PURE__*/ m("<svg><path d=\"M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10s4-4.48 4-10\"></svg>", !1, !0, !1), qg = /*#__PURE__*/ m("<svg><path d=\"m13 6 2.62 1.75c.21.14.5.1.67-.1L20 3\"></svg>", !1, !0, !1);
function Jg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wg(),
			Gg(),
			Kg(),
			qg()
		];
	} }));
}
Jg.displayName = "GlobeCheck";
//#endregion
//#region src/icons/globe-lock.tsx
var Yg = /*#__PURE__*/ m("<svg><path d=\"M21.8 14A10 10 0 1 1 11 2.05\"></svg>", !1, !0, !1), Xg = /*#__PURE__*/ m("<svg><path d=\"M2 12h8\"></svg>", !1, !0, !1), Zg = /*#__PURE__*/ m("<svg><path d=\"M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10 1.64 0 3.38-3.47 4-7\"></svg>", !1, !0, !1), Qg = /*#__PURE__*/ m("<svg><rect width=8 height=5 x=13 y=6 rx=1></svg>", !1, !0, !1), $g = /*#__PURE__*/ m("<svg><path d=\"M15 5V4a2 2 0 1 1 4 0v1\"></svg>", !1, !0, !1);
function e_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yg(),
			Xg(),
			Zg(),
			Qg(),
			$g()
		];
	} }));
}
e_.displayName = "GlobeLock";
//#endregion
//#region src/icons/globe-off.tsx
var t_ = /*#__PURE__*/ m("<svg><path d=\"M21.17 16q.81-1.85.83-4A10 10 0 0 0 8 2.83\"></svg>", !1, !0, !1), n_ = /*#__PURE__*/ m("<svg><path d=\"M4.86 5A10 10 0 0 0 19 19.14\"></svg>", !1, !0, !1), r_ = /*#__PURE__*/ m("<svg><path d=\"M2 12h10\"></svg>", !1, !0, !1), i_ = /*#__PURE__*/ m("<svg><path d=\"M17 12h5\"></svg>", !1, !0, !1), a_ = /*#__PURE__*/ m("<svg><path d=\"M15.98 11c-.1-2.52-.62-4.74-1.36-6.36C13.76 2.7 12.76 2 12 2s-1.75.71-2.62 2.64\"></svg>", !1, !0, !1), o_ = /*#__PURE__*/ m("<svg><path d=\"M8.2 9Q8 10.42 8 12c0 2.93.54 5.53 1.38 7.36C10.25 21.3 11.25 22 12 22s1.75-.71 2.63-2.64c.42-.93.77-2.08 1.01-3.36\"></svg>", !1, !0, !1), s_ = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function c_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			t_(),
			n_(),
			r_(),
			i_(),
			a_(),
			o_(),
			s_()
		];
	} }));
}
c_.displayName = "GlobeOff";
//#endregion
//#region src/icons/globe-x.tsx
var l_ = /*#__PURE__*/ m("<svg><path d=\"M11 2.05A10 10 0 1 0 22 12\"></svg>", !1, !0, !1), u_ = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), d_ = /*#__PURE__*/ m("<svg><path d=\"M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10s4-4.48 4-10\"></svg>", !1, !0, !1), f_ = /*#__PURE__*/ m("<svg><path d=\"m15 3 5 5\"></svg>", !1, !0, !1), p_ = /*#__PURE__*/ m("<svg><path d=\"m15 8 5-5\"></svg>", !1, !0, !1);
function m_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			l_(),
			u_(),
			d_(),
			f_(),
			p_()
		];
	} }));
}
m_.displayName = "GlobeX";
//#endregion
//#region src/icons/globe.tsx
var h_ = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), g_ = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), __ = /*#__PURE__*/ m("<svg><path d=\"M12 2c.75 0 1.75.71 2.63 2.64A18 18 0 0 1 16 12c0 2.93-.54 5.53-1.37 7.36C13.75 21.3 12.75 22 12 22s-1.75-.71-2.62-2.64A18 18 0 0 1 8 12c0-2.93.54-5.53 1.38-7.36C10.25 2.7 11.25 2 12 2\"></svg>", !1, !0, !1);
function v_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			h_(),
			g_(),
			__()
		];
	} }));
}
v_.displayName = "Globe";
//#endregion
//#region src/icons/grid-2x2-plus.tsx
var y_ = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), b_ = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), x_ = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), S_ = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), C_ = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function w_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			y_(),
			b_(),
			x_(),
			S_(),
			C_()
		];
	} }));
}
w_.displayName = "Grid2x2Plus";
//#endregion
//#region src/icons/grid-2x2-x.tsx
var T_ = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), E_ = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), D_ = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), O_ = /*#__PURE__*/ m("<svg><path d=\"m16 16 6 5\"></svg>", !1, !0, !1), k_ = /*#__PURE__*/ m("<svg><path d=\"m16 21 6-5\"></svg>", !1, !0, !1);
function A_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			T_(),
			E_(),
			D_(),
			O_(),
			k_()
		];
	} }));
}
A_.displayName = "Grid2x2X";
//#endregion
//#region src/icons/grid-2x2.tsx
var j_ = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1), M_ = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), N_ = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1);
function P_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			j_(),
			M_(),
			N_()
		];
	} }));
}
P_.displayName = "Grid2x2";
//#endregion
//#region src/icons/grid-3x3-plus.tsx
var F_ = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), I_ = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), L_ = /*#__PURE__*/ m("<svg><path d=\"M15 3v12\"></svg>", !1, !0, !1), R_ = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), z_ = /*#__PURE__*/ m("<svg><path d=\"M3 15h12\"></svg>", !1, !0, !1), B_ = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), V_ = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function H_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			F_(),
			I_(),
			L_(),
			R_(),
			z_(),
			B_(),
			V_()
		];
	} }));
}
H_.displayName = "Grid3x3Plus";
//#endregion
//#region src/icons/grid-3x3.tsx
var U_ = /*#__PURE__*/ m("<svg><path d=\"M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), W_ = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), G_ = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1), K_ = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), q_ = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1);
function J_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			U_(),
			W_(),
			G_(),
			K_(),
			q_()
		];
	} }));
}
J_.displayName = "Grid3x3";
//#endregion
//#region src/icons/hammer.tsx
var Y_ = /*#__PURE__*/ m("<svg><path d=\"m12.5 7.5-8.15 9a2.12 2.12 0 0 0 3.15 2.85L16 10\"></svg>", !1, !0, !1), X_ = /*#__PURE__*/ m("<svg><path d=\"m19.6 11.88-2.5-1.97a.8.8 0 0 0-1.07.07.8.8 0 0 1-1.1.04l-2.3-1.99a.76.76 0 0 1-.05-1.11c.25-.25.3-.64.05-.88-1.2-1.18-3.84-1.63-5.58-2.33q0 0 0 0c5.97-3.43 9.4-.31 11.08 1.8.2.26.12.63-.17.8a.27.27 0 0 0-.04.44l3.58 2.91M18.7 13 22 9\"></svg>", !1, !0, !1);
function Z_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Y_(), X_()];
	} }));
}
Z_.displayName = "Hammer";
//#endregion
//#region src/icons/handbag.tsx
var Q_ = /*#__PURE__*/ m("<svg><path d=\"M20.25 21H3.75a1.5 1.5 0 0 1-1.48-1.73L3.74 9.7A2 2 0 0 1 5.72 8h12.56a2 2 0 0 1 1.98 1.7l1.47 9.57A1.5 1.5 0 0 1 20.25 21\"></svg>", !1, !0, !1), $_ = /*#__PURE__*/ m("<svg><path d=\"M16 12V6a4 4 0 0 0-8 0v6\"></svg>", !1, !0, !1);
function ev(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Q_(), $_()];
	} }));
}
ev.displayName = "Handbag";
//#endregion
//#region src/icons/hashtag.tsx
var tv = /*#__PURE__*/ m("<svg><path d=\"M4 9h16\"></svg>", !1, !0, !1), nv = /*#__PURE__*/ m("<svg><path d=\"M4 15h16\"></svg>", !1, !0, !1), rv = /*#__PURE__*/ m("<svg><path d=\"m7 21 3-18\"></svg>", !1, !0, !1), iv = /*#__PURE__*/ m("<svg><path d=\"m14 21 3-18\"></svg>", !1, !0, !1);
function av(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			tv(),
			nv(),
			rv(),
			iv()
		];
	} }));
}
av.displayName = "Hashtag";
//#endregion
//#region src/icons/hat-glasses.tsx
var ov = /*#__PURE__*/ m("<svg><path d=\"m19 11-.68-6.15a2 2 0 0 0-2.89-1.57L14.02 4a2 2 0 0 1-1.1.2L9 3.8H7.74a2 2 0 0 0-1.98 1.72L5 11\"></svg>", !1, !0, !1), sv = /*#__PURE__*/ m("<svg><path d=\"M2 11h20\"></svg>", !1, !0, !1), cv = /*#__PURE__*/ m("<svg><circle cx=7 cy=18 r=3></svg>", !1, !0, !1), lv = /*#__PURE__*/ m("<svg><circle cx=17 cy=18 r=3></svg>", !1, !0, !1), uv = /*#__PURE__*/ m("<svg><path d=\"M10 18.5c.5-.83 2-2 4 0\"></svg>", !1, !0, !1);
function dv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ov(),
			sv(),
			cv(),
			lv(),
			uv()
		];
	} }));
}
dv.displayName = "HatGlasses";
//#endregion
//#region src/icons/headphones.tsx
var fv = /*#__PURE__*/ m("<svg><path d=\"M3 13.59V19c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-3.41a2 2 0 0 0-2-2zm0 0V12a9 9 0 0 1 18 0v1.59m0 0V19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3.41c0-1.1.9-2 2-2z\"></svg>", !1, !0, !1);
function pv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return fv();
	} }));
}
pv.displayName = "Headphones";
//#endregion
//#region src/icons/heart-crack.tsx
var mv = /*#__PURE__*/ m("<svg><path d=\"m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16c.1.1.27.1.38 0l8.1-7.16a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7z\"></svg>", !1, !0, !1), hv = /*#__PURE__*/ m("<svg><path d=\"m12 8-1 1.98.02.03 1.96.98v.03l-1.97 1.97V13L13 15\"></svg>", !1, !0, !1);
function gv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [mv(), hv()];
	} }));
}
gv.displayName = "HeartCrack";
//#endregion
//#region src/icons/heart-off.tsx
var _v = /*#__PURE__*/ m("<svg><path d=\"m16.73 16.82-4.54 4.01c-.1.1-.27.1-.38 0l-8.1-7.16A5.07 5.07 0 0 1 5 5.25\"></svg>", !1, !0, !1), vv = /*#__PURE__*/ m("<svg><path d=\"m19 14.81 1.29-1.14a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7h-.08l-1.19-1.27a5 5 0 0 0-1.27-1\"></svg>", !1, !0, !1), yv = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function bv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_v(),
			vv(),
			yv()
		];
	} }));
}
bv.displayName = "HeartOff";
//#endregion
//#region src/icons/heart.tsx
var xv = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16c.1.1.27.1.38 0l8.1-7.16a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7z\"></svg>", !1, !0, !1), Sv = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function Cv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [xv(), Sv()];
	} }));
}
Cv.displayName = "Heart";
//#endregion
//#region src/icons/home.tsx
var wv = /*#__PURE__*/ m("<svg><path d=\"M3 9.47a1 1 0 0 1 .36-.77l8-6.67a1 1 0 0 1 1.28 0l8 6.67a1 1 0 0 1 .36.77V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), Tv = /*#__PURE__*/ m("<svg><path d=\"M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7\"></svg>", !1, !0, !1);
function Ev(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [wv(), Tv()];
	} }));
}
Ev.displayName = "Home";
//#endregion
//#region src/icons/image-minus.tsx
var Dv = /*#__PURE__*/ m("<svg><path d=\"M11 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-8\"></svg>", !1, !0, !1), Ov = /*#__PURE__*/ m("<svg><path d=\"m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14\"></svg>", !1, !0, !1), kv = /*#__PURE__*/ m("<svg><path d=\"M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), Av = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function jv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Dv(),
			Ov(),
			kv(),
			Av()
		];
	} }));
}
jv.displayName = "ImageMinus";
//#endregion
//#region src/icons/image-off.tsx
var Mv = /*#__PURE__*/ m("<svg><path d=\"M21 15V5a2 2 0 0 0-2-2H9\"></svg>", !1, !0, !1), Nv = /*#__PURE__*/ m("<svg><path d=\"M20.32 20.5A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .5-1.32\"></svg>", !1, !0, !1), Pv = /*#__PURE__*/ m("<svg><path d=\"m6 21 7-7\"></svg>", !1, !0, !1), Fv = /*#__PURE__*/ m("<svg><path d=\"m18 12 3 3\"></svg>", !1, !0, !1), Iv = /*#__PURE__*/ m("<svg><path d=\"M10.73 10a2 2 0 1 1-3.05-2.5\"></svg>", !1, !0, !1), Lv = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function Rv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Mv(),
			Nv(),
			Pv(),
			Fv(),
			Iv(),
			Lv()
		];
	} }));
}
Rv.displayName = "ImageOff";
//#endregion
//#region src/icons/image-plus.tsx
var zv = /*#__PURE__*/ m("<svg><path d=\"M12 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-7\"></svg>", !1, !0, !1), Bv = /*#__PURE__*/ m("<svg><path d=\"m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14\"></svg>", !1, !0, !1), Vv = /*#__PURE__*/ m("<svg><path d=\"M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), Hv = /*#__PURE__*/ m("<svg><path d=\"M19 2v6\"></svg>", !1, !0, !1), Uv = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function Wv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zv(),
			Bv(),
			Vv(),
			Hv(),
			Uv()
		];
	} }));
}
Wv.displayName = "ImagePlus";
//#endregion
//#region src/icons/image.tsx
var Gv = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), Kv = /*#__PURE__*/ m("<svg><path d=\"m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14\"></svg>", !1, !0, !1), qv = /*#__PURE__*/ m("<svg><circle cx=9 cy=9 r=2></svg>", !1, !0, !1);
function Jv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gv(),
			Kv(),
			qv()
		];
	} }));
}
Jv.displayName = "Image";
//#endregion
//#region src/icons/images.tsx
var Yv = /*#__PURE__*/ m("<svg><rect width=14 height=14 x=8 y=2 rx=2></svg>", !1, !0, !1), Xv = /*#__PURE__*/ m("<svg><path d=\"m11 16 4.98-4.87a2 2 0 0 1 1.8-.53l4.22.84\"></svg>", !1, !0, !1), Zv = /*#__PURE__*/ m("<svg><circle cx=13 cy=7 r=1></svg>", !1, !0, !1), Qv = /*#__PURE__*/ m("<svg><path d=\"M3.47 8C2.66 8 2 8.66 2 9.47V20c0 1.1.9 2 2 2h10.44c.86 0 1.56-.7 1.56-1.56\"></svg>", !1, !0, !1);
function $v(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yv(),
			Xv(),
			Zv(),
			Qv()
		];
	} }));
}
$v.displayName = "Images";
//#endregion
//#region src/icons/infinity.tsx
var ey = /*#__PURE__*/ m("<svg><path d=\"M12 12 7.73 8.73C5.32 6.88 2 8.77 2 12s3.08 4.97 5.5 3.12zm0 0 4.5-3.27C18.92 6.88 22 8.77 22 12s-3.32 5.12-5.73 3.27z\"></svg>", !1, !0, !1);
function ty(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return ey();
	} }));
}
ty.displayName = "Infinity";
//#endregion
//#region src/icons/info.tsx
var ny = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), ry = /*#__PURE__*/ m("<svg><path d=\"M12 12v4\"></svg>", !1, !0, !1), iy = /*#__PURE__*/ m("<svg><circle cx=12 cy=8 r=0.5></svg>", !1, !0, !1);
function ay(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ny(),
			ry(),
			iy()
		];
	} }));
}
ay.displayName = "Info";
//#endregion
//#region src/icons/key-round.tsx
var oy = /*#__PURE__*/ m("<svg><path d=\"M10 8q0 1.2.45 2.28c.18.43.1.95-.24 1.26L2.33 18.7a1 1 0 0 0-.33.74V21a1 1 0 0 0 1 1h2.98Q6 22 6 21.98v-1.96q0-.02.02-.02h2.96Q9 20 9 19.98v-2.96q0-.02.02-.02h1.53a1 1 0 0 0 .75-.33l2.25-2.51c.27-.3.7-.4 1.1-.31A6.02 6.02 0 0 0 22 8a6 6 0 0 0-12 0\"></svg>", !1, !0, !1), sy = /*#__PURE__*/ m("<svg><circle cx=16.5 cy=7.5 r=0.5></svg>", !1, !0, !1);
function cy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [oy(), sy()];
	} }));
}
cy.displayName = "KeyRound";
//#endregion
//#region src/icons/key.tsx
var ly = /*#__PURE__*/ m("<svg><circle cx=7.5 cy=15.5 r=5.5></svg>", !1, !0, !1), uy = /*#__PURE__*/ m("<svg><path d=\"M11.5 11.5 20 2\"></svg>", !1, !0, !1), dy = /*#__PURE__*/ m("<svg><path d=\"m18.64 4.1 2.18 1.84a1 1 0 0 1 .08 1.45l-2.27 2.44a1 1 0 0 1-1.35.1l-1.99-1.55\"></svg>", !1, !0, !1);
function fy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ly(),
			uy(),
			dy()
		];
	} }));
}
fy.displayName = "Key";
//#endregion
//#region src/icons/laptop.tsx
var py = /*#__PURE__*/ m("<svg><path d=\"M4.22 12V7c0-1.1.9-2 2-2h11.56a2 2 0 0 1 2 2v8.74a1 1 0 0 0 .12.49l1.44 2.58a.8.8 0 0 1-.7 1.19H3.36a.8.8 0 0 1-.7-1.19l1.44-2.58a1 1 0 0 0 .12-.49z\"></svg>", !1, !0, !1), my = /*#__PURE__*/ m("<svg><path d=\"M5 16h14\"></svg>", !1, !0, !1);
function hy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [py(), my()];
	} }));
}
hy.displayName = "Laptop";
//#endregion
//#region src/icons/laugh-wink.tsx
var gy = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), _y = /*#__PURE__*/ m("<svg><path d=\"M8 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), vy = /*#__PURE__*/ m("<svg><path d=\"M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14Z\"></svg>", !1, !0, !1), yy = /*#__PURE__*/ m("<svg><path d=\"M13 9c.6-.94 1.69-1.68 3 0\"></svg>", !1, !0, !1);
function by(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gy(),
			_y(),
			vy(),
			yy()
		];
	} }));
}
by.displayName = "LaughWink";
//#endregion
//#region src/icons/laugh.tsx
var xy = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Sy = /*#__PURE__*/ m("<svg><path d=\"M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14Z\"></svg>", !1, !0, !1), Cy = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), wy = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function Ty(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xy(),
			Sy(),
			Cy(),
			wy()
		];
	} }));
}
Ty.displayName = "Laugh";
//#endregion
//#region src/icons/layers.tsx
var Ey = /*#__PURE__*/ m("<svg><path d=\"m3.25 6.37 7.86-3.92a2 2 0 0 1 1.78 0l7.86 3.92a.7.7 0 0 1 0 1.26l-7.86 3.92a2 2 0 0 1-1.78 0L3.25 7.63a.7.7 0 0 1 0-1.26Z\"></svg>", !1, !0, !1), Dy = /*#__PURE__*/ m("<svg><path d=\"M2 12v.17c0 .28.16.53.42.64l8.78 3.84a2 2 0 0 0 1.6 0l8.78-3.84a.7.7 0 0 0 .42-.64V12\"></svg>", !1, !0, !1), Oy = /*#__PURE__*/ m("<svg><path d=\"M2 17v.17c0 .28.16.53.42.64l8.78 3.84a2 2 0 0 0 1.6 0l8.78-3.84a.7.7 0 0 0 .42-.64V17\"></svg>", !1, !0, !1);
function ky(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ey(),
			Dy(),
			Oy()
		];
	} }));
}
ky.displayName = "Layers";
//#endregion
//#region src/icons/layout-dashboard.tsx
var Ay = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=3 y=3 rx=0.5></svg>", !1, !0, !1), jy = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=14 y=12 rx=0.5></svg>", !1, !0, !1), My = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=3 y=16 rx=0.5></svg>", !1, !0, !1), Ny = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=14 y=3 rx=0.5></svg>", !1, !0, !1);
function Py(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ay(),
			jy(),
			My(),
			Ny()
		];
	} }));
}
Py.displayName = "LayoutDashboard";
//#endregion
//#region src/icons/layout-grid.tsx
var Fy = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=3 rx=0.5></svg>", !1, !0, !1), Iy = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=3 rx=0.5></svg>", !1, !0, !1), Ly = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=14 rx=0.5></svg>", !1, !0, !1), Ry = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=14 rx=0.5></svg>", !1, !0, !1);
function zy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Fy(),
			Iy(),
			Ly(),
			Ry()
		];
	} }));
}
zy.displayName = "LayoutGrid";
//#endregion
//#region src/icons/layout-kanban.tsx
var By = /*#__PURE__*/ m("<svg><path d=\"M4 4h6\"></svg>", !1, !0, !1), Vy = /*#__PURE__*/ m("<svg><path d=\"M14 4h6\"></svg>", !1, !0, !1), Hy = /*#__PURE__*/ m("<svg><rect width=6 height=12 x=4 y=8 rx=2></svg>", !1, !0, !1), Uy = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=14 y=8 rx=2></svg>", !1, !0, !1);
function Wy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			By(),
			Vy(),
			Hy(),
			Uy()
		];
	} }));
}
Wy.displayName = "LayoutKanban";
//#endregion
//#region src/icons/layout-list.tsx
var Gy = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=3 rx=1></svg>", !1, !0, !1), Ky = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=14 rx=1></svg>", !1, !0, !1), qy = /*#__PURE__*/ m("<svg><path d=\"M14 20h7\"></svg>", !1, !0, !1), Jy = /*#__PURE__*/ m("<svg><path d=\"M14 15h7\"></svg>", !1, !0, !1), Yy = /*#__PURE__*/ m("<svg><path d=\"M14 9h7\"></svg>", !1, !0, !1), Xy = /*#__PURE__*/ m("<svg><path d=\"M14 4h7\"></svg>", !1, !0, !1);
function Zy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gy(),
			Ky(),
			qy(),
			Jy(),
			Yy(),
			Xy()
		];
	} }));
}
Zy.displayName = "LayoutList";
//#endregion
//#region src/icons/layout-panel-left.tsx
var Qy = /*#__PURE__*/ m("<svg><path d=\"M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), $y = /*#__PURE__*/ m("<svg><path d=\"M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), eb = /*#__PURE__*/ m("<svg><rect width=7 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1);
function tb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Qy(),
			$y(),
			eb()
		];
	} }));
}
tb.displayName = "LayoutPanelLeft";
//#endregion
//#region src/icons/layout-panel-right.tsx
var nb = /*#__PURE__*/ m("<svg><path d=\"M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), rb = /*#__PURE__*/ m("<svg><path d=\"M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), ib = /*#__PURE__*/ m("<svg><path d=\"M21 3h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function ab(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nb(),
			rb(),
			ib()
		];
	} }));
}
ab.displayName = "LayoutPanelRight";
//#endregion
//#region src/icons/layout-panel-top.tsx
var ob = /*#__PURE__*/ m("<svg><path d=\"M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), sb = /*#__PURE__*/ m("<svg><path d=\"M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), cb = /*#__PURE__*/ m("<svg><rect width=18 height=7 x=3 y=3 rx=1></svg>", !1, !0, !1);
function lb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ob(),
			sb(),
			cb()
		];
	} }));
}
lb.displayName = "LayoutPanelTop";
//#endregion
//#region src/icons/layout-template.tsx
var ub = /*#__PURE__*/ m("<svg><path d=\"M10.71 14H4.3c-.72 0-1.3.45-1.3 1v5c0 .55.58 1 1.29 1h6.42c.71 0 1.29-.45 1.29-1v-5c0-.55-.58-1-1.29-1\"></svg>", !1, !0, !1), db = /*#__PURE__*/ m("<svg><path d=\"M20.29 14H16.7c-.39 0-.71.45-.71 1v5c0 .55.32 1 .71 1h3.58c.39 0 .71-.45.71-1v-5c0-.55-.32-1-.71-1Z\"></svg>", !1, !0, !1), fb = /*#__PURE__*/ m("<svg><path d=\"M20 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function pb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ub(),
			db(),
			fb()
		];
	} }));
}
pb.displayName = "LayoutTemplate";
//#endregion
//#region src/icons/link-2-off.tsx
var mb = /*#__PURE__*/ m("<svg><path d=\"M17 17a5 5 0 0 0 0-10h-1\"></svg>", !1, !0, !1), hb = /*#__PURE__*/ m("<svg><path d=\"M8 17H7A5 5 0 0 1 7 7\"></svg>", !1, !0, !1), gb = /*#__PURE__*/ m("<svg><path d=\"M7 12h5\"></svg>", !1, !0, !1), _b = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function $(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mb(),
			hb(),
			gb(),
			_b()
		];
	} }));
}
$.displayName = "Link2Off";
//#endregion
//#region src/icons/link-2.tsx
var vb = /*#__PURE__*/ m("<svg><path d=\"M8 7H7a5 5 0 0 0 0 10h1m8-10h1a5 5 0 0 1 0 10h-1\"></svg>", !1, !0, !1), yb = /*#__PURE__*/ m("<svg><path d=\"M7 12h9\"></svg>", !1, !0, !1);
function bb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [vb(), yb()];
	} }));
}
bb.displayName = "Link2";
//#endregion
//#region src/icons/link-off.tsx
var xb = /*#__PURE__*/ m("<svg><path d=\"m16 15 3.75-3.72a4.99 4.99 0 1 0-7.04-7.06\"></svg>", !1, !0, !1), Sb = /*#__PURE__*/ m("<svg><path d=\"m8 9-3.75 3.72a4.99 4.99 0 1 0 7.04 7.06\"></svg>", !1, !0, !1), Cb = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function wb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xb(),
			Sb(),
			Cb()
		];
	} }));
}
wb.displayName = "LinkOff";
//#endregion
//#region src/icons/link.tsx
var Tb = /*#__PURE__*/ m("<svg><path d=\"M12.7 4.22a5 5 0 0 1 7.08 7.07l-2.83 2.83a5 5 0 0 1-7.07 0\"></svg>", !1, !0, !1), Eb = /*#__PURE__*/ m("<svg><path d=\"M11.3 19.78a5 5 0 1 1-7.08-7.07l2.83-2.83a5 5 0 0 1 7.07 0\"></svg>", !1, !0, !1);
function Db(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Tb(), Eb()];
	} }));
}
Db.displayName = "Link";
//#endregion
//#region src/icons/list-chevrons-down-up.tsx
var Ob = /*#__PURE__*/ m("<svg><path d=\"m14 19 3.25-2.9a.4.4 0 0 1 .5 0L21 19\"></svg>", !1, !0, !1), kb = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), Ab = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), jb = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1), Mb = /*#__PURE__*/ m("<svg><path d=\"m14 5 3.25 2.9c.14.13.36.13.5 0L21 5\"></svg>", !1, !0, !1);
function Nb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ob(),
			kb(),
			Ab(),
			jb(),
			Mb()
		];
	} }));
}
Nb.displayName = "ListChevronsDownUp";
//#endregion
//#region src/icons/list-chevrons-up-down.tsx
var Pb = /*#__PURE__*/ m("<svg><path d=\"m14 8 3.25-2.9a.4.4 0 0 1 .5 0L21 8\"></svg>", !1, !0, !1), Fb = /*#__PURE__*/ m("<svg><path d=\"m14 16 3.25 2.9c.14.13.36.13.5 0L21 16\"></svg>", !1, !0, !1), Ib = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), Lb = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), Rb = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1);
function zb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Pb(),
			Fb(),
			Ib(),
			Lb(),
			Rb()
		];
	} }));
}
zb.displayName = "ListChevronsUpDown";
//#endregion
//#region src/icons/list-filter.tsx
var Bb = /*#__PURE__*/ m("<svg><path d=\"M2 5h20\"></svg>", !1, !0, !1), Vb = /*#__PURE__*/ m("<svg><path d=\"M6 12h12\"></svg>", !1, !0, !1), Hb = /*#__PURE__*/ m("<svg><path d=\"M10 19h4\"></svg>", !1, !0, !1);
function Ub(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Bb(),
			Vb(),
			Hb()
		];
	} }));
}
Ub.displayName = "ListFilter";
//#endregion
//#region src/icons/list-ordered.tsx
var Wb = /*#__PURE__*/ m("<svg><path d=\"M13 5h8\"></svg>", !1, !0, !1), Gb = /*#__PURE__*/ m("<svg><path d=\"M13 12h8\"></svg>", !1, !0, !1), Kb = /*#__PURE__*/ m("<svg><path d=\"M13 19h8\"></svg>", !1, !0, !1), qb = /*#__PURE__*/ m("<svg><path d=\"M4.5 4h1c.28 0 .5.22.5.5V10m0 0H4.5M6 10h1.5\"></svg>", !1, !0, !1), Jb = /*#__PURE__*/ m("<svg><path d=\"m4.5 15.29.63-.54a1.63 1.63 0 1 1 2.12 2.47L6 18.29l-.97.83a.5.5 0 0 0 .32.88H9\"></svg>", !1, !0, !1);
function Yb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wb(),
			Gb(),
			Kb(),
			qb(),
			Jb()
		];
	} }));
}
Yb.displayName = "ListOrdered";
//#endregion
//#region src/icons/list-todo.tsx
var Xb = /*#__PURE__*/ m("<svg><path d=\"M13 5h8\"></svg>", !1, !0, !1), Zb = /*#__PURE__*/ m("<svg><path d=\"M13 12h8\"></svg>", !1, !0, !1), Qb = /*#__PURE__*/ m("<svg><path d=\"M13 19h8\"></svg>", !1, !0, !1), $b = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=3 y=4 rx=1></svg>", !1, !0, !1), ex = /*#__PURE__*/ m("<svg><path d=\"m3 18 1.65 1.65c.2.2.5.2.7 0L9 16\"></svg>", !1, !0, !1);
function tx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Xb(),
			Zb(),
			Qb(),
			$b(),
			ex()
		];
	} }));
}
tx.displayName = "ListTodo";
//#endregion
//#region src/icons/list.tsx
var nx = /*#__PURE__*/ m("<svg><circle cx=3 cy=5 r=1></svg>", !1, !0, !1), rx = /*#__PURE__*/ m("<svg><circle cx=3 cy=12 r=1></svg>", !1, !0, !1), ix = /*#__PURE__*/ m("<svg><circle cx=3 cy=19 r=1></svg>", !1, !0, !1), ax = /*#__PURE__*/ m("<svg><path d=\"M8 5h13\"></svg>", !1, !0, !1), ox = /*#__PURE__*/ m("<svg><path d=\"M8 12h13\"></svg>", !1, !0, !1), sx = /*#__PURE__*/ m("<svg><path d=\"M8 19h13\"></svg>", !1, !0, !1);
function cx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nx(),
			rx(),
			ix(),
			ax(),
			ox(),
			sx()
		];
	} }));
}
cx.displayName = "List";
//#endregion
//#region src/icons/lock-check.tsx
var lx = /*#__PURE__*/ m("<svg><path d=\"M21 13v-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h8\"></svg>", !1, !0, !1), ux = /*#__PURE__*/ m("<svg><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></svg>", !1, !0, !1), dx = /*#__PURE__*/ m("<svg><path d=\"m15 19.12 1.98 1.98q.14.12.28 0L21 17\"></svg>", !1, !0, !1);
function fx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			lx(),
			ux(),
			dx()
		];
	} }));
}
fx.displayName = "LockCheck";
//#endregion
//#region src/icons/lock-keyhole.tsx
var px = /*#__PURE__*/ m("<svg><path d=\"M20 10H4c-.55 0-1 .49-1 1.1v9.8c0 .61.45 1.1 1 1.1h16c.55 0 1-.49 1-1.1v-9.8c0-.61-.45-1.1-1-1.1\"></svg>", !1, !0, !1), mx = /*#__PURE__*/ m("<svg><path d=\"M7 10V6.44C7 4 9.24 2 12 2s5 1.99 5 4.44V10\"></svg>", !1, !0, !1), hx = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=1></svg>", !1, !0, !1);
function gx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			px(),
			mx(),
			hx()
		];
	} }));
}
gx.displayName = "LockKeyhole";
//#endregion
//#region src/icons/lock-open-keyhole.tsx
var _x = /*#__PURE__*/ m("<svg><path d=\"M20 10H4c-.55 0-1 .49-1 1.1v9.8c0 .61.45 1.1 1 1.1h16c.55 0 1-.49 1-1.1v-9.8c0-.61-.45-1.1-1-1.1\"></svg>", !1, !0, !1), vx = /*#__PURE__*/ m("<svg><path d=\"M16.87 5c-.52-1.87-2.5-3-4.87-3-2.76 0-5 1.99-5 4.44V10\"></svg>", !1, !0, !1), yx = /*#__PURE__*/ m("<svg><path d=\"M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1);
function bx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_x(),
			vx(),
			yx()
		];
	} }));
}
bx.displayName = "LockOpenKeyhole";
//#endregion
//#region src/icons/lock-open.tsx
var xx = /*#__PURE__*/ m("<svg><path d=\"M20 11H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Sx = /*#__PURE__*/ m("<svg><path d=\"M17 6a5.1 5.1 0 0 0-5-4 5 5 0 0 0-5 5v4\"></svg>", !1, !0, !1);
function Cx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [xx(), Sx()];
	} }));
}
Cx.displayName = "LockOpen";
//#endregion
//#region src/icons/lock-square.tsx
var wx = /*#__PURE__*/ m("<svg><path d=\"M16.44 11H7.56a.55.55 0 0 0-.56.55v4.9c0 .3.25.55.56.55h8.88c.31 0 .56-.24.56-.55v-4.9c0-.3-.25-.55-.56-.55\"></svg>", !1, !0, !1), Tx = /*#__PURE__*/ m("<svg><path d=\"M10 11V9.22C10 8 10.9 7 12 7s2 1 2 2.22V11\"></svg>", !1, !0, !1), Ex = /*#__PURE__*/ m("<svg><path d=\"M19 21H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2\"></svg>", !1, !0, !1);
function Dx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			wx(),
			Tx(),
			Ex()
		];
	} }));
}
Dx.displayName = "LockSquare";
//#endregion
//#region src/icons/lock.tsx
var Ox = /*#__PURE__*/ m("<svg><rect width=18 height=11 x=3 y=11 rx=1></svg>", !1, !0, !1), kx = /*#__PURE__*/ m("<svg><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></svg>", !1, !0, !1);
function Ax(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ox(), kx()];
	} }));
}
Ax.displayName = "Lock";
//#endregion
//#region src/icons/log-in.tsx
var jx = /*#__PURE__*/ m("<svg><path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></svg>", !1, !0, !1), Mx = /*#__PURE__*/ m("<svg><path d=\"m10 7 5.08 4.23a1 1 0 0 1 0 1.54L10 17\"></svg>", !1, !0, !1), Nx = /*#__PURE__*/ m("<svg><path d=\"M3 12h11\"></svg>", !1, !0, !1);
function Px(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jx(),
			Mx(),
			Nx()
		];
	} }));
}
Px.displayName = "LogIn";
//#endregion
//#region src/icons/log-out.tsx
var Fx = /*#__PURE__*/ m("<svg><path d=\"M9 21H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h4\"></svg>", !1, !0, !1), Ix = /*#__PURE__*/ m("<svg><path d=\"m16 7 5.08 4.23a1 1 0 0 1 0 1.54L16 17\"></svg>", !1, !0, !1), Lx = /*#__PURE__*/ m("<svg><path d=\"M9 12h11\"></svg>", !1, !0, !1);
function Rx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Fx(),
			Ix(),
			Lx()
		];
	} }));
}
Rx.displayName = "LogOut";
//#endregion
//#region src/icons/mail-check.tsx
var zx = /*#__PURE__*/ m("<svg><path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7\"></svg>", !1, !0, !1), Bx = /*#__PURE__*/ m("<svg><path d=\"m15 19 2.99 2 .02-.01L22 17\"></svg>", !1, !0, !1), Vx = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function Hx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zx(),
			Bx(),
			Vx()
		];
	} }));
}
Hx.displayName = "MailCheck";
//#endregion
//#region src/icons/mail-minus.tsx
var Ux = /*#__PURE__*/ m("<svg><path d=\"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"></svg>", !1, !0, !1), Wx = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), Gx = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function Kx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ux(),
			Wx(),
			Gx()
		];
	} }));
}
Kx.displayName = "MailMinus";
//#endregion
//#region src/icons/mail-open.tsx
var qx = /*#__PURE__*/ m("<svg><path d=\"M2 10.9a2 2 0 0 1 .66-1.5l8-7.2a2 2 0 0 1 2.68 0l8 7.2a2 2 0 0 1 .66 1.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Jx = /*#__PURE__*/ m("<svg><path d=\"m3 10 7.9 5.26a2 2 0 0 0 2.2 0L21 10\"></svg>", !1, !0, !1);
function Yx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [qx(), Jx()];
	} }));
}
Yx.displayName = "MailOpen";
//#endregion
//#region src/icons/mail-plus.tsx
var Xx = /*#__PURE__*/ m("<svg><path d=\"M12 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v6\"></svg>", !1, !0, !1), Zx = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), Qx = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), $x = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function eS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Xx(),
			Zx(),
			Qx(),
			$x()
		];
	} }));
}
eS.displayName = "MailPlus";
//#endregion
//#region src/icons/mail-x.tsx
var tS = /*#__PURE__*/ m("<svg><path d=\"M13 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v7\"></svg>", !1, !0, !1), nS = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1), rS = /*#__PURE__*/ m("<svg><path d=\"m17 17 4 4\"></svg>", !1, !0, !1), iS = /*#__PURE__*/ m("<svg><path d=\"m17 21 4-4\"></svg>", !1, !0, !1);
function aS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			tS(),
			nS(),
			rS(),
			iS()
		];
	} }));
}
aS.displayName = "MailX";
//#endregion
//#region src/icons/mail.tsx
var oS = /*#__PURE__*/ m("<svg><path d=\"M2 18V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2\"></svg>", !1, !0, !1), sS = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function cS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [oS(), sS()];
	} }));
}
cS.displayName = "Mail";
//#endregion
//#region src/icons/map-pin-check.tsx
var lS = /*#__PURE__*/ m("<svg><path d=\"m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64q.04.05.08 0\"></svg>", !1, !0, !1), uS = /*#__PURE__*/ m("<svg><path d=\"m10 9.5 1.56 1.46q.04.03.07 0L14 8\"></svg>", !1, !0, !1);
function dS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [lS(), uS()];
	} }));
}
dS.displayName = "MapPinCheck";
//#endregion
//#region src/icons/map-pin.tsx
var fS = /*#__PURE__*/ m("<svg><path d=\"m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64q.04.05.08 0\"></svg>", !1, !0, !1), pS = /*#__PURE__*/ m("<svg><circle cx=12 cy=9 r=2></svg>", !1, !0, !1);
function mS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [fS(), pS()];
	} }));
}
mS.displayName = "MapPin";
//#endregion
//#region src/icons/map-pinned.tsx
var hS = /*#__PURE__*/ m("<svg><path d=\"m12.04 12.94 3.2-5.03a3.84 3.84 0 1 0-6.48 0l3.2 5.03q.04.04.08 0\"></svg>", !1, !0, !1), gS = /*#__PURE__*/ m("<svg><circle cx=12 cy=5.5 r=0.5></svg>", !1, !0, !1), _S = /*#__PURE__*/ m("<svg><path d=\"m3 21 5.19-1.78a2 2 0 0 1 1.27-.01l4.83 1.59a2 2 0 0 0 1.25 0L21 19\"></svg>", !1, !0, !1), vS = /*#__PURE__*/ m("<svg><path d=\"M21 11v8\"></svg>", !1, !0, !1), yS = /*#__PURE__*/ m("<svg><path d=\"M3 14v7\"></svg>", !1, !0, !1), bS = /*#__PURE__*/ m("<svg><path d=\"M9 11v8\"></svg>", !1, !0, !1), xS = /*#__PURE__*/ m("<svg><path d=\"M15 14v6\"></svg>", !1, !0, !1), SS = /*#__PURE__*/ m("<svg><path d=\"M9 10.5 3 14\"></svg>", !1, !0, !1), CS = /*#__PURE__*/ m("<svg><path d=\"m13 12.5 1.19.82a2 2 0 0 0 2.05.13L21 11\"></svg>", !1, !0, !1);
function wS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hS(),
			gS(),
			_S(),
			vS(),
			yS(),
			bS(),
			xS(),
			SS(),
			CS()
		];
	} }));
}
wS.displayName = "MapPinned";
//#endregion
//#region src/icons/map.tsx
var TS = /*#__PURE__*/ m("<svg><path d=\"m3 8 4.74-3.26a2 2 0 0 1 2.2-.04l4.12 2.6a2 2 0 0 0 2.2-.04L21 4\"></svg>", !1, !0, !1), ES = /*#__PURE__*/ m("<svg><path d=\"m3 20 4.93-2.54a2 2 0 0 1 1.8-.01l4.3 2.11a2 2 0 0 0 1.77 0L21 17\"></svg>", !1, !0, !1), DS = /*#__PURE__*/ m("<svg><path d=\"M21 4v13\"></svg>", !1, !0, !1), OS = /*#__PURE__*/ m("<svg><path d=\"M3 8v12\"></svg>", !1, !0, !1), kS = /*#__PURE__*/ m("<svg><path d=\"M9 5v12\"></svg>", !1, !0, !1), AS = /*#__PURE__*/ m("<svg><path d=\"M15 8v11\"></svg>", !1, !0, !1);
function jS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			TS(),
			ES(),
			DS(),
			OS(),
			kS(),
			AS()
		];
	} }));
}
jS.displayName = "Map";
//#endregion
//#region src/icons/meh-blank.tsx
var MS = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), NS = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), PS = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function FS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			MS(),
			NS(),
			PS()
		];
	} }));
}
FS.displayName = "MehBlank";
//#endregion
//#region src/icons/meh.tsx
var IS = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), LS = /*#__PURE__*/ m("<svg><path d=\"M7 15h10\"></svg>", !1, !0, !1), RS = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), zS = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function BS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			IS(),
			LS(),
			RS(),
			zS()
		];
	} }));
}
BS.displayName = "Meh";
//#endregion
//#region src/icons/menu-horizontal.tsx
var VS = /*#__PURE__*/ m("<svg><circle cx=5 cy=12 r=1></svg>", !1, !0, !1), HS = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=1></svg>", !1, !0, !1), US = /*#__PURE__*/ m("<svg><circle cx=19 cy=12 r=1></svg>", !1, !0, !1);
function WS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			VS(),
			HS(),
			US()
		];
	} }));
}
WS.displayName = "MenuHorizontal";
//#endregion
//#region src/icons/menu-vertical.tsx
var GS = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=4 rx=1></svg>", !1, !0, !1), KS = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=11 rx=1></svg>", !1, !0, !1), qS = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=18 rx=1></svg>", !1, !0, !1);
function JS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			GS(),
			KS(),
			qS()
		];
	} }));
}
JS.displayName = "MenuVertical";
//#endregion
//#region src/icons/menu.tsx
var YS = /*#__PURE__*/ m("<svg><path d=\"M4 5h15\"></svg>", !1, !0, !1), XS = /*#__PURE__*/ m("<svg><path d=\"M4 12h15\"></svg>", !1, !0, !1), ZS = /*#__PURE__*/ m("<svg><path d=\"M4 19h15\"></svg>", !1, !0, !1);
function QS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			YS(),
			XS(),
			ZS()
		];
	} }));
}
QS.displayName = "Menu";
//#endregion
//#region src/icons/message-square-more.tsx
var $S = /*#__PURE__*/ m("<svg><path d=\"M14 19h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.6c0 .16.19.26.32.16L5.2 19.6A3 3 0 0 1 7 19z\"></svg>", !1, !0, !1), eC = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=1></svg>", !1, !0, !1), tC = /*#__PURE__*/ m("<svg><circle cx=12 cy=10 r=1></svg>", !1, !0, !1), nC = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=1></svg>", !1, !0, !1);
function rC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			$S(),
			eC(),
			tC(),
			nC()
		];
	} }));
}
rC.displayName = "MessageSquareMore";
//#endregion
//#region src/icons/message-square-plus.tsx
var iC = /*#__PURE__*/ m("<svg><path d=\"M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z\"></svg>", !1, !0, !1), aC = /*#__PURE__*/ m("<svg><path d=\"M12 8v6\"></svg>", !1, !0, !1), oC = /*#__PURE__*/ m("<svg><path d=\"M9 11h6\"></svg>", !1, !0, !1);
function sC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			iC(),
			aC(),
			oC()
		];
	} }));
}
sC.displayName = "MessageSquarePlus";
//#endregion
//#region src/icons/message-square-text.tsx
var cC = /*#__PURE__*/ m("<svg><path d=\"M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z\"></svg>", !1, !0, !1), lC = /*#__PURE__*/ m("<svg><path d=\"M7 7h8\"></svg>", !1, !0, !1), uC = /*#__PURE__*/ m("<svg><path d=\"M7 15h6\"></svg>", !1, !0, !1), dC = /*#__PURE__*/ m("<svg><path d=\"M7 11h10\"></svg>", !1, !0, !1);
function fC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			cC(),
			lC(),
			uC(),
			dC()
		];
	} }));
}
fC.displayName = "MessageSquareText";
//#endregion
//#region src/icons/message-square.tsx
var pC = /*#__PURE__*/ m("<svg><path d=\"M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z\"></svg>", !1, !0, !1);
function mC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return pC();
	} }));
}
mC.displayName = "MessageSquare";
//#endregion
//#region src/icons/mic-off.tsx
var hC = /*#__PURE__*/ m("<svg><path d=\"M9.17 4A3 3 0 0 1 15 5v5\"></svg>", !1, !0, !1), gC = /*#__PURE__*/ m("<svg><path d=\"M14 14.24A3 3 0 0 1 9 12V9\"></svg>", !1, !0, !1), _C = /*#__PURE__*/ m("<svg><path d=\"M18.84 13.5q.16-.73.16-1.5v-2\"></svg>", !1, !0, !1), vC = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m4-1.25A7 7 0 0 1 12 19m0 0v3\"></svg>", !1, !0, !1), yC = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function bC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hC(),
			gC(),
			_C(),
			vC(),
			yC()
		];
	} }));
}
bC.displayName = "MicOff";
//#endregion
//#region src/icons/mic-vintage.tsx
var xC = /*#__PURE__*/ m("<svg><path d=\"M9 12a3 3 0 1 0 6 0V5a3 3 0 1 0-6 0m0 7V8.5M9 12h2M9 5v3.5M9 5h2M9 8.5h2\"></svg>", !1, !0, !1), SC = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7v-2m-7 9v3\"></svg>", !1, !0, !1);
function CC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [xC(), SC()];
	} }));
}
CC.displayName = "MicVintage";
//#endregion
//#region src/icons/mic.tsx
var wC = /*#__PURE__*/ m("<svg><rect width=6 height=13 x=9 y=2 rx=3></svg>", !1, !0, !1), TC = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m7-9v2a7 7 0 0 1-7 7m0 0v3\"></svg>", !1, !0, !1);
function EC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [wC(), TC()];
	} }));
}
EC.displayName = "Mic";
//#endregion
//#region src/icons/minus.tsx
var DC = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
function OC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return DC();
	} }));
}
OC.displayName = "Minus";
//#endregion
//#region src/icons/monitor.tsx
var kC = /*#__PURE__*/ m("<svg><rect width=20 height=14 x=2 y=3 rx=3></svg>", !1, !0, !1), AC = /*#__PURE__*/ m("<svg><path d=\"M12 17v4\"></svg>", !1, !0, !1), jC = /*#__PURE__*/ m("<svg><path d=\"M8 21h8\"></svg>", !1, !0, !1);
function MC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kC(),
			AC(),
			jC()
		];
	} }));
}
MC.displayName = "Monitor";
//#endregion
//#region src/icons/moon-star.tsx
var NC = /*#__PURE__*/ m("<svg><path d=\"M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.38-1.16-.99-1.08A9 9 0 0 0 12 21\"></svg>", !1, !0, !1), PC = /*#__PURE__*/ m("<svg><path d=\"M19.54 3.26a1 1 0 0 0 .95.7h1.73l-1.4 1.01a1 1 0 0 0-.37 1.12L21 7.74l-1.4-1.02a1 1 0 0 0-1.18 0l-1.4 1.02.54-1.65a1 1 0 0 0-.37-1.12l-1.4-1.01h1.73a1 1 0 0 0 .95-.7L19 1.62z\"></svg>", !1, !0, !1);
function FC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [NC(), PC()];
	} }));
}
FC.displayName = "MoonStar";
//#endregion
//#region src/icons/moon.tsx
var IC = /*#__PURE__*/ m("<svg><path d=\"M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.38-1.16-.99-1.08A9 9 0 0 0 12 21\"></svg>", !1, !0, !1);
function LC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return IC();
	} }));
}
LC.displayName = "Moon";
//#endregion
//#region src/icons/mouse-pointer.tsx
var RC = /*#__PURE__*/ m("<svg><path d=\"M9.95 19.88 3.05 3.1a.05.05 0 0 1 .06-.06l16.77 6.9c.04.02.04.08 0 .1l-6.43 2.13a2 2 0 0 0-1.27 1.27l-2.14 6.42a.05.05 0 0 1-.1 0Z\"></svg>", !1, !0, !1), zC = /*#__PURE__*/ m("<svg><path d=\"m13 13 6 6\"></svg>", !1, !0, !1);
function BC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [RC(), zC()];
	} }));
}
BC.displayName = "MousePointer";
//#endregion
//#region src/icons/navigation-2.tsx
var VC = /*#__PURE__*/ m("<svg><path d=\"M11.98 2.04h.04l7.96 18.92q0 .03-.02.02l-7.6-2.85a1 1 0 0 0-.71 0l-7.6 2.85a.02.02 0 0 1-.03-.02z\"></svg>", !1, !0, !1);
function HC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return VC();
	} }));
}
HC.displayName = "Navigation2";
//#endregion
//#region src/icons/navigation.tsx
var UC = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"M21.96 2.02q.03-.01.02.02l-7.96 18.91q-.01.03-.04 0l-2.84-7.58a1 1 0 0 0-.5-.55l-7.6-3.8a.02.02 0 0 1 0-.04z\"></svg>", !1, !0, !1), WC = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function GC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [UC(), WC()];
	} }));
}
GC.displayName = "Navigation";
//#endregion
//#region src/icons/notification.tsx
var KC = /*#__PURE__*/ m("<svg><path d=\"M5 9a7 7 0 0 1 14 0v4.06a4 4 0 0 0 .42 1.78l1.16 2.32a4 4 0 0 1 .42 1.78V19H3v-.06a4 4 0 0 1 .42-1.78l1.16-2.32A4 4 0 0 0 5 13.06z\"></svg>", !1, !0, !1), qC = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1);
function JC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [KC(), qC()];
	} }));
}
JC.displayName = "Notification";
//#endregion
//#region src/icons/nut.tsx
var YC = /*#__PURE__*/ m("<svg><path d=\"M5 10c0 3.2 1.53 6.22 4.1 8.1l2.9 2.11M19 10c0 3.2-1.53 6.22-4.1 8.1L12 20.21m0 0V21\"></svg>", !1, !0, !1), XC = /*#__PURE__*/ m("<svg><path d=\"M12 3v1m0 0H8a5 5 0 0 0-5 5v.27c0 .36.35.61.7.5L6 9q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2.3.77c.35.11.7-.14.7-.5V9a5 5 0 0 0-5-5z\"></svg>", !1, !0, !1);
function ZC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [YC(), XC()];
	} }));
}
ZC.displayName = "Nut";
//#endregion
//#region src/icons/package-check.tsx
var QC = /*#__PURE__*/ m("<svg><path d=\"m15.38 20.13-1.13.62-1.28.71a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82V8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18V11\"></svg>", !1, !0, !1), $C = /*#__PURE__*/ m("<svg><path d=\"m17 16 1.84 1.84a.2.2 0 0 0 .3-.02L22 14\"></svg>", !1, !0, !1), ew = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 7.56 4a2 2 0 0 0 1.88 0l7.56-4\"></svg>", !1, !0, !1), tw = /*#__PURE__*/ m("<svg><path d=\"M12 12v9\"></svg>", !1, !0, !1), nw = /*#__PURE__*/ m("<svg><path d=\"m8.5 4.5 8 5\"></svg>", !1, !0, !1);
function rw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			QC(),
			$C(),
			ew(),
			tw(),
			nw()
		];
	} }));
}
rw.displayName = "PackageCheck";
//#endregion
//#region src/icons/package-minus.tsx
var iw = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 8.1 4.32a1 1 0 0 0 .8 0l8.1-4.32\"></svg>", !1, !0, !1), aw = /*#__PURE__*/ m("<svg><path d=\"M12 12v9.5\"></svg>", !1, !0, !1), ow = /*#__PURE__*/ m("<svg><path d=\"M21 13V7.59a1 1 0 0 0-.51-.88l-8-4.44a1 1 0 0 0-.98 0l-8 4.44A1 1 0 0 0 3 7.6v8.82c0 .36.2.7.51.88l8 4.44a1 1 0 0 0 .98 0l2.01-1.12\"></svg>", !1, !0, !1), sw = /*#__PURE__*/ m("<svg><path d=\"M16 17h6\"></svg>", !1, !0, !1), cw = /*#__PURE__*/ m("<svg><path d=\"m8 5 8.5 4.5\"></svg>", !1, !0, !1);
function lw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			iw(),
			aw(),
			ow(),
			sw(),
			cw()
		];
	} }));
}
lw.displayName = "PackageMinus";
//#endregion
//#region src/icons/package-open.tsx
var uw = /*#__PURE__*/ m("<svg><path d=\"M12 12v8\"></svg>", !1, !0, !1), dw = /*#__PURE__*/ m("<svg><path d=\"M19.79 12.32V16a1 1 0 0 1-.5.86l-7 4.17a1 1 0 0 1-1.02 0l-7-4.17a1 1 0 0 1-.48-.86v-3.67\"></svg>", !1, !0, !1), fw = /*#__PURE__*/ m("<svg><path d=\"M2.95 3.96 5.5 2.57a4.7 4.7 0 0 1 4.55.05l11.08 6.33a1.3 1.3 0 0 1 .01 2.25l-3.2 1.86a4.3 4.3 0 0 1-4.33.02L2.92 6.97a1.72 1.72 0 0 1 .03-3.01Z\"></svg>", !1, !0, !1), pw = /*#__PURE__*/ m("<svg><path d=\"m2.86 11.48 2.52 1.45c1.4.8 3.13.83 4.55.06L21.16 6.9a1.3 1.3 0 0 0 .06-2.25l-3.15-1.94a4.3 4.3 0 0 0-4.34-.11L2.9 8.47a1.72 1.72 0 0 0-.04 3.01Z\"></svg>", !1, !0, !1);
function mw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			uw(),
			dw(),
			fw(),
			pw()
		];
	} }));
}
mw.displayName = "PackageOpen";
//#endregion
//#region src/icons/package-plus.tsx
var hw = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 8.1 4.32a1 1 0 0 0 .8 0l8.1-4.32\"></svg>", !1, !0, !1), gw = /*#__PURE__*/ m("<svg><path d=\"M12 12v9.5\"></svg>", !1, !0, !1), _w = /*#__PURE__*/ m("<svg><path d=\"M21 10V7.59a1 1 0 0 0-.51-.88l-8-4.44a1 1 0 0 0-.98 0l-8 4.44A1 1 0 0 0 3 7.6v8.82c0 .36.2.7.51.88l8 4.44a1 1 0 0 0 .98 0l2.01-1.12\"></svg>", !1, !0, !1), vw = /*#__PURE__*/ m("<svg><path d=\"M16 17h6\"></svg>", !1, !0, !1), yw = /*#__PURE__*/ m("<svg><path d=\"M19 14v6\"></svg>", !1, !0, !1), bw = /*#__PURE__*/ m("<svg><path d=\"m8 5 8.5 4.5\"></svg>", !1, !0, !1);
function xw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hw(),
			gw(),
			_w(),
			vw(),
			yw(),
			bw()
		];
	} }));
}
xw.displayName = "PackagePlus";
//#endregion
//#region src/icons/package-x.tsx
var Sw = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 8.1 4.32a1 1 0 0 0 .8 0l8.1-4.32\"></svg>", !1, !0, !1), Cw = /*#__PURE__*/ m("<svg><path d=\"M12 12v9.5\"></svg>", !1, !0, !1), ww = /*#__PURE__*/ m("<svg><path d=\"m13.25 21.3-.76.43a1 1 0 0 1-.98 0l-8-4.44A1 1 0 0 1 3 16.4V7.6c0-.36.2-.7.51-.88l8-4.44a1 1 0 0 1 .98 0l8 4.44a1 1 0 0 1 .51.88V10\"></svg>", !1, !0, !1), Tw = /*#__PURE__*/ m("<svg><path d=\"m16.5 14.5 5 5\"></svg>", !1, !0, !1), Ew = /*#__PURE__*/ m("<svg><path d=\"m21.5 14.5-5 5\"></svg>", !1, !0, !1), Dw = /*#__PURE__*/ m("<svg><path d=\"m8 5 8.5 4.5\"></svg>", !1, !0, !1);
function Ow(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Sw(),
			Cw(),
			ww(),
			Tw(),
			Ew(),
			Dw()
		];
	} }));
}
Ow.displayName = "PackageX";
//#endregion
//#region src/icons/package.tsx
var kw = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 8.1 4.32a1 1 0 0 0 .8 0l8.1-4.32\"></svg>", !1, !0, !1), Aw = /*#__PURE__*/ m("<svg><path d=\"M12 12v9.5\"></svg>", !1, !0, !1), jw = /*#__PURE__*/ m("<svg><path d=\"m12.49 2.27 8 4.44a1 1 0 0 1 .51.88v8.82a1 1 0 0 1-.51.88l-8 4.44a1 1 0 0 1-.98 0l-8-4.44A1 1 0 0 1 3 16.4V7.6c0-.36.2-.7.51-.88l8-4.44a1 1 0 0 1 .98 0Z\"></svg>", !1, !0, !1), Mw = /*#__PURE__*/ m("<svg><path d=\"m8 5 8.5 4.5\"></svg>", !1, !0, !1);
function Nw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kw(),
			Aw(),
			jw(),
			Mw()
		];
	} }));
}
Nw.displayName = "Package";
//#endregion
//#region src/icons/paint-bucket.tsx
var Pw = /*#__PURE__*/ m("<svg><path d=\"m10 5 2.3-2.3a1 1 0 0 1 1.4 0l6.95 6.95c.2.2.2.5 0 .7l-8.03 8.03a3 3 0 0 1-4.24 0l-3.76-3.76a3 3 0 0 1 0-4.24L7 8\"></svg>", !1, !0, !1), Fw = /*#__PURE__*/ m("<svg><path d=\"m8 3.5 3 3\"></svg>", !1, !0, !1), Iw = /*#__PURE__*/ m("<svg><path d=\"M4 12.5h14.5\"></svg>", !1, !0, !1), Lw = /*#__PURE__*/ m("<svg><path d=\"M19.98 15.06q.01-.03.04 0l1.35 4.04a1.44 1.44 0 1 1-2.74 0z\"></svg>", !1, !0, !1);
function Rw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Pw(),
			Fw(),
			Iw(),
			Lw()
		];
	} }));
}
Rw.displayName = "PaintBucket";
//#endregion
//#region src/icons/paperclip.tsx
var zw = /*#__PURE__*/ m("<svg><path d=\"M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21\"></svg>", !1, !0, !1);
function Bw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return zw();
	} }));
}
Bw.displayName = "Paperclip";
//#endregion
//#region src/icons/pause-circle.tsx
var Vw = /*#__PURE__*/ m("<svg><path d=\"M10 9v6\"></svg>", !1, !0, !1), Hw = /*#__PURE__*/ m("<svg><path d=\"M14 9v6\"></svg>", !1, !0, !1), Uw = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function Ww(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Vw(),
			Hw(),
			Uw()
		];
	} }));
}
Ww.displayName = "PauseCircle";
//#endregion
//#region src/icons/pause-square.tsx
var Gw = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), Kw = /*#__PURE__*/ m("<svg><path d=\"M10 9v6\"></svg>", !1, !0, !1), qw = /*#__PURE__*/ m("<svg><path d=\"M14 9v6\"></svg>", !1, !0, !1);
function Jw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gw(),
			Kw(),
			qw()
		];
	} }));
}
Jw.displayName = "PauseSquare";
//#endregion
//#region src/icons/pause.tsx
var Yw = /*#__PURE__*/ m("<svg><rect width=5 height=18 x=5 y=3 rx=0.5></svg>", !1, !0, !1), Xw = /*#__PURE__*/ m("<svg><rect width=5 height=18 x=14 y=3 rx=0.5></svg>", !1, !0, !1);
function Zw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Yw(), Xw()];
	} }));
}
Zw.displayName = "Pause";
//#endregion
//#region src/icons/pen-line.tsx
var Qw = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35a1 1 0 0 0-.19.28l-2.27 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .38-.26\"></path><path d=\"M12 21h9\"></svg>", !1, !0, !1), $w = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function eT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Qw(), $w()];
	} }));
}
eT.displayName = "PenLine";
//#endregion
//#region src/icons/pen-tool.tsx
var tT = /*#__PURE__*/ m("<svg><path d=\"M10.73 16.34 6.1 14.33a1 1 0 0 1-.57-.68L2.8 2.85l.02-.02 10.82 2.69a1 1 0 0 1 .67.56l2.07 4.6\"></svg>", !1, !0, !1), nT = /*#__PURE__*/ m("<svg><rect width=10 height=4 x=10.66 y=17.68 rx=1 transform=\"rotate(-45.78 10.66 17.68)\"></svg>", !1, !0, !1), rT = /*#__PURE__*/ m("<svg><path d=\"m3.53 3.53 4.5 4.5\"></svg>", !1, !0, !1), iT = /*#__PURE__*/ m("<svg><circle cx=8.53 cy=8.53 r=0.5></svg>", !1, !0, !1);
function aT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			tT(),
			nT(),
			rT(),
			iT()
		];
	} }));
}
aT.displayName = "PenTool";
//#endregion
//#region src/icons/pencil.tsx
var oT = /*#__PURE__*/ m("<svg><path d=\"m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35a1 1 0 0 0-.19.28l-2.27 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .38-.26\"></svg>", !1, !0, !1), sT = /*#__PURE__*/ m("<svg><path d=\"M15.5 4.5 19 8\"></svg>", !1, !0, !1);
function cT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [oT(), sT()];
	} }));
}
cT.displayName = "Pencil";
//#endregion
//#region src/icons/percent.tsx
var lT = /*#__PURE__*/ m("<svg><path d=\"M5 19 19 5\"></svg>", !1, !0, !1), uT = /*#__PURE__*/ m("<svg><circle cx=7 cy=7 r=2></svg>", !1, !0, !1), dT = /*#__PURE__*/ m("<svg><circle cx=17 cy=17 r=2></svg>", !1, !0, !1);
function fT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			lT(),
			uT(),
			dT()
		];
	} }));
}
fT.displayName = "Percent";
//#endregion
//#region src/icons/phone-call.tsx
var pT = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), mT = /*#__PURE__*/ m("<svg><path d=\"M13 6c2.59-.52 5 1.46 5 4.1v.9\"></svg>", !1, !0, !1), hT = /*#__PURE__*/ m("<svg><path d=\"M14 2h1a7 7 0 0 1 7 7v2\"></svg>", !1, !0, !1);
function gT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			pT(),
			mT(),
			hT()
		];
	} }));
}
gT.displayName = "PhoneCall";
//#endregion
//#region src/icons/phone-forward.tsx
var _T = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03\"></svg>", !1, !0, !1), vT = /*#__PURE__*/ m("<svg><path d=\"M13 6h7\"></svg>", !1, !0, !1), yT = /*#__PURE__*/ m("<svg><path d=\"m18 2 3.82 3.6c.24.22.24.58 0 .8L18 10\"></svg>", !1, !0, !1);
function bT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_T(),
			vT(),
			yT()
		];
	} }));
}
bT.displayName = "PhoneForward";
//#endregion
//#region src/icons/phone-incoming.tsx
var xT = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03\"></svg>", !1, !0, !1), ST = /*#__PURE__*/ m("<svg><path d=\"M16 2v5a1 1 0 0 0 1 1h5\"></svg>", !1, !0, !1), CT = /*#__PURE__*/ m("<svg><path d=\"m17 7 5-5\"></svg>", !1, !0, !1);
function wT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xT(),
			ST(),
			CT()
		];
	} }));
}
wT.displayName = "PhoneIncoming";
//#endregion
//#region src/icons/phone-off.tsx
var TT = /*#__PURE__*/ m("<svg><path d=\"M10 13.33a19 19 0 0 0 3.9 2.62q.1.04.19 0l2.13-1.28a1 1 0 0 1 .6-.14l4.27.39a1 1 0 0 1 .91 1v5a1 1 0 0 1-1.1.97C14.3 21.15 9.8 19 6.88 16.25\"></svg>", !1, !0, !1), ET = /*#__PURE__*/ m("<svg><path d=\"m7.76 11-.38-.5-.29-.38a.2.2 0 0 1 0-.24L8.3 8.27a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1H3.3a.95.95 0 0 0-.95.8c-.47 3.08.02 6.8 2.15 10.12\"></svg>", !1, !0, !1), DT = /*#__PURE__*/ m("<svg><path d=\"M2 22 22 2\"></svg>", !1, !0, !1);
function OT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			TT(),
			ET(),
			DT()
		];
	} }));
}
OT.displayName = "PhoneOff";
//#endregion
//#region src/icons/phone-outgoing.tsx
var kT = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03\"></svg>", !1, !0, !1), AT = /*#__PURE__*/ m("<svg><path d=\"M22 8V3a1 1 0 0 0-1-1h-5\"></svg>", !1, !0, !1), jT = /*#__PURE__*/ m("<svg><path d=\"m21 3-5 5\"></svg>", !1, !0, !1);
function MT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kT(),
			AT(),
			jT()
		];
	} }));
}
MT.displayName = "PhoneOutgoing";
//#endregion
//#region src/icons/phone-x.tsx
var NT = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), PT = /*#__PURE__*/ m("<svg><path d=\"m15 3 6 6\"></svg>", !1, !0, !1), FT = /*#__PURE__*/ m("<svg><path d=\"m21 3-6 6\"></svg>", !1, !0, !1);
function IT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			NT(),
			PT(),
			FT()
		];
	} }));
}
IT.displayName = "PhoneX";
//#endregion
//#region src/icons/phone.tsx
var LT = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function RT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return LT();
	} }));
}
RT.displayName = "Phone";
//#endregion
//#region src/icons/pie-chart.tsx
var zT = /*#__PURE__*/ m("<svg><path d=\"M22 13.1A10.8 10.8 0 0 0 10.9 2a.94.94 0 0 0-.9.96V13a1 1 0 0 0 1 1h10.04c.5 0 .94-.38.96-.9\"></svg>", !1, !0, !1), BT = /*#__PURE__*/ m("<svg><path d=\"M20 17.63A9.82 9.82 0 1 1 6.37 4\"></svg>", !1, !0, !1);
function VT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [zT(), BT()];
	} }));
}
VT.displayName = "PieChart";
//#endregion
//#region src/icons/pin.tsx
var HT = /*#__PURE__*/ m("<svg><path d=\"M6 4c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4 1 1 0 0 0-1 1v2.33a2 2 0 0 0 .4 1.2l2.2 2.94a2 2 0 0 1 .4 1.2V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.17a2 2 0 0 1 .59-1.42L8.4 11.6a2 2 0 0 0 .6-1.43V7a1 1 0 0 0-1-1 2 2 0 0 1-2-2\"></svg>", !1, !0, !1), UT = /*#__PURE__*/ m("<svg><path d=\"M12 17v5\"></svg>", !1, !0, !1);
function WT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [HT(), UT()];
	} }));
}
WT.displayName = "Pin";
//#endregion
//#region src/icons/pipette.tsx
var GT = /*#__PURE__*/ m("<svg><path d=\"M13.64 7.26 7.1 14.03l-.15.23L6 18m0 0c-2 2-.35.13 0 0m0 0 4.18-.7a1 1 0 0 0 .32-.2l6.36-6.6\"></svg>", !1, !0, !1), KT = /*#__PURE__*/ m("<svg><path d=\"m15.31 5.41 2.7-2.7a2.36 2.36 0 0 1 3.27-.1c.92.87.96 2.3.09 3.2l-2.83 2.83\"></svg>", !1, !0, !1), qT = /*#__PURE__*/ m("<svg><path d=\"M19.07 7.76a2 2 0 0 1-2.83 2.83l-2.83-2.83a2 2 0 0 1 2.83-2.83\"></svg>", !1, !0, !1);
function JT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			GT(),
			KT(),
			qT()
		];
	} }));
}
JT.displayName = "Pipette";
//#endregion
//#region src/icons/play-square.tsx
var YT = /*#__PURE__*/ m("<svg><path d=\"M9 15.12V8.88c0-.29.3-.47.55-.34l5.25 2.78c.25.13.27.5.03.65l-5.25 3.47a.37.37 0 0 1-.58-.32\"></svg>", !1, !0, !1), XT = /*#__PURE__*/ m("<svg><path d=\"M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1\"></svg>", !1, !0, !1);
function ZT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [YT(), XT()];
	} }));
}
ZT.displayName = "PlaySquare";
//#endregion
//#region src/icons/play.tsx
var QT = /*#__PURE__*/ m("<svg><path d=\"M5 20.15V3.65a1 1 0 0 1 1.46-.88L20.5 10.1a1 1 0 0 1 .08 1.72L6.55 21A1 1 0 0 1 5 20.15\"></svg>", !1, !0, !1);
function $T(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return QT();
	} }));
}
$T.displayName = "Play";
//#endregion
//#region src/icons/plug-zap.tsx
var eE = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"M5.13 18.77 2.86 21.1m7.65-10.7L7.8 13.19m5.58 0L10.65 16m-6 2.32.96.93a3.3 3.3 0 0 0 4.66 0l1.36-1.4a.66.66 0 0 0-.03-.93l-4.77-4.65a.66.66 0 0 0-.93 0l-1.36 1.4a3.3 3.3 0 0 0 .12 4.65Z\"></path><path d=\"m19.75 3-3.67 3.92q-.03.06.04.08h4.76q.08.02.04.08L17.25 11\"></svg>", !1, !0, !1), tE = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function nE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [eE(), tE()];
	} }));
}
nE.displayName = "PlugZap";
//#endregion
//#region src/icons/plug.tsx
var rE = /*#__PURE__*/ m("<svg><path d=\"M11 17h2a5 5 0 0 0 5-5V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a5 5 0 0 0 5 5Z\"></svg>", !1, !0, !1), iE = /*#__PURE__*/ m("<svg><path d=\"M12 17v5\"></svg>", !1, !0, !1), aE = /*#__PURE__*/ m("<svg><path d=\"M9 2v6\"></svg>", !1, !0, !1), oE = /*#__PURE__*/ m("<svg><path d=\"M15 2v6\"></svg>", !1, !0, !1);
function sE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			rE(),
			iE(),
			aE(),
			oE()
		];
	} }));
}
sE.displayName = "Plug";
//#endregion
//#region src/icons/plus.tsx
var cE = /*#__PURE__*/ m("<svg><path d=\"M12 5v14\"></svg>", !1, !0, !1), lE = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
function uE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [cE(), lE()];
	} }));
}
uE.displayName = "Plus";
//#endregion
//#region src/icons/pound-sterling.tsx
var dE = /*#__PURE__*/ m("<svg><path d=\"M18 9V7a4 4 0 0 0-8 0v14\"></svg>", !1, !0, !1), fE = /*#__PURE__*/ m("<svg><path d=\"M6 21h12\"></svg>", !1, !0, !1), pE = /*#__PURE__*/ m("<svg><path d=\"M6 14h10\"></svg>", !1, !0, !1);
function mE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			dE(),
			fE(),
			pE()
		];
	} }));
}
mE.displayName = "PoundSterling";
//#endregion
//#region src/icons/power-off.tsx
var hE = /*#__PURE__*/ m("<svg><path d=\"M20.78 15a9 9 0 0 0-2.07-8\"></svg>", !1, !0, !1), gE = /*#__PURE__*/ m("<svg><path d=\"M5.3 7a9 9 0 1 0 13.42 12\"></svg>", !1, !0, !1), _E = /*#__PURE__*/ m("<svg><path d=\"M12 2v4\"></svg>", !1, !0, !1), vE = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function yE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hE(),
			gE(),
			_E(),
			vE()
		];
	} }));
}
yE.displayName = "PowerOff";
//#endregion
//#region src/icons/power.tsx
var bE = /*#__PURE__*/ m("<svg><path d=\"M5.3 7a9 9 0 1 0 13.42 0\"></svg>", !1, !0, !1), xE = /*#__PURE__*/ m("<svg><path d=\"M12 2v10\"></svg>", !1, !0, !1);
function SE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [bE(), xE()];
	} }));
}
SE.displayName = "Power";
//#endregion
//#region src/icons/qr-code.tsx
var CE = /*#__PURE__*/ m("<svg><rect width=5 height=5 x=3 y=3 rx=1></svg>", !1, !0, !1), wE = /*#__PURE__*/ m("<svg><rect width=5 height=5 x=3 y=16 rx=1></svg>", !1, !0, !1), TE = /*#__PURE__*/ m("<svg><rect width=5 height=5 x=16 y=3 rx=1></svg>", !1, !0, !1), EE = /*#__PURE__*/ m("<svg><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"></svg>", !1, !0, !1), DE = /*#__PURE__*/ m("<svg><path d=\"M12 20v1\"></svg>", !1, !0, !1), OE = /*#__PURE__*/ m("<svg><path d=\"M12.01 16H12\"></svg>", !1, !0, !1), kE = /*#__PURE__*/ m("<svg><path d=\"M3.01 12H3\"></svg>", !1, !0, !1), AE = /*#__PURE__*/ m("<svg><path d=\"M12.01 3H12\"></svg>", !1, !0, !1), jE = /*#__PURE__*/ m("<svg><path d=\"M21.01 12H21\"></svg>", !1, !0, !1), ME = /*#__PURE__*/ m("<svg><path d=\"M16 12h1\"></svg>", !1, !0, !1), NE = /*#__PURE__*/ m("<svg><path d=\"M7 12h3a2 2 0 0 0 2-2V7\"></svg>", !1, !0, !1);
function PE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			CE(),
			wE(),
			TE(),
			EE(),
			DE(),
			OE(),
			kE(),
			AE(),
			jE(),
			ME(),
			NE()
		];
	} }));
}
PE.displayName = "QrCode";
//#endregion
//#region src/icons/radio.tsx
var FE = /*#__PURE__*/ m("<svg><path d=\"M18 20a9.98 9.98 0 0 0 0-16\"></svg>", !1, !0, !1), IE = /*#__PURE__*/ m("<svg><path d=\"M6 20A9.98 9.98 0 0 1 6 4\"></svg>", !1, !0, !1), LE = /*#__PURE__*/ m("<svg><path d=\"M8.26 16.69a6 6 0 0 1 0-9.38\"></svg>", !1, !0, !1), RE = /*#__PURE__*/ m("<svg><path d=\"M15.74 7.3a6 6 0 0 1 0 9.4\"></svg>", !1, !0, !1), zE = /*#__PURE__*/ m("<svg><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1);
function BE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			FE(),
			IE(),
			LE(),
			RE(),
			zE()
		];
	} }));
}
BE.displayName = "Radio";
//#endregion
//#region src/icons/receipt-text.tsx
var VE = /*#__PURE__*/ m("<svg><path d=\"M4 2.72a.5.5 0 0 1 .68-.47l1.77.67q.22.07.42-.03l1.33-.75a.5.5 0 0 1 .49 0l1.29.72a.5.5 0 0 0 .49 0l1.28-.72a.5.5 0 0 1 .5 0l1.28.72a.5.5 0 0 0 .5 0l1.28-.72a.5.5 0 0 1 .5 0l1.32.75a.5.5 0 0 0 .42.03l1.77-.67a.5.5 0 0 1 .68.47V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), HE = /*#__PURE__*/ m("<svg><path d=\"M8 9h5\"></svg>", !1, !0, !1), UE = /*#__PURE__*/ m("<svg><path d=\"M8 17h5\"></svg>", !1, !0, !1), WE = /*#__PURE__*/ m("<svg><path d=\"M8 13h8\"></svg>", !1, !0, !1);
function GE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			VE(),
			HE(),
			UE(),
			WE()
		];
	} }));
}
GE.displayName = "ReceiptText";
//#endregion
//#region src/icons/receipt.tsx
var KE = /*#__PURE__*/ m("<svg><path d=\"M12 8v10\"></svg>", !1, !0, !1), qE = /*#__PURE__*/ m("<svg><path d=\"M14 9h-3.33C9.75 9 9 9.9 9 11s.75 2 1.67 2h2.42\"></svg>", !1, !0, !1), JE = /*#__PURE__*/ m("<svg><path d=\"M11.36 13h1.97c.92 0 1.67.9 1.67 2s-.75 2-1.67 2H10\"></svg>", !1, !0, !1), YE = /*#__PURE__*/ m("<svg><path d=\"M4 2.72a.5.5 0 0 1 .68-.47l1.77.67q.22.08.42-.03l1.33-.75a.5.5 0 0 1 .49 0l1.29.72a.5.5 0 0 0 .49 0l1.28-.72a.5.5 0 0 1 .5 0l1.28.72a.5.5 0 0 0 .5 0l1.28-.72a.5.5 0 0 1 .5 0l1.32.75a.5.5 0 0 0 .42.03l1.77-.67a.5.5 0 0 1 .68.47V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1);
function XE(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			KE(),
			qE(),
			JE(),
			YE()
		];
	} }));
}
XE.displayName = "Receipt";
//#endregion
//#region src/icons/redo-2.tsx
var ZE = /*#__PURE__*/ m("<svg><path d=\"M20 9H9.5a5.5 5.5 0 1 0 0 11H12\"></svg>", !1, !0, !1), QE = /*#__PURE__*/ m("<svg><path d=\"m15 4 4.86 4.86a.2.2 0 0 1 0 .28L15 14\"></svg>", !1, !0, !1);
function $E(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ZE(), QE()];
	} }));
}
$E.displayName = "Redo2";
//#endregion
//#region src/icons/refresh-cw.tsx
var eD = /*#__PURE__*/ m("<svg><path d=\"M19.48 6.77a10.5 10.5 0 0 0-5.94-3.63 9 9 0 0 0-10.48 7.23\"></svg>", !1, !0, !1), tD = /*#__PURE__*/ m("<svg><path d=\"M20.9 11.61q.05 1-.14 2a9 9 0 0 1-10.48 7.23C7.22 20.28 5.15 17.66 4 15\"></svg>", !1, !0, !1), nD = /*#__PURE__*/ m("<svg><path d=\"M8 14H3.5a.5.5 0 0 0-.5.5V19\"></svg>", !1, !0, !1), rD = /*#__PURE__*/ m("<svg><path d=\"M20 3v4.5a.5.5 0 0 1-.5.5H15\"></svg>", !1, !0, !1);
function iD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			eD(),
			tD(),
			nD(),
			rD()
		];
	} }));
}
iD.displayName = "RefreshCw";
//#endregion
//#region src/icons/repeat-1.tsx
var aD = /*#__PURE__*/ m("<svg><path d=\"M3 11V9a3 3 0 0 1 3-3h15\"></svg>", !1, !0, !1), oD = /*#__PURE__*/ m("<svg><path d=\"M21 13v2.04A2.96 2.96 0 0 1 18.04 18H3\"></svg>", !1, !0, !1), sD = /*#__PURE__*/ m("<svg><path d=\"m18 2 2.64 3.01c.5.57.5 1.41 0 1.98L18 10\"></svg>", !1, !0, !1), cD = /*#__PURE__*/ m("<svg><path d=\"m6 22-2.64-3.01a1.5 1.5 0 0 1 0-1.98L6 14\"></svg>", !1, !0, !1), lD = /*#__PURE__*/ m("<svg><path d=\"M10.5 10h1.3q.18.02.2.2V14\"></svg>", !1, !0, !1);
function uD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			aD(),
			oD(),
			sD(),
			cD(),
			lD()
		];
	} }));
}
uD.displayName = "Repeat1";
//#endregion
//#region src/icons/repeat.tsx
var dD = /*#__PURE__*/ m("<svg><path d=\"M3 11V9a3 3 0 0 1 3-3h15\"></svg>", !1, !0, !1), fD = /*#__PURE__*/ m("<svg><path d=\"M21 13v2.04A2.96 2.96 0 0 1 18.04 18H3\"></svg>", !1, !0, !1), pD = /*#__PURE__*/ m("<svg><path d=\"m18 2 2.64 3.01c.5.57.5 1.41 0 1.98L18 10\"></svg>", !1, !0, !1), mD = /*#__PURE__*/ m("<svg><path d=\"m6 22-2.64-3.01a1.5 1.5 0 0 1 0-1.98L6 14\"></svg>", !1, !0, !1);
function hD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			dD(),
			fD(),
			pD(),
			mD()
		];
	} }));
}
hD.displayName = "Repeat";
//#endregion
//#region src/icons/rewind.tsx
var gD = /*#__PURE__*/ m("<svg><path d=\"M12.73 13.41a1.8 1.8 0 0 1 0-2.78l6.85-5.6a1.5 1.5 0 0 1 2.45 1.15v11.67a1.5 1.5 0 0 1-2.45 1.16z\"></svg>", !1, !0, !1), _D = /*#__PURE__*/ m("<svg><path d=\"M2.45 13.21a1.5 1.5 0 0 1 0-2.32l7.13-5.83a1.5 1.5 0 0 1 2.45 1.16v11.67a1.5 1.5 0 0 1-2.45 1.16z\"></svg>", !1, !0, !1);
function vD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [gD(), _D()];
	} }));
}
vD.displayName = "Rewind";
//#endregion
//#region src/icons/rotate-cw-square.tsx
var yD = /*#__PURE__*/ m("<svg><path d=\"M15.5 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.25M11 5H7a2 2 0 0 0-2 2v3.25\"></svg>", !1, !0, !1), bD = /*#__PURE__*/ m("<svg><path d=\"m9 2 2.3 2.3a1 1 0 0 1 0 1.4L9 8\"></svg>", !1, !0, !1);
function xD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [yD(), bD()];
	} }));
}
xD.displayName = "RotateCwSquare";
//#endregion
//#region src/icons/rows-2.tsx
var SD = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), CD = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1);
function wD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [SD(), CD()];
	} }));
}
wD.displayName = "Rows2";
//#endregion
//#region src/icons/rows-3.tsx
var TD = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), ED = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), DD = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1);
function OD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			TD(),
			ED(),
			DD()
		];
	} }));
}
OD.displayName = "Rows3";
//#endregion
//#region src/icons/save.tsx
var kD = /*#__PURE__*/ m("<svg><path d=\"M3 5c0-1.1.9-2 2-2h9.17a2 2 0 0 1 1.42.59L20.4 8.4a2 2 0 0 1 .6 1.43V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), AD = /*#__PURE__*/ m("<svg><path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\"></svg>", !1, !0, !1), jD = /*#__PURE__*/ m("<svg><path d=\"M7 3v4a1 1 0 0 0 1 1h6\"></svg>", !1, !0, !1);
function MD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kD(),
			AD(),
			jD()
		];
	} }));
}
MD.displayName = "Save";
//#endregion
//#region src/icons/scan-barcode.tsx
var ND = /*#__PURE__*/ m("<svg><path d=\"M3 7V5c0-1.1.9-2 2-2h2M3 17v2c0 1.1.9 2 2 2h2M21 7V5a2 2 0 0 0-2-2h-2m4 14v2a2 2 0 0 1-2 2h-2\"></svg>", !1, !0, !1), PD = /*#__PURE__*/ m("<svg><path d=\"M8 7v10\"></svg>", !1, !0, !1), FD = /*#__PURE__*/ m("<svg><path d=\"M12 7v10\"></svg>", !1, !0, !1), ID = /*#__PURE__*/ m("<svg><path d=\"M17 7v10\"></svg>", !1, !0, !1);
function LD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ND(),
			PD(),
			FD(),
			ID()
		];
	} }));
}
LD.displayName = "ScanBarcode";
//#endregion
//#region src/icons/scan-face.tsx
var RD = /*#__PURE__*/ m("<svg><path d=\"M3 7V5c0-1.1.9-2 2-2h2M3 17v2c0 1.1.9 2 2 2h2M21 7V5a2 2 0 0 0-2-2h-2m4 14v2a2 2 0 0 1-2 2h-2\"></svg>", !1, !0, !1), zD = /*#__PURE__*/ m("<svg><path d=\"M9.01 9H9\"></svg>", !1, !0, !1), BD = /*#__PURE__*/ m("<svg><path d=\"M15.01 9H15\"></svg>", !1, !0, !1), VD = /*#__PURE__*/ m("<svg><path d=\"M8 14c1.17 1.5 4.4 3.62 8 0\"></svg>", !1, !0, !1);
function HD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			RD(),
			zD(),
			BD(),
			VD()
		];
	} }));
}
HD.displayName = "ScanFace";
//#endregion
//#region src/icons/scan-line.tsx
var UD = /*#__PURE__*/ m("<svg><path d=\"M3 7V5c0-1.1.9-2 2-2h2M3 17v2c0 1.1.9 2 2 2h2M21 7V5a2 2 0 0 0-2-2h-2m4 14v2a2 2 0 0 1-2 2h-2\"></svg>", !1, !0, !1), WD = /*#__PURE__*/ m("<svg><path d=\"M7 12h10\"></svg>", !1, !0, !1);
function GD(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [UD(), WD()];
	} }));
}
GD.displayName = "ScanLine";
//#endregion
//#region src/icons/scan-qr.tsx
var KD = /*#__PURE__*/ m("<svg><path d=\"M21 8V5a2 2 0 0 0-2-2h-3\"></svg>", !1, !0, !1), qD = /*#__PURE__*/ m("<svg><path d=\"M21 16v3a2 2 0 0 1-2 2h-3\"></svg>", !1, !0, !1), JD = /*#__PURE__*/ m("<svg><path d=\"M3 16v3c0 1.1.9 2 2 2h3\"></svg>", !1, !0, !1), YD = /*#__PURE__*/ m("<svg><path d=\"M3 8V5c0-1.1.9-2 2-2h3\"></svg>", !1, !0, !1), XD = /*#__PURE__*/ m("<svg><path d=\"M17 7v1m-5 9h3a2 2 0 0 0 2-2v-3\"></svg>", !1, !0, !1), ZD = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=7 y=7 rx=1></svg>", !1, !0, !1), QD = /*#__PURE__*/ m("<svg><circle cx=7 cy=17 r=0.5></svg>", !1, !0, !1);
function $D(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			KD(),
			qD(),
			JD(),
			YD(),
			XD(),
			ZD(),
			QD()
		];
	} }));
}
$D.displayName = "ScanQr";
//#endregion
//#region src/icons/scan.tsx
var eO = /*#__PURE__*/ m("<svg><path d=\"M3 7V5c0-1.1.9-2 2-2h2M3 17v2c0 1.1.9 2 2 2h2M21 7V5a2 2 0 0 0-2-2h-2m4 14v2a2 2 0 0 1-2 2h-2\"></svg>", !1, !0, !1);
function tO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return eO();
	} }));
}
tO.displayName = "Scan";
//#endregion
//#region src/icons/scissors.tsx
var nO = /*#__PURE__*/ m("<svg><circle cx=6 cy=6 r=3></svg>", !1, !0, !1), rO = /*#__PURE__*/ m("<svg><ellipse cx=2.97 cy=3 rx=2.97 ry=3 transform=\"rotate(269.5 11.92 9)skewY(-.02)\"></svg>", !1, !0, !1), iO = /*#__PURE__*/ m("<svg><path d=\"m8.5 8.5 3 3\"></svg>", !1, !0, !1), aO = /*#__PURE__*/ m("<svg><path d=\"m15 15 5 5\"></svg>", !1, !0, !1), oO = /*#__PURE__*/ m("<svg><path d=\"M8.5 15.5 20 4\"></svg>", !1, !0, !1);
function sO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nO(),
			rO(),
			iO(),
			aO(),
			oO()
		];
	} }));
}
sO.displayName = "Scissors";
//#endregion
//#region src/icons/search-minus.tsx
var cO = /*#__PURE__*/ m("<svg><path d=\"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16\"></svg>", !1, !0, !1), lO = /*#__PURE__*/ m("<svg><path d=\"M16.95 17.05 21 21\"></svg>", !1, !0, !1), uO = /*#__PURE__*/ m("<svg><path d=\"M8 11h6\"></svg>", !1, !0, !1);
function dO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			cO(),
			lO(),
			uO()
		];
	} }));
}
dO.displayName = "SearchMinus";
//#endregion
//#region src/icons/search-plus.tsx
var fO = /*#__PURE__*/ m("<svg><path d=\"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16\"></svg>", !1, !0, !1), pO = /*#__PURE__*/ m("<svg><path d=\"M16.95 17.05 21 21\"></svg>", !1, !0, !1), mO = /*#__PURE__*/ m("<svg><path d=\"M11 8v6\"></svg>", !1, !0, !1), hO = /*#__PURE__*/ m("<svg><path d=\"M8 11h6\"></svg>", !1, !0, !1);
function gO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			fO(),
			pO(),
			mO(),
			hO()
		];
	} }));
}
gO.displayName = "SearchPlus";
//#endregion
//#region src/icons/search.tsx
var _O = /*#__PURE__*/ m("<svg><circle cx=11 cy=11 r=8></svg>", !1, !0, !1), vO = /*#__PURE__*/ m("<svg><path d=\"M16.95 17.05 21 21\"></svg>", !1, !0, !1);
function yO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [_O(), vO()];
	} }));
}
yO.displayName = "Search";
//#endregion
//#region src/icons/send.tsx
var bO = /*#__PURE__*/ m("<svg><path d=\"M21.7 12.48 2.77 21a.5.5 0 0 1-.7-.57l2.05-8.29v-.24L2.09 3.62a.5.5 0 0 1 .69-.58l18.91 8.53c.4.17.4.73 0 .9Z\"></svg>", !1, !0, !1), xO = /*#__PURE__*/ m("<svg><path d=\"M4.16 12.02h17.39\"></svg>", !1, !0, !1);
function SO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [bO(), xO()];
	} }));
}
SO.displayName = "Send";
//#endregion
//#region src/icons/server-crash.tsx
var CO = /*#__PURE__*/ m("<svg><path d=\"M7 10H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3\"></svg>", !1, !0, !1), wO = /*#__PURE__*/ m("<svg><path d=\"M7 14H4a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3\"></svg>", !1, !0, !1), TO = /*#__PURE__*/ m("<svg><path d=\"M6.01 6H6\"></svg>", !1, !0, !1), EO = /*#__PURE__*/ m("<svg><path d=\"M6.01 18H6\"></svg>", !1, !0, !1), DO = /*#__PURE__*/ m("<svg><path d=\"m12.5 8-2.45 3.71q-.03.07.04.08h3.81q.07.02.04.08L11 16\"></svg>", !1, !0, !1);
function OO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			CO(),
			wO(),
			TO(),
			EO(),
			DO()
		];
	} }));
}
OO.displayName = "ServerCrash";
//#endregion
//#region src/icons/server-off.tsx
var kO = /*#__PURE__*/ m("<svg><path d=\"M8 2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4\"></svg>", !1, !0, !1), AO = /*#__PURE__*/ m("<svg><path d=\"M10 10H4a2 2 0 0 1-2-2V2\"></svg>", !1, !0, !1), jO = /*#__PURE__*/ m("<svg><path d=\"M22 22H4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2h10m5.5 0h.5a2 2 0 0 1 2 2\"></svg>", !1, !0, !1), MO = /*#__PURE__*/ m("<svg><path d=\"M6.01 6H6\"></svg>", !1, !0, !1), NO = /*#__PURE__*/ m("<svg><path d=\"M6.01 18H6\"></svg>", !1, !0, !1), PO = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function FO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kO(),
			AO(),
			jO(),
			MO(),
			NO(),
			PO()
		];
	} }));
}
FO.displayName = "ServerOff";
//#endregion
//#region src/icons/server.tsx
var IO = /*#__PURE__*/ m("<svg><rect width=20 height=8 x=2 y=2 rx=2></svg>", !1, !0, !1), LO = /*#__PURE__*/ m("<svg><rect width=20 height=8 x=2 y=14 rx=2></svg>", !1, !0, !1), RO = /*#__PURE__*/ m("<svg><path d=\"M6.01 6H6\"></svg>", !1, !0, !1), zO = /*#__PURE__*/ m("<svg><path d=\"M6.01 18H6\"></svg>", !1, !0, !1);
function BO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			IO(),
			LO(),
			RO(),
			zO()
		];
	} }));
}
BO.displayName = "Server";
//#endregion
//#region src/icons/settings-control.tsx
var VO = /*#__PURE__*/ m("<svg><path d=\"M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h9\"></svg>", !1, !0, !1), HO = /*#__PURE__*/ m("<svg><path d=\"M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0H5\"></svg>", !1, !0, !1);
function UO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [VO(), HO()];
	} }));
}
UO.displayName = "SettingsControl";
//#endregion
//#region src/icons/settings.tsx
var WO = /*#__PURE__*/ m("<svg><path d=\"M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82a2 2 0 0 0-3.09-1.68l-1.33.87a1 1 0 0 1-1.46-.43l-.94-2.1a1 1 0 0 1 .42-1.29l1.45-.8a2 2 0 0 0 0-3.5l-1.45-.8a1 1 0 0 1-.42-1.29l.94-2.1a1 1 0 0 1 1.46-.43l1.33.87a2 2 0 0 0 3.09-1.68V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82a2 2 0 0 0 3.09 1.68l1.33-.87a1 1 0 0 1 1.46.43l.94 2.1a1 1 0 0 1-.42 1.29l-1.45.8a2 2 0 0 0 0 3.5l1.45.8a1 1 0 0 1 .42 1.29l-.94 2.1a1 1 0 0 1-1.46.43l-1.33-.87a2 2 0 0 0-3.09 1.68V21a1 1 0 0 1-1 1\"></svg>", !1, !0, !1), GO = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1);
function KO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [WO(), GO()];
	} }));
}
KO.displayName = "Settings";
//#endregion
//#region src/icons/shield-alert.tsx
var qO = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), JO = /*#__PURE__*/ m("<svg><path d=\"M12 8v5\"></svg>", !1, !0, !1), YO = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=0.5></svg>", !1, !0, !1);
function XO(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qO(),
			JO(),
			YO()
		];
	} }));
}
XO.displayName = "ShieldAlert";
//#endregion
//#region src/icons/shield-check.tsx
var ZO = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), QO = /*#__PURE__*/ m("<svg><path d=\"m9 12 1.74 1.63c.22.2.56.17.74-.06L15 9\"></svg>", !1, !0, !1);
function $O(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ZO(), QO()];
	} }));
}
$O.displayName = "ShieldCheck";
//#endregion
//#region src/icons/shield-ellipsis.tsx
var ek = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), tk = /*#__PURE__*/ m("<svg><circle cx=8 cy=12 r=0.5></svg>", !1, !0, !1), nk = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=0.5></svg>", !1, !0, !1), rk = /*#__PURE__*/ m("<svg><circle cx=16 cy=12 r=0.5></svg>", !1, !0, !1);
function ik(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ek(),
			tk(),
			nk(),
			rk()
		];
	} }));
}
ik.displayName = "ShieldEllipsis";
//#endregion
//#region src/icons/shield-lock.tsx
var ak = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), ok = /*#__PURE__*/ m("<svg><rect width=6 height=5 x=9 y=11 rx=0.5></svg>", !1, !0, !1), sk = /*#__PURE__*/ m("<svg><path d=\"M14 11v-1a2 2 0 1 0-4 0v1\"></svg>", !1, !0, !1);
function ck(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ak(),
			ok(),
			sk()
		];
	} }));
}
ck.displayName = "ShieldLock";
//#endregion
//#region src/icons/shield-off.tsx
var lk = /*#__PURE__*/ m("<svg><path d=\"M19.68 14.5q.32-1.22.32-2.53V5.26q-.02-.21-.23-.23a11.5 11.5 0 0 1-6.79-2.3l-.8-.6a.3.3 0 0 0-.35 0l-.81.6q-1 .75-2.13 1.27\"></svg>", !1, !0, !1), uk = /*#__PURE__*/ m("<svg><path d=\"M17.98 18.1a10.3 10.3 0 0 1-6 3.9A10.3 10.3 0 0 1 4 11.96v-6.7q.02-.21.23-.23.38 0 .77-.03\"></svg>", !1, !0, !1), dk = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function fk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			lk(),
			uk(),
			dk()
		];
	} }));
}
fk.displayName = "ShieldOff";
//#endregion
//#region src/icons/shield-question.tsx
var pk = /*#__PURE__*/ m("<svg><path d=\"M4 5.18q.02-.2.23-.23a11.4 11.4 0 0 0 6.79-2.29l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.22v6.72a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.9z\"></svg>", !1, !0, !1), mk = /*#__PURE__*/ m("<svg><path d=\"M9.17 9A3 3 0 0 1 15 10c0 1.66-1.34 3.5-3 3.5\"></svg>", !1, !0, !1), hk = /*#__PURE__*/ m("<svg><circle cx=12 cy=17 r=0.5></svg>", !1, !0, !1);
function gk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			pk(),
			mk(),
			hk()
		];
	} }));
}
gk.displayName = "ShieldQuestion";
//#endregion
//#region src/icons/shield-user.tsx
var _k = /*#__PURE__*/ m("<svg><path d=\"M4 5.2q.02-.21.23-.23c2.45-.02 4.83-.83 6.79-2.3l.8-.61c.1-.08.25-.08.35 0l.81.6a11.4 11.4 0 0 0 6.8 2.3q.2.01.22.24v6.73A10.3 10.3 0 0 1 11.98 22 10.3 10.3 0 0 1 4 11.93z\"></svg>", !1, !0, !1), vk = /*#__PURE__*/ m("<svg><path d=\"M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6\"></svg>", !1, !0, !1), yk = /*#__PURE__*/ m("<svg><path d=\"M17.5 18.5c0-2.2-2.74-4.5-5.5-4.5s-5.5 2.3-5.5 4.5\"></svg>", !1, !0, !1);
function bk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_k(),
			vk(),
			yk()
		];
	} }));
}
bk.displayName = "ShieldUser";
//#endregion
//#region src/icons/shield-x.tsx
var xk = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), Sk = /*#__PURE__*/ m("<svg><path d=\"m10 10 4 4\"></svg>", !1, !0, !1), Ck = /*#__PURE__*/ m("<svg><path d=\"m10 14 4-4\"></svg>", !1, !0, !1);
function wk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xk(),
			Sk(),
			Ck()
		];
	} }));
}
wk.displayName = "ShieldX";
//#endregion
//#region src/icons/shield.tsx
var Tk = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1);
function Ek(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Tk();
	} }));
}
Ek.displayName = "Shield";
//#endregion
//#region src/icons/shopping-bag-check.tsx
var Dk = /*#__PURE__*/ m("<svg><path d=\"M13 22H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4h11a1 1 0 0 1 .8.4L21 6v7m0-7H3\"></svg>", !1, !0, !1), Ok = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1), kk = /*#__PURE__*/ m("<svg><path d=\"m16 19.12 1.98 1.98q.14.12.28 0L22 17\"></svg>", !1, !0, !1);
function Ak(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Dk(),
			Ok(),
			kk()
		];
	} }));
}
Ak.displayName = "ShoppingBagCheck";
//#endregion
//#region src/icons/shopping-bag-plus.tsx
var jk = /*#__PURE__*/ m("<svg><path d=\"M21 13V6l-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h9m8-16H3\"></svg>", !1, !0, !1), Mk = /*#__PURE__*/ m("<svg><path d=\"M19 17v4\"></svg>", !1, !0, !1), Nk = /*#__PURE__*/ m("<svg><path d=\"M17 19h4\"></svg>", !1, !0, !1), Pk = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1);
function Fk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jk(),
			Mk(),
			Nk(),
			Pk()
		];
	} }));
}
Fk.displayName = "ShoppingBagPlus";
//#endregion
//#region src/icons/shopping-bag.tsx
var Ik = /*#__PURE__*/ m("<svg><path d=\"m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18\"></svg>", !1, !0, !1), Lk = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1);
function Rk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ik(), Lk()];
	} }));
}
Rk.displayName = "ShoppingBag";
//#endregion
//#region src/icons/shopping-cart-plus.tsx
var zk = /*#__PURE__*/ m("<svg><path d=\"m4 2 1 5 1.65 7.43A2 2 0 0 0 8.6 16h9.8a2 2 0 0 0 1.95-1.57l1.1-5M5 7h7.25\"></svg>", !1, !0, !1), Bk = /*#__PURE__*/ m("<svg><path d=\"M2 2h2\"></svg>", !1, !0, !1), Vk = /*#__PURE__*/ m("<svg><path d=\"M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), Hk = /*#__PURE__*/ m("<svg><path d=\"M18 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), Uk = /*#__PURE__*/ m("<svg><path d=\"M18 4v4\"></svg>", !1, !0, !1), Wk = /*#__PURE__*/ m("<svg><path d=\"M16 6h4\"></svg>", !1, !0, !1);
function Gk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zk(),
			Bk(),
			Vk(),
			Hk(),
			Uk(),
			Wk()
		];
	} }));
}
Gk.displayName = "ShoppingCartPlus";
//#endregion
//#region src/icons/shopping-cart.tsx
var Kk = /*#__PURE__*/ m("<svg><path d=\"M5 7h14.5a2 2 0 0 1 1.96 2.43l-1.11 5A2 2 0 0 1 18.4 16H8.6a2 2 0 0 1-1.95-1.57zm0 0L4 2\"></svg>", !1, !0, !1), qk = /*#__PURE__*/ m("<svg><path d=\"M2 2h2\"></svg>", !1, !0, !1), Jk = /*#__PURE__*/ m("<svg><circle cx=9 cy=21 r=1></svg>", !1, !0, !1), Yk = /*#__PURE__*/ m("<svg><circle cx=18 cy=21 r=1></svg>", !1, !0, !1);
function Xk(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Kk(),
			qk(),
			Jk(),
			Yk()
		];
	} }));
}
Xk.displayName = "ShoppingCart";
//#endregion
//#region src/icons/shuffle.tsx
var Zk = /*#__PURE__*/ m("<svg><path d=\"M2 18h4.93a2 2 0 0 0 1.66-.9l6.82-10.2a2 2 0 0 1 1.66-.9H22\"></svg>", !1, !0, !1), Qk = /*#__PURE__*/ m("<svg><path d=\"M10.1 9.14 8.6 6.89A2 2 0 0 0 6.92 6H2\"></svg>", !1, !0, !1), $k = /*#__PURE__*/ m("<svg><path d=\"M22 18h-4.93a2 2 0 0 1-1.66-.9L14 15\"></svg>", !1, !0, !1), eA = /*#__PURE__*/ m("<svg><path d=\"m19 2 2.92 3.34a1 1 0 0 1 0 1.32L19 10\"></svg>", !1, !0, !1), tA = /*#__PURE__*/ m("<svg><path d=\"m19 22 2.92-3.34a1 1 0 0 0 0-1.32L19 14\"></svg>", !1, !0, !1);
function nA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Zk(),
			Qk(),
			$k(),
			eA(),
			tA()
		];
	} }));
}
nA.displayName = "Shuffle";
//#endregion
//#region src/icons/sim-card.tsx
var rA = /*#__PURE__*/ m("<svg><path d=\"M3 4c0-1.1.9-2 2-2h9.35a2 2 0 0 1 1.62.83l4.65 6.42a2 2 0 0 1 .38 1.18V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), iA = /*#__PURE__*/ m("<svg><rect width=8 height=9 x=8 y=9 rx=0.5></svg>", !1, !0, !1), aA = /*#__PURE__*/ m("<svg><path d=\"M12 9v2.98q0 .02.02.02H16\"></svg>", !1, !0, !1), oA = /*#__PURE__*/ m("<svg><path d=\"M8.5 15h3.48q.02 0 .02.02V18\"></svg>", !1, !0, !1);
function sA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			rA(),
			iA(),
			aA(),
			oA()
		];
	} }));
}
sA.displayName = "SimCard";
//#endregion
//#region src/icons/skip-back.tsx
var cA = /*#__PURE__*/ m("<svg><path d=\"M3 4v16\"></svg>", !1, !0, !1), lA = /*#__PURE__*/ m("<svg><path d=\"M7.77 13.38a1.62 1.62 0 0 1 0-2.76L18.8 4.2c.99-.58 2.2.18 2.2 1.38v12.84c0 1.2-1.21 1.96-2.2 1.38z\"></svg>", !1, !0, !1);
function uA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [cA(), lA()];
	} }));
}
uA.displayName = "SkipBack";
//#endregion
//#region src/icons/skip-forward.tsx
var dA = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"M21 4v16\"></path><path d=\"M16.61 10.69a1.5 1.5 0 0 1 0 2.62L5.47 19.44a1.5 1.5 0 0 1-2.22-1.32V5.88a1.5 1.5 0 0 1 2.22-1.32z\"></svg>", !1, !0, !1), fA = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function pA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [dA(), fA()];
	} }));
}
pA.displayName = "SkipForward";
//#endregion
//#region src/icons/sliders-horizontal.tsx
var mA = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), hA = /*#__PURE__*/ m("<svg><path d=\"M14 5V3m0 2v2m0-2h7\"></svg>", !1, !0, !1), gA = /*#__PURE__*/ m("<svg><path d=\"M8 12v-2m0 2v2m0-2H3\"></svg>", !1, !0, !1), _A = /*#__PURE__*/ m("<svg><path d=\"M12 12h9\"></svg>", !1, !0, !1), vA = /*#__PURE__*/ m("<svg><path d=\"M3 19h9\"></svg>", !1, !0, !1), yA = /*#__PURE__*/ m("<svg><path d=\"M16 19v-2m0 2v2m0-2h5\"></svg>", !1, !0, !1);
function bA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mA(),
			hA(),
			gA(),
			_A(),
			vA(),
			yA()
		];
	} }));
}
bA.displayName = "SlidersHorizontal";
//#endregion
//#region src/icons/sliders-vertical.tsx
var xA = /*#__PURE__*/ m("<svg><path d=\"M5 3v7\"></svg>", !1, !0, !1), SA = /*#__PURE__*/ m("<svg><path d=\"M5 14v7m0-7H3m2 0h2\"></svg>", !1, !0, !1), CA = /*#__PURE__*/ m("<svg><path d=\"M12 8h2m-2 0h-2m2 0V3\"></svg>", !1, !0, !1), wA = /*#__PURE__*/ m("<svg><path d=\"M12 12v9\"></svg>", !1, !0, !1), TA = /*#__PURE__*/ m("<svg><path d=\"M19 3v9\"></svg>", !1, !0, !1), EA = /*#__PURE__*/ m("<svg><path d=\"M19 16h2m-2 0h-2m2 0v5\"></svg>", !1, !0, !1);
function DA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xA(),
			SA(),
			CA(),
			wA(),
			TA(),
			EA()
		];
	} }));
}
DA.displayName = "SlidersVertical";
//#endregion
//#region src/icons/smartphone.tsx
var OA = /*#__PURE__*/ m("<svg><rect width=14 height=20 x=5 y=2 rx=2></svg>", !1, !0, !1), kA = /*#__PURE__*/ m("<svg><path d=\"M12.01 19H12\"></svg>", !1, !0, !1);
function AA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [OA(), kA()];
	} }));
}
AA.displayName = "Smartphone";
//#endregion
//#region src/icons/smile-plus.tsx
var jA = /*#__PURE__*/ m("<svg><path d=\"M21.95 11q.05.5.05 1a10 10 0 1 1-9-9.95\"></svg>", !1, !0, !1), MA = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.14 6.14 0 0 0 10 0\"></svg>", !1, !0, !1), NA = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), PA = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), FA = /*#__PURE__*/ m("<svg><path d=\"M19 2v6\"></svg>", !1, !0, !1), IA = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function LA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jA(),
			MA(),
			NA(),
			PA(),
			FA(),
			IA()
		];
	} }));
}
LA.displayName = "SmilePlus";
//#endregion
//#region src/icons/smile-wink.tsx
var RA = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), zA = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.14 6.14 0 0 0 10 0\"></svg>", !1, !0, !1), BA = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), VA = /*#__PURE__*/ m("<svg><path d=\"M14 10c.6-.94 1.69-1.68 3 0\"></svg>", !1, !0, !1);
function HA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			RA(),
			zA(),
			BA(),
			VA()
		];
	} }));
}
HA.displayName = "SmileWink";
//#endregion
//#region src/icons/smile.tsx
var UA = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), WA = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.14 6.14 0 0 0 10 0\"></svg>", !1, !0, !1), GA = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), KA = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1);
function qA(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			UA(),
			WA(),
			GA(),
			KA()
		];
	} }));
}
qA.displayName = "Smile";
//#endregion
//#region src/icons/sparkles-text.tsx
var JA = /*#__PURE__*/ m("<svg><path d=\"m15.99 6.8-1.96-.83a.05.05 0 0 1 0-.1l1.96-.83a2 2 0 0 0 1.05-1.05l.84-1.96a.05.05 0 0 1 .09 0l.84 1.96a2 2 0 0 0 1.05 1.05l1.96.84c.04.01.04.07 0 .09l-1.96.84a2 2 0 0 0-1.05 1.05l-.84 1.96a.05.05 0 0 1-.1 0l-.83-1.96a2 2 0 0 0-1.05-1.05Z\"></svg>", !1, !0, !1), YA = /*#__PURE__*/ m("<svg><path d=\"M3 5h6\"></svg>", !1, !0, !1), XA = /*#__PURE__*/ m("<svg><path d=\"M3 9h8\"></svg>", !1, !0, !1), ZA = /*#__PURE__*/ m("<svg><path d=\"M3 13h15.5\"></svg>", !1, !0, !1), QA = /*#__PURE__*/ m("<svg><path d=\"M3 17h12\"></svg>", !1, !0, !1), $A = /*#__PURE__*/ m("<svg><path d=\"M3 21h17.5\"></svg>", !1, !0, !1);
function ej(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			JA(),
			YA(),
			XA(),
			ZA(),
			QA(),
			$A()
		];
	} }));
}
ej.displayName = "SparklesText";
//#endregion
//#region src/icons/sparkles.tsx
var tj = /*#__PURE__*/ m("<svg><path d=\"m10.86 12.08-4.43-1.9a.2.2 0 0 1 0-.36l4.43-1.9a2 2 0 0 0 1.06-1.06l1.9-4.43a.2.2 0 0 1 .36 0l1.9 4.43a2 2 0 0 0 1.06 1.06l4.43 1.9a.2.2 0 0 1 0 .36l-4.43 1.9a2 2 0 0 0-1.06 1.06l-1.9 4.43a.2.2 0 0 1-.36 0l-1.9-4.43a2 2 0 0 0-1.06-1.06\"></svg>", !1, !0, !1), nj = /*#__PURE__*/ m("<svg><path d=\"m4.06 18.88-1.95-.83a.05.05 0 0 1 0-.1l1.95-.83a2 2 0 0 0 1.06-1.06l.83-1.95a.05.05 0 0 1 .1 0l.83 1.95a2 2 0 0 0 1.06 1.06l1.95.83q.06.05 0 .1l-1.95.83a2 2 0 0 0-1.06 1.06l-.83 1.95a.05.05 0 0 1-.1 0l-.83-1.95a2 2 0 0 0-1.06-1.06\"></svg>", !1, !0, !1), rj = /*#__PURE__*/ m("<svg><path d=\"M5 2v4\"></svg>", !1, !0, !1), ij = /*#__PURE__*/ m("<svg><path d=\"M3 4h4\"></svg>", !1, !0, !1);
function aj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			tj(),
			nj(),
			rj(),
			ij()
		];
	} }));
}
aj.displayName = "Sparkles";
//#endregion
//#region src/icons/speaker.tsx
var oj = /*#__PURE__*/ m("<svg><rect width=16 height=20 x=4 y=2 rx=2></svg>", !1, !0, !1), sj = /*#__PURE__*/ m("<svg><path d=\"M12.01 6H12\"></svg>", !1, !0, !1), cj = /*#__PURE__*/ m("<svg><path d=\"M12.01 14H12\"></svg>", !1, !0, !1), lj = /*#__PURE__*/ m("<svg><circle cx=12 cy=14 r=4></svg>", !1, !0, !1);
function uj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			oj(),
			sj(),
			cj(),
			lj()
		];
	} }));
}
uj.displayName = "Speaker";
//#endregion
//#region src/icons/split.tsx
var dj = /*#__PURE__*/ m("<svg><path d=\"m4 4 7.32 6.4a2 2 0 0 1 .68 1.5V22\"></svg>", !1, !0, !1), fj = /*#__PURE__*/ m("<svg><path d=\"M3 8V3.5c0-.28.22-.5.5-.5H8\"></svg>", !1, !0, !1), pj = /*#__PURE__*/ m("<svg><path d=\"M21 8V3.5a.5.5 0 0 0-.5-.5H16\"></svg>", !1, !0, !1), mj = /*#__PURE__*/ m("<svg><path d=\"m20 4-5 4\"></svg>", !1, !0, !1);
function hj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			dj(),
			fj(),
			pj(),
			mj()
		];
	} }));
}
hj.displayName = "Split";
//#endregion
//#region src/icons/square-activity.tsx
var gj = /*#__PURE__*/ m("<svg><path d=\"M7 11.98h1.35q.03 0 .05-.04l1.33-4.9c.01-.05.09-.05.1 0l3.23 9.92c.02.05.09.05.1 0l2.02-4.94q.01-.03.05-.04H17\"></svg>", !1, !0, !1), _j = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1);
function vj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [gj(), _j()];
	} }));
}
vj.displayName = "SquareActivity";
//#endregion
//#region src/icons/square-arrow-down-left.tsx
var yj = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), bj = /*#__PURE__*/ m("<svg><path d=\"M15 15H9.3a.3.3 0 0 1-.3-.3V9\"></svg>", !1, !0, !1), xj = /*#__PURE__*/ m("<svg><path d=\"M14.5 9.5 9 15\"></svg>", !1, !0, !1);
function Sj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			yj(),
			bj(),
			xj()
		];
	} }));
}
Sj.displayName = "SquareArrowDownLeft";
//#endregion
//#region src/icons/square-arrow-down-right.tsx
var Cj = /*#__PURE__*/ m("<svg><path d=\"M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z\"></svg>", !1, !0, !1), wj = /*#__PURE__*/ m("<svg><path d=\"M9 15h5.7a.3.3 0 0 0 .3-.3V9\"></svg>", !1, !0, !1), Tj = /*#__PURE__*/ m("<svg><path d=\"M9.5 9.5 15 15\"></svg>", !1, !0, !1);
function Ej(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Cj(),
			wj(),
			Tj()
		];
	} }));
}
Ej.displayName = "SquareArrowDownRight";
//#endregion
//#region src/icons/square-arrow-out-up-left.tsx
var Dj = /*#__PURE__*/ m("<svg><path d=\"M3 9V3.5c0-.28.22-.5.5-.5H9\"></svg>", !1, !0, !1), Oj = /*#__PURE__*/ m("<svg><path d=\"m4 4 8 8\"></svg>", !1, !0, !1), kj = /*#__PURE__*/ m("<svg><path d=\"M3 13v7.5c0 .28.22.5.5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13\"></svg>", !1, !0, !1);
function Aj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Dj(),
			Oj(),
			kj()
		];
	} }));
}
Aj.displayName = "SquareArrowOutUpLeft";
//#endregion
//#region src/icons/square-arrow-out-up-right.tsx
var jj = /*#__PURE__*/ m("<svg><path d=\"M21 13v7.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5H11\"></svg>", !1, !0, !1), Mj = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5c.28 0 .5.22.5.5V9\"></svg>", !1, !0, !1), Nj = /*#__PURE__*/ m("<svg><path d=\"m12 12 8-8\"></svg>", !1, !0, !1);
function Pj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jj(),
			Mj(),
			Nj()
		];
	} }));
}
Pj.displayName = "SquareArrowOutUpRight";
//#endregion
//#region src/icons/square-arrow-up-left.tsx
var Fj = /*#__PURE__*/ m("<svg><path d=\"m10 10 5 5\"></svg>", !1, !0, !1), Ij = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5v17a.5.5 0 0 1-.5.5\"></svg>", !1, !0, !1), Lj = /*#__PURE__*/ m("<svg><path d=\"M9 15V9.5c0-.28.22-.5.5-.5H15\"></svg>", !1, !0, !1);
function Rj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Fj(),
			Ij(),
			Lj()
		];
	} }));
}
Rj.displayName = "SquareArrowUpLeft";
//#endregion
//#region src/icons/square-arrow-up-right.tsx
var zj = /*#__PURE__*/ m("<svg><path d=\"M9 9h5.7c.17 0 .3.13.3.3V15\"></svg>", !1, !0, !1), Bj = /*#__PURE__*/ m("<svg><path d=\"m9 15 5-5\"></svg>", !1, !0, !1), Vj = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5v17a.5.5 0 0 1-.5.5\"></svg>", !1, !0, !1);
function Hj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zj(),
			Bj(),
			Vj()
		];
	} }));
}
Hj.displayName = "SquareArrowUpRight";
//#endregion
//#region src/icons/square-chevron-down.tsx
var Uj = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.76 3.9c.13.13.35.13.48 0L16 10\"></svg>", !1, !0, !1), Wj = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1.5></svg>", !1, !0, !1);
function Gj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Uj(), Wj()];
	} }));
}
Gj.displayName = "SquareChevronDown";
//#endregion
//#region src/icons/square-chevron-left.tsx
var Kj = /*#__PURE__*/ m("<svg><path d=\"m14 16-3.65-3.65a.5.5 0 0 1 0-.7L14 8\"></svg>", !1, !0, !1), qj = /*#__PURE__*/ m("<svg><path d=\"M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z\"></svg>", !1, !0, !1);
function Jj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Kj(), qj()];
	} }));
}
Jj.displayName = "SquareChevronLeft";
//#endregion
//#region src/icons/square-chevron-right.tsx
var Yj = /*#__PURE__*/ m("<svg><path d=\"m10 16 3.85-3.65c.2-.2.2-.5 0-.7L10 8\"></svg>", !1, !0, !1), Xj = /*#__PURE__*/ m("<svg><path d=\"M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1Z\"></svg>", !1, !0, !1);
function Zj(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Yj(), Xj()];
	} }));
}
Zj.displayName = "SquareChevronRight";
//#endregion
//#region src/icons/square-chevron-up.tsx
var Qj = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14\"></svg>", !1, !0, !1), $j = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1);
function eM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Qj(), $j()];
	} }));
}
eM.displayName = "SquareChevronUp";
//#endregion
//#region src/icons/square-user.tsx
var tM = /*#__PURE__*/ m("<svg><path d=\"M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"></svg>", !1, !0, !1), nM = /*#__PURE__*/ m("<svg><path d=\"M18 20c0-2.76-2.69-5-6-5s-6 2.24-6 5\"></svg>", !1, !0, !1), rM = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1);
function iM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			tM(),
			nM(),
			rM()
		];
	} }));
}
iM.displayName = "SquareUser";
//#endregion
//#region src/icons/square-x.tsx
var aM = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), oM = /*#__PURE__*/ m("<svg><path d=\"m9 9 6 6\"></svg>", !1, !0, !1), sM = /*#__PURE__*/ m("<svg><path d=\"m15 9-6 6\"></svg>", !1, !0, !1);
function cM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			aM(),
			oM(),
			sM()
		];
	} }));
}
cM.displayName = "SquareX";
//#endregion
//#region src/icons/square.tsx
var lM = /*#__PURE__*/ m("<svg><path d=\"M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z\"></svg>", !1, !0, !1);
function uM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return lM();
	} }));
}
uM.displayName = "Square";
//#endregion
//#region src/icons/star.tsx
var dM = /*#__PURE__*/ m("<svg><path d=\"M11.95 2.15a.05.05 0 0 1 .1 0l2.4 7.42q.02.03.06.03h7.8c.05 0 .07.06.03.1l-6.31 4.58-.02.05 2.4 7.42a.05.05 0 0 1-.07.06l-6.31-4.59h-.06l-6.31 4.59a.05.05 0 0 1-.08-.06L8 14.33q0-.03-.02-.05l-6.3-4.59a.05.05 0 0 1 .02-.09h7.8q.04 0 .05-.03z\"></svg>", !1, !0, !1);
function fM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return dM();
	} }));
}
fM.displayName = "Star";
//#endregion
//#region src/icons/stop-circle.tsx
var pM = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), mM = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=9 y=9 rx=1></svg>", !1, !0, !1);
function hM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [pM(), mM()];
	} }));
}
hM.displayName = "StopCircle";
//#endregion
//#region src/icons/sun-dim.tsx
var gM = /*#__PURE__*/ m("<svg><path d=\"M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"></svg>", !1, !0, !1), _M = /*#__PURE__*/ m("<svg><circle cx=4 cy=12 r=0.5></svg>", !1, !0, !1), vM = /*#__PURE__*/ m("<svg><circle cx=12 cy=4 r=0.5></svg>", !1, !0, !1), yM = /*#__PURE__*/ m("<svg><circle cx=20 cy=12 r=0.5></svg>", !1, !0, !1), bM = /*#__PURE__*/ m("<svg><circle cx=12 cy=20 r=0.5></svg>", !1, !0, !1), xM = /*#__PURE__*/ m("<svg><circle cx=6 cy=18 r=0.5></svg>", !1, !0, !1), SM = /*#__PURE__*/ m("<svg><circle cx=6 cy=6 r=0.5></svg>", !1, !0, !1), CM = /*#__PURE__*/ m("<svg><circle cx=18 cy=6 r=0.5></svg>", !1, !0, !1), wM = /*#__PURE__*/ m("<svg><circle cx=18 cy=18 r=0.5></svg>", !1, !0, !1);
function TM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gM(),
			_M(),
			vM(),
			yM(),
			bM(),
			xM(),
			SM(),
			CM(),
			wM()
		];
	} }));
}
TM.displayName = "SunDim";
//#endregion
//#region src/icons/sun-moon.tsx
var EM = /*#__PURE__*/ m("<svg><path d=\"M9.05 21c3.08 0 5.33-2.26 5.94-5.22.08-.41-.28-.77-.7-.75-5.73.23-5.68-3.17-5.36-5.3.06-.4-.26-.78-.67-.72A6 6 0 0 0 3 14.98 6.04 6.04 0 0 0 9.05 21\"></svg>", !1, !0, !1), DM = /*#__PURE__*/ m("<svg><path d=\"M15.97 12C15.8 10 15 8.07 12 8\"></svg>", !1, !0, !1), OM = /*#__PURE__*/ m("<svg><path d=\"M12 4V2\"></svg>", !1, !0, !1), kM = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), AM = /*#__PURE__*/ m("<svg><path d=\"M18 6.5 19.5 5\"></svg>", !1, !0, !1);
function jM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			EM(),
			DM(),
			OM(),
			kM(),
			AM()
		];
	} }));
}
jM.displayName = "SunMoon";
//#endregion
//#region src/icons/sun.tsx
var MM = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=4></svg>", !1, !0, !1), NM = /*#__PURE__*/ m("<svg><path d=\"M12 4V2\"></svg>", !1, !0, !1), PM = /*#__PURE__*/ m("<svg><path d=\"M12 20v2\"></svg>", !1, !0, !1), FM = /*#__PURE__*/ m("<svg><path d=\"M4 12H2\"></svg>", !1, !0, !1), IM = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), LM = /*#__PURE__*/ m("<svg><path d=\"M6.5 5.5 5 4\"></svg>", !1, !0, !1), RM = /*#__PURE__*/ m("<svg><path d=\"M17.5 5.5 19 4\"></svg>", !1, !0, !1), zM = /*#__PURE__*/ m("<svg><path d=\"M18.5 18.5 20 20\"></svg>", !1, !0, !1), BM = /*#__PURE__*/ m("<svg><path d=\"m4 20 1.5-1.5\"></svg>", !1, !0, !1);
function VM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			MM(),
			NM(),
			PM(),
			FM(),
			IM(),
			LM(),
			RM(),
			zM(),
			BM()
		];
	} }));
}
VM.displayName = "Sun";
//#endregion
//#region src/icons/swap-horizontal.tsx
var HM = /*#__PURE__*/ m("<svg><path d=\"M8 3 4.13 6.8c-.17.11-.17.29 0 .4L8 11\"></svg>", !1, !0, !1), UM = /*#__PURE__*/ m("<svg><path d=\"M6 7h14\"></svg>", !1, !0, !1), WM = /*#__PURE__*/ m("<svg><path d=\"m16 13 3.65 3.65c.2.2.2.5 0 .7L16 21\"></svg>", !1, !0, !1), GM = /*#__PURE__*/ m("<svg><path d=\"M4 17h14\"></svg>", !1, !0, !1);
function KM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			HM(),
			UM(),
			WM(),
			GM()
		];
	} }));
}
KM.displayName = "SwapHorizontal";
//#endregion
//#region src/icons/swap-vertical.tsx
var qM = /*#__PURE__*/ m("<svg><path d=\"M7 4v14\"></svg>", !1, !0, !1), JM = /*#__PURE__*/ m("<svg><path d=\"m3 16 3.65 3.65c.2.2.5.2.7 0L11 16\"></svg>", !1, !0, !1), YM = /*#__PURE__*/ m("<svg><path d=\"m13 8 3.65-3.65c.2-.2.5-.2.7 0L21 8\"></svg>", !1, !0, !1), XM = /*#__PURE__*/ m("<svg><path d=\"M17 6v14\"></svg>", !1, !0, !1);
function ZM(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qM(),
			JM(),
			YM(),
			XM()
		];
	} }));
}
ZM.displayName = "SwapVertical";
//#endregion
//#region src/icons/table-properties.tsx
var QM = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), $M = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), eN = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1), tN = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1);
function nN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			QM(),
			$M(),
			eN(),
			tN()
		];
	} }));
}
nN.displayName = "TableProperties";
//#endregion
//#region src/icons/tablet.tsx
var rN = /*#__PURE__*/ m("<svg><rect width=16 height=20 x=4 y=2 rx=2></svg>", !1, !0, !1), iN = /*#__PURE__*/ m("<svg><path d=\"M12.01 19H12\"></svg>", !1, !0, !1);
function aN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [rN(), iN()];
	} }));
}
aN.displayName = "Tablet";
//#endregion
//#region src/icons/tag-check.tsx
var oN = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), sN = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), cN = /*#__PURE__*/ m("<svg><path d=\"m14 10.12 1.98 1.98q.14.12.28 0L20 8\"></svg>", !1, !0, !1);
function lN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			oN(),
			sN(),
			cN()
		];
	} }));
}
lN.displayName = "TagCheck";
//#endregion
//#region src/icons/tag-minus.tsx
var uN = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), dN = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), fN = /*#__PURE__*/ m("<svg><path d=\"M16 11h6\"></svg>", !1, !0, !1);
function pN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			uN(),
			dN(),
			fN()
		];
	} }));
}
pN.displayName = "TagMinus";
//#endregion
//#region src/icons/tag-plus.tsx
var mN = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), hN = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), gN = /*#__PURE__*/ m("<svg><path d=\"M19 8v6\"></svg>", !1, !0, !1), _N = /*#__PURE__*/ m("<svg><path d=\"M16 11h6\"></svg>", !1, !0, !1);
function vN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mN(),
			hN(),
			gN(),
			_N()
		];
	} }));
}
vN.displayName = "TagPlus";
//#endregion
//#region src/icons/tag-x.tsx
var yN = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), bN = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), xN = /*#__PURE__*/ m("<svg><path d=\"m17 13 4-4\"></svg>", !1, !0, !1), SN = /*#__PURE__*/ m("<svg><path d=\"m17 9 4 4\"></svg>", !1, !0, !1);
function CN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			yN(),
			bN(),
			xN(),
			SN()
		];
	} }));
}
CN.displayName = "TagX";
//#endregion
//#region src/icons/tags.tsx
var wN = /*#__PURE__*/ m("<svg><path d=\"M7 9.33V2.77c0-.43.34-.77.77-.77h6.18q.3 0 .53.21l7.28 6.92c.3.3.32.78.03 1.08l-6.2 6.55c-.3.3-.78.32-1.08.03l-7.27-6.9A.8.8 0 0 1 7 9.33\"></svg>", !1, !0, !1), TN = /*#__PURE__*/ m("<svg><path d=\"M10.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), EN = /*#__PURE__*/ m("<svg><path d=\"M3 8v3.17a2 2 0 0 0 .59 1.42l7.4 7.4a2 2 0 0 0 2.3.37L14 20\"></svg>", !1, !0, !1);
function DN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			wN(),
			TN(),
			EN()
		];
	} }));
}
DN.displayName = "Tags";
//#endregion
//#region src/icons/target.tsx
var ON = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), kN = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=6></svg>", !1, !0, !1), AN = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=2></svg>", !1, !0, !1);
function jN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ON(),
			kN(),
			AN()
		];
	} }));
}
jN.displayName = "Target";
//#endregion
//#region src/icons/terminal.tsx
var MN = /*#__PURE__*/ m("<svg><path d=\"m4 5 5.86 5.86a.2.2 0 0 1 0 .28L4 17\"></svg>", !1, !0, !1), NN = /*#__PURE__*/ m("<svg><path d=\"M12 19h8\"></svg>", !1, !0, !1);
function PN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [MN(), NN()];
	} }));
}
PN.displayName = "Terminal";
//#endregion
//#region src/icons/thumbs-down.tsx
var FN = /*#__PURE__*/ m("<svg><path d=\"M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.26a1 1 0 0 0-.96.7l-2.16 6.93a.4.4 0 0 1-.48.24 4.1 4.1 0 0 1-2.66-3.4l-.4-3.66a.9.9 0 0 0-.9-.81h-6a1 1 0 0 1-.99-1.16l1.67-10A1 1 0 0 1 4.85 2H17m0 12V2\"></svg>", !1, !0, !1);
function IN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return FN();
	} }));
}
IN.displayName = "ThumbsDown";
//#endregion
//#region src/icons/thumbs-up.tsx
var LN = /*#__PURE__*/ m("<svg><path d=\"M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.26a1 1 0 0 0 .96-.7l2.16-6.93c.07-.2.29-.31.48-.24a4.1 4.1 0 0 1 2.66 3.4l.4 3.66a.9.9 0 0 0 .9.81h6a1 1 0 0 1 .99 1.16l-1.67 10a1 1 0 0 1-.99.84H7m0-12v12\"></svg>", !1, !0, !1);
function RN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return LN();
	} }));
}
RN.displayName = "ThumbsUp";
//#endregion
//#region src/icons/ticket.tsx
var zN = /*#__PURE__*/ m("<svg><path d=\"M2 9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2M2 15v2c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-2\"></svg>", !1, !0, !1), BN = /*#__PURE__*/ m("<svg><path d=\"M2 15a3 3 0 1 0 0-6\"></svg>", !1, !0, !1), VN = /*#__PURE__*/ m("<svg><path d=\"M22 15a3 3 0 1 1 0-6\"></svg>", !1, !0, !1), HN = /*#__PURE__*/ m("<svg><path d=\"M13 5v3m0 11v-2m0-5v1\"></svg>", !1, !0, !1);
function UN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zN(),
			BN(),
			VN(),
			HN()
		];
	} }));
}
UN.displayName = "Ticket";
//#endregion
//#region src/icons/trash-2.tsx
var WN = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m0 0h3M5 6v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2M8 6h8\"></svg>", !1, !0, !1), GN = /*#__PURE__*/ m("<svg><path d=\"M10 11v6\"></svg>", !1, !0, !1), KN = /*#__PURE__*/ m("<svg><path d=\"M14 11v6\"></svg>", !1, !0, !1);
function qN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			WN(),
			GN(),
			KN()
		];
	} }));
}
qN.displayName = "Trash2";
//#endregion
//#region src/icons/trash.tsx
var JN = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m16 0h-2M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6\"></svg>", !1, !0, !1);
function YN(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return JN();
	} }));
}
YN.displayName = "Trash";
//#endregion
//#region src/icons/truck-electric.tsx
var XN = /*#__PURE__*/ m("<svg><path d=\"M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), ZN = /*#__PURE__*/ m("<svg><path d=\"M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), QN = /*#__PURE__*/ m("<svg><path d=\"M5 18H4a2 2 0 0 1-2-2v-5m12 7V6a2 2 0 0 0-2-2H8\"></svg>", !1, !0, !1), $N = /*#__PURE__*/ m("<svg><path d=\"M4 2 2.13 5.74c-.05.1.04.2.14.17l2.51-.84c.1-.03.18.06.16.15L4 8.5\"></svg>", !1, !0, !1), eP = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), tP = /*#__PURE__*/ m("<svg><path d=\"M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14\"></svg>", !1, !0, !1);
function nP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			XN(),
			ZN(),
			QN(),
			$N(),
			eP(),
			tP()
		];
	} }));
}
nP.displayName = "TruckElectric";
//#endregion
//#region src/icons/truck.tsx
var rP = /*#__PURE__*/ m("<svg><circle cx=7 cy=18 r=2></svg>", !1, !0, !1), iP = /*#__PURE__*/ m("<svg><circle cx=17 cy=18 r=2></svg>", !1, !0, !1), aP = /*#__PURE__*/ m("<svg><path d=\"M5 18H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12\"></svg>", !1, !0, !1), oP = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), sP = /*#__PURE__*/ m("<svg><path d=\"M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14\"></svg>", !1, !0, !1);
function cP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			rP(),
			iP(),
			aP(),
			oP(),
			sP()
		];
	} }));
}
cP.displayName = "Truck";
//#endregion
//#region src/icons/tv.tsx
var lP = /*#__PURE__*/ m("<svg><rect width=20 height=15 x=2 y=7 rx=3></svg>", !1, !0, !1), uP = /*#__PURE__*/ m("<svg><path d=\"m8 2 4 5\"></svg>", !1, !0, !1), dP = /*#__PURE__*/ m("<svg><path d=\"m16 2-4 5\"></svg>", !1, !0, !1);
function fP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			lP(),
			uP(),
			dP()
		];
	} }));
}
fP.displayName = "Tv";
//#endregion
//#region src/icons/undo-2.tsx
var pP = /*#__PURE__*/ m("<svg><path d=\"M4 9h10.5a5.5 5.5 0 1 1 0 11H12\"></svg>", !1, !0, !1), mP = /*#__PURE__*/ m("<svg><path d=\"M9 4 4.14 8.86a.2.2 0 0 0 0 .28L9 14\"></svg>", !1, !0, !1);
function hP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [pP(), mP()];
	} }));
}
hP.displayName = "Undo2";
//#endregion
//#region src/icons/unlink.tsx
var gP = /*#__PURE__*/ m("<svg><path d=\"m16.46 20.21.68 2.13\"></svg>", !1, !0, !1), _P = /*#__PURE__*/ m("<svg><path d=\"m3.93 7.3-2.11-.75\"></svg>", !1, !0, !1), vP = /*#__PURE__*/ m("<svg><path d=\"m19.68 17.09 2.1.74\"></svg>", !1, !0, !1), yP = /*#__PURE__*/ m("<svg><path d=\"m7.15 4.17-.68-2.13\"></svg>", !1, !0, !1), bP = /*#__PURE__*/ m("<svg><path d=\"M12.95 4.46a5 5 0 1 1 7.07 7.08l-2.83 2.82a5 5 0 0 1-7.07 0\"></svg>", !1, !0, !1), xP = /*#__PURE__*/ m("<svg><path d=\"M11.54 20.02a5 5 0 1 1-7.08-7.07l2.83-2.83a5 5 0 0 1 7.07 0\"></svg>", !1, !0, !1);
function SP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gP(),
			_P(),
			vP(),
			yP(),
			bP(),
			xP()
		];
	} }));
}
SP.displayName = "Unlink";
//#endregion
//#region src/icons/upload.tsx
var CP = /*#__PURE__*/ m("<svg><path d=\"M3 14v5c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-5\"></svg>", !1, !0, !1), wP = /*#__PURE__*/ m("<svg><path d=\"m7 8 4.65-4.65c.2-.2.5-.2.7 0L17 8\"></svg>", !1, !0, !1), TP = /*#__PURE__*/ m("<svg><path d=\"M12 4v11\"></svg>", !1, !0, !1);
function EP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			CP(),
			wP(),
			TP()
		];
	} }));
}
EP.displayName = "Upload";
//#endregion
//#region src/icons/user-check.tsx
var DP = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), OP = /*#__PURE__*/ m("<svg><path d=\"M15 14.75A8 8 0 0 0 2 21\"></svg>", !1, !0, !1), kP = /*#__PURE__*/ m("<svg><path d=\"m16 19.33 1.6 1.34a.5.5 0 0 0 .72-.07L22 16\"></svg>", !1, !0, !1);
function AP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			DP(),
			OP(),
			kP()
		];
	} }));
}
AP.displayName = "UserCheck";
//#endregion
//#region src/icons/user-cog.tsx
var jP = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), MP = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), NP = /*#__PURE__*/ m("<svg><circle cx=19 cy=19 r=2></svg>", !1, !0, !1), PP = /*#__PURE__*/ m("<svg><path d=\"M19 16v1\"></svg>", !1, !0, !1), FP = /*#__PURE__*/ m("<svg><path d=\"M19 21v1\"></svg>", !1, !0, !1), IP = /*#__PURE__*/ m("<svg><path d=\"M16 19h1\"></svg>", !1, !0, !1), LP = /*#__PURE__*/ m("<svg><path d=\"M21 19h1\"></svg>", !1, !0, !1), RP = /*#__PURE__*/ m("<svg><path d=\"m17 17 .5.5\"></svg>", !1, !0, !1), zP = /*#__PURE__*/ m("<svg><path d=\"m20.5 20.5.5.5\"></svg>", !1, !0, !1), BP = /*#__PURE__*/ m("<svg><path d=\"m17 21 .5-.5\"></svg>", !1, !0, !1), VP = /*#__PURE__*/ m("<svg><path d=\"m20.5 17.5.5-.5\"></svg>", !1, !0, !1);
function HP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jP(),
			MP(),
			NP(),
			PP(),
			FP(),
			IP(),
			LP(),
			RP(),
			zP(),
			BP(),
			VP()
		];
	} }));
}
HP.displayName = "UserCog";
//#endregion
//#region src/icons/user-lock.tsx
var UP = /*#__PURE__*/ m("<svg><path d=\"M11 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), WP = /*#__PURE__*/ m("<svg><path d=\"M14.15 12.64A8 8 0 0 0 3 20\"></svg>", !1, !0, !1), GP = /*#__PURE__*/ m("<svg><path d=\"M21.61 18H15.4c-.22 0-.39.16-.39.36v3.28c0 .2.17.36.39.36h6.22c.22 0 .39-.16.39-.36v-3.28c0-.2-.17-.36-.39-.36Z\"></svg>", !1, !0, !1), KP = /*#__PURE__*/ m("<svg><path d=\"M17 18v-1.33c0-.92.67-1.67 1.5-1.67s1.5.75 1.5 1.67V18\"></svg>", !1, !0, !1);
function qP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			UP(),
			WP(),
			GP(),
			KP()
		];
	} }));
}
qP.displayName = "UserLock";
//#endregion
//#region src/icons/user-minus.tsx
var JP = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), YP = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), XP = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function ZP(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			JP(),
			YP(),
			XP()
		];
	} }));
}
ZP.displayName = "UserMinus";
//#endregion
//#region src/icons/user-plus.tsx
var QP = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), $P = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), eF = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), tF = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1);
function nF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			QP(),
			$P(),
			eF(),
			tF()
		];
	} }));
}
nF.displayName = "UserPlus";
//#endregion
//#region src/icons/user-search.tsx
var rF = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), iF = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), aF = /*#__PURE__*/ m("<svg><circle cx=19 cy=19 r=2></svg>", !1, !0, !1), oF = /*#__PURE__*/ m("<svg><path d=\"M20.5 20.5 22 22\"></svg>", !1, !0, !1);
function sF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			rF(),
			iF(),
			aF(),
			oF()
		];
	} }));
}
sF.displayName = "UserSearch";
//#endregion
//#region src/icons/user-x.tsx
var cF = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), lF = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), uF = /*#__PURE__*/ m("<svg><path d=\"m17 17 5 5\"></svg>", !1, !0, !1), dF = /*#__PURE__*/ m("<svg><path d=\"m17 22 5-5\"></svg>", !1, !0, !1);
function fF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			cF(),
			lF(),
			uF(),
			dF()
		];
	} }));
}
fF.displayName = "UserX";
//#endregion
//#region src/icons/user.tsx
var pF = /*#__PURE__*/ m("<svg><circle cx=12 cy=8 r=5></svg>", !1, !0, !1), mF = /*#__PURE__*/ m("<svg><path d=\"M20 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1);
function hF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [pF(), mF()];
	} }));
}
hF.displayName = "User";
//#endregion
//#region src/icons/users-shield.tsx
var gF = /*#__PURE__*/ m("<svg><path d=\"M11 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), _F = /*#__PURE__*/ m("<svg><path d=\"M14.15 12.64A8 8 0 0 0 3 20\"></svg>", !1, !0, !1), vF = /*#__PURE__*/ m("<svg><path d=\"M16 16.12q0-.08.09-.08c.91 0 1.8-.29 2.54-.8l.3-.22q.07-.04.14 0l.3.21c.73.52 1.63.8 2.54.8q.08 0 .09.09v2.36A3.7 3.7 0 0 1 19 22a3.7 3.7 0 0 1-3-3.52z\"></svg>", !1, !0, !1);
function yF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			gF(),
			_F(),
			vF()
		];
	} }));
}
yF.displayName = "UsersShield";
//#endregion
//#region src/icons/users.tsx
var bF = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), xF = /*#__PURE__*/ m("<svg><path d=\"M18 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1), SF = /*#__PURE__*/ m("<svg><path d=\"M18 4c.83 1.33 2 4.9 0 8.5\"></svg>", !1, !0, !1), CF = /*#__PURE__*/ m("<svg><path d=\"M18 12.5c1.5 1.33 4.4 4.9 4 8.5\"></svg>", !1, !0, !1);
function wF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			bF(),
			xF(),
			SF(),
			CF()
		];
	} }));
}
wF.displayName = "Users";
//#endregion
//#region src/icons/van.tsx
var TF = /*#__PURE__*/ m("<svg><path d=\"M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), EF = /*#__PURE__*/ m("<svg><path d=\"M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), DF = /*#__PURE__*/ m("<svg><path d=\"M5 18H4c-1.1 0-2-.77-2-1.71V7.7C2 6.77 2.9 6 4 6h11.56a2 2 0 0 1 1.9 1.37L19 12\"></svg>", !1, !0, !1), OF = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), kF = /*#__PURE__*/ m("<svg><path d=\"M19.55 18H20a2 2 0 0 0 2-2v-.7a3 3 0 0 0-.83-2.08l-.28-.3a3 3 0 0 0-2.17-.92H14a1 1 0 0 1-1-1V6\"></svg>", !1, !0, !1);
function AF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			TF(),
			EF(),
			DF(),
			OF(),
			kF()
		];
	} }));
}
AF.displayName = "Van";
//#endregion
//#region src/icons/video-camera.tsx
var jF = /*#__PURE__*/ m("<svg><path d=\"M14.21 7H4.8a.77.77 0 0 0-.79.75v7.5c0 .41.35.75.79.75h9.42c.44 0 .79-.34.79-.75v-7.5a.77.77 0 0 0-.79-.75Z\"></svg>", !1, !0, !1), MF = /*#__PURE__*/ m("<svg><path d=\"m15 12.1 3.7 1.8c.56.27 1.3-.02 1.3-.5V9.6c0-.48-.74-.77-1.3-.5L15 10.9\"></svg>", !1, !0, !1), NF = /*#__PURE__*/ m("<svg><path d=\"m7 21 2.14-3.57a1 1 0 0 1 1.72 0L13 21\"></svg>", !1, !0, !1), PF = /*#__PURE__*/ m("<svg><circle cx=6.5 cy=3.5 r=1.5></svg>", !1, !0, !1), FF = /*#__PURE__*/ m("<svg><circle cx=11.5 cy=3.5 r=1.5></svg>", !1, !0, !1);
function IF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jF(),
			MF(),
			NF(),
			PF(),
			FF()
		];
	} }));
}
IF.displayName = "VideoCamera";
//#endregion
//#region src/icons/video.tsx
var LF = /*#__PURE__*/ m("<svg><rect width=14 height=12 x=2 y=6 rx=1></svg>", !1, !0, !1), RF = /*#__PURE__*/ m("<svg><path d=\"m16 13 4.45 2.96a1 1 0 0 0 1.55-.83V8.87a1 1 0 0 0-1.55-.83L16 11\"></svg>", !1, !0, !1);
function zF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [LF(), RF()];
	} }));
}
zF.displayName = "Video";
//#endregion
//#region src/icons/volume-1.tsx
var BF = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), VF = /*#__PURE__*/ m("<svg><path d=\"M17 7c1.17 1.33 2.8 5.2 0 10\"></svg>", !1, !0, !1);
function HF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [BF(), VF()];
	} }));
}
HF.displayName = "Volume1";
//#endregion
//#region src/icons/volume-2.tsx
var UF = /*#__PURE__*/ m("<svg><path d=\"M2 15V9a1 1 0 0 1 1-1h3.67a1 1 0 0 0 .6-.2l2.93-2.2a.5.5 0 0 1 .8.4v12.12a.5.5 0 0 1-.76.43l-4-2.4a1 1 0 0 0-.52-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), WF = /*#__PURE__*/ m("<svg><path d=\"M16 9c.83 1 2 3.6 0 6\"></svg>", !1, !0, !1), GF = /*#__PURE__*/ m("<svg><path d=\"M19 5c2.33 2.33 5.6 8.4 0 14\"></svg>", !1, !0, !1);
function KF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			UF(),
			WF(),
			GF()
		];
	} }));
}
KF.displayName = "Volume2";
//#endregion
//#region src/icons/volume-off.tsx
var qF = /*#__PURE__*/ m("<svg><path d=\"M7 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.72a1 1 0 0 1 .52.14l4 2.4a.5.5 0 0 0 .76-.42V12\"></svg>", !1, !0, !1), JF = /*#__PURE__*/ m("<svg><path d=\"m10 5.75.2-.15a.5.5 0 0 1 .8.4v1\"></svg>", !1, !0, !1), YF = /*#__PURE__*/ m("<svg><path d=\"M16 9a5 5 0 0 1 1.08 3.5\"></svg>", !1, !0, !1), XF = /*#__PURE__*/ m("<svg><path d=\"M19 5c1.92 1.92 4.47 6.37 2.2 11\"></svg>", !1, !0, !1), ZF = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function QF(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qF(),
			JF(),
			YF(),
			XF(),
			ZF()
		];
	} }));
}
QF.displayName = "VolumeOff";
//#endregion
//#region src/icons/volume-x.tsx
var $F = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), eI = /*#__PURE__*/ m("<svg><path d=\"m16 9 6 6\"></svg>", !1, !0, !1), tI = /*#__PURE__*/ m("<svg><path d=\"m22 9-6 6\"></svg>", !1, !0, !1);
function nI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			$F(),
			eI(),
			tI()
		];
	} }));
}
nI.displayName = "VolumeX";
//#endregion
//#region src/icons/volume.tsx
var rI = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1);
function iI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return rI();
	} }));
}
iI.displayName = "Volume";
//#endregion
//#region src/icons/wallet-cards.tsx
var aI = /*#__PURE__*/ m("<svg><path d=\"M21 9H5a2 2 0 1 1 0-4h4\"></svg>", !1, !0, !1), oI = /*#__PURE__*/ m("<svg><path d=\"M21 13V9\"></svg>", !1, !0, !1), sI = /*#__PURE__*/ m("<svg><path d=\"M21 16.63V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7\"></svg>", !1, !0, !1), cI = /*#__PURE__*/ m("<svg><path d=\"M17 15c0-1.1.9-2 2-2h2.93q.06 0 .07.07v3.86q0 .06-.07.07H19a2 2 0 0 1-2-2\"></svg>", !1, !0, !1), lI = /*#__PURE__*/ m("<svg><path d=\"m18.5 9.04.26-.26a2 2 0 0 0 0-2.83l-3.53-3.54a2 2 0 0 0-2.83 0L5.8 9\"></svg>", !1, !0, !1), uI = /*#__PURE__*/ m("<svg><path d=\"m10.59 9.17 5.65-5.66\"></svg>", !1, !0, !1);
function dI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			aI(),
			oI(),
			sI(),
			cI(),
			lI(),
			uI()
		];
	} }));
}
dI.displayName = "WalletCards";
//#endregion
//#region src/icons/wallet.tsx
var fI = /*#__PURE__*/ m("<svg><path d=\"M21 7h-3m0 0H5a2 2 0 1 1 0-4h11a2 2 0 0 1 2 2z\"></svg>", !1, !0, !1), pI = /*#__PURE__*/ m("<svg><path d=\"M21 12V7\"></svg>", !1, !0, !1), mI = /*#__PURE__*/ m("<svg><path d=\"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5\"></svg>", !1, !0, !1), hI = /*#__PURE__*/ m("<svg><path d=\"M17 14c0-1.1.9-2 2-2h2.93q.06 0 .07.07v3.86q0 .06-.07.07H19a2 2 0 0 1-2-2\"></svg>", !1, !0, !1);
function gI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			fI(),
			pI(),
			mI(),
			hI()
		];
	} }));
}
gI.displayName = "Wallet";
//#endregion
//#region src/icons/wand-sparkles.tsx
var _I = /*#__PURE__*/ m("<svg><rect width=4 height=25.5 x=19.53 y=1.5 rx=1 transform=\"rotate(45 19.53 1.5)\"></svg>", !1, !0, !1), vI = /*#__PURE__*/ m("<svg><path d=\"m13 9 2 2\"></svg>", !1, !0, !1), yI = /*#__PURE__*/ m("<svg><path d=\"M19 14v4\"></svg>", !1, !0, !1), bI = /*#__PURE__*/ m("<svg><path d=\"M5 6v4\"></svg>", !1, !0, !1), xI = /*#__PURE__*/ m("<svg><path d=\"M17 16h4\"></svg>", !1, !0, !1), SI = /*#__PURE__*/ m("<svg><path d=\"M3 8h4\"></svg>", !1, !0, !1), CI = /*#__PURE__*/ m("<svg><path d=\"M11 2v2\"></svg>", !1, !0, !1), wI = /*#__PURE__*/ m("<svg><path d=\"M10 3h2\"></svg>", !1, !0, !1);
function TI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_I(),
			vI(),
			yI(),
			bI(),
			xI(),
			SI(),
			CI(),
			wI()
		];
	} }));
}
TI.displayName = "WandSparkles";
//#endregion
//#region src/icons/wand.tsx
var EI = /*#__PURE__*/ m("<svg><path d=\"m12 12-9 9\"></svg>", !1, !0, !1), DI = /*#__PURE__*/ m("<svg><path d=\"M10 9H8\"></svg>", !1, !0, !1), OI = /*#__PURE__*/ m("<svg><path d=\"m12 6-1-1\"></svg>", !1, !0, !1), kI = /*#__PURE__*/ m("<svg><path d=\"M15 4V2\"></svg>", !1, !0, !1), AI = /*#__PURE__*/ m("<svg><path d=\"M20 9h2\"></svg>", !1, !0, !1), jI = /*#__PURE__*/ m("<svg><path d=\"M15 14v2\"></svg>", !1, !0, !1), MI = /*#__PURE__*/ m("<svg><path d=\"m18 12 1 1\"></svg>", !1, !0, !1), NI = /*#__PURE__*/ m("<svg><path d=\"m18 6 1-1\"></svg>", !1, !0, !1), PI = /*#__PURE__*/ m("<svg><circle cx=15 cy=9 r=0.5></svg>", !1, !0, !1);
function FI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			EI(),
			DI(),
			OI(),
			kI(),
			AI(),
			jI(),
			MI(),
			NI(),
			PI()
		];
	} }));
}
FI.displayName = "Wand";
//#endregion
//#region src/icons/wifi-off.tsx
var II = /*#__PURE__*/ m("<svg><path d=\"M12.01 20H12\"></svg>", !1, !0, !1), LI = /*#__PURE__*/ m("<svg><path d=\"M5 13a9.7 9.7 0 0 1 5-2.8\"></svg>", !1, !0, !1), RI = /*#__PURE__*/ m("<svg><path d=\"M17 11.53q1 .6 2 1.47\"></svg>", !1, !0, !1), zI = /*#__PURE__*/ m("<svg><path d=\"M9 16a5 5 0 0 1 6 0\"></svg>", !1, !0, !1), BI = /*#__PURE__*/ m("<svg><path d=\"M2 9c.9-.92 2.27-1.95 4-2.73\"></svg>", !1, !0, !1), VI = /*#__PURE__*/ m("<svg><path d=\"M11 5.02c3.25-.18 7.05.78 11 3.98\"></svg>", !1, !0, !1), HI = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function UI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			II(),
			LI(),
			RI(),
			zI(),
			BI(),
			VI(),
			HI()
		];
	} }));
}
UI.displayName = "WifiOff";
//#endregion
//#region src/icons/wifi.tsx
var WI = /*#__PURE__*/ m("<svg><path d=\"M12.01 20H12\"></svg>", !1, !0, !1), GI = /*#__PURE__*/ m("<svg><path d=\"M5 13c2.06-2.26 7.74-5.43 14 0\"></svg>", !1, !0, !1), KI = /*#__PURE__*/ m("<svg><path d=\"M9 16a5 5 0 0 1 6 0\"></svg>", !1, !0, !1), qI = /*#__PURE__*/ m("<svg><path d=\"M2 9c2.94-3.02 11.06-7.24 20 0\"></svg>", !1, !0, !1);
function JI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			WI(),
			GI(),
			KI(),
			qI()
		];
	} }));
}
JI.displayName = "Wifi";
//#endregion
//#region src/icons/window-restore.tsx
var YI = /*#__PURE__*/ m("<svg><rect width=14 height=14 x=2 y=8 rx=1></svg>", !1, !0, !1), XI = /*#__PURE__*/ m("<svg><path d=\"M8 4V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1\"></svg>", !1, !0, !1);
function ZI(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [YI(), XI()];
	} }));
}
ZI.displayName = "WindowRestore";
//#endregion
//#region src/icons/wrench.tsx
var QI = /*#__PURE__*/ m("<svg><path d=\"m10.5 10.5-5.72 5.72a1.98 1.98 0 0 0 2.75 2.85l5.97-5.57\"></svg>", !1, !0, !1), $I = /*#__PURE__*/ m("<svg><path d=\"m18 2.5-2.86 3.22a1.82 1.82 0 0 0 2.65 2.5L21 5\"></svg>", !1, !0, !1), eL = /*#__PURE__*/ m("<svg><path d=\"M18 2.5a4 4 0 0 0-2-.5 6 6 0 0 0-5.5 8.4\"></svg>", !1, !0, !1), tL = /*#__PURE__*/ m("<svg><path d=\"M21 5c.56.91 1 1.85 1 3a6 6 0 0 1-8.4 5.5\"></svg>", !1, !0, !1);
function nL(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			QI(),
			$I(),
			eL(),
			tL()
		];
	} }));
}
nL.displayName = "Wrench";
//#endregion
//#region src/icons/x.tsx
var rL = /*#__PURE__*/ m("<svg><path d=\"m6 6 12 12\"></svg>", !1, !0, !1), iL = /*#__PURE__*/ m("<svg><path d=\"M18 6 6 18\"></svg>", !1, !0, !1);
function aL(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [rL(), iL()];
	} }));
}
aL.displayName = "X";
//#endregion
//#region src/icons/zap-off.tsx
var oL = /*#__PURE__*/ m("<svg><path d=\"m18.48 12 1.8-2.1a.5.5 0 0 0-.37-.83h-4.66a.5.5 0 0 1-.5-.52l.2-6.2a.5.5 0 0 0-.86-.36L11.3 5\"></svg>", !1, !0, !1), sL = /*#__PURE__*/ m("<svg><path d=\"m8 8.55-4.23 4.63a.5.5 0 0 0 .37.84h5.1a.5.5 0 0 1 .5.54l-.6 6.9a.5.5 0 0 0 .87.37l5.45-6.33\"></svg>", !1, !0, !1), cL = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function lL(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			oL(),
			sL(),
			cL()
		];
	} }));
}
lL.displayName = "ZapOff";
//#endregion
//#region src/icons/zap.tsx
var uL = /*#__PURE__*/ m("<svg><path d=\"M14.09 1.99a.5.5 0 0 1 .86.36l-.2 6.2a.5.5 0 0 0 .5.52h4.66c.43 0 .66.5.38.83L10 21.83a.5.5 0 0 1-.88-.37l.6-6.9a.5.5 0 0 0-.5-.54H4.14a.5.5 0 0 1-.37-.84z\"></svg>", !1, !0, !1);
function dL(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return uL();
	} }));
}
dL.displayName = "Zap";
//#endregion
export { C as Activity, w as Alert, T as Angry, E as Annoyed, D as AreaChart, M as ArrowDown, O as ArrowDownFromLine, k as ArrowDownLeft, A as ArrowDownRight, j as ArrowDownToLine, F as ArrowLeft, N as ArrowLeftFromLine, P as ArrowLeftToLine, I as ArrowRightFromLine, L as ArrowRightToLine, R as ArrowUpFromLine, z as ArrowUpLeft, B as ArrowUpRight, V as ArrowUpToLine, H as BarChart, U as BarcodeRead, W as Baseline, Y as Battery, G as BatteryCharging, K as BatteryLow, q as BatteryMedium, J as BatteryWarning, Q as Bell, X as BellOff, Z as BellRing, an as Bitcoin, cn as Blocks, Cn as Bluetooth, fn as BluetoothConnected, _n as BluetoothOff, xn as BluetoothSearching, En as Bolt, Hn as Bookmark, kn as BookmarkCheck, Mn as BookmarkMinus, In as BookmarkPlus, Bn as BookmarkX, Zn as BotSmile, tr as Box, dr as Boxes, mr as Braces, kr as BrainCircuit, qr as Briefcase, Lr as BriefcaseConveyorBelt, Wr as BriefcaseMedical, ei as Brush, ma as Calendar, oi as CalendarCheck, pi as CalendarClock, wi as CalendarDays, Ai as CalendarHeart, Hi as CalendarMinus, Ii as CalendarMinus2, na as CalendarPlus, Yi as CalendarPlus2, la as CalendarX, _a as ChartLine, Ea as Chat, Sa as ChatBubbleLeftRight, ja as Check, ka as CheckCheck, Na as ChevronDown, Fa as ChevronLeft, La as ChevronRight, za as ChevronUp, Ga as ChevronsDown, Ha as ChevronsDownUp, Za as ChevronsLeft, Ja as ChevronsLeftRight, eo as ChevronsRight, oo as ChevronsUp, ro as ChevronsUpDown, uo as CircleArrowDown, ho as CircleArrowLeft, yo as CircleArrowOutUpLeft, Co as CircleArrowOutUpRight, Do as CircleArrowRight, jo as CircleArrowUp, Lo as CircleCheck, Po as CircleCheckBig, Bo as CircleChevronDown, Uo as CircleChevronLeft, Ko as CircleChevronRight, Yo as CircleChevronUp, $o as CircleUser, rs as CircleX, us as Clapperboard, zs as Clipboard, ms as ClipboardCheck, Cs as ClipboardList, Os as ClipboardPlus, Ns as ClipboardX, Ws as ClockArrowLeft, Pc as Cloud, Qs as CloudHail, tc as CloudLightning, ic as CloudMoon, cc as CloudOff, vc as CloudRain, pc as CloudRainWind, xc as CloudSnow, Oc as CloudSun, Mc as CloudUpload, Vc as Code, Rc as CodeXml, al as Cog, cl as Coin, _l as ColumnChart, fl as ColumnChartPlainIncreasing, bl as Columns2, wl as Columns3, El as Command, kl as Compass, Pl as Component, Kl as Copy, Rl as CopyCheck, Ul as CopyX, wu as Cpu, lu as CpuAi, Pu as CreditCard, Ou as CreditCardDisabled, Mu as CreditCardPlus, Lu as Crown, ed as Database, Wu as DatabaseBackup, Xu as DatabaseZap, id as Divide, cd as DollarSign, fd as Download, hd as DraftBook, Ed as Ear, Sd as EarOff, kd as Equal, Id as Equalizer, zd as Eraser, Ud as Euro, qd as ExternalLink, rf as Eye, $d as EyeClosed, sf as FastForward, sm as File, hf as FileCheck, df as FileCheck2, bf as FileClock, Af as FileCode, Tf as FileCodeCorner, Ff as FileDiff, Bf as FileInput, Xf as FileJson, Gf as FileJson2, tp as FileLock, lp as FileMinus, ap as FileMinus2, mp as FileOutput, wp as FilePlus, yp as FilePlus2, Op as FileQuestionMark, Np as FileSearch2, Lp as FileSymlink, Up as FileText, Jp as FileVolume, im as FileX, $p as FileX2, hm as Film, wm as FingerPrint, hh as Folder, Dm as FolderCheck, jm as FolderDown, Pm as FolderHeart, Rm as FolderLock, Vm as FolderMinus, Um as FolderOpen, qm as FolderPlus, Zm as FolderRoot, ah as FolderSearch, th as FolderSearch2, lh as FolderUp, ph as FolderX, bh as Frown, wh as GalleryHorizontal, Oh as GalleryVertical, Nh as Gem, Lh as GenericLayout, Uh as Gift, sg as GitBranch, Yh as GitBranchMinus, ng as GitBranchPlus, dg as GitCommitHorizontal, hg as GitCommitVertical, Dg as GitCompare, Sg as GitCompareArrows, Ng as GitFork, Rg as GitMerge, Ug as GitPullRequest, v_ as Globe, Jg as GlobeCheck, e_ as GlobeLock, c_ as GlobeOff, m_ as GlobeX, P_ as Grid2x2, w_ as Grid2x2Plus, A_ as Grid2x2X, J_ as Grid3x3, H_ as Grid3x3Plus, Z_ as Hammer, ev as Handbag, av as Hashtag, dv as HatGlasses, pv as Headphones, Cv as Heart, gv as HeartCrack, bv as HeartOff, Ev as Home, Jv as Image, jv as ImageMinus, Rv as ImageOff, Wv as ImagePlus, $v as Images, ty as Infinity, ay as Info, fy as Key, cy as KeyRound, hy as Laptop, Ty as Laugh, by as LaughWink, ky as Layers, Py as LayoutDashboard, zy as LayoutGrid, Wy as LayoutKanban, Zy as LayoutList, tb as LayoutPanelLeft, ab as LayoutPanelRight, lb as LayoutPanelTop, pb as LayoutTemplate, Db as Link, bb as Link2, $ as Link2Off, wb as LinkOff, cx as List, Nb as ListChevronsDownUp, zb as ListChevronsUpDown, Ub as ListFilter, Yb as ListOrdered, tx as ListTodo, Ax as Lock, fx as LockCheck, gx as LockKeyhole, Cx as LockOpen, bx as LockOpenKeyhole, Dx as LockSquare, Px as LogIn, Rx as LogOut, cS as Mail, Hx as MailCheck, Kx as MailMinus, Yx as MailOpen, eS as MailPlus, aS as MailX, jS as Map, mS as MapPin, dS as MapPinCheck, wS as MapPinned, BS as Meh, FS as MehBlank, QS as Menu, WS as MenuHorizontal, JS as MenuVertical, mC as MessageSquare, rC as MessageSquareMore, sC as MessageSquarePlus, fC as MessageSquareText, EC as Mic, bC as MicOff, CC as MicVintage, OC as Minus, MC as Monitor, LC as Moon, FC as MoonStar, BC as MousePointer, GC as Navigation, HC as Navigation2, JC as Notification, ZC as Nut, Nw as Package, rw as PackageCheck, lw as PackageMinus, mw as PackageOpen, xw as PackagePlus, Ow as PackageX, Rw as PaintBucket, Bw as Paperclip, Zw as Pause, Ww as PauseCircle, Jw as PauseSquare, eT as PenLine, aT as PenTool, cT as Pencil, fT as Percent, RT as Phone, gT as PhoneCall, bT as PhoneForward, wT as PhoneIncoming, OT as PhoneOff, MT as PhoneOutgoing, IT as PhoneX, VT as PieChart, WT as Pin, JT as Pipette, $T as Play, ZT as PlaySquare, sE as Plug, nE as PlugZap, uE as Plus, mE as PoundSterling, SE as Power, yE as PowerOff, PE as QrCode, BE as Radio, XE as Receipt, GE as ReceiptText, $E as Redo2, iD as RefreshCw, hD as Repeat, uD as Repeat1, vD as Rewind, xD as RotateCwSquare, wD as Rows2, OD as Rows3, MD as Save, tO as Scan, LD as ScanBarcode, HD as ScanFace, GD as ScanLine, $D as ScanQr, sO as Scissors, yO as Search, dO as SearchMinus, gO as SearchPlus, SO as Send, BO as Server, OO as ServerCrash, FO as ServerOff, KO as Settings, UO as SettingsControl, Ek as Shield, XO as ShieldAlert, $O as ShieldCheck, ik as ShieldEllipsis, ck as ShieldLock, fk as ShieldOff, gk as ShieldQuestion, bk as ShieldUser, wk as ShieldX, Rk as ShoppingBag, Ak as ShoppingBagCheck, Fk as ShoppingBagPlus, Xk as ShoppingCart, Gk as ShoppingCartPlus, nA as Shuffle, sA as SimCard, uA as SkipBack, pA as SkipForward, bA as SlidersHorizontal, DA as SlidersVertical, AA as Smartphone, qA as Smile, LA as SmilePlus, HA as SmileWink, aj as Sparkles, ej as SparklesText, uj as Speaker, hj as Split, uM as Square, vj as SquareActivity, Sj as SquareArrowDownLeft, Ej as SquareArrowDownRight, Aj as SquareArrowOutUpLeft, Pj as SquareArrowOutUpRight, Rj as SquareArrowUpLeft, Hj as SquareArrowUpRight, Gj as SquareChevronDown, Jj as SquareChevronLeft, Zj as SquareChevronRight, eM as SquareChevronUp, iM as SquareUser, cM as SquareX, fM as Star, hM as StopCircle, VM as Sun, TM as SunDim, jM as SunMoon, KM as SwapHorizontal, ZM as SwapVertical, nN as TableProperties, aN as Tablet, lN as TagCheck, pN as TagMinus, vN as TagPlus, CN as TagX, DN as Tags, jN as Target, PN as Terminal, IN as ThumbsDown, RN as ThumbsUp, UN as Ticket, YN as Trash, qN as Trash2, cP as Truck, nP as TruckElectric, fP as Tv, hP as Undo2, SP as Unlink, EP as Upload, hF as User, AP as UserCheck, HP as UserCog, qP as UserLock, ZP as UserMinus, nF as UserPlus, sF as UserSearch, fF as UserX, wF as Users, yF as UsersShield, AF as Van, zF as Video, IF as VideoCamera, iI as Volume, HF as Volume1, KF as Volume2, QF as VolumeOff, nI as VolumeX, gI as Wallet, dI as WalletCards, FI as Wand, TI as WandSparkles, JI as Wifi, UI as WifiOff, ZI as WindowRestore, nL as Wrench, aL as X, dL as Zap, lL as ZapOff };

//# sourceMappingURL=index.js.map