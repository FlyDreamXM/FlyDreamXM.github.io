import {
  Fragment,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  customRef,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  resolveComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toRef,
  toValue,
  unref,
  useTemplateRef,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withDirectives
} from "./chunk-JMGNZPER.js";
import {
  CONFIG
} from "./chunk-C3E56ZLK.js";
import {
  init_define_shokax_CONFIG
} from "./chunk-ODNR5DMV.js";
import {
  __commonJS,
  __toESM
} from "./chunk-OTYXESVJ.js";

// node_modules/recaptcha-v3/dist/ReCaptchaInstance.js
var require_ReCaptchaInstance = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaInstance.js"(exports) {
    "use strict";
    init_define_shokax_CONFIG();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
      function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
          resolve(value);
        });
      }
      return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _2 = { label: 0, sent: function() {
        if (t2[0] & 1) throw t2[1];
        return t2[1];
      }, trys: [], ops: [] }, f3, y4, t2, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n2) {
        return function(v3) {
          return step([n2, v3]);
        };
      }
      function step(op) {
        if (f3) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_2 = 0)), _2) try {
          if (f3 = 1, y4 && (t2 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t2 = y4["return"]) && t2.call(y4), 0) : y4.next) && !(t2 = t2.call(y4, op[1])).done) return t2;
          if (y4 = 0, t2) op = [op[0] & 2, t2.value];
          switch (op[0]) {
            case 0:
            case 1:
              t2 = op;
              break;
            case 4:
              _2.label++;
              return { value: op[1], done: false };
            case 5:
              _2.label++;
              y4 = op[1];
              op = [0];
              continue;
            case 7:
              op = _2.ops.pop();
              _2.trys.pop();
              continue;
            default:
              if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _2 = 0;
                continue;
              }
              if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                _2.label = op[1];
                break;
              }
              if (op[0] === 6 && _2.label < t2[1]) {
                _2.label = t2[1];
                t2 = op;
                break;
              }
              if (t2 && _2.label < t2[2]) {
                _2.label = t2[2];
                _2.ops.push(op);
                break;
              }
              if (t2[2]) _2.ops.pop();
              _2.trys.pop();
              continue;
          }
          op = body.call(thisArg, _2);
        } catch (e2) {
          op = [6, e2];
          y4 = 0;
        } finally {
          f3 = t2 = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = void 0;
    var ReCaptchaInstance = function() {
      function ReCaptchaInstance2(siteKey, recaptchaID, recaptcha) {
        this.siteKey = siteKey;
        this.recaptchaID = recaptchaID;
        this.recaptcha = recaptcha;
        this.styleContainer = null;
      }
      ReCaptchaInstance2.prototype.execute = function(action) {
        return __awaiter(this, void 0, void 0, function() {
          var _a2;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!this.recaptcha.enterprise) return [3, 2];
                return [4, this.recaptcha.enterprise.execute(this.recaptchaID, { action })];
              case 1:
                _a2 = _b.sent();
                return [3, 4];
              case 2:
                return [4, this.recaptcha.execute(this.recaptchaID, { action })];
              case 3:
                _a2 = _b.sent();
                _b.label = 4;
              case 4:
                return [2, _a2];
            }
          });
        });
      };
      ReCaptchaInstance2.prototype.getSiteKey = function() {
        return this.siteKey;
      };
      ReCaptchaInstance2.prototype.hideBadge = function() {
        if (this.styleContainer !== null) {
          return;
        }
        this.styleContainer = document.createElement("style");
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}";
        document.head.appendChild(this.styleContainer);
      };
      ReCaptchaInstance2.prototype.showBadge = function() {
        if (this.styleContainer === null) {
          return;
        }
        document.head.removeChild(this.styleContainer);
        this.styleContainer = null;
      };
      return ReCaptchaInstance2;
    }();
    exports.ReCaptchaInstance = ReCaptchaInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptchaLoader.js
var require_ReCaptchaLoader = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaLoader.js"(exports) {
    "use strict";
    init_define_shokax_CONFIG();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t2) {
        for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
          s2 = arguments[i];
          for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
        }
        return t2;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstance = exports.load = void 0;
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    var ELoadingState;
    (function(ELoadingState2) {
      ELoadingState2[ELoadingState2["NOT_LOADED"] = 0] = "NOT_LOADED";
      ELoadingState2[ELoadingState2["LOADING"] = 1] = "LOADING";
      ELoadingState2[ELoadingState2["LOADED"] = 2] = "LOADED";
    })(ELoadingState || (ELoadingState = {}));
    var ReCaptchaLoader = function() {
      function ReCaptchaLoader2() {
      }
      ReCaptchaLoader2.load = function(siteKey, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof document === "undefined") {
          return Promise.reject(new Error("This is a library for the browser!"));
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADED) {
          if (ReCaptchaLoader2.instance.getSiteKey() === siteKey) {
            return Promise.resolve(ReCaptchaLoader2.instance);
          } else {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADING) {
          if (siteKey !== ReCaptchaLoader2.instanceSiteKey) {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
          return new Promise(function(resolve, reject) {
            ReCaptchaLoader2.successfulLoadingConsumers.push(function(instance) {
              return resolve(instance);
            });
            ReCaptchaLoader2.errorLoadingRunnable.push(function(reason) {
              return reject(reason);
            });
          });
        }
        ReCaptchaLoader2.instanceSiteKey = siteKey;
        ReCaptchaLoader2.setLoadingState(ELoadingState.LOADING);
        var loader = new ReCaptchaLoader2();
        return new Promise(function(resolve, reject) {
          loader.loadScript(siteKey, options.useRecaptchaNet || false, options.useEnterprise || false, options.renderParameters ? options.renderParameters : {}, options.customUrl).then(function() {
            ReCaptchaLoader2.setLoadingState(ELoadingState.LOADED);
            var widgetID = loader.doExplicitRender(grecaptcha, siteKey, options.explicitRenderParameters ? options.explicitRenderParameters : {}, options.useEnterprise || false);
            var instance = new ReCaptchaInstance_1.ReCaptchaInstance(siteKey, widgetID, grecaptcha);
            ReCaptchaLoader2.successfulLoadingConsumers.forEach(function(v3) {
              return v3(instance);
            });
            ReCaptchaLoader2.successfulLoadingConsumers = [];
            if (options.autoHideBadge) {
              instance.hideBadge();
            }
            ReCaptchaLoader2.instance = instance;
            resolve(instance);
          }).catch(function(error) {
            ReCaptchaLoader2.errorLoadingRunnable.forEach(function(v3) {
              return v3(error);
            });
            ReCaptchaLoader2.errorLoadingRunnable = [];
            reject(error);
          });
        });
      };
      ReCaptchaLoader2.getInstance = function() {
        return ReCaptchaLoader2.instance;
      };
      ReCaptchaLoader2.setLoadingState = function(state) {
        ReCaptchaLoader2.loadingState = state;
      };
      ReCaptchaLoader2.getLoadingState = function() {
        if (ReCaptchaLoader2.loadingState === null) {
          return ELoadingState.NOT_LOADED;
        } else {
          return ReCaptchaLoader2.loadingState;
        }
      };
      ReCaptchaLoader2.prototype.loadScript = function(siteKey, useRecaptchaNet, useEnterprise, renderParameters, customUrl) {
        var _this = this;
        if (useRecaptchaNet === void 0) {
          useRecaptchaNet = false;
        }
        if (useEnterprise === void 0) {
          useEnterprise = false;
        }
        if (renderParameters === void 0) {
          renderParameters = {};
        }
        if (customUrl === void 0) {
          customUrl = "";
        }
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("recaptcha-v3-script", "");
        scriptElement.setAttribute("async", "");
        scriptElement.setAttribute("defer", "");
        var scriptBase = "https://www.google.com/recaptcha/api.js";
        if (useRecaptchaNet) {
          if (useEnterprise) {
            scriptBase = "https://recaptcha.net/recaptcha/enterprise.js";
          } else {
            scriptBase = "https://recaptcha.net/recaptcha/api.js";
          }
        } else if (useEnterprise) {
          scriptBase = "https://www.google.com/recaptcha/enterprise.js";
        }
        if (customUrl) {
          scriptBase = customUrl;
        }
        if (renderParameters.render) {
          renderParameters.render = void 0;
        }
        var parametersQuery = this.buildQueryString(renderParameters);
        scriptElement.src = scriptBase + "?render=explicit" + parametersQuery;
        return new Promise(function(resolve, reject) {
          scriptElement.addEventListener("load", _this.waitForScriptToLoad(function() {
            resolve(scriptElement);
          }, useEnterprise), false);
          scriptElement.onerror = function(error) {
            ReCaptchaLoader2.setLoadingState(ELoadingState.NOT_LOADED);
            reject(error);
          };
          document.head.appendChild(scriptElement);
        });
      };
      ReCaptchaLoader2.prototype.buildQueryString = function(parameters) {
        var parameterKeys = Object.keys(parameters);
        if (parameterKeys.length < 1) {
          return "";
        }
        return "&" + Object.keys(parameters).filter(function(parameterKey) {
          return !!parameters[parameterKey];
        }).map(function(parameterKey) {
          return parameterKey + "=" + parameters[parameterKey];
        }).join("&");
      };
      ReCaptchaLoader2.prototype.waitForScriptToLoad = function(callback, useEnterprise) {
        var _this = this;
        return function() {
          if (window.grecaptcha === void 0) {
            setTimeout(function() {
              _this.waitForScriptToLoad(callback, useEnterprise);
            }, ReCaptchaLoader2.SCRIPT_LOAD_DELAY);
          } else {
            if (useEnterprise) {
              window.grecaptcha.enterprise.ready(function() {
                callback();
              });
            } else {
              window.grecaptcha.ready(function() {
                callback();
              });
            }
          }
        };
      };
      ReCaptchaLoader2.prototype.doExplicitRender = function(grecaptcha2, siteKey, parameters, isEnterprise) {
        var augmentedParameters = __assign({ sitekey: siteKey }, parameters);
        if (parameters.container) {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(parameters.container, augmentedParameters);
          } else {
            return grecaptcha2.render(parameters.container, augmentedParameters);
          }
        } else {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(augmentedParameters);
          } else {
            return grecaptcha2.render(augmentedParameters);
          }
        }
      };
      ReCaptchaLoader2.loadingState = null;
      ReCaptchaLoader2.instance = null;
      ReCaptchaLoader2.instanceSiteKey = null;
      ReCaptchaLoader2.successfulLoadingConsumers = [];
      ReCaptchaLoader2.errorLoadingRunnable = [];
      ReCaptchaLoader2.SCRIPT_LOAD_DELAY = 25;
      return ReCaptchaLoader2;
    }();
    exports.load = ReCaptchaLoader.load;
    exports.getInstance = ReCaptchaLoader.getInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptcha.js
var require_ReCaptcha = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptcha.js"(exports) {
    "use strict";
    init_define_shokax_CONFIG();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = exports.getInstance = exports.load = void 0;
    var ReCaptchaLoader_1 = require_ReCaptchaLoader();
    Object.defineProperty(exports, "load", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.load;
    } });
    Object.defineProperty(exports, "getInstance", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.getInstance;
    } });
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    Object.defineProperty(exports, "ReCaptchaInstance", { enumerable: true, get: function() {
      return ReCaptchaInstance_1.ReCaptchaInstance;
    } });
  }
});

// themes/shokaX/source/js/_app/components/comments.ts
init_define_shokax_CONFIG();

// node_modules/@waline/client/dist/slim.js
init_define_shokax_CONFIG();

