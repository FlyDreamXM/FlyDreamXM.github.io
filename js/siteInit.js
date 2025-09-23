import {
  clipBoard,
  createChild,
  getHeight,
  pagePosition,
  pageScroll,
  positionInit,
  setDisplay,
  setWidth,
  transition
} from "./chunk-P7XTIMHV.js";
import {
  BODY,
  CONFIG,
  Container,
  HTML,
  backToTop,
  diffY,
  goToComment,
  headerHight,
  headerHightInner,
  loadCat,
  menuToggle,
  oWinWidth,
  quickBtn,
  scrollAction,
  setBackToTop,
  setDiffY,
  setGoToComment,
  setHeaderHight,
  setHeaderHightInner,
  setLocalHash,
  setLocalUrl,
  setOWinHeight,
  setOWinWidth,
  setOriginTitle,
  setShowContents,
  setSiteNavHeight,
  setToolBtn,
  showContents,
  sideBar,
  siteBrand,
  siteHeader,
  siteNav,
  toolBtn
} from "./chunk-YSKEPZJI.js";
import {
  init_define_shokax_CONFIG
} from "./chunk-4XZAHYLN.js";
import "./chunk-OTYXESVJ.js";

// themes/shokaX/source/js/_app/pjax/siteInit.ts
init_define_shokax_CONFIG();

// themes/shokaX/source/js/_app/pjax/domInit.ts
init_define_shokax_CONFIG();

