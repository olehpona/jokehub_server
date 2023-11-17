var te = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
};
var we = (e, t, n) => (
    te(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  M = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  be = (e, t, n, r) => (
    te(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  );
var P = (e, t, n) => (te(e, t, "access private method"), n);
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
function De(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: at } = Object.prototype,
  { getPrototypeOf: pe } = Object,
  X = ((e) => (t) => {
    const n = at.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  B = (e) => ((e = e.toLowerCase()), (t) => X(t) === e),
  Q = (e) => (t) => typeof t === e,
  { isArray: x } = Array,
  F = Q("undefined");
function lt(e) {
  return (
    e !== null &&
    !F(e) &&
    e.constructor !== null &&
    !F(e.constructor) &&
    k(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ue = B("ArrayBuffer");
function ct(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ue(e.buffer)),
    t
  );
}
const dt = Q("string"),
  k = Q("function"),
  qe = Q("number"),
  Z = (e) => e !== null && typeof e == "object",
  ut = (e) => e === !0 || e === !1,
  z = (e) => {
    if (X(e) !== "object") return !1;
    const t = pe(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ft = B("Date"),
  mt = B("File"),
  pt = B("Blob"),
  ht = B("FileList"),
  yt = (e) => Z(e) && k(e.pipe),
  _t = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (k(e.append) &&
          ((t = X(e)) === "formdata" ||
            (t === "object" &&
              k(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  gt = B("URLSearchParams"),
  Et = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function U(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), x(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (r = 0; r < i; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function He(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Me = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Je = (e) => !F(e) && e !== Me;
function ae() {
  const { caseless: e } = (Je(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && He(t, s)) || s;
      z(t[o]) && z(r)
        ? (t[o] = ae(t[o], r))
        : z(r)
        ? (t[o] = ae({}, r))
        : x(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && U(arguments[r], n);
  return t;
}
const wt = (e, t, n, { allOwnKeys: r } = {}) => (
    U(
      t,
      (s, o) => {
        n && k(s) ? (e[o] = De(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  bt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  St = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  kt = (e, t, n, r) => {
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
  Lt = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  At = (e) => {
    if (!e) return null;
    if (x(e)) return e;
    let t = e.length;
    if (!qe(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ot = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && pe(Uint8Array)),
  Bt = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Rt = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Tt = B("HTMLFormElement"),
  It = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Se = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  vt = B("RegExp"),
  ze = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    U(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  xt = (e) => {
    ze(e, (t, n) => {
      if (k(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (k(r)) {
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
  Pt = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return x(e) ? r(e) : r(String(e).split(t)), n;
  },
  Nt = () => {},
  Ct = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  ne = "abcdefghijklmnopqrstuvwxyz",
  ke = "0123456789",
  $e = { DIGIT: ke, ALPHA: ne, ALPHA_DIGIT: ne + ne.toUpperCase() + ke },
  jt = (e = 16, t = $e.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Ft(e) {
  return !!(
    e &&
    k(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Dt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Z(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = x(r) ? [] : {};
            return (
              U(r, (i, l) => {
                const u = n(i, s + 1);
                !F(u) && (o[l] = u);
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
  Ut = B("AsyncFunction"),
  qt = (e) => e && (Z(e) || k(e)) && k(e.then) && k(e.catch),
  a = {
    isArray: x,
    isArrayBuffer: Ue,
    isBuffer: lt,
    isFormData: _t,
    isArrayBufferView: ct,
    isString: dt,
    isNumber: qe,
    isBoolean: ut,
    isObject: Z,
    isPlainObject: z,
    isUndefined: F,
    isDate: ft,
    isFile: mt,
    isBlob: pt,
    isRegExp: vt,
    isFunction: k,
    isStream: yt,
    isURLSearchParams: gt,
    isTypedArray: Ot,
    isFileList: ht,
    forEach: U,
    merge: ae,
    extend: wt,
    trim: Et,
    stripBOM: bt,
    inherits: St,
    toFlatObject: kt,
    kindOf: X,
    kindOfTest: B,
    endsWith: Lt,
    toArray: At,
    forEachEntry: Bt,
    matchAll: Rt,
    isHTMLForm: Tt,
    hasOwnProperty: Se,
    hasOwnProp: Se,
    reduceDescriptors: ze,
    freezeMethods: xt,
    toObjectSet: Pt,
    toCamelCase: It,
    noop: Nt,
    toFiniteNumber: Ct,
    findKey: He,
    global: Me,
    isContextDefined: Je,
    ALPHABET: $e,
    generateString: jt,
    isSpecCompliantForm: Ft,
    toJSONObject: Dt,
    isAsyncFn: Ut,
    isThenable: qt,
  };
function h(e, t, n, r, s) {
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
a.inherits(h, Error, {
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
const Ve = h.prototype,
  Ke = {};
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
  Ke[e] = { value: e };
});
Object.defineProperties(h, Ke);
Object.defineProperty(Ve, "isAxiosError", { value: !0 });
h.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ve);
  return (
    a.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    h.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Ht = null;
function le(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function We(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Le(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = We(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Mt(e) {
  return a.isArray(e) && !e.some(le);
}
const Jt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Y(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (d, y) {
        return !a.isUndefined(y[d]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || c,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function m(f) {
    if (f === null) return "";
    if (a.isDate(f)) return f.toISOString();
    if (!u && a.isBlob(f))
      throw new h("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f)
      ? u && typeof Blob == "function"
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function c(f, d, y) {
    let b = f;
    if (f && !y && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        (d = r ? d : d.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (a.isArray(f) && Mt(f)) ||
        ((a.isFileList(f) || a.endsWith(d, "[]")) && (b = a.toArray(f)))
      )
        return (
          (d = We(d)),
          b.forEach(function (H, it) {
            !(a.isUndefined(H) || H === null) &&
              t.append(
                i === !0 ? Le([d], it, o) : i === null ? d : d + "[]",
                m(H)
              );
          }),
          !1
        );
    }
    return le(f) ? !0 : (t.append(Le(y, d, o), m(f)), !1);
  }
  const p = [],
    _ = Object.assign(Jt, {
      defaultVisitor: c,
      convertValue: m,
      isVisitable: le,
    });
  function E(f, d) {
    if (!a.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      p.push(f),
        a.forEach(f, function (b, A) {
          (!(a.isUndefined(b) || b === null) &&
            s.call(t, b, a.isString(A) ? A.trim() : A, d, _)) === !0 &&
            E(b, d ? d.concat(A) : [A]);
        }),
        p.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return E(e), t;
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
function he(e, t) {
  (this._pairs = []), e && Y(e, this, t);
}
const Ge = he.prototype;
Ge.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ge.toString = function (t) {
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
function zt(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Xe(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || zt,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new he(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class $t {
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
const Oe = $t,
  Qe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Vt = typeof URLSearchParams < "u" ? URLSearchParams : he,
  Kt = typeof FormData < "u" ? FormData : null,
  Wt = typeof Blob < "u" ? Blob : null,
  Gt = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  Xt = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  O = {
    isBrowser: !0,
    classes: { URLSearchParams: Vt, FormData: Kt, Blob: Wt },
    isStandardBrowserEnv: Gt,
    isStandardBrowserWebWorkerEnv: Xt,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Qt(e, t) {
  return Y(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return O.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Zt(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Yt(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Ze(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const l = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      u
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !l)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Yt(s[i])),
          !l)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(Zt(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function en(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ye = {
  transitional: Qe,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s && s ? JSON.stringify(Ze(t)) : t;
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
          return Qt(t, this.formSerializer).toString();
        if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Y(l ? { "files[]": t } : t, u && new u(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType("application/json", !1), en(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ye.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? h.from(l, h.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
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
  ye.headers[e] = {};
});
const _e = ye,
  tn = a.toObjectSet([
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
  nn = (e) => {
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
              !(!n || (t[n] && tn[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Be = Symbol("internals");
function N(e) {
  return e && String(e).trim().toLowerCase();
}
function $(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map($) : String(e);
}
function rn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const sn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function re(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function on(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function an(e, t) {
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
class ee {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, u, m) {
      const c = N(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, c);
      (!p || s[p] === void 0 || m === !0 || (m === void 0 && s[p] !== !1)) &&
        (s[p || u] = $(l));
    }
    const i = (l, u) => a.forEach(l, (m, c) => o(m, c, u));
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : a.isString(t) && (t = t.trim()) && !sn(t)
        ? i(nn(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = N(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return rn(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = N(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || re(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = N(i)), i)) {
        const l = a.findKey(r, i);
        l && (!n || re(r, r[l], l, n)) && (delete r[l], (s = !0));
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
      (!t || re(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
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
          (n[i] = $(s)), delete n[o];
          return;
        }
        const l = t ? on(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = $(s)), (r[l] = !0);
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
    const r = (this[Be] = this[Be] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const l = N(i);
      r[l] || (an(s, i), (r[l] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ee.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
a.reduceDescriptors(ee.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(ee);
const R = ee;
function se(e, t) {
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
function Ye(e) {
  return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
  h.call(this, e ?? "canceled", h.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
a.inherits(q, h, { __CANCEL__: !0 });
function ln(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new h(
          "Request failed with status code " + n.status,
          [h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const cn = O.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, s, o, i, l) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(r)),
            a.isNumber(s) && u.push("expires=" + new Date(s).toGMTString()),
            a.isString(o) && u.push("path=" + o),
            a.isString(i) && u.push("domain=" + i),
            l === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function dn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function un(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function et(e, t) {
  return e && !dn(t) ? un(e, t) : t;
}
const fn = O.isStandardBrowserEnv
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
function mn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function pn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const m = Date.now(),
        c = r[o];
      i || (i = m), (n[s] = u), (r[s] = m);
      let p = o,
        _ = 0;
      for (; p !== s; ) (_ += n[p++]), (p = p % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), m - i < t)) return;
      const E = c && m - c;
      return E ? Math.round((_ * 1e3) / E) : void 0;
    }
  );
}
function Re(e, t) {
  let n = 0;
  const r = pn(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      l = o - n,
      u = r(l),
      m = o <= i;
    n = o;
    const c = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && i && m ? (i - o) / u : void 0,
      event: s,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const hn = typeof XMLHttpRequest < "u",
  yn =
    hn &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const o = R.from(e.headers).normalize(),
          i = e.responseType;
        let l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let m;
        a.isFormData(s) &&
          (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.getContentType(/^\s*multipart\/form-data/)
            ? a.isString((m = o.getContentType())) &&
              o.setContentType(m.replace(/^\s*(multipart\/form-data);+/, "$1"))
            : o.setContentType("multipart/form-data"));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const f = e.auth.username || "",
            d = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(f + ":" + d));
        }
        const p = et(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Xe(p, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function _() {
          if (!c) return;
          const f = R.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            y = {
              data:
                !i || i === "text" || i === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: f,
              config: e,
              request: c,
            };
          ln(
            function (A) {
              n(A), u();
            },
            function (A) {
              r(A), u();
            },
            y
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = _)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(_);
              }),
          (c.onabort = function () {
            c &&
              (r(new h("Request aborted", h.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new h("Network Error", h.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let d = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || Qe;
            e.timeoutErrorMessage && (d = e.timeoutErrorMessage),
              r(
                new h(
                  d,
                  y.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          O.isStandardBrowserEnv)
        ) {
          const f =
            (e.withCredentials || fn(p)) &&
            e.xsrfCookieName &&
            cn.read(e.xsrfCookieName);
          f && o.set(e.xsrfHeaderName, f);
        }
        s === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            a.forEach(o.toJSON(), function (d, y) {
              c.setRequestHeader(y, d);
            }),
          a.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Re(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Re(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (f) => {
              c &&
                (r(!f || f.type ? new q(null, e, c) : f),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const E = mn(p);
        if (E && O.protocols.indexOf(E) === -1) {
          r(new h("Unsupported protocol " + E + ":", h.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(s || null);
      });
    },
  ce = { http: Ht, xhr: yn };
a.forEach(ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Te = (e) => `- ${e}`,
  _n = (e) => a.isFunction(e) || e === null || e === !1,
  tt = {
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
          !_n(n) && ((r = ce[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new h(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
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
        throw new h(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ce,
  };
function oe(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new q(null, e);
}
function Ie(e) {
  return (
    oe(e),
    (e.headers = R.from(e.headers)),
    (e.data = se.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    tt
      .getAdapter(e.adapter || _e.adapter)(e)
      .then(
        function (r) {
          return (
            oe(e),
            (r.data = se.call(e, e.transformResponse, r)),
            (r.headers = R.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Ye(r) ||
              (oe(e),
              r &&
                r.response &&
                ((r.response.data = se.call(
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
  function r(m, c, p) {
    return a.isPlainObject(m) && a.isPlainObject(c)
      ? a.merge.call({ caseless: p }, m, c)
      : a.isPlainObject(c)
      ? a.merge({}, c)
      : a.isArray(c)
      ? c.slice()
      : c;
  }
  function s(m, c, p) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(m)) return r(void 0, m, p);
    } else return r(m, c, p);
  }
  function o(m, c) {
    if (!a.isUndefined(c)) return r(void 0, c);
  }
  function i(m, c) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(m)) return r(void 0, m);
    } else return r(void 0, c);
  }
  function l(m, c, p) {
    if (p in t) return r(m, c);
    if (p in e) return r(void 0, m);
  }
  const u = {
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
    headers: (m, c) => s(ve(m), ve(c), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const p = u[c] || s,
        _ = p(e[c], t[c], c);
      (a.isUndefined(_) && p !== l) || (n[c] = _);
    }),
    n
  );
}
const nt = "1.5.1",
  ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ge[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const xe = {};
ge.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      nt +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new h(
        s(i, " has been removed" + (n ? " in " + n : "")),
        h.ERR_DEPRECATED
      );
    return (
      n &&
        !xe[i] &&
        ((xe[i] = !0),
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
function gn(e, t, n) {
  if (typeof e != "object")
    throw new h("options must be an object", h.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const l = e[o],
        u = l === void 0 || i(l, o, e);
      if (u !== !0)
        throw new h("option " + o + " must be " + u, h.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new h("Unknown option " + o, h.ERR_BAD_OPTION);
  }
}
const de = { assertOptions: gn, validators: ge },
  T = de.validators;
class W {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Oe(), response: new Oe() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = v(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      de.assertOptions(
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
          : de.assertOptions(
              s,
              { encode: T.function, serialize: T.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (f) => {
          delete o[f];
        }
      ),
      (n.headers = R.concat(i, o));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == "function" && d.runWhen(n) === !1) ||
        ((u = u && d.synchronous), l.unshift(d.fulfilled, d.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (d) {
      m.push(d.fulfilled, d.rejected);
    });
    let c,
      p = 0,
      _;
    if (!u) {
      const f = [Ie.bind(this), void 0];
      for (
        f.unshift.apply(f, l),
          f.push.apply(f, m),
          _ = f.length,
          c = Promise.resolve(n);
        p < _;

      )
        c = c.then(f[p++], f[p++]);
      return c;
    }
    _ = l.length;
    let E = n;
    for (p = 0; p < _; ) {
      const f = l[p++],
        d = l[p++];
      try {
        E = f(E);
      } catch (y) {
        d.call(this, y);
        break;
      }
    }
    try {
      c = Ie.call(this, E);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, _ = m.length; p < _; ) c = c.then(m[p++], m[p++]);
    return c;
  }
  getUri(t) {
    t = v(this.defaults, t);
    const n = et(t.baseURL, t.url);
    return Xe(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  W.prototype[t] = function (n, r) {
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
  (W.prototype[t] = n()), (W.prototype[t + "Form"] = n(!0));
});
const V = W;
class Ee {
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
        r.reason || ((r.reason = new q(o, i, l)), n(r.reason));
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
      token: new Ee(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const En = Ee;
function wn(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function bn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ue = {
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
Object.entries(ue).forEach(([e, t]) => {
  ue[t] = e;
});
const Sn = ue;
function rt(e) {
  const t = new V(e),
    n = De(V.prototype.request, t);
  return (
    a.extend(n, V.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return rt(v(e, s));
    }),
    n
  );
}
const g = rt(_e);
g.Axios = V;
g.CanceledError = q;
g.CancelToken = En;
g.isCancel = Ye;
g.VERSION = nt;
g.toFormData = Y;
g.AxiosError = h;
g.Cancel = g.CanceledError;
g.all = function (t) {
  return Promise.all(t);
};
g.spread = wn;
g.isAxiosError = bn;
g.mergeConfig = v;
g.AxiosHeaders = R;
g.formToJSON = (e) => Ze(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = tt.getAdapter;
g.HttpStatusCode = Sn;
g.default = g;
const w = g;
var D, G, st, I, K;
class kn {
  constructor(t, n) {
    M(this, G);
    M(this, I);
    M(this, D, void 0);
    (this.text = ""),
      (this.category = "all"),
      (this.elementId = t),
      P(this, G, st)
        .call(this)
        .then((r) => {
          be(this, D, r.data), n();
        });
  }
  get categories() {
    return we(this, D);
  }
  async randomJoke() {
    if (this.category === "all") {
      let t = await w({
        method: "GET",
        url: "https://api.chucknorris.io/jokes/random",
      });
      P(this, I, K).call(this, "one", t.data);
    } else {
      let t = await w({
        method: "GET",
        url: `https://api.chucknorris.io/jokes/random?category=${this.category}`,
      });
      P(this, I, K).call(this, "one", t.data);
    }
  }
  async searchedJoke() {
    if (this.text !== "") {
      let t = await w({
        method: "GET",
        url: `https://api.chucknorris.io/jokes/search?query=${this.text}`,
      });
      P(this, I, K).call(this, "multi", t.data);
    } else return { status: "bad" };
  }
  prepareChuckJokeTypes(t) {
    let n = document.getElementById(t);
    for (let r of this.categories)
      n.innerHTML += `<option value="${r}">${r}</option>`;
  }
}
(D = new WeakMap()),
  (G = new WeakSet()),
  (st = function () {
    return w({
      method: "GET",
      url: "https://api.chucknorris.io/jokes/categories",
    });
  }),
  (I = new WeakSet()),
  (K = function (t, n) {
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
const L = "";
async function Ln(e) {
  return w.post(L + "api/add", e, {
    headers: { Authorization: localStorage.getItem("token") },
  });
}
async function An(e) {
  return w.post(
    L + "api/delete",
    { id: e },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function On(e, t, n) {
  return w.post(
    L + "api/jokes",
    { id: e, type: t, sort: n },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function Bn(e, t) {
  return w.post(
    L + "api/update",
    { id: e, data: t },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function Rn(e, t, n, r) {
  const s = await w.post(L + "user/create", { email: e, password: t });
  s.data.status === "OK" ? r(s.data) : n(s.data.status);
}
async function Pe(e, t, n, r) {
  if (localStorage.getItem("token")) {
    const s = await w.post(
      L + "user/login",
      {},
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    s.data.status === "OK" ? await r(s.data) : await n(s.data.status);
  } else {
    const s = await w.post(L + "user/login", { email: e, password: t });
    s.data.status === "OK" ? await r(s.data) : await n(s.data.status);
  }
}
async function Ne(e, t) {
  await w.post(
    L + "api/rating",
    { type: e, id: t },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
}
async function Tn(e) {
  const t = await w.post(
    L + "user/add_like",
    { liked_id: e },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  localStorage.setItem("liked", JSON.stringify(t.data.likes));
}
async function Ce(e) {
  const t = await w.post(
    L + "user/remove_like",
    { liked_id: e },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  localStorage.setItem("liked", JSON.stringify(t.data.likes));
}
async function ie() {
  const e = await w.post(
    L + "user/liked",
    {},
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  localStorage.setItem("liked", JSON.stringify(e.data.likes));
}
const C = new kn("chuck__joke__body", vn);
let j = "all",
  fe = "all",
  ot = "none";
const me = { opacity: [0, 1] },
  J = { opacity: [1, 0] },
  je = { height: ["3rem", "100%"] },
  Fe = { height: ["100%", "3rem"] };
In();
localStorage.getItem("token")
  ? Pe(
      "",
      "",
      function () {
        localStorage.removeItem("token"), location.reload();
      },
      async function (e) {
        localStorage.setItem("token", e.token), await ie(), await S();
      }
    )
  : ((document.getElementById("login_modal").style.display = "block"),
    document
      .getElementById("login_modal_login")
      .addEventListener("click", (e) => {
        Pe(
          document.getElementById("modal__login_login").value,
          document.getElementById("modal__login_password").value,
          (t) => {
            localStorage.removeItem("token"),
              document
                .getElementById("modal__login__error")
                .classList.remove("hidden"),
              (document.getElementById("modal__login__error").innerText = t);
          },
          async (t) => {
            localStorage.setItem("token", t.token),
              document
                .getElementById("modal__login__error")
                .classList.add("hidden"),
              (document.getElementById("login_modal").style.display = "none"),
              await ie(),
              S();
          }
        );
      }),
    document
      .getElementById("login_modal_signup")
      .addEventListener("click", (e) => {
        Rn(
          document.getElementById("modal__login_login").value,
          document.getElementById("modal__login_password").value,
          (t) => {
            localStorage.removeItem("token"),
              document
                .getElementById("modal__login__error")
                .classList.remove("hidden"),
              (document.getElementById("modal__login__error").innerText = t);
          },
          async (t) => {
            localStorage.setItem("token", t.token),
              document
                .getElementById("modal__login__error")
                .classList.add("hidden"),
              (document.getElementById("login_modal").style.display = "none"),
              await ie(),
              S();
          }
        );
      }));
function In() {
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
function vn() {
  const e = document.getElementById("joke_open"),
    t = document.getElementById("joke_body"),
    n = document.getElementById("chuckNoris_open"),
    r = document.getElementById("chuck_body"),
    s = () => {
      n.classList.add("open"),
        n.parentElement.animate(je, { duration: 500 }),
        e.classList.remove("open"),
        r.classList.remove("hidden"),
        t.parentElement.animate(Fe, { duration: 500 }),
        Promise.all(
          e.parentElement.getAnimations().map((d) => d.finished)
        ).then(() => {
          t.classList.add("hidden"),
            e.parentElement.classList.remove("h-full"),
            e.parentElement.classList.add("h-fit");
        }),
        Promise.all(
          n.parentElement.getAnimations().map((d) => d.finished)
        ).then(() => {
          n.parentElement.classList.remove("h-fit"),
            n.parentElement.classList.add("h-full");
        }),
        t.parentElement.classList.remove("h-full"),
        t.parentElement.classList.add("h-fit");
    },
    o = () => {
      e.classList.add("open"),
        e.parentElement.animate(je, { duration: 500 }),
        n.classList.remove("open"),
        t.classList.remove("hidden"),
        n.parentElement.animate(Fe, { duration: 500 }),
        Promise.all(
          n.parentElement.getAnimations().map((d) => d.finished)
        ).then(() => {
          r.classList.add("hidden"),
            n.parentElement.classList.remove("h-full"),
            n.parentElement.classList.add("h-fit");
        }),
        Promise.all(
          e.parentElement.getAnimations().map((d) => d.finished)
        ).then(() => {
          e.parentElement.classList.remove("h-fit"),
            e.parentElement.classList.add("h-full");
        }),
        r.parentElement.classList.remove("h-full"),
        r.parentElement.classList.add("h-fit");
    };
  n.addEventListener("click", (d) => {
    r.parentElement.getAnimations().length === 0 &&
      (console.log(r.getAnimations()),
      d.target.classList.contains("open") ? o() : s());
  }),
    e.addEventListener("click", (d) => {
      r.parentElement.getAnimations().length === 0 &&
        (d.target.classList.contains("open") ? s() : o());
    }),
    C.prepareChuckJokeTypes("chuck__joke_type"),
    document
      .getElementById("chuck__joke_type")
      .addEventListener("change", (d) => {
        C.category = d.target.value;
      }),
    document
      .getElementById("chuck__joke_get_random")
      .addEventListener("click", (d) => C.randomJoke()),
    document
      .getElementById("chuck__joke_key")
      .addEventListener("change", (d) => (C.text = d.target.value)),
    document
      .getElementById("chuck__joke_get_searched")
      .addEventListener("click", (d) => C.searchedJoke());
  const i = document.getElementById("sorting_select");
  (i.selectedIndex = 0),
    i.addEventListener("change", (d) => {
      (ot = i.value), S();
    }),
    document.getElementById("edit_btn").addEventListener("click", (d) => {
      for (let y of document.querySelectorAll(".main__card__more"))
        y.classList.toggle("open");
    });
  const l = document.getElementById("create_modal");
  document.getElementById("create_btn").addEventListener("click", (d) => {
    l.classList.remove("hidden"), l.animate(me, { duration: 300 });
  });
  for (let d of l.querySelectorAll(".modal__close"))
    d.addEventListener("click", (y) => {
      l.animate(J, { duration: 300 }),
        Promise.all(l.getAnimations().map((b) => b.finished)).then(() =>
          l.classList.add("hidden")
        );
    });
  document
    .getElementById("create_modal_save")
    .addEventListener("click", (d) => {
      /\S+\s+\(\S+@\S+\.\S+\)/g.test(
        document.getElementById("modal__joke_author").value
      )
        ? (xn(),
          l.animate(J, { duration: 300 }),
          Promise.all(l.getAnimations().map((y) => y.finished)).then(() =>
            l.classList.add("hidden")
          ))
        : alert("Invalid Author. Please type author like 'Author (Email)'");
    });
  const u = document.getElementById("detail_modal");
  u.querySelector(".modal__close").addEventListener("click", (d) => {
    u.animate(J, { duration: 300 }),
      Promise.all(u.getAnimations().map((y) => y.finished)).then(() =>
        u.classList.add("hidden")
      );
  });
  const m = document.getElementById("like_btn"),
    c = () => {
      m.classList.contains("selected")
        ? ((fe = "all"), S(), m.classList.remove("selected"))
        : (m.classList.add("selected"),
          JSON.parse(localStorage.getItem("liked")) !== null
            ? ((fe = JSON.parse(localStorage.getItem("liked"))), S())
            : (document.getElementById("card_container").innerHTML =
                '<img alt="loading" class="w-full h-full" src="public/loading.gif">'));
    };
  m.addEventListener("click", c),
    m.querySelector(".btn__svg").addEventListener("click", c);
  const p = document.getElementById("light_btn"),
    _ = document.getElementById("dark_btn"),
    E = (d) => {
      p.classList.contains("selected")
        ? ((j = "all"), S())
        : (_.classList.remove("selected"), (j = "light"), S());
    },
    f = (d) => {
      _.classList.contains("selected")
        ? ((j = "all"), S())
        : ((j = "dark"), p.classList.remove("selected"), S());
    };
  p.addEventListener("click", E),
    _.addEventListener("click", f),
    p.querySelector(".btn__svg").addEventListener("click", E),
    _.querySelector(".btn__svg").addEventListener("click", f);
  for (let d of document.querySelectorAll(".nav__button.toggle"))
    d.addEventListener("click", (y) => d.classList.toggle("selected")),
      d
        .querySelector(".btn__svg")
        .addEventListener("click", (y) => d.classList.toggle("selected"));
  document
    .getElementById("create_detail_save")
    .addEventListener("click", (d) => {
      if (
        /\S+\s+\(\S+@\S+\.\S+\)/g.test(
          document.getElementById("detail__joke_author").value
        )
      ) {
        const y = {
          name: document.getElementById("detail__joke_name").value,
          author: document.getElementById("detail__joke_author").value,
          text: document.getElementById("detail__joke_text").value,
          type: document.getElementById("detail__joke_type").value,
        };
        Bn(document.getElementById("detail__id").value, y),
          u.animate(J, { duration: 300 }),
          Promise.all(u.getAnimations().map((b) => b.finished)).then(() =>
            u.classList.add("hidden")
          ),
          S();
      } else alert("Invalid Author. Please type author like 'Author (Email)'");
    });
}
async function S(e = fe) {
  let t = localStorage.getItem("liked");
  const n = document.getElementById("card_container");
  document.getElementById("edit_btn").classList.remove("selected"),
    (n.innerHTML =
      '<img alt="loading" class="w-full h-full" src="public/loading.gif">');
  let r;
  try {
    r = await On(e, j, ot);
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
    i = (l, u, m) => {
      (document.getElementById("detail__joke_name").value = m.name),
        (document.getElementById("detail__joke_author").value = m.author),
        (document.getElementById("detail__joke_text").value = m.body),
        (document.getElementById("detail__joke_type").value = m.type),
        (document.getElementById("detail__id").value = m.id);
      for (let c of o.querySelectorAll(".modal__input")) c.disabled = u;
      (o.querySelector(".modal__inner__header__title").innerText = l),
        o.animate(me, { duration: 300 }),
        o.classList.remove("hidden");
    };
  for (let l of s) {
    let u = document.createElement("div");
    (u.innerHTML = `<div class="w-56 main__card h-fit p-4 rounded-lg m-3">
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
      (u = u.firstElementChild),
      u
        .querySelector(".main__card__detail_btn")
        .addEventListener("click", (m) => {
          i("Detail", !0, l),
            o.querySelector(".detail_edit").classList.remove("flex"),
            o.querySelector(".detail_edit").classList.add("hidden");
        }),
      u
        .querySelector(".main__card__more__edit")
        .addEventListener("click", (m) => {
          i("Edit", !1, l),
            o.querySelector(".detail_edit").classList.remove("hidden"),
            o.querySelector(".detail_edit").classList.add("flex"),
            o.classList.remove("hidden"),
            o.animate(me, { duration: 300 });
        }),
      u
        .querySelector(".main__card__more__delete")
        .addEventListener("click", (m) => {
          An(l.id), Ce(l.id), S();
        }),
      t.includes(l.id) && u.querySelector(".like_btn").classList.add("liked"),
      u.querySelector(".like_btn").addEventListener("click", (m) => {
        u.querySelector(".like_btn").classList.contains("liked")
          ? (u.querySelector(".like_btn").classList.remove("liked"),
            Ce(l.id),
            Ne("down", l.id))
          : (u.querySelector(".like_btn").classList.add("liked"),
            Tn(l.id),
            Ne("up", l.id));
      }),
      n.appendChild(u);
  }
}
function xn() {
  const e = {
    author: document.getElementById("modal__joke_author").value,
    name: document.getElementById("modal__joke_name").value,
    body: document.getElementById("modal__joke_text").value,
    type: document.getElementById("modal__joke_type").value,
  };
  console.log(Ln(e)), S();
}
