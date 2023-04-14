"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function eventDomLoaded(){}function eventWindowLoad(){var e,o,i,r,a;(e=document.querySelector(".headerMain"))&&(o=document.querySelector(".section-catalogCategory-filter"),i=document.querySelector(".section-catalogCategory-header"),r=e.querySelector(".barsShowMainMenu"),a=window.innerHeight,ScrollTrigger.create({trigger:document.body,start:"top center",onUpdate:function(t){-1==t.direction?(e.classList.add("show"),e.classList.remove("hide"),window.scrollY<=0&&(e.classList.remove("show"),i)&&i.classList.remove("hide"),i&&i.classList.remove("hide")):(0<window.scrollY&&e.classList.add("show"),window.scrollY>a/2&&(e.classList.remove("show"),e.classList.add("hide"),r.classList.remove("active")),o&&o.classList.remove("active"),i&&i.classList.add("hide"))}})),vld.onload(),initSlick.check(),cookieAlert.check(),animationScroll()}function eventDocClick(t){var e=t.target;for(t.target;e&&e!=this;){if(e.classList.contains("bars")){e.classList.toggle("active");break}if(e.classList.contains("section-catalogCategory-filterIco")){e.parentNode.querySelector(".section-catalogCategory-filter").classList.toggle("active");break}if(e.classList.contains("barsShowMainMenu")||e.classList.contains("btn-catalog")){popupCustom.show(e,"popup-menuMain");break}if(e.classList.contains("headerMain-showCart")){popupCustom.show(e,"popup-cart");break}if(e.classList.contains("popup-close")){popupCustom.close(e);break}if(e.classList.contains("popup-inner"))break;if(e.classList.contains("popup")&&popupCustom.close(document.querySelector(".popup_active")),e.classList.contains("btn-getcoop")){t.preventDefault(),showModalCoopNotification(t,e);break}if((e.classList.contains("quantity-pnl-less")||e.classList.contains("quantity-pnl-more"))&&quantityPrice.init(e),e.classList.contains("btnDeleteNewAddressForm")){cartNewAddress.delete(t);break}if(e.classList.contains("cookieAlert-close")){cookieAlert.close();break}if(e.classList.contains("btn-agreeUseCookie")){cookieAlert.agree(t);break}e=e.parentNode}}document.addEventListener("DOMContentLoaded",eventDomLoaded),document.addEventListener("click",eventDocClick,!1),window.addEventListener("load",eventWindowLoad,!1),gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);var loadJS=function(t,e,o){var i=document.createElement("script");i.src=t,i.onload=e,i.onreadystatechange=e,o.appendChild(i)},tooltip={init:function(t){this.close(),t.classList.toggle("active"),t.classList.contains("active")?document.body.setAttribute("data-tooltipactive","true"):document.body.removeAttribute("data-tooltipactive")},close:function(){var t;(t=document.body.hasAttribute("data-tooltipactive"))&&((t=document.body).removeAttribute("data-tooltipactive"),(t=t.querySelectorAll("[data-tooltip].active")).length)&&t.forEach(function(t){t.classList.remove("active")})}},vld={init:function(t){document.addEventListener("input",function(t){t.target.classList.contains("vld-field")&&(t.target.classList.add("vld-field-activated"),vld.checkForm(t.target.closest(".vld-form"),t.target))},!1),document.addEventListener("change",function(t){t.target.classList.contains("vld-select")?(t.target.classList.add("vld-field-activated"),vld.checkForm(t.target.closest(".vld-form"),t.target)):vld.checkForm(t.target.closest(".vld-form"))},!1)},onload:function(){var t=document.getElementsByClassName("vld-form");if(t.length)for(var e=0,o=t.length;e<o;e++)t[e].getAttribute("data-validate-onload")&&"false"==t[e].getAttribute("data-validate-onload")||!function(t){setTimeout(function(){window.vld.checkForm(t)},600)}(t[e])},checkForm:function(t,e){if(t){t="string"==typeof t&&document.querySelector(t)?document.querySelector(t):t;var o=t.getElementsByClassName("vld-field");if(o.length)for(var i=0,r=o.length;i<r;i++)this.checkField(o[i]),i==r-1&&setTimeout(function(){vld.isValidForm(t)},100)}},checkField:function(t){var e,o,i=!1;if(!(t.parentNode.clientHeight<=0))return"hidden"==t.type||"input"!=t.tagName.toLowerCase()&&"textarea"!=t.tagName.toLowerCase()?"select"==t.tagName.toLowerCase()&&t.getAttribute("data-required")&&"true"==t.getAttribute("data-required")&&(i=t.options[t.selectedIndex]&&t.options[t.selectedIndex].getAttribute("value")&&"0"!==t.options[t.selectedIndex].getAttribute("value")?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1)):t.getAttribute("data-required")&&"true"==t.getAttribute("data-required")&&(t.value||(t.value=""),e=t.value,i=t.getAttribute("pattern")?(o=new RegExp(t.getAttribute("pattern")),t.getAttribute("data-uppercase")&&"true"==t.getAttribute("data-uppercase")&&(e=e.toUpperCase()),o.test(e)?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1)):"checkbox"==t.type?t.checked?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1):e?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1)),i;t.classList.remove("vld-field-invalid")},isValidForm:function(t){var e=!0,o=t.querySelector(t.getAttribute("data-btnLinked"));if(o){for(var i=t.querySelectorAll(".vld-field[data-required='true']"),r=0,a=0,c=0,s=i.length;c<s;c++)i[c].closest(".targetChecked")&&i[c].closest(".targetChecked").clientHeight<24||"disabled"==i[c].getAttribute("disabled")?a++:(!i[c].closest(".targetChecked")||i[c].closest(".targetChecked")&&24<=i[c].closest(".targetChecked").clientHeight)&&(r++,i[c].classList.contains("vld-field-invalid"))&&(e=!1,o.classList.add("disabled")),a+r==s&&e&&o.classList.remove("disabled");return e}},statusField:function(t,e){"valid"==e?(t.classList.add("vld-field-valid"),t.classList.remove("vld-field-invalid")):(t.classList.remove("vld-field-valid"),t.classList.add("vld-field-invalid"))}},initSlick=(vld.init(),{check:function(){document.getElementsByClassName("cards-slick")[0]&&(null==_typeof($.fn.Slick)?loadJS("js/slick1.8.1.min.js",initSlick.startProdGallery,document.body):960<=window.innerWidth&&initSlick.startProdGallery()),document.getElementsByClassName("cardsCat-slick")[0]&&(null==_typeof($.fn.Slick)?loadJS("js/slick1.8.1.min.js",initSlick.startCatGallery,document.body):960<=window.innerWidth&&initSlick.startCatGallery())},startProdGallery:function(){$(".cards-slick").slick(initSlick.slickProdParams)},startCatGallery:function(){$(".cardsCat-slick").slick(initSlick.slickCatParams)},slickProdParams:{dots:!1,infinite:!1,speed:500,slidesToShow:2,slidesToScroll:1,slide:"div",arrows:!0,autoplay:!1,mobileFirst:!0,prevArrow:"<div type='button' class='slick-prev slick-arrow pull-left'><svg class='icon icon-arrowL'><use xlink:href='img/sprite.svg#arrowL'></use></svg></div>",nextArrow:"<div type='button' class='slick-next slick-arrow pull-right'><svg class='icon icon-arrowR'><use xlink:href='img/sprite.svg#arrowL'></use></svg></div>",appendArrows:".cards-slickArrowsContainer",responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:959,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:300,settings:"unslick"}]},slickCatParams:{dots:!1,infinite:!1,speed:500,slidesToShow:2,slidesToScroll:1,slide:"div",arrows:!0,autoplay:!1,mobileFirst:!0,prevArrow:"<div type='button' class='slick-prev slick-arrow pull-left'><svg class='icon icon-arrowL'><use xlink:href='img/sprite.svg#arrowL'></use></svg></div>",nextArrow:"<div type='button' class='slick-next slick-arrow pull-right'><svg class='icon icon-arrowR'><use xlink:href='img/sprite.svg#arrowL'></use></svg></div>",appendArrows:".cardsCat-slickArrowsContainer",responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:959,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:300,settings:"unslick"}]}}),popupCustom={scrollPosition:void 0,show:function(t,e){var o,i,r;(e=document.querySelector("."+e))&&(t.classList.toggle("popupShown"),t.classList.contains("popupShown"))&&(r=document.documentElement,o=document.querySelector(".headerMain .container-fluid-inner"),this.scrollPosition=window.pageYOffset,r.style.top=-this.scrollPosition+"px",i=window.innerWidth-r.clientWidth,r.classList.add("popupActive"),i&&(r.style.marginRight=i+"px",o.style.marginRight=i+"px"),(r=gsap.timeline({})).to(e,{display:"block"}),r.to(e,{duration:.3,opacity:1},"<.1"),r.to(e.querySelector(".popup-inner"),{marginRight:"0"},"<"),e.classList.add("popup_active"),t.classList.remove("popupShown"))},close:function(t){var e=this,o=document.documentElement,i=document.querySelector(".headerMain .container-fluid-inner"),r=t.closest(".popup"),t=r.querySelector(".popup-inner"),a=gsap.timeline({});a.to(t,{marginRight:-1*t.clientWidth+"px"}),a.to(r,{opacity:0,duration:.4,onComplete:function(){r.removeAttribute("style"),r.classList.remove("popup_active"),o.classList.remove("popupActive"),window.scrollTo(0,e.scrollPosition),o.style.top="",o.style.marginRight="",i.style.marginRight=""}},"-=50%")}},quantityPrice={rub:"₽",init:function(t){var e=t.closest(".quantity-pnl"),o=e.querySelector(".quantity-pnl-result-input"),i="";e.parentNode.parentNode.querySelector(".cartList-item-priceVal")?i=e.parentNode.parentNode.querySelector(".cartList-item-priceVal"):e.parentNode.parentNode.querySelector(".productPage-price")&&(i=e.parentNode.parentNode.querySelector(".productPage-price")),t.classList.contains("quantity-pnl-less")?this._calcUnit("-",o,i):t.classList.contains("quantity-pnl-more")&&this._calcUnit("+",o,i)},_calcUnit:function(t,e,o){var i=e.value.match(/\D+/),i=i.length?i[0]:"",r=parseInt(e.value),a=+e.dataset.stepSize,c=+e.dataset.stepPrice,r=function(t,e,o){var i=-1;switch(e){case"+":i=t+o;break;case"-":i=t-o}return i}(r,t,a);e.value=0<r?r+i:a+i,o&&this._calcPrice(o,a,c,parseInt(e.value)),o&&o.classList.contains("cartList-item-priceVal")&&this._calcItogCart()},_calcPrice:function(t,e,o,i){t.textContent=parseInt(i/e,10)*o+this.rub},_calcItogCart:function(){var t,e,o=document.querySelector(".popup-cart");o&&(t=o.querySelector(".popup-cart-itog-val"),(o=o.querySelectorAll(".cartList-item-priceVal")).length)&&(e=0,o.forEach(function(t){e+=parseInt(t.textContent,10)}),e)&&(t.textContent=e+this.rub)}};function showModalCoopNotification(t,e){var o=document.getElementById("modalCoop");o&&(e=e.closest(".form-cooperation").querySelector(".form-item-username").value)&&(o.querySelector(".nameUser").textContent=e+",")}var cartNewAddress={bntInit:void 0,placeToContainer:void 0,create:function(t){var e=document.getElementById("formNewAddress_tpl");this.bntInit=t,this.placeToContainer=document.getElementById("placeFormForNewAddress"),e&&this.placeToContainer&&(t=e.firstElementChild.cloneNode(!0),this.bntInit.style.visibility="hidden",this.placeToContainer.appendChild(t))},send:function(){},delete:function(t){t.preventDefault(),this.bntInit.removeAttribute("style"),this.placeToContainer.innerHTML=""}},cookie={set:function(t,e,o){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3),o=i.toGMTString(),document.cookie=t+"="+e+";expires="+o+";path=/"},get:function(t){var e,t=t+"=",o=document.cookie.indexOf(t);return-1==o?null:(-1==(e=document.cookie.indexOf(";",o+t.length))&&(e=document.cookie.length),unescape(document.cookie.substring(o+t.length,e)))},delete:function(t){getCookie(t)&&(document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/")}},cookieAlert={str:'<div class="cookieAlert"> \t<p>Нажимая &laquo;Принять&raquo;, вы&nbsp;соглашаетесь на&nbsp;сохранение файлов cookie на&nbsp;вашем устройстве для улучшения навигации по&nbsp;сайту, анализа использования сайта и&nbsp;помощи в&nbsp;наших маркетинговых усилиях.</p>\t<button class="btn btn-yellow btn-agreeUseCookie"><span class="btn-txt">Принять</span></button>\t<div class="cookieAlert-close"><svg class="icon icon-close"><use xlink:href="img/sprite.svg#close"></use></svg></div></div>',cookieAlertPopup:void 0,check:function(){var t;cookie.get("cookieAgreeToUse")||(document.body.insertAdjacentHTML("beforeend",this.str),this.cookieAlertPopup=document.querySelector(".cookieAlert"),t=this,setTimeout(function(){t.cookieAlertPopup.classList.add("active")},3e3))},close:function(){this.cookieAlertPopup.classList.remove("active")},agree:function(t){t.preventDefault(),this.cookieAlertPopup.parentNode.removeChild(this.cookieAlertPopup),cookie.set("cookieAgreeToUse","1",365)}};function animationScroll(){var t;document.querySelector(".cardCat-inner")&&gsap.utils.toArray(".cardCat-inner").forEach(function(t){gsap.timeline({scrollTrigger:{trigger:t,start:"10% bottom"}}).fromTo(t.querySelector("img"),{opacity:0,y:70},{duration:2,opacity:1,y:0}).fromTo(t.querySelector(".cardCat-title"),{opacity:0,y:100},{duration:1,opacity:1,y:0},"<1")}),document.querySelector(".card-inner")&&gsap.utils.toArray(".card-inner").forEach(function(t){gsap.timeline({scrollTrigger:{trigger:t,start:"center bottom"}}).fromTo(t.querySelector("img"),{opacity:0,y:70},{duration:2,opacity:1,y:0}).fromTo(t.querySelector(".card-title"),{opacity:0,scale:.9},{duration:1,opacity:1,scale:1},"<1").fromTo(t.querySelector(".card-cart"),{opacity:0,x:15},{duration:1,opacity:1,x:0},"<0.3").fromTo(t.querySelector(".quantity-pnl"),{opacity:0,x:-5},{duration:1,opacity:1,x:0},"<0.3")}),(t=document.querySelector(".section-new"))&&(gsap.to(t.querySelector("img"),{opacity:0,x:-70}),gsap.to(t.querySelector(".tag"),{opacity:0,y:70}),gsap.to(t.querySelector("h1"),{opacity:0,y:70}),gsap.to(t.querySelector(".intro"),{opacity:0,y:70}),gsap.to(t.querySelector(".btn"),{opacity:0,y:70}),gsap.timeline({scrollTrigger:{trigger:t,start:"10% bottom"}}).to(t.querySelector("img"),{duration:2,opacity:1,x:0}).to(t.querySelector(".tag"),{duration:2.5,opacity:1,y:0},"<").to(t.querySelector("h1"),{duration:1.5,opacity:1,y:0},"<+1").to(t.querySelector(".intro"),{duration:1.5,opacity:1,y:0},"<+.5").to(t.querySelector(".btn"),{duration:1.5,opacity:1,y:0},"<+0.15")),(t=document.querySelector(".section-production"))&&(gsap.to(t.querySelector("img"),{opacity:0,x:-70}),gsap.to(t.querySelector(".pretitle"),{opacity:0,y:70}),gsap.to(t.querySelector(".h1"),{opacity:0,y:70}),gsap.to(t.querySelector(".btn"),{opacity:0,y:70}),gsap.timeline({scrollTrigger:{trigger:t,start:"10% bottom"}}).to(t.querySelector("img"),{duration:2,opacity:1,x:0}).to(t.querySelector(".pretitle"),{duration:2.5,opacity:1,y:0},"<").to(t.querySelector(".h1"),{duration:1.5,opacity:1,y:0},"<+1").to(t.querySelector(".btn"),{duration:2,opacity:1,y:0},"<+0.15")),(t=document.querySelector(".section-cooperation"))&&(gsap.to(t.querySelector("img"),{opacity:0,x:70}),gsap.to(t.querySelector("h1"),{opacity:0,y:70}),gsap.to(t.querySelector(".intro"),{opacity:0,y:70}),gsap.to(t.querySelector(".btn"),{opacity:0,y:70}),gsap.timeline({scrollTrigger:{trigger:t,start:"10% bottom"}}).to(t.querySelector("img"),{duration:2,opacity:1,x:0}).to(t.querySelector("h1"),{duration:1.5,opacity:1,y:0},"<+1").to(t.querySelector(".intro"),{duration:2.5,opacity:1,y:0},"<").to(t.querySelector(".btn"),{duration:2,opacity:1,y:0},"<+0.15")),document.querySelector(".section-tiles-oneTile")&&gsap.utils.toArray(".section-tiles-oneTile").forEach(function(t,e){gsap.to(t,{y:70*e}),gsap.to(t.querySelector(".section-tiles-oneTile-title"),{y:70}),gsap.to(t.querySelector(".section-tiles-oneTile-intro"),{y:70}),gsap.to(t.querySelector(".section-tiles-oneTile-buy"),{y:70});gsap.timeline({defaults:{y:0,opacity:1},scrollTrigger:{trigger:t,start:"center bottom"}}).to(t,{duration:1,y:0}).to(t.querySelector(".section-tiles-oneTile-title"),{duration:2.5},"<").to(t.querySelector(".section-tiles-oneTile-intro"),{duration:1.5},"<+1").to(t.querySelector(".section-tiles-oneTile-buy"),{duration:2},"<+0.15").to(t.querySelector(".section-tiles-oneTile-img"),{duration:1,ease:"linear"},"<+0.3")}),(t=document.querySelector(".section-blockquote"))&&(gsap.to(t.querySelector("blockquote"),{opacity:0,lineHeight:2}),gsap.to(t.querySelector("cite"),{opacity:0,y:70}),gsap.timeline({scrollTrigger:{trigger:t,start:"center bottom"}}).to(t.querySelector("blockquote"),{duration:1,opacity:1,lineHeight:1.2}).to(t.querySelector("cite"),{duration:2,opacity:1,y:0},"<")),(t=document.querySelector(".section-subscription-row"))&&(gsap.to(t.querySelector(".col-12:first-child"),{opacity:0,x:-150}),gsap.to(t.querySelector(".col-12:last-child"),{opacity:0,x:150}),gsap.timeline({defaults:{x:0,opacity:1},scrollTrigger:{trigger:t,start:"center bottom"}}).to(t.querySelector(".col-12:first-child"),{duration:.5}).to(t.querySelector(".col-12:last-child"),{duration:.5},"<")),(t=document.querySelector(".section-productPage"))&&(gsap.to(t.querySelector("img"),{opacity:0,y:35}),gsap.to(t.querySelector(".productPage-title"),{opacity:0,y:35}),gsap.to(t.querySelector(".productPage-features"),{opacity:0,y:35}),gsap.to(t.querySelector(".productPage-actions"),{opacity:0,y:35}),gsap.to(t.querySelector(".productPage-info"),{opacity:0}),gsap.timeline({scrollTrigger:{trigger:t,start:"top bottom"}}).to(t.querySelector("img"),{duration:2,opacity:1,y:0}).to(t.querySelector(".productPage-title"),{duration:1.5,opacity:1,y:0},"<.5").to(t.querySelector(".productPage-features"),{duration:1.5,opacity:1,y:0},"<.2").to(t.querySelector(".productPage-actions"),{duration:1.5,opacity:1,y:0},"<.2").to(t.querySelector(".productPage-info"),{duration:.5,opacity:1},"<+.9")),(t=document.querySelector(".section-aboutPage-cooperation"))&&(gsap.to(t.querySelector("h1"),{opacity:0,y:70}),gsap.to(t.querySelector(".h4"),{opacity:0,y:70}),gsap.to(t.querySelector(".btn"),{opacity:0,y:70}),gsap.timeline({scrollTrigger:{trigger:t,start:"10% bottom"}}).to(t.querySelector("h1"),{duration:1,opacity:1,y:0}).to(t.querySelector(".h4"),{duration:2,opacity:1,y:0},"<").to(t.querySelector(".btn"),{duration:1.5,opacity:1,y:0},"<+0.15")),document.querySelector(".tiles")&&gsap.utils.toArray(".tiles").forEach(function(t){var e=t.classList.contains("tiles-reverse")?-1:1;gsap.timeline({scrollTrigger:{trigger:t,start:"10% bottom"}}).fromTo(t.querySelector(".tiles-colTxt"),{opacity:0,y:100},{duration:2,opacity:1,y:0}).fromTo(t.querySelector(".tiles-colImg"),{opacity:0,x:70*e},{duration:1,opacity:1,x:0},"<.5")}),document.querySelector(".stataData-item")&&gsap.utils.toArray(".stataData-item").forEach(function(t){gsap.timeline({scrollTrigger:{trigger:t,start:"80% bottom"}}).fromTo(t.querySelector(".stataData-item-digit"),{opacity:0},{duration:2,opacity:1}).fromTo(t.querySelector(".stataData-item-digit"),{y:-35,scale:.85},{duration:2,y:0,scale:1},"<").fromTo(t.querySelector(".stataData-item-desc"),{opacity:0,y:70},{duration:2,opacity:1,y:0},"<")})}