// themes/shokaX/source/js/_app/components/sidebar.ts
init_define_shokax_CONFIG();
var sideBarToggleHandle = (event, force) => {
  if (sideBar.classList.contains("on")) {
    sideBar.classList.remove("on");
    menuToggle.classList.remove("close");
    if (force) {
      sideBar.style = "";
    } else {
      transition(sideBar, "slideRightOut");
    }
  } else {
    if (force) {
      sideBar.style = "";
    } else {
      transition(sideBar, "slideRightIn", () => {
        sideBar.classList.add("on");
        menuToggle.classList.add("close");
      });
    }
  }
};
var sideBarTab = () => {
  const sideBarInner = sideBar.querySelector(".inner");
  if (sideBar.querySelector(".tab")) {
    sideBarInner.removeChild(sideBar.querySelector(".tab"));
  }
  const list = document.createElement("ul");
  let active = "active";
  list.className = "tab";
  ["contents", "related", "overview"].forEach((item) => {
    const element = sideBar.querySelector(".panel." + item);
    if (element.innerHTML.trim().length < 1) {
      if (item === "contents") {
        setDisplay(showContents, "none");
      }
      return;
    }
    if (item === "contents") {
      setDisplay(showContents, "");
    }
    const tab = document.createElement("li");
    const span = document.createElement("span");
    const text = document.createTextNode(element.getAttribute("data-title"));
    span.appendChild(text);
    tab.appendChild(span);
    tab.classList.add(item);
    tab.classList.add("item");
    if (active) {
      element.classList.add(active);
      tab.classList.add(active);
    } else {
      element.classList.remove("active");
    }
    tab.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (target.classList.contains("active")) return;
      sideBar.querySelectorAll(".tab .item").forEach((element2) => {
        element2.classList.remove("active");
      });
      sideBar.querySelectorAll(".panel").forEach((element2) => {
        element2.classList.remove("active");
      });
      sideBar.querySelector(".panel." + target.className.replace(" item", "")).classList.add("active");
      target.classList.add("active");
    });
    list.appendChild(tab);
    active = "";
  });
  if (list.childNodes.length > 1) {
    sideBarInner.insertBefore(list, sideBarInner.childNodes[0]);
    sideBar.querySelector(".panels").style.paddingTop = "";
  } else {
    sideBar.querySelector(".panels").style.paddingTop = ".625rem";
  }
};
var sidebarTOC = () => {
  const activateNavByIndex = (index) => {
    const target = navItems[index];
    if (!target) return;
    if (target.classList.contains("current")) {
      return;
    }
    document.querySelectorAll(".toc .active").forEach((element) => {
      element && element.classList.remove("active");
      element && element.classList.remove("current");
    });
    sections.forEach((element) => {
      element && element.classList.remove("active");
    });
    target.classList.add("active");
    target.classList.add("current");
    sections[index] && sections[index].classList.add("active");
    let parent = target.parentNode;
    while (!parent.matches(".contents")) {
      if (parent.matches("li")) {
        parent.classList.add("active");
        const t = document.getElementById(decodeURIComponent(parent.querySelector("a.toc-link").getAttribute("href").replace("#", "")));
        if (t) {
          t.classList.add("active");
        }
      }
      parent = parent.parentNode;
    }
    if (getComputedStyle(sideBar).display !== "none" && tocElement.classList.contains("active")) {
      pageScroll(tocElement, target.offsetTop - tocElement.offsetHeight / 4);
    }
  };
  const navItems = document.querySelectorAll(".contents li");
  if (navItems.length < 1) {
    return;
  }
  let sections = [...navItems];
  let activeLock = null;
  sections = sections.map((element, index) => {
    const link = element.querySelector("a.toc-link");
    const linkHref = link.getAttribute("href");
    if (!linkHref) return null;
    const anchor = document.getElementById(decodeURI(linkHref.replace("#", "")));
    if (!anchor) return null;
    const alink = anchor.querySelector("a.anchor");
    const anchorScroll = (event) => {
      event.preventDefault();
      const target = document.getElementById(decodeURI(event.currentTarget.getAttribute("href").replace("#", "")));
      activeLock = index;
      pageScroll(document.body, target.offsetTop, () => {
        activateNavByIndex(index);
        activeLock = null;
      });
    };
    link.addEventListener("click", anchorScroll);
    alink && alink.addEventListener("click", (event) => {
      anchorScroll(event);
      clipBoard(CONFIG.hostname + "/" + LOCAL.path + event.currentTarget.getAttribute("href"));
    });
    return anchor;
  });
  const tocElement = sideBar.querySelector(".contents.panel");
  const findIndex = (entries) => {
    let index = 0;
    let entry = entries[index];
    if (entry.boundingClientRect.top > 0) {
      index = sections.indexOf(entry.target);
      return index === 0 ? 0 : index - 1;
    }
    for (; index < entries.length; index++) {
      if (entries[index].boundingClientRect.top <= 0) {
        entry = entries[index];
      } else {
        return sections.indexOf(entry.target);
      }
    }
    return sections.indexOf(entry.target);
  };
  const createIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      const index = findIndex(entries) + (diffY < 0 ? 1 : 0);
      if (activeLock === null) {
        activateNavByIndex(index);
      }
    }, {
      rootMargin: "0px 0px -100% 0px",
      threshold: 0
    });
    sections.forEach((element) => {
      element && observer.observe(element);
    });
  };
  createIntersectionObserver();
};
var backToTopHandle = () => {
  pageScroll(0);
};
var goToBottomHandle = () => {
  pageScroll(parseInt(String(getHeight(Container))));
};
var goToCommentHandle = () => {
  pageScroll(document.getElementById("comments"));
};
var menuActive = () => {
  document.querySelectorAll(".menu .item:not(.title)").forEach((element) => {
    const target = element.querySelector("a[href]");
    const parentItem = element.parentNode.parentNode;
    if (!target) return;
    const isSamePath = target.pathname === location.pathname || target.pathname === location.pathname.replace("index.html", "");
    const isSubPath = !CONFIG.root.startsWith(target.pathname) && location.pathname.startsWith(target.pathname);
    const active = !target.onclick && target.hostname === location.hostname && (isSamePath || isSubPath);
    element.classList.toggle("active", active);
    if (element.parentNode.querySelector(".active") && parentItem.classList.contains("dropdown")) {
      parentItem.classList.remove("active");
      parentItem.classList.add("expand");
    } else {
      parentItem.classList.remove("expand");
    }
  });
};