// node_modules/@waline/api/dist/api.js
init_define_shokax_CONFIG();
var m = { "Content-Type": "application/json" };
var s = (e2) => `${e2.replace(/\/?$/, "/")}api/`;
var c = (e2, n2 = "") => {
  if (typeof e2 == "object" && e2.errno) throw new TypeError(`${n2} failed with ${e2.errno}: ${e2.errmsg}`);
  return e2;
};
var p = ({ serverURL: e2, lang: n2, paths: o2, type: a, signal: t2 }) => fetch(`${s(e2)}article?path=${encodeURIComponent(o2.join(","))}&type=${encodeURIComponent(a.join(","))}&lang=${n2}`, { signal: t2 }).then((r2) => r2.json()).then((r2) => c(r2, "Get counter").data);
var d = ({ serverURL: e2, lang: n2, path: o2, type: a, action: t2 }) => fetch(`${s(e2)}article?lang=${n2}`, { method: "POST", headers: m, body: JSON.stringify({ path: o2, type: a, action: t2 }) }).then((r2) => r2.json()).then((r2) => c(r2, "Update counter").data);
var $ = ({ serverURL: e2, lang: n2, path: o2, page: a, pageSize: t2, sortBy: r2, signal: h4, token: i }) => {
  const l3 = {};
  return i && (l3.Authorization = `Bearer ${i}`), fetch(`${s(e2)}comment?path=${encodeURIComponent(o2)}&pageSize=${t2}&page=${a}&lang=${n2}&sortBy=${r2}`, { signal: h4, headers: l3 }).then((g) => g.json()).then((g) => c(g, "Get comment data").data);
};
var u = ({ serverURL: e2, lang: n2, token: o2, comment: a }) => {
  const t2 = { "Content-Type": "application/json" };
  return o2 && (t2.Authorization = `Bearer ${o2}`), fetch(`${s(e2)}comment?lang=${n2}`, { method: "POST", headers: t2, body: JSON.stringify(a) }).then((r2) => r2.json());
};
var y = ({ serverURL: e2, lang: n2, token: o2, objectId: a }) => fetch(`${s(e2)}comment/${a}?lang=${n2}`, { method: "DELETE", headers: { Authorization: `Bearer ${o2}` } }).then((t2) => t2.json()).then((t2) => c(t2, "Delete comment"));
var U = ({ serverURL: e2, lang: n2, token: o2, objectId: a, comment: t2 }) => fetch(`${s(e2)}comment/${a}?lang=${n2}`, { method: "PUT", headers: { ...m, Authorization: `Bearer ${o2}` }, body: JSON.stringify(t2) }).then((r2) => r2.json()).then((r2) => c(r2, "Update comment"));
var f = ({ serverURL: e2, lang: n2, paths: o2, signal: a }) => fetch(`${s(e2)}comment?type=count&url=${encodeURIComponent(o2.join(","))}&lang=${n2}`, { signal: a }).then((t2) => t2.json()).then((t2) => c(t2, "Get comment count").data);
var R = ({ lang: e2, serverURL: n2 }) => {
  const o2 = (window.innerWidth - 450) / 2, a = (window.innerHeight - 450) / 2, t2 = window.open(`${n2.replace(/\/$/, "")}/ui/login?lng=${encodeURIComponent(e2)}`, "_blank", `width=450,height=450,left=${o2},top=${a},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
  return t2?.postMessage({ type: "TOKEN", data: null }, "*"), new Promise((r2) => {
    const h4 = ({ data: i }) => {
      !i || typeof i != "object" || i.type !== "userInfo" || i.data.token && (t2?.close(), window.removeEventListener("message", h4), r2(i.data));
    };
    window.addEventListener("message", h4);
  });
};
var j = ({ serverURL: e2, lang: n2, paths: o2, signal: a }) => p({ serverURL: e2, lang: n2, paths: o2, type: ["time"], signal: a });
var v = (e2) => d({ ...e2, type: "time", action: "inc" });
var w = ({ serverURL: e2, lang: n2, count: o2, signal: a, token: t2 }) => {
  const r2 = {};
  return t2 && (r2.Authorization = `Bearer ${t2}`), fetch(`${s(e2)}comment?type=recent&count=${o2}&lang=${n2}`, { signal: a, headers: r2 }).then((h4) => h4.json());
};

// node_modules/@vueuse/core/index.mjs
init_define_shokax_CONFIG();

// node_modules/@vueuse/shared/index.mjs
init_define_shokax_CONFIG();
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {
};
function toRef2(...args) {
  if (args.length !== 1)
    return toRef(...args);
  const r2 = args[0];
  return typeof r2 === "function" ? readonly(customRef(() => ({ get: r2, set: noop }))) : ref(r2);
}
function createFilterWrapper(filter, fn2) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
var bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = void 0;
          resolve(lastInvoker());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = void 0;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter, options = {}) {
  const {
    initialState = "active"
  } = options;
  const isActive = toRef2(initialState === "active");
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function cacheStringFunction(fn2) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn2(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
// @__NO_SIDE_EFFECTS__
function useDebounceFn(fn2, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn2
  );
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    initialState = "active",
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn2, sync = true, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onMounted(fn2, target);
  else if (sync)
    fn2();
  else
    nextTick(fn2);
}
function tryOnUnmounted(fn2, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onUnmounted(fn2, target);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = shallowRef(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    if (isActive.value)
      timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

// node_modules/@vueuse/core/index.mjs
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function unrefElement(elRef) {
  var _a2;
  const plain = toValue(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn2) => fn2());
    cleanups.length = 0;
  };
  const register = (el2, event, listener, options) => {
    el2.addEventListener(event, listener, options);
    return () => el2.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e2) => e2 != null);
    return test.every((e2) => typeof e2 !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a2, _b;
      return [
        (_b = (_a2 = firstParamTargets.value) == null ? void 0 : _a2.map((e2) => unrefElement(e2))) != null ? _b : [defaultWindow].filter((e2) => e2 != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el2) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el2, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function useRafFn(fn2, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window: window2 = defaultWindow,
    once = false
  } = options;
  const isActive = shallowRef(false);
  const intervalLimit = computed(() => {
    return fpsLimit ? 1e3 / toValue(fpsLimit) : null;
  });
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp2) {
    if (!isActive.value || !window2)
      return;
    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp2;
    const delta = timestamp2 - previousFrameTimestamp;
    if (intervalLimit.value && delta < intervalLimit.value) {
      rafId = window2.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp2;
    fn2({ delta, timestamp: timestamp2 });
    if (once) {
      isActive.value = false;
      rafId = null;
      return;
    }
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
  boolean: {
    read: (v3) => v3 === "true",
    write: (v3) => String(v3)
  },
  object: {
    read: (v3) => JSON.parse(v3),
    write: (v3) => JSON.stringify(v3)
  },
  number: {
    read: (v3) => Number.parseFloat(v3),
    write: (v3) => String(v3)
  },
  any: {
    read: (v3) => v3,
    write: (v3) => String(v3)
  },
  string: {
    read: (v3) => v3,
    write: (v3) => String(v3)
  },
  map: {
    read: (v3) => new Map(JSON.parse(v3)),
    write: (v3) => JSON.stringify(Array.from(v3.entries()))
  },
  set: {
    read: (v3) => new Set(JSON.parse(v3)),
    write: (v3) => JSON.stringify(Array.from(v3))
  },
  date: {
    read: (v3) => new Date(v3),
    write: (v3) => v3.toISOString()
  }
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  const keyComputed = computed(() => toValue(key));
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    (newValue) => write(newValue),
    { flush, deep, eventFilter }
  );
  watch(keyComputed, () => update(), { flush });
  let firstMounted = false;
  const onStorageEvent = (ev) => {
    if (initOnMounted && !firstMounted) {
      return;
    }
    update(ev);
  };
  const onStorageCustomEvent = (ev) => {
    if (initOnMounted && !firstMounted) {
      return;
    }
    updateFromCustomEvent(ev);
  };
  if (window2 && listenToStorageChanges) {
    if (storage instanceof Storage)
      useEventListener(window2, "storage", onStorageEvent, { passive: true });
    else
      useEventListener(window2, customStorageEventName, onStorageCustomEvent);
  }
  if (initOnMounted) {
    tryOnMounted(() => {
      firstMounted = true;
      update();
    });
  } else {
    update();
  }
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage
      };
      window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
        detail: payload
      }));
    }
  }
  function write(v3) {
    try {
      const oldValue = storage.getItem(keyComputed.value);
      if (v3 == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v3);
        if (oldValue !== serialized) {
          storage.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value) {
      return;
    }
    pauseWatch();
    try {
      const serializedData = serializer.write(data.value);
      if (event === void 0 || (event == null ? void 0 : event.newValue) !== serializedData) {
        data.value = read(event);
      }
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
// @__NO_SIDE_EFFECTS__
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame",
    immediate = true
  } = options;
  const now = ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : useIntervalFn(update, interval, { immediate });
  if (exposeControls) {
    return {
      now,
      ...controls
    };
  } else {
    return now;
  }
}
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {},
    nonce = void 0
  } = options;
  const scriptTag = shallowRef(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el22) => {
      scriptTag.value = el22;
      resolve(el22);
      return el22;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el2 = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el2) {
      el2 = document2.createElement("script");
      el2.type = type;
      el2.async = async;
      el2.src = toValue(src);
      if (defer)
        el2.defer = defer;
      if (crossOrigin)
        el2.crossOrigin = crossOrigin;
      if (noModule)
        el2.noModule = noModule;
      if (referrerPolicy)
        el2.referrerPolicy = referrerPolicy;
      if (nonce) {
        el2.nonce = nonce;
      }
      Object.entries(attrs).forEach(([name, value]) => el2 == null ? void 0 : el2.setAttribute(name, value));
      shouldAppend = true;
    } else if (el2.hasAttribute("data-loaded")) {
      resolveWithElement(el2);
    }
    const listenerOptions = {
      passive: true
    };
    useEventListener(el2, "error", (event) => reject(event), listenerOptions);
    useEventListener(el2, "abort", (event) => reject(event), listenerOptions);
    useEventListener(el2, "load", () => {
      el2.setAttribute("data-loaded", "true");
      onLoaded(el2);
      resolveWithElement(el2);
    }, listenerOptions);
    if (shouldAppend)
      el2 = document2.head.appendChild(el2);
    if (!waitForScriptLoad)
      resolveWithElement(el2);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el2 = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el2)
      document2.head.removeChild(el2);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
var _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = shallowRef(false);
  const {
    document: document2 = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = shallowRef(css);
  let stop = () => {
  };
  const load = () => {
    if (!document2)
      return;
    const el2 = document2.getElementById(id) || document2.createElement("style");
    if (!el2.isConnected) {
      el2.id = id;
      if (options.nonce)
        el2.nonce = options.nonce;
      if (options.media)
        el2.media = options.media;
      document2.head.appendChild(el2);
    }
    if (isLoaded.value)
      return;
    stop = watch(
      cssRef,
      (value) => {
        el2.textContent = value;
      },
      { immediate: true }
    );
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document2 || !isLoaded.value)
      return;
    stop();
    document2.head.removeChild(document2.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
var DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];

// node_modules/autosize/dist/autosize.esm.js
init_define_shokax_CONFIG();
var e = /* @__PURE__ */ new Map();
function t(t2) {
  var o2 = e.get(t2);
  o2 && o2.destroy();
}
function o(t2) {
  var o2 = e.get(t2);
  o2 && o2.update();
}
var r = null;
"undefined" == typeof window ? ((r = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, r.update = function(e2) {
  return e2;
}) : ((r = function(t2, o2) {
  return t2 && Array.prototype.forEach.call(t2.length ? t2 : [t2], function(t3) {
    return function(t4) {
      if (t4 && t4.nodeName && "TEXTAREA" === t4.nodeName && !e.has(t4)) {
        var o3, r2 = null, n2 = window.getComputedStyle(t4), i = (o3 = t4.value, function() {
          a({ testForHeightReduction: "" === o3 || !t4.value.startsWith(o3), restoreTextAlign: null }), o3 = t4.value;
        }), l3 = function(o4) {
          t4.removeEventListener("autosize:destroy", l3), t4.removeEventListener("autosize:update", s2), t4.removeEventListener("input", i), window.removeEventListener("resize", s2), Object.keys(o4).forEach(function(e2) {
            return t4.style[e2] = o4[e2];
          }), e.delete(t4);
        }.bind(t4, { height: t4.style.height, resize: t4.style.resize, textAlign: t4.style.textAlign, overflowY: t4.style.overflowY, overflowX: t4.style.overflowX, wordWrap: t4.style.wordWrap });
        t4.addEventListener("autosize:destroy", l3), t4.addEventListener("autosize:update", s2), t4.addEventListener("input", i), window.addEventListener("resize", s2), t4.style.overflowX = "hidden", t4.style.wordWrap = "break-word", e.set(t4, { destroy: l3, update: s2 }), s2();
      }
      function a(e2) {
        var o4, i2, l4 = e2.restoreTextAlign, s3 = void 0 === l4 ? null : l4, d4 = e2.testForHeightReduction, u3 = void 0 === d4 || d4, c2 = n2.overflowY;
        if (0 !== t4.scrollHeight && ("vertical" === n2.resize ? t4.style.resize = "none" : "both" === n2.resize && (t4.style.resize = "horizontal"), u3 && (o4 = function(e3) {
          for (var t5 = []; e3 && e3.parentNode && e3.parentNode instanceof Element; ) e3.parentNode.scrollTop && t5.push([e3.parentNode, e3.parentNode.scrollTop]), e3 = e3.parentNode;
          return function() {
            return t5.forEach(function(e4) {
              var t6 = e4[0], o5 = e4[1];
              t6.style.scrollBehavior = "auto", t6.scrollTop = o5, t6.style.scrollBehavior = null;
            });
          };
        }(t4), t4.style.height = ""), i2 = "content-box" === n2.boxSizing ? t4.scrollHeight - (parseFloat(n2.paddingTop) + parseFloat(n2.paddingBottom)) : t4.scrollHeight + parseFloat(n2.borderTopWidth) + parseFloat(n2.borderBottomWidth), "none" !== n2.maxHeight && i2 > parseFloat(n2.maxHeight) ? ("hidden" === n2.overflowY && (t4.style.overflow = "scroll"), i2 = parseFloat(n2.maxHeight)) : "hidden" !== n2.overflowY && (t4.style.overflow = "hidden"), t4.style.height = i2 + "px", s3 && (t4.style.textAlign = s3), o4 && o4(), r2 !== i2 && (t4.dispatchEvent(new Event("autosize:resized", { bubbles: true })), r2 = i2), c2 !== n2.overflow && !s3)) {
          var v3 = n2.textAlign;
          "hidden" === n2.overflow && (t4.style.textAlign = "start" === v3 ? "end" : "start"), a({ restoreTextAlign: v3, testForHeightReduction: true });
        }
      }
      function s2() {
        a({ testForHeightReduction: true, restoreTextAlign: null });
      }
    }(t3);
  }), t2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], t), e2;
}, r.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], o), e2;
});
var n = r;
var autosize_esm_default = n;

// node_modules/marked/lib/marked.esm.js
init_define_shokax_CONFIG();
function L() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var O = L();
function H(l3) {
  O = l3;
}
var E = { exec: () => null };
function h2(l3, e2 = "") {
  let t2 = typeof l3 == "string" ? l3 : l3.source, n2 = { replace: (r2, i) => {
    let s2 = typeof i == "string" ? i : i.source;
    return s2 = s2.replace(m2.caret, "$1"), t2 = t2.replace(r2, s2), n2;
  }, getRegex: () => new RegExp(t2, e2) };
  return n2;
}
var m2 = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}#`), htmlBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}<(?:[a-z].*>|!--)`, "i") };
var xe = /^(?:[ \t]*(?:\n|$))+/;
var be = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Re = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var C = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Oe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var j2 = /(?:[*+-]|\d{1,9}[.)])/;
var se = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ie = h2(se).replace(/bull/g, j2).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Te = h2(se).replace(/bull/g, j2).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var F = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var we = /^[^\n]+/;
var Q = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var ye = h2(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Pe = h2(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, j2).getRegex();
var v2 = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var U2 = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Se = h2("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U2).replace("tag", v2).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var oe = h2(F).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v2).getRegex();
var $e = h2(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", oe).getRegex();
var K = { blockquote: $e, code: be, def: ye, fences: Re, heading: Oe, hr: C, html: Se, lheading: ie, list: Pe, newline: xe, paragraph: oe, table: E, text: we };
var re = h2("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v2).getRegex();
var _e = { ...K, lheading: Te, table: re, paragraph: h2(F).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v2).getRegex() };
var Le = { ...K, html: h2(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U2).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: E, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: h2(F).replace("hr", C).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ie).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Me = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var ze = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var ae = /^( {2,}|\\)\n(?!\s*$)/;
var Ae = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var W = /[\s\p{P}\p{S}]/u;
var le = /[^\s\p{P}\p{S}]/u;
var Ee = h2(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex();
var ue = /(?!~)[\p{P}\p{S}]/u;
var Ce = /(?!~)[\s\p{P}\p{S}]/u;
var Ie = /(?:[^\s\p{P}\p{S}]|~)/u;
var Be = /\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g;
var pe = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var qe = h2(pe, "u").replace(/punct/g, D).getRegex();
var ve = h2(pe, "u").replace(/punct/g, ue).getRegex();
var ce = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var De = h2(ce, "gu").replace(/notPunctSpace/g, le).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Ze = h2(ce, "gu").replace(/notPunctSpace/g, Ie).replace(/punctSpace/g, Ce).replace(/punct/g, ue).getRegex();
var Ge = h2("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, le).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var He = h2(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var Ne = h2(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var je = h2(U2).replace("(?:-->|$)", "-->").getRegex();
var Fe = h2("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", je).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/;
var Qe = h2(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var he = h2(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex();
var de = h2(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex();
var Ue = h2("reflink|nolink(?!\\()", "g").replace("reflink", he).replace("nolink", de).getRegex();
var X = { _backpedal: E, anyPunctuation: He, autolink: Ne, blockSkip: Be, br: ae, code: ze, del: E, emStrongLDelim: qe, emStrongRDelimAst: De, emStrongRDelimUnd: Ge, escape: Me, link: Qe, nolink: de, punctuation: Ee, reflink: he, reflinkSearch: Ue, tag: Fe, text: Ae, url: E };
var Ke = { ...X, link: h2(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: h2(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
var N = { ...X, emStrongRDelimAst: Ze, emStrongLDelim: ve, url: h2(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ };
var We = { ...N, br: h2(ae).replace("{2,}", "*").getRegex(), text: h2(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var I = { normal: K, gfm: _e, pedantic: Le };
var M = { normal: X, gfm: N, breaks: We, pedantic: Ke };
var Xe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ke = (l3) => Xe[l3];
function w2(l3, e2) {
  if (e2) {
    if (m2.escapeTest.test(l3)) return l3.replace(m2.escapeReplace, ke);
  } else if (m2.escapeTestNoEncode.test(l3)) return l3.replace(m2.escapeReplaceNoEncode, ke);
  return l3;
}
function J(l3) {
  try {
    l3 = encodeURI(l3).replace(m2.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function V(l3, e2) {
  let t2 = l3.replace(m2.findPipe, (i, s2, o2) => {
    let a = false, u3 = s2;
    for (; --u3 >= 0 && o2[u3] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), n2 = t2.split(m2.splitPipe), r2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !n2.at(-1)?.trim() && n2.pop(), e2) if (n2.length > e2) n2.splice(e2);
  else for (; n2.length < e2; ) n2.push("");
  for (; r2 < n2.length; r2++) n2[r2] = n2[r2].trim().replace(m2.slashPipe, "|");
  return n2;
}
function z(l3, e2, t2) {
  let n2 = l3.length;
  if (n2 === 0) return "";
  let r2 = 0;
  for (; r2 < n2; ) {
    let i = l3.charAt(n2 - r2 - 1);
    if (i === e2 && !t2) r2++;
    else if (i !== e2 && t2) r2++;
    else break;
  }
  return l3.slice(0, n2 - r2);
}
function ge(l3, e2) {
  if (l3.indexOf(e2[1]) === -1) return -1;
  let t2 = 0;
  for (let n2 = 0; n2 < l3.length; n2++) if (l3[n2] === "\\") n2++;
  else if (l3[n2] === e2[0]) t2++;
  else if (l3[n2] === e2[1] && (t2--, t2 < 0)) return n2;
  return t2 > 0 ? -2 : -1;
}
function fe(l3, e2, t2, n2, r2) {
  let i = e2.href, s2 = e2.title || null, o2 = l3[1].replace(r2.other.outputLinkReplace, "$1");
  n2.state.inLink = true;
  let a = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t2, href: i, title: s2, text: o2, tokens: n2.inlineTokens(o2) };
  return n2.state.inLink = false, a;
}
function Je(l3, e2, t2) {
  let n2 = l3.match(t2.other.indentCodeCompensation);
  if (n2 === null) return e2;
  let r2 = n2[1];
  return e2.split(`
`).map((i) => {
    let s2 = i.match(t2.other.beginningSpace);
    if (s2 === null) return i;
    let [o2] = s2;
    return o2.length >= r2.length ? i.slice(r2.length) : i;
  }).join(`
`);
}
var y2 = class {
  options;
  rules;
  lexer;
  constructor(e2) {
    this.options = e2 || O;
  }
  space(e2) {
    let t2 = this.rules.block.newline.exec(e2);
    if (t2 && t2[0].length > 0) return { type: "space", raw: t2[0] };
  }
  code(e2) {
    let t2 = this.rules.block.code.exec(e2);
    if (t2) {
      let n2 = t2[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : z(n2, `
`) };
    }
  }
  fences(e2) {
    let t2 = this.rules.block.fences.exec(e2);
    if (t2) {
      let n2 = t2[0], r2 = Je(n2, t2[3] || "", this.rules);
      return { type: "code", raw: n2, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t2[2], text: r2 };
    }
  }
  heading(e2) {
    let t2 = this.rules.block.heading.exec(e2);
    if (t2) {
      let n2 = t2[2].trim();
      if (this.rules.other.endingHash.test(n2)) {
        let r2 = z(n2, "#");
        (this.options.pedantic || !r2 || this.rules.other.endingSpaceChar.test(r2)) && (n2 = r2.trim());
      }
      return { type: "heading", raw: t2[0], depth: t2[1].length, text: n2, tokens: this.lexer.inline(n2) };
    }
  }
  hr(e2) {
    let t2 = this.rules.block.hr.exec(e2);
    if (t2) return { type: "hr", raw: z(t2[0], `
`) };
  }
  blockquote(e2) {
    let t2 = this.rules.block.blockquote.exec(e2);
    if (t2) {
      let n2 = z(t2[0], `
`).split(`
`), r2 = "", i = "", s2 = [];
      for (; n2.length > 0; ) {
        let o2 = false, a = [], u3;
        for (u3 = 0; u3 < n2.length; u3++) if (this.rules.other.blockquoteStart.test(n2[u3])) a.push(n2[u3]), o2 = true;
        else if (!o2) a.push(n2[u3]);
        else break;
        n2 = n2.slice(u3);
        let p2 = a.join(`
`), c2 = p2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r2 = r2 ? `${r2}
${p2}` : p2, i = i ? `${i}
${c2}` : c2;
        let f3 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c2, s2, true), this.lexer.state.top = f3, n2.length === 0) break;
        let k = s2.at(-1);
        if (k?.type === "code") break;
        if (k?.type === "blockquote") {
          let x = k, g = x.raw + `
` + n2.join(`
`), T = this.blockquote(g);
          s2[s2.length - 1] = T, r2 = r2.substring(0, r2.length - x.raw.length) + T.raw, i = i.substring(0, i.length - x.text.length) + T.text;
          break;
        } else if (k?.type === "list") {
          let x = k, g = x.raw + `
` + n2.join(`
`), T = this.list(g);
          s2[s2.length - 1] = T, r2 = r2.substring(0, r2.length - k.raw.length) + T.raw, i = i.substring(0, i.length - x.raw.length) + T.raw, n2 = g.substring(s2.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r2, tokens: s2, text: i };
    }
  }
  list(e2) {
    let t2 = this.rules.block.list.exec(e2);
    if (t2) {
      let n2 = t2[1].trim(), r2 = n2.length > 1, i = { type: "list", raw: "", ordered: r2, start: r2 ? +n2.slice(0, -1) : "", loose: false, items: [] };
      n2 = r2 ? `\\d{1,9}\\${n2.slice(-1)}` : `\\${n2}`, this.options.pedantic && (n2 = r2 ? n2 : "[*+-]");
      let s2 = this.rules.other.listItemRegex(n2), o2 = false;
      for (; e2; ) {
        let u3 = false, p2 = "", c2 = "";
        if (!(t2 = s2.exec(e2)) || this.rules.block.hr.test(e2)) break;
        p2 = t2[0], e2 = e2.substring(p2.length);
        let f3 = t2[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (Z) => " ".repeat(3 * Z.length)), k = e2.split(`
`, 1)[0], x = !f3.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c2 = f3.trimStart()) : x ? g = t2[1].length + 1 : (g = t2[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c2 = f3.slice(g), g += t2[1].length), x && this.rules.other.blankLine.test(k) && (p2 += k + `
`, e2 = e2.substring(k.length + 1), u3 = true), !u3) {
          let Z = this.rules.other.nextBulletRegex(g), ee = this.rules.other.hrRegex(g), te = this.rules.other.fencesBeginRegex(g), ne = this.rules.other.headingBeginRegex(g), me = this.rules.other.htmlBeginRegex(g);
          for (; e2; ) {
            let G = e2.split(`
`, 1)[0], A;
            if (k = G, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), A = k) : A = k.replace(this.rules.other.tabCharGlobal, "    "), te.test(k) || ne.test(k) || me.test(k) || Z.test(k) || ee.test(k)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= g || !k.trim()) c2 += `
