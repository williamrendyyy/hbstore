import {
  R as ee,
  r as j,
  a as s,
  j as P,
  F as Ae,
  W as Te,
  b as Be,
  g as Ee,
} from "./app-5671d959.js";
import { A as Oe } from "./AppLayout-4723d86e.js";
import { C as Pe } from "./Container-eb0ec0a9.js";
import { I as Y } from "./InputLabel-0071d7eb.js";
import { T as X } from "./TextInput-536b75fd.js";
import { P as Me } from "./PrimaryButton-1942541d.js";
import { I as ae } from "./InputError-08f64127.js";
import { I as je } from "./IconX-9b1a34b5.js";
import { c as se } from "./createReactComponent-b151f947.js";
import { S as Le } from "./Select-1e40d041.js";
import "./ApplicationLogo-009a746a.js";
import "./transition-a2c1e9ed.js";
import "./use-flags-24a59ca7.js";
var Ue = se("photo", "IconPhoto", [
    ["path", { d: "M15 8h.01", key: "svg-0" }],
    [
      "path",
      {
        d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",
        key: "svg-1",
      },
    ],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5", key: "svg-2" }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3", key: "svg-3" }],
  ]),
  We = se("square-rounded-plus-filled", "IconSquareRoundedPlusFilled", [
    [
      "path",
      {
        d: "M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z",
        fill: "currentColor",
        key: "svg-0",
        strokeWidth: "0",
      },
    ],
  ]),
  Ke = se("trash", "IconTrash", [
    ["path", { d: "M4 7l16 0", key: "svg-0" }],
    ["path", { d: "M10 11l0 6", key: "svg-1" }],
    ["path", { d: "M14 11l0 6", key: "svg-2" }],
    [
      "path",
      { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" },
    ],
    ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }],
  ]);