// themes/shokaX/source/js/_app/globals/thirdparty.ts
init_define_shokax_CONFIG();
var Loader = {
  timer: void 0,
  lock: false,
  show() {
    clearTimeout(this.timer);
    document.body.classList.remove("loaded");
    loadCat.setAttribute("style", "display:block");
    Loader.lock = false;
  },
  hide(sec) {
    if (!CONFIG.loader.start) {
      sec = -1;
    }
    this.timer = setTimeout(this.vanish, sec || 3e3);
  },
  vanish() {
    if (Loader.lock) {
      return;
    }
    if (CONFIG.loader.start) {
      transition(loadCat, 0);
    }
    document.body.classList.add("loaded");
    Loader.lock = true;
  }
};

// themes/shokaX/source/js/_app/player.ts
init_define_shokax_CONFIG();

// themes/shokaX/source/js/_app/pjax/domInit.ts
async function domInit() {
  document.querySelectorAll(".overview .menu > .item").forEach((el) => {
    siteNav.querySelector(".menu").appendChild(el.cloneNode(true));
  });
  loadCat.addEventListener("click", Loader.vanish);
  menuToggle.addEventListener("click", sideBarToggleHandle);
  document.querySelector(".dimmer").addEventListener("click", sideBarToggleHandle);
  quickBtn.querySelector(".down").addEventListener("click", goToBottomHandle);
  quickBtn.querySelector(".up").addEventListener("click", backToTopHandle);
  if (!toolBtn) {
    setToolBtn(createChild(siteHeader, "div", {
      id: "tool",
      innerHTML: `<div class="item player">
                    ${false ? '<div class="play-pause btn" id="playBtn"></div><div class="music btn btn" id="showBtn"></div>' : ""}
                  </div>
                  <div class="item contents">
                    <i class="ic i-list-ol"></i>
                  </div>
                  <div class="item chat">
                    <i class="ic i-comments"></i>
                  </div>
                  <div class="item back-to-top">
                    <i class="ic i-arrow-up"></i>
                    <span>0%</span>
                  </div>`
    }));
  }
  setBackToTop(toolBtn.querySelector(".back-to-top"));
  setGoToComment(toolBtn.querySelector(".chat"));
  setShowContents(toolBtn.querySelector(".contents"));
  backToTop.addEventListener("click", backToTopHandle);
  goToComment.addEventListener("click", goToCommentHandle);
  showContents.addEventListener("click", sideBarToggleHandle);
  if (false) {
    await initAudioPlayer();
  }
  const createIntersectionObserver = () => {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".parallax>use").forEach((i) => {
          i.classList.remove("stop-animation");
        });
        document.querySelectorAll("#imgs .item").forEach((i) => {
          i.classList.remove("stop-animation");
        });
      } else {
        document.querySelectorAll(".parallax>use").forEach((i) => {
          i.classList.add("stop-animation");
        });
        document.querySelectorAll("#imgs .item").forEach((i) => {
          i.classList.add("stop-animation");
        });
      }
    }, {
      root: null,
      threshold: 0.2
    }).observe(document.getElementById("waves"));
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".with-love>i").forEach((i) => {
          i.classList.remove("stop-animation");
        });
      } else {
        document.querySelectorAll(".with-love>i").forEach((i) => {
          i.classList.add("stop-animation");
        });
      }
    }, {
      root: null,
      threshold: 0.2
    }).observe(document.querySelector(".with-love"));
  };
  createIntersectionObserver();
}

// themes/shokaX/source/js/_app/pjax/refresh.ts
init_define_shokax_CONFIG();

// themes/shokaX/source/js/_app/page/common.ts
init_define_shokax_CONFIG();
var cardActive = () => {
  if (!document.querySelector(".index.wrap")) {
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((article) => {
      if (article.target.classList.contains("show")) {
        io.unobserve(article.target);
      } else {
        if (article.isIntersecting || article.intersectionRatio > 0) {
          article.target.classList.add("show");
          io.unobserve(article.target);
        }
      }
    });
  }, {
    root: null,
    threshold: [0.3]
  });
  document.querySelectorAll(".index.wrap article.item, .index.wrap section.item").forEach((article) => {
    io.observe(article);
  });
  document.querySelector(".index.wrap .item:first-child").classList.add("show");
  document.querySelectorAll(".cards .item").forEach((element) => {
    ["mouseenter", "touchstart"].forEach((item) => {
      element.addEventListener(item, () => {
        const cardEle = document.querySelector(".cards .item.active");
        if (cardEle) {
          cardEle.classList.remove("active");
        }
        element.classList.add("active");
      }, { passive: true });
    });
    ["mouseleave"].forEach((item) => {
      element.addEventListener(item, () => {
        element.classList.remove("active");
      }, { passive: true });
    });
  });
};

