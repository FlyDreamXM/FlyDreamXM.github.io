import {
  BODY,
  CONFIG,
  LOCAL_HASH,
  LOCAL_URL,
  scrollAction,
  setLocalHash,
  siteNavHeight
} from "./chunk-C3E56ZLK.js";
import {
  init_define_shokax_CONFIG
} from "./chunk-ODNR5DMV.js";

// themes/shokaX/source/js/_app/library/proto.ts
init_define_shokax_CONFIG();
var insertAfter = function(el, element) {
  const parent = el.parentNode;
  if (parent.lastChild === el) {
    parent.appendChild(element);
  } else {
    parent.insertBefore(element, el.nextSibling);
  }
};
var createChild = function(parent, tag, obj, positon) {
  const child = document.createElement(tag);
  Object.assign(child, obj);
  switch (positon) {
    case "after":
      insertAfter(parent, child);
      break;
    case "replace":
      parent.innerHTML = "";
      parent.appendChild(child);
      break;
    default:
      parent.appendChild(child);
  }
  return child;
};
var wrapObject = function(parent, obj) {
  const box = document.createElement("div");
  Object.assign(box, obj);
  parent.parentNode.insertBefore(box, parent);
  parent.parentNode.removeChild(parent);
  box.appendChild(parent);
};
var getHeight = function(el) {
  return el.getBoundingClientRect().height;
};
var setWidth = function(el, w) {
  el.style.width = typeof w === "number" ? w + "rem" : w;
};
var getDisplay = function(el) {
  return el.style.display;
};
var setDisplay = function(el, d) {
  el.style.display = d;
  return el;
};

// themes/shokaX/source/js/_app/library/anime.ts
init_define_shokax_CONFIG();

