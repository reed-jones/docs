(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{225:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("When "),e("strong",[t._v("zircle-ui")]),t._v(" is "),e("router-link",{attrs:{to:"/guide/getting-started.html"}},[t._v("installed")]),t._v(" you have access to "),e("code",[t._v("$zircle")]),t._v(" and the "),e("code",[t._v("actions")]),t._v("of the "),e("strong",[t._v("zircle-ui state management")]),t._v('. A few of them are "public" and a lot are internal but usefull if you want to contribute.')],1),t._m(1),t._m(2),t._m(3),t._m(4),e("p",[t._v("Use setView in the mounted hook. Chosse the name of your defined views. It is case insensitive.")]),t._m(5),e("ul",[e("li",[e("strong",[t._v("See")]),t._v(":\n"),e("ul",[e("li",[e("router-link",{attrs:{to:"/guide/getting-started.html#quick-start"}},[e("strong",[t._v("Getting started: Quick start")])])],1),e("li",[e("router-link",{attrs:{to:"/tutorial/"}},[e("strong",[t._v("Tutorial")])])],1)])])]),t._m(6),t._m(7),t._m(8),t._m(9),e("table",[t._m(10),e("tbody",[t._m(11),e("tr",[t._m(12),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("theme: 'black', mode: 'dark'")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("You can change the general look and feel of your application modifying "),e("strong",[t._v("theme")]),t._v(" and "),e("strong",[t._v("color")]),t._v(". The complete list of themes and color included in zircle-ui can be found "),e("router-link",{attrs:{to:"/guide/themes-styles-and-colors.html"}},[t._v("here")])],1)]),e("tr",[t._m(13),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("In case your application uses "),e("strong",[t._v("vue-router")]),t._v(" just pass the created router here. For more information about using "),e("strong",[t._v("vue-router")]),t._v(" with zircle "),e("router-link",{attrs:{to:"/guide/using-vue-router.html"}},[t._v("here")])],1)]),e("tr",[t._m(14),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("Debug is disabled by default. If you want to see and config a detailed zircle's log "),e("router-link",{attrs:{to:"/api/internal-api.html#debug-api"}},[t._v("here")])],1)])])]),t._m(15),e("ul",[e("li",[e("strong",[t._v("See")]),t._v(":\n"),e("ul",[e("li",[e("router-link",{attrs:{to:"/api/z-canvas.html"}},[e("strong",[t._v("z-canvas")])])],1),e("li",[e("router-link",{attrs:{to:"/tutorial/settings-view.html"}},[e("strong",[t._v("Tutorial: settings view")])])],1)])])]),t._m(16),e("p",[t._v("Returns the current app theme.")]),e("ul",[e("li",[e("strong",[t._v("See")]),e("ul",[e("li",[e("router-link",{attrs:{to:"/guide/themes-styles-and-colors.html#changing-up-themes-and-modes"}},[e("strong",[t._v("Themes and styles")])])],1),e("li",[e("router-link",{attrs:{to:"/tutorial/settings-view.html"}},[e("strong",[t._v("Tutorial: settings view")])])],1)])])]),t._m(17),e("p",[t._v("Returns the current app theme mode.")]),e("ul",[e("li",[e("strong",[t._v("See")]),e("ul",[e("li",[e("router-link",{attrs:{to:"/guide/themes-styles-and-colors.html#changing-up-themes-and-modes"}},[e("strong",[t._v("Themes and styles")])])],1)])])]),t._m(18),t._m(19),t._m(20),t._m(21),e("ul",[e("li",[e("strong",[t._v("See")]),e("ul",[e("li",[e("router-link",{attrs:{to:"/guide/getting-started.html#quick-start"}},[e("strong",[t._v("Getting started: Quick start")])])],1),e("li",[e("router-link",{attrs:{to:"/tutorial/device-view.html"}},[e("strong",[t._v("Tutorial: device view")])])],1)])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"public-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Public API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can call three action to control "),s("strong",[this._v("zircle-ui")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"setview-viewname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setview-viewname","aria-hidden":"true"}},[this._v("#")]),this._v(" setView(viewName)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[this._v("Params:")])]),s("ul",[s("li",[this._v("{string} viewName")])])]),s("li",[s("p",[s("strong",[this._v("Usage:")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You need to use "),s("code",[this._v("setView")]),this._v(" to set the initial view name of your application. If you forget to set the initial view, no view will be shown.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("mounted")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$zircle"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("setView")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'home'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"config-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-definition","aria-hidden":"true"}},[this._v("#")]),this._v(" config([definition])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[this._v("Params:")])]),s("ul",[s("li",[this._v("{Object} [definition]")])])]),s("li",[s("p",[s("strong",[this._v("Usage:")]),s("code",[this._v("config")]),this._v(" is optional. Just in case you want to modify the default values of the appiclation or in case you are using router.")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("mounted")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $zircle"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("config")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mode"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token string"}},[t._v("'full'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      style"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        theme"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'black'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        mode"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'dark'")]),t._v("\n      "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      router"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" router"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      debug"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("Options")]),this._v(":")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[this._v("Option")]),s("th",{staticStyle:{"text-align":"left"}},[this._v("Type")]),s("th",{staticStyle:{"text-align":"left"}},[this._v("Default value")]),s("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("mode")])]),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("full")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("The default value is "),e("strong",[t._v("'full'")]),t._v(" to use Zircle in a full mode. In case you want to include Zircle in other application use "),e("strong",[t._v("'mixed'")]),t._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("style")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("router")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("debug")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),e("p",[t._v("With "),e("strong",[t._v("'mixed'")]),t._v(" mode you need to define the size of the "),e("code",[t._v("z-canvas")]),t._v(" (v.g "),e("code",[t._v('style="width: 40%; height: 500px;"')]),t._v("). zircle-ui will adapt its views and components taking into account the size of the "),e("code",[t._v("z-canvas")]),t._v(", not the "),e("code",[t._v("browser viewport")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gettheme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gettheme","aria-hidden":"true"}},[this._v("#")]),this._v(" getTheme()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getthememode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getthememode","aria-hidden":"true"}},[this._v("#")]),this._v(" getThemeMode()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getparams-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getparams-definition","aria-hidden":"true"}},[this._v("#")]),this._v(" getParams([definition])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[this._v("Params:")])]),s("ul",[s("li",[this._v("{Object} [definition]")])])]),s("li",[s("p",[s("strong",[this._v("Usage:")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You need to use "),s("code",[this._v("getParams")]),this._v(" to retrieve the params that were passed in the property "),s("code",[this._v("toView")]),this._v(" of a "),s("code",[this._v("z-spot")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  computed"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token function"}},[t._v("retrieveParams")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$zircle"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("getParams")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" undefined"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$zircle"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("getParams")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fruit\n      "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="public-api.md";s.default=n.exports}}]);