// themes/shokaX/source/js/_app/globals/handles.ts
init_define_shokax_CONFIG();

// themes/shokaX/source/js/_app/globals/themeColor.ts
init_define_shokax_CONFIG();
var changeTheme = (type) => {
  const btn = document.querySelector(".theme .ic");
  if (type === "dark") {
    HTML.setAttribute("data-theme", type);
    btn.classList.remove("i-sun");
    btn.classList.add("i-moon");
  } else {
    HTML.removeAttribute("data-theme");
    btn.classList.remove("i-moon");
    btn.classList.add("i-sun");
  }
};
var autoDarkmode = () => {
  if (CONFIG.auto_dark.enable) {
    if ((/* @__PURE__ */ new Date()).getHours() >= CONFIG.auto_dark.start || (/* @__PURE__ */ new Date()).getHours() <= CONFIG.auto_dark.end) {
      changeTheme("dark");
    } else {
      changeTheme();
    }
  }
};
var changeMetaTheme = (color) => {
  if (HTML.getAttribute("data-theme") === "dark") {
    color = "#222";
  }
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
};
var themeColorListener = () => {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (mediaQueryList) => {
    if (mediaQueryList.matches) {
      changeTheme("dark");
    } else {
      changeTheme();
    }
  });
  const t = localStorage.getItem("theme");
  if (t) {
    changeTheme(t);
  } else {
    if (CONFIG.darkmode) {
      changeTheme("dark");
    }
  }
};

// themes/shokaX/source/js/_app/globals/handles.ts
var wavesEle = document.getElementById("waves");
var resizeHandle = () => {
  setSiteNavHeight(getHeight(siteNav));
  setHeaderHightInner(getHeight(siteHeader));
  setHeaderHight(headerHightInner + getHeight(wavesEle));
  if (oWinWidth !== window.innerWidth) {
    sideBarToggleHandle(null, 1);
  }
  setOWinHeight(window.innerHeight);
  setOWinWidth(window.innerWidth);
};
var scrollHandle = () => {
  const winHeight = window.innerHeight;
  const docHeight = document.querySelector("main > .inner").offsetHeight;
  const contentVisibilityHeight = docHeight > winHeight ? docHeight - winHeight : document.body.scrollHeight - winHeight;
  const SHOW = window.scrollY > headerHightInner;
  const startScroll = window.scrollY > 0;
  if (SHOW) {
    changeMetaTheme("#FFF");
  } else {
    changeMetaTheme("#222");
  }
  siteNav.classList.toggle("show", SHOW);
  toolBtn.classList.toggle("affix", startScroll);
  siteBrand.classList.toggle("affix", startScroll);
  sideBar.classList.toggle("affix", window.scrollY > headerHight && document.body.offsetWidth >= 991);
  if (typeof scrollAction.y === "undefined") {
    scrollAction.y = window.scrollY;
  }
  setDiffY(scrollAction.y - window.scrollY);
  if (diffY < 0) {
    siteNav.classList.remove("up");
    siteNav.classList.toggle("down", SHOW);
  } else if (diffY > 0) {
    siteNav.classList.remove("down");
    siteNav.classList.toggle("up", SHOW);
  } else {
  }
  scrollAction.y = window.scrollY;
  const scrollPercent = Math.round(Math.min(100 * window.scrollY / contentVisibilityHeight, 100)) + "%";
  if (backToTop.querySelector("span").innerText !== scrollPercent) {
    backToTop.querySelector("span").innerText = scrollPercent;
  }
  if (document.getElementById("sidebar").classList.contains("affix") || document.getElementById("sidebar").classList.contains("on")) {
    setWidth(document.querySelector(".percent"), scrollPercent);
  }
};

