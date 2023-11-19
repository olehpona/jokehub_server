var ct = Object.defineProperty;
var dt = (e, t, n) =>
  t in e
    ? ct(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var M = (e, t, n) => (dt(e, typeof t != "symbol" ? t + "" : t, n), n),
  ne = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  };
var be = (e, t, n) => (
    ne(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  Se = (e, t, n, r) => (
    ne(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  );
var N = (e, t, n) => (ne(e, t, "access private method"), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function Ue(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ut } = Object.prototype,
  { getPrototypeOf: pe } = Object,
  Q = ((e) => (t) => {
    const n = ut.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  B = (e) => ((e = e.toLowerCase()), (t) => Q(t) === e),
  Z = (e) => (t) => typeof t === e,
  { isArray: P } = Array,
  D = Z("undefined");
function ft(e) {
  return (
    e !== null &&
    !D(e) &&
    e.constructor !== null &&
    !D(e.constructor) &&
    L(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const qe = B("ArrayBuffer");
function mt(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && qe(e.buffer)),
    t
  );
}
const ht = Z("string"),
  L = Z("function"),
  He = Z("number"),
  Y = (e) => e !== null && typeof e == "object",
  pt = (e) => e === !0 || e === !1,
  $ = (e) => {
    if (Q(e) !== "object") return !1;
    const t = pe(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  yt = B("Date"),
  gt = B("File"),
  _t = B("Blob"),
  Et = B("FileList"),
  wt = (e) => Y(e) && L(e.pipe),
  bt = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (L(e.append) &&
          ((t = Q(e)) === "formdata" ||
            (t === "object" &&
              L(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  St = B("URLSearchParams"),
  kt = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function q(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), P(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (r = 0; r < i; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Me(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Je = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  ze = (e) => !D(e) && e !== Je;
function le() {
  const { caseless: e } = (ze(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Me(t, s)) || s;
      $(t[o]) && $(r)
        ? (t[o] = le(t[o], r))
        : $(r)
        ? (t[o] = le({}, r))
        : P(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && q(arguments[r], n);
  return t;
}
const Lt = (e, t, n, { allOwnKeys: r } = {}) => (
    q(
      t,
      (s, o) => {
        n && L(s) ? (e[o] = Ue(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Ot = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  At = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Bt = (e, t, n, r) => {
    let s, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && pe(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Rt = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  It = (e) => {
    if (!e) return null;
    if (P(e)) return e;
    let t = e.length;
    if (!He(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Tt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && pe(Uint8Array)),
  xt = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  vt = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Pt = B("HTMLFormElement"),
  Nt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  ke = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  jt = B("RegExp"),
  $e = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    q(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Ct = (e) => {
    $e(e, (t, n) => {
      if (L(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (L(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Ft = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return P(e) ? r(e) : r(String(e).split(t)), n;
  },
  Dt = () => {},
  Ut = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  re = "abcdefghijklmnopqrstuvwxyz",
  Le = "0123456789",
  Ve = { DIGIT: Le, ALPHA: re, ALPHA_DIGIT: re + re.toUpperCase() + Le },
  qt = (e = 16, t = Ve.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Ht(e) {
  return !!(
    e &&
    L(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Mt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Y(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = P(r) ? [] : {};
            return (
              q(r, (i, l) => {
                const f = n(i, s + 1);
                !D(f) && (o[l] = f);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Jt = B("AsyncFunction"),
  zt = (e) => e && (Y(e) || L(e)) && L(e.then) && L(e.catch),
  a = {
    isArray: P,
    isArrayBuffer: qe,
    isBuffer: ft,
    isFormData: bt,
    isArrayBufferView: mt,
    isString: ht,
    isNumber: He,
    isBoolean: pt,
    isObject: Y,
    isPlainObject: $,
    isUndefined: D,
    isDate: yt,
    isFile: gt,
    isBlob: _t,
    isRegExp: jt,
    isFunction: L,
    isStream: wt,
    isURLSearchParams: St,
    isTypedArray: Tt,
    isFileList: Et,
    forEach: q,
    merge: le,
    extend: Lt,
    trim: kt,
    stripBOM: Ot,
    inherits: At,
    toFlatObject: Bt,
    kindOf: Q,
    kindOfTest: B,
    endsWith: Rt,
    toArray: It,
    forEachEntry: xt,
    matchAll: vt,
    isHTMLForm: Pt,
    hasOwnProperty: ke,
    hasOwnProp: ke,
    reduceDescriptors: $e,
    freezeMethods: Ct,
    toObjectSet: Ft,
    toCamelCase: Nt,
    noop: Dt,
    toFiniteNumber: Ut,
    findKey: Me,
    global: Je,
    isContextDefined: ze,
    ALPHABET: Ve,
    generateString: qt,
    isSpecCompliantForm: Ht,
    toJSONObject: Mt,
    isAsyncFn: Jt,
    isThenable: zt,
  };
function y(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
a.inherits(y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Ke = y.prototype,
  We = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  We[e] = { value: e };
});
Object.defineProperties(y, We);
Object.defineProperty(Ke, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ke);
  return (
    a.toFlatObject(
      e,
      i,
      function (f) {
        return f !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    y.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const $t = null;
function ce(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ge(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Oe(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ge(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Vt(e) {
  return a.isArray(e) && !e.some(ce);
}
const Kt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ee(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, _) {
        return !a.isUndefined(_[h]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    f = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (a.isDate(m)) return m.toISOString();
    if (!f && a.isBlob(m))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(m) || a.isTypedArray(m)
      ? f && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function d(m, h, _) {
    let p = m;
    if (m && !_ && typeof m == "object") {
      if (a.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (a.isArray(m) && Vt(m)) ||
        ((a.isFileList(m) || a.endsWith(h, "[]")) && (p = a.toArray(m)))
      )
        return (
          (h = Ge(h)),
          p.forEach(function (I, lt) {
            !(a.isUndefined(I) || I === null) &&
              t.append(
                i === !0 ? Oe([h], lt, o) : i === null ? h : h + "[]",
                u(I)
              );
          }),
          !1
        );
    }
    return ce(m) ? !0 : (t.append(Oe(_, h, o), u(m)), !1);
  }
  const c = [],
    g = Object.assign(Kt, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: ce,
    });
  function w(m, h) {
    if (!a.isUndefined(m)) {
      if (c.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      c.push(m),
        a.forEach(m, function (p, k) {
          (!(a.isUndefined(p) || p === null) &&
            s.call(t, p, a.isString(k) ? k.trim() : k, h, g)) === !0 &&
            w(p, h ? h.concat(k) : [k]);
        }),
        c.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function Ae(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ye(e, t) {
  (this._pairs = []), e && ee(e, this, t);
}
const Xe = ye.prototype;
Xe.append = function (t, n) {
  this._pairs.push([t, n]);
};
Xe.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ae);
      }
    : Ae;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Wt(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Qe(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Wt,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new ye(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Gt {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Be = Gt,
  Ze = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Xt = typeof URLSearchParams < "u" ? URLSearchParams : ye,
  Qt = typeof FormData < "u" ? FormData : null,
  Zt = typeof Blob < "u" ? Blob : null,
  Yt = {
    isBrowser: !0,
    classes: { URLSearchParams: Xt, FormData: Qt, Blob: Zt },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ye = typeof window < "u" && typeof document < "u",
  en = ((e) => Ye && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  tn = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  nn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ye,
        hasStandardBrowserEnv: en,
        hasStandardBrowserWebWorkerEnv: tn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  A = { ...nn, ...Yt };
function rn(e, t) {
  return ee(
    e,
    new A.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return A.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function sn(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function on(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function et(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const l = Number.isFinite(+i),
      f = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      f
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !l)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = on(s[i])),
          !l)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(sn(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function an(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ge = {
  transitional: Ze,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s && s ? JSON.stringify(et(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return rn(t, this.formSerializer).toString();
        if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return ee(
            l ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), an(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ge.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: A.classes.FormData, Blob: A.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ge.headers[e] = {};
});
const _e = ge,
  ln = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  cn = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && ln[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Re = Symbol("internals");
function j(e) {
  return e && String(e).trim().toLowerCase();
}
function V(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(V) : String(e);
}
function dn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const un = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function se(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function fn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function mn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class te {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, u) {
      const d = j(f);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, d);
      (!c || s[c] === void 0 || u === !0 || (u === void 0 && s[c] !== !1)) &&
        (s[c || f] = V(l));
    }
    const i = (l, f) => a.forEach(l, (u, d) => o(u, d, f));
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : a.isString(t) && (t = t.trim()) && !un(t)
        ? i(cn(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = j(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return dn(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = j(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || se(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = j(i)), i)) {
        const l = a.findKey(r, i);
        l && (!n || se(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || se(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = V(s)), delete n[o];
          return;
        }
        const l = t ? fn(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = V(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Re] = this[Re] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const l = j(i);
      r[l] || (mn(s, i), (r[l] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
te.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
a.reduceDescriptors(te.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(te);
const R = te;
function oe(e, t) {
  const n = this || _e,
    r = t || n,
    s = R.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (l) {
      o = l.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function tt(e) {
  return !!(e && e.__CANCEL__);
}
function H(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
a.inherits(H, y, { __CANCEL__: !0 });
function hn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new y(
          "Request failed with status code " + n.status,
          [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const pn = A.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          a.isString(r) && i.push("path=" + r),
          a.isString(s) && i.push("domain=" + s),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function yn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function gn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nt(e, t) {
  return e && !yn(t) ? gn(e, t) : t;
}
const _n = A.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const l = a.isString(i) ? s(i) : i;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function En(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function wn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const u = Date.now(),
        d = r[o];
      i || (i = u), (n[s] = f), (r[s] = u);
      let c = o,
        g = 0;
      for (; c !== s; ) (g += n[c++]), (c = c % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), u - i < t)) return;
      const w = d && u - d;
      return w ? Math.round((g * 1e3) / w) : void 0;
    }
  );
}
function Ie(e, t) {
  let n = 0;
  const r = wn(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      l = o - n,
      f = r(l),
      u = o <= i;
    n = o;
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && i && u ? (i - o) / f : void 0,
      event: s,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const bn = typeof XMLHttpRequest < "u",
  Sn =
    bn &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const o = R.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: l } = e,
          f;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(f),
            e.signal && e.signal.removeEventListener("abort", f);
        }
        let d;
        if (a.isFormData(s)) {
          if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((d = o.getContentType()) !== !1) {
            const [h, ..._] = d
              ? d
                  .split(";")
                  .map((p) => p.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([h || "multipart/form-data", ..._].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const h = e.auth.username || "",
            _ = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(h + ":" + _));
        }
        const g = nt(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Qe(g, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function w() {
          if (!c) return;
          const h = R.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            p = {
              data:
                !i || i === "text" || i === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: h,
              config: e,
              request: c,
            };
          hn(
            function (I) {
              n(I), u();
            },
            function (I) {
              r(I), u();
            },
            p
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = w)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(w);
              }),
          (c.onabort = function () {
            c &&
              (r(new y("Request aborted", y.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new y("Network Error", y.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let _ = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const p = e.transitional || Ze;
            e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
              r(
                new y(
                  _,
                  p.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          A.hasStandardBrowserEnv &&
            (l && a.isFunction(l) && (l = l(e)), l || (l !== !1 && _n(g))))
        ) {
          const h =
            e.xsrfHeaderName && e.xsrfCookieName && pn.read(e.xsrfCookieName);
          h && o.set(e.xsrfHeaderName, h);
        }
        s === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            a.forEach(o.toJSON(), function (_, p) {
              c.setRequestHeader(p, _);
            }),
          a.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Ie(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Ie(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((f = (h) => {
              c &&
                (r(!h || h.type ? new H(null, e, c) : h),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(f),
            e.signal &&
              (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
        const m = En(g);
        if (m && A.protocols.indexOf(m) === -1) {
          r(new y("Unsupported protocol " + m + ":", y.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(s || null);
      });
    },
  de = { http: $t, xhr: Sn };
a.forEach(de, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Te = (e) => `- ${e}`,
  kn = (e) => a.isFunction(e) || e === null || e === !1,
  rt = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !kn(n) && ((r = de[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new y(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([l, f]) =>
            `adapter ${l} ` +
            (f === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Te).join(`
`)
            : " " + Te(o[0])
          : "as no adapter specified";
        throw new y(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: de,
  };
function ie(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new H(null, e);
}
function xe(e) {
  return (
    ie(e),
    (e.headers = R.from(e.headers)),
    (e.data = oe.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    rt
      .getAdapter(e.adapter || _e.adapter)(e)
      .then(
        function (r) {
          return (
            ie(e),
            (r.data = oe.call(e, e.transformResponse, r)),
            (r.headers = R.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            tt(r) ||
              (ie(e),
              r &&
                r.response &&
                ((r.response.data = oe.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = R.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const ve = (e) => (e instanceof R ? e.toJSON() : e);
function v(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, c) {
    return a.isPlainObject(u) && a.isPlainObject(d)
      ? a.merge.call({ caseless: c }, u, d)
      : a.isPlainObject(d)
      ? a.merge({}, d)
      : a.isArray(d)
      ? d.slice()
      : d;
  }
  function s(u, d, c) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(u)) return r(void 0, u, c);
    } else return r(u, d, c);
  }
  function o(u, d) {
    if (!a.isUndefined(d)) return r(void 0, d);
  }
  function i(u, d) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, c) {
    if (c in t) return r(u, d);
    if (c in e) return r(void 0, u);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (u, d) => s(ve(u), ve(d), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const c = f[d] || s,
        g = c(e[d], t[d], d);
      (a.isUndefined(g) && c !== l) || (n[d] = g);
    }),
    n
  );
}
const st = "1.6.2",
  Ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ee[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Pe = {};
Ee.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      st +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return (
      n &&
        !Pe[i] &&
        ((Pe[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, l) : !0
    );
  };
};
function Ln(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const l = e[o],
        f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new y("option " + o + " must be " + f, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const ue = { assertOptions: Ln, validators: Ee },
  T = ue.validators;
class G {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Be(), response: new Be() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = v(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      ue.assertOptions(
        r,
        {
          silentJSONParsing: T.transitional(T.boolean),
          forcedJSONParsing: T.transitional(T.boolean),
          clarifyTimeoutError: T.transitional(T.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ue.assertOptions(
              s,
              { encode: T.function, serialize: T.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete o[m];
        }
      ),
      (n.headers = R.concat(i, o));
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
        ((f = f && h.synchronous), l.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (h) {
      u.push(h.fulfilled, h.rejected);
    });
    let d,
      c = 0,
      g;
    if (!f) {
      const m = [xe.bind(this), void 0];
      for (
        m.unshift.apply(m, l),
          m.push.apply(m, u),
          g = m.length,
          d = Promise.resolve(n);
        c < g;

      )
        d = d.then(m[c++], m[c++]);
      return d;
    }
    g = l.length;
    let w = n;
    for (c = 0; c < g; ) {
      const m = l[c++],
        h = l[c++];
      try {
        w = m(w);
      } catch (_) {
        h.call(this, _);
        break;
      }
    }
    try {
      d = xe.call(this, w);
    } catch (m) {
      return Promise.reject(m);
    }
    for (c = 0, g = u.length; c < g; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(t) {
    t = v(this.defaults, t);
    const n = nt(t.baseURL, t.url);
    return Qe(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  G.prototype[t] = function (n, r) {
    return this.request(
      v(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, l) {
      return this.request(
        v(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (G.prototype[t] = n()), (G.prototype[t + "Form"] = n(!0));
});
const K = G;
class we {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        r.reason || ((r.reason = new H(o, i, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new we(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const On = we;
function An(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Bn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const fe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(fe).forEach(([e, t]) => {
  fe[t] = e;
});
const Rn = fe;
function ot(e) {
  const t = new K(e),
    n = Ue(K.prototype.request, t);
  return (
    a.extend(n, K.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return ot(v(e, s));
    }),
    n
  );
}
const E = ot(_e);
E.Axios = K;
E.CanceledError = H;
E.CancelToken = On;
E.isCancel = tt;
E.VERSION = st;
E.toFormData = ee;
E.AxiosError = y;
E.Cancel = E.CanceledError;
E.all = function (t) {
  return Promise.all(t);
};
E.spread = An;
E.isAxiosError = Bn;
E.mergeConfig = v;
E.AxiosHeaders = R;
E.formToJSON = (e) => et(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = rt.getAdapter;
E.HttpStatusCode = Rn;
E.default = E;
const b = E;
var U, X, it, x, W;
class In {
  constructor(t, n) {
    J(this, X);
    J(this, x);
    J(this, U, []);
    M(this, "text");
    M(this, "category");
    M(this, "elementId");
    (this.text = ""),
      (this.category = "all"),
      (this.elementId = t),
      N(this, X, it)
        .call(this)
        .then((r) => {
          Se(this, U, r.data), n();
        });
  }
  get categories() {
    return be(this, U);
  }
  async randomJoke() {
    if (this.category === "all") {
      let t = await b({
        method: "GET",
        url: "https://api.chucknorris.io/jokes/random",
      });
      N(this, x, W).call(this, "one", t.data);
    } else {
      let t = await b({
        method: "GET",
        url: `https://api.chucknorris.io/jokes/random?category=${this.category}`,
      });
      N(this, x, W).call(this, "one", t.data);
    }
  }
  async searchedJoke() {
    if (this.text !== "") {
      let t = await b({
        method: "GET",
        url: `https://api.chucknorris.io/jokes/search?query=${this.text}`,
      });
      return N(this, x, W).call(this, "multi", t.data), { status: "good" };
    } else return { status: "bad" };
  }
  prepareChuckJokeTypes(t) {
    let n = document.getElementById(t);
    for (let r of this.categories)
      n.innerHTML += `<option value="${r}">${r}</option>`;
  }
}
(U = new WeakMap()),
  (X = new WeakSet()),
  (it = function () {
    return b({
      method: "GET",
      url: "https://api.chucknorris.io/jokes/categories",
    });
  }),
  (x = new WeakSet()),
  (W = function (t, n) {
    const r = document.getElementById(this.elementId);
    if (t === "one")
      r.innerHTML = `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
            <div class="h-fit">
                <p>${n.value}</p>
            </div>
        </div>`;
    else {
      r.innerHTML = "";
      for (let s of n.result.flat())
        r.innerHTML += `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
                <div class="h-fit">
                    <p>${s.value}</p>
                </div>
            </div>`;
    }
  });
const O = "";
async function Tn(e) {
  return b.post(O + "api/add", e, {
    headers: { Authorization: localStorage.getItem("token") },
  });
}
async function xn(e) {
  return b.post(
    O + "api/delete",
    { id: e },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function vn(e, t, n) {
  return b.post(
    O + "api/jokes",
    { id: e, type: t, sort: n },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function Pn(e, t) {
  return b.post(
    O + "api/update",
    { id: e, data: t },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function Nn(e, t, n, r) {
  const s = await b.post(O + "user/create", { email: e, password: t });
  s.data.status === "OK" ? r(s.data) : n(s.data.status);
}
async function Ne(e, t, n, r) {
  if (localStorage.getItem("token")) {
    const s = await b.post(
      O + "user/login",
      {},
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    s.data.status === "OK" ? await r(s.data) : await n(s.data.status);
  } else {
    const s = await b.post(O + "user/login", { email: e, password: t });
    s.data.status === "OK" ? await r(s.data) : await n(s.data.status);
  }
}
async function je(e, t) {
  await b.post(
    O + "api/rating",
    { type: e, id: t },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function jn(e, t) {
  const n = await b.post(
    O + "user/add_like",
    { liked_id: e },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  t(n.data.likes);
}
async function Ce(e, t) {
  const n = await b.post(
    O + "user/remove_like",
    { liked_id: e },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  t(n.data.likes);
}
async function ae(e) {
  const t = await b.post(
    O + "user/liked",
    {},
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  e(t.data.likes);
}
const C = new In("chuck__joke__body", Fn);
let F = "all",
  me = "all",
  at = "none";
const he = { opacity: [0, 1] },
  z = { opacity: [1, 0] },
  Fe = { height: ["3rem", "100%"] },
  De = { height: ["100%", "3rem"] };
Cn();
localStorage.getItem("token")
  ? Ne(
      "",
      "",
      function () {
        localStorage.removeItem("token"), location.reload();
      },
      async (e) => {
        localStorage.setItem("token", e.token),
          await ae((t) => {
            localStorage.setItem("liked", JSON.stringify(t));
          }),
          await S();
      }
    )
  : ((document.getElementById("login_modal").style.display = "block"),
    document
      .getElementById("login_modal_login")
      .addEventListener("click", () => {
        Ne(
          document.getElementById("modal__login_login").value,
          document.getElementById("modal__login_password").value,
          (e) => {
            localStorage.removeItem("token"),
              document
                .getElementById("modal__login__error")
                .classList.remove("hidden"),
              (document.getElementById("modal__login__error").innerText = e);
          },
          async (e) => {
            localStorage.setItem("token", e.token),
              document
                .getElementById("modal__login__error")
                .classList.add("hidden"),
              (document.getElementById("login_modal").style.display = "none"),
              await ae((t) => {
                localStorage.setItem("liked", JSON.stringify(t));
              }),
              S();
          }
        );
      }),
    document
      .getElementById("login_modal_signup")
      .addEventListener("click", () => {
        Nn(
          document.getElementById("modal__login_login").value,
          document.getElementById("modal__login_password").value,
          (e) => {
            localStorage.removeItem("token"),
              document
                .getElementById("modal__login__error")
                .classList.remove("hidden"),
              (document.getElementById("modal__login__error").innerText = e);
          },
          async (e) => {
            localStorage.setItem("token", e.token),
              document
                .getElementById("modal__login__error")
                .classList.add("hidden"),
              (document.getElementById("login_modal").style.display = "none"),
              await ae((t) => {
                localStorage.setItem("liked", JSON.stringify(t));
              }),
              S();
          }
        );
      }));
function Cn() {
  const e = () => {
      document.getElementById("login__password__svg2").classList.add("hidden"),
        document
          .getElementById("login__password__svg1")
          .classList.remove("hidden"),
        (document.getElementById("modal__login_password").type = "text");
    },
    t = () => {
      document
        .getElementById("login__password__svg2")
        .classList.remove("hidden"),
        document
          .getElementById("login__password__svg1")
          .classList.add("hidden"),
        (document.getElementById("modal__login_password").type = "password");
    };
  document
    .getElementById("login__password__show")
    .addEventListener("mousedown", () => {
      e();
    }),
    document
      .getElementById("login__password__show")
      .addEventListener("mouseup", () => {
        t();
      }),
    document
      .getElementById("login__password__show")
      .addEventListener("touchstart", () => {
        e();
      }),
    document
      .getElementById("login__password__show")
      .addEventListener("touchend", () => {
        t();
      });
}
function Fn() {
  const e = document.getElementById("joke_open"),
    t = document.getElementById("joke_body"),
    n = document.getElementById("chuckNoris_open"),
    r = document.getElementById("chuck_body"),
    s = r.parentElement,
    o = t.parentElement,
    i = () => {
      n.classList.add("open"),
        s.animate(Fe, { duration: 500 }),
        e.classList.remove("open"),
        r.classList.remove("hidden"),
        o.animate(De, { duration: 500 }),
        Promise.all(
          e.parentElement.getAnimations().map((p) => p.finished)
        ).then(() => {
          t.classList.add("hidden"),
            o.classList.remove("h-full"),
            o.classList.add("h-fit");
        }),
        Promise.all(s.getAnimations().map((p) => p.finished)).then(() => {
          s.classList.remove("h-fit"), s.classList.add("h-full");
        }),
        o.classList.remove("h-full"),
        o.classList.add("h-fit");
    },
    l = () => {
      e.classList.add("open"),
        o.animate(Fe, { duration: 500 }),
        n.classList.remove("open"),
        t.classList.remove("hidden"),
        s.animate(De, { duration: 500 }),
        Promise.all(s.getAnimations().map((p) => p.finished)).then(() => {
          r.classList.add("hidden"),
            s.classList.remove("h-full"),
            s.classList.add("h-fit");
        }),
        Promise.all(o.getAnimations().map((p) => p.finished)).then(() => {
          o.classList.remove("h-fit"), o.classList.add("h-full");
        }),
        s.classList.remove("h-full"),
        s.classList.add("h-fit");
    };
  n.addEventListener("click", () => {
    s.getAnimations().length === 0 &&
      (console.log(r.getAnimations()),
      n.classList.contains("open") ? l() : i());
  }),
    e.addEventListener("click", () => {
      s.getAnimations().length === 0 &&
        (e.classList.contains("open") ? i() : l());
    }),
    C.prepareChuckJokeTypes("chuck__joke_type"),
    document
      .getElementById("chuck__joke_type")
      .addEventListener("change", (p) => {
        C.category = p.target.value;
      }),
    document
      .getElementById("chuck__joke_get_random")
      .addEventListener("click", () => C.randomJoke()),
    document
      .getElementById("chuck__joke_key")
      .addEventListener("change", (p) => (C.text = p.target.value)),
    document
      .getElementById("chuck__joke_get_searched")
      .addEventListener("click", () => C.searchedJoke());
  const f = document.getElementById("sorting_select");
  (f.selectedIndex = 0),
    f.addEventListener("change", () => {
      (at = f.value), S();
    }),
    document.getElementById("edit_btn").addEventListener("click", () => {
      for (let p of document.querySelectorAll(".main__card__more"))
        p.classList.toggle("open");
    });
  const u = document.getElementById("create_modal");
  document.getElementById("create_btn").addEventListener("click", () => {
    u.classList.remove("hidden"), u.animate(he, { duration: 300 });
  });
  for (let p of u.querySelectorAll(".modal__close"))
    p.addEventListener("click", () => {
      u.animate(z, { duration: 300 }),
        Promise.all(u.getAnimations().map((k) => k.finished)).then(() =>
          u.classList.add("hidden")
        );
    });
  document.getElementById("create_modal_save").addEventListener("click", () => {
    /\S+\s+\(\S+@\S+\.\S+\)/g.test(
      document.getElementById("modal__joke_author").value
    )
      ? (Dn(),
        u.animate(z, { duration: 300 }),
        Promise.all(u.getAnimations().map((p) => p.finished)).then(() =>
          u.classList.add("hidden")
        ))
      : alert("Invalid Author. Please type author like 'Author (Email)'");
  });
  const d = document.getElementById("detail_modal");
  d.querySelector(".modal__close").addEventListener("click", () => {
    d.animate(z, { duration: 300 }),
      Promise.all(d.getAnimations().map((p) => p.finished)).then(() =>
        d.classList.add("hidden")
      );
  });
  const c = document.getElementById("like_btn"),
    g = () => {
      c.classList.contains("selected")
        ? ((me = "all"), S(), c.classList.remove("selected"))
        : (c.classList.add("selected"),
          JSON.parse(localStorage.getItem("liked")) !== null
            ? ((me = JSON.parse(localStorage.getItem("liked"))), S())
            : (document.getElementById("card_container").innerHTML =
                '<img alt="loading" class="w-full h-full" src="public/loading.gif">'));
    };
  c.addEventListener("click", g),
    c.querySelector(".btn__svg").addEventListener("click", g);
  const w = document.getElementById("light_btn"),
    m = document.getElementById("dark_btn"),
    h = () => {
      w.classList.contains("selected")
        ? ((F = "all"), S())
        : (m.classList.remove("selected"), (F = "light"), S());
    },
    _ = () => {
      m.classList.contains("selected")
        ? ((F = "all"), S())
        : ((F = "dark"), w.classList.remove("selected"), S());
    };
  w.addEventListener("click", h),
    m.addEventListener("click", _),
    w.querySelector(".btn__svg").addEventListener("click", h),
    m.querySelector(".btn__svg").addEventListener("click", _);
  for (let p of document.querySelectorAll(".nav__button.toggle"))
    p.addEventListener("click", () => p.classList.toggle("selected")),
      p
        .querySelector(".btn__svg")
        .addEventListener("click", () => p.classList.toggle("selected"));
  document
    .getElementById("create_detail_save")
    .addEventListener("click", () => {
      if (
        /\S+\s+\(\S+@\S+\.\S+\)/g.test(
          document.getElementById("detail__joke_author").value
        )
      ) {
        const p = {
          name: document.getElementById("detail__joke_name").value,
          author: document.getElementById("detail__joke_author").value,
          text: document.getElementById("detail__joke_text").value,
          type: document.getElementById("detail__joke_type").value,
        };
        Pn(document.getElementById("detail__id").value, p),
          d.animate(z, { duration: 300 }),
          Promise.all(d.getAnimations().map((k) => k.finished)).then(() =>
            d.classList.add("hidden")
          ),
          S();
      } else alert("Invalid Author. Please type author like 'Author (Email)'");
    });
}
async function S(e = me) {
  let t = localStorage.getItem("liked");
  const n = document.getElementById("card_container");
  document.getElementById("edit_btn").classList.remove("selected"),
    (n.innerHTML =
      '<img alt="loading" class="w-full h-full" src="public/loading.gif">');
  let r;
  try {
    r = await vn(e, F, at);
  } catch (l) {
    n.innerHTML = `<p>${l.message} occurred, try later</p>`;
    return;
  }
  if (r.status !== 200) {
    n.innerHTML = "<p>Error occurred, try later</p>";
    return;
  }
  n.innerHTML = "";
  let s = r.data;
  const o = document.getElementById("detail_modal"),
    i = (l, f, u) => {
      (document.getElementById("detail__joke_name").value = u.name),
        (document.getElementById("detail__joke_author").value = u.author),
        (document.getElementById("detail__joke_text").value = u.body),
        (document.getElementById("detail__joke_type").value = u.type),
        (document.getElementById("detail__id").value = u.id);
      for (let d of o.querySelectorAll(".modal__input")) d.disabled = f;
      (o.querySelector(".modal__inner__header__title").innerText = l),
        o.animate(he, { duration: 300 }),
        o.classList.remove("hidden");
    };
  for (let l of s) {
    let f = document.createElement("div");
    (f.innerHTML = `<div class="w-56 main__card h-fit p-4 rounded-lg m-3">
                <div class="main__card__body flex  items-stretch justify-stretch flex-col">
                    <header class="h-1/5 mb-4 ">
                        <h4 class="font-medium truncate  mb-0.5">${l.author}</h4>
                        <h3 class="h-4/6 overflow-hidden text-ellipsis">${l.name}</h3>
                        <p>likes: ${l.likes}</p>
                    </header>
                    <div class="h-3/5 text-ellipsis overflow-hidden">
                        <p>${l.body}</p>
                    </div>
                    <div class="h-1/5 flex mt-3">
                        <button class="flex items-center px-3 justify-start basis-4/5 main__card__button mr-2 rounded-lg main__card__detail_btn">
                            Detail
                        </button>
                        <button class="basis-1/5 main__card__button rounded-lg flex justify-center items-center like_btn">
                            <svg fill="#000000" height="90%" width="90%"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 471.701 471.701" xml:space="preserve">
                        <g>
                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                        </g>
                                <rect class="btn__svg" x="0" y="0" width="10" height="10"  />
                        </svg>
                        </button>
                    </div>
                </div>
                <div class="mt-2 justify-center rounded-b-lg  main__card__more h-8">
                    <button class="flex items-center px-3 justify-start basis-3/6 main__card__button mr-2 rounded-lg main__card__more__delete">
                        Delete
                    </button>
                    <button class="basis-3/6 main__card__button rounded-lg flex justify-center items-center main__card__more__edit">
                        Edit
                    </button>
                </div>
            </div>`),
      (f = f.firstElementChild),
      f
        .querySelector(".main__card__detail_btn")
        .addEventListener("click", () => {
          i("Detail", !0, l),
            o.querySelector(".detail_edit").classList.remove("flex"),
            o.querySelector(".detail_edit").classList.add("hidden");
        }),
      f
        .querySelector(".main__card__more__edit")
        .addEventListener("click", () => {
          i("Edit", !1, l),
            o.querySelector(".detail_edit").classList.remove("hidden"),
            o.querySelector(".detail_edit").classList.add("flex"),
            o.classList.remove("hidden"),
            o.animate(he, { duration: 300 });
        }),
      f
        .querySelector(".main__card__more__delete")
        .addEventListener("click", () => {
          xn(l.id),
            Ce(l.id, (d) => {
              localStorage.setItem("liked", JSON.stringify(d));
            }),
            S();
        });
    const u = f.querySelector(".like_btn");
    t.includes(l.id) && u.classList.add("liked"),
      u.addEventListener("click", () => {
        u.classList.contains("liked")
          ? (u.classList.remove("liked"),
            Ce(l.id, (d) => {
              localStorage.setItem("liked", JSON.stringify(d));
            }),
            je("down", l.id))
          : (u.classList.add("liked"),
            jn(l.id, (d) => {
              localStorage.setItem("liked", JSON.stringify(d));
            }),
            je("up", l.id));
      }),
      n.appendChild(f);
  }
}
function Dn() {
  const e = {
    author: document.getElementById("modal__joke_author").value,
    name: document.getElementById("modal__joke_name").value,
    body: document.getElementById("modal__joke_text").value,
    type: document.getElementById("modal__joke_type").value,
  };
  console.log(Tn(e)), S();
}
