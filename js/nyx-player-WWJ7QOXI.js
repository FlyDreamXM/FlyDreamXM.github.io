import {
  init_define_shokax_CONFIG
} from "./chunk-4XZAHYLN.js";
import "./chunk-OTYXESVJ.js";

// node_modules/nyx-player/dist/nyx-player.js
init_define_shokax_CONFIG();
var e = function(exports) {
  "use strict";
  function t2(e2) {
    "@babel/helpers - typeof";
    return t2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == `function` && e3.constructor === Symbol && e3 !== Symbol.prototype ? `symbol` : typeof e3;
    }, t2(e2);
  }
  function n2(e2, n3) {
    if (t2(e2) != `object` || !e2) return e2;
    var r3 = e2[Symbol.toPrimitive];
    if (r3 !== void 0) {
      var i3 = r3.call(e2, n3 || `default`);
      if (t2(i3) != `object`) return i3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (n3 === `string` ? String : Number)(e2);
  }
  function r2(e2) {
    var r3 = n2(e2, `string`);
    return t2(r3) == `symbol` ? r3 : r3 + ``;
  }
  function i2(e2, t3, n3) {
    return (t3 = r2(t3)) in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
  }
  return exports.defineProperty = i2, exports;
}({});
function t(e2) {
  let t2 = /* @__PURE__ */ Object.create(null);
  for (let n2 of e2.split(`,`)) t2[n2] = 1;
  return (e3) => e3 in t2;
}
var n = {};
var r = [];
var i = () => {
};
var a = () => false;
var o = (e2) => e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && (e2.charCodeAt(2) > 122 || e2.charCodeAt(2) < 97);
var s = (e2) => e2.startsWith(`onUpdate:`);
var c = Object.assign;
var l = (e2, t2) => {
  let n2 = e2.indexOf(t2);
  n2 > -1 && e2.splice(n2, 1);
};
var u = Object.prototype.hasOwnProperty;
var d = (e2, t2) => u.call(e2, t2);
var f = Array.isArray;
var p = (e2) => x(e2) === `[object Map]`;
var m = (e2) => x(e2) === `[object Set]`;
var h = (e2) => typeof e2 == `function`;
var g = (e2) => typeof e2 == `string`;
var _ = (e2) => typeof e2 == `symbol`;
var v = (e2) => typeof e2 == `object` && !!e2;
var y = (e2) => (v(e2) || h(e2)) && h(e2.then) && h(e2.catch);
var b = Object.prototype.toString;
var x = (e2) => b.call(e2);
var S = (e2) => x(e2).slice(8, -1);
var C = (e2) => x(e2) === `[object Object]`;
var w = (e2) => g(e2) && e2 !== `NaN` && e2[0] !== `-` && `` + parseInt(e2, 10) === e2;
var T = t(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`);
var ee = (e2) => {
  let t2 = /* @__PURE__ */ Object.create(null);
  return (n2) => {
    let r2 = t2[n2];
    return r2 || (t2[n2] = e2(n2));
  };
};
var te = /-(\w)/g;
var E = ee((e2) => e2.replace(te, (e3, t2) => t2 ? t2.toUpperCase() : ``));
var ne = /\B([A-Z])/g;
var re = ee((e2) => e2.replace(ne, `-$1`).toLowerCase());
var ie = ee((e2) => e2.charAt(0).toUpperCase() + e2.slice(1));
var ae = ee((e2) => {
  let t2 = e2 ? `on${ie(e2)}` : ``;
  return t2;
});
var oe = (e2, t2) => !Object.is(e2, t2);
var se = (e2, ...t2) => {
  for (let n2 = 0; n2 < e2.length; n2++) e2[n2](...t2);
};
var ce = (e2, t2, n2, r2 = false) => {
  Object.defineProperty(e2, t2, { configurable: true, enumerable: false, writable: r2, value: n2 });
};
var D = (e2) => {
  let t2 = parseFloat(e2);
  return isNaN(t2) ? e2 : t2;
};
var le = (e2) => {
  let t2 = g(e2) ? Number(e2) : NaN;
  return isNaN(t2) ? e2 : t2;
};
var ue;
var de = () => ue ||= typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : {};
function fe(e2) {
  if (f(e2)) {
    let t2 = {};
    for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2[n2], i2 = g(r2) ? ge(r2) : fe(r2);
      if (i2) for (let e3 in i2) t2[e3] = i2[e3];
    }
    return t2;
  } else if (g(e2) || v(e2)) return e2;
}
var pe = /;(?![^(]*\))/g;
var me = /:([^]+)/;
var he = /\/\*[^]*?\*\//g;
function ge(e2) {
  let t2 = {};
  return e2.replace(he, ``).split(pe).forEach((e3) => {
    if (e3) {
      let n2 = e3.split(me);
      n2.length > 1 && (t2[n2[0].trim()] = n2[1].trim());
    }
  }), t2;
}
function O(e2) {
  let t2 = ``;
  if (g(e2)) t2 = e2;
  else if (f(e2)) for (let n2 = 0; n2 < e2.length; n2++) {
    let r2 = O(e2[n2]);
    r2 && (t2 += r2 + ` `);
  }
  else if (v(e2)) for (let n2 in e2) e2[n2] && (t2 += n2 + ` `);
  return t2.trim();
}
var _e = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var ve = t(_e);
var ye = t(_e + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function be(e2) {
  return !!e2 || e2 === ``;
}
var xe = (e2) => !!(e2 && e2.__v_isRef === true);
var Se = (e2) => g(e2) ? e2 : e2 == null ? `` : f(e2) || v(e2) && (e2.toString === b || !h(e2.toString)) ? xe(e2) ? Se(e2.value) : JSON.stringify(e2, Ce, 2) : String(e2);
var Ce = (e2, t2) => xe(t2) ? Ce(e2, t2.value) : p(t2) ? { [`Map(${t2.size})`]: [...t2.entries()].reduce((e3, [t3, n2], r2) => (e3[we(t3, r2) + ` =>`] = n2, e3), {}) } : m(t2) ? { [`Set(${t2.size})`]: [...t2.values()].map((e3) => we(e3)) } : _(t2) ? we(t2) : v(t2) && !f(t2) && !C(t2) ? String(t2) : t2;
var we = (e2, t2 = ``) => {
  var n2;
  return _(e2) ? `Symbol(${(n2 = e2.description) ?? t2})` : e2;
};
function Te(e2, ...t2) {
  console.warn(`[Vue warn] ${e2}`, ...t2);
}
var k;
var Ee = class {
  constructor(e2 = false) {
    this.detached = e2, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = k, !e2 && k && (this.index = (k.scopes ||= []).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let e2, t2;
      if (this.scopes) for (e2 = 0, t2 = this.scopes.length; e2 < t2; e2++) this.scopes[e2].pause();
      for (e2 = 0, t2 = this.effects.length; e2 < t2; e2++) this.effects[e2].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let e2, t2;
      if (this.scopes) for (e2 = 0, t2 = this.scopes.length; e2 < t2; e2++) this.scopes[e2].resume();
      for (e2 = 0, t2 = this.effects.length; e2 < t2; e2++) this.effects[e2].resume();
    }
  }
  run(e2) {
    if (this._active) {
      let t2 = k;
      try {
        return k = this, e2();
      } finally {
        k = t2;
      }
    }
  }
  on() {
    k = this;
  }
  off() {
    k = this.parent;
  }
  stop(e2) {
    if (this._active) {
      this._active = false;
      let t2, n2;
      for (t2 = 0, n2 = this.effects.length; t2 < n2; t2++) this.effects[t2].stop();
      for (this.effects.length = 0, t2 = 0, n2 = this.cleanups.length; t2 < n2; t2++) this.cleanups[t2]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t2 = 0, n2 = this.scopes.length; t2 < n2; t2++) this.scopes[t2].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e2) {
        let e3 = this.parent.scopes.pop();
        e3 && e3 !== this && (this.parent.scopes[this.index] = e3, e3.index = this.index);
      }
      this.parent = void 0;
    }
  }
};
function De(e2) {
  return new Ee(e2);
}
function Oe() {
  return k;
}
function ke(e2, t2 = false) {
  k && k.cleanups.push(e2);
}
var A;
var Ae = /* @__PURE__ */ new WeakSet();
var je = class {
  constructor(e2) {
    this.fn = e2, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && k.active && k.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Je(this), Re(this);
    let e2 = A, t2 = We;
    A = this, We = true;
    try {
      return this.fn();
    } finally {
      ze(this), A = e2, We = t2, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e2 = this.deps; e2; e2 = e2.nextDep) He(e2);
      this.deps = this.depsTail = void 0, Je(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Be(this) && this.run();
  }
  get dirty() {
    return Be(this);
  }
};
var Me = 0;
var Ne;
var Pe;
function Fe(e2, t2 = false) {
  if (e2.flags |= 8, t2) {
    e2.next = Pe, Pe = e2;
    return;
  }
  e2.next = Ne, Ne = e2;
}
function Ie() {
  Me++;
}
function Le() {
  if (--Me > 0) return;
  if (Pe) {
    let e3 = Pe;
    for (Pe = void 0; e3; ) {
      let t2 = e3.next;
      e3.next = void 0, e3.flags &= -9, e3 = t2;
    }
  }
  let e2;
  for (; Ne; ) {
    let t2 = Ne;
    for (Ne = void 0; t2; ) {
      let n2 = t2.next;
      if (t2.next = void 0, t2.flags &= -9, t2.flags & 1) try {
        t2.trigger();
      } catch (t3) {
        e2 ||= t3;
      }
      t2 = n2;
    }
  }
  if (e2) throw e2;
}
function Re(e2) {
  for (let t2 = e2.deps; t2; t2 = t2.nextDep) t2.version = -1, t2.prevActiveLink = t2.dep.activeLink, t2.dep.activeLink = t2;
}
function ze(e2) {
  let t2, n2 = e2.depsTail, r2 = n2;
  for (; r2; ) {
    let e3 = r2.prevDep;
    r2.version === -1 ? (r2 === n2 && (n2 = e3), He(r2), Ue(r2)) : t2 = r2, r2.dep.activeLink = r2.prevActiveLink, r2.prevActiveLink = void 0, r2 = e3;
  }
  e2.deps = t2, e2.depsTail = n2;
}
function Be(e2) {
  for (let t2 = e2.deps; t2; t2 = t2.nextDep) if (t2.dep.version !== t2.version || t2.dep.computed && (Ve(t2.dep.computed) || t2.dep.version !== t2.version)) return true;
  return !!e2._dirty;
}
function Ve(e2) {
  if (e2.flags & 4 && !(e2.flags & 16) || (e2.flags &= -17, e2.globalVersion === Ye)) return;
  e2.globalVersion = Ye;
  let t2 = e2.dep;
  if (e2.flags |= 2, t2.version > 0 && !e2.isSSR && e2.deps && !Be(e2)) {
    e2.flags &= -3;
    return;
  }
  let n2 = A, r2 = We;
  A = e2, We = true;
  try {
    Re(e2);
    let n3 = e2.fn(e2._value);
    (t2.version === 0 || oe(n3, e2._value)) && (e2._value = n3, t2.version++);
  } catch (e3) {
    throw t2.version++, e3;
  } finally {
    A = n2, We = r2, ze(e2), e2.flags &= -3;
  }
}
function He(e2, t2 = false) {
  let { dep: n2, prevSub: r2, nextSub: i2 } = e2;
  if (r2 && (r2.nextSub = i2, e2.prevSub = void 0), i2 && (i2.prevSub = r2, e2.nextSub = void 0), n2.subs === e2 && (n2.subs = r2, !r2 && n2.computed)) {
    n2.computed.flags &= -5;
    for (let e3 = n2.computed.deps; e3; e3 = e3.nextDep) He(e3, true);
  }
  !t2 && !--n2.sc && n2.map && n2.map.delete(n2.key);
}
function Ue(e2) {
  let { prevDep: t2, nextDep: n2 } = e2;
  t2 && (t2.nextDep = n2, e2.prevDep = void 0), n2 && (n2.prevDep = t2, e2.nextDep = void 0);
}
var We = true;
var Ge = [];
function Ke() {
  Ge.push(We), We = false;
}
function qe() {
  let e2 = Ge.pop();
  We = e2 === void 0 ? true : e2;
}
function Je(e2) {
  let { cleanup: t2 } = e2;
  if (e2.cleanup = void 0, t2) {
    let e3 = A;
    A = void 0;
    try {
      t2();
    } finally {
      A = e3;
    }
  }
}
var Ye = 0;
var Xe = class {
  constructor(e2, t2) {
    this.sub = e2, this.dep = t2, this.version = t2.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var Ze = class {
  constructor(e2) {
    this.computed = e2, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e2) {
    if (!A || !We || A === this.computed) return;
    let t2 = this.activeLink;
    if (t2 === void 0 || t2.sub !== A) t2 = this.activeLink = new Xe(A, this), A.deps ? (t2.prevDep = A.depsTail, A.depsTail.nextDep = t2, A.depsTail = t2) : A.deps = A.depsTail = t2, Qe(t2);
    else if (t2.version === -1 && (t2.version = this.version, t2.nextDep)) {
      let e3 = t2.nextDep;
      e3.prevDep = t2.prevDep, t2.prevDep && (t2.prevDep.nextDep = e3), t2.prevDep = A.depsTail, t2.nextDep = void 0, A.depsTail.nextDep = t2, A.depsTail = t2, A.deps === t2 && (A.deps = e3);
    }
    return t2;
  }
  trigger(e2) {
    this.version++, Ye++, this.notify(e2);
  }
  notify(e2) {
    Ie();
    try {
      for (let e3 = this.subs; e3; e3 = e3.prevSub) e3.sub.notify() && e3.sub.dep.notify();
    } finally {
      Le();
    }
  }
};
function Qe(e2) {
  if (e2.dep.sc++, e2.sub.flags & 4) {
    let t2 = e2.dep.computed;
    if (t2 && !e2.dep.subs) {
      t2.flags |= 20;
      for (let e3 = t2.deps; e3; e3 = e3.nextDep) Qe(e3);
    }
    let n2 = e2.dep.subs;
    n2 !== e2 && (e2.prevSub = n2, n2 && (n2.nextSub = e2)), e2.dep.subs = e2;
  }
}
var $e = /* @__PURE__ */ new WeakMap();
var et = Symbol(``);
var tt = Symbol(``);
var nt = Symbol(``);
function j(e2, t2, n2) {
  if (We && A) {
    let t3 = $e.get(e2);
    t3 || $e.set(e2, t3 = /* @__PURE__ */ new Map());
    let r2 = t3.get(n2);
    r2 || (t3.set(n2, r2 = new Ze()), r2.map = t3, r2.key = n2), r2.track();
  }
}
function rt(e2, t2, n2, r2, i2, a2) {
  let o2 = $e.get(e2);
  if (!o2) {
    Ye++;
    return;
  }
  let s2 = (e3) => {
    e3 && e3.trigger();
  };
  if (Ie(), t2 === `clear`) o2.forEach(s2);
  else {
    let i3 = f(e2), a3 = i3 && w(n2);
    if (i3 && n2 === `length`) {
      let e3 = Number(r2);
      o2.forEach((t3, n3) => {
        (n3 === `length` || n3 === nt || !_(n3) && n3 >= e3) && s2(t3);
      });
    } else switch ((n2 !== void 0 || o2.has(void 0)) && s2(o2.get(n2)), a3 && s2(o2.get(nt)), t2) {
      case `add`:
        i3 ? a3 && s2(o2.get(`length`)) : (s2(o2.get(et)), p(e2) && s2(o2.get(tt)));
        break;
      case `delete`:
        i3 || (s2(o2.get(et)), p(e2) && s2(o2.get(tt)));
        break;
      case `set`:
        p(e2) && s2(o2.get(et));
        break;
    }
  }
  Le();
}
function it(e2, t2) {
  let n2 = $e.get(e2);
  return n2 && n2.get(t2);
}
function at(e2) {
  let t2 = N(e2);
  return t2 === e2 ? t2 : (j(t2, `iterate`, nt), M(e2) ? t2 : t2.map(P));
}
function ot(e2) {
  return j(e2 = N(e2), `iterate`, nt), e2;
}
var st = { __proto__: null, [Symbol.iterator]() {
  return ct(this, Symbol.iterator, P);
}, concat(...e2) {
  return at(this).concat(...e2.map((e3) => f(e3) ? at(e3) : e3));
}, entries() {
  return ct(this, `entries`, (e2) => (e2[1] = P(e2[1]), e2));
}, every(e2, t2) {
  return ut(this, `every`, e2, t2, void 0, arguments);
}, filter(e2, t2) {
  return ut(this, `filter`, e2, t2, (e3) => e3.map(P), arguments);
}, find(e2, t2) {
  return ut(this, `find`, e2, t2, P, arguments);
}, findIndex(e2, t2) {
  return ut(this, `findIndex`, e2, t2, void 0, arguments);
}, findLast(e2, t2) {
  return ut(this, `findLast`, e2, t2, P, arguments);
}, findLastIndex(e2, t2) {
  return ut(this, `findLastIndex`, e2, t2, void 0, arguments);
}, forEach(e2, t2) {
  return ut(this, `forEach`, e2, t2, void 0, arguments);
}, includes(...e2) {
  return ft(this, `includes`, e2);
}, indexOf(...e2) {
  return ft(this, `indexOf`, e2);
}, join(e2) {
  return at(this).join(e2);
}, lastIndexOf(...e2) {
  return ft(this, `lastIndexOf`, e2);
}, map(e2, t2) {
  return ut(this, `map`, e2, t2, void 0, arguments);
}, pop() {
  return pt(this, `pop`);
}, push(...e2) {
  return pt(this, `push`, e2);
}, reduce(e2, ...t2) {
  return dt(this, `reduce`, e2, t2);
}, reduceRight(e2, ...t2) {
  return dt(this, `reduceRight`, e2, t2);
}, shift() {
  return pt(this, `shift`);
}, some(e2, t2) {
  return ut(this, `some`, e2, t2, void 0, arguments);
}, splice(...e2) {
  return pt(this, `splice`, e2);
}, toReversed() {
  return at(this).toReversed();
}, toSorted(e2) {
  return at(this).toSorted(e2);
}, toSpliced(...e2) {
  return at(this).toSpliced(...e2);
}, unshift(...e2) {
  return pt(this, `unshift`, e2);
}, values() {
  return ct(this, `values`, P);
} };
function ct(e2, t2, n2) {
  let r2 = ot(e2), i2 = r2[t2]();
  return r2 !== e2 && !M(e2) && (i2._next = i2.next, i2.next = () => {
    let e3 = i2._next();
    return e3.value &&= n2(e3.value), e3;
  }), i2;
}
var lt = Array.prototype;
function ut(e2, t2, n2, r2, i2, a2) {
  let o2 = ot(e2), s2 = o2 !== e2 && !M(e2), c2 = o2[t2];
  if (c2 !== lt[t2]) {
    let t3 = c2.apply(e2, a2);
    return s2 ? P(t3) : t3;
  }
  let l2 = n2;
  o2 !== e2 && (s2 ? l2 = function(t3, r3) {
    return n2.call(this, P(t3), r3, e2);
  } : n2.length > 2 && (l2 = function(t3, r3) {
    return n2.call(this, t3, r3, e2);
  }));
  let u2 = c2.call(o2, l2, r2);
  return s2 && i2 ? i2(u2) : u2;
}
function dt(e2, t2, n2, r2) {
  let i2 = ot(e2), a2 = n2;
  return i2 !== e2 && (M(e2) ? n2.length > 3 && (a2 = function(t3, r3, i3) {
    return n2.call(this, t3, r3, i3, e2);
  }) : a2 = function(t3, r3, i3) {
    return n2.call(this, t3, P(r3), i3, e2);
  }), i2[t2](a2, ...r2);
}
function ft(e2, t2, n2) {
  let r2 = N(e2);
  j(r2, `iterate`, nt);
  let i2 = r2[t2](...n2);
  return (i2 === -1 || i2 === false) && Wt(n2[0]) ? (n2[0] = N(n2[0]), r2[t2](...n2)) : i2;
}
function pt(e2, t2, n2 = []) {
  Ke(), Ie();
  let r2 = N(e2)[t2].apply(e2, n2);
  return Le(), qe(), r2;
}
var mt = t(`__proto__,__v_isRef,__isVue`);
var ht = new Set(Object.getOwnPropertyNames(Symbol).filter((e2) => e2 !== `arguments` && e2 !== `caller`).map((e2) => Symbol[e2]).filter(_));
function gt(e2) {
  _(e2) || (e2 = String(e2));
  let t2 = N(this);
  return j(t2, `has`, e2), t2.hasOwnProperty(e2);
}
var _t = class {
  constructor(e2 = false, t2 = false) {
    this._isReadonly = e2, this._isShallow = t2;
  }
  get(e2, t2, n2) {
    if (t2 === `__v_skip`) return e2.__v_skip;
    let r2 = this._isReadonly, i2 = this._isShallow;
    if (t2 === `__v_isReactive`) return !r2;
    if (t2 === `__v_isReadonly`) return r2;
    if (t2 === `__v_isShallow`) return i2;
    if (t2 === `__v_raw`) return n2 === (r2 ? i2 ? Ft : Pt : i2 ? Nt : Mt).get(e2) || Object.getPrototypeOf(e2) === Object.getPrototypeOf(n2) ? e2 : void 0;
    let a2 = f(e2);
    if (!r2) {
      let e3;
      if (a2 && (e3 = st[t2])) return e3;
      if (t2 === `hasOwnProperty`) return gt;
    }
    let o2 = Reflect.get(e2, t2, F(e2) ? e2 : n2);
    return (_(t2) ? ht.has(t2) : mt(t2)) || (r2 || j(e2, `get`, t2), i2) ? o2 : F(o2) ? a2 && w(t2) ? o2 : o2.value : v(o2) ? r2 ? Bt(o2) : Rt(o2) : o2;
  }
};
var vt = class extends _t {
  constructor(e2 = false) {
    super(false, e2);
  }
  set(e2, t2, n2, r2) {
    let i2 = e2[t2];
    if (!this._isShallow) {
      let t3 = Ut(i2);
      if (!M(n2) && !Ut(n2) && (i2 = N(i2), n2 = N(n2)), !f(e2) && F(i2) && !F(n2)) return t3 ? false : (i2.value = n2, true);
    }
    let a2 = f(e2) && w(t2) ? Number(t2) < e2.length : d(e2, t2), o2 = Reflect.set(e2, t2, n2, F(e2) ? e2 : r2);
    return e2 === N(r2) && (a2 ? oe(n2, i2) && rt(e2, `set`, t2, n2, i2) : rt(e2, `add`, t2, n2)), o2;
  }
  deleteProperty(e2, t2) {
    let n2 = d(e2, t2), r2 = e2[t2], i2 = Reflect.deleteProperty(e2, t2);
    return i2 && n2 && rt(e2, `delete`, t2, void 0, r2), i2;
  }
  has(e2, t2) {
    let n2 = Reflect.has(e2, t2);
    return (!_(t2) || !ht.has(t2)) && j(e2, `has`, t2), n2;
  }
  ownKeys(e2) {
    return j(e2, `iterate`, f(e2) ? `length` : et), Reflect.ownKeys(e2);
  }
};
var yt = class extends _t {
  constructor(e2 = false) {
    super(true, e2);
  }
  set(e2, t2) {
    return true;
  }
  deleteProperty(e2, t2) {
    return true;
  }
};
var bt = new vt();
var xt = new yt();
var St = new vt(true);
var Ct = (e2) => e2;
var wt = (e2) => Reflect.getPrototypeOf(e2);
function Tt(e2, t2, n2) {
  return function(...r2) {
    let i2 = this.__v_raw, a2 = N(i2), o2 = p(a2), s2 = e2 === `entries` || e2 === Symbol.iterator && o2, c2 = e2 === `keys` && o2, l2 = i2[e2](...r2), u2 = n2 ? Ct : t2 ? Kt : P;
    return !t2 && j(a2, `iterate`, c2 ? tt : et), { next() {
      let { value: e3, done: t3 } = l2.next();
      return t3 ? { value: e3, done: t3 } : { value: s2 ? [u2(e3[0]), u2(e3[1])] : u2(e3), done: t3 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Et(e2) {
  return function(...t2) {
    return e2 === `delete` ? false : e2 === `clear` ? void 0 : this;
  };
}
function Dt(e2, t2) {
  let n2 = { get(n3) {
    let r3 = this.__v_raw, i2 = N(r3), a2 = N(n3);
    e2 || (oe(n3, a2) && j(i2, `get`, n3), j(i2, `get`, a2));
    let { has: o2 } = wt(i2), s2 = t2 ? Ct : e2 ? Kt : P;
    if (o2.call(i2, n3)) return s2(r3.get(n3));
    if (o2.call(i2, a2)) return s2(r3.get(a2));
    r3 !== i2 && r3.get(n3);
  }, get size() {
    let t3 = this.__v_raw;
    return !e2 && j(N(t3), `iterate`, et), Reflect.get(t3, `size`, t3);
  }, has(t3) {
    let n3 = this.__v_raw, r3 = N(n3), i2 = N(t3);
    return e2 || (oe(t3, i2) && j(r3, `has`, t3), j(r3, `has`, i2)), t3 === i2 ? n3.has(t3) : n3.has(t3) || n3.has(i2);
  }, forEach(n3, r3) {
    let i2 = this, a2 = i2.__v_raw, o2 = N(a2), s2 = t2 ? Ct : e2 ? Kt : P;
    return !e2 && j(o2, `iterate`, et), a2.forEach((e3, t3) => n3.call(r3, s2(e3), s2(t3), i2));
  } };
  c(n2, e2 ? { add: Et(`add`), set: Et(`set`), delete: Et(`delete`), clear: Et(`clear`) } : { add(e3) {
    !t2 && !M(e3) && !Ut(e3) && (e3 = N(e3));
    let n3 = N(this), r3 = wt(n3), i2 = r3.has.call(n3, e3);
    return i2 || (n3.add(e3), rt(n3, `add`, e3, e3)), this;
  }, set(e3, n3) {
    !t2 && !M(n3) && !Ut(n3) && (n3 = N(n3));
    let r3 = N(this), { has: i2, get: a2 } = wt(r3), o2 = i2.call(r3, e3);
    o2 || (e3 = N(e3), o2 = i2.call(r3, e3));
    let s2 = a2.call(r3, e3);
    return r3.set(e3, n3), o2 ? oe(n3, s2) && rt(r3, `set`, e3, n3, s2) : rt(r3, `add`, e3, n3), this;
  }, delete(e3) {
    let t3 = N(this), { has: n3, get: r3 } = wt(t3), i2 = n3.call(t3, e3);
    i2 || (e3 = N(e3), i2 = n3.call(t3, e3));
    let a2 = r3 ? r3.call(t3, e3) : void 0, o2 = t3.delete(e3);
    return i2 && rt(t3, `delete`, e3, void 0, a2), o2;
  }, clear() {
    let e3 = N(this), t3 = e3.size !== 0, n3, r3 = e3.clear();
    return t3 && rt(e3, `clear`, void 0, void 0, n3), r3;
  } });
  let r2 = [`keys`, `values`, `entries`, Symbol.iterator];
  return r2.forEach((r3) => {
    n2[r3] = Tt(r3, e2, t2);
  }), n2;
}
function Ot(e2, t2) {
  let n2 = Dt(e2, t2);
  return (t3, r2, i2) => r2 === `__v_isReactive` ? !e2 : r2 === `__v_isReadonly` ? e2 : r2 === `__v_raw` ? t3 : Reflect.get(d(n2, r2) && r2 in t3 ? n2 : t3, r2, i2);
}
var kt = { get: Ot(false, false) };
var At = { get: Ot(false, true) };
var jt = { get: Ot(true, false) };
var Mt = /* @__PURE__ */ new WeakMap();
var Nt = /* @__PURE__ */ new WeakMap();
var Pt = /* @__PURE__ */ new WeakMap();
var Ft = /* @__PURE__ */ new WeakMap();
function It(e2) {
  switch (e2) {
    case `Object`:
    case `Array`:
      return 1;
    case `Map`:
    case `Set`:
    case `WeakMap`:
    case `WeakSet`:
      return 2;
    default:
      return 0;
  }
}
function Lt(e2) {
  return e2.__v_skip || !Object.isExtensible(e2) ? 0 : It(S(e2));
}
function Rt(e2) {
  return Ut(e2) ? e2 : Vt(e2, false, bt, kt, Mt);
}
function zt(e2) {
  return Vt(e2, false, St, At, Nt);
}
function Bt(e2) {
  return Vt(e2, true, xt, jt, Pt);
}
function Vt(e2, t2, n2, r2, i2) {
  if (!v(e2) || e2.__v_raw && !(t2 && e2.__v_isReactive)) return e2;
  let a2 = i2.get(e2);
  if (a2) return a2;
  let o2 = Lt(e2);
  if (o2 === 0) return e2;
  let s2 = new Proxy(e2, o2 === 2 ? r2 : n2);
  return i2.set(e2, s2), s2;
}
function Ht(e2) {
  return Ut(e2) ? Ht(e2.__v_raw) : !!(e2 && e2.__v_isReactive);
}
function Ut(e2) {
  return !!(e2 && e2.__v_isReadonly);
}
function M(e2) {
  return !!(e2 && e2.__v_isShallow);
}
function Wt(e2) {
  return e2 ? !!e2.__v_raw : false;
}
function N(e2) {
  let t2 = e2 && e2.__v_raw;
  return t2 ? N(t2) : e2;
}
function Gt(e2) {
  return !d(e2, `__v_skip`) && Object.isExtensible(e2) && ce(e2, `__v_skip`, true), e2;
}
var P = (e2) => v(e2) ? Rt(e2) : e2;
var Kt = (e2) => v(e2) ? Bt(e2) : e2;
function F(e2) {
  return e2 ? e2.__v_isRef === true : false;
}
function I(e2) {
  return Jt(e2, false);
}
function qt(e2) {
  return Jt(e2, true);
}
function Jt(e2, t2) {
  return F(e2) ? e2 : new Yt(e2, t2);
}
var Yt = class {
  constructor(e2, t2) {
    this.dep = new Ze(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t2 ? e2 : N(e2), this._value = t2 ? e2 : P(e2), this.__v_isShallow = t2;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e2) {
    let t2 = this._rawValue, n2 = this.__v_isShallow || M(e2) || Ut(e2);
    e2 = n2 ? e2 : N(e2), oe(e2, t2) && (this._rawValue = e2, this._value = n2 ? e2 : P(e2), this.dep.trigger());
  }
};
function L(e2) {
  return F(e2) ? e2.value : e2;
}
function Xt(e2) {
  return h(e2) ? e2() : L(e2);
}
var Zt = { get: (e2, t2, n2) => t2 === `__v_raw` ? e2 : L(Reflect.get(e2, t2, n2)), set: (e2, t2, n2, r2) => {
  let i2 = e2[t2];
  return F(i2) && !F(n2) ? (i2.value = n2, true) : Reflect.set(e2, t2, n2, r2);
} };
function Qt(e2) {
  return Ht(e2) ? e2 : new Proxy(e2, Zt);
}
function $t(e2) {
  let t2 = f(e2) ? Array(e2.length) : {};
  for (let n2 in e2) t2[n2] = tn(e2, n2);
  return t2;
}
var en = class {
  constructor(e2, t2, n2) {
    this._object = e2, this._key = t2, this._defaultValue = n2, this.__v_isRef = true, this._value = void 0;
  }
  get value() {
    let e2 = this._object[this._key];
    return this._value = e2 === void 0 ? this._defaultValue : e2;
  }
  set value(e2) {
    this._object[this._key] = e2;
  }
  get dep() {
    return it(N(this._object), this._key);
  }
};
function tn(e2, t2, n2) {
  let r2 = e2[t2];
  return F(r2) ? r2 : new en(e2, t2, n2);
}
var nn = class {
  constructor(e2, t2, n2) {
    this.fn = e2, this.setter = t2, this._value = void 0, this.dep = new Ze(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t2, this.isSSR = n2;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && A !== this) return Fe(this, true), true;
  }
  get value() {
    let e2 = this.dep.track();
    return Ve(this), e2 && (e2.version = this.dep.version), this._value;
  }
  set value(e2) {
    this.setter && this.setter(e2);
  }
};
function rn(e2, t2, n2 = false) {
  let r2, i2;
  h(e2) ? r2 = e2 : (r2 = e2.get, i2 = e2.set);
  let a2 = new nn(r2, i2, n2);
  return a2;
}
var an = {};
var on = /* @__PURE__ */ new WeakMap();
var sn;
function cn(e2, t2 = false, n2 = sn) {
  if (n2) {
    let t3 = on.get(n2);
    t3 || on.set(n2, t3 = []), t3.push(e2);
  }
}
function ln(e2, t2, r2 = n) {
  let { immediate: a2, deep: o2, once: s2, scheduler: c2, augmentJob: u2, call: d2 } = r2, p2 = (e3) => {
    (r2.onWarn || Te)(`Invalid watch source: `, e3, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  }, m2 = (e3) => o2 ? e3 : M(e3) || o2 === false || o2 === 0 ? un(e3, 1) : un(e3), g2, _2, v2, y2, b2 = false, x2 = false;
  if (F(e2) ? (_2 = () => e2.value, b2 = M(e2)) : Ht(e2) ? (_2 = () => m2(e2), b2 = true) : f(e2) ? (x2 = true, b2 = e2.some((e3) => Ht(e3) || M(e3)), _2 = () => e2.map((e3) => {
    if (F(e3)) return e3.value;
    if (Ht(e3)) return m2(e3);
    if (h(e3)) return d2 ? d2(e3, 2) : e3();
  })) : _2 = h(e2) ? t2 ? d2 ? () => d2(e2, 2) : e2 : () => {
    if (v2) {
      Ke();
      try {
        v2();
      } finally {
        qe();
      }
    }
    let t3 = sn;
    sn = g2;
    try {
      return d2 ? d2(e2, 3, [y2]) : e2(y2);
    } finally {
      sn = t3;
    }
  } : i, t2 && o2) {
    let e3 = _2, t3 = o2 === true ? 1 / 0 : o2;
    _2 = () => un(e3(), t3);
  }
  let S2 = Oe(), C2 = () => {
    g2.stop(), S2 && S2.active && l(S2.effects, g2);
  };
  if (s2 && t2) {
    let e3 = t2;
    t2 = (...t3) => {
      e3(...t3), C2();
    };
  }
  let w2 = x2 ? Array(e2.length).fill(an) : an, T2 = (e3) => {
    if (!(!(g2.flags & 1) || !g2.dirty && !e3)) if (t2) {
      let e4 = g2.run();
      if (o2 || b2 || (x2 ? e4.some((e5, t3) => oe(e5, w2[t3])) : oe(e4, w2))) {
        v2 && v2();
        let n2 = sn;
        sn = g2;
        try {
          let n3 = [e4, w2 === an ? void 0 : x2 && w2[0] === an ? [] : w2, y2];
          d2 ? d2(t2, 3, n3) : t2(...n3), w2 = e4;
        } finally {
          sn = n2;
        }
      }
    } else g2.run();
  };
  return u2 && u2(T2), g2 = new je(_2), g2.scheduler = c2 ? () => c2(T2, false) : T2, y2 = (e3) => cn(e3, false, g2), v2 = g2.onStop = () => {
    let e3 = on.get(g2);
    if (e3) {
      if (d2) d2(e3, 4);
      else for (let t3 of e3) t3();
      on.delete(g2);
    }
  }, t2 ? a2 ? T2(true) : w2 = g2.run() : c2 ? c2(T2.bind(null, true), true) : g2.run(), C2.pause = g2.pause.bind(g2), C2.resume = g2.resume.bind(g2), C2.stop = C2, C2;
}
function un(e2, t2 = 1 / 0, n2) {
  if (t2 <= 0 || !v(e2) || e2.__v_skip || (n2 ||= /* @__PURE__ */ new Set(), n2.has(e2))) return e2;
  if (n2.add(e2), t2--, F(e2)) un(e2.value, t2, n2);
  else if (f(e2)) for (let r2 = 0; r2 < e2.length; r2++) un(e2[r2], t2, n2);
  else if (m(e2) || p(e2)) e2.forEach((e3) => {
    un(e3, t2, n2);
  });
  else if (C(e2)) {
    for (let r2 in e2) un(e2[r2], t2, n2);
    for (let r2 of Object.getOwnPropertySymbols(e2)) Object.prototype.propertyIsEnumerable.call(e2, r2) && un(e2[r2], t2, n2);
  }
  return e2;
}
function dn(e2, t2, n2, r2) {
  try {
    return r2 ? e2(...r2) : e2();
  } catch (e3) {
    pn(e3, t2, n2);
  }
}
function fn(e2, t2, n2, r2) {
  if (h(e2)) {
    let i2 = dn(e2, t2, n2, r2);
    return i2 && y(i2) && i2.catch((e3) => {
      pn(e3, t2, n2);
    }), i2;
  }
  if (f(e2)) {
    let i2 = [];
    for (let a2 = 0; a2 < e2.length; a2++) i2.push(fn(e2[a2], t2, n2, r2));
    return i2;
  }
}
function pn(e2, t2, r2, i2 = true) {
  let a2 = t2 ? t2.vnode : null, { errorHandler: o2, throwUnhandledErrorInProduction: s2 } = t2 && t2.appContext.config || n;
  if (t2) {
    let n2 = t2.parent, i3 = t2.proxy, a3 = `https://vuejs.org/error-reference/#runtime-${r2}`;
    for (; n2; ) {
      let t3 = n2.ec;
      if (t3) {
        for (let n3 = 0; n3 < t3.length; n3++) if (t3[n3](e2, i3, a3) === false) return;
      }
      n2 = n2.parent;
    }
    if (o2) {
      Ke(), dn(o2, null, 10, [e2, i3, a3]), qe();
      return;
    }
  }
  mn(e2, r2, a2, i2, s2);
}
function mn(e2, t2, n2, r2 = true, i2 = false) {
  if (i2) throw e2;
  console.error(e2);
}
var R = [];
var hn = -1;
var gn = [];
var _n = null;
var vn = 0;
var yn = Promise.resolve();
var bn = null;
function xn(e2) {
  let t2 = bn || yn;
  return e2 ? t2.then(this ? e2.bind(this) : e2) : t2;
}
function Sn(e2) {
  let t2 = hn + 1, n2 = R.length;
  for (; t2 < n2; ) {
    let r2 = t2 + n2 >>> 1, i2 = R[r2], a2 = On(i2);
    a2 < e2 || a2 === e2 && i2.flags & 2 ? t2 = r2 + 1 : n2 = r2;
  }
  return t2;
}
function Cn(e2) {
  if (!(e2.flags & 1)) {
    let t2 = On(e2), n2 = R[R.length - 1];
    !n2 || !(e2.flags & 2) && t2 >= On(n2) ? R.push(e2) : R.splice(Sn(t2), 0, e2), e2.flags |= 1, wn();
  }
}
function wn() {
  bn ||= yn.then(kn);
}
function Tn(e2) {
  f(e2) ? gn.push(...e2) : _n && e2.id === -1 ? _n.splice(vn + 1, 0, e2) : e2.flags & 1 || (gn.push(e2), e2.flags |= 1), wn();
}
function En(e2, t2, n2 = hn + 1) {
  for (; n2 < R.length; n2++) {
    let t3 = R[n2];
    if (t3 && t3.flags & 2) {
      if (e2 && t3.id !== e2.uid) continue;
      R.splice(n2, 1), n2--, t3.flags & 4 && (t3.flags &= -2), t3(), t3.flags & 4 || (t3.flags &= -2);
    }
  }
}
function Dn(e2) {
  if (gn.length) {
    let e3 = [...new Set(gn)].sort((e4, t2) => On(e4) - On(t2));
    if (gn.length = 0, _n) {
      _n.push(...e3);
      return;
    }
    for (_n = e3, vn = 0; vn < _n.length; vn++) {
      let e4 = _n[vn];
      e4.flags & 4 && (e4.flags &= -2), e4.flags & 8 || e4(), e4.flags &= -2;
    }
    _n = null, vn = 0;
  }
}
var On = (e2) => e2.id == null ? e2.flags & 2 ? -1 : 1 / 0 : e2.id;
function kn(e2) {
  let t2 = i;
  try {
    for (hn = 0; hn < R.length; hn++) {
      let e3 = R[hn];
      e3 && !(e3.flags & 8) && (e3.flags & 4 && (e3.flags &= -2), dn(e3, e3.i, e3.i ? 15 : 14), e3.flags & 4 || (e3.flags &= -2));
    }
  } finally {
    for (; hn < R.length; hn++) {
      let e3 = R[hn];
      e3 && (e3.flags &= -2);
    }
    hn = -1, R.length = 0, Dn(e2), bn = null, (R.length || gn.length) && kn(e2);
  }
}
var z = null;
var An = null;
function jn(e2) {
  let t2 = z;
  return z = e2, An = e2 && e2.type.__scopeId || null, t2;
}
function Mn(e2, t2 = z, n2) {
  if (!t2 || e2._n) return e2;
  let r2 = (...n3) => {
    r2._d && ga(-1);
    let i2 = jn(t2), a2;
    try {
      a2 = e2(...n3);
    } finally {
      jn(i2), r2._d && ga(1);
    }
    return a2;
  };
  return r2._n = true, r2._c = true, r2._d = true, r2;
}
function Nn(e2, t2) {
  if (z === null) return e2;
  let r2 = Za(z), i2 = e2.dirs ||= [];
  for (let e3 = 0; e3 < t2.length; e3++) {
    let [a2, o2, s2, c2 = n] = t2[e3];
    a2 && (h(a2) && (a2 = { mounted: a2, updated: a2 }), a2.deep && un(o2), i2.push({ dir: a2, instance: r2, value: o2, oldValue: void 0, arg: s2, modifiers: c2 }));
  }
  return e2;
}
function Pn(e2, t2, n2, r2) {
  let i2 = e2.dirs, a2 = t2 && t2.dirs;
  for (let o2 = 0; o2 < i2.length; o2++) {
    let s2 = i2[o2];
    a2 && (s2.oldValue = a2[o2].value);
    let c2 = s2.dir[r2];
    c2 && (Ke(), fn(c2, n2, 8, [e2.el, s2, e2, t2]), qe());
  }
}
var Fn = Symbol(`_vte`);
var In = (e2) => e2.__isTeleport;
var Ln = (e2) => e2 && (e2.disabled || e2.disabled === ``);
var Rn = (e2) => e2 && (e2.defer || e2.defer === ``);
var zn = (e2) => typeof SVGElement < `u` && e2 instanceof SVGElement;
var Bn = (e2) => typeof MathMLElement == `function` && e2 instanceof MathMLElement;
var Vn = (e2, t2) => {
  let n2 = e2 && e2.to;
  if (g(n2)) if (t2) {
    let e3 = t2(n2);
    return e3;
  } else return null;
  else return n2;
};
var Hn = { name: `Teleport`, __isTeleport: true, process(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  let { mc: u2, pc: d2, pbc: f2, o: { insert: p2, querySelector: m2, createText: h2, createComment: g2 } } = l2, _2 = Ln(t2.props), { shapeFlag: v2, children: y2, dynamicChildren: b2 } = t2;
  if (e2 == null) {
    let e3 = t2.el = h2(``), l3 = t2.anchor = h2(``);
    p2(e3, n2, r2), p2(l3, n2, r2);
    let d3 = (e4, t3) => {
      v2 & 16 && (i2 && i2.isCE && (i2.ce._teleportTarget = e4), u2(y2, e4, t3, i2, a2, o2, s2, c2));
    }, f3 = () => {
      let e4 = t2.target = Vn(t2.props, m2), n3 = qn(e4, t2, h2, p2);
      e4 && (o2 !== `svg` && zn(e4) ? o2 = `svg` : o2 !== `mathml` && Bn(e4) && (o2 = `mathml`), _2 || (d3(e4, n3), Kn(t2, false)));
    };
    _2 && (d3(n2, l3), Kn(t2, true)), Rn(t2.props) ? U(() => {
      f3(), t2.el.__isMounted = true;
    }, a2) : f3();
  } else {
    if (Rn(t2.props) && !e2.el.__isMounted) {
      U(() => {
        Hn.process(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2), delete e2.el.__isMounted;
      }, a2);
      return;
    }
    t2.el = e2.el, t2.targetStart = e2.targetStart;
    let u3 = t2.anchor = e2.anchor, p3 = t2.target = e2.target, h3 = t2.targetAnchor = e2.targetAnchor, g3 = Ln(e2.props), v3 = g3 ? n2 : p3, y3 = g3 ? u3 : h3;
    if (o2 === `svg` || zn(p3) ? o2 = `svg` : (o2 === `mathml` || Bn(p3)) && (o2 = `mathml`), b2 ? (f2(e2.dynamicChildren, b2, v3, i2, a2, o2, s2), Ai(e2, t2, true)) : c2 || d2(e2, t2, v3, y3, i2, a2, o2, s2, false), _2) g3 ? t2.props && e2.props && t2.props.to !== e2.props.to && (t2.props.to = e2.props.to) : Un(t2, n2, u3, l2, 1);
    else if ((t2.props && t2.props.to) !== (e2.props && e2.props.to)) {
      let e3 = t2.target = Vn(t2.props, m2);
      e3 && Un(t2, e3, null, l2, 0);
    } else g3 && Un(t2, p3, h3, l2, 1);
    Kn(t2, _2);
  }
}, remove(e2, t2, n2, { um: r2, o: { remove: i2 } }, a2) {
  let { shapeFlag: o2, children: s2, anchor: c2, targetStart: l2, targetAnchor: u2, target: d2, props: f2 } = e2;
  if (d2 && (i2(l2), i2(u2)), a2 && i2(c2), o2 & 16) {
    let e3 = a2 || !Ln(f2);
    for (let i3 = 0; i3 < s2.length; i3++) {
      let a3 = s2[i3];
      r2(a3, t2, n2, e3, !!a3.dynamicChildren);
    }
  }
}, move: Un, hydrate: Wn };
function Un(e2, t2, n2, { o: { insert: r2 }, m: i2 }, a2 = 2) {
  a2 === 0 && r2(e2.targetAnchor, t2, n2);
  let { el: o2, anchor: s2, shapeFlag: c2, children: l2, props: u2 } = e2, d2 = a2 === 2;
  if (d2 && r2(o2, t2, n2), (!d2 || Ln(u2)) && c2 & 16) for (let e3 = 0; e3 < l2.length; e3++) i2(l2[e3], t2, n2, 2);
  d2 && r2(s2, t2, n2);
}
function Wn(e2, t2, n2, r2, i2, a2, { o: { nextSibling: o2, parentNode: s2, querySelector: c2, insert: l2, createText: u2 } }, d2) {
  let f2 = t2.target = Vn(t2.props, c2);
  if (f2) {
    let c3 = Ln(t2.props), p2 = f2._lpa || f2.firstChild;
    if (t2.shapeFlag & 16) if (c3) t2.anchor = d2(o2(e2), t2, s2(e2), n2, r2, i2, a2), t2.targetStart = p2, t2.targetAnchor = p2 && o2(p2);
    else {
      t2.anchor = o2(e2);
      let s3 = p2;
      for (; s3; ) {
        if (s3 && s3.nodeType === 8) {
          if (s3.data === `teleport start anchor`) t2.targetStart = s3;
          else if (s3.data === `teleport anchor`) {
            t2.targetAnchor = s3, f2._lpa = t2.targetAnchor && o2(t2.targetAnchor);
            break;
          }
        }
        s3 = o2(s3);
      }
      t2.targetAnchor || qn(f2, t2, u2, l2), d2(p2 && o2(p2), t2, f2, n2, r2, i2, a2);
    }
    Kn(t2, c3);
  }
  return t2.anchor && o2(t2.anchor);
}
var Gn = Hn;
function Kn(e2, t2) {
  let n2 = e2.ctx;
  if (n2 && n2.ut) {
    let r2, i2;
    for (t2 ? (r2 = e2.el, i2 = e2.anchor) : (r2 = e2.targetStart, i2 = e2.targetAnchor); r2 && r2 !== i2; ) r2.nodeType === 1 && r2.setAttribute(`data-v-owner`, n2.uid), r2 = r2.nextSibling;
    n2.ut();
  }
}
function qn(e2, t2, n2, r2) {
  let i2 = t2.targetStart = n2(``), a2 = t2.targetAnchor = n2(``);
  return i2[Fn] = a2, e2 && (r2(i2, e2), r2(a2, e2)), a2;
}
var Jn = Symbol(`_leaveCb`);
var Yn = Symbol(`_enterCb`);
function Xn() {
  let e2 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Sr(() => {
    e2.isMounted = true;
  }), Tr(() => {
    e2.isUnmounting = true;
  }), e2;
}
var B = [Function, Array];
var Zn = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: B, onEnter: B, onAfterEnter: B, onEnterCancelled: B, onBeforeLeave: B, onLeave: B, onAfterLeave: B, onLeaveCancelled: B, onBeforeAppear: B, onAppear: B, onAfterAppear: B, onAppearCancelled: B };
var Qn = (e2) => {
  let t2 = e2.subTree;
  return t2.component ? Qn(t2.component) : t2;
};
var $n = { name: `BaseTransition`, props: Zn, setup(e2, { slots: t2 }) {
  let n2 = Ia(), r2 = Xn();
  return () => {
    let i2 = t2.default && sr(t2.default(), true);
    if (!i2 || !i2.length) return;
    let a2 = er(i2), o2 = N(e2), { mode: s2 } = o2;
    if (r2.isLeaving) return ir(a2);
    let c2 = ar(a2);
    if (!c2) return ir(a2);
    let l2 = rr(c2, o2, r2, n2, (e3) => l2 = e3);
    c2.type !== K && or(c2, l2);
    let u2 = n2.subTree && ar(n2.subTree);
    if (u2 && u2.type !== K && !ba(c2, u2) && Qn(n2).type !== K) {
      let e3 = rr(u2, o2, r2, n2);
      if (or(u2, e3), s2 === `out-in` && c2.type !== K) return r2.isLeaving = true, e3.afterLeave = () => {
        r2.isLeaving = false, n2.job.flags & 8 || n2.update(), delete e3.afterLeave, u2 = void 0;
      }, ir(a2);
      s2 === `in-out` && c2.type !== K ? e3.delayLeave = (e4, t3, n3) => {
        let i3 = nr(r2, u2);
        i3[String(u2.key)] = u2, e4[Jn] = () => {
          t3(), e4[Jn] = void 0, delete l2.delayedLeave, u2 = void 0;
        }, l2.delayedLeave = () => {
          n3(), delete l2.delayedLeave, u2 = void 0;
        };
      } : u2 = void 0;
    } else u2 &&= void 0;
    return a2;
  };
} };
function er(e2) {
  let t2 = e2[0];
  if (e2.length > 1) {
    let n2 = false;
    for (let r2 of e2) if (r2.type !== K) {
      t2 = r2, n2 = true;
      break;
    }
  }
  return t2;
}
var tr = $n;
function nr(e2, t2) {
  let { leavingVNodes: n2 } = e2, r2 = n2.get(t2.type);
  return r2 || (r2 = /* @__PURE__ */ Object.create(null), n2.set(t2.type, r2)), r2;
}
function rr(e2, t2, n2, r2, i2) {
  let { appear: a2, mode: o2, persisted: s2 = false, onBeforeEnter: c2, onEnter: l2, onAfterEnter: u2, onEnterCancelled: d2, onBeforeLeave: p2, onLeave: m2, onAfterLeave: h2, onLeaveCancelled: g2, onBeforeAppear: _2, onAppear: v2, onAfterAppear: y2, onAppearCancelled: b2 } = t2, x2 = String(e2.key), S2 = nr(n2, e2), C2 = (e3, t3) => {
    e3 && fn(e3, r2, 9, t3);
  }, w2 = (e3, t3) => {
    let n3 = t3[1];
    C2(e3, t3), f(e3) ? e3.every((e4) => e4.length <= 1) && n3() : e3.length <= 1 && n3();
  }, T2 = { mode: o2, persisted: s2, beforeEnter(t3) {
    let r3 = c2;
    if (!n2.isMounted) if (a2) r3 = _2 || c2;
    else return;
    t3[Jn] && t3[Jn](true);
    let i3 = S2[x2];
    i3 && ba(e2, i3) && i3.el[Jn] && i3.el[Jn](), C2(r3, [t3]);
  }, enter(e3) {
    let t3 = l2, r3 = u2, i3 = d2;
    if (!n2.isMounted) if (a2) t3 = v2 || l2, r3 = y2 || u2, i3 = b2 || d2;
    else return;
    let o3 = false, s3 = e3[Yn] = (t4) => {
      o3 || (o3 = true, C2(t4 ? i3 : r3, [e3]), T2.delayedLeave && T2.delayedLeave(), e3[Yn] = void 0);
    };
    t3 ? w2(t3, [e3, s3]) : s3();
  }, leave(t3, r3) {
    let i3 = String(e2.key);
    if (t3[Yn] && t3[Yn](true), n2.isUnmounting) return r3();
    C2(p2, [t3]);
    let a3 = false, o3 = t3[Jn] = (n3) => {
      a3 || (a3 = true, r3(), C2(n3 ? g2 : h2, [t3]), t3[Jn] = void 0, S2[i3] === e2 && delete S2[i3]);
    };
    S2[i3] = e2, m2 ? w2(m2, [t3, o3]) : o3();
  }, clone(e3) {
    let a3 = rr(e3, t2, n2, r2, i2);
    return i2 && i2(a3), a3;
  } };
  return T2;
}
function ir(e2) {
  if (mr(e2)) return e2 = Ta(e2), e2.children = null, e2;
}
function ar(e2) {
  if (!mr(e2)) return In(e2.type) && e2.children ? er(e2.children) : e2;
  let { shapeFlag: t2, children: n2 } = e2;
  if (n2) {
    if (t2 & 16) return n2[0];
    if (t2 & 32 && h(n2.default)) return n2.default();
  }
}
function or(e2, t2) {
  e2.shapeFlag & 6 && e2.component ? (e2.transition = t2, or(e2.component.subTree, t2)) : e2.shapeFlag & 128 ? (e2.ssContent.transition = t2.clone(e2.ssContent), e2.ssFallback.transition = t2.clone(e2.ssFallback)) : e2.transition = t2;
}
function sr(e2, t2 = false, n2) {
  let r2 = [], i2 = 0;
  for (let a2 = 0; a2 < e2.length; a2++) {
    let o2 = e2[a2], s2 = n2 == null ? o2.key : String(n2) + String(o2.key == null ? a2 : o2.key);
    o2.type === G ? (o2.patchFlag & 128 && i2++, r2 = r2.concat(sr(o2.children, t2, s2))) : (t2 || o2.type !== K) && r2.push(s2 == null ? o2 : Ta(o2, { key: s2 }));
  }
  if (i2 > 1) for (let e3 = 0; e3 < r2.length; e3++) r2[e3].patchFlag = -2;
  return r2;
}
function V(e2, t2) {
  return h(e2) ? (() => c({ name: e2.name }, t2, { setup: e2 }))() : e2;
}
function cr(e2) {
  e2.ids = [e2.ids[0] + e2.ids[2]++ + `-`, 0, 0];
}
function lr(e2) {
  let t2 = Ia(), r2 = qt(null);
  if (t2) {
    let i3 = t2.refs === n ? t2.refs = {} : t2.refs, a2;
    Object.defineProperty(i3, e2, { enumerable: true, get: () => r2.value, set: (e3) => r2.value = e3 });
  }
  let i2 = r2;
  return i2;
}
function ur(e2, t2, r2, i2, a2 = false) {
  if (f(e2)) {
    e2.forEach((e3, n2) => ur(e3, t2 && (f(t2) ? t2[n2] : t2), r2, i2, a2));
    return;
  }
  if (pr(i2) && !a2) {
    i2.shapeFlag & 512 && i2.type.__asyncResolved && i2.component.subTree.component && ur(e2, t2, r2, i2.component.subTree);
    return;
  }
  let o2 = i2.shapeFlag & 4 ? Za(i2.component) : i2.el, s2 = a2 ? null : o2, { i: c2, r: u2 } = e2, p2 = t2 && t2.r, m2 = c2.refs === n ? c2.refs = {} : c2.refs, _2 = c2.setupState, v2 = N(_2), y2 = _2 === n ? () => false : (e3) => d(v2, e3);
  if (p2 != null && p2 !== u2 && (g(p2) ? (m2[p2] = null, y2(p2) && (_2[p2] = null)) : F(p2) && (p2.value = null)), h(u2)) dn(u2, c2, 12, [s2, m2]);
  else {
    let t3 = g(u2), n2 = F(u2);
    if (t3 || n2) {
      let i3 = () => {
        if (e2.f) {
          let n3 = t3 ? y2(u2) ? _2[u2] : m2[u2] : u2.value;
          a2 ? f(n3) && l(n3, o2) : f(n3) ? n3.includes(o2) || n3.push(o2) : t3 ? (m2[u2] = [o2], y2(u2) && (_2[u2] = m2[u2])) : (u2.value = [o2], e2.k && (m2[e2.k] = u2.value));
        } else t3 ? (m2[u2] = s2, y2(u2) && (_2[u2] = s2)) : n2 && (u2.value = s2, e2.k && (m2[e2.k] = s2));
      };
      s2 ? (i3.id = -1, U(i3, r2)) : i3();
    }
  }
}
var dr = de().requestIdleCallback || ((e2) => setTimeout(e2, 1));
var fr = de().cancelIdleCallback || ((e2) => clearTimeout(e2));
var pr = (e2) => !!e2.type.__asyncLoader;
var mr = (e2) => e2.type.__isKeepAlive;
function hr(e2, t2) {
  _r(e2, `a`, t2);
}
function gr(e2, t2) {
  _r(e2, `da`, t2);
}
function _r(e2, t2, n2 = Q) {
  let r2 = e2.__wdc ||= () => {
    let t3 = n2;
    for (; t3; ) {
      if (t3.isDeactivated) return;
      t3 = t3.parent;
    }
    return e2();
  };
  if (yr(t2, r2, n2), n2) {
    let e3 = n2.parent;
    for (; e3 && e3.parent; ) mr(e3.parent.vnode) && vr(r2, t2, n2, e3), e3 = e3.parent;
  }
}
function vr(e2, t2, n2, r2) {
  let i2 = yr(t2, e2, r2, true);
  Er(() => {
    l(r2[t2], i2);
  }, n2);
}
function yr(e2, t2, n2 = Q, r2 = false) {
  if (n2) {
    let i2 = n2[e2] || (n2[e2] = []), a2 = t2.__weh ||= (...r3) => {
      Ke();
      let i3 = za(n2), a3 = fn(t2, n2, e2, r3);
      return i3(), qe(), a3;
    };
    return r2 ? i2.unshift(a2) : i2.push(a2), a2;
  }
}
var br = (e2) => (t2, n2 = Q) => {
  (!Ha || e2 === `sp`) && yr(e2, (...e3) => t2(...e3), n2);
};
var xr = br(`bm`);
var Sr = br(`m`);
var Cr = br(`bu`);
var wr = br(`u`);
var Tr = br(`bum`);
var Er = br(`um`);
var Dr = br(`sp`);
var Or = br(`rtg`);
var kr = br(`rtc`);
function Ar(e2, t2 = Q) {
  yr(`ec`, e2, t2);
}
var jr = Symbol.for(`v-ndc`);
function Mr(e2, t2, n2, r2) {
  let i2, a2 = n2 && n2[r2], o2 = f(e2);
  if (o2 || g(e2)) {
    let n3 = o2 && Ht(e2), r3 = false;
    n3 && (r3 = !M(e2), e2 = ot(e2)), i2 = Array(e2.length);
    for (let n4 = 0, o3 = e2.length; n4 < o3; n4++) i2[n4] = t2(r3 ? P(e2[n4]) : e2[n4], n4, void 0, a2 && a2[n4]);
  } else if (typeof e2 == `number`) {
    i2 = Array(e2);
    for (let n3 = 0; n3 < e2; n3++) i2[n3] = t2(n3 + 1, n3, void 0, a2 && a2[n3]);
  } else if (v(e2)) if (e2[Symbol.iterator]) i2 = Array.from(e2, (e3, n3) => t2(e3, n3, void 0, a2 && a2[n3]));
  else {
    let n3 = Object.keys(e2);
    i2 = Array(n3.length);
    for (let r3 = 0, o3 = n3.length; r3 < o3; r3++) {
      let o4 = n3[r3];
      i2[r3] = t2(e2[o4], o4, r3, a2 && a2[r3]);
    }
  }
  else i2 = [];
  return n2 && (n2[r2] = i2), i2;
}
var Nr = (e2) => e2 ? Va(e2) ? Za(e2) : Nr(e2.parent) : null;
var Pr = c(/* @__PURE__ */ Object.create(null), { $: (e2) => e2, $el: (e2) => e2.vnode.el, $data: (e2) => e2.data, $props: (e2) => e2.props, $attrs: (e2) => e2.attrs, $slots: (e2) => e2.slots, $refs: (e2) => e2.refs, $parent: (e2) => Nr(e2.parent), $root: (e2) => Nr(e2.root), $host: (e2) => e2.ce, $emit: (e2) => e2.emit, $options: (e2) => Wr(e2), $forceUpdate: (e2) => e2.f ||= () => {
  Cn(e2.update);
}, $nextTick: (e2) => e2.n ||= xn.bind(e2.proxy), $watch: (e2) => Ri.bind(e2) });
var Fr = (e2, t2) => e2 !== n && !e2.__isScriptSetup && d(e2, t2);
var Ir = { get({ _: e2 }, t2) {
  if (t2 === `__v_skip`) return true;
  let { ctx: r2, setupState: i2, data: a2, props: o2, accessCache: s2, type: c2, appContext: l2 } = e2, u2;
  if (t2[0] !== `$`) {
    let c3 = s2[t2];
    if (c3 !== void 0) switch (c3) {
      case 1:
        return i2[t2];
      case 2:
        return a2[t2];
      case 4:
        return r2[t2];
      case 3:
        return o2[t2];
    }
    else if (Fr(i2, t2)) return s2[t2] = 1, i2[t2];
    else if (a2 !== n && d(a2, t2)) return s2[t2] = 2, a2[t2];
    else if ((u2 = e2.propsOptions[0]) && d(u2, t2)) return s2[t2] = 3, o2[t2];
    else if (r2 !== n && d(r2, t2)) return s2[t2] = 4, r2[t2];
    else zr && (s2[t2] = 0);
  }
  let f2 = Pr[t2], p2, m2;
  if (f2) return t2 === `$attrs` && j(e2.attrs, `get`, ``), f2(e2);
  if ((p2 = c2.__cssModules) && (p2 = p2[t2])) return p2;
  if (r2 !== n && d(r2, t2)) return s2[t2] = 4, r2[t2];
  if (m2 = l2.config.globalProperties, d(m2, t2)) return m2[t2];
}, set({ _: e2 }, t2, r2) {
  let { data: i2, setupState: a2, ctx: o2 } = e2;
  return Fr(a2, t2) ? (a2[t2] = r2, true) : i2 !== n && d(i2, t2) ? (i2[t2] = r2, true) : d(e2.props, t2) || t2[0] === `$` && t2.slice(1) in e2 ? false : (o2[t2] = r2, true);
}, has({ _: { data: e2, setupState: t2, accessCache: r2, ctx: i2, appContext: a2, propsOptions: o2 } }, s2) {
  let c2;
  return !!r2[s2] || e2 !== n && d(e2, s2) || Fr(t2, s2) || (c2 = o2[0]) && d(c2, s2) || d(i2, s2) || d(Pr, s2) || d(a2.config.globalProperties, s2);
}, defineProperty(e2, t2, n2) {
  return n2.get == null ? d(n2, `value`) && this.set(e2, t2, n2.value, null) : e2._.accessCache[t2] = 0, Reflect.defineProperty(e2, t2, n2);
} };
function Lr(e2) {
  return f(e2) ? e2.reduce((e3, t2) => (e3[t2] = null, e3), {}) : e2;
}
function Rr(e2) {
  let t2 = Ia(), n2 = e2();
  return Ba(), y(n2) && (n2 = n2.catch((e3) => {
    throw za(t2), e3;
  })), [n2, () => za(t2)];
}
var zr = true;
function Br(e2) {
  let t2 = Wr(e2), n2 = e2.proxy, r2 = e2.ctx;
  zr = false, t2.beforeCreate && Hr(t2.beforeCreate, e2, `bc`);
  let { data: a2, computed: o2, methods: s2, watch: c2, provide: l2, inject: u2, created: d2, beforeMount: p2, mounted: m2, beforeUpdate: g2, updated: _2, activated: y2, deactivated: b2, beforeDestroy: x2, beforeUnmount: S2, destroyed: C2, unmounted: w2, render: T2, renderTracked: ee2, renderTriggered: te2, errorCaptured: E2, serverPrefetch: ne2, expose: re2, inheritAttrs: ie2, components: ae2, directives: oe2, filters: se2 } = t2, ce2 = null;
  if (u2 && Vr(u2, r2, ce2), s2) for (let e3 in s2) {
    let t3 = s2[e3];
    h(t3) && (r2[e3] = t3.bind(n2));
  }
  if (a2) {
    let t3 = a2.call(n2, n2);
    v(t3) && (e2.data = Rt(t3));
  }
  if (zr = true, o2) for (let e3 in o2) {
    let t3 = o2[e3], a3 = h(t3) ? t3.bind(n2, n2) : h(t3.get) ? t3.get.bind(n2, n2) : i, s3 = !h(t3) && h(t3.set) ? t3.set.bind(n2) : i, c3 = $({ get: a3, set: s3 });
    Object.defineProperty(r2, e3, { enumerable: true, configurable: true, get: () => c3.value, set: (e4) => c3.value = e4 });
  }
  if (c2) for (let e3 in c2) Ur(c2[e3], r2, n2, e3);
  if (l2) {
    let e3 = h(l2) ? l2.call(n2) : l2;
    Reflect.ownKeys(e3).forEach((t3) => {
      ri(t3, e3[t3]);
    });
  }
  d2 && Hr(d2, e2, `c`);
  function D2(e3, t3) {
    f(t3) ? t3.forEach((t4) => e3(t4.bind(n2))) : t3 && e3(t3.bind(n2));
  }
  if (D2(xr, p2), D2(Sr, m2), D2(Cr, g2), D2(wr, _2), D2(hr, y2), D2(gr, b2), D2(Ar, E2), D2(kr, ee2), D2(Or, te2), D2(Tr, S2), D2(Er, w2), D2(Dr, ne2), f(re2)) if (re2.length) {
    let t3 = e2.exposed ||= {};
    re2.forEach((e3) => {
      Object.defineProperty(t3, e3, { get: () => n2[e3], set: (t4) => n2[e3] = t4 });
    });
  } else e2.exposed ||= {};
  T2 && e2.render === i && (e2.render = T2), ie2 != null && (e2.inheritAttrs = ie2), ae2 && (e2.components = ae2), oe2 && (e2.directives = oe2), ne2 && cr(e2);
}
function Vr(e2, t2, n2 = i) {
  for (let n3 in f(e2) && (e2 = Yr(e2)), e2) {
    let r2 = e2[n3], i2;
    i2 = v(r2) ? `default` in r2 ? ii(r2.from || n3, r2.default, true) : ii(r2.from || n3) : ii(r2), F(i2) ? Object.defineProperty(t2, n3, { enumerable: true, configurable: true, get: () => i2.value, set: (e3) => i2.value = e3 }) : t2[n3] = i2;
  }
}
function Hr(e2, t2, n2) {
  fn(f(e2) ? e2.map((e3) => e3.bind(t2.proxy)) : e2.bind(t2.proxy), t2, n2);
}
function Ur(e2, t2, n2, r2) {
  let i2 = r2.includes(`.`) ? zi(n2, r2) : () => n2[r2];
  if (g(e2)) {
    let n3 = t2[e2];
    h(n3) && W(i2, n3);
  } else if (h(e2)) W(i2, e2.bind(n2));
  else if (v(e2)) if (f(e2)) e2.forEach((e3) => Ur(e3, t2, n2, r2));
  else {
    let r3 = h(e2.handler) ? e2.handler.bind(n2) : t2[e2.handler];
    h(r3) && W(i2, r3, e2);
  }
}
function Wr(e2) {
  let t2 = e2.type, { mixins: n2, extends: r2 } = t2, { mixins: i2, optionsCache: a2, config: { optionMergeStrategies: o2 } } = e2.appContext, s2 = a2.get(t2), c2;
  return s2 ? c2 = s2 : !i2.length && !n2 && !r2 ? c2 = t2 : (c2 = {}, i2.length && i2.forEach((e3) => Gr(c2, e3, o2, true)), Gr(c2, t2, o2)), v(t2) && a2.set(t2, c2), c2;
}
function Gr(e2, t2, n2, r2 = false) {
  let { mixins: i2, extends: a2 } = t2;
  for (let o2 in a2 && Gr(e2, a2, n2, true), i2 && i2.forEach((t3) => Gr(e2, t3, n2, true)), t2) if (!(r2 && o2 === `expose`)) {
    let r3 = Kr[o2] || n2 && n2[o2];
    e2[o2] = r3 ? r3(e2[o2], t2[o2]) : t2[o2];
  }
  return e2;
}
var Kr = { data: qr, props: Zr, emits: Zr, methods: Xr, computed: Xr, beforeCreate: H, created: H, beforeMount: H, mounted: H, beforeUpdate: H, updated: H, beforeDestroy: H, beforeUnmount: H, destroyed: H, unmounted: H, activated: H, deactivated: H, errorCaptured: H, serverPrefetch: H, components: Xr, directives: Xr, watch: Qr, provide: qr, inject: Jr };
function qr(e2, t2) {
  return t2 ? e2 ? function() {
    return c(h(e2) ? e2.call(this, this) : e2, h(t2) ? t2.call(this, this) : t2);
  } : t2 : e2;
}
function Jr(e2, t2) {
  return Xr(Yr(e2), Yr(t2));
}
function Yr(e2) {
  if (f(e2)) {
    let t2 = {};
    for (let n2 = 0; n2 < e2.length; n2++) t2[e2[n2]] = e2[n2];
    return t2;
  }
  return e2;
}
function H(e2, t2) {
  return e2 ? [...new Set([].concat(e2, t2))] : t2;
}
function Xr(e2, t2) {
  return e2 ? c(/* @__PURE__ */ Object.create(null), e2, t2) : t2;
}
function Zr(e2, t2) {
  return e2 ? f(e2) && f(t2) ? [.../* @__PURE__ */ new Set([...e2, ...t2])] : c(/* @__PURE__ */ Object.create(null), Lr(e2), Lr(t2 ?? {})) : t2;
}
function Qr(e2, t2) {
  if (!e2) return t2;
  if (!t2) return e2;
  let n2 = c(/* @__PURE__ */ Object.create(null), e2);
  for (let r2 in t2) n2[r2] = H(e2[r2], t2[r2]);
  return n2;
}
function $r() {
  return { app: null, config: { isNativeTag: a, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
var ei = 0;
function ti(e2, t2) {
  return function(n2, r2 = null) {
    h(n2) || (n2 = c({}, n2)), r2 != null && !v(r2) && (r2 = null);
    let i2 = $r(), a2 = /* @__PURE__ */ new WeakSet(), o2 = [], s2 = false, l2 = i2.app = { _uid: ei++, _component: n2, _props: r2, _container: null, _context: i2, _instance: null, version: eo, get config() {
      return i2.config;
    }, set config(e3) {
    }, use(e3, ...t3) {
      return a2.has(e3) || (e3 && h(e3.install) ? (a2.add(e3), e3.install(l2, ...t3)) : h(e3) && (a2.add(e3), e3(l2, ...t3))), l2;
    }, mixin(e3) {
      return i2.mixins.includes(e3) || i2.mixins.push(e3), l2;
    }, component(e3, t3) {
      return t3 ? (i2.components[e3] = t3, l2) : i2.components[e3];
    }, directive(e3, t3) {
      return t3 ? (i2.directives[e3] = t3, l2) : i2.directives[e3];
    }, mount(a3, o3, c2) {
      if (!s2) {
        let u2 = l2._ceVNode || Z(n2, r2);
        return u2.appContext = i2, c2 === true ? c2 = `svg` : c2 === false && (c2 = void 0), o3 && t2 ? t2(u2, a3) : e2(u2, a3, c2), s2 = true, l2._container = a3, a3.__vue_app__ = l2, Za(u2.component);
      }
    }, onUnmount(e3) {
      o2.push(e3);
    }, unmount() {
      s2 && (fn(o2, l2._instance, 16), e2(null, l2._container), delete l2._container.__vue_app__);
    }, provide(e3, t3) {
      return i2.provides[e3] = t3, l2;
    }, runWithContext(e3) {
      let t3 = ni;
      ni = l2;
      try {
        return e3();
      } finally {
        ni = t3;
      }
    } };
    return l2;
  };
}
var ni = null;
function ri(e2, t2) {
  if (Q) {
    let n2 = Q.provides, r2 = Q.parent && Q.parent.provides;
    r2 === n2 && (n2 = Q.provides = Object.create(r2)), n2[e2] = t2;
  }
}
function ii(e2, t2, n2 = false) {
  let r2 = Q || z;
  if (r2 || ni) {
    let i2 = ni ? ni._context.provides : r2 ? r2.parent == null ? r2.vnode.appContext && r2.vnode.appContext.provides : r2.parent.provides : void 0;
    if (i2 && e2 in i2) return i2[e2];
    if (arguments.length > 1) return n2 && h(t2) ? t2.call(r2 && r2.proxy) : t2;
  }
}
function ai() {
  return !!(Q || z || ni);
}
var oi = {};
var si = () => Object.create(oi);
var ci = (e2) => Object.getPrototypeOf(e2) === oi;
function li(e2, t2, n2, r2 = false) {
  let i2 = {}, a2 = si();
  for (let n3 in e2.propsDefaults = /* @__PURE__ */ Object.create(null), di(e2, t2, i2, a2), e2.propsOptions[0]) n3 in i2 || (i2[n3] = void 0);
  n2 ? e2.props = r2 ? i2 : zt(i2) : e2.type.props ? e2.props = i2 : e2.props = a2, e2.attrs = a2;
}
function ui(e2, t2, n2, r2) {
  let { props: i2, attrs: a2, vnode: { patchFlag: o2 } } = e2, s2 = N(i2), [c2] = e2.propsOptions, l2 = false;
  if ((r2 || o2 > 0) && !(o2 & 16)) {
    if (o2 & 8) {
      let n3 = e2.vnode.dynamicProps;
      for (let r3 = 0; r3 < n3.length; r3++) {
        let o3 = n3[r3];
        if (Ui(e2.emitsOptions, o3)) continue;
        let u2 = t2[o3];
        if (c2) if (d(a2, o3)) u2 !== a2[o3] && (a2[o3] = u2, l2 = true);
        else {
          let t3 = E(o3);
          i2[t3] = fi(c2, s2, t3, u2, e2, false);
        }
        else u2 !== a2[o3] && (a2[o3] = u2, l2 = true);
      }
    }
  } else {
    di(e2, t2, i2, a2) && (l2 = true);
    let r3;
    for (let a3 in s2) (!t2 || !d(t2, a3) && ((r3 = re(a3)) === a3 || !d(t2, r3))) && (c2 ? n2 && (n2[a3] !== void 0 || n2[r3] !== void 0) && (i2[a3] = fi(c2, s2, a3, void 0, e2, true)) : delete i2[a3]);
    if (a2 !== s2) for (let e3 in a2) (!t2 || !d(t2, e3)) && (delete a2[e3], l2 = true);
  }
  l2 && rt(e2.attrs, `set`, ``);
}
function di(e2, t2, r2, i2) {
  let [a2, o2] = e2.propsOptions, s2 = false, c2;
  if (t2) for (let n2 in t2) {
    if (T(n2)) continue;
    let l2 = t2[n2], u2;
    a2 && d(a2, u2 = E(n2)) ? !o2 || !o2.includes(u2) ? r2[u2] = l2 : (c2 ||= {})[u2] = l2 : Ui(e2.emitsOptions, n2) || (!(n2 in i2) || l2 !== i2[n2]) && (i2[n2] = l2, s2 = true);
  }
  if (o2) {
    let t3 = N(r2), i3 = c2 || n;
    for (let n2 = 0; n2 < o2.length; n2++) {
      let s3 = o2[n2];
      r2[s3] = fi(a2, t3, s3, i3[s3], e2, !d(i3, s3));
    }
  }
  return s2;
}
function fi(e2, t2, n2, r2, i2, a2) {
  let o2 = e2[n2];
  if (o2 != null) {
    let e3 = d(o2, `default`);
    if (e3 && r2 === void 0) {
      let e4 = o2.default;
      if (o2.type !== Function && !o2.skipFactory && h(e4)) {
        let { propsDefaults: a3 } = i2;
        if (n2 in a3) r2 = a3[n2];
        else {
          let o3 = za(i2);
          r2 = a3[n2] = e4.call(null, t2), o3();
        }
      } else r2 = e4;
      i2.ce && i2.ce._setProp(n2, r2);
    }
    o2[0] && (a2 && !e3 ? r2 = false : o2[1] && (r2 === `` || r2 === re(n2)) && (r2 = true));
  }
  return r2;
}
var pi = /* @__PURE__ */ new WeakMap();
function mi(e2, t2, i2 = false) {
  let a2 = i2 ? pi : t2.propsCache, o2 = a2.get(e2);
  if (o2) return o2;
  let s2 = e2.props, l2 = {}, u2 = [], p2 = false;
  if (!h(e2)) {
    let n2 = (e3) => {
      p2 = true;
      let [n3, r2] = mi(e3, t2, true);
      c(l2, n3), r2 && u2.push(...r2);
    };
    !i2 && t2.mixins.length && t2.mixins.forEach(n2), e2.extends && n2(e2.extends), e2.mixins && e2.mixins.forEach(n2);
  }
  if (!s2 && !p2) return v(e2) && a2.set(e2, r), r;
  if (f(s2)) for (let e3 = 0; e3 < s2.length; e3++) {
    let t3 = E(s2[e3]);
    hi(t3) && (l2[t3] = n);
  }
  else if (s2) for (let e3 in s2) {
    let t3 = E(e3);
    if (hi(t3)) {
      let n2 = s2[e3], r2 = l2[t3] = f(n2) || h(n2) ? { type: n2 } : c({}, n2), i3 = r2.type, a3 = false, o3 = true;
      if (f(i3)) for (let e4 = 0; e4 < i3.length; ++e4) {
        let t4 = i3[e4], n3 = h(t4) && t4.name;
        if (n3 === `Boolean`) {
          a3 = true;
          break;
        } else n3 === `String` && (o3 = false);
      }
      else a3 = h(i3) && i3.name === `Boolean`;
      r2[0] = a3, r2[1] = o3, (a3 || d(r2, `default`)) && u2.push(t3);
    }
  }
  let m2 = [l2, u2];
  return v(e2) && a2.set(e2, m2), m2;
}
function hi(e2) {
  return e2[0] !== `$` && !T(e2);
}
var gi = (e2) => e2[0] === `_` || e2 === `$stable`;
var _i = (e2) => f(e2) ? e2.map(Oa) : [Oa(e2)];
var vi = (e2, t2, n2) => {
  if (t2._n) return t2;
  let r2 = Mn((...e3) => _i(t2(...e3)), n2);
  return r2._c = false, r2;
};
var yi = (e2, t2, n2) => {
  let r2 = e2._ctx;
  for (let n3 in e2) {
    if (gi(n3)) continue;
    let i2 = e2[n3];
    if (h(i2)) t2[n3] = vi(n3, i2, r2);
    else if (i2 != null) {
      let e3 = _i(i2);
      t2[n3] = () => e3;
    }
  }
};
var bi = (e2, t2) => {
  let n2 = _i(t2);
  e2.slots.default = () => n2;
};
var xi = (e2, t2, n2) => {
  for (let r2 in t2) (n2 || r2 !== `_`) && (e2[r2] = t2[r2]);
};
var Si = (e2, t2, n2) => {
  let r2 = e2.slots = si();
  if (e2.vnode.shapeFlag & 32) {
    let e3 = t2._;
    e3 ? (xi(r2, t2, n2), n2 && ce(r2, `_`, e3, true)) : yi(t2, r2);
  } else t2 && bi(e2, t2);
};
var Ci = (e2, t2, r2) => {
  let { vnode: i2, slots: a2 } = e2, o2 = true, s2 = n;
  if (i2.shapeFlag & 32) {
    let e3 = t2._;
    e3 ? r2 && e3 === 1 ? o2 = false : xi(a2, t2, r2) : (o2 = !t2.$stable, yi(t2, a2)), s2 = t2;
  } else t2 && (bi(e2, t2), s2 = { default: 1 });
  if (o2) for (let e3 in a2) !gi(e3) && s2[e3] == null && delete a2[e3];
};
function wi() {
  let e2 = [];
}
var U = ca;
function Ti(e2) {
  return Ei(e2);
}
function Ei(e2, t2) {
  wi();
  let a2 = de();
  a2.__VUE__ = true;
  let { insert: o2, remove: s2, patchProp: c2, createElement: l2, createText: u2, createComment: d2, setText: f2, setElementText: p2, parentNode: m2, nextSibling: h2, setScopeId: g2 = i, insertStaticContent: _2 } = e2, v2 = (e3, t3, n2, r2 = null, i2 = null, a3 = null, o3 = void 0, s3 = null, c3 = !!t3.dynamicChildren) => {
    if (e3 === t3) return;
    e3 && !ba(e3, t3) && (r2 = xe2(e3), O2(e3, i2, a3, true), e3 = null), t3.patchFlag === -2 && (c3 = false, t3.dynamicChildren = null);
    let { type: l3, ref: u3, shapeFlag: d3 } = t3;
    switch (l3) {
      case da:
        y2(e3, t3, n2, r2);
        break;
      case K:
        b2(e3, t3, n2, r2);
        break;
      case fa:
        e3 ?? x2(t3, n2, r2, o3);
        break;
      case G:
        oe2(e3, t3, n2, r2, i2, a3, o3, s3, c3);
        break;
      default:
        d3 & 1 ? ee2(e3, t3, n2, r2, i2, a3, o3, s3, c3) : d3 & 6 ? ce2(e3, t3, n2, r2, i2, a3, o3, s3, c3) : (d3 & 64 || d3 & 128) && l3.process(e3, t3, n2, r2, i2, a3, o3, s3, c3, we2);
    }
    u3 != null && i2 && ur(u3, e3 && e3.ref, a3, t3 || e3, !t3);
  }, y2 = (e3, t3, n2, r2) => {
    if (e3 == null) o2(t3.el = u2(t3.children), n2, r2);
    else {
      let n3 = t3.el = e3.el;
      t3.children !== e3.children && f2(n3, t3.children);
    }
  }, b2 = (e3, t3, n2, r2) => {
    e3 == null ? o2(t3.el = d2(t3.children || ``), n2, r2) : t3.el = e3.el;
  }, x2 = (e3, t3, n2, r2) => {
    [e3.el, e3.anchor] = _2(e3.children, t3, n2, r2, e3.el, e3.anchor);
  }, S2 = (e3, t3, n2, r2) => {
    if (t3.children !== e3.children) {
      let i2 = h2(e3.anchor);
      w2(e3), [t3.el, t3.anchor] = _2(t3.children, n2, i2, r2);
    } else t3.el = e3.el, t3.anchor = e3.anchor;
  }, C2 = ({ el: e3, anchor: t3 }, n2, r2) => {
    let i2;
    for (; e3 && e3 !== t3; ) i2 = h2(e3), o2(e3, n2, r2), e3 = i2;
    o2(t3, n2, r2);
  }, w2 = ({ el: e3, anchor: t3 }) => {
    let n2;
    for (; e3 && e3 !== t3; ) n2 = h2(e3), s2(e3), e3 = n2;
    s2(t3);
  }, ee2 = (e3, t3, n2, r2, i2, a3, o3, s3, c3) => {
    t3.type === `svg` ? o3 = `svg` : t3.type === `math` && (o3 = `mathml`), e3 == null ? te2(t3, n2, r2, i2, a3, o3, s3, c3) : re2(e3, t3, i2, a3, o3, s3, c3);
  }, te2 = (e3, t3, n2, r2, i2, a3, s3, u3) => {
    let d3, f3, { props: m3, shapeFlag: h3, transition: g3, dirs: _3 } = e3;
    if (d3 = e3.el = l2(e3.type, a3, m3 && m3.is, m3), h3 & 8 ? p2(d3, e3.children) : h3 & 16 && ne2(e3.children, d3, null, r2, i2, Di(e3, a3), s3, u3), _3 && Pn(e3, null, r2, `created`), E2(d3, e3, e3.scopeId, s3, r2), m3) {
      for (let e4 in m3) e4 !== `value` && !T(e4) && c2(d3, e4, null, m3[e4], a3, r2);
      `value` in m3 && c2(d3, `value`, null, m3.value, a3), (f3 = m3.onVnodeBeforeMount) && Ma(f3, r2, e3);
    }
    _3 && Pn(e3, null, r2, `beforeMount`);
    let v3 = ki(i2, g3);
    v3 && g3.beforeEnter(d3), o2(d3, t3, n2), ((f3 = m3 && m3.onVnodeMounted) || v3 || _3) && U(() => {
      f3 && Ma(f3, r2, e3), v3 && g3.enter(d3), _3 && Pn(e3, null, r2, `mounted`);
    }, i2);
  }, E2 = (e3, t3, n2, r2, i2) => {
    if (n2 && g2(e3, n2), r2) for (let t4 = 0; t4 < r2.length; t4++) g2(e3, r2[t4]);
    if (i2) {
      let n3 = i2.subTree;
      if (t3 === n3 || Zi(n3.type) && (n3.ssContent === t3 || n3.ssFallback === t3)) {
        let t4 = i2.vnode;
        E2(e3, t4, t4.scopeId, t4.slotScopeIds, i2.parent);
      }
    }
  }, ne2 = (e3, t3, n2, r2, i2, a3, o3, s3, c3 = 0) => {
    for (let l3 = c3; l3 < e3.length; l3++) {
      let c4 = e3[l3] = s3 ? ka(e3[l3]) : Oa(e3[l3]);
      v2(null, c4, t3, n2, r2, i2, a3, o3, s3);
    }
  }, re2 = (e3, t3, r2, i2, a3, o3, s3) => {
    let l3 = t3.el = e3.el, { patchFlag: u3, dynamicChildren: d3, dirs: f3 } = t3;
    u3 |= e3.patchFlag & 16;
    let m3 = e3.props || n, h3 = t3.props || n, g3;
    if (r2 && Oi(r2, false), (g3 = h3.onVnodeBeforeUpdate) && Ma(g3, r2, t3, e3), f3 && Pn(t3, e3, r2, `beforeUpdate`), r2 && Oi(r2, true), (m3.innerHTML && h3.innerHTML == null || m3.textContent && h3.textContent == null) && p2(l3, ``), d3 ? ie2(e3.dynamicChildren, d3, l3, r2, i2, Di(t3, a3), o3) : s3 || pe2(e3, t3, l3, null, r2, i2, Di(t3, a3), o3, false), u3 > 0) {
      if (u3 & 16) ae2(l3, m3, h3, r2, a3);
      else if (u3 & 2 && m3.class !== h3.class && c2(l3, `class`, null, h3.class, a3), u3 & 4 && c2(l3, `style`, m3.style, h3.style, a3), u3 & 8) {
        let e4 = t3.dynamicProps;
        for (let t4 = 0; t4 < e4.length; t4++) {
          let n2 = e4[t4], i3 = m3[n2], o4 = h3[n2];
          (o4 !== i3 || n2 === `value`) && c2(l3, n2, i3, o4, a3, r2);
        }
      }
      u3 & 1 && e3.children !== t3.children && p2(l3, t3.children);
    } else !s3 && d3 == null && ae2(l3, m3, h3, r2, a3);
    ((g3 = h3.onVnodeUpdated) || f3) && U(() => {
      g3 && Ma(g3, r2, t3, e3), f3 && Pn(t3, e3, r2, `updated`);
    }, i2);
  }, ie2 = (e3, t3, n2, r2, i2, a3, o3) => {
    for (let s3 = 0; s3 < t3.length; s3++) {
      let c3 = e3[s3], l3 = t3[s3], u3 = c3.el && (c3.type === G || !ba(c3, l3) || c3.shapeFlag & 70) ? m2(c3.el) : n2;
      v2(c3, l3, u3, null, r2, i2, a3, o3, true);
    }
  }, ae2 = (e3, t3, r2, i2, a3) => {
    if (t3 !== r2) {
      if (t3 !== n) for (let n2 in t3) !T(n2) && !(n2 in r2) && c2(e3, n2, t3[n2], null, a3, i2);
      for (let n2 in r2) {
        if (T(n2)) continue;
        let o3 = r2[n2], s3 = t3[n2];
        o3 !== s3 && n2 !== `value` && c2(e3, n2, s3, o3, a3, i2);
      }
      `value` in r2 && c2(e3, `value`, t3.value, r2.value, a3);
    }
  }, oe2 = (e3, t3, n2, r2, i2, a3, s3, c3, l3) => {
    let d3 = t3.el = e3 ? e3.el : u2(``), f3 = t3.anchor = e3 ? e3.anchor : u2(``), { patchFlag: p3, dynamicChildren: m3, slotScopeIds: h3 } = t3;
    h3 && (c3 = c3 ? c3.concat(h3) : h3), e3 == null ? (o2(d3, n2, r2), o2(f3, n2, r2), ne2(t3.children || [], n2, f3, i2, a3, s3, c3, l3)) : p3 > 0 && p3 & 64 && m3 && e3.dynamicChildren ? (ie2(e3.dynamicChildren, m3, n2, i2, a3, s3, c3), (t3.key != null || i2 && t3 === i2.subTree) && Ai(e3, t3, true)) : pe2(e3, t3, n2, f3, i2, a3, s3, c3, l3);
  }, ce2 = (e3, t3, n2, r2, i2, a3, o3, s3, c3) => {
    t3.slotScopeIds = s3, e3 == null ? t3.shapeFlag & 512 ? i2.ctx.activate(t3, n2, r2, o3, c3) : D2(t3, n2, r2, i2, a3, o3, c3) : le2(e3, t3, c3);
  }, D2 = (e3, t3, n2, r2, i2, a3, o3) => {
    let s3 = e3.component = Fa(e3, r2, i2);
    if (mr(e3) && (s3.ctx.renderer = we2), Ua(s3, false, o3), s3.asyncDep) {
      if (i2 && i2.registerDep(s3, ue2, o3), !e3.el) {
        let e4 = s3.subTree = Z(K);
        b2(null, e4, t3, n2);
      }
    } else ue2(s3, e3, t3, n2, i2, a3, o3);
  }, le2 = (e3, t3, n2) => {
    let r2 = t3.component = e3.component;
    if (Ji(e3, t3, n2)) if (r2.asyncDep && !r2.asyncResolved) {
      fe2(r2, t3, n2);
      return;
    } else r2.next = t3, r2.update();
    else t3.el = e3.el, r2.vnode = t3;
  }, ue2 = (e3, t3, n2, r2, i2, a3, o3) => {
    let s3 = () => {
      if (e3.isMounted) {
        let { next: t4, bu: n3, u: r3, parent: c4, vnode: l4 } = e3;
        {
          let n4 = Mi(e3);
          if (n4) {
            t4 && (t4.el = l4.el, fe2(e3, t4, o3)), n4.asyncDep.then(() => {
              e3.isUnmounted || s3();
            });
            return;
          }
        }
        let u4 = t4, d3;
        Oi(e3, false), t4 ? (t4.el = l4.el, fe2(e3, t4, o3)) : t4 = l4, n3 && se(n3), (d3 = t4.props && t4.props.onVnodeBeforeUpdate) && Ma(d3, c4, t4, l4), Oi(e3, true);
        let f3 = Wi(e3), p3 = e3.subTree;
        e3.subTree = f3, v2(p3, f3, m2(p3.el), xe2(p3), e3, i2, a3), t4.el = f3.el, u4 === null && Xi(e3, f3.el), r3 && U(r3, i2), (d3 = t4.props && t4.props.onVnodeUpdated) && U(() => Ma(d3, c4, t4, l4), i2);
      } else {
        let o4, { el: s4, props: c4 } = t3, { bm: l4, m: u4, parent: d3, root: f3, type: p3 } = e3, m3 = pr(t3);
        if (Oi(e3, false), l4 && se(l4), !m3 && (o4 = c4 && c4.onVnodeBeforeMount) && Ma(o4, d3, t3), Oi(e3, true), s4 && k2) {
          let t4 = () => {
            e3.subTree = Wi(e3), k2(s4, e3.subTree, e3, i2, null);
          };
          m3 && p3.__asyncHydrate ? p3.__asyncHydrate(s4, e3, t4) : t4();
        } else {
          f3.ce && f3.ce._injectChildStyle(p3);
          let o5 = e3.subTree = Wi(e3);
          v2(null, o5, n2, r2, e3, i2, a3), t3.el = o5.el;
        }
        if (u4 && U(u4, i2), !m3 && (o4 = c4 && c4.onVnodeMounted)) {
          let e4 = t3;
          U(() => Ma(o4, d3, e4), i2);
        }
        (t3.shapeFlag & 256 || d3 && pr(d3.vnode) && d3.vnode.shapeFlag & 256) && e3.a && U(e3.a, i2), e3.isMounted = true, t3 = n2 = r2 = null;
      }
    };
    e3.scope.on();
    let c3 = e3.effect = new je(s3);
    e3.scope.off();
    let l3 = e3.update = c3.run.bind(c3), u3 = e3.job = c3.runIfDirty.bind(c3);
    u3.i = e3, u3.id = e3.uid, c3.scheduler = () => Cn(u3), Oi(e3, true), l3();
  }, fe2 = (e3, t3, n2) => {
    t3.component = e3;
    let r2 = e3.vnode.props;
    e3.vnode = t3, e3.next = null, ui(e3, t3.props, r2, n2), Ci(e3, t3.children, n2), Ke(), En(e3), qe();
  }, pe2 = (e3, t3, n2, r2, i2, a3, o3, s3, c3 = false) => {
    let l3 = e3 && e3.children, u3 = e3 ? e3.shapeFlag : 0, d3 = t3.children, { patchFlag: f3, shapeFlag: m3 } = t3;
    if (f3 > 0) {
      if (f3 & 128) {
        he2(l3, d3, n2, r2, i2, a3, o3, s3, c3);
        return;
      } else if (f3 & 256) {
        me2(l3, d3, n2, r2, i2, a3, o3, s3, c3);
        return;
      }
    }
    m3 & 8 ? (u3 & 16 && be2(l3, i2, a3), d3 !== l3 && p2(n2, d3)) : u3 & 16 ? m3 & 16 ? he2(l3, d3, n2, r2, i2, a3, o3, s3, c3) : be2(l3, i2, a3, true) : (u3 & 8 && p2(n2, ``), m3 & 16 && ne2(d3, n2, r2, i2, a3, o3, s3, c3));
  }, me2 = (e3, t3, n2, i2, a3, o3, s3, c3, l3) => {
    e3 ||= r, t3 ||= r;
    let u3 = e3.length, d3 = t3.length, f3 = Math.min(u3, d3), p3;
    for (p3 = 0; p3 < f3; p3++) {
      let r2 = t3[p3] = l3 ? ka(t3[p3]) : Oa(t3[p3]);
      v2(e3[p3], r2, n2, null, a3, o3, s3, c3, l3);
    }
    u3 > d3 ? be2(e3, a3, o3, true, false, f3) : ne2(t3, n2, i2, a3, o3, s3, c3, l3, f3);
  }, he2 = (e3, t3, n2, i2, a3, o3, s3, c3, l3) => {
    let u3 = 0, d3 = t3.length, f3 = e3.length - 1, p3 = d3 - 1;
    for (; u3 <= f3 && u3 <= p3; ) {
      let r2 = e3[u3], i3 = t3[u3] = l3 ? ka(t3[u3]) : Oa(t3[u3]);
      if (ba(r2, i3)) v2(r2, i3, n2, null, a3, o3, s3, c3, l3);
      else break;
      u3++;
    }
    for (; u3 <= f3 && u3 <= p3; ) {
      let r2 = e3[f3], i3 = t3[p3] = l3 ? ka(t3[p3]) : Oa(t3[p3]);
      if (ba(r2, i3)) v2(r2, i3, n2, null, a3, o3, s3, c3, l3);
      else break;
      f3--, p3--;
    }
    if (u3 > f3) {
      if (u3 <= p3) {
        let e4 = p3 + 1, r2 = e4 < d3 ? t3[e4].el : i2;
        for (; u3 <= p3; ) v2(null, t3[u3] = l3 ? ka(t3[u3]) : Oa(t3[u3]), n2, r2, a3, o3, s3, c3, l3), u3++;
      }
    } else if (u3 > p3) for (; u3 <= f3; ) O2(e3[u3], a3, o3, true), u3++;
    else {
      let m3 = u3, h3 = u3, g3 = /* @__PURE__ */ new Map();
      for (u3 = h3; u3 <= p3; u3++) {
        let e4 = t3[u3] = l3 ? ka(t3[u3]) : Oa(t3[u3]);
        e4.key != null && g3.set(e4.key, u3);
      }
      let _3, y3 = 0, b3 = p3 - h3 + 1, x3 = false, S3 = 0, C3 = Array(b3);
      for (u3 = 0; u3 < b3; u3++) C3[u3] = 0;
      for (u3 = m3; u3 <= f3; u3++) {
        let r2 = e3[u3];
        if (y3 >= b3) {
          O2(r2, a3, o3, true);
          continue;
        }
        let i3;
        if (r2.key != null) i3 = g3.get(r2.key);
        else for (_3 = h3; _3 <= p3; _3++) if (C3[_3 - h3] === 0 && ba(r2, t3[_3])) {
          i3 = _3;
          break;
        }
        i3 === void 0 ? O2(r2, a3, o3, true) : (C3[i3 - h3] = u3 + 1, i3 >= S3 ? S3 = i3 : x3 = true, v2(r2, t3[i3], n2, null, a3, o3, s3, c3, l3), y3++);
      }
      let w3 = x3 ? ji(C3) : r;
      for (_3 = w3.length - 1, u3 = b3 - 1; u3 >= 0; u3--) {
        let e4 = h3 + u3, r2 = t3[e4], f4 = e4 + 1 < d3 ? t3[e4 + 1].el : i2;
        C3[u3] === 0 ? v2(null, r2, n2, f4, a3, o3, s3, c3, l3) : x3 && (_3 < 0 || u3 !== w3[_3] ? ge2(r2, n2, f4, 2) : _3--);
      }
    }
  }, ge2 = (e3, t3, n2, r2, i2 = null) => {
    let { el: a3, type: s3, transition: c3, children: l3, shapeFlag: u3 } = e3;
    if (u3 & 6) {
      ge2(e3.component.subTree, t3, n2, r2);
      return;
    }
    if (u3 & 128) {
      e3.suspense.move(t3, n2, r2);
      return;
    }
    if (u3 & 64) {
      s3.move(e3, t3, n2, we2);
      return;
    }
    if (s3 === G) {
      o2(a3, t3, n2);
      for (let e4 = 0; e4 < l3.length; e4++) ge2(l3[e4], t3, n2, r2);
      o2(e3.anchor, t3, n2);
      return;
    }
    if (s3 === fa) {
      C2(e3, t3, n2);
      return;
    }
    let d3 = r2 !== 2 && u3 & 1 && c3;
    if (d3) if (r2 === 0) c3.beforeEnter(a3), o2(a3, t3, n2), U(() => c3.enter(a3), i2);
    else {
      let { leave: e4, delayLeave: r3, afterLeave: i3 } = c3, s4 = () => o2(a3, t3, n2), l4 = () => {
        e4(a3, () => {
          s4(), i3 && i3();
        });
      };
      r3 ? r3(a3, s4, l4) : l4();
    }
    else o2(a3, t3, n2);
  }, O2 = (e3, t3, n2, r2 = false, i2 = false) => {
    let { type: a3, props: o3, ref: s3, children: c3, dynamicChildren: l3, shapeFlag: u3, patchFlag: d3, dirs: f3, cacheIndex: p3 } = e3;
    if (d3 === -2 && (i2 = false), s3 != null && ur(s3, null, n2, e3, true), p3 != null && (t3.renderCache[p3] = void 0), u3 & 256) {
      t3.ctx.deactivate(e3);
      return;
    }
    let m3 = u3 & 1 && f3, h3 = !pr(e3), g3;
    if (h3 && (g3 = o3 && o3.onVnodeBeforeUnmount) && Ma(g3, t3, e3), u3 & 6) ye2(e3.component, n2, r2);
    else {
      if (u3 & 128) {
        e3.suspense.unmount(n2, r2);
        return;
      }
      m3 && Pn(e3, null, t3, `beforeUnmount`), u3 & 64 ? e3.type.remove(e3, t3, n2, we2, r2) : l3 && !l3.hasOnce && (a3 !== G || d3 > 0 && d3 & 64) ? be2(l3, t3, n2, false, true) : (a3 === G && d3 & 384 || !i2 && u3 & 16) && be2(c3, t3, n2), r2 && _e2(e3);
    }
    (h3 && (g3 = o3 && o3.onVnodeUnmounted) || m3) && U(() => {
      g3 && Ma(g3, t3, e3), m3 && Pn(e3, null, t3, `unmounted`);
    }, n2);
  }, _e2 = (e3) => {
    let { type: t3, el: n2, anchor: r2, transition: i2 } = e3;
    if (t3 === G) {
      ve2(n2, r2);
      return;
    }
    if (t3 === fa) {
      w2(e3);
      return;
    }
    let a3 = () => {
      s2(n2), i2 && !i2.persisted && i2.afterLeave && i2.afterLeave();
    };
    if (e3.shapeFlag & 1 && i2 && !i2.persisted) {
      let { leave: t4, delayLeave: r3 } = i2, o3 = () => t4(n2, a3);
      r3 ? r3(e3.el, a3, o3) : o3();
    } else a3();
  }, ve2 = (e3, t3) => {
    let n2;
    for (; e3 !== t3; ) n2 = h2(e3), s2(e3), e3 = n2;
    s2(t3);
  }, ye2 = (e3, t3, n2) => {
    let { bum: r2, scope: i2, job: a3, subTree: o3, um: s3, m: c3, a: l3 } = e3;
    Ni(c3), Ni(l3), r2 && se(r2), i2.stop(), a3 && (a3.flags |= 8, O2(o3, e3, t3, n2)), s3 && U(s3, t3), U(() => {
      e3.isUnmounted = true;
    }, t3), t3 && t3.pendingBranch && !t3.isUnmounted && e3.asyncDep && !e3.asyncResolved && e3.suspenseId === t3.pendingId && (t3.deps--, t3.deps === 0 && t3.resolve());
  }, be2 = (e3, t3, n2, r2 = false, i2 = false, a3 = 0) => {
    for (let o3 = a3; o3 < e3.length; o3++) O2(e3[o3], t3, n2, r2, i2);
  }, xe2 = (e3) => {
    if (e3.shapeFlag & 6) return xe2(e3.component.subTree);
    if (e3.shapeFlag & 128) return e3.suspense.next();
    let t3 = h2(e3.anchor || e3.el), n2 = t3 && t3[Fn];
    return n2 ? h2(n2) : t3;
  }, Se2 = false, Ce2 = (e3, t3, n2) => {
    e3 == null ? t3._vnode && O2(t3._vnode, null, null, true) : v2(t3._vnode || null, e3, t3, null, null, null, n2), t3._vnode = e3, Se2 || (Se2 = true, En(), Dn(), Se2 = false);
  }, we2 = { p: v2, um: O2, m: ge2, r: _e2, mt: D2, mc: ne2, pc: pe2, pbc: ie2, n: xe2, o: e2 }, Te2, k2;
  return t2 && ([Te2, k2] = t2(we2)), { render: Ce2, hydrate: Te2, createApp: ti(Ce2, Te2) };
}
function Di({ type: e2, props: t2 }, n2) {
  return n2 === `svg` && e2 === `foreignObject` || n2 === `mathml` && e2 === `annotation-xml` && t2 && t2.encoding && t2.encoding.includes(`html`) ? void 0 : n2;
}
function Oi({ effect: e2, job: t2 }, n2) {
  n2 ? (e2.flags |= 32, t2.flags |= 4) : (e2.flags &= -33, t2.flags &= -5);
}
function ki(e2, t2) {
  return (!e2 || e2 && !e2.pendingBranch) && t2 && !t2.persisted;
}
function Ai(e2, t2, n2 = false) {
  let r2 = e2.children, i2 = t2.children;
  if (f(r2) && f(i2)) for (let e3 = 0; e3 < r2.length; e3++) {
    let t3 = r2[e3], a2 = i2[e3];
    a2.shapeFlag & 1 && !a2.dynamicChildren && ((a2.patchFlag <= 0 || a2.patchFlag === 32) && (a2 = i2[e3] = ka(i2[e3]), a2.el = t3.el), !n2 && a2.patchFlag !== -2 && Ai(t3, a2)), a2.type === da && (a2.el = t3.el);
  }
}
function ji(e2) {
  let t2 = e2.slice(), n2 = [0], r2, i2, a2, o2, s2, c2 = e2.length;
  for (r2 = 0; r2 < c2; r2++) {
    let c3 = e2[r2];
    if (c3 !== 0) {
      if (i2 = n2[n2.length - 1], e2[i2] < c3) {
        t2[r2] = i2, n2.push(r2);
        continue;
      }
      for (a2 = 0, o2 = n2.length - 1; a2 < o2; ) s2 = a2 + o2 >> 1, e2[n2[s2]] < c3 ? a2 = s2 + 1 : o2 = s2;
      c3 < e2[n2[a2]] && (a2 > 0 && (t2[r2] = n2[a2 - 1]), n2[a2] = r2);
    }
  }
  for (a2 = n2.length, o2 = n2[a2 - 1]; a2-- > 0; ) n2[a2] = o2, o2 = t2[o2];
  return n2;
}
function Mi(e2) {
  let t2 = e2.subTree.component;
  if (t2) return t2.asyncDep && !t2.asyncResolved ? t2 : Mi(t2);
}
function Ni(e2) {
  if (e2) for (let t2 = 0; t2 < e2.length; t2++) e2[t2].flags |= 8;
}
var Pi = Symbol.for(`v-scx`);
var Fi = () => {
  {
    let e2 = ii(Pi);
    return e2;
  }
};
function Ii(e2, t2) {
  return Li(e2, null, t2);
}
function W(e2, t2, n2) {
  return Li(e2, t2, n2);
}
function Li(e2, t2, r2 = n) {
  let { immediate: a2, deep: o2, flush: s2, once: l2 } = r2, u2 = c({}, r2), d2 = t2 && a2 || !t2 && s2 !== `post`, f2;
  if (Ha) {
    if (s2 === `sync`) {
      let e3 = Fi();
      f2 = e3.__watcherHandles ||= [];
    } else if (!d2) {
      let e3 = () => {
      };
      return e3.stop = i, e3.resume = i, e3.pause = i, e3;
    }
  }
  let p2 = Q;
  u2.call = (e3, t3, n2) => fn(e3, p2, t3, n2);
  let m2 = false;
  s2 === `post` ? u2.scheduler = (e3) => {
    U(e3, p2 && p2.suspense);
  } : s2 !== `sync` && (m2 = true, u2.scheduler = (e3, t3) => {
    t3 ? e3() : Cn(e3);
  }), u2.augmentJob = (e3) => {
    t2 && (e3.flags |= 4), m2 && (e3.flags |= 2, p2 && (e3.id = p2.uid, e3.i = p2));
  };
  let h2 = ln(e2, t2, u2);
  return Ha && (f2 ? f2.push(h2) : d2 && h2()), h2;
}
function Ri(e2, t2, n2) {
  let r2 = this.proxy, i2 = g(e2) ? e2.includes(`.`) ? zi(r2, e2) : () => r2[e2] : e2.bind(r2, r2), a2;
  h(t2) ? a2 = t2 : (a2 = t2.handler, n2 = t2);
  let o2 = za(this), s2 = Li(i2, a2.bind(r2), n2);
  return o2(), s2;
}
function zi(e2, t2) {
  let n2 = t2.split(`.`);
  return () => {
    let t3 = e2;
    for (let e3 = 0; e3 < n2.length && t3; e3++) t3 = t3[n2[e3]];
    return t3;
  };
}
var Bi = (e2, t2) => t2 === `modelValue` || t2 === `model-value` ? e2.modelModifiers : e2[`${t2}Modifiers`] || e2[`${E(t2)}Modifiers`] || e2[`${re(t2)}Modifiers`];
function Vi(e2, t2, ...r2) {
  if (e2.isUnmounted) return;
  let i2 = e2.vnode.props || n, a2 = r2, o2 = t2.startsWith(`update:`), s2 = o2 && Bi(i2, t2.slice(7));
  s2 && (s2.trim && (a2 = r2.map((e3) => g(e3) ? e3.trim() : e3)), s2.number && (a2 = r2.map(D)));
  let c2, l2 = i2[c2 = ae(t2)] || i2[c2 = ae(E(t2))];
  !l2 && o2 && (l2 = i2[c2 = ae(re(t2))]), l2 && fn(l2, e2, 6, a2);
  let u2 = i2[c2 + `Once`];
  if (u2) {
    if (!e2.emitted) e2.emitted = {};
    else if (e2.emitted[c2]) return;
    e2.emitted[c2] = true, fn(u2, e2, 6, a2);
  }
}
function Hi(e2, t2, n2 = false) {
  let r2 = t2.emitsCache, i2 = r2.get(e2);
  if (i2 !== void 0) return i2;
  let a2 = e2.emits, o2 = {}, s2 = false;
  if (!h(e2)) {
    let r3 = (e3) => {
      let n3 = Hi(e3, t2, true);
      n3 && (s2 = true, c(o2, n3));
    };
    !n2 && t2.mixins.length && t2.mixins.forEach(r3), e2.extends && r3(e2.extends), e2.mixins && e2.mixins.forEach(r3);
  }
  return !a2 && !s2 ? (v(e2) && r2.set(e2, null), null) : (f(a2) ? a2.forEach((e3) => o2[e3] = null) : c(o2, a2), v(e2) && r2.set(e2, o2), o2);
}
function Ui(e2, t2) {
  return !e2 || !o(t2) ? false : (t2 = t2.slice(2).replace(/Once$/, ``), d(e2, t2[0].toLowerCase() + t2.slice(1)) || d(e2, re(t2)) || d(e2, t2));
}
function Wi(e2) {
  let { type: t2, vnode: n2, proxy: r2, withProxy: i2, propsOptions: [a2], slots: o2, attrs: c2, emit: l2, render: u2, renderCache: d2, props: f2, data: p2, setupState: m2, ctx: h2, inheritAttrs: g2 } = e2, _2 = jn(e2), v2, y2;
  try {
    if (n2.shapeFlag & 4) {
      let e3 = i2 || r2, t3 = e3;
      v2 = Oa(u2.call(t3, e3, d2, f2, m2, p2, h2)), y2 = c2;
    } else {
      let e3 = t2;
      v2 = Oa(e3.length > 1 ? e3(f2, { attrs: c2, slots: o2, emit: l2 }) : e3(f2, null)), y2 = t2.props ? c2 : Ki(c2);
    }
  } catch (t3) {
    pa.length = 0, pn(t3, e2, 1), v2 = Z(K);
  }
  let b2 = v2, x2;
  if (y2 && g2 !== false) {
    let e3 = Object.keys(y2), { shapeFlag: t3 } = b2;
    e3.length && t3 & 7 && (a2 && e3.some(s) && (y2 = qi(y2, a2)), b2 = Ta(b2, y2, false, true));
  }
  return n2.dirs && (b2 = Ta(b2, null, false, true), b2.dirs = b2.dirs ? b2.dirs.concat(n2.dirs) : n2.dirs), n2.transition && or(b2, n2.transition), v2 = b2, jn(_2), v2;
}
function Gi(e2, t2 = true) {
  let n2;
  for (let t3 = 0; t3 < e2.length; t3++) {
    let r2 = e2[t3];
    if (ya(r2)) {
      if (r2.type !== K || r2.children === `v-if`) {
        if (n2) return;
        n2 = r2;
      }
    } else return;
  }
  return n2;
}
var Ki = (e2) => {
  let t2;
  for (let n2 in e2) (n2 === `class` || n2 === `style` || o(n2)) && ((t2 ||= {})[n2] = e2[n2]);
  return t2;
};
var qi = (e2, t2) => {
  let n2 = {};
  for (let r2 in e2) (!s(r2) || !(r2.slice(9) in t2)) && (n2[r2] = e2[r2]);
  return n2;
};
function Ji(e2, t2, n2) {
  let { props: r2, children: i2, component: a2 } = e2, { props: o2, children: s2, patchFlag: c2 } = t2, l2 = a2.emitsOptions;
  if (t2.dirs || t2.transition) return true;
  if (n2 && c2 >= 0) {
    if (c2 & 1024) return true;
    if (c2 & 16) return r2 ? Yi(r2, o2, l2) : !!o2;
    if (c2 & 8) {
      let e3 = t2.dynamicProps;
      for (let t3 = 0; t3 < e3.length; t3++) {
        let n3 = e3[t3];
        if (o2[n3] !== r2[n3] && !Ui(l2, n3)) return true;
      }
    }
  } else return (i2 || s2) && (!s2 || !s2.$stable) ? true : r2 === o2 ? false : r2 ? o2 ? Yi(r2, o2, l2) : true : !!o2;
  return false;
}
function Yi(e2, t2, n2) {
  let r2 = Object.keys(t2);
  if (r2.length !== Object.keys(e2).length) return true;
  for (let i2 = 0; i2 < r2.length; i2++) {
    let a2 = r2[i2];
    if (t2[a2] !== e2[a2] && !Ui(n2, a2)) return true;
  }
  return false;
}
function Xi({ vnode: e2, parent: t2 }, n2) {
  for (; t2; ) {
    let r2 = t2.subTree;
    if (r2.suspense && r2.suspense.activeBranch === e2 && (r2.el = e2.el), r2 === e2) (e2 = t2.vnode).el = n2, t2 = t2.parent;
    else break;
  }
}
var Zi = (e2) => e2.__isSuspense;
var Qi = 0;
var $i = { name: `Suspense`, __isSuspense: true, process(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  if (e2 == null) na(t2, n2, r2, i2, a2, o2, s2, c2, l2);
  else {
    if (a2 && a2.deps > 0 && !e2.suspense.isInFallback) {
      t2.suspense = e2.suspense, t2.suspense.vnode = t2, t2.el = e2.el;
      return;
    }
    ra(e2, t2, n2, r2, i2, o2, s2, c2, l2);
  }
}, hydrate: aa, normalize: oa };
var ea = $i;
function ta(e2, t2) {
  let n2 = e2.props && e2.props[t2];
  h(n2) && n2();
}
function na(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let { p: l2, o: { createElement: u2 } } = c2, d2 = u2(`div`), f2 = e2.suspense = ia(e2, i2, r2, t2, d2, n2, a2, o2, s2, c2);
  l2(null, f2.pendingBranch = e2.ssContent, d2, null, r2, f2, a2, o2), f2.deps > 0 ? (ta(e2, `onPending`), ta(e2, `onFallback`), l2(null, e2.ssFallback, t2, n2, r2, null, a2, o2), la(f2, e2.ssFallback)) : f2.resolve(false, true);
}
function ra(e2, t2, n2, r2, i2, a2, o2, s2, { p: c2, um: l2, o: { createElement: u2 } }) {
  let d2 = t2.suspense = e2.suspense;
  d2.vnode = t2, t2.el = e2.el;
  let f2 = t2.ssContent, p2 = t2.ssFallback, { activeBranch: m2, pendingBranch: h2, isInFallback: g2, isHydrating: _2 } = d2;
  if (h2) d2.pendingBranch = f2, ba(f2, h2) ? (c2(h2, f2, d2.hiddenContainer, null, i2, d2, a2, o2, s2), d2.deps <= 0 ? d2.resolve() : g2 && (_2 || (c2(m2, p2, n2, r2, i2, null, a2, o2, s2), la(d2, p2)))) : (d2.pendingId = Qi++, _2 ? (d2.isHydrating = false, d2.activeBranch = h2) : l2(h2, i2, d2), d2.deps = 0, d2.effects.length = 0, d2.hiddenContainer = u2(`div`), g2 ? (c2(null, f2, d2.hiddenContainer, null, i2, d2, a2, o2, s2), d2.deps <= 0 ? d2.resolve() : (c2(m2, p2, n2, r2, i2, null, a2, o2, s2), la(d2, p2))) : m2 && ba(f2, m2) ? (c2(m2, f2, n2, r2, i2, d2, a2, o2, s2), d2.resolve(true)) : (c2(null, f2, d2.hiddenContainer, null, i2, d2, a2, o2, s2), d2.deps <= 0 && d2.resolve()));
  else if (m2 && ba(f2, m2)) c2(m2, f2, n2, r2, i2, d2, a2, o2, s2), la(d2, f2);
  else if (ta(t2, `onPending`), d2.pendingBranch = f2, f2.shapeFlag & 512 ? d2.pendingId = f2.component.suspenseId : d2.pendingId = Qi++, c2(null, f2, d2.hiddenContainer, null, i2, d2, a2, o2, s2), d2.deps <= 0) d2.resolve();
  else {
    let { timeout: e3, pendingId: t3 } = d2;
    e3 > 0 ? setTimeout(() => {
      d2.pendingId === t3 && d2.fallback(p2);
    }, e3) : e3 === 0 && d2.fallback(p2);
  }
}
function ia(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2 = false) {
  let { p: d2, m: f2, um: p2, n: m2, o: { parentNode: h2, remove: g2 } } = l2, _2, v2 = ua(e2);
  v2 && t2 && t2.pendingBranch && (_2 = t2.pendingId, t2.deps++);
  let y2 = e2.props ? le(e2.props.timeout) : void 0, b2 = a2, x2 = { vnode: e2, parent: t2, parentComponent: n2, namespace: o2, container: r2, hiddenContainer: i2, deps: 0, pendingId: Qi++, timeout: typeof y2 == `number` ? y2 : -1, activeBranch: null, pendingBranch: null, isInFallback: !u2, isHydrating: u2, isUnmounted: false, effects: [], resolve(e3 = false, n3 = false) {
    let { vnode: r3, activeBranch: i3, pendingBranch: o3, pendingId: s3, effects: c3, parentComponent: l3, container: u3 } = x2, d3 = false;
    x2.isHydrating ? x2.isHydrating = false : e3 || (d3 = i3 && o3.transition && o3.transition.mode === `out-in`, d3 && (i3.transition.afterLeave = () => {
      s3 === x2.pendingId && (f2(o3, u3, a2 === b2 ? m2(i3) : a2, 0), Tn(c3));
    }), i3 && (h2(i3.el) === u3 && (a2 = m2(i3)), p2(i3, l3, x2, true)), d3 || f2(o3, u3, a2, 0)), la(x2, o3), x2.pendingBranch = null, x2.isInFallback = false;
    let g3 = x2.parent, y3 = false;
    for (; g3; ) {
      if (g3.pendingBranch) {
        g3.effects.push(...c3), y3 = true;
        break;
      }
      g3 = g3.parent;
    }
    !y3 && !d3 && Tn(c3), x2.effects = [], v2 && t2 && t2.pendingBranch && _2 === t2.pendingId && (t2.deps--, t2.deps === 0 && !n3 && t2.resolve()), ta(r3, `onResolve`);
  }, fallback(e3) {
    if (!x2.pendingBranch) return;
    let { vnode: t3, activeBranch: n3, parentComponent: r3, container: i3, namespace: a3 } = x2;
    ta(t3, `onFallback`);
    let o3 = m2(n3), l3 = () => {
      x2.isInFallback && (d2(null, e3, i3, o3, r3, null, a3, s2, c2), la(x2, e3));
    }, u3 = e3.transition && e3.transition.mode === `out-in`;
    u3 && (n3.transition.afterLeave = l3), x2.isInFallback = true, p2(n3, r3, null, true), u3 || l3();
  }, move(e3, t3, n3) {
    x2.activeBranch && f2(x2.activeBranch, e3, t3, n3), x2.container = e3;
  }, next() {
    return x2.activeBranch && m2(x2.activeBranch);
  }, registerDep(e3, t3, n3) {
    let r3 = !!x2.pendingBranch;
    r3 && x2.deps++;
    let i3 = e3.vnode.el;
    e3.asyncDep.catch((t4) => {
      pn(t4, e3, 0);
    }).then((a3) => {
      if (e3.isUnmounted || x2.isUnmounted || x2.pendingId !== e3.suspenseId) return;
      e3.asyncResolved = true;
      let { vnode: s3 } = e3;
      Ga(e3, a3, false), i3 && (s3.el = i3);
      let c3 = !i3 && e3.subTree.el;
      t3(e3, s3, h2(i3 || e3.subTree.el), i3 ? null : m2(e3.subTree), x2, o2, n3), c3 && g2(c3), Xi(e3, s3.el), r3 && --x2.deps === 0 && x2.resolve();
    });
  }, unmount(e3, t3) {
    x2.isUnmounted = true, x2.activeBranch && p2(x2.activeBranch, n2, e3, t3), x2.pendingBranch && p2(x2.pendingBranch, n2, e3, t3);
  } };
  return x2;
}
function aa(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = t2.suspense = ia(t2, r2, n2, e2.parentNode, document.createElement(`div`), null, i2, a2, o2, s2, true), u2 = c2(e2, l2.pendingBranch = t2.ssContent, n2, l2, a2, o2);
  return l2.deps === 0 && l2.resolve(false, true), u2;
}
function oa(e2) {
  let { shapeFlag: t2, children: n2 } = e2, r2 = t2 & 32;
  e2.ssContent = sa(r2 ? n2.default : n2), e2.ssFallback = r2 ? sa(n2.fallback) : Z(K);
}
function sa(e2) {
  let t2;
  if (h(e2)) {
    let n2 = ha && e2._c;
    n2 && (e2._d = false, J()), e2 = e2(), n2 && (e2._d = true, t2 = q, ma());
  }
  if (f(e2)) {
    let t3 = Gi(e2);
    e2 = t3;
  }
  return e2 = Oa(e2), t2 && !e2.dynamicChildren && (e2.dynamicChildren = t2.filter((t3) => t3 !== e2)), e2;
}
function ca(e2, t2) {
  t2 && t2.pendingBranch ? f(e2) ? t2.effects.push(...e2) : t2.effects.push(e2) : Tn(e2);
}
function la(e2, t2) {
  e2.activeBranch = t2;
  let { vnode: n2, parentComponent: r2 } = e2, i2 = t2.el;
  for (; !i2 && t2.component; ) t2 = t2.component.subTree, i2 = t2.el;
  n2.el = i2, r2 && r2.subTree === n2 && (r2.vnode.el = i2, Xi(r2, i2));
}
function ua(e2) {
  let t2 = e2.props && e2.props.suspensible;
  return t2 != null && t2 !== false;
}
var G = Symbol.for(`v-fgt`);
var da = Symbol.for(`v-txt`);
var K = Symbol.for(`v-cmt`);
var fa = Symbol.for(`v-stc`);
var pa = [];
var q = null;
function J(e2 = false) {
  pa.push(q = e2 ? null : []);
}
function ma() {
  pa.pop(), q = pa[pa.length - 1] || null;
}
var ha = 1;
function ga(e2, t2 = false) {
  ha += e2, e2 < 0 && q && t2 && (q.hasOnce = true);
}
function _a(e2) {
  return e2.dynamicChildren = ha > 0 ? q || r : null, ma(), ha > 0 && q && q.push(e2), e2;
}
function Y(e2, t2, n2, r2, i2, a2) {
  return _a(X(e2, t2, n2, r2, i2, a2, true));
}
function va(e2, t2, n2, r2, i2) {
  return _a(Z(e2, t2, n2, r2, i2, true));
}
function ya(e2) {
  return e2 ? e2.__v_isVNode === true : false;
}
function ba(e2, t2) {
  return e2.type === t2.type && e2.key === t2.key;
}
var xa = ({ key: e2 }) => e2 ?? null;
var Sa = ({ ref: e2, ref_key: t2, ref_for: n2 }) => (typeof e2 == `number` && (e2 = `` + e2), e2 == null ? null : g(e2) || F(e2) || h(e2) ? { i: z, r: e2, k: t2, f: !!n2 } : e2);
function X(e2, t2 = null, n2 = null, r2 = 0, i2 = null, a2 = e2 === G ? 0 : 1, o2 = false, s2 = false) {
  let c2 = { __v_isVNode: true, __v_skip: true, type: e2, props: t2, key: t2 && xa(t2), ref: t2 && Sa(t2), scopeId: An, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: a2, patchFlag: r2, dynamicProps: i2, dynamicChildren: null, appContext: null, ctx: z };
  return s2 ? (Aa(c2, n2), a2 & 128 && e2.normalize(c2)) : n2 && (c2.shapeFlag |= g(n2) ? 8 : 16), ha > 0 && !o2 && q && (c2.patchFlag > 0 || a2 & 6) && c2.patchFlag !== 32 && q.push(c2), c2;
}
var Z = Ca;
function Ca(e2, t2 = null, n2 = null, r2 = 0, i2 = null, a2 = false) {
  if ((!e2 || e2 === jr) && (e2 = K), ya(e2)) {
    let r3 = Ta(e2, t2, true);
    return n2 && Aa(r3, n2), ha > 0 && !a2 && q && (r3.shapeFlag & 6 ? q[q.indexOf(e2)] = r3 : q.push(r3)), r3.patchFlag = -2, r3;
  }
  if (Qa(e2) && (e2 = e2.__vccOpts), t2) {
    t2 = wa(t2);
    let { class: e3, style: n3 } = t2;
    e3 && !g(e3) && (t2.class = O(e3)), v(n3) && (Wt(n3) && !f(n3) && (n3 = c({}, n3)), t2.style = fe(n3));
  }
  let o2 = g(e2) ? 1 : Zi(e2) ? 128 : In(e2) ? 64 : v(e2) ? 4 : h(e2) ? 2 : 0;
  return X(e2, t2, n2, r2, i2, o2, a2, true);
}
function wa(e2) {
  return e2 ? Wt(e2) || ci(e2) ? c({}, e2) : e2 : null;
}
function Ta(e2, t2, n2 = false, r2 = false) {
  let { props: i2, ref: a2, patchFlag: o2, children: s2, transition: c2 } = e2, l2 = t2 ? ja(i2 || {}, t2) : i2, u2 = { __v_isVNode: true, __v_skip: true, type: e2.type, props: l2, key: l2 && xa(l2), ref: t2 && t2.ref ? n2 && a2 ? f(a2) ? a2.concat(Sa(t2)) : [a2, Sa(t2)] : Sa(t2) : a2, scopeId: e2.scopeId, slotScopeIds: e2.slotScopeIds, children: s2, target: e2.target, targetStart: e2.targetStart, targetAnchor: e2.targetAnchor, staticCount: e2.staticCount, shapeFlag: e2.shapeFlag, patchFlag: t2 && e2.type !== G ? o2 === -1 ? 16 : o2 | 16 : o2, dynamicProps: e2.dynamicProps, dynamicChildren: e2.dynamicChildren, appContext: e2.appContext, dirs: e2.dirs, transition: c2, component: e2.component, suspense: e2.suspense, ssContent: e2.ssContent && Ta(e2.ssContent), ssFallback: e2.ssFallback && Ta(e2.ssFallback), el: e2.el, anchor: e2.anchor, ctx: e2.ctx, ce: e2.ce };
  return c2 && r2 && or(u2, c2.clone(u2)), u2;
}
function Ea(e2 = ` `, t2 = 0) {
  return Z(da, null, e2, t2);
}
function Da(e2 = ``, t2 = false) {
  return t2 ? (J(), va(K, null, e2)) : Z(K, null, e2);
}
function Oa(e2) {
  return e2 == null || typeof e2 == `boolean` ? Z(K) : f(e2) ? Z(G, null, e2.slice()) : ya(e2) ? ka(e2) : Z(da, null, String(e2));
}
function ka(e2) {
  return e2.el === null && e2.patchFlag !== -1 || e2.memo ? e2 : Ta(e2);
}
function Aa(e2, t2) {
  let n2 = 0, { shapeFlag: r2 } = e2;
  if (t2 == null) t2 = null;
  else if (f(t2)) n2 = 16;
  else if (typeof t2 == `object`) if (r2 & 65) {
    let n3 = t2.default;
    n3 && (n3._c && (n3._d = false), Aa(e2, n3()), n3._c && (n3._d = true));
    return;
  } else {
    n2 = 32;
    let r3 = t2._;
    !r3 && !ci(t2) ? t2._ctx = z : r3 === 3 && z && (z.slots._ === 1 ? t2._ = 1 : (t2._ = 2, e2.patchFlag |= 1024));
  }
  else h(t2) ? (t2 = { default: t2, _ctx: z }, n2 = 32) : (t2 = String(t2), r2 & 64 ? (n2 = 16, t2 = [Ea(t2)]) : n2 = 8);
  e2.children = t2, e2.shapeFlag |= n2;
}
function ja(...e2) {
  let t2 = {};
  for (let n2 = 0; n2 < e2.length; n2++) {
    let r2 = e2[n2];
    for (let e3 in r2) if (e3 === `class`) t2.class !== r2.class && (t2.class = O([t2.class, r2.class]));
    else if (e3 === `style`) t2.style = fe([t2.style, r2.style]);
    else if (o(e3)) {
      let n3 = t2[e3], i2 = r2[e3];
      i2 && n3 !== i2 && !(f(n3) && n3.includes(i2)) && (t2[e3] = n3 ? [].concat(n3, i2) : i2);
    } else e3 !== `` && (t2[e3] = r2[e3]);
  }
  return t2;
}
function Ma(e2, t2, n2, r2 = null) {
  fn(e2, t2, 7, [n2, r2]);
}
var Na = $r();
var Pa = 0;
function Fa(e2, t2, r2) {
  let i2 = e2.type, a2 = (t2 ? t2.appContext : e2.appContext) || Na, o2 = { uid: Pa++, vnode: e2, type: i2, parent: t2, appContext: a2, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Ee(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t2 ? t2.provides : Object.create(a2.provides), ids: t2 ? t2.ids : [``, 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: mi(i2, a2), emitsOptions: Hi(i2, a2), emit: null, emitted: null, propsDefaults: n, inheritAttrs: i2.inheritAttrs, ctx: n, data: n, props: n, attrs: n, slots: n, refs: n, setupState: n, setupContext: null, suspense: r2, suspenseId: r2 ? r2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o2.ctx = { _: o2 }, o2.root = t2 ? t2.root : o2, o2.emit = Vi.bind(null, o2), e2.ce && e2.ce(o2), o2;
}
var Q = null;
var Ia = () => Q || z;
var La;
var Ra;
{
  let e2 = de(), t2 = (t3, n2) => {
    let r2;
    return (r2 = e2[t3]) || (r2 = e2[t3] = []), r2.push(n2), (e3) => {
      r2.length > 1 ? r2.forEach((t4) => t4(e3)) : r2[0](e3);
    };
  };
  La = t2(`__VUE_INSTANCE_SETTERS__`, (e3) => Q = e3), Ra = t2(`__VUE_SSR_SETTERS__`, (e3) => Ha = e3);
}
var za = (e2) => {
  let t2 = Q;
  return La(e2), e2.scope.on(), () => {
    e2.scope.off(), La(t2);
  };
};
var Ba = () => {
  Q && Q.scope.off(), La(null);
};
function Va(e2) {
  return e2.vnode.shapeFlag & 4;
}
var Ha = false;
function Ua(e2, t2 = false, n2 = false) {
  t2 && Ra(t2);
  let { props: r2, children: i2 } = e2.vnode, a2 = Va(e2);
  li(e2, r2, a2, t2), Si(e2, i2, n2);
  let o2 = a2 ? Wa(e2, t2) : void 0;
  return t2 && Ra(false), o2;
}
function Wa(e2, t2) {
  var n2;
  let r2 = e2.type;
  e2.accessCache = /* @__PURE__ */ Object.create(null), e2.proxy = new Proxy(e2.ctx, Ir);
  let { setup: i2 } = r2;
  if (i2) {
    Ke();
    let n3 = e2.setupContext = i2.length > 1 ? Xa(e2) : null, r3 = za(e2), a2 = dn(i2, e2, 0, [e2.props, n3]), o2 = y(a2);
    if (qe(), r3(), (o2 || e2.sp) && !pr(e2) && cr(e2), o2) {
      if (a2.then(Ba, Ba), t2) return a2.then((n4) => {
        Ga(e2, n4, t2);
      }).catch((t3) => {
        pn(t3, e2, 0);
      });
      e2.asyncDep = a2;
    } else Ga(e2, a2, t2);
  } else Ja(e2, t2);
}
function Ga(e2, t2, n2) {
  h(t2) ? e2.type.__ssrInlineRender ? e2.ssrRender = t2 : e2.render = t2 : v(t2) && (e2.setupState = Qt(t2)), Ja(e2, n2);
}
var Ka;
var qa;
function Ja(e2, t2, n2) {
  let r2 = e2.type;
  if (!e2.render) {
    if (!t2 && Ka && !r2.render) {
      let t3 = r2.template || Wr(e2).template;
      if (t3) {
        let { isCustomElement: n3, compilerOptions: i2 } = e2.appContext.config, { delimiters: a2, compilerOptions: o2 } = r2, s2 = c(c({ isCustomElement: n3, delimiters: a2 }, i2), o2);
        r2.render = Ka(t3, s2);
      }
    }
    e2.render = r2.render || i, qa && qa(e2);
  }
  {
    let t3 = za(e2);
    Ke();
    try {
      Br(e2);
    } finally {
      qe(), t3();
    }
  }
}
var Ya = { get(e2, t2) {
  return j(e2, `get`, ``), e2[t2];
} };
function Xa(e2) {
  let t2 = (t3) => {
    e2.exposed = t3 || {};
  };
  return { attrs: new Proxy(e2.attrs, Ya), slots: e2.slots, emit: e2.emit, expose: t2 };
}
function Za(e2) {
  return e2.exposed ? e2.exposeProxy ||= new Proxy(Qt(Gt(e2.exposed)), { get(t2, n2) {
    if (n2 in t2) return t2[n2];
    if (n2 in Pr) return Pr[n2](e2);
  }, has(e3, t2) {
    return t2 in e3 || t2 in Pr;
  } }) : e2.proxy;
}
function Qa(e2) {
  return h(e2) && `__vccOpts` in e2;
}
var $ = (e2, t2) => {
  let n2 = rn(e2, t2, Ha);
  return n2;
};
function $a(e2, t2, n2) {
  let r2 = arguments.length;
  return r2 === 2 ? v(t2) && !f(t2) ? ya(t2) ? Z(e2, null, [t2]) : Z(e2, t2) : Z(e2, null, t2) : (r2 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : r2 === 3 && ya(n2) && (n2 = [n2]), Z(e2, t2, n2));
}
var eo = `3.5.13`;
var to;
var no = typeof window < `u` && window.trustedTypes;
if (no) try {
  to = no.createPolicy(`vue`, { createHTML: (e2) => e2 });
} catch {
}
var ro = to ? (e2) => to.createHTML(e2) : (e2) => e2;
var io = `http://www.w3.org/2000/svg`;
var ao = `http://www.w3.org/1998/Math/MathML`;
var oo = typeof document < `u` ? document : null;
var so = oo && oo.createElement(`template`);
var co = { insert: (e2, t2, n2) => {
  t2.insertBefore(e2, n2 || null);
}, remove: (e2) => {
  let t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}, createElement: (e2, t2, n2, r2) => {
  let i2 = t2 === `svg` ? oo.createElementNS(io, e2) : t2 === `mathml` ? oo.createElementNS(ao, e2) : n2 ? oo.createElement(e2, { is: n2 }) : oo.createElement(e2);
  return e2 === `select` && r2 && r2.multiple != null && i2.setAttribute(`multiple`, r2.multiple), i2;
}, createText: (e2) => oo.createTextNode(e2), createComment: (e2) => oo.createComment(e2), setText: (e2, t2) => {
  e2.nodeValue = t2;
}, setElementText: (e2, t2) => {
  e2.textContent = t2;
}, parentNode: (e2) => e2.parentNode, nextSibling: (e2) => e2.nextSibling, querySelector: (e2) => oo.querySelector(e2), setScopeId(e2, t2) {
  e2.setAttribute(t2, ``);
}, insertStaticContent(e2, t2, n2, r2, i2, a2) {
  let o2 = n2 ? n2.previousSibling : t2.lastChild;
  if (i2 && (i2 === a2 || i2.nextSibling)) for (; t2.insertBefore(i2.cloneNode(true), n2), !(i2 === a2 || !(i2 = i2.nextSibling)); ) ;
  else {
    so.innerHTML = ro(r2 === `svg` ? `<svg>${e2}</svg>` : r2 === `mathml` ? `<math>${e2}</math>` : e2);
    let i3 = so.content;
    if (r2 === `svg` || r2 === `mathml`) {
      let e3 = i3.firstChild;
      for (; e3.firstChild; ) i3.appendChild(e3.firstChild);
      i3.removeChild(e3);
    }
    t2.insertBefore(i3, n2);
  }
  return [o2 ? o2.nextSibling : t2.firstChild, n2 ? n2.previousSibling : t2.lastChild];
} };
var lo = `transition`;
var uo = `animation`;
var fo = Symbol(`_vtc`);
var po = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
var mo = c({}, Zn, po);
var ho = (e2) => (e2.displayName = `Transition`, e2.props = mo, e2);
var go = ho((e2, { slots: t2 }) => $a(tr, yo(e2), t2));
var _o = (e2, t2 = []) => {
  f(e2) ? e2.forEach((e3) => e3(...t2)) : e2 && e2(...t2);
};
var vo = (e2) => e2 ? f(e2) ? e2.some((e3) => e3.length > 1) : e2.length > 1 : false;
function yo(e2) {
  let t2 = {};
  for (let n3 in e2) n3 in po || (t2[n3] = e2[n3]);
  if (e2.css === false) return t2;
  let { name: n2 = `v`, type: r2, duration: i2, enterFromClass: a2 = `${n2}-enter-from`, enterActiveClass: o2 = `${n2}-enter-active`, enterToClass: s2 = `${n2}-enter-to`, appearFromClass: l2 = a2, appearActiveClass: u2 = o2, appearToClass: d2 = s2, leaveFromClass: f2 = `${n2}-leave-from`, leaveActiveClass: p2 = `${n2}-leave-active`, leaveToClass: m2 = `${n2}-leave-to` } = e2, h2 = bo(i2), g2 = h2 && h2[0], _2 = h2 && h2[1], { onBeforeEnter: v2, onEnter: y2, onEnterCancelled: b2, onLeave: x2, onLeaveCancelled: S2, onBeforeAppear: C2 = v2, onAppear: w2 = y2, onAppearCancelled: T2 = b2 } = t2, ee2 = (e3, t3, n3, r3) => {
    e3._enterCancelled = r3, Co(e3, t3 ? d2 : s2), Co(e3, t3 ? u2 : o2), n3 && n3();
  }, te2 = (e3, t3) => {
    e3._isLeaving = false, Co(e3, f2), Co(e3, m2), Co(e3, p2), t3 && t3();
  }, E2 = (e3) => (t3, n3) => {
    let i3 = e3 ? w2 : y2, o3 = () => ee2(t3, e3, n3);
    _o(i3, [t3, o3]), wo(() => {
      Co(t3, e3 ? l2 : a2), So(t3, e3 ? d2 : s2), vo(i3) || Eo(t3, r2, g2, o3);
    });
  };
  return c(t2, { onBeforeEnter(e3) {
    _o(v2, [e3]), So(e3, a2), So(e3, o2);
  }, onBeforeAppear(e3) {
    _o(C2, [e3]), So(e3, l2), So(e3, u2);
  }, onEnter: E2(false), onAppear: E2(true), onLeave(e3, t3) {
    e3._isLeaving = true;
    let n3 = () => te2(e3, t3);
    So(e3, f2), e3._enterCancelled ? (So(e3, p2), Ao()) : (Ao(), So(e3, p2)), wo(() => {
      e3._isLeaving && (Co(e3, f2), So(e3, m2), vo(x2) || Eo(e3, r2, _2, n3));
    }), _o(x2, [e3, n3]);
  }, onEnterCancelled(e3) {
    ee2(e3, false, void 0, true), _o(b2, [e3]);
  }, onAppearCancelled(e3) {
    ee2(e3, true, void 0, true), _o(T2, [e3]);
  }, onLeaveCancelled(e3) {
    te2(e3), _o(S2, [e3]);
  } });
}
function bo(e2) {
  if (e2 == null) return null;
  if (v(e2)) return [xo(e2.enter), xo(e2.leave)];
  {
    let t2 = xo(e2);
    return [t2, t2];
  }
}
function xo(e2) {
  let t2 = le(e2);
  return t2;
}
function So(e2, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e2.classList.add(t3)), (e2[fo] || (e2[fo] = /* @__PURE__ */ new Set())).add(t2);
}
function Co(e2, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e2.classList.remove(t3));
  let n2 = e2[fo];
  n2 && (n2.delete(t2), n2.size || (e2[fo] = void 0));
}
function wo(e2) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e2);
  });
}
var To = 0;
function Eo(e2, t2, n2, r2) {
  let i2 = e2._endId = ++To, a2 = () => {
    i2 === e2._endId && r2();
  };
  if (n2 != null) return setTimeout(a2, n2);
  let { type: o2, timeout: s2, propCount: c2 } = Do(e2, t2);
  if (!o2) return r2();
  let l2 = o2 + `end`, u2 = 0, d2 = () => {
    e2.removeEventListener(l2, f2), a2();
  }, f2 = (t3) => {
    t3.target === e2 && ++u2 >= c2 && d2();
  };
  setTimeout(() => {
    u2 < c2 && d2();
  }, s2 + 1), e2.addEventListener(l2, f2);
}
function Do(e2, t2) {
  let n2 = window.getComputedStyle(e2), r2 = (e3) => (n2[e3] || ``).split(`, `), i2 = r2(`${lo}Delay`), a2 = r2(`${lo}Duration`), o2 = Oo(i2, a2), s2 = r2(`${uo}Delay`), c2 = r2(`${uo}Duration`), l2 = Oo(s2, c2), u2 = null, d2 = 0, f2 = 0;
  t2 === lo ? o2 > 0 && (u2 = lo, d2 = o2, f2 = a2.length) : t2 === uo ? l2 > 0 && (u2 = uo, d2 = l2, f2 = c2.length) : (d2 = Math.max(o2, l2), u2 = d2 > 0 ? o2 > l2 ? lo : uo : null, f2 = u2 ? u2 === lo ? a2.length : c2.length : 0);
  let p2 = u2 === lo && /\b(transform|all)(,|$)/.test(r2(`${lo}Property`).toString());
  return { type: u2, timeout: d2, propCount: f2, hasTransform: p2 };
}
function Oo(e2, t2) {
  for (; e2.length < t2.length; ) e2 = e2.concat(e2);
  return Math.max(...t2.map((t3, n2) => ko(t3) + ko(e2[n2])));
}
function ko(e2) {
  return e2 === `auto` ? 0 : Number(e2.slice(0, -1).replace(`,`, `.`)) * 1e3;
}
function Ao() {
  return document.body.offsetHeight;
}
function jo(e2, t2, n2) {
  let r2 = e2[fo];
  r2 && (t2 = (t2 ? [t2, ...r2] : [...r2]).join(` `)), t2 == null ? e2.removeAttribute(`class`) : n2 ? e2.setAttribute(`class`, t2) : e2.className = t2;
}
var Mo = Symbol(`_vod`);
var No = Symbol(`_vsh`);
var Po = { beforeMount(e2, { value: t2 }, { transition: n2 }) {
  e2[Mo] = e2.style.display === `none` ? `` : e2.style.display, n2 && t2 ? n2.beforeEnter(e2) : Fo(e2, t2);
}, mounted(e2, { value: t2 }, { transition: n2 }) {
  n2 && t2 && n2.enter(e2);
}, updated(e2, { value: t2, oldValue: n2 }, { transition: r2 }) {
  !t2 != !n2 && (r2 ? t2 ? (r2.beforeEnter(e2), Fo(e2, true), r2.enter(e2)) : r2.leave(e2, () => {
    Fo(e2, false);
  }) : Fo(e2, t2));
}, beforeUnmount(e2, { value: t2 }) {
  Fo(e2, t2);
} };
function Fo(e2, t2) {
  e2.style.display = t2 ? e2[Mo] : `none`, e2[No] = !t2;
}
var Io = Symbol(``);
function Lo(e2) {
  let t2 = Ia();
  if (!t2) return;
  let n2 = t2.ut = (n3 = e2(t2.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t2.uid}"]`)).forEach((e3) => zo(e3, n3));
  }, r2 = () => {
    let r3 = e2(t2.proxy);
    t2.ce ? zo(t2.ce, r3) : Ro(t2.subTree, r3), n2(r3);
  };
  Cr(() => {
    Tn(r2);
  }), Sr(() => {
    W(r2, i, { flush: `post` });
    let e3 = new MutationObserver(r2);
    e3.observe(t2.subTree.el.parentNode, { childList: true }), Er(() => e3.disconnect());
  });
}
function Ro(e2, t2) {
  if (e2.shapeFlag & 128) {
    let n2 = e2.suspense;
    e2 = n2.activeBranch, n2.pendingBranch && !n2.isHydrating && n2.effects.push(() => {
      Ro(n2.activeBranch, t2);
    });
  }
  for (; e2.component; ) e2 = e2.component.subTree;
  if (e2.shapeFlag & 1 && e2.el) zo(e2.el, t2);
  else if (e2.type === G) e2.children.forEach((e3) => Ro(e3, t2));
  else if (e2.type === fa) {
    let { el: n2, anchor: r2 } = e2;
    for (; n2 && (zo(n2, t2), n2 !== r2); ) n2 = n2.nextSibling;
  }
}
function zo(e2, t2) {
  if (e2.nodeType === 1) {
    let n2 = e2.style, r2 = ``;
    for (let e3 in t2) n2.setProperty(`--${e3}`, t2[e3]), r2 += `--${e3}: ${t2[e3]};`;
    n2[Io] = r2;
  }
}
var Bo = /(^|;)\s*display\s*:/;
function Vo(e2, t2, n2) {
  let r2 = e2.style, i2 = g(n2), a2 = false;
  if (n2 && !i2) {
    if (t2) if (g(t2)) for (let e3 of t2.split(`;`)) {
      let t3 = e3.slice(0, e3.indexOf(`:`)).trim();
      n2[t3] ?? Uo(r2, t3, ``);
    }
    else for (let e3 in t2) n2[e3] ?? Uo(r2, e3, ``);
    for (let e3 in n2) e3 === `display` && (a2 = true), Uo(r2, e3, n2[e3]);
  } else if (i2) {
    if (t2 !== n2) {
      let e3 = r2[Io];
      e3 && (n2 += `;` + e3), r2.cssText = n2, a2 = Bo.test(n2);
    }
  } else t2 && e2.removeAttribute(`style`);
  Mo in e2 && (e2[Mo] = a2 ? r2.display : ``, e2[No] && (r2.display = `none`));
}
var Ho = /\s*!important$/;
function Uo(e2, t2, n2) {
  if (f(n2)) n2.forEach((n3) => Uo(e2, t2, n3));
  else if (n2 ??= ``, t2.startsWith(`--`)) e2.setProperty(t2, n2);
  else {
    let r2 = Ko(e2, t2);
    Ho.test(n2) ? e2.setProperty(re(r2), n2.replace(Ho, ``), `important`) : e2[r2] = n2;
  }
}
var Wo = [`Webkit`, `Moz`, `ms`];
var Go = {};
function Ko(e2, t2) {
  let n2 = Go[t2];
  if (n2) return n2;
  let r2 = E(t2);
  if (r2 !== `filter` && r2 in e2) return Go[t2] = r2;
  r2 = ie(r2);
  for (let n3 = 0; n3 < Wo.length; n3++) {
    let i2 = Wo[n3] + r2;
    if (i2 in e2) return Go[t2] = i2;
  }
  return t2;
}
var qo = `http://www.w3.org/1999/xlink`;
function Jo(e2, t2, n2, r2, i2, a2 = ve(t2)) {
  r2 && t2.startsWith(`xlink:`) ? n2 == null ? e2.removeAttributeNS(qo, t2.slice(6, t2.length)) : e2.setAttributeNS(qo, t2, n2) : n2 == null || a2 && !be(n2) ? e2.removeAttribute(t2) : e2.setAttribute(t2, a2 ? `` : _(n2) ? String(n2) : n2);
}
function Yo(e2, t2, n2, r2, i2) {
  if (t2 === `innerHTML` || t2 === `textContent`) {
    n2 != null && (e2[t2] = t2 === `innerHTML` ? ro(n2) : n2);
    return;
  }
  let a2 = e2.tagName;
  if (t2 === `value` && a2 !== `PROGRESS` && !a2.includes(`-`)) {
    let r3 = a2 === `OPTION` ? e2.getAttribute(`value`) || `` : e2.value, i3 = n2 == null ? e2.type === `checkbox` ? `on` : `` : String(n2);
    (r3 !== i3 || !(`_value` in e2)) && (e2.value = i3), n2 ?? e2.removeAttribute(t2), e2._value = n2;
    return;
  }
  let o2 = false;
  if (n2 === `` || n2 == null) {
    let r3 = typeof e2[t2];
    r3 === `boolean` ? n2 = be(n2) : n2 == null && r3 === `string` ? (n2 = ``, o2 = true) : r3 === `number` && (n2 = 0, o2 = true);
  }
  try {
    e2[t2] = n2;
  } catch {
  }
  o2 && e2.removeAttribute(i2 || t2);
}
function Xo(e2, t2, n2, r2) {
  e2.addEventListener(t2, n2, r2);
}
function Zo(e2, t2, n2, r2) {
  e2.removeEventListener(t2, n2, r2);
}
var Qo = Symbol(`_vei`);
function $o(e2, t2, n2, r2, i2 = null) {
  let a2 = e2[Qo] || (e2[Qo] = {}), o2 = a2[t2];
  if (r2 && o2) o2.value = r2;
  else {
    let [n3, s2] = ts(t2);
    if (r2) {
      let o3 = a2[t2] = ss(r2, i2);
      Xo(e2, n3, o3, s2);
    } else o2 && (Zo(e2, n3, o2, s2), a2[t2] = void 0);
  }
}
var es = /(?:Once|Passive|Capture)$/;
function ts(e2) {
  let t2;
  if (es.test(e2)) {
    t2 = {};
    let n3;
    for (; n3 = e2.match(es); ) e2 = e2.slice(0, e2.length - n3[0].length), t2[n3[0].toLowerCase()] = true;
  }
  let n2 = e2[2] === `:` ? e2.slice(3) : re(e2.slice(2));
  return [n2, t2];
}
var ns = 0;
var rs = Promise.resolve();
var os = () => ns || (rs.then(() => ns = 0), ns = Date.now());
function ss(e2, t2) {
  let n2 = (e3) => {
    if (!e3._vts) e3._vts = Date.now();
    else if (e3._vts <= n2.attached) return;
    fn(cs(e3, n2.value), t2, 5, [e3]);
  };
  return n2.value = e2, n2.attached = os(), n2;
}
function cs(e2, t2) {
  if (f(t2)) {
    let n2 = e2.stopImmediatePropagation;
    return e2.stopImmediatePropagation = () => {
      n2.call(e2), e2._stopped = true;
    }, t2.map((e3) => (t3) => !t3._stopped && e3 && e3(t3));
  } else return t2;
}
var ls = (e2) => e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) > 96 && e2.charCodeAt(2) < 123;
var us = (e2, t2, n2, r2, i2, a2) => {
  let c2 = i2 === `svg`;
  t2 === `class` ? jo(e2, r2, c2) : t2 === `style` ? Vo(e2, n2, r2) : o(t2) ? s(t2) || $o(e2, t2, n2, r2, a2) : (t2[0] === `.` ? (t2 = t2.slice(1), true) : t2[0] === `^` ? (t2 = t2.slice(1), false) : ds(e2, t2, r2, c2)) ? (Yo(e2, t2, r2), !e2.tagName.includes(`-`) && (t2 === `value` || t2 === `checked` || t2 === `selected`) && Jo(e2, t2, r2, c2, a2, t2 !== `value`)) : e2._isVueCE && (/[A-Z]/.test(t2) || !g(r2)) ? Yo(e2, E(t2), r2, a2, t2) : (t2 === `true-value` ? e2._trueValue = r2 : t2 === `false-value` && (e2._falseValue = r2), Jo(e2, t2, r2, c2));
};
function ds(e2, t2, n2, r2) {
  if (r2) return !!(t2 === `innerHTML` || t2 === `textContent` || t2 in e2 && ls(t2) && h(n2));
  if (t2 === `spellcheck` || t2 === `draggable` || t2 === `translate` || t2 === `form` || t2 === `list` && e2.tagName === `INPUT` || t2 === `type` && e2.tagName === `TEXTAREA`) return false;
  if (t2 === `width` || t2 === `height`) {
    let t3 = e2.tagName;
    if (t3 === `IMG` || t3 === `VIDEO` || t3 === `CANVAS` || t3 === `SOURCE`) return false;
  }
  return ls(t2) && g(n2) ? false : t2 in e2;
}
var fs = /* @__PURE__ */ new WeakMap();
var ps = /* @__PURE__ */ new WeakMap();
var ms = Symbol(`_moveCb`);
var hs = Symbol(`_enterCb`);
var gs = (e2) => (delete e2.props.mode, e2);
var _s = gs({ name: `TransitionGroup`, props: c({}, mo, { tag: String, moveClass: String }), setup(e2, { slots: t2 }) {
  let n2 = Ia(), r2 = Xn(), i2, a2;
  return wr(() => {
    if (!i2.length) return;
    let t3 = e2.moveClass || `${e2.name || `v`}-move`;
    if (!Ss(i2[0].el, n2.vnode.el, t3)) return;
    i2.forEach(ys), i2.forEach(bs);
    let r3 = i2.filter(xs);
    Ao(), r3.forEach((e3) => {
      let n3 = e3.el, r4 = n3.style;
      So(n3, t3), r4.transform = r4.webkitTransform = r4.transitionDuration = ``;
      let i3 = n3[ms] = (e4) => {
        e4 && e4.target !== n3 || (!e4 || /transform$/.test(e4.propertyName)) && (n3.removeEventListener(`transitionend`, i3), n3[ms] = null, Co(n3, t3));
      };
      n3.addEventListener(`transitionend`, i3);
    });
  }), () => {
    let o2 = N(e2), s2 = yo(o2), c2 = o2.tag || G;
    if (i2 = [], a2) for (let e3 = 0; e3 < a2.length; e3++) {
      let t3 = a2[e3];
      t3.el && t3.el instanceof Element && (i2.push(t3), or(t3, rr(t3, s2, r2, n2)), fs.set(t3, t3.el.getBoundingClientRect()));
    }
    a2 = t2.default ? sr(t2.default()) : [];
    for (let e3 = 0; e3 < a2.length; e3++) {
      let t3 = a2[e3];
      t3.key != null && or(t3, rr(t3, s2, r2, n2));
    }
    return Z(c2, null, a2);
  };
} });
var vs = _s;
function ys(e2) {
  let t2 = e2.el;
  t2[ms] && t2[ms](), t2[hs] && t2[hs]();
}
function bs(e2) {
  ps.set(e2, e2.el.getBoundingClientRect());
}
function xs(e2) {
  let t2 = fs.get(e2), n2 = ps.get(e2), r2 = t2.left - n2.left, i2 = t2.top - n2.top;
  if (r2 || i2) {
    let t3 = e2.el.style;
    return t3.transform = t3.webkitTransform = `translate(${r2}px,${i2}px)`, t3.transitionDuration = `0s`, e2;
  }
}
function Ss(e2, t2, n2) {
  let r2 = e2.cloneNode(), i2 = e2[fo];
  i2 && i2.forEach((e3) => {
    e3.split(/\s+/).forEach((e4) => e4 && r2.classList.remove(e4));
  }), n2.split(/\s+/).forEach((e3) => e3 && r2.classList.add(e3)), r2.style.display = `none`;
  let a2 = t2.nodeType === 1 ? t2 : t2.parentNode;
  a2.appendChild(r2);
  let { hasTransform: o2 } = Do(r2);
  return a2.removeChild(r2), o2;
}
var Cs = Symbol(`_assign`);
var ws = c({ patchProp: us }, co);
var Ts;
function Es() {
  return Ts ||= Ti(ws);
}
var Ds = (...e2) => {
  let t2 = Es().createApp(...e2), { mount: n2 } = t2;
  return t2.mount = (e3) => {
    let r2 = ks(e3);
    if (!r2) return;
    let i2 = t2._component;
    !h(i2) && !i2.render && !i2.template && (i2.template = r2.innerHTML), r2.nodeType === 1 && (r2.textContent = ``);
    let a2 = n2(r2, false, Os(r2));
    return r2 instanceof Element && (r2.removeAttribute(`v-cloak`), r2.setAttribute(`data-v-app`, ``)), a2;
  }, t2;
};
function Os(e2) {
  if (e2 instanceof SVGElement) return `svg`;
  if (typeof MathMLElement == `function` && e2 instanceof MathMLElement) return `mathml`;
}
function ks(e2) {
  if (g(e2)) {
    let t2 = document.querySelector(e2);
    return t2;
  }
  return e2;
}
var As;
var js = (e2) => As = e2;
var Ms = Symbol();
function Ns(e2) {
  return e2 && typeof e2 == `object` && Object.prototype.toString.call(e2) === `[object Object]` && typeof e2.toJSON != `function`;
}
var Ps;
(function(e2) {
  e2.direct = `direct`, e2.patchObject = `patch object`, e2.patchFunction = `patch function`;
})(Ps ||= {});
var Fs = typeof window < `u`;
var Is = (() => typeof window == `object` && window.window === window ? window : typeof self == `object` && self.self === self ? self : typeof global == `object` && global.global === global ? global : typeof globalThis == `object` ? globalThis : { HTMLElement: null })();
function Ls(e2, { autoBom: t2 = false } = {}) {
  return t2 && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e2.type) ? new Blob([`\uFEFF`, e2], { type: e2.type }) : e2;
}
function Rs(e2, t2, n2) {
  let r2 = new XMLHttpRequest();
  r2.open(`GET`, e2), r2.responseType = `blob`, r2.onload = function() {
    Us(r2.response, t2, n2);
  }, r2.onerror = function() {
    console.error(`could not download file`);
  }, r2.send();
}
function zs(e2) {
  let t2 = new XMLHttpRequest();
  t2.open(`HEAD`, e2, false);
  try {
    t2.send();
  } catch {
  }
  return t2.status >= 200 && t2.status <= 299;
}
function Bs(e2) {
  try {
    e2.dispatchEvent(new MouseEvent(`click`));
  } catch {
    let t2 = new MouseEvent(`click`, { bubbles: true, cancelable: true, view: window, detail: 0, screenX: 80, screenY: 20, clientX: 80, clientY: 20, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: null });
    e2.dispatchEvent(t2);
  }
}
var Vs = typeof navigator == `object` ? navigator : { userAgent: `` };
var Hs = (() => /Macintosh/.test(Vs.userAgent) && /AppleWebKit/.test(Vs.userAgent) && !/Safari/.test(Vs.userAgent))();
var Us = Fs ? typeof HTMLAnchorElement < `u` && `download` in HTMLAnchorElement.prototype && !Hs ? Ws : `msSaveOrOpenBlob` in Vs ? Gs : Ks : () => {
};
function Ws(e2, t2 = `download`, n2) {
  let r2 = document.createElement(`a`);
  r2.download = t2, r2.rel = `noopener`, typeof e2 == `string` ? (r2.href = e2, r2.origin === location.origin ? Bs(r2) : zs(r2.href) ? Rs(e2, t2, n2) : (r2.target = `_blank`, Bs(r2))) : (r2.href = URL.createObjectURL(e2), setTimeout(function() {
    URL.revokeObjectURL(r2.href);
  }, 4e4), setTimeout(function() {
    Bs(r2);
  }, 0));
}
function Gs(e2, t2 = `download`, n2) {
  if (typeof e2 == `string`) if (zs(e2)) Rs(e2, t2, n2);
  else {
    let t3 = document.createElement(`a`);
    t3.href = e2, t3.target = `_blank`, setTimeout(function() {
      Bs(t3);
    });
  }
  else navigator.msSaveOrOpenBlob(Ls(e2, n2), t2);
}
function Ks(e2, t2, n2, r2) {
  if (r2 ||= open(``, `_blank`), r2 && (r2.document.title = r2.document.body.innerText = `downloading...`), typeof e2 == `string`) return Rs(e2, t2, n2);
  let i2 = e2.type === `application/octet-stream`, a2 = /constructor/i.test(String(Is.HTMLElement)) || `safari` in Is, o2 = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((o2 || i2 && a2 || Hs) && typeof FileReader < `u`) {
    let t3 = new FileReader();
    t3.onloadend = function() {
      let e3 = t3.result;
      if (typeof e3 != `string`) throw r2 = null, Error(`Wrong reader.result type`);
      e3 = o2 ? e3 : e3.replace(/^data:[^;]*;/, `data:attachment/file;`), r2 ? r2.location.href = e3 : location.assign(e3), r2 = null;
    }, t3.readAsDataURL(e2);
  } else {
    let t3 = URL.createObjectURL(e2);
    r2 ? r2.location.assign(t3) : location.href = t3, r2 = null, setTimeout(function() {
      URL.revokeObjectURL(t3);
    }, 4e4);
  }
}
var { assign: qs } = Object;
function Js() {
  let e2 = De(true), t2 = e2.run(() => I({})), n2 = [], r2 = [], i2 = Gt({ install(e3) {
    js(i2), i2._a = e3, e3.provide(Ms, i2), e3.config.globalProperties.$pinia = i2, r2.forEach((e4) => n2.push(e4)), r2 = [];
  }, use(e3) {
    return this._a ? n2.push(e3) : r2.push(e3), this;
  }, _p: n2, _a: null, _e: e2, _s: /* @__PURE__ */ new Map(), state: t2 });
  return i2;
}
var Ys = () => {
};
function Xs(e2, t2, n2, r2 = Ys) {
  e2.push(t2);
  let i2 = () => {
    let n3 = e2.indexOf(t2);
    n3 > -1 && (e2.splice(n3, 1), r2());
  };
  return !n2 && Oe() && ke(i2), i2;
}
function Zs(e2, ...t2) {
  e2.slice().forEach((e3) => {
    e3(...t2);
  });
}
var Qs = (e2) => e2();
var $s = Symbol();
var ec = Symbol();
function tc(e2, t2) {
  for (let n2 in e2 instanceof Map && t2 instanceof Map ? t2.forEach((t3, n3) => e2.set(n3, t3)) : e2 instanceof Set && t2 instanceof Set && t2.forEach(e2.add, e2), t2) {
    if (!t2.hasOwnProperty(n2)) continue;
    let r2 = t2[n2], i2 = e2[n2];
    Ns(i2) && Ns(r2) && e2.hasOwnProperty(n2) && !F(r2) && !Ht(r2) ? e2[n2] = tc(i2, r2) : e2[n2] = r2;
  }
  return e2;
}
var nc = Symbol();
function rc(e2) {
  return !Ns(e2) || !Object.prototype.hasOwnProperty.call(e2, nc);
}
var { assign: ic } = Object;
function ac(e2) {
  return !!(F(e2) && e2.effect);
}
function oc(e2, t2, n2, r2) {
  let { state: i2, actions: a2, getters: o2 } = t2, s2 = n2.state.value[e2], c2;
  function l2() {
    s2 || (n2.state.value[e2] = i2 ? i2() : {});
    let t3 = $t(n2.state.value[e2]);
    return ic(t3, a2, Object.keys(o2 || {}).reduce((t4, r3) => (t4[r3] = Gt($(() => {
      js(n2);
      let t5 = n2._s.get(e2);
      return o2[r3].call(t5, t5);
    })), t4), {}));
  }
  return c2 = sc(e2, l2, t2, n2, r2, true), c2;
}
function sc(e2, t2, n2 = {}, r2, i2, a2) {
  let o2, s2 = ic({ actions: {} }, n2), c2 = { deep: true }, l2, u2, d2 = [], f2 = [], p2, m2 = r2.state.value[e2];
  !a2 && !m2 && (r2.state.value[e2] = {});
  let h2 = I({}), g2;
  function _2(t3) {
    let n3;
    l2 = u2 = false, typeof t3 == `function` ? (t3(r2.state.value[e2]), n3 = { type: Ps.patchFunction, storeId: e2, events: p2 }) : (tc(r2.state.value[e2], t3), n3 = { type: Ps.patchObject, payload: t3, storeId: e2, events: p2 });
    let i3 = g2 = Symbol();
    xn().then(() => {
      g2 === i3 && (l2 = true);
    }), u2 = true, Zs(d2, n3, r2.state.value[e2]);
  }
  let v2 = a2 ? function() {
    let { state: e3 } = n2, t3 = e3 ? e3() : {};
    this.$patch((e4) => {
      ic(e4, t3);
    });
  } : Ys;
  function y2() {
    o2.stop(), d2 = [], f2 = [], r2._s.delete(e2);
  }
  let b2 = (t3, n3 = ``) => {
    if ($s in t3) return t3[ec] = n3, t3;
    let i3 = function() {
      js(r2);
      let n4 = Array.from(arguments), a3 = [], o3 = [];
      function s3(e3) {
        a3.push(e3);
      }
      function c3(e3) {
        o3.push(e3);
      }
      Zs(f2, { args: n4, name: i3[ec], store: C2, after: s3, onError: c3 });
      let l3;
      try {
        l3 = t3.apply(this && this.$id === e2 ? this : C2, n4);
      } catch (e3) {
        throw Zs(o3, e3), e3;
      }
      return l3 instanceof Promise ? l3.then((e3) => (Zs(a3, e3), e3)).catch((e3) => (Zs(o3, e3), Promise.reject(e3))) : (Zs(a3, l3), l3);
    };
    return i3[$s] = true, i3[ec] = n3, i3;
  }, x2 = Gt({ actions: {}, getters: {}, state: [], hotState: h2 }), S2 = { _p: r2, $id: e2, $onAction: Xs.bind(null, f2), $patch: _2, $reset: v2, $subscribe(t3, n3 = {}) {
    let i3 = Xs(d2, t3, n3.detached, () => a3()), a3 = o2.run(() => W(() => r2.state.value[e2], (r3) => {
      (n3.flush === `sync` ? u2 : l2) && t3({ storeId: e2, type: Ps.direct, events: p2 }, r3);
    }, ic({}, c2, n3)));
    return i3;
  }, $dispose: y2 }, C2 = Rt(S2);
  r2._s.set(e2, C2);
  let w2 = r2._a && r2._a.runWithContext || Qs, T2 = w2(() => r2._e.run(() => (o2 = De()).run(() => t2({ action: b2 }))));
  for (let t3 in T2) {
    let n3 = T2[t3];
    if (F(n3) && !ac(n3) || Ht(n3)) a2 || (m2 && rc(n3) && (F(n3) ? n3.value = m2[t3] : tc(n3, m2[t3])), r2.state.value[e2][t3] = n3);
    else if (typeof n3 == `function`) {
      let e3 = b2(n3, t3);
      T2[t3] = e3, s2.actions[t3] = n3;
    }
  }
  return ic(C2, T2), ic(N(C2), T2), Object.defineProperty(C2, `$state`, { get: () => r2.state.value[e2], set: (e3) => {
    _2((t3) => {
      ic(t3, e3);
    });
  } }), r2._p.forEach((e3) => {
    ic(C2, o2.run(() => e3({ store: C2, app: r2._a, pinia: r2, options: s2 })));
  }), m2 && a2 && n2.hydrate && n2.hydrate(C2.$state, m2), l2 = true, u2 = true, C2;
}
function cc(e2, t2, n2) {
  let r2, i2 = typeof t2 == `function`;
  r2 = i2 ? n2 : t2;
  function a2(n3, a3) {
    let o2 = ai();
    n3 ||= o2 ? ii(Ms, null) : null, n3 && js(n3), n3 = As, n3._s.has(e2) || (i2 ? sc(e2, t2, r2, n3) : oc(e2, r2, n3));
    let s2 = n3._s.get(e2);
    return s2;
  }
  return a2.$id = e2, a2;
}
var lc = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var uc = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var dc = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function fc(e2, t2) {
  if (e2 === `__proto__` || e2 === `constructor` && t2 && typeof t2 == `object` && `prototype` in t2) {
    pc(e2);
    return;
  }
  return t2;
}
function pc(e2) {
  console.warn(`[destr] Dropping "${e2}" key to prevent prototype pollution.`);
}
function mc(e2, t2 = {}) {
  if (typeof e2 != `string`) return e2;
  if (e2[0] === `"` && e2[e2.length - 1] === `"` && e2.indexOf(`\\`) === -1) return e2.slice(1, -1);
  let n2 = e2.trim();
  if (n2.length <= 9) switch (n2.toLowerCase()) {
    case `true`:
      return true;
    case `false`:
      return false;
    case `undefined`:
      return;
    case `null`:
      return null;
    case `nan`:
      return NaN;
    case `infinity`:
      return 1 / 0;
    case `-infinity`:
      return -1 / 0;
  }
  if (!dc.test(e2)) {
    if (t2.strict) throw SyntaxError(`[destr] Invalid JSON`);
    return e2;
  }
  try {
    if (lc.test(e2) || uc.test(e2)) {
      if (t2.strict) throw Error(`[destr] Possible prototype pollution`);
      return JSON.parse(e2, fc);
    }
    return JSON.parse(e2);
  } catch (n3) {
    if (t2.strict) throw n3;
    return e2;
  }
}
function hc(e2, t2) {
  if (e2 == null) return;
  let n2 = e2;
  for (let e3 = 0; e3 < t2.length; e3++) {
    if (n2 == null || n2[t2[e3]] == null) return;
    n2 = n2[t2[e3]];
  }
  return n2;
}
function gc(e2, t2, n2) {
  if (n2.length === 0) return t2;
  let r2 = n2[0];
  return n2.length > 1 && (t2 = gc(typeof e2 != `object` || !e2 || !Object.prototype.hasOwnProperty.call(e2, r2) ? Number.isInteger(Number(n2[1])) ? [] : {} : e2[r2], t2, Array.prototype.slice.call(n2, 1))), Number.isInteger(Number(r2)) && Array.isArray(e2) ? e2.slice()[r2] : Object.assign({}, e2, { [r2]: t2 });
}
function _c(e2, t2) {
  if (e2 == null || t2.length === 0) return e2;
  if (t2.length === 1) {
    if (e2 == null) return e2;
    if (Number.isInteger(t2[0]) && Array.isArray(e2)) return Array.prototype.slice.call(e2, 0).splice(t2[0], 1);
    let n2 = {};
    for (let t3 in e2) n2[t3] = e2[t3];
    return delete n2[t2[0]], n2;
  }
  if (e2[t2[0]] == null) {
    if (Number.isInteger(t2[0]) && Array.isArray(e2)) return Array.prototype.concat.call([], e2);
    let n2 = {};
    for (let t3 in e2) n2[t3] = e2[t3];
    return n2;
  }
  return gc(e2, _c(e2[t2[0]], Array.prototype.slice.call(t2, 1)), [t2[0]]);
}
function vc(e2, t2) {
  return t2.map((e3) => e3.split(`.`)).map((t3) => [t3, hc(e2, t3)]).filter((e3) => e3[1] !== void 0).reduce((e3, t3) => gc(e3, t3[1], t3[0]), {});
}
function yc(e2, t2) {
  return t2.map((e3) => e3.split(`.`)).reduce((e3, t3) => _c(e3, t3), e2);
}
function bc(e2, { storage: t2, serializer: n2, key: r2, debug: i2, pick: a2, omit: o2, beforeHydrate: s2, afterHydrate: c2 }, l2, u2 = true) {
  try {
    u2 && s2?.(l2);
    let i3 = t2.getItem(r2);
    if (i3) {
      let t3 = n2.deserialize(i3), r3 = a2 ? vc(t3, a2) : t3, s3 = o2 ? yc(r3, o2) : r3;
      e2.$patch(s3);
    }
    u2 && c2?.(l2);
  } catch (e3) {
    i2 && console.error(`[pinia-plugin-persistedstate]`, e3);
  }
}
function xc(e2, { storage: t2, serializer: n2, key: r2, debug: i2, pick: a2, omit: o2 }) {
  try {
    let i3 = a2 ? vc(e2, a2) : e2, s2 = o2 ? yc(i3, o2) : i3, c2 = n2.serialize(s2);
    t2.setItem(r2, c2);
  } catch (e3) {
    i2 && console.error(`[pinia-plugin-persistedstate]`, e3);
  }
}
function Sc(e2, t2, n2) {
  let { pinia: r2, store: i2, options: { persist: a2 = n2 } } = e2;
  if (!a2) return;
  if (!(i2.$id in r2.state.value)) {
    let e3 = r2._s.get(i2.$id.replace(`__hot:`, ``));
    e3 && Promise.resolve().then(() => e3.$persist());
    return;
  }
  let o2 = Array.isArray(a2) ? a2 : a2 === true ? [{}] : [a2], s2 = o2.map(t2);
  i2.$hydrate = ({ runHooks: t3 = true } = {}) => {
    s2.forEach((n3) => {
      bc(i2, n3, e2, t3);
    });
  }, i2.$persist = () => {
    s2.forEach((e3) => {
      xc(i2.$state, e3);
    });
  }, s2.forEach((t3) => {
    bc(i2, t3, e2), i2.$subscribe((e3, n3) => xc(n3, t3), { detached: true });
  });
}
function Cc(e2 = {}) {
  return function(t2) {
    Sc(t2, (n2) => ({ key: (e2.key ? e2.key : (e3) => e3)(n2.key ?? t2.store.$id), debug: n2.debug ?? e2.debug ?? false, serializer: n2.serializer ?? e2.serializer ?? { serialize: (e3) => JSON.stringify(e3), deserialize: (e3) => mc(e3) }, storage: n2.storage ?? e2.storage ?? window.localStorage, beforeHydrate: n2.beforeHydrate, afterHydrate: n2.afterHydrate, pick: n2.pick, omit: n2.omit }), e2.auto ?? false);
  };
}
var wc = Cc();
function Tc(e2) {
  return Oe() ? (ke(e2), true) : false;
}
var Ec = typeof window < `u` && typeof document < `u`;
var Dc = typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var Oc = Object.prototype.toString;
var kc = (e2) => Oc.call(e2) === `[object Object]`;
var Ac = () => {
};
var jc = Mc();
function Mc() {
  var e2, t2;
  return Ec && (e2 = window == null ? void 0 : window.navigator)?.userAgent && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || (t2 = window == null ? void 0 : window.navigator)?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Nc(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function Pc(e2) {
  let t2 = /* @__PURE__ */ Object.create(null);
  return (n2) => {
    let r2 = t2[n2];
    return r2 || (t2[n2] = e2(n2));
  };
}
var Fc = /\B([A-Z])/g;
var Ic = Pc((e2) => e2.replace(Fc, `-$1`).toLowerCase());
var Lc = /-(\w)/g;
var Rc = Pc((e2) => e2.replace(Lc, (e3, t2) => t2 ? t2.toUpperCase() : ``));
function zc(e2, t2, n2) {
  return W(e2, t2, { ...n2, immediate: true });
}
var Bc = Ec ? window : void 0;
var Vc = Ec ? window.document : void 0;
var Hc = Ec ? window.navigator : void 0;
var Uc = Ec ? window.location : void 0;
function Wc(e2) {
  var t2;
  let n2 = Xt(e2);
  return (t2 = n2?.$el) ?? n2;
}
function Gc(...e2) {
  let t2 = [], n2 = () => {
    t2.forEach((e3) => e3()), t2.length = 0;
  }, r2 = (e3, t3, n3, r3) => (e3.addEventListener(t3, n3, r3), () => e3.removeEventListener(t3, n3, r3)), i2 = $(() => {
    let t3 = Nc(Xt(e2[0])).filter((e3) => e3 != null);
    return t3.every((e3) => typeof e3 != `string`) ? t3 : void 0;
  }), a2 = zc(() => {
    var t3, n3;
    return [(n3 = (t3 = i2.value)?.map((e3) => Wc(e3))) ?? [Bc].filter((e3) => e3 != null), Nc(Xt(i2.value ? e2[1] : e2[0])), Nc(L(i2.value ? e2[2] : e2[1])), Xt(i2.value ? e2[3] : e2[2])];
  }, ([e3, i3, a3, o3]) => {
    if (n2(), !e3?.length || !i3?.length || !a3?.length) return;
    let s2 = kc(o3) ? { ...o3 } : o3;
    t2.push(...e3.flatMap((e4) => i3.flatMap((t3) => a3.map((n3) => r2(e4, t3, n3, s2)))));
  }, { flush: `post` }), o2 = () => {
    a2(), n2();
  };
  return Tc(n2), o2;
}
var Kc = false;
function qc(e2, t2, n2 = {}) {
  let { window: r2 = Bc, ignore: i2 = [], capture: a2 = true, detectIframe: o2 = false, controls: s2 = false } = n2;
  if (!r2) return s2 ? { stop: Ac, cancel: Ac, trigger: Ac } : Ac;
  if (jc && !Kc) {
    Kc = true;
    let e3 = { passive: true };
    Array.from(r2.document.body.children).forEach((t3) => Gc(t3, `click`, Ac, e3)), Gc(r2.document.documentElement, `click`, Ac, e3);
  }
  let c2 = true, l2 = (e3) => Xt(i2).some((t3) => {
    if (typeof t3 == `string`) return Array.from(r2.document.querySelectorAll(t3)).some((t4) => t4 === e3.target || e3.composedPath().includes(t4));
    {
      let n3 = Wc(t3);
      return n3 && (e3.target === n3 || e3.composedPath().includes(n3));
    }
  });
  function u2(e3) {
    let t3 = Xt(e3);
    return t3 && t3.$.subTree.shapeFlag === 16;
  }
  function d2(e3, t3) {
    let n3 = Xt(e3), r3 = n3.$.subTree && n3.$.subTree.children;
    return r3 == null || !Array.isArray(r3) ? false : r3.some((e4) => e4.el === t3.target || t3.composedPath().includes(e4.el));
  }
  let f2 = (n3) => {
    let r3 = Wc(e2);
    if (n3.target != null && !(!(r3 instanceof Element) && u2(e2) && d2(e2, n3)) && !(!r3 || r3 === n3.target || n3.composedPath().includes(r3))) {
      if (`detail` in n3 && n3.detail === 0 && (c2 = !l2(n3)), !c2) {
        c2 = true;
        return;
      }
      t2(n3);
    }
  }, p2 = false, m2 = [Gc(r2, `click`, (e3) => {
    p2 || (p2 = true, setTimeout(() => {
      p2 = false;
    }, 0), f2(e3));
  }, { passive: true, capture: a2 }), Gc(r2, `pointerdown`, (t3) => {
    let n3 = Wc(e2);
    c2 = !l2(t3) && !!(n3 && !t3.composedPath().includes(n3));
  }, { passive: true }), o2 && Gc(r2, `blur`, (n3) => {
    setTimeout(() => {
      var i3;
      let a3 = Wc(e2);
      (i3 = r2.document.activeElement)?.tagName === `IFRAME` && !a3?.contains(r2.document.activeElement) && t2(n3);
    }, 0);
  }, { passive: true })].filter(Boolean), h2 = () => m2.forEach((e3) => e3());
  return s2 ? { stop: h2, cancel: () => {
    c2 = false;
  }, trigger: (e3) => {
    c2 = true, f2(e3), c2 = false;
  } } : h2;
}
var Jc = Symbol(`vueuse-ssr-width`);
var Yc = [{ max: 6e4, value: 1e3, name: `second` }, { max: 276e4, value: 6e4, name: `minute` }, { max: 72e6, value: 36e5, name: `hour` }, { max: 5184e5, value: 864e5, name: `day` }, { max: 24192e5, value: 6048e5, name: `week` }, { max: 28512e6, value: 2592e6, name: `month` }, { max: 1 / 0, value: 31536e6, name: `year` }];
function Xc(e2, t2, { signal: n2, edges: r2 } = {}) {
  let i2, a2 = null, o2 = r2 != null && r2.includes(`leading`), s2 = r2 == null || r2.includes(`trailing`), c2 = () => {
    a2 !== null && (e2.apply(i2, a2), i2 = void 0, a2 = null);
  }, l2 = () => {
    s2 && c2(), p2();
  }, u2 = null, d2 = () => {
    u2 != null && clearTimeout(u2), u2 = setTimeout(() => {
      u2 = null, l2();
    }, t2);
  }, f2 = () => {
    u2 !== null && (clearTimeout(u2), u2 = null);
  }, p2 = () => {
    f2(), i2 = void 0, a2 = null;
  }, m2 = () => {
    f2(), c2();
  }, h2 = function(...e3) {
    if (n2?.aborted) return;
    i2 = this, a2 = e3;
    let t3 = u2 == null;
    d2(), o2 && t3 && c2();
  };
  return h2.schedule = d2, h2.cancel = p2, h2.flush = m2, n2?.addEventListener(`abort`, p2, { once: true }), h2;
}
function Zc(e2, t2, { signal: n2, edges: r2 = [`leading`, `trailing`] } = {}) {
  let i2 = null, a2 = Xc(e2, t2, { signal: n2, edges: r2 }), o2 = function(...e3) {
    i2 == null ? i2 = Date.now() : Date.now() - i2 >= t2 && (i2 = Date.now(), a2.cancel()), a2(...e3);
  };
  return o2.cancel = a2.cancel, o2.flush = a2.flush, o2;
}
var Qc = `https://api.injahow.cn/meting/`;
var $c = class {
  constructor(t2, n2, r2) {
    e.defineProperty(this, `url`, void 0), e.defineProperty(this, `playlist`, void 0), e.defineProperty(this, `accessibleURL`, void 0), e.defineProperty(this, `index`, void 0), e.defineProperty(this, `lastIdx`, void 0), e.defineProperty(this, `name`, void 0), e.defineProperty(this, `sIndex`, void 0), e.defineProperty(this, `_type`, void 0), this._type = `playlist`, this.url = t2 ?? ``, this.playlist = [], this.index = 0, this.lastIdx = 0, this.name = n2 ?? ``, this.sIndex = r2 ?? 0;
  }
  parserURL() {
    let e2 = null;
    if ([[`music.163.com.*song.*id=(\\d+)`, `netease`, `song`], [`music.163.com.*album.*id=(\\d+)`, `netease`, `album`], [`music.163.com.*artist.*id=(\\d+)`, `netease`, `artist`], [`music.163.com.*playlist.*id=(\\d+)`, `netease`, `playlist`], [`music.163.com.*discover/toplist.*id=(\\d+)`, `netease`, `playlist`], [`y.qq.com.*song/(\\w+)(.html)?`, `tencent`, `song`], [`y.qq.com.*album/(\\w+)(.html)?`, `tencent`, `album`], [`y.qq.com.*singer/(\\w+)(.html)?`, `tencent`, `artist`], [`y.qq.com.*playsquare/(\\w+)(.html)?`, `tencent`, `playlist`], [`y.qq.com.*playlist/(\\w+)(.html)?`, `tencent`, `playlist`]].forEach((t2) => {
      let n2 = new RegExp(t2[0]), r2 = n2.exec(this.url);
      r2 !== null && (e2 = { id: r2[1], provider: t2[1], type: t2[2] });
    }), e2) return this.accessibleURL = e2, e2;
    throw Error(`Unsupported URL: ${this.url}`);
  }
  async fetchPlaylist() {
    if (!this.accessibleURL) throw Error(`Playlist URL is not accessible`);
    let e2 = await fetch(`${Qc}?type=${this.accessibleURL.type}&id=${this.accessibleURL.id}&server=${this.accessibleURL.provider}`);
    this.playlist = await e2.json();
  }
  getCurrentSong() {
    return this.playlist[this.index];
  }
  getNextSong() {
    return this.lastIdx = this.index, this.index = (this.index + 1) % this.playlist.length, this.getCurrentSong();
  }
  getPrevSong() {
    return this.lastIdx = this.index, this.index = (this.index - 1 + this.playlist.length) % this.playlist.length, this.getCurrentSong();
  }
  getRandSong() {
    return this.lastIdx = this.index, this.index = Math.floor(Math.random() * this.playlist.length), this.getCurrentSong();
  }
  getCycleSong() {
    return this.getCurrentSong();
  }
};
function el(e2) {
  let t2 = mc(e2);
  return t2.playlists = t2.playlists.map((e3) => {
    let t3 = new $c();
    return Object.assign(t3, e3), t3;
  }), t2;
}
var tl = cc(`playing`, { state: () => Rt({ showPlayer: false, playing: false, currentTime: 0, songDuration: 0, currentId: 0, currentPlaylistIndex: 0, playlists: [], mode: `order`, enableVolume: true, lastPage: `` }), persist: { serializer: { deserialize: el, serialize: JSON.stringify }, storage: globalThis.sessionStorage }, actions: { paused() {
  this.playing = false;
}, start() {
  this.playing = true;
}, toggle() {
  this.playing = !this.playing;
}, setCurrentTime(e2) {
  this.currentTime = e2;
}, setCurrentId(e2) {
  this.currentId = e2;
}, setCurrentPlaylist(e2) {
  this.currentPlaylistIndex = e2;
} }, getters: { currentPlaylist(e2) {
  return e2.playlists[e2.currentPlaylistIndex] ?? null;
}, currentSong(e2) {
  var t2;
  let n2 = e2.playlists[e2.currentPlaylistIndex];
  return (n2 == null || (t2 = n2.getCurrentSong) == null ? void 0 : t2.call(n2)) ?? null;
}, currentPlaylists(e2) {
  return e2.playlists ?? null;
} } });
var nl = V({ __name: `BackBtn`, setup(e2) {
  let t2 = tl();
  async function n2() {
    var e3;
    if (t2.currentTime = 0, t2.mode === `order`) (e3 = t2.currentPlaylist)?.getPrevSong();
    else {
      var n3;
      let e4 = t2.currentPlaylist;
      e4.index === e4.lastIdx ? (n3 = t2.currentPlaylist)?.getPrevSong() : e4.index = e4.lastIdx;
    }
  }
  return (e3, t3) => (J(), Y(`div`, { class: `i-ri:skip-back-line w-18% text-xl`, onClick: n2 }));
} });
var rl = nl;
var il = V({ __name: `ForwardBtn`, setup(e2) {
  let t2 = tl();
  async function n2() {
    var e3, n3, r2;
    t2.currentTime = 0, t2.mode === `order` ? (e3 = t2.currentPlaylist)?.getNextSong() : t2.mode === `random` ? (n3 = t2.currentPlaylist)?.getRandSong() : (r2 = t2.currentPlaylist)?.getCurrentSong();
  }
  return W(() => t2.currentTime, () => {
    t2.currentTime >= t2.songDuration && (n2(), t2.currentTime = 0);
  }), (e3, t3) => (J(), Y(`div`, { class: `i-ri:skip-forward-line w-18% text-xl`, onClick: n2 }));
} });
var al = il;
var ol = V({ __name: `OrderBtn`, setup(e2) {
  let t2 = tl();
  function n2() {
    t2.mode = t2.mode === `order` ? `random` : t2.mode === `random` ? `loop` : `order`;
  }
  return (e3, r2) => (J(), Y(`div`, { class: O([`w-18% text-xl`, { "i-ri:order-play-line": L(t2).mode === `order`, "i-ri:shuffle-line": L(t2).mode === `random`, "i-ri:loop-right-line": L(t2).mode === `loop` }]), onClick: n2 }, null, 2));
} });
var sl = ol;
var cl = V({ __name: `PlayBtn`, setup(e2) {
  let t2 = tl();
  function n2() {
    t2.toggle(), t2.currentId++;
  }
  return (e3, r2) => (J(), Y(`div`, { class: O([`w-18% text-4xl`, { "i-ri:play-circle-fill": !L(t2).playing, "i-ri:pause-circle-fill": L(t2).playing }]), onClick: n2 }, null, 2));
} });
var ll = cl;
var ul = V({ __name: `VolumeBtn`, setup(e2) {
  let t2 = tl(), n2 = $(() => t2.enableVolume);
  function r2() {
    t2.enableVolume = !t2.enableVolume;
  }
  return (e3, t3) => (J(), Y(`div`, { class: O([`w-18% text-xl`, { "i-ri:volume-up-line": n2.value, "i-ri:volume-mute-line": !n2.value }]), onClick: r2 }, null, 2));
} });
var dl = ul;
var fl = { class: `controller flex cursor-pointer items-center justify-around text-align-center text-sm` };
var pl = V({ __name: `AudioController`, setup(e2) {
  return (e3, t2) => (J(), Y(`div`, fl, [Z(sl), Z(rl), Z(ll), Z(al), Z(dl)]));
} });
var ml = pl;
var hl = { class: `tabs relative block` };
var gl = { class: `nav h-[2.6875rem] border-[0.0625rem] border-b border-[var(--player-background)]` };
var _l = { class: `flex overflow-x-auto whitespace-nowrap p-0` };
var vl = [`data-index`, `onClick`];
var yl = { key: 0, class: `relative m-[0.625rem_0_0] h-[12.5rem] list-none overflow-y-auto p-[0.3125rem_0] text-[0.8125em]` };
var bl = [`onClick`];
var xl = { class: `name float-left` };
var Sl = [`data-dtime`, `data-ptime`];
var Cl = V({ __name: `ListTab`, setup(e2) {
  let t2 = tl(), n2 = t2.playlists, r2 = I(t2.currentPlaylistIndex), i2 = $(() => r2), a2 = I(0), o2 = I([]);
  Sr(() => {
    t2.playlists.forEach((e3) => {
      o2.value.push(e3.name);
    });
  });
  function s2(e3, n3) {
    t2.currentTime = 0, t2.setCurrentPlaylist(e3), t2.currentPlaylist && (t2.currentPlaylist.index = n3);
  }
  function c2(e3) {
    let t3 = Math.floor(e3 / 60), n3 = Math.floor(e3 % 60);
    return `${t3}:${n3 < 10 ? `0` : ``}${n3}`;
  }
  let l2 = $(() => c2(t2.songDuration)), u2 = $(() => c2(t2.currentTime));
  return W(() => t2.currentTime, () => {
    a2.value = t2.currentTime / t2.songDuration * 100;
  }), (e3, c3) => (J(), Y(`div`, hl, [X(`div`, gl, [X(`ul`, _l, [(J(true), Y(G, null, Mr(o2.value, (e4, t3) => (J(), Y(`li`, { key: e4, class: O([`relative m-0 inline-block cursor-pointer border-none p-[0.3125rem_1.25rem]`, { active: t3 === i2.value.value }]), "data-index": t3, onClick: (e5) => r2.value = t3 }, Se(e4), 11, vl))), 128))])]), Z(vs, { name: `fade` }, { default: Mn(() => [(J(true), Y(G, null, Mr(L(n2), (e4) => (J(), Y(`div`, { key: e4.name }, [e4.sIndex === i2.value.value ? (J(), Y(`ol`, yl, [(J(true), Y(G, null, Mr(e4.playlist, (n3, r3) => (J(), Y(`li`, { key: n3.name, class: O([`relative h-[2rem] flex cursor-pointer overflow-hidden p-[0.3125rem_0.9375rem_0.3125rem_1.5625rem] hover:bg-[var(--player-background)]`, { current: e4.index === r3 && L(t2).currentPlaylistIndex === i2.value.value, error: false }]), onClick: (t3) => s2(e4.sIndex, r3) }, [X(`span`, { class: O([`info block w-full`, { "pr-[5rem] select-none": e4.index === r3 && L(t2).currentPlaylistIndex === i2.value.value }]) }, [X(`span`, xl, Se(n3.name), 1), X(`span`, { class: O([`artist float-right ml-[0.625rem] text-[var(--secondary-text)]`, { hidden: e4.index === r3 && L(t2).currentPlaylistIndex === i2.value.value }]) }, Se(n3.artist), 3)], 2), e4.index === r3 && L(t2).currentPlaylistIndex === i2.value.value ? (J(), Y(`div`, { key: 0, class: `progress`, "data-dtime": l2.value, "data-ptime": u2.value }, [X(`div`, { class: `bar absolute left-0 top-0 h-full rounded-[0.8125em] bg-[var(--primary-color-a)] transition-width duration-250 ease-linear`, style: fe({ width: `${a2.value}%` }) }, null, 4)], 8, Sl)) : Da(``, true)], 10, bl))), 128))])) : Da(``, true)]))), 128))]), _: 1 })]));
} });
var wl = (e2, t2) => {
  let n2 = e2.__vccOpts || e2;
  for (let [e3, r2] of t2) n2[e3] = r2;
  return n2;
};
var Tl = wl(Cl, [[`__scopeId`, `data-v-bbcb6336`]]);
var El = { class: `playlist` };
var Dl = V({ __name: `PlayListTabs`, setup(e2) {
  return (e3, t2) => (J(), Y(`div`, El, [Z(Tl)]));
} });
var Ol = wl(Dl, [[`__scopeId`, `data-v-fe477696`]]);
var kl = { class: `disc relative max-h-48 max-w-48 p-6` };
var Al = [`src`];
var jl = V({ __name: `AudioCover`, setup(e2) {
  let t2 = tl(), n2 = I(t2.playing);
  W(() => t2.playing, async (e3) => {
    n2.value = e3;
  });
  let r2 = $(() => {
    var e3;
    return (e3 = t2.currentSong)?.pic ?? ``;
  });
  return (e3, t3) => (J(), Y(`div`, { class: O([`cover relative flex flex-shrink-0 cursor-pointer items-center justify-center before:absolute before:z-1 before:content-empty`, { playing: n2.value }]) }, [X(`div`, kl, [Z(go, { name: `blurx`, mode: `out-in` }, { default: Mn(() => [(J(), Y(`div`, { key: r2.value, class: `h-6rem w-6rem overflow-hidden rounded-50%` }, [X(`img`, { src: r2.value, alt: `music cover`, class: `max-h-full max-w-full` }, null, 8, Al)]))]), _: 1 })])], 2));
} });
var Ml = wl(jl, [[`__scopeId`, `data-v-877c7169`]]);
function Nl(e2) {
  let t2 = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/, n2 = t2.exec(e2);
  if (!n2) throw Error(`Invalid lyric line format`);
  let r2 = Number.parseInt(n2[1]) * 60, i2 = Number.parseInt(n2[2]), a2 = n2[3] ? Number.parseInt(n2[3]) / (n2[3].length === 2 ? 100 : 1e3) : 0;
  return r2 + i2 + a2;
}
var Pl = class {
  constructor(t2) {
    e.defineProperty(this, `url`, void 0), e.defineProperty(this, `rawContent`, void 0), e.defineProperty(this, `lyrics`, void 0), this.url = t2, this.rawContent = ``, this.lyrics = [];
  }
  async fetchLyric() {
    this.rawContent = await (await fetch(this.url)).text();
  }
  parseLyric() {
    let e2 = this.rawContent.split(`
`).filter(Boolean), t2 = e2.map((e3) => {
      let t3 = Nl(e3), n2 = e3.replace(/\[.*?\]/, ``).trim();
      return { start: t3, text: n2 };
    });
    for (let e3 = 0; e3 < t2.length; e3++) {
      let { start: n2, text: r2 } = t2[e3], i2 = e3 === t2.length - 1 ? 1 / 0 : t2[e3 + 1].start;
      this.lyrics.push({ text: r2, start: n2, end: i2 });
    }
  }
};
var Fl = { class: `lrc relative mt-1.25 max-h-16 overflow-hidden text-center text-3` };
var Il = { class: `inner w-full transition-all duration-500 transition-ease-out` };
var Ll = V({ __name: `MusicLRC`, setup(e2) {
  let t2 = I(0), n2 = I([]), r2 = tl(), i2 = $(() => {
    var e3;
    return (e3 = r2.currentSong)?.lrc ?? ``;
  }), a2 = /* @__PURE__ */ new WeakMap();
  Ii(async () => {
    let e3 = i2.value;
    if (e3 && r2.currentSong) {
      if (a2.has(r2.currentSong)) {
        var o3;
        t2.value = 0, n2.value = (o3 = a2.get(r2.currentSong))?.lyrics ?? [];
        return;
      }
      let i3 = new Pl(e3);
      await i3.fetchLyric(), i3.parseLyric(), n2.value = i3.lyrics, a2.set(r2.currentSong, i3);
    }
  });
  let o2 = I([]), s2 = 0;
  return W(() => r2.currentTime, (e3) => {
    let t3 = n2.value.findIndex((t4) => e3 >= t4.start && e3 <= t4.end);
    t3 !== -1 && t3 !== s2 && (s2 = t3, o2.value = n2.value.slice(s2, Math.min(s2 + 4, n2.value.length)));
  }), W(() => {
    var e3;
    return (e3 = r2.currentSong)?.lrc;
  }, () => {
    o2.value = [], t2.value = 0;
  }), (e3, n3) => (J(), Y(`div`, Fl, [X(`div`, Il, [Z(vs, { name: `list`, tag: `ul`, class: `p-0` }, { default: Mn(() => [(J(true), Y(G, null, Mr(o2.value, (e4, n4) => (J(), Y(`li`, { key: e4.start, class: `list-none` }, [X(`p`, { class: O({ current: n4 === t2.value }) }, Se(e4.text), 3)]))), 128))]), _: 1 })])]));
} });
var Rl = wl(Ll, [[`__scopeId`, `data-v-893ea419`]]);
var zl = { class: `w-full flex flex-col overflow-hidden text-ellipsis` };
var Bl = V({ __name: `AudioInfo`, setup(e2) {
  let t2 = tl(), n2 = $(() => {
    var e3;
    return (e3 = t2.currentSong)?.name ?? ``;
  }), r2 = $(() => {
    var e3;
    return (e3 = t2.currentSong)?.artist ?? ``;
  });
  return (e3, t3) => (J(), Y(`div`, zl, [Z(go, { name: `fade`, mode: `out-in` }, { default: Mn(() => [(J(), Y(`h4`, { key: n2.value, class: `m-0 max-h-12 flex justify-center overflow-hidden text-ellipsis p-0` }, Se(n2.value), 1))]), _: 1 }), Z(go, { name: `fade`, mode: `out-in` }, { default: Mn(() => [(J(), Y(`span`, { key: r2.value, class: `flex justify-center text-3` }, Se(r2.value), 1))]), _: 1 }), (J(), va(ea, null, { default: Mn(() => [Z(Rl)]), fallback: Mn(() => t3[0] ||= [X(`div`, { class: `flex justify-center text-3` }, ` Loading... `, -1)]), _: 1 }))]));
} });
var Vl = wl(Bl, [[`__scopeId`, `data-v-a2be5427`]]);
var Hl = { class: `preview flex-col items-center pb-0 pl-2.5 pr-2.5 pt-5 md:flex md:flex-row md:pl-5 md:pr-5` };
var Ul = V({ __name: `AudioPreview`, setup(e2) {
  return (e3, t2) => (J(), Y(`div`, Hl, [Z(Ml), Z(Vl)]));
} });
var Wl = Ul;
var Gl = [`src`, `muted`];
var Kl = V({ __name: `AudioPlayer`, props: { showPlayer: { type: Boolean }, playlistURLs: {} }, async setup(e2) {
  let t2, n2, r2 = e2, i2 = tl(), a2 = lr(`audio`);
  Sr(() => {
    W(() => i2.currentId, async () => {
      a2.value !== null && (i2.playing ? (i2.mode === `loop` && (a2.value.loop = true), await a2.value.play()) : a2.value.pause());
    });
  }), i2.playlists.length === 0 && ([t2, n2] = Rr(async () => Promise.all(r2.playlistURLs.map(async (e3, t3) => {
    let n3 = new $c(e3.url, e3.name, t3);
    i2.playlists.push(n3), n3.parserURL(), await n3.fetchPlaylist();
  }))), await t2, n2());
  let o2 = Zc((e3) => {
    let t3 = e3.target.currentTime;
    i2.lastPage === window.location.pathname ? i2.setCurrentTime(t3) : (e3.target.currentTime = i2.currentTime, i2.lastPage = window.location.pathname), i2.songDuration = e3.target.duration || i2.songDuration;
  }, 250), s2 = $(() => {
    var e3;
    return (e3 = i2.currentSong)?.url ?? ``;
  }), c2 = lr(`target`), l2 = ii(`showBtnEl`), u2 = ii(`playBtnEl`);
  return qc(c2, () => i2.showPlayer = false, { ignore: [l2, u2] }), (e3, t3) => (J(), va(go, { name: `slideRight` }, { default: Mn(() => [Nn(X(`div`, { ref_key: `target`, ref: c2, class: `player-info border-radius-0.8rem fixed z-9 overflow-hidden rounded-xl` }, [Z(Wl), Z(ml), X(`audio`, { ref: `audio`, src: s2.value, muted: !L(i2).enableVolume, onTimeupdate: t3[0] ||= (...e4) => L(o2) && L(o2)(...e4), onCanplay: t3[1] ||= (e4) => L(i2).currentId++ }, null, 40, Gl), Z(Ol), X(`div`, { class: `absolute right-4 top-3 cursor-pointer text-3.25 hover:color-[var(--hover-btn)]`, onClick: t3[2] ||= (e4) => L(i2).showPlayer = false }, t3[3] ||= [X(`div`, { class: `i-ri-close-line text-5` }, null, -1)])], 512), [[Po, L(i2).showPlayer]])]), _: 1 }));
} });
var ql = wl(Kl, [[`__scopeId`, `data-v-7a52579d`]]);
var Jl = { styles: { light: { playerBorder: `#fdfdfd`, playerBackground: `alpha(#fdfdfd, 0.7)`, closeBtn: `#ccc`, primaryText: `#666`, secondaryText: `#999`, playListLine: `alpha(#000, 0.1)`, hoverBtn: `rgb(10,116,38)`, boxBackgroundShadow: `var(--playlist-line)`, primaryColor: `10,116,38` }, dark: { playerBorder: `#363636`, playerBackground: `alpha(#22222, 0.7)`, closeBtn: `#aaa`, primaryText: `#aaa`, secondaryText: `#aaa`, playListLine: `alpha(#fff, 0.1)`, hoverBtn: `rgb(10,116,38)`, boxBackgroundShadow: `var(--playlist-line)`, primaryColor: `10,116,38` } } };
var Yl = { styles: { light: { playerBorder: `#fdfdfd`, playerBackground: `alpha(#fdfdfd, 0.7)`, closeBtn: `#ccc`, primaryText: `#666`, secondaryText: `#999`, playListLine: `alpha(#000, 0.1)`, hoverBtn: `#ed6ea0`, boxBackgroundShadow: `var(--playlist-line)`, primaryColor: `233,84,107` }, dark: { playerBorder: `#363636`, playerBackground: `alpha(#22222, 0.7)`, closeBtn: `#aaa`, primaryText: `#aaa`, secondaryText: `#aaa`, playListLine: `alpha(#fff, 0.1)`, hoverBtn: `#ed6ea0`, boxBackgroundShadow: `var(--playlist-line)`, primaryColor: `233,84,107` } } };
var Xl = { nyx: Jl, shokax: Yl };
var Zl = V({ __name: `NyxPlayer`, props: { urls: {}, showBtn: {}, playBtn: {}, darkModeTarget: {}, preset: {}, styles: {} }, setup(e2) {
  let t2 = e2, n2 = tl(), r2 = I(null), i2 = I(null);
  ri(`showBtnEl`, r2), ri(`playBtnEl`, i2);
  function a2(e3) {
    r2.value = e3, e3.addEventListener(`click`, () => {
      n2.showPlayer = !n2.showPlayer;
    }), W(() => n2.showPlayer, () => {
      e3.dataset.show = n2.showPlayer ? `true` : `false`;
    }, { immediate: true });
  }
  function o2(e3) {
    i2.value = e3, e3.addEventListener(`click`, () => {
      n2.playing = !n2.playing, n2.currentId++, e3.dataset.play = n2.playing ? `true` : `false`;
    }), W(() => n2.playing, () => {
      e3.dataset.play = n2.playing ? `true` : `false`;
    }, { immediate: true });
  }
  Sr(() => {
    if (typeof t2.showBtn == `string`) {
      let e3 = document.querySelector(t2.showBtn);
      if (e3) a2(e3);
      else throw Error(`showBtn not found`);
    } else t2.showBtn && `value` in t2.showBtn && t2.showBtn.value instanceof HTMLElement ? W(t2.showBtn, (e3) => {
      e3 && a2(e3);
    }, { immediate: true }) : t2.showBtn instanceof HTMLElement ? a2(t2.showBtn) : W(() => t2.showBtn, (e3) => {
      e3 instanceof HTMLElement && a2(e3);
    }, { once: true });
    if (typeof t2.playBtn == `string`) {
      let e3 = document.querySelector(t2.playBtn);
      if (e3) o2(e3);
      else throw Error(`playBtn not found`);
    } else t2.playBtn && `value` in t2.playBtn && t2.playBtn.value instanceof HTMLElement ? W(t2.playBtn, (e3) => {
      e3 && o2(e3);
    }, { immediate: true }) : t2.playBtn instanceof HTMLElement ? o2(t2.playBtn) : W(() => t2.playBtn, (e3) => {
      e3 instanceof HTMLElement && o2(e3);
    }, { once: true });
  });
  let s2 = t2.styles || Xl.nyx;
  if (t2.preset) {
    let e3 = Xl[t2.preset];
    if (e3) Object.assign(s2, e3);
    else throw Error(`preset ${t2.preset} not found in official presets`);
  }
  let c2 = I(`light`);
  if (t2.darkModeTarget === `auto`) {
    let e3 = globalThis.matchMedia(`(prefers-color-scheme: dark)`);
    c2.value = e3.matches ? `dark` : `light`, e3.addEventListener(`change`, (e4) => {
      c2.value = e4.matches ? `dark` : `light`;
    });
  } else c2.value = `light`;
  return Lo(() => {
    let e3 = s2.styles[c2.value], t3 = Jl.styles[c2.value];
    return { "player-border": e3.playerBorder || t3.playerBorder, "close-btn": e3.closeBtn || t3.closeBtn, "secondary-text": e3.secondaryText || t3.secondaryText, "primary-text": e3.primaryText || t3.primaryText, "player-background": e3.playerBackground || t3.playerBackground, "playlist-line": e3.playListLine || t3.playListLine, "hover-btn": e3.hoverBtn || t3.hoverBtn, "box-bg-shadow": e3.boxBackgroundShadow || t3.boxBackgroundShadow, "primary-color": `rgb(${e3.primaryColor})` || `rgb(${t3.primaryColor})`, "primary-color-a": `rgba(${e3.primaryColor}, 0.3)` || `rgba(${t3.primaryColor}, 0.3)` };
  }), (e3, t3) => (J(), va(Gn, { to: `body` }, [(J(), va(ea, null, { default: Mn(() => [Z(ql, { id: `MusicPlayerRoot`, "playlist-u-r-ls": e3.urls, "show-player": L(n2).showPlayer }, null, 8, [`playlist-u-r-ls`, `show-player`])]), _: 1 }))]));
} });
var Ql = Zl;
function $l(e2, t2, n2, r2, i2, a2, o2) {
  if (!e2 || !t2) throw Error(`el and showBtn are required`);
  let s2 = document.querySelector(e2);
  if (!s2) throw Error(`el must be valid selectors`);
  let c2 = Ds(() => $a(Ql, { urls: n2, showBtn: t2, playBtn: r2, darkModeTarget: i2, preset: a2, styles: o2 }));
  c2.use(Js().use(wc)), c2.mount(s2);
}
export {
  $l as initPlayer
};