// themes/shokaX/source/js/_app/page/tab.ts
init_define_shokax_CONFIG();
var tabFormat = () => {
  let first_tab;
  document.querySelectorAll("div.tab").forEach((element) => {
    if (element.getAttribute("data-ready")) {
      return;
    }
    const id = element.getAttribute("data-id");
    const title = element.getAttribute("data-title");
    let box = document.getElementById(id);
    if (!box) {
      box = document.createElement("div");
      box.className = "tabs";
      box.id = id;
      box.innerHTML = '<div class="show-btn"></div>';
      const showBtn = box.querySelector(".show-btn");
      showBtn.addEventListener("click", () => {
        pageScroll(box);
      });
      element.parentNode.insertBefore(box, element);
      first_tab = true;
    } else {
      first_tab = false;
    }
    let ul = box.querySelector(".nav ul");
    if (!ul) {
      ul = createChild(box, "div", {
        className: "nav",
        innerHTML: "<ul></ul>"
      }).querySelector("ul");
    }
    const li = createChild(ul, "li", {
      innerHTML: title
    });
    if (first_tab) {
      li.classList.add("active");
      element.classList.add("active");
    }
    li.addEventListener("click", (event) => {
      const target = event.currentTarget;
      box.querySelectorAll(".active").forEach((el) => {
        el.classList.remove("active");
      });
      element.classList.add("active");
      target.classList.add("active");
    });
    box.appendChild(element);
    element.setAttribute("data-ready", String(true));
  });
};

// themes/shokaX/source/js/_app/pjax/refresh.ts
var siteRefresh = async (reload) => {
  if (false) {
    if (window.location.origin !== CONFIG2.hostname && window.location.origin !== "http://localhost:4000") {
      window.location.href = CONFIG2.hostname;
      alert("\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;\nWe have detected a fake website, and you have been redirected to the correct homepage.");
    }
  }
  setLocalHash(0);
  setLocalUrl(window.location.href);
  await import("./copy-tex-XOQXXZXQ.js");
  const lazyBg = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.backgroundImage = `url("${el.getAttribute("data-background-image")}")`;
        el.removeAttribute("data-background-image");
        observer.unobserve(el);
      }
    });
  }, {
    root: null,
    threshold: 0.2
  });
  document.querySelectorAll("[data-background-image]").forEach((el) => {
    lazyBg.observe(el);
  });
  setOriginTitle(document.title);
  resizeHandle();
  menuActive();
  sideBarTab();
  sidebarTOC();
  const pagePost = await import("./post-UTWSHWJX.js");
  await pagePost.postBeauty();
  const cpel = document.getElementById("copyright");
  if (cpel) {
    const comment = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (true) {
            import("./comments-6LTVPU3F.js").then(({ walinePageview, walineComment }) => {
              walinePageview();
              walineComment();
            });
          }
          if (false) {
            null.then(({ twikooComment }) => {
              twikooComment();
            });
          }
          comment.disconnect();
        }
      });
    }, {
      root: null,
      threshold: 0.2
    });
    comment.observe(cpel);
  }
  if (true) {
    import("./comments-6LTVPU3F.js").then(async ({ walineRecentComments }) => {
      await walineRecentComments();
    });
  }
  if (false) {
    null.then(async ({ twikooRecentComments }) => {
      await twikooRecentComments();
    });
  }
  if (true) {
    tabFormat();
  }
  if (sessionStorage.getItem("loaded") === "true") {
    Loader.hide(30);
  } else {
    sessionStorage.setItem("loaded", "true");
    Loader.hide(500);
  }
  setTimeout(() => {
    positionInit();
  }, 500);
  cardActive();
  if (false) {
    isOutime();
  }
};