` + A.slice(g);
            else {
              if (x || f3.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || te.test(f3) || ne.test(f3) || ee.test(f3)) break;
              c2 += `
` + k;
            }
            !x && !k.trim() && (x = true), p2 += G + `
`, e2 = e2.substring(G.length + 1), f3 = A.slice(g);
          }
        }
        i.loose || (o2 ? i.loose = true : this.rules.other.doubleBlankLine.test(p2) && (o2 = true));
        let T = null, Y;
        this.options.gfm && (T = this.rules.other.listIsTask.exec(c2), T && (Y = T[0] !== "[ ] ", c2 = c2.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: p2, task: !!T, checked: Y, loose: false, text: c2, tokens: [] }), i.raw += p2;
      }
      let a = i.items.at(-1);
      if (a) a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let u3 = 0; u3 < i.items.length; u3++) if (this.lexer.state.top = false, i.items[u3].tokens = this.lexer.blockTokens(i.items[u3].text, []), !i.loose) {
        let p2 = i.items[u3].tokens.filter((f3) => f3.type === "space"), c2 = p2.length > 0 && p2.some((f3) => this.rules.other.anyLine.test(f3.raw));
        i.loose = c2;
      }
      if (i.loose) for (let u3 = 0; u3 < i.items.length; u3++) i.items[u3].loose = true;
      return i;
    }
  }
  html(e2) {
    let t2 = this.rules.block.html.exec(e2);
    if (t2) return { type: "html", block: true, raw: t2[0], pre: t2[1] === "pre" || t2[1] === "script" || t2[1] === "style", text: t2[0] };
  }
  def(e2) {
    let t2 = this.rules.block.def.exec(e2);
    if (t2) {
      let n2 = t2[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r2 = t2[2] ? t2[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t2[3];
      return { type: "def", tag: n2, raw: t2[0], href: r2, title: i };
    }
  }
  table(e2) {
    let t2 = this.rules.block.table.exec(e2);
    if (!t2 || !this.rules.other.tableDelimiter.test(t2[2])) return;
    let n2 = V(t2[1]), r2 = t2[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t2[3]?.trim() ? t2[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s2 = { type: "table", raw: t2[0], header: [], align: [], rows: [] };
    if (n2.length === r2.length) {
      for (let o2 of r2) this.rules.other.tableAlignRight.test(o2) ? s2.align.push("right") : this.rules.other.tableAlignCenter.test(o2) ? s2.align.push("center") : this.rules.other.tableAlignLeft.test(o2) ? s2.align.push("left") : s2.align.push(null);
      for (let o2 = 0; o2 < n2.length; o2++) s2.header.push({ text: n2[o2], tokens: this.lexer.inline(n2[o2]), header: true, align: s2.align[o2] });
      for (let o2 of i) s2.rows.push(V(o2, s2.header.length).map((a, u3) => ({ text: a, tokens: this.lexer.inline(a), header: false, align: s2.align[u3] })));
      return s2;
    }
  }
  lheading(e2) {
    let t2 = this.rules.block.lheading.exec(e2);
    if (t2) return { type: "heading", raw: t2[0], depth: t2[2].charAt(0) === "=" ? 1 : 2, text: t2[1], tokens: this.lexer.inline(t2[1]) };
  }
  paragraph(e2) {
    let t2 = this.rules.block.paragraph.exec(e2);
    if (t2) {
      let n2 = t2[1].charAt(t2[1].length - 1) === `
` ? t2[1].slice(0, -1) : t2[1];
      return { type: "paragraph", raw: t2[0], text: n2, tokens: this.lexer.inline(n2) };
    }
  }
  text(e2) {
    let t2 = this.rules.block.text.exec(e2);
    if (t2) return { type: "text", raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  }
  escape(e2) {
    let t2 = this.rules.inline.escape.exec(e2);
    if (t2) return { type: "escape", raw: t2[0], text: t2[1] };
  }
  tag(e2) {
    let t2 = this.rules.inline.tag.exec(e2);
    if (t2) return !this.lexer.state.inLink && this.rules.other.startATag.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t2[0] };
  }
  link(e2) {
    let t2 = this.rules.inline.link.exec(e2);
    if (t2) {
      let n2 = t2[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n2)) {
        if (!this.rules.other.endAngleBracket.test(n2)) return;
        let s2 = z(n2.slice(0, -1), "\\");
        if ((n2.length - s2.length) % 2 === 0) return;
      } else {
        let s2 = ge(t2[2], "()");
        if (s2 === -2) return;
        if (s2 > -1) {
          let a = (t2[0].indexOf("!") === 0 ? 5 : 4) + t2[1].length + s2;
          t2[2] = t2[2].substring(0, s2), t2[0] = t2[0].substring(0, a).trim(), t2[3] = "";
        }
      }
      let r2 = t2[2], i = "";
      if (this.options.pedantic) {
        let s2 = this.rules.other.pedanticHrefTitle.exec(r2);
        s2 && (r2 = s2[1], i = s2[3]);
      } else i = t2[3] ? t2[3].slice(1, -1) : "";
      return r2 = r2.trim(), this.rules.other.startAngleBracket.test(r2) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n2) ? r2 = r2.slice(1) : r2 = r2.slice(1, -1)), fe(t2, { href: r2 && r2.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t2[0], this.lexer, this.rules);
    }
  }
  reflink(e2, t2) {
    let n2;
    if ((n2 = this.rules.inline.reflink.exec(e2)) || (n2 = this.rules.inline.nolink.exec(e2))) {
      let r2 = (n2[2] || n2[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t2[r2.toLowerCase()];
      if (!i) {
        let s2 = n2[0].charAt(0);
        return { type: "text", raw: s2, text: s2 };
      }
      return fe(n2, i, n2[0], this.lexer, this.rules);
    }
  }
  emStrong(e2, t2, n2 = "") {
    let r2 = this.rules.inline.emStrongLDelim.exec(e2);
    if (!r2 || r2[3] && n2.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r2[1] || r2[2] || "") || !n2 || this.rules.inline.punctuation.exec(n2)) {
      let s2 = [...r2[0]].length - 1, o2, a, u3 = s2, p2 = 0, c2 = r2[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c2.lastIndex = 0, t2 = t2.slice(-1 * e2.length + s2); (r2 = c2.exec(t2)) != null; ) {
        if (o2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6], !o2) continue;
        if (a = [...o2].length, r2[3] || r2[4]) {
          u3 += a;
          continue;
        } else if ((r2[5] || r2[6]) && s2 % 3 && !((s2 + a) % 3)) {
          p2 += a;
          continue;
        }
        if (u3 -= a, u3 > 0) continue;
        a = Math.min(a, a + u3 + p2);
        let f3 = [...r2[0]][0].length, k = e2.slice(0, s2 + r2.index + f3 + a);
        if (Math.min(s2, a) % 2) {
          let g = k.slice(1, -1);
          return { type: "em", raw: k, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let x = k.slice(2, -2);
        return { type: "strong", raw: k, text: x, tokens: this.lexer.inlineTokens(x) };
      }
    }
  }
  codespan(e2) {
    let t2 = this.rules.inline.code.exec(e2);
    if (t2) {
      let n2 = t2[2].replace(this.rules.other.newLineCharGlobal, " "), r2 = this.rules.other.nonSpaceChar.test(n2), i = this.rules.other.startingSpaceChar.test(n2) && this.rules.other.endingSpaceChar.test(n2);
      return r2 && i && (n2 = n2.substring(1, n2.length - 1)), { type: "codespan", raw: t2[0], text: n2 };
    }
  }
  br(e2) {
    let t2 = this.rules.inline.br.exec(e2);
    if (t2) return { type: "br", raw: t2[0] };
  }
  del(e2) {
    let t2 = this.rules.inline.del.exec(e2);
    if (t2) return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2]) };
  }
  autolink(e2) {
    let t2 = this.rules.inline.autolink.exec(e2);
    if (t2) {
      let n2, r2;
      return t2[2] === "@" ? (n2 = t2[1], r2 = "mailto:" + n2) : (n2 = t2[1], r2 = n2), { type: "link", raw: t2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
    }
  }
  url(e2) {
    let t2;
    if (t2 = this.rules.inline.url.exec(e2)) {
      let n2, r2;
      if (t2[2] === "@") n2 = t2[0], r2 = "mailto:" + n2;
      else {
        let i;
        do
          i = t2[0], t2[0] = this.rules.inline._backpedal.exec(t2[0])?.[0] ?? "";
        while (i !== t2[0]);
        n2 = t2[0], t2[1] === "www." ? r2 = "http://" + t2[0] : r2 = t2[0];
      }
      return { type: "link", raw: t2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
    }
  }
  inlineText(e2) {
    let t2 = this.rules.inline.text.exec(e2);
    if (t2) {
      let n2 = this.lexer.state.inRawBlock;
      return { type: "text", raw: t2[0], text: t2[0], escaped: n2 };
    }
  }
};
var b = class l {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e2) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e2 || O, this.options.tokenizer = this.options.tokenizer || new y2(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t2 = { other: m2, block: I.normal, inline: M.normal };
    this.options.pedantic ? (t2.block = I.pedantic, t2.inline = M.pedantic) : this.options.gfm && (t2.block = I.gfm, this.options.breaks ? t2.inline = M.breaks : t2.inline = M.gfm), this.tokenizer.rules = t2;
  }
  static get rules() {
    return { block: I, inline: M };
  }
  static lex(e2, t2) {
    return new l(t2).lex(e2);
  }
  static lexInline(e2, t2) {
    return new l(t2).inlineTokens(e2);
  }
  lex(e2) {
    e2 = e2.replace(m2.carriageReturn, `
`), this.blockTokens(e2, this.tokens);
    for (let t2 = 0; t2 < this.inlineQueue.length; t2++) {
      let n2 = this.inlineQueue[t2];
      this.inlineTokens(n2.src, n2.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e2, t2 = [], n2 = false) {
    for (this.options.pedantic && (e2 = e2.replace(m2.tabCharGlobal, "    ").replace(m2.spaceLine, "")); e2; ) {
      let r2;
      if (this.options.extensions?.block?.some((s2) => (r2 = s2.call({ lexer: this }, e2, t2)) ? (e2 = e2.substring(r2.raw.length), t2.push(r2), true) : false)) continue;
      if (r2 = this.tokenizer.space(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s2 = t2.at(-1);
        r2.raw.length === 1 && s2 !== void 0 ? s2.raw += `
` : t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.code(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s2 = t2.at(-1);
        s2?.type === "paragraph" || s2?.type === "text" ? (s2.raw += (s2.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s2.text += `
` + r2.text, this.inlineQueue.at(-1).src = s2.text) : t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.fences(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.heading(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.hr(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.blockquote(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.list(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.html(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.def(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s2 = t2.at(-1);
        s2?.type === "paragraph" || s2?.type === "text" ? (s2.raw += (s2.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s2.text += `
` + r2.raw, this.inlineQueue.at(-1).src = s2.text) : this.tokens.links[r2.tag] || (this.tokens.links[r2.tag] = { href: r2.href, title: r2.title }, t2.push(r2));
        continue;
      }
      if (r2 = this.tokenizer.table(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.lheading(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      let i = e2;
      if (this.options.extensions?.startBlock) {
        let s2 = 1 / 0, o2 = e2.slice(1), a;
        this.options.extensions.startBlock.forEach((u3) => {
          a = u3.call({ lexer: this }, o2), typeof a == "number" && a >= 0 && (s2 = Math.min(s2, a));
        }), s2 < 1 / 0 && s2 >= 0 && (i = e2.substring(0, s2 + 1));
      }
      if (this.state.top && (r2 = this.tokenizer.paragraph(i))) {
        let s2 = t2.at(-1);
        n2 && s2?.type === "paragraph" ? (s2.raw += (s2.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s2.text += `
` + r2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s2.text) : t2.push(r2), n2 = i.length !== e2.length, e2 = e2.substring(r2.raw.length);
        continue;
      }
      if (r2 = this.tokenizer.text(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s2 = t2.at(-1);
        s2?.type === "text" ? (s2.raw += (s2.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s2.text += `
` + r2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s2.text) : t2.push(r2);
        continue;
      }
      if (e2) {
        let s2 = "Infinite loop on byte: " + e2.charCodeAt(0);
        if (this.options.silent) {
          console.error(s2);
          break;
        } else throw new Error(s2);
      }
    }
    return this.state.top = true, t2;
  }
  inline(e2, t2 = []) {
    return this.inlineQueue.push({ src: e2, tokens: t2 }), t2;
  }
  inlineTokens(e2, t2 = []) {
    let n2 = e2, r2 = null;
    if (this.tokens.links) {
      let o2 = Object.keys(this.tokens.links);
      if (o2.length > 0) for (; (r2 = this.tokenizer.rules.inline.reflinkSearch.exec(n2)) != null; ) o2.includes(r2[0].slice(r2[0].lastIndexOf("[") + 1, -1)) && (n2 = n2.slice(0, r2.index) + "[" + "a".repeat(r2[0].length - 2) + "]" + n2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r2 = this.tokenizer.rules.inline.anyPunctuation.exec(n2)) != null; ) n2 = n2.slice(0, r2.index) + "++" + n2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (r2 = this.tokenizer.rules.inline.blockSkip.exec(n2)) != null; ) n2 = n2.slice(0, r2.index) + "[" + "a".repeat(r2[0].length - 2) + "]" + n2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let i = false, s2 = "";
    for (; e2; ) {
      i || (s2 = ""), i = false;
      let o2;
      if (this.options.extensions?.inline?.some((u3) => (o2 = u3.call({ lexer: this }, e2, t2)) ? (e2 = e2.substring(o2.raw.length), t2.push(o2), true) : false)) continue;
      if (o2 = this.tokenizer.escape(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.tag(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.link(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.reflink(e2, this.tokens.links)) {
        e2 = e2.substring(o2.raw.length);
        let u3 = t2.at(-1);
        o2.type === "text" && u3?.type === "text" ? (u3.raw += o2.raw, u3.text += o2.text) : t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.emStrong(e2, n2, s2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.codespan(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.br(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.del(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.autolink(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (!this.state.inLink && (o2 = this.tokenizer.url(e2))) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      let a = e2;
      if (this.options.extensions?.startInline) {
        let u3 = 1 / 0, p2 = e2.slice(1), c2;
        this.options.extensions.startInline.forEach((f3) => {
          c2 = f3.call({ lexer: this }, p2), typeof c2 == "number" && c2 >= 0 && (u3 = Math.min(u3, c2));
        }), u3 < 1 / 0 && u3 >= 0 && (a = e2.substring(0, u3 + 1));
      }
      if (o2 = this.tokenizer.inlineText(a)) {
        e2 = e2.substring(o2.raw.length), o2.raw.slice(-1) !== "_" && (s2 = o2.raw.slice(-1)), i = true;
        let u3 = t2.at(-1);
        u3?.type === "text" ? (u3.raw += o2.raw, u3.text += o2.text) : t2.push(o2);
        continue;
      }
      if (e2) {
        let u3 = "Infinite loop on byte: " + e2.charCodeAt(0);
        if (this.options.silent) {
          console.error(u3);
          break;
        } else throw new Error(u3);
      }
    }
    return t2;
  }
};
var P = class {
  options;
  parser;
  constructor(e2) {
    this.options = e2 || O;
  }
  space(e2) {
    return "";
  }
  code({ text: e2, lang: t2, escaped: n2 }) {
    let r2 = (t2 || "").match(m2.notSpaceStart)?.[0], i = e2.replace(m2.endingNewline, "") + `
`;
    return r2 ? '<pre><code class="language-' + w2(r2) + '">' + (n2 ? i : w2(i, true)) + `</code></pre>
` : "<pre><code>" + (n2 ? i : w2(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e2 }) {
    return `<blockquote>
${this.parser.parse(e2)}</blockquote>
`;
  }
  html({ text: e2 }) {
    return e2;
  }
  def(e2) {
    return "";
  }
  heading({ tokens: e2, depth: t2 }) {
    return `<h${t2}>${this.parser.parseInline(e2)}</h${t2}>
`;
  }
  hr(e2) {
    return `<hr>
`;
  }
  list(e2) {
    let t2 = e2.ordered, n2 = e2.start, r2 = "";
    for (let o2 = 0; o2 < e2.items.length; o2++) {
      let a = e2.items[o2];
      r2 += this.listitem(a);
    }
    let i = t2 ? "ol" : "ul", s2 = t2 && n2 !== 1 ? ' start="' + n2 + '"' : "";
    return "<" + i + s2 + `>
` + r2 + "</" + i + `>
`;
  }
  listitem(e2) {
    let t2 = "";
    if (e2.task) {
      let n2 = this.checkbox({ checked: !!e2.checked });
      e2.loose ? e2.tokens[0]?.type === "paragraph" ? (e2.tokens[0].text = n2 + " " + e2.tokens[0].text, e2.tokens[0].tokens && e2.tokens[0].tokens.length > 0 && e2.tokens[0].tokens[0].type === "text" && (e2.tokens[0].tokens[0].text = n2 + " " + w2(e2.tokens[0].tokens[0].text), e2.tokens[0].tokens[0].escaped = true)) : e2.tokens.unshift({ type: "text", raw: n2 + " ", text: n2 + " ", escaped: true }) : t2 += n2 + " ";
    }
    return t2 += this.parser.parse(e2.tokens, !!e2.loose), `<li>${t2}</li>
`;
  }
  checkbox({ checked: e2 }) {
    return "<input " + (e2 ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e2 }) {
    return `<p>${this.parser.parseInline(e2)}</p>
`;
  }
  table(e2) {
    let t2 = "", n2 = "";
    for (let i = 0; i < e2.header.length; i++) n2 += this.tablecell(e2.header[i]);
    t2 += this.tablerow({ text: n2 });
    let r2 = "";
    for (let i = 0; i < e2.rows.length; i++) {
      let s2 = e2.rows[i];
      n2 = "";
      for (let o2 = 0; o2 < s2.length; o2++) n2 += this.tablecell(s2[o2]);
      r2 += this.tablerow({ text: n2 });
    }
    return r2 && (r2 = `<tbody>${r2}</tbody>`), `<table>
<thead>
` + t2 + `</thead>
` + r2 + `</table>
`;
  }
  tablerow({ text: e2 }) {
    return `<tr>
${e2}</tr>
`;
  }
  tablecell(e2) {
    let t2 = this.parser.parseInline(e2.tokens), n2 = e2.header ? "th" : "td";
    return (e2.align ? `<${n2} align="${e2.align}">` : `<${n2}>`) + t2 + `</${n2}>