// node_modules/theme-shokax-anime/dist/index.esm.js
init_define_shokax_CONFIG();
var Timeline = class {
  constructor() {
    this.queue = [];
  }
  add(options) {
    this.queue.push(new Anime(options));
    return this;
  }
  play() {
    this.queue.forEach((instance) => instance.play());
  }
};
var defaultOptions = {
  targets: null,
  duration: Infinity,
  easing: "linear",
  delay: 0,
  begin: null,
  // 初始回调
  update: null,
  // 更新回调
  complete: null
  // 结束回调
};
var penner = () => {
  const eases = {
    linear: () => (t) => t
  };
  const functionEasings = {
    Sine: () => (t) => 1 - Math.cos(t * Math.PI / 2),
    Expo: () => (t) => t ? Math.pow(2, 10 * t - 10) : 0,
    Circ: () => (t) => 1 - Math.sqrt(1 - t * t),
    Back: () => (t) => t * t * (3 * t - 2),
    Bounce: () => (t) => {
      let pow2, b = 4;
      while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {
      }
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
    }
  };
  ["Quad", "Cubic", "Quart", "Quint"].forEach((name, i) => {
    functionEasings[name] = () => (t) => Math.pow(t, i + 2);
  });
  Object.keys(functionEasings).forEach((name) => {
    const easeIn = functionEasings[name];
    eases["easeIn" + name] = easeIn;
    eases["easeOut" + name] = () => (t) => 1 - easeIn()(1 - t);
    eases["easeInOut" + name] = () => (t) => t < 0.5 ? easeIn()(t * 2) / 2 : 1 - easeIn()(t * -2 + 2) / 2;
    eases["easeOutIn" + name] = () => (t) => t < 0.5 ? (1 - easeIn()(1 - t * 2)) / 2 : (easeIn()(t * 2 - 1) + 1) / 2;
  });
  return eases;
};
var pennerFn = penner();
var validTransform = ["translateX", "translateY", "translateZ"];
var selectKey = (target, key) => target instanceof HTMLElement ? "transform" in target.style && validTransform.includes(key) ? "transform" : key in target.style ? "style" : "attribute" : "attribute";
var engine = (anime2) => {
  const start = Date.now() + anime2.delay;
  const end = start + anime2.duration;
  const isValid = !!anime2.targets;
  const cloneTargets = [];
  const initTarget = () => {
    if (!isValid)
      return;
    if (!Array.isArray(anime2.targets)) {
      anime2.targets = [anime2.targets];
    }
    for (const target of anime2.targets) {
      const cloneTarget = {};
      for (const propKey in anime2.dest) {
        const propValue = anime2.dest[propKey];
        const keyType = selectKey(target, propKey);
        if (Array.isArray(propValue)) {
          if (propValue.length === 2 && typeof propValue[0] !== "object") {
            if (keyType === "transform") {
              target.style.transform = `${propKey}(${typeof propValue[0] === "string" ? propValue[0] : propValue[0] + "px"})`;
            } else if (keyType === "style") {
              target.style[propKey] = propValue[0];
            } else {
              target[propKey] = propValue[0];
            }
            cloneTarget[propKey] = propValue[0];
            anime2.dest[propKey] = propValue[1];
          } else {
            let start2 = 0;
            for (let o of propValue) {
              o.startTimeStamp = start2;
              start2 += o.duration;
            }
            cloneTarget[propKey] = target[propKey];
          }
        } else {
          if (keyType === "transform") {
            cloneTarget[propKey] = target.style.transform.match(new RegExp(`${propKey}\\((\\w+)\\)`))[1];
          } else if (keyType === "style") {
            cloneTarget[propKey] = target.style[propKey];
          } else {
            cloneTarget[propKey] = target[propKey];
          }
        }
      }
      cloneTargets.push(cloneTarget);
    }
  };
  const change = (target, origin, elapsed, value, key, final = false) => {
    let keyCode;
    if (typeof value === "string") {
      keyCode = value.endsWith("%") ? "%" : value.endsWith("px") ? "px" : null;
      if (keyCode) {
        value = parseFloat(value);
      } else {
        throw new TypeError(`string value must ends with '%' or 'px'`);
      }
    }
    let nextValue = final ? value : (value - origin) * elapsed + origin;
    if (keyCode) {
      nextValue += keyCode;
    }
    const targetKey = selectKey(target, key);
    if (targetKey === "transform")
      target.style.transform = `${key}(${nextValue}${keyCode ? "" : "px"})`;
    else if (targetKey === "style")
      target.style[key] = nextValue;
    else
      target[key] = nextValue;
  };
  const changeAll = (elapsed, current, final = false) => {
    anime2.targets.forEach((target, index) => {
      Object.keys(anime2.dest).forEach((key) => {
        let origin = parseFloat(cloneTargets[index][key]);
        let dest = anime2.dest[key];
        if (typeof dest === "object") {
          if (Array.isArray(dest)) {
            let i = 0;
            while (i < dest.length && current - start >= dest[i].startTimeStamp)
              i++;
            const { value, duration, easing = anime2.easing, startTimeStamp } = dest[i - 1];
            origin = i <= 1 ? origin : dest[i - 2].value;
            const elapsed2 = pennerFn[easing]()((current - start - startTimeStamp) / duration);
            if (current <= start + duration + startTimeStamp) {
              change(target, origin, elapsed2, value, key);
            } else if (final) {
              change(target, origin, elapsed2, value, key, final);
            }
          } else {
            const { value, duration, easing = anime2.easing } = dest;
            const elapsed2 = pennerFn[easing]()((current - start) / duration);
            if (current <= start + duration) {
              change(target, origin, elapsed2, value, key);
            } else if (final) {
              change(target, origin, elapsed2, value, key, final);
            }
          }
        } else {
          if (typeof dest === "function") {
            dest = dest(target, index);
          }
          change(target, origin, elapsed, dest, key, final);
        }
      });
    });
  };
  const step = () => {
    const current = Date.now();
    if (current > end) {
      changeAll(1, current, true);
      if (typeof anime2.complete === "function") {
        anime2.complete(anime2.targets);
      }
      anime2.isPlay = false;
    } else {
      if (current >= start) {
        const elapsed = pennerFn[anime2.easing]()((current - start) / anime2.duration);
        if (isValid)
          changeAll(elapsed, current);
        if (typeof anime2.update === "function") {
          anime2.update(anime2.targets);
        }
      }
      requestAnimationFrame(step);
    }
  };
  initTarget();
  if (typeof anime2.begin === "function") {
    anime2.begin(anime2.targets);
  }
  step();
};
var Anime = class {
  constructor(options = defaultOptions) {
    options = { ...defaultOptions, ...options };
    const { targets, duration, easing, delay, begin, update, complete, ...dest } = options;
    this.targets = targets;
    this.duration = duration;
    this.easing = easing;
    this.delay = delay;
    this.begin = begin;
    this.update = update;
    this.complete = complete;
    this.dest = dest ? dest : {};
    this.tl = null;
    this.isPlay = false;
  }
  timeline() {
    if (!this.tl) {
      this.tl = new Timeline();
    }
    return this.tl;
  }
  play() {
    if (!this.isPlay) {
      this.isPlay = true;
      engine(this);
    }
  }
};
var anime = (options) => {
  return new Anime(options);
};
anime.random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// themes/shokaX/source/js/_app/library/anime.ts
var transition = (target, type, complete, begin) => {
  let animation;
  let display = "none";
  switch (type) {
    case 0:
      animation = { opacity: [1, 0] };
      break;
    case 1:
      animation = { opacity: [0, 1] };
      display = "block";
      break;
    case "bounceUpIn":
      animation = {
        begin(anim) {
          setDisplay(target, "block");
        },
        translateY: [
          { value: -60, duration: 200 },
          { value: 10, duration: 200 },
          { value: -5, duration: 200 },
          { value: 0, duration: 200 }
        ],
        opacity: [0, 1]
      };
      display = "block";
      break;
    case "shrinkIn":
      animation = {
        begin(anim) {
          setDisplay(target, "block");
        },
        scale: [
          { value: 1.1, duration: 300 },
          { value: 1, duration: 200 }
        ],
        opacity: 1
      };
      display = "block";
      break;
    case "slideRightIn":
      animation = {
        begin(anim) {
          setDisplay(target, "block");
        },
        translateX: ["100%", "0%"],
        opacity: [0, 1]
      };
      display = "block";
      break;
    case "slideRightOut":
      animation = {
        translateX: ["0%", "100%"],
        opacity: [1, 0]
      };
      break;
    default:
      animation = type;
      display = type.display;
      break;
  }
  anime(Object.assign({
    targets: target,
    duration: 200,
    easing: "linear",
    begin() {
      begin && begin();
    },
    complete() {
      setDisplay(target, display);
      complete && complete();
    }
  }, animation)).play();
};
var pageScroll = (target, offset, complete) => {
  const scrollContainer = typeof offset === "number" && typeof target !== "number" ? target.parentNode : document.scrollingElement || document.documentElement;
  let scrollTop;
  if (typeof offset !== "undefined") {
    scrollTop = offset;
  } else if (typeof target === "number") {
    scrollTop = target;
  } else if (target) {
    const rect = target.getBoundingClientRect();
    scrollTop = rect.top + window.scrollY - siteNavHeight;
  } else {
    scrollTop = 0;
  }
  scrollContainer.scrollTo({
    top: scrollTop,
    behavior: "smooth"
  });
  if (complete) {
    setTimeout(() => complete(), 500);
  }
};