// themes/shokaX/source/js/_app/components/cloudflare.ts
init_define_shokax_CONFIG();
function cloudflareInit() {
  let inCloudFlare = true;
  window.addEventListener("DOMContentLoaded", function() {
    inCloudFlare = false;
  });
  if (document.readyState === "loading") {
    window.addEventListener("load", function() {
      if (inCloudFlare) {
        window.dispatchEvent(new Event("DOMContentLoaded"));
        console.log("%c \u2601\uFE0Fcloudflare patch %c running", "color: white; background: #ff8c00; padding: 5px 3px;", "padding: 4px;border:1px solid #ff8c00");
      }
    });
  }
}
cloudflareInit();

// themes/shokaX/source/js/_app/library/vue.ts
init_define_shokax_CONFIG();
function initVue() {
  function changeThemeByBtn() {
    let c;
    const btn = document.querySelector(".theme").querySelector(".ic");
    const neko = createChild(BODY, "div", {
      id: "neko",
      innerHTML: '<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'
    });
    const hideNeko = () => {
      transition(neko, {
        // @ts-ignore
        delay: 2500,
        opacity: 0
      }, () => {
        BODY.removeChild(neko);
      });
    };
    if (btn.classList.contains("i-sun")) {
      c = () => {
        neko.classList.add("dark");
        changeTheme("dark");
        localStorage.setItem("theme", "dark");
        hideNeko();
      };
    } else {
      neko.classList.add("dark");
      c = () => {
        neko.classList.remove("dark");
        changeTheme();
        localStorage.setItem("theme", "light");
        hideNeko();
      };
    }
    transition(neko, 1, () => {
      setTimeout(c, 210);
    }, () => {
      setDisplay(neko, "block");
    });
  }
  document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click", changeThemeByBtn);
}

// themes/shokaX/source/js/_app/pjax/siteInit.ts
var siteInit = async () => {
  initVue();
  domInit();
  autoDarkmode();
  if (false) {
    visibilityListener();
  }
  themeColorListener();
  if (false) {
    document.querySelector("li.item.search > i").addEventListener("click", () => {
      if (CONFIG.search === null) {
        return;
      }
      if (!siteSearch) {
        setSiteSearch(createChild2(BODY2, "div", {
          id: "search",
          innerHTML: '<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'
        }));
      }
      null.then(({ algoliaSearch }) => {
        algoliaSearch();
      });
      document.querySelector(".search").addEventListener("click", () => {
        document.body.style.overflow = "hidden";
        transition2(siteSearch, "shrinkIn", () => {
          document.querySelector(".search-input").focus();
        });
      });
    }, { once: true, capture: true });
  } else if (false) {
    const { initializePagefindSearch } = await null;
    initializePagefindSearch("li.item.search");
  }
  if (false) {
    null.then((firework) => {
      firework.default(CONFIG.fireworks);
    });
  }
  window.addEventListener("scroll", scrollHandle, {
    passive: true
  });
  window.addEventListener("resize", resizeHandle, {
    passive: true
  });
  window.addEventListener("visibilitychange", () => {
    pagePosition();
  });
  await siteRefresh(1);
};
cloudflareInit();
if (false) {
  if (window.location.origin !== CONFIG.hostname && window.location.origin !== "http://localhost:4000") {
    window.location.href = CONFIG.hostname;
    alert("\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;\nWe have detected a fake website, and you have been redirected to the correct homepage.");
  }
}
window.addEventListener("DOMContentLoaded", siteInit, {
  passive: true
});
console.log("%c Theme.ShokaX v" + CONFIG.version + " %c https://github.com/theme-shoka-x/hexo-theme-shokaX ", "color: white; background: #e9546b; padding:5px 0;", "padding:4px;border:1px solid #e9546b;");
if ((/* @__PURE__ */ new Date()).getDate() === 5 && (/* @__PURE__ */ new Date()).getMonth() === 8) {
  console.log("\u{1F389} ShokaX \u751F\u65E5\u5FEB\u4E50\uFF01\nHappy Birthday ShokaX!");
  console.log("\u611F\u8C22\u4F60\u4EEC\u7684\u652F\u6301\u4E0E\u966A\u4F34\uFF01\nThanks for your support and company!");
}
/*! For license information please see siteInit.js.LEGAL.txt */