`;
  }
  strong({ tokens: e2 }) {
    return `<strong>${this.parser.parseInline(e2)}</strong>`;
  }
  em({ tokens: e2 }) {
    return `<em>${this.parser.parseInline(e2)}</em>`;
  }
  codespan({ text: e2 }) {
    return `<code>${w2(e2, true)}</code>`;
  }
  br(e2) {
    return "<br>";
  }
  del({ tokens: e2 }) {
    return `<del>${this.parser.parseInline(e2)}</del>`;
  }
  link({ href: e2, title: t2, tokens: n2 }) {
    let r2 = this.parser.parseInline(n2), i = J(e2);
    if (i === null) return r2;
    e2 = i;
    let s2 = '<a href="' + e2 + '"';
    return t2 && (s2 += ' title="' + w2(t2) + '"'), s2 += ">" + r2 + "</a>", s2;
  }
  image({ href: e2, title: t2, text: n2, tokens: r2 }) {
    r2 && (n2 = this.parser.parseInline(r2, this.parser.textRenderer));
    let i = J(e2);
    if (i === null) return w2(n2);
    e2 = i;
    let s2 = `<img src="${e2}" alt="${n2}"`;
    return t2 && (s2 += ` title="${w2(t2)}"`), s2 += ">", s2;
  }
  text(e2) {
    return "tokens" in e2 && e2.tokens ? this.parser.parseInline(e2.tokens) : "escaped" in e2 && e2.escaped ? e2.text : w2(e2.text);
  }
};
var S = class {
  strong({ text: e2 }) {
    return e2;
  }
  em({ text: e2 }) {
    return e2;
  }
  codespan({ text: e2 }) {
    return e2;
  }
  del({ text: e2 }) {
    return e2;
  }
  html({ text: e2 }) {
    return e2;
  }
  text({ text: e2 }) {
    return e2;
  }
  link({ text: e2 }) {
    return "" + e2;
  }
  image({ text: e2 }) {
    return "" + e2;
  }
  br() {
    return "";
  }
};
var R2 = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e2) {
    this.options = e2 || O, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new S();
  }
  static parse(e2, t2) {
    return new l2(t2).parse(e2);
  }
  static parseInline(e2, t2) {
    return new l2(t2).parseInline(e2);
  }
  parse(e2, t2 = true) {
    let n2 = "";
    for (let r2 = 0; r2 < e2.length; r2++) {
      let i = e2[r2];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o2 = i, a = this.options.extensions.renderers[o2.type].call({ parser: this }, o2);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o2.type)) {
          n2 += a || "";
          continue;
        }
      }
      let s2 = i;
      switch (s2.type) {
        case "space": {
          n2 += this.renderer.space(s2);
          continue;
        }
        case "hr": {
          n2 += this.renderer.hr(s2);
          continue;
        }
        case "heading": {
          n2 += this.renderer.heading(s2);
          continue;
        }
        case "code": {
          n2 += this.renderer.code(s2);
          continue;
        }
        case "table": {
          n2 += this.renderer.table(s2);
          continue;
        }
        case "blockquote": {
          n2 += this.renderer.blockquote(s2);
          continue;
        }
        case "list": {
          n2 += this.renderer.list(s2);
          continue;
        }
        case "html": {
          n2 += this.renderer.html(s2);
          continue;
        }
        case "def": {
          n2 += this.renderer.def(s2);
          continue;
        }
        case "paragraph": {
          n2 += this.renderer.paragraph(s2);
          continue;
        }
        case "text": {
          let o2 = s2, a = this.renderer.text(o2);
          for (; r2 + 1 < e2.length && e2[r2 + 1].type === "text"; ) o2 = e2[++r2], a += `
` + this.renderer.text(o2);
          t2 ? n2 += this.renderer.paragraph({ type: "paragraph", raw: a, text: a, tokens: [{ type: "text", raw: a, text: a, escaped: true }] }) : n2 += a;
          continue;
        }
        default: {
          let o2 = 'Token with "' + s2.type + '" type was not found.';
          if (this.options.silent) return console.error(o2), "";
          throw new Error(o2);
        }
      }
    }
    return n2;
  }
  parseInline(e2, t2 = this.renderer) {
    let n2 = "";
    for (let r2 = 0; r2 < e2.length; r2++) {
      let i = e2[r2];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o2 = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o2 !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n2 += o2 || "";
          continue;
        }
      }
      let s2 = i;
      switch (s2.type) {
        case "escape": {
          n2 += t2.text(s2);
          break;
        }
        case "html": {
          n2 += t2.html(s2);
          break;
        }
        case "link": {
          n2 += t2.link(s2);
          break;
        }
        case "image": {
          n2 += t2.image(s2);
          break;
        }
        case "strong": {
          n2 += t2.strong(s2);
          break;
        }
        case "em": {
          n2 += t2.em(s2);
          break;
        }
        case "codespan": {
          n2 += t2.codespan(s2);
          break;
        }
        case "br": {
          n2 += t2.br(s2);
          break;
        }
        case "del": {
          n2 += t2.del(s2);
          break;
        }
        case "text": {
          n2 += t2.text(s2);
          break;
        }
        default: {
          let o2 = 'Token with "' + s2.type + '" type was not found.';
          if (this.options.silent) return console.error(o2), "";
          throw new Error(o2);
        }
      }
    }
    return n2;
  }
};
var $2 = class {
  options;
  block;
  constructor(e2) {
    this.options = e2 || O;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e2) {
    return e2;
  }
  postprocess(e2) {
    return e2;
  }
  processAllTokens(e2) {
    return e2;
  }
  provideLexer() {
    return this.block ? b.lex : b.lexInline;
  }
  provideParser() {
    return this.block ? R2.parse : R2.parseInline;
  }
};
var B = class {
  defaults = L();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = R2;
  Renderer = P;
  TextRenderer = S;
  Lexer = b;
  Tokenizer = y2;
  Hooks = $2;
  constructor(...e2) {
    this.use(...e2);
  }
  walkTokens(e2, t2) {
    let n2 = [];
    for (let r2 of e2) switch (n2 = n2.concat(t2.call(this, r2)), r2.type) {
      case "table": {
        let i = r2;
        for (let s2 of i.header) n2 = n2.concat(this.walkTokens(s2.tokens, t2));
        for (let s2 of i.rows) for (let o2 of s2) n2 = n2.concat(this.walkTokens(o2.tokens, t2));
        break;
      }
      case "list": {
        let i = r2;
        n2 = n2.concat(this.walkTokens(i.items, t2));
        break;
      }
      default: {
        let i = r2;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s2) => {
          let o2 = i[s2].flat(1 / 0);
          n2 = n2.concat(this.walkTokens(o2, t2));
        }) : i.tokens && (n2 = n2.concat(this.walkTokens(i.tokens, t2)));
      }
    }
    return n2;
  }
  use(...e2) {
    let t2 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e2.forEach((n2) => {
      let r2 = { ...n2 };
      if (r2.async = this.defaults.async || r2.async || false, n2.extensions && (n2.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s2 = t2.renderers[i.name];
          s2 ? t2.renderers[i.name] = function(...o2) {
            let a = i.renderer.apply(this, o2);
            return a === false && (a = s2.apply(this, o2)), a;
          } : t2.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s2 = t2[i.level];
          s2 ? s2.unshift(i.tokenizer) : t2[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t2.startBlock ? t2.startBlock.push(i.start) : t2.startBlock = [i.start] : i.level === "inline" && (t2.startInline ? t2.startInline.push(i.start) : t2.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t2.childTokens[i.name] = i.childTokens);
      }), r2.extensions = t2), n2.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s2 in n2.renderer) {
          if (!(s2 in i)) throw new Error(`renderer '${s2}' does not exist`);
          if (["options", "parser"].includes(s2)) continue;
          let o2 = s2, a = n2.renderer[o2], u3 = i[o2];
          i[o2] = (...p2) => {
            let c2 = a.apply(i, p2);
            return c2 === false && (c2 = u3.apply(i, p2)), c2 || "";
          };
        }
        r2.renderer = i;
      }
      if (n2.tokenizer) {
        let i = this.defaults.tokenizer || new y2(this.defaults);
        for (let s2 in n2.tokenizer) {
          if (!(s2 in i)) throw new Error(`tokenizer '${s2}' does not exist`);
          if (["options", "rules", "lexer"].includes(s2)) continue;
          let o2 = s2, a = n2.tokenizer[o2], u3 = i[o2];
          i[o2] = (...p2) => {
            let c2 = a.apply(i, p2);
            return c2 === false && (c2 = u3.apply(i, p2)), c2;
          };
        }
        r2.tokenizer = i;
      }
      if (n2.hooks) {
        let i = this.defaults.hooks || new $2();
        for (let s2 in n2.hooks) {
          if (!(s2 in i)) throw new Error(`hook '${s2}' does not exist`);
          if (["options", "block"].includes(s2)) continue;
          let o2 = s2, a = n2.hooks[o2], u3 = i[o2];
          $2.passThroughHooks.has(s2) ? i[o2] = (p2) => {
            if (this.defaults.async) return Promise.resolve(a.call(i, p2)).then((f3) => u3.call(i, f3));
            let c2 = a.call(i, p2);
            return u3.call(i, c2);
          } : i[o2] = (...p2) => {
            let c2 = a.apply(i, p2);
            return c2 === false && (c2 = u3.apply(i, p2)), c2;
          };
        }
        r2.hooks = i;
      }
      if (n2.walkTokens) {
        let i = this.defaults.walkTokens, s2 = n2.walkTokens;
        r2.walkTokens = function(o2) {
          let a = [];
          return a.push(s2.call(this, o2)), i && (a = a.concat(i.call(this, o2))), a;
        };
      }
      this.defaults = { ...this.defaults, ...r2 };
    }), this;
  }
  setOptions(e2) {
    return this.defaults = { ...this.defaults, ...e2 }, this;
  }
  lexer(e2, t2) {
    return b.lex(e2, t2 ?? this.defaults);
  }
  parser(e2, t2) {
    return R2.parse(e2, t2 ?? this.defaults);
  }
  parseMarkdown(e2) {
    return (n2, r2) => {
      let i = { ...r2 }, s2 = { ...this.defaults, ...i }, o2 = this.onError(!!s2.silent, !!s2.async);
      if (this.defaults.async === true && i.async === false) return o2(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n2 > "u" || n2 === null) return o2(new Error("marked(): input parameter is undefined or null"));
      if (typeof n2 != "string") return o2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n2) + ", string expected"));
      s2.hooks && (s2.hooks.options = s2, s2.hooks.block = e2);
      let a = s2.hooks ? s2.hooks.provideLexer() : e2 ? b.lex : b.lexInline, u3 = s2.hooks ? s2.hooks.provideParser() : e2 ? R2.parse : R2.parseInline;
      if (s2.async) return Promise.resolve(s2.hooks ? s2.hooks.preprocess(n2) : n2).then((p2) => a(p2, s2)).then((p2) => s2.hooks ? s2.hooks.processAllTokens(p2) : p2).then((p2) => s2.walkTokens ? Promise.all(this.walkTokens(p2, s2.walkTokens)).then(() => p2) : p2).then((p2) => u3(p2, s2)).then((p2) => s2.hooks ? s2.hooks.postprocess(p2) : p2).catch(o2);
      try {
        s2.hooks && (n2 = s2.hooks.preprocess(n2));
        let p2 = a(n2, s2);
        s2.hooks && (p2 = s2.hooks.processAllTokens(p2)), s2.walkTokens && this.walkTokens(p2, s2.walkTokens);
        let c2 = u3(p2, s2);
        return s2.hooks && (c2 = s2.hooks.postprocess(c2)), c2;
      } catch (p2) {
        return o2(p2);
      }
    };
  }
  onError(e2, t2) {
    return (n2) => {
      if (n2.message += `
Please report this to https://github.com/markedjs/marked.`, e2) {
        let r2 = "<p>An error occurred:</p><pre>" + w2(n2.message + "", true) + "</pre>";
        return t2 ? Promise.resolve(r2) : r2;
      }
      if (t2) return Promise.reject(n2);
      throw n2;
    };
  }
};
var _ = new B();
function d2(l3, e2) {
  return _.parse(l3, e2);
}
d2.options = d2.setOptions = function(l3) {
  return _.setOptions(l3), d2.defaults = _.defaults, H(d2.defaults), d2;
};
d2.getDefaults = L;
d2.defaults = O;
d2.use = function(...l3) {
  return _.use(...l3), d2.defaults = _.defaults, H(d2.defaults), d2;
};
d2.walkTokens = function(l3, e2) {
  return _.walkTokens(l3, e2);
};
d2.parseInline = _.parseInline;
d2.Parser = R2;
d2.parser = R2.parse;
d2.Renderer = P;
d2.TextRenderer = S;
d2.Lexer = b;
d2.lexer = b.lex;
d2.Tokenizer = y2;
d2.Hooks = $2;
d2.parse = d2;
var Dt = d2.options;
var Zt = d2.setOptions;
var Gt = d2.use;
var Ht = d2.walkTokens;
var Nt = d2.parseInline;
var Ft = R2.parse;
var Qt = b.lex;

