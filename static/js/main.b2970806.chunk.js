(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],Array(23).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(16),i=a.n(r),o=(a(23),a(4)),l=a(2),u=a(8),d=(a(24),a(25),a.p+"static/media/logout.f67f251a.svg"),p=a.p+"static/media/logoutBlack.bde199c2.svg";var j=function(e){var t=e.activePage,a=e.setMainActive,n=e.setSavedNewsActive,c=e.logged,r=e.burgerOpened,i=e.openPopupLogin,o=e.handleLogout;return Object(s.jsxs)("nav",{className:"main"===t?r?"nav nav_opened":"nav":r?"nav nav_opened nav_whiteStrip":"nav",children:[Object(s.jsx)(u.b,{className:"main"===t?"nav__link nav__link_active nav__link_active_white":"nav__link nav__link_color_black",to:"/",onClick:a,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),c&&Object(s.jsx)(u.b,{className:"main"===t?"nav__link nav__link_color_gray":"nav__link nav__link_color_black nav__link_active nav__link_active_black",to:"/saved-news",onClick:n,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),c?Object(s.jsxs)("button",{className:"main"===t?"nav__logout":"nav__logout nav__logout_color_black",type:"button",onClick:o,children:["\u0413\u0440\u0435\u0442\u0430",Object(s.jsx)("img",{className:"nav__logoutIcon",src:"main"===t?d:p,alt:"Logout Icon"})]}):Object(s.jsx)("button",{className:"nav__auth",type:"button",onClick:i,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})};var _=function(e){var t=e.burgerOpened,a=e.toggleBurger,n=e.activePage,c=e.setMainActive,r=e.setSavedNewsActive,i=e.handleLogout,o=e.logged,l=e.openPopupLogin;return Object(s.jsxs)("header",{className:"main"===n?t?"header header_darkStrip":"header":"header header_whiteStrip",children:[Object(s.jsx)(u.b,{className:"main"===n?"header__logo":"header__logo header__logo_color_black",to:"/",onClick:c,children:"NewsExplorer"}),Object(s.jsx)("button",{className:"main"===n?t?"header__burgerMenu header__burgerMenu_opened_white":"header__burgerMenu":t?"header__burgerMenu header__burgerMenu_opened_black header__burgerMenu_color_black":"header__burgerMenu header__burgerMenu_color_black",type:"button",onClick:a}),Object(s.jsx)(j,{activePage:n,setMainActive:c,setSavedNewsActive:r,logged:o,burgerOpened:t,openPopupLogin:l,handleLogout:i})]})};a(31),a(32);var b=function(){return Object(s.jsxs)("section",{className:"searchForm page__searchForm",children:[Object(s.jsxs)("div",{className:"searchForm__container",children:[Object(s.jsx)("h1",{className:"searchForm__title",children:"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"}),Object(s.jsx)("p",{className:"searchForm__paragraph",children:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."})]}),Object(s.jsxs)("div",{className:"searchForm__field",children:[Object(s.jsx)("input",{type:"text",className:"searchForm__input",id:"search-input",name:"search",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(s.jsx)("button",{className:"searchForm__button",type:"submit",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})]})};a(33);var m=function(){return Object(s.jsxs)("section",{className:"preloader",children:[Object(s.jsx)("i",{className:"preloader__rotary"}),Object(s.jsx)("p",{className:"preloader__text",children:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})]})};a(34);var h=function(e){var t=e.card,a=e.logged,n=e.activePage;return Object(s.jsxs)("div",{className:"newsCard",children:[Object(s.jsxs)("a",{className:"newsCard__link",href:t.source.url,target:"_blank",rel:"noopener noreferrer",children:[Object(s.jsx)("img",{className:"newsCard__image",src:t.urlToImage,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438."}),Object(s.jsxs)("div",{className:"newsCard__container",children:[Object(s.jsx)("p",{className:"newsCard__date",children:t.publishedAt}),Object(s.jsxs)("div",{className:"newsCard__textbox",children:[Object(s.jsx)("p",{className:"newsCard__title",children:t.title}),Object(s.jsx)("p",{className:"newsCard__description",children:t.description})]}),Object(s.jsx)("p",{className:"newsCard__source",children:t.source.name})]})]}),"main"===n?Object(s.jsx)("button",{className:a?"newsCard__save":"newsCard__save newsCard__save_nologged",type:"button"}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"newsCard__delete",type:"button"}),Object(s.jsx)("p",{className:"newsCard__keyword",children:t.keyword})]})]})},g=(a(35),a.p+"static/media/notFoundIcon.b9740c3b.svg");var O=function(e){var t=e.activePage,a=e.searchResults,n=e.logged,c=e.savedNews;return console.log(c),Object(s.jsx)(s.Fragment,{children:"main"===t?Object(s.jsx)("section",{className:"newsCardList",children:a.length>0?Object(s.jsxs)("div",{className:"newsCardList__container",children:[Object(s.jsx)("p",{className:"newsCardList__title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(s.jsx)("div",{className:"newsCardList__cards",children:a.map((function(e,a){return Object(s.jsx)(h,{card:e,logged:n,activePage:t},a)}))}),Object(s.jsx)("button",{type:"button",className:"newsCardList__showmore",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{src:g,alt:"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432",className:"newsCardList__noCards"}),Object(s.jsx)("p",{className:"newsCardList__noTitle",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(s.jsx)("p",{className:"newsCardList__noText",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}):Object(s.jsx)("section",{className:"newsCardList",children:c.length>0?Object(s.jsx)("div",{className:"newsCardList__container",children:Object(s.jsx)("div",{className:"newsCardList__cards",children:c.map((function(e,a){return Object(s.jsx)(h,{card:e,activePage:t},a)}))})}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{src:g,alt:"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432",className:"newsCardList__noCards"}),Object(s.jsx)("p",{className:"newsCardList__noTitle",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(s.jsx)("p",{className:"newsCardList__noText",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})})})},v=(a(36),a.p+"static/media/avatar.20b5c6c3.jpg");var x=function(){return Object(s.jsxs)("section",{className:"about",children:[Object(s.jsx)("img",{src:v,alt:"Avatar",className:"about__ava"}),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("p",{className:"about__title",children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"}),Object(s.jsx)("p",{className:"about__intro",children:"\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."}),Object(s.jsx)("p",{className:"about__intro",children:"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b \u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438 \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c."})]})]})};var N=function(e){var t=e.activePage,a=e.searchResults,n=e.logged;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{}),Object(s.jsx)(m,{}),Object(s.jsx)(O,{logged:n,searchResults:a,activePage:t}),Object(s.jsx)(x,{})]})};a(37),a(38);var f=function(){return Object(s.jsxs)("section",{className:"savedNewsHeader",children:[Object(s.jsx)("p",{className:"savedNewsHeader__title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(s.jsx)("p",{className:"savedNewsHeader__articles",children:"\u0413\u0440\u0435\u0442\u0430, \u0443 \u0432\u0430\u0441 5 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"}),Object(s.jsxs)("p",{className:"savedNewsHeader__keywords",children:["\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c: ",Object(s.jsx)("span",{className:"savedNewsHeader__keyword",children:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430"}),",",Object(s.jsx)("span",{className:"savedNewsHeader__keyword",children:"\u0422\u0430\u0439\u0433\u0430"})," \u0438",Object(s.jsx)("span",{className:"savedNewsHeader__keyword",children:"2-\u043c \u0434\u0440\u0443\u0433\u0438\u043c"})]})]})};var w=function(e){var t=e.setSavedNewsActive,a=e.savedNews;return c.a.useEffect((function(){t()})),Object(s.jsx)(s.Fragment,{children:a.length>0?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(f,{savedNews:a}),Object(s.jsx)(O,{savedNews:a})]}):Object(s.jsx)("p",{children:"\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"})})},k=(a(39),a.p+"static/media/card1.74e7543e.png"),C=a.p+"static/media/card2.e4eb1b62.png",y=a.p+"static/media/card3.c0c3453c.png",L=(a(40),a.p+"static/media/github.c2993f78.svg"),S=a.p+"static/media/fb.fe55b6ce.svg";var P=function(e){var t=e.setMainActive;return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("p",{className:"footer__copy",children:"\xa9 2020 Supersite, Powered by News API"}),Object(s.jsxs)("ul",{className:"footer__container",children:[Object(s.jsxs)("div",{className:"footer__links",children:[Object(s.jsx)("li",{className:"footer__li",children:Object(s.jsx)(u.b,{className:"footer__link",to:"/",onClick:t,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(s.jsx)("li",{className:"footer__li",children:Object(s.jsx)("a",{href:"https://praktikum.yandex.ru",className:"footer__link",target:"_blank",rel:"noopener noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})})]}),Object(s.jsx)("li",{className:"footer__ico",children:Object(s.jsx)("a",{href:"https://github.com/rashidovD",className:"footer__icoLink",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("img",{src:L,alt:"Icon Github",className:"footer__icoImg"})})}),Object(s.jsx)("li",{className:"footer__ico",children:Object(s.jsx)("a",{href:"https://www.facebook.com/dzh.rashidow",className:"footer__icoLink",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("img",{src:S,alt:"Icon FaceBook",className:"footer__icoImg"})})})]})]})};a(41);var T=function(e){var t=e.isOpen,a=e.name,n=e.title,c=e.submitBtnText,r=e.textLink,i=e.changePopup,o=e.onClose,l=e.children;return Object(s.jsx)("div",{className:t?"popup popup_type_".concat(a," popup_opened"):"popup popup_type_".concat(a),children:Object(s.jsxs)("form",{className:"popup__form",name:a,children:[Object(s.jsx)("h2",{className:"popup__title",children:n}),l,Object(s.jsx)("button",{className:"popup__savebtn",type:"submit",children:c}),Object(s.jsxs)("p",{className:"popup__linkText",children:["\u0438\u043b\u0438 ",Object(s.jsx)("span",{className:"popup__link",onClick:i,children:r})]}),Object(s.jsx)("button",{className:"popup__closebtn",type:"button",onClick:o})]})})};a(42);var A=function(e){var t=e.popupLoginOpen,a=e.onClose,n=e.changePopup,r=c.a.useState(""),i=Object(o.a)(r,2),l=i[0],u=i[1],d=c.a.useState(""),p=Object(o.a)(d,2),j=p[0],_=p[1];return Object(s.jsxs)(T,{name:"login",title:"\u0412\u0445\u043e\u0434",isOpen:t,onClose:a,submitBtnText:"\u0412\u043e\u0439\u0442\u0438",textLink:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",changePopup:n,children:[Object(s.jsx)("p",{className:"popup__inputTitle",children:"Email"}),Object(s.jsx)("input",{type:"email",name:"email",id:"email-input",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"email-input-error"}),Object(s.jsx)("p",{className:"popup__inputTitle",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(s.jsx)("input",{type:"password",className:"popup__input",id:"password-input",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0,value:j,onChange:function(e){_(e.target.value)}}),Object(s.jsx)("span",{className:"popup__input-error",id:"password-input-error"})]})};a(43);var F=function(e){var t=e.popupRegisterOpen,a=e.onClose,n=e.changePopup,r=c.a.useState(""),i=Object(o.a)(r,2),l=i[0],u=i[1],d=c.a.useState(""),p=Object(o.a)(d,2),j=p[0],_=p[1],b=c.a.useState(""),m=Object(o.a)(b,2),h=m[0],g=m[1];return Object(s.jsxs)(T,{name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",isOpen:t,onClose:a,submitBtnText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",textLink:"\u0412\u043e\u0439\u0442\u0438",changePopup:n,children:[Object(s.jsx)("p",{className:"popup__inputTitle",children:"Email"}),Object(s.jsx)("input",{name:"email",type:"email",id:"email-input",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"email-input-error"}),Object(s.jsx)("p",{className:"popup__inputTitle",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(s.jsx)("input",{name:"password",type:"password",id:"password-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:j,onChange:function(e){_(e.target.value)},className:"popup__input",required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"password-input-error"}),Object(s.jsx)("p",{className:"popup__inputTitle",children:"\u0418\u043c\u044f"}),Object(s.jsx)("input",{className:"popup__input",name:"username",id:"username-input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f",value:h,onChange:function(e){g(e.target.value)}}),Object(s.jsx)("span",{className:"popup__input-error",id:"username-input-error"})]})};var I=function(){var e=[{source:{name:"\u043b\u0435\u043d\u0442\u0430.\u0440\u0443",url:"https://lenta.ru"},title:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435.",urlToImage:k},{source:{name:"\u043c\u0435\u0434\u0443\u0437\u0430",url:"https://meduza.io"},title:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",urlToImage:C},{source:{name:"\u0420\u0418\u0410",url:"https://ria.ru"},title:"\xab\u041f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0439\u0433\u0430\xbb: \u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442 \u0418\u0433\u043e\u0440\u044f \u0428\u043f\u0438\u043b\u0435\u043d\u043a\u0430",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0417\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u0441\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u0435\u0441\u0430 \u0420\u043e\u0441\u0441\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f. \u0412 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u043e\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u0432 \u0414\u0432\u0438\u043d\u0441\u043a\u043e-\u041f\u0438\u043d\u0435\u0436\u0441\u043a\u0443\u044e \u0442\u0430\u0439\u0433\u0443, \u0433\u0434\u0435 \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u043a\u043e\u043d\u0435\u0446-\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f.",urlToImage:y}],t=[{source:{name:"\u043b\u0435\u043d\u0442\u0430.\u0440\u0443",url:"https://lenta.ru"},title:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435.",urlToImage:k,keyword:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430"},{source:{name:"\u043c\u0435\u0434\u0443\u0437\u0430",url:"https://meduza.io"},title:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",urlToImage:C,keyword:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430"},{source:{name:"\u0420\u0418\u0410",url:"https://ria.ru"},title:"\xab\u041f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0439\u0433\u0430\xbb: \u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442 \u0418\u0433\u043e\u0440\u044f \u0428\u043f\u0438\u043b\u0435\u043d\u043a\u0430",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0417\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u0441\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u0435\u0441\u0430 \u0420\u043e\u0441\u0441\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f. \u0412 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u043e\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u0432 \u0414\u0432\u0438\u043d\u0441\u043a\u043e-\u041f\u0438\u043d\u0435\u0436\u0441\u043a\u0443\u044e \u0442\u0430\u0439\u0433\u0443, \u0433\u0434\u0435 \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u043a\u043e\u043d\u0435\u0446-\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f.",urlToImage:y,keyword:"\u0422\u0430\u0439\u0433\u0430"},{source:{name:"\u043b\u0435\u043d\u0442\u0430.\u0440\u0443",url:"https://lenta.ru"},title:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435.",urlToImage:k,keyword:"\u041f\u0430\u0440\u043a\u0438"},{source:{name:"\u043c\u0435\u0434\u0443\u0437\u0430",url:"https://meduza.io"},title:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",publishedAt:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",description:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",urlToImage:C,keyword:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}],a=c.a.useState("main"),n=Object(o.a)(a,2),r=n[0],i=n[1],u=c.a.useState(!1),d=Object(o.a)(u,2),p=d[0],j=d[1],b=c.a.useState(t),m=Object(o.a)(b,2),h=m[0],g=(m[1],c.a.useState(e)),O=Object(o.a)(g,2),v=O[0],x=(O[1],c.a.useState(!1)),f=Object(o.a)(x,2),L=f[0],S=f[1],T=c.a.useState(!1),I=Object(o.a)(T,2),M=I[0],E=I[1],q=c.a.useState(!1),B=Object(o.a)(q,2),H=B[0],R=B[1],z=Object(l.f)(),D=c.a.useRef();function J(){i("main")}function G(){i("saved-news")}D.current=M;var K=c.a.useCallback((function(e){"Escape"===e.key&&(D.current?V():W())}),[]),Q=c.a.useCallback((function(e){e.target===e.currentTarget&&(D.current?V():W())}),[]);function U(){document.addEventListener("keydown",K),document.querySelector(".popup_type_login").addEventListener("click",Q),E(!0)}function V(){E(!1),document.querySelector(".popup_type_login").removeEventListener("click",Q),document.removeEventListener("keydown",K)}function W(){R(!1),document.querySelector(".popup_type_register").removeEventListener("click",Q),document.removeEventListener("keydown",K)}function X(){M?(V(),document.addEventListener("keydown",K),document.querySelector(".popup_type_register").addEventListener("click",Q),R(!0)):(W(),U())}return Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(_,{logged:p,toggleBurger:function(){S(!L)},burgerOpened:L,activePage:r,setMainActive:J,setSavedNewsActive:G,handleLogout:function(){J(),j(!1),z.push("/")},openPopupLogin:U}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(N,{logged:p,activePage:r,searchResults:v})}),Object(s.jsx)(l.a,{path:"/saved-news",children:Object(s.jsx)(w,{setSavedNewsActive:G,savedNews:h})})]}),Object(s.jsx)(P,{setMainActive:J}),Object(s.jsx)(A,{popupLoginOpen:M,onClose:V,changePopup:X}),Object(s.jsx)(F,{popupRegisterOpen:H,onClose:W,changePopup:X})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u.a,{children:Object(s.jsx)(I,{})})}),document.getElementById("root")),M()}]),[[44,1,2]]]);
//# sourceMappingURL=main.b2970806.chunk.js.map