function he(e, a) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      a.indexOf(r) < 0 &&
      (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      a.indexOf(r[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
        (t[r[n]] = e[r[n]]);
  return t;
}
var ne;
(function (e) {
  (e.event = "event"), (e.props = "prop");
})(ne || (ne = {}));
function q() {}
function ie(e) {
  return !!(e || "").match(/\d/);
}
function te(e) {
  return e == null;
}
function Ge(e) {
  return typeof e == "number" && isNaN(e);
}
function pe(e) {
  return te(e) || Ge(e) || (typeof e == "number" && !isFinite(e));
}
function be(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function $e(e) {
  switch (e) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case "thousand":
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function Ze(e, a, t) {
  var r = $e(t),
    n = e.search(/[1-9]/);
  return (
    (n = n === -1 ? e.length : n),
    e.substring(0, n) + e.substring(n, e.length).replace(r, "$1" + a)
  );
}
function qe(e) {
  var a = j.useRef(e);
  a.current = e;
  var t = j.useRef(function () {
    for (var r = [], n = arguments.length; n--; ) r[n] = arguments[n];
    return a.current.apply(a, r);
  });
  return t.current;
}
function fe(e, a) {
  a === void 0 && (a = !0);
  var t = e[0] === "-",
    r = t && a;
  e = e.replace("-", "");
  var n = e.split("."),
    i = n[0],
    f = n[1] || "";
  return { beforeDecimal: i, afterDecimal: f, hasNegation: t, addNegation: r };
}
function ze(e) {
  if (!e) return e;
  var a = e[0] === "-";
  a && (e = e.substring(1, e.length));
  var t = e.split("."),
    r = t[0].replace(/^0+/, "") || "0",
    n = t[1] || "";
  return (a ? "-" : "") + r + (n ? "." + n : "");
}
function ye(e, a, t) {
  for (var r = "", n = t ? "0" : "", i = 0; i <= a - 1; i++) r += e[i] || n;
  return r;
}
function de(e, a) {
  return Array(a + 1).join(e);
}
function xe(e) {
  var a = e + "",
    t = a[0] === "-" ? "-" : "";
  t && (a = a.substring(1));
  var r = a.split(/[eE]/g),
    n = r[0],
    i = r[1];
  if (((i = Number(i)), !i)) return t + n;
  n = n.replace(".", "");
  var f = 1 + i,
    w = n.length;
  return (
    f < 0
      ? (n = "0." + de("0", Math.abs(f)) + n)
      : f >= w
      ? (n = n + de("0", f - w))
      : (n = (n.substring(0, f) || "0") + "." + n.substring(f)),
    t + n
  );
}
function ve(e, a, t) {
  if (["", "-"].indexOf(e) !== -1) return e;
  var r = (e.indexOf(".") !== -1 || t) && a,
    n = fe(e),
    i = n.beforeDecimal,
    f = n.afterDecimal,
    w = n.hasNegation,
    N = parseFloat("0." + (f || "0")),
    S = f.length <= a ? "0." + f : N.toFixed(a),
    g = S.split("."),
    p = i
      .split("")
      .reverse()
      .reduce(function (d, D, v) {
        return d.length > v
          ? (Number(d[0]) + Number(D)).toString() + d.substring(1, d.length)
          : D + d;
      }, g[0]),
    y = ye(g[1] || "", a, t),
    h = w ? "-" : "",
    m = r ? "." : "";
  return "" + h + p + m + y;
}
function J(e, a) {
  if (((e.value = e.value), e !== null)) {
    if (e.createTextRange) {
      var t = e.createTextRange();
      return t.move("character", a), t.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0
      ? (e.focus(), e.setSelectionRange(a, a), !0)
      : (e.focus(), !1);
  }
}
function we(e, a) {
  for (var t = 0, r = 0, n = e.length, i = a.length; e[t] === a[t] && t < n; )
    t++;
  for (; e[n - 1 - r] === a[i - 1 - r] && i - r > t && n - r > t; ) r++;
  return { from: { start: t, end: n - r }, to: { start: t, end: i - r } };
}
function He(e, a, t) {
  return Math.min(Math.max(e, a), t);
}
function ue(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Xe() {
  return (
    typeof navigator < "u" &&
    !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
  );
}
function Je(e) {
  return {
    from: { start: 0, end: 0 },
    to: { start: 0, end: e.length },
    lastValue: "",
  };
}
function Qe(e, a, t, r, n, i) {
  var f = we(t, e),
    w = f.from,
    N = f.to;
  if (w.end - w.start === 1 && w.end === N.end && N.end === r) return r;
  var S = n.findIndex(function (G) {
      return G;
    }),
    g = e.slice(0, S);
  !a && !t.startsWith(g) && ((t = g + t), (r = r + g.length));
  for (
    var p = t.length, y = e.length, h = {}, m = new Array(p), d = 0;
    d < p;
    d++
  ) {
    m[d] = -1;
    for (var D = 0, v = y; D < v; D++)
      if (t[d] === e[D] && h[D] !== !0) {
        (m[d] = D), (h[D] = !0);
        break;
      }
  }
  for (var u = r; u < p && (m[u] === -1 || !i(t[u])); ) u++;
  var x = u === p || m[u] === -1 ? y : m[u];
  for (u = r - 1; u > 0 && m[u] === -1; ) u--;
  var O = u === -1 || m[u] === -1 ? 0 : m[u] + 1;
  return O > x ? x : r - O < x - r ? O : x;
}
function me(e, a, t, r) {
  var n = e.length;
  if (((a = He(a, 0, n)), r === "left")) {
    for (; a >= 0 && !t[a]; ) a--;
    a === -1 && (a = t.indexOf(!0));
  } else {
    for (; a <= n && !t[a]; ) a++;
    a > n && (a = t.lastIndexOf(!0));
  }
  return a === -1 && (a = n), a;
}
function Ye(e) {
  for (
    var a = Array.from({ length: e.length + 1 }).map(function () {
        return !0;
      }),
      t = 0,
      r = a.length;
    t < r;
    t++
  )
    a[t] = !!(ie(e[t]) || ie(e[t - 1]));
  return a;
}
function Ne(e, a, t, r, n, i) {
  i === void 0 && (i = q);
  var f = qe(function (d, D) {
      var v, u;
      return (
        pe(d)
          ? ((u = ""), (v = ""))
          : typeof d == "number" || D
          ? ((u = typeof d == "number" ? xe(d) : d), (v = r(u)))
          : ((u = n(d, void 0)), (v = r(u))),
        { formattedValue: v, numAsString: u }
      );
    }),
    w = j.useState(function () {
      return f(te(e) ? a : e, t);
    }),
    N = w[0],
    S = w[1],
    g = j.useRef(N),
    p = function (d, D) {
      d.formattedValue !== N.formattedValue &&
        S({ formattedValue: d.formattedValue, numAsString: d.value }),
        i(d, D);
    },
    y = e,
    h = t;
  te(e) && ((y = N.numAsString), (h = !0));
  var m = f(y, h);
  return (
    m.formattedValue !== g.current.formattedValue && ((g.current = m), S(m)),
    [N, p]
  );
}
function ea(e) {
  return e.replace(/[^0-9]/g, "");
}
function aa(e) {
  return e;
}
function ta(e) {
  var a = e.type;
  a === void 0 && (a = "text");
  var t = e.displayType;
  t === void 0 && (t = "input");
  var r = e.customInput,
    n = e.renderText,
    i = e.getInputRef,
    f = e.format;
  f === void 0 && (f = aa);
  var w = e.removeFormatting;
  w === void 0 && (w = ea);
  var N = e.defaultValue,
    S = e.valueIsNumericString,
    g = e.onValueChange,
    p = e.isAllowed,
    y = e.onChange;
  y === void 0 && (y = q);
  var h = e.onKeyDown;
  h === void 0 && (h = q);
  var m = e.onMouseUp;
  m === void 0 && (m = q);
  var d = e.onFocus;
  d === void 0 && (d = q);
  var D = e.onBlur;
  D === void 0 && (D = q);
  var v = e.value,
    u = e.getCaretBoundary;
  u === void 0 && (u = Ye);
  var x = e.isValidInputCharacter;
  x === void 0 && (x = ie);
  var O = he(e, [
      "type",
      "displayType",
      "customInput",
      "renderText",
      "getInputRef",
      "format",
      "removeFormatting",
      "defaultValue",
      "valueIsNumericString",
      "onValueChange",
      "isAllowed",
      "onChange",
      "onKeyDown",
      "onMouseUp",
      "onFocus",
      "onBlur",
      "value",
      "getCaretBoundary",
      "isValidInputCharacter",
    ]),
    G = Ne(v, N, !!S, f, w, g),
    z = G[0],
    C = z.formattedValue,
    $ = z.numAsString,
    Z = G[1],
    L = j.useRef({ formattedValue: C, numAsString: $ }),
    H = function (o, l) {
      (L.current = { formattedValue: o.formattedValue, numAsString: o.value }),
        Z(o, l);
    },
    Q = j.useState(!1),
    b = Q[0],
    I = Q[1],
    B = j.useRef(null),
    k = j.useRef({ setCaretTimeout: null, focusTimeout: null });
  j.useEffect(function () {
    return (
      I(!0),
      function () {
        clearTimeout(k.current.setCaretTimeout),
          clearTimeout(k.current.focusTimeout);
      }
    );
  }, []);
  var U = f,
    A = function (o, l) {
      var c = parseFloat(l);
      return { formattedValue: o, value: l, floatValue: isNaN(c) ? void 0 : c };
    },
    M = function (o, l, c) {
      (o.selectionStart === 0 && o.selectionEnd === o.value.length) ||
        (J(o, l),
        (k.current.setCaretTimeout = setTimeout(function () {
          o.value === c && o.selectionStart !== o.selectionEnd && J(o, l);
        }, 0)));
    },
    E = function (o, l, c) {
      return me(o, l, u(o), c);
    },
    W = function (o, l, c) {
      var _ = u(l),
        R = Qe(l, C, o, c, _, x);
      return (R = me(l, R, _)), R;
    },
    K = function (o) {
      var l = o.formattedValue;
      l === void 0 && (l = "");
      var c = o.input,
        _ = o.setCaretPosition;
      _ === void 0 && (_ = !0);
      var R = o.source,
        V = o.event,
        F = o.numAsString,
        T = o.caretPos;
      if (c) {
        if (T === void 0 && _) {
          var re = o.inputValue || c.value,
            le = ue(c);
          (c.value = l), (T = W(re, l, le));
        }
        (c.value = l), _ && T !== void 0 && M(c, T, l);
      }
      l !== C && H(A(l, F), { event: V, source: R });
    };
  j.useEffect(
    function () {
      var o = L.current,
        l = o.formattedValue,
        c = o.numAsString;
      C !== l &&
        (C !== $ || l !== c) &&
        H(A(C, $), { event: void 0, source: ne.props });
    },
    [C, $]
  );
  var Se = B.current ? ue(B.current) : void 0;
  j.useLayoutEffect(
    function () {
      var o = B.current;
      if (C !== L.current.formattedValue && o) {
        var l = W(L.current.formattedValue, C, Se);
        (o.value = C), M(o, l, C);
      }
    },
    [C]
  );
  var Ce = function (o, l, c) {
      var _ = we(C, o),
        R = Object.assign(Object.assign({}, _), { lastValue: C }),
        V = w(o, R),
        F = U(V);
      if (((V = w(F, void 0)), p && !p(A(F, V)))) {
        var T = l.target,
          re = ue(T),
          le = W(o, C, re);
        return (T.value = C), M(T, le, C), !1;
      }
      return (
        K({
          formattedValue: F,
          numAsString: V,
          inputValue: o,
          event: l,
          source: c,
          setCaretPosition: !0,
          input: l.target,
        }),
        !0
      );
    },
    De = function (o) {
      var l = o.target,
        c = l.value,
        _ = Ce(c, o, ne.event);
      _ && y(o);
    },
    Ie = function (o) {
      var l = o.target,
        c = o.key,
        _ = l.selectionStart,
        R = l.selectionEnd,
        V = l.value;
      V === void 0 && (V = "");
      var F;
      if (
        (c === "ArrowLeft" || c === "Backspace"
          ? (F = Math.max(_ - 1, 0))
          : c === "ArrowRight"
          ? (F = Math.min(_ + 1, V.length))
          : c === "Delete" && (F = _),
        F === void 0 || _ !== R)
      ) {
        h(o);
        return;
      }
      var T = F;
      if (c === "ArrowLeft" || c === "ArrowRight") {
        var re = c === "ArrowLeft" ? "left" : "right";
        (T = E(V, F, re)), T !== F && o.preventDefault();
      } else
        c === "Delete" && !x(V[F])
          ? (T = E(V, F, "right"))
          : c === "Backspace" && !x(V[F]) && (T = E(V, F, "left"));
      T !== F && M(l, T, V), o.isUnitTestRun && M(l, T, V), h(o);
    },
    Ve = function (o) {
      var l = o.target,
        c = l.selectionStart,
        _ = l.selectionEnd,
        R = l.value;
      if ((R === void 0 && (R = ""), c === _)) {
        var V = E(R, c);
        V !== c && M(l, V, R);
      }
      m(o);
    },
    _e = function (o) {
      o.persist && o.persist();
      var l = o.target;
      (B.current = l),
        (k.current.focusTimeout = setTimeout(function () {
          var c = l.selectionStart,
            _ = l.selectionEnd,
            R = l.value;
          R === void 0 && (R = "");
          var V = E(R, c);
          V !== c && !(c === 0 && _ === R.length) && M(l, V, R), d(o);
        }, 0));
    },
    Re = function (o) {
      (B.current = null),
        clearTimeout(k.current.focusTimeout),
        clearTimeout(k.current.setCaretTimeout),
        D(o);
    },
    ke = b && Xe() ? "numeric" : void 0,
    ce = Object.assign({ inputMode: ke }, O, {
      type: a,
      value: C,
      onChange: De,
      onKeyDown: Ie,
      onMouseUp: Ve,
      onFocus: _e,
      onBlur: Re,
    });
  if (t === "text")
    return n
      ? ee.createElement(ee.Fragment, null, n(C, O) || null)
      : ee.createElement("span", Object.assign({}, O, { ref: i }), C);
  if (r) {
    var Fe = r;
    return ee.createElement(Fe, Object.assign({}, ce, { ref: i }));
  }
  return ee.createElement("input", Object.assign({}, ce, { ref: i }));
}
function ge(e, a) {
  var t = a.decimalScale,
    r = a.fixedDecimalScale,
    n = a.prefix;
  n === void 0 && (n = "");
  var i = a.suffix;
  i === void 0 && (i = "");
  var f = a.allowNegative,
    w = a.thousandsGroupStyle;
  if ((w === void 0 && (w = "thousand"), e === "" || e === "-")) return e;
  var N = oe(a),
    S = N.thousandSeparator,
    g = N.decimalSeparator,
    p = (t !== 0 && e.indexOf(".") !== -1) || (t && r),
    y = fe(e, f),
    h = y.beforeDecimal,
    m = y.afterDecimal,
    d = y.addNegation;
  return (
    t !== void 0 && (m = ye(m, t, !!r)),
    S && (h = Ze(h, S, w)),
    n && (h = n + h),
    i && (m = m + i),
    d && (h = "-" + h),
    (e = h + ((p && g) || "") + m),
    e
  );
}
function oe(e) {
  var a = e.decimalSeparator;
  a === void 0 && (a = ".");
  var t = e.thousandSeparator,
    r = e.allowedDecimalSeparators;
  return (
    t === !0 && (t = ","),
    r || (r = [a, "."]),
    { decimalSeparator: a, thousandSeparator: t, allowedDecimalSeparators: r }
  );
}
function ra(e, a) {
  e === void 0 && (e = "");
  var t = new RegExp("(-)"),
    r = new RegExp("(-)(.)*(-)"),
    n = t.test(e),
    i = r.test(e);
  return (e = e.replace(/-/g, "")), n && !i && a && (e = "-" + e), e;
}
function na(e, a) {
  return new RegExp("(^-)|[0-9]|" + be(e), a ? "g" : void 0);
}
function ia(e, a, t) {
  return e === ""
    ? !0
    : !(a != null && a.match(/\d/)) &&
        !(t != null && t.match(/\d/)) &&
        typeof e == "string" &&
        !isNaN(Number(e));
}
function oa(e, a, t) {
  var r;
  a === void 0 && (a = Je(e));
  var n = t.allowNegative,
    i = t.prefix;
  i === void 0 && (i = "");
  var f = t.suffix;
  f === void 0 && (f = "");
  var w = t.decimalScale,
    N = a.from,
    S = a.to,
    g = S.start,
    p = S.end,
    y = oe(t),
    h = y.allowedDecimalSeparators,
    m = y.decimalSeparator,
    d = e[p] === m;
  if (ie(e) && (e === i || e === f) && a.lastValue === "") return e;
  if (p - g === 1 && h.indexOf(e[g]) !== -1) {
    var D = w === 0 ? "" : m;
    e = e.substring(0, g) + D + e.substring(g + 1, e.length);
  }
  var v = function (U, A, M) {
      var E = !1,
        W = !1;
      i.startsWith("-")
        ? (E = !1)
        : U.startsWith("--")
        ? ((E = !1), (W = !0))
        : f.startsWith("-") && U.length === f.length
        ? (E = !1)
        : U[0] === "-" && (E = !0);
      var K = E ? 1 : 0;
      return (
        W && (K = 2),
        K && ((U = U.substring(K)), (A -= K), (M -= K)),
        { value: U, start: A, end: M, hasNegation: E }
      );
    },
    u = v(e, g, p),
    x = u.hasNegation;
  (r = u), (e = r.value), (g = r.start), (p = r.end);
  var O = v(a.lastValue, N.start, N.end),
    G = O.start,
    z = O.end,
    C = O.value,
    $ = e.substring(g, p);
  e.length &&
    C.length &&
    (G > C.length - f.length || z < i.length) &&
    !($ && f.startsWith($)) &&
    (e = C);
  var Z = 0;
  e.startsWith(i) ? (Z += i.length) : g < i.length && (Z = g),
    (e = e.substring(Z)),
    (p -= Z);
  var L = e.length,
    H = e.length - f.length;
  e.endsWith(f) ? (L = H) : (p > H || p > e.length - f.length) && (L = p),
    (e = e.substring(0, L)),
    (e = ra(x ? "-" + e : e, n)),
    (e = (e.match(na(m, !0)) || []).join(""));
  var Q = e.indexOf(m);
  e = e.replace(new RegExp(be(m), "g"), function (U, A) {
    return A === Q ? "." : "";
  });
  var b = fe(e, n),
    I = b.beforeDecimal,
    B = b.afterDecimal,
    k = b.addNegation;
  return (
    S.end - S.start < N.end - N.start &&
      I === "" &&
      d &&
      !parseFloat(B) &&
      (e = k ? "-" : ""),
    e
  );
}
function la(e, a) {
  var t = a.prefix;
  t === void 0 && (t = "");
  var r = a.suffix;
  r === void 0 && (r = "");
  var n = Array.from({ length: e.length + 1 }).map(function () {
      return !0;
    }),
    i = e[0] === "-";
  n.fill(!1, 0, t.length + (i ? 1 : 0));
  var f = e.length;
  return n.fill(!1, f - r.length + 1, f + 1), n;
}
function ua(e) {
  var a = oe(e),
    t = a.thousandSeparator,
    r = a.decimalSeparator,
    n = e.prefix;
  n === void 0 && (n = "");
  var i = e.allowNegative;
  if ((i === void 0 && (i = !0), t === r))
    throw new Error(
      `
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` +
        t +
        ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` +
        r +
        ` (default value for decimalSeparator is .)
     `
    );
  return (
    n.startsWith("-") &&
      i &&
      (console.error(
        `
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` +
          n +
          `
      allowNegative: ` +
          i +
          `
    `
      ),
      (i = !1)),
    Object.assign(Object.assign({}, e), { allowNegative: i })
  );
}
function sa(e) {
  e = ua(e);
  var a = e.decimalSeparator;
  a === void 0 && (a = "."), e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix,
    r = e.allowNegative,
    n = e.allowLeadingZeros,
    i = e.onKeyDown;
  i === void 0 && (i = q);
  var f = e.onBlur;
  f === void 0 && (f = q);
  var w = e.thousandSeparator,
    N = e.decimalScale,
    S = e.fixedDecimalScale,
    g = e.prefix;
  g === void 0 && (g = "");
  var p = e.defaultValue,
    y = e.value,
    h = e.valueIsNumericString,
    m = e.onValueChange,
    d = he(e, [
      "decimalSeparator",
      "allowedDecimalSeparators",
      "thousandsGroupStyle",
      "suffix",
      "allowNegative",
      "allowLeadingZeros",
      "onKeyDown",
      "onBlur",
      "thousandSeparator",
      "decimalScale",
      "fixedDecimalScale",
      "prefix",
      "defaultValue",
      "value",
      "valueIsNumericString",
      "onValueChange",
    ]),
    D = function (b) {
      return ge(b, e);
    },
    v = function (b, I) {
      return oa(b, I, e);
    },
    u = te(y) ? p : y,
    x = h ?? ia(u, g, t);
  te(y)
    ? te(p) || (x = h || typeof p == "number")
    : (x = h || typeof y == "number");
  var O = function (b) {
      return pe(b)
        ? b
        : (typeof b == "number" && (b = xe(b)),
          x && typeof N == "number" ? ve(b, N, !!S) : b);
    },
    G = Ne(O(y), O(p), !!x, D, v, m),
    z = G[0],
    C = z.numAsString,
    $ = z.formattedValue,
    Z = G[1],
    L = function (b) {
      var I = b.target,
        B = b.key,
        k = I.selectionStart,
        U = I.selectionEnd,
        A = I.value;
      if ((A === void 0 && (A = ""), k !== U)) {
        i(b);
        return;
      }
      B === "Backspace" && A[0] === "-" && k === g.length + 1 && r && J(I, 1);
      var M = oe(e),
        E = M.decimalSeparator,
        W = M.allowedDecimalSeparators;
      B === "Backspace" &&
        A[k - 1] === E &&
        N &&
        S &&
        (J(I, k - 1), b.preventDefault()),
        W != null && W.includes(B) && A[k] === E && J(I, k + 1);
      var K = w === !0 ? "," : w;
      B === "Backspace" && A[k - 1] === K && J(I, k - 1),
        B === "Delete" && A[k] === K && J(I, k + 1),
        i(b);
    },
    H = function (b) {
      var I = C;
      if (
        (I.match(/\d/g) || (I = ""),
        n || (I = ze(I)),
        S && N && (I = ve(I, N, S)),
        I !== C)
      ) {
        var B = ge(I, e);
        Z(
          { formattedValue: B, value: I, floatValue: parseFloat(I) },
          { event: b, source: ne.event }
        );
      }
      f(b);
    },
    Q = function (b) {
      return b === a ? !0 : ie(b);
    };
  return Object.assign(Object.assign({}, d), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: Q,
    onValueChange: Z,
    format: D,
    removeFormatting: v,
    getCaretBoundary: function (b) {
      return la(b, e);
    },
    onKeyDown: L,
    onBlur: H,
  });
}
function fa(e) {
  var a = sa(e);
  return ee.createElement(ta, Object.assign({}, a));
}
function ca({ setData: e, errors: a }) {
  const [t, r] = j.useState(null);
  return s("div", {
    className: "max-w-xl",
    children: t
      ? P(Ae, {
          children: [
            P("div", {
              className: "relative",
              children: [
                s("button", {
                  onClick: () => r(""),
                  className:
                    "absolute right-0 top-0 mr-4 mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900/50 px-2 py-1 text-xs uppercase text-white hover:bg-gray-900/70",
                  children: s(je, { className: "h-6 w-6 stroke-2" }),
                }),
                s("img", {
                  className: "mb-4 w-full rounded-lg",
                  width: "1280",
                  height: "720",
                  src: t,
                  alt: "Preview",
                }),
              ],
            }),
            (a == null ? void 0 : a.picture) &&
              s("div", {
                className: "mb-5",
                children: s(ae, { message: a.picture }),
              }),
          ],
        })
      : P("label", {
          htmlFor: "picture",
          className: "mb-6 block",
          children: [
            s("div", {
              className:
                "hover:border-primary-500 flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 transition hover:bg-gray-100",
              children: P("div", {
                className: "flex flex-col items-center justify-center",
                children: [
                  s(Ue, {
                    className: "inline h-6 w-6 stroke-[1.5] text-gray-400",
                  }),
                  s("div", {
                    className: "my-2 text-sm text-gray-800",
                    children: "Upload image",
                  }),
                  s("div", {
                    className: "text-2xl text-gray-500",
                    children: "720 x 720 (1:1)",
                  }),
                ],
              }),
            }),
            s("input", {
              type: "file",
              onChange: (i) => {
                e("picture", i.target.files[0]),
                  r(URL.createObjectURL(i.target.files[0]));
              },
              name: "picture",
              id: "picture",
              className: "sr-only",
            }),
          ],
        }),
  });
}
function da({ categories: e, product: a, page_settings: t }) {
  var D;
  const {
      data: r,
      setData: n,
      errors: i,
      post: f,
      processing: w,
      reset: N,
    } = Te({
      category_id: a.category_id || 0,
      picture: "",
      name: a.name || 0,
      weight: a.weight || 0,
      slug: a.slug || 0,
      description: a.description || 0,
      price: a.price || 0,
      _method: t.method,
    }),
    [S, g] = j.useState(
      a.variations && ((D = a.variations) == null ? void 0 : D.length) > 0
        ? a.variations
        : [
            {
              attribute_1: "",
              attribute_2: "",
              price: "",
              stock: "",
              weight: r.weight,
            },
          ]
    );
  function p(v) {
    v.preventDefault(),
      Ee.post(
        t.url,
        { ...r, variations: S },
        {
          preserveScroll: !0,
          onSuccess: () => {
            N(),
              g([
                {
                  attribute_1: "",
                  attribute_2: "",
                  price: "",
                  stock: "",
                  weight: 0,
                },
              ]);
          },
        }
      );
  }
  function y(v, u) {
    let x = [...S];
    (x[v][u.target.name] = u.target.value), g(x);
  }
  function h(v) {
    n(v.target.name, v.target.value);
  }
  function m() {
    let v = { attribute_1: "", attribute_2: "", price: 0, weight: 0, stock: 0 };
    g([...S, v]);
  }
  function d(v) {
    const u = [...S];
    u.splice(v, 1), g(u);
  }
  return P("div", {
    children: [
      s(Be, { title: "Tambah Produk" }),
      s(Pe, {
        children: s("div", {
          className: "mt-16 rounded-xl bg-white p-4 shadow",
          children: P("form", {
            onSubmit: p,
            children: [
              s(ca, { errors: i, setData: n }),
              P("div", {
                className: "mb-6 max-w-xl",
                children: [
                  s(Y, { htmlFor: "name", value: "Name" }),
                  s(X, {
                    className: "w-full",
                    onChange: h,
                    name: "name",
                    value: r.name,
                  }),
                  s(ae, { message: i.name }),
                ],
              }),
              P("div", {
                className: "mb-6 max-w-xl",
                children: [
                  s(Y, { htmlFor: "weight", value: "Weight" }),
                  s(X, {
                    type: "number",
                    placeholder: 200,
                    className: "w-full",
                    onChange: h,
                    name: "weight",
                    value: r.weight,
                  }),
                  s(ae, { message: i.weight }),
                ],
              }),
              P("div", {
                className: "mb-6 max-w-xs",
                children: [
                  s(Y, { htmlFor: "price", value: "Price" }),
                  s(fa, {
                    className:
                      "w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                    name: "price",
                    prefix: "Rp ",
                    thousandSeparator: !0,
                    "aria-describedby": "price-currency",
                    allowNegative: !1,
                    decimalScale: 2,
                    value: r.price,
                    onValueChange: (v, u) => {
                      n("price", v.floatValue);
                    },
                  }),
                  s(ae, { message: i.price }),
                ],
              }),
              P("div", {
                className: "mb-6 max-w-xl",
                children: [
                  s(Y, { htmlFor: "category_id", value: "Category" }),
                  s(Le, {
                    name: "category_id",
                    id: "category_id",
                    options: e,
                    className:
                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6",
                    value: r.category_id,
                    onChange: h,
                  }),
                  s(ae, { message: i.category_id }),
                ],
              }),
              P("div", {
                className: "mb-6 max-w-xl",
                children: [
                  s(Y, { htmlFor: "description", value: "Description" }),
                  s("textarea", {
                    rows: 4,
                    name: "description",
                    id: "description",
                    className:
                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6",
                    value: r.description,
                    onChange: h,
                  }),
                  s(ae, { message: i.description }),
                ],
              }),
              s("div", {
                className: "mb-6",
                children: P("div", {
                  children: [
                    P("div", {
                      className: "mb-2 flex items-center gap-x-2",
                      children: [
                        s(Y, { htmlFor: "variation", value: "Variations" }),
                        s("button", {
                          className: "text-blue-500",
                          type: "button",
                          onClick: () => m(),
                          children: s(We, {}),
                        }),
                      ],
                    }),
                    S.map((v, u) =>
                      P(
                        "div",
                        {
                          className: "mb-2 grid grid-cols-12 gap-2",
                          children: [
                            s(X, {
                              className: "col-span-2 h-9 w-full",
                              type: "text",
                              name: "attribute_1",
                              placeholder: "Attribute 1",
                              value: v.attribute_1,
                              onChange: (x) => y(u, x),
                            }),
                            s(X, {
                              className: "col-span-2 h-9 w-full",
                              type: "text",
                              name: "attribute_2",
                              placeholder: "Attribute 2",
                              value: v.attribute_2,
                              onChange: (x) => y(u, x),
                            }),
                            s(X, {
                              className: "col-span-2 h-9 w-full",
                              type: "number",
                              name: "price",
                              placeholder: "Price",
                              value: v.price,
                              onChange: (x) => y(u, x),
                            }),
                            s(X, {
                              className: "col-span-2 h-9 w-full",
                              type: "number",
                              name: "stock",
                              placeholder: "Stock",
                              value: v.stock,
                              onChange: (x) => y(u, x),
                            }),
                            s(X, {
                              className: "col-span-2 h-9 w-full",
                              type: "number",
                              name: "weight",
                              placeholder: "Satuan Gram",
                              value: v.weight,
                              onChange: (x) => y(u, x),
                            }),
                            s("div", {
                              className: "col-span-1",
                              children: s("button", {
                                type: "button",
                                className:
                                  "flex h-9 w-9 rounded bg-gray-900 text-sm font-medium text-white",
                                onClick: () => d(u),
                                children: s(Ke, {
                                  className: "m-auto h-4 w-4 stroke-1",
                                }),
                              }),
                            }),
                          ],
                        },
                        u
                      )
                    ),
                  ],
                }),
              }),
              s(Me, { disabled: w, children: "Submit" }),
            ],
          }),
        }),
      }),
    ],
  });
}
da.layout = (e) =>
  s(Oe, {
    header: s("h2", {
      className: "text-xl font-semibold leading-tight text-slate-800",
      children: e.props.page_settings.title,
    }),
    children: e,
  });
export { da as default };