// node_modules/marked-highlight/src/index.js
init_define_shokax_CONFIG();
function markedHighlight(options) {
  if (typeof options === "function") {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options.langPrefix !== "string") {
    options.langPrefix = "language-";
  }
  if (typeof options.emptyLangClass !== "string") {
    options.emptyLangClass = "";
  }
  return {
    async: !!options.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token.lang);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang, token.lang || "")).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang, token.lang || "");
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code(code, infoString, escaped) {
        if (typeof code === "object") {
          escaped = code.escaped;
          infoString = code.lang;
          code = code.text;
        }
        const lang = getLang(infoString);
        const classValue = lang ? options.langPrefix + escape(lang) : options.emptyLangClass;
        const classAttr = classValue ? ` class="${classValue}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(lang) {
  return (lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return (code) => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}

// node_modules/@waline/client/dist/slim.js
var import_recaptcha_v3 = __toESM(require_ReCaptcha(), 1);
var Kt = ["nick", "mail", "link"];
var De2 = (e2) => e2.filter((l3) => Kt.includes(l3));
var Pe2 = ["//unpkg.com/@waline/emojis@1.1.0/weibo"];
var Zt2 = ["//unpkg.com/@waline/emojis/tieba/tieba_agree.png", "//unpkg.com/@waline/emojis/tieba/tieba_look_down.png", "//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png", "//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png", "//unpkg.com/@waline/emojis/tieba/tieba_awkward.png", "//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"];
var Xt = (e2) => new Promise((l3, t2) => {
  if (e2.size > 128e3) return t2(new Error("File too large! File size limit 128KB"));
  const a = new FileReader();
  a.readAsDataURL(e2), a.onload = () => l3(a.result), a.onerror = t2;
});
var Yt = (e2) => e2 ? '<p class="wl-tex">TeX is not available in preview</p>' : '<span class="wl-tex">TeX is not available in preview</span>';
var Jt = (e2) => {
  const l3 = async (t2, a = {}) => fetch(`https://api.giphy.com/v1/gifs/${t2}?${new URLSearchParams({ lang: e2, limit: "20", rating: "g", api_key: "6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp", ...a }).toString()}`).then((n2) => n2.json()).then(({ data: n2 }) => n2.map((s2) => ({ title: s2.title, src: s2.images.downsized_medium.url })));
  return { search: (t2) => l3("search", { q: t2, offset: "0" }), default: () => l3("trending", {}), more: (t2, a = 0) => l3("search", { q: t2, offset: a.toString() }) };
};
var Qt2 = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/;
var ea = /</;
var ta = /(?:^|\s)\/\/(.+?)$/gm;
var aa = /\/\*([\S\s]*?)\*\//gm;
var la = new RegExp(`(${Qt2.source}|${ea.source})|((?:${ta.source})|(?:${aa.source}))`, "gmi");
var qe2 = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
var Ie2 = {};
var na = (e2) => {
  let l3 = 0;
  return e2.replace(la, (t2, a, n2) => {
    if (n2) return `<span style="color: slategray">${n2}</span>`;
    if (a === "<") return "&lt;";
    let s2;
    Ie2[a] ? s2 = Ie2[a] : (s2 = qe2[l3], Ie2[a] = s2);
    const h4 = `<span style="color: #${s2}">${a}</span>`;
    return l3 = ++l3 % qe2.length, h4;
  });
};
var ra = ["nick", "nickError", "mail", "mailError", "link", "optional", "placeholder", "sofa", "submit", "like", "cancelLike", "reply", "cancelReply", "comment", "refresh", "more", "preview", "emoji", "uploadImage", "seconds", "minutes", "hours", "days", "now", "uploading", "login", "logout", "admin", "sticky", "word", "wordHint", "anonymous", "level0", "level1", "level2", "level3", "level4", "level5", "gif", "gifSearchPlaceholder", "profile", "approved", "waiting", "spam", "unsticky", "oldest", "latest", "hottest", "reactionTitle"];
var J2 = (e2) => Object.fromEntries(e2.map((l3, t2) => [ra[t2], l3]));
var oa = J2(["Benutzername", "Der Benutzername darf nicht weniger als 3 Bytes umfassen.", "E-Mail", "Bitte best\xE4tigen Sie Ihre E-Mail-Adresse.", "Webseite", "Optional", "Kommentieren Sie hier...", "Noch keine Kommentare.", "Senden", "Gef\xE4llt mir", "Gef\xE4llt mir nicht mehr", "Antworten", "Antwort abbrechen", "Kommentare", "Aktualisieren", "Mehr laden...", "Vorschau", "Emoji", "Ein Bild hochladen", "Vor einigen Sekunden", "Vor einigen Minuten", "Vor einigen Stunden", "Vor einigen Tagen", "Gerade eben", "Hochladen l\xE4uft", "Anmelden", "Abmelden", "Admin", "Angeheftet", "W\xF6rter", "Bitte geben Sie Kommentare zwischen $0 und $1 W\xF6rtern ein! Aktuelle Anzahl der W\xF6rter: $2", "Anonym", "Zwerge", "Hobbits", "Ents", "Magier", "Elfen", "Ma\xEFar", "GIF", "Nach einem GIF suchen", "Profil", "Genehmigt", "Ausstehend", "Spam", "L\xF6sen", "\xC4lteste", "Neueste", "Am beliebtesten", "Was denken Sie?"]);
var Oe2 = J2(["NickName", "NickName cannot be less than 3 bytes.", "E-Mail", "Please confirm your email address.", "Website", "Optional", "Comment here...", "No comment yet.", "Submit", "Like", "Cancel like", "Reply", "Cancel reply", "Comments", "Refresh", "Load More...", "Preview", "Emoji", "Upload Image", "seconds ago", "minutes ago", "hours ago", "days ago", "just now", "Uploading", "Login", "logout", "Admin", "Sticky", "Words", `Please input comments between $0 and $1 words!
 Current word number: $2`, "Anonymous", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Search GIF", "Profile", "Approved", "Waiting", "Spam", "Unsticky", "Oldest", "Latest", "Hottest", "What do you think?"]);
var Ge2 = J2(["Nombre de usuario", "El nombre de usuario no puede tener menos de 3 bytes.", "Correo electr\xF3nico", "Por favor confirma tu direcci\xF3n de correo electr\xF3nico.", "Sitio web", "Opcional", "Comenta aqu\xED...", "Sin comentarios todav\xEDa.", "Enviar", "Like", "Anular like", "Responder", "Anular respuesta", "Comentarios", "Recargar", "Cargar M\xE1s...", "Previsualizar", "Emoji", "Subir Imagen", "segundos atr\xE1s", "minutos atr\xE1s", "horas atr\xE1s", "d\xEDas atr\xE1s", "justo ahora", "Subiendo", "Iniciar sesi\xF3n", "cerrar sesi\xF3n", "Admin", "Fijado", "Palabras", `Por favor escriba entre $0 y $1 palabras!
 El n\xFAmero actual de palabras: $2`, "An\xF3nimo", "Enanos", "Hobbits", "Ents", "Magos", "Elfos", "Maiar", "GIF", "Buscar GIF", "Perfil", "Aprobado", "Esperando", "Spam", "Desfijar", "M\xE1s antiguos", "M\xE1s recientes", "M\xE1s vistos", "\xBFQu\xE9 piensas?"]);
var Ke2 = J2(["Pseudo", "Le pseudo ne peut pas faire moins de 3 octets.", "E-mail", "Veuillez confirmer votre adresse e-mail.", "Site Web", "Optionnel", "Commentez ici...", "Aucun commentaire pour l'instant.", "Envoyer", "J'aime", "Annuler le j'aime", "R\xE9pondre", "Annuler la r\xE9ponse", "Commentaires", "Actualiser", "Charger plus...", "Aper\xE7u", "Emoji", "T\xE9l\xE9charger une image", "Il y a quelques secondes", "Il y a quelques minutes", "Il y a quelques heures", "Il y a quelques jours", "\xC0 l'instant", "T\xE9l\xE9chargement en cours", "Connexion", "D\xE9connexion", "Admin", "\xC9pingl\xE9", "Mots", `Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2`, "Anonyme", "Nains", "Hobbits", "Ents", "Mages", "Elfes", "Ma\xEFar", "GIF", "Rechercher un GIF", "Profil", "Approuv\xE9", "En attente", "Ind\xE9sirable", "D\xE9tacher", "Le plus ancien", "Dernier", "Le plus populaire", "Qu'en pensez-vous ?"]);
var Ze2 = J2(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0", "3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.", "\u30B5\u30A4\u30C8", "\u30AA\u30D7\u30B7\u30E7\u30F3", "\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8", "\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~", "\u63D0\u51FA\u3059\u308B", "Like", "Cancel like", "\u8FD4\u4FE1\u3059\u308B", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30B3\u30E1\u30F3\u30C8", "\u66F4\u65B0", "\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080", "\u30D7\u30EC\u30D3\u30E5\u30FC", "\u7D75\u6587\u5B57", "\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9", "\u79D2\u524D", "\u5206\u524D", "\u6642\u9593\u524D", "\u65E5\u524D", "\u305F\u3063\u3060\u4ECA", "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9", "\u30ED\u30B0\u30A4\u30F3\u3059\u308B", "\u30ED\u30B0\u30A2\u30A6\u30C8", "\u7BA1\u7406\u8005", "\u30C8\u30C3\u30D7\u306B\u7F6E\u304F", "\u30EF\u30FC\u30C9", `\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`, "\u533F\u540D", "\u3046\u3048\u306B\u3093", "\u306A\u304B\u306B\u3093", "\u3057\u3082\u304A\u3057", "\u7279\u306B\u3057\u3082\u304A\u3057", "\u304B\u3052", "\u306A\u306C\u3057", "GIF", "\u63A2\u3059 GIF", "\u500B\u4EBA\u60C5\u5831", "\u627F\u8A8D\u6E08\u307F", "\u5F85\u3063\u3066\u3044\u308B", "\u30B9\u30D1\u30E0", "\u3079\u305F\u3064\u304B\u306A\u3044", "\u9006\u9806", "\u6B63\u9806", "\u4EBA\u6C17\u9806", "\u3069\u3046\u601D\u3044\u307E\u3059\u304B\uFF1F"]);
var ia = J2(["Apelido", "Apelido n\xE3o pode ser menor que 3 bytes.", "E-Mail", "Por favor, confirme seu endere\xE7o de e-mail.", "Website", "Opcional", "Comente aqui...", "Nenhum coment\xE1rio, ainda.", "Enviar", "Like", "Cancel like", "Responder", "Cancelar resposta", "Coment\xE1rios", "Refrescar", "Carregar Mais...", "Visualizar", "Emoji", "Enviar Imagem", "segundos atr\xE1s", "minutos atr\xE1s", "horas atr\xE1s", "dias atr\xE1s", "agora mesmo", "Enviando", "Entrar", "Sair", "Admin", "Sticky", "Palavras", `Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`, "An\xF4nimo", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Pesquisar GIF", "informa\xE7\xE3o pessoal", "Aprovado", "Espera", "Spam", "Unsticky", "Mais velho", "Mais recentes", "Mais quente", "O que voc\xEA acha?"]);
var Xe2 = J2(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C", "\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.", "\u042D\u043B. \u0430\u0434\u0440\u0435\u0441", "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.", "\u0412\u0435\u0431-\u0441\u0430\u0439\u0442", "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439", "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...", "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", "Like", "Cancel like", "\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C", "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442", "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438", "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C", "\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...", "\u041F\u0440\u0435\u0432\u044C\u044E", "\u044D\u043C\u043E\u0434\u0437\u0438", "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", "\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434", "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434", "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434", "\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434", "\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430", "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F", "\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B", "\u0410\u0434\u043C\u0438\u043D", "\u041B\u0438\u043F\u043A\u0438\u0439", "\u0421\u043B\u043E\u0432\u0430", `\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`, "\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "\u041F\u043E\u0438\u0441\u043A GIF", "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435", "\u041E\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u044B\u0439", "\u041E\u0436\u0438\u0434\u0430\u044E\u0449\u0438\u0439", "\u0421\u043F\u0430\u043C", "\u041D\u0435\u043B\u0438\u043F\u043A\u0438\u0439", "\u0441\u0430\u043C\u044B\u0439 \u0441\u0442\u0430\u0440\u044B\u0439", "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439", "\u0441\u0430\u043C\u044B\u0439 \u0433\u043E\u0440\u044F\u0447\u0438\u0439", "\u0427\u0442\u043E \u0432\u044B \u0434\u0443\u043C\u0430\u0435\u0442\u0435?"]);
var Ye = J2(["T\xEAn", "T\xEAn kh\xF4ng \u0111\u01B0\u1EE3c nh\u1ECF h\u01A1n 3 k\xFD t\u1EF1.", "E-Mail", "Vui l\xF2ng x\xE1c nh\u1EADp \u0111\u1ECBa ch\u1EC9 email c\u1EE7a b\u1EA1n.", "Website", "T\xF9y ch\u1ECDn", "H\xE3y b\xECnh lu\u1EADn c\xF3 v\u0103n ho\xE1!", "Ch\u01B0a c\xF3 b\xECnh lu\u1EADn", "G\u1EEDi", "Th\xEDch", "B\u1ECF th\xEDch", "Tr\u1EA3 l\u1EDDi", "H\u1EE7y b\u1ECF", "b\xECnh lu\u1EADn", "L\xE0m m\u1EDBi", "T\u1EA3i th\xEAm...", "Xem tr\u01B0\u1EDBc", "Emoji", "T\u1EA3i l\xEAn h\xECnh \u1EA3nh", "gi\xE2y tr\u01B0\u1EDBc", "ph\xFAt tr\u01B0\u1EDBc", "gi\u1EDD tr\u01B0\u1EDBc", "ng\xE0y tr\u01B0\u1EDBc", "V\u1EEBa xong", "\u0110ang t\u1EA3i l\xEAn", "\u0110\u0103ng nh\u1EADp", "\u0111\u0103ng xu\u1EA5t", "Qu\u1EA3n tr\u1ECB vi\xEAn", "D\xEDnh", "t\u1EEB", `B\xECnh lu\u1EADn ph\u1EA3i c\xF3 \u0111\u1ED9 d\xE0i gi\u1EEFa $0 v\xE0 $1 t\u1EEB!
 S\u1ED1 t\u1EEB hi\u1EC7n t\u1EA1i: $2`, "V\xF4 danh", "Ng\u01B0\u1EDDi l\xF9n", "Ng\u01B0\u1EDDi t\xED hon", "Th\u1EA7n r\u1EEBng", "Ph\xE1p s\u01B0", "Ti\xEAn t\u1ED9c", "Maiar", "\u1EA2nh GIF", "T\xECm ki\u1EBFm \u1EA3nh GIF", "th\xF4ng tin c\xE1 nh\xE2n", "\u0110\xE3 \u0111\u01B0\u1EE3c ph\xEA duy\u1EC7t", "\u0110ang ch\u1EDD \u0111\u1EE3i", "Th\u01B0 r\xE1c", "Kh\xF4ng d\xEDnh", "l\xE2u \u0111\u1EDDi nh\u1EA5t", "mu\u1ED9n nh\u1EA5t", "n\xF3ng nh\u1EA5t", "What do you think?"]);
var Je2 = J2(["\u6635\u79F0", "\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26", "\u90AE\u7BB1", "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740", "\u7F51\u5740", "\u53EF\u9009", "\u6B22\u8FCE\u8BC4\u8BBA", "\u6765\u53D1\u8BC4\u8BBA\u5427~", "\u63D0\u4EA4", "\u559C\u6B22", "\u53D6\u6D88\u559C\u6B22", "\u56DE\u590D", "\u53D6\u6D88\u56DE\u590D", "\u8BC4\u8BBA", "\u5237\u65B0", "\u52A0\u8F7D\u66F4\u591A...", "\u9884\u89C8", "\u8868\u60C5", "\u4E0A\u4F20\u56FE\u7247", "\u79D2\u524D", "\u5206\u949F\u524D", "\u5C0F\u65F6\u524D", "\u5929\u524D", "\u521A\u521A", "\u6B63\u5728\u4E0A\u4F20", "\u767B\u5F55", "\u9000\u51FA", "\u535A\u4E3B", "\u7F6E\u9876", "\u5B57", `\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`, "\u533F\u540D", "\u6F5C\u6C34", "\u5192\u6CE1", "\u5410\u69FD", "\u6D3B\u8DC3", "\u8BDD\u75E8", "\u4F20\u8BF4", "\u8868\u60C5\u5305", "\u641C\u7D22\u8868\u60C5\u5305", "\u4E2A\u4EBA\u8D44\u6599", "\u901A\u8FC7", "\u5F85\u5BA1\u6838", "\u5783\u573E", "\u53D6\u6D88\u7F6E\u9876", "\u6309\u5012\u5E8F", "\u6309\u6B63\u5E8F", "\u6309\u70ED\u5EA6", "\u4F60\u8BA4\u4E3A\u8FD9\u7BC7\u6587\u7AE0\u600E\u4E48\u6837\uFF1F"]);
var sa = J2(["\u66B1\u7A31", "\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143", "\u90F5\u7BB1", "\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740", "\u7DB2\u5740", "\u53EF\u9078", "\u6B61\u8FCE\u7559\u8A00", "\u4F86\u767C\u7559\u8A00\u5427~", "\u9001\u51FA", "\u559C\u6B61", "\u53D6\u6D88\u559C\u6B61", "\u56DE\u8986", "\u53D6\u6D88\u56DE\u8986", "\u7559\u8A00", "\u91CD\u6574", "\u8F09\u5165\u66F4\u591A...", "\u9810\u89BD", "\u8868\u60C5", "\u4E0A\u50B3\u5716\u7247", "\u79D2\u524D", "\u5206\u9418\u524D", "\u5C0F\u6642\u524D", "\u5929\u524D", "\u525B\u525B", "\u6B63\u5728\u4E0A\u50B3", "\u767B\u5165", "\u767B\u51FA", "\u7BA1\u7406\u8005", "\u7F6E\u9802", "\u5B57", `\u7559\u8A00\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u76EE\u524D\u5B57\u6578\uFF1A$2`, "\u533F\u540D", "\u6F5B\u6C34", "\u5192\u6CE1", "\u5410\u69FD", "\u6D3B\u8E8D", "\u591A\u8A71", "\u50B3\u8AAA", "\u8868\u60C5\u5305", "\u641C\u5C0B\u8868\u60C5\u5305", "\u500B\u4EBA\u8CC7\u6599", "\u901A\u904E", "\u5F85\u5BE9\u6838", "\u5783\u573E", "\u53D6\u6D88\u7F6E\u9802", "\u6700\u65E9", "\u6700\u65B0", "\u71B1\u9580", "\u4F60\u8A8D\u70BA\u9019\u7BC7\u6587\u7AE0\u600E\u9EBC\u6A23\uFF1F"]);
var Qe2 = "en-US";
var fe2 = { zh: Je2, "zh-cn": Je2, "zh-tw": sa, en: Oe2, "en-us": Oe2, fr: Ke2, "fr-fr": Ke2, jp: Ze2, "jp-jp": Ze2, "pt-br": ia, ru: Xe2, "ru-ru": Xe2, vi: Ye, "vi-vn": Ye, de: oa, es: Ge2, "es-mx": Ge2 };
var et = (e2) => fe2[e2.toLowerCase()] || fe2[Qe2.toLowerCase()];
var tt = (e2) => Object.keys(fe2).includes(e2.toLowerCase()) ? e2 : Qe2;
var at = { latest: "insertedAt_desc", oldest: "insertedAt_asc", hottest: "like_desc" };
var ca = Object.keys(at);
var we2 = Symbol("waline-config");
var lt = (e2) => {
  try {
    e2 = decodeURI(e2);
  } catch {
  }
  return e2;
};
var nt = (e2 = "") => e2.replace(/\/$/u, "");
var rt = (e2) => /^(https?:)?\/\//.test(e2);
var ye2 = (e2) => {
  const l3 = nt(e2);
  return rt(l3) ? l3 : `https://${l3}`;
};
var ua = (e2) => Array.isArray(e2) ? e2 : e2 ? [0, e2] : false;
var ce2 = (e2, l3) => e2 == null || e2 === true ? l3 : e2 === false ? null : e2;
var ma = ({ serverURL: e2, path: l3 = location.pathname, lang: t2 = typeof navigator > "u" ? "en-US" : navigator.language, locale: a, meta: n2 = ["nick", "mail", "link"], requiredMeta: s2 = [], dark: h4 = false, pageSize: c2 = 10, wordLimit: f3, noCopyright: v3 = false, login: y4 = "enable", recaptchaV3Key: m4 = "", turnstileKey: R4 = "", commentSorting: j4 = "latest", emoji: E2 = Pe2, imageUploader: $4, highlighter: S3, texRenderer: i, search: g, reaction: K2, ...X2 }) => ({ serverURL: ye2(e2), path: lt(l3), lang: tt(t2), locale: { ...et(tt(t2)), ...typeof a == "object" ? a : {} }, wordLimit: ua(f3), meta: De2(n2), requiredMeta: De2(s2), dark: h4, pageSize: c2, commentSorting: j4, login: y4, noCopyright: v3, recaptchaV3Key: m4, turnstileKey: R4, ...X2, reaction: K2 === true ? Zt2 : K2 || null, imageUploader: ce2($4, Xt), highlighter: ce2(S3, na), texRenderer: ce2(i, Yt), emoji: ce2(E2, Pe2), search: ce2(g, Jt(t2)) });
var re2 = (e2) => typeof e2 == "string";
var Ae2 = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}";
var va = (e2) => re2(e2) ? e2 === "auto" ? `@media(prefers-color-scheme:dark){body${Ae2}}` : `${e2}${Ae2}` : e2 === true ? `:root${Ae2}` : "";
var Me2 = (e2, l3) => {
  let t2 = e2.toString();
  for (; t2.length < l3; ) t2 = "0" + t2;
  return t2;
};
var da = (e2) => {
  const l3 = Me2(e2.getDate(), 2), t2 = Me2(e2.getMonth() + 1, 2);
  return `${Me2(e2.getFullYear(), 2)}-${t2}-${l3}`;
};
var pa = (e2, l3, t2) => {
  if (!e2) return "";
  const a = re2(e2) ? new Date(e2.includes(" ") ? e2.replace(/-/g, "/") : e2) : e2, n2 = l3.getTime() - a.getTime(), s2 = Math.floor(n2 / (24 * 3600 * 1e3));
  if (s2 === 0) {
    const h4 = n2 % 864e5, c2 = Math.floor(h4 / (3600 * 1e3));
    if (c2 === 0) {
      const f3 = h4 % 36e5, v3 = Math.floor(f3 / (60 * 1e3));
      if (v3 === 0) {
        const y4 = f3 % 6e4;
        return `${Math.round(y4 / 1e3)} ${t2.seconds}`;
      }
      return `${v3} ${t2.minutes}`;
    }
    return `${c2} ${t2.hours}`;
  }
  return s2 < 0 ? t2.now : s2 < 8 ? `${s2} ${t2.days}` : da(a);
};
var ga = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var ha = (e2) => ga.test(e2);
var fa = "WALINE_EMOJI";
var ot = useStorage(fa, {});
var wa = (e2) => !!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e2);
var ya = (e2) => {
  const l3 = wa(e2);
  if (l3) {
    const t2 = ot.value[e2];
    if (t2) return Promise.resolve(t2);
  }
  return fetch(`${e2}/info.json`).then((t2) => t2.json()).then((t2) => {
    const a = { folder: e2, ...t2 };
    return l3 && (ot.value[e2] = a), a;
  });
};
var it = (e2, l3 = "", t2 = "", a = "") => `${l3 ? `${l3}/` : ""}${t2}${e2}${a ? `.${a}` : ""}`;
var ba = (e2) => Promise.all(e2 ? e2.map((l3) => re2(l3) ? ya(nt(l3)) : Promise.resolve(l3)) : []).then((l3) => {
  const t2 = { tabs: [], map: {} };
  return l3.forEach((a) => {
    const { name: n2, folder: s2, icon: h4, prefix: c2 = "", type: f3, items: v3 } = a;
    t2.tabs.push({ name: n2, icon: it(h4, s2, c2, f3), items: v3.map((y4) => {
      const m4 = `${c2}${y4}`;
      return t2.map[m4] = it(y4, s2, c2, f3), m4;
    }) });
  }), t2;
});
var st = (e2) => {
  e2.name !== "AbortError" && console.error(e2.message);
};
var xe2 = (e2) => e2 instanceof HTMLElement ? e2 : re2(e2) ? document.querySelector(e2) : null;
var ka = (e2) => e2.type.includes("image");
var ct = (e2) => {
  const l3 = Array.from(e2).find(ka);
  return l3 ? l3.getAsFile() : null;
};
var Ca = /\$.*?\$/;
var $a = /^\$(.*?)\$/;
var La = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/;
var Ea = (e2) => [{ name: "blockMath", level: "block", tokenizer(l3) {
  const t2 = La.exec(l3);
  if (t2 !== null) return { type: "html", raw: t2[0], text: e2(true, t2[1]) };
} }, { name: "inlineMath", level: "inline", start(l3) {
  const t2 = l3.search(Ca);
  return t2 !== -1 ? t2 : l3.length;
}, tokenizer(l3) {
  const t2 = $a.exec(l3);
  if (t2 !== null) return { type: "html", raw: t2[0], text: e2(false, t2[1]) };
} }];
var ut = (e2 = "", l3 = {}) => e2.replace(/:(.+?):/g, (t2, a) => l3[a] ? `<img class="wl-emoji" src="${l3[a]}" alt="${a}">` : t2);
var Ia = (e2, { emojiMap: l3, highlighter: t2, texRenderer: a }) => {
  const n2 = new B();
  if (n2.setOptions({ breaks: true }), t2 && n2.use(markedHighlight({ highlight: t2 })), a) {
    const s2 = Ea(a);
    n2.use({ extensions: s2 });
  }
  return n2.parse(ut(e2, l3));
};
var Re2 = (e2) => {
  const { path: l3 } = e2.dataset;
  return l3 != null && l3.length ? l3 : null;
};
var Aa = (e2) => e2.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
var Ma = (e2) => e2.match(/[\u4E00-\u9FD5]/gu);
var xa = (e2) => {
  var l3, t2;
  return (((l3 = Aa(e2)) == null ? void 0 : l3.reduce((a, n2) => a + (["", ",", "."].includes(n2.trim()) ? 0 : n2.trim().split(/\s+/u).length), 0)) ?? 0) + (((t2 = Ma(e2)) == null ? void 0 : t2.length) ?? 0);
};
var Ra = async () => {
  const { userAgentData: e2 } = navigator;
  let l3 = navigator.userAgent;
  if (!e2 || e2.platform !== "Windows") return l3;
  const { platformVersion: t2 } = await e2.getHighEntropyValues(["platformVersion"]);
  return t2 && parseInt(t2.split(".")[0]) >= 13 && (l3 = l3.replace("Windows NT 10.0", "Windows NT 11.0")), l3;
};
var mt = ({ serverURL: e2, path: l3 = window.location.pathname, selector: t2 = ".waline-comment-count", lang: a = navigator.language }) => {
  const n2 = new AbortController(), s2 = document.querySelectorAll(t2);
  return s2.length && f({ serverURL: ye2(e2), paths: Array.from(s2).map((h4) => lt(Re2(h4) ?? l3)), lang: a, signal: n2.signal }).then((h4) => {
    s2.forEach((c2, f3) => {
      c2.innerText = h4[f3].toString();
    });
  }).catch(st), n2.abort.bind(n2);
};
var vt = ({ size: e2 }) => h("svg", { class: "wl-close-icon", viewBox: "0 0 1024 1024", width: e2, height: e2 }, [h("path", { d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z", fill: "currentColor" }), h("path", { d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z", fill: "#888" })]);
var Sa = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z", fill: "red" }));
var ja = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z", fill: "currentColor" }));
var Ua = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z", fill: "currentColor" }), h("path", { d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z", fill: "currentColor" })]);
var za = ({ active: e2 = false }) => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e2 ? "" : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"}`, fill: e2 ? "red" : "currentColor" })]);
var Va = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0", fill: "currentColor" }), h("path", { d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0", fill: "currentColor" })]);
var _a = () => h("svg", { width: "16", height: "16", ariaHidden: "true" }, h("path", { d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z", fill: "currentColor" }));
var Ha = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z", fill: "currentColor" }));
var Ta = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z", fill: "currentColor" }));
var Fa = () => h("svg", { class: "verified-icon", viewBox: "0 0 1024 1024", width: "14", height: "14" }, h("path", { d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z", fill: "#27ae60" }));
var ue2 = ({ size: e2 = 100 }) => h("svg", { width: e2, height: e2, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, h("circle", { cx: 50, cy: 50, fill: "none", stroke: "currentColor", strokeWidth: "4", r: "40", "stroke-dasharray": "85 30" }, h("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" })));
var Na = () => h("svg", { width: 24, height: 24, fill: "currentcolor", viewBox: "0 0 24 24" }, [h("path", { style: "transform: translateY(0.5px)", d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z" }), h("path", { d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z" })]);
var Wa = () => useStorage("WALINE_USER_META", { nick: "", mail: "", link: "" });
var Ba = () => useStorage("WALINE_COMMENT_BOX_EDITOR", "");
var Da = "WALINE_LIKE";
var Pa = useStorage(Da, []);
var dt = () => Pa;
var qa = "WALINE_REACTION";
var Oa = useStorage(qa, {});
var Ga = () => Oa;
var pt = {};
var Ka = (e2) => {
  const l3 = pt[e2] ?? (pt[e2] = (0, import_recaptcha_v3.load)(e2, { useRecaptchaNet: true, autoHideBadge: true }));
  return { execute: (t2) => l3.then((a) => a.execute(t2)) };
};
var Za = (e2) => ({ execute: async (l3) => {
  const { load: t2 } = useScriptTag("https://challenges.cloudflare.com/turnstile/v0/api.js", void 0, { async: false });
  await t2();
  const a = window.turnstile;
  return new Promise((n2) => {
    a == null || a.ready(() => {
      a.render(".wl-captcha-container", { sitekey: e2, action: l3, size: "compact", callback: n2 });
    });
  });
} });
var Xa = "WALINE_USER";
var Ya = useStorage(Xa, {});
var be2 = () => Ya;
var Ja = { key: 0, class: "wl-reaction" };
var Qa = ["textContent"];
var el = { class: "wl-reaction-list" };
var tl = ["onClick"];
var al = { class: "wl-reaction-img" };
var ll = ["src", "alt"];
var nl = ["textContent"];
var rl = ["textContent"];
var ol = defineComponent({ __name: "ArticleReaction", setup(e2) {
  const l3 = Ga(), t2 = inject(we2), a = ref(-1), n2 = ref([]), s2 = computed(() => t2.value.locale), h4 = computed(() => {
    const { reaction: m4 } = t2.value;
    return m4 != null && m4.length ? m4 : null;
  }), c2 = computed(() => {
    var m4;
    const { path: R4 } = t2.value;
    return ((m4 = h4.value) == null ? void 0 : m4.map((j4, E2) => ({ icon: j4, desc: s2.value[`reaction${E2}`], active: l3.value[R4] === E2 }))) ?? null;
  });
  let f3;
  const v3 = async () => {
    const { serverURL: m4, lang: R4, path: j4 } = t2.value;
    if (!h4.value) return;
    const E2 = new AbortController();
    f3 = E2.abort.bind(E2);
    const [$4] = await p({ serverURL: m4, lang: R4, paths: [j4], type: h4.value.map((S3, i) => `reaction${i}`), signal: E2.signal });
    n2.value = h4.value.map((S3, i) => $4[`reaction${i}`]);
  }, y4 = async (m4) => {
    if (a.value !== -1) return;
    const { serverURL: R4, lang: j4, path: E2 } = t2.value, $4 = l3.value[E2];
    a.value = m4, $4 !== void 0 && (await d({ serverURL: R4, lang: j4, path: E2, type: `reaction${$4}`, action: "desc" }), n2.value[$4] = Math.max(n2.value[$4] - 1, 0)), $4 !== m4 && (await d({ serverURL: R4, lang: j4, path: E2, type: `reaction${m4}` }), n2.value[m4] = (n2.value[m4] || 0) + 1), $4 === m4 ? delete l3.value[E2] : l3.value[E2] = m4, a.value = -1;
  };
  return onMounted(() => {
    watchImmediate(() => [t2.value.serverURL, t2.value.path], () => v3());
  }), onUnmounted(() => {
    f3 == null || f3();
  }), (m4, R4) => c2.value ? (openBlock(), createElementBlock("div", Ja, [createBaseVNode("div", { class: "wl-reaction-title", textContent: toDisplayString(s2.value.reactionTitle) }, null, 8, Qa), createBaseVNode("ul", el, [(openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, ({ active: j4, icon: E2, desc: $4 }, S3) => (openBlock(), createElementBlock("li", { key: S3, class: normalizeClass(["wl-reaction-item", { active: j4 }]), onClick: (i) => y4(S3) }, [createBaseVNode("div", al, [createBaseVNode("img", { src: E2, alt: $4 }, null, 8, ll), a.value === S3 ? (openBlock(), createBlock(unref(ue2), { key: 0, class: "wl-reaction-loading" })) : (openBlock(), createElementBlock("div", { key: 1, class: "wl-reaction-votes", textContent: toDisplayString(n2.value[S3] || 0) }, null, 8, nl))]), createBaseVNode("div", { class: "wl-reaction-text", textContent: toDisplayString($4) }, null, 8, rl)], 10, tl))), 128))])])) : createCommentVNode("v-if", true);
} });
var il = ["data-index"];
var sl = ["src", "title", "onClick"];
var cl = defineComponent({ __name: "ImageWall", props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } }, emits: ["insert"], setup(e2) {
  const l3 = e2;
  let t2 = null;
  const a = useTemplateRef("wall"), n2 = ref({}), s2 = ref([]), h4 = () => {
    const m4 = Math.floor((a.value.getBoundingClientRect().width + l3.gap) / (l3.columnWidth + l3.gap));
    return m4 > 0 ? m4 : 1;
  }, c2 = (m4) => new Array(m4).fill(null).map(() => []), f3 = async (m4) => {
    var R4;
    if (m4 >= l3.items.length) return;
    await nextTick();
    const j4 = Array.from(((R4 = a.value) == null ? void 0 : R4.children) ?? []).reduce((E2, $4) => $4.getBoundingClientRect().height < E2.getBoundingClientRect().height ? $4 : E2);
    s2.value[Number(j4.dataset.index)].push(m4), await f3(m4 + 1);
  }, v3 = async (m4 = false) => {
    if (s2.value.length === h4() && !m4) return;
    s2.value = c2(h4());
    const R4 = window.scrollY;
    await f3(0), window.scrollTo({ top: R4 });
  }, y4 = (m4) => {
    n2.value[m4.target.src] = true;
  };
  return onMounted(() => {
    v3(true), t2 = new ResizeObserver(() => {
      v3();
    }), t2.observe(a.value), watch(() => [l3.items], () => {
      n2.value = {}, v3(true);
    }), watch(() => [l3.columnWidth, l3.gap], () => {
      v3();
    });
  }), onBeforeUnmount(() => {
    t2.unobserve(a.value);
  }), (m4, R4) => (openBlock(), createElementBlock("div", { ref_key: "wall", ref: a, class: "wl-gallery", style: normalizeStyle({ gap: `${m4.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(s2.value, (j4, E2) => (openBlock(), createElementBlock("div", { key: E2, class: "wl-gallery-column", "data-index": E2, style: normalizeStyle({ gap: `${m4.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(j4, ($4) => (openBlock(), createElementBlock(Fragment, { key: $4 }, [n2.value[m4.items[$4].src] ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(ue2), { key: 0, size: 36, style: { margin: "20px auto" } })), createBaseVNode("img", { class: "wl-gallery-item", src: m4.items[$4].src, title: m4.items[$4].title, loading: "lazy", onLoad: y4, onClick: (S3) => m4.$emit("insert", `![](${m4.items[$4].src})`) }, null, 40, sl)], 64))), 128))], 12, il))), 128))], 4));
} });
var ul = { key: 0, class: "wl-login-info" };
var ml = { class: "wl-avatar" };
var vl = ["title"];
var dl = ["title"];
var pl = ["src"];
var gl = ["title", "textContent"];
var hl = { class: "wl-panel" };
var fl = ["for", "textContent"];
var wl = ["id", "onUpdate:modelValue", "name", "type"];
var yl = ["placeholder"];
var bl = { class: "wl-preview" };
var kl = ["innerHTML"];
var Cl = { class: "wl-footer" };
var $l = { class: "wl-actions" };
var Ll = { href: "https://guides.github.com/features/mastering-markdown/", title: "Markdown Guide", "aria-label": "Markdown is supported", class: "wl-action", target: "_blank", rel: "noopener noreferrer" };
var El = ["title"];
var Il = ["title"];
var Al = ["title", "aria-label"];
var Ml = ["title"];
var xl = { class: "wl-info" };
var Rl = { class: "wl-text-number" };
var Sl = { key: 0 };
var jl = ["textContent"];
var Ul = ["textContent"];
var zl = ["disabled"];
var Vl = ["placeholder"];
var _l = { key: 1, class: "wl-loading" };
var Hl = { key: 0, class: "wl-tab-wrapper" };
var Tl = ["title", "onClick"];
var Fl = ["src", "alt"];
var Nl = { key: 0, class: "wl-tabs" };
var Wl = ["onClick"];
var Bl = ["src", "alt", "title"];
var Dl = ["title"];
var gt = defineComponent({ __name: "CommentBox", props: { edit: {}, rootId: {}, replyId: {}, replyUser: {} }, emits: ["log", "cancelEdit", "cancelReply", "submit"], setup(e2, { emit: l3 }) {
  const t2 = e2, a = l3, n2 = inject(we2), s2 = Ba(), h4 = Wa(), c2 = be2(), f3 = ref({}), v3 = useTemplateRef("textarea"), y4 = useTemplateRef("image-uploader"), m4 = useTemplateRef("emoji-button"), R4 = useTemplateRef("emoji-popup"), j4 = useTemplateRef("gif-button"), E2 = useTemplateRef("gif-popup"), $4 = useTemplateRef("gif-search"), S3 = ref({ tabs: [], map: {} }), i = ref(0), g = ref(false), K2 = ref(false), X2 = ref(false), A = ref(""), V2 = ref(0), T = reactive({ loading: true, list: [] }), le2 = ref(0), Q2 = ref(false), me = ref(""), w4 = ref(false), U4 = ref(false), b3 = computed(() => n2.value.locale), F2 = computed(() => !!c2.value.token), q2 = computed(() => n2.value.imageUploader !== null), O2 = (d4) => {
    const r2 = v3.value, C3 = r2.selectionStart, H2 = r2.selectionEnd || 0, k = r2.scrollTop;
    s2.value = r2.value.substring(0, C3) + d4 + r2.value.substring(H2, r2.value.length), r2.focus(), r2.selectionStart = C3 + d4.length, r2.selectionEnd = C3 + d4.length, r2.scrollTop = k;
  }, oe2 = ({ key: d4, ctrlKey: r2, metaKey: C3 }) => {
    w4.value || (r2 || C3) && d4 === "Enter" && Se2();
  }, ve2 = async (d4) => {
    const r2 = `![${n2.value.locale.uploading} ${d4.name}]()`;
    O2(r2), w4.value = true;
    try {
      const C3 = await n2.value.imageUploader(d4);
      s2.value = s2.value.replace(r2, `\r
![${d4.name}](${C3})`);
    } catch (C3) {
      alert(C3.message), s2.value = s2.value.replace(r2, "");
    } finally {
      w4.value = false;
    }
  }, ke2 = (d4) => {
    var r2;
    if ((r2 = d4.dataTransfer) != null && r2.items) {
      const C3 = ct(d4.dataTransfer.items);
      C3 && q2.value && (ve2(C3), d4.preventDefault());
    }
  }, yt = (d4) => {
    if (d4.clipboardData) {
      const r2 = ct(d4.clipboardData.items);
      r2 && q2.value && ve2(r2);
    }
  }, bt = () => {
    const d4 = y4.value;
    d4.files && q2.value && ve2(d4.files[0]).then(() => {
      d4.value = "";
    });
  }, Se2 = async () => {
    var d4;
    const { serverURL: r2, lang: C3, login: H2, wordLimit: k, requiredMeta: D2, recaptchaV3Key: N2, turnstileKey: Y } = n2.value, _2 = { comment: me.value, nick: h4.value.nick, mail: h4.value.mail, link: h4.value.link, url: n2.value.path, ua: await Ra() };
    if (!t2.edit) if (c2.value.token) _2.nick = c2.value.display_name, _2.mail = c2.value.email, _2.link = c2.value.url;
    else {
      if (H2 === "force") return;
      if (D2.includes("nick") && !_2.nick) {
        f3.value.nick.focus(), alert(b3.value.nickError);
        return;
      }
      if (D2.includes("mail") && !_2.mail || _2.mail && !ha(_2.mail)) {
        f3.value.mail.focus(), alert(b3.value.mailError);
        return;
      }
      _2.nick || (_2.nick = b3.value.anonymous);
    }
    if (!_2.comment) {
      v3.value.focus();
      return;
    }
    if (!Q2.value) {
      alert(b3.value.wordHint.replace("$0", k[0].toString()).replace("$1", k[1].toString()).replace("$2", V2.value.toString()));
      return;
    }
    _2.comment = ut(_2.comment, S3.value.map), t2.replyId && t2.rootId && (_2.pid = t2.replyId, _2.rid = t2.rootId, _2.at = t2.replyUser), w4.value = true;
    try {
      N2 && (_2.recaptchaV3 = await Ka(N2).execute("social")), Y && (_2.turnstile = await Za(Y).execute("social"));
      const de2 = { serverURL: r2, lang: C3, token: c2.value.token, comment: _2 }, Ce2 = await (t2.edit ? U({ objectId: t2.edit.objectId, ...de2 }) : u(de2));
      if (w4.value = false, Ce2.errmsg) {
        alert(Ce2.errmsg);
        return;
      }
      a("submit", Ce2.data), s2.value = "", A.value = "", await nextTick(), t2.replyId && a("cancelReply"), (d4 = t2.edit) != null && d4.objectId && a("cancelEdit");
    } catch (de2) {
      w4.value = false, alert(de2.message);
    }
  }, kt = (d4) => {
    d4.preventDefault();
    const { lang: r2, serverURL: C3 } = n2.value;
    R({ serverURL: C3, lang: r2 }).then((H2) => {
      c2.value = H2, (H2.remember ? localStorage : sessionStorage).setItem("WALINE_USER", JSON.stringify(H2)), a("log");
    });
  }, Ct = () => {
    c2.value = {}, localStorage.setItem("WALINE_USER", "null"), sessionStorage.setItem("WALINE_USER", "null"), a("log");
  }, je2 = (d4) => {
    d4.preventDefault();
    const { lang: r2, serverURL: C3 } = n2.value, H2 = 800, k = 800, D2 = (window.innerWidth - H2) / 2, N2 = (window.innerHeight - k) / 2, Y = new URLSearchParams({ lng: r2, token: c2.value.token }), _2 = window.open(`${C3}/ui/profile?${Y.toString()}`, "_blank", `width=${H2},height=${k},left=${D2},top=${N2},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
    _2 == null || _2.postMessage({ type: "TOKEN", data: c2.value.token }, "*");
  }, $t = (d4) => {
    var r2, C3, H2, k;
    !((r2 = m4.value) != null && r2.contains(d4.target)) && !((C3 = R4.value) != null && C3.contains(d4.target)) && (g.value = false), !((H2 = j4.value) != null && H2.contains(d4.target)) && !((k = E2.value) != null && k.contains(d4.target)) && (K2.value = false);
  }, Ue2 = async (d4) => {
    var r2;
    const { scrollTop: C3, clientHeight: H2, scrollHeight: k } = d4.target, D2 = (H2 + C3) / k, N2 = n2.value.search, Y = ((r2 = $4.value) == null ? void 0 : r2.value) ?? "";
    D2 < 0.9 || T.loading || U4.value || (T.loading = true, (N2.more && T.list.length ? await N2.more(Y, T.list.length) : await N2.search(Y)).length ? T.list = [...T.list, ...N2.more && T.list.length ? await N2.more(Y, T.list.length) : await N2.search(Y)] : U4.value = true, T.loading = false, setTimeout(() => {
      d4.target.scrollTop = C3;
    }, 50));
  }, ze2 = useDebounceFn((d4) => {
    T.list = [], U4.value = false, Ue2(d4);
  }, 300);
  return useEventListener("click", $t), useEventListener("message", ({ data: d4 }) => {
    !d4 || d4.type !== "profile" || (c2.value = { ...c2.value, ...d4.data }, [localStorage, sessionStorage].filter((r2) => r2.getItem("WALINE_USER")).forEach((r2) => {
      r2.setItem("WALINE_USER", JSON.stringify(c2));
    }));
  }), watchImmediate([n2, V2], ([d4, r2]) => {
    const { wordLimit: C3 } = d4;
    C3 ? r2 < C3[0] && C3[0] !== 0 ? (le2.value = C3[0], Q2.value = false) : r2 > C3[1] ? (le2.value = C3[1], Q2.value = false) : (le2.value = C3[1], Q2.value = true) : (le2.value = 0, Q2.value = true);
  }), watch(K2, async (d4) => {
    var r2;
    if (!d4) return;
    const C3 = n2.value.search;
    $4.value && ($4.value.value = ""), T.loading = true, T.list = await (((r2 = C3.default) == null ? void 0 : r2.call(C3)) ?? C3.search("")), T.loading = false;
  }), onMounted(() => {
    var d4;
    (d4 = t2.edit) != null && d4.objectId && (s2.value = t2.edit.orig), watchImmediate(() => s2.value, (r2) => {
      const { highlighter: C3, texRenderer: H2 } = n2.value;
      me.value = r2, A.value = Ia(r2, { emojiMap: S3.value.map, highlighter: C3, texRenderer: H2 }), V2.value = xa(r2), r2 ? autosize_esm_default(v3.value) : autosize_esm_default.destroy(v3.value);
    }), watchImmediate(() => n2.value.emoji, async (r2) => {
      S3.value = await ba(r2);
    });
  }), (d4, r2) => {
    var C3, H2;
    return openBlock(), createElementBlock("div", { key: unref(c2).token, class: "wl-comment" }, [unref(n2).login !== "disable" && F2.value && !((C3 = d4.edit) != null && C3.objectId) ? (openBlock(), createElementBlock("div", ul, [createBaseVNode("div", ml, [createBaseVNode("button", { type: "submit", class: "wl-logout-btn", title: b3.value.logout, onClick: Ct }, [createVNode(unref(vt), { size: 14 })], 8, vl), createBaseVNode("a", { href: "#", class: "wl-login-nick", "aria-label": "Profile", title: b3.value.profile, onClick: je2 }, [createBaseVNode("img", { src: unref(c2).avatar, alt: "avatar" }, null, 8, pl)], 8, dl)]), createBaseVNode("a", { href: "#", class: "wl-login-nick", "aria-label": "Profile", title: b3.value.profile, onClick: je2, textContent: toDisplayString(unref(c2).display_name) }, null, 8, gl)])) : createCommentVNode("v-if", true), createBaseVNode("div", hl, [unref(n2).login !== "force" && unref(n2).meta.length && !F2.value ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["wl-header", `item${unref(n2).meta.length}`]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(n2).meta, (k) => (openBlock(), createElementBlock("div", { key: k, class: "wl-header-item" }, [createBaseVNode("label", { for: `wl-${k}`, textContent: toDisplayString(b3.value[k] + (unref(n2).requiredMeta.includes(k) || !unref(n2).requiredMeta.length ? "" : `(${b3.value.optional})`)) }, null, 8, fl), withDirectives(createBaseVNode("input", { id: `wl-${k}`, ref_for: true, ref: (D2) => {
      D2 && (f3.value[k] = D2);
    }, "onUpdate:modelValue": (D2) => unref(h4)[k] = D2, class: normalizeClass(["wl-input", `wl-${k}`]), name: k, type: k === "mail" ? "email" : "text" }, null, 10, wl), [[vModelDynamic, unref(h4)[k]]])]))), 128))], 2)) : createCommentVNode("v-if", true), withDirectives(createBaseVNode("textarea", { id: "wl-edit", ref: "textarea", "onUpdate:modelValue": r2[0] || (r2[0] = (k) => isRef(s2) ? s2.value = k : null), class: "wl-editor", placeholder: d4.replyUser ? `@${d4.replyUser}` : b3.value.placeholder, onKeydown: oe2, onDrop: ke2, onPaste: yt }, null, 40, yl), [[vModelText, unref(s2)]]), withDirectives(createBaseVNode("div", bl, [r2[7] || (r2[7] = createBaseVNode("hr", null, null, -1)), createBaseVNode("h4", null, toDisplayString(b3.value.preview) + ":", 1), createBaseVNode("div", { class: "wl-content", innerHTML: A.value }, null, 8, kl)], 512), [[vShow, X2.value]]), createBaseVNode("div", Cl, [createBaseVNode("div", $l, [createBaseVNode("a", Ll, [createVNode(unref(_a))]), withDirectives(createBaseVNode("button", { ref: "emoji-button", type: "button", class: normalizeClass(["wl-action", { active: g.value }]), title: b3.value.emoji, onClick: r2[1] || (r2[1] = (k) => g.value = !g.value) }, [createVNode(unref(ja))], 10, El), [[vShow, S3.value.tabs.length]]), unref(n2).search ? (openBlock(), createElementBlock("button", { key: 0, ref: "gif-button", type: "button", class: normalizeClass(["wl-action", { active: K2.value }]), title: b3.value.gif, onClick: r2[2] || (r2[2] = (k) => K2.value = !K2.value) }, [createVNode(unref(Na))], 10, Il)) : createCommentVNode("v-if", true), createBaseVNode("input", { id: "wl-image-upload", ref: "image-uploader", class: "upload", "aria-hidden": "true", type: "file", accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif", onChange: bt }, null, 544), q2.value ? (openBlock(), createElementBlock("label", { key: 1, for: "wl-image-upload", class: "wl-action", title: b3.value.uploadImage, "aria-label": b3.value.uploadImage }, [createVNode(unref(Ua))], 8, Al)) : createCommentVNode("v-if", true), createBaseVNode("button", { type: "button", class: normalizeClass(["wl-action", { active: X2.value }]), title: b3.value.preview, onClick: r2[3] || (r2[3] = (k) => X2.value = !X2.value) }, [createVNode(unref(Va))], 10, Ml)]), createBaseVNode("div", xl, [r2[9] || (r2[9] = createBaseVNode("div", { class: "wl-captcha-container" }, null, -1)), createBaseVNode("div", Rl, [createTextVNode(toDisplayString(V2.value) + " ", 1), unref(n2).wordLimit ? (openBlock(), createElementBlock("span", Sl, [r2[8] || (r2[8] = createTextVNode(" \xA0/\xA0 ")), createBaseVNode("span", { class: normalizeClass({ illegal: !Q2.value }), textContent: toDisplayString(le2.value) }, null, 10, jl)])) : createCommentVNode("v-if", true), createTextVNode(" \xA0" + toDisplayString(b3.value.word), 1)]), unref(n2).login !== "disable" && !F2.value ? (openBlock(), createElementBlock("button", { key: 0, type: "button", class: "wl-btn", onClick: kt, textContent: toDisplayString(b3.value.login) }, null, 8, Ul)) : createCommentVNode("v-if", true), unref(n2).login !== "force" || F2.value ? (openBlock(), createElementBlock("button", { key: 1, type: "submit", class: "primary wl-btn", title: "Cmd|Ctrl + Enter", disabled: w4.value, onClick: Se2 }, [w4.value ? (openBlock(), createBlock(unref(ue2), { key: 0, size: 16 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(b3.value.submit), 1)], 64))], 8, zl)) : createCommentVNode("v-if", true)]), createBaseVNode("div", { ref: "gif-popup", class: normalizeClass(["wl-gif-popup", { display: K2.value }]) }, [createBaseVNode("input", { ref: "gif-search", type: "text", placeholder: b3.value.gifSearchPlaceholder, onInput: r2[4] || (r2[4] = (...k) => unref(ze2) && unref(ze2)(...k)) }, null, 40, Vl), T.list.length ? (openBlock(), createBlock(cl, { key: 0, items: T.list, "column-width": 200, gap: 6, onInsert: r2[5] || (r2[5] = (k) => O2(k)), onScroll: Ue2 }, null, 8, ["items"])) : createCommentVNode("v-if", true), T.loading ? (openBlock(), createElementBlock("div", _l, [createVNode(unref(ue2), { size: 30 })])) : createCommentVNode("v-if", true)], 2), createBaseVNode("div", { ref: "emoji-popup", class: normalizeClass(["wl-emoji-popup", { display: g.value }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(S3.value.tabs, (k, D2) => (openBlock(), createElementBlock(Fragment, { key: k.name }, [D2 === i.value ? (openBlock(), createElementBlock("div", Hl, [(openBlock(true), createElementBlock(Fragment, null, renderList(k.items, (N2) => (openBlock(), createElementBlock("button", { key: N2, type: "button", title: N2, onClick: (Y) => O2(`:${N2}:`) }, [g.value ? (openBlock(), createElementBlock("img", { key: 0, class: "wl-emoji", src: S3.value.map[N2], alt: N2, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, Fl)) : createCommentVNode("v-if", true)], 8, Tl))), 128))])) : createCommentVNode("v-if", true)], 64))), 128)), S3.value.tabs.length > 1 ? (openBlock(), createElementBlock("div", Nl, [(openBlock(true), createElementBlock(Fragment, null, renderList(S3.value.tabs, (k, D2) => (openBlock(), createElementBlock("button", { key: k.name, type: "button", class: normalizeClass(["wl-tab", { active: i.value === D2 }]), onClick: (N2) => i.value = D2 }, [createBaseVNode("img", { class: "wl-emoji", src: k.icon, alt: k.name, title: k.name, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, Bl)], 10, Wl))), 128))])) : createCommentVNode("v-if", true)], 2)])]), d4.replyId || (H2 = d4.edit) != null && H2.objectId ? (openBlock(), createElementBlock("button", { key: 1, type: "button", class: "wl-close", title: b3.value.cancelReply, onClick: r2[6] || (r2[6] = (k) => d4.replyId ? a("cancelReply") : a("cancelEdit")) }, [createVNode(unref(vt), { size: 24 })], 8, Dl)) : createCommentVNode("v-if", true)]);
  };
} });
var Pl = ["id"];
var ql = { class: "wl-user", "aria-hidden": "true" };
var Ol = ["src"];
var Gl = { class: "wl-card" };
var Kl = { class: "wl-head" };
var Zl = ["href"];
var Xl = { key: 1, class: "wl-nick" };
var Yl = ["textContent"];
var Jl = ["textContent"];
var Ql = ["textContent"];
var en = ["textContent"];
var tn = ["textContent"];
var an = { class: "wl-comment-actions" };
var ln = ["title"];
var nn = ["title"];
var rn = { class: "wl-meta", "aria-hidden": "true" };
var on = ["data-value", "textContent"];
var sn = { key: 0, class: "wl-content" };
var cn = { key: 0 };
var un = ["href"];
var mn = ["innerHTML"];
var vn = { key: 1, class: "wl-admin-actions" };
var dn = { class: "wl-comment-status" };
var pn = ["disabled", "onClick", "textContent"];
var gn = { key: 3, class: "wl-quote" };
var hn = defineComponent({ __name: "CommentCard", props: { comment: {}, edit: {}, rootId: {}, reply: {} }, emits: ["log", "submit", "delete", "like", "sticky", "edit", "reply", "status"], setup(e2, { emit: l3 }) {
  const t2 = e2, a = l3, n2 = ["approved", "waiting", "spam"], s2 = inject(we2), h4 = dt(), c2 = useNow(), f3 = be2(), v3 = computed(() => s2.value.locale), y4 = computed(() => {
    const { link: i } = t2.comment;
    return i ? rt(i) ? i : `https://${i}` : "";
  }), m4 = computed(() => h4.value.includes(t2.comment.objectId)), R4 = computed(() => pa(new Date(t2.comment.time), c2.value, v3.value)), j4 = computed(() => f3.value.type === "administrator"), E2 = computed(() => t2.comment.user_id && f3.value.objectId === t2.comment.user_id), $4 = computed(() => {
    var i;
    return t2.comment.objectId === ((i = t2.reply) == null ? void 0 : i.objectId);
  }), S3 = computed(() => {
    var i;
    return t2.comment.objectId === ((i = t2.edit) == null ? void 0 : i.objectId);
  });
  return (i, g) => {
    var K2;
    const X2 = resolveComponent("CommentCard", true);
    return openBlock(), createElementBlock("div", { id: i.comment.objectId.toString(), class: "wl-card-item" }, [createBaseVNode("div", ql, [i.comment.avatar ? (openBlock(), createElementBlock("img", { key: 0, class: "wl-user-avatar", src: i.comment.avatar, alt: "" }, null, 8, Ol)) : createCommentVNode("v-if", true), i.comment.type ? (openBlock(), createBlock(unref(Fa), { key: 1 })) : createCommentVNode("v-if", true)]), createBaseVNode("div", Gl, [createBaseVNode("div", Kl, [y4.value ? (openBlock(), createElementBlock("a", { key: 0, class: "wl-nick", href: y4.value, target: "_blank", rel: "nofollow noopener noreferrer" }, toDisplayString(i.comment.nick), 9, Zl)) : (openBlock(), createElementBlock("span", Xl, toDisplayString(i.comment.nick), 1)), i.comment.type === "administrator" ? (openBlock(), createElementBlock("span", { key: 2, class: "wl-badge", textContent: toDisplayString(v3.value.admin) }, null, 8, Yl)) : createCommentVNode("v-if", true), i.comment.label ? (openBlock(), createElementBlock("span", { key: 3, class: "wl-badge", textContent: toDisplayString(i.comment.label) }, null, 8, Jl)) : createCommentVNode("v-if", true), i.comment.sticky ? (openBlock(), createElementBlock("span", { key: 4, class: "wl-badge", textContent: toDisplayString(v3.value.sticky) }, null, 8, Ql)) : createCommentVNode("v-if", true), typeof i.comment.level == "number" ? (openBlock(), createElementBlock("span", { key: 5, class: normalizeClass(`wl-badge level${i.comment.level}`), textContent: toDisplayString(v3.value[`level${i.comment.level}`] || `Level ${i.comment.level}`) }, null, 10, en)) : createCommentVNode("v-if", true), createBaseVNode("span", { class: "wl-time", textContent: toDisplayString(R4.value) }, null, 8, tn), createBaseVNode("div", an, [j4.value || E2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("button", { type: "button", class: "wl-edit", onClick: g[0] || (g[0] = (A) => a("edit", i.comment)) }, [createVNode(unref(Ta))]), createBaseVNode("button", { type: "button", class: "wl-delete", onClick: g[1] || (g[1] = (A) => a("delete", i.comment)) }, [createVNode(unref(Sa))])], 64)) : createCommentVNode("v-if", true), createBaseVNode("button", { type: "button", class: "wl-like", title: m4.value ? v3.value.cancelLike : v3.value.like, onClick: g[2] || (g[2] = (A) => a("like", i.comment)) }, [createVNode(unref(za), { active: m4.value }, null, 8, ["active"]), createTextVNode(" " + toDisplayString("like" in i.comment ? i.comment.like : ""), 1)], 8, ln), createBaseVNode("button", { type: "button", class: normalizeClass(["wl-reply", { active: $4.value }]), title: $4.value ? v3.value.cancelReply : v3.value.reply, onClick: g[3] || (g[3] = (A) => a("reply", $4.value ? null : i.comment)) }, [createVNode(unref(Ha))], 10, nn)])]), createBaseVNode("div", rn, [(openBlock(), createElementBlock(Fragment, null, renderList(["addr", "browser", "os"], (A) => (openBlock(), createElementBlock(Fragment, null, [i.comment[A] ? (openBlock(), createElementBlock("span", { key: A, class: normalizeClass(`wl-${A}`), "data-value": i.comment[A], textContent: toDisplayString(i.comment[A]) }, null, 10, on)) : createCommentVNode("v-if", true)], 64))), 64))]), S3.value ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", sn, ["reply_user" in i.comment && i.comment.reply_user ? (openBlock(), createElementBlock("p", cn, [createBaseVNode("a", { href: "#" + i.comment.pid }, "@" + toDisplayString(i.comment.reply_user.nick), 9, un), g[17] || (g[17] = createBaseVNode("span", null, ": ", -1))])) : createCommentVNode("v-if", true), createBaseVNode("div", { innerHTML: i.comment.comment }, null, 8, mn)])), j4.value && !S3.value ? (openBlock(), createElementBlock("div", vn, [createBaseVNode("span", dn, [(openBlock(), createElementBlock(Fragment, null, renderList(n2, (A) => createBaseVNode("button", { key: A, type: "submit", class: normalizeClass(`wl-btn wl-${A}`), disabled: i.comment.status === A, onClick: (V2) => a("status", { status: A, comment: i.comment }), textContent: toDisplayString(v3.value[A]) }, null, 10, pn)), 64))]), j4.value && !("rid" in i.comment) ? (openBlock(), createElementBlock("button", { key: 0, type: "submit", class: "wl-btn wl-sticky", onClick: g[4] || (g[4] = (A) => a("sticky", i.comment)) }, toDisplayString(i.comment.sticky ? v3.value.unsticky : v3.value.sticky), 1)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), $4.value || S3.value ? (openBlock(), createElementBlock("div", { key: 2, class: normalizeClass({ "wl-reply-wrapper": $4.value, "wl-edit-wrapper": S3.value }) }, [createVNode(gt, { edit: i.edit, "reply-id": (K2 = i.reply) == null ? void 0 : K2.objectId, "reply-user": i.comment.nick, "root-id": i.rootId, onLog: g[5] || (g[5] = (A) => a("log")), onCancelReply: g[6] || (g[6] = (A) => a("reply", null)), onCancelEdit: g[7] || (g[7] = (A) => a("edit", null)), onSubmit: g[8] || (g[8] = (A) => a("submit", A)) }, null, 8, ["edit", "reply-id", "reply-user", "root-id"])], 2)) : createCommentVNode("v-if", true), "children" in i.comment ? (openBlock(), createElementBlock("div", gn, [(openBlock(true), createElementBlock(Fragment, null, renderList(i.comment.children, (A) => (openBlock(), createBlock(X2, { key: A.objectId, comment: A, reply: i.reply, edit: i.edit, "root-id": i.rootId, onLog: g[9] || (g[9] = (V2) => a("log")), onDelete: g[10] || (g[10] = (V2) => a("delete", V2)), onEdit: g[11] || (g[11] = (V2) => a("edit", V2)), onLike: g[12] || (g[12] = (V2) => a("like", V2)), onReply: g[13] || (g[13] = (V2) => a("reply", V2)), onStatus: g[14] || (g[14] = (V2) => a("status", V2)), onSticky: g[15] || (g[15] = (V2) => a("sticky", V2)), onSubmit: g[16] || (g[16] = (V2) => a("submit", V2)) }, null, 8, ["comment", "reply", "edit", "root-id"]))), 128))])) : createCommentVNode("v-if", true)])], 8, Pl);
  };
} });
var ht = "3.6.0";
var fn = { "data-waline": "" };
var wn = { class: "wl-meta-head" };
var yn = { class: "wl-count" };
var bn = ["textContent"];
var kn = { class: "wl-sort" };
var Cn = ["onClick"];
var $n = { class: "wl-cards" };
var Ln = { key: 1, class: "wl-operation" };
var En = ["textContent"];
var In = { key: 2, class: "wl-loading" };
var An = ["textContent"];
var Mn = { key: 4, class: "wl-operation" };
var xn = ["textContent"];
var Rn = { key: 5, class: "wl-power" };
var Sn = defineComponent({ __name: "WalineComment", props: { serverURL: {}, path: {}, meta: {}, requiredMeta: {}, wordLimit: {}, pageSize: {}, lang: {}, locale: {}, commentSorting: {}, dark: { type: [String, Boolean] }, login: {}, noCopyright: { type: Boolean }, recaptchaV3Key: {}, turnstileKey: {}, reaction: { type: [Array, Boolean] }, emoji: {}, search: {}, highlighter: { type: Function }, imageUploader: { type: Function }, texRenderer: { type: Function } }, setup(e2) {
  const l3 = e2, t2 = be2(), a = dt(), n2 = ref("loading"), s2 = ref(0), h4 = ref(1), c2 = ref(0), f3 = computed(() => ma(l3)), v3 = ref(f3.value.commentSorting), y4 = ref([]), m4 = ref(null), R4 = ref(null), j4 = computed(() => va(f3.value.dark)), E2 = computed(() => f3.value.locale);
  useStyleTag(j4, { id: "waline-darkmode" });
  let $4 = null;
  const S3 = (w4) => {
    const { serverURL: U4, path: b3, pageSize: F2 } = f3.value, q2 = new AbortController();
    n2.value = "loading", $4 == null || $4(), $({ serverURL: U4, lang: f3.value.lang, path: b3, pageSize: F2, sortBy: at[v3.value], page: w4, signal: q2.signal, token: t2.value.token }).then((O2) => {
      n2.value = "success", s2.value = O2.count, y4.value.push(...O2.data), h4.value = w4, c2.value = O2.totalPages;
    }).catch((O2) => {
      O2.name !== "AbortError" && (console.error(O2.message), n2.value = "error");
    }), $4 = q2.abort.bind(q2);
  }, i = () => {
    S3(h4.value + 1);
  }, g = () => {
    s2.value = 0, y4.value = [], S3(1);
  }, K2 = (w4) => {
    v3.value !== w4 && (v3.value = w4, g());
  }, X2 = (w4) => {
    m4.value = w4;
  }, A = (w4) => {
    R4.value = w4;
  }, V2 = (w4) => {
    if (R4.value) R4.value.comment = w4.comment, R4.value.orig = w4.orig;
    else if ("rid" in w4) {
      const U4 = y4.value.find(({ objectId: b3 }) => b3 === w4.rid);
      if (!U4) return;
      Array.isArray(U4.children) || (U4.children = []), U4.children.push(w4);
    } else y4.value.unshift(w4), s2.value += 1;
  }, T = async ({ comment: w4, status: U4 }) => {
    if (w4.status === U4) return;
    const { serverURL: b3, lang: F2 } = f3.value;
    await U({ serverURL: b3, lang: F2, token: t2.value.token, objectId: w4.objectId, comment: { status: U4 } }), w4.status = U4;
  }, le2 = async (w4) => {
    if ("rid" in w4) return;
    const { serverURL: U4, lang: b3 } = f3.value;
    await U({ serverURL: U4, lang: b3, token: t2.value.token, objectId: w4.objectId, comment: { sticky: w4.sticky ? 0 : 1 } }), w4.sticky = !w4.sticky;
  }, Q2 = async ({ objectId: w4 }) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    const { serverURL: U4, lang: b3 } = f3.value;
    await y({ serverURL: U4, lang: b3, token: t2.value.token, objectId: w4 }), y4.value.some((F2, q2) => F2.objectId === w4 ? (y4.value = y4.value.filter((O2, oe2) => oe2 !== q2), true) : F2.children.some((O2, oe2) => O2.objectId === w4 ? (y4.value[q2].children = F2.children.filter((ve2, ke2) => ke2 !== oe2), true) : false));
  }, me = async (w4) => {
    const { serverURL: U4, lang: b3 } = f3.value, { objectId: F2 } = w4, q2 = a.value.includes(F2);
    await U({ serverURL: U4, lang: b3, objectId: F2, token: t2.value.token, comment: { like: !q2 } }), q2 ? a.value = a.value.filter((O2) => O2 !== F2) : (a.value = [...a.value, F2], a.value.length > 50 && (a.value = a.value.slice(-50))), w4.like = Math.max(0, (w4.like || 0) + (q2 ? -1 : 1));
  };
  return provide(we2, f3), onMounted(() => {
    watchImmediate(() => [l3.serverURL, l3.path], () => {
      g();
    });
  }), onUnmounted(() => {
    $4 == null || $4();
  }), (w4, U4) => (openBlock(), createElementBlock("div", fn, [createVNode(ol), !m4.value && !R4.value ? (openBlock(), createBlock(gt, { key: 0, onLog: g, onSubmit: V2 })) : createCommentVNode("v-if", true), createBaseVNode("div", wn, [createBaseVNode("div", yn, [s2.value ? (openBlock(), createElementBlock("span", { key: 0, class: "wl-num", textContent: toDisplayString(s2.value) }, null, 8, bn)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(E2.value.comment), 1)]), createBaseVNode("ul", kn, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(ca), (b3) => (openBlock(), createElementBlock("li", { key: b3, class: normalizeClass([b3 === v3.value ? "active" : ""]), onClick: (F2) => K2(b3) }, toDisplayString(E2.value[b3]), 11, Cn))), 128))])]), createBaseVNode("div", $n, [(openBlock(true), createElementBlock(Fragment, null, renderList(y4.value, (b3) => (openBlock(), createBlock(hn, { key: b3.objectId, "root-id": b3.objectId, comment: b3, reply: m4.value, edit: R4.value, onLog: g, onReply: X2, onEdit: A, onSubmit: V2, onStatus: T, onDelete: Q2, onSticky: le2, onLike: me }, null, 8, ["root-id", "comment", "reply", "edit"]))), 128))]), n2.value === "error" ? (openBlock(), createElementBlock("div", Ln, [createBaseVNode("button", { type: "button", class: "wl-btn", onClick: g, textContent: toDisplayString(E2.value.refresh) }, null, 8, En)])) : n2.value === "loading" ? (openBlock(), createElementBlock("div", In, [createVNode(unref(ue2), { size: 30 })])) : y4.value.length ? h4.value < c2.value ? (openBlock(), createElementBlock("div", Mn, [createBaseVNode("button", { type: "button", class: "wl-btn", onClick: i, textContent: toDisplayString(E2.value.more) }, null, 8, xn)])) : createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", { key: 3, class: "wl-empty", textContent: toDisplayString(E2.value.sofa) }, null, 8, An)), f3.value.noCopyright ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", Rn, [U4[0] || (U4[0] = createTextVNode(" Powered by ")), U4[1] || (U4[1] = createBaseVNode("a", { href: "https://github.com/walinejs/waline", target: "_blank", rel: "noopener noreferrer" }, " Waline ", -1)), createTextVNode(" v" + toDisplayString(unref(ht)), 1)]))]));
} });
var ft = (e2, l3) => {
  l3.forEach((t2, a) => {
    const n2 = e2[a].time;
    typeof n2 == "number" && (t2.innerText = n2.toString());
  });
};
var wt = ({ serverURL: e2, path: l3 = window.location.pathname, selector: t2 = ".waline-pageview-count", update: a = true, lang: n2 = navigator.language }) => {
  const s2 = new AbortController(), h4 = Array.from(document.querySelectorAll(t2)), c2 = (v3) => {
    const y4 = Re2(v3);
    return y4 !== null && l3 !== y4;
  }, f3 = (v3) => j({ serverURL: ye2(e2), paths: v3.map((y4) => Re2(y4) ?? l3), lang: n2, signal: s2.signal }).then((y4) => ft(y4, v3)).catch(st);
  if (a) {
    const v3 = h4.filter((m4) => !c2(m4)), y4 = h4.filter(c2);
    v({ serverURL: ye2(e2), path: l3, lang: n2 }).then((m4) => ft(m4, v3)), y4.length && f3(y4);
  } else f3(h4);
  return s2.abort.bind(s2);
};
var jn = ({ el: e2 = "#waline", path: l3 = window.location.pathname, comment: t2 = false, pageview: a = false, ...n2 }) => {
  const s2 = e2 ? xe2(e2) : null;
  if (e2 && !s2) throw new Error("Option 'el' do not match any domElement!");
  if (!n2.serverURL) throw new Error("Option 'serverURL' is missing!");
  const h4 = reactive({ ...n2 }), c2 = reactive({ comment: t2, pageview: a, path: l3 }), f3 = () => {
    c2.comment && mt({ serverURL: h4.serverURL, path: c2.path, ...re2(c2.comment) ? { selector: c2.comment } : {} });
  }, v3 = () => {
    c2.pageview && wt({ serverURL: h4.serverURL, path: c2.path, ...re2(c2.pageview) ? { selector: c2.pageview } : {} });
  };
  let y4 = null;
  s2 && (y4 = createApp(() => h(Sn, { path: c2.path, ...h4 })), y4.mount(s2));
  const m4 = watchEffect(f3), R4 = watchEffect(v3);
  return { el: s2, update: ({ comment: j4, pageview: E2, path: $4 = window.location.pathname, ...S3 } = {}) => {
    Object.entries(S3).forEach(([i, g]) => {
      h4[i] = g;
    }), c2.path = $4, j4 !== void 0 && (c2.comment = j4), E2 !== void 0 && (c2.pageview = E2);
  }, destroy: () => {
    y4 == null || y4.unmount(), m4(), R4();
  } };
};
var Un = ({ el: e2, serverURL: l3, count: t2, lang: a = navigator.language }) => {
  const n2 = be2(), s2 = xe2(e2), h4 = new AbortController();
  return w({ serverURL: l3, count: t2, lang: a, signal: h4.signal, token: n2.value.token }).then((c2) => s2 && c2.length ? (s2.innerHTML = `<ul class="wl-recent-list">${c2.map((f3) => `<li class="wl-recent-item"><a href="${f3.url}">${f3.nick}</a>\uFF1A${f3.comment}</li>`).join("")}</ul>`, { comments: c2, destroy: () => {
    h4.abort(), s2.innerHTML = "";
  } }) : { comments: c2, destroy: () => h4.abort() });
};

