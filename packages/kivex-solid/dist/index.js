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
//#region src/icons/arrow-left-from-line.tsx
var Ae = /*#__PURE__*/ m("<svg><path d=\"m9 7-5.87 5.8c-.17.1-.17.29 0 .4L9 19\"></svg>", !1, !0, !1), je = /*#__PURE__*/ m("<svg><path d=\"M5 13h12\"></svg>", !1, !0, !1), Me = /*#__PURE__*/ m("<svg><path d=\"M21 6v14\"></svg>", !1, !0, !1);
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
		return [
			Ae(),
			je(),
			Me()
		];
	} }));
}
D.displayName = "ArrowLeftFromLine";
//#endregion
//#region src/icons/arrow-left-to-line.tsx
var Ne = /*#__PURE__*/ m("<svg><path d=\"m13 6-5.87 5.8c-.17.1-.17.29 0 .4L13 18\"></svg>", !1, !0, !1), Pe = /*#__PURE__*/ m("<svg><path d=\"M9 12h12\"></svg>", !1, !0, !1), Fe = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1);
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
			Ne(),
			Pe(),
			Fe()
		];
	} }));
}
O.displayName = "ArrowLeftToLine";
//#endregion
//#region src/icons/arrow-left.tsx
var Ie = /*#__PURE__*/ m("<svg><path d=\"m12 5-6.65 6.65a.5.5 0 0 0 0 .7L12 19\"></svg>", !1, !0, !1), Le = /*#__PURE__*/ m("<svg><path d=\"M6 12h13\"></svg>", !1, !0, !1);
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
		return [Ie(), Le()];
	} }));
}
k.displayName = "ArrowLeft";
//#endregion
//#region src/icons/arrow-right-from-line.tsx
var Re = /*#__PURE__*/ m("<svg><path d=\"M7 12h12\"></svg>", !1, !0, !1), ze = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1), Be = /*#__PURE__*/ m("<svg><path d=\"m15 6 5.85 5.65c.2.2.2.5 0 .7L15 18\"></svg>", !1, !0, !1);
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
		return [
			Re(),
			ze(),
			Be()
		];
	} }));
}
A.displayName = "ArrowRightFromLine";
//#endregion
//#region src/icons/arrow-right-to-line.tsx
var Ve = /*#__PURE__*/ m("<svg><path d=\"M3 12.05h12\"></svg>", !1, !0, !1), He = /*#__PURE__*/ m("<svg><path d=\"M21 5v14\"></svg>", !1, !0, !1), Ue = /*#__PURE__*/ m("<svg><path d=\"m11 6 5.65 5.65c.2.2.2.5 0 .7L11 18\"></svg>", !1, !0, !1);
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
			Ve(),
			He(),
			Ue()
		];
	} }));
}
j.displayName = "ArrowRightToLine";
//#endregion
//#region src/icons/arrow-up-from-line.tsx
var We = /*#__PURE__*/ m("<svg><path d=\"m6 9 5.65-5.85c.2-.2.5-.2.7 0L18 9\"></svg>", !1, !0, !1), Ge = /*#__PURE__*/ m("<svg><path d=\"M12 3.8V17\"></svg>", !1, !0, !1), Ke = /*#__PURE__*/ m("<svg><path d=\"M5 21h14\"></svg>", !1, !0, !1);
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
		return [
			We(),
			Ge(),
			Ke()
		];
	} }));
}
M.displayName = "ArrowUpFromLine";
//#endregion
//#region src/icons/arrow-up-left.tsx
var qe = /*#__PURE__*/ m("<svg><path d=\"m8 8 9 9\"></svg>", !1, !0, !1), Je = /*#__PURE__*/ m("<svg><path d=\"M7 17V7.5c0-.28.22-.5.5-.5H17\"></svg>", !1, !0, !1);
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
		return [qe(), Je()];
	} }));
}
N.displayName = "ArrowUpLeft";
//#endregion
//#region src/icons/arrow-up-right.tsx
var Ye = /*#__PURE__*/ m("<svg><path d=\"M7 7h9.5c.28 0 .5.22.5.5V17\"></svg>", !1, !0, !1), Xe = /*#__PURE__*/ m("<svg><path d=\"m7 17 9-9\"></svg>", !1, !0, !1);
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
		return [Ye(), Xe()];
	} }));
}
P.displayName = "ArrowUpRight";
//#endregion
//#region src/icons/arrow-up-to-line.tsx
var Ze = /*#__PURE__*/ m("<svg><path d=\"m5 13 5.65-5.85c.2-.2.5-.2.7 0L17 13\"></svg>", !1, !0, !1), Qe = /*#__PURE__*/ m("<svg><path d=\"M11 8v13.2\"></svg>", !1, !0, !1), $e = /*#__PURE__*/ m("<svg><path d=\"M5 3h14\"></svg>", !1, !0, !1);
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
		return [
			Ze(),
			Qe(),
			$e()
		];
	} }));
}
F.displayName = "ArrowUpToLine";
//#endregion
//#region src/icons/bar-chart.tsx
var et = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), tt = /*#__PURE__*/ m("<svg><path d=\"M7 6h4\"></svg>", !1, !0, !1), nt = /*#__PURE__*/ m("<svg><path d=\"M7 11h12\"></svg>", !1, !0, !1), rt = /*#__PURE__*/ m("<svg><path d=\"M7 16h8\"></svg>", !1, !0, !1);
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
			et(),
			tt(),
			nt(),
			rt()
		];
	} }));
}
I.displayName = "BarChart";
//#endregion
//#region src/icons/barcode-read.tsx
var it = /*#__PURE__*/ m("<svg><path d=\"M8.4 4H5a2 2 0 0 0-2 2v3.33M15.6 4H19a2 2 0 0 1 2 2v3.33M8.4 20H5a2 2 0 0 1-2-2v-3.33M15.6 20H19a2 2 0 0 0 2-2v-3.33\"></svg>", !1, !0, !1), at = /*#__PURE__*/ m("<svg><path d=\"M7 7v2m0 8v-5\"></svg>", !1, !0, !1), ot = /*#__PURE__*/ m("<svg><path d=\"M8 7v2m0 8v-5\"></svg>", !1, !0, !1), st = /*#__PURE__*/ m("<svg><path d=\"M12 7v2m0 8v-5\"></svg>", !1, !0, !1), ct = /*#__PURE__*/ m("<svg><path d=\"M16 7v2m0 8v-5\"></svg>", !1, !0, !1), lt = /*#__PURE__*/ m("<svg><path d=\"M17 7v2m0 8v-5\"></svg>", !1, !0, !1), ut = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
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
			it(),
			at(),
			ot(),
			st(),
			ct(),
			lt(),
			ut()
		];
	} }));
}
L.displayName = "BarcodeRead";
//#endregion
//#region src/icons/baseline.tsx
var dt = /*#__PURE__*/ m("<svg><path d=\"M4 20h16\"></svg>", !1, !0, !1), ft = /*#__PURE__*/ m("<svg><path d=\"M18 16 12.02 4.04a.02.02 0 0 0-.04 0L6 16\"></svg>", !1, !0, !1), pt = /*#__PURE__*/ m("<svg><path d=\"M8 12h8\"></svg>", !1, !0, !1);
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
			dt(),
			ft(),
			pt()
		];
	} }));
}
R.displayName = "Baseline";
//#endregion
//#region src/icons/bell-ring.tsx
var mt = /*#__PURE__*/ m("<svg><path d=\"M5.78 9.59C5.78 5.95 8.56 3 12 3s6.22 2.95 6.22 6.59v3.82q0 .89.38 1.68l1.02 2.17q.38.8.38 1.69V19H4v-.05q0-.89.38-1.69L5.4 15.1q.38-.8.38-1.68z\"></svg>", !1, !0, !1), ht = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1), gt = /*#__PURE__*/ m("<svg><path d=\"M2 8c.17-.83.5-3.5 3-6\"></svg>", !1, !0, !1), _t = /*#__PURE__*/ m("<svg><path d=\"M19 2c.83.83 2.6 3.2 3 6\"></svg>", !1, !0, !1);
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
		return [
			mt(),
			ht(),
			gt(),
			_t()
		];
	} }));
}
z.displayName = "BellRing";
//#endregion
//#region src/icons/bitcoin.tsx
var vt = /*#__PURE__*/ m("<svg><path d=\"m10.11 2.79-2.2 17.86\"></svg>", !1, !0, !1), yt = /*#__PURE__*/ m("<svg><path d=\"m7.85 4.5 5.46.67a3.5 3.5 0 1 1-.85 6.95L7 11.45\"></svg>", !1, !0, !1), bt = /*#__PURE__*/ m("<svg><path d=\"m7.07 11.46 5.46.67a3.5 3.5 0 0 1-.86 6.94l-5.45-.67\"></svg>", !1, !0, !1), xt = /*#__PURE__*/ m("<svg><path d=\"m14.09 3.23-.25 1.99M11.9 21.1l.25-1.98\"></svg>", !1, !0, !1);
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
		return [
			vt(),
			yt(),
			bt(),
			xt()
		];
	} }));
}
B.displayName = "Bitcoin";
//#endregion
//#region src/icons/bolt.tsx
var St = /*#__PURE__*/ m("<svg><path d=\"M3 8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18v7.64a2 2 0 0 1-1.03 1.75l-7 3.89a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82z\"></svg>", !1, !0, !1), Ct = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=4></svg>", !1, !0, !1);
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
		return [St(), Ct()];
	} }));
}
V.displayName = "Bolt";
//#endregion
//#region src/icons/bookmark.tsx
var wt = /*#__PURE__*/ m("<svg><path d=\"M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.23a1 1 0 0 1-1.52.86l-4.96-3a1 1 0 0 0-1.04 0l-4.96 3A1 1 0 0 1 5 20.23z\"></svg>", !1, !0, !1);
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
		return wt();
	} }));
}
H.displayName = "Bookmark";
//#endregion
//#region src/icons/bot-smile.tsx
var Tt = /*#__PURE__*/ m("<svg><path d=\"M5 9c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.04a2 2 0 0 0-1.56.75l-1.01 1.26a.5.5 0 0 1-.78 0l-1-1.26A2 2 0 0 0 9.03 19H7a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Et = /*#__PURE__*/ m("<svg><path d=\"M5 16H4a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1\"></svg>", !1, !0, !1), Dt = /*#__PURE__*/ m("<svg><path d=\"M19 16h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1\"></svg>", !1, !0, !1), Ot = /*#__PURE__*/ m("<svg><path d=\"M12 3v4\"></svg>", !1, !0, !1), kt = /*#__PURE__*/ m("<svg><path d=\"M9 3h6\"></svg>", !1, !0, !1), At = /*#__PURE__*/ m("<svg><path d=\"M14.5 14.5c-.52.6-1.4 1-2.5 1q-1.79.01-2.5-1\"></svg>", !1, !0, !1), jt = /*#__PURE__*/ m("<svg><circle cx=9 cy=11 r=0.5></svg>", !1, !0, !1), Mt = /*#__PURE__*/ m("<svg><circle cx=15 cy=11 r=0.5></svg>", !1, !0, !1);
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
			Tt(),
			Et(),
			Dt(),
			Ot(),
			kt(),
			At(),
			jt(),
			Mt()
		];
	} }));
}
U.displayName = "BotSmile";
//#endregion
//#region src/icons/braces.tsx
var Nt = /*#__PURE__*/ m("<svg><path d=\"M16 3h1a2 2 0 0 1 2 2v4.76a2 2 0 0 0 1.1 1.8l.54.26a.2.2 0 0 1 0 .36l-.53.27A2 2 0 0 0 19 14.24V19a2 2 0 0 1-2 2h-1\"></svg>", !1, !0, !1), Pt = /*#__PURE__*/ m("<svg><path d=\"M8 21H7a2 2 0 0 1-2-2v-4.76a2 2 0 0 0-1.1-1.8l-.54-.26a.2.2 0 0 1 0-.36l.53-.27A2 2 0 0 0 5 9.76V5c0-1.1.9-2 2-2h1\"></svg>", !1, !0, !1);
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
		return [Nt(), Pt()];
	} }));
}
W.displayName = "Braces";
//#endregion
//#region src/icons/brain-circuit.tsx
var Ft = /*#__PURE__*/ m("<svg><path d=\"M7 4c.27-1.17 1.3-2 2.5-2h1.59c.5 0 .91.4.91.91V21.1c0 .5-.4.91-.91.91H9.5c-1.2 0-2.24-.83-2.51-2\"></svg>", !1, !0, !1), It = /*#__PURE__*/ m("<svg><path d=\"M17 4c-.27-1.17-1.3-2-2.5-2h-1.6a.9.9 0 0 0-.91.91V21.1c0 .5.4.91.91.91h1.58c1.2 0 2.24-.83 2.51-2\"></svg>", !1, !0, !1), Lt = /*#__PURE__*/ m("<svg><path d=\"M5 15a3 3 0 1 1 0-6\"></svg>", !1, !0, !1), Rt = /*#__PURE__*/ m("<svg><path d=\"M19 15a3 3 0 1 0 0-6\"></svg>", !1, !0, !1), zt = /*#__PURE__*/ m("<svg><path d=\"M12 12v5a4 4 0 0 0 4-4v-1\"></svg>", !1, !0, !1), Bt = /*#__PURE__*/ m("<svg><path d=\"M16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), Vt = /*#__PURE__*/ m("<svg><path d=\"M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), Ht = /*#__PURE__*/ m("<svg><path d=\"M9 12h3\"></svg>", !1, !0, !1), Ut = /*#__PURE__*/ m("<svg><path d=\"M9 17c0 1.1.9 2 2 2h1v-2\"></svg>", !1, !0, !1), Wt = /*#__PURE__*/ m("<svg><path d=\"M15 7a1 1 0 0 0-1-1h-2v1\"></svg>", !1, !0, !1), Gt = /*#__PURE__*/ m("<svg><path d=\"M19 15c.67 1.33 1.2 4.2-2 5\"></svg>", !1, !0, !1), Kt = /*#__PURE__*/ m("<svg><path d=\"M17 4c1.33.33 3.6 1.8 2 5\"></svg>", !1, !0, !1), qt = /*#__PURE__*/ m("<svg><path d=\"M7 4c-1.33.33-3.6 1.8-2 5\"></svg>", !1, !0, !1), Jt = /*#__PURE__*/ m("<svg><path d=\"M5 15c-.67 1.33-1.2 4.2 2 5\"></svg>", !1, !0, !1);
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
			Ft(),
			It(),
			Lt(),
			Rt(),
			zt(),
			Bt(),
			Vt(),
			Ht(),
			Ut(),
			Wt(),
			Gt(),
			Kt(),
			qt(),
			Jt()
		];
	} }));
}
G.displayName = "BrainCircuit";
//#endregion
//#region src/icons/briefcase-conveyor-belt.tsx
var Yt = /*#__PURE__*/ m("<svg><path d=\"M18.4 6H5.6C4.72 6 4 6.58 4 7.29v6.42c0 .71.72 1.29 1.6 1.29h12.8c.88 0 1.6-.58 1.6-1.29V7.3c0-.72-.72-1.3-1.6-1.3\"></svg>", !1, !0, !1), Xt = /*#__PURE__*/ m("<svg><path d=\"M8 15V3.44C8 2.64 8.9 2 10 2h4c1.1 0 2 .65 2 1.44V15\"></svg>", !1, !0, !1), Zt = /*#__PURE__*/ m("<svg><path d=\"M4 19h16\"></svg>", !1, !0, !1), Qt = /*#__PURE__*/ m("<svg><path d=\"M6 19v2\"></svg>", !1, !0, !1), $t = /*#__PURE__*/ m("<svg><path d=\"M10 19v2\"></svg>", !1, !0, !1), en = /*#__PURE__*/ m("<svg><path d=\"M14 19v2\"></svg>", !1, !0, !1), tn = /*#__PURE__*/ m("<svg><path d=\"M18 19v2\"></svg>", !1, !0, !1);
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
			Yt(),
			Xt(),
			Zt(),
			Qt(),
			$t(),
			en(),
			tn()
		];
	} }));
}
K.displayName = "BriefcaseConveyorBelt";
//#endregion
//#region src/icons/briefcase-medical.tsx
var nn = /*#__PURE__*/ m("<svg><rect width=20 height=14 x=2 y=6 rx=2></svg>", !1, !0, !1), rn = /*#__PURE__*/ m("<svg><path d=\"M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2\"></svg>", !1, !0, !1), an = /*#__PURE__*/ m("<svg><path d=\"M6 6v14\"></svg>", !1, !0, !1), on = /*#__PURE__*/ m("<svg><path d=\"M18 6v14\"></svg>", !1, !0, !1), sn = /*#__PURE__*/ m("<svg><path d=\"M12 11v4\"></svg>", !1, !0, !1), cn = /*#__PURE__*/ m("<svg><path d=\"M10 13h4\"></svg>", !1, !0, !1);
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
			nn(),
			rn(),
			an(),
			on(),
			sn(),
			cn()
		];
	} }));
}
q.displayName = "BriefcaseMedical";
//#endregion
//#region src/icons/briefcase.tsx
var ln = /*#__PURE__*/ m("<svg><rect width=20 height=14 x=2 y=6 rx=2></svg>", !1, !0, !1), un = /*#__PURE__*/ m("<svg><path d=\"M8 20V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16\"></svg>", !1, !0, !1);
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
		return [ln(), un()];
	} }));
}
J.displayName = "Briefcase";
//#endregion
//#region src/icons/brush.tsx
var dn = /*#__PURE__*/ m("<svg><path d=\"m2.25 21.32 2.5-6.67A1 1 0 0 1 5.7 14h12.62a1 1 0 0 1 .93.65l2.5 6.67a.5.5 0 0 1-.46.68H2.72a.5.5 0 0 1-.47-.68\"></svg>", !1, !0, !1), fn = /*#__PURE__*/ m("<svg><path d=\"M6 14a2 2 0 1 1 0-4h4\"></svg>", !1, !0, !1), pn = /*#__PURE__*/ m("<svg><path d=\"M14 10h4a2 2 0 1 1 0 4\"></svg>", !1, !0, !1), mn = /*#__PURE__*/ m("<svg><path d=\"M10 10V4a2 2 0 1 1 4 0v6\"></svg>", !1, !0, !1), hn = /*#__PURE__*/ m("<svg><path d=\"m8 22 1-4\"></svg>", !1, !0, !1), gn = /*#__PURE__*/ m("<svg><path d=\"m16 22-1-4\"></svg>", !1, !0, !1);
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
		return [
			dn(),
			fn(),
			pn(),
			mn(),
			hn(),
			gn()
		];
	} }));
}
Y.displayName = "Brush";
//#endregion
//#region src/icons/calendar-check.tsx
var _n = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), vn = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), yn = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), bn = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), xn = /*#__PURE__*/ m("<svg><path d=\"m9 16.4 1.93 1.54q.07.05.13 0L15 14\"></svg>", !1, !0, !1);
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
			_n(),
			vn(),
			yn(),
			bn(),
			xn()
		];
	} }));
}
X.displayName = "CalendarCheck";
//#endregion
//#region src/icons/calendar-clock.tsx
var Sn = /*#__PURE__*/ m("<svg><path d=\"M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4\"></svg>", !1, !0, !1), Cn = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), wn = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Tn = /*#__PURE__*/ m("<svg><path d=\"M3 10h8\"></svg>", !1, !0, !1), En = /*#__PURE__*/ m("<svg><circle cx=17 cy=17 r=5></svg>", !1, !0, !1), Dn = /*#__PURE__*/ m("<svg><path d=\"M17 15v2.51l1.5.99\"></svg>", !1, !0, !1);
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
			Sn(),
			Cn(),
			wn(),
			Tn(),
			En(),
			Dn()
		];
	} }));
}
Z.displayName = "CalendarClock";
//#endregion
//#region src/icons/calendar-days.tsx
var On = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), kn = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), An = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), jn = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), Mn = /*#__PURE__*/ m("<svg><circle cx=8 cy=14 r=0.5></svg>", !1, !0, !1), Nn = /*#__PURE__*/ m("<svg><circle cx=8 cy=18 r=0.5></svg>", !1, !0, !1), Pn = /*#__PURE__*/ m("<svg><circle cx=12 cy=18 r=0.5></svg>", !1, !0, !1), Fn = /*#__PURE__*/ m("<svg><circle cx=16 cy=18 r=0.5></svg>", !1, !0, !1), In = /*#__PURE__*/ m("<svg><circle cx=12 cy=14 r=0.5></svg>", !1, !0, !1), Ln = /*#__PURE__*/ m("<svg><circle cx=16 cy=14 r=0.5></svg>", !1, !0, !1);
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
		return [
			On(),
			kn(),
			An(),
			jn(),
			Mn(),
			Nn(),
			Pn(),
			Fn(),
			In(),
			Ln()
		];
	} }));
}
Q.displayName = "CalendarDays";
//#endregion
//#region src/icons/calendar-x.tsx
var Rn = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), zn = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Bn = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Vn = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), Hn = /*#__PURE__*/ m("<svg><path d=\"m10 14 4 4\"></svg>", !1, !0, !1), Un = /*#__PURE__*/ m("<svg><path d=\"m10 18 4-4\"></svg>", !1, !0, !1);
function Wn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rn(),
			zn(),
			Bn(),
			Vn(),
			Hn(),
			Un()
		];
	} }));
}
Wn.displayName = "CalendarX";
//#endregion
//#region src/icons/calendar.tsx
var Gn = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=4 rx=2></svg>", !1, !0, !1), Kn = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), qn = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Jn = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1);
function Yn(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gn(),
			Kn(),
			qn(),
			Jn()
		];
	} }));
}
Yn.displayName = "Calendar";
//#endregion
//#region src/icons/chat.tsx
var Xn = /*#__PURE__*/ m("<svg><path d=\"M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v9.3a2 2 0 0 1-2 2H7.66a2 2 0 0 0-1.19.4L2.8 20.4A.5.5 0 0 1 2 20z\"></svg>", !1, !0, !1), Zn = /*#__PURE__*/ m("<svg><path d=\"M6 8h11\"></svg>", !1, !0, !1), Qn = /*#__PURE__*/ m("<svg><path d=\"M6 13h9\"></svg>", !1, !0, !1);
function $n(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Xn(),
			Zn(),
			Qn()
		];
	} }));
}
$n.displayName = "Chat";
//#endregion
//#region src/icons/check.tsx
var er = /*#__PURE__*/ m("<svg><path d=\"m4 11.61 5.28 5.24c.2.2.55.2.75 0L20 6\"></svg>", !1, !0, !1);
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
		return er();
	} }));
}
tr.displayName = "Check";
//#endregion
//#region src/icons/chevron-down.tsx
var nr = /*#__PURE__*/ m("<svg><path d=\"m6 9 5.65 5.65c.2.2.5.2.7 0L18 9\"></svg>", !1, !0, !1);
function rr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return nr();
	} }));
}
rr.displayName = "ChevronDown";
//#endregion
//#region src/icons/chevron-up.tsx
var ir = /*#__PURE__*/ m("<svg><path d=\"m6 15 5.65-5.65c.2-.2.5-.2.7 0L18 15\"></svg>", !1, !0, !1);
function ar(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return ir();
	} }));
}
ar.displayName = "ChevronUp";
//#endregion
//#region src/icons/chevrons-down-up.tsx
var or = /*#__PURE__*/ m("<svg><path d=\"m7 4 4.7 4.87a.4.4 0 0 0 .6 0L17 4\"></svg>", !1, !0, !1), sr = /*#__PURE__*/ m("<svg><path d=\"m7 20 4.65-4.65c.2-.2.5-.2.7 0L17 20\"></svg>", !1, !0, !1);
function cr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [or(), sr()];
	} }));
}
cr.displayName = "ChevronsDownUp";
//#endregion
//#region src/icons/chevrons-down.tsx
var lr = /*#__PURE__*/ m("<svg><path d=\"m7 6 4.7 4.87a.4.4 0 0 0 .6 0L17 6\"></svg>", !1, !0, !1), ur = /*#__PURE__*/ m("<svg><path d=\"m7 13 4.7 4.87a.4.4 0 0 0 .6 0L17 13\"></svg>", !1, !0, !1);
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
		return [lr(), ur()];
	} }));
}
dr.displayName = "ChevronsDown";
//#endregion
//#region src/icons/chevrons-up-down.tsx
var fr = /*#__PURE__*/ m("<svg><path d=\"m7 9 4.65-4.65c.2-.2.5-.2.7 0L17 9\"></svg>", !1, !0, !1), pr = /*#__PURE__*/ m("<svg><path d=\"m7 15 4.65 4.65c.2.2.5.2.7 0L17 15\"></svg>", !1, !0, !1);
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
mr.displayName = "ChevronsUpDown";
//#endregion
//#region src/icons/chevrons-up.tsx
var hr = /*#__PURE__*/ m("<svg><path d=\"m7 11 4.65-4.65c.2-.2.5-.2.7 0L17 11\"></svg>", !1, !0, !1), gr = /*#__PURE__*/ m("<svg><path d=\"m7 18 4.65-4.65c.2-.2.5-.2.7 0L17 18\"></svg>", !1, !0, !1);
function _r(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [hr(), gr()];
	} }));
}
_r.displayName = "ChevronsUp";
//#endregion
//#region src/icons/circle-arrow-left.tsx
var vr = /*#__PURE__*/ m("<svg><path d=\"m12 8-3.91 3.8a.3.3 0 0 0 0 .4L12 16\"></svg>", !1, !0, !1), yr = /*#__PURE__*/ m("<svg><path d=\"M9 12h7\"></svg>", !1, !0, !1), br = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function xr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			vr(),
			yr(),
			br()
		];
	} }));
}
xr.displayName = "CircleArrowLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-left.tsx
var Sr = /*#__PURE__*/ m("<svg><path d=\"m3 3 8 8\"></svg>", !1, !0, !1), Cr = /*#__PURE__*/ m("<svg><path d=\"M2 8V2.5c0-.28.22-.5.5-.5H8\"></svg>", !1, !0, !1), wr = /*#__PURE__*/ m("<svg><path d=\"M2 12A10 10 0 1 0 12 2\"></svg>", !1, !0, !1);
function Tr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Sr(),
			Cr(),
			wr()
		];
	} }));
}
Tr.displayName = "CircleArrowOutUpLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-right.tsx
var Er = /*#__PURE__*/ m("<svg><path d=\"M16 2h5.5c.28 0 .5.22.5.5V8\"></svg>", !1, !0, !1), Dr = /*#__PURE__*/ m("<svg><path d=\"m13 11 8-8\"></svg>", !1, !0, !1), Or = /*#__PURE__*/ m("<svg><path d=\"M22 12A10 10 0 1 1 12 2\"></svg>", !1, !0, !1);
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
			Er(),
			Dr(),
			Or()
		];
	} }));
}
kr.displayName = "CircleArrowOutUpRight";
//#endregion
//#region src/icons/circle-check-big.tsx
var Ar = /*#__PURE__*/ m("<svg><path d=\"M21.54 9A10 10 0 1 1 15 2.46\"></svg>", !1, !0, !1), jr = /*#__PURE__*/ m("<svg><path d=\"m9.5 10.5 2.23 1.85a1 1 0 0 0 1.44-.23L21 3\"></svg>", !1, !0, !1);
function Mr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ar(), jr()];
	} }));
}
Mr.displayName = "CircleCheckBig";
//#endregion
//#region src/icons/circle-check.tsx
var Nr = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Pr = /*#__PURE__*/ m("<svg><path d=\"m9 13 1.73 1.35a1 1 0 0 0 1.44-.23L15 10\"></svg>", !1, !0, !1);
function Fr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Nr(), Pr()];
	} }));
}
Fr.displayName = "CircleCheck";
//#endregion
//#region src/icons/circle-chevron-down.tsx
var Ir = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.76 3.9c.13.13.35.13.48 0L16 10\"></svg>", !1, !0, !1), Lr = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function Rr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ir(), Lr()];
	} }));
}
Rr.displayName = "CircleChevronDown";
//#endregion
//#region src/icons/circle-chevron-up.tsx
var zr = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14\"></svg>", !1, !0, !1), Br = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1);
function Vr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [zr(), Br()];
	} }));
}
Vr.displayName = "CircleChevronUp";
//#endregion
//#region src/icons/circle-user.tsx
var Hr = /*#__PURE__*/ m("<svg><path d=\"M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"></svg>", !1, !0, !1), Ur = /*#__PURE__*/ m("<svg><path d=\"M18 20c0-2.76-2.69-5-6-5s-6 2.24-6 5\"></svg>", !1, !0, !1), Wr = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function Gr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Hr(),
			Ur(),
			Wr()
		];
	} }));
}
Gr.displayName = "CircleUser";
//#endregion
//#region src/icons/clapperboard.tsx
var Kr = /*#__PURE__*/ m("<svg><path d=\"M3 11v8c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-8\"></svg>", !1, !0, !1), qr = /*#__PURE__*/ m("<svg><path d=\"M3 11h18\"></svg>", !1, !0, !1), Jr = /*#__PURE__*/ m("<svg><path d=\"m3 11 17-5\"></svg>", !1, !0, !1), Yr = /*#__PURE__*/ m("<svg><path d=\"m7 6 3 3\"></svg>", !1, !0, !1), Xr = /*#__PURE__*/ m("<svg><path d=\"M12.5 4.5 15 7\"></svg>", !1, !0, !1), Zr = /*#__PURE__*/ m("<svg><path d=\"m3 11-.53-2.14a2 2 0 0 1 1.37-2.4L17 2.59a2 2 0 0 1 2.5 1.43L20 6\"></svg>", !1, !0, !1);
function Qr(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Kr(),
			qr(),
			Jr(),
			Yr(),
			Xr(),
			Zr()
		];
	} }));
}
Qr.displayName = "Clapperboard";
//#endregion
//#region src/icons/clipboard-check.tsx
var $r = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), ei = /*#__PURE__*/ m("<svg><rect width=8 height=4 x=8 y=2 rx=2></svg>", !1, !0, !1), ti = /*#__PURE__*/ m("<svg><path d=\"m9 14.12 1.98 1.98q.14.12.28 0L15 12\"></svg>", !1, !0, !1);
function ni(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			$r(),
			ei(),
			ti()
		];
	} }));
}
ni.displayName = "ClipboardCheck";
//#endregion
//#region src/icons/clipboard-list.tsx
var ri = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), ii = /*#__PURE__*/ m("<svg><rect width=8 height=4 x=8 y=2 rx=2></svg>", !1, !0, !1), ai = /*#__PURE__*/ m("<svg><path d=\"M12 18h4\"></svg>", !1, !0, !1), oi = /*#__PURE__*/ m("<svg><path d=\"M12 14h4\"></svg>", !1, !0, !1), si = /*#__PURE__*/ m("<svg><path d=\"M12 10h4\"></svg>", !1, !0, !1), ci = /*#__PURE__*/ m("<svg><circle cx=8 cy=18 r=0.5></svg>", !1, !0, !1), li = /*#__PURE__*/ m("<svg><circle cx=8 cy=14 r=0.5></svg>", !1, !0, !1), ui = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1);
function di(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ri(),
			ii(),
			ai(),
			oi(),
			si(),
			ci(),
			li(),
			ui()
		];
	} }));
}
di.displayName = "ClipboardList";
//#endregion
//#region src/icons/clipboard-plus.tsx
var fi = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), pi = /*#__PURE__*/ m("<svg><path d=\"M14 2h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4\"></svg>", !1, !0, !1), mi = /*#__PURE__*/ m("<svg><path d=\"M12 11v6\"></svg>", !1, !0, !1), hi = /*#__PURE__*/ m("<svg><path d=\"M9 14h6\"></svg>", !1, !0, !1);
function gi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			fi(),
			pi(),
			mi(),
			hi()
		];
	} }));
}
gi.displayName = "ClipboardPlus";
//#endregion
//#region src/icons/clipboard-x.tsx
var _i = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), vi = /*#__PURE__*/ m("<svg><path d=\"M14 2h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4\"></svg>", !1, !0, !1), yi = /*#__PURE__*/ m("<svg><path d=\"m9 11 6 6\"></svg>", !1, !0, !1), bi = /*#__PURE__*/ m("<svg><path d=\"m9 17 6-6\"></svg>", !1, !0, !1);
function xi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_i(),
			vi(),
			yi(),
			bi()
		];
	} }));
}
xi.displayName = "ClipboardX";
//#endregion
//#region src/icons/clipboard.tsx
var Si = /*#__PURE__*/ m("<svg><path d=\"M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2\"></svg>", !1, !0, !1), Ci = /*#__PURE__*/ m("<svg><rect width=8 height=4 x=8 y=2 rx=2></svg>", !1, !0, !1), wi = /*#__PURE__*/ m("<svg><path d=\"M8 10h4\"></svg>", !1, !0, !1), Ti = /*#__PURE__*/ m("<svg><path d=\"M8 14h8\"></svg>", !1, !0, !1), Ei = /*#__PURE__*/ m("<svg><path d=\"M8 18h5\"></svg>", !1, !0, !1);
function Di(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Si(),
			Ci(),
			wi(),
			Ti(),
			Ei()
		];
	} }));
}
Di.displayName = "Clipboard";
//#endregion
//#region src/icons/clock-arrow-left.tsx
var Oi = /*#__PURE__*/ m("<svg><path d=\"M22 12a10 10 0 1 0-10 10\"></svg>", !1, !0, !1), ki = /*#__PURE__*/ m("<svg><path d=\"m18 13-3.91 3.9c-.12.05-.12.15 0 .2L18 21\"></svg>", !1, !0, !1), Ai = /*#__PURE__*/ m("<svg><path d=\"M15 17h7\"></svg>", !1, !0, !1), ji = /*#__PURE__*/ m("<svg><path d=\"M12 6v5l1 1\"></svg>", !1, !0, !1);
function Mi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Oi(),
			ki(),
			Ai(),
			ji()
		];
	} }));
}
Mi.displayName = "ClockArrowLeft";
//#endregion
//#region src/icons/code-xml.tsx
var Ni = /*#__PURE__*/ m("<svg><path d=\"m18 8 3.86 3.86a.2.2 0 0 1 0 .28L18 16\"></svg>", !1, !0, !1), Pi = /*#__PURE__*/ m("<svg><path d=\"m6 8-3.86 3.86a.2.2 0 0 0 0 .28L6 16\"></svg>", !1, !0, !1), Fi = /*#__PURE__*/ m("<svg><path d=\"m14 4-4 16\"></svg>", !1, !0, !1);
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
			Ni(),
			Pi(),
			Fi()
		];
	} }));
}
Ii.displayName = "CodeXml";
//#endregion
//#region src/icons/code.tsx
var Li = /*#__PURE__*/ m("<svg><path d=\"m16 6 5.86 5.86a.2.2 0 0 1 0 .28L16 18\"></svg>", !1, !0, !1), Ri = /*#__PURE__*/ m("<svg><path d=\"m8 6-5.86 5.86a.2.2 0 0 0 0 .28L8 18\"></svg>", !1, !0, !1);
function zi(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Li(), Ri()];
	} }));
}
zi.displayName = "Code";
//#endregion
//#region src/icons/cog.tsx
var Bi = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=8></svg>", !1, !0, !1), Vi = /*#__PURE__*/ m("<svg><path d=\"M12 2v2\"></svg>", !1, !0, !1), Hi = /*#__PURE__*/ m("<svg><path d=\"M12 20v2\"></svg>", !1, !0, !1), Ui = /*#__PURE__*/ m("<svg><path d=\"M2 12h2\"></svg>", !1, !0, !1), Wi = /*#__PURE__*/ m("<svg><path d=\"M16 12h6\"></svg>", !1, !0, !1), Gi = /*#__PURE__*/ m("<svg><path d=\"M19.07 4.93 18 6\"></svg>", !1, !0, !1), Ki = /*#__PURE__*/ m("<svg><path d=\"m9 15-4.07 4.07\"></svg>", !1, !0, !1), qi = /*#__PURE__*/ m("<svg><path d=\"M4.93 4.93 9 9\"></svg>", !1, !0, !1), Ji = /*#__PURE__*/ m("<svg><path d=\"m18 18 1.07 1.07\"></svg>", !1, !0, !1), Yi = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=4></svg>", !1, !0, !1), Xi = /*#__PURE__*/ m("<svg><path d=\"m15.83 2.76-.39.93M8.17 21.24l.39-.93\"></svg>", !1, !0, !1), Zi = /*#__PURE__*/ m("<svg><path d=\"m21.24 8.17-.92.39\"></svg>", !1, !0, !1), Qi = /*#__PURE__*/ m("<svg><path d=\"m3.69 15.44-.93.39\"></svg>", !1, !0, !1), $i = /*#__PURE__*/ m("<svg><path d=\"m21.24 15.83-.93-.39\"></svg>", !1, !0, !1), ea = /*#__PURE__*/ m("<svg><path d=\"m3.69 8.56-.93-.39\"></svg>", !1, !0, !1), ta = /*#__PURE__*/ m("<svg><path d=\"m15.83 21.24-.39-.93\"></svg>", !1, !0, !1), na = /*#__PURE__*/ m("<svg><path d=\"m8.56 3.69-.39-.93\"></svg>", !1, !0, !1);
function ra(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Bi(),
			Vi(),
			Hi(),
			Ui(),
			Wi(),
			Gi(),
			Ki(),
			qi(),
			Ji(),
			Yi(),
			Xi(),
			Zi(),
			Qi(),
			$i(),
			ea(),
			ta(),
			na()
		];
	} }));
}
ra.displayName = "Cog";
//#endregion
//#region src/icons/coin.tsx
var ia = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=8></svg>", !1, !0, !1), aa = /*#__PURE__*/ m("<svg><path d=\"M11 9h.8q.18.02.2.2V15\"></svg>", !1, !0, !1);
function oa(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ia(), aa()];
	} }));
}
oa.displayName = "Coin";
//#endregion
//#region src/icons/column-chart-plain-increasing.tsx
var sa = /*#__PURE__*/ m("<svg><path d=\"M5 21v-6\"></svg>", !1, !0, !1), ca = /*#__PURE__*/ m("<svg><path d=\"M19 3v18\"></svg>", !1, !0, !1), la = /*#__PURE__*/ m("<svg><path d=\"M12 21V9\"></svg>", !1, !0, !1);
function ua(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			sa(),
			ca(),
			la()
		];
	} }));
}
ua.displayName = "ColumnChartPlainIncreasing";
//#endregion
//#region src/icons/column-chart.tsx
var da = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), fa = /*#__PURE__*/ m("<svg><path d=\"M8 17v-4\"></svg>", !1, !0, !1), pa = /*#__PURE__*/ m("<svg><path d=\"M13 5v12\"></svg>", !1, !0, !1), ma = /*#__PURE__*/ m("<svg><path d=\"M18 17V9\"></svg>", !1, !0, !1);
function ha(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			da(),
			fa(),
			pa(),
			ma()
		];
	} }));
}
ha.displayName = "ColumnChart";
//#endregion
//#region src/icons/columns-2.tsx
var ga = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), _a = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1);
function va(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ga(), _a()];
	} }));
}
va.displayName = "Columns2";
//#endregion
//#region src/icons/columns-3.tsx
var ya = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), ba = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), xa = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1);
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
			ya(),
			ba(),
			xa()
		];
	} }));
}
Sa.displayName = "Columns3";
//#endregion
//#region src/icons/compass.tsx
var Ca = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), wa = /*#__PURE__*/ m("<svg><path d=\"m13.05 14.32-4.67 1.55a.2.2 0 0 1-.25-.25l1.55-4.67a2 2 0 0 1 1.27-1.27l4.67-1.55c.16-.06.3.1.25.25l-1.55 4.67a2 2 0 0 1-1.27 1.27\"></svg>", !1, !0, !1);
function Ta(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ca(), wa()];
	} }));
}
Ta.displayName = "Compass";
//#endregion
//#region src/icons/copy-check.tsx
var Ea = /*#__PURE__*/ m("<svg><path d=\"M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2\"></svg>", !1, !0, !1), Da = /*#__PURE__*/ m("<svg><path d=\"M20 8H10a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), Oa = /*#__PURE__*/ m("<svg><path d=\"m12 15.12 1.98 1.98q.14.12.28 0L18 13\"></svg>", !1, !0, !1);
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
		return [
			Ea(),
			Da(),
			Oa()
		];
	} }));
}
ka.displayName = "CopyCheck";
//#endregion
//#region src/icons/copy-x.tsx
var Aa = /*#__PURE__*/ m("<svg><path d=\"M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2\"></svg>", !1, !0, !1), ja = /*#__PURE__*/ m("<svg><path d=\"M20 8H10a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), Ma = /*#__PURE__*/ m("<svg><path d=\"m12 12 6 6\"></svg>", !1, !0, !1), Na = /*#__PURE__*/ m("<svg><path d=\"m12 18 6-6\"></svg>", !1, !0, !1);
function Pa(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Aa(),
			ja(),
			Ma(),
			Na()
		];
	} }));
}
Pa.displayName = "CopyX";
//#endregion
//#region src/icons/copy.tsx
var Fa = /*#__PURE__*/ m("<svg><path d=\"M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2\"></svg>", !1, !0, !1), Ia = /*#__PURE__*/ m("<svg><rect width=14 height=14 x=8 y=8 rx=2></svg>", !1, !0, !1);
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
		return [Fa(), Ia()];
	} }));
}
La.displayName = "Copy";
//#endregion
//#region src/icons/credit-card-disabled.tsx
var Ra = /*#__PURE__*/ m("<svg><path d=\"M2 10v7c0 1.1.9 2 2 2h7m-9-9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20m0 0v1\"></svg>", !1, !0, !1), za = /*#__PURE__*/ m("<svg><circle cx=18 cy=17 r=3></svg>", !1, !0, !1), Ba = /*#__PURE__*/ m("<svg><path d=\"m16 16 4 2\"></svg>", !1, !0, !1);
function Va(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ra(),
			za(),
			Ba()
		];
	} }));
}
Va.displayName = "CreditCardDisabled";
//#endregion
//#region src/icons/credit-card-plus.tsx
var Ha = /*#__PURE__*/ m("<svg><path d=\"M2 10v7c0 1.1.9 2 2 2h7m-9-9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20m0 0v3\"></svg>", !1, !0, !1), Ua = /*#__PURE__*/ m("<svg><path d=\"M15 18h6\"></svg>", !1, !0, !1), Wa = /*#__PURE__*/ m("<svg><path d=\"M18 15v6\"></svg>", !1, !0, !1);
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
		return [
			Ha(),
			Ua(),
			Wa()
		];
	} }));
}
Ga.displayName = "CreditCardPlus";
//#endregion
//#region src/icons/credit-card.tsx
var Ka = /*#__PURE__*/ m("<svg><path d=\"M2 10v7c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-7M2 10V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20\"></svg>", !1, !0, !1);
function qa(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Ka();
	} }));
}
qa.displayName = "CreditCard";
//#endregion
//#region src/icons/crown.tsx
var Ja = /*#__PURE__*/ m("<svg><path d=\"M2.13 5.5a.2.2 0 0 1 .3-.21l5.4 3.6c.09.06.22.02.28-.08l3.72-6.5a.2.2 0 0 1 .34 0l3.72 6.5c.06.1.2.14.29.07l5.39-3.6a.2.2 0 0 1 .3.22L19.2 16.24a1 1 0 0 1-.97.76H5.78a1 1 0 0 1-.97-.76z\"></svg>", !1, !0, !1), Ya = /*#__PURE__*/ m("<svg><path d=\"M5 21h14\"></svg>", !1, !0, !1);
function Xa(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ja(), Ya()];
	} }));
}
Xa.displayName = "Crown";
//#endregion
//#region src/icons/divide.tsx
var Za = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1), Qa = /*#__PURE__*/ m("<svg><circle cx=12 cy=7 r=1></svg>", !1, !0, !1), $a = /*#__PURE__*/ m("<svg><circle cx=12 cy=17 r=1></svg>", !1, !0, !1);
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
		return [
			Za(),
			Qa(),
			$a()
		];
	} }));
}
eo.displayName = "Divide";
//#endregion
//#region src/icons/dollar-sign.tsx
var to = /*#__PURE__*/ m("<svg><path d=\"M11 3v18\"></svg>", !1, !0, !1), no = /*#__PURE__*/ m("<svg><path d=\"M15 6H9a3 3 0 0 0 0 6h4.36\"></svg>", !1, !0, !1), ro = /*#__PURE__*/ m("<svg><path d=\"M9.45 12H13a3 3 0 1 1 0 6H7\"></svg>", !1, !0, !1);
function io(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			to(),
			no(),
			ro()
		];
	} }));
}
io.displayName = "DollarSign";
//#endregion
//#region src/icons/download.tsx
var ao = /*#__PURE__*/ m("<svg><path d=\"M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4\"></svg>", !1, !0, !1), oo = /*#__PURE__*/ m("<svg><path d=\"m6 10 5.3 5.3a1 1 0 0 0 1.4 0L18 10\"></svg>", !1, !0, !1), so = /*#__PURE__*/ m("<svg><path d=\"M12 3v11\"></svg>", !1, !0, !1);
function co(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ao(),
			oo(),
			so()
		];
	} }));
}
co.displayName = "Download";
//#endregion
//#region src/icons/draft-book.tsx
var lo = /*#__PURE__*/ m("<svg><path d=\"M4 18v2c0 1.1.9 2 2 2h13.86M4 18h15.86M4 18V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v13.86q-.01.13-.14.14m.14 4h-.14m0-4-.58.54a2 2 0 0 0 0 2.92l.58.54\"></svg>", !1, !0, !1), uo = /*#__PURE__*/ m("<svg><path d=\"M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.28M12 6h3.5c.28 0 .5.22.5.5v1.28\"></svg>", !1, !0, !1);
function fo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [lo(), uo()];
	} }));
}
fo.displayName = "DraftBook";
//#endregion
//#region src/icons/equal.tsx
var po = /*#__PURE__*/ m("<svg><path d=\"M5 15h14\"></svg>", !1, !0, !1), mo = /*#__PURE__*/ m("<svg><path d=\"M5 9h14\"></svg>", !1, !0, !1);
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
		return [po(), mo()];
	} }));
}
ho.displayName = "Equal";
//#endregion
//#region src/icons/equalizer.tsx
var go = /*#__PURE__*/ m("<svg><path d=\"M2 10v4\"></svg>", !1, !0, !1), _o = /*#__PURE__*/ m("<svg><path d=\"M22 10v4\"></svg>", !1, !0, !1), vo = /*#__PURE__*/ m("<svg><path d=\"M6 6v12\"></svg>", !1, !0, !1), yo = /*#__PURE__*/ m("<svg><path d=\"M18 5v13\"></svg>", !1, !0, !1), bo = /*#__PURE__*/ m("<svg><path d=\"M10 3v17.5\"></svg>", !1, !0, !1), xo = /*#__PURE__*/ m("<svg><path d=\"M14 8v8\"></svg>", !1, !0, !1);
function So(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			vo(),
			yo(),
			bo(),
			xo()
		];
	} }));
}
So.displayName = "Equalizer";
//#endregion
//#region src/icons/eraser.tsx
var Co = /*#__PURE__*/ m("<svg><path d=\"M22 21h-9m0 0H8.46a1 1 0 0 1-.76-.35L2.6 14.7a1 1 0 0 1 .05-1.35L13.3 2.7a1 1 0 0 1 1.42 0l7.12 7.12a1 1 0 0 1 .03 1.38z\"></svg>", !1, !0, !1), wo = /*#__PURE__*/ m("<svg><path d=\"M5.64 10.59 14 19\"></svg>", !1, !0, !1);
function To(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Co(), wo()];
	} }));
}
To.displayName = "Eraser";
//#endregion
//#region src/icons/euro.tsx
var Eo = /*#__PURE__*/ m("<svg><path d=\"M19 5.07a8 8 0 1 0 0 13.86\"></svg>", !1, !0, !1), Do = /*#__PURE__*/ m("<svg><path d=\"M4 9h11\"></svg>", !1, !0, !1), Oo = /*#__PURE__*/ m("<svg><path d=\"M4 14h8\"></svg>", !1, !0, !1);
function ko(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Eo(),
			Do(),
			Oo()
		];
	} }));
}
ko.displayName = "Euro";
//#endregion
//#region src/icons/external-link.tsx
var Ao = /*#__PURE__*/ m("<svg><path d=\"M18 13v7.58c0 .23-.19.42-.42.42H3.42a.4.4 0 0 1-.42-.42V6.42c0-.23.19-.42.42-.42H11\"></svg>", !1, !0, !1), jo = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5c.28 0 .5.22.5.5V9\"></svg>", !1, !0, !1), Mo = /*#__PURE__*/ m("<svg><path d=\"M10 14 20 4\"></svg>", !1, !0, !1);
function No(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ao(),
			jo(),
			Mo()
		];
	} }));
}
No.displayName = "ExternalLink";
//#endregion
//#region src/icons/eye-closed.tsx
var Po = /*#__PURE__*/ m("<svg><path d=\"M21 8c0 3.31-4.03 6-9 6s-9-2.69-9-6\"></svg>", !1, !0, !1), Fo = /*#__PURE__*/ m("<svg><path d=\"m5 12-3 3\"></svg>", !1, !0, !1), Io = /*#__PURE__*/ m("<svg><path d=\"m19 12 3 3\"></svg>", !1, !0, !1), Lo = /*#__PURE__*/ m("<svg><path d=\"m9 14-1 4\"></svg>", !1, !0, !1), Ro = /*#__PURE__*/ m("<svg><path d=\"m14 14 1 4\"></svg>", !1, !0, !1);
function zo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Po(),
			Fo(),
			Io(),
			Lo(),
			Ro()
		];
	} }));
}
zo.displayName = "EyeClosed";
//#endregion
//#region src/icons/eye.tsx
var Bo = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1), Vo = /*#__PURE__*/ m("<svg><path d=\"M2 12C5 6.72 13.2-.68 22 12\"></svg>", !1, !0, !1), Ho = /*#__PURE__*/ m("<svg><path d=\"M22 12.02c-3 5.29-11.2 12.68-20 0\"></svg>", !1, !0, !1);
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
		return [
			Bo(),
			Vo(),
			Ho()
		];
	} }));
}
Uo.displayName = "Eye";
//#endregion
//#region src/icons/fast-forward.tsx
var Wo = /*#__PURE__*/ m("<svg><path d=\"M11.3 10.6a1.8 1.8 0 0 1 0 2.8L4.45 19c-.98.8-2.45.1-2.45-1.17V6.17A1.5 1.5 0 0 1 4.45 5z\"></svg>", !1, !0, !1), Go = /*#__PURE__*/ m("<svg><path d=\"M21.58 10.84c.73.6.73 1.72 0 2.32L14.45 19c-.98.8-2.45.1-2.45-1.17V6.17A1.5 1.5 0 0 1 14.45 5z\"></svg>", !1, !0, !1);
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
Ko.displayName = "FastForward";
//#endregion
//#region src/icons/file-diff.tsx
var qo = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h8.17a2 2 0 0 1 1.42.59L19.4 6.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Jo = /*#__PURE__*/ m("<svg><path d=\"M12 7v6\"></svg>", !1, !0, !1), Yo = /*#__PURE__*/ m("<svg><path d=\"M9 10h6\"></svg>", !1, !0, !1), Xo = /*#__PURE__*/ m("<svg><path d=\"M9 17h6\"></svg>", !1, !0, !1);
function Zo(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qo(),
			Jo(),
			Yo(),
			Xo()
		];
	} }));
}
Zo.displayName = "FileDiff";
//#endregion
//#region src/icons/file-symlink.tsx
var Qo = /*#__PURE__*/ m("<svg><path d=\"M4 11V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2h4\"></svg>", !1, !0, !1), $o = /*#__PURE__*/ m("<svg><path d=\"m8 12 2.96 2.96q.03.04 0 .08L8 18\"></svg>", !1, !0, !1), es = /*#__PURE__*/ m("<svg><path d=\"M14 3v5a1 1 0 0 0 1 1h5\"></svg>", !1, !0, !1);
function ts(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Qo(),
			$o(),
			es()
		];
	} }));
}
ts.displayName = "FileSymlink";
//#endregion
//#region src/icons/file-volume.tsx
var ns = /*#__PURE__*/ m("<svg><path d=\"M4 10V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2h-3\"></svg>", !1, !0, !1), rs = /*#__PURE__*/ m("<svg><path d=\"M13 2v5c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1), is = /*#__PURE__*/ m("<svg><path d=\"M3 19.07v-3.14a1 1 0 0 1 1-1h1.4a1 1 0 0 0 .66-.25l1.11-.96a.5.5 0 0 1 .83.38v6.94a.5.5 0 0 1-.79.41l-1.73-1.2a1 1 0 0 0-.57-.18H4a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), as = /*#__PURE__*/ m("<svg><path d=\"M11.99 14.53c.76.79 1.82 2.98.02 5.5\"></svg>", !1, !0, !1);
function os(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ns(),
			rs(),
			is(),
			as()
		];
	} }));
}
os.displayName = "FileVolume";
//#endregion
//#region src/icons/file.tsx
var ss = /*#__PURE__*/ m("<svg><path d=\"M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), cs = /*#__PURE__*/ m("<svg><path d=\"M13 2v5c0 1.1.9 2 2 2h5\"></svg>", !1, !0, !1);
function ls(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ss(), cs()];
	} }));
}
ls.displayName = "File";
//#endregion
//#region src/icons/film.tsx
var us = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), ds = /*#__PURE__*/ m("<svg><path d=\"M7 3v18M17 3v18\"></svg>", !1, !0, !1), fs = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), ps = /*#__PURE__*/ m("<svg><path d=\"M3 16.5h4\"></svg>", !1, !0, !1), ms = /*#__PURE__*/ m("<svg><path d=\"M3 7.5h4\"></svg>", !1, !0, !1), hs = /*#__PURE__*/ m("<svg><path d=\"M17 7.5h4\"></svg>", !1, !0, !1), gs = /*#__PURE__*/ m("<svg><path d=\"M17 16.5h4\"></svg>", !1, !0, !1);
function _s(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			us(),
			ds(),
			fs(),
			ps(),
			ms(),
			hs(),
			gs()
		];
	} }));
}
_s.displayName = "Film";
//#endregion
//#region src/icons/finger-print.tsx
var vs = /*#__PURE__*/ m("<svg><path d=\"M20 6c-1.61-2.43-4.87-4-8-4C7.03 2 2 5 2 12\"></svg>", !1, !0, !1), ys = /*#__PURE__*/ m("<svg><path d=\"M2 16v3\"></svg>", !1, !0, !1), bs = /*#__PURE__*/ m("<svg><path d=\"M21.5 10c.5 1.5.5 5 .5 7\"></svg>", !1, !0, !1), xs = /*#__PURE__*/ m("<svg><path d=\"M17.78 10.5q.21.75.22 1.5v8\"></svg>", !1, !0, !1), Ss = /*#__PURE__*/ m("<svg><path d=\"M15 6.87A5.7 5.7 0 0 0 12 6a6.1 6.1 0 0 0-5.11 3\"></svg>", !1, !0, !1), Cs = /*#__PURE__*/ m("<svg><path d=\"M6 13v7\"></svg>", !1, !0, !1), ws = /*#__PURE__*/ m("<svg><path d=\"M10 22v-3\"></svg>", !1, !0, !1), Ts = /*#__PURE__*/ m("<svg><path d=\"M14 22v-5m-4-2v-3a2 2 0 1 1 4 0v1\"></svg>", !1, !0, !1);
function Es(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			vs(),
			ys(),
			bs(),
			xs(),
			Ss(),
			Cs(),
			ws(),
			Ts()
		];
	} }));
}
Es.displayName = "FingerPrint";
//#endregion
//#region src/icons/folder.tsx
var Ds = /*#__PURE__*/ m("<svg><path d=\"M3 7c0-1.1.9-2 2-2h2.4a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1);
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
		return Ds();
	} }));
}
Os.displayName = "Folder";
//#endregion
//#region src/icons/frown.tsx
var ks = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), As = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), js = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1), Ms = /*#__PURE__*/ m("<svg><path d=\"M8 16a4.6 4.6 0 0 1 8 0\"></svg>", !1, !0, !1);
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
Ns.displayName = "Frown";
//#endregion
//#region src/icons/gallery-horizontal.tsx
var Ps = /*#__PURE__*/ m("<svg><path d=\"M2 3v18\"></svg>", !1, !0, !1), Fs = /*#__PURE__*/ m("<svg><path d=\"M22 3v18\"></svg>", !1, !0, !1), Is = /*#__PURE__*/ m("<svg><rect width=12 height=18 x=6 y=3 rx=2></svg>", !1, !0, !1);
function Ls(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			Is()
		];
	} }));
}
Ls.displayName = "GalleryHorizontal";
//#endregion
//#region src/icons/gallery-vertical.tsx
var Rs = /*#__PURE__*/ m("<svg><path d=\"M2.99 2h18\"></svg>", !1, !0, !1), zs = /*#__PURE__*/ m("<svg><path d=\"M3.01 22h18\"></svg>", !1, !0, !1), Bs = /*#__PURE__*/ m("<svg><rect width=18 height=12 x=3 y=6 rx=2></svg>", !1, !0, !1);
function Vs(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rs(),
			zs(),
			Bs()
		];
	} }));
}
Vs.displayName = "GalleryVertical";
//#endregion
//#region src/icons/gem.tsx
var Hs = /*#__PURE__*/ m("<svg><path d=\"M12.02 21.98h-.04L2.02 9.03A.02.02 0 0 1 2.04 9h19.92q.03 0 .02.03z\"></svg>", !1, !0, !1), Us = /*#__PURE__*/ m("<svg><path d=\"m2 9 3.4-5.1A2 2 0 0 1 7.08 3h9.86a2 2 0 0 1 1.66.9L22 9\"></svg>", !1, !0, !1), Ws = /*#__PURE__*/ m("<svg><path d=\"M10.67 3 8.32 8.3a2 2 0 0 0-.07 1.44L12 21\"></svg>", !1, !0, !1), Gs = /*#__PURE__*/ m("<svg><path d=\"m13.33 3 2.36 5.3a2 2 0 0 1 .06 1.44L12 21\"></svg>", !1, !0, !1);
function Ks(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Hs(),
			Us(),
			Ws(),
			Gs()
		];
	} }));
}
Ks.displayName = "Gem";
//#endregion
//#region src/icons/generic-layout.tsx
var qs = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), Js = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), Ys = /*#__PURE__*/ m("<svg><path d=\"M12 9v12\"></svg>", !1, !0, !1);
function Xs(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qs(),
			Js(),
			Ys()
		];
	} }));
}
Xs.displayName = "GenericLayout";
//#endregion
//#region src/icons/gift.tsx
var Zs = /*#__PURE__*/ m("<svg><rect width=16 height=10 x=4 y=11 rx=2></svg>", !1, !0, !1), Qs = /*#__PURE__*/ m("<svg><path d=\"M5.5 11H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.5\"></svg>", !1, !0, !1), $s = /*#__PURE__*/ m("<svg><path d=\"M12 7v14\"></svg>", !1, !0, !1), ec = /*#__PURE__*/ m("<svg><path d=\"M8 7 5.85 4.85A1.67 1.67 0 0 1 7.03 2h.42q.55 0 1.04.25l.34.16c.76.38 1.38 1 1.76 1.76L12 7\"></svg>", !1, !0, !1), tc = /*#__PURE__*/ m("<svg><path d=\"m16 7 2.15-2.15A1.67 1.67 0 0 0 16.97 2h-.42q-.55 0-1.04.25l-.34.16c-.76.38-1.38 1-1.76 1.76L12 7\"></svg>", !1, !0, !1);
function nc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Zs(),
			Qs(),
			$s(),
			ec(),
			tc()
		];
	} }));
}
nc.displayName = "Gift";
//#endregion
//#region src/icons/globe-check.tsx
var rc = /*#__PURE__*/ m("<svg><path d=\"M11 2.05A10 10 0 1 0 22 12\"></svg>", !1, !0, !1), ic = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), ac = /*#__PURE__*/ m("<svg><path d=\"M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10s4-4.48 4-10\"></svg>", !1, !0, !1), oc = /*#__PURE__*/ m("<svg><path d=\"m13 6 2.62 1.75c.21.14.5.1.67-.1L20 3\"></svg>", !1, !0, !1);
function sc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			rc(),
			ic(),
			ac(),
			oc()
		];
	} }));
}
sc.displayName = "GlobeCheck";
//#endregion
//#region src/icons/globe-lock.tsx
var cc = /*#__PURE__*/ m("<svg><path d=\"M21.8 14A10 10 0 1 1 11 2.05\"></svg>", !1, !0, !1), lc = /*#__PURE__*/ m("<svg><path d=\"M2 12h8\"></svg>", !1, !0, !1), uc = /*#__PURE__*/ m("<svg><path d=\"M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10 1.64 0 3.38-3.47 4-7\"></svg>", !1, !0, !1), dc = /*#__PURE__*/ m("<svg><rect width=8 height=5 x=13 y=6 rx=1></svg>", !1, !0, !1), fc = /*#__PURE__*/ m("<svg><path d=\"M15 5V4a2 2 0 1 1 4 0v1\"></svg>", !1, !0, !1);
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
			cc(),
			lc(),
			uc(),
			dc(),
			fc()
		];
	} }));
}
pc.displayName = "GlobeLock";
//#endregion
//#region src/icons/globe-off.tsx
var mc = /*#__PURE__*/ m("<svg><path d=\"M21.17 16q.81-1.85.83-4A10 10 0 0 0 8 2.83\"></svg>", !1, !0, !1), hc = /*#__PURE__*/ m("<svg><path d=\"M4.86 5A10 10 0 0 0 19 19.14\"></svg>", !1, !0, !1), gc = /*#__PURE__*/ m("<svg><path d=\"M2 12h10\"></svg>", !1, !0, !1), _c = /*#__PURE__*/ m("<svg><path d=\"M17 12h5\"></svg>", !1, !0, !1), vc = /*#__PURE__*/ m("<svg><path d=\"M15.98 11c-.1-2.52-.62-4.74-1.36-6.36C13.76 2.7 12.76 2 12 2s-1.75.71-2.62 2.64\"></svg>", !1, !0, !1), yc = /*#__PURE__*/ m("<svg><path d=\"M8.2 9Q8 10.42 8 12c0 2.93.54 5.53 1.38 7.36C10.25 21.3 11.25 22 12 22s1.75-.71 2.63-2.64c.42-.93.77-2.08 1.01-3.36\"></svg>", !1, !0, !1), bc = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
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
		return [
			mc(),
			hc(),
			gc(),
			_c(),
			vc(),
			yc(),
			bc()
		];
	} }));
}
xc.displayName = "GlobeOff";
//#endregion
//#region src/icons/globe-x.tsx
var Sc = /*#__PURE__*/ m("<svg><path d=\"M11 2.05A10 10 0 1 0 22 12\"></svg>", !1, !0, !1), Cc = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), wc = /*#__PURE__*/ m("<svg><path d=\"M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10s4-4.48 4-10\"></svg>", !1, !0, !1), Tc = /*#__PURE__*/ m("<svg><path d=\"m15 3 5 5\"></svg>", !1, !0, !1), Ec = /*#__PURE__*/ m("<svg><path d=\"m15 8 5-5\"></svg>", !1, !0, !1);
function Dc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			Ec()
		];
	} }));
}
Dc.displayName = "GlobeX";
//#endregion
//#region src/icons/globe.tsx
var Oc = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), kc = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), Ac = /*#__PURE__*/ m("<svg><path d=\"M12 2c.75 0 1.75.71 2.63 2.64A18 18 0 0 1 16 12c0 2.93-.54 5.53-1.37 7.36C13.75 21.3 12.75 22 12 22s-1.75-.71-2.62-2.64A18 18 0 0 1 8 12c0-2.93.54-5.53 1.38-7.36C10.25 2.7 11.25 2 12 2\"></svg>", !1, !0, !1);
function jc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Oc(),
			kc(),
			Ac()
		];
	} }));
}
jc.displayName = "Globe";
//#endregion
//#region src/icons/grid-2x2-plus.tsx
var Mc = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), Nc = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), Pc = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), Fc = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), Ic = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function Lc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Mc(),
			Nc(),
			Pc(),
			Fc(),
			Ic()
		];
	} }));
}
Lc.displayName = "Grid2x2Plus";
//#endregion
//#region src/icons/grid-2x2-x.tsx
var Rc = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), zc = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), Bc = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), Vc = /*#__PURE__*/ m("<svg><path d=\"m16 16 6 5\"></svg>", !1, !0, !1), Hc = /*#__PURE__*/ m("<svg><path d=\"m16 21 6-5\"></svg>", !1, !0, !1);
function Uc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rc(),
			zc(),
			Bc(),
			Vc(),
			Hc()
		];
	} }));
}
Uc.displayName = "Grid2x2X";
//#endregion
//#region src/icons/grid-2x2.tsx
var Wc = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1), Gc = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), Kc = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1);
function qc(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wc(),
			Gc(),
			Kc()
		];
	} }));
}
qc.displayName = "Grid2x2";
//#endregion
//#region src/icons/grid-3x3-plus.tsx
var Jc = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), Yc = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), Xc = /*#__PURE__*/ m("<svg><path d=\"M15 3v12\"></svg>", !1, !0, !1), Zc = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), Qc = /*#__PURE__*/ m("<svg><path d=\"M3 15h12\"></svg>", !1, !0, !1), $c = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), el = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function tl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Jc(),
			Yc(),
			Xc(),
			Zc(),
			Qc(),
			$c(),
			el()
		];
	} }));
}
tl.displayName = "Grid3x3Plus";
//#endregion
//#region src/icons/grid-3x3.tsx
var nl = /*#__PURE__*/ m("<svg><path d=\"M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), rl = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), il = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1), al = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), ol = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1);
function sl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nl(),
			rl(),
			il(),
			al(),
			ol()
		];
	} }));
}
sl.displayName = "Grid3x3";
//#endregion
//#region src/icons/hammer.tsx
var cl = /*#__PURE__*/ m("<svg><path d=\"m12.5 7.5-8.15 9a2.12 2.12 0 0 0 3.15 2.85L16 10\"></svg>", !1, !0, !1), ll = /*#__PURE__*/ m("<svg><path d=\"m19.6 11.88-2.5-1.97a.8.8 0 0 0-1.07.07.8.8 0 0 1-1.1.04l-2.3-1.99a.76.76 0 0 1-.05-1.11c.25-.25.3-.64.05-.88-1.2-1.18-3.84-1.63-5.58-2.33q0 0 0 0c5.97-3.43 9.4-.31 11.08 1.8.2.26.12.63-.17.8a.27.27 0 0 0-.04.44l3.58 2.91M18.7 13 22 9\"></svg>", !1, !0, !1);
function ul(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [cl(), ll()];
	} }));
}
ul.displayName = "Hammer";
//#endregion
//#region src/icons/handbag.tsx
var dl = /*#__PURE__*/ m("<svg><path d=\"M20.25 21H3.75a1.5 1.5 0 0 1-1.48-1.73L3.74 9.7A2 2 0 0 1 5.72 8h12.56a2 2 0 0 1 1.98 1.7l1.47 9.57A1.5 1.5 0 0 1 20.25 21\"></svg>", !1, !0, !1), fl = /*#__PURE__*/ m("<svg><path d=\"M16 12V6a4 4 0 0 0-8 0v6\"></svg>", !1, !0, !1);
function pl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [dl(), fl()];
	} }));
}
pl.displayName = "Handbag";
//#endregion
//#region src/icons/hashtag.tsx
var ml = /*#__PURE__*/ m("<svg><path d=\"M4 9h16\"></svg>", !1, !0, !1), hl = /*#__PURE__*/ m("<svg><path d=\"M4 15h16\"></svg>", !1, !0, !1), gl = /*#__PURE__*/ m("<svg><path d=\"m7 21 3-18\"></svg>", !1, !0, !1), _l = /*#__PURE__*/ m("<svg><path d=\"m14 21 3-18\"></svg>", !1, !0, !1);
function vl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ml(),
			hl(),
			gl(),
			_l()
		];
	} }));
}
vl.displayName = "Hashtag";
//#endregion
//#region src/icons/hat-glasses.tsx
var yl = /*#__PURE__*/ m("<svg><path d=\"m19 11-.68-6.15a2 2 0 0 0-2.89-1.57L14.02 4a2 2 0 0 1-1.1.2L9 3.8H7.74a2 2 0 0 0-1.98 1.72L5 11\"></svg>", !1, !0, !1), bl = /*#__PURE__*/ m("<svg><path d=\"M2 11h20\"></svg>", !1, !0, !1), xl = /*#__PURE__*/ m("<svg><circle cx=7 cy=18 r=3></svg>", !1, !0, !1), Sl = /*#__PURE__*/ m("<svg><circle cx=17 cy=18 r=3></svg>", !1, !0, !1), Cl = /*#__PURE__*/ m("<svg><path d=\"M10 18.5c.5-.83 2-2 4 0\"></svg>", !1, !0, !1);
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
			yl(),
			bl(),
			xl(),
			Sl(),
			Cl()
		];
	} }));
}
wl.displayName = "HatGlasses";
//#endregion
//#region src/icons/heart-crack.tsx
var Tl = /*#__PURE__*/ m("<svg><path d=\"m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16c.1.1.27.1.38 0l8.1-7.16a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7z\"></svg>", !1, !0, !1), El = /*#__PURE__*/ m("<svg><path d=\"m12 8-1 1.98.02.03 1.96.98v.03l-1.97 1.97V13L13 15\"></svg>", !1, !0, !1);
function Dl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Tl(), El()];
	} }));
}
Dl.displayName = "HeartCrack";
//#endregion
//#region src/icons/heart-off.tsx
var Ol = /*#__PURE__*/ m("<svg><path d=\"m16.73 16.82-4.54 4.01c-.1.1-.27.1-.38 0l-8.1-7.16A5.07 5.07 0 0 1 5 5.25\"></svg>", !1, !0, !1), kl = /*#__PURE__*/ m("<svg><path d=\"m19 14.81 1.29-1.14a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7h-.08l-1.19-1.27a5 5 0 0 0-1.27-1\"></svg>", !1, !0, !1), Al = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function jl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ol(),
			kl(),
			Al()
		];
	} }));
}
jl.displayName = "HeartOff";
//#endregion
//#region src/icons/heart.tsx
var Ml = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16c.1.1.27.1.38 0l8.1-7.16a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7z\"></svg>", !1, !0, !1), Nl = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
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
		return [Ml(), Nl()];
	} }));
}
Pl.displayName = "Heart";
//#endregion
//#region src/icons/home.tsx
var Fl = /*#__PURE__*/ m("<svg><path d=\"M3 9.47a1 1 0 0 1 .36-.77l8-6.67a1 1 0 0 1 1.28 0l8 6.67a1 1 0 0 1 .36.77V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), Il = /*#__PURE__*/ m("<svg><path d=\"M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7\"></svg>", !1, !0, !1);
function Ll(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Fl(), Il()];
	} }));
}
Ll.displayName = "Home";
//#endregion
//#region src/icons/image-minus.tsx
var Rl = /*#__PURE__*/ m("<svg><path d=\"M11 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-8\"></svg>", !1, !0, !1), zl = /*#__PURE__*/ m("<svg><path d=\"m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14\"></svg>", !1, !0, !1), Bl = /*#__PURE__*/ m("<svg><path d=\"M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), Vl = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function Hl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Rl(),
			zl(),
			Bl(),
			Vl()
		];
	} }));
}
Hl.displayName = "ImageMinus";
//#endregion
//#region src/icons/image-off.tsx
var Ul = /*#__PURE__*/ m("<svg><path d=\"M21 15V5a2 2 0 0 0-2-2H9\"></svg>", !1, !0, !1), Wl = /*#__PURE__*/ m("<svg><path d=\"M20.32 20.5A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .5-1.32\"></svg>", !1, !0, !1), Gl = /*#__PURE__*/ m("<svg><path d=\"m6 21 7-7\"></svg>", !1, !0, !1), Kl = /*#__PURE__*/ m("<svg><path d=\"m18 12 3 3\"></svg>", !1, !0, !1), ql = /*#__PURE__*/ m("<svg><path d=\"M10.73 10a2 2 0 1 1-3.05-2.5\"></svg>", !1, !0, !1), Jl = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function Yl(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ul(),
			Wl(),
			Gl(),
			Kl(),
			ql(),
			Jl()
		];
	} }));
}
Yl.displayName = "ImageOff";
//#endregion
//#region src/icons/image-plus.tsx
var Xl = /*#__PURE__*/ m("<svg><path d=\"M12 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-7\"></svg>", !1, !0, !1), Zl = /*#__PURE__*/ m("<svg><path d=\"m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14\"></svg>", !1, !0, !1), Ql = /*#__PURE__*/ m("<svg><path d=\"M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), $l = /*#__PURE__*/ m("<svg><path d=\"M19 2v6\"></svg>", !1, !0, !1), eu = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function tu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Xl(),
			Zl(),
			Ql(),
			$l(),
			eu()
		];
	} }));
}
tu.displayName = "ImagePlus";
//#endregion
//#region src/icons/image.tsx
var nu = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), ru = /*#__PURE__*/ m("<svg><path d=\"m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14\"></svg>", !1, !0, !1), iu = /*#__PURE__*/ m("<svg><circle cx=9 cy=9 r=2></svg>", !1, !0, !1);
function au(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nu(),
			ru(),
			iu()
		];
	} }));
}
au.displayName = "Image";
//#endregion
//#region src/icons/images.tsx
var ou = /*#__PURE__*/ m("<svg><rect width=14 height=14 x=8 y=2 rx=2></svg>", !1, !0, !1), su = /*#__PURE__*/ m("<svg><path d=\"m11 16 4.98-4.87a2 2 0 0 1 1.8-.53l4.22.84\"></svg>", !1, !0, !1), cu = /*#__PURE__*/ m("<svg><circle cx=13 cy=7 r=1></svg>", !1, !0, !1), lu = /*#__PURE__*/ m("<svg><path d=\"M3.47 8C2.66 8 2 8.66 2 9.47V20c0 1.1.9 2 2 2h10.44c.86 0 1.56-.7 1.56-1.56\"></svg>", !1, !0, !1);
function uu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ou(),
			su(),
			cu(),
			lu()
		];
	} }));
}
uu.displayName = "Images";
//#endregion
//#region src/icons/infinity.tsx
var du = /*#__PURE__*/ m("<svg><path d=\"M12 12 7.73 8.73C5.32 6.88 2 8.77 2 12s3.08 4.97 5.5 3.12zm0 0 4.5-3.27C18.92 6.88 22 8.77 22 12s-3.32 5.12-5.73 3.27z\"></svg>", !1, !0, !1);
function fu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return du();
	} }));
}
fu.displayName = "Infinity";
//#endregion
//#region src/icons/info.tsx
var pu = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), mu = /*#__PURE__*/ m("<svg><path d=\"M12 12v4\"></svg>", !1, !0, !1), hu = /*#__PURE__*/ m("<svg><circle cx=12 cy=8 r=0.5></svg>", !1, !0, !1);
function gu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			pu(),
			mu(),
			hu()
		];
	} }));
}
gu.displayName = "Info";
//#endregion
//#region src/icons/key-round.tsx
var _u = /*#__PURE__*/ m("<svg><path d=\"M10 8q0 1.2.45 2.28c.18.43.1.95-.24 1.26L2.33 18.7a1 1 0 0 0-.33.74V21a1 1 0 0 0 1 1h2.98Q6 22 6 21.98v-1.96q0-.02.02-.02h2.96Q9 20 9 19.98v-2.96q0-.02.02-.02h1.53a1 1 0 0 0 .75-.33l2.25-2.51c.27-.3.7-.4 1.1-.31A6.02 6.02 0 0 0 22 8a6 6 0 0 0-12 0\"></svg>", !1, !0, !1), vu = /*#__PURE__*/ m("<svg><circle cx=16.5 cy=7.5 r=0.5></svg>", !1, !0, !1);
function yu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [_u(), vu()];
	} }));
}
yu.displayName = "KeyRound";
//#endregion
//#region src/icons/key.tsx
var bu = /*#__PURE__*/ m("<svg><circle cx=7.5 cy=15.5 r=5.5></svg>", !1, !0, !1), xu = /*#__PURE__*/ m("<svg><path d=\"M11.5 11.5 20 2\"></svg>", !1, !0, !1), Su = /*#__PURE__*/ m("<svg><path d=\"m18.64 4.1 2.18 1.84a1 1 0 0 1 .08 1.45l-2.27 2.44a1 1 0 0 1-1.35.1l-1.99-1.55\"></svg>", !1, !0, !1);
function Cu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			bu(),
			xu(),
			Su()
		];
	} }));
}
Cu.displayName = "Key";
//#endregion
//#region src/icons/laugh-wink.tsx
var wu = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Tu = /*#__PURE__*/ m("<svg><path d=\"M8 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Eu = /*#__PURE__*/ m("<svg><path d=\"M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14Z\"></svg>", !1, !0, !1), Du = /*#__PURE__*/ m("<svg><path d=\"M13 9c.6-.94 1.69-1.68 3 0\"></svg>", !1, !0, !1);
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
			wu(),
			Tu(),
			Eu(),
			Du()
		];
	} }));
}
Ou.displayName = "LaughWink";
//#endregion
//#region src/icons/laugh.tsx
var ku = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Au = /*#__PURE__*/ m("<svg><path d=\"M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14Z\"></svg>", !1, !0, !1), ju = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Mu = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function Nu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			ju(),
			Mu()
		];
	} }));
}
Nu.displayName = "Laugh";
//#endregion
//#region src/icons/layout-dashboard.tsx
var Pu = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=3 y=3 rx=0.5></svg>", !1, !0, !1), Fu = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=14 y=12 rx=0.5></svg>", !1, !0, !1), Iu = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=3 y=16 rx=0.5></svg>", !1, !0, !1), Lu = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=14 y=3 rx=0.5></svg>", !1, !0, !1);
function Ru(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Pu(),
			Fu(),
			Iu(),
			Lu()
		];
	} }));
}
Ru.displayName = "LayoutDashboard";
//#endregion
//#region src/icons/layout-grid.tsx
var zu = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=3 rx=0.5></svg>", !1, !0, !1), Bu = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=3 rx=0.5></svg>", !1, !0, !1), Vu = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=14 rx=0.5></svg>", !1, !0, !1), Hu = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=14 rx=0.5></svg>", !1, !0, !1);
function Uu(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zu(),
			Bu(),
			Vu(),
			Hu()
		];
	} }));
}
Uu.displayName = "LayoutGrid";
//#endregion
//#region src/icons/layout-kanban.tsx
var Wu = /*#__PURE__*/ m("<svg><path d=\"M4 4h6\"></svg>", !1, !0, !1), Gu = /*#__PURE__*/ m("<svg><path d=\"M14 4h6\"></svg>", !1, !0, !1), Ku = /*#__PURE__*/ m("<svg><rect width=6 height=12 x=4 y=8 rx=2></svg>", !1, !0, !1), qu = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=14 y=8 rx=2></svg>", !1, !0, !1);
function Ju(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Wu(),
			Gu(),
			Ku(),
			qu()
		];
	} }));
}
Ju.displayName = "LayoutKanban";
//#endregion
//#region src/icons/layout-list.tsx
var Yu = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=3 rx=1></svg>", !1, !0, !1), Xu = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=14 rx=1></svg>", !1, !0, !1), Zu = /*#__PURE__*/ m("<svg><path d=\"M14 20h7\"></svg>", !1, !0, !1), Qu = /*#__PURE__*/ m("<svg><path d=\"M14 15h7\"></svg>", !1, !0, !1), $u = /*#__PURE__*/ m("<svg><path d=\"M14 9h7\"></svg>", !1, !0, !1), ed = /*#__PURE__*/ m("<svg><path d=\"M14 4h7\"></svg>", !1, !0, !1);
function td(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yu(),
			Xu(),
			Zu(),
			Qu(),
			$u(),
			ed()
		];
	} }));
}
td.displayName = "LayoutList";
//#endregion
//#region src/icons/layout-panel-left.tsx
var nd = /*#__PURE__*/ m("<svg><path d=\"M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), rd = /*#__PURE__*/ m("<svg><path d=\"M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), id = /*#__PURE__*/ m("<svg><rect width=7 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1);
function ad(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nd(),
			rd(),
			id()
		];
	} }));
}
ad.displayName = "LayoutPanelLeft";
//#endregion
//#region src/icons/layout-panel-right.tsx
var od = /*#__PURE__*/ m("<svg><path d=\"M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), sd = /*#__PURE__*/ m("<svg><path d=\"M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), cd = /*#__PURE__*/ m("<svg><path d=\"M21 3h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function ld(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			od(),
			sd(),
			cd()
		];
	} }));
}
ld.displayName = "LayoutPanelRight";
//#endregion
//#region src/icons/layout-panel-top.tsx
var ud = /*#__PURE__*/ m("<svg><path d=\"M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), dd = /*#__PURE__*/ m("<svg><path d=\"M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), fd = /*#__PURE__*/ m("<svg><rect width=18 height=7 x=3 y=3 rx=1></svg>", !1, !0, !1);
function pd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ud(),
			dd(),
			fd()
		];
	} }));
}
pd.displayName = "LayoutPanelTop";
//#endregion
//#region src/icons/layout-template.tsx
var md = /*#__PURE__*/ m("<svg><path d=\"M10.71 14H4.3c-.72 0-1.3.45-1.3 1v5c0 .55.58 1 1.29 1h6.42c.71 0 1.29-.45 1.29-1v-5c0-.55-.58-1-1.29-1\"></svg>", !1, !0, !1), hd = /*#__PURE__*/ m("<svg><path d=\"M20.29 14H16.7c-.39 0-.71.45-.71 1v5c0 .55.32 1 .71 1h3.58c.39 0 .71-.45.71-1v-5c0-.55-.32-1-.71-1Z\"></svg>", !1, !0, !1), gd = /*#__PURE__*/ m("<svg><path d=\"M20 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function _d(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			md(),
			hd(),
			gd()
		];
	} }));
}
_d.displayName = "LayoutTemplate";
//#endregion
//#region src/icons/link-2-off.tsx
var vd = /*#__PURE__*/ m("<svg><path d=\"M17 17a5 5 0 0 0 0-10h-1\"></svg>", !1, !0, !1), yd = /*#__PURE__*/ m("<svg><path d=\"M8 17H7A5 5 0 0 1 7 7\"></svg>", !1, !0, !1), bd = /*#__PURE__*/ m("<svg><path d=\"M7 12h5\"></svg>", !1, !0, !1), xd = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
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
			vd(),
			yd(),
			bd(),
			xd()
		];
	} }));
}
Sd.displayName = "Link2Off";
//#endregion
//#region src/icons/link-2.tsx
var Cd = /*#__PURE__*/ m("<svg><path d=\"M8 7H7a5 5 0 0 0 0 10h1m8-10h1a5 5 0 0 1 0 10h-1\"></svg>", !1, !0, !1), wd = /*#__PURE__*/ m("<svg><path d=\"M7 12h9\"></svg>", !1, !0, !1);
function Td(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Cd(), wd()];
	} }));
}
Td.displayName = "Link2";
//#endregion
//#region src/icons/link-off.tsx
var Ed = /*#__PURE__*/ m("<svg><path d=\"m16 15 3.75-3.72a4.99 4.99 0 1 0-7.04-7.06\"></svg>", !1, !0, !1), Dd = /*#__PURE__*/ m("<svg><path d=\"m8 9-3.75 3.72a4.99 4.99 0 1 0 7.04 7.06\"></svg>", !1, !0, !1), Od = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
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
		return [
			Ed(),
			Dd(),
			Od()
		];
	} }));
}
kd.displayName = "LinkOff";
//#endregion
//#region src/icons/link.tsx
var Ad = /*#__PURE__*/ m("<svg><path d=\"M12.7 4.22a5 5 0 0 1 7.08 7.07l-2.83 2.83a5 5 0 0 1-7.07 0\"></svg>", !1, !0, !1), jd = /*#__PURE__*/ m("<svg><path d=\"M11.3 19.78a5 5 0 1 1-7.08-7.07l2.83-2.83a5 5 0 0 1 7.07 0\"></svg>", !1, !0, !1);
function Md(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ad(), jd()];
	} }));
}
Md.displayName = "Link";
//#endregion
//#region src/icons/list-chevrons-down-up.tsx
var Nd = /*#__PURE__*/ m("<svg><path d=\"m14 19 3.25-2.9a.4.4 0 0 1 .5 0L21 19\"></svg>", !1, !0, !1), Pd = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), Fd = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), Id = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1), Ld = /*#__PURE__*/ m("<svg><path d=\"m14 5 3.25 2.9c.14.13.36.13.5 0L21 5\"></svg>", !1, !0, !1);
function Rd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Nd(),
			Pd(),
			Fd(),
			Id(),
			Ld()
		];
	} }));
}
Rd.displayName = "ListChevronsDownUp";
//#endregion
//#region src/icons/list-chevrons-up-down.tsx
var zd = /*#__PURE__*/ m("<svg><path d=\"m14 8 3.25-2.9a.4.4 0 0 1 .5 0L21 8\"></svg>", !1, !0, !1), Bd = /*#__PURE__*/ m("<svg><path d=\"m14 16 3.25 2.9c.14.13.36.13.5 0L21 16\"></svg>", !1, !0, !1), Vd = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), Hd = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), Ud = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1);
function Wd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			zd(),
			Bd(),
			Vd(),
			Hd(),
			Ud()
		];
	} }));
}
Wd.displayName = "ListChevronsUpDown";
//#endregion
//#region src/icons/list-filter.tsx
var Gd = /*#__PURE__*/ m("<svg><path d=\"M2 5h20\"></svg>", !1, !0, !1), Kd = /*#__PURE__*/ m("<svg><path d=\"M6 12h12\"></svg>", !1, !0, !1), qd = /*#__PURE__*/ m("<svg><path d=\"M10 19h4\"></svg>", !1, !0, !1);
function Jd(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gd(),
			Kd(),
			qd()
		];
	} }));
}
Jd.displayName = "ListFilter";
//#endregion
//#region src/icons/list-ordered.tsx
var Yd = /*#__PURE__*/ m("<svg><path d=\"M13 5h8\"></svg>", !1, !0, !1), Xd = /*#__PURE__*/ m("<svg><path d=\"M13 12h8\"></svg>", !1, !0, !1), Zd = /*#__PURE__*/ m("<svg><path d=\"M13 19h8\"></svg>", !1, !0, !1), Qd = /*#__PURE__*/ m("<svg><path d=\"M4.5 4h1c.28 0 .5.22.5.5V10m0 0H4.5M6 10h1.5\"></svg>", !1, !0, !1), $d = /*#__PURE__*/ m("<svg><path d=\"m4.5 15.29.63-.54a1.63 1.63 0 1 1 2.12 2.47L6 18.29l-.97.83a.5.5 0 0 0 .32.88H9\"></svg>", !1, !0, !1);
function ef(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yd(),
			Xd(),
			Zd(),
			Qd(),
			$d()
		];
	} }));
}
ef.displayName = "ListOrdered";
//#endregion
//#region src/icons/list-todo.tsx
var tf = /*#__PURE__*/ m("<svg><path d=\"M13 5h8\"></svg>", !1, !0, !1), nf = /*#__PURE__*/ m("<svg><path d=\"M13 12h8\"></svg>", !1, !0, !1), rf = /*#__PURE__*/ m("<svg><path d=\"M13 19h8\"></svg>", !1, !0, !1), af = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=3 y=4 rx=1></svg>", !1, !0, !1), of = /*#__PURE__*/ m("<svg><path d=\"m3 18 1.65 1.65c.2.2.5.2.7 0L9 16\"></svg>", !1, !0, !1);
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
		return [
			tf(),
			nf(),
			rf(),
			af(),
			of()
		];
	} }));
}
sf.displayName = "ListTodo";
//#endregion
//#region src/icons/list.tsx
var cf = /*#__PURE__*/ m("<svg><circle cx=3 cy=5 r=1></svg>", !1, !0, !1), lf = /*#__PURE__*/ m("<svg><circle cx=3 cy=12 r=1></svg>", !1, !0, !1), uf = /*#__PURE__*/ m("<svg><circle cx=3 cy=19 r=1></svg>", !1, !0, !1), df = /*#__PURE__*/ m("<svg><path d=\"M8 5h13\"></svg>", !1, !0, !1), ff = /*#__PURE__*/ m("<svg><path d=\"M8 12h13\"></svg>", !1, !0, !1), pf = /*#__PURE__*/ m("<svg><path d=\"M8 19h13\"></svg>", !1, !0, !1);
function mf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			uf(),
			df(),
			ff(),
			pf()
		];
	} }));
}
mf.displayName = "List";
//#endregion
//#region src/icons/lock-check.tsx
var hf = /*#__PURE__*/ m("<svg><path d=\"M21 13v-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h8\"></svg>", !1, !0, !1), gf = /*#__PURE__*/ m("<svg><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></svg>", !1, !0, !1), _f = /*#__PURE__*/ m("<svg><path d=\"m15 19.12 1.98 1.98q.14.12.28 0L21 17\"></svg>", !1, !0, !1);
function vf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			hf(),
			gf(),
			_f()
		];
	} }));
}
vf.displayName = "LockCheck";
//#endregion
//#region src/icons/lock-keyhole.tsx
var yf = /*#__PURE__*/ m("<svg><path d=\"M20 10H4c-.55 0-1 .49-1 1.1v9.8c0 .61.45 1.1 1 1.1h16c.55 0 1-.49 1-1.1v-9.8c0-.61-.45-1.1-1-1.1\"></svg>", !1, !0, !1), bf = /*#__PURE__*/ m("<svg><path d=\"M7 10V6.44C7 4 9.24 2 12 2s5 1.99 5 4.44V10\"></svg>", !1, !0, !1), xf = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=1></svg>", !1, !0, !1);
function Sf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			yf(),
			bf(),
			xf()
		];
	} }));
}
Sf.displayName = "LockKeyhole";
//#endregion
//#region src/icons/lock-open-keyhole.tsx
var Cf = /*#__PURE__*/ m("<svg><path d=\"M20 10H4c-.55 0-1 .49-1 1.1v9.8c0 .61.45 1.1 1 1.1h16c.55 0 1-.49 1-1.1v-9.8c0-.61-.45-1.1-1-1.1\"></svg>", !1, !0, !1), wf = /*#__PURE__*/ m("<svg><path d=\"M16.87 5c-.52-1.87-2.5-3-4.87-3-2.76 0-5 1.99-5 4.44V10\"></svg>", !1, !0, !1), Tf = /*#__PURE__*/ m("<svg><path d=\"M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1);
function Ef(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Cf(),
			wf(),
			Tf()
		];
	} }));
}
Ef.displayName = "LockOpenKeyhole";
//#endregion
//#region src/icons/lock-open.tsx
var Df = /*#__PURE__*/ m("<svg><path d=\"M20 11H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Of = /*#__PURE__*/ m("<svg><path d=\"M17 6a5.1 5.1 0 0 0-5-4 5 5 0 0 0-5 5v4\"></svg>", !1, !0, !1);
function kf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Df(), Of()];
	} }));
}
kf.displayName = "LockOpen";
//#endregion
//#region src/icons/lock-square.tsx
var Af = /*#__PURE__*/ m("<svg><path d=\"M16.44 11H7.56a.55.55 0 0 0-.56.55v4.9c0 .3.25.55.56.55h8.88c.31 0 .56-.24.56-.55v-4.9c0-.3-.25-.55-.56-.55\"></svg>", !1, !0, !1), jf = /*#__PURE__*/ m("<svg><path d=\"M10 11V9.22C10 8 10.9 7 12 7s2 1 2 2.22V11\"></svg>", !1, !0, !1), Mf = /*#__PURE__*/ m("<svg><path d=\"M19 21H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2\"></svg>", !1, !0, !1);
function Nf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Af(),
			jf(),
			Mf()
		];
	} }));
}
Nf.displayName = "LockSquare";
//#endregion
//#region src/icons/lock.tsx
var Pf = /*#__PURE__*/ m("<svg><rect width=18 height=11 x=3 y=11 rx=1></svg>", !1, !0, !1), Ff = /*#__PURE__*/ m("<svg><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></svg>", !1, !0, !1);
function If(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Pf(), Ff()];
	} }));
}
If.displayName = "Lock";
//#endregion
//#region src/icons/log-in.tsx
var Lf = /*#__PURE__*/ m("<svg><path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></svg>", !1, !0, !1), Rf = /*#__PURE__*/ m("<svg><path d=\"m10 7 5.08 4.23a1 1 0 0 1 0 1.54L10 17\"></svg>", !1, !0, !1), zf = /*#__PURE__*/ m("<svg><path d=\"M3 12h11\"></svg>", !1, !0, !1);
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
			Lf(),
			Rf(),
			zf()
		];
	} }));
}
Bf.displayName = "LogIn";
//#endregion
//#region src/icons/log-out.tsx
var Vf = /*#__PURE__*/ m("<svg><path d=\"M9 21H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h4\"></svg>", !1, !0, !1), Hf = /*#__PURE__*/ m("<svg><path d=\"m16 7 5.08 4.23a1 1 0 0 1 0 1.54L16 17\"></svg>", !1, !0, !1), Uf = /*#__PURE__*/ m("<svg><path d=\"M9 12h11\"></svg>", !1, !0, !1);
function Wf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			Uf()
		];
	} }));
}
Wf.displayName = "LogOut";
//#endregion
//#region src/icons/mail-check.tsx
var Gf = /*#__PURE__*/ m("<svg><path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7\"></svg>", !1, !0, !1), Kf = /*#__PURE__*/ m("<svg><path d=\"m15 19 2.99 2 .02-.01L22 17\"></svg>", !1, !0, !1), qf = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function Jf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Gf(),
			Kf(),
			qf()
		];
	} }));
}
Jf.displayName = "MailCheck";
//#endregion
//#region src/icons/mail-minus.tsx
var Yf = /*#__PURE__*/ m("<svg><path d=\"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"></svg>", !1, !0, !1), Xf = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), Zf = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function Qf(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yf(),
			Xf(),
			Zf()
		];
	} }));
}
Qf.displayName = "MailMinus";
//#endregion
//#region src/icons/mail-open.tsx
var $f = /*#__PURE__*/ m("<svg><path d=\"M2 10.9a2 2 0 0 1 .66-1.5l8-7.2a2 2 0 0 1 2.68 0l8 7.2a2 2 0 0 1 .66 1.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), ep = /*#__PURE__*/ m("<svg><path d=\"m3 10 7.9 5.26a2 2 0 0 0 2.2 0L21 10\"></svg>", !1, !0, !1);
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
		return [$f(), ep()];
	} }));
}
tp.displayName = "MailOpen";
//#endregion
//#region src/icons/mail-plus.tsx
var np = /*#__PURE__*/ m("<svg><path d=\"M12 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v6\"></svg>", !1, !0, !1), rp = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), ip = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), ap = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function op(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			ip(),
			ap()
		];
	} }));
}
op.displayName = "MailPlus";
//#endregion
//#region src/icons/mail-x.tsx
var sp = /*#__PURE__*/ m("<svg><path d=\"M13 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v7\"></svg>", !1, !0, !1), cp = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1), lp = /*#__PURE__*/ m("<svg><path d=\"m17 17 4 4\"></svg>", !1, !0, !1), up = /*#__PURE__*/ m("<svg><path d=\"m17 21 4-4\"></svg>", !1, !0, !1);
function dp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			sp(),
			cp(),
			lp(),
			up()
		];
	} }));
}
dp.displayName = "MailX";
//#endregion
//#region src/icons/mail.tsx
var fp = /*#__PURE__*/ m("<svg><path d=\"M2 18V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2\"></svg>", !1, !0, !1), pp = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
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
		return [fp(), pp()];
	} }));
}
mp.displayName = "Mail";
//#endregion
//#region src/icons/map-pin-check.tsx
var hp = /*#__PURE__*/ m("<svg><path d=\"m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64q.04.05.08 0\"></svg>", !1, !0, !1), gp = /*#__PURE__*/ m("<svg><path d=\"m10 9.5 1.56 1.46q.04.03.07 0L14 8\"></svg>", !1, !0, !1);
function _p(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [hp(), gp()];
	} }));
}
_p.displayName = "MapPinCheck";
//#endregion
//#region src/icons/map-pin.tsx
var vp = /*#__PURE__*/ m("<svg><path d=\"m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64q.04.05.08 0\"></svg>", !1, !0, !1), yp = /*#__PURE__*/ m("<svg><circle cx=12 cy=9 r=2></svg>", !1, !0, !1);
function bp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [vp(), yp()];
	} }));
}
bp.displayName = "MapPin";
//#endregion
//#region src/icons/map-pinned.tsx
var xp = /*#__PURE__*/ m("<svg><path d=\"m12.04 12.94 3.2-5.03a3.84 3.84 0 1 0-6.48 0l3.2 5.03q.04.04.08 0\"></svg>", !1, !0, !1), Sp = /*#__PURE__*/ m("<svg><circle cx=12 cy=5.5 r=0.5></svg>", !1, !0, !1), Cp = /*#__PURE__*/ m("<svg><path d=\"m3 21 5.19-1.78a2 2 0 0 1 1.27-.01l4.83 1.59a2 2 0 0 0 1.25 0L21 19\"></svg>", !1, !0, !1), wp = /*#__PURE__*/ m("<svg><path d=\"M21 11v8\"></svg>", !1, !0, !1), Tp = /*#__PURE__*/ m("<svg><path d=\"M3 14v7\"></svg>", !1, !0, !1), Ep = /*#__PURE__*/ m("<svg><path d=\"M9 11v8\"></svg>", !1, !0, !1), Dp = /*#__PURE__*/ m("<svg><path d=\"M15 14v6\"></svg>", !1, !0, !1), Op = /*#__PURE__*/ m("<svg><path d=\"M9 10.5 3 14\"></svg>", !1, !0, !1), kp = /*#__PURE__*/ m("<svg><path d=\"m13 12.5 1.19.82a2 2 0 0 0 2.05.13L21 11\"></svg>", !1, !0, !1);
function Ap(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xp(),
			Sp(),
			Cp(),
			wp(),
			Tp(),
			Ep(),
			Dp(),
			Op(),
			kp()
		];
	} }));
}
Ap.displayName = "MapPinned";
//#endregion
//#region src/icons/map.tsx
var jp = /*#__PURE__*/ m("<svg><path d=\"m3 8 4.74-3.26a2 2 0 0 1 2.2-.04l4.12 2.6a2 2 0 0 0 2.2-.04L21 4\"></svg>", !1, !0, !1), Mp = /*#__PURE__*/ m("<svg><path d=\"m3 20 4.93-2.54a2 2 0 0 1 1.8-.01l4.3 2.11a2 2 0 0 0 1.77 0L21 17\"></svg>", !1, !0, !1), Np = /*#__PURE__*/ m("<svg><path d=\"M21 4v13\"></svg>", !1, !0, !1), Pp = /*#__PURE__*/ m("<svg><path d=\"M3 8v12\"></svg>", !1, !0, !1), Fp = /*#__PURE__*/ m("<svg><path d=\"M9 5v12\"></svg>", !1, !0, !1), Ip = /*#__PURE__*/ m("<svg><path d=\"M15 8v11\"></svg>", !1, !0, !1);
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
			jp(),
			Mp(),
			Np(),
			Pp(),
			Fp(),
			Ip()
		];
	} }));
}
Lp.displayName = "Map";
//#endregion
//#region src/icons/meh-blank.tsx
var Rp = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), zp = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Bp = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function Vp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			Bp()
		];
	} }));
}
Vp.displayName = "MehBlank";
//#endregion
//#region src/icons/meh.tsx
var Hp = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Up = /*#__PURE__*/ m("<svg><path d=\"M7 15h10\"></svg>", !1, !0, !1), Wp = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Gp = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function Kp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Hp(),
			Up(),
			Wp(),
			Gp()
		];
	} }));
}
Kp.displayName = "Meh";
//#endregion
//#region src/icons/menu-horizontal.tsx
var qp = /*#__PURE__*/ m("<svg><circle cx=5 cy=12 r=1></svg>", !1, !0, !1), Jp = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=1></svg>", !1, !0, !1), Yp = /*#__PURE__*/ m("<svg><circle cx=19 cy=12 r=1></svg>", !1, !0, !1);
function Xp(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qp(),
			Jp(),
			Yp()
		];
	} }));
}
Xp.displayName = "MenuHorizontal";
//#endregion
//#region src/icons/menu-vertical.tsx
var Zp = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=4 rx=1></svg>", !1, !0, !1), Qp = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=11 rx=1></svg>", !1, !0, !1), $p = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=18 rx=1></svg>", !1, !0, !1);
function em(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Zp(),
			Qp(),
			$p()
		];
	} }));
}
em.displayName = "MenuVertical";
//#endregion
//#region src/icons/menu.tsx
var tm = /*#__PURE__*/ m("<svg><path d=\"M4 5h15\"></svg>", !1, !0, !1), nm = /*#__PURE__*/ m("<svg><path d=\"M4 12h15\"></svg>", !1, !0, !1), rm = /*#__PURE__*/ m("<svg><path d=\"M4 19h15\"></svg>", !1, !0, !1);
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
			tm(),
			nm(),
			rm()
		];
	} }));
}
im.displayName = "Menu";
//#endregion
//#region src/icons/message-square-plus.tsx
var am = /*#__PURE__*/ m("<svg><path d=\"M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z\"></svg>", !1, !0, !1), om = /*#__PURE__*/ m("<svg><path d=\"M12 8v6\"></svg>", !1, !0, !1), sm = /*#__PURE__*/ m("<svg><path d=\"M9 11h6\"></svg>", !1, !0, !1);
function cm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			am(),
			om(),
			sm()
		];
	} }));
}
cm.displayName = "MessageSquarePlus";
//#endregion
//#region src/icons/message-square-text.tsx
var lm = /*#__PURE__*/ m("<svg><path d=\"M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z\"></svg>", !1, !0, !1), um = /*#__PURE__*/ m("<svg><path d=\"M7 7h8\"></svg>", !1, !0, !1), dm = /*#__PURE__*/ m("<svg><path d=\"M7 15h6\"></svg>", !1, !0, !1), fm = /*#__PURE__*/ m("<svg><path d=\"M7 11h10\"></svg>", !1, !0, !1);
function pm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			lm(),
			um(),
			dm(),
			fm()
		];
	} }));
}
pm.displayName = "MessageSquareText";
//#endregion
//#region src/icons/message-square.tsx
var mm = /*#__PURE__*/ m("<svg><path d=\"M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z\"></svg>", !1, !0, !1);
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
		return mm();
	} }));
}
hm.displayName = "MessageSquare";
//#endregion
//#region src/icons/mic-off.tsx
var gm = /*#__PURE__*/ m("<svg><path d=\"M9.17 4A3 3 0 0 1 15 5v5\"></svg>", !1, !0, !1), _m = /*#__PURE__*/ m("<svg><path d=\"M14 14.24A3 3 0 0 1 9 12V9\"></svg>", !1, !0, !1), vm = /*#__PURE__*/ m("<svg><path d=\"M18.84 13.5q.16-.73.16-1.5v-2\"></svg>", !1, !0, !1), ym = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m4-1.25A7 7 0 0 1 12 19m0 0v3\"></svg>", !1, !0, !1), bm = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function xm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			bm()
		];
	} }));
}
xm.displayName = "MicOff";
//#endregion
//#region src/icons/mic-vintage.tsx
var Sm = /*#__PURE__*/ m("<svg><path d=\"M9 12a3 3 0 1 0 6 0V5a3 3 0 1 0-6 0m0 7V8.5M9 12h2M9 5v3.5M9 5h2M9 8.5h2\"></svg>", !1, !0, !1), Cm = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7v-2m-7 9v3\"></svg>", !1, !0, !1);
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
		return [Sm(), Cm()];
	} }));
}
wm.displayName = "MicVintage";
//#endregion
//#region src/icons/mic.tsx
var Tm = /*#__PURE__*/ m("<svg><rect width=6 height=13 x=9 y=2 rx=3></svg>", !1, !0, !1), Em = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m7-9v2a7 7 0 0 1-7 7m0 0v3\"></svg>", !1, !0, !1);
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
Dm.displayName = "Mic";
//#endregion
//#region src/icons/minus.tsx
var Om = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
function km(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Om();
	} }));
}
km.displayName = "Minus";
//#endregion
//#region src/icons/moon-star.tsx
var Am = /*#__PURE__*/ m("<svg><path d=\"M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.38-1.16-.99-1.08A9 9 0 0 0 12 21\"></svg>", !1, !0, !1), jm = /*#__PURE__*/ m("<svg><path d=\"M19.54 3.26a1 1 0 0 0 .95.7h1.73l-1.4 1.01a1 1 0 0 0-.37 1.12L21 7.74l-1.4-1.02a1 1 0 0 0-1.18 0l-1.4 1.02.54-1.65a1 1 0 0 0-.37-1.12l-1.4-1.01h1.73a1 1 0 0 0 .95-.7L19 1.62z\"></svg>", !1, !0, !1);
function Mm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Am(), jm()];
	} }));
}
Mm.displayName = "MoonStar";
//#endregion
//#region src/icons/moon.tsx
var Nm = /*#__PURE__*/ m("<svg><path d=\"M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.38-1.16-.99-1.08A9 9 0 0 0 12 21\"></svg>", !1, !0, !1);
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
		return Nm();
	} }));
}
Pm.displayName = "Moon";
//#endregion
//#region src/icons/mouse-pointer.tsx
var Fm = /*#__PURE__*/ m("<svg><path d=\"M9.95 19.88 3.05 3.1a.05.05 0 0 1 .06-.06l16.77 6.9c.04.02.04.08 0 .1l-6.43 2.13a2 2 0 0 0-1.27 1.27l-2.14 6.42a.05.05 0 0 1-.1 0Z\"></svg>", !1, !0, !1), Im = /*#__PURE__*/ m("<svg><path d=\"m13 13 6 6\"></svg>", !1, !0, !1);
function Lm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Fm(), Im()];
	} }));
}
Lm.displayName = "MousePointer";
//#endregion
//#region src/icons/navigation-2.tsx
var Rm = /*#__PURE__*/ m("<svg><path d=\"M11.98 2.04h.04l7.96 18.92q0 .03-.02.02l-7.6-2.85a1 1 0 0 0-.71 0l-7.6 2.85a.02.02 0 0 1-.03-.02z\"></svg>", !1, !0, !1);
function zm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Rm();
	} }));
}
zm.displayName = "Navigation2";
//#endregion
//#region src/icons/navigation.tsx
var Bm = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"M21.96 2.02q.03-.01.02.02l-7.96 18.91q-.01.03-.04 0l-2.84-7.58a1 1 0 0 0-.5-.55l-7.6-3.8a.02.02 0 0 1 0-.04z\"></svg>", !1, !0, !1), Vm = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function Hm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Bm(), Vm()];
	} }));
}
Hm.displayName = "Navigation";
//#endregion
//#region src/icons/notification.tsx
var Um = /*#__PURE__*/ m("<svg><path d=\"M5 9a7 7 0 0 1 14 0v4.06a4 4 0 0 0 .42 1.78l1.16 2.32a4 4 0 0 1 .42 1.78V19H3v-.06a4 4 0 0 1 .42-1.78l1.16-2.32A4 4 0 0 0 5 13.06z\"></svg>", !1, !0, !1), Wm = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1);
function Gm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Um(), Wm()];
	} }));
}
Gm.displayName = "Notification";
//#endregion
//#region src/icons/nut.tsx
var Km = /*#__PURE__*/ m("<svg><path d=\"M5 10c0 3.2 1.53 6.22 4.1 8.1l2.9 2.11M19 10c0 3.2-1.53 6.22-4.1 8.1L12 20.21m0 0V21\"></svg>", !1, !0, !1), qm = /*#__PURE__*/ m("<svg><path d=\"M12 3v1m0 0H8a5 5 0 0 0-5 5v.27c0 .36.35.61.7.5L6 9q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2.3.77c.35.11.7-.14.7-.5V9a5 5 0 0 0-5-5z\"></svg>", !1, !0, !1);
function Jm(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Km(), qm()];
	} }));
}
Jm.displayName = "Nut";
//#endregion
//#region src/icons/package-check.tsx
var Ym = /*#__PURE__*/ m("<svg><path d=\"m15.38 20.13-1.13.62-1.28.71a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82V8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18V11\"></svg>", !1, !0, !1), Xm = /*#__PURE__*/ m("<svg><path d=\"m17 16 1.84 1.84a.2.2 0 0 0 .3-.02L22 14\"></svg>", !1, !0, !1), Zm = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 7.56 4a2 2 0 0 0 1.88 0l7.56-4\"></svg>", !1, !0, !1), Qm = /*#__PURE__*/ m("<svg><path d=\"M12 12v9\"></svg>", !1, !0, !1), $m = /*#__PURE__*/ m("<svg><path d=\"m8.5 4.5 8 5\"></svg>", !1, !0, !1);
function eh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ym(),
			Xm(),
			Zm(),
			Qm(),
			$m()
		];
	} }));
}
eh.displayName = "PackageCheck";
//#endregion
//#region src/icons/paint-bucket.tsx
var th = /*#__PURE__*/ m("<svg><path d=\"m10 5 2.3-2.3a1 1 0 0 1 1.4 0l6.95 6.95c.2.2.2.5 0 .7l-8.03 8.03a3 3 0 0 1-4.24 0l-3.76-3.76a3 3 0 0 1 0-4.24L7 8\"></svg>", !1, !0, !1), nh = /*#__PURE__*/ m("<svg><path d=\"m8 3.5 3 3\"></svg>", !1, !0, !1), rh = /*#__PURE__*/ m("<svg><path d=\"M4 12.5h14.5\"></svg>", !1, !0, !1), ih = /*#__PURE__*/ m("<svg><path d=\"M19.98 15.06q.01-.03.04 0l1.35 4.04a1.44 1.44 0 1 1-2.74 0z\"></svg>", !1, !0, !1);
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
			th(),
			nh(),
			rh(),
			ih()
		];
	} }));
}
ah.displayName = "PaintBucket";
//#endregion
//#region src/icons/paperclip.tsx
var oh = /*#__PURE__*/ m("<svg><path d=\"M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21\"></svg>", !1, !0, !1);
function sh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return oh();
	} }));
}
sh.displayName = "Paperclip";
//#endregion
//#region src/icons/pause-circle.tsx
var ch = /*#__PURE__*/ m("<svg><path d=\"M10 9v6\"></svg>", !1, !0, !1), lh = /*#__PURE__*/ m("<svg><path d=\"M14 9v6\"></svg>", !1, !0, !1), uh = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function dh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ch(),
			lh(),
			uh()
		];
	} }));
}
dh.displayName = "PauseCircle";
//#endregion
//#region src/icons/pause-square.tsx
var fh = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), ph = /*#__PURE__*/ m("<svg><path d=\"M10 9v6\"></svg>", !1, !0, !1), mh = /*#__PURE__*/ m("<svg><path d=\"M14 9v6\"></svg>", !1, !0, !1);
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
		return [
			fh(),
			ph(),
			mh()
		];
	} }));
}
hh.displayName = "PauseSquare";
//#endregion
//#region src/icons/pause.tsx
var gh = /*#__PURE__*/ m("<svg><rect width=5 height=18 x=5 y=3 rx=0.5></svg>", !1, !0, !1), _h = /*#__PURE__*/ m("<svg><rect width=5 height=18 x=14 y=3 rx=0.5></svg>", !1, !0, !1);
function vh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [gh(), _h()];
	} }));
}
vh.displayName = "Pause";
//#endregion
//#region src/icons/pen-line.tsx
var yh = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35a1 1 0 0 0-.19.28l-2.27 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .38-.26\"></path><path d=\"M12 21h9\"></svg>", !1, !0, !1), bh = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function xh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [yh(), bh()];
	} }));
}
xh.displayName = "PenLine";
//#endregion
//#region src/icons/pen-tool.tsx
var Sh = /*#__PURE__*/ m("<svg><path d=\"M10.73 16.34 6.1 14.33a1 1 0 0 1-.57-.68L2.8 2.85l.02-.02 10.82 2.69a1 1 0 0 1 .67.56l2.07 4.6\"></svg>", !1, !0, !1), Ch = /*#__PURE__*/ m("<svg><rect width=10 height=4 x=10.66 y=17.68 rx=1 transform=\"rotate(-45.78 10.66 17.68)\"></svg>", !1, !0, !1), wh = /*#__PURE__*/ m("<svg><path d=\"m3.53 3.53 4.5 4.5\"></svg>", !1, !0, !1), Th = /*#__PURE__*/ m("<svg><circle cx=8.53 cy=8.53 r=0.5></svg>", !1, !0, !1);
function Eh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Sh(),
			Ch(),
			wh(),
			Th()
		];
	} }));
}
Eh.displayName = "PenTool";
//#endregion
//#region src/icons/pencil.tsx
var Dh = /*#__PURE__*/ m("<svg><path d=\"m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35a1 1 0 0 0-.19.28l-2.27 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .38-.26\"></svg>", !1, !0, !1), Oh = /*#__PURE__*/ m("<svg><path d=\"M15.5 4.5 19 8\"></svg>", !1, !0, !1);
function kh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Dh(), Oh()];
	} }));
}
kh.displayName = "Pencil";
//#endregion
//#region src/icons/percent.tsx
var Ah = /*#__PURE__*/ m("<svg><path d=\"M5 19 19 5\"></svg>", !1, !0, !1), jh = /*#__PURE__*/ m("<svg><circle cx=7 cy=7 r=2></svg>", !1, !0, !1), Mh = /*#__PURE__*/ m("<svg><circle cx=17 cy=17 r=2></svg>", !1, !0, !1);
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
			Ah(),
			jh(),
			Mh()
		];
	} }));
}
Nh.displayName = "Percent";
//#endregion
//#region src/icons/phone-call.tsx
var Ph = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Fh = /*#__PURE__*/ m("<svg><path d=\"M13 6c2.59-.52 5 1.46 5 4.1v.9\"></svg>", !1, !0, !1), Ih = /*#__PURE__*/ m("<svg><path d=\"M14 2h1a7 7 0 0 1 7 7v2\"></svg>", !1, !0, !1);
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
Lh.displayName = "PhoneCall";
//#endregion
//#region src/icons/phone-forward.tsx
var Rh = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03\"></svg>", !1, !0, !1), zh = /*#__PURE__*/ m("<svg><path d=\"M13 6h7\"></svg>", !1, !0, !1), Bh = /*#__PURE__*/ m("<svg><path d=\"m18 2 3.82 3.6c.24.22.24.58 0 .8L18 10\"></svg>", !1, !0, !1);
function Vh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			Bh()
		];
	} }));
}
Vh.displayName = "PhoneForward";
//#endregion
//#region src/icons/phone-incoming.tsx
var Hh = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03\"></svg>", !1, !0, !1), Uh = /*#__PURE__*/ m("<svg><path d=\"M16 2v5a1 1 0 0 0 1 1h5\"></svg>", !1, !0, !1), Wh = /*#__PURE__*/ m("<svg><path d=\"m17 7 5-5\"></svg>", !1, !0, !1);
function Gh(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Hh(),
			Uh(),
			Wh()
		];
	} }));
}
Gh.displayName = "PhoneIncoming";
//#endregion
//#region src/icons/phone-off.tsx
var Kh = /*#__PURE__*/ m("<svg><path d=\"M10 13.33a19 19 0 0 0 3.9 2.62q.1.04.19 0l2.13-1.28a1 1 0 0 1 .6-.14l4.27.39a1 1 0 0 1 .91 1v5a1 1 0 0 1-1.1.97C14.3 21.15 9.8 19 6.88 16.25\"></svg>", !1, !0, !1), qh = /*#__PURE__*/ m("<svg><path d=\"m7.76 11-.38-.5-.29-.38a.2.2 0 0 1 0-.24L8.3 8.27a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1H3.3a.95.95 0 0 0-.95.8c-.47 3.08.02 6.8 2.15 10.12\"></svg>", !1, !0, !1), Jh = /*#__PURE__*/ m("<svg><path d=\"M2 22 22 2\"></svg>", !1, !0, !1);
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
			Kh(),
			qh(),
			Jh()
		];
	} }));
}
Yh.displayName = "PhoneOff";
//#endregion
//#region src/icons/phone-outgoing.tsx
var Xh = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03\"></svg>", !1, !0, !1), Zh = /*#__PURE__*/ m("<svg><path d=\"M22 8V3a1 1 0 0 0-1-1h-5\"></svg>", !1, !0, !1), Qh = /*#__PURE__*/ m("<svg><path d=\"m21 3-5 5\"></svg>", !1, !0, !1);
function $h(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			Qh()
		];
	} }));
}
$h.displayName = "PhoneOutgoing";
//#endregion
//#region src/icons/phone-x.tsx
var eg = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), tg = /*#__PURE__*/ m("<svg><path d=\"m15 3 6 6\"></svg>", !1, !0, !1), ng = /*#__PURE__*/ m("<svg><path d=\"m21 3-6 6\"></svg>", !1, !0, !1);
function rg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			eg(),
			tg(),
			ng()
		];
	} }));
}
rg.displayName = "PhoneX";
//#endregion
//#region src/icons/phone.tsx
var ig = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function ag(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return ig();
	} }));
}
ag.displayName = "Phone";
//#endregion
//#region src/icons/pie-chart.tsx
var og = /*#__PURE__*/ m("<svg><path d=\"M22 13.1A10.8 10.8 0 0 0 10.9 2a.94.94 0 0 0-.9.96V13a1 1 0 0 0 1 1h10.04c.5 0 .94-.38.96-.9\"></svg>", !1, !0, !1), sg = /*#__PURE__*/ m("<svg><path d=\"M20 17.63A9.82 9.82 0 1 1 6.37 4\"></svg>", !1, !0, !1);
function cg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [og(), sg()];
	} }));
}
cg.displayName = "PieChart";
//#endregion
//#region src/icons/pin.tsx
var lg = /*#__PURE__*/ m("<svg><path d=\"M6 4c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4 1 1 0 0 0-1 1v2.33a2 2 0 0 0 .4 1.2l2.2 2.94a2 2 0 0 1 .4 1.2V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.17a2 2 0 0 1 .59-1.42L8.4 11.6a2 2 0 0 0 .6-1.43V7a1 1 0 0 0-1-1 2 2 0 0 1-2-2\"></svg>", !1, !0, !1), ug = /*#__PURE__*/ m("<svg><path d=\"M12 17v5\"></svg>", !1, !0, !1);
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
		return [lg(), ug()];
	} }));
}
dg.displayName = "Pin";
//#endregion
//#region src/icons/pipette.tsx
var fg = /*#__PURE__*/ m("<svg><path d=\"M13.64 7.26 7.1 14.03l-.15.23L6 18m0 0c-2 2-.35.13 0 0m0 0 4.18-.7a1 1 0 0 0 .32-.2l6.36-6.6\"></svg>", !1, !0, !1), pg = /*#__PURE__*/ m("<svg><path d=\"m15.31 5.41 2.7-2.7a2.36 2.36 0 0 1 3.27-.1c.92.87.96 2.3.09 3.2l-2.83 2.83\"></svg>", !1, !0, !1), mg = /*#__PURE__*/ m("<svg><path d=\"M19.07 7.76a2 2 0 0 1-2.83 2.83l-2.83-2.83a2 2 0 0 1 2.83-2.83\"></svg>", !1, !0, !1);
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
hg.displayName = "Pipette";
//#endregion
//#region src/icons/play-square.tsx
var gg = /*#__PURE__*/ m("<svg><path d=\"M9 15.12V8.88c0-.29.3-.47.55-.34l5.25 2.78c.25.13.27.5.03.65l-5.25 3.47a.37.37 0 0 1-.58-.32\"></svg>", !1, !0, !1), _g = /*#__PURE__*/ m("<svg><path d=\"M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1\"></svg>", !1, !0, !1);
function vg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [gg(), _g()];
	} }));
}
vg.displayName = "PlaySquare";
//#endregion
//#region src/icons/play.tsx
var yg = /*#__PURE__*/ m("<svg><path d=\"M5 20.15V3.65a1 1 0 0 1 1.46-.88L20.5 10.1a1 1 0 0 1 .08 1.72L6.55 21A1 1 0 0 1 5 20.15\"></svg>", !1, !0, !1);
function bg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return yg();
	} }));
}
bg.displayName = "Play";
//#endregion
//#region src/icons/plus.tsx
var xg = /*#__PURE__*/ m("<svg><path d=\"M12 5v14\"></svg>", !1, !0, !1), Sg = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
function Cg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [xg(), Sg()];
	} }));
}
Cg.displayName = "Plus";
//#endregion
//#region src/icons/pound-sterling.tsx
var wg = /*#__PURE__*/ m("<svg><path d=\"M18 9V7a4 4 0 0 0-8 0v14\"></svg>", !1, !0, !1), Tg = /*#__PURE__*/ m("<svg><path d=\"M6 21h12\"></svg>", !1, !0, !1), Eg = /*#__PURE__*/ m("<svg><path d=\"M6 14h10\"></svg>", !1, !0, !1);
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
			wg(),
			Tg(),
			Eg()
		];
	} }));
}
Dg.displayName = "PoundSterling";
//#endregion
//#region src/icons/radio.tsx
var Og = /*#__PURE__*/ m("<svg><path d=\"M18 20a9.98 9.98 0 0 0 0-16\"></svg>", !1, !0, !1), kg = /*#__PURE__*/ m("<svg><path d=\"M6 20A9.98 9.98 0 0 1 6 4\"></svg>", !1, !0, !1), Ag = /*#__PURE__*/ m("<svg><path d=\"M8.26 16.69a6 6 0 0 1 0-9.38\"></svg>", !1, !0, !1), jg = /*#__PURE__*/ m("<svg><path d=\"M15.74 7.3a6 6 0 0 1 0 9.4\"></svg>", !1, !0, !1), Mg = /*#__PURE__*/ m("<svg><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1);
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
Ng.displayName = "Radio";
//#endregion
//#region src/icons/receipt-text.tsx
var Pg = /*#__PURE__*/ m("<svg><path d=\"M4 2.72a.5.5 0 0 1 .68-.47l1.77.67q.22.07.42-.03l1.33-.75a.5.5 0 0 1 .49 0l1.29.72a.5.5 0 0 0 .49 0l1.28-.72a.5.5 0 0 1 .5 0l1.28.72a.5.5 0 0 0 .5 0l1.28-.72a.5.5 0 0 1 .5 0l1.32.75a.5.5 0 0 0 .42.03l1.77-.67a.5.5 0 0 1 .68.47V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), Fg = /*#__PURE__*/ m("<svg><path d=\"M8 9h5\"></svg>", !1, !0, !1), Ig = /*#__PURE__*/ m("<svg><path d=\"M8 17h5\"></svg>", !1, !0, !1), Lg = /*#__PURE__*/ m("<svg><path d=\"M8 13h8\"></svg>", !1, !0, !1);
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
Rg.displayName = "ReceiptText";
//#endregion
//#region src/icons/receipt.tsx
var zg = /*#__PURE__*/ m("<svg><path d=\"M12 8v10\"></svg>", !1, !0, !1), Bg = /*#__PURE__*/ m("<svg><path d=\"M14 9h-3.33C9.75 9 9 9.9 9 11s.75 2 1.67 2h2.42\"></svg>", !1, !0, !1), Vg = /*#__PURE__*/ m("<svg><path d=\"M11.36 13h1.97c.92 0 1.67.9 1.67 2s-.75 2-1.67 2H10\"></svg>", !1, !0, !1), Hg = /*#__PURE__*/ m("<svg><path d=\"M4 2.72a.5.5 0 0 1 .68-.47l1.77.67q.22.08.42-.03l1.33-.75a.5.5 0 0 1 .49 0l1.29.72a.5.5 0 0 0 .49 0l1.28-.72a.5.5 0 0 1 .5 0l1.28.72a.5.5 0 0 0 .5 0l1.28-.72a.5.5 0 0 1 .5 0l1.32.75a.5.5 0 0 0 .42.03l1.77-.67a.5.5 0 0 1 .68.47V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1);
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
Ug.displayName = "Receipt";
//#endregion
//#region src/icons/redo-2.tsx
var Wg = /*#__PURE__*/ m("<svg><path d=\"M20 9H9.5a5.5 5.5 0 1 0 0 11H12\"></svg>", !1, !0, !1), Gg = /*#__PURE__*/ m("<svg><path d=\"m15 4 4.86 4.86a.2.2 0 0 1 0 .28L15 14\"></svg>", !1, !0, !1);
function Kg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Wg(), Gg()];
	} }));
}
Kg.displayName = "Redo2";
//#endregion
//#region src/icons/refresh-cw.tsx
var qg = /*#__PURE__*/ m("<svg><path d=\"M19.48 6.77a10.5 10.5 0 0 0-5.94-3.63 9 9 0 0 0-10.48 7.23\"></svg>", !1, !0, !1), Jg = /*#__PURE__*/ m("<svg><path d=\"M20.9 11.61q.05 1-.14 2a9 9 0 0 1-10.48 7.23C7.22 20.28 5.15 17.66 4 15\"></svg>", !1, !0, !1), Yg = /*#__PURE__*/ m("<svg><path d=\"M8 14H3.5a.5.5 0 0 0-.5.5V19\"></svg>", !1, !0, !1), Xg = /*#__PURE__*/ m("<svg><path d=\"M20 3v4.5a.5.5 0 0 1-.5.5H15\"></svg>", !1, !0, !1);
function Zg(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qg(),
			Jg(),
			Yg(),
			Xg()
		];
	} }));
}
Zg.displayName = "RefreshCw";
//#endregion
//#region src/icons/repeat-1.tsx
var Qg = /*#__PURE__*/ m("<svg><path d=\"M3 11V9a3 3 0 0 1 3-3h15\"></svg>", !1, !0, !1), $g = /*#__PURE__*/ m("<svg><path d=\"M21 13v2.04A2.96 2.96 0 0 1 18.04 18H3\"></svg>", !1, !0, !1), e_ = /*#__PURE__*/ m("<svg><path d=\"m18 2 2.64 3.01c.5.57.5 1.41 0 1.98L18 10\"></svg>", !1, !0, !1), t_ = /*#__PURE__*/ m("<svg><path d=\"m6 22-2.64-3.01a1.5 1.5 0 0 1 0-1.98L6 14\"></svg>", !1, !0, !1), n_ = /*#__PURE__*/ m("<svg><path d=\"M10.5 10h1.3q.18.02.2.2V14\"></svg>", !1, !0, !1);
function r_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Qg(),
			$g(),
			e_(),
			t_(),
			n_()
		];
	} }));
}
r_.displayName = "Repeat1";
//#endregion
//#region src/icons/repeat.tsx
var i_ = /*#__PURE__*/ m("<svg><path d=\"M3 11V9a3 3 0 0 1 3-3h15\"></svg>", !1, !0, !1), a_ = /*#__PURE__*/ m("<svg><path d=\"M21 13v2.04A2.96 2.96 0 0 1 18.04 18H3\"></svg>", !1, !0, !1), o_ = /*#__PURE__*/ m("<svg><path d=\"m18 2 2.64 3.01c.5.57.5 1.41 0 1.98L18 10\"></svg>", !1, !0, !1), s_ = /*#__PURE__*/ m("<svg><path d=\"m6 22-2.64-3.01a1.5 1.5 0 0 1 0-1.98L6 14\"></svg>", !1, !0, !1);
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
			i_(),
			a_(),
			o_(),
			s_()
		];
	} }));
}
c_.displayName = "Repeat";
//#endregion
//#region src/icons/rewind.tsx
var l_ = /*#__PURE__*/ m("<svg><path d=\"M12.73 13.41a1.8 1.8 0 0 1 0-2.78l6.85-5.6a1.5 1.5 0 0 1 2.45 1.15v11.67a1.5 1.5 0 0 1-2.45 1.16z\"></svg>", !1, !0, !1), u_ = /*#__PURE__*/ m("<svg><path d=\"M2.45 13.21a1.5 1.5 0 0 1 0-2.32l7.13-5.83a1.5 1.5 0 0 1 2.45 1.16v11.67a1.5 1.5 0 0 1-2.45 1.16z\"></svg>", !1, !0, !1);
function d_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [l_(), u_()];
	} }));
}
d_.displayName = "Rewind";
//#endregion
//#region src/icons/rotate-cw-square.tsx
var f_ = /*#__PURE__*/ m("<svg><path d=\"M15.5 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.25M11 5H7a2 2 0 0 0-2 2v3.25\"></svg>", !1, !0, !1), p_ = /*#__PURE__*/ m("<svg><path d=\"m9 2 2.3 2.3a1 1 0 0 1 0 1.4L9 8\"></svg>", !1, !0, !1);
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
		return [f_(), p_()];
	} }));
}
m_.displayName = "RotateCwSquare";
//#endregion
//#region src/icons/rows-2.tsx
var h_ = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), g_ = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1);
function __(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [h_(), g_()];
	} }));
}
__.displayName = "Rows2";
//#endregion
//#region src/icons/rows-3.tsx
var v_ = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), y_ = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), b_ = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1);
function x_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			v_(),
			y_(),
			b_()
		];
	} }));
}
x_.displayName = "Rows3";
//#endregion
//#region src/icons/save.tsx
var S_ = /*#__PURE__*/ m("<svg><path d=\"M3 5c0-1.1.9-2 2-2h9.17a2 2 0 0 1 1.42.59L20.4 8.4a2 2 0 0 1 .6 1.43V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), C_ = /*#__PURE__*/ m("<svg><path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\"></svg>", !1, !0, !1), w_ = /*#__PURE__*/ m("<svg><path d=\"M7 3v4a1 1 0 0 0 1 1h6\"></svg>", !1, !0, !1);
function T_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			S_(),
			C_(),
			w_()
		];
	} }));
}
T_.displayName = "Save";
//#endregion
//#region src/icons/scan-qr.tsx
var E_ = /*#__PURE__*/ m("<svg><path d=\"M21 8V5a2 2 0 0 0-2-2h-3\"></svg>", !1, !0, !1), D_ = /*#__PURE__*/ m("<svg><path d=\"M21 16v3a2 2 0 0 1-2 2h-3\"></svg>", !1, !0, !1), O_ = /*#__PURE__*/ m("<svg><path d=\"M3 16v3c0 1.1.9 2 2 2h3\"></svg>", !1, !0, !1), k_ = /*#__PURE__*/ m("<svg><path d=\"M3 8V5c0-1.1.9-2 2-2h3\"></svg>", !1, !0, !1), A_ = /*#__PURE__*/ m("<svg><path d=\"M17 7v1m-5 9h3a2 2 0 0 0 2-2v-3\"></svg>", !1, !0, !1), j_ = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=7 y=7 rx=1></svg>", !1, !0, !1), M_ = /*#__PURE__*/ m("<svg><circle cx=7 cy=17 r=0.5></svg>", !1, !0, !1);
function N_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			E_(),
			D_(),
			O_(),
			k_(),
			A_(),
			j_(),
			M_()
		];
	} }));
}
N_.displayName = "ScanQr";
//#endregion
//#region src/icons/scissors.tsx
var P_ = /*#__PURE__*/ m("<svg><circle cx=6 cy=6 r=3></svg>", !1, !0, !1), F_ = /*#__PURE__*/ m("<svg><ellipse cx=2.97 cy=3 rx=2.97 ry=3 transform=\"rotate(269.5 11.92 9)skewY(-.02)\"></svg>", !1, !0, !1), I_ = /*#__PURE__*/ m("<svg><path d=\"m8.5 8.5 3 3\"></svg>", !1, !0, !1), L_ = /*#__PURE__*/ m("<svg><path d=\"m15 15 5 5\"></svg>", !1, !0, !1), R_ = /*#__PURE__*/ m("<svg><path d=\"M8.5 15.5 20 4\"></svg>", !1, !0, !1);
function z_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			P_(),
			F_(),
			I_(),
			L_(),
			R_()
		];
	} }));
}
z_.displayName = "Scissors";
//#endregion
//#region src/icons/search-minus.tsx
var B_ = /*#__PURE__*/ m("<svg><path d=\"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16\"></svg>", !1, !0, !1), V_ = /*#__PURE__*/ m("<svg><path d=\"M16.95 17.05 21 21\"></svg>", !1, !0, !1), H_ = /*#__PURE__*/ m("<svg><path d=\"M8 11h6\"></svg>", !1, !0, !1);
function U_(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			B_(),
			V_(),
			H_()
		];
	} }));
}
U_.displayName = "SearchMinus";
//#endregion
//#region src/icons/search-plus.tsx
var W_ = /*#__PURE__*/ m("<svg><path d=\"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16\"></svg>", !1, !0, !1), G_ = /*#__PURE__*/ m("<svg><path d=\"M16.95 17.05 21 21\"></svg>", !1, !0, !1), K_ = /*#__PURE__*/ m("<svg><path d=\"M11 8v6\"></svg>", !1, !0, !1), q_ = /*#__PURE__*/ m("<svg><path d=\"M8 11h6\"></svg>", !1, !0, !1);
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
			W_(),
			G_(),
			K_(),
			q_()
		];
	} }));
}
J_.displayName = "SearchPlus";
//#endregion
//#region src/icons/search.tsx
var Y_ = /*#__PURE__*/ m("<svg><circle cx=11 cy=11 r=8></svg>", !1, !0, !1), X_ = /*#__PURE__*/ m("<svg><path d=\"M16.95 17.05 21 21\"></svg>", !1, !0, !1);
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
Z_.displayName = "Search";
//#endregion
//#region src/icons/send.tsx
var Q_ = /*#__PURE__*/ m("<svg><path d=\"M21.7 12.48 2.77 21a.5.5 0 0 1-.7-.57l2.05-8.29v-.24L2.09 3.62a.5.5 0 0 1 .69-.58l18.91 8.53c.4.17.4.73 0 .9Z\"></svg>", !1, !0, !1), $_ = /*#__PURE__*/ m("<svg><path d=\"M4.16 12.02h17.39\"></svg>", !1, !0, !1);
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
ev.displayName = "Send";
//#endregion
//#region src/icons/settings-control.tsx
var tv = /*#__PURE__*/ m("<svg><path d=\"M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h9\"></svg>", !1, !0, !1), nv = /*#__PURE__*/ m("<svg><path d=\"M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0H5\"></svg>", !1, !0, !1);
function rv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [tv(), nv()];
	} }));
}
rv.displayName = "SettingsControl";
//#endregion
//#region src/icons/settings.tsx
var iv = /*#__PURE__*/ m("<svg><path d=\"M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82a2 2 0 0 0-3.09-1.68l-1.33.87a1 1 0 0 1-1.46-.43l-.94-2.1a1 1 0 0 1 .42-1.29l1.45-.8a2 2 0 0 0 0-3.5l-1.45-.8a1 1 0 0 1-.42-1.29l.94-2.1a1 1 0 0 1 1.46-.43l1.33.87a2 2 0 0 0 3.09-1.68V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82a2 2 0 0 0 3.09 1.68l1.33-.87a1 1 0 0 1 1.46.43l.94 2.1a1 1 0 0 1-.42 1.29l-1.45.8a2 2 0 0 0 0 3.5l1.45.8a1 1 0 0 1 .42 1.29l-.94 2.1a1 1 0 0 1-1.46.43l-1.33-.87a2 2 0 0 0-3.09 1.68V21a1 1 0 0 1-1 1\"></svg>", !1, !0, !1), av = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1);
function ov(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [iv(), av()];
	} }));
}
ov.displayName = "Settings";
//#endregion
//#region src/icons/shield-alert.tsx
var sv = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), cv = /*#__PURE__*/ m("<svg><path d=\"M12 8v5\"></svg>", !1, !0, !1), lv = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=0.5></svg>", !1, !0, !1);
function uv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			sv(),
			cv(),
			lv()
		];
	} }));
}
uv.displayName = "ShieldAlert";
//#endregion
//#region src/icons/shield-check.tsx
var dv = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), fv = /*#__PURE__*/ m("<svg><path d=\"m9 12 1.74 1.63c.22.2.56.17.74-.06L15 9\"></svg>", !1, !0, !1);
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
		return [dv(), fv()];
	} }));
}
pv.displayName = "ShieldCheck";
//#endregion
//#region src/icons/shield-ellipsis.tsx
var mv = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), hv = /*#__PURE__*/ m("<svg><circle cx=8 cy=12 r=0.5></svg>", !1, !0, !1), gv = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=0.5></svg>", !1, !0, !1), _v = /*#__PURE__*/ m("<svg><circle cx=16 cy=12 r=0.5></svg>", !1, !0, !1);
function vv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mv(),
			hv(),
			gv(),
			_v()
		];
	} }));
}
vv.displayName = "ShieldEllipsis";
//#endregion
//#region src/icons/shield-lock.tsx
var yv = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), bv = /*#__PURE__*/ m("<svg><rect width=6 height=5 x=9 y=11 rx=0.5></svg>", !1, !0, !1), xv = /*#__PURE__*/ m("<svg><path d=\"M14 11v-1a2 2 0 1 0-4 0v1\"></svg>", !1, !0, !1);
function Sv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			yv(),
			bv(),
			xv()
		];
	} }));
}
Sv.displayName = "ShieldLock";
//#endregion
//#region src/icons/shield-off.tsx
var Cv = /*#__PURE__*/ m("<svg><path d=\"M19.68 14.5q.32-1.22.32-2.53V5.26q-.02-.21-.23-.23a11.5 11.5 0 0 1-6.79-2.3l-.8-.6a.3.3 0 0 0-.35 0l-.81.6q-1 .75-2.13 1.27\"></svg>", !1, !0, !1), wv = /*#__PURE__*/ m("<svg><path d=\"M17.98 18.1a10.3 10.3 0 0 1-6 3.9A10.3 10.3 0 0 1 4 11.96v-6.7q.02-.21.23-.23.38 0 .77-.03\"></svg>", !1, !0, !1), Tv = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
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
		return [
			Cv(),
			wv(),
			Tv()
		];
	} }));
}
Ev.displayName = "ShieldOff";
//#endregion
//#region src/icons/shield-question.tsx
var Dv = /*#__PURE__*/ m("<svg><path d=\"M4 5.18q.02-.2.23-.23a11.4 11.4 0 0 0 6.79-2.29l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.22v6.72a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.9z\"></svg>", !1, !0, !1), Ov = /*#__PURE__*/ m("<svg><path d=\"M9.17 9A3 3 0 0 1 15 10c0 1.66-1.34 3.5-3 3.5\"></svg>", !1, !0, !1), kv = /*#__PURE__*/ m("<svg><circle cx=12 cy=17 r=0.5></svg>", !1, !0, !1);
function Av(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			kv()
		];
	} }));
}
Av.displayName = "ShieldQuestion";
//#endregion
//#region src/icons/shield-user.tsx
var jv = /*#__PURE__*/ m("<svg><path d=\"M4 5.2q.02-.21.23-.23c2.45-.02 4.83-.83 6.79-2.3l.8-.61c.1-.08.25-.08.35 0l.81.6a11.4 11.4 0 0 0 6.8 2.3q.2.01.22.24v6.73A10.3 10.3 0 0 1 11.98 22 10.3 10.3 0 0 1 4 11.93z\"></svg>", !1, !0, !1), Mv = /*#__PURE__*/ m("<svg><path d=\"M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6\"></svg>", !1, !0, !1), Nv = /*#__PURE__*/ m("<svg><path d=\"M17.5 18.5c0-2.2-2.74-4.5-5.5-4.5s-5.5 2.3-5.5 4.5\"></svg>", !1, !0, !1);
function Pv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jv(),
			Mv(),
			Nv()
		];
	} }));
}
Pv.displayName = "ShieldUser";
//#endregion
//#region src/icons/shield-x.tsx
var Fv = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), Iv = /*#__PURE__*/ m("<svg><path d=\"m10 10 4 4\"></svg>", !1, !0, !1), Lv = /*#__PURE__*/ m("<svg><path d=\"m10 14 4-4\"></svg>", !1, !0, !1);
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
			Fv(),
			Iv(),
			Lv()
		];
	} }));
}
Rv.displayName = "ShieldX";
//#endregion
//#region src/icons/shield.tsx
var zv = /*#__PURE__*/ m("<svg><path d=\"M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1);
function Bv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return zv();
	} }));
}
Bv.displayName = "Shield";
//#endregion
//#region src/icons/shopping-bag-check.tsx
var Vv = /*#__PURE__*/ m("<svg><path d=\"M13 22H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4h11a1 1 0 0 1 .8.4L21 6v7m0-7H3\"></svg>", !1, !0, !1), Hv = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1), Uv = /*#__PURE__*/ m("<svg><path d=\"m16 19.12 1.98 1.98q.14.12.28 0L22 17\"></svg>", !1, !0, !1);
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
			Vv(),
			Hv(),
			Uv()
		];
	} }));
}
Wv.displayName = "ShoppingBagCheck";
//#endregion
//#region src/icons/shopping-bag-plus.tsx
var Gv = /*#__PURE__*/ m("<svg><path d=\"M21 13V6l-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h9m8-16H3\"></svg>", !1, !0, !1), Kv = /*#__PURE__*/ m("<svg><path d=\"M19 17v4\"></svg>", !1, !0, !1), qv = /*#__PURE__*/ m("<svg><path d=\"M17 19h4\"></svg>", !1, !0, !1), Jv = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1);
function Yv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			qv(),
			Jv()
		];
	} }));
}
Yv.displayName = "ShoppingBagPlus";
//#endregion
//#region src/icons/shopping-bag.tsx
var Xv = /*#__PURE__*/ m("<svg><path d=\"m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18\"></svg>", !1, !0, !1), Zv = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1);
function Qv(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Xv(), Zv()];
	} }));
}
Qv.displayName = "ShoppingBag";
//#endregion
//#region src/icons/shopping-cart-plus.tsx
var $v = /*#__PURE__*/ m("<svg><path d=\"m4 2 1 5 1.65 7.43A2 2 0 0 0 8.6 16h9.8a2 2 0 0 0 1.95-1.57l1.1-5M5 7h7.25\"></svg>", !1, !0, !1), ey = /*#__PURE__*/ m("<svg><path d=\"M2 2h2\"></svg>", !1, !0, !1), ty = /*#__PURE__*/ m("<svg><path d=\"M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), ny = /*#__PURE__*/ m("<svg><path d=\"M18 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1), ry = /*#__PURE__*/ m("<svg><path d=\"M18 4v4\"></svg>", !1, !0, !1), iy = /*#__PURE__*/ m("<svg><path d=\"M16 6h4\"></svg>", !1, !0, !1);
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
			$v(),
			ey(),
			ty(),
			ny(),
			ry(),
			iy()
		];
	} }));
}
ay.displayName = "ShoppingCartPlus";
//#endregion
//#region src/icons/shopping-cart.tsx
var oy = /*#__PURE__*/ m("<svg><path d=\"M5 7h14.5a2 2 0 0 1 1.96 2.43l-1.11 5A2 2 0 0 1 18.4 16H8.6a2 2 0 0 1-1.95-1.57zm0 0L4 2\"></svg>", !1, !0, !1), sy = /*#__PURE__*/ m("<svg><path d=\"M2 2h2\"></svg>", !1, !0, !1), cy = /*#__PURE__*/ m("<svg><circle cx=9 cy=21 r=1></svg>", !1, !0, !1), ly = /*#__PURE__*/ m("<svg><circle cx=18 cy=21 r=1></svg>", !1, !0, !1);
function uy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			oy(),
			sy(),
			cy(),
			ly()
		];
	} }));
}
uy.displayName = "ShoppingCart";
//#endregion
//#region src/icons/shuffle.tsx
var dy = /*#__PURE__*/ m("<svg><path d=\"M2 18h4.93a2 2 0 0 0 1.66-.9l6.82-10.2a2 2 0 0 1 1.66-.9H22\"></svg>", !1, !0, !1), fy = /*#__PURE__*/ m("<svg><path d=\"M10.1 9.14 8.6 6.89A2 2 0 0 0 6.92 6H2\"></svg>", !1, !0, !1), py = /*#__PURE__*/ m("<svg><path d=\"M22 18h-4.93a2 2 0 0 1-1.66-.9L14 15\"></svg>", !1, !0, !1), my = /*#__PURE__*/ m("<svg><path d=\"m19 2 2.92 3.34a1 1 0 0 1 0 1.32L19 10\"></svg>", !1, !0, !1), hy = /*#__PURE__*/ m("<svg><path d=\"m19 22 2.92-3.34a1 1 0 0 0 0-1.32L19 14\"></svg>", !1, !0, !1);
function gy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			dy(),
			fy(),
			py(),
			my(),
			hy()
		];
	} }));
}
gy.displayName = "Shuffle";
//#endregion
//#region src/icons/sim-card.tsx
var _y = /*#__PURE__*/ m("<svg><path d=\"M3 4c0-1.1.9-2 2-2h9.35a2 2 0 0 1 1.62.83l4.65 6.42a2 2 0 0 1 .38 1.18V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), vy = /*#__PURE__*/ m("<svg><rect width=8 height=9 x=8 y=9 rx=0.5></svg>", !1, !0, !1), yy = /*#__PURE__*/ m("<svg><path d=\"M12 9v2.98q0 .02.02.02H16\"></svg>", !1, !0, !1), by = /*#__PURE__*/ m("<svg><path d=\"M8.5 15h3.48q.02 0 .02.02V18\"></svg>", !1, !0, !1);
function xy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_y(),
			vy(),
			yy(),
			by()
		];
	} }));
}
xy.displayName = "SimCard";
//#endregion
//#region src/icons/skip-back.tsx
var Sy = /*#__PURE__*/ m("<svg><path d=\"M3 4v16\"></svg>", !1, !0, !1), Cy = /*#__PURE__*/ m("<svg><path d=\"M7.77 13.38a1.62 1.62 0 0 1 0-2.76L18.8 4.2c.99-.58 2.2.18 2.2 1.38v12.84c0 1.2-1.21 1.96-2.2 1.38z\"></svg>", !1, !0, !1);
function wy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Sy(), Cy()];
	} }));
}
wy.displayName = "SkipBack";
//#endregion
//#region src/icons/skip-forward.tsx
var Ty = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"M21 4v16\"></path><path d=\"M16.61 10.69a1.5 1.5 0 0 1 0 2.62L5.47 19.44a1.5 1.5 0 0 1-2.22-1.32V5.88a1.5 1.5 0 0 1 2.22-1.32z\"></svg>", !1, !0, !1), Ey = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function Dy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ty(), Ey()];
	} }));
}
Dy.displayName = "SkipForward";
//#endregion
//#region src/icons/sliders-horizontal.tsx
var Oy = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), ky = /*#__PURE__*/ m("<svg><path d=\"M14 5V3m0 2v2m0-2h7\"></svg>", !1, !0, !1), Ay = /*#__PURE__*/ m("<svg><path d=\"M8 12v-2m0 2v2m0-2H3\"></svg>", !1, !0, !1), jy = /*#__PURE__*/ m("<svg><path d=\"M12 12h9\"></svg>", !1, !0, !1), My = /*#__PURE__*/ m("<svg><path d=\"M3 19h9\"></svg>", !1, !0, !1), Ny = /*#__PURE__*/ m("<svg><path d=\"M16 19v-2m0 2v2m0-2h5\"></svg>", !1, !0, !1);
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
			Oy(),
			ky(),
			Ay(),
			jy(),
			My(),
			Ny()
		];
	} }));
}
Py.displayName = "SlidersHorizontal";
//#endregion
//#region src/icons/sliders-vertical.tsx
var Fy = /*#__PURE__*/ m("<svg><path d=\"M5 3v7\"></svg>", !1, !0, !1), Iy = /*#__PURE__*/ m("<svg><path d=\"M5 14v7m0-7H3m2 0h2\"></svg>", !1, !0, !1), Ly = /*#__PURE__*/ m("<svg><path d=\"M12 8h2m-2 0h-2m2 0V3\"></svg>", !1, !0, !1), Ry = /*#__PURE__*/ m("<svg><path d=\"M12 12v9\"></svg>", !1, !0, !1), zy = /*#__PURE__*/ m("<svg><path d=\"M19 3v9\"></svg>", !1, !0, !1), By = /*#__PURE__*/ m("<svg><path d=\"M19 16h2m-2 0h-2m2 0v5\"></svg>", !1, !0, !1);
function Vy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			Ry(),
			zy(),
			By()
		];
	} }));
}
Vy.displayName = "SlidersVertical";
//#endregion
//#region src/icons/smile-plus.tsx
var Hy = /*#__PURE__*/ m("<svg><path d=\"M21.95 11q.05.5.05 1a10 10 0 1 1-9-9.95\"></svg>", !1, !0, !1), Uy = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.14 6.14 0 0 0 10 0\"></svg>", !1, !0, !1), Wy = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Gy = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Ky = /*#__PURE__*/ m("<svg><path d=\"M19 2v6\"></svg>", !1, !0, !1), qy = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function Jy(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Hy(),
			Uy(),
			Wy(),
			Gy(),
			Ky(),
			qy()
		];
	} }));
}
Jy.displayName = "SmilePlus";
//#endregion
//#region src/icons/smile-wink.tsx
var Yy = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Xy = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.14 6.14 0 0 0 10 0\"></svg>", !1, !0, !1), Zy = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Qy = /*#__PURE__*/ m("<svg><path d=\"M14 10c.6-.94 1.69-1.68 3 0\"></svg>", !1, !0, !1);
function $y(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yy(),
			Xy(),
			Zy(),
			Qy()
		];
	} }));
}
$y.displayName = "SmileWink";
//#endregion
//#region src/icons/smile.tsx
var eb = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), tb = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.14 6.14 0 0 0 10 0\"></svg>", !1, !0, !1), nb = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), rb = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1);
function ib(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			eb(),
			tb(),
			nb(),
			rb()
		];
	} }));
}
ib.displayName = "Smile";
//#endregion
//#region src/icons/sparkles-text.tsx
var ab = /*#__PURE__*/ m("<svg><path d=\"m15.99 6.8-1.96-.83a.05.05 0 0 1 0-.1l1.96-.83a2 2 0 0 0 1.05-1.05l.84-1.96a.05.05 0 0 1 .09 0l.84 1.96a2 2 0 0 0 1.05 1.05l1.96.84c.04.01.04.07 0 .09l-1.96.84a2 2 0 0 0-1.05 1.05l-.84 1.96a.05.05 0 0 1-.1 0l-.83-1.96a2 2 0 0 0-1.05-1.05Z\"></svg>", !1, !0, !1), ob = /*#__PURE__*/ m("<svg><path d=\"M3 5h6\"></svg>", !1, !0, !1), sb = /*#__PURE__*/ m("<svg><path d=\"M3 9h8\"></svg>", !1, !0, !1), cb = /*#__PURE__*/ m("<svg><path d=\"M3 13h15.5\"></svg>", !1, !0, !1), lb = /*#__PURE__*/ m("<svg><path d=\"M3 17h12\"></svg>", !1, !0, !1), ub = /*#__PURE__*/ m("<svg><path d=\"M3 21h17.5\"></svg>", !1, !0, !1);
function db(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ab(),
			ob(),
			sb(),
			cb(),
			lb(),
			ub()
		];
	} }));
}
db.displayName = "SparklesText";
//#endregion
//#region src/icons/sparkles.tsx
var fb = /*#__PURE__*/ m("<svg><path d=\"m10.86 12.08-4.43-1.9a.2.2 0 0 1 0-.36l4.43-1.9a2 2 0 0 0 1.06-1.06l1.9-4.43a.2.2 0 0 1 .36 0l1.9 4.43a2 2 0 0 0 1.06 1.06l4.43 1.9a.2.2 0 0 1 0 .36l-4.43 1.9a2 2 0 0 0-1.06 1.06l-1.9 4.43a.2.2 0 0 1-.36 0l-1.9-4.43a2 2 0 0 0-1.06-1.06\"></svg>", !1, !0, !1), pb = /*#__PURE__*/ m("<svg><path d=\"m4.06 18.88-1.95-.83a.05.05 0 0 1 0-.1l1.95-.83a2 2 0 0 0 1.06-1.06l.83-1.95a.05.05 0 0 1 .1 0l.83 1.95a2 2 0 0 0 1.06 1.06l1.95.83q.06.05 0 .1l-1.95.83a2 2 0 0 0-1.06 1.06l-.83 1.95a.05.05 0 0 1-.1 0l-.83-1.95a2 2 0 0 0-1.06-1.06\"></svg>", !1, !0, !1), mb = /*#__PURE__*/ m("<svg><path d=\"M5 2v4\"></svg>", !1, !0, !1), hb = /*#__PURE__*/ m("<svg><path d=\"M3 4h4\"></svg>", !1, !0, !1);
function gb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			fb(),
			pb(),
			mb(),
			hb()
		];
	} }));
}
gb.displayName = "Sparkles";
//#endregion
//#region src/icons/split.tsx
var _b = /*#__PURE__*/ m("<svg><path d=\"m4 4 7.32 6.4a2 2 0 0 1 .68 1.5V22\"></svg>", !1, !0, !1), vb = /*#__PURE__*/ m("<svg><path d=\"M3 8V3.5c0-.28.22-.5.5-.5H8\"></svg>", !1, !0, !1), yb = /*#__PURE__*/ m("<svg><path d=\"M21 8V3.5a.5.5 0 0 0-.5-.5H16\"></svg>", !1, !0, !1), bb = /*#__PURE__*/ m("<svg><path d=\"m20 4-5 4\"></svg>", !1, !0, !1);
function xb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			_b(),
			vb(),
			yb(),
			bb()
		];
	} }));
}
xb.displayName = "Split";
//#endregion
//#region src/icons/square-activity.tsx
var Sb = /*#__PURE__*/ m("<svg><path d=\"M7 11.98h1.35q.03 0 .05-.04l1.33-4.9c.01-.05.09-.05.1 0l3.23 9.92c.02.05.09.05.1 0l2.02-4.94q.01-.03.05-.04H17\"></svg>", !1, !0, !1), Cb = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1);
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
		return [Sb(), Cb()];
	} }));
}
wb.displayName = "SquareActivity";
//#endregion
//#region src/icons/square-arrow-out-up-left.tsx
var Tb = /*#__PURE__*/ m("<svg><path d=\"M3 9V3.5c0-.28.22-.5.5-.5H9\"></svg>", !1, !0, !1), Eb = /*#__PURE__*/ m("<svg><path d=\"m4 4 8 8\"></svg>", !1, !0, !1), Db = /*#__PURE__*/ m("<svg><path d=\"M3 13v7.5c0 .28.22.5.5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13\"></svg>", !1, !0, !1);
function Ob(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Tb(),
			Eb(),
			Db()
		];
	} }));
}
Ob.displayName = "SquareArrowOutUpLeft";
//#endregion
//#region src/icons/square-arrow-out-up-right.tsx
var kb = /*#__PURE__*/ m("<svg><path d=\"M21 13v7.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5H11\"></svg>", !1, !0, !1), Ab = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5c.28 0 .5.22.5.5V9\"></svg>", !1, !0, !1), jb = /*#__PURE__*/ m("<svg><path d=\"m12 12 8-8\"></svg>", !1, !0, !1);
function Mb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			kb(),
			Ab(),
			jb()
		];
	} }));
}
Mb.displayName = "SquareArrowOutUpRight";
//#endregion
//#region src/icons/square-arrow-up-left.tsx
var Nb = /*#__PURE__*/ m("<svg><path d=\"m10 10 5 5\"></svg>", !1, !0, !1), Pb = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5v17a.5.5 0 0 1-.5.5\"></svg>", !1, !0, !1), Fb = /*#__PURE__*/ m("<svg><path d=\"M9 15V9.5c0-.28.22-.5.5-.5H15\"></svg>", !1, !0, !1);
function Ib(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Nb(),
			Pb(),
			Fb()
		];
	} }));
}
Ib.displayName = "SquareArrowUpLeft";
//#endregion
//#region src/icons/square-arrow-up-right.tsx
var Lb = /*#__PURE__*/ m("<svg><path d=\"M9 9h5.7c.17 0 .3.13.3.3V15\"></svg>", !1, !0, !1), Rb = /*#__PURE__*/ m("<svg><path d=\"m9 15 5-5\"></svg>", !1, !0, !1), zb = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5v17a.5.5 0 0 1-.5.5\"></svg>", !1, !0, !1);
function Bb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Lb(),
			Rb(),
			zb()
		];
	} }));
}
Bb.displayName = "SquareArrowUpRight";
//#endregion
//#region src/icons/square-chevron-down.tsx
var Vb = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.76 3.9c.13.13.35.13.48 0L16 10\"></svg>", !1, !0, !1), Hb = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1.5></svg>", !1, !0, !1);
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
		return [Vb(), Hb()];
	} }));
}
Ub.displayName = "SquareChevronDown";
//#endregion
//#region src/icons/square-chevron-up.tsx
var Wb = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14\"></svg>", !1, !0, !1), Gb = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1);
function Kb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Wb(), Gb()];
	} }));
}
Kb.displayName = "SquareChevronUp";
//#endregion
//#region src/icons/square-user.tsx
var qb = /*#__PURE__*/ m("<svg><path d=\"M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"></svg>", !1, !0, !1), Jb = /*#__PURE__*/ m("<svg><path d=\"M18 20c0-2.76-2.69-5-6-5s-6 2.24-6 5\"></svg>", !1, !0, !1), Yb = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1);
function Xb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qb(),
			Jb(),
			Yb()
		];
	} }));
}
Xb.displayName = "SquareUser";
//#endregion
//#region src/icons/star.tsx
var Zb = /*#__PURE__*/ m("<svg><path d=\"M11.95 2.15a.05.05 0 0 1 .1 0l2.4 7.42q.02.03.06.03h7.8c.05 0 .07.06.03.1l-6.31 4.58-.02.05 2.4 7.42a.05.05 0 0 1-.07.06l-6.31-4.59h-.06l-6.31 4.59a.05.05 0 0 1-.08-.06L8 14.33q0-.03-.02-.05l-6.3-4.59a.05.05 0 0 1 .02-.09h7.8q.04 0 .05-.03z\"></svg>", !1, !0, !1);
function Qb(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Zb();
	} }));
}
Qb.displayName = "Star";
//#endregion
//#region src/icons/stop-circle.tsx
var $b = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), ex = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=9 y=9 rx=1></svg>", !1, !0, !1);
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
		return [$b(), ex()];
	} }));
}
tx.displayName = "StopCircle";
//#endregion
//#region src/icons/sun-dim.tsx
var nx = /*#__PURE__*/ m("<svg><path d=\"M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"></svg>", !1, !0, !1), rx = /*#__PURE__*/ m("<svg><circle cx=4 cy=12 r=0.5></svg>", !1, !0, !1), ix = /*#__PURE__*/ m("<svg><circle cx=12 cy=4 r=0.5></svg>", !1, !0, !1), ax = /*#__PURE__*/ m("<svg><circle cx=20 cy=12 r=0.5></svg>", !1, !0, !1), ox = /*#__PURE__*/ m("<svg><circle cx=12 cy=20 r=0.5></svg>", !1, !0, !1), sx = /*#__PURE__*/ m("<svg><circle cx=6 cy=18 r=0.5></svg>", !1, !0, !1), cx = /*#__PURE__*/ m("<svg><circle cx=6 cy=6 r=0.5></svg>", !1, !0, !1), lx = /*#__PURE__*/ m("<svg><circle cx=18 cy=6 r=0.5></svg>", !1, !0, !1), ux = /*#__PURE__*/ m("<svg><circle cx=18 cy=18 r=0.5></svg>", !1, !0, !1);
function dx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			sx(),
			cx(),
			lx(),
			ux()
		];
	} }));
}
dx.displayName = "SunDim";
//#endregion
//#region src/icons/sun-moon.tsx
var fx = /*#__PURE__*/ m("<svg><path d=\"M9.05 21c3.08 0 5.33-2.26 5.94-5.22.08-.41-.28-.77-.7-.75-5.73.23-5.68-3.17-5.36-5.3.06-.4-.26-.78-.67-.72A6 6 0 0 0 3 14.98 6.04 6.04 0 0 0 9.05 21\"></svg>", !1, !0, !1), px = /*#__PURE__*/ m("<svg><path d=\"M15.97 12C15.8 10 15 8.07 12 8\"></svg>", !1, !0, !1), mx = /*#__PURE__*/ m("<svg><path d=\"M12 4V2\"></svg>", !1, !0, !1), hx = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), gx = /*#__PURE__*/ m("<svg><path d=\"M18 6.5 19.5 5\"></svg>", !1, !0, !1);
function _x(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			fx(),
			px(),
			mx(),
			hx(),
			gx()
		];
	} }));
}
_x.displayName = "SunMoon";
//#endregion
//#region src/icons/sun.tsx
var vx = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=4></svg>", !1, !0, !1), yx = /*#__PURE__*/ m("<svg><path d=\"M12 4V2\"></svg>", !1, !0, !1), bx = /*#__PURE__*/ m("<svg><path d=\"M12 20v2\"></svg>", !1, !0, !1), xx = /*#__PURE__*/ m("<svg><path d=\"M4 12H2\"></svg>", !1, !0, !1), Sx = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), Cx = /*#__PURE__*/ m("<svg><path d=\"M6.5 5.5 5 4\"></svg>", !1, !0, !1), wx = /*#__PURE__*/ m("<svg><path d=\"M17.5 5.5 19 4\"></svg>", !1, !0, !1), Tx = /*#__PURE__*/ m("<svg><path d=\"M18.5 18.5 20 20\"></svg>", !1, !0, !1), Ex = /*#__PURE__*/ m("<svg><path d=\"m4 20 1.5-1.5\"></svg>", !1, !0, !1);
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
			vx(),
			yx(),
			bx(),
			xx(),
			Sx(),
			Cx(),
			wx(),
			Tx(),
			Ex()
		];
	} }));
}
Dx.displayName = "Sun";
//#endregion
//#region src/icons/swap-horizontal.tsx
var Ox = /*#__PURE__*/ m("<svg><path d=\"M8 3 4.13 6.8c-.17.11-.17.29 0 .4L8 11\"></svg>", !1, !0, !1), kx = /*#__PURE__*/ m("<svg><path d=\"M6 7h14\"></svg>", !1, !0, !1), Ax = /*#__PURE__*/ m("<svg><path d=\"m16 13 3.65 3.65c.2.2.2.5 0 .7L16 21\"></svg>", !1, !0, !1), jx = /*#__PURE__*/ m("<svg><path d=\"M4 17h14\"></svg>", !1, !0, !1);
function Mx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ox(),
			kx(),
			Ax(),
			jx()
		];
	} }));
}
Mx.displayName = "SwapHorizontal";
//#endregion
//#region src/icons/swap-vertical.tsx
var Nx = /*#__PURE__*/ m("<svg><path d=\"M7 4v14\"></svg>", !1, !0, !1), Px = /*#__PURE__*/ m("<svg><path d=\"m3 16 3.65 3.65c.2.2.5.2.7 0L11 16\"></svg>", !1, !0, !1), Fx = /*#__PURE__*/ m("<svg><path d=\"m13 8 3.65-3.65c.2-.2.5-.2.7 0L21 8\"></svg>", !1, !0, !1), Ix = /*#__PURE__*/ m("<svg><path d=\"M17 6v14\"></svg>", !1, !0, !1);
function Lx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Nx(),
			Px(),
			Fx(),
			Ix()
		];
	} }));
}
Lx.displayName = "SwapVertical";
//#endregion
//#region src/icons/table-properties.tsx
var Rx = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), zx = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), Bx = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1), Vx = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1);
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
			Rx(),
			zx(),
			Bx(),
			Vx()
		];
	} }));
}
Hx.displayName = "TableProperties";
//#endregion
//#region src/icons/tag-check.tsx
var Ux = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), Wx = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Gx = /*#__PURE__*/ m("<svg><path d=\"m14 10.12 1.98 1.98q.14.12.28 0L20 8\"></svg>", !1, !0, !1);
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
Kx.displayName = "TagCheck";
//#endregion
//#region src/icons/tag-minus.tsx
var qx = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), Jx = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Yx = /*#__PURE__*/ m("<svg><path d=\"M16 11h6\"></svg>", !1, !0, !1);
function Xx(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			qx(),
			Jx(),
			Yx()
		];
	} }));
}
Xx.displayName = "TagMinus";
//#endregion
//#region src/icons/tag-plus.tsx
var Zx = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), Qx = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), $x = /*#__PURE__*/ m("<svg><path d=\"M19 8v6\"></svg>", !1, !0, !1), eS = /*#__PURE__*/ m("<svg><path d=\"M16 11h6\"></svg>", !1, !0, !1);
function tS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Zx(),
			Qx(),
			$x(),
			eS()
		];
	} }));
}
tS.displayName = "TagPlus";
//#endregion
//#region src/icons/tag-x.tsx
var nS = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17\"></svg>", !1, !0, !1), rS = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), iS = /*#__PURE__*/ m("<svg><path d=\"m17 13 4-4\"></svg>", !1, !0, !1), aS = /*#__PURE__*/ m("<svg><path d=\"m17 9 4 4\"></svg>", !1, !0, !1);
function oS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			nS(),
			rS(),
			iS(),
			aS()
		];
	} }));
}
oS.displayName = "TagX";
//#endregion
//#region src/icons/tags.tsx
var sS = /*#__PURE__*/ m("<svg><path d=\"M7 9.33V2.77c0-.43.34-.77.77-.77h6.18q.3 0 .53.21l7.28 6.92c.3.3.32.78.03 1.08l-6.2 6.55c-.3.3-.78.32-1.08.03l-7.27-6.9A.8.8 0 0 1 7 9.33\"></svg>", !1, !0, !1), cS = /*#__PURE__*/ m("<svg><path d=\"M10.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), lS = /*#__PURE__*/ m("<svg><path d=\"M3 8v3.17a2 2 0 0 0 .59 1.42l7.4 7.4a2 2 0 0 0 2.3.37L14 20\"></svg>", !1, !0, !1);
function uS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			sS(),
			cS(),
			lS()
		];
	} }));
}
uS.displayName = "Tags";
//#endregion
//#region src/icons/target.tsx
var dS = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), fS = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=6></svg>", !1, !0, !1), pS = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=2></svg>", !1, !0, !1);
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
		return [
			dS(),
			fS(),
			pS()
		];
	} }));
}
mS.displayName = "Target";
//#endregion
//#region src/icons/terminal.tsx
var hS = /*#__PURE__*/ m("<svg><path d=\"m4 5 5.86 5.86a.2.2 0 0 1 0 .28L4 17\"></svg>", !1, !0, !1), gS = /*#__PURE__*/ m("<svg><path d=\"M12 19h8\"></svg>", !1, !0, !1);
function _S(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [hS(), gS()];
	} }));
}
_S.displayName = "Terminal";
//#endregion
//#region src/icons/thumbs-down.tsx
var vS = /*#__PURE__*/ m("<svg><path d=\"M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.26a1 1 0 0 0-.96.7l-2.16 6.93a.4.4 0 0 1-.48.24 4.1 4.1 0 0 1-2.66-3.4l-.4-3.66a.9.9 0 0 0-.9-.81h-6a1 1 0 0 1-.99-1.16l1.67-10A1 1 0 0 1 4.85 2H17m0 12V2\"></svg>", !1, !0, !1);
function yS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return vS();
	} }));
}
yS.displayName = "ThumbsDown";
//#endregion
//#region src/icons/thumbs-up.tsx
var bS = /*#__PURE__*/ m("<svg><path d=\"M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.26a1 1 0 0 0 .96-.7l2.16-6.93c.07-.2.29-.31.48-.24a4.1 4.1 0 0 1 2.66 3.4l.4 3.66a.9.9 0 0 0 .9.81h6a1 1 0 0 1 .99 1.16l-1.67 10a1 1 0 0 1-.99.84H7m0-12v12\"></svg>", !1, !0, !1);
function xS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return bS();
	} }));
}
xS.displayName = "ThumbsUp";
//#endregion
//#region src/icons/ticket.tsx
var SS = /*#__PURE__*/ m("<svg><path d=\"M2 9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2M2 15v2c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-2\"></svg>", !1, !0, !1), CS = /*#__PURE__*/ m("<svg><path d=\"M2 15a3 3 0 1 0 0-6\"></svg>", !1, !0, !1), wS = /*#__PURE__*/ m("<svg><path d=\"M22 15a3 3 0 1 1 0-6\"></svg>", !1, !0, !1), TS = /*#__PURE__*/ m("<svg><path d=\"M13 5v3m0 11v-2m0-5v1\"></svg>", !1, !0, !1);
function ES(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			SS(),
			CS(),
			wS(),
			TS()
		];
	} }));
}
ES.displayName = "Ticket";
//#endregion
//#region src/icons/trash-2.tsx
var DS = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m0 0h3M5 6v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2M8 6h8\"></svg>", !1, !0, !1), OS = /*#__PURE__*/ m("<svg><path d=\"M10 11v6\"></svg>", !1, !0, !1), kS = /*#__PURE__*/ m("<svg><path d=\"M14 11v6\"></svg>", !1, !0, !1);
function AS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			DS(),
			OS(),
			kS()
		];
	} }));
}
AS.displayName = "Trash2";
//#endregion
//#region src/icons/trash.tsx
var jS = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m16 0h-2M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6\"></svg>", !1, !0, !1);
function MS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return jS();
	} }));
}
MS.displayName = "Trash";
//#endregion
//#region src/icons/truck-electric.tsx
var NS = /*#__PURE__*/ m("<svg><path d=\"M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), PS = /*#__PURE__*/ m("<svg><path d=\"M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), FS = /*#__PURE__*/ m("<svg><path d=\"M5 18H4a2 2 0 0 1-2-2v-5m12 7V6a2 2 0 0 0-2-2H8\"></svg>", !1, !0, !1), IS = /*#__PURE__*/ m("<svg><path d=\"M4 2 2.13 5.74c-.05.1.04.2.14.17l2.51-.84c.1-.03.18.06.16.15L4 8.5\"></svg>", !1, !0, !1), LS = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), RS = /*#__PURE__*/ m("<svg><path d=\"M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14\"></svg>", !1, !0, !1);
function zS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			NS(),
			PS(),
			FS(),
			IS(),
			LS(),
			RS()
		];
	} }));
}
zS.displayName = "TruckElectric";
//#endregion
//#region src/icons/truck.tsx
var BS = /*#__PURE__*/ m("<svg><circle cx=7 cy=18 r=2></svg>", !1, !0, !1), VS = /*#__PURE__*/ m("<svg><circle cx=17 cy=18 r=2></svg>", !1, !0, !1), HS = /*#__PURE__*/ m("<svg><path d=\"M5 18H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12\"></svg>", !1, !0, !1), US = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), WS = /*#__PURE__*/ m("<svg><path d=\"M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14\"></svg>", !1, !0, !1);
function GS(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			BS(),
			VS(),
			HS(),
			US(),
			WS()
		];
	} }));
}
GS.displayName = "Truck";
//#endregion
//#region src/icons/undo-2.tsx
var KS = /*#__PURE__*/ m("<svg><path d=\"M4 9h10.5a5.5 5.5 0 1 1 0 11H12\"></svg>", !1, !0, !1), qS = /*#__PURE__*/ m("<svg><path d=\"M9 4 4.14 8.86a.2.2 0 0 0 0 .28L9 14\"></svg>", !1, !0, !1);
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
		return [KS(), qS()];
	} }));
}
JS.displayName = "Undo2";
//#endregion
//#region src/icons/unlink.tsx
var YS = /*#__PURE__*/ m("<svg><path d=\"m16.46 20.21.68 2.13\"></svg>", !1, !0, !1), XS = /*#__PURE__*/ m("<svg><path d=\"m3.93 7.3-2.11-.75\"></svg>", !1, !0, !1), ZS = /*#__PURE__*/ m("<svg><path d=\"m19.68 17.09 2.1.74\"></svg>", !1, !0, !1), QS = /*#__PURE__*/ m("<svg><path d=\"m7.15 4.17-.68-2.13\"></svg>", !1, !0, !1), $S = /*#__PURE__*/ m("<svg><path d=\"M12.95 4.46a5 5 0 1 1 7.07 7.08l-2.83 2.82a5 5 0 0 1-7.07 0\"></svg>", !1, !0, !1), eC = /*#__PURE__*/ m("<svg><path d=\"M11.54 20.02a5 5 0 1 1-7.08-7.07l2.83-2.83a5 5 0 0 1 7.07 0\"></svg>", !1, !0, !1);
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
			YS(),
			XS(),
			ZS(),
			QS(),
			$S(),
			eC()
		];
	} }));
}
$.displayName = "Unlink";
//#endregion
//#region src/icons/upload.tsx
var tC = /*#__PURE__*/ m("<svg><path d=\"M3 14v5c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-5\"></svg>", !1, !0, !1), nC = /*#__PURE__*/ m("<svg><path d=\"m7 8 4.65-4.65c.2-.2.5-.2.7 0L17 8\"></svg>", !1, !0, !1), rC = /*#__PURE__*/ m("<svg><path d=\"M12 4v11\"></svg>", !1, !0, !1);
function iC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			tC(),
			nC(),
			rC()
		];
	} }));
}
iC.displayName = "Upload";
//#endregion
//#region src/icons/user-check.tsx
var aC = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), oC = /*#__PURE__*/ m("<svg><path d=\"M15 14.75A8 8 0 0 0 2 21\"></svg>", !1, !0, !1), sC = /*#__PURE__*/ m("<svg><path d=\"m16 19.33 1.6 1.34a.5.5 0 0 0 .72-.07L22 16\"></svg>", !1, !0, !1);
function cC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			aC(),
			oC(),
			sC()
		];
	} }));
}
cC.displayName = "UserCheck";
//#endregion
//#region src/icons/user-cog.tsx
var lC = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), uC = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), dC = /*#__PURE__*/ m("<svg><circle cx=19 cy=19 r=2></svg>", !1, !0, !1), fC = /*#__PURE__*/ m("<svg><path d=\"M19 16v1\"></svg>", !1, !0, !1), pC = /*#__PURE__*/ m("<svg><path d=\"M19 21v1\"></svg>", !1, !0, !1), mC = /*#__PURE__*/ m("<svg><path d=\"M16 19h1\"></svg>", !1, !0, !1), hC = /*#__PURE__*/ m("<svg><path d=\"M21 19h1\"></svg>", !1, !0, !1), gC = /*#__PURE__*/ m("<svg><path d=\"m17 17 .5.5\"></svg>", !1, !0, !1), _C = /*#__PURE__*/ m("<svg><path d=\"m20.5 20.5.5.5\"></svg>", !1, !0, !1), vC = /*#__PURE__*/ m("<svg><path d=\"m17 21 .5-.5\"></svg>", !1, !0, !1), yC = /*#__PURE__*/ m("<svg><path d=\"m20.5 17.5.5-.5\"></svg>", !1, !0, !1);
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
			lC(),
			uC(),
			dC(),
			fC(),
			pC(),
			mC(),
			hC(),
			gC(),
			_C(),
			vC(),
			yC()
		];
	} }));
}
bC.displayName = "UserCog";
//#endregion
//#region src/icons/user-lock.tsx
var xC = /*#__PURE__*/ m("<svg><path d=\"M11 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), SC = /*#__PURE__*/ m("<svg><path d=\"M14.15 12.64A8 8 0 0 0 3 20\"></svg>", !1, !0, !1), CC = /*#__PURE__*/ m("<svg><path d=\"M21.61 18H15.4c-.22 0-.39.16-.39.36v3.28c0 .2.17.36.39.36h6.22c.22 0 .39-.16.39-.36v-3.28c0-.2-.17-.36-.39-.36Z\"></svg>", !1, !0, !1), wC = /*#__PURE__*/ m("<svg><path d=\"M17 18v-1.33c0-.92.67-1.67 1.5-1.67s1.5.75 1.5 1.67V18\"></svg>", !1, !0, !1);
function TC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xC(),
			SC(),
			CC(),
			wC()
		];
	} }));
}
TC.displayName = "UserLock";
//#endregion
//#region src/icons/user-minus.tsx
var EC = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), DC = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), OC = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function kC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			EC(),
			DC(),
			OC()
		];
	} }));
}
kC.displayName = "UserMinus";
//#endregion
//#region src/icons/user-plus.tsx
var AC = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), jC = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), MC = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), NC = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1);
function PC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			AC(),
			jC(),
			MC(),
			NC()
		];
	} }));
}
PC.displayName = "UserPlus";
//#endregion
//#region src/icons/user-search.tsx
var FC = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), IC = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), LC = /*#__PURE__*/ m("<svg><circle cx=19 cy=19 r=2></svg>", !1, !0, !1), RC = /*#__PURE__*/ m("<svg><path d=\"M20.5 20.5 22 22\"></svg>", !1, !0, !1);
function zC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			FC(),
			IC(),
			LC(),
			RC()
		];
	} }));
}
zC.displayName = "UserSearch";
//#endregion
//#region src/icons/user-x.tsx
var BC = /*#__PURE__*/ m("<svg><path d=\"M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), VC = /*#__PURE__*/ m("<svg><path d=\"M15.15 13.64A8 8 0 0 0 4 21\"></svg>", !1, !0, !1), HC = /*#__PURE__*/ m("<svg><path d=\"m17 17 5 5\"></svg>", !1, !0, !1), UC = /*#__PURE__*/ m("<svg><path d=\"m17 22 5-5\"></svg>", !1, !0, !1);
function WC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			BC(),
			VC(),
			HC(),
			UC()
		];
	} }));
}
WC.displayName = "UserX";
//#endregion
//#region src/icons/user.tsx
var GC = /*#__PURE__*/ m("<svg><circle cx=12 cy=8 r=5></svg>", !1, !0, !1), KC = /*#__PURE__*/ m("<svg><path d=\"M20 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1);
function qC(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [GC(), KC()];
	} }));
}
qC.displayName = "User";
//#endregion
//#region src/icons/users-shield.tsx
var JC = /*#__PURE__*/ m("<svg><path d=\"M11 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10\"></svg>", !1, !0, !1), YC = /*#__PURE__*/ m("<svg><path d=\"M14.15 12.64A8 8 0 0 0 3 20\"></svg>", !1, !0, !1), XC = /*#__PURE__*/ m("<svg><path d=\"M16 16.12q0-.08.09-.08c.91 0 1.8-.29 2.54-.8l.3-.22q.07-.04.14 0l.3.21c.73.52 1.63.8 2.54.8q.08 0 .09.09v2.36A3.7 3.7 0 0 1 19 22a3.7 3.7 0 0 1-3-3.52z\"></svg>", !1, !0, !1);
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
		return [
			JC(),
			YC(),
			XC()
		];
	} }));
}
ZC.displayName = "UsersShield";
//#endregion
//#region src/icons/users.tsx
var QC = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), $C = /*#__PURE__*/ m("<svg><path d=\"M18 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1), ew = /*#__PURE__*/ m("<svg><path d=\"M18 4c.83 1.33 2 4.9 0 8.5\"></svg>", !1, !0, !1), tw = /*#__PURE__*/ m("<svg><path d=\"M18 12.5c1.5 1.33 4.4 4.9 4 8.5\"></svg>", !1, !0, !1);
function nw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
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
			tw()
		];
	} }));
}
nw.displayName = "Users";
//#endregion
//#region src/icons/van.tsx
var rw = /*#__PURE__*/ m("<svg><path d=\"M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), iw = /*#__PURE__*/ m("<svg><path d=\"M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), aw = /*#__PURE__*/ m("<svg><path d=\"M5 18H4c-1.1 0-2-.77-2-1.71V7.7C2 6.77 2.9 6 4 6h11.56a2 2 0 0 1 1.9 1.37L19 12\"></svg>", !1, !0, !1), ow = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), sw = /*#__PURE__*/ m("<svg><path d=\"M19.55 18H20a2 2 0 0 0 2-2v-.7a3 3 0 0 0-.83-2.08l-.28-.3a3 3 0 0 0-2.17-.92H14a1 1 0 0 1-1-1V6\"></svg>", !1, !0, !1);
function cw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			rw(),
			iw(),
			aw(),
			ow(),
			sw()
		];
	} }));
}
cw.displayName = "Van";
//#endregion
//#region src/icons/video-camera.tsx
var lw = /*#__PURE__*/ m("<svg><path d=\"M14.21 7H4.8a.77.77 0 0 0-.79.75v7.5c0 .41.35.75.79.75h9.42c.44 0 .79-.34.79-.75v-7.5a.77.77 0 0 0-.79-.75Z\"></svg>", !1, !0, !1), uw = /*#__PURE__*/ m("<svg><path d=\"m15 12.1 3.7 1.8c.56.27 1.3-.02 1.3-.5V9.6c0-.48-.74-.77-1.3-.5L15 10.9\"></svg>", !1, !0, !1), dw = /*#__PURE__*/ m("<svg><path d=\"m7 21 2.14-3.57a1 1 0 0 1 1.72 0L13 21\"></svg>", !1, !0, !1), fw = /*#__PURE__*/ m("<svg><circle cx=6.5 cy=3.5 r=1.5></svg>", !1, !0, !1), pw = /*#__PURE__*/ m("<svg><circle cx=11.5 cy=3.5 r=1.5></svg>", !1, !0, !1);
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
			lw(),
			uw(),
			dw(),
			fw(),
			pw()
		];
	} }));
}
mw.displayName = "VideoCamera";
//#endregion
//#region src/icons/video.tsx
var hw = /*#__PURE__*/ m("<svg><rect width=14 height=12 x=2 y=6 rx=1></svg>", !1, !0, !1), gw = /*#__PURE__*/ m("<svg><path d=\"m16 13 4.45 2.96a1 1 0 0 0 1.55-.83V8.87a1 1 0 0 0-1.55-.83L16 11\"></svg>", !1, !0, !1);
function _w(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [hw(), gw()];
	} }));
}
_w.displayName = "Video";
//#endregion
//#region src/icons/volume-1.tsx
var vw = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), yw = /*#__PURE__*/ m("<svg><path d=\"M17 7c1.17 1.33 2.8 5.2 0 10\"></svg>", !1, !0, !1);
function bw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [vw(), yw()];
	} }));
}
bw.displayName = "Volume1";
//#endregion
//#region src/icons/volume-2.tsx
var xw = /*#__PURE__*/ m("<svg><path d=\"M2 15V9a1 1 0 0 1 1-1h3.67a1 1 0 0 0 .6-.2l2.93-2.2a.5.5 0 0 1 .8.4v12.12a.5.5 0 0 1-.76.43l-4-2.4a1 1 0 0 0-.52-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), Sw = /*#__PURE__*/ m("<svg><path d=\"M16 9c.83 1 2 3.6 0 6\"></svg>", !1, !0, !1), Cw = /*#__PURE__*/ m("<svg><path d=\"M19 5c2.33 2.33 5.6 8.4 0 14\"></svg>", !1, !0, !1);
function ww(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			xw(),
			Sw(),
			Cw()
		];
	} }));
}
ww.displayName = "Volume2";
//#endregion
//#region src/icons/volume-off.tsx
var Tw = /*#__PURE__*/ m("<svg><path d=\"M7 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.72a1 1 0 0 1 .52.14l4 2.4a.5.5 0 0 0 .76-.42V12\"></svg>", !1, !0, !1), Ew = /*#__PURE__*/ m("<svg><path d=\"m10 5.75.2-.15a.5.5 0 0 1 .8.4v1\"></svg>", !1, !0, !1), Dw = /*#__PURE__*/ m("<svg><path d=\"M16 9a5 5 0 0 1 1.08 3.5\"></svg>", !1, !0, !1), Ow = /*#__PURE__*/ m("<svg><path d=\"M19 5c1.92 1.92 4.47 6.37 2.2 11\"></svg>", !1, !0, !1), kw = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function Aw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Tw(),
			Ew(),
			Dw(),
			Ow(),
			kw()
		];
	} }));
}
Aw.displayName = "VolumeOff";
//#endregion
//#region src/icons/volume-x.tsx
var jw = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), Mw = /*#__PURE__*/ m("<svg><path d=\"m16 9 6 6\"></svg>", !1, !0, !1), Nw = /*#__PURE__*/ m("<svg><path d=\"m22 9-6 6\"></svg>", !1, !0, !1);
function Pw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			jw(),
			Mw(),
			Nw()
		];
	} }));
}
Pw.displayName = "VolumeX";
//#endregion
//#region src/icons/volume.tsx
var Fw = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1);
function Iw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Fw();
	} }));
}
Iw.displayName = "Volume";
//#endregion
//#region src/icons/wallet-cards.tsx
var Lw = /*#__PURE__*/ m("<svg><path d=\"M21 9H5a2 2 0 1 1 0-4h4\"></svg>", !1, !0, !1), Rw = /*#__PURE__*/ m("<svg><path d=\"M21 13V9\"></svg>", !1, !0, !1), zw = /*#__PURE__*/ m("<svg><path d=\"M21 16.63V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7\"></svg>", !1, !0, !1), Bw = /*#__PURE__*/ m("<svg><path d=\"M17 15c0-1.1.9-2 2-2h2.93q.06 0 .07.07v3.86q0 .06-.07.07H19a2 2 0 0 1-2-2\"></svg>", !1, !0, !1), Vw = /*#__PURE__*/ m("<svg><path d=\"m18.5 9.04.26-.26a2 2 0 0 0 0-2.83l-3.53-3.54a2 2 0 0 0-2.83 0L5.8 9\"></svg>", !1, !0, !1), Hw = /*#__PURE__*/ m("<svg><path d=\"m10.59 9.17 5.65-5.66\"></svg>", !1, !0, !1);
function Uw(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Lw(),
			Rw(),
			zw(),
			Bw(),
			Vw(),
			Hw()
		];
	} }));
}
Uw.displayName = "WalletCards";
//#endregion
//#region src/icons/wallet.tsx
var Ww = /*#__PURE__*/ m("<svg><path d=\"M21 7h-3m0 0H5a2 2 0 1 1 0-4h11a2 2 0 0 1 2 2z\"></svg>", !1, !0, !1), Gw = /*#__PURE__*/ m("<svg><path d=\"M21 12V7\"></svg>", !1, !0, !1), Kw = /*#__PURE__*/ m("<svg><path d=\"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5\"></svg>", !1, !0, !1), qw = /*#__PURE__*/ m("<svg><path d=\"M17 14c0-1.1.9-2 2-2h2.93q.06 0 .07.07v3.86q0 .06-.07.07H19a2 2 0 0 1-2-2\"></svg>", !1, !0, !1);
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
			Ww(),
			Gw(),
			Kw(),
			qw()
		];
	} }));
}
Jw.displayName = "Wallet";
//#endregion
//#region src/icons/wand-sparkles.tsx
var Yw = /*#__PURE__*/ m("<svg><rect width=4 height=25.5 x=19.53 y=1.5 rx=1 transform=\"rotate(45 19.53 1.5)\"></svg>", !1, !0, !1), Xw = /*#__PURE__*/ m("<svg><path d=\"m13 9 2 2\"></svg>", !1, !0, !1), Zw = /*#__PURE__*/ m("<svg><path d=\"M19 14v4\"></svg>", !1, !0, !1), Qw = /*#__PURE__*/ m("<svg><path d=\"M5 6v4\"></svg>", !1, !0, !1), $w = /*#__PURE__*/ m("<svg><path d=\"M17 16h4\"></svg>", !1, !0, !1), eT = /*#__PURE__*/ m("<svg><path d=\"M3 8h4\"></svg>", !1, !0, !1), tT = /*#__PURE__*/ m("<svg><path d=\"M11 2v2\"></svg>", !1, !0, !1), nT = /*#__PURE__*/ m("<svg><path d=\"M10 3h2\"></svg>", !1, !0, !1);
function rT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Yw(),
			Xw(),
			Zw(),
			Qw(),
			$w(),
			eT(),
			tT(),
			nT()
		];
	} }));
}
rT.displayName = "WandSparkles";
//#endregion
//#region src/icons/wand.tsx
var iT = /*#__PURE__*/ m("<svg><path d=\"m12 12-9 9\"></svg>", !1, !0, !1), aT = /*#__PURE__*/ m("<svg><path d=\"M10 9H8\"></svg>", !1, !0, !1), oT = /*#__PURE__*/ m("<svg><path d=\"m12 6-1-1\"></svg>", !1, !0, !1), sT = /*#__PURE__*/ m("<svg><path d=\"M15 4V2\"></svg>", !1, !0, !1), cT = /*#__PURE__*/ m("<svg><path d=\"M20 9h2\"></svg>", !1, !0, !1), lT = /*#__PURE__*/ m("<svg><path d=\"M15 14v2\"></svg>", !1, !0, !1), uT = /*#__PURE__*/ m("<svg><path d=\"m18 12 1 1\"></svg>", !1, !0, !1), dT = /*#__PURE__*/ m("<svg><path d=\"m18 6 1-1\"></svg>", !1, !0, !1), fT = /*#__PURE__*/ m("<svg><circle cx=15 cy=9 r=0.5></svg>", !1, !0, !1);
function pT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			iT(),
			aT(),
			oT(),
			sT(),
			cT(),
			lT(),
			uT(),
			dT(),
			fT()
		];
	} }));
}
pT.displayName = "Wand";
//#endregion
//#region src/icons/wrench.tsx
var mT = /*#__PURE__*/ m("<svg><path d=\"m10.5 10.5-5.72 5.72a1.98 1.98 0 0 0 2.75 2.85l5.97-5.57\"></svg>", !1, !0, !1), hT = /*#__PURE__*/ m("<svg><path d=\"m18 2.5-2.86 3.22a1.82 1.82 0 0 0 2.65 2.5L21 5\"></svg>", !1, !0, !1), gT = /*#__PURE__*/ m("<svg><path d=\"M18 2.5a4 4 0 0 0-2-.5 6 6 0 0 0-5.5 8.4\"></svg>", !1, !0, !1), _T = /*#__PURE__*/ m("<svg><path d=\"M21 5c.56.91 1 1.85 1 3a6 6 0 0 1-8.4 5.5\"></svg>", !1, !0, !1);
function vT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			mT(),
			hT(),
			gT(),
			_T()
		];
	} }));
}
vT.displayName = "Wrench";
//#endregion
//#region src/icons/x.tsx
var yT = /*#__PURE__*/ m("<svg><path d=\"m6 6 12 12\"></svg>", !1, !0, !1), bT = /*#__PURE__*/ m("<svg><path d=\"M18 6 6 18\"></svg>", !1, !0, !1);
function xT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [yT(), bT()];
	} }));
}
xT.displayName = "X";
//#endregion
//#region src/icons/zap-off.tsx
var ST = /*#__PURE__*/ m("<svg><path d=\"m18.48 12 1.8-2.1a.5.5 0 0 0-.37-.83h-4.66a.5.5 0 0 1-.5-.52l.2-6.2a.5.5 0 0 0-.86-.36L11.3 5\"></svg>", !1, !0, !1), CT = /*#__PURE__*/ m("<svg><path d=\"m8 8.55-4.23 4.63a.5.5 0 0 0 .37.84h5.1a.5.5 0 0 1 .5.54l-.6 6.9a.5.5 0 0 0 .87.37l5.45-6.33\"></svg>", !1, !0, !1), wT = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function TT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ST(),
			CT(),
			wT()
		];
	} }));
}
TT.displayName = "ZapOff";
//#endregion
//#region src/icons/zap.tsx
var ET = /*#__PURE__*/ m("<svg><path d=\"M14.09 1.99a.5.5 0 0 1 .86.36l-.2 6.2a.5.5 0 0 0 .5.52h4.66c.43 0 .66.5.38.83L10 21.83a.5.5 0 0 1-.88-.37l.6-6.9a.5.5 0 0 0-.5-.54H4.14a.5.5 0 0 1-.37-.84z\"></svg>", !1, !0, !1);
function DT(t) {
	return e(S, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return ET();
	} }));
}
DT.displayName = "Zap";
//#endregion
export { C as Activity, w as Alert, T as Angry, E as Annoyed, k as ArrowLeft, D as ArrowLeftFromLine, O as ArrowLeftToLine, A as ArrowRightFromLine, j as ArrowRightToLine, M as ArrowUpFromLine, N as ArrowUpLeft, P as ArrowUpRight, F as ArrowUpToLine, I as BarChart, L as BarcodeRead, R as Baseline, z as BellRing, B as Bitcoin, V as Bolt, H as Bookmark, U as BotSmile, W as Braces, G as BrainCircuit, J as Briefcase, K as BriefcaseConveyorBelt, q as BriefcaseMedical, Y as Brush, Yn as Calendar, X as CalendarCheck, Z as CalendarClock, Q as CalendarDays, Wn as CalendarX, $n as Chat, tr as Check, rr as ChevronDown, ar as ChevronUp, dr as ChevronsDown, cr as ChevronsDownUp, _r as ChevronsUp, mr as ChevronsUpDown, xr as CircleArrowLeft, Tr as CircleArrowOutUpLeft, kr as CircleArrowOutUpRight, Fr as CircleCheck, Mr as CircleCheckBig, Rr as CircleChevronDown, Vr as CircleChevronUp, Gr as CircleUser, Qr as Clapperboard, Di as Clipboard, ni as ClipboardCheck, di as ClipboardList, gi as ClipboardPlus, xi as ClipboardX, Mi as ClockArrowLeft, zi as Code, Ii as CodeXml, ra as Cog, oa as Coin, ha as ColumnChart, ua as ColumnChartPlainIncreasing, va as Columns2, Sa as Columns3, Ta as Compass, La as Copy, ka as CopyCheck, Pa as CopyX, qa as CreditCard, Va as CreditCardDisabled, Ga as CreditCardPlus, Xa as Crown, eo as Divide, io as DollarSign, co as Download, fo as DraftBook, ho as Equal, So as Equalizer, To as Eraser, ko as Euro, No as ExternalLink, Uo as Eye, zo as EyeClosed, Ko as FastForward, ls as File, Zo as FileDiff, ts as FileSymlink, os as FileVolume, _s as Film, Es as FingerPrint, Os as Folder, Ns as Frown, Ls as GalleryHorizontal, Vs as GalleryVertical, Ks as Gem, Xs as GenericLayout, nc as Gift, jc as Globe, sc as GlobeCheck, pc as GlobeLock, xc as GlobeOff, Dc as GlobeX, qc as Grid2x2, Lc as Grid2x2Plus, Uc as Grid2x2X, sl as Grid3x3, tl as Grid3x3Plus, ul as Hammer, pl as Handbag, vl as Hashtag, wl as HatGlasses, Pl as Heart, Dl as HeartCrack, jl as HeartOff, Ll as Home, au as Image, Hl as ImageMinus, Yl as ImageOff, tu as ImagePlus, uu as Images, fu as Infinity, gu as Info, Cu as Key, yu as KeyRound, Nu as Laugh, Ou as LaughWink, Ru as LayoutDashboard, Uu as LayoutGrid, Ju as LayoutKanban, td as LayoutList, ad as LayoutPanelLeft, ld as LayoutPanelRight, pd as LayoutPanelTop, _d as LayoutTemplate, Md as Link, Td as Link2, Sd as Link2Off, kd as LinkOff, mf as List, Rd as ListChevronsDownUp, Wd as ListChevronsUpDown, Jd as ListFilter, ef as ListOrdered, sf as ListTodo, If as Lock, vf as LockCheck, Sf as LockKeyhole, kf as LockOpen, Ef as LockOpenKeyhole, Nf as LockSquare, Bf as LogIn, Wf as LogOut, mp as Mail, Jf as MailCheck, Qf as MailMinus, tp as MailOpen, op as MailPlus, dp as MailX, Lp as Map, bp as MapPin, _p as MapPinCheck, Ap as MapPinned, Kp as Meh, Vp as MehBlank, im as Menu, Xp as MenuHorizontal, em as MenuVertical, hm as MessageSquare, cm as MessageSquarePlus, pm as MessageSquareText, Dm as Mic, xm as MicOff, wm as MicVintage, km as Minus, Pm as Moon, Mm as MoonStar, Lm as MousePointer, Hm as Navigation, zm as Navigation2, Gm as Notification, Jm as Nut, eh as PackageCheck, ah as PaintBucket, sh as Paperclip, vh as Pause, dh as PauseCircle, hh as PauseSquare, xh as PenLine, Eh as PenTool, kh as Pencil, Nh as Percent, ag as Phone, Lh as PhoneCall, Vh as PhoneForward, Gh as PhoneIncoming, Yh as PhoneOff, $h as PhoneOutgoing, rg as PhoneX, cg as PieChart, dg as Pin, hg as Pipette, bg as Play, vg as PlaySquare, Cg as Plus, Dg as PoundSterling, Ng as Radio, Ug as Receipt, Rg as ReceiptText, Kg as Redo2, Zg as RefreshCw, c_ as Repeat, r_ as Repeat1, d_ as Rewind, m_ as RotateCwSquare, __ as Rows2, x_ as Rows3, T_ as Save, N_ as ScanQr, z_ as Scissors, Z_ as Search, U_ as SearchMinus, J_ as SearchPlus, ev as Send, ov as Settings, rv as SettingsControl, Bv as Shield, uv as ShieldAlert, pv as ShieldCheck, vv as ShieldEllipsis, Sv as ShieldLock, Ev as ShieldOff, Av as ShieldQuestion, Pv as ShieldUser, Rv as ShieldX, Qv as ShoppingBag, Wv as ShoppingBagCheck, Yv as ShoppingBagPlus, uy as ShoppingCart, ay as ShoppingCartPlus, gy as Shuffle, xy as SimCard, wy as SkipBack, Dy as SkipForward, Py as SlidersHorizontal, Vy as SlidersVertical, ib as Smile, Jy as SmilePlus, $y as SmileWink, gb as Sparkles, db as SparklesText, xb as Split, wb as SquareActivity, Ob as SquareArrowOutUpLeft, Mb as SquareArrowOutUpRight, Ib as SquareArrowUpLeft, Bb as SquareArrowUpRight, Ub as SquareChevronDown, Kb as SquareChevronUp, Xb as SquareUser, Qb as Star, tx as StopCircle, Dx as Sun, dx as SunDim, _x as SunMoon, Mx as SwapHorizontal, Lx as SwapVertical, Hx as TableProperties, Kx as TagCheck, Xx as TagMinus, tS as TagPlus, oS as TagX, uS as Tags, mS as Target, _S as Terminal, yS as ThumbsDown, xS as ThumbsUp, ES as Ticket, MS as Trash, AS as Trash2, GS as Truck, zS as TruckElectric, JS as Undo2, $ as Unlink, iC as Upload, qC as User, cC as UserCheck, bC as UserCog, TC as UserLock, kC as UserMinus, PC as UserPlus, zC as UserSearch, WC as UserX, nw as Users, ZC as UsersShield, cw as Van, _w as Video, mw as VideoCamera, Iw as Volume, bw as Volume1, ww as Volume2, Aw as VolumeOff, Pw as VolumeX, Jw as Wallet, Uw as WalletCards, pT as Wand, rT as WandSparkles, vT as Wrench, xT as X, DT as Zap, TT as ZapOff };

//# sourceMappingURL=index.js.map