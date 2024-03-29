(() => {
    var a = class {
        constructor(n) {
            return this.cio = n, this._loadGist(), this
        }
        _loadGist() {
            let n = document.getElementById("cio-tracker");
            if (!n) {
                this.cio._warn("cio-tracker script not present.");
                return
            }
            let r = n.getAttribute("data-site-id");
            if (!r) {
                this.cio._warn("site-id can't be empty. please set data-site-id.");
                return
            }
            if (window.Gist) {
                this._init(r);
                return
            }
            let s = document.createElement("script"),
                i = document.getElementsByTagName("script")[0];
            s.async = !0, s.onload = function() {
                this._init(r)
            }.bind(this), s.src = "https://code.gist.build/web/latest/gist.min.js", i.parentNode.insertBefore(s, i)
        }
        initialized() {
            return this._initialized
        }
        identify(n) {
            if (!this.initialized()) {
                this.cio._warn("in-app indentify() called before in-app has initialized.");
                return
            }
            window.Gist.setUserToken(n)
        }
        reset() {
            this.initialized() && window.Gist.clearUserToken()
        }
        page(n) {
            this.initialized() && window.Gist.setCurrentRoute(n)
        }
        _init(n) {
            if (this.initialized()) return;
            window.Gist.setup({
                siteId: n,
                env: "prod",
                dataCenter: "us"
            });
            let r = this.cio._findCustomer();
            r != "" ? window.Gist.setUserToken(r) : window.Gist.clearUserToken();
            let s = (i, e, t, o) => {
                let d = {
                    type: "in_app",
                    payload: {
                        delivery_id: i,
                        event: e,
                        metadata: {
                            action_name: t,
                            action_value: o
                        },
                        timestamp: Date.now() / 1e3
                    }
                };
                fetch(this.cio._trackUrl + "/api/v1/cio_deliveries/events", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(d),
                    keepalive: !0
                })
            };
            window.Gist.events.on("messageShown", i => {
                var t, o, d, c;
                let e = (o = (t = i == null ? void 0 : i.properties) == null ? void 0 : t.gist) == null ? void 0 : o.campaignId;
                typeof e != "undefined" && e != "" && s(i.properties.gist.campaignId, "opened", "", ""), this.cio._eventBus.emit("in-app:message-opened", {
                    messageId: i.messageId,
                    deliveryId: (c = (d = i.properties) == null ? void 0 : d.gist) == null ? void 0 : c.campaignId
                })
            }), window.Gist.events.on("messageDismissed", i => {
                var e, t;
                this.cio._eventBus.emit("in-app:message-dismissed", {
                    messageId: i.messageId,
                    deliveryId: (t = (e = i.properties) == null ? void 0 : e.gist) == null ? void 0 : t.campaignId
                })
            }), window.Gist.events.on("messageError", i => {
                var e, t;
                this.cio._eventBus.emit("in-app:message-error", {
                    messageId: i.messageId,
                    deliveryId: (t = (e = i.properties) == null ? void 0 : e.gist) == null ? void 0 : t.campaignId
                })
            }), window.Gist.events.on("messageAction", i => {
                var o, d, c, g, l, p;
                let e = (c = (d = (o = i == null ? void 0 : i.message) == null ? void 0 : o.properties) == null ? void 0 : d.gist) == null ? void 0 : c.campaignId,
                    t = (g = i == null ? void 0 : i.message) == null ? void 0 : g.instanceId;
                i.action != "gist://close" && typeof e != "undefined" && e != "" && s(i.message.properties.gist.campaignId, "clicked", i.name, i.action), this.cio._eventBus.emit("in-app:message-action", {
                    messageId: i.message.messageId,
                    deliveryId: (p = (l = i.message.properties) == null ? void 0 : l.gist) == null ? void 0 : p.campaignId,
                    action: i.action,
                    name: i.name,
                    actionName: i.name,
                    actionValue: i.action,
                    message: {
                        dismiss: function() {
                            window.Gist.dismissMessage(t)
                        }
                    }
                })
            }), this._initialized = !0
        }
    };
    var I = window._cio;
    I && I.notifyPluginLoaded(a);
})();