// themes/shokaX/source/js/_app/globals/tools.ts
init_define_shokax_CONFIG();
var showtip = (msg) => {
  if (!msg) {
    return;
  }
  const tipbox = createChild(BODY, "div", {
    innerHTML: msg,
    className: "tip"
  });
  setTimeout(() => {
    tipbox.classList.add("hide");
    setTimeout(() => {
      BODY.removeChild(tipbox);
    }, 300);
  }, 3e3);
};
var pagePosition = () => {
  if (CONFIG.auto_scroll) {
    localStorage.setItem(LOCAL_URL, String(scrollAction.y));
  }
};
var positionInit = (comment) => {
  const anchor = window.location.hash;
  let target = null;
  if (LOCAL_HASH) {
    localStorage.removeItem(LOCAL_URL);
    return;
  }
  if (anchor) {
    target = document.querySelector(decodeURI(anchor));
  } else {
    target = CONFIG.auto_scroll ? parseInt(localStorage.getItem(LOCAL_URL)) : 0;
  }
  if (target) {
    pageScroll(target);
    setLocalHash(1);
  }
  if (comment && anchor && !LOCAL_HASH) {
    pageScroll(target);
    setLocalHash(1);
  }
};
var clipBoard = (str, callback) => {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(str).then(() => {
      callback && callback(true);
    }, () => {
      callback && callback(false);
    });
  } else {
    console.error("Too old browser, clipborad API not supported.");
    callback && callback(false);
  }
};

export {
  createChild,
  wrapObject,
  getHeight,
  setWidth,
  getDisplay,
  setDisplay,
  transition,
  pageScroll,
  showtip,
  pagePosition,
  positionInit,
  clipBoard
};
