!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports","jQuery"],t);else if("undefined"!=typeof exports)t(module,exports,require("jQuery"));else{var a={exports:{}};t(a,a.exports,e.jQuery),e.BootstrapModalDom=a.exports}}(this,function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=o(a),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),d=function(){function e(t){n(this,e),this.dialog=t,this.defaultConfig={modalId:"",dialogClass:"",header:"",buttons:[]},this.defaultButtonConfig={title:"",primary:!1,closeModal:!0,classes:[],action:function(e,t){return!0}}}return l(e,[{key:"convert",value:function(e,t){t=i({},this.defaultConfig,t);var a=this.tag("div").addClass("modal").attr({tabindex:"-1",role:"dialog","aria-hidden":"true"}),o=this.tag("div").addClass("modal-dialog").addClass(t.dialogClass),n=this.tag("section").addClass("modal-content");return t.modalId&&a.attr("id",t.modalId),a.append(o.append(n.append(this.assemblyHeader(t),this.assemblyBody(e),this.assemblyFooter(t)))),a}},{key:"assemblyHeader",value:function(e){var t=this.tag("header").addClass("modal-header");return t.append(this.tag("h4").addClass("modal-title").append(this.tag("span").text(e.header))),t}},{key:"assemblyBody",value:function(e){return this.tag("div").addClass("modal-body").append(e)}},{key:"assemblyFooter",value:function(e){var t=this,a=null;if(e.buttons.length>0){a=this.tag("div").addClass("modal-footer");for(var o=function(o){var n=i({},t.defaultButtonConfig,e.buttons[o]),s=t.tag("button").addClass("btn __dialog").attr("type","button").text(n.title);(n.primary||0===o)&&s.addClass("__primary"),n.classes&&s.addClass(n.classes.join(" ")),s.click(function(e){var a=t.getModal(e.target),o=n.action(a,e);o!==!1&&n.closeModal&&t.dialog.close(a)}),a.append(s)},n=0;n<e.buttons.length;n++)o(n)}return a}},{key:"tag",value:function(e){return(0,s["default"])(document.createElement(e))}},{key:"getModal",value:function(e){return(0,s["default"])(e).parents(".modal")}}]),e}();t["default"]=d,e.exports=t["default"]}),function(e,t){if("function"==typeof define&&define.amd)define(["module","exports","jQuery"],t);else if("undefined"!=typeof exports)t(module,exports,require("jQuery"));else{var a={exports:{}};t(a,a.exports,e.jQuery),e.modal=a.exports}}(this,function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(a),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},i=function(e){var t=void 0,a=!1;return e(function(){var o=(document.body||document.documentElement).style;a=void 0!==o.animation||void 0!==o.WebkitAnimation||void 0!==o.MozAnimation||void 0!==o.MsAnimation||void 0!==o.OAnimation,e(window).bind("keyup.modal",function(e){return 27===e.keyCode?t.closeByEscape():void 0}),e("body").bind("modalOpen.modal",function(){e("body").addClass(t.baseClassNames.bodyModalIsOpened)}).bind("modalAfterClose.modal",function(){0==t.getAllModals().length&&e("body").removeClass(t.baseClassNames.bodyModalIsOpened)})}),t={globalId:1,queue:[],animationEndEvent:"animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",zIndex:1e3,baseClassNames:{modal:"modal",opening:"__opening",opened:"__opened",closing:"__closing",closed:"__closed",activating:"__activating",active:"__active",bodyModalIsOpened:"__modal-opened"},defaultOptions:{closeByEscapePress:!0,closeByOverlayClick:!0,removeAfterClose:!0,appendLocation:"body",beforeOpen:function(e,t){return!0},afterOpen:function(e,t){return!0},beforeClose:function(e,t){return!0},afterClose:function(e,t){return!0}},init:function(a,o){return o=s({},t.defaultOptions,o),o.id=t.globalId++,o.$modal=e(a).data({modal:o}),o.$modalOverlay=o.$modal,o.$modalContent=o.$modal.find(".modal-dialog").data({modal:o}),o.closeByOverlayClick&&o.$modalOverlay.bind("click.modal",function(a){return a.target===this?t.closeById(e(this).data().modal.id):void 0}),o.$modal.css({display:"none"}).removeClass(t.getModificatorsCssClasses()).addClass(t.baseClassNames.closed),o.$modal},open:function(a){var o=e(a).data().modal;return o.beforeOpen(o.$modal,o),o.$modal.unbind(t.animationEndEvent).removeClass(t.getModificatorsCssClasses()).addClass(t.baseClassNames.opened).addClass(t.baseClassNames.active).css({display:"block"}),t.pushToQueue(o.$modal),o.afterOpen(o.$modal,o),setTimeout(function(){return o.$modal.trigger("modalOpen",o)},0),o.$modal},getAllModals:function(){return e("."+t.baseClassNames.modal+':not(".'+t.baseClassNames.closing+'")').toArray().map(function(t){return e(t)})},getModalById:function(e){return t.getAllModals().filter(function(t){return t.data().modal.id===e})},close:function(a){if(a)t.closeById(e(a).data().modal.id);else{var o=t.getAllModals().pop();o&&t.closeById(o.data().modal.id)}},closeAll:function(){t.getAllModals().map(function(e){return e.data().modal.id}).reverse().forEach(function(e){return t.closeById(e)})},closeById:function(o){t.getModalById(o).filter(function(e){return!e.hasClass(t.baseClassNames.closed)&&!e.hasClass(t.baseClassNames.closing)}).forEach(function(o){var n=o.data().modal,s=function(){o.trigger("modalClose",n),o.css({display:"none"}).unbind(t.animationEndEvent).removeClass(t.getModificatorsCssClasses()).removeClass(t.baseClassNames.active).addClass(t.baseClassNames.closed),t.removeFromQueue(o),e("body").trigger("modalAfterClose",n),n.afterClose(o,n),n.removeAfterClose&&o.remove()},i=o.data().modal.$modalContent,l="none"!==i.css("animationName")&&"0s"!==i.css("animationDuration")||"none"!==o.css("animationName")&&"0s"!==o.css("animationDuration");a&&l?n.beforeClose(o,n)!==!1&&(o.unbind(t.animationEndEvent).bind(t.animationEndEvent,function(){s()}).removeClass(t.getModificatorsCssClasses()).addClass(t.baseClassNames.closing),t.queue.filter(function(e,t,a){return t==a.length-2}).forEach(function(a){return e(a).addClass(t.baseClassNames.activating)})):n.beforeClose(o,n)!==!1&&s()})},closeByEscape:function(){t.queue.filter(function(t,a,o){return a==o.length-1&&e(t).data().modal.closeByEscapePress===!0}).forEach(function(a){return t.closeById(e(a).data().modal.id)})},getModificatorsCssClasses:function(){return t.baseClassNames.opening+" "+t.baseClassNames.opened+" "+t.baseClassNames.closing+" "+t.baseClassNames.closed+" "+t.baseClassNames.activating+" "},pushToQueue:function(a){t.queue.filter(function(e,t,a){return t==a.length-1}).forEach(function(a){return e(a).removeClass(t.baseClassNames.active)}),a.addClass(t.baseClassNames.active).css({zIndex:t.zIndex+t.queue.length}),t.queue.push(a[0])},removeFromQueue:function(a){a.removeClass(t.baseClassNames.active);var o=t.queue.indexOf(a[0]);-1!=o&&t.queue.splice(o,1),t.queue.filter(function(e,t,a){return t==a.length-1}).forEach(function(a){return e(a).addClass(t.baseClassNames.active).removeClass(t.baseClassNames.activating)})}}};t["default"]=i(n["default"]),e.exports=t["default"]}),function(e,t){if("function"==typeof define&&define.amd)define(["module","exports","jQuery","modal","BootstrapModalDom"],t);else if("undefined"!=typeof exports)t(module,exports,require("jQuery"),require("modal"),require("BootstrapModalDom"));else{var a={exports:{}};t(a,a.exports,e.jQuery,e.modal,e.BootstrapModalDom),e.dialog=a.exports}}(this,function(e,t,a,o,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(a),l=s(o),d=s(n),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},u=function(e,t,a){var o={};return o.modalDom=new a(o),o.defaultOptions={focusFirstInput:!0},o.init=function(a,n){n=r({},t.defaultOptions,o.defaultOptions,n);var s=o.buildDom(a,n),i=t.init(s,n);return i.appendTo(e(n.appendLocation)),i},o.open=function(a){return a=e(a),t.open(a),a.data().modal.focusFirstInput&&a.find('button[type="submit"], button[type="button"], input[type="submit"], input[type="button"], textarea, input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"]').first().focus(),a},o.close=function(e){t.close(e)},o.buildDom=function(e,t){return o.modalDom.convert(e,t)},o};t["default"]=u(i["default"],l["default"],d["default"]),e.exports=t["default"]});