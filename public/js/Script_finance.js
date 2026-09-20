var Wc = Object.create;
var { getPrototypeOf: Qc, defineProperty: zl, getOwnPropertyNames: Hc } = Object;
var Kc = Object.prototype.hasOwnProperty;
var mt = (e, t, n) => {
  n = e != null ? Wc(Qc(e)) : {};
  let r = t || !e || !e.__esModule ? zl(n, 'default', { value: e, enumerable: !0 }) : n;
  for (let l of Hc(e)) if (!Kc.call(r, l)) zl(r, l, { get: () => e[l], enumerable: !0 });
  return r;
};
var or = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Gc = (e, t) => {
  for (var n in t)
    zl(e, n, {
      get: t[n],
      enumerable: !0,
      configurable: !0,
      set: (r) => (t[n] = () => r),
    });
};
var Yc = (e, t) => () => (e && (t = e((e = 0))), t);
var cn = or((sd) => {
  var sn = Symbol.for('react.element'),
    Xc = Symbol.for('react.portal'),
    qc = Symbol.for('react.fragment'),
    Zc = Symbol.for('react.strict_mode'),
    Jc = Symbol.for('react.profiler'),
    jc = Symbol.for('react.provider'),
    bc = Symbol.for('react.context'),
    ed = Symbol.for('react.forward_ref'),
    td = Symbol.for('react.suspense'),
    nd = Symbol.for('react.memo'),
    rd = Symbol.for('react.lazy'),
    jo = Symbol.iterator;
  function ld(e) {
    if (e === null || typeof e !== 'object') return null;
    return ((e = (jo && e[jo]) || e['@@iterator']), typeof e === 'function' ? e : null);
  }
  var tu = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    nu = Object.assign,
    ru = {};
  function Rt(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = ru), (this.updater = n || tu));
  }
  Rt.prototype.isReactComponent = {};
  Rt.prototype.setState = function (e, t) {
    if (typeof e !== 'object' && typeof e !== 'function' && e != null)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
      );
    this.updater.enqueueSetState(this, e, t, 'setState');
  };
  Rt.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  };
  function lu() {}
  lu.prototype = Rt.prototype;
  function Ll(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = ru), (this.updater = n || tu));
  }
  var Rl = (Ll.prototype = new lu());
  Rl.constructor = Ll;
  nu(Rl, Rt.prototype);
  Rl.isPureReactComponent = !0;
  var bo = Array.isArray,
    iu = Object.prototype.hasOwnProperty,
    Fl = { current: null },
    ou = { key: !0, ref: !0, __self: !0, __source: !0 };
  function uu(e, t, n) {
    var r,
      l = {},
      i = null,
      o = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = '' + t.key), t))
        iu.call(t, r) && !ou.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
      for (var a = Array(u), f = 0; f < u; f++) a[f] = arguments[f + 2];
      l.children = a;
    }
    if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
      $$typeof: sn,
      type: e,
      key: i,
      ref: o,
      props: l,
      _owner: Fl.current,
    };
  }
  function id(e, t) {
    return {
      $$typeof: sn,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Ml(e) {
    return typeof e === 'object' && e !== null && e.$$typeof === sn;
  }
  function od(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
      '$' +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var eu = /\/+/g;
  function Tl(e, t) {
    return typeof e === 'object' && e !== null && e.key != null ? od('' + e.key) : t.toString(36);
  }
  function ar(e, t, n, r, l) {
    var i = typeof e;
    if (i === 'undefined' || i === 'boolean') e = null;
    var o = !1;
    if (e === null) o = !0;
    else
      switch (i) {
        case 'string':
        case 'number':
          o = !0;
          break;
        case 'object':
          switch (e.$$typeof) {
            case sn:
            case Xc:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (l = l(o)),
        (e = r === '' ? '.' + Tl(o, 0) : r),
        bo(l)
          ? ((n = ''),
            e != null && (n = e.replace(eu, '$&/') + '/'),
            ar(l, t, n, '', function (f) {
              return f;
            }))
          : l != null &&
            (Ml(l) &&
              (l = id(
                l,
                n +
                  (!l.key || (o && o.key === l.key) ? '' : ('' + l.key).replace(eu, '$&/') + '/') +
                  e,
              )),
            t.push(l)),
        1
      );
    if (((o = 0), (r = r === '' ? '.' : r + ':'), bo(e)))
      for (var u = 0; u < e.length; u++) {
        i = e[u];
        var a = r + Tl(i, u);
        o += ar(i, t, n, a, l);
      }
    else if (((a = ld(e)), typeof a === 'function'))
      for (e = a.call(e), u = 0; !(i = e.next()).done; )
        ((i = i.value), (a = r + Tl(i, u++)), (o += ar(i, t, n, a, l)));
    else if (i === 'object')
      throw (
        (t = String(e)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    return o;
  }
  function ur(e, t, n) {
    if (e == null) return e;
    var r = [],
      l = 0;
    return (
      ar(e, r, '', '', function (i) {
        return t.call(n, i, l++);
      }),
      r
    );
  }
  function ud(e) {
    if (e._status === -1) {
      var t = e._result;
      ((t = t()),
        t.then(
          function (n) {
            if (e._status === 0 || e._status === -1) ((e._status = 1), (e._result = n));
          },
          function (n) {
            if (e._status === 0 || e._status === -1) ((e._status = 2), (e._result = n));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t)));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var ne = { current: null },
    sr = { transition: null },
    ad = {
      ReactCurrentDispatcher: ne,
      ReactCurrentBatchConfig: sr,
      ReactCurrentOwner: Fl,
    };
  function au() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  sd.Children = {
    map: ur,
    forEach: function (e, t, n) {
      ur(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        ur(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        ur(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Ml(e))
        throw Error('React.Children.only expected to receive a single React element child.');
      return e;
    },
  };
  sd.Component = Rt;
  sd.Fragment = qc;
  sd.Profiler = Jc;
  sd.PureComponent = Ll;
  sd.StrictMode = Zc;
  sd.Suspense = td;
  sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ad;
  sd.act = au;
  sd.cloneElement = function (e, t, n) {
    if (e === null || e === void 0)
      throw Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
      );
    var r = nu({}, e.props),
      l = e.key,
      i = e.ref,
      o = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((i = t.ref), (o = Fl.current)),
        t.key !== void 0 && (l = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var u = e.type.defaultProps;
      for (a in t)
        iu.call(t, a) &&
          !ou.hasOwnProperty(a) &&
          (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
      u = Array(a);
      for (var f = 0; f < a; f++) u[f] = arguments[f + 2];
      r.children = u;
    }
    return {
      $$typeof: sn,
      type: e.type,
      key: l,
      ref: i,
      props: r,
      _owner: o,
    };
  };
  sd.createContext = function (e) {
    return (
      (e = {
        $$typeof: bc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: jc, _context: e }),
      (e.Consumer = e)
    );
  };
  sd.createElement = uu;
  sd.createFactory = function (e) {
    var t = uu.bind(null, e);
    return ((t.type = e), t);
  };
  sd.createRef = function () {
    return { current: null };
  };
  sd.forwardRef = function (e) {
    return { $$typeof: ed, render: e };
  };
  sd.isValidElement = Ml;
  sd.lazy = function (e) {
    return {
      $$typeof: rd,
      _payload: { _status: -1, _result: e },
      _init: ud,
    };
  };
  sd.memo = function (e, t) {
    return { $$typeof: nd, type: e, compare: t === void 0 ? null : t };
  };
  sd.startTransition = function (e) {
    var t = sr.transition;
    sr.transition = {};
    try {
      e();
    } finally {
      sr.transition = t;
    }
  };
  sd.unstable_act = au;
  sd.useCallback = function (e, t) {
    return ne.current.useCallback(e, t);
  };
  sd.useContext = function (e) {
    return ne.current.useContext(e);
  };
  sd.useDebugValue = function () {};
  sd.useDeferredValue = function (e) {
    return ne.current.useDeferredValue(e);
  };
  sd.useEffect = function (e, t) {
    return ne.current.useEffect(e, t);
  };
  sd.useId = function () {
    return ne.current.useId();
  };
  sd.useImperativeHandle = function (e, t, n) {
    return ne.current.useImperativeHandle(e, t, n);
  };
  sd.useInsertionEffect = function (e, t) {
    return ne.current.useInsertionEffect(e, t);
  };
  sd.useLayoutEffect = function (e, t) {
    return ne.current.useLayoutEffect(e, t);
  };
  sd.useMemo = function (e, t) {
    return ne.current.useMemo(e, t);
  };
  sd.useReducer = function (e, t, n) {
    return ne.current.useReducer(e, t, n);
  };
  sd.useRef = function (e) {
    return ne.current.useRef(e);
  };
  sd.useState = function (e) {
    return ne.current.useState(e);
  };
  sd.useSyncExternalStore = function (e, t, n) {
    return ne.current.useSyncExternalStore(e, t, n);
  };
  sd.useTransition = function () {
    return ne.current.useTransition();
  };
  sd.version = '18.3.1';
});
var vu = or((Yd) => {
  function Ol(e, t) {
    var n = e.length;
    e.push(t);
    e: for (; 0 < n; ) {
      var r = (n - 1) >>> 1,
        l = e[r];
      if (0 < cr(l, t)) ((e[r] = t), (e[n] = l), (n = r));
      else break e;
    }
  }
  function Se(e) {
    return e.length === 0 ? null : e[0];
  }
  function mr(e) {
    if (e.length === 0) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      e: for (var r = 0, l = e.length, i = l >>> 1; r < i; ) {
        var o = 2 * (r + 1) - 1,
          u = e[o],
          a = o + 1,
          f = e[a];
        if (0 > cr(u, n))
          a < l && 0 > cr(f, u)
            ? ((e[r] = f), (e[a] = n), (r = a))
            : ((e[r] = u), (e[o] = n), (r = o));
        else if (a < l && 0 > cr(f, n)) ((e[r] = f), (e[a] = n), (r = a));
        else break e;
      }
    }
    return t;
  }
  function cr(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id;
  }
  if (typeof performance === 'object' && typeof performance.now === 'function')
    ((Dl = performance),
      (Yd.unstable_now = function () {
        return Dl.now();
      }));
  else
    ((dr = Date),
      (Al = dr.now()),
      (Yd.unstable_now = function () {
        return dr.now() - Al;
      }));
  var Dl,
    dr,
    Al,
    Le = [],
    Ye = [],
    Gd = 1,
    ve = null,
    J = 3,
    vr = !1,
    vt = !1,
    fn = !1,
    cu = typeof setTimeout === 'function' ? setTimeout : null,
    du = typeof clearTimeout === 'function' ? clearTimeout : null,
    su = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function Ul(e) {
    for (var t = Se(Ye); t !== null; ) {
      if (t.callback === null) mr(Ye);
      else if (t.startTime <= e) (mr(Ye), (t.sortIndex = t.expirationTime), Ol(Le, t));
      else break;
      t = Se(Ye);
    }
  }
  function Vl(e) {
    if (((fn = !1), Ul(e), !vt))
      if (Se(Le) !== null) ((vt = !0), Wl($l));
      else {
        var t = Se(Ye);
        t !== null && Ql(Vl, t.startTime - e);
      }
  }
  function $l(e, t) {
    ((vt = !1), fn && ((fn = !1), du(pn), (pn = -1)), (vr = !0));
    var n = J;
    try {
      Ul(t);
      for (ve = Se(Le); ve !== null && (!(ve.expirationTime > t) || (e && !mu())); ) {
        var r = ve.callback;
        if (typeof r === 'function') {
          ((ve.callback = null), (J = ve.priorityLevel));
          var l = r(ve.expirationTime <= t);
          ((t = Yd.unstable_now()),
            typeof l === 'function' ? (ve.callback = l) : ve === Se(Le) && mr(Le),
            Ul(t));
        } else mr(Le);
        ve = Se(Le);
      }
      if (ve !== null) var i = !0;
      else {
        var o = Se(Ye);
        (o !== null && Ql(Vl, o.startTime - t), (i = !1));
      }
      return i;
    } finally {
      ((ve = null), (J = n), (vr = !1));
    }
  }
  var hr = !1,
    fr = null,
    pn = -1,
    fu = 5,
    pu = -1;
  function mu() {
    return Yd.unstable_now() - pu < fu ? !1 : !0;
  }
  function Il() {
    if (fr !== null) {
      var e = Yd.unstable_now();
      pu = e;
      var t = !0;
      try {
        t = fr(!0, e);
      } finally {
        t ? dn() : ((hr = !1), (fr = null));
      }
    } else hr = !1;
  }
  var dn;
  if (typeof su === 'function')
    dn = function () {
      su(Il);
    };
  else if (typeof MessageChannel < 'u')
    ((pr = new MessageChannel()),
      (Bl = pr.port2),
      (pr.port1.onmessage = Il),
      (dn = function () {
        Bl.postMessage(null);
      }));
  else
    dn = function () {
      cu(Il, 0);
    };
  var pr, Bl;
  function Wl(e) {
    ((fr = e), hr || ((hr = !0), dn()));
  }
  function Ql(e, t) {
    pn = cu;
    // === ATIVAÇÃO SEÇÃO DE VENDAS ===
    window.CHECKOUT_URL = window.CHECKOUT_URL || 'https://pay.kiwify.com.br/SEU_LINK_AQUI';
    (function () {
      // Smooth scroll para todos os links #checkout que são âncora interna
      document.addEventListener('click', function (e) {
        const a = e.target.closest('a[href="#checkout"]');
        if (a) {
          e.preventDefault();
          document
            .getElementById('checkout')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (window.fbq) fbq('track', 'ViewContent');
        }
      });
      // Adiciona pixels e urgência na seção checkout
      const checkoutSection = document.getElementById('checkout');
      if (checkoutSection) {
        checkoutSection.style.display = 'block';
        checkoutSection.style.opacity = '1';
      }
      console.log('✅ Seção de vendas ATIVADA. Checkout URL:', window.CHECKOUT_URL);
    })();

    ((function () {
      e(Yd.unstable_now());
    }),
      t);
  }
  Yd.unstable_IdlePriority = 5;
  Yd.unstable_ImmediatePriority = 1;
  Yd.unstable_LowPriority = 4;
  Yd.unstable_NormalPriority = 3;
  Yd.unstable_Profiling = null;
  Yd.unstable_UserBlockingPriority = 2;
  Yd.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  Yd.unstable_continueExecution = function () {
    vt || vr || ((vt = !0), Wl($l));
  };
  Yd.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e
      ? console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
        )
      : (fu = 0 < e ? Math.floor(1000 / e) : 5);
  };
  Yd.unstable_getCurrentPriorityLevel = function () {
    return J;
  };
  Yd.unstable_getFirstCallbackNode = function () {
    return Se(Le);
  };
  Yd.unstable_next = function (e) {
    switch (J) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = J;
    }
    var n = J;
    J = t;
    try {
      return e();
    } finally {
      J = n;
    }
  };
  Yd.unstable_pauseExecution = function () {};
  Yd.unstable_requestPaint = function () {};
  Yd.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = J;
    J = e;
    try {
      return t();
    } finally {
      J = n;
    }
  };
  Yd.unstable_scheduleCallback = function (e, t, n) {
    var r = Yd.unstable_now();
    switch (
      (typeof n === 'object' && n !== null
        ? ((n = n.delay), (n = typeof n === 'number' && 0 < n ? r + n : r))
        : (n = r),
      e)
    ) {
      case 1:
        var l = -1;
        break;
      case 2:
        l = 250;
        break;
      case 5:
        l = 1073741823;
        break;
      case 4:
        l = 1e4;
        break;
      default:
        l = 5000;
    }
    return (
      (l = n + l),
      (e = {
        id: Gd++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: l,
        sortIndex: -1,
      }),
      n > r
        ? ((e.sortIndex = n),
          Ol(Ye, e),
          Se(Le) === null && e === Se(Ye) && (fn ? (du(pn), (pn = -1)) : (fn = !0), Ql(Vl, n - r)))
        : ((e.sortIndex = l), Ol(Le, e), vt || vr || ((vt = !0), Wl($l))),
      e
    );
  };
  Yd.unstable_shouldYield = mu;
  Yd.unstable_wrapCallback = function (e) {
    var t = J;
    return function () {
      var n = J;
      J = t;
      try {
        return e.apply(this, arguments);
      } finally {
        J = n;
      }
    };
  };
});
var Zo = {};
Gc(Zo, {
  version: () => Tc,
  unstable_renderSubtreeIntoContainer: () => zc,
  unstable_batchedUpdates: () => Pc,
  unmountComponentAtNode: () => _c,
  render: () => Cc,
  hydrateRoot: () => Ec,
  hydrate: () => Nc,
  flushSync: () => Sc,
  findDOMNode: () => kc,
  createRoot: () => xc,
  createPortal: () => wc,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => yc,
});
function y(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function Tt(e, t) {
  (bt(e, t), bt(e + 'Capture', t));
}
function bt(e, t) {
  Un[e] = t;
  for (e = 0; e < t.length; e++) ka.add(t[e]);
}
function mf(e) {
  if (di.call(gu, e)) return !0;
  if (di.call(hu, e)) return !1;
  if (pf.test(e)) return (gu[e] = !0);
  return ((hu[e] = !0), !1);
}
function vf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      if (r) return !1;
      if (n !== null) return !n.acceptsBooleans;
      return ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function hf(e, t, n, r) {
  if (t === null || typeof t > 'u' || vf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ie(e, t, n, r, l, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
function oo(e) {
  return e[1].toUpperCase();
}
function uo(e, t, n, r) {
  var l = Z.hasOwnProperty(t) ? Z[t] : null;
  if (
    l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')
  )
    (hf(t, n, l, r) && (n = null),
      r || l === null
        ? mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
function mn(e) {
  if (e === null || typeof e !== 'object') return null;
  return ((e = (yu && e[yu]) || e['@@iterator']), typeof e === 'function' ? e : null);
}
function kn(e) {
  if (Hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hl = (t && t[1]) || '';
    }
  return (
    `
` +
    Hl +
    e
  );
}
function Gl(e, t) {
  if (!e || Kl) return '';
  Kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect === 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack === 'string') {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];
      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    ((Kl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? kn(e) : '';
}
function gf(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn('Lazy');
    case 13:
      return kn('Suspense');
    case 19:
      return kn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ((e = Gl(e.type, !1)), e);
    case 11:
      return ((e = Gl(e.type.render, !1)), e);
    case 1:
      return ((e = Gl(e.type, !0)), e);
    default:
      return '';
  }
}
function vi(e) {
  if (e == null) return null;
  if (typeof e === 'function') return e.displayName || e.name || null;
  if (typeof e === 'string') return e;
  switch (e) {
    case Dt:
      return 'Fragment';
    case Ot:
      return 'Portal';
    case fi:
      return 'Profiler';
    case ao:
      return 'StrictMode';
    case pi:
      return 'Suspense';
    case mi:
      return 'SuspenseList';
  }
  if (typeof e === 'object')
    switch (e.$$typeof) {
      case Na:
        return (e.displayName || 'Context') + '.Consumer';
      case Sa:
        return (e._context.displayName || 'Context') + '.Provider';
      case so:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case co:
        return ((t = e.displayName || null), t !== null ? t : vi(e.type) || 'Memo');
      case qe:
        ((t = e._payload), (e = e._init));
        try {
          return vi(e(t));
        } catch (n) {}
    }
  return null;
}
function yf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return vi(t);
    case 8:
      return t === ao ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t === 'function') return t.displayName || t.name || null;
      if (typeof t === 'string') return t;
  }
  return null;
}
function st(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ca(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function wf(e) {
  var t = Ca(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get === 'function' &&
    typeof n.set === 'function'
  ) {
    var { get: l, set: i } = n;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = '' + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function yr(e) {
  e._valueTracker || (e._valueTracker = wf(e));
}
function _a(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ca(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function hi(e, t) {
  var n = t.checked;
  return U({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function wu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = st(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    }));
}
function Pa(e, t) {
  ((t = t.checked), t != null && uo(e, 'checked', t, !1));
}
function gi(e, t) {
  Pa(e, t);
  var n = st(t.value),
    r = t.type;
  if (n != null)
    if (r === 'number') {
      if ((n === 0 && e.value === '') || e.value != n) e.value = '' + n;
    } else e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  (t.hasOwnProperty('value')
    ? yi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && yi(e, t.type, st(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function xu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    ((t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n));
}
function yi(e, t, n) {
  if (t !== 'number' || Qr(e.ownerDocument) !== e)
    n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n);
}
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    ((n = '' + st(n)), (t = null));
    for (l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function wi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return U({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ''), (n = t));
  }
  e._wrapperState = { initialValue: st(n) };
}
function za(e, t) {
  var n = st(t.value),
    r = st(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function Su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ta(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function xi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ta(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
function Ra(e, t, n) {
  return t == null || typeof t === 'boolean' || t === ''
    ? ''
    : n || typeof t !== 'number' || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Fa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ra(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
function ki(e, t) {
  if (t) {
    if (kf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML !== 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style !== 'object') throw Error(y(62));
  }
}
function Si(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is === 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
function fo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
function Nu(e) {
  if ((e = rr(e))) {
    if (typeof Ei !== 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = gl(t)), Ei(e.stateNode, e.type, t));
  }
}
function Ma(e) {
  Xt ? (qt ? qt.push(e) : (qt = [e])) : (Xt = e);
}
function Ia() {
  if (Xt) {
    var e = Xt,
      t = qt;
    if (((qt = Xt = null), Nu(e), t)) for (e = 0; e < t.length; e++) Nu(t[e]);
  }
}
function Oa(e, t) {
  return e(t);
}
function Da() {}
function Aa(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return Oa(e, t, n);
  } finally {
    if (((Yl = !1), Xt !== null || qt !== null)) (Da(), Ia());
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n !== 'function') throw Error(y(231, t, typeof n));
  return n;
}
function Sf(e, t, n, r, l, i, o, u, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
function Ef(e, t, n, r, l, i, o, u, a) {
  ((Ln = !1), (Hr = null), Sf.apply(Nf, arguments));
}
function Cf(e, t, n, r, l, i, o, u, a) {
  if ((Ef.apply(this, arguments), Ln)) {
    if (Ln) {
      var f = Hr;
      ((Ln = !1), (Hr = null));
    } else throw Error(y(198));
    Kr || ((Kr = !0), (_i = f));
  }
}
function Lt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ua(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Eu(e) {
  if (Lt(e) !== e) throw Error(y(188));
}
function _f(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return (Eu(l), e);
        if (i === r) return (Eu(l), t);
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          ((o = !0), (n = l), (r = i));
          break;
        }
        if (u === r) {
          ((o = !0), (r = l), (n = i));
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            ((o = !0), (n = i), (r = l));
            break;
          }
          if (u === r) {
            ((o = !0), (r = i), (n = l));
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ba(e) {
  return ((e = _f(e)), e !== null ? Va(e) : null);
}
function Va(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Va(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
function Rf(e) {
  if (Ie && typeof Ie.onCommitFiberRoot === 'function')
    try {
      Ie.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch (t) {}
}
function If(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ff(e) / Mf) | 0)) | 0);
}
function Nn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Nn(u)) : ((i &= o), i !== 0 && (r = Nn(i)));
  } else ((o = n & ~l), o !== 0 ? (r = Nn(o)) : i !== 0 && (r = Nn(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Pe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Of(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5000;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Df(e, t) {
  for (
    var { suspendedLanes: n, pingedLanes: r, expirationTimes: l, pendingLanes: i } = e;
    0 < i;
  ) {
    var o = 31 - Pe(i),
      u = 1 << o,
      a = l[o];
    if (a === -1) {
      if ((u & n) === 0 || (u & r) !== 0) l[o] = Of(u, t);
    } else a <= t && (e.expiredLanes |= u);
    i &= ~u;
  }
}
function Pi(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function Ha() {
  var e = xr;
  return ((xr <<= 1), (xr & 4194240) === 0 && (xr = 64), e);
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pe(t)),
    (e[t] = n));
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Pe(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function mo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pe(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
function Ka(e) {
  return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
}
function _u(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      nt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      rt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      $n.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Wn.delete(t.pointerId);
  }
}
function vn(e, t, n, r, l, i) {
  if (e === null || e.nativeEvent !== i)
    return (
      (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = rr(t)), t !== null && vo(t)),
      e
    );
  return (
    (e.eventSystemFlags |= r),
    (t = e.targetContainers),
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e
  );
}
function Bf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return ((tt = vn(tt, e, t, n, r, l)), !0);
    case 'dragenter':
      return ((nt = vn(nt, e, t, n, r, l)), !0);
    case 'mouseover':
      return ((rt = vn(rt, e, t, n, r, l)), !0);
    case 'pointerover':
      var i = l.pointerId;
      return ($n.set(i, vn($n.get(i) || null, e, t, n, r, l)), !0);
    case 'gotpointercapture':
      return ((i = l.pointerId), Wn.set(i, vn(Wn.get(i) || null, e, t, n, r, l)), !0);
  }
  return !1;
}
function Za(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = Lt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ua(n)), t !== null)) {
          ((e.blockedOn = t),
            qa(e.priority, function () {
              Ya(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ni = r), n.target.dispatchEvent(r), (Ni = null));
    } else return ((t = rr(n)), t !== null && vo(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Pu(e, t, n) {
  Fr(e) && n.delete(t);
}
function Vf() {
  ((zi = !1),
    tt !== null && Fr(tt) && (tt = null),
    nt !== null && Fr(nt) && (nt = null),
    rt !== null && Fr(rt) && (rt = null),
    $n.forEach(Pu),
    Wn.forEach(Pu));
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zi || ((zi = !0), O.unstable_scheduleCallback(O.unstable_NormalPriority, Vf)));
}
function Qn(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < Sr.length) {
    hn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  (tt !== null && hn(tt, e),
    nt !== null && hn(nt, e),
    rt !== null && hn(rt, e),
    $n.forEach(t),
    Wn.forEach(t));
  for (n = 0; n < Je.length; n++) ((r = Je[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Je.length && ((n = Je[0]), n.blockedOn === null); )
    (Za(n), n.blockedOn === null && Je.shift());
}
function $f(e, t, n, r) {
  var l = L,
    i = Zt.transition;
  Zt.transition = null;
  try {
    ((L = 1), ho(e, t, n, r));
  } finally {
    ((L = l), (Zt.transition = i));
  }
}
function Wf(e, t, n, r) {
  var l = L,
    i = Zt.transition;
  Zt.transition = null;
  try {
    ((L = 4), ho(e, t, n, r));
  } finally {
    ((L = l), (Zt.transition = i));
  }
}
function ho(e, t, n, r) {
  if (Xr) {
    var l = Ti(e, t, n, r);
    if (l === null) (ei(e, t, r, qr, n), _u(e, r));
    else if (Bf(l, e, t, n, r)) r.stopPropagation();
    else if ((_u(e, r), t & 4 && -1 < Uf.indexOf(e))) {
      for (; l !== null; ) {
        var i = rr(l);
        if ((i !== null && Ga(i), (i = Ti(e, t, n, r)), i === null && ei(e, t, r, qr, n), i === l))
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ei(e, t, r, null, n);
  }
}
function Ti(e, t, n, r) {
  if (((qr = null), (e = fo(r)), (e = wt(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ua(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((qr = e), null);
}
function Ja(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Tf()) {
        case po:
          return 1;
        case Wa:
          return 4;
        case Gr:
        case Lf:
          return 16;
        case Qa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
function ja() {
  if (Mr) return Mr;
  var e,
    t = go,
    n = t.length,
    r,
    l = 'value' in be ? be.value : be.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nr() {
  return !0;
}
function zu() {
  return !1;
}
function me(e) {
  function t(n, r, l, i, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Nr
        : zu),
      (this.isPropagationStopped = zu),
      this
    );
  }
  return (
    U(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue !== 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Nr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble !== 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nr));
      },
      persist: function () {},
      isPersistent: Nr,
    }),
    t
  );
}
function tp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ep[e]) ? !!t[e] : !1;
}
function wo() {
  return tp;
}
function es(e, t) {
  switch (e) {
    case 'keyup':
      return dp.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ts(e) {
  return ((e = e.detail), typeof e === 'object' && 'data' in e ? e.data : null);
}
function pp(e, t) {
  switch (e) {
    case 'compositionend':
      return ts(t);
    case 'keypress':
      if (t.which !== 32) return null;
      return ((Mu = !0), Fu);
    case 'textInput':
      return ((e = t.data), e === Fu && Mu ? null : e);
    default:
      return null;
  }
}
function mp(e, t) {
  if (At)
    return e === 'compositionend' || (!xo && es(e, t))
      ? ((e = ja()), (Mr = go = be = null), (At = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ba && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!vp[e.type] : t === 'textarea' ? !0 : !1;
}
function ns(e, t, n, r) {
  (Ma(r),
    (t = Zr(t, 'onChange')),
    0 < t.length &&
      ((n = new yo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
function hp(e) {
  ps(e, 0);
}
function vl(e) {
  var t = Vt(e);
  if (_a(t)) return e;
}
function gp(e, t) {
  if (e === 'change') return t;
}
function Ou() {
  Fn && (Fn.detachEvent('onpropertychange', ls), (Hn = Fn = null));
}
function ls(e) {
  if (e.propertyName === 'value' && vl(Hn)) {
    var t = [];
    (ns(t, Hn, e, fo(e)), Aa(hp, t));
  }
}
function yp(e, t, n) {
  e === 'focusin'
    ? (Ou(), (Fn = t), (Hn = n), Fn.attachEvent('onpropertychange', ls))
    : e === 'focusout' && Ou();
}
function wp(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vl(Hn);
}
function xp(e, t) {
  if (e === 'click') return vl(t);
}
function kp(e, t) {
  if (e === 'input' || e === 'change') return vl(t);
}
function Sp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
function Kn(e, t) {
  if (Te(e, t)) return !0;
  if (typeof e !== 'object' || e === null || typeof t !== 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!di.call(t, l) || !Te(e[l], t[l])) return !1;
  }
  return !0;
}
function Du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Au(e, t) {
  var n = Du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Du(n);
  }
}
function is(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? is(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function os() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href === 'string';
    } catch (r) {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function ko(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Np(e) {
  var t = os(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && is(n.ownerDocument.documentElement, n)) {
    if (r !== null && ko(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Au(n, i)));
        var o = Au(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    t = [];
    for (e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    typeof n.focus === 'function' && n.focus();
    for (n = 0; n < t.length; n++)
      ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
  }
}
function Uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ri ||
    Ut == null ||
    Ut !== Qr(r) ||
    ((r = Ut),
    'selectionStart' in r && ko(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Mn && Kn(Mn, r)) ||
      ((Mn = r),
      (r = Zr(Li, 'onSelect')),
      0 < r.length &&
        ((t = new yo('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ut))));
}
function Er(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
function hl(e) {
  if (jl[e]) return jl[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in us) return (jl[e] = t[n]);
  return e;
}
function dt(e, t) {
  (fs.set(e, t), Tt(t, [e]));
}
function Vu(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), Cf(r, t, void 0, e), (e.currentTarget = null));
}
function ps(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          (Vu(l, u, f), (i = a));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          (Vu(l, u, f), (i = a));
        }
    }
  }
  if (Kr) throw ((e = _i), (Kr = !1), (_i = null), e);
}
function F(e, t) {
  var n = t[Ui];
  n === void 0 && (n = t[Ui] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ms(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  (t && (r |= 4), ms(n, e, r, t));
}
function Gn(e) {
  if (!e[Cr]) {
    ((e[Cr] = !0),
      ka.forEach(function (n) {
        n !== 'selectionchange' && (Cp.has(n) || bl(n, !1, e), bl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cr] || ((t[Cr] = !0), bl('selectionchange', !1, t));
  }
}
function ms(e, t, n, r) {
  switch (Ja(t)) {
    case 1:
      var l = $f;
      break;
    case 4:
      l = Wf;
      break;
    default:
      l = ho;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ci || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function ei(e, t, n, r, l) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (a === 3 || a === 4) {
              if (
                ((a = o.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
            }
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = wt(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Aa(function () {
    var f = i,
      h = fo(n),
      g = [];
    e: {
      var v = fs.get(e);
      if (v !== void 0) {
        var x = yo,
          S = e;
        switch (e) {
          case 'keypress':
            if (Ir(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = rp;
            break;
          case 'focusin':
            ((S = 'focus'), (x = Jl));
            break;
          case 'focusout':
            ((S = 'blur'), (x = Jl));
            break;
          case 'beforeblur':
          case 'afterblur':
            x = Jl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = Tu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Kf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = op;
            break;
          case as:
          case ss:
          case cs:
            x = Xf;
            break;
          case ds:
            x = ap;
            break;
          case 'scroll':
            x = Qf;
            break;
          case 'wheel':
            x = cp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = Zf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Ru;
        }
        var N = (t & 4) !== 0,
          V = !N && e === 'scroll',
          d = N ? (v !== null ? v + 'Capture' : null) : v;
        N = [];
        for (var s = f, p; s !== null; ) {
          p = s;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w), d !== null && ((w = Vn(s, d)), w != null && N.push(Yn(s, w, p)))),
            V)
          )
            break;
          s = s.return;
        }
        0 < N.length && ((v = new x(v, S, null, n, h)), g.push({ event: v, listeners: N }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          v && n !== Ni && (S = n.relatedTarget || n.fromElement) && (wt(S) || S[We]))
        )
          break e;
        if (x || v) {
          if (
            ((v =
              h.window === h
                ? h
                : (v = h.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            x)
          ) {
            if (
              ((S = n.relatedTarget || n.toElement),
              (x = f),
              (S = S ? wt(S) : null),
              S !== null && ((V = Lt(S)), S !== V || (S.tag !== 5 && S.tag !== 6)))
            )
              S = null;
          } else ((x = null), (S = f));
          if (x !== S) {
            if (
              ((N = Tu),
              (w = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (s = 'mouse'),
              e === 'pointerout' || e === 'pointerover')
            )
              ((N = Ru), (w = 'onPointerLeave'), (d = 'onPointerEnter'), (s = 'pointer'));
            if (
              ((V = x == null ? v : Vt(x)),
              (p = S == null ? v : Vt(S)),
              (v = new N(w, s + 'leave', x, n, h)),
              (v.target = V),
              (v.relatedTarget = p),
              (w = null),
              wt(h) === f &&
                ((N = new N(d, s + 'enter', S, n, h)),
                (N.target = p),
                (N.relatedTarget = V),
                (w = N)),
              (V = w),
              x && S)
            )
              t: {
                ((N = x), (d = S), (s = 0));
                for (p = N; p; p = Mt(p)) s++;
                p = 0;
                for (w = d; w; w = Mt(w)) p++;
                for (; 0 < s - p; ) ((N = Mt(N)), s--);
                for (; 0 < p - s; ) ((d = Mt(d)), p--);
                for (; s--; ) {
                  if (N === d || (d !== null && N === d.alternate)) break t;
                  ((N = Mt(N)), (d = Mt(d)));
                }
                N = null;
              }
            else N = null;
            (x !== null && $u(g, v, x, N, !1), S !== null && V !== null && $u(g, V, S, N, !0));
          }
        }
      }
      e: {
        if (
          ((v = f ? Vt(f) : window),
          (x = v.nodeName && v.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && v.type === 'file'))
        )
          var E = gp;
        else if (Iu(v))
          if (rs) E = kp;
          else {
            E = wp;
            var C = yp;
          }
        else
          (x = v.nodeName) &&
            x.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (E = xp);
        if (E && (E = E(e, f))) {
          ns(g, E, n, h);
          break e;
        }
        (C && C(e, v, f),
          e === 'focusout' &&
            (C = v._wrapperState) &&
            C.controlled &&
            v.type === 'number' &&
            yi(v, 'number', v.value));
      }
      switch (((C = f ? Vt(f) : window), e)) {
        case 'focusin':
          if (Iu(C) || C.contentEditable === 'true') ((Ut = C), (Li = f), (Mn = null));
          break;
        case 'focusout':
          Mn = Li = Ut = null;
          break;
        case 'mousedown':
          Ri = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((Ri = !1), Uu(g, n, h));
          break;
        case 'selectionchange':
          if (Ep) break;
        case 'keydown':
        case 'keyup':
          Uu(g, n, h);
      }
      var _;
      if (xo)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        At
          ? es(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      if (
        (P &&
          (ba &&
            n.locale !== 'ko' &&
            (At || P !== 'onCompositionStart'
              ? P === 'onCompositionEnd' && At && (_ = ja())
              : ((be = h), (go = 'value' in be ? be.value : be.textContent), (At = !0))),
          (C = Zr(f, P)),
          0 < C.length &&
            ((P = new Lu(P, e, null, n, h)),
            g.push({ event: P, listeners: C }),
            _ ? (P.data = _) : ((_ = ts(n)), _ !== null && (P.data = _)))),
        (_ = fp ? pp(e, n) : mp(e, n)))
      )
        ((f = Zr(f, 'onBeforeInput')),
          0 < f.length &&
            ((h = new Lu('onBeforeInput', 'beforeinput', null, n, h)),
            g.push({ event: h, listeners: f }),
            (h.data = _)));
    }
    ps(g, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Vn(e, n)),
      i != null && r.unshift(Yn(e, i, l)),
      (i = Vn(e, t)),
      i != null && r.push(Yn(e, i, l))),
      (e = e.return));
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e ? e : null;
}
function $u(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      f = u.stateNode;
    if (a !== null && a === r) break;
    (u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((a = Vn(n, i)), a != null && o.unshift(Yn(n, a, u)))
        : l || ((a = Vn(n, i)), a != null && o.push(Yn(n, a, u)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function Wu(e) {
  return (typeof e === 'string' ? e : '' + e)
    .replace(
      _p,
      `
`,
    )
    .replace(Pp, '');
}
function _r(e, t, n) {
  if (((t = Wu(t)), Wu(e) !== t && n)) throw Error(y(425));
}
function Jr() {}
function Di(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children === 'string' ||
    typeof t.children === 'number' ||
    (typeof t.dangerouslySetInnerHTML === 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
function Lp(e) {
  setTimeout(function () {
    throw e;
  });
}
function ti(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          (e.removeChild(l), Qn(t));
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Qn(t);
}
function lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
function wt(e) {
  var t = e[Me];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[We] || n[Me])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Hu(e); e !== null; ) {
          if ((n = e[Me])) return n;
          e = Hu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function rr(e) {
  return (
    (e = e[Me] || e[We]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function gl(e) {
  return e[Xn] || null;
}
function ft(e) {
  return { current: e };
}
function M(e) {
  0 > $t || ((e.current = Bi[$t]), (Bi[$t] = null), $t--);
}
function R(e, t) {
  ($t++, (Bi[$t] = e.current), (e.current = t));
}
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function se(e) {
  return ((e = e.childContextTypes), e !== null && e !== void 0);
}
function jr() {
  (M(ae), M(te));
}
function Ku(e, t, n) {
  if (te.current !== ct) throw Error(y(168));
  (R(te, t), R(ae, n));
}
function vs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext !== 'function')) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, yf(e) || 'Unknown', l));
  return U({}, n, r);
}
function br(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ct),
    (Et = te.current),
    R(te, e),
    R(ae, ae.current),
    !0
  );
}
function Gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  (n
    ? ((e = vs(e, t, Et)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      M(ae),
      M(te),
      R(te, e))
    : M(ae),
    R(ae, n));
}
function hs(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
function Mp(e) {
  ((yl = !0), hs(e));
}
function pt() {
  if (!ni && Ae !== null) {
    ni = !0;
    var e = 0,
      t = L;
    try {
      var n = Ae;
      for (L = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ae = null), (yl = !1));
    } catch (l) {
      throw (Ae !== null && (Ae = Ae.slice(e + 1)), $a(po, pt), l);
    } finally {
      ((L = t), (ni = !1));
    }
  }
  return null;
}
function gt(e, t) {
  ((Wt[Qt++] = tl), (Wt[Qt++] = el), (el = e), (tl = t));
}
function gs(e, t, n) {
  ((he[ge++] = Ue), (he[ge++] = Be), (he[ge++] = Ct), (Ct = e));
  var r = Ue;
  e = Be;
  var l = 32 - Pe(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - Pe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ue = (1 << (32 - Pe(t) + l)) | (n << l) | r),
      (Be = i + e));
  } else ((Ue = (1 << i) | (n << l) | r), (Be = e));
}
function So(e) {
  e.return !== null && (gt(e, 1), gs(e, 1, 0));
}
function No(e) {
  for (; e === el; ) ((el = Wt[--Qt]), (Wt[Qt] = null), (tl = Wt[--Qt]), (Wt[Qt] = null));
  for (; e === Ct; )
    ((Ct = he[--ge]),
      (he[ge] = null),
      (Be = he[--ge]),
      (he[ge] = null),
      (Ue = he[--ge]),
      (he[ge] = null));
}
function ys(e, t) {
  var n = ye(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (pe = e), (fe = lt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (pe = e), (fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ct !== null ? { id: Ue, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (pe = e),
            (fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $i(e) {
  if (I) {
    var t = fe;
    if (t) {
      var n = t;
      if (!Yu(e, t)) {
        if (Vi(e)) throw Error(y(418));
        t = lt(n.nextSibling);
        var r = pe;
        t && Yu(e, t) ? ys(r, n) : ((e.flags = (e.flags & -4097) | 2), (I = !1), (pe = e));
      }
    } else {
      if (Vi(e)) throw Error(y(418));
      ((e.flags = (e.flags & -4097) | 2), (I = !1), (pe = e));
    }
  }
}
function Xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  pe = e;
}
function Pr(e) {
  if (e !== pe) return !1;
  if (!I) return (Xu(e), (I = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Di(e.type, e.memoizedProps))),
    t && (t = fe))
  ) {
    if (Vi(e)) throw (ws(), Error(y(418)));
    for (; t; ) (ys(e, t), (t = lt(t.nextSibling)));
  }
  if ((Xu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
    e: {
      e = e.nextSibling;
      for (t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              fe = lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      fe = null;
    }
  } else fe = pe ? lt(e.stateNode.nextSibling) : null;
  return !0;
}
function ws() {
  for (var e = fe; e; ) e = lt(e.nextSibling);
}
function tn() {
  ((fe = pe = null), (I = !1));
}
function Eo(e) {
  _e === null ? (_e = [e]) : _e.push(e);
}
function yn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e !== 'function' && typeof e !== 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = '' + e;
      if (t !== null && t.ref !== null && typeof t.ref === 'function' && t.ref._stringRef === i)
        return t.ref;
      return (
        (t = function (o) {
          var u = l.refs;
          o === null ? delete u[i] : (u[i] = o);
        }),
        (t._stringRef = i),
        t
      );
    }
    if (typeof e !== 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      y(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
    )
  );
}
function qu(e) {
  var t = e._init;
  return t(e._payload);
}
function xs(e) {
  function t(d, s) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [s]), (d.flags |= 16)) : p.push(s);
    }
  }
  function n(d, s) {
    if (!e) return null;
    for (; s !== null; ) (t(d, s), (s = s.sibling));
    return null;
  }
  function r(d, s) {
    for (d = new Map(); s !== null; )
      (s.key !== null ? d.set(s.key, s) : d.set(s.index, s), (s = s.sibling));
    return d;
  }
  function l(d, s) {
    return ((d = at(d, s)), (d.index = 0), (d.sibling = null), d);
  }
  function i(d, s, p) {
    if (((d.index = p), !e)) return ((d.flags |= 1048576), s);
    if (((p = d.alternate), p !== null)) return ((p = p.index), p < s ? ((d.flags |= 2), s) : p);
    return ((d.flags |= 2), s);
  }
  function o(d) {
    return (e && d.alternate === null && (d.flags |= 2), d);
  }
  function u(d, s, p, w) {
    if (s === null || s.tag !== 6) return ((s = si(p, d.mode, w)), (s.return = d), s);
    return ((s = l(s, p)), (s.return = d), s);
  }
  function a(d, s, p, w) {
    var E = p.type;
    if (E === Dt) return h(d, s, p.props.children, w, p.key);
    if (
      s !== null &&
      (s.elementType === E ||
        (typeof E === 'object' && E !== null && E.$$typeof === qe && qu(E) === s.type))
    )
      return ((w = l(s, p.props)), (w.ref = yn(d, s, p)), (w.return = d), w);
    return (
      (w = Wr(p.type, p.key, p.props, null, d.mode, w)),
      (w.ref = yn(d, s, p)),
      (w.return = d),
      w
    );
  }
  function f(d, s, p, w) {
    if (
      s === null ||
      s.tag !== 4 ||
      s.stateNode.containerInfo !== p.containerInfo ||
      s.stateNode.implementation !== p.implementation
    )
      return ((s = ci(p, d.mode, w)), (s.return = d), s);
    return ((s = l(s, p.children || [])), (s.return = d), s);
  }
  function h(d, s, p, w, E) {
    if (s === null || s.tag !== 7) return ((s = Nt(p, d.mode, w, E)), (s.return = d), s);
    return ((s = l(s, p)), (s.return = d), s);
  }
  function g(d, s, p) {
    if ((typeof s === 'string' && s !== '') || typeof s === 'number')
      return ((s = si('' + s, d.mode, p)), (s.return = d), s);
    if (typeof s === 'object' && s !== null) {
      switch (s.$$typeof) {
        case gr:
          return (
            (p = Wr(s.type, s.key, s.props, null, d.mode, p)),
            (p.ref = yn(d, null, s)),
            (p.return = d),
            p
          );
        case Ot:
          return ((s = ci(s, d.mode, p)), (s.return = d), s);
        case qe:
          var w = s._init;
          return g(d, w(s._payload), p);
      }
      if (Sn(s) || mn(s)) return ((s = Nt(s, d.mode, p, null)), (s.return = d), s);
      zr(d, s);
    }
    return null;
  }
  function v(d, s, p, w) {
    var E = s !== null ? s.key : null;
    if ((typeof p === 'string' && p !== '') || typeof p === 'number')
      return E !== null ? null : u(d, s, '' + p, w);
    if (typeof p === 'object' && p !== null) {
      switch (p.$$typeof) {
        case gr:
          return p.key === E ? a(d, s, p, w) : null;
        case Ot:
          return p.key === E ? f(d, s, p, w) : null;
        case qe:
          return ((E = p._init), v(d, s, E(p._payload), w));
      }
      if (Sn(p) || mn(p)) return E !== null ? null : h(d, s, p, w, null);
      zr(d, p);
    }
    return null;
  }
  function x(d, s, p, w, E) {
    if ((typeof w === 'string' && w !== '') || typeof w === 'number')
      return ((d = d.get(p) || null), u(s, d, '' + w, E));
    if (typeof w === 'object' && w !== null) {
      switch (w.$$typeof) {
        case gr:
          return ((d = d.get(w.key === null ? p : w.key) || null), a(s, d, w, E));
        case Ot:
          return ((d = d.get(w.key === null ? p : w.key) || null), f(s, d, w, E));
        case qe:
          var C = w._init;
          return x(d, s, p, C(w._payload), E);
      }
      if (Sn(w) || mn(w)) return ((d = d.get(p) || null), h(s, d, w, E, null));
      zr(s, w);
    }
    return null;
  }
  function S(d, s, p, w) {
    for (var E = null, C = null, _ = s, P = (s = 0), K = null; _ !== null && P < p.length; P++) {
      _.index > P ? ((K = _), (_ = null)) : (K = _.sibling);
      var T = v(d, _, p[P], w);
      if (T === null) {
        _ === null && (_ = K);
        break;
      }
      (e && _ && T.alternate === null && t(d, _),
        (s = i(T, s, P)),
        C === null ? (E = T) : (C.sibling = T),
        (C = T),
        (_ = K));
    }
    if (P === p.length) return (n(d, _), I && gt(d, P), E);
    if (_ === null) {
      for (; P < p.length; P++)
        ((_ = g(d, p[P], w)),
          _ !== null && ((s = i(_, s, P)), C === null ? (E = _) : (C.sibling = _), (C = _)));
      return (I && gt(d, P), E);
    }
    for (_ = r(d, _); P < p.length; P++)
      ((K = x(_, d, P, p[P], w)),
        K !== null &&
          (e && K.alternate !== null && _.delete(K.key === null ? P : K.key),
          (s = i(K, s, P)),
          C === null ? (E = K) : (C.sibling = K),
          (C = K)));
    return (
      e &&
        _.forEach(function (Ge) {
          return t(d, Ge);
        }),
      I && gt(d, P),
      E
    );
  }
  function N(d, s, p, w) {
    var E = mn(p);
    if (typeof E !== 'function') throw Error(y(150));
    if (((p = E.call(p)), p == null)) throw Error(y(151));
    for (
      var C = (E = null), _ = s, P = (s = 0), K = null, T = p.next();
      _ !== null && !T.done;
      P++, T = p.next()
    ) {
      _.index > P ? ((K = _), (_ = null)) : (K = _.sibling);
      var Ge = v(d, _, T.value, w);
      if (Ge === null) {
        _ === null && (_ = K);
        break;
      }
      (e && _ && Ge.alternate === null && t(d, _),
        (s = i(Ge, s, P)),
        C === null ? (E = Ge) : (C.sibling = Ge),
        (C = Ge),
        (_ = K));
    }
    if (T.done) return (n(d, _), I && gt(d, P), E);
    if (_ === null) {
      for (; !T.done; P++, T = p.next())
        ((T = g(d, T.value, w)),
          T !== null && ((s = i(T, s, P)), C === null ? (E = T) : (C.sibling = T), (C = T)));
      return (I && gt(d, P), E);
    }
    for (_ = r(d, _); !T.done; P++, T = p.next())
      ((T = x(_, d, P, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? P : T.key),
          (s = i(T, s, P)),
          C === null ? (E = T) : (C.sibling = T),
          (C = T)));
    return (
      e &&
        _.forEach(function ($c) {
          return t(d, $c);
        }),
      I && gt(d, P),
      E
    );
  }
  function V(d, s, p, w) {
    if (
      (typeof p === 'object' &&
        p !== null &&
        p.type === Dt &&
        p.key === null &&
        (p = p.props.children),
      typeof p === 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case gr:
          e: {
            for (var E = p.key, C = s; C !== null; ) {
              if (C.key === E) {
                if (((E = p.type), E === Dt)) {
                  if (C.tag === 7) {
                    (n(d, C.sibling), (s = l(C, p.props.children)), (s.return = d), (d = s));
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E === 'object' && E !== null && E.$$typeof === qe && qu(E) === C.type)
                ) {
                  (n(d, C.sibling),
                    (s = l(C, p.props)),
                    (s.ref = yn(d, C, p)),
                    (s.return = d),
                    (d = s));
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            p.type === Dt
              ? ((s = Nt(p.props.children, d.mode, w, p.key)), (s.return = d), (d = s))
              : ((w = Wr(p.type, p.key, p.props, null, d.mode, w)),
                (w.ref = yn(d, s, p)),
                (w.return = d),
                (d = w));
          }
          return o(d);
        case Ot:
          e: {
            for (C = p.key; s !== null; ) {
              if (s.key === C)
                if (
                  s.tag === 4 &&
                  s.stateNode.containerInfo === p.containerInfo &&
                  s.stateNode.implementation === p.implementation
                ) {
                  (n(d, s.sibling), (s = l(s, p.children || [])), (s.return = d), (d = s));
                  break e;
                } else {
                  n(d, s);
                  break;
                }
              else t(d, s);
              s = s.sibling;
            }
            ((s = ci(p, d.mode, w)), (s.return = d), (d = s));
          }
          return o(d);
        case qe:
          return ((C = p._init), V(d, s, C(p._payload), w));
      }
      if (Sn(p)) return S(d, s, p, w);
      if (mn(p)) return N(d, s, p, w);
      zr(d, p);
    }
    return (typeof p === 'string' && p !== '') || typeof p === 'number'
      ? ((p = '' + p),
        s !== null && s.tag === 6
          ? (n(d, s.sibling), (s = l(s, p)), (s.return = d), (d = s))
          : (n(d, s), (s = si(p, d.mode, w)), (s.return = d), (d = s)),
        o(d))
      : n(d, s);
  }
  return V;
}
function _o() {
  Co = Ht = rl = null;
}
function Po(e) {
  var t = nl.current;
  (M(nl), (e._currentValue = t));
}
function Wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  ((rl = e),
    (Co = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ue = !0), (e.firstContext = null)));
}
function xe(e) {
  var t = e._currentValue;
  if (Co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (rl === null) throw Error(y(308));
      ((Ht = e), (rl.dependencies = { lanes: 0, firstContext: e }));
    } else Ht = Ht.next = e;
  return t;
}
function zo(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Ss(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), zo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Qe(e, r)
  );
}
function Qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  (n !== null && (n.lanes |= t), (n = e));
  for (e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
function To(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ns(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function it(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (z & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), zo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Qe(e, n)
  );
}
function Dr(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n));
  }
}
function Zu(e, t) {
  var { updateQueue: n, alternate: r } = e;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  Ze = !1;
  var { firstBaseUpdate: i, lastBaseUpdate: o } = l,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      f = a.next;
    ((a.next = null), o === null ? (i = f) : (o.next = f), (o = a));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o && (u === null ? (h.firstBaseUpdate = f) : (u.next = f), (h.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var g = l.baseState;
    ((o = 0), (h = f = a = null), (u = i));
    do {
      var { lane: v, eventTime: x } = u;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            N = u;
          switch (((v = t), (x = n), N.tag)) {
            case 1:
              if (((S = N.payload), typeof S === 'function')) {
                g = S.call(x, g, v);
                break e;
              }
              g = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = N.payload),
                (v = typeof S === 'function' ? S.call(x, g, v) : S),
                v === null || v === void 0)
              )
                break e;
              g = U({}, g, v);
              break e;
            case 2:
              Ze = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [u]) : v.push(u));
      } else
        ((x = {
          eventTime: x,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((f = h = x), (a = g)) : (h = h.next = x),
          (o |= v));
      if (((u = u.next), u === null))
        if (((u = l.shared.pending), u === null)) break;
        else
          ((v = u),
            (u = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
    } while (1);
    if (
      (h === null && (a = g),
      (l.baseState = a),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Pt |= o), (e.lanes = o), (e.memoizedState = g));
  }
}
function Ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l !== 'function')) throw Error(y(191, l));
        l.call(r);
      }
    }
}
function kt(e) {
  if (e === lr) throw Error(y(174));
  return e;
}
function Lo(e, t) {
  switch ((R(Zn, t), R(qn, e), R(Oe, lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xi(t, e)));
  }
  (M(Oe), R(Oe, t));
}
function rn() {
  (M(Oe), M(qn), M(Zn));
}
function Es(e) {
  kt(Zn.current);
  var t = kt(Oe.current),
    n = xi(t, e.type);
  t !== n && (R(qn, e), R(Oe, n));
}
function Ro(e) {
  qn.current === e && (M(Oe), M(qn));
}
function il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
function Fo() {
  for (var e = 0; e < ri.length; e++) ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
function j() {
  throw Error(y(321));
}
function Mo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Te(e[n], t[n])) return !1;
  return !0;
}
function Io(e, t, n, r, l, i) {
  if (
    ((_t = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ar.current = e === null || e.memoizedState === null ? Bp : Vp),
    (e = n(r, l)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), (Jn = 0), 25 <= i)) throw Error(y(301));
      ((i += 1), (G = Q = null), (t.updateQueue = null), (Ar.current = $p), (e = n(r, l)));
    } while (In);
  }
  if (
    ((Ar.current = ul),
    (t = Q !== null && Q.next !== null),
    (_t = 0),
    (G = Q = A = null),
    (ol = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Oo() {
  var e = Jn !== 0;
  return ((Jn = 0), e);
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (G === null ? (A.memoizedState = G = e) : (G = G.next = e), G);
}
function ke() {
  if (Q === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Q.next;
  var t = G === null ? A.memoizedState : G.next;
  if (t !== null) ((G = t), (Q = e));
  else {
    if (e === null) throw Error(y(310));
    ((Q = e),
      (e = {
        memoizedState: Q.memoizedState,
        baseState: Q.baseState,
        baseQueue: Q.baseQueue,
        queue: Q.queue,
        next: null,
      }),
      G === null ? (A.memoizedState = G = e) : (G = G.next = e));
  }
  return G;
}
function jn(e, t) {
  return typeof t === 'function' ? t(e) : t;
}
function ii(e) {
  var t = ke(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Q,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = i.next), (i.next = o));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var u = (o = null),
      a = null,
      f = i;
    do {
      var h = f.lane;
      if ((_t & h) === h)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action)));
      else {
        var g = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        (a === null ? ((u = a = g), (o = r)) : (a = a.next = g), (A.lanes |= h), (Pt |= h));
      }
      f = f.next;
    } while (f !== null && f !== i);
    (a === null ? (o = r) : (a.next = u),
      Te(r, t.memoizedState) || (ue = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (A.lanes |= i), (Pt |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oi(e) {
  var t = ke(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var { dispatch: r, pending: l } = n,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== l);
    (Te(i, t.memoizedState) || (ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Cs() {}
function _s(e, t) {
  var n = A,
    r = ke(),
    l = t(),
    i = !Te(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ue = !0)),
    (r = r.queue),
    Do(Ts.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), bn(9, zs.bind(null, n, r, l, t), void 0, null), Y === null))
      throw Error(y(349));
    (_t & 30) !== 0 || Ps(n, t, l);
  }
  return l;
}
function Ps(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (A.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function zs(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ls(t) && Rs(e));
}
function Ts(e, t, n) {
  return n(function () {
    Ls(t) && Rs(e);
  });
}
function Ls(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Te(e, n);
  } catch (r) {
    return !0;
  }
}
function Rs(e) {
  var t = Qe(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function ju(e) {
  var t = Fe();
  return (
    typeof e === 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Up.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function bn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (A.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fs() {
  return ke().memoizedState;
}
function Ur(e, t, n, r) {
  var l = Fe();
  ((A.flags |= e), (l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r)));
}
function wl(e, t, n, r) {
  var l = ke();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Q !== null) {
    var o = Q.memoizedState;
    if (((i = o.destroy), r !== null && Mo(r, o.deps))) {
      l.memoizedState = bn(t, n, i, r);
      return;
    }
  }
  ((A.flags |= e), (l.memoizedState = bn(1 | t, n, i, r)));
}
function bu(e, t) {
  return Ur(8390656, 8, e, t);
}
function Do(e, t) {
  return wl(2048, 8, e, t);
}
function Ms(e, t) {
  return wl(4, 2, e, t);
}
function Is(e, t) {
  return wl(4, 4, e, t);
}
function Os(e, t) {
  if (typeof t === 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t !== null && t !== void 0)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ds(e, t, n) {
  return (
    (n = n !== null && n !== void 0 ? n.concat([e]) : null),
    wl(4, 4, Os.bind(null, t, e), n)
  );
}
function Ao() {}
function As(e, t) {
  var n = ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  if (r !== null && t !== null && Mo(t, r[1])) return r[0];
  return ((n.memoizedState = [e, t]), e);
}
function Us(e, t) {
  var n = ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  if (r !== null && t !== null && Mo(t, r[1])) return r[0];
  return ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bs(e, t, n) {
  if ((_t & 21) === 0)
    return (e.baseState && ((e.baseState = !1), (ue = !0)), (e.memoizedState = n));
  return (Te(n, t) || ((n = Ha()), (A.lanes |= n), (Pt |= n), (e.baseState = !0)), t);
}
function Dp(e, t) {
  var n = L;
  ((L = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = li.transition;
  li.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((L = n), (li.transition = r));
  }
}
function Vs() {
  return ke().memoizedState;
}
function Ap(e, t, n) {
  var r = ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $s(e))
  )
    Ws(t, n);
  else if (((n = Ss(e, t, n, r)), n !== null)) {
    var l = le();
    (ze(n, e, r, l), Qs(n, t, r));
  }
}
function Up(e, t, n) {
  var r = ut(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if ($s(e)) Ws(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Te(u, o))) {
          var a = t.interleaved;
          (a === null ? ((l.next = l), zo(t)) : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch (f) {
      } finally {
      }
    ((n = Ss(e, t, l, r)), n !== null && ((l = le()), ze(n, e, r, l), Qs(n, t, r)));
  }
}
function $s(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function Ws(e, t) {
  In = ol = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Qs(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n));
  }
}
function Ee(e, t) {
  if (e && e.defaultProps) {
    ((t = U({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qi(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n === null || n === void 0 ? t : U({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
function ea(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate === 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Kn(n, r) || !Kn(l, i)
        : !0
  );
}
function Hs(e, t, n) {
  var r = !1,
    l = ct,
    i = t.contextType;
  return (
    typeof i === 'object' && i !== null
      ? (i = xe(i))
      : ((l = se(t) ? Et : te.current),
        (r = t.contextTypes),
        (i = (r = r !== null && r !== void 0) ? en(e, l) : ct)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ta(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps === 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps === 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null));
}
function Hi(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), To(e));
  var i = t.contextType;
  (typeof i === 'object' && i !== null
    ? (l.context = xe(i))
    : ((i = se(t) ? Et : te.current), (l.context = en(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i === 'function' && (Qi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps === 'function' ||
      typeof l.getSnapshotBeforeUpdate === 'function' ||
      (typeof l.UNSAFE_componentWillMount !== 'function' &&
        typeof l.componentWillMount !== 'function') ||
      ((t = l.state),
      typeof l.componentWillMount === 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount === 'function' && l.UNSAFE_componentWillMount(),
      t !== l.state && xl.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount === 'function' && (e.flags |= 4194308));
}
function ln(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += gf(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ui(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
function Ks(e, t, n) {
  ((n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (sl || ((sl = !0), (to = r)), Ki(e, t));
    }),
    n
  );
}
function Gs(e, t, n) {
  ((n = Ve(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r === 'function') {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ki(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch === 'function' &&
      (n.callback = function () {
        (Ki(e, t),
          typeof r !== 'function' && (ot === null ? (ot = new Set([this])) : ot.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function na(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wp();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = nm.bind(null, e, t, n)), t.then(e, e));
}
function ra(e) {
  do {
    var t;
    if ((t = e.tag === 13))
      ((t = e.memoizedState), (t = t !== null ? (t.dehydrated !== null ? !0 : !1) : !0));
    if (t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function la(e, t, n, r, l) {
  if ((e.mode & 1) === 0)
    return (
      e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Ve(-1, 1)), (t.tag = 2), it(n, t, 1))),
          (n.lanes |= 1)),
      e
    );
  return ((e.flags |= 65536), (e.lanes = l), e);
}
function re(e, t, n, r) {
  t.child = e === null ? ks(t, null, n, r) : nn(t, e.child, n, r);
}
function ia(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  if ((Jt(t, l), (r = Io(e, t, n, r, i, l)), (n = Oo()), e !== null && !ue))
    return ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), He(e, t, l));
  return (I && n && So(t), (t.flags |= 1), re(e, t, r, l), t.child);
}
function oa(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    if (
      typeof i === 'function' &&
      !Ko(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
    )
      return ((t.tag = 15), (t.type = i), Ys(e, t, i, r, l));
    return (
      (e = Wr(n.type, null, r, t, t.mode, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Kn), n(o, r) && e.ref === t.ref))
      return He(e, t, l);
  }
  return ((t.flags |= 1), (e = at(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function Ys(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kn(i, r) && e.ref === t.ref)
      if (((ue = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (ue = !0);
      else return ((t.lanes = e.lanes), He(e, t, l));
  }
  return Gi(e, t, n, r, l);
}
function Xs(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if ((t.mode & 1) === 0)
      ((t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        R(Gt, de),
        (de |= n));
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Gt, de),
          (de |= e),
          null
        );
      ((t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        R(Gt, de),
        (de |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Gt, de),
      (de |= r));
  return (re(e, t, l, n), t.child);
}
function qs(e, t) {
  var n = t.ref;
  if ((e === null && n !== null) || (e !== null && e.ref !== n))
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gi(e, t, n, r, l) {
  var i = se(n) ? Et : te.current;
  if (((i = en(t, i)), Jt(t, l), (n = Io(e, t, n, r, i, l)), (r = Oo()), e !== null && !ue))
    return ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), He(e, t, l));
  return (I && r && So(t), (t.flags |= 1), re(e, t, n, l), t.child);
}
function ua(e, t, n, r, l) {
  if (se(n)) {
    var i = !0;
    br(t);
  } else i = !1;
  if ((Jt(t, l), t.stateNode === null)) (Br(e, t), Hs(t, n, r), Hi(t, n, r, l), (r = !0));
  else if (e === null) {
    var { stateNode: o, memoizedProps: u } = t;
    o.props = u;
    var a = o.context,
      f = n.contextType;
    typeof f === 'object' && f !== null
      ? (f = xe(f))
      : ((f = se(n) ? Et : te.current), (f = en(t, f)));
    var h = n.getDerivedStateFromProps,
      g = typeof h === 'function' || typeof o.getSnapshotBeforeUpdate === 'function';
    (g ||
      (typeof o.UNSAFE_componentWillReceiveProps !== 'function' &&
        typeof o.componentWillReceiveProps !== 'function') ||
      ((u !== r || a !== f) && ta(t, o, r, f)),
      (Ze = !1));
    var v = t.memoizedState;
    ((o.state = v),
      ll(t, r, o, l),
      (a = t.memoizedState),
      u !== r || v !== a || ae.current || Ze
        ? (typeof h === 'function' && (Qi(t, n, h, r), (a = t.memoizedState)),
          (u = Ze || ea(t, n, u, r, v, a, f))
            ? (g ||
                (typeof o.UNSAFE_componentWillMount !== 'function' &&
                  typeof o.componentWillMount !== 'function') ||
                (typeof o.componentWillMount === 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount === 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount === 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount === 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = f),
          (r = u))
        : (typeof o.componentDidMount === 'function' && (t.flags |= 4194308), (r = !1)));
  } else {
    ((o = t.stateNode),
      Ns(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ee(t.type, u)),
      (o.props = f),
      (g = t.pendingProps),
      (v = o.context),
      (a = n.contextType),
      typeof a === 'object' && a !== null
        ? (a = xe(a))
        : ((a = se(n) ? Et : te.current), (a = en(t, a))));
    var x = n.getDerivedStateFromProps;
    ((h = typeof x === 'function' || typeof o.getSnapshotBeforeUpdate === 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps !== 'function' &&
        typeof o.componentWillReceiveProps !== 'function') ||
      ((u !== g || v !== a) && ta(t, o, r, a)),
      (Ze = !1),
      (v = t.memoizedState),
      (o.state = v),
      ll(t, r, o, l));
    var S = t.memoizedState;
    u !== g || v !== S || ae.current || Ze
      ? (typeof x === 'function' && (Qi(t, n, x, r), (S = t.memoizedState)),
        (f = Ze || ea(t, n, f, r, v, S, a) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate !== 'function' &&
                typeof o.componentWillUpdate !== 'function') ||
              (typeof o.componentWillUpdate === 'function' && o.componentWillUpdate(r, S, a),
              typeof o.UNSAFE_componentWillUpdate === 'function' &&
                o.UNSAFE_componentWillUpdate(r, S, a)),
            typeof o.componentDidUpdate === 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate === 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate !== 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate !== 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = a),
        (r = f))
      : (typeof o.componentDidUpdate !== 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate !== 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yi(e, t, n, r, i, l);
}
function Yi(e, t, n, r, l, i) {
  qs(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && Gu(t, n, !1), He(e, t, i));
  ((r = t.stateNode), (Qp.current = t));
  var u = o && typeof n.getDerivedStateFromError !== 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = nn(t, e.child, null, i)), (t.child = nn(t, null, u, i)))
      : re(e, t, u, i),
    (t.memoizedState = r.state),
    l && Gu(t, n, !0),
    t.child
  );
}
function Zs(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ku(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ku(e, t.context, !1),
    Lo(e, t.containerInfo));
}
function aa(e, t, n, r, l) {
  return (tn(), Eo(l), (t.flags |= 256), re(e, t, n, r), t.child);
}
function qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Js(e, t, n) {
  var r = t.pendingProps,
    l = D.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u))
    ((i = !0), (t.flags &= -129));
  else if (e === null || e.memoizedState !== null) l |= 1;
  if ((R(D, l & 1), e === null)) {
    if (($i(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      return (
        (t.mode & 1) === 0
          ? (t.lanes = 1)
          : e.data === '$!'
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
        null
      );
    return (
      (o = r.children),
      (e = r.fallback),
      i
        ? ((r = t.mode),
          (i = t.child),
          (o = { mode: 'hidden', children: o }),
          (r & 1) === 0 && i !== null
            ? ((i.childLanes = 0), (i.pendingProps = o))
            : (i = Nl(o, r, 0, null)),
          (e = Nt(e, r, n, null)),
          (i.return = t),
          (e.return = t),
          (i.sibling = e),
          (t.child = i),
          (t.child.memoizedState = qi(n)),
          (t.memoizedState = Xi),
          e)
        : Uo(t, o)
    );
  }
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Hp(e, t, o, r, u, l, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
    var a = { mode: 'hidden', children: r.children };
    return (
      (o & 1) === 0 && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = at(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = at(u, i)) : ((i = Nt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? qi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = at(i, { mode: 'visible', children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uo(e, t) {
  return (
    (t = Nl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tr(e, t, n, r) {
  return (
    r !== null && Eo(r),
    nn(t, e.child, null, n),
    (e = Uo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Hp(e, t, n, r, l, i, o) {
  if (n) {
    if (t.flags & 256) return ((t.flags &= -257), (r = ui(Error(y(422)))), Tr(e, t, o, r));
    if (t.memoizedState !== null) return ((t.child = e.child), (t.flags |= 128), null);
    return (
      (i = r.fallback),
      (l = t.mode),
      (r = Nl({ mode: 'visible', children: r.children }, l, 0, null)),
      (i = Nt(i, l, o, null)),
      (i.flags |= 2),
      (r.return = t),
      (i.return = t),
      (r.sibling = i),
      (t.child = r),
      (t.mode & 1) !== 0 && nn(t, e.child, null, o),
      (t.child.memoizedState = qi(o)),
      (t.memoizedState = Xi),
      i
    );
  }
  if ((t.mode & 1) === 0) return Tr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return ((r = u), (i = Error(y(419))), (r = ui(i, r, void 0)), Tr(e, t, o, r));
  }
  if (((u = (o & e.childLanes) !== 0), ue || u)) {
    if (((r = Y), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
        l !== 0 && l !== i.retryLane && ((i.retryLane = l), Qe(e, l), ze(r, e, l, -1)));
    }
    return (Ho(), (r = ui(Error(y(421)))), Tr(e, t, o, r));
  }
  if (l.data === '$?')
    return (
      (t.flags |= 128),
      (t.child = e.child),
      (t = rm.bind(null, e)),
      (l._reactRetry = t),
      null
    );
  return (
    (e = i.treeContext),
    (fe = lt(l.nextSibling)),
    (pe = t),
    (I = !0),
    (_e = null),
    e !== null &&
      ((he[ge++] = Ue), (he[ge++] = Be), (he[ge++] = Ct), (Ue = e.id), (Be = e.overflow), (Ct = t)),
    (t = Uo(t, r.children)),
    (t.flags |= 4096),
    t
  );
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Wi(e.return, t, n));
}
function ai(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function js(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((re(e, t, r.children, n), (r = D.current), (r & 2) !== 0))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
        else if (e.tag === 19) sa(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((R(D, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        n = t.child;
        for (l = null; n !== null; )
          ((e = n.alternate), e !== null && il(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          ai(t, !1, l, n, i));
        break;
      case 'backwards':
        ((n = null), (l = t.child));
        for (t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && il(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        ai(t, !0, n, null, i);
        break;
      case 'together':
        ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Br(e, t) {
  (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function He(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Pt |= t.lanes), (n & t.childLanes) === 0))
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    ((e = t.child), (n = at(e, e.pendingProps)), (t.child = n));
    for (n.return = t; e.sibling !== null; )
      ((e = e.sibling), (n = n.sibling = at(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Kp(e, t, n) {
  switch (t.tag) {
    case 3:
      (Zs(t), tn());
      break;
    case 5:
      Es(t);
      break;
    case 1:
      se(t.type) && br(t);
      break;
    case 4:
      Lo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (R(nl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null)) {
        if (r.dehydrated !== null) return (R(D, D.current & 1), (t.flags |= 128), null);
        if ((n & t.child.childLanes) !== 0) return Js(e, t, n);
        return (R(D, D.current & 1), (e = He(e, t, n)), e !== null ? e.sibling : null);
      }
      R(D, D.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return js(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(D, D.current),
        r)
      )
        break;
      else return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Xs(e, t, n));
  }
  return He(e, t, n);
}
function wn(e, t) {
  if (!I)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function b(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Gp(e, t, n) {
  var r = t.pendingProps;
  switch ((No(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (b(t), null);
    case 1:
      return (se(t.type) && jr(), b(t), null);
    case 3:
      if (
        ((r = t.stateNode),
        rn(),
        M(ae),
        M(te),
        Fo(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        e === null || e.child === null)
      )
        Pr(t)
          ? (t.flags |= 4)
          : e === null ||
            (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
            ((t.flags |= 1024), _e !== null && (lo(_e), (_e = null)));
      return (Zi(e, t), b(t), null);
    case 5:
      Ro(t);
      var l = kt(Zn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (ec(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return (b(t), null);
        }
        if (((e = kt(Oe.current)), Pr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Me] = t), (r[Xn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              (F('cancel', r), F('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < zn.length; l++) F(zn[l], r);
              break;
            case 'source':
              F('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              (F('error', r), F('load', r));
              break;
            case 'details':
              F('toggle', r);
              break;
            case 'input':
              (wu(r, i), F('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!i.multiple }), F('invalid', r));
              break;
            case 'textarea':
              (ku(r, i), F('invalid', r));
          }
          (ki(n, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children'
                ? typeof u === 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 && _r(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u === 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 && _r(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Un.hasOwnProperty(o) && u != null && o === 'onScroll' && F('scroll', r);
            }
          switch (n) {
            case 'input':
              (yr(r), xu(r, i, !0));
              break;
            case 'textarea':
              (yr(r), Su(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick === 'function' && (r.onclick = Jr);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ta(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is === 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Me] = t),
            (e[Xn] = r),
            bs(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Si(n, r)), n)) {
              case 'dialog':
                (F('cancel', e), F('close', e), (l = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                (F('load', e), (l = r));
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < zn.length; l++) F(zn[l], e);
                l = r;
                break;
              case 'source':
                (F('error', e), (l = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                (F('error', e), F('load', e), (l = r));
                break;
              case 'details':
                (F('toggle', e), (l = r));
                break;
              case 'input':
                (wu(e, r), (l = hi(e, r)), F('invalid', e));
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = U({}, r, { value: void 0 })),
                  F('invalid', e));
                break;
              case 'textarea':
                (ku(e, r), (l = wi(e, r)), F('invalid', e));
                break;
              default:
                l = r;
            }
            (ki(n, l), (u = l));
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === 'style'
                  ? Fa(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && La(e, a))
                    : i === 'children'
                      ? typeof a === 'string'
                        ? (n !== 'textarea' || a !== '') && Bn(e, a)
                        : typeof a === 'number' && Bn(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Un.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && F('scroll', e)
                          : a != null && uo(e, i, a, o));
              }
            switch (n) {
              case 'input':
                (yr(e), xu(e, r, !1));
                break;
              case 'textarea':
                (yr(e), Su(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + st(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Yt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick === 'function' && (e.onclick = Jr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (b(t), null);
    case 6:
      if (e && t.stateNode != null) tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r !== 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = kt(Zn.current)), kt(Oe.current), Pr(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[Me] = t), (i = r.nodeValue !== n))) {
            if (((e = pe), e !== null))
              switch (e.tag) {
                case 3:
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    _r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
          }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Me] = t),
            (t.stateNode = r));
      }
      return (b(t), null);
    case 13:
      if (
        (M(D),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && fe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          (ws(), tn(), (t.flags |= 98560), (i = !1));
        else if (((i = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(y(317));
            i[Me] = t;
          } else (tn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
          (b(t), (i = !1));
        } else (_e !== null && (lo(_e), (_e = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      if ((t.flags & 128) !== 0) return ((t.lanes = n), t);
      return (
        (r = r !== null),
        r !== (e !== null && e.memoizedState !== null) &&
          r &&
          ((t.child.flags |= 8192),
          (t.mode & 1) !== 0 && (e === null || (D.current & 1) !== 0 ? H === 0 && (H = 3) : Ho())),
        t.updateQueue !== null && (t.flags |= 4),
        b(t),
        null
      );
    case 4:
      return (rn(), Zi(e, t), e === null && Gn(t.stateNode.containerInfo), b(t), null);
    case 10:
      return (Po(t.type._context), b(t), null);
    case 17:
      return (se(t.type) && jr(), b(t), null);
    case 19:
      if ((M(D), (i = t.memoizedState), i === null)) return (b(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) wn(i, !1);
        else {
          if (H !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = il(e)), o !== null)) {
                ((t.flags |= 128),
                  wn(i, !1),
                  (r = o.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  (t.subtreeFlags = 0),
                  (r = n));
                for (n = t.child; n !== null; )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (R(D, (D.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            $() > on &&
            ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = il(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !I)
            )
              return (b(t), null);
          } else
            2 * $() - i.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      if (i.tail !== null)
        return (
          (t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $()),
          (t.sibling = null),
          (n = D.current),
          R(D, r ? (n & 1) | 2 : n & 1),
          t
        );
      return (b(t), null);
    case 22:
    case 23:
      return (
        Qo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (de & 1073741824) !== 0 && (b(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : b(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Yp(e, t) {
  switch ((No(t), t.tag)) {
    case 1:
      return (
        se(t.type) && jr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        M(ae),
        M(te),
        Fo(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ro(t), null);
    case 13:
      if ((M(D), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return (M(D), null);
    case 4:
      return (rn(), null);
    case 10:
      return (Po(t.type._context), null);
    case 22:
    case 23:
      return (Qo(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
function Kt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n === 'function')
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Ji(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
function qp(e, t) {
  if (((Ii = Xr), (e = os()), ko(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var { anchorOffset: l, focusNode: i } = r;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch (w) {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            f = 0,
            h = 0,
            g = e,
            v = null;
          t: for (;;) {
            for (var x; ; ) {
              if (
                (g !== n || (l !== 0 && g.nodeType !== 3) || (u = o + l),
                g !== i || (r !== 0 && g.nodeType !== 3) || (a = o + r),
                g.nodeType === 3 && (o += g.nodeValue.length),
                (x = g.firstChild) === null)
              )
                break;
              ((v = g), (g = x));
            }
            for (;;) {
              if (g === e) break t;
              if (
                (v === n && ++f === l && (u = o),
                v === i && ++h === r && (a = o),
                (x = g.nextSibling) !== null)
              )
                break;
              ((g = v), (v = g.parentNode));
            }
            g = x;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  ((Oi = { focusedElem: e, selectionRange: n }), (Xr = !1));
  for (k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (k = e));
    else
      for (; k !== null; ) {
        t = k;
        try {
          var S = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var { memoizedProps: N, memoizedState: V } = S,
                    d = t.stateNode,
                    s = d.getSnapshotBeforeUpdate(t.elementType === t.type ? N : Ee(t.type, N), V);
                  d.__reactInternalSnapshotBeforeUpdate = s;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (w) {
          B(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (k = e));
          break;
        }
        k = t.return;
      }
  return ((S = ca), (ca = !1), S);
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && Ji(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ji(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t === 'function' ? t(e) : (t.current = e);
  }
}
function nc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), nc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Me], delete t[Xn], delete t[Ui], delete t[Rp], delete t[Fp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function da(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rc(e.return)) return null;
      e = e.return;
    }
    e.sibling.return = e.return;
    for (e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2) continue e;
      if (e.child === null || e.tag === 4) continue e;
      else ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          (n !== null && n !== void 0) || t.onclick !== null || (t.onclick = Jr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; ) (bi(e, t, n), (e = e.sibling));
}
function eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eo(e, t, n), e = e.sibling; e !== null; ) (eo(e, t, n), (e = e.sibling));
}
function Xe(e, t, n) {
  for (n = n.child; n !== null; ) (lc(e, t, n), (n = n.sibling));
}
function lc(e, t, n) {
  if (Ie && typeof Ie.onCommitFiberUnmount === 'function')
    try {
      Ie.onCommitFiberUnmount(pl, n);
    } catch (u) {}
  switch (n.tag) {
    case 5:
      ee || Kt(n, t);
    case 6:
      var r = X,
        l = Ce;
      ((X = null),
        Xe(e, t, n),
        (X = r),
        (Ce = l),
        X !== null &&
          (Ce
            ? ((e = X),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : X.removeChild(n.stateNode)));
      break;
    case 18:
      X !== null &&
        (Ce
          ? ((e = X),
            (n = n.stateNode),
            e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n),
            Qn(e))
          : ti(X, n.stateNode));
      break;
    case 4:
      ((r = X),
        (l = Ce),
        (X = n.stateNode.containerInfo),
        (Ce = !0),
        Xe(e, t, n),
        (X = r),
        (Ce = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ee && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && ((i & 2) !== 0 ? Ji(n, t, o) : (i & 4) !== 0 && Ji(n, t, o)),
            (l = l.next));
        } while (l !== r);
      }
      Xe(e, t, n);
      break;
    case 1:
      if (!ee && (Kt(n, t), (r = n.stateNode), typeof r.componentWillUnmount === 'function'))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (u) {
          B(n, t, u);
        }
      Xe(e, t, n);
      break;
    case 21:
      Xe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ee = (r = ee) || n.memoizedState !== null), Xe(e, t, n), (ee = r))
        : Xe(e, t, n);
      break;
    default:
      Xe(e, t, n);
  }
}
function fa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Xp()),
      t.forEach(function (r) {
        var l = lm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Ne(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((X = u.stateNode), (Ce = !1));
              break e;
            case 3:
              ((X = u.stateNode.containerInfo), (Ce = !0));
              break e;
            case 4:
              ((X = u.stateNode.containerInfo), (Ce = !0));
              break e;
          }
          u = u.return;
        }
        if (X === null) throw Error(y(160));
        (lc(i, o, l), (X = null), (Ce = !1));
        var a = l.alternate;
        (a !== null && (a.return = null), (l.return = null));
      } catch (f) {
        B(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (ic(t, e), (t = t.sibling));
}
function ic(e, t) {
  var { alternate: n, flags: r } = e;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ne(t, e), Re(e), r & 4)) {
        try {
          (On(3, e, e.return), kl(3, e));
        } catch (N) {
          B(e, e.return, N);
        }
        try {
          On(5, e, e.return);
        } catch (N) {
          B(e, e.return, N);
        }
      }
      break;
    case 1:
      (Ne(t, e), Re(e), r & 512 && n !== null && Kt(n, n.return));
      break;
    case 5:
      if ((Ne(t, e), Re(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Bn(l, '');
        } catch (N) {
          B(e, e.return, N);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (u === 'input' && i.type === 'radio' && i.name != null && Pa(l, i), Si(u, o));
            var f = Si(u, i);
            for (o = 0; o < a.length; o += 2) {
              var h = a[o],
                g = a[o + 1];
              h === 'style'
                ? Fa(l, g)
                : h === 'dangerouslySetInnerHTML'
                  ? La(l, g)
                  : h === 'children'
                    ? Bn(l, g)
                    : uo(l, h, g, f);
            }
            switch (u) {
              case 'input':
                gi(l, i);
                break;
              case 'textarea':
                za(l, i);
                break;
              case 'select':
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Yt(l, !!i.multiple, x, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yt(l, !!i.multiple, i.defaultValue, !0)
                      : Yt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[Xn] = i;
          } catch (N) {
            B(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Ne(t, e), Re(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (N) {
          B(e, e.return, N);
        }
      }
      break;
    case 3:
      if ((Ne(t, e), Re(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Qn(t.containerInfo);
        } catch (N) {
          B(e, e.return, N);
        }
      break;
    case 4:
      (Ne(t, e), Re(e));
      break;
    case 13:
      (Ne(t, e),
        Re(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i || (l.alternate !== null && l.alternate.memoizedState !== null) || ($o = $())),
        r & 4 && fa(e));
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ee = (f = ee) || h), Ne(t, e), (ee = f)) : Ne(t, e),
        Re(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null), (e.stateNode.isHidden = f) && !h && (e.mode & 1) !== 0)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (g = k = h; k !== null; ) {
              switch (((v = k), (x = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  On(4, v, v.return);
                  break;
                case 1:
                  Kt(v, v.return);
                  var S = v.stateNode;
                  if (typeof S.componentWillUnmount === 'function') {
                    ((r = v), (n = v.return));
                    try {
                      ((t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount());
                    } catch (N) {
                      B(r, n, N);
                    }
                  }
                  break;
                case 5:
                  Kt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ma(g);
                    continue;
                  }
              }
              x !== null ? ((x.return = v), (k = x)) : ma(g);
            }
            h = h.sibling;
          }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                ((l = g.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty === 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = g.stateNode),
                      (a = g.memoizedProps.style),
                      (o =
                        a !== void 0 && a !== null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (u.style.display = Ra('display', o))));
              } catch (N) {
                B(e, e.return, N);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = f ? '' : g.memoizedProps;
              } catch (N) {
                B(e, e.return, N);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) || g.memoizedState === null || g === e) &&
            g.child !== null
          ) {
            ((g.child.return = g), (g = g.child));
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            (h === g && (h = null), (g = g.return));
          }
          (h === g && (h = null), (g.sibling.return = g.return), (g = g.sibling));
        }
      }
      break;
    case 19:
      (Ne(t, e), Re(e), r & 4 && fa(e));
      break;
    case 21:
      break;
    default:
      (Ne(t, e), Re(e));
  }
}
function Re(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ''), (r.flags &= -33));
          var i = da(e);
          eo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = da(e);
          bi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      B(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zp(e, t, n) {
  ((k = e), oc(e, t, n));
}
function oc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Lr;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ee;
        u = Lr;
        var f = ee;
        if (((Lr = o), (ee = a) && !f))
          for (k = l; k !== null; )
            ((o = k),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? va(l)
                : a !== null
                  ? ((a.return = o), (k = a))
                  : va(l));
        for (; i !== null; ) ((k = i), oc(i, t, n), (i = i.sibling));
        ((k = l), (Lr = u), (ee = f));
      }
      pa(e, t, n);
    } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (k = i)) : pa(e, t, n);
  }
}
function pa(e) {
  for (; k !== null; ) {
    var t = k;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ee || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ee)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Ee(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Ju(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ju(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
                  if (h !== null) {
                    var g = h.dehydrated;
                    g !== null && Qn(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ee || (t.flags & 512 && ji(t));
      } catch (v) {
        B(t, t.return, v);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (k = n));
      break;
    }
    k = t.return;
  }
}
function ma(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (k = n));
      break;
    }
    k = t.return;
  }
}
function va(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (a) {
            B(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount === 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              B(t, l, a);
            }
          }
          var i = t.return;
          try {
            ji(t);
          } catch (a) {
            B(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ji(t);
          } catch (a) {
            B(t, o, a);
          }
      }
    } catch (a) {
      B(t, t.return, a);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (k = u));
      break;
    }
    k = t.return;
  }
}
function le() {
  return (z & 6) !== 0 ? $() : Vr !== -1 ? Vr : (Vr = $());
}
function ut(e) {
  if ((e.mode & 1) === 0) return 1;
  if ((z & 2) !== 0 && q !== 0) return q & -q;
  if (Ip.transition !== null) return ($r === 0 && ($r = Ha()), $r);
  if (((e = L), e !== 0)) return e;
  return ((e = window.event), (e = e === void 0 ? 16 : Ja(e.type)), e);
}
function ze(e, t, n, r) {
  if (50 < An) throw ((An = 0), (no = null), Error(y(185)));
  if ((tr(e, n, r), (z & 2) === 0 || e !== Y))
    (e === Y && ((z & 2) === 0 && (Sl |= n), H === 4 && je(e, q)),
      ce(e, r),
      n === 1 && z === 0 && (t.mode & 1) === 0 && ((on = $() + 500), yl && pt()));
}
function ce(e, t) {
  var n = e.callbackNode;
  Df(e, t);
  var r = Yr(e, e === Y ? q : 0);
  if (r === 0) (n !== null && Cu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cu(n), t === 1))
      (e.tag === 0 ? Mp(ha.bind(null, e)) : hs(ha.bind(null, e)),
        Tp(function () {
          (z & 6) === 0 && pt();
        }),
        (n = null));
    else {
      switch (Ka(r)) {
        case 1:
          n = po;
          break;
        case 4:
          n = Wa;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = Qa;
          break;
        default:
          n = Gr;
      }
      n = mc(n, uc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function uc(e, t) {
  if (((Vr = -1), ($r = 0), (z & 6) !== 0)) throw Error(y(327));
  var n = e.callbackNode;
  if (jt() && e.callbackNode !== n) return null;
  var r = Yr(e, e === Y ? q : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = dl(e, r);
  else {
    t = r;
    var l = z;
    z |= 2;
    var i = sc();
    if (Y !== e || q !== t) ((De = null), (on = $() + 500), St(e, t));
    do
      try {
        em();
        break;
      } catch (u) {
        ac(e, u);
      }
    while (1);
    (_o(), (al.current = i), (z = l), W !== null ? (t = 0) : ((Y = null), (q = 0), (t = H)));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Pi(e)), l !== 0 && ((r = l), (t = ro(e, l)))), t === 1))
      throw ((n = er), St(e, 0), je(e, r), ce(e, $()), n);
    if (t === 6) je(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !jp(l) &&
          ((t = dl(e, r)), t === 2 && ((i = Pi(e)), i !== 0 && ((r = i), (t = ro(e, i)))), t === 1))
      )
        throw ((n = er), St(e, 0), je(e, r), ce(e, $()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          yt(e, oe, De);
          break;
        case 3:
          if ((je(e, r), (r & 130023424) === r && ((t = $o + 500 - $()), 10 < t))) {
            if (Yr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (le(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Ai(yt.bind(null, e, oe, De), t);
            break;
          }
          yt(e, oe, De);
          break;
        case 4:
          if ((je(e, r), (r & 4194240) === r)) break;
          t = e.eventTimes;
          for (l = -1; 0 < r; ) {
            var o = 31 - Pe(r);
            ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
          }
          if (
            ((r = l),
            (r = $() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3000 > r
                        ? 3000
                        : 4320 > r
                          ? 4320
                          : 1960 * Jp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ai(yt.bind(null, e, oe, De), r);
            break;
          }
          yt(e, oe, De);
          break;
        case 5:
          yt(e, oe, De);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return (ce(e, $()), e.callbackNode === n ? uc.bind(null, e) : null);
}
function ro(e, t) {
  var n = Dn;
  return (
    e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256),
    (e = dl(e, t)),
    e !== 2 && ((t = oe), (oe = n), t !== null && lo(t)),
    e
  );
}
function lo(e) {
  oe === null ? (oe = e) : oe.push.apply(oe, e);
}
function jp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Te(i(), l)) return !1;
          } catch (o) {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function je(e, t) {
  ((t &= ~Vo), (t &= ~Sl), (e.suspendedLanes |= t), (e.pingedLanes &= ~t));
  for (e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Pe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ha(e) {
  if ((z & 6) !== 0) throw Error(y(327));
  jt();
  var t = Yr(e, 0);
  if ((t & 1) === 0) return (ce(e, $()), null);
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pi(e);
    r !== 0 && ((t = r), (n = ro(e, r)));
  }
  if (n === 1) throw ((n = er), St(e, 0), je(e, t), ce(e, $()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yt(e, oe, De),
    ce(e, $()),
    null
  );
}
function Wo(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    ((z = n), z === 0 && ((on = $() + 500), yl && pt()));
  }
}
function zt(e) {
  et !== null && et.tag === 0 && (z & 6) === 0 && jt();
  var t = z;
  z |= 1;
  var n = we.transition,
    r = L;
  try {
    if (((we.transition = null), (L = 1), e)) return e();
  } finally {
    ((L = r), (we.transition = n), (z = t), (z & 6) === 0 && pt());
  }
}
function Qo() {
  ((de = Gt.current), M(Gt));
}
function St(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zp(n)), W !== null))
    for (n = W.return; n !== null; ) {
      var r = n;
      switch ((No(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r !== null && r !== void 0 && jr());
          break;
        case 3:
          (rn(), M(ae), M(te), Fo());
          break;
        case 5:
          Ro(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          M(D);
          break;
        case 19:
          M(D);
          break;
        case 10:
          Po(r.type._context);
          break;
        case 22:
        case 23:
          Qo();
      }
      n = n.return;
    }
  if (
    ((Y = e),
    (W = e = at(e.current, null)),
    (q = de = t),
    (H = 0),
    (er = null),
    (Vo = Sl = Pt = 0),
    (oe = Dn = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = l), (r.next = o));
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function ac(e, t) {
  do {
    var n = W;
    try {
      if ((_o(), (Ar.current = ul), ol)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        ol = !1;
      }
      if (
        ((_t = 0),
        (G = Q = A = null),
        (In = !1),
        (Jn = 0),
        (Bo.current = null),
        n === null || n.return === null)
      ) {
        ((H = 1), (er = t), (W = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = q),
          (u.flags |= 32768),
          a !== null && typeof a === 'object' && typeof a.then === 'function')
        ) {
          var f = a,
            h = u,
            g = h.tag;
          if ((h.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var x = ra(o);
          if (x !== null) {
            ((x.flags &= -257), la(x, o, u, i, t), x.mode & 1 && na(i, f, t), (t = x), (a = f));
            var S = t.updateQueue;
            if (S === null) {
              var N = new Set();
              (N.add(a), (t.updateQueue = N));
            } else S.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              (na(i, f, t), Ho());
              break e;
            }
            a = Error(y(426));
          }
        } else if (I && u.mode & 1) {
          var V = ra(o);
          if (V !== null) {
            ((V.flags & 65536) === 0 && (V.flags |= 256), la(V, o, u, i, t), Eo(ln(a, u)));
            break e;
          }
        }
        ((i = a = ln(a, u)), H !== 4 && (H = 2), Dn === null ? (Dn = [i]) : Dn.push(i), (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var d = Ks(i, a, t);
              Zu(i, d);
              break e;
            case 1:
              u = a;
              var { type: s, stateNode: p } = i;
              if (
                (i.flags & 128) === 0 &&
                (typeof s.getDerivedStateFromError === 'function' ||
                  (p !== null &&
                    typeof p.componentDidCatch === 'function' &&
                    (ot === null || !ot.has(p))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var w = Gs(i, u, t);
                Zu(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      dc(n);
    } catch (E) {
      ((t = E), W === n && n !== null && (W = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function sc() {
  var e = al.current;
  return ((al.current = ul), e === null ? ul : e);
}
function Ho() {
  if (H === 0 || H === 3 || H === 2) H = 4;
  Y === null || ((Pt & 268435455) === 0 && (Sl & 268435455) === 0) || je(Y, q);
}
function dl(e, t) {
  var n = z;
  z |= 2;
  var r = sc();
  if (Y !== e || q !== t) ((De = null), St(e, t));
  do
    try {
      bp();
      break;
    } catch (l) {
      ac(e, l);
    }
  while (1);
  if ((_o(), (z = n), (al.current = r), W !== null)) throw Error(y(261));
  return ((Y = null), (q = 0), H);
}
function bp() {
  for (; W !== null; ) cc(W);
}
function em() {
  for (; W !== null && !Pf(); ) cc(W);
}
function cc(e) {
  var t = pc(e.alternate, e, de);
  ((e.memoizedProps = e.pendingProps), t === null ? dc(e) : (W = t), (Bo.current = null));
}
function dc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Gp(n, t, de)), n !== null)) {
        W = n;
        return;
      }
    } else {
      if (((n = Yp(n, t)), n !== null)) {
        ((n.flags &= 32767), (W = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((H = 6), (W = null));
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      W = t;
      return;
    }
    W = t = e;
  } while (t !== null);
  H === 0 && (H = 5);
}
function yt(e, t, n) {
  var r = L,
    l = we.transition;
  try {
    ((we.transition = null), (L = 1), tm(e, t, n, r));
  } finally {
    ((we.transition = l), (L = r));
  }
  return null;
}
function tm(e, t, n, r) {
  do jt();
  while (et !== null);
  if ((z & 6) !== 0) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Af(e, i),
    e === Y && ((W = Y = null), (q = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Rr ||
      ((Rr = !0),
      mc(Gr, function () {
        return (jt(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    ((i = we.transition), (we.transition = null));
    var o = L;
    L = 1;
    var u = z;
    ((z |= 4),
      (Bo.current = null),
      qp(e, n),
      ic(n, e),
      Np(Oi),
      (Xr = !!Ii),
      (Oi = Ii = null),
      (e.current = n),
      Zp(n, e, l),
      zf(),
      (z = u),
      (L = o),
      (we.transition = i));
  } else e.current = n;
  if (
    (Rr && ((Rr = !1), (et = e), (cl = l)),
    (i = e.pendingLanes),
    i === 0 && (ot = null),
    Rf(n.stateNode, r),
    ce(e, $()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (sl) throw ((sl = !1), (e = to), (to = null), e);
  return (
    (cl & 1) !== 0 && e.tag !== 0 && jt(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === no ? An++ : ((An = 0), (no = e))) : (An = 0),
    pt(),
    null
  );
}
function jt() {
  if (et !== null) {
    var e = Ka(cl),
      t = we.transition,
      n = L;
    try {
      if (((we.transition = null), (L = 16 > e ? 16 : e), et === null)) var r = !1;
      else {
        if (((e = et), (et = null), (cl = 0), (z & 6) !== 0)) throw Error(y(331));
        var l = z;
        z |= 4;
        for (k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if ((k.flags & 16) !== 0) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var f = u[a];
                for (k = f; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, h, i);
                  }
                  var g = h.child;
                  if (g !== null) ((g.return = h), (k = g));
                  else
                    for (; k !== null; ) {
                      h = k;
                      var { sibling: v, return: x } = h;
                      if ((nc(h), h === f)) {
                        k = null;
                        break;
                      }
                      if (v !== null) {
                        ((v.return = x), (k = v));
                        break;
                      }
                      k = x;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var N = S.child;
                if (N !== null) {
                  S.child = null;
                  do {
                    var V = N.sibling;
                    ((N.sibling = null), (N = V));
                  } while (N !== null);
                }
              }
              k = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (k = o));
          else
            e: for (; k !== null; ) {
              if (((i = k), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    On(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                ((d.return = i.return), (k = d));
                break e;
              }
              k = i.return;
            }
        }
        var s = e.current;
        for (k = s; k !== null; ) {
          o = k;
          var p = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && p !== null) ((p.return = o), (k = p));
          else
            e: for (o = s; k !== null; ) {
              if (((u = k), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(9, u);
                  }
                } catch (E) {
                  B(u, u.return, E);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                ((w.return = u.return), (k = w));
                break e;
              }
              k = u.return;
            }
        }
        if (((z = l), pt(), Ie && typeof Ie.onPostCommitFiberRoot === 'function'))
          try {
            Ie.onPostCommitFiberRoot(pl, e);
          } catch (E) {}
        r = !0;
      }
      return r;
    } finally {
      ((L = n), (we.transition = t));
    }
  }
  return !1;
}
function ga(e, t, n) {
  ((t = ln(n, t)),
    (t = Ks(e, t, 1)),
    (e = it(e, t, 1)),
    (t = le()),
    e !== null && (tr(e, 1, t), ce(e, t)));
}
function B(e, t, n) {
  if (e.tag === 3) ga(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError === 'function' ||
          (typeof r.componentDidCatch === 'function' && (ot === null || !ot.has(r)))
        ) {
          ((e = ln(n, e)),
            (e = Gs(t, e, 1)),
            (t = it(t, e, 1)),
            (e = le()),
            t !== null && (tr(t, 1, e), ce(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function nm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Y === e &&
      (q & n) === n &&
      (H === 4 || (H === 3 && (q & 130023424) === q && 500 > $() - $o) ? St(e, 0) : (Vo |= n)),
    ce(e, t));
}
function fc(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = kr), (kr <<= 1), (kr & 130023424) === 0 && (kr = 4194304)));
  var n = le();
  ((e = Qe(e, t)), e !== null && (tr(e, t, n), ce(e, n)));
}
function rm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), fc(e, n));
}
function lm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var { stateNode: r, memoizedState: l } = e;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  (r !== null && r.delete(t), fc(e, n));
}
function mc(e, t) {
  return $a(e, t);
}
function im(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function ye(e, t, n, r) {
  return new im(e, t, n, r);
}
function Ko(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function om(e) {
  if (typeof e === 'function') return Ko(e) ? 1 : 0;
  if (e !== void 0 && e !== null) {
    if (((e = e.$$typeof), e === so)) return 11;
    if (e === co) return 14;
  }
  return 2;
}
function at(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ye(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e === 'function')) Ko(e) && (o = 1);
  else if (typeof e === 'string') o = 5;
  else
    e: switch (e) {
      case Dt:
        return Nt(n.children, l, i, t);
      case ao:
        ((o = 8), (l |= 8));
        break;
      case fi:
        return ((e = ye(12, n, t, l | 2)), (e.elementType = fi), (e.lanes = i), e);
      case pi:
        return ((e = ye(13, n, t, l)), (e.elementType = pi), (e.lanes = i), e);
      case mi:
        return ((e = ye(19, n, t, l)), (e.elementType = mi), (e.lanes = i), e);
      case Ea:
        return Nl(n, l, i, t);
      default:
        if (typeof e === 'object' && e !== null)
          switch (e.$$typeof) {
            case Sa:
              o = 10;
              break e;
            case Na:
              o = 9;
              break e;
            case so:
              o = 11;
              break e;
            case co:
              o = 14;
              break e;
            case qe:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return ((t = ye(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
}
function Nt(e, t, n, r) {
  return ((e = ye(7, e, r, t)), (e.lanes = n), e);
}
function Nl(e, t, n, r) {
  return (
    (e = ye(22, e, r, t)),
    (e.elementType = Ea),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function si(e, t, n) {
  return ((e = ye(6, e, null, t)), (e.lanes = n), e);
}
function ci(e, t, n) {
  return (
    (t = ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function um(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Go(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new um(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ye(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    To(i),
    e
  );
}
function am(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ot,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function vc(e) {
  if (!e) return ct;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (se(n)) return vs(e, n, t);
  }
  return t;
}
function hc(e, t, n, r, l, i, o, u, a) {
  return (
    (e = Go(n, r, !0, e, l, i, o, u, a)),
    (e.context = vc(null)),
    (n = e.current),
    (r = le()),
    (l = ut(n)),
    (i = Ve(r, l)),
    (i.callback = t !== void 0 && t !== null ? t : null),
    it(n, i, l),
    (e.current.lanes = l),
    tr(e, l, r),
    ce(e, r),
    e
  );
}
function El(e, t, n, r) {
  var l = t.current,
    i = le(),
    o = ut(l);
  return (
    (n = vc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = it(l, t, o)),
    e !== null && (ze(e, l, o, i), Dr(e, l, o)),
    o
  );
}
function fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ya(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yo(e, t) {
  (ya(e, t), (e = e.alternate) && ya(e, t));
}
function sm() {
  return null;
}
function Xo(e) {
  this._internalRoot = e;
}
function Cl(e) {
  this._internalRoot = e;
}
function qo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function wa() {}
function cm(e, t, n, r, l) {
  if (l) {
    if (typeof r === 'function') {
      var i = r;
      r = function () {
        var f = fl(o);
        i.call(f);
      };
    }
    var o = hc(t, r, e, 0, null, !1, !1, '', wa);
    return (
      (e._reactRootContainer = o),
      (e[We] = o.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r === 'function') {
    var u = r;
    r = function () {
      var f = fl(a);
      u.call(f);
    };
  }
  var a = Go(e, 0, !1, null, null, !1, !1, '', wa);
  return (
    (e._reactRootContainer = a),
    (e[We] = a.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      El(t, a, n, r);
    }),
    a
  );
}
function Pl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l === 'function') {
      var u = l;
      l = function () {
        var a = fl(o);
        u.call(a);
      };
    }
    El(t, o, e, l);
  } else o = cm(n, t, e, l, r);
  return fl(o);
}
var xa,
  O,
  ka,
  Un,
  $e,
  di,
  pf,
  hu,
  gu,
  Z,
  io,
  Ke,
  gr,
  Ot,
  Dt,
  ao,
  fi,
  Sa,
  Na,
  so,
  pi,
  mi,
  co,
  qe,
  Ea,
  yu,
  U,
  Hl,
  Kl = !1,
  Sn,
  wr,
  La,
  Tn,
  xf,
  kf,
  Ni = null,
  Ei = null,
  Xt = null,
  qt = null,
  Yl = !1,
  Ci = !1,
  ht,
  Ln = !1,
  Hr = null,
  Kr = !1,
  _i = null,
  Nf,
  $a,
  Cu,
  Pf,
  zf,
  $,
  Tf,
  po,
  Wa,
  Gr,
  Lf,
  Qa,
  pl = null,
  Ie = null,
  Pe,
  Ff,
  Mf,
  xr = 64,
  kr = 4194304,
  L = 0,
  Ga,
  vo,
  Ya,
  Xa,
  qa,
  zi = !1,
  Sr,
  tt = null,
  nt = null,
  rt = null,
  $n,
  Wn,
  Je,
  Uf,
  Zt,
  Xr = !0,
  qr = null,
  be = null,
  go = null,
  Mr = null,
  un,
  yo,
  nr,
  Qf,
  ql,
  Zl,
  gn,
  ml,
  Tu,
  Hf,
  Kf,
  Gf,
  Jl,
  Yf,
  Xf,
  qf,
  Zf,
  Jf,
  Lu,
  jf,
  bf,
  ep,
  np,
  rp,
  lp,
  Ru,
  ip,
  op,
  up,
  ap,
  sp,
  cp,
  dp,
  xo,
  Rn = null,
  fp,
  ba,
  Fu,
  Mu = !1,
  At = !1,
  vp,
  Fn = null,
  Hn = null,
  rs = !1,
  En,
  Cn,
  Or,
  Te,
  Ep,
  Ut = null,
  Li = null,
  Mn = null,
  Ri = !1,
  Bt,
  jl,
  us,
  as,
  ss,
  cs,
  ds,
  fs,
  Bu,
  Pn,
  Fi,
  Mi,
  _n,
  zn,
  Cp,
  Cr,
  _p,
  Pp,
  Ii = null,
  Oi = null,
  Ai,
  zp,
  Qu,
  Tp,
  an,
  Me,
  Xn,
  We,
  Ui,
  Rp,
  Fp,
  Bi,
  $t = -1,
  ct,
  te,
  ae,
  Et,
  Ae = null,
  yl = !1,
  ni = !1,
  Wt,
  Qt = 0,
  el = null,
  tl = 0,
  he,
  ge = 0,
  Ct = null,
  Ue = 1,
  Be = '',
  pe = null,
  fe = null,
  I = !1,
  _e = null,
  Ip,
  nn,
  ks,
  nl,
  rl = null,
  Ht = null,
  Co = null,
  xt = null,
  Ze = !1,
  lr,
  Oe,
  qn,
  Zn,
  D,
  ri,
  Ar,
  li,
  _t = 0,
  A = null,
  Q = null,
  G = null,
  ol = !1,
  In = !1,
  Jn = 0,
  Op = 0,
  ul,
  Bp,
  Vp,
  $p,
  xl,
  Wp,
  Qp,
  ue = !1,
  Xi,
  bs,
  Zi,
  ec,
  tc,
  Lr = !1,
  ee = !1,
  Xp,
  k = null,
  ca = !1,
  X = null,
  Ce = !1,
  Jp,
  al,
  Bo,
  we,
  z = 0,
  Y = null,
  W = null,
  q = 0,
  de = 0,
  Gt,
  H = 0,
  er = null,
  Pt = 0,
  Sl = 0,
  Vo = 0,
  Dn = null,
  oe = null,
  $o = 0,
  on = 1 / 0,
  De = null,
  sl = !1,
  to = null,
  ot = null,
  Rr = !1,
  et = null,
  cl = 0,
  An = 0,
  no = null,
  Vr = -1,
  $r = 0,
  pc,
  gc,
  dm,
  xn,
  fm,
  It,
  yc,
  wc = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qo(t)) throw Error(y(200));
    return am(e, t, null, n);
  },
  xc = function (e, t) {
    if (!qo(e)) throw Error(y(299));
    var n = !1,
      r = '',
      l = gc;
    return (
      t !== null &&
        t !== void 0 &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
      (t = Go(e, 1, !1, null, null, n, !1, r, l)),
      (e[We] = t.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      new Xo(t)
    );
  },
  kc = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) {
      if (typeof e.render === 'function') throw Error(y(188));
      throw ((e = Object.keys(e).join(',')), Error(y(268, e)));
    }
    return ((e = Ba(t)), (e = e === null ? null : e.stateNode), e);
  },
  Sc = function (e) {
    return zt(e);
  },
  Nc = function (e, t, n) {
    if (!_l(t)) throw Error(y(200));
    return Pl(null, e, t, !0, n);
  },
  Ec = function (e, t, n) {
    if (!qo(e)) throw Error(y(405));
    var r = (n != null && n.hydratedSources) || null,
      l = !1,
      i = '',
      o = gc;
    if (
      (n !== null &&
        n !== void 0 &&
        (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (t = hc(t, null, e, 1, n != null ? n : null, l, !1, i, o)),
      (e[We] = t.current),
      Gn(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        ((n = r[e]),
          (l = n._getVersion),
          (l = l(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, l])
            : t.mutableSourceEagerHydrationData.push(n, l));
    return new Cl(t);
  },
  Cc = function (e, t, n) {
    if (!_l(t)) throw Error(y(200));
    return Pl(null, e, t, !1, n);
  },
  _c = function (e) {
    if (!_l(e)) throw Error(y(40));
    return e._reactRootContainer
      ? (zt(function () {
          Pl(null, null, e, !1, function () {
            ((e._reactRootContainer = null), (e[We] = null));
          });
        }),
        !0)
      : !1;
  },
  Pc,
  zc = function (e, t, n, r) {
    if (!_l(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return Pl(e, t, n, !1, r);
  },
  Tc = '18.3.1-next-f1338f8080-20240426';
var Lc = Yc(() => {
  ((xa = mt(cn(), 1)), (O = mt(vu(), 1)));
  ((ka = new Set()), (Un = {}));
  (($e = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  )),
    (di = Object.prototype.hasOwnProperty),
    (pf =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
    (hu = {}),
    (gu = {}));
  Z = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      Z[e] = new ie(e, 0, !1, e, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    Z[t] = new ie(t, 1, !1, e[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    Z[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
    Z[e] = new ie(e, 2, !1, e, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      Z[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    Z[e] = new ie(e, 3, !0, e, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (e) {
    Z[e] = new ie(e, 4, !1, e, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    Z[e] = new ie(e, 6, !1, e, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (e) {
    Z[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  io = /[\-:]([a-z])/g;
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(io, oo);
      Z[t] = new ie(t, 1, !1, e, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(io, oo);
      Z[t] = new ie(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(io, oo);
    Z[t] = new ie(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    Z[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Z.xlinkHref = new ie('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    Z[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  ((Ke = xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
    (gr = Symbol.for('react.element')),
    (Ot = Symbol.for('react.portal')),
    (Dt = Symbol.for('react.fragment')),
    (ao = Symbol.for('react.strict_mode')),
    (fi = Symbol.for('react.profiler')),
    (Sa = Symbol.for('react.provider')),
    (Na = Symbol.for('react.context')),
    (so = Symbol.for('react.forward_ref')),
    (pi = Symbol.for('react.suspense')),
    (mi = Symbol.for('react.suspense_list')),
    (co = Symbol.for('react.memo')),
    (qe = Symbol.for('react.lazy')),
    (Ea = Symbol.for('react.offscreen')),
    (yu = Symbol.iterator));
  U = Object.assign;
  Sn = Array.isArray;
  La = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      ((wr = wr || document.createElement('div')),
        (wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>'));
      for (t = wr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  ((Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  }),
    (xf = ['Webkit', 'ms', 'Moz', 'O']));
  Object.keys(Tn).forEach(function (e) {
    xf.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]));
    });
  });
  kf = U(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  if ($e)
    try {
      ((ht = {}),
        Object.defineProperty(ht, 'passive', {
          get: function () {
            Ci = !0;
          },
        }),
        window.addEventListener('test', ht, ht),
        window.removeEventListener('test', ht, ht));
    } catch (e) {
      Ci = !1;
    }
  Nf = {
    onError: function (e) {
      ((Ln = !0), (Hr = e));
    },
  };
  (($a = O.unstable_scheduleCallback),
    (Cu = O.unstable_cancelCallback),
    (Pf = O.unstable_shouldYield),
    (zf = O.unstable_requestPaint),
    ($ = O.unstable_now),
    (Tf = O.unstable_getCurrentPriorityLevel),
    (po = O.unstable_ImmediatePriority),
    (Wa = O.unstable_UserBlockingPriority),
    (Gr = O.unstable_NormalPriority),
    (Lf = O.unstable_LowPriority),
    (Qa = O.unstable_IdlePriority));
  ((Pe = Math.clz32 ? Math.clz32 : If), (Ff = Math.log), (Mf = Math.LN2));
  ((Sr = []),
    ($n = new Map()),
    (Wn = new Map()),
    (Je = []),
    (Uf =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      )));
  Zt = Ke.ReactCurrentBatchConfig;
  ((un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  }),
    (yo = me(un)),
    (nr = U({}, un, { view: 0, detail: 0 })),
    (Qf = me(nr)),
    (ml = U({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        if ('movementX' in e) return e.movementX;
        return (
          e !== gn &&
            (gn && e.type === 'mousemove'
              ? ((ql = e.screenX - gn.screenX), (Zl = e.screenY - gn.screenY))
              : (Zl = ql = 0),
            (gn = e)),
          ql
        );
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Zl;
      },
    })),
    (Tu = me(ml)),
    (Hf = U({}, ml, { dataTransfer: 0 })),
    (Kf = me(Hf)),
    (Gf = U({}, nr, { relatedTarget: 0 })),
    (Jl = me(Gf)),
    (Yf = U({}, un, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    })),
    (Xf = me(Yf)),
    (qf = U({}, un, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    })),
    (Zf = me(qf)),
    (Jf = U({}, un, { data: 0 })),
    (Lu = me(Jf)),
    (jf = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    }),
    (bf = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    }),
    (ep = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }));
  ((np = U({}, nr, {
    key: function (e) {
      if (e.key) {
        var t = jf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ir(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? bf[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wo,
    charCode: function (e) {
      return e.type === 'keypress' ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ir(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  })),
    (rp = me(np)),
    (lp = U({}, ml, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    })),
    (Ru = me(lp)),
    (ip = U({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wo,
    })),
    (op = me(ip)),
    (up = U({}, un, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    })),
    (ap = me(up)),
    (sp = U({}, ml, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    })),
    (cp = me(sp)),
    (dp = [9, 13, 27, 32]),
    (xo = $e && 'CompositionEvent' in window));
  $e && 'documentMode' in document && (Rn = document.documentMode);
  ((fp = $e && 'TextEvent' in window && !Rn),
    (ba = $e && (!xo || (Rn && 8 < Rn && 11 >= Rn))),
    (Fu = String.fromCharCode(32)));
  vp = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  if ($e) {
    if ($e) {
      if (((Cn = 'oninput' in document), !Cn))
        ((Or = document.createElement('div')),
          Or.setAttribute('oninput', 'return;'),
          (Cn = typeof Or.oninput === 'function'));
      En = Cn;
    } else En = !1;
    rs = En && (!document.documentMode || 9 < document.documentMode);
  }
  Te = typeof Object.is === 'function' ? Object.is : Sp;
  Ep = $e && 'documentMode' in document && 11 >= document.documentMode;
  ((Bt = {
    animationend: Er('Animation', 'AnimationEnd'),
    animationiteration: Er('Animation', 'AnimationIteration'),
    animationstart: Er('Animation', 'AnimationStart'),
    transitionend: Er('Transition', 'TransitionEnd'),
  }),
    (jl = {}),
    (us = {}));
  $e &&
    ((us = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Bt.animationend.animation,
      delete Bt.animationiteration.animation,
      delete Bt.animationstart.animation),
    'TransitionEvent' in window || delete Bt.transitionend.transition);
  ((as = hl('animationend')),
    (ss = hl('animationiteration')),
    (cs = hl('animationstart')),
    (ds = hl('transitionend')),
    (fs = new Map()),
    (Bu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      )));
  for (_n = 0; _n < Bu.length; _n++)
    ((Pn = Bu[_n]),
      (Fi = Pn.toLowerCase()),
      (Mi = Pn[0].toUpperCase() + Pn.slice(1)),
      dt(Fi, 'on' + Mi));
  dt(as, 'onAnimationEnd');
  dt(ss, 'onAnimationIteration');
  dt(cs, 'onAnimationStart');
  dt('dblclick', 'onDoubleClick');
  dt('focusin', 'onFocus');
  dt('focusout', 'onBlur');
  dt(ds, 'onTransitionEnd');
  bt('onMouseEnter', ['mouseout', 'mouseover']);
  bt('onMouseLeave', ['mouseout', 'mouseover']);
  bt('onPointerEnter', ['pointerout', 'pointerover']);
  bt('onPointerLeave', ['pointerout', 'pointerover']);
  Tt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
  Tt(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  );
  Tt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  Tt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
  Tt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
  Tt(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
  ((zn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    )),
    (Cp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zn))));
  Cr = '_reactListening' + Math.random().toString(36).slice(2);
  ((_p = /\r\n?/g), (Pp = /\u0000|\uFFFD/g));
  ((Ai = typeof setTimeout === 'function' ? setTimeout : void 0),
    (zp = typeof clearTimeout === 'function' ? clearTimeout : void 0),
    (Qu = typeof Promise === 'function' ? Promise : void 0),
    (Tp =
      typeof queueMicrotask === 'function'
        ? queueMicrotask
        : typeof Qu < 'u'
          ? function (e) {
              return Qu.resolve(null).then(e).catch(Lp);
            }
          : Ai));
  ((an = Math.random().toString(36).slice(2)),
    (Me = '__reactFiber$' + an),
    (Xn = '__reactProps$' + an),
    (We = '__reactContainer$' + an),
    (Ui = '__reactEvents$' + an),
    (Rp = '__reactListeners$' + an),
    (Fp = '__reactHandles$' + an));
  Bi = [];
  ((ct = {}), (te = ft(ct)), (ae = ft(!1)), (Et = ct));
  ((Wt = []), (he = []));
  Ip = Ke.ReactCurrentBatchConfig;
  ((nn = xs(!0)), (ks = xs(!1)), (nl = ft(null)));
  ((lr = {}), (Oe = ft(lr)), (qn = ft(lr)), (Zn = ft(lr)));
  D = ft(0);
  ri = [];
  ((Ar = Ke.ReactCurrentDispatcher), (li = Ke.ReactCurrentBatchConfig));
  ((ul = {
    readContext: xe,
    useCallback: j,
    useContext: j,
    useEffect: j,
    useImperativeHandle: j,
    useInsertionEffect: j,
    useLayoutEffect: j,
    useMemo: j,
    useReducer: j,
    useRef: j,
    useState: j,
    useDebugValue: j,
    useDeferredValue: j,
    useTransition: j,
    useMutableSource: j,
    useSyncExternalStore: j,
    useId: j,
    unstable_isNewReconciler: !1,
  }),
    (Bp = {
      readContext: xe,
      useCallback: function (e, t) {
        return ((Fe().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: xe,
      useEffect: bu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n !== null && n !== void 0 ? n.concat([e]) : null),
          Ur(4194308, 4, Os.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ur(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ur(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Fe();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = Fe();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Ap.bind(null, A, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Fe();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ju,
      useDebugValue: Ao,
      useDeferredValue: function (e) {
        return (Fe().memoizedState = e);
      },
      useTransition: function () {
        var e = ju(!1),
          t = e[0];
        return ((e = Dp.bind(null, e[1])), (Fe().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = A,
          l = Fe();
        if (I) {
          if (n === void 0) throw Error(y(407));
          n = n();
        } else {
          if (((n = t()), Y === null)) throw Error(y(349));
          (_t & 30) !== 0 || Ps(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          bu(Ts.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          bn(9, zs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Fe(),
          t = Y.identifierPrefix;
        if (I) {
          var n = Be,
            r = Ue;
          ((n = (r & ~(1 << (32 - Pe(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Jn++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Op++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    }),
    (Vp = {
      readContext: xe,
      useCallback: As,
      useContext: xe,
      useEffect: Do,
      useImperativeHandle: Ds,
      useInsertionEffect: Ms,
      useLayoutEffect: Is,
      useMemo: Us,
      useReducer: ii,
      useRef: Fs,
      useState: function () {
        return ii(jn);
      },
      useDebugValue: Ao,
      useDeferredValue: function (e) {
        var t = ke();
        return Bs(t, Q.memoizedState, e);
      },
      useTransition: function () {
        var e = ii(jn)[0],
          t = ke().memoizedState;
        return [e, t];
      },
      useMutableSource: Cs,
      useSyncExternalStore: _s,
      useId: Vs,
      unstable_isNewReconciler: !1,
    }),
    ($p = {
      readContext: xe,
      useCallback: As,
      useContext: xe,
      useEffect: Do,
      useImperativeHandle: Ds,
      useInsertionEffect: Ms,
      useLayoutEffect: Is,
      useMemo: Us,
      useReducer: oi,
      useRef: Fs,
      useState: function () {
        return oi(jn);
      },
      useDebugValue: Ao,
      useDeferredValue: function (e) {
        var t = ke();
        return Q === null ? (t.memoizedState = e) : Bs(t, Q.memoizedState, e);
      },
      useTransition: function () {
        var e = oi(jn)[0],
          t = ke().memoizedState;
        return [e, t];
      },
      useMutableSource: Cs,
      useSyncExternalStore: _s,
      useId: Vs,
      unstable_isNewReconciler: !1,
    }));
  xl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Lt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = le(),
        l = ut(e),
        i = Ve(r, l);
      ((i.payload = t),
        n !== void 0 && n !== null && (i.callback = n),
        (t = it(e, i, l)),
        t !== null && (ze(t, e, l, r), Dr(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = le(),
        l = ut(e),
        i = Ve(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n !== void 0 && n !== null && (i.callback = n),
        (t = it(e, i, l)),
        t !== null && (ze(t, e, l, r), Dr(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = le(),
        r = ut(e),
        l = Ve(n, r);
      ((l.tag = 2),
        t !== void 0 && t !== null && (l.callback = t),
        (t = it(e, l, r)),
        t !== null && (ze(t, e, r, n), Dr(t, e, r)));
    },
  };
  Wp = typeof WeakMap === 'function' ? WeakMap : Map;
  Qp = Ke.ReactCurrentOwner;
  Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
  bs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  };
  Zi = function () {};
  ec = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      ((e = t.stateNode), kt(Oe.current));
      var i = null;
      switch (n) {
        case 'input':
          ((l = hi(e, l)), (r = hi(e, r)), (i = []));
          break;
        case 'select':
          ((l = U({}, l, { value: void 0 })), (r = U({}, r, { value: void 0 })), (i = []));
          break;
        case 'textarea':
          ((l = wi(e, l)), (r = wi(e, r)), (i = []));
          break;
        default:
          typeof l.onClick !== 'function' && typeof r.onClick === 'function' && (e.onclick = Jr);
      }
      ki(n, r);
      var o;
      n = null;
      for (f in l)
        if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
          if (f === 'style') {
            var u = l[f];
            for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
          } else
            f !== 'dangerouslySetInnerHTML' &&
              f !== 'children' &&
              f !== 'suppressContentEditableWarning' &&
              f !== 'suppressHydrationWarning' &&
              f !== 'autoFocus' &&
              (Un.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
      for (f in r) {
        var a = r[f];
        if (
          ((u = l != null ? l[f] : void 0),
          r.hasOwnProperty(f) && a !== u && (a != null || u != null))
        )
          if (f === 'style')
            if (u) {
              for (o in u)
                !u.hasOwnProperty(o) || (a && a.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
              for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
            } else (n || (i || (i = []), i.push(f, n)), (n = a));
          else
            f === 'dangerouslySetInnerHTML'
              ? ((a = a ? a.__html : void 0),
                (u = u ? u.__html : void 0),
                a != null && u !== a && (i = i || []).push(f, a))
              : f === 'children'
                ? (typeof a !== 'string' && typeof a !== 'number') || (i = i || []).push(f, '' + a)
                : f !== 'suppressContentEditableWarning' &&
                  f !== 'suppressHydrationWarning' &&
                  (Un.hasOwnProperty(f)
                    ? (a != null && f === 'onScroll' && F('scroll', e), i || u === a || (i = []))
                    : (i = i || []).push(f, a));
      }
      n && (i = i || []).push('style', n);
      var f = i;
      if ((t.updateQueue = f)) t.flags |= 4;
    }
  };
  tc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  Xp = typeof WeakSet === 'function' ? WeakSet : Set;
  ((Jp = Math.ceil),
    (al = Ke.ReactCurrentDispatcher),
    (Bo = Ke.ReactCurrentOwner),
    (we = Ke.ReactCurrentBatchConfig),
    (Gt = ft(0)));
  pc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ae.current) ue = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((ue = !1), Kp(e, t, n));
        ue = (e.flags & 131072) !== 0 ? !0 : !1;
      }
    else ((ue = !1), I && (t.flags & 1048576) !== 0 && gs(t, tl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Br(e, t), (e = t.pendingProps));
        var l = en(t, te.current);
        (Jt(t, n), (l = Io(null, t, r, e, l, n)));
        var i = Oo();
        return (
          (t.flags |= 1),
          typeof l === 'object' &&
          l !== null &&
          typeof l.render === 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              se(r) ? ((i = !0), br(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              To(t),
              (l.updater = xl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Hi(t, r, e, n),
              (t = Yi(null, t, r, !0, i, n)))
            : ((t.tag = 0), I && i && So(t), re(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Br(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = om(r)),
            (e = Ee(r, e)),
            l)
          ) {
            case 0:
              t = Gi(null, t, r, e, n);
              break e;
            case 1:
              t = ua(null, t, r, e, n);
              break e;
            case 11:
              t = ia(null, t, r, e, n);
              break e;
            case 14:
              t = oa(null, t, r, Ee(r.type, e), n);
              break e;
          }
          throw Error(y(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ee(r, l)),
          Gi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ee(r, l)),
          ua(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Zs(t), e === null)) throw Error(y(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Ns(e, t),
            ll(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = ln(Error(y(423)), t)), (t = aa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = ln(Error(y(424)), t)), (t = aa(e, t, r, n, l)));
              break e;
            } else
              for (
                fe = lt(t.stateNode.containerInfo.firstChild),
                  pe = t,
                  I = !0,
                  _e = null,
                  n = ks(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((tn(), r === l)) {
              t = He(e, t, n);
              break e;
            }
            re(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Es(t),
          e === null && $i(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          Di(r, l) ? (o = null) : i !== null && Di(r, i) && (t.flags |= 32),
          qs(e, t),
          re(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && $i(t), null);
      case 13:
        return Js(e, t, n);
      case 4:
        return (
          Lo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = nn(t, null, r, n)) : re(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ee(r, l)),
          ia(e, t, r, l, n)
        );
      case 7:
        return (re(e, t, t.pendingProps, n), t.child);
      case 8:
        return (re(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (re(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            R(nl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (Te(i.value, o)) {
              if (i.children === l.children && !ae.current) {
                t = He(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var a = u.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (i.tag === 1) {
                        ((a = Ve(-1, n & -n)), (a.tag = 2));
                        var f = i.updateQueue;
                        if (f !== null) {
                          f = f.shared;
                          var h = f.pending;
                          (h === null ? (a.next = a) : ((a.next = h.next), (h.next = a)),
                            (f.pending = a));
                        }
                      }
                      ((i.lanes |= n),
                        (a = i.alternate),
                        a !== null && (a.lanes |= n),
                        Wi(i.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    a = a.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(y(341));
                  ((o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Wi(o, n, t),
                    (o = i.sibling));
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (re(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Jt(t, n),
          (l = xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          re(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = Ee(r, t.pendingProps)), (l = Ee(r.type, l)), oa(e, t, r, l, n));
      case 15:
        return Ys(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ee(r, l)),
          Br(e, t),
          (t.tag = 1),
          se(r) ? ((e = !0), br(t)) : (e = !1),
          Jt(t, n),
          Hs(t, r, l),
          Hi(t, r, l, n),
          Yi(null, t, r, !0, e, n)
        );
      case 19:
        return js(e, t, n);
      case 22:
        return Xs(e, t, n);
    }
    throw Error(y(156, t.tag));
  };
  gc =
    typeof reportError === 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  Cl.prototype.render = Xo.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    El(e, t, null, null);
  };
  Cl.prototype.unmount = Xo.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      (zt(function () {
        El(null, e, null, null);
      }),
        (t[We] = null));
    }
  };
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Xa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Je.length && t !== 0 && t < Je[n].priority; n++);
      (Je.splice(n, 0, e), n === 0 && Za(e));
    }
  };
  Ga = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Nn(t.pendingLanes);
          n !== 0 && (mo(t, n | 1), ce(t, $()), (z & 6) === 0 && ((on = $() + 500), pt()));
        }
        break;
      case 13:
        (zt(function () {
          var r = Qe(e, 1);
          if (r !== null) {
            var l = le();
            ze(r, e, 1, l);
          }
        }),
          Yo(e, 1));
    }
  };
  vo = function (e) {
    if (e.tag === 13) {
      var t = Qe(e, 134217728);
      if (t !== null) {
        var n = le();
        ze(t, e, 134217728, n);
      }
      Yo(e, 134217728);
    }
  };
  Ya = function (e) {
    if (e.tag === 13) {
      var t = ut(e),
        n = Qe(e, t);
      if (n !== null) {
        var r = le();
        ze(n, e, t, r);
      }
      Yo(e, t);
    }
  };
  Xa = function () {
    return L;
  };
  qa = function (e, t) {
    var n = L;
    try {
      return ((L = e), t());
    } finally {
      L = n;
    }
  };
  Ei = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((gi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]');
          for (t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = gl(r);
              if (!l) throw Error(y(90));
              (_a(r), gi(r, l));
            }
          }
        }
        break;
      case 'textarea':
        za(e, n);
        break;
      case 'select':
        ((t = n.value), t != null && Yt(e, !!n.multiple, t, !1));
    }
  };
  Oa = Wo;
  Da = zt;
  ((dm = { usingClientEntryPoint: !1, Events: [rr, Vt, gl, Ma, Ia, Wo] }),
    (xn = {
      findFiberByHostInstance: wt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    }),
    (fm = {
      bundleType: xn.bundleType,
      version: xn.version,
      rendererPackageName: xn.rendererPackageName,
      rendererConfig: xn.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ba(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: xn.findFiberByHostInstance || sm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }));
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    if (((It = __REACT_DEVTOOLS_GLOBAL_HOOK__), !It.isDisabled && It.supportsFiber))
      try {
        ((pl = It.inject(fm)), (Ie = It));
      } catch (e) {}
  }
  ((yc = dm), (Pc = Wo));
});
var Mc = or((Sm, Fc) => {
  Lc();
  function Rc() {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    )
      return;
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc);
    } catch (e) {
      console.error(e);
    }
  }
  (Rc(), (Fc.exports = Zo));
});
var Ic = or((mm) => {
  var ir = mt(Mc(), 1);
  ((mm.createRoot = ir.createRoot), (mm.hydrateRoot = ir.hydrateRoot));
  var pm;
});
var Bc = mt(cn(), 1),
  Vc = mt(Ic(), 1);
var Uc = mt(cn(), 1);
var Oc = mt(cn(), 1),
  vm = Symbol.for('react.element');
var hm = Object.prototype.hasOwnProperty,
  gm = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ym = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  (n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) hm.call(t, r) && !ym.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: vm,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: gm.current,
  };
}
var c = Dc,
  m = Dc;
var Ac = ({ color: e = '#548235' }) =>
  c('div', {
    className: 'w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0',
    style: { backgroundColor: e },
    children: c('svg', {
      width: '12',
      height: '12',
      viewBox: '0 0 12 12',
      fill: 'none',
      children: c('path', {
        d: 'M2 6L4.5 8.5L10 3',
        stroke: 'white',
        strokeWidth: '1.6',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  });
function Jo() {
  let [e, t] = Uc.useState(0),
    n = [
      {
        q: 'A planilha é editável e funciona no Google Sheets?',
        a: 'Sim! Você recebe o arquivo em .xlsx totalmente editável. Funciona perfeitamente no Excel, Google Sheets, Numbers e LibreOffice. Sem macros, sem complicação.',
      },
      {
        q: 'Funciona no celular?',
        a: 'Funciona sim. Você pode editar pelo app do Google Sheets ou Excel Mobile. Recomendamos configurar no computador e depois acompanhar pelo celular.',
      },
      {
        q: 'Preciso saber Excel avançado para usar?',
        a: 'Não. Tudo é automático. Você só preenche receitas e despesas. Os gráficos, totais e dashboard anual calculam sozinhos. Qualquer pessoa consegue usar.',
      },
      {
        q: 'Como recebo a planilha após a compra?',
        a: 'Entrega imediata por e-mail e na área de compras da plataforma. Você baixa o arquivo em menos de 2 minutos após o pagamento. Acesso vitalício.',
      },
    ];
  return m('div', {
    className:
      'min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#2E75B6]/20',
    children: [
      c('style', {
        children:
          "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'); *{font-family:'Inter',system-ui,sans-serif} html{scroll-behavior:smooth}",
      }),
      c('header', {
        className:
          'fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60',
        children: m('div', {
          className: 'max-w-[1180px] mx-auto px-6 h-[64px] flex items-center justify-between',
          children: [
            m('div', {
              className: 'flex items-center gap-2.5',
              children: [
                c('div', {
                  className:
                    'w-8 h-8 rounded-[9px] bg-[#1F3864] flex items-center justify-center text-white font-extrabold text-[13px] tracking-widest',
                  children: 'F',
                }),
                m('span', {
                  className: 'font-extrabold tracking-[-0.02em] text-[16px]',
                  children: [
                    'FINANCE',
                    c('span', {
                      className: 'text-[#2E75B6]',
                      children: ' PRO',
                    }),
                  ],
                }),
                c('span', {
                  className:
                    'hidden sm:inline ml-2 text-[10px] font-semibold tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-500 border',
                  children: '2026 EDITION',
                }),
                c('span', {
                  className:
                    'hidden md:inline ml-3 px-2.5 py-1 rounded-full border border-[#2E75B6]/20 bg-[#2E75B6]/5 text-[10px] font-semibold tracking-[0.08em] text-[#1F3864] uppercase',
                  children: 'Será enviado pelo seu e-mail',
                }),
              ],
            }),
            c('a', {
              href: '#checkout',
              className:
                'h-9 px-5 rounded-full bg-[#1F3864] text-white text-[13px] font-semibold hover:bg-[#162a4d] transition-all shadow-[0_4px_16px_rgba(31,56,100,0.25)] flex items-center',
              children: 'Quero Minha Planilha por R$129,90',
            }),
          ],
        }),
      }),
      c('section', {
        className: 'pt-[96px] pb-12 lg:pb-20 px-6',
        children: m('div', {
          className:
            'max-w-[1180px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center',
          children: [
            m('div', {
              children: [
                m('div', {
                  className:
                    'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1F3864]/[0.06] border border-[#1F3864]/10 text-[11px] font-semibold tracking-wide text-[#1F3864] mb-5',
                  children: [
                    c('span', {
                      className: 'w-2 h-2 rounded-full bg-[#548235] animate-pulse',
                    }),
                    ' +2.500 pessoas organizando as finanças',
                  ],
                }),
                m('h1', {
                  className:
                    'text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[0.95] tracking-[-0.04em]',
                  children: [
                    'Pare de se perguntar ',
                    c('br', {}),
                    c('span', {
                      className: 'text-[#2E75B6]',
                      children: 'para onde foi',
                    }),
                    c('br', {}),
                    'seu dinheiro.',
                  ],
                }),
                c('p', {
                  className:
                    'mt-5 text-[16px] sm:text-[18px] leading-[1.6] text-slate-600 max-w-[520px]',
                  children:
                    'Controle mensal completo com Dashboard Anual automático. Veja lucro real vs previsto, para onde vai cada real e nunca mais termine o mês no zero.',
                }),
                m('div', {
                  className: 'mt-8 flex flex-col sm:flex-row gap-3',
                  children: [
                    m('a', {
                      id: 'cta-principal',
                      href: '#checkout',
                      className:
                        'h-[56px] px-8 rounded-full bg-[#548235] text-white font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(84,130,53,0.35)] hover:shadow-[0_12px_32px_rgba(84,130,53,0.45)] hover:-translate-y-[1px] active:translate-y-[0px] transition-all',
                      children: [
                        'Quero minha planilha por R$129,90',
                        c('svg', {
                          width: '18',
                          height: '18',
                          viewBox: '0 0 20 20',
                          fill: 'none',
                          children: c('path', {
                            d: 'M7 5l6 5-6 5',
                            stroke: 'white',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                          }),
                        }),
                      ],
                    }),
                    m('div', {
                      className: 'flex items-center gap-3 px-1',
                      children: [
                        c('div', {
                          className: 'flex -space-x-2',
                          children: [1, 2, 3].map((r) =>
                            c(
                              'div',
                              {
                                className:
                                  'w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[11px] font-bold text-slate-500',
                                children: String.fromCharCode(64 + r),
                              },
                              r,
                            ),
                          ),
                        }),
                        m('p', {
                          className: 'text-[12px] leading-tight text-slate-500',
                          children: [
                            c('b', {
                              className: 'text-slate-800',
                              children: '4.9/5',
                            }),
                            ' de avaliação • Entrega imediata',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                m('div', {
                  className: 'mt-8 flex flex-wrap gap-6 text-[13px] text-slate-500',
                  children: [
                    m('span', {
                      className: 'flex items-center gap-2',
                      children: [
                        c('span', {
                          className:
                            'w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center',
                          children: c('svg', {
                            width: '12',
                            height: '12',
                            viewBox: '0 0 12 12',
                            children: c('path', {
                              d: 'M2 6l2.5 2.5L10 3',
                              stroke: '#548235',
                              strokeWidth: '1.5',
                              fill: 'none',
                              strokeLinecap: 'round',
                            }),
                          }),
                        }),
                        'Sem mensalidade',
                      ],
                    }),
                    m('span', {
                      className: 'flex items-center gap-2',
                      children: [
                        c('span', {
                          className:
                            'w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center',
                          children: c('svg', {
                            width: '12',
                            height: '12',
                            viewBox: '0 0 12 12',
                            children: c('path', {
                              d: 'M2 6l2.5 2.5L10 3',
                              stroke: '#548235',
                              strokeWidth: '1.5',
                              fill: 'none',
                              strokeLinecap: 'round',
                            }),
                          }),
                        }),
                        'Garantia 7 dias',
                      ],
                    }),
                    m('span', {
                      className: 'flex items-center gap-2',
                      children: [
                        c('span', {
                          className:
                            'w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center',
                          children: c('svg', {
                            width: '12',
                            height: '12',
                            viewBox: '0 0 12 12',
                            children: c('path', {
                              d: 'M2 6l2.5 2.5L10 3',
                              stroke: '#548235',
                              strokeWidth: '1.5',
                              fill: 'none',
                              strokeLinecap: 'round',
                            }),
                          }),
                        }),
                        'Excel + Sheets',
                      ],
                    }),
                  ],
                }),
              ],
            }),
            m('div', {
              className: 'relative',
              children: [
                c('div', {
                  className:
                    'absolute -inset-6 bg-gradient-to-br from-[#2E75B6]/20 to-[#1F3864]/20 rounded-[32px] blur-2xl',
                }),
                m('div', {
                  className:
                    'relative bg-white rounded-[22px] shadow-[0_20px_60px_rgba(31,56,100,0.18)] border border-slate-200 overflow-hidden',
                  children: [
                    m('div', {
                      className: 'h-10 bg-[#1F3864] flex items-center px-4 gap-2',
                      children: [
                        m('div', {
                          className: 'flex gap-1.5',
                          children: [
                            c('div', {
                              className: 'w-3 h-3 rounded-full bg-white/20',
                            }),
                            c('div', {
                              className: 'w-3 h-3 rounded-full bg-white/20',
                            }),
                            c('div', {
                              className: 'w-3 h-3 rounded-full bg-white/20',
                            }),
                          ],
                        }),
                        c('span', {
                          className: 'ml-3 text-[11px] tracking-widest font-semibold text-white/80',
                          children: 'FINANCE PRO • DASHBOARD ANUAL 2026',
                        }),
                        c('div', {
                          className:
                            'ml-auto w-6 h-6 rounded bg-[#2E75B6] flex items-center justify-center text-[10px] text-white font-bold',
                          children: 'Σ',
                        }),
                      ],
                    }),
                    c('div', {
                      className: 'p-4 sm:p-5 grid grid-cols-3 gap-3',
                      children: [
                        {
                          l: 'Receita Anual',
                          v: 'R$ 84.300',
                          c: '#548235',
                        },
                        { l: 'Despesas', v: 'R$ 52.140', c: '#1F3864' },
                        { l: 'Lucro Real', v: 'R$ 32.160', c: '#2E75B6' },
                      ].map((r, l) =>
                        m(
                          'div',
                          {
                            className: 'rounded-xl bg-[#F8FAFC] border border-slate-200 p-3',
                            children: [
                              c('div', {
                                className:
                                  'text-[10px] uppercase tracking-wide text-slate-500 font-semibold',
                                children: r.l,
                              }),
                              c('div', {
                                className: 'mt-1 font-bold text-[14px]',
                                style: { color: r.c },
                                children: r.v,
                              }),
                              c('div', {
                                className: 'mt-2 h-1 rounded-full bg-slate-200 overflow-hidden',
                                children: c('div', {
                                  className: 'h-full rounded-full',
                                  style: {
                                    width: l == 0 ? '84%' : l == 1 ? '62%' : '71%',
                                    background: r.c,
                                  },
                                }),
                              }),
                            ],
                          },
                          l,
                        ),
                      ),
                    }),
                    m('div', {
                      className: 'px-5 pb-5 grid grid-cols-[1fr_1fr] gap-3',
                      children: [
                        m('div', {
                          className: 'rounded-xl border border-slate-200 p-3',
                          children: [
                            c('div', {
                              className: 'text-[11px] font-semibold text-slate-600 mb-2',
                              children: 'Distribuição de Gastos',
                            }),
                            m('div', {
                              className: 'flex items-center gap-3',
                              children: [
                                c('div', {
                                  className: 'w-[72px] h-[72px] rounded-full',
                                  style: {
                                    background:
                                      'conic-gradient(#1F3864 0 40%, #2E75B6 40% 68%, #548235 68% 85%, #E2E8F0 85% 100%)',
                                  },
                                }),
                                m('div', {
                                  className: 'space-y-1.5 text-[10px]',
                                  children: [
                                    m('div', {
                                      className: 'flex items-center gap-1.5',
                                      children: [
                                        c('span', {
                                          className: 'w-2 h-2 rounded-full bg-[#1F3864]',
                                        }),
                                        ' Moradia 40%',
                                      ],
                                    }),
                                    m('div', {
                                      className: 'flex items-center gap-1.5',
                                      children: [
                                        c('span', {
                                          className: 'w-2 h-2 rounded-full bg-[#2E75B6]',
                                        }),
                                        ' Alimentação 28%',
                                      ],
                                    }),
                                    m('div', {
                                      className: 'flex items-center gap-1.5',
                                      children: [
                                        c('span', {
                                          className: 'w-2 h-2 rounded-full bg-[#548235]',
                                        }),
                                        ' Lazer 17%',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        m('div', {
                          className: 'rounded-xl border border-slate-200 p-3',
                          children: [
                            c('div', {
                              className: 'text-[11px] font-semibold text-slate-600 mb-2',
                              children: 'Lucro Previsto vs Real',
                            }),
                            c('div', {
                              className: 'h-[56px] flex items-end gap-[3px]',
                              children: [40, 62, 55, 78, 66, 88, 72, 92].map((r, l) =>
                                c(
                                  'div',
                                  {
                                    className: 'flex-1 flex flex-col gap-1 justify-end',
                                    children: c('div', {
                                      className: 'rounded-sm',
                                      style: {
                                        height: `${r * 0.6}%`,
                                        background: l % 2 ? '#2E75B6' : '#1F3864',
                                      },
                                    }),
                                  },
                                  l,
                                ),
                              ),
                            }),
                            m('div', {
                              className: 'mt-2 flex justify-between text-[9px] text-slate-400',
                              children: [
                                c('span', { children: 'JAN' }),
                                c('span', { children: 'DEZ' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    c('div', {
                      className: 'px-5 pb-4 flex gap-2 overflow-x-auto',
                      children: [
                        'JAN',
                        'FEV',
                        'MAR',
                        'ABR',
                        'MAI',
                        'JUN',
                        'JUL',
                        'AGO',
                        'SET',
                        'OUT',
                        'NOV',
                        'DEZ',
                      ].map((r, l) =>
                        c(
                          'div',
                          {
                            className: `px-3 py-1.5 rounded-full text-[10px] font-bold border ${l == 3 ? 'bg-[#1F3864] text-white border-[#1F3864]' : 'bg-white text-slate-500 border-slate-200'}`,
                            children: r,
                          },
                          r,
                        ),
                      ),
                    }),
                  ],
                }),
                m('div', {
                  className:
                    'absolute -bottom-4 -left-2 sm:-left-6 bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-slate-200 px-4 py-3 flex items-center gap-3',
                  children: [
                    c('div', {
                      className:
                        'w-10 h-10 rounded-xl bg-[#548235]/10 flex items-center justify-center',
                      children: '\uD83D\uDCB0',
                    }),
                    m('div', {
                      children: [
                        c('div', {
                          className: 'text-[11px] text-slate-500 font-medium',
                          children: 'Economia este mês',
                        }),
                        c('div', {
                          className: 'text-[15px] font-extrabold text-[#548235]',
                          children: '+ R$ 1.240,00',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      c('section', {
        className: 'px-6 py-16 bg-white border-y border-slate-100',
        children: m('div', {
          className: 'max-w-[1180px] mx-auto',
          children: [
            m('div', {
              className: 'max-w-[640px]',
              children: [
                c('div', {
                  className: 'text-[12px] font-bold tracking-[0.14em] text-[#2E75B6]',
                  children: 'A REALIDADE QUE NINGUÉM CONTA',
                }),
                m('h2', {
                  className:
                    'mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-[-0.03em] leading-[1.05]',
                  children: ['Se identificar com isso', c('br', {}), 'não é normal. É um alerta.'],
                }),
              ],
            }),
            c('div', {
              className: 'mt-10 grid md:grid-cols-3 gap-5',
              children: [
                {
                  icon: '\uD83D\uDCB8',
                  title: 'Seu salário some em 15 dias',
                  desc: 'Você trabalha o mês inteiro, mas no dia 15 já está contando moedas e usando cartão para o básico.',
                },
                {
                  icon: '\uD83D\uDE30',
                  title: 'Zero reserva, 100% ansiedade',
                  desc: 'Qualquer imprevisto vira dívida. Sem controle, você nunca consegue juntar para o que importa.',
                },
                {
                  icon: '\uD83E\uDD2F',
                  title: 'Você não sabe para onde vai',
                  desc: "Assinaturas, delivery, parcelinhas. No fim do mês, a pergunta: 'onde foi meu dinheiro?'",
                },
              ].map((r, l) =>
                m(
                  'div',
                  {
                    className: 'rounded-[20px] bg-[#F8FAFC] border border-slate-200 p-7',
                    children: [
                      c('div', {
                        className:
                          'w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[22px] shadow-sm',
                        children: r.icon,
                      }),
                      c('h3', {
                        className: 'mt-5 font-bold text-[17px] leading-tight',
                        children: r.title,
                      }),
                      c('p', {
                        className: 'mt-2 text-[14px] leading-[1.6] text-slate-600',
                        children: r.desc,
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      }),
      c('section', {
        className: 'px-6 py-20',
        children: m('div', {
          className: 'max-w-[1180px] mx-auto',
          children: [
            m('div', {
              className: 'flex flex-col lg:flex-row lg:items-end justify-between gap-6',
              children: [
                m('div', {
                  children: [
                    c('div', {
                      className: 'text-[12px] font-bold tracking-[0.14em] text-[#2E75B6]',
                      children: 'CONTEÚDO COMPLETO',
                    }),
                    m('h2', {
                      className:
                        'mt-3 text-[32px] sm:text-[40px] font-extrabold tracking-[-0.03em] leading-[1]',
                      children: ['Tudo que você precisa', c('br', {}), 'em um arquivo só.'],
                    }),
                  ],
                }),
                c('p', {
                  className: 'text-[15px] text-slate-600 max-w-[360px] leading-[1.6]',
                  children:
                    'Sem assinatura, sem app complicado. Uma planilha inteligente que trabalha por você o ano inteiro.',
                }),
              ],
            }),
            c('div', {
              className: 'mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5',
              children: [
                {
                  t: 'Dashboard Anual Automático',
                  d: 'Visão 360º do ano com totais, médias e saldo acumulado. Tudo calcula sozinho.',
                  k: '01',
                  col: '#1F3864',
                },
                {
                  t: '12 Meses Detalhados',
                  d: 'Uma aba para cada mês. Entradas, saídas, categoria e observações com filtros.',
                  k: '02',
                  col: '#2E75B6',
                },
                {
                  t: '4 Gráficos Inteligentes',
                  d: '2 pizzas (gastos e receitas), linha de lucro previsto vs real e barras comparativas.',
                  k: '03',
                  col: '#548235',
                },
                {
                  t: 'Previsão vs Real',
                  d: 'Planeje no início do mês e compare com o real. Descubra onde está vazando dinheiro.',
                  k: '04',
                  col: '#1F3864',
                },
                {
                  t: '100% Editável no Excel/Sheets',
                  d: 'Sem macros, sem senhas. Edite cores, categorias e moedas como quiser.',
                  k: '05',
                  col: '#2E75B6',
                },
              ].map((r, l) =>
                m(
                  'div',
                  {
                    className: `rounded-[20px] bg-white border border-slate-200 p-7 relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(31,56,100,0.08)] hover:-translate-y-[2px] transition-all ${l == 0 ? 'lg:col-span-2' : ''}`,
                    children: [
                      m('div', {
                        className: 'flex items-start justify-between',
                        children: [
                          c('div', {
                            className:
                              'w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-[12px]',
                            style: { background: r.col },
                            children: r.k,
                          }),
                          c('div', {
                            className:
                              'w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center',
                            children: c('svg', {
                              width: '14',
                              height: '14',
                              viewBox: '0 0 20 20',
                              children: c('path', {
                                d: 'M7 5l6 5-6 5',
                                stroke: '#94A3B8',
                                strokeWidth: '1.6',
                                fill: 'none',
                                strokeLinecap: 'round',
                              }),
                            }),
                          }),
                        ],
                      }),
                      c('h3', {
                        className: 'mt-5 font-bold text-[16px]',
                        children: r.t,
                      }),
                      c('p', {
                        className: 'mt-2 text-[13.5px] leading-[1.6] text-slate-600',
                        children: r.d,
                      }),
                      c('div', {
                        className:
                          'absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-[0.06]',
                        style: { background: r.col },
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      }),
      c('section', {
        className: 'px-6 py-16 bg-[#1F3864] rounded-[28px] max-w-[1180px] mx-auto mb-16',
        children: c('div', {
          className: 'px-2 sm:px-8',
          children: m('div', {
            className: 'flex flex-col lg:flex-row justify-between gap-8',
            children: [
              m('div', {
                className: 'max-w-[420px]',
                children: [
                  c('div', {
                    className:
                      'inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold tracking-wide text-white/80',
                    children: 'VISUAL PREMIUM • GRÁFICOS AUTOMÁTICOS',
                  }),
                  c('h2', {
                    className:
                      'mt-4 text-white text-[30px] sm:text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em]',
                    children: 'Entenda seu dinheiro em 5 segundos.',
                  }),
                  c('p', {
                    className: 'mt-4 text-white/60 text-[14.5px] leading-[1.6]',
                    children:
                      'Gráficos que qualquer pessoa entende. Sem jargão, sem fórmula. Só clareza para decidir melhor.',
                  }),
                  m('div', {
                    className: 'mt-6 flex gap-3',
                    children: [
                      c('div', {
                        className:
                          'px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-[12px] text-white/80',
                        children: '✔️ Atualiza sozinho',
                      }),
                      c('div', {
                        className:
                          'px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-[12px] text-white/80',
                        children: '✔️ Visual limpo',
                      }),
                    ],
                  }),
                ],
              }),
              m('div', {
                className: 'grid sm:grid-cols-3 gap-4 flex-1',
                children: [
                  m('div', {
                    className: 'rounded-[18px] bg-white p-5',
                    children: [
                      c('div', {
                        className: 'text-[11px] font-bold tracking-wide text-slate-500',
                        children: 'DISTRIBUIÇÃO DE GASTOS',
                      }),
                      c('div', {
                        className: 'mt-4 mx-auto w-[120px] h-[120px] rounded-full relative',
                        style: {
                          background:
                            'conic-gradient(#1F3864 0 38%, #2E75B6 38% 62%, #548235 62% 78%, #94A3B8 78% 88%, #E2E8F0 88% 100%)',
                        },
                        children: m('div', {
                          className:
                            'absolute inset-[18px] bg-white rounded-full flex flex-col items-center justify-center',
                          children: [
                            c('span', {
                              className: 'text-[18px] font-extrabold',
                              children: 'R$ 4.2k',
                            }),
                            c('span', {
                              className: 'text-[10px] text-slate-500',
                              children: 'total mês',
                            }),
                          ],
                        }),
                      }),
                      m('div', {
                        className: 'mt-4 space-y-1.5 text-[11px]',
                        children: [
                          m('div', {
                            className: 'flex justify-between',
                            children: [
                              m('span', {
                                className: 'flex items-center gap-1.5',
                                children: [
                                  c('i', {
                                    className: 'w-2 h-2 rounded-full bg-[#1F3864] block',
                                  }),
                                  'Moradia',
                                ],
                              }),
                              c('span', {
                                className: 'font-bold',
                                children: '38%',
                              }),
                            ],
                          }),
                          m('div', {
                            className: 'flex justify-between',
                            children: [
                              m('span', {
                                className: 'flex items-center gap-1.5',
                                children: [
                                  c('i', {
                                    className: 'w-2 h-2 rounded-full bg-[#2E75B6] block',
                                  }),
                                  'Transporte',
                                ],
                              }),
                              c('span', {
                                className: 'font-bold',
                                children: '24%',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  m('div', {
                    className: 'rounded-[18px] bg-white p-5',
                    children: [
                      c('div', {
                        className: 'text-[11px] font-bold tracking-wide text-slate-500',
                        children: 'ORIGEM DAS RECEITAS',
                      }),
                      c('div', {
                        className: 'mt-4 mx-auto w-[120px] h-[120px] rounded-full relative',
                        style: {
                          background:
                            'conic-gradient(#548235 0 55%, #2E75B6 55% 80%, #1F3864 80% 100%)',
                        },
                        children: m('div', {
                          className:
                            'absolute inset-[18px] bg-white rounded-full flex flex-col items-center justify-center',
                          children: [
                            c('span', {
                              className: 'text-[18px] font-extrabold',
                              children: 'R$ 6.8k',
                            }),
                            c('span', {
                              className: 'text-[10px] text-slate-500',
                              children: 'receita mês',
                            }),
                          ],
                        }),
                      }),
                      m('div', {
                        className: 'mt-4 space-y-1.5 text-[11px]',
                        children: [
                          m('div', {
                            className: 'flex justify-between',
                            children: [
                              m('span', {
                                className: 'flex items-center gap-1.5',
                                children: [
                                  c('i', {
                                    className: 'w-2 h-2 rounded-full bg-[#548235] block',
                                  }),
                                  'Salário',
                                ],
                              }),
                              c('span', {
                                className: 'font-bold',
                                children: '55%',
                              }),
                            ],
                          }),
                          m('div', {
                            className: 'flex justify-between',
                            children: [
                              m('span', {
                                className: 'flex items-center gap-1.5',
                                children: [
                                  c('i', {
                                    className: 'w-2 h-2 rounded-full bg-[#2E75B6] block',
                                  }),
                                  'Freela',
                                ],
                              }),
                              c('span', {
                                className: 'font-bold',
                                children: '25%',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  m('div', {
                    className: 'rounded-[18px] bg-white p-5 sm:col-span-1',
                    children: [
                      c('div', {
                        className: 'text-[11px] font-bold tracking-wide text-slate-500',
                        children: 'LUCRO PREVISTO VS REAL',
                      }),
                      m('div', {
                        className: 'mt-6 relative h-[96px]',
                        children: [
                          c('div', {
                            className: 'absolute inset-0 flex flex-col justify-between py-1',
                            children: [0, 1, 2].map((r) =>
                              c(
                                'div',
                                {
                                  className: 'border-t border-dashed border-slate-200',
                                },
                                r,
                              ),
                            ),
                          }),
                          m('svg', {
                            viewBox: '0 0 100 60',
                            className: 'absolute inset-0 w-full h-full',
                            children: [
                              c('polyline', {
                                fill: 'none',
                                stroke: '#CBD5E1',
                                strokeWidth: '2',
                                strokeDasharray: '4 4',
                                points: '0,40 20,35 40,32 60,28 80,22 100,18',
                              }),
                              c('polyline', {
                                fill: 'none',
                                stroke: '#1F3864',
                                strokeWidth: '2.5',
                                points: '0,38 20,30 40,35 60,20 80,26 100,10',
                              }),
                            ],
                          }),
                        ],
                      }),
                      m('div', {
                        className: 'mt-3 flex gap-3 text-[10px]',
                        children: [
                          m('span', {
                            className: 'flex items-center gap-1',
                            children: [
                              c('span', {
                                className: 'w-3 h-[3px] bg-slate-300 rounded',
                              }),
                              'Previsto',
                            ],
                          }),
                          m('span', {
                            className: 'flex items-center gap-1',
                            children: [
                              c('span', {
                                className: 'w-3 h-[3px] bg-[#1F3864] rounded',
                              }),
                              'Real',
                            ],
                          }),
                        ],
                      }),
                      c('div', {
                        className: 'mt-4 flex gap-1.5',
                        children: [
                          { p: 60, r: 65 },
                          { p: 72, r: 68 },
                          { p: 55, r: 80 },
                          { p: 78, r: 70 },
                          { p: 66, r: 88 },
                        ].map((r, l) =>
                          m(
                            'div',
                            {
                              className: 'flex-1 flex gap-[2px] items-end h-10',
                              children: [
                                c('div', {
                                  className: 'flex-1 rounded-sm bg-slate-200',
                                  style: { height: `${r.p}%` },
                                }),
                                c('div', {
                                  className: 'flex-1 rounded-sm bg-[#2E75B6]',
                                  style: { height: `${r.r}%` },
                                }),
                              ],
                            },
                            l,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      c('section', {
        className: 'px-6 py-10',
        children: m('div', {
          className: 'max-w-[1180px] mx-auto grid lg:grid-cols-2 gap-8',
          children: [
            m('div', {
              className: 'rounded-[22px] bg-white border border-slate-200 p-8',
              children: [
                c('h3', {
                  className: 'text-[22px] font-extrabold tracking-[-0.02em]',
                  children: 'O que muda quando você organiza:',
                }),
                c('div', {
                  className: 'mt-6 space-y-4',
                  children: [
                    'Você sabe exatamente quanto pode gastar sem culpa',
                    'Para de pagar juros e parcelar o que não precisa',
                    'Começa a juntar dinheiro todo mês, mesmo ganhando pouco',
                    'Toma decisões melhores com números, não com achismo',
                    'Chega no fim do ano com reserva e tranquilidade',
                    'Visual profissional para levar a sério suas finanças',
                  ].map((r, l) =>
                    m(
                      'div',
                      {
                        className: 'flex gap-3 items-start',
                        children: [
                          c(Ac, {}),
                          c('span', {
                            className: 'text-[14px] leading-[1.5] text-slate-700',
                            children: r,
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
                m('div', {
                  className: 'mt-8 rounded-xl bg-[#F8FAFC] border border-slate-200 p-4 flex gap-3',
                  children: [
                    c('div', {
                      className:
                        'w-9 h-9 rounded-full bg-[#1F3864] text-white flex items-center justify-center text-[13px] font-bold',
                      children: '!',
                    }),
                    m('p', {
                      className: 'text-[12.5px] leading-[1.5] text-slate-600',
                      children: [
                        c('b', {
                          className: 'text-slate-900',
                          children: 'Sem planilha, é improviso.',
                        }),
                        ' Com planilha, é estratégia. Em 15 minutos por semana você tem controle total.',
                      ],
                    }),
                  ],
                }),
              ],
            }),
            m('div', {
              className: 'rounded-[22px] bg-[#F8FAFC] border border-slate-200 p-8',
              children: [
                c('div', {
                  className: 'text-[12px] font-bold tracking-[0.14em] text-[#2E75B6]',
                  children: 'PARA QUEM É',
                }),
                c('h3', {
                  className: 'mt-3 text-[22px] font-extrabold tracking-[-0.02em] leading-[1.1]',
                  children: 'Feita para quem quer sair do ciclo de aperto.',
                }),
                c('div', {
                  className: 'mt-6 grid gap-3',
                  children: [
                    {
                      t: 'Quem ganha e gasta sem ver',
                      d: 'Se seu dinheiro some e você não sabe explicar',
                    },
                    {
                      t: 'Quem quer sair do vermelho',
                      d: 'Para quem precisa de clareza para quitar dívidas',
                    },
                    {
                      t: 'Quem quer juntar de verdade',
                      d: 'Para metas: viagem, reserva, casa, estudos',
                    },
                    {
                      t: 'Autônomos e CLT',
                      d: 'Serve para renda fixa ou variável, com categorias editáveis',
                    },
                  ].map((r, l) =>
                    m(
                      'div',
                      {
                        className: 'rounded-xl bg-white border border-slate-200 p-4 flex gap-3',
                        children: [
                          c('div', {
                            className:
                              'w-8 h-8 rounded-full bg-[#1F3864]/10 flex items-center justify-center text-[#1F3864] font-bold text-[13px]',
                            children: l + 1,
                          }),
                          m('div', {
                            children: [
                              c('div', {
                                className: 'font-bold text-[14px]',
                                children: r.t,
                              }),
                              c('div', {
                                className: 'text-[13px] text-slate-600 mt-0.5',
                                children: r.d,
                              }),
                            ],
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
                m('div', {
                  className:
                    'mt-6 rounded-xl bg-[#1F3864] text-white p-4 text-[13px] leading-[1.5] flex gap-3',
                  children: [
                    c('span', {
                      className: 'text-[18px]',
                      children: '\uD83C\uDFAF',
                    }),
                    m('span', {
                      children: [
                        'Se você quer ',
                        c('b', { children: 'controle sem complicação' }),
                        ', essa planilha foi feita para você. Sem curso, sem planilha de 37 abas inúteis.',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      c('section', {
        id: 'checkout',
        className: 'px-6 py-16',
        children: c('div', {
          className: 'max-w-[880px] mx-auto',
          children: m('div', {
            className:
              'rounded-[28px] bg-white border border-slate-200 shadow-[0_24px_64px_rgba(31,56,100,0.10)] overflow-hidden grid lg:grid-cols-[1.15fr_0.85fr]',
            children: [
              m('div', {
                className: 'p-8 sm:p-10',
                children: [
                  c('div', {
                    className:
                      'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold tracking-wide text-emerald-700',
                    children: 'OFERTA DE LANÇAMENTO • 72% OFF',
                  }),
                  m('h2', {
                    className: 'mt-4 text-[32px] font-extrabold tracking-[-0.03em] leading-[0.95]',
                    children: [
                      'Organize 2026 inteiro',
                      c('br', {}),
                      'por menos que',
                      c('br', {}),
                      'um delivery.',
                    ],
                  }),
                  m('div', {
                    className: 'mt-6 flex items-baseline gap-3',
                    children: [
                      c('span', {
                        className: 'text-[14px] text-slate-400 line-through',
                        children: 'De R$197',
                      }),
                      c('span', {
                        className: 'text-[42px] font-extrabold tracking-[-0.03em] leading-none',
                        children: 'R$129,90',
                      }),
                      c('span', {
                        className: 'text-[14px] font-semibold text-slate-600',
                        children: 'à vista',
                      }),
                    ],
                  }),
                  c('div', {
                    className: 'text-[13px] text-slate-500',
                    children: 'ou 12x de R$12,90 • acesso vitalício • sem mensalidade',
                  }),
                  c('div', {
                    className: 'mt-7 space-y-3',
                    children: [
                      'Planilha Controle Financeiro 2026 completa (.xlsx)',
                      'Dashboard Anual automático + 12 abas mensais',
                      '4 gráficos inteligentes (pizza, linha, barras)',
                      'BÔNUS: Guia Prático de Economia (PDF)',
                      'BÔNUS: Checklist Financeiro Mensal',
                    ].map((r, l) =>
                      m(
                        'div',
                        {
                          className: 'flex gap-3 text-[13.5px] leading-[1.4]',
                          children: [
                            c(Ac, {
                              color: l >= 3 ? '#2E75B6' : '#548235',
                            }),
                            c('span', {
                              className: l >= 3 ? 'font-semibold' : '',
                              children: r,
                            }),
                          ],
                        },
                        l,
                      ),
                    ),
                  }),
                  m('a', {
                    href: window.CHECKOUT_URL || 'https://pay.kiwify.com.br/SEU_LINK_AQUI',
                    target: '_blank',
                    onClick: () => {
                      if (window.fbq) fbq('track', 'InitiateCheckout');
                      if (window.gtag) gtag('event', 'begin_checkout');
                    },
                    className:
                      'mt-8 w-full h-[56px] rounded-full bg-[#548235] text-white font-extrabold text-[16px] flex items-center justify-center gap-2 shadow-[0_10px_28px_rgba(84,130,53,0.35)] hover:brightness-[1.05] hover:-translate-y-[1px] transition-all',
                    children: [
                      'Quero minha planilha agora',
                      c('svg', {
                        width: '18',
                        height: '18',
                        viewBox: '0 0 20 20',
                        fill: 'none',
                        children: c('path', {
                          d: 'M7 5l6 5-6 5',
                          stroke: 'white',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                        }),
                      }),
                    ],
                  }),
                  m('div', {
                    className:
                      'mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-500',
                    children: [
                      c('svg', {
                        width: '14',
                        height: '14',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        children: c('path', {
                          d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
                          stroke: '#94A3B8',
                          strokeWidth: '1.4',
                        }),
                      }),
                      'Compra 100% segura • Garantia 7 dias • Entrega imediata por e-mail',
                    ],
                  }),
                ],
              }),
              m('div', {
                className:
                  'bg-[#F8FAFC] border-t lg:border-t-0 lg:border-l border-slate-200 p-8 sm:p-10 flex flex-col',
                children: [
                  m('div', {
                    className: 'rounded-2xl bg-white border border-slate-200 p-5',
                    children: [
                      m('div', {
                        className: 'flex items-center gap-3',
                        children: [
                          c('div', {
                            className:
                              'w-10 h-10 rounded-xl bg-[#1F3864] flex items-center justify-center text-white font-bold',
                            children: '7D',
                          }),
                          m('div', {
                            children: [
                              c('div', {
                                className: 'font-bold text-[14px]',
                                children: 'Garantia incondicional',
                              }),
                              c('div', {
                                className: 'text-[12px] text-slate-500',
                                children: '7 dias para testar sem risco',
                              }),
                            ],
                          }),
                        ],
                      }),
                      c('p', {
                        className: 'mt-4 text-[13px] leading-[1.6] text-slate-600',
                        children:
                          'Se em 7 dias você não sentir mais controle e clareza, devolvemos 100% do seu dinheiro. Sem perguntas. É só pedir.',
                      }),
                    ],
                  }),
                  m('div', {
                    className: 'mt-6 rounded-2xl bg-[#1F3864] p-5 text-white',
                    children: [
                      c('div', {
                        className: 'text-[12px] font-bold tracking-wide opacity-70',
                        children: 'O QUE VOCÊ RECEBE HOJE',
                      }),
                      m('div', {
                        className: 'mt-3 space-y-2 text-[13px]',
                        children: [
                          m('div', {
                            className: 'flex justify-between',
                            children: [
                              c('span', {
                                className: 'opacity-80',
                                children: '\uD83D\uDCCA Planilha 2026',
                              }),
                              c('span', {
                                className: 'line-through opacity-50',
                                children: 'R$197',
                              }),
                            ],
                          }),
                          m('div', {
                            className: 'flex justify-between',
                            children: [
                              c('span', {
                                className: 'opacity-80',
                                children: '\uD83D\uDCD8 Guia de Economia',
                              }),
                              c('span', {
                                className: 'line-through opacity-50',
                                children: 'R$129,90',
                              }),
                            ],
                          }),
                          m('div', {
                            className: 'flex justify-between',
                            children: [
                              c('span', {
                                className: 'opacity-80',
                                children: '✅ Checklist',
                              }),
                              c('span', {
                                className: 'line-through opacity-50',
                                children: 'R$19',
                              }),
                            ],
                          }),
                          c('div', {
                            className: 'border-t border-white/15 my-2',
                          }),
                          m('div', {
                            className: 'flex justify-between font-bold text-[15px]',
                            children: [
                              c('span', { children: 'Total' }),
                              c('span', { children: 'R$243' }),
                            ],
                          }),
                          m('div', {
                            className:
                              'flex justify-between font-extrabold text-[18px] text-emerald-300',
                            children: [
                              c('span', { children: 'Hoje por' }),
                              c('span', { children: 'R$129,90' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c('div', {
                    className: 'mt-auto pt-6 text-[11px] leading-[1.5] text-slate-500',
                    children:
                      'Pagamento processado com segurança. Você recebe o acesso no e-mail imediatamente após a confirmação.',
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      c('section', {
        className: 'px-6 pb-16',
        children: m('div', {
          className: 'max-w-[1180px] mx-auto',
          children: [
            m('div', {
              className: 'text-center max-w-[560px] mx-auto',
              children: [
                c('h2', {
                  className:
                    'text-[28px] sm:text-[34px] font-extrabold tracking-[-0.02em] leading-[1.05]',
                  children: 'Quem já organizou, não volta atrás.',
                }),
                c('p', {
                  className: 'mt-3 text-[14px] text-slate-600',
                  children: 'Histórias reais de quem saiu do improviso para o controle.',
                }),
              ],
            }),
            c('div', {
              className: 'mt-10 grid md:grid-cols-3 gap-5',
              children: [
                {
                  n: 'Camila R.',
                  c: 'Designer, 29 anos',
                  t: 'Eu achava que ganhava pouco. Na verdade eu gastava mal. Em 2 meses usando a planilha eu quitei 2 cartões e juntei R$1.800. Os gráficos são viciantes!',
                  s: 5,
                },
                {
                  n: 'Rafael M.',
                  c: 'Autônomo, 34 anos',
                  t: 'Minha renda varia muito e eu nunca sabia quanto podia tirar. Com o previsto vs real eu finalmente tenho um salário fixo para mim. Simples e funciona.',
                  s: 5,
                },
                {
                  n: 'Juliana S.',
                  c: 'Professora, 41 anos',
                  t: 'Tentei app, caderninho, tudo. Essa planilha foi a primeira que eu realmente usei por mais de um mês. É bonita, leve e não me julga, só mostra os números.',
                  s: 5,
                },
              ].map((r, l) =>
                m(
                  'div',
                  {
                    className: 'rounded-[20px] bg-white border border-slate-200 p-7',
                    children: [
                      c('div', {
                        className: 'flex gap-1 text-amber-400 text-[14px]',
                        children: '★★★★★'.slice(0, r.s),
                      }),
                      m('p', {
                        className: 'mt-4 text-[14px] leading-[1.6] text-slate-700',
                        children: ['“', r.t, '”'],
                      }),
                      m('div', {
                        className: 'mt-5 flex items-center gap-3',
                        children: [
                          c('div', {
                            className:
                              'w-9 h-9 rounded-full bg-[#1F3864]/10 flex items-center justify-center font-bold text-[12px] text-[#1F3864]',
                            children: r.n[0],
                          }),
                          m('div', {
                            children: [
                              c('div', {
                                className: 'font-bold text-[13px]',
                                children: r.n,
                              }),
                              c('div', {
                                className: 'text-[11px] text-slate-500',
                                children: r.c,
                              }),
                            ],
                          }),
                          c('span', {
                            className:
                              'ml-auto text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-semibold',
                            children: 'Verificado',
                          }),
                        ],
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      }),
      c('section', {
        className: 'px-6 pb-20',
        children: m('div', {
          className: 'max-w-[820px] mx-auto',
          children: [
            c('h2', {
              className: 'text-[28px] font-extrabold tracking-[-0.02em] text-center',
              children: 'Dúvidas frequentes',
            }),
            c('div', {
              className:
                'mt-8 rounded-[20px] bg-white border border-slate-200 divide-y divide-slate-100 overflow-hidden',
              children: n.map((r, l) =>
                m(
                  'button',
                  {
                    onClick: () => t(e === l ? null : l),
                    className:
                      'w-full text-left p-6 flex gap-4 hover:bg-slate-50/60 transition-colors',
                    children: [
                      c('span', {
                        className:
                          'mt-0.5 w-7 h-7 rounded-full bg-[#F8FAFC] border border-slate-200 flex items-center justify-center shrink-0 text-[12px] font-bold',
                        children: e === l ? '−' : '+',
                      }),
                      m('span', {
                        className: 'flex-1',
                        children: [
                          c('span', {
                            className: 'font-bold text-[15px]',
                            children: r.q,
                          }),
                          e === l &&
                            c('span', {
                              className: 'block mt-2 text-[13.5px] leading-[1.6] text-slate-600',
                              children: r.a,
                            }),
                        ],
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      }),
      c('footer', {
        className: 'px-6 pb-10',
        children: m('div', {
          className:
            'max-w-[1180px] mx-auto rounded-[28px] bg-[#1F3864] p-8 sm:p-12 text-white overflow-hidden relative',
          children: [
            c('div', {
              className:
                'absolute -right-20 -top-20 w-[320px] h-[320px] rounded-full bg-[#2E75B6]/30 blur-2xl',
            }),
            m('div', {
              className: 'relative grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center',
              children: [
                m('div', {
                  children: [
                    c('div', {
                      className: 'text-[12px] font-bold tracking-[0.14em] text-white/60',
                      children: 'ÚLTIMA CHAMADA',
                    }),
                    m('h2', {
                      className:
                        'mt-3 text-[30px] sm:text-[38px] font-extrabold leading-[0.95] tracking-[-0.02em]',
                      children: ['Seu 2026 não pode ser', c('br', {}), 'igual a 2025.'],
                    }),
                    c('p', {
                      className: 'mt-4 text-[14px] leading-[1.6] text-white/70 max-w-[460px]',
                      children:
                        'Comece hoje com R$129,90, sem mensalidade, com garantia e entrega imediata. A diferença entre quem junta e quem não junta é o controle.',
                    }),
                  ],
                }),
                m('div', {
                  className: 'flex flex-col gap-3',
                  children: [
                    c('a', {
                      href: '#checkout',
                      className:
                        'h-[56px] rounded-full bg-white text-[#1F3864] font-extrabold text-[16px] flex items-center justify-center gap-2 shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:-translate-y-[1px] transition-all',
                      children: 'Garantir minha planilha por R$129,90',
                    }),
                    c('div', {
                      className: 'text-center text-[11px] text-white/60',
                      children: 'De R$197 por R$129,90 • Acesso vitalício • Garantia 7 dias',
                    }),
                    c('div', {
                      className:
                        'mt-2 text-center text-[11px] font-semibold tracking-[0.08em] text-emerald-300 uppercase',
                      children: 'Será enviado pelo seu e-mail',
                    }),
                  ],
                }),
              ],
            }),
            m('div', {
              className:
                'mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-white/50',
              children: [
                c('span', {
                  children:
                    '© 2026 FINANCE PRO. Todos os direitos reservados. Produto digital, entrega imediata.',
                }),
                m('span', {
                  className: 'flex gap-4',
                  children: [
                    c('a', {
                      href: '#',
                      className: 'hover:text-white/80',
                      children: 'Termos',
                    }),
                    c('a', {
                      href: '#',
                      className: 'hover:text-white/80',
                      children: 'Privacidade',
                    }),
                    c('a', {
                      href: '#',
                      className: 'hover:text-white/80',
                      children: 'Suporte',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
Vc.createRoot(document.getElementById('root')).render(
  c(Bc.default.StrictMode, { children: c(Jo, {}) }),
);

// === MODAL PIX INTEGRADO ===
window.PIX_CODE =
  '00020101021226480014BR.GOV.BCB.PIX0126durandtechsysten@gmail.com5204000053039865406129.905802BR5918DURAND TECH SYSTEM6007PELOTAS62160512PLANILHA2026630443FA';
window.PIX_KEY = 'durandtechsysten@gmail.com';
window.PIX_VALOR = 129.9;

function openPixModal() {
  let m = document.getElementById('pix-modal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'pix-modal';
    m.innerHTML = `
    <div id="pix-overlay" style="position:fixed;inset:0;background:rgba(15,23,42,0.85);backdrop-filter:blur(12px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;">
      <div style="background:white;border-radius:28px;max-width:480px;width:100%;padding:28px;box-shadow:0 24px 64px rgba(0,0,0,0.25);position:relative;max-height:90vh;overflow:auto;">
        <button onclick="document.getElementById('pix-modal').remove()" style="position:absolute;top:16px;right:16px;width:36px;height:36px;border-radius:9999px;background:#F1F5F9;border:1px solid #E2E8F0;display:flex;align-items:center;justify-content:center;font-weight:bold;cursor:pointer;">✕</button>
        <div style="text-align:center;">
          <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:9999px;background:#ECFDF5;border:1px solid #A7F3D0;color:#065F46;font-size:11px;font-weight:800;letter-spacing:0.05em;">PIX ATIVO • PAGAMENTO INSTANTÂNEO</div>
          <h3 style="margin-top:16px;font-size:22px;font-weight:800;letter-spacing:-0.02em;color:#0F172A;">Pague R$129,90 via PIX</h3>
          <p style="margin-top:8px;font-size:13px;color:#64748B;line-height:1.5;">Escaneie o QR Code ou copie o código. Envio da planilha em até 15 min após comprovação.</p>
          
          <div style="margin-top:20px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:16px;">
            <img src="./assets/qrcode_pix_129.jpg" id="pix-qrcode-img" style="width:220px;height:220px;margin:0 auto;display:block;border-radius:12px;" alt="QR Code PIX" />
            <div style="margin-top:12px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;color:#334155;">
              <span style="width:8px;height:8px;border-radius:50%;background:#10B981;display:inline-block;animation:pulse 2s infinite;"></span>
              Chave: durandtechsysten@gmail.com
            </div>
          </div>

          <div style="margin-top:16px;text-align:left;">
            <div style="font-size:11px;font-weight:700;color:#475569;letter-spacing:0.08em;margin-bottom:6px;">PIX COPIA E COLA</div>
            <div style="display:flex;gap:8px;">
              <input id="pix-copia-input" readonly value="00020101021226480014BR.GOV.BCB.PIX0126durandtechsysten@gmail.com5204000053039865406129.905802BR5918DURAND TECH SYSTEM6007PELOTAS62160512PLANILHA2026630443FA" style="flex:1;height:44px;border-radius:12px;border:1px solid #E2E8F0;background:#F8FAFC;padding:0 12px;font-size:10px;color:#334155;overflow:hidden;text-overflow:ellipsis;" />
              <button onclick="copyPix()" style="height:44px;padding:0 18px;border-radius:12px;background:#1F3864;color:white;font-weight:700;font-size:13px;white-space:nowrap;cursor:pointer;">Copiar</button>
            </div>
            <div id="pix-copy-msg" style="margin-top:8px;font-size:11px;color:#10B981;font-weight:600;display:none;">✓ Código copiado!</div>
          </div>

          <div style="margin-top:20px;background:#1F3864;border-radius:16px;padding:16px;color:white;text-align:left;">
            <div style="font-size:12px;font-weight:700;opacity:0.8;">APÓS PAGAR:</div>
            <div style="margin-top:8px;font-size:13px;line-height:1.5;opacity:0.9;">1. Envie o comprovante no WhatsApp<br/>2. Receba a planilha em até 15 min<br/>3. Suporte incluso por 7 dias</div>
                                    <a href="https://wa.me/5553991833588?text=Ol%C3%A1%20Ot%C3%A1vio%21%20Paguei%20a%20Planilha%20Financeira%20via%20PIX%20R%24129%2C90%20-%20segue%20comprovante" target="_blank" style="margin-top:12px;display:flex;height:44px;border-radius:9999px;background:white;color:#1F3864;font-weight:800;align-items:center;justify-content:center;text-decoration:none;border:1px solid #E2E8F0;">📩 Enviar comprovante p/ Otávio - (53) 99183-3588</a>
            <a href="https://wa.me/5548984281856?text=Ol%C3%A1%20Juliana%21%20Paguei%20a%20Planilha%20Financeira%20via%20PIX%20R%24129%2C90%20-%20segue%20comprovante" target="_blank" style="margin-top:8px;display:flex;height:44px;border-radius:9999px;background:#1F3864;color:white;font-weight:700;font-size:13px;align-items:center;justify-content:center;text-decoration:none;">📩 Enviar comprovante p/ Juliana - (48) 98428-1856</a>
            <div style="margin-top:12px;display:flex;gap:8px;">
              <a href="https://wa.me/5553991833588?text=Ol%C3%A1%20Ot%C3%A1vio%21%20Tenho%20d%C3%BAvidas%20sobre%20a%20Planilha" target="_blank" style="flex:1;height:38px;border-radius:9999px;background:#F8FAFC;border:1px solid #E2E8F0;color:#334155;font-weight:600;font-size:12px;display:flex;align-items:center;justify-content:center;text-decoration:none;">💬 Falar com Otávio</a>
              <a href="https://wa.me/5548984281856?text=Ol%C3%A1%20Juliana%21%20Tenho%20d%C3%BAvidas%20sobre%20a%20Planilha" target="_blank" style="flex:1;height:38px;border-radius:9999px;background:#F8FAFC;border:1px solid #E2E8F0;color:#334155;font-weight:600;font-size:12px;display:flex;align-items:center;justify-content:center;text-decoration:none;">💬 Falar com Juliana</a>
            </div>
          </div>

          <div style="margin-top:12px;font-size:10px;color:#94A3B8;">Pagamento 100% seguro via PIX Banco Central • Valor: R$129,90</div>
        </div>
      </div>
    </div>
    <style>@keyframes pulse{0%{opacity:1}50%{opacity:0.5}100%{opacity:1}}</style>
    `;
    document.body.appendChild(m);
    // close on overlay click
    m.querySelector('#pix-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'pix-overlay') m.remove();
    });
  } else {
    m.style.display = 'block';
  }
}
function copyPix() {
  const input = document.getElementById('pix-copia-input');
  navigator.clipboard.writeText(window.PIX_CODE).then(() => {
    document.getElementById('pix-copy-msg').style.display = 'block';
    setTimeout(() => (document.getElementById('pix-copy-msg').style.display = 'none'), 2500);
  });
  input.select();
  document.execCommand('copy');
}

// === CONTATOS FLUTUANTES ===
(function () {
  if (document.getElementById('wa-float')) return;
  const floatDiv = document.createElement('div');
  floatDiv.id = 'wa-float';
  floatDiv.innerHTML = `
    <div style="position:fixed;bottom:20px;right:20px;z-index:9998;display:flex;flex-direction:column;gap:10px;align-items:flex-end;">
      <div style="background:white;border:1px solid #E2E8F0;border-radius:16px;padding:10px 12px;box-shadow:0 8px 24px rgba(0,0,0,0.12);font-size:11px;">
        <div style="font-weight:800;color:#0F172A;margin-bottom:6px;">Fale conosco no WhatsApp</div>
        <a href="https://wa.me/5553991833588?text=Ol%C3%A1%20Ot%C3%A1vio%21" target="_blank" style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:9999px;color:#065F46;font-weight:700;text-decoration:none;margin-bottom:6px;">💬 Otávio - (53) 99183-3588</a>
        <a href="https://wa.me/5548984281856?text=Ol%C3%A1%20Juliana%21" target="_blank" style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:9999px;color:#1E40AF;font-weight:700;text-decoration:none;">💬 Juliana - (48) 98428-1856</a>
      </div>
      <a href="https://wa.me/5553991833588?text=Ol%C3%A1%20Ot%C3%A1vio%21%20Quero%20a%20Planilha%20Financeira" target="_blank" title="WhatsApp Otávio" style="width:56px;height:56px;border-radius:50%;background:#10B981;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(16,185,129,0.4);text-decoration:none;font-size:24px;">💬</a>
    </div>
    <div style="position:fixed;bottom:20px;left:20px;z-index:9998;background:#0F172A;color:white;border-radius:9999px;padding:8px 14px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(0,0,0,0.2);font-size:11px;font-weight:600;">
      <span style="width:8px;height:8px;background:#10B981;border-radius:50%;display:inline-block;"></span>
      <span>PIX R$129,90 ativo</span>
    </div>
  `;
  document.body.appendChild(floatDiv);

  // Atualiza links de Suporte no rodapé para o número 48
  setTimeout(() => {
    document.querySelectorAll('a').forEach((a) => {
      if (a.textContent.trim().toLowerCase() === 'suporte') {
        a.href = 'https://wa.me/5548984281856';
        a.target = '_blank';
      }
    });
  }, 1500);
})();

// Substitui todos os botões de checkout para abrir PIX
setTimeout(() => {
  document
    .querySelectorAll('a[href="#checkout"], a[href*="kiwify"], a[href*="SEU_LINK"]')
    .forEach((a) => {
      if (
        a.textContent.includes('planilha') ||
        a.textContent.includes('Garantir') ||
        a.textContent.includes('Quero')
      ) {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          openPixModal();
          if (window.fbq) fbq('track', 'InitiateCheckout');
        });
        a.href = 'javascript:void(0)';
        a.removeAttribute('target');
      }
    });
  // Botão específico da oferta
  const offerBtn = document.querySelector('a.mt-8');
  if (offerBtn) {
    offerBtn.onclick = (e) => {
      e.preventDefault();
      openPixModal();
    };
    offerBtn.href = 'javascript:void(0)';
  }
  console.log('✅ PIX Modal ativado - R$129,90');
}, 1000);

(function () {
  function m(a) {
    var h = a.getAttribute('href');
    if (!h) return;
    try {
      var u = new URL(h, document.baseURI);
      if ((u.protocol === 'http:' || u.protocol === 'https:') && u.host !== location.host) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    } catch (e) {}
  }
  function s() {
    document.querySelectorAll('a[href]').forEach(m);
  }
  if (document.readyState !== 'loading') {
    s();
  } else {
    document.addEventListener('DOMContentLoaded', s);
  }
  document.addEventListener(
    'click',
    function (e) {
      var a = e.target && e.target.closest && e.target.closest('a[href]');
      if (a) {
        m(a);
      }
    },
    true,
  );
})();
