/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var t_ = Object.create;
    var un = Object.defineProperty;
    var r_ = Object.getOwnPropertyDescriptor;
    var n_ = Object.getOwnPropertyNames;
    var i_ = Object.getPrototypeOf,
        o_ = Object.prototype.hasOwnProperty;
    var me = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Ge = (e, t) => {
            for (var r in t) un(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ms = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of n_(t)) !o_.call(e, i) && i !== r && un(e, i, {
                    get: () => t[i],
                    enumerable: !(n = r_(t, i)) || n.enumerable
                });
            return e
        };
    var fe = (e, t, r) => (r = e != null ? t_(i_(e)) : {}, Ms(t || !e || !e.__esModule ? un(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        nt = e => Ms(un({}, "__esModule", {
            value: !0
        }), e);
    var qi = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(f, T) {
                var O = new m.Bare;
                return O.init(f, T)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }

            function n(f) {
                var T = parseInt(f.slice(1), 16),
                    O = T >> 16 & 255,
                    P = T >> 8 & 255,
                    x = 255 & T;
                return [O, P, x]
            }

            function i(f, T, O) {
                return "#" + (1 << 24 | f << 16 | T << 8 | O).toString(16).slice(1)
            }

            function o() {}

            function a(f, T) {
                d("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T)
            }

            function s(f, T, O) {
                d("Units do not match [" + f + "]: " + T + ", " + O)
            }

            function u(f, T, O) {
                if (T !== void 0 && (O = T), f === void 0) return O;
                var P = O;
                return Xe.test(f) || !De.test(f) ? P = parseInt(f, 10) : De.test(f) && (P = 1e3 * parseFloat(f)), 0 > P && (P = 0), P === P ? P : O
            }

            function d(f) {
                oe.debug && window && window.console.warn(f)
            }

            function h(f) {
                for (var T = -1, O = f ? f.length : 0, P = []; ++T < O;) {
                    var x = f[T];
                    x && P.push(x)
                }
                return P
            }
            var l = function(f, T, O) {
                    function P(ae) {
                        return typeof ae == "object"
                    }

                    function x(ae) {
                        return typeof ae == "function"
                    }

                    function M() {}

                    function re(ae, ge) {
                        function K() {
                            var Re = new se;
                            return x(Re.init) && Re.init.apply(Re, arguments), Re
                        }

                        function se() {}
                        ge === O && (ge = ae, ae = Object), K.Bare = se;
                        var ue, _e = M[f] = ae[f],
                            rt = se[f] = K[f] = new M;
                        return rt.constructor = K, K.mixin = function(Re) {
                            return se[f] = K[f] = re(K, Re)[f], K
                        }, K.open = function(Re) {
                            if (ue = {}, x(Re) ? ue = Re.call(K, rt, _e, K, ae) : P(Re) && (ue = Re), P(ue))
                                for (var Er in ue) T.call(ue, Er) && (rt[Er] = ue[Er]);
                            return x(rt.init) || (rt.init = ae), K
                        }, K.open(ge)
                    }
                    return re
                }("prototype", {}.hasOwnProperty),
                E = {
                    ease: ["ease", function(f, T, O, P) {
                        var x = (f /= P) * f,
                            M = x * f;
                        return T + O * (-2.75 * M * x + 11 * x * x + -15.5 * M + 8 * x + .25 * f)
                    }],
                    "ease-in": ["ease-in", function(f, T, O, P) {
                        var x = (f /= P) * f,
                            M = x * f;
                        return T + O * (-1 * M * x + 3 * x * x + -3 * M + 2 * x)
                    }],
                    "ease-out": ["ease-out", function(f, T, O, P) {
                        var x = (f /= P) * f,
                            M = x * f;
                        return T + O * (.3 * M * x + -1.6 * x * x + 2.2 * M + -1.8 * x + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function(f, T, O, P) {
                        var x = (f /= P) * f,
                            M = x * f;
                        return T + O * (2 * M * x + -5 * x * x + 2 * M + 2 * x)
                    }],
                    linear: ["linear", function(f, T, O, P) {
                        return O * f / P + T
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, T, O, P) {
                        return O * (f /= P) * f + T
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, T, O, P) {
                        return -O * (f /= P) * (f - 2) + T
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, T, O, P) {
                        return (f /= P / 2) < 1 ? O / 2 * f * f + T : -O / 2 * (--f * (f - 2) - 1) + T
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, T, O, P) {
                        return O * (f /= P) * f * f + T
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, T, O, P) {
                        return O * ((f = f / P - 1) * f * f + 1) + T
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, T, O, P) {
                        return (f /= P / 2) < 1 ? O / 2 * f * f * f + T : O / 2 * ((f -= 2) * f * f + 2) + T
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, T, O, P) {
                        return O * (f /= P) * f * f * f + T
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, T, O, P) {
                        return -O * ((f = f / P - 1) * f * f * f - 1) + T
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, T, O, P) {
                        return (f /= P / 2) < 1 ? O / 2 * f * f * f * f + T : -O / 2 * ((f -= 2) * f * f * f - 2) + T
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, T, O, P) {
                        return O * (f /= P) * f * f * f * f + T
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, T, O, P) {
                        return O * ((f = f / P - 1) * f * f * f * f + 1) + T
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, T, O, P) {
                        return (f /= P / 2) < 1 ? O / 2 * f * f * f * f * f + T : O / 2 * ((f -= 2) * f * f * f * f + 2) + T
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, T, O, P) {
                        return -O * Math.cos(f / P * (Math.PI / 2)) + O + T
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, T, O, P) {
                        return O * Math.sin(f / P * (Math.PI / 2)) + T
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, T, O, P) {
                        return -O / 2 * (Math.cos(Math.PI * f / P) - 1) + T
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, T, O, P) {
                        return f === 0 ? T : O * Math.pow(2, 10 * (f / P - 1)) + T
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, T, O, P) {
                        return f === P ? T + O : O * (-Math.pow(2, -10 * f / P) + 1) + T
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, T, O, P) {
                        return f === 0 ? T : f === P ? T + O : (f /= P / 2) < 1 ? O / 2 * Math.pow(2, 10 * (f - 1)) + T : O / 2 * (-Math.pow(2, -10 * --f) + 2) + T
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, T, O, P) {
                        return -O * (Math.sqrt(1 - (f /= P) * f) - 1) + T
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, T, O, P) {
                        return O * Math.sqrt(1 - (f = f / P - 1) * f) + T
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, T, O, P) {
                        return (f /= P / 2) < 1 ? -O / 2 * (Math.sqrt(1 - f * f) - 1) + T : O / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + T
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, T, O, P, x) {
                        return x === void 0 && (x = 1.70158), O * (f /= P) * f * ((x + 1) * f - x) + T
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, T, O, P, x) {
                        return x === void 0 && (x = 1.70158), O * ((f = f / P - 1) * f * ((x + 1) * f + x) + 1) + T
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, T, O, P, x) {
                        return x === void 0 && (x = 1.70158), (f /= P / 2) < 1 ? O / 2 * f * f * (((x *= 1.525) + 1) * f - x) + T : O / 2 * ((f -= 2) * f * (((x *= 1.525) + 1) * f + x) + 2) + T
                    }]
                },
                v = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                g = document,
                _ = window,
                A = "bkwld-tram",
                w = /[\-\.0-9]/g,
                N = /[A-Z]/,
                R = "number",
                q = /^(rgb|#)/,
                F = /(em|cm|mm|in|pt|pc|px)$/,
                D = /(em|cm|mm|in|pt|pc|px|%)$/,
                j = /(deg|rad|turn)$/,
                z = "unitless",
                $ = /(all|none) 0s ease 0s/,
                te = /^(width|height)$/,
                X = " ",
                S = g.createElement("a"),
                y = ["Webkit", "Moz", "O", "ms"],
                L = ["-webkit-", "-moz-", "-o-", "-ms-"],
                G = function(f) {
                    if (f in S.style) return {
                        dom: f,
                        css: f
                    };
                    var T, O, P = "",
                        x = f.split("-");
                    for (T = 0; T < x.length; T++) P += x[T].charAt(0).toUpperCase() + x[T].slice(1);
                    for (T = 0; T < y.length; T++)
                        if (O = y[T] + P, O in S.style) return {
                            dom: O,
                            css: L[T] + f
                        }
                },
                k = t.support = {
                    bind: Function.prototype.bind,
                    transform: G("transform"),
                    transition: G("transition"),
                    backface: G("backface-visibility"),
                    timing: G("transition-timing-function")
                };
            if (k.transition) {
                var J = k.timing.dom;
                if (S.style[J] = E["ease-in-back"][0], !S.style[J])
                    for (var ne in v) E[ne][0] = v[ne]
            }
            var U = t.frame = function() {
                    var f = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return f && k.bind ? f.bind(_) : function(T) {
                        _.setTimeout(T, 16)
                    }
                }(),
                H = t.now = function() {
                    var f = _.performance,
                        T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return T && k.bind ? T.bind(f) : Date.now || function() {
                        return +new Date
                    }
                }(),
                Z = l(function(f) {
                    function T(ie, ce) {
                        var Ee = h(("" + ie).split(X)),
                            pe = Ee[0];
                        ce = ce || {};
                        var Le = Y[pe];
                        if (!Le) return d("Unsupported property: " + pe);
                        if (!ce.weak || !this.props[pe]) {
                            var je = Le[0],
                                Fe = this.props[pe];
                            return Fe || (Fe = this.props[pe] = new je.Bare), Fe.init(this.$el, Ee, Le, ce), Fe
                        }
                    }

                    function O(ie, ce, Ee) {
                        if (ie) {
                            var pe = typeof ie;
                            if (ce || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && ce) return this.timer = new Q({
                                duration: ie,
                                context: this,
                                complete: M
                            }), void(this.active = !0);
                            if (pe == "string" && ce) {
                                switch (ie) {
                                    case "hide":
                                        K.call(this);
                                        break;
                                    case "stop":
                                        re.call(this);
                                        break;
                                    case "redraw":
                                        se.call(this);
                                        break;
                                    default:
                                        T.call(this, ie, Ee && Ee[1])
                                }
                                return M.call(this)
                            }
                            if (pe == "function") return void ie.call(this, this);
                            if (pe == "object") {
                                var Le = 0;
                                rt.call(this, ie, function(Ie, e_) {
                                    Ie.span > Le && (Le = Ie.span), Ie.stop(), Ie.animate(e_)
                                }, function(Ie) {
                                    "wait" in Ie && (Le = u(Ie.wait, 0))
                                }), _e.call(this), Le > 0 && (this.timer = new Q({
                                    duration: Le,
                                    context: this
                                }), this.active = !0, ce && (this.timer.complete = M));
                                var je = this,
                                    Fe = !1,
                                    sn = {};
                                U(function() {
                                    rt.call(je, ie, function(Ie) {
                                        Ie.active && (Fe = !0, sn[Ie.name] = Ie.nextStyle)
                                    }), Fe && je.$el.css(sn)
                                })
                            }
                        }
                    }

                    function P(ie) {
                        ie = u(ie, 0), this.active ? this.queue.push({
                            options: ie
                        }) : (this.timer = new Q({
                            duration: ie,
                            context: this,
                            complete: M
                        }), this.active = !0)
                    }

                    function x(ie) {
                        return this.active ? (this.queue.push({
                            options: ie,
                            args: arguments
                        }), void(this.timer.complete = M)) : d("No active transition timer. Use start() or wait() before then().")
                    }

                    function M() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ie = this.queue.shift();
                            O.call(this, ie.options, !0, ie.args)
                        }
                    }

                    function re(ie) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ce;
                        typeof ie == "string" ? (ce = {}, ce[ie] = 1) : ce = typeof ie == "object" && ie != null ? ie : this.props, rt.call(this, ce, Re), _e.call(this)
                    }

                    function ae(ie) {
                        re.call(this, ie), rt.call(this, ie, Er, Zb)
                    }

                    function ge(ie) {
                        typeof ie != "string" && (ie = "block"), this.el.style.display = ie
                    }

                    function K() {
                        re.call(this), this.el.style.display = "none"
                    }

                    function se() {
                        this.el.offsetHeight
                    }

                    function ue() {
                        re.call(this), e.removeData(this.el, A), this.$el = this.el = null
                    }

                    function _e() {
                        var ie, ce, Ee = [];
                        this.upstream && Ee.push(this.upstream);
                        for (ie in this.props) ce = this.props[ie], ce.active && Ee.push(ce.string);
                        Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[k.transition.dom] = Ee)
                    }

                    function rt(ie, ce, Ee) {
                        var pe, Le, je, Fe, sn = ce !== Re,
                            Ie = {};
                        for (pe in ie) je = ie[pe], pe in de ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = je) : (N.test(pe) && (pe = r(pe)), pe in Y ? Ie[pe] = je : (Fe || (Fe = {}), Fe[pe] = je));
                        for (pe in Ie) {
                            if (je = Ie[pe], Le = this.props[pe], !Le) {
                                if (!sn) continue;
                                Le = T.call(this, pe)
                            }
                            ce.call(this, Le, je)
                        }
                        Ee && Fe && Ee.call(this, Fe)
                    }

                    function Re(ie) {
                        ie.stop()
                    }

                    function Er(ie, ce) {
                        ie.set(ce)
                    }

                    function Zb(ie) {
                        this.$el.css(ie)
                    }

                    function Be(ie, ce) {
                        f[ie] = function() {
                            return this.children ? Jb.call(this, ce, arguments) : (this.el && ce.apply(this, arguments), this)
                        }
                    }

                    function Jb(ie, ce) {
                        var Ee, pe = this.children.length;
                        for (Ee = 0; pe > Ee; Ee++) ie.apply(this.children[Ee], ce);
                        return this
                    }
                    f.init = function(ie) {
                        if (this.$el = e(ie), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, oe.keepInherited && !oe.fallback) {
                            var ce = B(this.el, "transition");
                            ce && !$.test(ce) && (this.upstream = ce)
                        }
                        k.backface && oe.hideBackface && b(this.el, k.backface.css, "hidden")
                    }, Be("add", T), Be("start", O), Be("wait", P), Be("then", x), Be("next", M), Be("stop", re), Be("set", ae), Be("show", ge), Be("hide", K), Be("redraw", se), Be("destroy", ue)
                }),
                m = l(Z, function(f) {
                    function T(O, P) {
                        var x = e.data(O, A) || e.data(O, A, new Z.Bare);
                        return x.el || x.init(O), P ? x.start(P) : x
                    }
                    f.init = function(O, P) {
                        var x = e(O);
                        if (!x.length) return this;
                        if (x.length === 1) return T(x[0], P);
                        var M = [];
                        return x.each(function(re, ae) {
                            M.push(T(ae, P))
                        }), this.children = M, this
                    }
                }),
                I = l(function(f) {
                    function T() {
                        var M = this.get();
                        this.update("auto");
                        var re = this.get();
                        return this.update(M), re
                    }

                    function O(M, re, ae) {
                        return re !== void 0 && (ae = re), M in E ? M : ae
                    }

                    function P(M) {
                        var re = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(M);
                        return (re ? i(re[1], re[2], re[3]) : M).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var x = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function(M, re, ae, ge) {
                        this.$el = M, this.el = M[0];
                        var K = re[0];
                        ae[2] && (K = ae[2]), ee[K] && (K = ee[K]), this.name = K, this.type = ae[1], this.duration = u(re[1], this.duration, x.duration), this.ease = O(re[2], this.ease, x.ease), this.delay = u(re[3], this.delay, x.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = te.test(this.name), this.unit = ge.unit || this.unit || oe.defaultUnit, this.angle = ge.angle || this.angle || oe.defaultAngle, oe.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + X + this.duration + "ms" + (this.ease != "ease" ? X + E[this.ease][0] : "") + (this.delay ? X + this.delay + "ms" : ""))
                    }, f.set = function(M) {
                        M = this.convert(M, this.type), this.update(M), this.redraw()
                    }, f.transition = function(M) {
                        this.active = !0, M = this.convert(M, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), M == "auto" && (M = T.call(this))), this.nextStyle = M
                    }, f.fallback = function(M) {
                        var re = this.el.style[this.name] || this.convert(this.get(), this.type);
                        M = this.convert(M, this.type), this.auto && (re == "auto" && (re = this.convert(this.get(), this.type)), M == "auto" && (M = T.call(this))), this.tween = new C({
                            from: re,
                            to: M,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function() {
                        return B(this.el, this.name)
                    }, f.update = function(M) {
                        b(this.el, this.name, M)
                    }, f.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, b(this.el, this.name, this.get()));
                        var M = this.tween;
                        M && M.context && M.destroy()
                    }, f.convert = function(M, re) {
                        if (M == "auto" && this.auto) return M;
                        var ae, ge = typeof M == "number",
                            K = typeof M == "string";
                        switch (re) {
                            case R:
                                if (ge) return M;
                                if (K && M.replace(w, "") === "") return +M;
                                ae = "number(unitless)";
                                break;
                            case q:
                                if (K) {
                                    if (M === "" && this.original) return this.original;
                                    if (re.test(M)) return M.charAt(0) == "#" && M.length == 7 ? M : P(M)
                                }
                                ae = "hex or rgb string";
                                break;
                            case F:
                                if (ge) return M + this.unit;
                                if (K && re.test(M)) return M;
                                ae = "number(px) or string(unit)";
                                break;
                            case D:
                                if (ge) return M + this.unit;
                                if (K && re.test(M)) return M;
                                ae = "number(px) or string(unit or %)";
                                break;
                            case j:
                                if (ge) return M + this.angle;
                                if (K && re.test(M)) return M;
                                ae = "number(deg) or string(angle)";
                                break;
                            case z:
                                if (ge || K && D.test(M)) return M;
                                ae = "number(unitless) or string(unit or %)"
                        }
                        return a(ae, M), M
                    }, f.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                p = l(I, function(f, T) {
                    f.init = function() {
                        T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), q))
                    }
                }),
                V = l(I, function(f, T) {
                    f.init = function() {
                        T.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function() {
                        return this.$el[this.name]()
                    }, f.update = function(O) {
                        this.$el[this.name](O)
                    }
                }),
                W = l(I, function(f, T) {
                    function O(P, x) {
                        var M, re, ae, ge, K;
                        for (M in P) ge = de[M], ae = ge[0], re = ge[1] || M, K = this.convert(P[M], ae), x.call(this, re, K, ae)
                    }
                    f.init = function() {
                        T.init.apply(this, arguments), this.current || (this.current = {}, de.perspective && oe.perspective && (this.current.perspective = oe.perspective, b(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function(P) {
                        O.call(this, P, function(x, M) {
                            this.current[x] = M
                        }), b(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function(P) {
                        var x = this.values(P);
                        this.tween = new le({
                            current: this.current,
                            values: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var M, re = {};
                        for (M in this.current) re[M] = M in x ? x[M] : this.current[M];
                        this.active = !0, this.nextStyle = this.style(re)
                    }, f.fallback = function(P) {
                        var x = this.values(P);
                        this.tween = new le({
                            current: this.current,
                            values: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function() {
                        b(this.el, this.name, this.style(this.current))
                    }, f.style = function(P) {
                        var x, M = "";
                        for (x in P) M += x + "(" + P[x] + ") ";
                        return M
                    }, f.values = function(P) {
                        var x, M = {};
                        return O.call(this, P, function(re, ae, ge) {
                            M[re] = ae, this.current[re] === void 0 && (x = 0, ~re.indexOf("scale") && (x = 1), this.current[re] = this.convert(x, ge))
                        }), M
                    }
                }),
                C = l(function(f) {
                    function T(K) {
                        ae.push(K) === 1 && U(O)
                    }

                    function O() {
                        var K, se, ue, _e = ae.length;
                        if (_e)
                            for (U(O), se = H(), K = _e; K--;) ue = ae[K], ue && ue.render(se)
                    }

                    function P(K) {
                        var se, ue = e.inArray(K, ae);
                        ue >= 0 && (se = ae.slice(ue + 1), ae.length = ue, se.length && (ae = ae.concat(se)))
                    }

                    function x(K) {
                        return Math.round(K * ge) / ge
                    }

                    function M(K, se, ue) {
                        return i(K[0] + ue * (se[0] - K[0]), K[1] + ue * (se[1] - K[1]), K[2] + ue * (se[2] - K[2]))
                    }
                    var re = {
                        ease: E.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function(K) {
                        this.duration = K.duration || 0, this.delay = K.delay || 0;
                        var se = K.ease || re.ease;
                        E[se] && (se = E[se][1]), typeof se != "function" && (se = re.ease), this.ease = se, this.update = K.update || o, this.complete = K.complete || o, this.context = K.context || this, this.name = K.name;
                        var ue = K.from,
                            _e = K.to;
                        ue === void 0 && (ue = re.from), _e === void 0 && (_e = re.to), this.unit = K.unit || "", typeof ue == "number" && typeof _e == "number" ? (this.begin = ue, this.change = _e - ue) : this.format(_e, ue), this.value = this.begin + this.unit, this.start = H(), K.autoplay !== !1 && this.play()
                    }, f.play = function() {
                        this.active || (this.start || (this.start = H()), this.active = !0, T(this))
                    }, f.stop = function() {
                        this.active && (this.active = !1, P(this))
                    }, f.render = function(K) {
                        var se, ue = K - this.start;
                        if (this.delay) {
                            if (ue <= this.delay) return;
                            ue -= this.delay
                        }
                        if (ue < this.duration) {
                            var _e = this.ease(ue, 0, 1, this.duration);
                            return se = this.startRGB ? M(this.startRGB, this.endRGB, _e) : x(this.begin + _e * this.change), this.value = se + this.unit, void this.update.call(this.context, this.value)
                        }
                        se = this.endHex || this.begin + this.change, this.value = se + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function(K, se) {
                        if (se += "", K += "", K.charAt(0) == "#") return this.startRGB = n(se), this.endRGB = n(K), this.endHex = K, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ue = se.replace(w, ""),
                                _e = K.replace(w, "");
                            ue !== _e && s("tween", se, K), this.unit = ue
                        }
                        se = parseFloat(se), K = parseFloat(K), this.begin = this.value = se, this.change = K - se
                    }, f.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ae = [],
                        ge = 1e3
                }),
                Q = l(C, function(f) {
                    f.init = function(T) {
                        this.duration = T.duration || 0, this.complete = T.complete || o, this.context = T.context, this.play()
                    }, f.render = function(T) {
                        var O = T - this.start;
                        O < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                le = l(C, function(f, T) {
                    f.init = function(O) {
                        this.context = O.context, this.update = O.update, this.tweens = [], this.current = O.current;
                        var P, x;
                        for (P in O.values) x = O.values[P], this.current[P] !== x && this.tweens.push(new C({
                            name: P,
                            from: this.current[P],
                            to: x,
                            duration: O.duration,
                            delay: O.delay,
                            ease: O.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function(O) {
                        var P, x, M = this.tweens.length,
                            re = !1;
                        for (P = M; P--;) x = this.tweens[P], x.context && (x.render(O), this.current[x.name] = x.value, re = !0);
                        return re ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function() {
                        if (T.destroy.call(this), this.tweens) {
                            var O, P = this.tweens.length;
                            for (O = P; O--;) this.tweens[O].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                oe = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !k.transition,
                    agentTests: []
                };
            t.fallback = function(f) {
                if (!k.transition) return oe.fallback = !0;
                oe.agentTests.push("(" + f + ")");
                var T = new RegExp(oe.agentTests.join("|"), "i");
                oe.fallback = T.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(f) {
                return new C(f)
            }, t.delay = function(f, T, O) {
                return new Q({
                    complete: T,
                    duration: f,
                    context: O
                })
            }, e.fn.tram = function(f) {
                return t.call(null, this, f)
            };
            var b = e.style,
                B = e.css,
                ee = {
                    transform: k.transform && k.transform.css
                },
                Y = {
                    color: [p, q],
                    background: [p, q, "background-color"],
                    "outline-color": [p, q],
                    "border-color": [p, q],
                    "border-top-color": [p, q],
                    "border-right-color": [p, q],
                    "border-bottom-color": [p, q],
                    "border-left-color": [p, q],
                    "border-width": [I, F],
                    "border-top-width": [I, F],
                    "border-right-width": [I, F],
                    "border-bottom-width": [I, F],
                    "border-left-width": [I, F],
                    "border-spacing": [I, F],
                    "letter-spacing": [I, F],
                    margin: [I, F],
                    "margin-top": [I, F],
                    "margin-right": [I, F],
                    "margin-bottom": [I, F],
                    "margin-left": [I, F],
                    padding: [I, F],
                    "padding-top": [I, F],
                    "padding-right": [I, F],
                    "padding-bottom": [I, F],
                    "padding-left": [I, F],
                    "outline-width": [I, F],
                    opacity: [I, R],
                    top: [I, D],
                    right: [I, D],
                    bottom: [I, D],
                    left: [I, D],
                    "font-size": [I, D],
                    "text-indent": [I, D],
                    "word-spacing": [I, D],
                    width: [I, D],
                    "min-width": [I, D],
                    "max-width": [I, D],
                    height: [I, D],
                    "min-height": [I, D],
                    "max-height": [I, D],
                    "line-height": [I, z],
                    "scroll-top": [V, R, "scrollTop"],
                    "scroll-left": [V, R, "scrollLeft"]
                },
                de = {};
            k.transform && (Y.transform = [W], de = {
                x: [D, "translateX"],
                y: [D, "translateY"],
                rotate: [j],
                rotateX: [j],
                rotateY: [j],
                scale: [R],
                scaleX: [R],
                scaleY: [R],
                skew: [j],
                skewX: [j],
                skewY: [j]
            }), k.transform && k.backface && (de.z = [D, "translateZ"], de.rotateZ = [j], de.scaleZ = [R], de.perspective = [F]);
            var Xe = /ms/,
                De = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Fs = c((ZV, Ds) => {
        "use strict";
        var a_ = window.$,
            s_ = qi() && a_.tram;
        Ds.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                u = n.toString,
                d = n.hasOwnProperty,
                h = r.forEach,
                l = r.map,
                E = r.reduce,
                v = r.reduceRight,
                g = r.filter,
                _ = r.every,
                A = r.some,
                w = r.indexOf,
                N = r.lastIndexOf,
                R = Array.isArray,
                q = Object.keys,
                F = i.bind,
                D = e.each = e.forEach = function(y, L, G) {
                    if (y == null) return y;
                    if (h && y.forEach === h) y.forEach(L, G);
                    else if (y.length === +y.length) {
                        for (var k = 0, J = y.length; k < J; k++)
                            if (L.call(G, y[k], k, y) === t) return
                    } else
                        for (var ne = e.keys(y), k = 0, J = ne.length; k < J; k++)
                            if (L.call(G, y[ne[k]], ne[k], y) === t) return;
                    return y
                };
            e.map = e.collect = function(y, L, G) {
                var k = [];
                return y == null ? k : l && y.map === l ? y.map(L, G) : (D(y, function(J, ne, U) {
                    k.push(L.call(G, J, ne, U))
                }), k)
            }, e.find = e.detect = function(y, L, G) {
                var k;
                return j(y, function(J, ne, U) {
                    if (L.call(G, J, ne, U)) return k = J, !0
                }), k
            }, e.filter = e.select = function(y, L, G) {
                var k = [];
                return y == null ? k : g && y.filter === g ? y.filter(L, G) : (D(y, function(J, ne, U) {
                    L.call(G, J, ne, U) && k.push(J)
                }), k)
            };
            var j = e.some = e.any = function(y, L, G) {
                L || (L = e.identity);
                var k = !1;
                return y == null ? k : A && y.some === A ? y.some(L, G) : (D(y, function(J, ne, U) {
                    if (k || (k = L.call(G, J, ne, U))) return t
                }), !!k)
            };
            e.contains = e.include = function(y, L) {
                return y == null ? !1 : w && y.indexOf === w ? y.indexOf(L) != -1 : j(y, function(G) {
                    return G === L
                })
            }, e.delay = function(y, L) {
                var G = a.call(arguments, 2);
                return setTimeout(function() {
                    return y.apply(null, G)
                }, L)
            }, e.defer = function(y) {
                return e.delay.apply(e, [y, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(y) {
                var L, G, k;
                return function() {
                    L || (L = !0, G = arguments, k = this, s_.frame(function() {
                        L = !1, y.apply(k, G)
                    }))
                }
            }, e.debounce = function(y, L, G) {
                var k, J, ne, U, H, Z = function() {
                    var m = e.now() - U;
                    m < L ? k = setTimeout(Z, L - m) : (k = null, G || (H = y.apply(ne, J), ne = J = null))
                };
                return function() {
                    ne = this, J = arguments, U = e.now();
                    var m = G && !k;
                    return k || (k = setTimeout(Z, L)), m && (H = y.apply(ne, J), ne = J = null), H
                }
            }, e.defaults = function(y) {
                if (!e.isObject(y)) return y;
                for (var L = 1, G = arguments.length; L < G; L++) {
                    var k = arguments[L];
                    for (var J in k) y[J] === void 0 && (y[J] = k[J])
                }
                return y
            }, e.keys = function(y) {
                if (!e.isObject(y)) return [];
                if (q) return q(y);
                var L = [];
                for (var G in y) e.has(y, G) && L.push(G);
                return L
            }, e.has = function(y, L) {
                return d.call(y, L)
            }, e.isObject = function(y) {
                return y === Object(y)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var z = /(.)^/,
                $ = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                te = /\\|'|\r|\n|\u2028|\u2029/g,
                X = function(y) {
                    return "\\" + $[y]
                },
                S = /^\s*(\w|\$)+\s*$/;
            return e.template = function(y, L, G) {
                !L && G && (L = G), L = e.defaults({}, L, e.templateSettings);
                var k = RegExp([(L.escape || z).source, (L.interpolate || z).source, (L.evaluate || z).source].join("|") + "|$", "g"),
                    J = 0,
                    ne = "__p+='";
                y.replace(k, function(m, I, p, V, W) {
                    return ne += y.slice(J, W).replace(te, X), J = W + m.length, I ? ne += `'+
((__t=(` + I + `))==null?'':_.escape(__t))+
'` : p ? ne += `'+
((__t=(` + p + `))==null?'':__t)+
'` : V && (ne += `';
` + V + `
__p+='`), m
                }), ne += `';
`;
                var U = L.variable;
                if (U) {
                    if (!S.test(U)) throw new Error("variable is not a bare identifier: " + U)
                } else ne = `with(obj||{}){
` + ne + `}
`, U = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var H;
                try {
                    H = new Function(L.variable || "obj", "_", ne)
                } catch (m) {
                    throw m.source = ne, m
                }
                var Z = function(m) {
                    return H.call(this, m, e)
                };
                return Z.source = "function(" + U + `){
` + ne + "}", Z
            }, e
        }()
    });
    var Ne = c((JV, Bs) => {
        "use strict";
        var ve = {},
            Vt = {},
            Ht = [],
            Di = window.Webflow || [],
            Et = window.jQuery,
            Ke = Et(window),
            u_ = Et(document),
            it = Et.isFunction,
            ze = ve._ = Fs(),
            Us = ve.tram = qi() && Et.tram,
            ln = !1,
            Fi = !1;
        Us.config.hideBackface = !1;
        Us.config.keepInherited = !0;
        ve.define = function(e, t, r) {
            Vt[e] && Vs(Vt[e]);
            var n = Vt[e] = t(Et, ze, r) || {};
            return ks(n), n
        };
        ve.require = function(e) {
            return Vt[e]
        };

        function ks(e) {
            ve.env() && (it(e.design) && Ke.on("__wf_design", e.design), it(e.preview) && Ke.on("__wf_preview", e.preview)), it(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && it(e.ready) && c_(e)
        }

        function c_(e) {
            if (ln) {
                e.ready();
                return
            }
            ze.contains(Ht, e.ready) || Ht.push(e.ready)
        }

        function Vs(e) {
            it(e.design) && Ke.off("__wf_design", e.design), it(e.preview) && Ke.off("__wf_preview", e.preview), it(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && it(e.ready) && l_(e)
        }

        function l_(e) {
            Ht = ze.filter(Ht, function(t) {
                return t !== e.ready
            })
        }
        ve.push = function(e) {
            if (ln) {
                it(e) && e();
                return
            }
            Di.push(e)
        };
        ve.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var cn = navigator.userAgent.toLowerCase(),
            Hs = ve.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            f_ = ve.env.chrome = /chrome/.test(cn) && /Google/.test(navigator.vendor) && parseInt(cn.match(/chrome\/(\d+)\./)[1], 10),
            d_ = ve.env.ios = /(ipod|iphone|ipad)/.test(cn);
        ve.env.safari = /safari/.test(cn) && !f_ && !d_;
        var Mi;
        Hs && u_.on("touchstart mousedown", function(e) {
            Mi = e.target
        });
        ve.validClick = Hs ? function(e) {
            return e === Mi || Et.contains(e, Mi)
        } : function() {
            return !0
        };
        var Ws = "resize.webflow orientationchange.webflow load.webflow",
            p_ = "scroll.webflow " + Ws;
        ve.resize = Gi(Ke, Ws);
        ve.scroll = Gi(Ke, p_);
        ve.redraw = Gi();

        function Gi(e, t) {
            var r = [],
                n = {};
            return n.up = ze.throttle(function(i) {
                ze.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (ze.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ve.location = function(e) {
            window.location = e
        };
        ve.env() && (ve.location = function() {});
        ve.ready = function() {
            ln = !0, Fi ? v_() : ze.each(Ht, Gs), ze.each(Di, Gs), ve.resize.up()
        };

        function Gs(e) {
            it(e) && e()
        }

        function v_() {
            Fi = !1, ze.each(Vt, ks)
        }
        var Ct;
        ve.load = function(e) {
            Ct.then(e)
        };

        function Xs() {
            Ct && (Ct.reject(), Ke.off("load", Ct.resolve)), Ct = new Et.Deferred, Ke.on("load", Ct.resolve)
        }
        ve.destroy = function(e) {
            e = e || {}, Fi = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (ln = e.domready), ze.each(Vt, Vs), ve.resize.off(), ve.scroll.off(), ve.redraw.off(), Ht = [], Di = [], Ct.state() === "pending" && Xs()
        };
        Et(ve.ready);
        Xs();
        Bs.exports = window.Webflow = ve
    });
    var Ks = c((eH, zs) => {
        "use strict";
        var js = Ne();
        js.define("brand", zs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                d;
            t.ready = function() {
                var v = n.attr("data-wf-status"),
                    g = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(g) && a.hostname !== g && (v = !0), v && !s && (d = d || l(), E(), setTimeout(E, 500), e(r).off(u, h).on(u, h))
            };

            function h() {
                var v = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(d).attr("style", v ? "display: none !important;" : "")
            }

            function l() {
                var v = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    g = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return v.append(g, _), v[0]
            }

            function E() {
                var v = i.children(o),
                    g = v.length && v.get(0) === d,
                    _ = js.env("editor");
                if (g) {
                    _ && v.remove();
                    return
                }
                v.length && v.remove(), _ || i.append(d)
            }
            return t
        })
    });
    var $s = c((tH, Ys) => {
        "use strict";
        var Ui = Ne();
        Ui.define("edit", Ys.exports = function(e, t, r) {
            if (r = r || {}, (Ui.env("test") || Ui.env("frame")) && !r.fixture && !g_()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, d = r.load || E,
                h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            h ? d() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && d() : i.on(s, l).triggerHandler(s);

            function l() {
                u || /\?edit/.test(a.hash) && d()
            }

            function E() {
                u = !0, window.WebflowEditor = !0, i.off(s, l), N(function(q) {
                    e.ajax({
                        url: w("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: v(q)
                    })
                })
            }

            function v(q) {
                return function(F) {
                    if (!F) {
                        console.error("Could not load editor data");
                        return
                    }
                    F.thirdPartyCookiesSupported = q, g(A(F.scriptPath), function() {
                        window.WebflowEditor(F)
                    })
                }
            }

            function g(q, F) {
                e.ajax({
                    type: "GET",
                    url: q,
                    dataType: "script",
                    cache: !0
                }).then(F, _)
            }

            function _(q, F, D) {
                throw console.error("Could not load editor script: " + F), D
            }

            function A(q) {
                return q.indexOf("//") >= 0 ? q : w("https://editor-api.webflow.com" + q)
            }

            function w(q) {
                return q.replace(/([^:])\/\//g, "$1/")
            }

            function N(q) {
                var F = window.document.createElement("iframe");
                F.src = "https://webflow.com/site/third-party-cookie-check.html", F.style.display = "none", F.sandbox = "allow-scripts allow-same-origin";
                var D = function(j) {
                    j.data === "WF_third_party_cookies_unsupported" ? (R(F, D), q(!1)) : j.data === "WF_third_party_cookies_supported" && (R(F, D), q(!0))
                };
                F.onerror = function() {
                    R(F, D), q(!1)
                }, window.addEventListener("message", D, !1), window.document.body.appendChild(F)
            }

            function R(q, F) {
                window.removeEventListener("message", F, !1), q.remove()
            }
            return n
        });

        function g_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Zs = c((rH, Qs) => {
        "use strict";
        var h_ = Ne();
        h_.define("focus-visible", Qs.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(R) {
                    return !!(R && R !== document && R.nodeName !== "HTML" && R.nodeName !== "BODY" && "classList" in R && "contains" in R.classList)
                }

                function u(R) {
                    var q = R.type,
                        F = R.tagName;
                    return !!(F === "INPUT" && a[q] && !R.readOnly || F === "TEXTAREA" && !R.readOnly || R.isContentEditable)
                }

                function d(R) {
                    R.getAttribute("data-wf-focus-visible") || R.setAttribute("data-wf-focus-visible", "true")
                }

                function h(R) {
                    R.getAttribute("data-wf-focus-visible") && R.removeAttribute("data-wf-focus-visible")
                }

                function l(R) {
                    R.metaKey || R.altKey || R.ctrlKey || (s(r.activeElement) && d(r.activeElement), n = !0)
                }

                function E() {
                    n = !1
                }

                function v(R) {
                    s(R.target) && (n || u(R.target)) && d(R.target)
                }

                function g(R) {
                    s(R.target) && R.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), h(R.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0), A())
                }

                function A() {
                    document.addEventListener("mousemove", N), document.addEventListener("mousedown", N), document.addEventListener("mouseup", N), document.addEventListener("pointermove", N), document.addEventListener("pointerdown", N), document.addEventListener("pointerup", N), document.addEventListener("touchmove", N), document.addEventListener("touchstart", N), document.addEventListener("touchend", N)
                }

                function w() {
                    document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", N), document.removeEventListener("mouseup", N), document.removeEventListener("pointermove", N), document.removeEventListener("pointerdown", N), document.removeEventListener("pointerup", N), document.removeEventListener("touchmove", N), document.removeEventListener("touchstart", N), document.removeEventListener("touchend", N)
                }

                function N(R) {
                    R.target.nodeName && R.target.nodeName.toLowerCase() === "html" || (n = !1, w())
                }
                document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("visibilitychange", _, !0), A(), r.addEventListener("focus", v, !0), r.addEventListener("blur", g, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var tu = c((nH, eu) => {
        "use strict";
        var Js = Ne();
        Js.define("focus", eu.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Js.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var iu = c((iH, nu) => {
        "use strict";
        var ki = window.jQuery,
            ot = {},
            fn = [],
            ru = ".w-ix",
            dn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, ki(t).triggerHandler(ot.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, ki(t).triggerHandler(ot.types.OUTRO))
                }
            };
        ot.triggers = {};
        ot.types = {
            INTRO: "w-ix-intro" + ru,
            OUTRO: "w-ix-outro" + ru
        };
        ot.init = function() {
            for (var e = fn.length, t = 0; t < e; t++) {
                var r = fn[t];
                r[0](0, r[1])
            }
            fn = [], ki.extend(ot.triggers, dn)
        };
        ot.async = function() {
            for (var e in dn) {
                var t = dn[e];
                dn.hasOwnProperty(e) && (ot.triggers[e] = function(r, n) {
                    fn.push([t, n])
                })
            }
        };
        ot.async();
        nu.exports = ot
    });
    var br = c((oH, su) => {
        "use strict";
        var Vi = iu();

        function ou(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var m_ = window.jQuery,
            pn = {},
            au = ".w-ix",
            y_ = {
                reset: function(e, t) {
                    Vi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Vi.triggers.intro(e, t), ou(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Vi.triggers.outro(e, t), ou(t, "COMPONENT_INACTIVE")
                }
            };
        pn.triggers = {};
        pn.types = {
            INTRO: "w-ix-intro" + au,
            OUTRO: "w-ix-outro" + au
        };
        m_.extend(pn.triggers, y_);
        su.exports = pn
    });
    var uu = c((aH, dt) => {
        function Hi(e) {
            return dt.exports = Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, dt.exports.__esModule = !0, dt.exports.default = dt.exports, Hi(e)
        }
        dt.exports = Hi, dt.exports.__esModule = !0, dt.exports.default = dt.exports
    });
    var vn = c((sH, _r) => {
        var E_ = uu().default;

        function cu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (cu = function(i) {
                return i ? r : t
            })(e)
        }

        function b_(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || E_(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = cu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        _r.exports = b_, _r.exports.__esModule = !0, _r.exports.default = _r.exports
    });
    var lu = c((uH, Ir) => {
        function __(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ir.exports = __, Ir.exports.__esModule = !0, Ir.exports.default = Ir.exports
    });
    var ye = c((cH, fu) => {
        var gn = function(e) {
            return e && e.Math == Math && e
        };
        fu.exports = gn(typeof globalThis == "object" && globalThis) || gn(typeof window == "object" && window) || gn(typeof self == "object" && self) || gn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Wt = c((lH, du) => {
        du.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Rt = c((fH, pu) => {
        var I_ = Wt();
        pu.exports = !I_(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var hn = c((dH, vu) => {
        var Tr = Function.prototype.call;
        vu.exports = Tr.bind ? Tr.bind(Tr) : function() {
            return Tr.apply(Tr, arguments)
        }
    });
    var yu = c(mu => {
        "use strict";
        var gu = {}.propertyIsEnumerable,
            hu = Object.getOwnPropertyDescriptor,
            T_ = hu && !gu.call({
                1: 2
            }, 1);
        mu.f = T_ ? function(t) {
            var r = hu(this, t);
            return !!r && r.enumerable
        } : gu
    });
    var Wi = c((vH, Eu) => {
        Eu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Ye = c((gH, _u) => {
        var bu = Function.prototype,
            Xi = bu.bind,
            Bi = bu.call,
            w_ = Xi && Xi.bind(Bi);
        _u.exports = Xi ? function(e) {
            return e && w_(Bi, e)
        } : function(e) {
            return e && function() {
                return Bi.apply(e, arguments)
            }
        }
    });
    var wu = c((hH, Tu) => {
        var Iu = Ye(),
            x_ = Iu({}.toString),
            O_ = Iu("".slice);
        Tu.exports = function(e) {
            return O_(x_(e), 8, -1)
        }
    });
    var Ou = c((mH, xu) => {
        var A_ = ye(),
            S_ = Ye(),
            C_ = Wt(),
            R_ = wu(),
            ji = A_.Object,
            L_ = S_("".split);
        xu.exports = C_(function() {
            return !ji("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return R_(e) == "String" ? L_(e, "") : ji(e)
        } : ji
    });
    var zi = c((yH, Au) => {
        var N_ = ye(),
            P_ = N_.TypeError;
        Au.exports = function(e) {
            if (e == null) throw P_("Can't call method on " + e);
            return e
        }
    });
    var wr = c((EH, Su) => {
        var q_ = Ou(),
            M_ = zi();
        Su.exports = function(e) {
            return q_(M_(e))
        }
    });
    var at = c((bH, Cu) => {
        Cu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Xt = c((_H, Ru) => {
        var D_ = at();
        Ru.exports = function(e) {
            return typeof e == "object" ? e !== null : D_(e)
        }
    });
    var xr = c((IH, Lu) => {
        var Ki = ye(),
            F_ = at(),
            G_ = function(e) {
                return F_(e) ? e : void 0
            };
        Lu.exports = function(e, t) {
            return arguments.length < 2 ? G_(Ki[e]) : Ki[e] && Ki[e][t]
        }
    });
    var Pu = c((TH, Nu) => {
        var U_ = Ye();
        Nu.exports = U_({}.isPrototypeOf)
    });
    var Mu = c((wH, qu) => {
        var k_ = xr();
        qu.exports = k_("navigator", "userAgent") || ""
    });
    var Hu = c((xH, Vu) => {
        var ku = ye(),
            Yi = Mu(),
            Du = ku.process,
            Fu = ku.Deno,
            Gu = Du && Du.versions || Fu && Fu.version,
            Uu = Gu && Gu.v8,
            $e, mn;
        Uu && ($e = Uu.split("."), mn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !mn && Yi && ($e = Yi.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = Yi.match(/Chrome\/(\d+)/), $e && (mn = +$e[1])));
        Vu.exports = mn
    });
    var $i = c((OH, Xu) => {
        var Wu = Hu(),
            V_ = Wt();
        Xu.exports = !!Object.getOwnPropertySymbols && !V_(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Wu && Wu < 41
        })
    });
    var Qi = c((AH, Bu) => {
        var H_ = $i();
        Bu.exports = H_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Zi = c((SH, ju) => {
        var W_ = ye(),
            X_ = xr(),
            B_ = at(),
            j_ = Pu(),
            z_ = Qi(),
            K_ = W_.Object;
        ju.exports = z_ ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = X_("Symbol");
            return B_(t) && j_(t.prototype, K_(e))
        }
    });
    var Ku = c((CH, zu) => {
        var Y_ = ye(),
            $_ = Y_.String;
        zu.exports = function(e) {
            try {
                return $_(e)
            } catch {
                return "Object"
            }
        }
    });
    var $u = c((RH, Yu) => {
        var Q_ = ye(),
            Z_ = at(),
            J_ = Ku(),
            eI = Q_.TypeError;
        Yu.exports = function(e) {
            if (Z_(e)) return e;
            throw eI(J_(e) + " is not a function")
        }
    });
    var Zu = c((LH, Qu) => {
        var tI = $u();
        Qu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : tI(r)
        }
    });
    var ec = c((NH, Ju) => {
        var rI = ye(),
            Ji = hn(),
            eo = at(),
            to = Xt(),
            nI = rI.TypeError;
        Ju.exports = function(e, t) {
            var r, n;
            if (t === "string" && eo(r = e.toString) && !to(n = Ji(r, e)) || eo(r = e.valueOf) && !to(n = Ji(r, e)) || t !== "string" && eo(r = e.toString) && !to(n = Ji(r, e))) return n;
            throw nI("Can't convert object to primitive value")
        }
    });
    var rc = c((PH, tc) => {
        tc.exports = !1
    });
    var yn = c((qH, ic) => {
        var nc = ye(),
            iI = Object.defineProperty;
        ic.exports = function(e, t) {
            try {
                iI(nc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                nc[e] = t
            }
            return t
        }
    });
    var En = c((MH, ac) => {
        var oI = ye(),
            aI = yn(),
            oc = "__core-js_shared__",
            sI = oI[oc] || aI(oc, {});
        ac.exports = sI
    });
    var ro = c((DH, uc) => {
        var uI = rc(),
            sc = En();
        (uc.exports = function(e, t) {
            return sc[e] || (sc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: uI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var lc = c((FH, cc) => {
        var cI = ye(),
            lI = zi(),
            fI = cI.Object;
        cc.exports = function(e) {
            return fI(lI(e))
        }
    });
    var bt = c((GH, fc) => {
        var dI = Ye(),
            pI = lc(),
            vI = dI({}.hasOwnProperty);
        fc.exports = Object.hasOwn || function(t, r) {
            return vI(pI(t), r)
        }
    });
    var no = c((UH, dc) => {
        var gI = Ye(),
            hI = 0,
            mI = Math.random(),
            yI = gI(1.toString);
        dc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + yI(++hI + mI, 36)
        }
    });
    var io = c((kH, mc) => {
        var EI = ye(),
            bI = ro(),
            pc = bt(),
            _I = no(),
            vc = $i(),
            hc = Qi(),
            Bt = bI("wks"),
            Lt = EI.Symbol,
            gc = Lt && Lt.for,
            II = hc ? Lt : Lt && Lt.withoutSetter || _I;
        mc.exports = function(e) {
            if (!pc(Bt, e) || !(vc || typeof Bt[e] == "string")) {
                var t = "Symbol." + e;
                vc && pc(Lt, e) ? Bt[e] = Lt[e] : hc && gc ? Bt[e] = gc(t) : Bt[e] = II(t)
            }
            return Bt[e]
        }
    });
    var _c = c((VH, bc) => {
        var TI = ye(),
            wI = hn(),
            yc = Xt(),
            Ec = Zi(),
            xI = Zu(),
            OI = ec(),
            AI = io(),
            SI = TI.TypeError,
            CI = AI("toPrimitive");
        bc.exports = function(e, t) {
            if (!yc(e) || Ec(e)) return e;
            var r = xI(e, CI),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = wI(r, e, t), !yc(n) || Ec(n)) return n;
                throw SI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), OI(e, t)
        }
    });
    var oo = c((HH, Ic) => {
        var RI = _c(),
            LI = Zi();
        Ic.exports = function(e) {
            var t = RI(e, "string");
            return LI(t) ? t : t + ""
        }
    });
    var so = c((WH, wc) => {
        var NI = ye(),
            Tc = Xt(),
            ao = NI.document,
            PI = Tc(ao) && Tc(ao.createElement);
        wc.exports = function(e) {
            return PI ? ao.createElement(e) : {}
        }
    });
    var uo = c((XH, xc) => {
        var qI = Rt(),
            MI = Wt(),
            DI = so();
        xc.exports = !qI && !MI(function() {
            return Object.defineProperty(DI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var co = c(Ac => {
        var FI = Rt(),
            GI = hn(),
            UI = yu(),
            kI = Wi(),
            VI = wr(),
            HI = oo(),
            WI = bt(),
            XI = uo(),
            Oc = Object.getOwnPropertyDescriptor;
        Ac.f = FI ? Oc : function(t, r) {
            if (t = VI(t), r = HI(r), XI) try {
                return Oc(t, r)
            } catch {}
            if (WI(t, r)) return kI(!GI(UI.f, t, r), t[r])
        }
    });
    var Or = c((jH, Cc) => {
        var Sc = ye(),
            BI = Xt(),
            jI = Sc.String,
            zI = Sc.TypeError;
        Cc.exports = function(e) {
            if (BI(e)) return e;
            throw zI(jI(e) + " is not an object")
        }
    });
    var Ar = c(Nc => {
        var KI = ye(),
            YI = Rt(),
            $I = uo(),
            Rc = Or(),
            QI = oo(),
            ZI = KI.TypeError,
            Lc = Object.defineProperty;
        Nc.f = YI ? Lc : function(t, r, n) {
            if (Rc(t), r = QI(r), Rc(n), $I) try {
                return Lc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw ZI("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var bn = c((KH, Pc) => {
        var JI = Rt(),
            eT = Ar(),
            tT = Wi();
        Pc.exports = JI ? function(e, t, r) {
            return eT.f(e, t, tT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var fo = c((YH, qc) => {
        var rT = Ye(),
            nT = at(),
            lo = En(),
            iT = rT(Function.toString);
        nT(lo.inspectSource) || (lo.inspectSource = function(e) {
            return iT(e)
        });
        qc.exports = lo.inspectSource
    });
    var Fc = c(($H, Dc) => {
        var oT = ye(),
            aT = at(),
            sT = fo(),
            Mc = oT.WeakMap;
        Dc.exports = aT(Mc) && /native code/.test(sT(Mc))
    });
    var po = c((QH, Uc) => {
        var uT = ro(),
            cT = no(),
            Gc = uT("keys");
        Uc.exports = function(e) {
            return Gc[e] || (Gc[e] = cT(e))
        }
    });
    var _n = c((ZH, kc) => {
        kc.exports = {}
    });
    var jc = c((JH, Bc) => {
        var lT = Fc(),
            Xc = ye(),
            vo = Ye(),
            fT = Xt(),
            dT = bn(),
            go = bt(),
            ho = En(),
            pT = po(),
            vT = _n(),
            Vc = "Object already initialized",
            yo = Xc.TypeError,
            gT = Xc.WeakMap,
            In, Sr, Tn, hT = function(e) {
                return Tn(e) ? Sr(e) : In(e, {})
            },
            mT = function(e) {
                return function(t) {
                    var r;
                    if (!fT(t) || (r = Sr(t)).type !== e) throw yo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        lT || ho.state ? (_t = ho.state || (ho.state = new gT), Hc = vo(_t.get), mo = vo(_t.has), Wc = vo(_t.set), In = function(e, t) {
            if (mo(_t, e)) throw new yo(Vc);
            return t.facade = e, Wc(_t, e, t), t
        }, Sr = function(e) {
            return Hc(_t, e) || {}
        }, Tn = function(e) {
            return mo(_t, e)
        }) : (Nt = pT("state"), vT[Nt] = !0, In = function(e, t) {
            if (go(e, Nt)) throw new yo(Vc);
            return t.facade = e, dT(e, Nt, t), t
        }, Sr = function(e) {
            return go(e, Nt) ? e[Nt] : {}
        }, Tn = function(e) {
            return go(e, Nt)
        });
        var _t, Hc, mo, Wc, Nt;
        Bc.exports = {
            set: In,
            get: Sr,
            has: Tn,
            enforce: hT,
            getterFor: mT
        }
    });
    var Yc = c((eW, Kc) => {
        var Eo = Rt(),
            yT = bt(),
            zc = Function.prototype,
            ET = Eo && Object.getOwnPropertyDescriptor,
            bo = yT(zc, "name"),
            bT = bo && function() {}.name === "something",
            _T = bo && (!Eo || Eo && ET(zc, "name").configurable);
        Kc.exports = {
            EXISTS: bo,
            PROPER: bT,
            CONFIGURABLE: _T
        }
    });
    var el = c((tW, Jc) => {
        var IT = ye(),
            $c = at(),
            TT = bt(),
            Qc = bn(),
            wT = yn(),
            xT = fo(),
            Zc = jc(),
            OT = Yc().CONFIGURABLE,
            AT = Zc.get,
            ST = Zc.enforce,
            CT = String(String).split("String");
        (Jc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                u;
            if ($c(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!TT(r, "name") || OT && r.name !== s) && Qc(r, "name", s), u = ST(r), u.source || (u.source = CT.join(typeof s == "string" ? s : ""))), e === IT) {
                o ? e[t] = r : wT(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Qc(e, t, r)
        })(Function.prototype, "toString", function() {
            return $c(this) && AT(this).source || xT(this)
        })
    });
    var _o = c((rW, tl) => {
        var RT = Math.ceil,
            LT = Math.floor;
        tl.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? LT : RT)(t)
        }
    });
    var nl = c((nW, rl) => {
        var NT = _o(),
            PT = Math.max,
            qT = Math.min;
        rl.exports = function(e, t) {
            var r = NT(e);
            return r < 0 ? PT(r + t, 0) : qT(r, t)
        }
    });
    var ol = c((iW, il) => {
        var MT = _o(),
            DT = Math.min;
        il.exports = function(e) {
            return e > 0 ? DT(MT(e), 9007199254740991) : 0
        }
    });
    var sl = c((oW, al) => {
        var FT = ol();
        al.exports = function(e) {
            return FT(e.length)
        }
    });
    var Io = c((aW, cl) => {
        var GT = wr(),
            UT = nl(),
            kT = sl(),
            ul = function(e) {
                return function(t, r, n) {
                    var i = GT(t),
                        o = kT(i),
                        a = UT(n, o),
                        s;
                    if (e && r != r) {
                        for (; o > a;)
                            if (s = i[a++], s != s) return !0
                    } else
                        for (; o > a; a++)
                            if ((e || a in i) && i[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        cl.exports = {
            includes: ul(!0),
            indexOf: ul(!1)
        }
    });
    var wo = c((sW, fl) => {
        var VT = Ye(),
            To = bt(),
            HT = wr(),
            WT = Io().indexOf,
            XT = _n(),
            ll = VT([].push);
        fl.exports = function(e, t) {
            var r = HT(e),
                n = 0,
                i = [],
                o;
            for (o in r) !To(XT, o) && To(r, o) && ll(i, o);
            for (; t.length > n;) To(r, o = t[n++]) && (~WT(i, o) || ll(i, o));
            return i
        }
    });
    var wn = c((uW, dl) => {
        dl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var vl = c(pl => {
        var BT = wo(),
            jT = wn(),
            zT = jT.concat("length", "prototype");
        pl.f = Object.getOwnPropertyNames || function(t) {
            return BT(t, zT)
        }
    });
    var hl = c(gl => {
        gl.f = Object.getOwnPropertySymbols
    });
    var yl = c((fW, ml) => {
        var KT = xr(),
            YT = Ye(),
            $T = vl(),
            QT = hl(),
            ZT = Or(),
            JT = YT([].concat);
        ml.exports = KT("Reflect", "ownKeys") || function(t) {
            var r = $T.f(ZT(t)),
                n = QT.f;
            return n ? JT(r, n(t)) : r
        }
    });
    var bl = c((dW, El) => {
        var ew = bt(),
            tw = yl(),
            rw = co(),
            nw = Ar();
        El.exports = function(e, t) {
            for (var r = tw(t), n = nw.f, i = rw.f, o = 0; o < r.length; o++) {
                var a = r[o];
                ew(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var Il = c((pW, _l) => {
        var iw = Wt(),
            ow = at(),
            aw = /#|\.prototype\./,
            Cr = function(e, t) {
                var r = uw[sw(e)];
                return r == lw ? !0 : r == cw ? !1 : ow(t) ? iw(t) : !!t
            },
            sw = Cr.normalize = function(e) {
                return String(e).replace(aw, ".").toLowerCase()
            },
            uw = Cr.data = {},
            cw = Cr.NATIVE = "N",
            lw = Cr.POLYFILL = "P";
        _l.exports = Cr
    });
    var wl = c((vW, Tl) => {
        var xo = ye(),
            fw = co().f,
            dw = bn(),
            pw = el(),
            vw = yn(),
            gw = bl(),
            hw = Il();
        Tl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, a, s, u, d, h;
            if (n ? a = xo : i ? a = xo[r] || vw(r, {}) : a = (xo[r] || {}).prototype, a)
                for (s in t) {
                    if (d = t[s], e.noTargetGet ? (h = fw(a, s), u = h && h.value) : u = a[s], o = hw(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
                        if (typeof d == typeof u) continue;
                        gw(d, u)
                    }(e.sham || u && u.sham) && dw(d, "sham", !0), pw(a, s, d, e)
                }
        }
    });
    var Ol = c((gW, xl) => {
        var mw = wo(),
            yw = wn();
        xl.exports = Object.keys || function(t) {
            return mw(t, yw)
        }
    });
    var Sl = c((hW, Al) => {
        var Ew = Rt(),
            bw = Ar(),
            _w = Or(),
            Iw = wr(),
            Tw = Ol();
        Al.exports = Ew ? Object.defineProperties : function(t, r) {
            _w(t);
            for (var n = Iw(r), i = Tw(r), o = i.length, a = 0, s; o > a;) bw.f(t, s = i[a++], n[s]);
            return t
        }
    });
    var Rl = c((mW, Cl) => {
        var ww = xr();
        Cl.exports = ww("document", "documentElement")
    });
    var Gl = c((yW, Fl) => {
        var xw = Or(),
            Ow = Sl(),
            Ll = wn(),
            Aw = _n(),
            Sw = Rl(),
            Cw = so(),
            Rw = po(),
            Nl = ">",
            Pl = "<",
            Ao = "prototype",
            So = "script",
            Ml = Rw("IE_PROTO"),
            Oo = function() {},
            Dl = function(e) {
                return Pl + So + Nl + e + Pl + "/" + So + Nl
            },
            ql = function(e) {
                e.write(Dl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            Lw = function() {
                var e = Cw("iframe"),
                    t = "java" + So + ":",
                    r;
                return e.style.display = "none", Sw.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Dl("document.F=Object")), r.close(), r.F
            },
            xn, On = function() {
                try {
                    xn = new ActiveXObject("htmlfile")
                } catch {}
                On = typeof document < "u" ? document.domain && xn ? ql(xn) : Lw() : ql(xn);
                for (var e = Ll.length; e--;) delete On[Ao][Ll[e]];
                return On()
            };
        Aw[Ml] = !0;
        Fl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Oo[Ao] = xw(t), n = new Oo, Oo[Ao] = null, n[Ml] = t) : n = On(), r === void 0 ? n : Ow(n, r)
        }
    });
    var kl = c((EW, Ul) => {
        var Nw = io(),
            Pw = Gl(),
            qw = Ar(),
            Co = Nw("unscopables"),
            Ro = Array.prototype;
        Ro[Co] == null && qw.f(Ro, Co, {
            configurable: !0,
            value: Pw(null)
        });
        Ul.exports = function(e) {
            Ro[Co][e] = !0
        }
    });
    var Vl = c(() => {
        "use strict";
        var Mw = wl(),
            Dw = Io().includes,
            Fw = kl();
        Mw({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return Dw(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Fw("includes")
    });
    var Wl = c((IW, Hl) => {
        var Gw = ye(),
            Uw = Ye();
        Hl.exports = function(e, t) {
            return Uw(Gw[e].prototype[t])
        }
    });
    var Bl = c((TW, Xl) => {
        Vl();
        var kw = Wl();
        Xl.exports = kw("Array", "includes")
    });
    var zl = c((wW, jl) => {
        var Vw = Bl();
        jl.exports = Vw
    });
    var Yl = c((xW, Kl) => {
        var Hw = zl();
        Kl.exports = Hw
    });
    var Lo = c((OW, $l) => {
        var Ww = typeof global == "object" && global && global.Object === Object && global;
        $l.exports = Ww
    });
    var Qe = c((AW, Ql) => {
        var Xw = Lo(),
            Bw = typeof self == "object" && self && self.Object === Object && self,
            jw = Xw || Bw || Function("return this")();
        Ql.exports = jw
    });
    var jt = c((SW, Zl) => {
        var zw = Qe(),
            Kw = zw.Symbol;
        Zl.exports = Kw
    });
    var rf = c((CW, tf) => {
        var Jl = jt(),
            ef = Object.prototype,
            Yw = ef.hasOwnProperty,
            $w = ef.toString,
            Rr = Jl ? Jl.toStringTag : void 0;

        function Qw(e) {
            var t = Yw.call(e, Rr),
                r = e[Rr];
            try {
                e[Rr] = void 0;
                var n = !0
            } catch {}
            var i = $w.call(e);
            return n && (t ? e[Rr] = r : delete e[Rr]), i
        }
        tf.exports = Qw
    });
    var of = c((RW, nf) => {
        var Zw = Object.prototype,
            Jw = Zw.toString;

        function ex(e) {
            return Jw.call(e)
        }
        nf.exports = ex
    });
    var It = c((LW, uf) => {
        var af = jt(),
            tx = rf(),
            rx = of (),
            nx = "[object Null]",
            ix = "[object Undefined]",
            sf = af ? af.toStringTag : void 0;

        function ox(e) {
            return e == null ? e === void 0 ? ix : nx : sf && sf in Object(e) ? tx(e) : rx(e)
        }
        uf.exports = ox
    });
    var No = c((NW, cf) => {
        function ax(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        cf.exports = ax
    });
    var Po = c((PW, lf) => {
        var sx = No(),
            ux = sx(Object.getPrototypeOf, Object);
        lf.exports = ux
    });
    var pt = c((qW, ff) => {
        function cx(e) {
            return e != null && typeof e == "object"
        }
        ff.exports = cx
    });
    var qo = c((MW, pf) => {
        var lx = It(),
            fx = Po(),
            dx = pt(),
            px = "[object Object]",
            vx = Function.prototype,
            gx = Object.prototype,
            df = vx.toString,
            hx = gx.hasOwnProperty,
            mx = df.call(Object);

        function yx(e) {
            if (!dx(e) || lx(e) != px) return !1;
            var t = fx(e);
            if (t === null) return !0;
            var r = hx.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && df.call(r) == mx
        }
        pf.exports = yx
    });
    var vf = c(Mo => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        Mo.default = Ex;

        function Ex(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var gf = c((Fo, Do) => {
        "use strict";
        Object.defineProperty(Fo, "__esModule", {
            value: !0
        });
        var bx = vf(),
            _x = Ix(bx);

        function Ix(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var zt;
        typeof self < "u" ? zt = self : typeof window < "u" ? zt = window : typeof global < "u" ? zt = global : typeof Do < "u" ? zt = Do : zt = Function("return this")();
        var Tx = (0, _x.default)(zt);
        Fo.default = Tx
    });
    var Go = c(Lr => {
        "use strict";
        Lr.__esModule = !0;
        Lr.ActionTypes = void 0;
        Lr.default = Ef;
        var wx = qo(),
            xx = yf(wx),
            Ox = gf(),
            hf = yf(Ox);

        function yf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var mf = Lr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function Ef(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(Ef)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function d() {
                s === a && (s = a.slice())
            }

            function h() {
                return o
            }

            function l(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var A = !0;
                return d(), s.push(_),
                    function() {
                        if (A) {
                            A = !1, d();
                            var N = s.indexOf(_);
                            s.splice(N, 1)
                        }
                    }
            }

            function E(_) {
                if (!(0, xx.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var A = a = s, w = 0; w < A.length; w++) A[w]();
                return _
            }

            function v(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, E({
                    type: mf.INIT
                })
            }

            function g() {
                var _, A = l;
                return _ = {
                    subscribe: function(N) {
                        if (typeof N != "object") throw new TypeError("Expected the observer to be an object.");

                        function R() {
                            N.next && N.next(h())
                        }
                        R();
                        var q = A(R);
                        return {
                            unsubscribe: q
                        }
                    }
                }, _[hf.default] = function() {
                    return this
                }, _
            }
            return E({
                type: mf.INIT
            }), n = {
                dispatch: E,
                subscribe: l,
                getState: h,
                replaceReducer: v
            }, n[hf.default] = g, n
        }
    });
    var ko = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = Ax;

        function Ax(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var If = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = Nx;
        var bf = Go(),
            Sx = qo(),
            UW = _f(Sx),
            Cx = ko(),
            kW = _f(Cx);

        function _f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Rx(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Lx(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: bf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + bf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Nx(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                Lx(r)
            } catch (u) {
                s = u
            }
            return function() {
                var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    h = arguments[1];
                if (s) throw s;
                if (!1) var l;
                for (var E = !1, v = {}, g = 0; g < o.length; g++) {
                    var _ = o[g],
                        A = r[_],
                        w = d[_],
                        N = A(w, h);
                    if (typeof N > "u") {
                        var R = Rx(_, h);
                        throw new Error(R)
                    }
                    v[_] = N, E = E || N !== w
                }
                return E ? v : d
            }
        }
    });
    var wf = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = Px;

        function Tf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function Px(e, t) {
            if (typeof e == "function") return Tf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = Tf(a, t))
            }
            return n
        }
    });
    var Xo = c(Wo => {
        "use strict";
        Wo.__esModule = !0;
        Wo.default = qx;

        function qx() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var xf = c(Bo => {
        "use strict";
        Bo.__esModule = !0;
        var Mx = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Bo.default = Ux;
        var Dx = Xo(),
            Fx = Gx(Dx);

        function Gx(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Ux() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a),
                        u = s.dispatch,
                        d = [],
                        h = {
                            getState: s.getState,
                            dispatch: function(E) {
                                return u(E)
                            }
                        };
                    return d = t.map(function(l) {
                        return l(h)
                    }), u = Fx.default.apply(void 0, d)(s.dispatch), Mx({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var jo = c(We => {
        "use strict";
        We.__esModule = !0;
        We.compose = We.applyMiddleware = We.bindActionCreators = We.combineReducers = We.createStore = void 0;
        var kx = Go(),
            Vx = Kt(kx),
            Hx = If(),
            Wx = Kt(Hx),
            Xx = wf(),
            Bx = Kt(Xx),
            jx = xf(),
            zx = Kt(jx),
            Kx = Xo(),
            Yx = Kt(Kx),
            $x = ko(),
            BW = Kt($x);

        function Kt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        We.createStore = Vx.default;
        We.combineReducers = Wx.default;
        We.bindActionCreators = Bx.default;
        We.applyMiddleware = zx.default;
        We.compose = Yx.default
    });
    var Ze, zo, st, Qx, Zx, An, Jx, Ko = me(() => {
        "use strict";
        Ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, zo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, st = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Qx = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, Zx = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, An = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, Jx = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Ue, eO, Sn = me(() => {
        "use strict";
        Ue = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, eO = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var tO, Of = me(() => {
        "use strict";
        tO = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var rO, nO, iO, oO, aO, sO, uO, Yo, Af = me(() => {
        "use strict";
        Sn();
        ({
            TRANSFORM_MOVE: rO,
            TRANSFORM_SCALE: nO,
            TRANSFORM_ROTATE: iO,
            TRANSFORM_SKEW: oO,
            STYLE_SIZE: aO,
            STYLE_FILTER: sO,
            STYLE_FONT_VARIATION: uO
        } = Ue), Yo = {
            [rO]: !0,
            [nO]: !0,
            [iO]: !0,
            [oO]: !0,
            [aO]: !0,
            [sO]: !0,
            [uO]: !0
        }
    });
    var Te = {};
    Ge(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => xO,
        IX2_ANIMATION_FRAME_CHANGED: () => EO,
        IX2_CLEAR_REQUESTED: () => hO,
        IX2_ELEMENT_STATE_CHANGED: () => wO,
        IX2_EVENT_LISTENER_ADDED: () => mO,
        IX2_EVENT_STATE_CHANGED: () => yO,
        IX2_INSTANCE_ADDED: () => _O,
        IX2_INSTANCE_REMOVED: () => TO,
        IX2_INSTANCE_STARTED: () => IO,
        IX2_MEDIA_QUERIES_DEFINED: () => AO,
        IX2_PARAMETER_CHANGED: () => bO,
        IX2_PLAYBACK_REQUESTED: () => vO,
        IX2_PREVIEW_REQUESTED: () => pO,
        IX2_RAW_DATA_IMPORTED: () => cO,
        IX2_SESSION_INITIALIZED: () => lO,
        IX2_SESSION_STARTED: () => fO,
        IX2_SESSION_STOPPED: () => dO,
        IX2_STOP_REQUESTED: () => gO,
        IX2_TEST_FRAME_RENDERED: () => SO,
        IX2_VIEWPORT_WIDTH_CHANGED: () => OO
    });
    var cO, lO, fO, dO, pO, vO, gO, hO, mO, yO, EO, bO, _O, IO, TO, wO, xO, OO, AO, SO, Sf = me(() => {
        "use strict";
        cO = "IX2_RAW_DATA_IMPORTED", lO = "IX2_SESSION_INITIALIZED", fO = "IX2_SESSION_STARTED", dO = "IX2_SESSION_STOPPED", pO = "IX2_PREVIEW_REQUESTED", vO = "IX2_PLAYBACK_REQUESTED", gO = "IX2_STOP_REQUESTED", hO = "IX2_CLEAR_REQUESTED", mO = "IX2_EVENT_LISTENER_ADDED", yO = "IX2_EVENT_STATE_CHANGED", EO = "IX2_ANIMATION_FRAME_CHANGED", bO = "IX2_PARAMETER_CHANGED", _O = "IX2_INSTANCE_ADDED", IO = "IX2_INSTANCE_STARTED", TO = "IX2_INSTANCE_REMOVED", wO = "IX2_ELEMENT_STATE_CHANGED", xO = "IX2_ACTION_LIST_PLAYBACK_CHANGED", OO = "IX2_VIEWPORT_WIDTH_CHANGED", AO = "IX2_MEDIA_QUERIES_DEFINED", SO = "IX2_TEST_FRAME_RENDERED"
    });
    var Ce = {};
    Ge(Ce, {
        ABSTRACT_NODE: () => OA,
        AUTO: () => gA,
        BACKGROUND: () => cA,
        BACKGROUND_COLOR: () => uA,
        BAR_DELIMITER: () => yA,
        BORDER_COLOR: () => lA,
        BOUNDARY_SELECTOR: () => PO,
        CHILDREN: () => EA,
        COLON_DELIMITER: () => mA,
        COLOR: () => fA,
        COMMA_DELIMITER: () => hA,
        CONFIG_UNIT: () => VO,
        CONFIG_VALUE: () => FO,
        CONFIG_X_UNIT: () => GO,
        CONFIG_X_VALUE: () => qO,
        CONFIG_Y_UNIT: () => UO,
        CONFIG_Y_VALUE: () => MO,
        CONFIG_Z_UNIT: () => kO,
        CONFIG_Z_VALUE: () => DO,
        DISPLAY: () => dA,
        FILTER: () => iA,
        FLEX: () => pA,
        FONT_VARIATION_SETTINGS: () => oA,
        HEIGHT: () => sA,
        HTML_ELEMENT: () => wA,
        IMMEDIATE_CHILDREN: () => bA,
        IX2_ID_DELIMITER: () => CO,
        OPACITY: () => nA,
        PARENT: () => IA,
        PLAIN_OBJECT: () => xA,
        PRESERVE_3D: () => TA,
        RENDER_GENERAL: () => SA,
        RENDER_PLUGIN: () => RA,
        RENDER_STYLE: () => CA,
        RENDER_TRANSFORM: () => AA,
        ROTATE_X: () => QO,
        ROTATE_Y: () => ZO,
        ROTATE_Z: () => JO,
        SCALE_3D: () => $O,
        SCALE_X: () => zO,
        SCALE_Y: () => KO,
        SCALE_Z: () => YO,
        SIBLINGS: () => _A,
        SKEW: () => eA,
        SKEW_X: () => tA,
        SKEW_Y: () => rA,
        TRANSFORM: () => HO,
        TRANSLATE_3D: () => jO,
        TRANSLATE_X: () => WO,
        TRANSLATE_Y: () => XO,
        TRANSLATE_Z: () => BO,
        WF_PAGE: () => RO,
        WIDTH: () => aA,
        WILL_CHANGE: () => vA,
        W_MOD_IX: () => NO,
        W_MOD_JS: () => LO
    });
    var CO, RO, LO, NO, PO, qO, MO, DO, FO, GO, UO, kO, VO, HO, WO, XO, BO, jO, zO, KO, YO, $O, QO, ZO, JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, vA, gA, hA, mA, yA, EA, bA, _A, IA, TA, wA, xA, OA, AA, SA, CA, RA, Cf = me(() => {
        "use strict";
        CO = "|", RO = "data-wf-page", LO = "w-mod-js", NO = "w-mod-ix", PO = ".w-dyn-item", qO = "xValue", MO = "yValue", DO = "zValue", FO = "value", GO = "xUnit", UO = "yUnit", kO = "zUnit", VO = "unit", HO = "transform", WO = "translateX", XO = "translateY", BO = "translateZ", jO = "translate3d", zO = "scaleX", KO = "scaleY", YO = "scaleZ", $O = "scale3d", QO = "rotateX", ZO = "rotateY", JO = "rotateZ", eA = "skew", tA = "skewX", rA = "skewY", nA = "opacity", iA = "filter", oA = "font-variation-settings", aA = "width", sA = "height", uA = "backgroundColor", cA = "background", lA = "borderColor", fA = "color", dA = "display", pA = "flex", vA = "willChange", gA = "AUTO", hA = ",", mA = ":", yA = "|", EA = "CHILDREN", bA = "IMMEDIATE_CHILDREN", _A = "SIBLINGS", IA = "PARENT", TA = "preserve-3d", wA = "HTML_ELEMENT", xA = "PLAIN_OBJECT", OA = "ABSTRACT_NODE", AA = "RENDER_TRANSFORM", SA = "RENDER_GENERAL", CA = "RENDER_STYLE", RA = "RENDER_PLUGIN"
    });
    var Rf = {};
    Ge(Rf, {
        ActionAppliesTo: () => eO,
        ActionTypeConsts: () => Ue,
        EventAppliesTo: () => zo,
        EventBasedOn: () => st,
        EventContinuousMouseAxes: () => Qx,
        EventLimitAffectedElements: () => Zx,
        EventTypeConsts: () => Ze,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => tO,
        QuickEffectDirectionConsts: () => Jx,
        QuickEffectIds: () => An,
        ReducedMotionTypes: () => Yo
    });
    var ke = me(() => {
        "use strict";
        Ko();
        Sn();
        Of();
        Af();
        Sf();
        Cf();
        Sn();
        Ko()
    });
    var LA, Lf, Nf = me(() => {
        "use strict";
        ke();
        ({
            IX2_RAW_DATA_IMPORTED: LA
        } = Te), Lf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case LA:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Yt = c(be => {
        "use strict";
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        var NA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        be.clone = Rn;
        be.addLast = Mf;
        be.addFirst = Df;
        be.removeLast = Ff;
        be.removeFirst = Gf;
        be.insert = Uf;
        be.removeAt = kf;
        be.replaceAt = Vf;
        be.getIn = Ln;
        be.set = Nn;
        be.setIn = Pn;
        be.update = Wf;
        be.updateIn = Xf;
        be.merge = Bf;
        be.mergeDeep = jf;
        be.mergeIn = zf;
        be.omit = Kf;
        be.addDefaults = Yf;
        var Pf = "INVALID_ARGS";

        function qf(e) {
            throw new Error(e)
        }

        function $o(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var PA = {}.hasOwnProperty;

        function Rn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = $o(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ve(e, t, r) {
            var n = r;
            n == null && qf(Pf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var d = a[u];
                if (d != null) {
                    var h = $o(d);
                    if (h.length)
                        for (var l = 0; l <= h.length; l++) {
                            var E = h[l];
                            if (!(e && n[E] !== void 0)) {
                                var v = d[E];
                                t && Cn(n[E]) && Cn(v) && (v = Ve(e, t, n[E], v)), !(v === void 0 || v === n[E]) && (i || (i = !0, n = Rn(n)), n[E] = v)
                            }
                        }
                }
            }
            return n
        }

        function Cn(e) {
            var t = typeof e > "u" ? "undefined" : NA(e);
            return e != null && (t === "object" || t === "function")
        }

        function Mf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Df(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Ff(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Gf(e) {
            return e.length ? e.slice(1) : e
        }

        function Uf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function kf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Vf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Ln(e, t) {
            if (!Array.isArray(t) && qf(Pf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Nn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Rn(i);
            return o[t] = r, o
        }

        function Hf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = Cn(e) && Cn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Hf(a, t, r, n + 1)
            }
            return Nn(e, o, i)
        }

        function Pn(e, t, r) {
            return t.length ? Hf(e, t, r, 0) : r
        }

        function Wf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Nn(e, t, i)
        }

        function Xf(e, t, r) {
            var n = Ln(e, t),
                i = r(n);
            return Pn(e, t, i)
        }

        function Bf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ve(!1, !1, e, t, r, n, i, o)
        }

        function jf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ve(!1, !0, e, t, r, n, i, o)
        }

        function zf(e, t, r, n, i, o, a) {
            var s = Ln(e, t);
            s == null && (s = {});
            for (var u = void 0, d = arguments.length, h = Array(d > 7 ? d - 7 : 0), l = 7; l < d; l++) h[l - 7] = arguments[l];
            return h.length ? u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(h)) : u = Ve(!1, !1, s, r, n, i, o, a), Pn(e, t, u)
        }

        function Kf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (PA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = $o(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Yf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ve(!0, !1, e, t, r, n, i, o)
        }
        var qA = {
            clone: Rn,
            addLast: Mf,
            addFirst: Df,
            removeLast: Ff,
            removeFirst: Gf,
            insert: Uf,
            removeAt: kf,
            replaceAt: Vf,
            getIn: Ln,
            set: Nn,
            setIn: Pn,
            update: Wf,
            updateIn: Xf,
            merge: Bf,
            mergeDeep: jf,
            mergeIn: zf,
            omit: Kf,
            addDefaults: Yf
        };
        be.default = qA
    });
    var Qf, MA, DA, FA, GA, UA, $f, Zf, Jf = me(() => {
        "use strict";
        ke();
        Qf = fe(Yt()), {
            IX2_PREVIEW_REQUESTED: MA,
            IX2_PLAYBACK_REQUESTED: DA,
            IX2_STOP_REQUESTED: FA,
            IX2_CLEAR_REQUESTED: GA
        } = Te, UA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, $f = Object.create(null, {
            [MA]: {
                value: "preview"
            },
            [DA]: {
                value: "playback"
            },
            [FA]: {
                value: "stop"
            },
            [GA]: {
                value: "clear"
            }
        }), Zf = (e = UA, t) => {
            if (t.type in $f) {
                let r = [$f[t.type]];
                return (0, Qf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Pe, kA, VA, HA, WA, XA, BA, jA, zA, KA, YA, ed, $A, td, rd = me(() => {
        "use strict";
        ke();
        Pe = fe(Yt()), {
            IX2_SESSION_INITIALIZED: kA,
            IX2_SESSION_STARTED: VA,
            IX2_TEST_FRAME_RENDERED: HA,
            IX2_SESSION_STOPPED: WA,
            IX2_EVENT_LISTENER_ADDED: XA,
            IX2_EVENT_STATE_CHANGED: BA,
            IX2_ANIMATION_FRAME_CHANGED: jA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: zA,
            IX2_VIEWPORT_WIDTH_CHANGED: KA,
            IX2_MEDIA_QUERIES_DEFINED: YA
        } = Te, ed = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, $A = 20, td = (e = ed, t) => {
            switch (t.type) {
                case kA:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Pe.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case VA:
                    return (0, Pe.set)(e, "active", !0);
                case HA:
                    {
                        let {
                            payload: {
                                step: r = $A
                            }
                        } = t;
                        return (0, Pe.set)(e, "tick", e.tick + r)
                    }
                case WA:
                    return ed;
                case jA:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Pe.set)(e, "tick", r)
                    }
                case XA:
                    {
                        let r = (0, Pe.addLast)(e.eventListeners, t.payload);
                        return (0, Pe.set)(e, "eventListeners", r)
                    }
                case BA:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Pe.setIn)(e, ["eventState", r], n)
                    }
                case zA:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Pe.setIn)(e, ["playbackState", r], n)
                    }
                case KA:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: s,
                                min: u,
                                max: d
                            } = n[a];
                            if (r >= u && r <= d) {
                                o = s;
                                break
                            }
                        }
                        return (0, Pe.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case YA:
                    return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var id = c((fX, nd) => {
        function QA() {
            this.__data__ = [], this.size = 0
        }
        nd.exports = QA
    });
    var qn = c((dX, od) => {
        function ZA(e, t) {
            return e === t || e !== e && t !== t
        }
        od.exports = ZA
    });
    var Nr = c((pX, ad) => {
        var JA = qn();

        function eS(e, t) {
            for (var r = e.length; r--;)
                if (JA(e[r][0], t)) return r;
            return -1
        }
        ad.exports = eS
    });
    var ud = c((vX, sd) => {
        var tS = Nr(),
            rS = Array.prototype,
            nS = rS.splice;

        function iS(e) {
            var t = this.__data__,
                r = tS(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : nS.call(t, r, 1), --this.size, !0
        }
        sd.exports = iS
    });
    var ld = c((gX, cd) => {
        var oS = Nr();

        function aS(e) {
            var t = this.__data__,
                r = oS(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        cd.exports = aS
    });
    var dd = c((hX, fd) => {
        var sS = Nr();

        function uS(e) {
            return sS(this.__data__, e) > -1
        }
        fd.exports = uS
    });
    var vd = c((mX, pd) => {
        var cS = Nr();

        function lS(e, t) {
            var r = this.__data__,
                n = cS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        pd.exports = lS
    });
    var Pr = c((yX, gd) => {
        var fS = id(),
            dS = ud(),
            pS = ld(),
            vS = dd(),
            gS = vd();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = fS;
        $t.prototype.delete = dS;
        $t.prototype.get = pS;
        $t.prototype.has = vS;
        $t.prototype.set = gS;
        gd.exports = $t
    });
    var md = c((EX, hd) => {
        var hS = Pr();

        function mS() {
            this.__data__ = new hS, this.size = 0
        }
        hd.exports = mS
    });
    var Ed = c((bX, yd) => {
        function yS(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        yd.exports = yS
    });
    var _d = c((_X, bd) => {
        function ES(e) {
            return this.__data__.get(e)
        }
        bd.exports = ES
    });
    var Td = c((IX, Id) => {
        function bS(e) {
            return this.__data__.has(e)
        }
        Id.exports = bS
    });
    var ut = c((TX, wd) => {
        function _S(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        wd.exports = _S
    });
    var Qo = c((wX, xd) => {
        var IS = It(),
            TS = ut(),
            wS = "[object AsyncFunction]",
            xS = "[object Function]",
            OS = "[object GeneratorFunction]",
            AS = "[object Proxy]";

        function SS(e) {
            if (!TS(e)) return !1;
            var t = IS(e);
            return t == xS || t == OS || t == wS || t == AS
        }
        xd.exports = SS
    });
    var Ad = c((xX, Od) => {
        var CS = Qe(),
            RS = CS["__core-js_shared__"];
        Od.exports = RS
    });
    var Rd = c((OX, Cd) => {
        var Zo = Ad(),
            Sd = function() {
                var e = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function LS(e) {
            return !!Sd && Sd in e
        }
        Cd.exports = LS
    });
    var Jo = c((AX, Ld) => {
        var NS = Function.prototype,
            PS = NS.toString;

        function qS(e) {
            if (e != null) {
                try {
                    return PS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Ld.exports = qS
    });
    var Pd = c((SX, Nd) => {
        var MS = Qo(),
            DS = Rd(),
            FS = ut(),
            GS = Jo(),
            US = /[\\^$.*+?()[\]{}|]/g,
            kS = /^\[object .+?Constructor\]$/,
            VS = Function.prototype,
            HS = Object.prototype,
            WS = VS.toString,
            XS = HS.hasOwnProperty,
            BS = RegExp("^" + WS.call(XS).replace(US, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function jS(e) {
            if (!FS(e) || DS(e)) return !1;
            var t = MS(e) ? BS : kS;
            return t.test(GS(e))
        }
        Nd.exports = jS
    });
    var Md = c((CX, qd) => {
        function zS(e, t) {
            return e ? .[t]
        }
        qd.exports = zS
    });
    var Tt = c((RX, Dd) => {
        var KS = Pd(),
            YS = Md();

        function $S(e, t) {
            var r = YS(e, t);
            return KS(r) ? r : void 0
        }
        Dd.exports = $S
    });
    var Mn = c((LX, Fd) => {
        var QS = Tt(),
            ZS = Qe(),
            JS = QS(ZS, "Map");
        Fd.exports = JS
    });
    var qr = c((NX, Gd) => {
        var e0 = Tt(),
            t0 = e0(Object, "create");
        Gd.exports = t0
    });
    var Vd = c((PX, kd) => {
        var Ud = qr();

        function r0() {
            this.__data__ = Ud ? Ud(null) : {}, this.size = 0
        }
        kd.exports = r0
    });
    var Wd = c((qX, Hd) => {
        function n0(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Hd.exports = n0
    });
    var Bd = c((MX, Xd) => {
        var i0 = qr(),
            o0 = "__lodash_hash_undefined__",
            a0 = Object.prototype,
            s0 = a0.hasOwnProperty;

        function u0(e) {
            var t = this.__data__;
            if (i0) {
                var r = t[e];
                return r === o0 ? void 0 : r
            }
            return s0.call(t, e) ? t[e] : void 0
        }
        Xd.exports = u0
    });
    var zd = c((DX, jd) => {
        var c0 = qr(),
            l0 = Object.prototype,
            f0 = l0.hasOwnProperty;

        function d0(e) {
            var t = this.__data__;
            return c0 ? t[e] !== void 0 : f0.call(t, e)
        }
        jd.exports = d0
    });
    var Yd = c((FX, Kd) => {
        var p0 = qr(),
            v0 = "__lodash_hash_undefined__";

        function g0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = p0 && t === void 0 ? v0 : t, this
        }
        Kd.exports = g0
    });
    var Qd = c((GX, $d) => {
        var h0 = Vd(),
            m0 = Wd(),
            y0 = Bd(),
            E0 = zd(),
            b0 = Yd();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = h0;
        Qt.prototype.delete = m0;
        Qt.prototype.get = y0;
        Qt.prototype.has = E0;
        Qt.prototype.set = b0;
        $d.exports = Qt
    });
    var ep = c((UX, Jd) => {
        var Zd = Qd(),
            _0 = Pr(),
            I0 = Mn();

        function T0() {
            this.size = 0, this.__data__ = {
                hash: new Zd,
                map: new(I0 || _0),
                string: new Zd
            }
        }
        Jd.exports = T0
    });
    var rp = c((kX, tp) => {
        function w0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        tp.exports = w0
    });
    var Mr = c((VX, np) => {
        var x0 = rp();

        function O0(e, t) {
            var r = e.__data__;
            return x0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        np.exports = O0
    });
    var op = c((HX, ip) => {
        var A0 = Mr();

        function S0(e) {
            var t = A0(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        ip.exports = S0
    });
    var sp = c((WX, ap) => {
        var C0 = Mr();

        function R0(e) {
            return C0(this, e).get(e)
        }
        ap.exports = R0
    });
    var cp = c((XX, up) => {
        var L0 = Mr();

        function N0(e) {
            return L0(this, e).has(e)
        }
        up.exports = N0
    });
    var fp = c((BX, lp) => {
        var P0 = Mr();

        function q0(e, t) {
            var r = P0(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        lp.exports = q0
    });
    var Dn = c((jX, dp) => {
        var M0 = ep(),
            D0 = op(),
            F0 = sp(),
            G0 = cp(),
            U0 = fp();

        function Zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = M0;
        Zt.prototype.delete = D0;
        Zt.prototype.get = F0;
        Zt.prototype.has = G0;
        Zt.prototype.set = U0;
        dp.exports = Zt
    });
    var vp = c((zX, pp) => {
        var k0 = Pr(),
            V0 = Mn(),
            H0 = Dn(),
            W0 = 200;

        function X0(e, t) {
            var r = this.__data__;
            if (r instanceof k0) {
                var n = r.__data__;
                if (!V0 || n.length < W0 - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new H0(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        pp.exports = X0
    });
    var ea = c((KX, gp) => {
        var B0 = Pr(),
            j0 = md(),
            z0 = Ed(),
            K0 = _d(),
            Y0 = Td(),
            $0 = vp();

        function Jt(e) {
            var t = this.__data__ = new B0(e);
            this.size = t.size
        }
        Jt.prototype.clear = j0;
        Jt.prototype.delete = z0;
        Jt.prototype.get = K0;
        Jt.prototype.has = Y0;
        Jt.prototype.set = $0;
        gp.exports = Jt
    });
    var mp = c((YX, hp) => {
        var Q0 = "__lodash_hash_undefined__";

        function Z0(e) {
            return this.__data__.set(e, Q0), this
        }
        hp.exports = Z0
    });
    var Ep = c(($X, yp) => {
        function J0(e) {
            return this.__data__.has(e)
        }
        yp.exports = J0
    });
    var _p = c((QX, bp) => {
        var eC = Dn(),
            tC = mp(),
            rC = Ep();

        function Fn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new eC; ++t < r;) this.add(e[t])
        }
        Fn.prototype.add = Fn.prototype.push = tC;
        Fn.prototype.has = rC;
        bp.exports = Fn
    });
    var Tp = c((ZX, Ip) => {
        function nC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Ip.exports = nC
    });
    var xp = c((JX, wp) => {
        function iC(e, t) {
            return e.has(t)
        }
        wp.exports = iC
    });
    var ta = c((eB, Op) => {
        var oC = _p(),
            aC = Tp(),
            sC = xp(),
            uC = 1,
            cC = 2;

        function lC(e, t, r, n, i, o) {
            var a = r & uC,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var d = o.get(e),
                h = o.get(t);
            if (d && h) return d == t && h == e;
            var l = -1,
                E = !0,
                v = r & cC ? new oC : void 0;
            for (o.set(e, t), o.set(t, e); ++l < s;) {
                var g = e[l],
                    _ = t[l];
                if (n) var A = a ? n(_, g, l, t, e, o) : n(g, _, l, e, t, o);
                if (A !== void 0) {
                    if (A) continue;
                    E = !1;
                    break
                }
                if (v) {
                    if (!aC(t, function(w, N) {
                            if (!sC(v, N) && (g === w || i(g, w, r, n, o))) return v.push(N)
                        })) {
                        E = !1;
                        break
                    }
                } else if (!(g === _ || i(g, _, r, n, o))) {
                    E = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), E
        }
        Op.exports = lC
    });
    var Sp = c((tB, Ap) => {
        var fC = Qe(),
            dC = fC.Uint8Array;
        Ap.exports = dC
    });
    var Rp = c((rB, Cp) => {
        function pC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Cp.exports = pC
    });
    var Np = c((nB, Lp) => {
        function vC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Lp.exports = vC
    });
    var Fp = c((iB, Dp) => {
        var Pp = jt(),
            qp = Sp(),
            gC = qn(),
            hC = ta(),
            mC = Rp(),
            yC = Np(),
            EC = 1,
            bC = 2,
            _C = "[object Boolean]",
            IC = "[object Date]",
            TC = "[object Error]",
            wC = "[object Map]",
            xC = "[object Number]",
            OC = "[object RegExp]",
            AC = "[object Set]",
            SC = "[object String]",
            CC = "[object Symbol]",
            RC = "[object ArrayBuffer]",
            LC = "[object DataView]",
            Mp = Pp ? Pp.prototype : void 0,
            ra = Mp ? Mp.valueOf : void 0;

        function NC(e, t, r, n, i, o, a) {
            switch (r) {
                case LC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case RC:
                    return !(e.byteLength != t.byteLength || !o(new qp(e), new qp(t)));
                case _C:
                case IC:
                case xC:
                    return gC(+e, +t);
                case TC:
                    return e.name == t.name && e.message == t.message;
                case OC:
                case SC:
                    return e == t + "";
                case wC:
                    var s = mC;
                case AC:
                    var u = n & EC;
                    if (s || (s = yC), e.size != t.size && !u) return !1;
                    var d = a.get(e);
                    if (d) return d == t;
                    n |= bC, a.set(e, t);
                    var h = hC(s(e), s(t), n, i, o, a);
                    return a.delete(e), h;
                case CC:
                    if (ra) return ra.call(e) == ra.call(t)
            }
            return !1
        }
        Dp.exports = NC
    });
    var Gn = c((oB, Gp) => {
        function PC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Gp.exports = PC
    });
    var xe = c((aB, Up) => {
        var qC = Array.isArray;
        Up.exports = qC
    });
    var na = c((sB, kp) => {
        var MC = Gn(),
            DC = xe();

        function FC(e, t, r) {
            var n = t(e);
            return DC(e) ? n : MC(n, r(e))
        }
        kp.exports = FC
    });
    var Hp = c((uB, Vp) => {
        function GC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Vp.exports = GC
    });
    var ia = c((cB, Wp) => {
        function UC() {
            return []
        }
        Wp.exports = UC
    });
    var oa = c((lB, Bp) => {
        var kC = Hp(),
            VC = ia(),
            HC = Object.prototype,
            WC = HC.propertyIsEnumerable,
            Xp = Object.getOwnPropertySymbols,
            XC = Xp ? function(e) {
                return e == null ? [] : (e = Object(e), kC(Xp(e), function(t) {
                    return WC.call(e, t)
                }))
            } : VC;
        Bp.exports = XC
    });
    var zp = c((fB, jp) => {
        function BC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        jp.exports = BC
    });
    var Yp = c((dB, Kp) => {
        var jC = It(),
            zC = pt(),
            KC = "[object Arguments]";

        function YC(e) {
            return zC(e) && jC(e) == KC
        }
        Kp.exports = YC
    });
    var Dr = c((pB, Zp) => {
        var $p = Yp(),
            $C = pt(),
            Qp = Object.prototype,
            QC = Qp.hasOwnProperty,
            ZC = Qp.propertyIsEnumerable,
            JC = $p(function() {
                return arguments
            }()) ? $p : function(e) {
                return $C(e) && QC.call(e, "callee") && !ZC.call(e, "callee")
            };
        Zp.exports = JC
    });
    var ev = c((vB, Jp) => {
        function eR() {
            return !1
        }
        Jp.exports = eR
    });
    var Un = c((Fr, er) => {
        var tR = Qe(),
            rR = ev(),
            nv = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
            tv = nv && typeof er == "object" && er && !er.nodeType && er,
            nR = tv && tv.exports === nv,
            rv = nR ? tR.Buffer : void 0,
            iR = rv ? rv.isBuffer : void 0,
            oR = iR || rR;
        er.exports = oR
    });
    var kn = c((gB, iv) => {
        var aR = 9007199254740991,
            sR = /^(?:0|[1-9]\d*)$/;

        function uR(e, t) {
            var r = typeof e;
            return t = t ? ? aR, !!t && (r == "number" || r != "symbol" && sR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        iv.exports = uR
    });
    var Vn = c((hB, ov) => {
        var cR = 9007199254740991;

        function lR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cR
        }
        ov.exports = lR
    });
    var sv = c((mB, av) => {
        var fR = It(),
            dR = Vn(),
            pR = pt(),
            vR = "[object Arguments]",
            gR = "[object Array]",
            hR = "[object Boolean]",
            mR = "[object Date]",
            yR = "[object Error]",
            ER = "[object Function]",
            bR = "[object Map]",
            _R = "[object Number]",
            IR = "[object Object]",
            TR = "[object RegExp]",
            wR = "[object Set]",
            xR = "[object String]",
            OR = "[object WeakMap]",
            AR = "[object ArrayBuffer]",
            SR = "[object DataView]",
            CR = "[object Float32Array]",
            RR = "[object Float64Array]",
            LR = "[object Int8Array]",
            NR = "[object Int16Array]",
            PR = "[object Int32Array]",
            qR = "[object Uint8Array]",
            MR = "[object Uint8ClampedArray]",
            DR = "[object Uint16Array]",
            FR = "[object Uint32Array]",
            he = {};
        he[CR] = he[RR] = he[LR] = he[NR] = he[PR] = he[qR] = he[MR] = he[DR] = he[FR] = !0;
        he[vR] = he[gR] = he[AR] = he[hR] = he[SR] = he[mR] = he[yR] = he[ER] = he[bR] = he[_R] = he[IR] = he[TR] = he[wR] = he[xR] = he[OR] = !1;

        function GR(e) {
            return pR(e) && dR(e.length) && !!he[fR(e)]
        }
        av.exports = GR
    });
    var cv = c((yB, uv) => {
        function UR(e) {
            return function(t) {
                return e(t)
            }
        }
        uv.exports = UR
    });
    var fv = c((Gr, tr) => {
        var kR = Lo(),
            lv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
            Ur = lv && typeof tr == "object" && tr && !tr.nodeType && tr,
            VR = Ur && Ur.exports === lv,
            aa = VR && kR.process,
            HR = function() {
                try {
                    var e = Ur && Ur.require && Ur.require("util").types;
                    return e || aa && aa.binding && aa.binding("util")
                } catch {}
            }();
        tr.exports = HR
    });
    var Hn = c((EB, vv) => {
        var WR = sv(),
            XR = cv(),
            dv = fv(),
            pv = dv && dv.isTypedArray,
            BR = pv ? XR(pv) : WR;
        vv.exports = BR
    });
    var sa = c((bB, gv) => {
        var jR = zp(),
            zR = Dr(),
            KR = xe(),
            YR = Un(),
            $R = kn(),
            QR = Hn(),
            ZR = Object.prototype,
            JR = ZR.hasOwnProperty;

        function eL(e, t) {
            var r = KR(e),
                n = !r && zR(e),
                i = !r && !n && YR(e),
                o = !r && !n && !i && QR(e),
                a = r || n || i || o,
                s = a ? jR(e.length, String) : [],
                u = s.length;
            for (var d in e)(t || JR.call(e, d)) && !(a && (d == "length" || i && (d == "offset" || d == "parent") || o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || $R(d, u))) && s.push(d);
            return s
        }
        gv.exports = eL
    });
    var Wn = c((_B, hv) => {
        var tL = Object.prototype;

        function rL(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || tL;
            return e === r
        }
        hv.exports = rL
    });
    var yv = c((IB, mv) => {
        var nL = No(),
            iL = nL(Object.keys, Object);
        mv.exports = iL
    });
    var Xn = c((TB, Ev) => {
        var oL = Wn(),
            aL = yv(),
            sL = Object.prototype,
            uL = sL.hasOwnProperty;

        function cL(e) {
            if (!oL(e)) return aL(e);
            var t = [];
            for (var r in Object(e)) uL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        Ev.exports = cL
    });
    var Pt = c((wB, bv) => {
        var lL = Qo(),
            fL = Vn();

        function dL(e) {
            return e != null && fL(e.length) && !lL(e)
        }
        bv.exports = dL
    });
    var kr = c((xB, _v) => {
        var pL = sa(),
            vL = Xn(),
            gL = Pt();

        function hL(e) {
            return gL(e) ? pL(e) : vL(e)
        }
        _v.exports = hL
    });
    var Tv = c((OB, Iv) => {
        var mL = na(),
            yL = oa(),
            EL = kr();

        function bL(e) {
            return mL(e, EL, yL)
        }
        Iv.exports = bL
    });
    var Ov = c((AB, xv) => {
        var wv = Tv(),
            _L = 1,
            IL = Object.prototype,
            TL = IL.hasOwnProperty;

        function wL(e, t, r, n, i, o) {
            var a = r & _L,
                s = wv(e),
                u = s.length,
                d = wv(t),
                h = d.length;
            if (u != h && !a) return !1;
            for (var l = u; l--;) {
                var E = s[l];
                if (!(a ? E in t : TL.call(t, E))) return !1
            }
            var v = o.get(e),
                g = o.get(t);
            if (v && g) return v == t && g == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var A = a; ++l < u;) {
                E = s[l];
                var w = e[E],
                    N = t[E];
                if (n) var R = a ? n(N, w, E, t, e, o) : n(w, N, E, e, t, o);
                if (!(R === void 0 ? w === N || i(w, N, r, n, o) : R)) {
                    _ = !1;
                    break
                }
                A || (A = E == "constructor")
            }
            if (_ && !A) {
                var q = e.constructor,
                    F = t.constructor;
                q != F && "constructor" in e && "constructor" in t && !(typeof q == "function" && q instanceof q && typeof F == "function" && F instanceof F) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        xv.exports = wL
    });
    var Sv = c((SB, Av) => {
        var xL = Tt(),
            OL = Qe(),
            AL = xL(OL, "DataView");
        Av.exports = AL
    });
    var Rv = c((CB, Cv) => {
        var SL = Tt(),
            CL = Qe(),
            RL = SL(CL, "Promise");
        Cv.exports = RL
    });
    var Nv = c((RB, Lv) => {
        var LL = Tt(),
            NL = Qe(),
            PL = LL(NL, "Set");
        Lv.exports = PL
    });
    var ua = c((LB, Pv) => {
        var qL = Tt(),
            ML = Qe(),
            DL = qL(ML, "WeakMap");
        Pv.exports = DL
    });
    var Bn = c((NB, kv) => {
        var ca = Sv(),
            la = Mn(),
            fa = Rv(),
            da = Nv(),
            pa = ua(),
            Uv = It(),
            rr = Jo(),
            qv = "[object Map]",
            FL = "[object Object]",
            Mv = "[object Promise]",
            Dv = "[object Set]",
            Fv = "[object WeakMap]",
            Gv = "[object DataView]",
            GL = rr(ca),
            UL = rr(la),
            kL = rr(fa),
            VL = rr(da),
            HL = rr(pa),
            qt = Uv;
        (ca && qt(new ca(new ArrayBuffer(1))) != Gv || la && qt(new la) != qv || fa && qt(fa.resolve()) != Mv || da && qt(new da) != Dv || pa && qt(new pa) != Fv) && (qt = function(e) {
            var t = Uv(e),
                r = t == FL ? e.constructor : void 0,
                n = r ? rr(r) : "";
            if (n) switch (n) {
                case GL:
                    return Gv;
                case UL:
                    return qv;
                case kL:
                    return Mv;
                case VL:
                    return Dv;
                case HL:
                    return Fv
            }
            return t
        });
        kv.exports = qt
    });
    var Kv = c((PB, zv) => {
        var va = ea(),
            WL = ta(),
            XL = Fp(),
            BL = Ov(),
            Vv = Bn(),
            Hv = xe(),
            Wv = Un(),
            jL = Hn(),
            zL = 1,
            Xv = "[object Arguments]",
            Bv = "[object Array]",
            jn = "[object Object]",
            KL = Object.prototype,
            jv = KL.hasOwnProperty;

        function YL(e, t, r, n, i, o) {
            var a = Hv(e),
                s = Hv(t),
                u = a ? Bv : Vv(e),
                d = s ? Bv : Vv(t);
            u = u == Xv ? jn : u, d = d == Xv ? jn : d;
            var h = u == jn,
                l = d == jn,
                E = u == d;
            if (E && Wv(e)) {
                if (!Wv(t)) return !1;
                a = !0, h = !1
            }
            if (E && !h) return o || (o = new va), a || jL(e) ? WL(e, t, r, n, i, o) : XL(e, t, u, r, n, i, o);
            if (!(r & zL)) {
                var v = h && jv.call(e, "__wrapped__"),
                    g = l && jv.call(t, "__wrapped__");
                if (v || g) {
                    var _ = v ? e.value() : e,
                        A = g ? t.value() : t;
                    return o || (o = new va), i(_, A, r, n, o)
                }
            }
            return E ? (o || (o = new va), BL(e, t, r, n, i, o)) : !1
        }
        zv.exports = YL
    });
    var ga = c((qB, Qv) => {
        var $L = Kv(),
            Yv = pt();

        function $v(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Yv(e) && !Yv(t) ? e !== e && t !== t : $L(e, t, r, n, $v, i)
        }
        Qv.exports = $v
    });
    var Jv = c((MB, Zv) => {
        var QL = ea(),
            ZL = ga(),
            JL = 1,
            eN = 2;

        function tN(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0],
                    d = e[u],
                    h = s[1];
                if (a && s[2]) {
                    if (d === void 0 && !(u in e)) return !1
                } else {
                    var l = new QL;
                    if (n) var E = n(d, h, u, e, t, l);
                    if (!(E === void 0 ? ZL(h, d, JL | eN, n, l) : E)) return !1
                }
            }
            return !0
        }
        Zv.exports = tN
    });
    var ha = c((DB, eg) => {
        var rN = ut();

        function nN(e) {
            return e === e && !rN(e)
        }
        eg.exports = nN
    });
    var rg = c((FB, tg) => {
        var iN = ha(),
            oN = kr();

        function aN(e) {
            for (var t = oN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, iN(i)]
            }
            return t
        }
        tg.exports = aN
    });
    var ma = c((GB, ng) => {
        function sN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        ng.exports = sN
    });
    var og = c((UB, ig) => {
        var uN = Jv(),
            cN = rg(),
            lN = ma();

        function fN(e) {
            var t = cN(e);
            return t.length == 1 && t[0][2] ? lN(t[0][0], t[0][1]) : function(r) {
                return r === e || uN(r, e, t)
            }
        }
        ig.exports = fN
    });
    var Vr = c((kB, ag) => {
        var dN = It(),
            pN = pt(),
            vN = "[object Symbol]";

        function gN(e) {
            return typeof e == "symbol" || pN(e) && dN(e) == vN
        }
        ag.exports = gN
    });
    var zn = c((VB, sg) => {
        var hN = xe(),
            mN = Vr(),
            yN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            EN = /^\w*$/;

        function bN(e, t) {
            if (hN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || mN(e) ? !0 : EN.test(e) || !yN.test(e) || t != null && e in Object(t)
        }
        sg.exports = bN
    });
    var lg = c((HB, cg) => {
        var ug = Dn(),
            _N = "Expected a function";

        function ya(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(_N);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(ya.Cache || ug), r
        }
        ya.Cache = ug;
        cg.exports = ya
    });
    var dg = c((WB, fg) => {
        var IN = lg(),
            TN = 500;

        function wN(e) {
            var t = IN(e, function(n) {
                    return r.size === TN && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        fg.exports = wN
    });
    var vg = c((XB, pg) => {
        var xN = dg(),
            ON = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            AN = /\\(\\)?/g,
            SN = xN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(ON, function(r, n, i, o) {
                    t.push(i ? o.replace(AN, "$1") : n || r)
                }), t
            });
        pg.exports = SN
    });
    var Ea = c((BB, gg) => {
        function CN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        gg.exports = CN
    });
    var _g = c((jB, bg) => {
        var hg = jt(),
            RN = Ea(),
            LN = xe(),
            NN = Vr(),
            PN = 1 / 0,
            mg = hg ? hg.prototype : void 0,
            yg = mg ? mg.toString : void 0;

        function Eg(e) {
            if (typeof e == "string") return e;
            if (LN(e)) return RN(e, Eg) + "";
            if (NN(e)) return yg ? yg.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -PN ? "-0" : t
        }
        bg.exports = Eg
    });
    var Tg = c((zB, Ig) => {
        var qN = _g();

        function MN(e) {
            return e == null ? "" : qN(e)
        }
        Ig.exports = MN
    });
    var Hr = c((KB, wg) => {
        var DN = xe(),
            FN = zn(),
            GN = vg(),
            UN = Tg();

        function kN(e, t) {
            return DN(e) ? e : FN(e, t) ? [e] : GN(UN(e))
        }
        wg.exports = kN
    });
    var nr = c((YB, xg) => {
        var VN = Vr(),
            HN = 1 / 0;

        function WN(e) {
            if (typeof e == "string" || VN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -HN ? "-0" : t
        }
        xg.exports = WN
    });
    var Kn = c(($B, Og) => {
        var XN = Hr(),
            BN = nr();

        function jN(e, t) {
            t = XN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[BN(t[r++])];
            return r && r == n ? e : void 0
        }
        Og.exports = jN
    });
    var Yn = c((QB, Ag) => {
        var zN = Kn();

        function KN(e, t, r) {
            var n = e == null ? void 0 : zN(e, t);
            return n === void 0 ? r : n
        }
        Ag.exports = KN
    });
    var Cg = c((ZB, Sg) => {
        function YN(e, t) {
            return e != null && t in Object(e)
        }
        Sg.exports = YN
    });
    var Lg = c((JB, Rg) => {
        var $N = Hr(),
            QN = Dr(),
            ZN = xe(),
            JN = kn(),
            eP = Vn(),
            tP = nr();

        function rP(e, t, r) {
            t = $N(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = tP(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && eP(i) && JN(a, i) && (ZN(e) || QN(e)))
        }
        Rg.exports = rP
    });
    var Pg = c((e5, Ng) => {
        var nP = Cg(),
            iP = Lg();

        function oP(e, t) {
            return e != null && iP(e, t, nP)
        }
        Ng.exports = oP
    });
    var Mg = c((t5, qg) => {
        var aP = ga(),
            sP = Yn(),
            uP = Pg(),
            cP = zn(),
            lP = ha(),
            fP = ma(),
            dP = nr(),
            pP = 1,
            vP = 2;

        function gP(e, t) {
            return cP(e) && lP(t) ? fP(dP(e), t) : function(r) {
                var n = sP(r, e);
                return n === void 0 && n === t ? uP(r, e) : aP(t, n, pP | vP)
            }
        }
        qg.exports = gP
    });
    var $n = c((r5, Dg) => {
        function hP(e) {
            return e
        }
        Dg.exports = hP
    });
    var ba = c((n5, Fg) => {
        function mP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Fg.exports = mP
    });
    var Ug = c((i5, Gg) => {
        var yP = Kn();

        function EP(e) {
            return function(t) {
                return yP(t, e)
            }
        }
        Gg.exports = EP
    });
    var Vg = c((o5, kg) => {
        var bP = ba(),
            _P = Ug(),
            IP = zn(),
            TP = nr();

        function wP(e) {
            return IP(e) ? bP(TP(e)) : _P(e)
        }
        kg.exports = wP
    });
    var wt = c((a5, Hg) => {
        var xP = og(),
            OP = Mg(),
            AP = $n(),
            SP = xe(),
            CP = Vg();

        function RP(e) {
            return typeof e == "function" ? e : e == null ? AP : typeof e == "object" ? SP(e) ? OP(e[0], e[1]) : xP(e) : CP(e)
        }
        Hg.exports = RP
    });
    var _a = c((s5, Wg) => {
        var LP = wt(),
            NP = Pt(),
            PP = kr();

        function qP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!NP(t)) {
                    var o = LP(r, 3);
                    t = PP(t), r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Wg.exports = qP
    });
    var Ia = c((u5, Xg) => {
        function MP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Xg.exports = MP
    });
    var jg = c((c5, Bg) => {
        var DP = /\s/;

        function FP(e) {
            for (var t = e.length; t-- && DP.test(e.charAt(t)););
            return t
        }
        Bg.exports = FP
    });
    var Kg = c((l5, zg) => {
        var GP = jg(),
            UP = /^\s+/;

        function kP(e) {
            return e && e.slice(0, GP(e) + 1).replace(UP, "")
        }
        zg.exports = kP
    });
    var Qn = c((f5, Qg) => {
        var VP = Kg(),
            Yg = ut(),
            HP = Vr(),
            $g = 0 / 0,
            WP = /^[-+]0x[0-9a-f]+$/i,
            XP = /^0b[01]+$/i,
            BP = /^0o[0-7]+$/i,
            jP = parseInt;

        function zP(e) {
            if (typeof e == "number") return e;
            if (HP(e)) return $g;
            if (Yg(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Yg(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = VP(e);
            var r = XP.test(e);
            return r || BP.test(e) ? jP(e.slice(2), r ? 2 : 8) : WP.test(e) ? $g : +e
        }
        Qg.exports = zP
    });
    var eh = c((d5, Jg) => {
        var KP = Qn(),
            Zg = 1 / 0,
            YP = 17976931348623157e292;

        function $P(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = KP(e), e === Zg || e === -Zg) {
                var t = e < 0 ? -1 : 1;
                return t * YP
            }
            return e === e ? e : 0
        }
        Jg.exports = $P
    });
    var Ta = c((p5, th) => {
        var QP = eh();

        function ZP(e) {
            var t = QP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        th.exports = ZP
    });
    var nh = c((v5, rh) => {
        var JP = Ia(),
            eq = wt(),
            tq = Ta(),
            rq = Math.max;

        function nq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : tq(r);
            return i < 0 && (i = rq(n + i, 0)), JP(e, eq(t, 3), i)
        }
        rh.exports = nq
    });
    var wa = c((g5, ih) => {
        var iq = _a(),
            oq = nh(),
            aq = iq(oq);
        ih.exports = aq
    });
    var sh = {};
    Ge(sh, {
        ELEMENT_MATCHES: () => sq,
        FLEX_PREFIXED: () => xa,
        IS_BROWSER_ENV: () => Je,
        TRANSFORM_PREFIXED: () => xt,
        TRANSFORM_STYLE_PREFIXED: () => Jn,
        withBrowser: () => Zn
    });
    var ah, Je, Zn, sq, xa, xt, oh, Jn, ei = me(() => {
        "use strict";
        ah = fe(wa()), Je = typeof window < "u", Zn = (e, t) => Je ? e() : t, sq = Zn(() => (0, ah.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), xa = Zn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), xt = Zn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), oh = xt.split("transform")[0], Jn = oh ? oh + "TransformStyle" : "transformStyle"
    });
    var Oa = c((h5, dh) => {
        var uq = 4,
            cq = .001,
            lq = 1e-7,
            fq = 10,
            Wr = 11,
            ti = 1 / (Wr - 1),
            dq = typeof Float32Array == "function";

        function uh(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function ch(e, t) {
            return 3 * t - 6 * e
        }

        function lh(e) {
            return 3 * e
        }

        function ri(e, t, r) {
            return ((uh(t, r) * e + ch(t, r)) * e + lh(t)) * e
        }

        function fh(e, t, r) {
            return 3 * uh(t, r) * e * e + 2 * ch(t, r) * e + lh(t)
        }

        function pq(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = ri(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > lq && ++s < fq);
            return a
        }

        function vq(e, t, r, n) {
            for (var i = 0; i < uq; ++i) {
                var o = fh(t, r, n);
                if (o === 0) return t;
                var a = ri(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        dh.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = dq ? new Float32Array(Wr) : new Array(Wr);
            if (t !== r || n !== i)
                for (var a = 0; a < Wr; ++a) o[a] = ri(a * ti, t, n);

            function s(u) {
                for (var d = 0, h = 1, l = Wr - 1; h !== l && o[h] <= u; ++h) d += ti;
                --h;
                var E = (u - o[h]) / (o[h + 1] - o[h]),
                    v = d + E * ti,
                    g = fh(v, t, n);
                return g >= cq ? vq(u, v, t, n) : g === 0 ? v : pq(u, d, d + ti, t, n)
            }
            return function(d) {
                return t === r && n === i ? d : d === 0 ? 0 : d === 1 ? 1 : ri(s(d), r, i)
            }
        }
    });
    var Br = {};
    Ge(Br, {
        bounce: () => $q,
        bouncePast: () => Qq,
        ease: () => gq,
        easeIn: () => hq,
        easeInOut: () => yq,
        easeOut: () => mq,
        inBack: () => Vq,
        inCirc: () => Fq,
        inCubic: () => Iq,
        inElastic: () => Xq,
        inExpo: () => qq,
        inOutBack: () => Wq,
        inOutCirc: () => Uq,
        inOutCubic: () => wq,
        inOutElastic: () => jq,
        inOutExpo: () => Dq,
        inOutQuad: () => _q,
        inOutQuart: () => Aq,
        inOutQuint: () => Rq,
        inOutSine: () => Pq,
        inQuad: () => Eq,
        inQuart: () => xq,
        inQuint: () => Sq,
        inSine: () => Lq,
        outBack: () => Hq,
        outBounce: () => kq,
        outCirc: () => Gq,
        outCubic: () => Tq,
        outElastic: () => Bq,
        outExpo: () => Mq,
        outQuad: () => bq,
        outQuart: () => Oq,
        outQuint: () => Cq,
        outSine: () => Nq,
        swingFrom: () => Kq,
        swingFromTo: () => zq,
        swingTo: () => Yq
    });

    function Eq(e) {
        return Math.pow(e, 2)
    }

    function bq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function _q(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function Iq(e) {
        return Math.pow(e, 3)
    }

    function Tq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function wq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function xq(e) {
        return Math.pow(e, 4)
    }

    function Oq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function Aq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Sq(e) {
        return Math.pow(e, 5)
    }

    function Cq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Rq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Lq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Nq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Pq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function qq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Mq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Dq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Fq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Gq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Uq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Vq(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function Hq(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Wq(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Xq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Bq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function jq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function zq(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Kq(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function Yq(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function $q(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Qq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Xr, vt, gq, hq, mq, yq, Aa = me(() => {
        "use strict";
        Xr = fe(Oa()), vt = 1.70158, gq = (0, Xr.default)(.25, .1, .25, 1), hq = (0, Xr.default)(.42, 0, 1, 1), mq = (0, Xr.default)(0, 0, .58, 1), yq = (0, Xr.default)(.42, 0, .58, 1)
    });
    var vh = {};
    Ge(vh, {
        applyEasing: () => Jq,
        createBezierEasing: () => Zq,
        optimizeFloat: () => jr
    });

    function jr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Zq(e) {
        return (0, ph.default)(...e)
    }

    function Jq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : jr(r ? t > 0 ? r(t) : t : t > 0 && e && Br[e] ? Br[e](t) : t)
    }
    var ph, Sa = me(() => {
        "use strict";
        Aa();
        ph = fe(Oa())
    });
    var mh = {};
    Ge(mh, {
        createElementState: () => hh,
        ixElements: () => pM,
        mergeActionState: () => Ca
    });

    function hh(e, t, r, n, i) {
        let o = r === eM ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, ir.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Ca(e, t, r, n, i) {
        let o = gM(i);
        return (0, ir.mergeIn)(e, [t, dM, r], n, o)
    }

    function gM(e) {
        let {
            config: t
        } = e;
        return vM.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (r[o] = s), r
        }, {})
    }
    var ir, y5, eM, E5, tM, rM, nM, iM, oM, aM, sM, uM, cM, lM, fM, gh, dM, pM, vM, yh = me(() => {
        "use strict";
        ir = fe(Yt());
        ke();
        ({
            HTML_ELEMENT: y5,
            PLAIN_OBJECT: eM,
            ABSTRACT_NODE: E5,
            CONFIG_X_VALUE: tM,
            CONFIG_Y_VALUE: rM,
            CONFIG_Z_VALUE: nM,
            CONFIG_VALUE: iM,
            CONFIG_X_UNIT: oM,
            CONFIG_Y_UNIT: aM,
            CONFIG_Z_UNIT: sM,
            CONFIG_UNIT: uM
        } = Ce), {
            IX2_SESSION_STOPPED: cM,
            IX2_INSTANCE_ADDED: lM,
            IX2_ELEMENT_STATE_CHANGED: fM
        } = Te, gh = {}, dM = "refState", pM = (e = gh, t = {}) => {
            switch (t.type) {
                case cM:
                    return gh;
                case lM:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: s
                        } = o,
                        u = e;
                        return (0, ir.getIn)(u, [r, n]) !== n && (u = hh(u, n, a, r, o)),
                        Ca(u, r, s, i, o)
                    }
                case fM:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Ca(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        vM = [
            [tM, oM],
            [rM, aM],
            [nM, sM],
            [iM, uM]
        ]
    });
    var Eh = c(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        var hM = e => e.value;
        Oe.getPluginConfig = hM;
        var mM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Oe.getPluginDuration = mM;
        var yM = e => e || {
            value: 0
        };
        Oe.getPluginOrigin = yM;
        var EM = e => ({
            value: e.value
        });
        Oe.getPluginDestination = EM;
        var bM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Oe.createPluginInstance = bM;
        var _M = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Oe.renderPlugin = _M;
        var IM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Oe.clearPlugin = IM
    });
    var _h = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var TM = e => document.querySelector(`[data-w-id="${e}"]`),
            wM = () => window.Webflow.require("spline"),
            xM = (e, t) => e.filter(r => !t.includes(r)),
            OM = (e, t) => e.value[t];
        Ae.getPluginConfig = OM;
        var AM = () => null;
        Ae.getPluginDuration = AM;
        var bh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            SM = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = xM(n, o);
                    return a.length ? a.reduce((u, d) => (u[d] = bh[d], u), e) : e
                }
                return n.reduce((o, a) => (o[a] = bh[a], o), {})
            };
        Ae.getPluginOrigin = SM;
        var CM = e => e.value;
        Ae.getPluginDestination = CM;
        var RM = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? TM(n) : null
        };
        Ae.createPluginInstance = RM;
        var LM = (e, t, r) => {
            let n = wM(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                a = s => {
                    if (!s) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && s.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: d
                    } = t;
                    d.positionX != null && (u.position.x = d.positionX), d.positionY != null && (u.position.y = d.positionY), d.positionZ != null && (u.position.z = d.positionZ), d.rotationX != null && (u.rotation.x = d.rotationX), d.rotationY != null && (u.rotation.y = d.rotationY), d.rotationZ != null && (u.rotation.z = d.rotationZ), d.scaleX != null && (u.scale.x = d.scaleX), d.scaleY != null && (u.scale.y = d.scaleY), d.scaleZ != null && (u.scale.z = d.scaleZ)
                };
            i ? a(i.spline) : n.setLoadHandler(e, a)
        };
        Ae.renderPlugin = LM;
        var NM = () => null;
        Ae.clearPlugin = NM
    });
    var Th = c(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
        we.normalizeColor = Ih;
        we.renderPlugin = void 0;

        function Ih(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let a = o.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16), r = parseInt(a[1] + a[1], 16), n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16), r = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10), i = parseFloat(a[3])
            } else if (o.startsWith("rgb")) {
                let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10)
            } else if (o.startsWith("hsla")) {
                let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    u = parseFloat(a[1].replace("%", "")) / 100,
                    d = parseFloat(a[2].replace("%", "")) / 100;
                i = parseFloat(a[3]);
                let h = (1 - Math.abs(2 * d - 1)) * u,
                    l = h * (1 - Math.abs(s / 60 % 2 - 1)),
                    E = d - h / 2,
                    v, g, _;
                s >= 0 && s < 60 ? (v = h, g = l, _ = 0) : s >= 60 && s < 120 ? (v = l, g = h, _ = 0) : s >= 120 && s < 180 ? (v = 0, g = h, _ = l) : s >= 180 && s < 240 ? (v = 0, g = l, _ = h) : s >= 240 && s < 300 ? (v = l, g = 0, _ = h) : (v = h, g = 0, _ = l), t = Math.round((v + E) * 255), r = Math.round((g + E) * 255), n = Math.round((_ + E) * 255)
            } else if (o.startsWith("hsl")) {
                let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    u = parseFloat(a[1].replace("%", "")) / 100,
                    d = parseFloat(a[2].replace("%", "")) / 100,
                    h = (1 - Math.abs(2 * d - 1)) * u,
                    l = h * (1 - Math.abs(s / 60 % 2 - 1)),
                    E = d - h / 2,
                    v, g, _;
                s >= 0 && s < 60 ? (v = h, g = l, _ = 0) : s >= 60 && s < 120 ? (v = l, g = h, _ = 0) : s >= 120 && s < 180 ? (v = 0, g = h, _ = l) : s >= 180 && s < 240 ? (v = 0, g = l, _ = h) : s >= 240 && s < 300 ? (v = l, g = 0, _ = h) : (v = h, g = 0, _ = l), t = Math.round((v + E) * 255), r = Math.round((g + E) * 255), n = Math.round((_ + E) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var PM = (e, t) => e.value[t];
        we.getPluginConfig = PM;
        var qM = () => null;
        we.getPluginDuration = qM;
        var MM = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return Ih(i)
        };
        we.getPluginOrigin = MM;
        var DM = e => e.value;
        we.getPluginDestination = DM;
        var FM = () => null;
        we.createPluginInstance = FM;
        var GM = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: a,
                    red: s,
                    green: u,
                    blue: d,
                    alpha: h
                } = o,
                l;
            a != null && (l = a + i), s != null && d != null && u != null && h != null && (l = `rgba(${s}, ${u}, ${d}, ${h})`), l != null && document.documentElement.style.setProperty(n, l)
        };
        we.renderPlugin = GM;
        var UM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        we.clearPlugin = UM
    });
    var wh = c(ni => {
        "use strict";
        var La = vn().default;
        Object.defineProperty(ni, "__esModule", {
            value: !0
        });
        ni.pluginMethodMap = void 0;
        var Ra = (ke(), nt(Rf)),
            kM = La(Eh()),
            VM = La(_h()),
            HM = La(Th()),
            T5 = ni.pluginMethodMap = new Map([
                [Ra.ActionTypeConsts.PLUGIN_LOTTIE, { ...kM
                }],
                [Ra.ActionTypeConsts.PLUGIN_SPLINE, { ...VM
                }],
                [Ra.ActionTypeConsts.PLUGIN_VARIABLE, { ...HM
                }]
            ])
    });
    var xh = {};
    Ge(xh, {
        clearPlugin: () => Fa,
        createPluginInstance: () => XM,
        getPluginConfig: () => Pa,
        getPluginDestination: () => Ma,
        getPluginDuration: () => WM,
        getPluginOrigin: () => qa,
        isPluginType: () => Mt,
        renderPlugin: () => Da
    });

    function Mt(e) {
        return Na.pluginMethodMap.has(e)
    }
    var Na, Dt, Pa, qa, WM, Ma, XM, Da, Fa, Ga = me(() => {
        "use strict";
        ei();
        Na = fe(wh());
        Dt = e => t => {
            if (!Je) return () => null;
            let r = Na.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Pa = Dt("getPluginConfig"), qa = Dt("getPluginOrigin"), WM = Dt("getPluginDuration"), Ma = Dt("getPluginDestination"), XM = Dt("createPluginInstance"), Da = Dt("renderPlugin"), Fa = Dt("clearPlugin")
    });
    var Ah = c((O5, Oh) => {
        function BM(e, t) {
            return e == null || e !== e ? t : e
        }
        Oh.exports = BM
    });
    var Ch = c((A5, Sh) => {
        function jM(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Sh.exports = jM
    });
    var Lh = c((S5, Rh) => {
        function zM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Rh.exports = zM
    });
    var Ph = c((C5, Nh) => {
        var KM = Lh(),
            YM = KM();
        Nh.exports = YM
    });
    var Ua = c((R5, qh) => {
        var $M = Ph(),
            QM = kr();

        function ZM(e, t) {
            return e && $M(e, t, QM)
        }
        qh.exports = ZM
    });
    var Dh = c((L5, Mh) => {
        var JM = Pt();

        function e1(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!JM(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        Mh.exports = e1
    });
    var ka = c((N5, Fh) => {
        var t1 = Ua(),
            r1 = Dh(),
            n1 = r1(t1);
        Fh.exports = n1
    });
    var Uh = c((P5, Gh) => {
        function i1(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }
        Gh.exports = i1
    });
    var Vh = c((q5, kh) => {
        var o1 = Ch(),
            a1 = ka(),
            s1 = wt(),
            u1 = Uh(),
            c1 = xe();

        function l1(e, t, r) {
            var n = c1(e) ? o1 : u1,
                i = arguments.length < 3;
            return n(e, s1(t, 4), r, i, a1)
        }
        kh.exports = l1
    });
    var Wh = c((M5, Hh) => {
        var f1 = Ia(),
            d1 = wt(),
            p1 = Ta(),
            v1 = Math.max,
            g1 = Math.min;

        function h1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = p1(r), i = r < 0 ? v1(n + i, 0) : g1(i, n - 1)), f1(e, d1(t, 3), i, !0)
        }
        Hh.exports = h1
    });
    var Bh = c((D5, Xh) => {
        var m1 = _a(),
            y1 = Wh(),
            E1 = m1(y1);
        Xh.exports = E1
    });

    function jh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function _1(e, t) {
        if (jh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!b1.call(t, r[i]) || !jh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var b1, Va, zh = me(() => {
        "use strict";
        b1 = Object.prototype.hasOwnProperty;
        Va = _1
    });
    var lm = {};
    Ge(lm, {
        cleanupHTMLElement: () => yD,
        clearAllStyles: () => mD,
        clearObjectCache: () => G1,
        getActionListProgress: () => bD,
        getAffectedElements: () => ja,
        getComputedStyle: () => j1,
        getDestinationValues: () => J1,
        getElementId: () => H1,
        getInstanceId: () => k1,
        getInstanceOrigin: () => Y1,
        getItemConfigByKey: () => Z1,
        getMaxDurationItemIndex: () => cm,
        getNamespacedParameterId: () => TD,
        getRenderType: () => am,
        getStyleProp: () => eD,
        mediaQueriesEqual: () => xD,
        observeStore: () => B1,
        reduceListToGroup: () => _D,
        reifyState: () => W1,
        renderHTMLElement: () => tD,
        shallowEqual: () => Va,
        shouldAllowMediaQuery: () => wD,
        shouldNamespaceEventParameter: () => ID,
        stringifyTarget: () => OD
    });

    function G1() {
        ii.clear()
    }

    function k1() {
        return "i" + U1++
    }

    function H1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + V1++
    }

    function W1({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, ui.default)(e, (a, s) => {
                let {
                    eventTypeId: u
                } = s;
                return a[u] || (a[u] = {}), a[u][s.id] = s, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function B1({
        store: e,
        select: t,
        onChange: r,
        comparator: n = X1
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let d = t(i());
            if (d == null) {
                a();
                return
            }
            n(d, s) || (s = d, r(s, e))
        }
        return a
    }

    function $h(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function ja({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((S, y) => S.concat(ja({
            config: {
                target: y
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: d,
            getSiblingElements: h,
            matchSelector: l,
            elementContains: E,
            isSiblingNode: v
        } = i, {
            target: g
        } = e;
        if (!g) return [];
        let {
            id: _,
            objectId: A,
            selector: w,
            selectorGuids: N,
            appliesTo: R,
            useEventTarget: q
        } = $h(g);
        if (A) return [ii.has(A) ? ii.get(A) : ii.set(A, {}).get(A)];
        if (R === zo.PAGE) {
            let S = a(_);
            return S ? [S] : []
        }
        let D = (t ? .action ? .config ? .affectedElements ? ? {})[_ || w] || {},
            j = !!(D.id || D.selector),
            z, $, te, X = t && s($h(t.target));
        if (j ? (z = D.limitAffectedElements, $ = X, te = s(D)) : $ = te = s({
                id: _,
                selector: w,
                selectorGuids: N
            }), t && q) {
            let S = r && (te || q === !0) ? [r] : u(X);
            if (te) {
                if (q === M1) return u(te).filter(y => S.some(L => E(y, L)));
                if (q === Kh) return u(te).filter(y => S.some(L => E(L, y)));
                if (q === Yh) return u(te).filter(y => S.some(L => v(L, y)))
            }
            return S
        }
        return $ == null || te == null ? [] : Je && n ? u(te).filter(S => n.contains(S)) : z === Kh ? u($, te) : z === q1 ? d(u($)).filter(l(te)) : z === Yh ? h(u($)).filter(l(te)) : u(te)
    }

    function j1({
        element: e,
        actionItem: t
    }) {
        if (!Je) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case cr:
            case lr:
            case fr:
            case dr:
            case li:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function Y1(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (Mt(a)) return qa(a)(t[a], n);
        switch (n.actionTypeId) {
            case ar:
            case sr:
            case ur:
            case $r:
                return t[n.actionTypeId] || za[n.actionTypeId];
            case Qr:
                return z1(t[n.actionTypeId], n.config.filters);
            case Zr:
                return K1(t[n.actionTypeId], n.config.fontVariations);
            case nm:
                return {
                    value: (0, gt.default)(parseFloat(o(e, ai)), 1)
                };
            case cr:
                {
                    let s = o(e, ct),
                        u = o(e, lt),
                        d, h;
                    return n.config.widthUnit === Ot ? d = Qh.test(s) ? parseFloat(s) : parseFloat(r.width) : d = (0, gt.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === Ot ? h = Qh.test(u) ? parseFloat(u) : parseFloat(r.height) : h = (0, gt.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: d,
                        heightValue: h
                    }
                }
            case lr:
            case fr:
            case dr:
                return vD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case li:
                return {
                    value: (0, gt.default)(o(e, si), r.display)
                };
            case F1:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function J1({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Mt(t.actionTypeId)) return Ma(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case ar:
            case sr:
            case ur:
            case $r:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case cr:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: a,
                        heightUnit: s
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: d
                    } = t.config;
                    if (!Je) return {
                        widthValue: u,
                        heightValue: d
                    };
                    if (a === Ot) {
                        let h = n(e, ct);
                        i(e, ct, ""), u = o(e, "offsetWidth"), i(e, ct, h)
                    }
                    if (s === Ot) {
                        let h = n(e, lt);
                        i(e, lt, ""), d = o(e, "offsetHeight"), i(e, lt, h)
                    }
                    return {
                        widthValue: u,
                        heightValue: d
                    }
                }
            case lr:
            case fr:
            case dr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    } = t.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case Qr:
                return t.config.filters.reduce($1, {});
            case Zr:
                return t.config.fontVariations.reduce(Q1, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function am(e) {
        if (/^TRANSFORM_/.test(e)) return tm;
        if (/^STYLE_/.test(e)) return Xa;
        if (/^GENERAL_/.test(e)) return Wa;
        if (/^PLUGIN_/.test(e)) return rm
    }

    function eD(e, t) {
        return e === Xa ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function tD(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case tm:
                return aD(e, t, r, i, a);
            case Xa:
                return gD(e, t, r, i, o, a);
            case Wa:
                return hD(e, i, a);
            case rm:
                {
                    let {
                        actionTypeId: d
                    } = i;
                    if (Mt(d)) return Da(d)(u, t, i)
                }
        }
    }

    function aD(e, t, r, n, i) {
        let o = oD.map(s => {
                let u = za[s],
                    {
                        xValue: d = u.xValue,
                        yValue: h = u.yValue,
                        zValue: l = u.zValue,
                        xUnit: E = "",
                        yUnit: v = "",
                        zUnit: g = ""
                    } = t[s] || {};
                switch (s) {
                    case ar:
                        return `${w1}(${d}${E}, ${h}${v}, ${l}${g})`;
                    case sr:
                        return `${x1}(${d}${E}, ${h}${v}, ${l}${g})`;
                    case ur:
                        return `${O1}(${d}${E}) ${A1}(${h}${v}) ${S1}(${l}${g})`;
                    case $r:
                        return `${C1}(${d}${E}, ${h}${v})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        Ft(e, xt, i), a(e, xt, o), cD(n, r) && a(e, Jn, R1)
    }

    function sD(e, t, r, n) {
        let i = (0, ui.default)(t, (a, s, u) => `${a} ${u}(${s}${iD(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Ft(e, zr, n), o(e, zr, i)
    }

    function uD(e, t, r, n) {
        let i = (0, ui.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        Ft(e, Kr, n), o(e, Kr, i)
    }

    function cD({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === ar && n !== void 0 || e === sr && n !== void 0 || e === ur && (t !== void 0 || r !== void 0)
    }

    function pD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function vD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = Ba[t],
            o = n(e, i),
            a = fD.test(o) ? o : r[i],
            s = pD(dD, a).split(Yr);
        return {
            rValue: (0, gt.default)(parseInt(s[0], 10), 255),
            gValue: (0, gt.default)(parseInt(s[1], 10), 255),
            bValue: (0, gt.default)(parseInt(s[2], 10), 255),
            aValue: (0, gt.default)(parseFloat(s[3]), 1)
        }
    }

    function gD(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case cr:
                {
                    let {
                        widthUnit: s = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: d,
                        heightValue: h
                    } = r;d !== void 0 && (s === Ot && (s = "px"), Ft(e, ct, o), a(e, ct, d + s)),
                    h !== void 0 && (u === Ot && (u = "px"), Ft(e, lt, o), a(e, lt, h + u));
                    break
                }
            case Qr:
                {
                    sD(e, r, n.config, o);
                    break
                }
            case Zr:
                {
                    uD(e, r, n.config, o);
                    break
                }
            case lr:
            case fr:
            case dr:
                {
                    let s = Ba[n.actionTypeId],
                        u = Math.round(r.rValue),
                        d = Math.round(r.gValue),
                        h = Math.round(r.bValue),
                        l = r.aValue;Ft(e, s, o),
                    a(e, s, l >= 1 ? `rgb(${u},${d},${h})` : `rgba(${u},${d},${h},${l})`);
                    break
                }
            default:
                {
                    let {
                        unit: s = ""
                    } = n.config;Ft(e, i, o),
                    a(e, i, r.value + s);
                    break
                }
        }
    }

    function hD(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case li:
                {
                    let {
                        value: i
                    } = t.config;i === L1 && Je ? n(e, si, xa) : n(e, si, i);
                    return
                }
        }
    }

    function Ft(e, t, r) {
        if (!Je) return;
        let n = om[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, or);
        if (!a) {
            o(e, or, n);
            return
        }
        let s = a.split(Yr).map(im);
        s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr))
    }

    function sm(e, t, r) {
        if (!Je) return;
        let n = om[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, or);
        !a || a.indexOf(n) === -1 || o(e, or, a.split(Yr).map(im).filter(s => s !== n).join(Yr))
    }

    function mD({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                d = i[u];
            d && Zh({
                actionList: d,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Zh({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Zh({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Jh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                Jh({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Jh({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            Mt(o) ? s = u => Fa(o)(u, i) : s = um({
                effect: ED,
                actionTypeId: o,
                elementApi: r
            }), ja({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        })
    }

    function yD(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === cr) {
            let {
                config: a
            } = t;
            a.widthUnit === Ot && n(e, ct, ""), a.heightUnit === Ot && n(e, lt, "")
        }
        i(e, or) && um({
            effect: sm,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function ED(e, t, r) {
        let {
            setStyle: n
        } = r;
        sm(e, t, r), n(e, t, ""), t === xt && n(e, Jn, "")
    }

    function cm(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function bD(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return r.forEach((u, d) => {
            if (n && d === 0) return;
            let {
                actionItems: h
            } = u, l = h[cm(h)], {
                config: E,
                actionTypeId: v
            } = l;
            i.id === l.id && (s = a + o);
            let g = am(v) === Wa ? 0 : E.duration;
            a += E.delay + g
        }), a > 0 ? jr(s / a) : 0
    }

    function _D({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, ci.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return n && n.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: d
            }) => d.some(a))
        }), (0, ci.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function ID(e, {
        basedOn: t
    }) {
        return e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === st.ELEMENT
    }

    function TD(e, t) {
        return e + D1 + t
    }

    function wD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function xD(e, t) {
        return Va(e && e.sort(), t && t.sort())
    }

    function OD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ha + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Ha + r + Ha + n
    }
    var gt, ui, oi, ci, I1, T1, w1, x1, O1, A1, S1, C1, R1, L1, ai, zr, Kr, ct, lt, em, N1, P1, Kh, q1, Yh, M1, si, or, Ot, Yr, D1, Ha, tm, Wa, Xa, rm, ar, sr, ur, $r, nm, Qr, Zr, cr, lr, fr, dr, li, F1, im, Ba, om, ii, U1, V1, X1, Qh, z1, K1, $1, Q1, Z1, za, rD, nD, iD, oD, lD, fD, dD, um, fm = me(() => {
        "use strict";
        gt = fe(Ah()), ui = fe(Vh()), oi = fe(Bh()), ci = fe(Yt());
        ke();
        zh();
        Sa();
        Ga();
        ei();
        ({
            BACKGROUND: I1,
            TRANSFORM: T1,
            TRANSLATE_3D: w1,
            SCALE_3D: x1,
            ROTATE_X: O1,
            ROTATE_Y: A1,
            ROTATE_Z: S1,
            SKEW: C1,
            PRESERVE_3D: R1,
            FLEX: L1,
            OPACITY: ai,
            FILTER: zr,
            FONT_VARIATION_SETTINGS: Kr,
            WIDTH: ct,
            HEIGHT: lt,
            BACKGROUND_COLOR: em,
            BORDER_COLOR: N1,
            COLOR: P1,
            CHILDREN: Kh,
            IMMEDIATE_CHILDREN: q1,
            SIBLINGS: Yh,
            PARENT: M1,
            DISPLAY: si,
            WILL_CHANGE: or,
            AUTO: Ot,
            COMMA_DELIMITER: Yr,
            COLON_DELIMITER: D1,
            BAR_DELIMITER: Ha,
            RENDER_TRANSFORM: tm,
            RENDER_GENERAL: Wa,
            RENDER_STYLE: Xa,
            RENDER_PLUGIN: rm
        } = Ce), {
            TRANSFORM_MOVE: ar,
            TRANSFORM_SCALE: sr,
            TRANSFORM_ROTATE: ur,
            TRANSFORM_SKEW: $r,
            STYLE_OPACITY: nm,
            STYLE_FILTER: Qr,
            STYLE_FONT_VARIATION: Zr,
            STYLE_SIZE: cr,
            STYLE_BACKGROUND_COLOR: lr,
            STYLE_BORDER: fr,
            STYLE_TEXT_COLOR: dr,
            GENERAL_DISPLAY: li,
            OBJECT_VALUE: F1
        } = Ue, im = e => e.trim(), Ba = Object.freeze({
            [lr]: em,
            [fr]: N1,
            [dr]: P1
        }), om = Object.freeze({
            [xt]: T1,
            [em]: I1,
            [ai]: ai,
            [zr]: zr,
            [ct]: ct,
            [lt]: lt,
            [Kr]: Kr
        }), ii = new Map;
        U1 = 1;
        V1 = 1;
        X1 = (e, t) => e === t;
        Qh = /px/, z1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = rD[n.type]), r), e || {}), K1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = nD[n.type] || n.defaultValue || 0), r), e || {});
        $1 = (e, t) => (t && (e[t.type] = t.value || 0), e), Q1 = (e, t) => (t && (e[t.type] = t.value || 0), e), Z1 = (e, t, r) => {
            if (Mt(e)) return Pa(e)(r, t);
            switch (e) {
                case Qr:
                    {
                        let n = (0, oi.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Zr:
                    {
                        let n = (0, oi.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        za = {
            [ar]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [sr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [ur]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [$r]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, rD = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), nD = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), iD = (e, t) => {
            let r = (0, oi.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, oD = Object.keys(za);
        lD = "\\(([^)]+)\\)", fD = /^rgb/, dD = RegExp(`rgba?${lD}`);
        um = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case ar:
                case sr:
                case ur:
                case $r:
                    e(n, xt, r);
                    break;
                case Qr:
                    e(n, zr, r);
                    break;
                case Zr:
                    e(n, Kr, r);
                    break;
                case nm:
                    e(n, ai, r);
                    break;
                case cr:
                    e(n, ct, r), e(n, lt, r);
                    break;
                case lr:
                case fr:
                case dr:
                    e(n, Ba[t], r);
                    break;
                case li:
                    e(n, si, r);
                    break
            }
        }
    });
    var Gt = c(qe => {
        "use strict";
        var pr = vn().default;
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.IX2VanillaUtils = qe.IX2VanillaPlugins = qe.IX2ElementsReducer = qe.IX2Easings = qe.IX2EasingUtils = qe.IX2BrowserSupport = void 0;
        var AD = pr((ei(), nt(sh)));
        qe.IX2BrowserSupport = AD;
        var SD = pr((Aa(), nt(Br)));
        qe.IX2Easings = SD;
        var CD = pr((Sa(), nt(vh)));
        qe.IX2EasingUtils = CD;
        var RD = pr((yh(), nt(mh)));
        qe.IX2ElementsReducer = RD;
        var LD = pr((Ga(), nt(xh)));
        qe.IX2VanillaPlugins = LD;
        var ND = pr((fm(), nt(lm)));
        qe.IX2VanillaUtils = ND
    });
    var di, ht, PD, qD, MD, DD, FD, GD, fi, dm, UD, kD, Ka, VD, HD, WD, XD, pm, vm = me(() => {
        "use strict";
        ke();
        di = fe(Gt()), ht = fe(Yt()), {
            IX2_RAW_DATA_IMPORTED: PD,
            IX2_SESSION_STOPPED: qD,
            IX2_INSTANCE_ADDED: MD,
            IX2_INSTANCE_STARTED: DD,
            IX2_INSTANCE_REMOVED: FD,
            IX2_ANIMATION_FRAME_CHANGED: GD
        } = Te, {
            optimizeFloat: fi,
            applyEasing: dm,
            createBezierEasing: UD
        } = di.IX2EasingUtils, {
            RENDER_GENERAL: kD
        } = Ce, {
            getItemConfigByKey: Ka,
            getRenderType: VD,
            getStyleProp: HD
        } = di.IX2VanillaUtils, WD = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: d,
                skipMotion: h,
                skipToValue: l
            } = e, {
                parameters: E
            } = t.payload, v = Math.max(1 - a, .01), g = E[n];
            g == null && (v = 1, g = s);
            let _ = Math.max(g, 0) || 0,
                A = fi(_ - r),
                w = h ? l : fi(r + A * v),
                N = w * 100;
            if (w === r && e.current) return e;
            let R, q, F, D;
            for (let z = 0, {
                    length: $
                } = i; z < $; z++) {
                let {
                    keyframe: te,
                    actionItems: X
                } = i[z];
                if (z === 0 && (R = X[0]), N >= te) {
                    R = X[0];
                    let S = i[z + 1],
                        y = S && N !== te;
                    q = y ? S.actionItems[0] : null, y && (F = te / 100, D = (S.keyframe - te) / 100)
                }
            }
            let j = {};
            if (R && !q)
                for (let z = 0, {
                        length: $
                    } = o; z < $; z++) {
                    let te = o[z];
                    j[te] = Ka(u, te, R.config)
                } else if (R && q && F !== void 0 && D !== void 0) {
                    let z = (w - F) / D,
                        $ = R.config.easing,
                        te = dm($, z, d);
                    for (let X = 0, {
                            length: S
                        } = o; X < S; X++) {
                        let y = o[X],
                            L = Ka(u, y, R.config),
                            J = (Ka(u, y, q.config) - L) * te + L;
                        j[y] = J
                    }
                }
            return (0, ht.merge)(e, {
                position: w,
                current: j
            })
        }, XD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: d,
                destinationKeys: h,
                pluginDuration: l,
                instanceDelay: E,
                customEasingFn: v,
                skipMotion: g
            } = e, _ = u.config.easing, {
                duration: A,
                delay: w
            } = u.config;
            l != null && (A = l), w = E ? ? w, a === kD ? A = 0 : (o || g) && (A = w = 0);
            let {
                now: N
            } = t.payload;
            if (r && n) {
                let R = N - (i + w);
                if (s) {
                    let z = N - i,
                        $ = A + w,
                        te = fi(Math.min(Math.max(0, z / $), 1));
                    e = (0, ht.set)(e, "verboseTimeElapsed", $ * te)
                }
                if (R < 0) return e;
                let q = fi(Math.min(Math.max(0, R / A), 1)),
                    F = dm(_, q, v),
                    D = {},
                    j = null;
                return h.length && (j = h.reduce((z, $) => {
                    let te = d[$],
                        X = parseFloat(n[$]) || 0,
                        y = (parseFloat(te) - X) * F + X;
                    return z[$] = y, z
                }, {})), D.current = j, D.position = q, q === 1 && (D.active = !1, D.complete = !0), (0, ht.merge)(e, D)
            }
            return e
        }, pm = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case PD:
                    return t.payload.ixInstances || Object.freeze({});
                case qD:
                    return Object.freeze({});
                case MD:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: d,
                            isCarrier: h,
                            origin: l,
                            destination: E,
                            immediate: v,
                            verbose: g,
                            continuous: _,
                            parameterId: A,
                            actionGroups: w,
                            smoothing: N,
                            restingValue: R,
                            pluginInstance: q,
                            pluginDuration: F,
                            instanceDelay: D,
                            skipMotion: j,
                            skipToValue: z
                        } = t.payload,
                        {
                            actionTypeId: $
                        } = i,
                        te = VD($),
                        X = HD(te, $),
                        S = Object.keys(E).filter(L => E[L] != null && typeof E[L] != "string"),
                        {
                            easing: y
                        } = i.config;
                        return (0, ht.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: l,
                            destination: E,
                            destinationKeys: S,
                            immediate: v,
                            verbose: g,
                            current: null,
                            actionItem: i,
                            actionTypeId: $,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: d,
                            renderType: te,
                            isCarrier: h,
                            styleProp: X,
                            continuous: _,
                            parameterId: A,
                            actionGroups: w,
                            smoothing: N,
                            restingValue: R,
                            pluginInstance: q,
                            pluginDuration: F,
                            instanceDelay: D,
                            skipMotion: j,
                            skipToValue: z,
                            customEasingFn: Array.isArray(y) && y.length === 4 ? UD(y) : void 0
                        })
                    }
                case DD:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, ht.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case FD:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let s = i[a];
                            s !== r && (n[s] = e[s])
                        }
                        return n
                    }
                case GD:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let a = n[o],
                                s = e[a],
                                u = s.continuous ? WD : XD;
                            r = (0, ht.set)(r, a, u(s, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var BD, jD, zD, gm, hm = me(() => {
        "use strict";
        ke();
        ({
            IX2_RAW_DATA_IMPORTED: BD,
            IX2_SESSION_STOPPED: jD,
            IX2_PARAMETER_CHANGED: zD
        } = Te), gm = (e = {}, t) => {
            switch (t.type) {
                case BD:
                    return t.payload.ixParameters || {};
                case jD:
                    return {};
                case zD:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var Em = {};
    Ge(Em, {
        default: () => YD
    });
    var mm, ym, KD, YD, bm = me(() => {
        "use strict";
        mm = fe(jo());
        Nf();
        Jf();
        rd();
        ym = fe(Gt());
        vm();
        hm();
        ({
            ixElements: KD
        } = ym.IX2ElementsReducer), YD = (0, mm.combineReducers)({
            ixData: Lf,
            ixRequest: Zf,
            ixSession: td,
            ixElements: KD,
            ixInstances: pm,
            ixParameters: gm
        })
    });
    var Im = c((J5, _m) => {
        var $D = It(),
            QD = xe(),
            ZD = pt(),
            JD = "[object String]";

        function e2(e) {
            return typeof e == "string" || !QD(e) && ZD(e) && $D(e) == JD
        }
        _m.exports = e2
    });
    var wm = c((ej, Tm) => {
        var t2 = ba(),
            r2 = t2("length");
        Tm.exports = r2
    });
    var Om = c((tj, xm) => {
        var n2 = "\\ud800-\\udfff",
            i2 = "\\u0300-\\u036f",
            o2 = "\\ufe20-\\ufe2f",
            a2 = "\\u20d0-\\u20ff",
            s2 = i2 + o2 + a2,
            u2 = "\\ufe0e\\ufe0f",
            c2 = "\\u200d",
            l2 = RegExp("[" + c2 + n2 + s2 + u2 + "]");

        function f2(e) {
            return l2.test(e)
        }
        xm.exports = f2
    });
    var Mm = c((rj, qm) => {
        var Sm = "\\ud800-\\udfff",
            d2 = "\\u0300-\\u036f",
            p2 = "\\ufe20-\\ufe2f",
            v2 = "\\u20d0-\\u20ff",
            g2 = d2 + p2 + v2,
            h2 = "\\ufe0e\\ufe0f",
            m2 = "[" + Sm + "]",
            Ya = "[" + g2 + "]",
            $a = "\\ud83c[\\udffb-\\udfff]",
            y2 = "(?:" + Ya + "|" + $a + ")",
            Cm = "[^" + Sm + "]",
            Rm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Lm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            E2 = "\\u200d",
            Nm = y2 + "?",
            Pm = "[" + h2 + "]?",
            b2 = "(?:" + E2 + "(?:" + [Cm, Rm, Lm].join("|") + ")" + Pm + Nm + ")*",
            _2 = Pm + Nm + b2,
            I2 = "(?:" + [Cm + Ya + "?", Ya, Rm, Lm, m2].join("|") + ")",
            Am = RegExp($a + "(?=" + $a + ")|" + I2 + _2, "g");

        function T2(e) {
            for (var t = Am.lastIndex = 0; Am.test(e);) ++t;
            return t
        }
        qm.exports = T2
    });
    var Fm = c((nj, Dm) => {
        var w2 = wm(),
            x2 = Om(),
            O2 = Mm();

        function A2(e) {
            return x2(e) ? O2(e) : w2(e)
        }
        Dm.exports = A2
    });
    var Um = c((ij, Gm) => {
        var S2 = Xn(),
            C2 = Bn(),
            R2 = Pt(),
            L2 = Im(),
            N2 = Fm(),
            P2 = "[object Map]",
            q2 = "[object Set]";

        function M2(e) {
            if (e == null) return 0;
            if (R2(e)) return L2(e) ? N2(e) : e.length;
            var t = C2(e);
            return t == P2 || t == q2 ? e.size : S2(e).length
        }
        Gm.exports = M2
    });
    var Vm = c((oj, km) => {
        var D2 = "Expected a function";

        function F2(e) {
            if (typeof e != "function") throw new TypeError(D2);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        km.exports = F2
    });
    var Qa = c((aj, Hm) => {
        var G2 = Tt(),
            U2 = function() {
                try {
                    var e = G2(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Hm.exports = U2
    });
    var Za = c((sj, Xm) => {
        var Wm = Qa();

        function k2(e, t, r) {
            t == "__proto__" && Wm ? Wm(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Xm.exports = k2
    });
    var jm = c((uj, Bm) => {
        var V2 = Za(),
            H2 = qn(),
            W2 = Object.prototype,
            X2 = W2.hasOwnProperty;

        function B2(e, t, r) {
            var n = e[t];
            (!(X2.call(e, t) && H2(n, r)) || r === void 0 && !(t in e)) && V2(e, t, r)
        }
        Bm.exports = B2
    });
    var Ym = c((cj, Km) => {
        var j2 = jm(),
            z2 = Hr(),
            K2 = kn(),
            zm = ut(),
            Y2 = nr();

        function $2(e, t, r, n) {
            if (!zm(e)) return e;
            t = z2(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = Y2(t[i]),
                    d = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var h = s[u];
                    d = n ? n(h, u, s) : void 0, d === void 0 && (d = zm(h) ? h : K2(t[i + 1]) ? [] : {})
                }
                j2(s, u, d), s = s[u]
            }
            return e
        }
        Km.exports = $2
    });
    var Qm = c((lj, $m) => {
        var Q2 = Kn(),
            Z2 = Ym(),
            J2 = Hr();

        function eF(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = Q2(e, a);
                r(s, a) && Z2(o, J2(a, e), s)
            }
            return o
        }
        $m.exports = eF
    });
    var Jm = c((fj, Zm) => {
        var tF = Gn(),
            rF = Po(),
            nF = oa(),
            iF = ia(),
            oF = Object.getOwnPropertySymbols,
            aF = oF ? function(e) {
                for (var t = []; e;) tF(t, nF(e)), e = rF(e);
                return t
            } : iF;
        Zm.exports = aF
    });
    var ty = c((dj, ey) => {
        function sF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        ey.exports = sF
    });
    var ny = c((pj, ry) => {
        var uF = ut(),
            cF = Wn(),
            lF = ty(),
            fF = Object.prototype,
            dF = fF.hasOwnProperty;

        function pF(e) {
            if (!uF(e)) return lF(e);
            var t = cF(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !dF.call(e, n)) || r.push(n);
            return r
        }
        ry.exports = pF
    });
    var oy = c((vj, iy) => {
        var vF = sa(),
            gF = ny(),
            hF = Pt();

        function mF(e) {
            return hF(e) ? vF(e, !0) : gF(e)
        }
        iy.exports = mF
    });
    var sy = c((gj, ay) => {
        var yF = na(),
            EF = Jm(),
            bF = oy();

        function _F(e) {
            return yF(e, bF, EF)
        }
        ay.exports = _F
    });
    var cy = c((hj, uy) => {
        var IF = Ea(),
            TF = wt(),
            wF = Qm(),
            xF = sy();

        function OF(e, t) {
            if (e == null) return {};
            var r = IF(xF(e), function(n) {
                return [n]
            });
            return t = TF(t), wF(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        uy.exports = OF
    });
    var fy = c((mj, ly) => {
        var AF = wt(),
            SF = Vm(),
            CF = cy();

        function RF(e, t) {
            return CF(e, SF(AF(t)))
        }
        ly.exports = RF
    });
    var py = c((yj, dy) => {
        var LF = Xn(),
            NF = Bn(),
            PF = Dr(),
            qF = xe(),
            MF = Pt(),
            DF = Un(),
            FF = Wn(),
            GF = Hn(),
            UF = "[object Map]",
            kF = "[object Set]",
            VF = Object.prototype,
            HF = VF.hasOwnProperty;

        function WF(e) {
            if (e == null) return !0;
            if (MF(e) && (qF(e) || typeof e == "string" || typeof e.splice == "function" || DF(e) || GF(e) || PF(e))) return !e.length;
            var t = NF(e);
            if (t == UF || t == kF) return !e.size;
            if (FF(e)) return !LF(e).length;
            for (var r in e)
                if (HF.call(e, r)) return !1;
            return !0
        }
        dy.exports = WF
    });
    var gy = c((Ej, vy) => {
        var XF = Za(),
            BF = Ua(),
            jF = wt();

        function zF(e, t) {
            var r = {};
            return t = jF(t, 3), BF(e, function(n, i, o) {
                XF(r, i, t(n, i, o))
            }), r
        }
        vy.exports = zF
    });
    var my = c((bj, hy) => {
        function KF(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        hy.exports = KF
    });
    var Ey = c((_j, yy) => {
        var YF = $n();

        function $F(e) {
            return typeof e == "function" ? e : YF
        }
        yy.exports = $F
    });
    var _y = c((Ij, by) => {
        var QF = my(),
            ZF = ka(),
            JF = Ey(),
            eG = xe();

        function tG(e, t) {
            var r = eG(e) ? QF : ZF;
            return r(e, JF(t))
        }
        by.exports = tG
    });
    var Ty = c((Tj, Iy) => {
        var rG = Qe(),
            nG = function() {
                return rG.Date.now()
            };
        Iy.exports = nG
    });
    var Oy = c((wj, xy) => {
        var iG = ut(),
            Ja = Ty(),
            wy = Qn(),
            oG = "Expected a function",
            aG = Math.max,
            sG = Math.min;

        function uG(e, t, r) {
            var n, i, o, a, s, u, d = 0,
                h = !1,
                l = !1,
                E = !0;
            if (typeof e != "function") throw new TypeError(oG);
            t = wy(t) || 0, iG(r) && (h = !!r.leading, l = "maxWait" in r, o = l ? aG(wy(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

            function v(D) {
                var j = n,
                    z = i;
                return n = i = void 0, d = D, a = e.apply(z, j), a
            }

            function g(D) {
                return d = D, s = setTimeout(w, t), h ? v(D) : a
            }

            function _(D) {
                var j = D - u,
                    z = D - d,
                    $ = t - j;
                return l ? sG($, o - z) : $
            }

            function A(D) {
                var j = D - u,
                    z = D - d;
                return u === void 0 || j >= t || j < 0 || l && z >= o
            }

            function w() {
                var D = Ja();
                if (A(D)) return N(D);
                s = setTimeout(w, _(D))
            }

            function N(D) {
                return s = void 0, E && n ? v(D) : (n = i = void 0, a)
            }

            function R() {
                s !== void 0 && clearTimeout(s), d = 0, n = u = i = s = void 0
            }

            function q() {
                return s === void 0 ? a : N(Ja())
            }

            function F() {
                var D = Ja(),
                    j = A(D);
                if (n = arguments, i = this, u = D, j) {
                    if (s === void 0) return g(u);
                    if (l) return clearTimeout(s), s = setTimeout(w, t), v(u)
                }
                return s === void 0 && (s = setTimeout(w, t)), a
            }
            return F.cancel = R, F.flush = q, F
        }
        xy.exports = uG
    });
    var Sy = c((xj, Ay) => {
        var cG = Oy(),
            lG = ut(),
            fG = "Expected a function";

        function dG(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(fG);
            return lG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), cG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Ay.exports = dG
    });
    var Ry = {};
    Ge(Ry, {
        actionListPlaybackChanged: () => gr,
        animationFrameChanged: () => vi,
        clearRequested: () => FG,
        elementStateChanged: () => ss,
        eventListenerAdded: () => pi,
        eventStateChanged: () => is,
        instanceAdded: () => os,
        instanceRemoved: () => as,
        instanceStarted: () => gi,
        mediaQueriesDefined: () => cs,
        parameterChanged: () => vr,
        playbackRequested: () => MG,
        previewRequested: () => qG,
        rawDataImported: () => es,
        sessionInitialized: () => ts,
        sessionStarted: () => rs,
        sessionStopped: () => ns,
        stopRequested: () => DG,
        testFrameRendered: () => GG,
        viewportWidthChanged: () => us
    });
    var Cy, pG, vG, gG, hG, mG, yG, EG, bG, _G, IG, TG, wG, xG, OG, AG, SG, CG, RG, LG, NG, PG, es, ts, rs, ns, qG, MG, DG, FG, pi, GG, is, vi, vr, os, gi, as, ss, gr, us, cs, hi = me(() => {
        "use strict";
        ke();
        Cy = fe(Gt()), {
            IX2_RAW_DATA_IMPORTED: pG,
            IX2_SESSION_INITIALIZED: vG,
            IX2_SESSION_STARTED: gG,
            IX2_SESSION_STOPPED: hG,
            IX2_PREVIEW_REQUESTED: mG,
            IX2_PLAYBACK_REQUESTED: yG,
            IX2_STOP_REQUESTED: EG,
            IX2_CLEAR_REQUESTED: bG,
            IX2_EVENT_LISTENER_ADDED: _G,
            IX2_TEST_FRAME_RENDERED: IG,
            IX2_EVENT_STATE_CHANGED: TG,
            IX2_ANIMATION_FRAME_CHANGED: wG,
            IX2_PARAMETER_CHANGED: xG,
            IX2_INSTANCE_ADDED: OG,
            IX2_INSTANCE_STARTED: AG,
            IX2_INSTANCE_REMOVED: SG,
            IX2_ELEMENT_STATE_CHANGED: CG,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: RG,
            IX2_VIEWPORT_WIDTH_CHANGED: LG,
            IX2_MEDIA_QUERIES_DEFINED: NG
        } = Te, {
            reifyState: PG
        } = Cy.IX2VanillaUtils, es = e => ({
            type: pG,
            payload: { ...PG(e)
            }
        }), ts = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: vG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), rs = () => ({
            type: gG
        }), ns = () => ({
            type: hG
        }), qG = ({
            rawData: e,
            defer: t
        }) => ({
            type: mG,
            payload: {
                defer: t,
                rawData: e
            }
        }), MG = ({
            actionTypeId: e = Ue.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: yG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), DG = e => ({
            type: EG,
            payload: {
                actionListId: e
            }
        }), FG = () => ({
            type: bG
        }), pi = (e, t) => ({
            type: _G,
            payload: {
                target: e,
                listenerParams: t
            }
        }), GG = (e = 1) => ({
            type: IG,
            payload: {
                step: e
            }
        }), is = (e, t) => ({
            type: TG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), vi = (e, t) => ({
            type: wG,
            payload: {
                now: e,
                parameters: t
            }
        }), vr = (e, t) => ({
            type: xG,
            payload: {
                key: e,
                value: t
            }
        }), os = e => ({
            type: OG,
            payload: { ...e
            }
        }), gi = (e, t) => ({
            type: AG,
            payload: {
                instanceId: e,
                time: t
            }
        }), as = e => ({
            type: SG,
            payload: {
                instanceId: e
            }
        }), ss = (e, t, r, n) => ({
            type: CG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), gr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: RG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), us = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: LG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), cs = () => ({
            type: NG
        })
    });
    var Me = {};
    Ge(Me, {
        elementContains: () => ds,
        getChildElements: () => KG,
        getClosestElement: () => Jr,
        getProperty: () => WG,
        getQuerySelector: () => fs,
        getRefType: () => ps,
        getSiblingElements: () => YG,
        getStyle: () => HG,
        getValidDocument: () => BG,
        isSiblingNode: () => zG,
        matchSelector: () => XG,
        queryDocument: () => jG,
        setStyle: () => VG
    });

    function VG(e, t, r) {
        e.style[t] = r
    }

    function HG(e, t) {
        return e.style[t]
    }

    function WG(e, t) {
        return e[t]
    }

    function XG(e) {
        return t => t[ls](e)
    }

    function fs({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Ly) !== -1) {
                let n = e.split(Ly),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Py)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function BG(e) {
        return e == null || e === document.documentElement.getAttribute(Py) ? document : null
    }

    function jG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ds(e, t) {
        return e.contains(t)
    }

    function zG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function KG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function YG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function ps(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? UG : kG : null
    }
    var Ny, ls, Ly, UG, kG, Py, Jr, qy = me(() => {
        "use strict";
        Ny = fe(Gt());
        ke();
        ({
            ELEMENT_MATCHES: ls
        } = Ny.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Ly,
            HTML_ELEMENT: UG,
            PLAIN_OBJECT: kG,
            WF_PAGE: Py
        } = Ce;
        Jr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[ls] && r[ls](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var vs = c((Sj, Dy) => {
        var $G = ut(),
            My = Object.create,
            QG = function() {
                function e() {}
                return function(t) {
                    if (!$G(t)) return {};
                    if (My) return My(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Dy.exports = QG
    });
    var mi = c((Cj, Fy) => {
        function ZG() {}
        Fy.exports = ZG
    });
    var Ei = c((Rj, Gy) => {
        var JG = vs(),
            eU = mi();

        function yi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        yi.prototype = JG(eU.prototype);
        yi.prototype.constructor = yi;
        Gy.exports = yi
    });
    var Hy = c((Lj, Vy) => {
        var Uy = jt(),
            tU = Dr(),
            rU = xe(),
            ky = Uy ? Uy.isConcatSpreadable : void 0;

        function nU(e) {
            return rU(e) || tU(e) || !!(ky && e && e[ky])
        }
        Vy.exports = nU
    });
    var By = c((Nj, Xy) => {
        var iU = Gn(),
            oU = Hy();

        function Wy(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = oU), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Wy(s, t - 1, r, n, i) : iU(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Xy.exports = Wy
    });
    var zy = c((Pj, jy) => {
        var aU = By();

        function sU(e) {
            var t = e == null ? 0 : e.length;
            return t ? aU(e, 1) : []
        }
        jy.exports = sU
    });
    var Yy = c((qj, Ky) => {
        function uU(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Ky.exports = uU
    });
    var Zy = c((Mj, Qy) => {
        var cU = Yy(),
            $y = Math.max;

        function lU(e, t, r) {
            return t = $y(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = $y(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return s[t] = r(a), cU(e, this, s)
                }
        }
        Qy.exports = lU
    });
    var eE = c((Dj, Jy) => {
        function fU(e) {
            return function() {
                return e
            }
        }
        Jy.exports = fU
    });
    var nE = c((Fj, rE) => {
        var dU = eE(),
            tE = Qa(),
            pU = $n(),
            vU = tE ? function(e, t) {
                return tE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: dU(t),
                    writable: !0
                })
            } : pU;
        rE.exports = vU
    });
    var oE = c((Gj, iE) => {
        var gU = 800,
            hU = 16,
            mU = Date.now;

        function yU(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = mU(),
                    i = hU - (n - r);
                if (r = n, i > 0) {
                    if (++t >= gU) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        iE.exports = yU
    });
    var sE = c((Uj, aE) => {
        var EU = nE(),
            bU = oE(),
            _U = bU(EU);
        aE.exports = _U
    });
    var cE = c((kj, uE) => {
        var IU = zy(),
            TU = Zy(),
            wU = sE();

        function xU(e) {
            return wU(TU(e, void 0, IU), e + "")
        }
        uE.exports = xU
    });
    var dE = c((Vj, fE) => {
        var lE = ua(),
            OU = lE && new lE;
        fE.exports = OU
    });
    var vE = c((Hj, pE) => {
        function AU() {}
        pE.exports = AU
    });
    var gs = c((Wj, hE) => {
        var gE = dE(),
            SU = vE(),
            CU = gE ? function(e) {
                return gE.get(e)
            } : SU;
        hE.exports = CU
    });
    var yE = c((Xj, mE) => {
        var RU = {};
        mE.exports = RU
    });
    var hs = c((Bj, bE) => {
        var EE = yE(),
            LU = Object.prototype,
            NU = LU.hasOwnProperty;

        function PU(e) {
            for (var t = e.name + "", r = EE[t], n = NU.call(EE, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        bE.exports = PU
    });
    var _i = c((jj, _E) => {
        var qU = vs(),
            MU = mi(),
            DU = 4294967295;

        function bi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = DU, this.__views__ = []
        }
        bi.prototype = qU(MU.prototype);
        bi.prototype.constructor = bi;
        _E.exports = bi
    });
    var TE = c((zj, IE) => {
        function FU(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        IE.exports = FU
    });
    var xE = c((Kj, wE) => {
        var GU = _i(),
            UU = Ei(),
            kU = TE();

        function VU(e) {
            if (e instanceof GU) return e.clone();
            var t = new UU(e.__wrapped__, e.__chain__);
            return t.__actions__ = kU(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        wE.exports = VU
    });
    var SE = c((Yj, AE) => {
        var HU = _i(),
            OE = Ei(),
            WU = mi(),
            XU = xe(),
            BU = pt(),
            jU = xE(),
            zU = Object.prototype,
            KU = zU.hasOwnProperty;

        function Ii(e) {
            if (BU(e) && !XU(e) && !(e instanceof HU)) {
                if (e instanceof OE) return e;
                if (KU.call(e, "__wrapped__")) return jU(e)
            }
            return new OE(e)
        }
        Ii.prototype = WU.prototype;
        Ii.prototype.constructor = Ii;
        AE.exports = Ii
    });
    var RE = c(($j, CE) => {
        var YU = _i(),
            $U = gs(),
            QU = hs(),
            ZU = SE();

        function JU(e) {
            var t = QU(e),
                r = ZU[t];
            if (typeof r != "function" || !(t in YU.prototype)) return !1;
            if (e === r) return !0;
            var n = $U(r);
            return !!n && e === n[0]
        }
        CE.exports = JU
    });
    var qE = c((Qj, PE) => {
        var LE = Ei(),
            ek = cE(),
            tk = gs(),
            ms = hs(),
            rk = xe(),
            NE = RE(),
            nk = "Expected a function",
            ik = 8,
            ok = 32,
            ak = 128,
            sk = 256;

        function uk(e) {
            return ek(function(t) {
                var r = t.length,
                    n = r,
                    i = LE.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(nk);
                    if (i && !a && ms(o) == "wrapper") var a = new LE([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = ms(o),
                        u = s == "wrapper" ? tk(o) : void 0;
                    u && NE(u[0]) && u[1] == (ak | ik | ok | sk) && !u[4].length && u[9] == 1 ? a = a[ms(u[0])].apply(a, u[3]) : a = o.length == 1 && NE(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var d = arguments,
                        h = d[0];
                    if (a && d.length == 1 && rk(h)) return a.plant(h).value();
                    for (var l = 0, E = r ? t[l].apply(this, d) : h; ++l < r;) E = t[l].call(this, E);
                    return E
                }
            })
        }
        PE.exports = uk
    });
    var DE = c((Zj, ME) => {
        var ck = qE(),
            lk = ck();
        ME.exports = lk
    });
    var GE = c((Jj, FE) => {
        function fk(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        FE.exports = fk
    });
    var kE = c((ez, UE) => {
        var dk = GE(),
            ys = Qn();

        function pk(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ys(r), r = r === r ? r : 0), t !== void 0 && (t = ys(t), t = t === t ? t : 0), dk(ys(e), t, r)
        }
        UE.exports = pk
    });
    var YE, $E, QE, ZE, vk, gk, hk, mk, yk, Ek, bk, _k, Ik, Tk, wk, xk, Ok, Ak, Sk, JE, eb, Ck, Rk, Lk, tb, Nk, Pk, rb, qk, Es, nb, VE, HE, ib, tn, Mk, ft, ob, Dk, He, et, rn, ab, bs, WE, _s, Fk, en, Gk, Uk, kk, sb, XE, Vk, BE, Hk, Wk, Xk, jE, Ti, wi, zE, KE, ub, cb = me(() => {
        "use strict";
        YE = fe(DE()), $E = fe(Yn()), QE = fe(kE());
        ke();
        Is();
        hi();
        ZE = fe(Gt()), {
            MOUSE_CLICK: vk,
            MOUSE_SECOND_CLICK: gk,
            MOUSE_DOWN: hk,
            MOUSE_UP: mk,
            MOUSE_OVER: yk,
            MOUSE_OUT: Ek,
            DROPDOWN_CLOSE: bk,
            DROPDOWN_OPEN: _k,
            SLIDER_ACTIVE: Ik,
            SLIDER_INACTIVE: Tk,
            TAB_ACTIVE: wk,
            TAB_INACTIVE: xk,
            NAVBAR_CLOSE: Ok,
            NAVBAR_OPEN: Ak,
            MOUSE_MOVE: Sk,
            PAGE_SCROLL_DOWN: JE,
            SCROLL_INTO_VIEW: eb,
            SCROLL_OUT_OF_VIEW: Ck,
            PAGE_SCROLL_UP: Rk,
            SCROLLING_IN_VIEW: Lk,
            PAGE_FINISH: tb,
            ECOMMERCE_CART_CLOSE: Nk,
            ECOMMERCE_CART_OPEN: Pk,
            PAGE_START: rb,
            PAGE_SCROLL: qk
        } = Ze, Es = "COMPONENT_ACTIVE", nb = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: VE
        } = Ce, {
            getNamespacedParameterId: HE
        } = ZE.IX2VanillaUtils, ib = e => t => typeof t == "object" && e(t) ? !0 : t, tn = ib(({
            element: e,
            nativeEvent: t
        }) => e === t.target), Mk = ib(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), ft = (0, YE.default)([tn, Mk]), ob = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !Fk[i.eventTypeId]) return i
            }
            return null
        }, Dk = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!ob(e, n)
        }, He = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, d = ob(e, u);
            return d && hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + VE + n.split(VE)[1],
                actionListId: (0, $E.default)(d, "action.config.actionListId")
            }), hr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), nn({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), i
        }, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, rn = {
            handler: et(ft, He)
        }, ab = { ...rn,
            types: [Es, nb].join(" ")
        }, bs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], WE = "mouseover mouseout", _s = {
            types: bs
        }, Fk = {
            PAGE_START: rb,
            PAGE_FINISH: tb
        }, en = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, QE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), Gk = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), Uk = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, kk = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = en(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return Gk(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, sb = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [Es, nb].indexOf(n) !== -1 ? n === Es : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, XE = e => (t, r) => {
            let n = {
                elementHovered: Uk(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, Vk = e => (t, r) => {
            let n = { ...r,
                elementVisible: kk(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, BE = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = en(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: d
            } = a, h = d === "PX", l = i - o, E = Number((n / l).toFixed(2));
            if (r && r.percentTop === E) return r;
            let v = (h ? u : o * (u || 0) / 100) / l,
                g, _, A = 0;
            r && (g = E > r.percentTop, _ = r.scrollingDown !== g, A = _ ? E : r.anchorTop);
            let w = s === JE ? E >= A + v : E <= A - v,
                N = { ...r,
                    percentTop: E,
                    inBounds: w,
                    anchorTop: A,
                    scrollingDown: g
                };
            return r && w && (_ || N.inBounds !== r.inBounds) && e(t, N) || N
        }, Hk = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, Wk = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, Xk = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, jE = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, Ti = (e = !0) => ({ ...ab,
            handler: et(e ? ft : tn, sb((t, r) => r.isActive ? rn.handler(t, r) : r))
        }), wi = (e = !0) => ({ ...ab,
            handler: et(e ? ft : tn, sb((t, r) => r.isActive ? r : rn.handler(t, r)))
        }), zE = { ..._s,
            handler: Vk((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === eb === r ? (He(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, KE = .05, ub = {
            [Ik]: Ti(),
            [Tk]: wi(),
            [_k]: Ti(),
            [bk]: wi(),
            [Ak]: Ti(!1),
            [Ok]: wi(!1),
            [wk]: Ti(),
            [xk]: wi(),
            [Pk]: {
                types: "ecommerce-cart-open",
                handler: et(ft, He)
            },
            [Nk]: {
                types: "ecommerce-cart-close",
                handler: et(ft, He)
            },
            [vk]: {
                types: "click",
                handler: et(ft, jE((e, {
                    clickCount: t
                }) => {
                    Dk(e) ? t === 1 && He(e) : He(e)
                }))
            },
            [gk]: {
                types: "click",
                handler: et(ft, jE((e, {
                    clickCount: t
                }) => {
                    t === 2 && He(e)
                }))
            },
            [hk]: { ...rn,
                types: "mousedown"
            },
            [mk]: { ...rn,
                types: "mouseup"
            },
            [yk]: {
                types: WE,
                handler: et(ft, XE((e, t) => {
                    t.elementHovered && He(e)
                }))
            },
            [Ek]: {
                types: WE,
                handler: et(ft, XE((e, t) => {
                    t.elementHovered || He(e)
                }))
            },
            [Sk]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: d,
                        restingState: h = 0
                    } = r, {
                        clientX: l = o.clientX,
                        clientY: E = o.clientY,
                        pageX: v = o.pageX,
                        pageY: g = o.pageY
                    } = n, _ = s === "X_AXIS", A = n.type === "mouseout", w = h / 100, N = u, R = !1;
                    switch (a) {
                        case st.VIEWPORT:
                            {
                                w = _ ? Math.min(l, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case st.PAGE:
                            {
                                let {
                                    scrollLeft: q,
                                    scrollTop: F,
                                    scrollWidth: D,
                                    scrollHeight: j
                                } = en();w = _ ? Math.min(q + v, D) / D : Math.min(F + g, j) / j;
                                break
                            }
                        case st.ELEMENT:
                        default:
                            {
                                N = HE(i, u);
                                let q = n.type.indexOf("mouse") === 0;
                                if (q && ft({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let F = t.getBoundingClientRect(),
                                    {
                                        left: D,
                                        top: j,
                                        width: z,
                                        height: $
                                    } = F;
                                if (!q && !Hk({
                                        left: l,
                                        top: E
                                    }, F)) break;R = !0,
                                w = _ ? (l - D) / z : (E - j) / $;
                                break
                            }
                    }
                    return A && (w > 1 - KE || w < KE) && (w = Math.round(w)), (a !== st.ELEMENT || R || R !== o.elementHovered) && (w = d ? 1 - w : w, e.dispatch(vr(N, w))), {
                        elementHovered: R,
                        clientX: l,
                        clientY: E,
                        pageX: v,
                        pageY: g
                    }
                }
            },
            [qk]: {
                types: bs,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = en(), s = i / (o - a);
                    s = n ? 1 - s : s, e.dispatch(vr(r, s))
                }
            },
            [Lk]: {
                types: bs,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: d
                    } = en(), {
                        basedOn: h,
                        selectedAxis: l,
                        continuousParameterGroupId: E,
                        startsEntering: v,
                        startsExiting: g,
                        addEndOffset: _,
                        addStartOffset: A,
                        addOffsetValue: w = 0,
                        endOffsetValue: N = 0
                    } = r, R = l === "X_AXIS";
                    if (h === st.VIEWPORT) {
                        let q = R ? o / s : a / u;
                        return q !== i.scrollPercent && t.dispatch(vr(E, q)), {
                            scrollPercent: q
                        }
                    } else {
                        let q = HE(n, E),
                            F = e.getBoundingClientRect(),
                            D = (A ? w : 0) / 100,
                            j = (_ ? N : 0) / 100;
                        D = v ? D : 1 - D, j = g ? j : 1 - j;
                        let z = F.top + Math.min(F.height * D, d),
                            te = F.top + F.height * j - z,
                            X = Math.min(d + te, u),
                            y = Math.min(Math.max(0, d - z), X) / X;
                        return y !== i.scrollPercent && t.dispatch(vr(q, y)), {
                            scrollPercent: y
                        }
                    }
                }
            },
            [eb]: zE,
            [Ck]: zE,
            [JE]: { ..._s,
                handler: BE((e, t) => {
                    t.scrollingDown && He(e)
                })
            },
            [Rk]: { ..._s,
                handler: BE((e, t) => {
                    t.scrollingDown || He(e)
                })
            },
            [tb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(tn, Wk(He))
            },
            [rb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(tn, Xk(He))
            }
        }
    });
    var Ob = {};
    Ge(Ob, {
        observeRequests: () => lV,
        startActionGroup: () => nn,
        startEngine: () => Ri,
        stopActionGroup: () => hr,
        stopAllActionGroups: () => Tb,
        stopEngine: () => Li
    });

    function lV(e) {
        Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: pV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: vV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: gV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: hV
        })
    }

    function fV(e) {
        Ut({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Li(e), Eb({
                    store: e,
                    elementApi: Me
                }), Ri({
                    store: e,
                    allowEvents: !0
                }), bb()
            }
        })
    }

    function dV(e, t) {
        let r = Ut({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function pV({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Ri({
                store: r,
                rawData: e,
                allowEvents: !0
            }), bb()
        };
        t ? setTimeout(n, 0) : n()
    }

    function bb() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function vV(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: d = !0
        } = e, {
            rawData: h
        } = e;
        if (n && i && h && s) {
            let l = h.actionLists[n];
            l && (h = Jk({
                actionList: l,
                actionItemId: i,
                rawData: h
            }))
        }
        if (Ri({
                store: t,
                rawData: h,
                allowEvents: a,
                testManual: u
            }), n && r === Ue.GENERAL_START_ACTION || Ts(r)) {
            hr({
                store: t,
                actionListId: n
            }), Ib({
                store: t,
                actionListId: n,
                eventId: o
            });
            let l = nn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: d
            });
            d && l && t.dispatch(gr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }

    function gV({
        actionListId: e
    }, t) {
        e ? hr({
            store: t,
            actionListId: e
        }) : Tb({
            store: t
        }), Li(t)
    }

    function hV(e, t) {
        Li(t), Eb({
            store: t,
            elementApi: Me
        })
    }

    function Ri({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(es(t)), i.active || (e.dispatch(ts({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (IV(e), mV(), e.getState().ixSession.hasDefinedMediaQueries && fV(e)), e.dispatch(rs()), yV(e, n))
    }

    function mV() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(lb) === -1 && (e.className += ` ${lb}`)
    }

    function yV(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(vi(n, o)), t ? dV(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Li(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(EV), nV(), e.dispatch(ns())
        }
    }

    function EV({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function bV({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: d,
            ixSession: h
        } = e.getState(), {
            events: l
        } = d, E = l[n], {
            eventTypeId: v
        } = E, g = {}, _ = {}, A = [], {
            continuousActionGroups: w
        } = a, {
            id: N
        } = a;
        eV(v, i) && (N = tV(t, N));
        let R = h.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        w.forEach(q => {
            let {
                keyframe: F,
                actionItems: D
            } = q;
            D.forEach(j => {
                let {
                    actionTypeId: z
                } = j, {
                    target: $
                } = j.config;
                if (!$) return;
                let te = $.boundaryMode ? R : null,
                    X = iV($) + ws + z;
                if (_[X] = _V(_[X], F, j), !g[X]) {
                    g[X] = !0;
                    let {
                        config: S
                    } = j;
                    Ai({
                        config: S,
                        event: E,
                        eventTarget: r,
                        elementRoot: te,
                        elementApi: Me
                    }).forEach(y => {
                        A.push({
                            element: y,
                            key: X
                        })
                    })
                }
            })
        }), A.forEach(({
            element: q,
            key: F
        }) => {
            let D = _[F],
                j = (0, mt.default)(D, "[0].actionItems[0]", {}),
                {
                    actionTypeId: z
                } = j,
                $ = Ci(z) ? Os(z)(q, j) : null,
                te = xs({
                    element: q,
                    actionItem: j,
                    elementApi: Me
                }, $);
            As({
                store: e,
                element: q,
                eventId: n,
                actionListId: o,
                actionItem: j,
                destination: te,
                continuous: !0,
                parameterId: N,
                actionGroups: D,
                smoothing: s,
                restingValue: u,
                pluginInstance: $
            })
        })
    }

    function _V(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function IV(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        _b(e), (0, mr.default)(r, (i, o) => {
            let a = ub[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            SV({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && wV(e)
    }

    function wV(e) {
        let t = () => {
            _b(e)
        };
        TV.forEach(r => {
            window.addEventListener(r, t), e.dispatch(pi(window, [r, t]))
        }), t()
    }

    function _b(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(us({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function SV({
        logic: e,
        store: t,
        events: r
    }) {
        CV(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = xV(r, AV);
        if (!(0, pb.default)(s)) return;
        (0, mr.default)(s, (l, E) => {
            let v = r[E],
                {
                    action: g,
                    id: _,
                    mediaQueries: A = o.mediaQueryKeys
                } = v,
                {
                    actionListId: w
                } = g.config;
            oV(A, o.mediaQueryKeys) || t.dispatch(cs()), g.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION && (Array.isArray(v.config) ? v.config : [v.config]).forEach(R => {
                let {
                    continuousParameterGroupId: q
                } = R, F = (0, mt.default)(a, `${w}.continuousParameterGroups`, []), D = (0, db.default)(F, ({
                    id: $
                }) => $ === q), j = (R.smoothing || 0) / 100, z = (R.restingState || 0) / 100;
                D && l.forEach(($, te) => {
                    let X = _ + ws + te;
                    bV({
                        store: t,
                        eventStateKey: X,
                        eventTarget: $,
                        eventId: _,
                        eventConfig: R,
                        actionListId: w,
                        parameterGroup: D,
                        smoothing: j,
                        restingValue: z
                    })
                })
            }), (g.actionTypeId === Ue.GENERAL_START_ACTION || Ts(g.actionTypeId)) && Ib({
                store: t,
                actionListId: w,
                eventId: _
            })
        });
        let u = l => {
                let {
                    ixSession: E
                } = t.getState();
                OV(s, (v, g, _) => {
                    let A = r[g],
                        w = E.eventState[_],
                        {
                            action: N,
                            mediaQueries: R = o.mediaQueryKeys
                        } = A;
                    if (!Si(R, E.mediaQueryKey)) return;
                    let q = (F = {}) => {
                        let D = i({
                            store: t,
                            element: v,
                            event: A,
                            eventConfig: F,
                            nativeEvent: l,
                            eventStateKey: _
                        }, w);
                        aV(D, w) || t.dispatch(is(_, D))
                    };
                    N.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(q) : q()
                })
            },
            d = (0, mb.default)(u, cV),
            h = ({
                target: l = document,
                types: E,
                throttle: v
            }) => {
                E.split(" ").filter(Boolean).forEach(g => {
                    let _ = v ? d : u;
                    l.addEventListener(g, _), t.dispatch(pi(l, [g, _]))
                })
            };
        Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e)
    }

    function CV(e) {
        if (!uV) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = fs(o);
            t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function Ib({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, s = a[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let d = (0, mt.default)(u, "actionItemGroups[0].actionItems", []),
                h = (0, mt.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Si(h, i.mediaQueryKey)) return;
            d.forEach(l => {
                let {
                    config: E,
                    actionTypeId: v
                } = l, g = E ? .target ? .useEventTarget === !0 && E ? .target ? .objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : E, _ = Ai({
                    config: g,
                    event: s,
                    elementApi: Me
                }), A = Ci(v);
                _.forEach(w => {
                    let N = A ? Os(v)(w, l) : null;
                    As({
                        destination: xs({
                            element: w,
                            actionItem: l,
                            elementApi: Me
                        }, N),
                        immediate: !0,
                        store: e,
                        element: w,
                        eventId: r,
                        actionItem: l,
                        actionListId: t,
                        pluginInstance: N
                    })
                })
            })
        }
    }

    function Tb({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, mr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Ss(r, e), i && e.dispatch(gr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function hr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        (0, mr.default)(o, u => {
            let d = (0, mt.default)(u, "actionItem.config.target.boundaryMode"),
                h = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && h) {
                if (s && d && !ds(s, u.element)) return;
                Ss(u, e), u.verbose && e.dispatch(gr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function nn({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: d
        } = e.getState(), {
            events: h
        } = u, l = h[t] || {}, {
            mediaQueries: E = u.mediaQueryKeys
        } = l, v = (0, mt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: g,
            useFirstGroupAsInitialState: _
        } = v;
        if (!g || !g.length) return !1;
        o >= g.length && (0, mt.default)(l, "config.loop") && (o = 0), o === 0 && _ && o++;
        let w = (o === 0 || o === 1 && _) && Ts(l.action ? .actionTypeId) ? l.config.delay : void 0,
            N = (0, mt.default)(g, [o, "actionItems"], []);
        if (!N.length || !Si(E, d.mediaQueryKey)) return !1;
        let R = d.hasBoundaryNodes && r ? Jr(r, Oi) : null,
            q = $k(N),
            F = !1;
        return N.forEach((D, j) => {
            let {
                config: z,
                actionTypeId: $
            } = D, te = Ci($), {
                target: X
            } = z;
            if (!X) return;
            let S = X.boundaryMode ? R : null;
            Ai({
                config: z,
                event: l,
                eventTarget: r,
                elementRoot: S,
                elementApi: Me
            }).forEach((L, G) => {
                let k = te ? Os($)(L, D) : null,
                    J = te ? sV($)(L, D) : null;
                F = !0;
                let ne = q === j && G === 0,
                    U = Qk({
                        element: L,
                        actionItem: D
                    }),
                    H = xs({
                        element: L,
                        actionItem: D,
                        elementApi: Me
                    }, k);
                As({
                    store: e,
                    element: L,
                    actionItem: D,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ne,
                    computedStyle: U,
                    destination: H,
                    immediate: a,
                    verbose: s,
                    pluginInstance: k,
                    pluginDuration: J,
                    instanceDelay: w
                })
            })
        }), F
    }

    function As(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: d,
            eventId: h
        } = n, l = !u, E = Kk(), {
            ixElements: v,
            ixSession: g,
            ixData: _
        } = t.getState(), A = zk(v, i), {
            refState: w
        } = v[A] || {}, N = ps(i), R = g.reducedMotion && Yo[o.actionTypeId], q;
        if (R && u) switch (_.events[h] ? .eventTypeId) {
            case Ze.MOUSE_MOVE:
            case Ze.MOUSE_MOVE_IN_VIEWPORT:
                q = d;
                break;
            default:
                q = .5;
                break
        }
        let F = Zk(i, w, r, o, Me, s);
        if (t.dispatch(os({
                instanceId: E,
                elementId: A,
                origin: F,
                refType: N,
                skipMotion: R,
                skipToValue: q,
                ...n
            })), wb(document.body, "ix2-animation-started", E), a) {
            RV(t, E);
            return
        }
        Ut({
            store: t,
            select: ({
                ixInstances: D
            }) => D[E],
            onChange: xb
        }), l && t.dispatch(gi(E, g.tick))
    }

    function Ss(e, t) {
        wb(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === yb && rV(o, n, Me), t.dispatch(as(e.id))
    }

    function wb(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function RV(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(gi(t, 0)), e.dispatch(vi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        xb(n[t], e)
    }

    function xb(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: d,
            groupIndex: h,
            eventId: l,
            eventTarget: E,
            eventStateKey: v,
            actionListId: g,
            isCarrier: _,
            styleProp: A,
            verbose: w,
            pluginInstance: N
        } = e, {
            ixData: R,
            ixSession: q
        } = t.getState(), {
            events: F
        } = R, D = F[l] || {}, {
            mediaQueries: j = R.mediaQueryKeys
        } = D;
        if (Si(j, q.mediaQueryKey) && (n || r || i)) {
            if (d || u === jk && i) {
                t.dispatch(ss(o, s, d, a));
                let {
                    ixElements: z
                } = t.getState(), {
                    ref: $,
                    refType: te,
                    refState: X
                } = z[o] || {}, S = X && X[s];
                (te === yb || Ci(s)) && Yk($, X, S, l, a, A, Me, u, N)
            }
            if (i) {
                if (_) {
                    let z = nn({
                        store: t,
                        eventId: l,
                        eventTarget: E,
                        eventStateKey: v,
                        actionListId: g,
                        groupIndex: h + 1,
                        verbose: w
                    });
                    w && !z && t.dispatch(gr({
                        actionListId: g,
                        isPlaying: !1
                    }))
                }
                Ss(e, t)
            }
        }
    }
    var db, mt, pb, vb, gb, hb, mr, mb, xi, Bk, Ts, ws, Oi, yb, jk, lb, Ai, zk, xs, Ut, Kk, Yk, Eb, $k, Qk, Zk, Jk, eV, tV, Si, rV, nV, iV, oV, aV, Ci, Os, sV, fb, uV, cV, TV, xV, OV, AV, Is = me(() => {
        "use strict";
        db = fe(wa()), mt = fe(Yn()), pb = fe(Um()), vb = fe(fy()), gb = fe(py()), hb = fe(gy()), mr = fe(_y()), mb = fe(Sy());
        ke();
        xi = fe(Gt());
        hi();
        qy();
        cb();
        Bk = Object.keys(An), Ts = e => Bk.includes(e), {
            COLON_DELIMITER: ws,
            BOUNDARY_SELECTOR: Oi,
            HTML_ELEMENT: yb,
            RENDER_GENERAL: jk,
            W_MOD_IX: lb
        } = Ce, {
            getAffectedElements: Ai,
            getElementId: zk,
            getDestinationValues: xs,
            observeStore: Ut,
            getInstanceId: Kk,
            renderHTMLElement: Yk,
            clearAllStyles: Eb,
            getMaxDurationItemIndex: $k,
            getComputedStyle: Qk,
            getInstanceOrigin: Zk,
            reduceListToGroup: Jk,
            shouldNamespaceEventParameter: eV,
            getNamespacedParameterId: tV,
            shouldAllowMediaQuery: Si,
            cleanupHTMLElement: rV,
            clearObjectCache: nV,
            stringifyTarget: iV,
            mediaQueriesEqual: oV,
            shallowEqual: aV
        } = xi.IX2VanillaUtils, {
            isPluginType: Ci,
            createPluginInstance: Os,
            getPluginDuration: sV
        } = xi.IX2VanillaPlugins, fb = navigator.userAgent, uV = fb.match(/iPad/i) || fb.match(/iPhone/), cV = 12;
        TV = ["resize", "orientationchange"];
        xV = (e, t) => (0, vb.default)((0, hb.default)(e, t), gb.default), OV = (e, t) => {
            (0, mr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + ws + o;
                    t(i, n, a)
                })
            })
        }, AV = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ai({
                config: t,
                elementApi: Me
            })
        }
    });
    var Sb = c(yt => {
        "use strict";
        var LV = vn().default,
            NV = lu().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = Ab;
        yt.init = FV;
        yt.setEnv = DV;
        yt.store = void 0;
        Yl();
        var PV = jo(),
            qV = NV((bm(), nt(Em))),
            Cs = (Is(), nt(Ob)),
            MV = LV((hi(), nt(Ry)));
        yt.actions = MV;
        var Rs = yt.store = (0, PV.createStore)(qV.default);

        function DV(e) {
            e() && (0, Cs.observeRequests)(Rs)
        }

        function FV(e) {
            Ab(), (0, Cs.startEngine)({
                store: Rs,
                rawData: e,
                allowEvents: !0
            })
        }

        function Ab() {
            (0, Cs.stopEngine)(Rs)
        }
    });
    var Nb = c((cz, Lb) => {
        "use strict";
        var Cb = Ne(),
            Rb = Sb();
        Rb.setEnv(Cb.env);
        Cb.define("ix2", Lb.exports = function() {
            return Rb
        })
    });
    var qb = c((lz, Pb) => {
        "use strict";
        var yr = Ne();
        yr.define("links", Pb.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = yr.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                d = /index\.(html|php)$/,
                h = /\/$/,
                l, E;
            r.ready = r.design = r.preview = v;

            function v() {
                i = o && yr.env("design"), E = yr.env("slug") || a.pathname || "", yr.scroll.off(_), l = [];
                for (var w = document.links, N = 0; N < w.length; ++N) g(w[N]);
                l.length && (yr.scroll.on(_), _())
            }

            function g(w) {
                if (!w.getAttribute("hreflang")) {
                    var N = i && w.getAttribute("href-disabled") || w.getAttribute("href");
                    if (s.href = N, !(N.indexOf(":") >= 0)) {
                        var R = e(w);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var q = e(s.hash);
                            q.length && l.push({
                                link: R,
                                sec: q,
                                active: !1
                            });
                            return
                        }
                        if (!(N === "#" || N === "")) {
                            var F = s.href === a.href || N === E || d.test(N) && h.test(E);
                            A(R, u, F)
                        }
                    }
                }
            }

            function _() {
                var w = n.scrollTop(),
                    N = n.height();
                t.each(l, function(R) {
                    if (!R.link.attr("hreflang")) {
                        var q = R.link,
                            F = R.sec,
                            D = F.offset().top,
                            j = F.outerHeight(),
                            z = N * .5,
                            $ = F.is(":visible") && D + j - z >= w && D + z <= w + N;
                        R.active !== $ && (R.active = $, A(q, u, $))
                    }
                })
            }

            function A(w, N, R) {
                var q = w.hasClass(N);
                R && q || !R && !q || (R ? w.addClass(N) : w.removeClass(N))
            }
            return r
        })
    });
    var Db = c((fz, Mb) => {
        "use strict";
        var Ni = Ne();
        Ni.define("scroll", Mb.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = g() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(S) {
                    window.setTimeout(S, 15)
                },
                u = Ni.env("editor") ? ".w-editor-body" : "body",
                d = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                h = 'a[href="#"]',
                l = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
                E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                v = document.createElement("style");
            v.appendChild(document.createTextNode(E));

            function g() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function A(S) {
                return _.test(S.hash) && S.host + S.pathname === r.host + r.pathname
            }
            let w = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function N() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || w.matches
            }

            function R(S, y) {
                var L;
                switch (y) {
                    case "add":
                        L = S.attr("tabindex"), L ? S.attr("data-wf-tabindex-swap", L) : S.attr("tabindex", "-1");
                        break;
                    case "remove":
                        L = S.attr("data-wf-tabindex-swap"), L ? (S.attr("tabindex", L), S.removeAttr("data-wf-tabindex-swap")) : S.removeAttr("tabindex");
                        break
                }
                S.toggleClass("wf-force-outline-none", y === "add")
            }

            function q(S) {
                var y = S.currentTarget;
                if (!(Ni.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(y.className))) {
                    var L = A(y) ? y.hash : "";
                    if (L !== "") {
                        var G = e(L);
                        G.length && (S && (S.preventDefault(), S.stopPropagation()), F(L, S), window.setTimeout(function() {
                            D(G, function() {
                                R(G, "add"), G.get(0).focus({
                                    preventScroll: !0
                                }), R(G, "remove")
                            })
                        }, S ? 0 : 300))
                    }
                }
            }

            function F(S) {
                if (r.hash !== S && n && n.pushState && !(Ni.env.chrome && r.protocol === "file:")) {
                    var y = n.state && n.state.hash;
                    y !== S && n.pushState({
                        hash: S
                    }, "", S)
                }
            }

            function D(S, y) {
                var L = i.scrollTop(),
                    G = j(S);
                if (L !== G) {
                    var k = z(S, L, G),
                        J = Date.now(),
                        ne = function() {
                            var U = Date.now() - J;
                            window.scroll(0, $(L, G, U, k)), U <= k ? s(ne) : typeof y == "function" && y()
                        };
                    s(ne)
                }
            }

            function j(S) {
                var y = e(d),
                    L = y.css("position") === "fixed" ? y.outerHeight() : 0,
                    G = S.offset().top - L;
                if (S.data("scroll") === "mid") {
                    var k = i.height() - L,
                        J = S.outerHeight();
                    J < k && (G -= Math.round((k - J) / 2))
                }
                return G
            }

            function z(S, y, L) {
                if (N()) return 0;
                var G = 1;
                return a.add(S).each(function(k, J) {
                    var ne = parseFloat(J.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (G = ne)
                }), (472.143 * Math.log(Math.abs(y - L) + 125) - 2e3) * G
            }

            function $(S, y, L, G) {
                return L > G ? y : S + (y - S) * te(L / G)
            }

            function te(S) {
                return S < .5 ? 4 * S * S * S : (S - 1) * (2 * S - 2) * (2 * S - 2) + 1
            }

            function X() {
                var {
                    WF_CLICK_EMPTY: S,
                    WF_CLICK_SCROLL: y
                } = t;
                o.on(y, l, q), o.on(S, h, function(L) {
                    L.preventDefault()
                }), document.head.insertBefore(v, document.head.firstChild)
            }
            return {
                ready: X
            }
        })
    });
    var Gb = c((dz, Fb) => {
        "use strict";
        var GV = Ne();
        GV.define("touch", Fb.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    d, h;
                o.addEventListener("touchstart", l, !1), o.addEventListener("touchmove", E, !1), o.addEventListener("touchend", v, !1), o.addEventListener("touchcancel", g, !1), o.addEventListener("mousedown", l, !1), o.addEventListener("mousemove", E, !1), o.addEventListener("mouseup", v, !1), o.addEventListener("mouseout", g, !1);

                function l(A) {
                    var w = A.touches;
                    w && w.length > 1 || (a = !0, w ? (s = !0, d = w[0].clientX) : d = A.clientX, h = d)
                }

                function E(A) {
                    if (a) {
                        if (s && A.type === "mousemove") {
                            A.preventDefault(), A.stopPropagation();
                            return
                        }
                        var w = A.touches,
                            N = w ? w[0].clientX : A.clientX,
                            R = N - h;
                        h = N, Math.abs(R) > u && r && String(r()) === "" && (i("swipe", A, {
                            direction: R > 0 ? "right" : "left"
                        }), g())
                    }
                }

                function v(A) {
                    if (a && (a = !1, s && A.type === "mouseup")) {
                        A.preventDefault(), A.stopPropagation(), s = !1;
                        return
                    }
                }

                function g() {
                    a = !1
                }

                function _() {
                    o.removeEventListener("touchstart", l, !1), o.removeEventListener("touchmove", E, !1), o.removeEventListener("touchend", v, !1), o.removeEventListener("touchcancel", g, !1), o.removeEventListener("mousedown", l, !1), o.removeEventListener("mousemove", E, !1), o.removeEventListener("mouseup", v, !1), o.removeEventListener("mouseout", g, !1), o = null
                }
                this.destroy = _
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var Vb = c((pz, kb) => {
        "use strict";
        var kt = Ne(),
            UV = br(),
            tt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Ub = !0,
            kV = /^#[a-zA-Z0-9\-_]+$/;
        kt.define("dropdown", kb.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = kt.env(),
                o = !1,
                a, s = kt.env.touch,
                u = ".w-dropdown",
                d = "w--open",
                h = UV.triggers,
                l = 900,
                E = "focusout" + u,
                v = "keydown" + u,
                g = "mouseenter" + u,
                _ = "mousemove" + u,
                A = "mouseleave" + u,
                w = (s ? "click" : "mouseup") + u,
                N = "w-close" + u,
                R = "setting" + u,
                q = e(document),
                F;
            n.ready = D, n.design = function() {
                o && y(), o = !1, D()
            }, n.preview = function() {
                o = !0, D()
            };

            function D() {
                a = i && kt.env("design"), F = q.find(u), F.each(j)
            }

            function j(p, V) {
                var W = e(V),
                    C = e.data(V, u);
                C || (C = e.data(V, u, {
                    open: !1,
                    el: W,
                    config: {},
                    selectedIdx: -1
                })), C.toggle = C.el.children(".w-dropdown-toggle"), C.list = C.el.children(".w-dropdown-list"), C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)"), C.complete = k(C), C.mouseLeave = ne(C), C.mouseUpOutside = G(C), C.mouseMoveOutside = U(C), z(C);
                var Q = C.toggle.attr("id"),
                    le = C.list.attr("id");
                Q || (Q = "w-dropdown-toggle-" + p), le || (le = "w-dropdown-list-" + p), C.toggle.attr("id", Q), C.toggle.attr("aria-controls", le), C.toggle.attr("aria-haspopup", "menu"), C.toggle.attr("aria-expanded", "false"), C.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), C.toggle.prop("tagName") !== "BUTTON" && (C.toggle.attr("role", "button"), C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")), C.list.attr("id", le), C.list.attr("aria-labelledby", Q), C.links.each(function(b, B) {
                    B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"), kV.test(B.hash) && B.addEventListener("click", S.bind(null, C))
                }), C.el.off(u), C.toggle.off(u), C.nav && C.nav.off(u);
                var oe = te(C, Ub);
                a && C.el.on(R, $(C)), a || (i && (C.hovering = !1, S(C)), C.config.hover && C.toggle.on(g, J(C)), C.el.on(N, oe), C.el.on(v, H(C)), C.el.on(E, I(C)), C.toggle.on(w, oe), C.toggle.on(v, m(C)), C.nav = C.el.closest(".w-nav"), C.nav.on(N, oe))
            }

            function z(p) {
                var V = Number(p.el.css("z-index"));
                p.manageZ = V === l || V === l + 1, p.config = {
                    hover: p.el.attr("data-hover") === "true" && !s,
                    delay: p.el.attr("data-delay")
                }
            }

            function $(p) {
                return function(V, W) {
                    W = W || {}, z(p), W.open === !0 && X(p, !0), W.open === !1 && S(p, {
                        immediate: !0
                    })
                }
            }

            function te(p, V) {
                return r(function(W) {
                    if (p.open || W && W.type === "w-close") return S(p, {
                        forceClose: V
                    });
                    X(p)
                })
            }

            function X(p) {
                if (!p.open) {
                    L(p), p.open = !0, p.list.addClass(d), p.toggle.addClass(d), p.toggle.attr("aria-expanded", "true"), h.intro(0, p.el[0]), kt.redraw.up(), p.manageZ && p.el.css("z-index", l + 1);
                    var V = kt.env("editor");
                    a || q.on(w, p.mouseUpOutside), p.hovering && !V && p.el.on(A, p.mouseLeave), p.hovering && V && q.on(_, p.mouseMoveOutside), window.clearTimeout(p.delayId)
                }
            }

            function S(p, {
                immediate: V,
                forceClose: W
            } = {}) {
                if (p.open && !(p.config.hover && p.hovering && !W)) {
                    p.toggle.attr("aria-expanded", "false"), p.open = !1;
                    var C = p.config;
                    if (h.outro(0, p.el[0]), q.off(w, p.mouseUpOutside), q.off(_, p.mouseMoveOutside), p.el.off(A, p.mouseLeave), window.clearTimeout(p.delayId), !C.delay || V) return p.complete();
                    p.delayId = window.setTimeout(p.complete, C.delay)
                }
            }

            function y() {
                q.find(u).each(function(p, V) {
                    e(V).triggerHandler(N)
                })
            }

            function L(p) {
                var V = p.el[0];
                F.each(function(W, C) {
                    var Q = e(C);
                    Q.is(V) || Q.has(V).length || Q.triggerHandler(N)
                })
            }

            function G(p) {
                return p.mouseUpOutside && q.off(w, p.mouseUpOutside), r(function(V) {
                    if (p.open) {
                        var W = e(V.target);
                        if (!W.closest(".w-dropdown-toggle").length) {
                            var C = e.inArray(p.el[0], W.parents(u)) === -1,
                                Q = kt.env("editor");
                            if (C) {
                                if (Q) {
                                    var le = W.parents().length === 1 && W.parents("svg").length === 1,
                                        oe = W.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (le || oe) return
                                }
                                S(p)
                            }
                        }
                    }
                })
            }

            function k(p) {
                return function() {
                    p.list.removeClass(d), p.toggle.removeClass(d), p.manageZ && p.el.css("z-index", "")
                }
            }

            function J(p) {
                return function() {
                    p.hovering = !0, X(p)
                }
            }

            function ne(p) {
                return function() {
                    p.hovering = !1, p.links.is(":focus") || S(p)
                }
            }

            function U(p) {
                return r(function(V) {
                    if (p.open) {
                        var W = e(V.target),
                            C = e.inArray(p.el[0], W.parents(u)) === -1;
                        if (C) {
                            var Q = W.parents(".w-editor-bem-EditorHoverControls").length,
                                le = W.parents(".w-editor-bem-RTToolbar").length,
                                oe = e(".w-editor-bem-EditorOverlay"),
                                b = oe.find(".w-editor-edit-outline").length || oe.find(".w-editor-bem-RTToolbar").length;
                            if (Q || le || b) return;
                            p.hovering = !1, S(p)
                        }
                    }
                })
            }

            function H(p) {
                return function(V) {
                    if (!(a || !p.open)) switch (p.selectedIdx = p.links.index(document.activeElement), V.keyCode) {
                        case tt.HOME:
                            return p.open ? (p.selectedIdx = 0, Z(p), V.preventDefault()) : void 0;
                        case tt.END:
                            return p.open ? (p.selectedIdx = p.links.length - 1, Z(p), V.preventDefault()) : void 0;
                        case tt.ESCAPE:
                            return S(p), p.toggle.focus(), V.stopPropagation();
                        case tt.ARROW_RIGHT:
                        case tt.ARROW_DOWN:
                            return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1), Z(p), V.preventDefault();
                        case tt.ARROW_LEFT:
                        case tt.ARROW_UP:
                            return p.selectedIdx = Math.max(-1, p.selectedIdx - 1), Z(p), V.preventDefault()
                    }
                }
            }

            function Z(p) {
                p.links[p.selectedIdx] && p.links[p.selectedIdx].focus()
            }

            function m(p) {
                var V = te(p, Ub);
                return function(W) {
                    if (!a) {
                        if (!p.open) switch (W.keyCode) {
                            case tt.ARROW_UP:
                            case tt.ARROW_DOWN:
                                return W.stopPropagation()
                        }
                        switch (W.keyCode) {
                            case tt.SPACE:
                            case tt.ENTER:
                                return V(), W.stopPropagation(), W.preventDefault()
                        }
                    }
                }
            }

            function I(p) {
                return r(function(V) {
                    var {
                        relatedTarget: W,
                        target: C
                    } = V, Q = p.el[0], le = Q.contains(W) || Q.contains(C);
                    return le || S(p), V.stopPropagation()
                })
            }
            return n
        })
    });
    var Hb = c(Ls => {
        "use strict";
        Object.defineProperty(Ls, "__esModule", {
            value: !0
        });
        Ls.default = VV;

        function VV(e, t, r, n, i, o, a, s, u, d, h, l, E) {
            return function(v) {
                e(v);
                var g = v.form,
                    _ = {
                        name: g.attr("data-name") || g.attr("name") || "Untitled Form",
                        pageId: g.attr("data-wf-page-id") || "",
                        elementId: g.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(g.html()),
                        trackingCookies: n()
                    };
                let A = g.attr("data-wf-flow");
                A && (_.wfFlow = A), i(v);
                var w = o(g, _.fields);
                if (w) return a(w);
                if (_.fileUploads = s(g), u(v), !d) {
                    h(v);
                    return
                }
                l.ajax({
                    url: E,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(N) {
                    N && N.code === 200 && (v.success = !0), h(v)
                }).fail(function() {
                    h(v)
                })
            }
        }
    });
    var Xb = c((gz, Wb) => {
        "use strict";
        var Pi = Ne();
        Pi.define("forms", Wb.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                u, d = /e(-)?mail/i,
                h = /^\S+@\S+$/,
                l = window.alert,
                E = Pi.env(),
                v, g, _, A = /list-manage[1-9]?.com/i,
                w = t.debounce(function() {
                    l("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                N(), !E && !v && q()
            };

            function N() {
                u = e("html").attr("data-wf-site"), g = "https://webflow.com/api/v1/form/" + u, a && g.indexOf("https://webflow.com") >= 0 && (g = g.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${g}/signFile`, i = e(s + " form"), i.length && i.each(R)
            }

            function R(U, H) {
                var Z = e(H),
                    m = e.data(H, s);
                m || (m = e.data(H, s, {
                    form: Z
                })), F(m);
                var I = Z.closest("div.w-form");
                m.done = I.find("> .w-form-done"), m.fail = I.find("> .w-form-fail"), m.fileUploads = I.find(".w-file-upload"), m.fileUploads.each(function(W) {
                    k(W, m)
                });
                var p = m.form.attr("aria-label") || m.form.attr("data-name") || "Form";
                m.done.attr("aria-label") || m.form.attr("aria-label", p), m.done.attr("tabindex", "-1"), m.done.attr("role", "region"), m.done.attr("aria-label") || m.done.attr("aria-label", p + " success"), m.fail.attr("tabindex", "-1"), m.fail.attr("role", "region"), m.fail.attr("aria-label") || m.fail.attr("aria-label", p + " failure");
                var V = m.action = Z.attr("action");
                if (m.handler = null, m.redirect = Z.attr("data-redirect"), A.test(V)) {
                    m.handler = y;
                    return
                }
                if (!V) {
                    if (u) {
                        m.handler = (() => {
                            let W = Hb().default;
                            return W(F, o, Pi, te, G, j, l, z, D, u, L, e, g)
                        })();
                        return
                    }
                    w()
                }
            }

            function q() {
                v = !0, n.on("submit", s + " form", function(W) {
                    var C = e.data(this, s);
                    C.handler && (C.evt = W, C.handler(C))
                });
                let U = ".w-checkbox-input",
                    H = ".w-radio-input",
                    Z = "w--redirected-checked",
                    m = "w--redirected-focus",
                    I = "w--redirected-focus-visible",
                    p = ":focus-visible, [data-wf-focus-visible]",
                    V = [
                        ["checkbox", U],
                        ["radio", H]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + U + ")", W => {
                    e(W.target).siblings(U).toggleClass(Z)
                }), n.on("change", s + ' form input[type="radio"]', W => {
                    e(`input[name="${W.target.name}"]:not(${U})`).map((Q, le) => e(le).siblings(H).removeClass(Z));
                    let C = e(W.target);
                    C.hasClass("w-radio-input") || C.siblings(H).addClass(Z)
                }), V.forEach(([W, C]) => {
                    n.on("focus", s + ` form input[type="${W}"]:not(` + C + ")", Q => {
                        e(Q.target).siblings(C).addClass(m), e(Q.target).filter(p).siblings(C).addClass(I)
                    }), n.on("blur", s + ` form input[type="${W}"]:not(` + C + ")", Q => {
                        e(Q.target).siblings(C).removeClass(`${m} ${I}`)
                    })
                })
            }

            function F(U) {
                var H = U.btn = U.form.find(':input[type="submit"]');
                U.wait = U.btn.attr("data-wait") || null, U.success = !1, H.prop("disabled", !1), U.label && H.val(U.label)
            }

            function D(U) {
                var H = U.btn,
                    Z = U.wait;
                H.prop("disabled", !0), Z && (U.label = H.val(), H.val(Z))
            }

            function j(U, H) {
                var Z = null;
                return H = H || {}, U.find(':input:not([type="submit"]):not([type="file"])').each(function(m, I) {
                    var p = e(I),
                        V = p.attr("type"),
                        W = p.attr("data-name") || p.attr("name") || "Field " + (m + 1),
                        C = p.val();
                    if (V === "checkbox") C = p.is(":checked");
                    else if (V === "radio") {
                        if (H[W] === null || typeof H[W] == "string") return;
                        C = U.find('input[name="' + p.attr("name") + '"]:checked').val() || null
                    }
                    typeof C == "string" && (C = e.trim(C)), H[W] = C, Z = Z || X(p, V, W, C)
                }), Z
            }

            function z(U) {
                var H = {};
                return U.find(':input[type="file"]').each(function(Z, m) {
                    var I = e(m),
                        p = I.attr("data-name") || I.attr("name") || "File " + (Z + 1),
                        V = I.attr("data-value");
                    typeof V == "string" && (V = e.trim(V)), H[p] = V
                }), H
            }
            let $ = {
                _mkto_trk: "marketo"
            };

            function te() {
                return document.cookie.split("; ").reduce(function(H, Z) {
                    let m = Z.split("="),
                        I = m[0];
                    if (I in $) {
                        let p = $[I],
                            V = m.slice(1).join("=");
                        H[p] = V
                    }
                    return H
                }, {})
            }

            function X(U, H, Z, m) {
                var I = null;
                return H === "password" ? I = "Passwords cannot be submitted." : U.attr("required") ? m ? d.test(U.attr("type")) && (h.test(m) || (I = "Please enter a valid email address for: " + Z)) : I = "Please fill out the required field: " + Z : Z === "g-recaptcha-response" && !m && (I = "Please confirm you\u2019re not a robot."), I
            }

            function S(U) {
                G(U), L(U)
            }

            function y(U) {
                F(U);
                var H = U.form,
                    Z = {};
                if (/^https/.test(o.href) && !/^https/.test(U.action)) {
                    H.attr("method", "post");
                    return
                }
                G(U);
                var m = j(H, Z);
                if (m) return l(m);
                D(U);
                var I;
                t.each(Z, function(C, Q) {
                    d.test(Q) && (Z.EMAIL = C), /^((full[ _-]?)?name)$/i.test(Q) && (I = C), /^(first[ _-]?name)$/i.test(Q) && (Z.FNAME = C), /^(last[ _-]?name)$/i.test(Q) && (Z.LNAME = C)
                }), I && !Z.FNAME && (I = I.split(" "), Z.FNAME = I[0], Z.LNAME = Z.LNAME || I[1]);
                var p = U.action.replace("/post?", "/post-json?") + "&c=?",
                    V = p.indexOf("u=") + 2;
                V = p.substring(V, p.indexOf("&", V));
                var W = p.indexOf("id=") + 3;
                W = p.substring(W, p.indexOf("&", W)), Z["b_" + V + "_" + W] = "", e.ajax({
                    url: p,
                    data: Z,
                    dataType: "jsonp"
                }).done(function(C) {
                    U.success = C.result === "success" || /already/.test(C.msg), U.success || console.info("MailChimp error: " + C.msg), L(U)
                }).fail(function() {
                    L(U)
                })
            }

            function L(U) {
                var H = U.form,
                    Z = U.redirect,
                    m = U.success;
                if (m && Z) {
                    Pi.location(Z);
                    return
                }
                U.done.toggle(m), U.fail.toggle(!m), m ? U.done.focus() : U.fail.focus(), H.toggle(!m), F(U)
            }

            function G(U) {
                U.evt && U.evt.preventDefault(), U.evt = null
            }

            function k(U, H) {
                if (!H.fileUploads || !H.fileUploads[U]) return;
                var Z, m = e(H.fileUploads[U]),
                    I = m.find("> .w-file-upload-default"),
                    p = m.find("> .w-file-upload-uploading"),
                    V = m.find("> .w-file-upload-success"),
                    W = m.find("> .w-file-upload-error"),
                    C = I.find(".w-file-upload-input"),
                    Q = I.find(".w-file-upload-label"),
                    le = Q.children(),
                    oe = W.find(".w-file-upload-error-msg"),
                    b = V.find(".w-file-upload-file"),
                    B = V.find(".w-file-remove-link"),
                    ee = b.find(".w-file-upload-file-name"),
                    Y = oe.attr("data-w-size-error"),
                    de = oe.attr("data-w-type-error"),
                    Xe = oe.attr("data-w-generic-error");
                if (E || Q.on("click keydown", function(x) {
                        x.type === "keydown" && x.which !== 13 && x.which !== 32 || (x.preventDefault(), C.click())
                    }), Q.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), E) C.on("click", function(x) {
                    x.preventDefault()
                }), Q.on("click", function(x) {
                    x.preventDefault()
                }), le.on("click", function(x) {
                    x.preventDefault()
                });
                else {
                    B.on("click keydown", function(x) {
                        if (x.type === "keydown") {
                            if (x.which !== 13 && x.which !== 32) return;
                            x.preventDefault()
                        }
                        C.removeAttr("data-value"), C.val(""), ee.html(""), I.toggle(!0), V.toggle(!1), Q.focus()
                    }), C.on("change", function(x) {
                        Z = x.target && x.target.files && x.target.files[0], Z && (I.toggle(!1), W.toggle(!1), p.toggle(!0), p.focus(), ee.text(Z.name), P() || D(H), H.fileUploads[U].uploading = !0, J(Z, T))
                    });
                    var De = Q.outerHeight();
                    C.height(De), C.width(1)
                }

                function f(x) {
                    var M = x.responseJSON && x.responseJSON.msg,
                        re = Xe;
                    typeof M == "string" && M.indexOf("InvalidFileTypeError") === 0 ? re = de : typeof M == "string" && M.indexOf("MaxFileSizeError") === 0 && (re = Y), oe.text(re), C.removeAttr("data-value"), C.val(""), p.toggle(!1), I.toggle(!0), W.toggle(!0), W.focus(), H.fileUploads[U].uploading = !1, P() || F(H)
                }

                function T(x, M) {
                    if (x) return f(x);
                    var re = M.fileName,
                        ae = M.postData,
                        ge = M.fileId,
                        K = M.s3Url;
                    C.attr("data-value", ge), ne(K, ae, Z, re, O)
                }

                function O(x) {
                    if (x) return f(x);
                    p.toggle(!1), V.css("display", "inline-block"), V.focus(), H.fileUploads[U].uploading = !1, P() || F(H)
                }

                function P() {
                    var x = H.fileUploads && H.fileUploads.toArray() || [];
                    return x.some(function(M) {
                        return M.uploading
                    })
                }
            }

            function J(U, H) {
                var Z = new URLSearchParams({
                    name: U.name,
                    size: U.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${Z}`,
                    crossDomain: !0
                }).done(function(m) {
                    H(null, m)
                }).fail(function(m) {
                    H(m)
                })
            }

            function ne(U, H, Z, m, I) {
                var p = new FormData;
                for (var V in H) p.append(V, H[V]);
                p.append("file", Z, m), e.ajax({
                    type: "POST",
                    url: U,
                    data: p,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    I(null)
                }).fail(function(W) {
                    I(W)
                })
            }
            return r
        })
    });
    var zb = c((hz, jb) => {
        "use strict";
        var Ns = Ne(),
            Bb = "w-condition-invisible",
            HV = "." + Bb;

        function WV(e) {
            return e.filter(function(t) {
                return !an(t)
            })
        }

        function an(e) {
            return !!(e.$el && e.$el.closest(HV).length)
        }

        function Ps(e, t) {
            for (var r = e; r >= 0; r--)
                if (!an(t[r])) return r;
            return -1
        }

        function qs(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!an(t[r])) return r;
            return -1
        }

        function XV(e, t) {
            return Ps(e - 1, t) === -1
        }

        function BV(e, t) {
            return qs(e + 1, t) === -1
        }

        function on(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }

        function jV(e, t, r, n) {
            var i = r.tram,
                o = Array.isArray,
                a = "w-lightbox",
                s = a + "-",
                u = /(^|\s+)/g,
                d = [],
                h, l, E, v = [];

            function g(m, I) {
                return d = o(m) ? m : [m], l || g.build(), WV(d).length > 1 && (l.items = l.empty, d.forEach(function(p, V) {
                    var W = H("thumbnail"),
                        C = H("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(W);
                    on(C, `show item ${V+1} of ${d.length}`), an(p) && C.addClass(Bb), l.items = l.items.add(C), te(p.thumbnailUrl || p.url, function(Q) {
                        Q.prop("width") > Q.prop("height") ? k(Q, "wide") : k(Q, "tall"), W.append(k(Q, "thumbnail-image"))
                    })
                }), l.strip.empty().append(l.items), k(l.content, "group")), i(J(l.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), k(l.html, "noscroll"), g.show(I || 0)
            }
            g.build = function() {
                return g.destroy(), l = {
                    html: r(t.documentElement),
                    empty: r()
                }, l.arrowLeft = H("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), l.arrowRight = H("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), l.close = H("control close").attr("role", "button"), on(l.arrowLeft, "previous image"), on(l.arrowRight, "next image"), on(l.close, "close lightbox"), l.spinner = H("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), l.strip = H("strip").attr("role", "tablist"), E = new y(l.spinner, L("hide")), l.content = H("content").append(l.spinner, l.arrowLeft, l.arrowRight, l.close), l.container = H("container").append(l.content, l.strip), l.lightbox = H("backdrop hide").append(l.container), l.strip.on("click", G("item"), R), l.content.on("swipe", q).on("click", G("left"), A).on("click", G("right"), w).on("click", G("close"), N).on("click", G("image, caption"), w), l.container.on("click", G("view"), N).on("dragstart", G("img"), D), l.lightbox.on("keydown", j).on("focusin", F), r(n).append(l.lightbox), g
            }, g.destroy = function() {
                l && (J(l.html, "noscroll"), l.lightbox.remove(), l = void 0)
            }, g.show = function(m) {
                if (m !== h) {
                    var I = d[m];
                    if (!I) return g.hide();
                    if (an(I)) {
                        if (m < h) {
                            var p = Ps(m - 1, d);
                            m = p > -1 ? p : m
                        } else {
                            var V = qs(m + 1, d);
                            m = V > -1 ? V : m
                        }
                        I = d[m]
                    }
                    var W = h;
                    h = m, l.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), E.show();
                    var C = I.html && Z(I.width, I.height) || I.url;
                    return te(C, function(Q) {
                        if (m !== h) return;
                        var le = H("figure", "figure").append(k(Q, "image")),
                            oe = H("frame").append(le),
                            b = H("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(oe),
                            B, ee;
                        I.html && (B = r(I.html), ee = B.is("iframe"), ee && B.on("load", Y), le.append(k(B, "embed"))), I.caption && le.append(H("caption", "figcaption").text(I.caption)), l.spinner.before(b), ee || Y();

                        function Y() {
                            if (l.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), E.hide(), m !== h) {
                                b.remove();
                                return
                            }
                            let de = XV(m, d);
                            ne(l.arrowLeft, "inactive", de), U(l.arrowLeft, de), de && l.arrowLeft.is(":focus") && l.arrowRight.focus();
                            let Xe = BV(m, d);
                            if (ne(l.arrowRight, "inactive", Xe), U(l.arrowRight, Xe), Xe && l.arrowRight.is(":focus") && l.arrowLeft.focus(), l.view ? (i(l.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then(X(l.view)), i(b).add("opacity .3s").add("transform .3s").set({
                                    x: m > W ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : b.css("opacity", 1), l.view = b, l.view.prop("tabIndex", 0), l.items) {
                                J(l.items, "active"), l.items.removeAttr("aria-selected");
                                var De = l.items.eq(m);
                                k(De, "active"), De.attr("aria-selected", !0), S(De)
                            }
                        }
                    }), l.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), v.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (v.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }), l.close.focus()), g
                }
            }, g.hide = function() {
                return i(l.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then($), g
            }, g.prev = function() {
                var m = Ps(h - 1, d);
                m > -1 && g.show(m)
            }, g.next = function() {
                var m = qs(h + 1, d);
                m > -1 && g.show(m)
            };

            function _(m) {
                return function(I) {
                    this === I.target && (I.stopPropagation(), I.preventDefault(), m())
                }
            }
            var A = _(g.prev),
                w = _(g.next),
                N = _(g.hide),
                R = function(m) {
                    var I = r(this).index();
                    m.preventDefault(), g.show(I)
                },
                q = function(m, I) {
                    m.preventDefault(), I.direction === "left" ? g.next() : I.direction === "right" && g.prev()
                },
                F = function() {
                    this.focus()
                };

            function D(m) {
                m.preventDefault()
            }

            function j(m) {
                var I = m.keyCode;
                I === 27 || z(I, "close") ? g.hide() : I === 37 || z(I, "left") ? g.prev() : I === 39 || z(I, "right") ? g.next() : z(I, "item") && r(":focus").click()
            }

            function z(m, I) {
                if (m !== 13 && m !== 32) return !1;
                var p = r(":focus").attr("class"),
                    V = L(I).trim();
                return p.includes(V)
            }

            function $() {
                l && (l.strip.scrollLeft(0).empty(), J(l.html, "noscroll"), k(l.lightbox, "hide"), l.view && l.view.remove(), J(l.content, "group"), k(l.arrowLeft, "inactive"), k(l.arrowRight, "inactive"), h = l.view = void 0, v.forEach(function(m) {
                    var I = m.node;
                    I && (m.hidden ? I.attr("aria-hidden", m.hidden) : I.removeAttr("aria-hidden"), m.tabIndex ? I.attr("tabIndex", m.tabIndex) : I.removeAttr("tabIndex"))
                }), v = [], r(".active-lightbox").removeClass("active-lightbox").focus())
            }

            function te(m, I) {
                var p = H("img", "img");
                return p.one("load", function() {
                    I(p)
                }), p.attr("src", m), p
            }

            function X(m) {
                return function() {
                    m.remove()
                }
            }

            function S(m) {
                var I = m.get(0),
                    p = l.strip.get(0),
                    V = I.offsetLeft,
                    W = I.clientWidth,
                    C = p.scrollLeft,
                    Q = p.clientWidth,
                    le = p.scrollWidth - Q,
                    oe;
                V < C ? oe = Math.max(0, V + W - Q) : V + W > Q + C && (oe = Math.min(V, le)), oe != null && i(l.strip).add("scroll-left 500ms").start({
                    "scroll-left": oe
                })
            }

            function y(m, I, p) {
                this.$element = m, this.className = I, this.delay = p || 200, this.hide()
            }
            y.prototype.show = function() {
                var m = this;
                m.timeoutId || (m.timeoutId = setTimeout(function() {
                    m.$element.removeClass(m.className), delete m.timeoutId
                }, m.delay))
            }, y.prototype.hide = function() {
                var m = this;
                if (m.timeoutId) {
                    clearTimeout(m.timeoutId), delete m.timeoutId;
                    return
                }
                m.$element.addClass(m.className)
            };

            function L(m, I) {
                return m.replace(u, (I ? " ." : " ") + s)
            }

            function G(m) {
                return L(m, !0)
            }

            function k(m, I) {
                return m.addClass(L(I))
            }

            function J(m, I) {
                return m.removeClass(L(I))
            }

            function ne(m, I, p) {
                return m.toggleClass(L(I), p)
            }

            function U(m, I) {
                return m.attr("aria-hidden", I).attr("tabIndex", I ? -1 : 0)
            }

            function H(m, I) {
                return k(r(t.createElement(I || "div")), m)
            }

            function Z(m, I) {
                var p = '<svg xmlns="http://www.w3.org/2000/svg" width="' + m + '" height="' + I + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(p)
            }
            return function() {
                var m = e.navigator.userAgent,
                    I = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                    p = m.match(I),
                    V = m.indexOf("Android ") > -1 && m.indexOf("Chrome") === -1;
                if (!V && (!p || p[2] > 7)) return;
                var W = t.createElement("style");
                t.head.appendChild(W), e.addEventListener("resize", C, !0);

                function C() {
                    var Q = e.innerHeight,
                        le = e.innerWidth,
                        oe = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Q + "px}.w-lightbox-view {width:" + le + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Q + "px}.w-lightbox-image {max-width:" + le + "px;max-height:" + Q + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Q + "px}.w-lightbox-strip {padding: 0 " + .01 * Q + "px}.w-lightbox-item {width:" + .1 * Q + "px;padding:" + .02 * Q + "px " + .01 * Q + "px}.w-lightbox-thumbnail {height:" + .1 * Q + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Q + "px}.w-lightbox-content {margin-top:" + .02 * Q + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Q + "px}.w-lightbox-image {max-width:" + .96 * le + "px;max-height:" + .96 * Q + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * le + "px;max-height:" + .84 * Q + "px}}";
                    W.textContent = oe
                }
                C()
            }(), g
        }
        Ns.define("lightbox", jb.exports = function(e) {
            var t = {},
                r = Ns.env(),
                n = jV(window, document, e, r ? "#lightbox-mountpoint" : "body"),
                i = e(document),
                o, a, s = ".w-lightbox",
                u;
            t.ready = t.design = t.preview = d;

            function d() {
                a = r && Ns.env("design"), n.destroy(), u = {}, o = i.find(s), o.webflowLightBox(), o.each(function() {
                    on(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var v = this;
                    e.each(v, function(g, _) {
                        var A = e.data(_, s);
                        A || (A = e.data(_, s, {
                            el: e(_),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), A.el.off(s), h(A), a ? A.el.on("setting" + s, h.bind(null, A)) : A.el.on("click" + s, l(A)).on("click" + s, function(w) {
                            w.preventDefault()
                        })
                    })
                }
            });

            function h(v) {
                var g = v.el.children(".w-json").html(),
                    _, A;
                if (!g) {
                    v.items = [];
                    return
                }
                try {
                    g = JSON.parse(g)
                } catch (w) {
                    console.error("Malformed lightbox JSON configuration.", w)
                }
                E(g), g.items.forEach(function(w) {
                    w.$el = v.el
                }), _ = g.group, _ ? (A = u[_], A || (A = u[_] = []), v.items = A, g.items.length && (v.index = A.length, A.push.apply(A, g.items))) : (v.items = g.items, v.index = 0)
            }

            function l(v) {
                return function() {
                    v.items.length && n(v.items, v.index || 0)
                }
            }

            function E(v) {
                v.images && (v.images.forEach(function(g) {
                    g.type = "image"
                }), v.items = v.images), v.embed && (v.embed.type = "video", v.items = [v.embed]), v.groupId && (v.group = v.groupId)
            }
            return t
        })
    });
    var Yb = c((mz, Kb) => {
        "use strict";
        var At = Ne(),
            zV = br(),
            Se = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        At.define("navbar", Kb.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, u, d, h, l = At.env(),
                E = '<div class="w-nav-overlay" data-wf-ignore />',
                v = ".w-nav",
                g = "w--open",
                _ = "w--nav-dropdown-open",
                A = "w--nav-dropdown-toggle-open",
                w = "w--nav-dropdown-list-open",
                N = "w--nav-link-open",
                R = zV.triggers,
                q = e();
            r.ready = r.design = r.preview = F, r.destroy = function() {
                q = e(), D(), u && u.length && u.each(te)
            };

            function F() {
                d = l && At.env("design"), h = At.env("editor"), s = e(document.body), u = o.find(v), u.length && (u.each($), D(), j())
            }

            function D() {
                At.resize.off(z)
            }

            function j() {
                At.resize.on(z)
            }

            function z() {
                u.each(I)
            }

            function $(b, B) {
                var ee = e(B),
                    Y = e.data(B, v);
                Y || (Y = e.data(B, v, {
                    open: !1,
                    el: ee,
                    config: {},
                    selectedIdx: -1
                })), Y.menu = ee.find(".w-nav-menu"), Y.links = Y.menu.find(".w-nav-link"), Y.dropdowns = Y.menu.find(".w-dropdown"), Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle"), Y.dropdownList = Y.menu.find(".w-dropdown-list"), Y.button = ee.find(".w-nav-button"), Y.container = ee.find(".w-container"), Y.overlayContainerId = "w-nav-overlay-" + b, Y.outside = Z(Y);
                var de = ee.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"), Y.button.attr("style", "-webkit-user-select: text;"), Y.button.attr("aria-label") == null && Y.button.attr("aria-label", "menu"), Y.button.attr("role", "button"), Y.button.attr("tabindex", "0"), Y.button.attr("aria-controls", Y.overlayContainerId), Y.button.attr("aria-haspopup", "menu"), Y.button.attr("aria-expanded", "false"), Y.el.off(v), Y.button.off(v), Y.menu.off(v), y(Y), d ? (X(Y), Y.el.on("setting" + v, L(Y))) : (S(Y), Y.button.on("click" + v, U(Y)), Y.menu.on("click" + v, "a", H(Y)), Y.button.on("keydown" + v, G(Y)), Y.el.on("keydown" + v, k(Y))), I(b, B)
            }

            function te(b, B) {
                var ee = e.data(B, v);
                ee && (X(ee), e.removeData(B, v))
            }

            function X(b) {
                b.overlay && (oe(b, !0), b.overlay.remove(), b.overlay = null)
            }

            function S(b) {
                b.overlay || (b.overlay = e(E).appendTo(b.el), b.overlay.attr("id", b.overlayContainerId), b.parent = b.menu.parent(), oe(b, !0))
            }

            function y(b) {
                var B = {},
                    ee = b.config || {},
                    Y = B.animation = b.el.attr("data-animation") || "default";
                B.animOver = /^over/.test(Y), B.animDirect = /left$/.test(Y) ? -1 : 1, ee.animation !== Y && b.open && t.defer(ne, b), B.easing = b.el.attr("data-easing") || "ease", B.easing2 = b.el.attr("data-easing2") || "ease";
                var de = b.el.attr("data-duration");
                B.duration = de != null ? Number(de) : 400, B.docHeight = b.el.attr("data-doc-height"), b.config = B
            }

            function L(b) {
                return function(B, ee) {
                    ee = ee || {};
                    var Y = i.width();
                    y(b), ee.open === !0 && Q(b, !0), ee.open === !1 && oe(b, !0), b.open && t.defer(function() {
                        Y !== i.width() && ne(b)
                    })
                }
            }

            function G(b) {
                return function(B) {
                    switch (B.keyCode) {
                        case Se.SPACE:
                        case Se.ENTER:
                            return U(b)(), B.preventDefault(), B.stopPropagation();
                        case Se.ESCAPE:
                            return oe(b), B.preventDefault(), B.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                        case Se.HOME:
                        case Se.END:
                            return b.open ? (B.keyCode === Se.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0, J(b), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation())
                    }
                }
            }

            function k(b) {
                return function(B) {
                    if (b.open) switch (b.selectedIdx = b.links.index(document.activeElement), B.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return B.keyCode === Se.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0, J(b), B.preventDefault(), B.stopPropagation();
                        case Se.ESCAPE:
                            return oe(b), b.button.focus(), B.preventDefault(), B.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return b.selectedIdx = Math.max(-1, b.selectedIdx - 1), J(b), B.preventDefault(), B.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1), J(b), B.preventDefault(), B.stopPropagation()
                    }
                }
            }

            function J(b) {
                if (b.links[b.selectedIdx]) {
                    var B = b.links[b.selectedIdx];
                    B.focus(), H(B)
                }
            }

            function ne(b) {
                b.open && (oe(b, !0), Q(b, !0))
            }

            function U(b) {
                return a(function() {
                    b.open ? oe(b) : Q(b)
                })
            }

            function H(b) {
                return function(B) {
                    var ee = e(this),
                        Y = ee.attr("href");
                    if (!At.validClick(B.currentTarget)) {
                        B.preventDefault();
                        return
                    }
                    Y && Y.indexOf("#") === 0 && b.open && oe(b)
                }
            }

            function Z(b) {
                return b.outside && o.off("click" + v, b.outside),
                    function(B) {
                        var ee = e(B.target);
                        h && ee.closest(".w-editor-bem-EditorOverlay").length || m(b, ee)
                    }
            }
            var m = a(function(b, B) {
                if (b.open) {
                    var ee = B.closest(".w-nav-menu");
                    b.menu.is(ee) || oe(b)
                }
            });

            function I(b, B) {
                var ee = e.data(B, v),
                    Y = ee.collapsed = ee.button.css("display") !== "none";
                if (ee.open && !Y && !d && oe(ee, !0), ee.container.length) {
                    var de = V(ee);
                    ee.links.each(de), ee.dropdowns.each(de)
                }
                ee.open && le(ee)
            }
            var p = "max-width";

            function V(b) {
                var B = b.container.css(p);
                return B === "none" && (B = ""),
                    function(ee, Y) {
                        Y = e(Y), Y.css(p, ""), Y.css(p) === "none" && Y.css(p, B)
                    }
            }

            function W(b, B) {
                B.setAttribute("data-nav-menu-open", "")
            }

            function C(b, B) {
                B.removeAttribute("data-nav-menu-open")
            }

            function Q(b, B) {
                if (b.open) return;
                b.open = !0, b.menu.each(W), b.links.addClass(N), b.dropdowns.addClass(_), b.dropdownToggle.addClass(A), b.dropdownList.addClass(w), b.button.addClass(g);
                var ee = b.config,
                    Y = ee.animation;
                (Y === "none" || !n.support.transform || ee.duration <= 0) && (B = !0);
                var de = le(b),
                    Xe = b.menu.outerHeight(!0),
                    De = b.menu.outerWidth(!0),
                    f = b.el.height(),
                    T = b.el[0];
                if (I(0, T), R.intro(0, T), At.redraw.up(), d || o.on("click" + v, b.outside), B) {
                    x();
                    return
                }
                var O = "transform " + ee.duration + "ms " + ee.easing;
                if (b.overlay && (q = b.menu.prev(), b.overlay.show().append(b.menu)), ee.animOver) {
                    n(b.menu).add(O).set({
                        x: ee.animDirect * De,
                        height: de
                    }).start({
                        x: 0
                    }).then(x), b.overlay && b.overlay.width(De);
                    return
                }
                var P = f + Xe;
                n(b.menu).add(O).set({
                    y: -P
                }).start({
                    y: 0
                }).then(x);

                function x() {
                    b.button.attr("aria-expanded", "true")
                }
            }

            function le(b) {
                var B = b.config,
                    ee = B.docHeight ? o.height() : s.height();
                return B.animOver ? b.menu.height(ee) : b.el.css("position") !== "fixed" && (ee -= b.el.outerHeight(!0)), b.overlay && b.overlay.height(ee), ee
            }

            function oe(b, B) {
                if (!b.open) return;
                b.open = !1, b.button.removeClass(g);
                var ee = b.config;
                if ((ee.animation === "none" || !n.support.transform || ee.duration <= 0) && (B = !0), R.outro(0, b.el[0]), o.off("click" + v, b.outside), B) {
                    n(b.menu).stop(), T();
                    return
                }
                var Y = "transform " + ee.duration + "ms " + ee.easing2,
                    de = b.menu.outerHeight(!0),
                    Xe = b.menu.outerWidth(!0),
                    De = b.el.height();
                if (ee.animOver) {
                    n(b.menu).add(Y).start({
                        x: Xe * ee.animDirect
                    }).then(T);
                    return
                }
                var f = De + de;
                n(b.menu).add(Y).start({
                    y: -f
                }).then(T);

                function T() {
                    b.menu.height(""), n(b.menu).set({
                        x: 0,
                        y: 0
                    }), b.menu.each(C), b.links.removeClass(N), b.dropdowns.removeClass(_), b.dropdownToggle.removeClass(A), b.dropdownList.removeClass(w), b.overlay && b.overlay.children().length && (q.length ? b.menu.insertAfter(q) : b.menu.prependTo(b.parent), b.overlay.attr("style", "").hide()), b.el.triggerHandler("w-close"), b.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var Qb = c((yz, $b) => {
        "use strict";
        var St = Ne(),
            KV = br();
        St.define("tabs", $b.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, a = St.env,
                s = a.safari,
                u = a(),
                d = "data-w-tab",
                h = "data-w-pane",
                l = ".w-tabs",
                E = "w--current",
                v = "w--tab-active",
                g = KV.triggers,
                _ = !1;
            t.ready = t.design = t.preview = A, t.redraw = function() {
                _ = !0, A(), _ = !1
            }, t.destroy = function() {
                i = n.find(l), i.length && (i.each(R), w())
            };

            function A() {
                o = u && St.env("design"), i = n.find(l), i.length && (i.each(q), St.env("preview") && !_ && i.each(R), w(), N())
            }

            function w() {
                St.redraw.off(t.redraw)
            }

            function N() {
                St.redraw.on(t.redraw)
            }

            function R(X, S) {
                var y = e.data(S, l);
                y && (y.links && y.links.each(g.reset), y.panes && y.panes.each(g.reset))
            }

            function q(X, S) {
                var y = l.substr(1) + "-" + X,
                    L = e(S),
                    G = e.data(S, l);
                if (G || (G = e.data(S, l, {
                        el: L,
                        config: {}
                    })), G.current = null, G.tabIdentifier = y + "-" + d, G.paneIdentifier = y + "-" + h, G.menu = L.children(".w-tab-menu"), G.links = G.menu.children(".w-tab-link"), G.content = L.children(".w-tab-content"), G.panes = G.content.children(".w-tab-pane"), G.el.off(l), G.links.off(l), G.menu.attr("role", "tablist"), G.links.attr("tabindex", "-1"), F(G), !o) {
                    G.links.on("click" + l, j(G)), G.links.on("keydown" + l, z(G));
                    var k = G.links.filter("." + E),
                        J = k.attr(d);
                    J && $(G, {
                        tab: J,
                        immediate: !0
                    })
                }
            }

            function F(X) {
                var S = {};
                S.easing = X.el.attr("data-easing") || "ease";
                var y = parseInt(X.el.attr("data-duration-in"), 10);
                y = S.intro = y === y ? y : 0;
                var L = parseInt(X.el.attr("data-duration-out"), 10);
                L = S.outro = L === L ? L : 0, S.immediate = !y && !L, X.config = S
            }

            function D(X) {
                var S = X.current;
                return Array.prototype.findIndex.call(X.links, y => y.getAttribute(d) === S, null)
            }

            function j(X) {
                return function(S) {
                    S.preventDefault();
                    var y = S.currentTarget.getAttribute(d);
                    y && $(X, {
                        tab: y
                    })
                }
            }

            function z(X) {
                return function(S) {
                    var y = D(X),
                        L = S.key,
                        G = {
                            ArrowLeft: y - 1,
                            ArrowUp: y - 1,
                            ArrowRight: y + 1,
                            ArrowDown: y + 1,
                            End: X.links.length - 1,
                            Home: 0
                        };
                    if (L in G) {
                        S.preventDefault();
                        var k = G[L];
                        k === -1 && (k = X.links.length - 1), k === X.links.length && (k = 0);
                        var J = X.links[k],
                            ne = J.getAttribute(d);
                        ne && $(X, {
                            tab: ne
                        })
                    }
                }
            }

            function $(X, S) {
                S = S || {};
                var y = X.config,
                    L = y.easing,
                    G = S.tab;
                if (G !== X.current) {
                    X.current = G;
                    var k;
                    X.links.each(function(I, p) {
                        var V = e(p);
                        if (S.immediate || y.immediate) {
                            var W = X.panes[I];
                            p.id || (p.id = X.tabIdentifier + "-" + I), W.id || (W.id = X.paneIdentifier + "-" + I), p.href = "#" + W.id, p.setAttribute("role", "tab"), p.setAttribute("aria-controls", W.id), p.setAttribute("aria-selected", "false"), W.setAttribute("role", "tabpanel"), W.setAttribute("aria-labelledby", p.id)
                        }
                        p.getAttribute(d) === G ? (k = p, V.addClass(E).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(g.intro)) : V.hasClass(E) && V.removeClass(E).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(g.outro)
                    });
                    var J = [],
                        ne = [];
                    X.panes.each(function(I, p) {
                        var V = e(p);
                        p.getAttribute(d) === G ? J.push(p) : V.hasClass(v) && ne.push(p)
                    });
                    var U = e(J),
                        H = e(ne);
                    if (S.immediate || y.immediate) {
                        U.addClass(v).each(g.intro), H.removeClass(v), _ || St.redraw.up();
                        return
                    } else {
                        var Z = window.scrollX,
                            m = window.scrollY;
                        k.focus(), window.scrollTo(Z, m)
                    }
                    H.length && y.outro ? (H.each(g.outro), r(H).add("opacity " + y.outro + "ms " + L, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(() => te(y, H, U))) : te(y, H, U)
                }
            }

            function te(X, S, y) {
                if (S.removeClass(v).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), y.addClass(v).each(g.intro), St.redraw.up(), !X.intro) return r(y).set({
                    opacity: 1
                });
                r(y).set({
                    opacity: 0
                }).redraw().add("opacity " + X.intro + "ms " + X.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Ks();
    $s();
    Zs();
    tu();
    br();
    Nb();
    qb();
    Db();
    Gb();
    Vb();
    Xb();
    zb();
    Yb();
    Qb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".standard-tab",
                "originalId": "62b94e6b19cb445249ca3d44|f99795a6-5204-5592-eefe-e62a41977925",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".standard-tab",
                "originalId": "62b94e6b19cb445249ca3d44|f99795a6-5204-5592-eefe-e62a41977925",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653302577315
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".standard-tab",
                "originalId": "62b94e6b19cb445249ca3d44|f99795a6-5204-5592-eefe-e62a41977925",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".standard-tab",
                "originalId": "62b94e6b19cb445249ca3d44|f99795a6-5204-5592-eefe-e62a41977925",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653302577354
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".tab_wrap",
                "originalId": "7a9cd8ed-7dc3-e8ff-6a44-329d9b16f8d7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".tab_wrap",
                "originalId": "7a9cd8ed-7dc3-e8ff-6a44-329d9b16f8d7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651087858617
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ce99d782-0795-8513-992f-7482938eb4e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ce99d782-0795-8513-992f-7482938eb4e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1656875061785
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ce99d782-0795-8513-992f-7482938eb4e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ce99d782-0795-8513-992f-7482938eb4e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1656875061785
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|715ae16f-7b76-2f7a-c1b7-2a57201a0a80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|715ae16f-7b76-2f7a-c1b7-2a57201a0a80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-31-p",
                "smoothing": 70,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656881841065
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|5e25e7e5-1314-6705-b7be-a5b6730b53f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|5e25e7e5-1314-6705-b7be-a5b6730b53f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656881967079
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|4d6df341-de09-cd17-d030-984311bae3d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|4d6df341-de09-cd17-d030-984311bae3d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656882172298
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|8812c2fb-f203-0d27-231a-fc5d9e813b7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|8812c2fb-f203-0d27-231a-fc5d9e813b7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-9-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656882529188
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|fba1e3fb-60ac-0bfa-f85c-3d5de9d02247",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|fba1e3fb-60ac-0bfa-f85c-3d5de9d02247",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-10-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656882903311
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bae853164760a6c96b97e9|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bae853164760a6c96b97e9|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656885118761
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62bae853164760a6c96b97e9|e5148ba9-4424-94d0-e842-6ae20be3c254",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bae853164760a6c96b97e9|e5148ba9-4424-94d0-e842-6ae20be3c254",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656885393196
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd5428a324c46fdd660907|a29fb408-a1c8-50b2-a452-15e3ff0f5d20",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd5428a324c46fdd660907|a29fb408-a1c8-50b2-a452-15e3ff0f5d20",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656885514020
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62bae853164760a6c96b97e9|a29fb408-a1c8-50b2-a452-15e3ff0f5d20",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bae853164760a6c96b97e9|a29fb408-a1c8-50b2-a452-15e3ff0f5d20",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-14-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656938689044
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd5428a324c46fdd660907|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd5428a324c46fdd660907|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656939266126
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd5428a324c46fdd660907|e5148ba9-4424-94d0-e842-6ae20be3c254",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd5428a324c46fdd660907|e5148ba9-4424-94d0-e842-6ae20be3c254",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656939286464
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd5428a324c46fdd660907|25eb9181-96b4-d990-fe18-fa257467e494",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd5428a324c46fdd660907|25eb9181-96b4-d990-fe18-fa257467e494",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656939819834
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb63252f6d566d95679311|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb63252f6d566d95679311|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656940232400
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb63252f6d566d95679311|1b7152c4-3f5c-f920-783b-2ff0fb28f741",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb63252f6d566d95679311|1b7152c4-3f5c-f920-783b-2ff0fb28f741",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656940293882
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb63252f6d566d95679311|5585f033-d6b2-cafb-ef39-000f50226b48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb63252f6d566d95679311|5585f033-d6b2-cafb-ef39-000f50226b48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-10-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656940423103
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|e1183c44-dad6-9901-395c-5af9e932e297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|e1183c44-dad6-9901-395c-5af9e932e297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656940612413
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|f99795a6-5204-5592-eefe-e62a419778ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656940921197
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|1eea87f3-2140-17dd-1707-7c8895ef9573",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|1eea87f3-2140-17dd-1707-7c8895ef9573",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-21-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656940936095
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|1529922c-70f3-eb24-4297-90d16552afbe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|1529922c-70f3-eb24-4297-90d16552afbe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-23-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656941418974
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|1529922c-70f3-eb24-4297-90d16552afc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|1529922c-70f3-eb24-4297-90d16552afc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-27-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": -30,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 0
            }],
            "createdOn": 1656941524311
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "698fc33f-e79e-2303-2ba3-00ad73b8ee3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "698fc33f-e79e-2303-2ba3-00ad73b8ee3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-25-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656949111044
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bae853164760a6c96b97e9|5873fe74-e2e5-29d0-e4ff-14db7b204295",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bae853164760a6c96b97e9|5873fe74-e2e5-29d0-e4ff-14db7b204295",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-26-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656952752503
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|1529922c-70f3-eb24-4297-90d16552afc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|1529922c-70f3-eb24-4297-90d16552afc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1656953719080
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cdd254219dde602ec9cb60|e1183c44-dad6-9901-395c-5af9e932e297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cdd254219dde602ec9cb60|e1183c44-dad6-9901-395c-5af9e932e297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1657655892530
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|b46106cf-c191-7de3-5379-3fd5ef1925d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|b46106cf-c191-7de3-5379-3fd5ef1925d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657839986379
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|b46106cf-c191-7de3-5379-3fd5ef1925d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|b46106cf-c191-7de3-5379-3fd5ef1925d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657839986379
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|ad2fb470-5ffd-bc9c-db4a-d8bd1a6453f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|ad2fb470-5ffd-bc9c-db4a-d8bd1a6453f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657841092480
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|ad2fb470-5ffd-bc9c-db4a-d8bd1a6453f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|ad2fb470-5ffd-bc9c-db4a-d8bd1a6453f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657841092480
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|9c6695d6-20cd-40db-4708-bc95e4416e98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|9c6695d6-20cd-40db-4708-bc95e4416e98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657841221401
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|9c6695d6-20cd-40db-4708-bc95e4416e98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|9c6695d6-20cd-40db-4708-bc95e4416e98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657841221401
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|15e7c2d1-36f0-5300-ff81-fcde8c857192",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|15e7c2d1-36f0-5300-ff81-fcde8c857192",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657841379839
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|15e7c2d1-36f0-5300-ff81-fcde8c857192",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|15e7c2d1-36f0-5300-ff81-fcde8c857192",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657841379839
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".character-img",
                "originalId": "62bd4bfd00da514dd8fd2ca2|cb7f47db-0180-00e8-39aa-b183b372c7fa",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".character-img",
                "originalId": "62bd4bfd00da514dd8fd2ca2|cb7f47db-0180-00e8-39aa-b183b372c7fa",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1657913705080
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SHRINK_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "shrinkIn",
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".character-img",
                "originalId": "62bd4bfd00da514dd8fd2ca2|cb7f47db-0180-00e8-39aa-b183b372c7fa",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".character-img",
                "originalId": "62bd4bfd00da514dd8fd2ca2|cb7f47db-0180-00e8-39aa-b183b372c7fa",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1657913705081
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd5428a324c46fdd660907|9ca828f5-7133-4794-effc-87bd5e9eedb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd5428a324c46fdd660907|9ca828f5-7133-4794-effc-87bd5e9eedb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1658279199966
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb63252f6d566d95679311|7441c102-955a-7985-0fcf-5fd4c4cefc33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb63252f6d566d95679311|7441c102-955a-7985-0fcf-5fd4c4cefc33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-14-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1658294358821
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e713494b-f4b5-f6a3-aa2e-1c0acd2f7dfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e713494b-f4b5-f6a3-aa2e-1c0acd2f7dfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658365705775
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "698fc33f-e79e-2303-2ba3-00ad73b8ee47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "698fc33f-e79e-2303-2ba3-00ad73b8ee47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658366030166
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|84af0edf-6bc0-56f6-32d5-11927310f559",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|84af0edf-6bc0-56f6-32d5-11927310f559",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658366425692
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd5428a324c46fdd660907|9ca828f5-7133-4794-effc-87bd5e9eedc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd5428a324c46fdd660907|9ca828f5-7133-4794-effc-87bd5e9eedc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658366917591
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "cf53c354-585c-8306-cb6c-2af856c2cebd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "cf53c354-585c-8306-cb6c-2af856c2cebd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658367087116
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|24f2970a-cd47-bda9-69d3-73344b12fe07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|24f2970a-cd47-bda9-69d3-73344b12fe07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658412544834
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "36de2ab7-a5c4-c335-a63e-0cf4d3e1b1f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "36de2ab7-a5c4-c335-a63e-0cf4d3e1b1f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658415947631
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "24f2970a-cd47-bda9-69d3-73344b12fe07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "24f2970a-cd47-bda9-69d3-73344b12fe07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658416024657
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|c0e11342-295d-d6ed-1146-1344cf376461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|c0e11342-295d-d6ed-1146-1344cf376461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1659141544604
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|5bfcbce2-3c30-649c-45e8-7d21740cf7d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|5bfcbce2-3c30-649c-45e8-7d21740cf7d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-22-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1661633678641
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|5585f033-d6b2-cafb-ef39-000f50226b48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|5585f033-d6b2-cafb-ef39-000f50226b48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1661634762416
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|0bb4942f-86ff-d72c-f5e5-067fdaee37c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|0bb4942f-86ff-d72c-f5e5-067fdaee37c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-22-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1661636154146
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|0bb4942f-86ff-d72c-f5e5-067fdaee37d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|0bb4942f-86ff-d72c-f5e5-067fdaee37d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661636154146
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bb6b79a587b77dc96b00bc|0bb4942f-86ff-d72c-f5e5-067fdaee37d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bb6b79a587b77dc96b00bc|0bb4942f-86ff-d72c-f5e5-067fdaee37d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661636154146
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|c762bcdf-a7e8-cc47-0ad1-a3f1f8cd8da4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|c762bcdf-a7e8-cc47-0ad1-a3f1f8cd8da4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667949169410
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|033efe14-a9dd-c468-4ff9-c4505681ae84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|033efe14-a9dd-c468-4ff9-c4505681ae84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667949399255
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|0e8e2408-cee2-0124-4def-d08b9c2c5991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|0e8e2408-cee2-0124-4def-d08b9c2c5991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667950072152
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|35a1ff43-2baa-8c24-9eb3-32f05d458449",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|35a1ff43-2baa-8c24-9eb3-32f05d458449",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667950324691
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|1fd658d4-2c82-e0e3-ed96-f1670d3caa6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|1fd658d4-2c82-e0e3-ed96-f1670d3caa6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667952438082
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|4c80001c-8391-effd-27d9-dfce4d835377",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|4c80001c-8391-effd-27d9-dfce4d835377",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-9-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667952560665
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|60f0bac6-564a-0a70-1260-36caaf3198a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|60f0bac6-564a-0a70-1260-36caaf3198a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667953120002
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|b949490e-2e45-944d-2552-944d9f097e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|b949490e-2e45-944d-2552-944d9f097e4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667961267960
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|2610e292-9b9b-1952-ce5a-b5cc46070848",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|2610e292-9b9b-1952-ce5a-b5cc46070848",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667972160234
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|3d4f04fe-9ffd-ea3b-c01a-571984597824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|3d4f04fe-9ffd-ea3b-c01a-571984597824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1667975371683
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nft-badge",
                "originalId": "636ae013a2f32ce9a98a1552|1fd658d4-2c82-e0e3-ed96-f1670d3caa83",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nft-badge",
                "originalId": "636ae013a2f32ce9a98a1552|1fd658d4-2c82-e0e3-ed96-f1670d3caa83",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 184,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1667977956963
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeOut",
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nft-badge",
                "originalId": "636ae013a2f32ce9a98a1552|1fd658d4-2c82-e0e3-ed96-f1670d3caa83",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nft-badge",
                "originalId": "636ae013a2f32ce9a98a1552|1fd658d4-2c82-e0e3-ed96-f1670d3caa83",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": false
            },
            "createdOn": 1667977956965
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|4015af70-ca02-f430-c338-c15b1950e3d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|4015af70-ca02-f430-c338-c15b1950e3d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1668009388863
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|c5300916-6b21-45b3-9ee0-02e65a513e43",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|c5300916-6b21-45b3-9ee0-02e65a513e43",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1668011845018
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62bd4bfd00da514dd8fd2ca2|c5300916-6b21-45b3-9ee0-02e65a513e5a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62bd4bfd00da514dd8fd2ca2|c5300916-6b21-45b3-9ee0-02e65a513e5a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1668011845018
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "636ae013a2f32ce9a98a1552|993a5636-4b15-5ab4-17b9-71d5103ca048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "636ae013a2f32ce9a98a1552|993a5636-4b15-5ab4-17b9-71d5103ca048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1668703389935
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "3d3684f5-3e1b-3fdc-a4e0-fcfb7a6c5aca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3d3684f5-3e1b-3fdc-a4e0-fcfb7a6c5aca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1668703784997
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63c4632bd3e27ec253a89814|4ba99707-815c-275b-6794-028152eb11f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63c4632bd3e27ec253a89814|4ba99707-815c-275b-6794-028152eb11f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1673814882685
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63c4632bd3e27ec253a89814|6338b53e-150b-d7d6-4c97-0f549dcc2be0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63c4632bd3e27ec253a89814|6338b53e-150b-d7d6-4c97-0f549dcc2be0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1673815651413
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|c762bcdf-a7e8-cc47-0ad1-a3f1f8cd8da4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|c762bcdf-a7e8-cc47-0ad1-a3f1f8cd8da4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675662792966
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|033efe14-a9dd-c468-4ff9-c4505681ae84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|033efe14-a9dd-c468-4ff9-c4505681ae84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675662792966
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|0e8e2408-cee2-0124-4def-d08b9c2c5991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|0e8e2408-cee2-0124-4def-d08b9c2c5991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675662792966
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|35a1ff43-2baa-8c24-9eb3-32f05d458449",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|35a1ff43-2baa-8c24-9eb3-32f05d458449",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675662792966
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e095c810d0b971e4639894|1fd658d4-2c82-e0e3-ed96-f1670d3caa6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|1fd658d4-2c82-e0e3-ed96-f1670d3caa6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675662792966
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "63e095c810d0b971e4639894|2610e292-9b9b-1952-ce5a-b5cc46070848",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|2610e292-9b9b-1952-ce5a-b5cc46070848",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675662792966
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|3d4f04fe-9ffd-ea3b-c01a-571984597824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|3d4f04fe-9ffd-ea3b-c01a-571984597824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675662792966
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|993a5636-4b15-5ab4-17b9-71d5103ca048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|993a5636-4b15-5ab4-17b9-71d5103ca048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675662792966
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|40d333d7-ecf2-51bc-b2e3-176090930d6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|40d333d7-ecf2-51bc-b2e3-176090930d6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-14-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675831138252
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8b466e1b-cdf5-2bca-fc4c-8befacdefaff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8b466e1b-cdf5-2bca-fc4c-8befacdefaff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676151221981
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8b466e1b-cdf5-2bca-fc4c-8befacdefaff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8b466e1b-cdf5-2bca-fc4c-8befacdefaff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676151221981
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e8092168e32658fdd938b1|568a5e8b-fc2c-e733-6f18-7796073be127",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e8092168e32658fdd938b1|568a5e8b-fc2c-e733-6f18-7796073be127",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-44-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1676157742709
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e8092168e32658fdd938b1|90b06392-3c7d-b1f6-f495-b43aef7ad78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e8092168e32658fdd938b1|90b06392-3c7d-b1f6-f495-b43aef7ad78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676157742709
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e8092168e32658fdd938b1|90b06392-3c7d-b1f6-f495-b43aef7ad79f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e8092168e32658fdd938b1|90b06392-3c7d-b1f6-f495-b43aef7ad79f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676157742709
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63e095c810d0b971e4639894|55708cf4-8b93-0d28-de55-afb4e8d84820",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63e095c810d0b971e4639894|55708cf4-8b93-0d28-de55-afb4e8d84820",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1676161946969
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|1c907b48-4a6c-117f-cb95-cc22e69935f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|1c907b48-4a6c-117f-cb95-cc22e69935f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1676163816767
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "89821aa0-754b-c3ac-6a4b-f7bbd6f64d3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "89821aa0-754b-c3ac-6a4b-f7bbd6f64d3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682956317315
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d45ff41b-7ef0-97b8-19bf-1aa7f07362f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d45ff41b-7ef0-97b8-19bf-1aa7f07362f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682956676790
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|ad7307dd-b04d-1143-9095-155b7153d71c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|ad7307dd-b04d-1143-9095-155b7153d71c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1685041393548
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e758de3cded287d1b02f78|0e8e2408-cee2-0124-4def-d08b9c2c5991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e758de3cded287d1b02f78|0e8e2408-cee2-0124-4def-d08b9c2c5991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1692883166874
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e758de3cded287d1b02f78|993a5636-4b15-5ab4-17b9-71d5103ca048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e758de3cded287d1b02f78|993a5636-4b15-5ab4-17b9-71d5103ca048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692883166874
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e758de3cded287d1b02f78|24b9fe3a-ff02-6413-f1ce-929af203e28d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e758de3cded287d1b02f78|24b9fe3a-ff02-6413-f1ce-929af203e28d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1692887889067
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|b7d23aa2-997a-c34e-9339-c327338fac24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|b7d23aa2-997a-c34e-9339-c327338fac24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1692977773609
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64e758de3cded287d1b02f78|2610e292-9b9b-1952-ce5a-b5cc4607084c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e758de3cded287d1b02f78|2610e292-9b9b-1952-ce5a-b5cc4607084c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-48-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1692979827580
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ec8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ec8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698734464875
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ecc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ecc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-56-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1698327946278
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7028",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7028",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699354276168
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ec8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ec8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698734464875
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7072",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7072",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698749617030
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7028",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7028",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699354276168
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ee3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ee3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-56-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1699285406644
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6f89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6f89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1699141724023
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6f89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6f89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-50-p",
                "smoothing": 80,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1698382747969
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6e4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6e4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7070",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc7070",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698734771456
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-590"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6e4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6e4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ebd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ebd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 10,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1698295694211
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62b94e6b19cb445249ca3d44|2ed7ac0a-d5f0-03b0-5a69-0df51b4e77bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62b94e6b19cb445249ca3d44|2ed7ac0a-d5f0-03b0-5a69-0df51b4e77bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1699855813891
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "(TAB) Click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 97,
                        "bValue": 146,
                        "gValue": 114,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_wrap",
                            "selectorGuids": ["48d3bc01-2e80-5b9f-2656-57c3bf4a2cd4"]
                        },
                        "globalSwatchId": "",
                        "rValue": 250,
                        "bValue": 255,
                        "gValue": 249,
                        "aValue": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 68,
                        "bValue": 183,
                        "gValue": 33,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-5",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_wrap",
                            "selectorGuids": ["48d3bc01-2e80-5b9f-2656-57c3bf4a2cd4"]
                        },
                        "globalSwatchId": "",
                        "rValue": 250,
                        "bValue": 255,
                        "gValue": 249,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 31,
                        "bValue": 71,
                        "gValue": 44,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {},
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1582253318412
        },
        "a-2": {
            "id": "a-2",
            "title": "(TAB) Click [out]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {},
                        "globalSwatchId": "c76df389",
                        "rValue": 12,
                        "bValue": 37,
                        "gValue": 20,
                        "aValue": 1
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_wrap",
                            "selectorGuids": ["48d3bc01-2e80-5b9f-2656-57c3bf4a2cd4"]
                        },
                        "globalSwatchId": "",
                        "rValue": 250,
                        "bValue": 255,
                        "gValue": 249,
                        "aValue": 0
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 97,
                        "bValue": 146,
                        "gValue": 114,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1582253318412
        },
        "a-3": {
            "id": "a-3",
            "title": "Move Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7a9cd8ed-7dc3-e8ff-6a44-329d9b16f8d7"
                        },
                        "yValue": 3,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7a9cd8ed-7dc3-e8ff-6a44-329d9b16f8d7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "7a9cd8ed-7dc3-e8ff-6a44-329d9b16f8d7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "7a9cd8ed-7dc3-e8ff-6a44-329d9b16f8d7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651087862579
        },
        "a-4": {
            "id": "a-4",
            "title": "Nav Dropdown [OPENS]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav_dropdown-icon",
                            "selectorGuids": ["d8ae1bab-4738-3f6a-1c7b-423950bd7706"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav_dropdown-icon",
                            "selectorGuids": ["d8ae1bab-4738-3f6a-1c7b-423950bd7706"]
                        },
                        "xValue": 180,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1656875065450
        },
        "a-5": {
            "id": "a-5",
            "title": "Nav Dropdown [CLOSE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav_dropdown-icon",
                            "selectorGuids": ["d8ae1bab-4738-3f6a-1c7b-423950bd7706"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1656875065450
        },
        "a-31": {
            "id": "a-31",
            "title": "Hero Scroll Two Layers",
            "continuousParameterGroups": [{
                "id": "a-31-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-31-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-bottom",
                                "selectorGuids": ["7781da95-21dc-9b11-e5a1-f6d2dccddcbd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-top",
                                "selectorGuids": ["0789cb71-fcab-1757-af27-7d8b7d133de0"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-bottom",
                                "selectorGuids": ["7781da95-21dc-9b11-e5a1-f6d2dccddcbd"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-top",
                                "selectorGuids": ["0789cb71-fcab-1757-af27-7d8b7d133de0"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-31-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-bottom",
                                "selectorGuids": ["7781da95-21dc-9b11-e5a1-f6d2dccddcbd"]
                            },
                            "yValue": 1,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-bottom",
                                "selectorGuids": ["7781da95-21dc-9b11-e5a1-f6d2dccddcbd"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-top",
                                "selectorGuids": ["0789cb71-fcab-1757-af27-7d8b7d133de0"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-img-top",
                                "selectorGuids": ["0789cb71-fcab-1757-af27-7d8b7d133de0"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1657911650638
        },
        "a-28": {
            "id": "a-28",
            "title": "SCROLL – HOME / Story 2",
            "continuousParameterGroups": [{
                "id": "a-28-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-28-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story_card-wrap",
                                "selectorGuids": ["fb55e597-4fbc-a392-7cf1-65b07ee021b8"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story_img",
                                "selectorGuids": ["e7a623d0-e797-6403-5d0a-805e05d8d88d"]
                            },
                            "yValue": 6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-28-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story_card-wrap",
                                "selectorGuids": ["fb55e597-4fbc-a392-7cf1-65b07ee021b8"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story_img",
                                "selectorGuids": ["e7a623d0-e797-6403-5d0a-805e05d8d88d"]
                            },
                            "yValue": -6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656881971056
        },
        "a-8": {
            "id": "a-8",
            "title": "SCROLL – HOME / Multi",
            "continuousParameterGroups": [{
                "id": "a-8-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-8-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".multi_img",
                                "selectorGuids": ["f1abcfa2-1d0f-0818-865c-15a8ef05df95"]
                            },
                            "xValue": 0.8,
                            "yValue": 0.8,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-8-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".multi_img",
                                "selectorGuids": ["f1abcfa2-1d0f-0818-865c-15a8ef05df95"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1656881971056
        },
        "a-9": {
            "id": "a-9",
            "title": "SCROLL - HOME / Build",
            "continuousParameterGroups": [{
                "id": "a-9-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-9-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".custom_img-wrapper",
                                "selectorGuids": ["bdff28de-6d16-62c5-604f-dd3ceed9fe9c"]
                            },
                            "xValue": 1.15,
                            "yValue": 1.15,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-9-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".custom_img-wrapper",
                                "selectorGuids": ["bdff28de-6d16-62c5-604f-dd3ceed9fe9c"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1656882550430
        },
        "a-10": {
            "id": "a-10",
            "title": "SCROLL - JOIN",
            "continuousParameterGroups": [{
                "id": "a-10-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-10-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".join_img",
                                "selectorGuids": ["1bcfdfbe-bde2-082a-0f3d-1e342a2a2a65"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }, {
                        "id": "a-10-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".join_text-wrap",
                                "selectorGuids": ["74c20ca9-8b5c-019a-7a15-8b1f0f85dc9a"]
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-10-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".join_img",
                                "selectorGuids": ["1bcfdfbe-bde2-082a-0f3d-1e342a2a2a65"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-10-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".join_text-wrap",
                                "selectorGuids": ["74c20ca9-8b5c-019a-7a15-8b1f0f85dc9a"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656883153115
        },
        "a-11": {
            "id": "a-11",
            "title": "SCROLL - CAREERS / Hero",
            "continuousParameterGroups": [{
                "id": "a-11-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 51,
                    "actionItems": [{
                        "id": "a-11-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chero_content-wrap",
                                "selectorGuids": ["9b321e84-dbc1-c4f2-34a0-04e32ee69895"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chero_img",
                                "selectorGuids": ["c2433599-0f80-f489-0bc8-e578f5ad48de"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-11-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chero_img",
                                "selectorGuids": ["c2433599-0f80-f489-0bc8-e578f5ad48de"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chero_content-wrap",
                                "selectorGuids": ["9b321e84-dbc1-c4f2-34a0-04e32ee69895"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chero_img",
                                "selectorGuids": ["c2433599-0f80-f489-0bc8-e578f5ad48de"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }, {
                        "id": "a-11-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chero_img",
                                "selectorGuids": ["c2433599-0f80-f489-0bc8-e578f5ad48de"]
                            },
                            "yValue": -4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656885122536
        },
        "a-12": {
            "id": "a-12",
            "title": "SCROLL - CAREERS / MIssion",
            "continuousParameterGroups": [{
                "id": "a-12-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-12-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".mission_comp",
                                "selectorGuids": ["43079b9e-5833-b93d-b9c8-5ee7949ad40e"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-12-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".mission_comp",
                                "selectorGuids": ["43079b9e-5833-b93d-b9c8-5ee7949ad40e"]
                            },
                            "yValue": -4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656885402313
        },
        "a-13": {
            "id": "a-13",
            "title": "SCROLL - Studios / Girl",
            "continuousParameterGroups": [{
                "id": "a-13-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-13-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".giirl_img-wrap",
                                "selectorGuids": ["a69a8bad-e887-0333-92f6-7830a2403abd"]
                            },
                            "xValue": 5,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-13-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".giirl_img-wrap",
                                "selectorGuids": ["a69a8bad-e887-0333-92f6-7830a2403abd"]
                            },
                            "xValue": -20,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656885521704
        },
        "a-14": {
            "id": "a-14",
            "title": "SCROLL - CAREERS / Modus",
            "continuousParameterGroups": [{
                "id": "a-14-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-14-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".modus_img",
                                "selectorGuids": ["65de8e97-53ef-71b2-b2c9-9303d10bc22d"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }, {
                        "id": "a-14-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bae853164760a6c96b97e9|a29fb408-a1c8-50b2-a452-15e3ff0f5d25"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-14-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".modus_points-wrap",
                                "selectorGuids": ["69e91ef2-5e59-2c75-2b33-f7c332b38f80"]
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-14-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".modus_img",
                                "selectorGuids": ["65de8e97-53ef-71b2-b2c9-9303d10bc22d"]
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-14-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".modus_points-wrap",
                                "selectorGuids": ["69e91ef2-5e59-2c75-2b33-f7c332b38f80"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-14-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bae853164760a6c96b97e9|a29fb408-a1c8-50b2-a452-15e3ff0f5d25"
                            },
                            "yValue": -1,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656883153115
        },
        "a-17": {
            "id": "a-17",
            "title": "SCROLL - Studio / Float",
            "continuousParameterGroups": [{
                "id": "a-17-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".float_comp",
                                "selectorGuids": ["9157a7bc-b59e-fbd9-4d90-4c423ba87112"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-17-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".float_img",
                                "selectorGuids": ["d7a2a02f-406f-350a-d134-0248cc72d104"]
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-17-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".float_img",
                                "selectorGuids": ["d7a2a02f-406f-350a-d134-0248cc72d104"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".float_comp",
                                "selectorGuids": ["9157a7bc-b59e-fbd9-4d90-4c423ba87112"]
                            },
                            "yValue": -4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656939301911
        },
        "a-15": {
            "id": "a-15",
            "title": "SCROLL - JOIN",
            "continuousParameterGroups": [{
                "id": "a-15-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-15-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".multi_img.is--1",
                                "selectorGuids": ["f1abcfa2-1d0f-0818-865c-15a8ef05df95", "4b55da1c-85d3-5b6e-cd3e-e556882c6e07"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }, {
                        "id": "a-15-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".multi_content-wrap",
                                "selectorGuids": ["25a9392e-028b-1844-74bb-970cd335e54c"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-15-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".multi_img.is--1",
                                "selectorGuids": ["f1abcfa2-1d0f-0818-865c-15a8ef05df95", "4b55da1c-85d3-5b6e-cd3e-e556882c6e07"]
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-15-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".multi_content-wrap",
                                "selectorGuids": ["25a9392e-028b-1844-74bb-970cd335e54c"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656883153115
        },
        "a-19": {
            "id": "a-19",
            "title": "SCROLL - Fund / ABI",
            "continuousParameterGroups": [{
                "id": "a-19-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-19-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".abi_img",
                                "selectorGuids": ["24294e35-9ca4-9bd3-577e-c53a776c4742"]
                            },
                            "xValue": 1.25,
                            "yValue": 1.25,
                            "locked": true
                        }
                    }, {
                        "id": "a-19-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".abi_content",
                                "selectorGuids": ["67090b4a-56bc-4491-5c90-3151c23569a8"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-19-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".abi_img",
                                "selectorGuids": ["24294e35-9ca4-9bd3-577e-c53a776c4742"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-19-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".abi_content",
                                "selectorGuids": ["67090b4a-56bc-4491-5c90-3151c23569a8"]
                            },
                            "yValue": -4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656882550430
        },
        "a-20": {
            "id": "a-20",
            "title": "SCROLL -",
            "continuousParameterGroups": [{
                "id": "a-20-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-20-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".art_title-wrap",
                                "selectorGuids": ["8918b53f-bb2a-ccfc-51a4-d20acc8d22c9"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".art_para-wrap",
                                "selectorGuids": ["6b5d2509-5aa8-f74d-f126-775c35aa525a"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".absolut-hero_image",
                                "selectorGuids": ["206cd057-77f9-a6c0-cad4-3d6a742301dc"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bd4bfd00da514dd8fd2ca2|ffda7955-4a53-ddf1-6c46-5b74000c7305"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-20-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".art_title-wrap",
                                "selectorGuids": ["8918b53f-bb2a-ccfc-51a4-d20acc8d22c9"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".art_para-wrap",
                                "selectorGuids": ["6b5d2509-5aa8-f74d-f126-775c35aa525a"]
                            },
                            "yValue": 6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bd4bfd00da514dd8fd2ca2|ffda7955-4a53-ddf1-6c46-5b74000c7305"
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".absolut-hero_image",
                                "selectorGuids": ["206cd057-77f9-a6c0-cad4-3d6a742301dc"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656940616414
        },
        "a-21": {
            "id": "a-21",
            "title": "SCROLL - About / What",
            "continuousParameterGroups": [{
                "id": "a-21-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-21-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_img",
                                "selectorGuids": ["ff01d03c-5b8d-25e5-07cb-88e6d102668f"]
                            },
                            "xValue": 1.25,
                            "yValue": 1.25,
                            "locked": true
                        }
                    }, {
                        "id": "a-21-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_content-wrap",
                                "selectorGuids": ["4ba437c1-674d-1ee1-0116-4c4fe7c27815"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-21-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_top-img",
                                "selectorGuids": ["16b11de7-345c-116e-204b-f6ff1f81210c"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-21-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_top-img",
                                "selectorGuids": ["16b11de7-345c-116e-204b-f6ff1f81210c"]
                            },
                            "yValue": -40,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-21-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_img",
                                "selectorGuids": ["ff01d03c-5b8d-25e5-07cb-88e6d102668f"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-21-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_content-wrap",
                                "selectorGuids": ["4ba437c1-674d-1ee1-0116-4c4fe7c27815"]
                            },
                            "yValue": -4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-21-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_top-img",
                                "selectorGuids": ["16b11de7-345c-116e-204b-f6ff1f81210c"]
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-21-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".what_top-img",
                                "selectorGuids": ["16b11de7-345c-116e-204b-f6ff1f81210c"]
                            },
                            "yValue": 80,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656882550430
        },
        "a-23": {
            "id": "a-23",
            "title": "SCROLL - About / How",
            "continuousParameterGroups": [{
                "id": "a-23-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-23-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_title-wrap",
                                "selectorGuids": ["8a3cf909-6850-1e72-ad81-1d8f5b161cfd"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-23-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_title-wrap",
                                "selectorGuids": ["8a3cf909-6850-1e72-ad81-1d8f5b161cfd"]
                            },
                            "yValue": -6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656941433052
        },
        "a-27": {
            "id": "a-27",
            "title": "SCROLL - 📱 About / How Characters",
            "continuousParameterGroups": [{
                "id": "a-27-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-27-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._1",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "9d092322-bb0a-f719-89c4-5171ef060e17"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-27-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._2",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3e3d4435-71b8-49f8-df71-a10f3474b5b1"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-27-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._3",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "2b207924-0ae9-a189-7b0b-19a35cfb7473"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-27-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._4",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3b8dc972-2313-36b3-9887-f077545a6a0f"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-27-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._5",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "1f7d21a0-53cc-7274-eef1-8e3faaca280a"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-27-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._1",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "9d092322-bb0a-f719-89c4-5171ef060e17"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-27-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._2",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3e3d4435-71b8-49f8-df71-a10f3474b5b1"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 55,
                    "actionItems": [{
                        "id": "a-27-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._3",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "2b207924-0ae9-a189-7b0b-19a35cfb7473"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-27-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._4",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3b8dc972-2313-36b3-9887-f077545a6a0f"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 65,
                    "actionItems": [{
                        "id": "a-27-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._5",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "1f7d21a0-53cc-7274-eef1-8e3faaca280a"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656941526762
        },
        "a-25": {
            "id": "a-25",
            "title": "SCROLL - FOOTER",
            "continuousParameterGroups": [{
                "id": "a-25-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-25-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_content-wrap",
                                "selectorGuids": ["c15cfb51-14c5-c170-74d0-199edd9c537a"]
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-25-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "xValue": 0.8,
                            "yValue": 0.8,
                            "locked": true
                        }
                    }, {
                        "id": "a-25-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-25-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_content-wrap",
                                "selectorGuids": ["c15cfb51-14c5-c170-74d0-199edd9c537a"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-25-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-25-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656949120985
        },
        "a-26": {
            "id": "a-26",
            "title": "SCROLL - CAREERS / Career List",
            "continuousParameterGroups": [{
                "id": "a-26-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-26-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".career_banner",
                                "selectorGuids": ["8514fa04-d223-4aee-4222-37a92d69bc1d"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }, {
                        "id": "a-26-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".modus_points-wrap",
                                "selectorGuids": ["69e91ef2-5e59-2c75-2b33-f7c332b38f80"]
                            },
                            "yValue": 6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 49,
                    "actionItems": [{
                        "id": "a-26-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".modus_points-wrap",
                                "selectorGuids": ["69e91ef2-5e59-2c75-2b33-f7c332b38f80"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-26-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".career_banner",
                                "selectorGuids": ["8514fa04-d223-4aee-4222-37a92d69bc1d"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-26-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".modus_points-wrap",
                                "selectorGuids": ["69e91ef2-5e59-2c75-2b33-f7c332b38f80"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656883153115
        },
        "a-24": {
            "id": "a-24",
            "title": "SCROLL - 🖥 About / How Characters",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._1",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "9d092322-bb0a-f719-89c4-5171ef060e17"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._2",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3e3d4435-71b8-49f8-df71-a10f3474b5b1"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._3",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "2b207924-0ae9-a189-7b0b-19a35cfb7473"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._4",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3b8dc972-2313-36b3-9887-f077545a6a0f"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._5",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "1f7d21a0-53cc-7274-eef1-8e3faaca280a"]
                            },
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-24-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._1",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "9d092322-bb0a-f719-89c4-5171ef060e17"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-24-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._2",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3e3d4435-71b8-49f8-df71-a10f3474b5b1"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 55,
                    "actionItems": [{
                        "id": "a-24-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._3",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "2b207924-0ae9-a189-7b0b-19a35cfb7473"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-24-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._4",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "3b8dc972-2313-36b3-9887-f077545a6a0f"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 65,
                    "actionItems": [{
                        "id": "a-24-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".how_content-img._5",
                                "selectorGuids": ["0c00b022-b6b0-6364-5efa-6d41db3de446", "1f7d21a0-53cc-7274-eef1-8e3faaca280a"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656941526762
        },
        "a-29": {
            "id": "a-29",
            "title": "Read More Start",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.more",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "62fb5b53-7808-b7bc-7f25-510941276d38"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.read-less",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "76fb2e9b-1775-f88a-8876-e7980b4a4ad0"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.read-more",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "b9a4049e-8042-141e-a797-53d25ac9d0ca"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.more",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "62fb5b53-7808-b7bc-7f25-510941276d38"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-29-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.read-less",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "76fb2e9b-1775-f88a-8876-e7980b4a4ad0"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657840042691
        },
        "a-30": {
            "id": "a-30",
            "title": "Read More Hid",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.more",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "62fb5b53-7808-b7bc-7f25-510941276d38"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.read-more",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "b9a4049e-8042-141e-a797-53d25ac9d0ca"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".rich-text.read-less",
                            "selectorGuids": ["62643531-20ba-60ca-ea8e-d3b4dde749b1", "76fb2e9b-1775-f88a-8876-e7980b4a4ad0"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657840149229
        },
        "a-34": {
            "id": "a-34",
            "title": "Modal Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1658365712167
        },
        "a-33": {
            "id": "a-33",
            "title": "Modal Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1658365508222
        },
        "a-35": {
            "id": "a-35",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-35-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-35-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1659141549503
        },
        "a-22": {
            "id": "a-22",
            "title": "SCROLL - About / Who",
            "continuousParameterGroups": [{
                "id": "a-22-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-22-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".who_img",
                                "selectorGuids": ["03a0c44b-6817-68a1-6125-7609dc0f0bb2"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }, {
                        "id": "a-22-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bb6b79a587b77dc96b00bc|5585f033-d6b2-cafb-ef39-000f50226b4e"
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-size-large",
                                "selectorGuids": ["62bc985d-89b4-c161-6e05-611adf52d306"]
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-22-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".who_img",
                                "selectorGuids": ["03a0c44b-6817-68a1-6125-7609dc0f0bb2"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-22-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bb6b79a587b77dc96b00bc|5585f033-d6b2-cafb-ef39-000f50226b4e"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-size-large",
                                "selectorGuids": ["62bc985d-89b4-c161-6e05-611adf52d306"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team_comp",
                                "selectorGuids": ["62c3c376-e445-aa7e-6526-40c2871821f6"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-22-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team_comp",
                                "selectorGuids": ["62c3c376-e445-aa7e-6526-40c2871821f6"]
                            },
                            "yValue": -4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656941164473
        },
        "a-36": {
            "id": "a-36",
            "title": "TEAMKIND",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bb6b79a587b77dc96b00bc|52193d04-bdac-3059-8a43-09bc708a3cda"
                            },
                            "yValue": 7,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-photo",
                                "selectorGuids": ["60688e1c-1aa2-6c7a-f13d-5231b26c8207"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "62bb6b79a587b77dc96b00bc|52193d04-bdac-3059-8a43-09bc708a3cda"
                            },
                            "yValue": -9,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-photo",
                                "selectorGuids": ["60688e1c-1aa2-6c7a-f13d-5231b26c8207"]
                            },
                            "xValue": 1.24,
                            "yValue": 1.24,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1661634767403
        },
        "a-37": {
            "id": "a-37",
            "title": "Feed Your Kind",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".background-tree",
                                "selectorGuids": ["7ffca8e0-d01b-58eb-1b12-c8db22a6329e"]
                            },
                            "yValue": -48,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".background-tree",
                                "selectorGuids": ["7ffca8e0-d01b-58eb-1b12-c8db22a6329e"]
                            },
                            "yValue": 32,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1667956112275
        },
        "a-32": {
            "id": "a-32",
            "title": "NFT Section",
            "continuousParameterGroups": [{
                "id": "a-32-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-32-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".nft-image-container",
                                "selectorGuids": ["7a69c51d-96c3-c8ed-d79d-d861037f65fb"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".nft-image-container",
                                "selectorGuids": ["7a69c51d-96c3-c8ed-d79d-d861037f65fb"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-32-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".nft-image-container",
                                "selectorGuids": ["7a69c51d-96c3-c8ed-d79d-d861037f65fb"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".nft-image-container",
                                "selectorGuids": ["7a69c51d-96c3-c8ed-d79d-d861037f65fb"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1657913381029
        },
        "a-40": {
            "id": "a-40",
            "title": "NFT Section",
            "continuousParameterGroups": [{
                "id": "a-40-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-40-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-40-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "636ae013a2f32ce9a98a1552|7c7efaf5-6782-70dd-1b3f-53b33feb918d"
                            },
                            "xValue": 0.8,
                            "yValue": 0.8,
                            "locked": true
                        }
                    }, {
                        "id": "a-40-n-7",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "636ae013a2f32ce9a98a1552|7c7efaf5-6782-70dd-1b3f-53b33feb918d"
                            },
                            "zValue": -10,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-40-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-40-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".collection-bg",
                                "selectorGuids": ["b5acb3f1-5cb6-a0c2-0fc2-f977d4b583e8"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "636ae013a2f32ce9a98a1552|7c7efaf5-6782-70dd-1b3f-53b33feb918d"
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-40-n-8",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "636ae013a2f32ce9a98a1552|7c7efaf5-6782-70dd-1b3f-53b33feb918d"
                            },
                            "zValue": 10,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1659141549503
        },
        "a-38": {
            "id": "a-38",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-38-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 36,
                    "actionItems": [{
                        "id": "a-38-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".nft-hero-image-run",
                                "selectorGuids": ["69b96305-08fb-7739-7315-ddbd7da5c6fc"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-38-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".nft-hero-image-run",
                                "selectorGuids": ["69b96305-08fb-7739-7315-ddbd7da5c6fc"]
                            },
                            "yValue": 6,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1667972165543
        },
        "a-39": {
            "id": "a-39",
            "title": "stickers",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".stickers-img",
                                "selectorGuids": ["e49d19f4-67ef-45f7-89a6-473241f40d45"]
                            },
                            "yValue": -1,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".stickers-img",
                                "selectorGuids": ["e49d19f4-67ef-45f7-89a6-473241f40d45"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-39-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".stickers-img",
                                "selectorGuids": ["e49d19f4-67ef-45f7-89a6-473241f40d45"]
                            },
                            "yValue": 4,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".stickers-img",
                                "selectorGuids": ["e49d19f4-67ef-45f7-89a6-473241f40d45"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1667975377566
        },
        "a-42": {
            "id": "a-42",
            "title": "Nav Dropdown [OPENS] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav_dropdown-icon",
                            "selectorGuids": ["d8ae1bab-4738-3f6a-1c7b-423950bd7706"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav_dropdown-icon",
                            "selectorGuids": ["d8ae1bab-4738-3f6a-1c7b-423950bd7706"]
                        },
                        "xValue": 180,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1656875065450
        },
        "a-43": {
            "id": "a-43",
            "title": "Nav Dropdown [CLOSE] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav_dropdown-icon",
                            "selectorGuids": ["d8ae1bab-4738-3f6a-1c7b-423950bd7706"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1656875065450
        },
        "a-44": {
            "id": "a-44",
            "title": "SCROLL - FOOTER 2",
            "continuousParameterGroups": [{
                "id": "a-44-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-44-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_content-wrap",
                                "selectorGuids": ["c15cfb51-14c5-c170-74d0-199edd9c537a"]
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-44-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "xValue": 0.8,
                            "yValue": 0.8,
                            "locked": true
                        }
                    }, {
                        "id": "a-44-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-44-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_content-wrap",
                                "selectorGuids": ["c15cfb51-14c5-c170-74d0-199edd9c537a"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-44-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-44-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer_img",
                                "selectorGuids": ["a454ae44-a1ba-3e29-0f19-c0d0601b7654"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1656949120985
        },
        "a-45": {
            "id": "a-45",
            "title": "Modal Open 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-45-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-45-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".apply-modal",
                            "selectorGuids": ["db1dcf9b-e953-70ed-3ac8-ff3a67cfee95"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1658365508222
        },
        "a-46": {
            "id": "a-46",
            "title": "Subscribe Modal [OPEN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".modal_comp",
                            "selectorGuids": ["04ff8ff2-7fb7-e171-99fc-1f1289740159"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-46-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_wrap",
                            "selectorGuids": ["d2c60900-d3b8-a4a5-2a84-779aac8021f2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_wrap",
                            "selectorGuids": ["d2c60900-d3b8-a4a5-2a84-779aac8021f2"]
                        },
                        "yValue": 4,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".modal_comp",
                            "selectorGuids": ["04ff8ff2-7fb7-e171-99fc-1f1289740159"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-46-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".modal_wrap",
                            "selectorGuids": ["d2c60900-d3b8-a4a5-2a84-779aac8021f2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".modal_wrap",
                            "selectorGuids": ["d2c60900-d3b8-a4a5-2a84-779aac8021f2"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1682956321847
        },
        "a-47": {
            "id": "a-47",
            "title": "Subscribe Modal [CLOSE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".modal_wrap",
                            "selectorGuids": ["d2c60900-d3b8-a4a5-2a84-779aac8021f2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-47-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".modal_comp",
                            "selectorGuids": ["04ff8ff2-7fb7-e171-99fc-1f1289740159"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-47-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 0,
                        "target": {
                            "selector": ".modal_wrap",
                            "selectorGuids": ["d2c60900-d3b8-a4a5-2a84-779aac8021f2"]
                        },
                        "yValue": 4,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1682956321847
        },
        "a-48": {
            "id": "a-48",
            "title": "SCROLL - Wrestle",
            "continuousParameterGroups": [{
                "id": "a-48-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 44,
                    "actionItems": [{
                        "id": "a-48-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e758de3cded287d1b02f78|734b6ba8-194c-b2d7-1dd5-b7849ea6db6d"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-48-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".wrestle-logo",
                                "selectorGuids": ["06904b07-821e-0aee-7b60-99382aed63f8"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-48-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e758de3cded287d1b02f78|734b6ba8-194c-b2d7-1dd5-b7849ea6db6d"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-48-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".wrestle-logo",
                                "selectorGuids": ["06904b07-821e-0aee-7b60-99382aed63f8"]
                            },
                            "xValue": 2,
                            "yValue": 2,
                            "locked": true
                        }
                    }, {
                        "id": "a-48-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e758de3cded287d1b02f78|734b6ba8-194c-b2d7-1dd5-b7849ea6db6d"
                            },
                            "xValue": 1.33,
                            "yValue": 1.33,
                            "locked": true
                        }
                    }, {
                        "id": "a-48-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e758de3cded287d1b02f78|734b6ba8-194c-b2d7-1dd5-b7849ea6db6d"
                            },
                            "yValue": 170,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1692979835056
        },
        "a-54": {
            "id": "a-54",
            "title": "Popup Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".footer_component.contain-paint.pointer-events-off",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e95", "3d9f77d5-fcb3-b313-ad48-ce69f0e89ee6", "3d9f77d5-fcb3-b313-ad48-ce69f0e89ef2"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-54-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".navbar_component",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e7e"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-54-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "selector": ".talks_popup",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89eca"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-54-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".talks_popup",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89eca"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".footer_component.contain-paint.pointer-events-off",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e95", "3d9f77d5-fcb3-b313-ad48-ce69f0e89ee6", "3d9f77d5-fcb3-b313-ad48-ce69f0e89ef2"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-54-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".navbar_component",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e7e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-54-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".talks_popup",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89eca"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-54-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".talks_popup",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89eca"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1698734777068
        },
        "a-56": {
            "id": "a-56",
            "title": "Press Motion",
            "continuousParameterGroups": [{
                "id": "a-56-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-56-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ecc"
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-56-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ecc"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1698327949373
        },
        "a-55": {
            "id": "a-55",
            "title": "Footer Tickets [INTO VIEW]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 500,
                        "target": {
                            "selector": ".navbar_link",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89ea3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699354281257
        },
        "a-53": {
            "id": "a-53",
            "title": "Popup Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".footer_component.contain-paint.pointer-events-off",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e95", "3d9f77d5-fcb3-b313-ad48-ce69f0e89ee6", "3d9f77d5-fcb3-b313-ad48-ce69f0e89ef2"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "selector": ".navbar_component",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e7e"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-53-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".talks_popup",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89eca"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-53-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".talks_popup",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89eca"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1698734777068
        },
        "a-51": {
            "id": "a-51",
            "title": "Footer Ticket Link [OUT VIEW]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "selector": ".navbar_link",
                            "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89ea3"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699354281257
        },
        "a-49": {
            "id": "a-49",
            "title": "Fade In",
            "continuousParameterGroups": [{
                "id": "a-49-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-49-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ebd"
                            },
                            "value": 0.6,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-49-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "654c596aea1f77eae3d37254|57b4cd39-0ddc-3093-c398-119764dc6ebd"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1698295697611
        },
        "a-50": {
            "id": "a-50",
            "title": "Event Motion",
            "continuousParameterGroups": [{
                "id": "a-50-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-50-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".event_info-wrapper",
                                "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e8c"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-50-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".event_meet-block",
                                "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89ed9"]
                            },
                            "heightValue": 70,
                            "widthUnit": "PX",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-50-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".event_info-wrapper",
                                "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89e8c"]
                            },
                            "yValue": -17.5,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-50-n-4",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".event_meet-block",
                                "selectorGuids": ["3d9f77d5-fcb3-b313-ad48-ce69f0e89ed9"]
                            },
                            "heightValue": 40,
                            "widthUnit": "PX",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1698382750836
        },
        "a-52": {
            "id": "a-52",
            "title": "Navbar 1 menu [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {},
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-52-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {},
                        "yValue": -8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-52-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {},
                        "yValue": 8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-52-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {},
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-52-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {},
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-57": {
            "id": "a-57",
            "title": "Navbar 1 menu [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-57-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-57-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {},
                        "widthValue": 24,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "shrinkIn": {
            "id": "shrinkIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1.25,
                        "yValue": 1.25
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "fadeOut": {
            "id": "fadeOut",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});