import {
  define_shokax_CONFIG_default,
  init_define_shokax_CONFIG
} from "./chunk-ODNR5DMV.js";

// themes/shokaX/source/js/_app/globals/globalVars.ts
init_define_shokax_CONFIG();
var CONFIG = define_shokax_CONFIG_default;
var statics = CONFIG.statics.indexOf("//") > 0 ? CONFIG.statics : CONFIG.root;
var scrollAction = { x: 0, y: 0 };
var diffY = 0;
var originTitle;
var BODY = document.getElementsByTagName("body")[0];
var HTML = document.documentElement;
var Container = document.getElementById("container");
var loadCat = document.getElementById("loading");
var siteNav = document.getElementById("nav");
var siteHeader = document.getElementById("header");
var menuToggle = siteNav.querySelector(".toggle");
var quickBtn = document.getElementById("quick");
var sideBar = document.getElementById("sidebar");
var siteBrand = document.getElementById("brand");
var toolBtn = document.getElementById("tool");
var backToTop;
var goToComment;
var showContents;
var siteSearch = document.getElementById("search");
var siteNavHeight;
var headerHightInner;
var headerHight;
var oWinHeight = window.innerHeight;
var oWinWidth = window.innerWidth;
var LOCAL_HASH = 0;
var LOCAL_URL = window.location.href;
function setSiteNavHeight(value) {
  siteNavHeight = value;
}
function setHeaderHightInner(value) {
  headerHightInner = value;
}
function setHeaderHight(value) {
  headerHight = value;
}
function setOWinHeight(value) {
  oWinHeight = value;
}
function setOWinWidth(value) {
  oWinWidth = value;
}
function setDiffY(value) {
  diffY = value;
}
function setLocalHash(value) {
  LOCAL_HASH = value;
}
function setLocalUrl(value) {
  LOCAL_URL = value;
}
function setOriginTitle(value) {
  originTitle = value;
}
function setBackToTop(value) {
  backToTop = value;
}
function setGoToComment(value) {
  goToComment = value;
}
function setShowContents(value) {
  showContents = value;
}
function setToolBtn(value) {
  toolBtn = value;
}

export {
  CONFIG,
  scrollAction,
  diffY,
  BODY,
  HTML,
  Container,
  loadCat,
  siteNav,
  siteHeader,
  menuToggle,
  quickBtn,
  sideBar,
  siteBrand,
  toolBtn,
  backToTop,
  goToComment,
  showContents,
  siteNavHeight,
  headerHightInner,
  headerHight,
  oWinWidth,
  LOCAL_HASH,
  LOCAL_URL,
  setSiteNavHeight,
  setHeaderHightInner,
  setHeaderHight,
  setOWinHeight,
  setOWinWidth,
  setDiffY,
  setLocalHash,
  setLocalUrl,
  setOriginTitle,
  setBackToTop,
  setGoToComment,
  setShowContents,
  setToolBtn
};