// node_modules/@waline/client/dist/pageview.js
init_define_shokax_CONFIG();
var $3 = { "Content-Type": "application/json" };
var h3 = (e2) => `${e2.replace(/\/?$/, "/")}api/`;
var u2 = (e2, t2 = "") => {
  if (typeof e2 == "object" && e2.errno) throw new TypeError(`${t2} failed with ${e2.errno}: ${e2.errmsg}`);
  return e2;
};
var f2 = ({ serverURL: e2, lang: t2, paths: r2, type: o2, signal: a }) => fetch(`${h3(e2)}article?path=${encodeURIComponent(r2.join(","))}&type=${encodeURIComponent(o2.join(","))}&lang=${t2}`, { signal: a }).then((n2) => n2.json()).then((n2) => u2(n2, "Get counter").data);
var R3 = ({ serverURL: e2, lang: t2, path: r2, type: o2, action: a }) => fetch(`${h3(e2)}article?lang=${t2}`, { method: "POST", headers: $3, body: JSON.stringify({ path: r2, type: o2, action: a }) }).then((n2) => n2.json()).then((n2) => u2(n2, "Update counter").data);
var U3 = ({ serverURL: e2, lang: t2, paths: r2, signal: o2 }) => f2({ serverURL: e2, lang: t2, paths: r2, type: ["time"], signal: o2 });
var w3 = (e2) => R3({ ...e2, type: "time", action: "inc" });
var L2 = (e2 = "") => e2.replace(/\/$/u, "");
var b2 = (e2) => /^(https?:)?\/\//.test(e2);
var d3 = (e2) => {
  const t2 = L2(e2);
  return b2(t2) ? t2 : `https://${t2}`;
};
var j3 = (e2) => {
  e2.name !== "AbortError" && console.error(e2.message);
};
var m3 = (e2) => {
  const { path: t2 } = e2.dataset;
  return t2 != null && t2.length ? t2 : null;
};
var y3 = (e2, t2) => {
  t2.forEach((r2, o2) => {
    const a = e2[o2].time;
    typeof a == "number" && (r2.innerText = a.toString());
  });
};
var S2 = ({ serverURL: e2, path: t2 = window.location.pathname, selector: r2 = ".waline-pageview-count", update: o2 = true, lang: a = navigator.language }) => {
  const n2 = new AbortController(), i = Array.from(document.querySelectorAll(r2)), p2 = (l3) => {
    const s2 = m3(l3);
    return s2 !== null && t2 !== s2;
  }, g = (l3) => U3({ serverURL: d3(e2), paths: l3.map((s2) => m3(s2) ?? t2), lang: a, signal: n2.signal }).then((s2) => y3(s2, l3)).catch(j3);
  if (o2) {
    const l3 = i.filter((c2) => !p2(c2)), s2 = i.filter(p2);
    w3({ serverURL: d3(e2), path: t2, lang: a }).then((c2) => y3(c2, l3)), s2.length && g(s2);
  } else g(i);
  return n2.abort.bind(n2);
};

