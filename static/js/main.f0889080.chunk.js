(this.webpackJsonpmovflix=this.webpackJsonpmovflix||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/whislist.e26354b1.svg"},27:function(e,t,a){e.exports=a.p+"static/media/film.08424932.svg"},30:function(e,t,a){e.exports=a.p+"static/media/heroIMG.b0517f48.svg"},32:function(e,t,a){e.exports=a(68)},37:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(25),c=a.n(i),r=a(7),s=(a(37),a(26)),o=a.n(s),m=a(27),d=a.n(m),u=a(9),v=Object(n.createContext)(null);function h(e){var t=["sticky"];t.push(e.className);var a=Object(n.useState)(""),i=Object(r.a)(a,2),c=i[0],s=i[1],m=Object(n.useContext)(v);m.searchTerm;return(0,m.setSearchTerm)(c),l.a.createElement("header",{className:t.join(" ")},l.a.createElement("nav",{className:"navigation sticky"},l.a.createElement("div",{className:"navTitle"},l.a.createElement(u.b,{to:"/GDSCmovflix-react"},l.a.createElement("h1",null,"MovFlix"))),l.a.createElement("div",{className:"navBar"},l.a.createElement("ul",{className:"navContainer"},l.a.createElement("li",{className:"navItem"},l.a.createElement("form",{id:"form"},l.a.createElement(u.b,{to:"/GDSCmovflix-react/search"},l.a.createElement("input",{id:"search",type:"text",placeholder:"Search Movies",onChange:function(e){return s(e.target.value)}})))),l.a.createElement("li",{className:"navItem"},l.a.createElement("span",{className:"hidden"},l.a.createElement(u.b,{to:"/GDSCmovflix-react/whislist"},l.a.createElement("img",{className:"navIcon",src:o.a,alt:""}))),l.a.createElement(u.b,{to:"/GDSCmovflix-react/whislist"},"Wishlist")),l.a.createElement("li",{className:"navItem"},l.a.createElement("span",{className:"hidden"},l.a.createElement("a",{href:"#movieLocate"},l.a.createElement("img",{className:"navIcon",src:d.a,alt:""}))),l.a.createElement("a",{href:"#movieLocate"}," Movies "))))))}var E=a(30),f=a.n(E);function p(e){var t=["hero"];return t.push(e.className),l.a.createElement("section",{className:t.join(" ")},l.a.createElement("article",{className:"heroInfo"},l.a.createElement("h2",null,"Search and read the most rated and popular movies based on IMDb"),l.a.createElement("p",null,"In MOVFLIX, you can search and read a lot of high rated movies that will bring back your mood and make you happy again."),l.a.createElement("button",null,l.a.createElement("a",{href:"#movieLocate"},"See Now"))),l.a.createElement("aside",{className:"heroImg"},l.a.createElement("img",{src:f.a,alt:"heroImg"})))}var g=a(31),b=a.n(g);function I(e){var t="whislist";var a="https://image.tmdb.org/t/p/w500",n=function(e,n,l,i){var c,r,s,o=document.getElementById("modal");o.innerHTML="",o.style.display="block",o.innerHTML="",o.style.display="block",c='<img src="'.concat(a).concat(l,'" alt="" srcset=""></div>'),r='<div class="modal-movie-info-title"> <h2>'.concat(n,"</h2></div>"),s='<div class="modal-movie-info-description"><p>'.concat(i,"</p></div>"),o.innerHTML+='<div class="modal-content"><div id="close-btn" class="close">&times;</div> <div class="modal-movie"><div class="modal-movie-thumbnail" >'+c+'<div class="modal-movie-info">'+r+s+'<div id="modalWhislist" class="modalWhislist">\n        <p>Add To Whislist</p>\n      </div></div></div></div>',document.getElementById("close-btn").addEventListener("click",(function(){document.getElementById("modal").style.display="none"})),document.getElementById("modalWhislist")&&document.getElementById("modalWhislist").addEventListener("click",(function(){!function(e,a,n,l){var i,c=[];null===(i=JSON.parse(localStorage.getItem(t)))?(c.push({id:e,title:a,img:n,overview:l}),localStorage.setItem(t,JSON.stringify(c))):((c=c.concat(i)).push({id:e,title:a,img:n,overview:l}),localStorage.setItem(t,JSON.stringify(c)))}(e,n,"".concat(a).concat(l),i)}))};return l.a.createElement("article",{className:"movies",onClick:function(){return n(e.listItem.id,e.listItem.title,e.listItem.poster_path,e.listItem.overview)}},l.a.createElement("div",{className:"moviesThumbnail"},l.a.createElement("img",{className:"moviesImg",src:"".concat(a).concat(e.listItem.poster_path),alt:"film1"})),l.a.createElement("div",{className:"moviesInfo"},l.a.createElement("h2",{className:"moviesTitle"},e.listItem.title),l.a.createElement("p",{className:"moviesRating"},"Rating : \u2605$",e.listItem.vote_average,"/10"),l.a.createElement("p",{className:"moviesDesc"},e.listItem.overview,l.a.createElement("span",null,l.a.createElement("a",{target:"blank",href:"https://www.themoviedb.org/movie/".concat(e.listItem.id)},"Read More in TMDB")))))}a(64);function N(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],c=b.a.create({baseURL:"https://api.themoviedb.org/3"}).get("discover/movie",{params:{api_key:"d769bee82cb0d71d5739396b64c7be50"}});return Object(n.useEffect)((function(){c.then((function(e){i(e.data.results)}))}),[]),l.a.createElement("section",{id:"movieLocate",className:"movie"},a.map((function(e,t){return l.a.createElement(I,{key:t,listItem:e})})))}function y(){return l.a.createElement("main",{id:"header"},l.a.createElement(p,null),l.a.createElement("div",{className:"modal",id:"modal"}),l.a.createElement(N,null))}var w=a(1),S="".concat("https://api.themoviedb.org/3","/discover/movie?sort_by=popularity.desc&").concat("api_key=d769bee82cb0d71d5739396b64c7be50");function O(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useContext)(v).searchTerm;return Object(n.useEffect)((function(){fetch(S).then((function(e){return e.json()})).then((function(e){i(e.results)}))}),[]),l.a.createElement("section",{id:"movieLocate",className:"movie"},a.filter((function(e){return""==c||e.title.toLowerCase().includes(c.toLowerCase())?e:void 0})).map((function(e,t){return l.a.createElement(I,{key:t,listItem:e})})))}function C(){return l.a.createElement("main",{id:"header"},l.a.createElement("div",{className:"modal",id:"modal"}),l.a.createElement("div",{className:"searchList"},l.a.createElement("h2",null,"Search List")),l.a.createElement(O,null))}function k(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"cardsWhislist"},l.a.createElement("div",{className:"whislistIMG"},l.a.createElement("img",{src:e.imgPath,alt:"propsimg"})),l.a.createElement("div",{className:"whislistInfo"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.overview)),l.a.createElement("div",{id:"close-btn-whislist",onClick:function(){return function(e){var t,a=JSON.parse(localStorage.getItem("whislist"));t=a.findIndex((function(t){return t.id===e}));var n=[];a.filter((function(e,a){if(a!=t)return e})).map((function(e){n.push(e)})),localStorage.setItem("whislist",JSON.stringify(n)),window.location.reload()}(e.id)},className:"close close-whislist"},"\xd7")))}a(67);function x(){var e=[];return e=e.concat(JSON.parse(localStorage.getItem("whislist"))),l.a.createElement("div",null,l.a.createElement("div",{id:"whislistErr",className:"whislistErr"},l.a.createElement("h2",null,"Sorry, you still not add movies to the Wishlist...")),l.a.createElement("ul",null,e.map((function(e,t){return setTimeout((function(){document.getElementById("whislistErr").style.display="none"}),1),l.a.createElement("li",{key:t},l.a.createElement(k,{id:e.id,title:e.title,imgPath:e.img,overview:e.overview}))}))))}function L(){return l.a.createElement("footer",{id:"footer",class:"footer"},l.a.createElement("section",{class:"center"},l.a.createElement("p",null,"\xa92021 Copyright \u2022 All Rigth Reserved \u2022 O.Riastanjung (GDSC ITB 2021 Member)")))}var j=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1];return l.a.createElement(u.a,null,l.a.createElement(v.Provider,{value:{searchTerm:a,setSearchTerm:i}},l.a.createElement(h,null," "),l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/GDSCmovflix-react/whislist"},l.a.createElement(x,null)),l.a.createElement(w.a,{path:"/GDSCmovflix-react/search"},l.a.createElement(C,null)),l.a.createElement(w.a,{path:"/"},l.a.createElement(y,null))),l.a.createElement(L,null)))},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),i(e),c(e)}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),T()}},[[32,1,2]]]);
//# sourceMappingURL=main.f0889080.chunk.js.map