// themes/shokaX/source/js/_app/components/comments.ts
await import("./waline-GSEATCWP.js");
var walineComment = function() {
  jn({
    el: "#comments",
    serverURL: CONFIG.waline.serverURL,
    lang: CONFIG.waline.lang,
    locale: CONFIG.waline.locale,
    emoji: CONFIG.waline.emoji,
    meta: CONFIG.waline.meta,
    requiredMeta: CONFIG.waline.requiredMeta,
    wordLimit: CONFIG.waline.wordLimit,
    pageSize: CONFIG.waline.pageSize,
    pageview: CONFIG.waline.pageview,
    path: window.location.pathname,
    recaptchaV3Key: CONFIG.waline.recaptchaV3Key,
    turnstileKey: CONFIG.waline.turnstileKey,
    dark: 'html[data-theme="dark"]'
  });
};
var walinePageview = function() {
  S2({
    serverURL: CONFIG.waline.serverURL,
    path: window.location.pathname
  });
};
var walineRecentComments = async function() {
  const root = "https://blog.flydreamxm.top".replace(/^(https?:\/\/)?[^/]*/, "");
  let items = [];
  const { comments } = await Un({
    serverURL: CONFIG.waline.serverURL.replace(/\/+$/, ""),
    count: 10
  });
  comments.data.forEach(function(item) {
    let cText = item.orig.length > 50 ? item.orig.substring(0, 50) + "..." : item.orig;
    item.url = item.url.startsWith("/") ? item.url : "/" + item.url;
    const siteLink = item.url + "#" + item.objectId;
    const time = new Date(item.time);
    const now = /* @__PURE__ */ new Date();
    const diff = now.valueOf() - time.valueOf();
    let dateStr;
    if (diff < 36e5) {
      dateStr = `${Math.floor(diff / 6e4)} \u5206\u949F\u524D`;
    } else if (diff < 864e5) {
      dateStr = `${Math.floor(diff / 36e5)} \u5C0F\u65F6\u524D`;
    } else if (diff < 2592e6) {
      dateStr = `${Math.floor(diff / 864e5)} \u5929\u524D`;
    } else {
      dateStr = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    }
    items.push({
      href: siteLink,
      nick: item.nick,
      time: dateStr,
      text: cText
    });
  });
  const newComments = new DocumentFragment();
  items.forEach(function(item) {
    const commentEl = document.createElement("li");
    const commentLink = document.createElement("a");
    const commentTime = document.createElement("span");
    const commentText = document.createElement("span");
    commentText.innerText = item.text;
    commentTime.className = "breadcrumb";
    commentTime.innerText = `${item.nick} @ ${item.time}`;
    commentLink.href = root + item.href;
    commentEl.className = "item";
    commentText.appendChild(document.createElement("br"));
    commentLink.appendChild(commentTime);
    commentLink.appendChild(commentText);
    commentEl.appendChild(commentLink);
    newComments.appendChild(commentEl);
  });
  document.getElementById("new-comment").appendChild(newComments);
};
export {
  walineComment,
  walinePageview,
  walineRecentComments
};
