(this["webpackJsonpe-learn"]=this["webpackJsonpe-learn"]||[]).push([[0],{23:function(n,e,t){n.exports=t.p+"static/media/start.8acd815c.jpg"},24:function(n,e,t){n.exports=t.p+"static/media/me.855be58f.png"},25:function(n,e,t){n.exports=t.p+"static/media/tobe.7f893ce4.jpg"},26:function(n,e,t){n.exports=t.p+"static/media/ornottobe.8959d7d3.jpg"},27:function(n,e,t){n.exports=t.p+"static/media/presentsimple.2b9e8cd0.jpg"},28:function(n,e,t){n.exports=t.p+"static/media/pastsimple.3c5954bd.jpg"},30:function(n,e,t){n.exports=t(41)},41:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(18),o=t.n(i),c=t(1),l=t(2);function u(){var n=Object(c.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n*{\n    box-sizing:border-box;\n    scroll-behavior:smooth;\n\n}\n\nhtml{\n    font-size: 62.5%;\n    animation: start 0.5s 1 linear both;\n\n    \n@keyframes start {\n    0%{opacity:0};\n    100%{opacity:1;}\n}\n}\n\nbody {\n    margin: 0;\n    padding:0;\n    font-family: 'Montserrat', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n}\n"]);return u=function(){return n},n}var s=Object(l.a)(u()),d=t(10),m=t(8);function p(){var n=Object(c.a)(["\n  height: 25px;\n  width: 25px;\n  background-color: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  animation: dot 1.4s 1 both ease;\n\n  @keyframes dot {\n    0% {\n      transform: translate(-50%, -50%);\n      border-radius: 50%;\n      background-color: white;\n    }\n    70% {\n      transform: translate(-120px, -50%);\n      border-radius: 50%;\n      background-color: white;\n      border-radius: 0;\n    }\n    100% {\n      transform: translate(50px, -50px);\n      background-color: #cf7a7a;\n    }\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  background-color: #cf7a7a;\n  animation: loader 1s 0.4s ease 1 both;\n\n  @keyframes loader {\n    0% {\n      transform: translateX(0);\n    }\n    20% {\n      transform: translateX(0);\n    }\n    100% {\n      transform: translateX(-100vw);\n    }\n  }\n"]);return b=function(){return n},n}var f=l.b.div(b()),g=l.b.div(p()),h=function(){return r.a.createElement(f,null,r.a.createElement(g,null))},v="375px",x="425px",w="768px",k="1024px",j="1440px",E="2560px",O={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(v,")"),mobileL:"(min-width: ".concat(x,")"),tablet:"(min-width: ".concat(w,")"),laptop:"(min-width: ".concat(k,")"),laptopL:"(min-width: ".concat(j,")"),desktop:"(min-width: ".concat(E,")"),desktopL:"(min-width: ".concat(E,")")};function y(){var n=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');\n  margin: 0;\n  padding: 0;\n  font-size: 3rem;\n  font-family: 'Leckerli One', cursive;\n  text-decoration: none;\n  color: black;\n\n  @media "," {\n    font-size: 3.5rem;\n  }\n"]);return y=function(){return n},n}var z=Object(l.b)(d.b)(y(),O.tablet),A=function(){return r.a.createElement(z,{onClick:function(){return window.scroll(0,0)},to:"/"},"E-learn")};function q(){var n=Object(c.a)(["\n  font-size: 3.5rem;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  width: 100%;\n\n  @media "," {\n    font-size: 4rem;\n  }\n"]);return q=function(){return n},n}var C=l.b.h2(q(),O.mobileL);function L(){var n=Object(c.a)(["\n  font-size: 1.5rem;\n  text-align: justify;\n  margin: 10px;\n\n  @media "," {\n    font-size: 2rem;\n  }\n\n  @media "," {\n    width: 70%;\n  }\n"]);return L=function(){return n},n}var S=l.b.p(L(),O.mobileL,O.tablet);function D(){var n=Object(c.a)(["\n  text-align: center;\n  width: 100%;\n"]);return D=function(){return n},n}function Q(){var n=Object(c.a)(["\n  height: 30vh;\n  width: 100%;\n  background-color: #cf7a7a;\n  color: #d6d6d6;\n  padding: 20px;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  @media "," {\n    flex-basis: ",";\n    margin-left: ",";\n  }\n"]);return Q=function(){return n},n}var U=l.b.footer(Q(),O.laptop,(function(n){return n.learn?"70%":"100%"}),(function(n){return n.learn?"30%":"0"})),I=Object(l.b)(S)(D()),F=function(n){var e=n.learn;return r.a.createElement(U,{learn:e},r.a.createElement(C,null,"Kontakt:"),r.a.createElement(I,null,"ul. Kolejowa xx"),r.a.createElement(I,null,"nr tel.: 490 230 53"),r.a.createElement(A,null))};function Y(){var n=Object(c.a)(["\n  min-height: 90vh;\n  margin-top: 10vh;\n  padding: 0;\n  background-color: #d6d6d6;\n  display: flex;\n  flex-wrap: wrap;\n\n  @media "," {\n    min-height: 95vh;\n    margin-top: 5vh;\n  }\n"]);return Y=function(){return n},n}var B=l.b.section(Y(),O.laptop),M=t(23),T=t.n(M);function N(){var n=Object(c.a)(["\n  height: 20px;\n  width: 20px;\n  animation: arrow 1s ease infinite both alternate;\n  padding: 0 0 20px 0;\n  font-size: 5rem;\n  color: white;\n\n  @keyframes arrow {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(20px);\n    }\n  }\n"]);return N=function(){return n},n}function P(){var n=Object(c.a)(["\n  color: white;\n  font-size: 3rem;\n  margin-bottom: 10px;\n  border-bottom: none;\n"]);return P=function(){return n},n}function X(){var n=Object(c.a)(["\n  font-size: 5rem;\n  color: white;\n  padding: 0;\n  margin: 0 0 10px 0;\n"]);return X=function(){return n},n}function J(){var n=Object(c.a)(["\n  background: url(",") no-repeat center center;\n  background-size: cover;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 90vh;\n"]);return J=function(){return n},n}var K=Object(l.b)(B)(J(),T.a),W=l.b.h1(X()),R=Object(l.b)(C)(P()),$=l.b.div(N()),G=function(){return r.a.createElement(K,null,r.a.createElement(W,null,"E-learn"),r.a.createElement(R,null,"Ucz si\u0119 razem z nami!"),r.a.createElement($,null,"\u2193"))},H=t(24),V=t.n(H);function Z(){var n=Object(c.a)(["\n  font-size: 2rem;\n  margin: 10px 0;\n  padding: 0;\n  text-align: center;\n  border-bottom: 1px solid black;\n  width: 100%;\n\n  @media "," {\n    font-size: 2.5rem;\n  }\n"]);return Z=function(){return n},n}var _=l.b.h3(Z(),O.mobileL);function nn(){var n=Object(c.a)(["\n  /* z-index: 2; */\n  height: 70vw;\n  width: 70vw;\n  /* flex-basis: 40%; */\n  /* position: relative;\n    top: 10%;\n    right: 0; */\n  margin: 0;\n  padding: 0;\n\n  @media "," {\n    height: 500px;\n    width: 520px;\n    margin-left: 20px;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(c.a)(["\n  flex-basis: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n\n  @media "," {\n    flex-direction: row;\n    width: 60%;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(c.a)(["\n  margin: 0;\n  padding: 20px 0;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d6d6;\n  display: flex;\n  flex-wrap: wrap;\n"]);return tn=function(){return n},n}var an=l.b.section(tn()),rn=l.b.div(en(),O.laptopL),on=l.b.img(nn(),O.laptop),cn=function(){return r.a.createElement(an,null,r.a.createElement(C,null,"Dzie\u0144 dobry!"),r.a.createElement(_,null,"Nazywam si\u0119 Naruto Uzumaki"),r.a.createElement(rn,null,r.a.createElement(S,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement(on,{src:V.a})))},ln=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(G,null),r.a.createElement(cn,null),r.a.createElement(F,null))},un=t(4);function sn(){var n=Object(c.a)(["\n  width: 100%;\n  border: none;\n  border-bottom: solid 1px black;\n  font-size: 2.5rem;\n  background-color: transparent;\n  transition: background-color 0.5s;\n  @media "," {\n    font-size: 3rem;\n  }\n\n  @media "," {\n    padding: 10px 0;\n    border-bottom: solid 1px black;\n    cursor: pointer;\n    &:hover {\n      background-color: #d6d6d6;\n    }\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(c.a)(["\n  background-color: #8a6d6d;\n  padding: 0;\n  width: 100%;\n  transition: transform 0.5s;\n  transform: ",";\n  position: absolute;\n  top: 15vh;\n  left: 0;\n\n  @media "," {\n    top: 17vh;\n  }\n\n  @media "," {\n    width: 30%;\n    transform: translateY(0);\n    position: fixed;\n    top: 10vh;\n    height: 100vh;\n    border-right: 1px solid black;\n    border-top: 1px solid black;\n  }\n"]);return dn=function(){return n},n}function mn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 5vh;\n  font-size: 2.5rem;\n  z-index: 2;\n  margin: 0;\n  border: none;\n  border-bottom: solid 1px black;\n  background-color: #8a6d6d;\n  @media "," {\n    font-size: 3.5rem;\n    height: 7vh;\n  }\n\n  @media "," {\n    transform: scale(0);\n  }\n"]);return mn=function(){return n},n}var pn=l.b.button(mn(),O.tablet,O.laptop),bn=l.b.div(dn(),(function(n){return n.open?"translateY(0)":"translateY(-200px)"}),O.tablet,O.laptop),fn=l.b.button(sn(),O.tablet,O.laptop),gn=function(n){var e=n.setClickedChapter,t=n.subjects,i=Object(a.useState)(!1),o=Object(un.a)(i,2),c=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(pn,{onClick:function(){return l(!c)}},"Rozwi\u0144"),r.a.createElement(bn,{open:c},t.map((function(n){return r.a.createElement(fn,{key:n.key,onClick:function(){return t=n.title,window.scrollTo(0,0),e(t),void l(!c);var t}},n.title)}))))};function hn(){var n=Object(c.a)(["\n  font-size: 1.8rem;\n  margin: 10px 0;\n  padding: 0;\n  text-align: center;\n  width: 100%;\n\n  @media "," {\n    font-size: 2.3rem;\n  }\n"]);return hn=function(){return n},n}var vn=l.b.h3(hn(),O.mobileL);function xn(){var n=Object(c.a)(["\n  background: transparent;\n  color: ",";\n  border: 2px solid ",";\n  font-size: 2.3rem;\n  display: block;\n  transition: background-color 0.5s ease, color 0.5s ease;\n  cursor: pointer;\n  margin: 10px auto;\n\n  @media "," {\n    width: 250px;\n    font-size: 3rem;\n  }\n\n  @media "," {\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"]);return xn=function(){return n},n}var wn=l.b.button(xn(),(function(n){return n.black?"black":"white"}),(function(n){return n.black?"black":"white"}),O.tablet,O.laptop,(function(n){return n.black?"black":"white"}),(function(n){return n.black?"white":"black"})),kn=function(n){var e=n.children,t=n.black,a=n.fn;return r.a.createElement(wn,{black:t,fn:a,onClick:function(n){n.preventDefault(),a()}},e)};function jn(){var n=Object(c.a)(["\n  font-size: 1.8rem;\n  flex-basis: 100%;\n  border-bottom: solid 1px black;\n  padding: 10px;\n  background-color: ",";\n  transition: background-color 0.5s;\n\n  @media "," {\n    font-size: 2.3rem;\n  }\n\n  @media "," {\n    cursor: pointer;\n    &:hover {\n      background-color: #e3d1d1;\n    }\n  }\n"]);return jn=function(){return n},n}var En=l.b.label(jn(),(function(n){return n.green?"#8bc95b":"transparent"}),O.mobileL,O.laptop),On=function(n){var e=n.children,t=n.green;return r.a.createElement(En,{green:t},e)};function yn(){var n=Object(c.a)(["\n  background-color: black;\n  color: #d4b8b8;\n  font-size: 1.8rem;\n  border: none;\n  padding: 10px;\n  margin: 10px auto;\n  border: 1px solid black;\n  transition: background-color 0.5s, color 0.5s;\n\n  @media "," {\n    cursor: pointer;\n    &:hover {\n      background-color: transparent;\n      color: black;\n    }\n  }\n"]);return yn=function(){return n},n}function zn(){var n=Object(c.a)(["\n  background-color: transparent;\n  border: 1px solid black;\n"]);return zn=function(){return n},n}function An(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  margin: 5px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  transform: ",";\n"]);return An=function(){return n},n}var qn=l.b.div(An(),(function(n){return n.id===n.i?"scale(1)":"scale(0)"})),Cn=l.b.input(zn()),Ln=l.b.button(yn(),O.laptop),Sn=function(n){var e=n.value,t=n.i,i=n.score,o=n.setScore,c=Object(a.useState)(!1),l=Object(un.a)(c,2),u=l[0],s=l[1],d=Object(a.useState)(!1),m=Object(un.a)(d,2),p=m[0],b=m[1],f=Object(a.useState)(!1),g=Object(un.a)(f,2),h=g[0],v=g[1],x=Object(a.useState)(!1),w=Object(un.a)(x,2),k=w[0],j=w[1],E=Object(a.useState)(!1),O=Object(un.a)(E,2),y=O[0],z=O[1],A=Object(a.useState)(!1),q=Object(un.a)(A,2),C=q[0],L=q[1],D=Object(a.useState)(!1),Q=Object(un.a)(D,2),U=Q[0],I=Q[1],F=Object(a.useState)(!1),Y=Object(un.a)(F,2),B=Y[0],M=Y[1],T=Object(a.useState)(!1),N=Object(un.a)(T,2),P=N[0],X=N[1];return r.a.createElement(r.a.Fragment,null,e.map((function(n){var e=n.Q,a=n.A1,c=n.A2,l=n.A3,d=n.A4,m=n.id,f=n.C;return r.a.createElement(qn,{key:e,id:m,i:t},r.a.createElement(S,null,e),r.a.createElement(On,{green:y},r.a.createElement(Cn,{type:"checkbox",chekced:u,disabled:P?"disabled":null,onChange:function(n){return s(n.target.checked)}})," ",a),r.a.createElement(On,{green:C},r.a.createElement(Cn,{type:"checkbox",chekced:p,disabled:P?"disabled":null,onChange:function(n){return b(n.target.checked)}})," ",c),r.a.createElement(On,{green:U},r.a.createElement(Cn,{type:"checkbox",chekced:h,disabled:P?"disabled":null,onChange:function(n){return v(n.target.checked)}})," ",l),r.a.createElement(On,{green:B},r.a.createElement(Cn,{type:"checkbox",chekced:k,disabled:P?"disabled":null,onChange:function(n){return j(n.target.checked)}})," ",d),r.a.createElement(Ln,{type:"submit",onClick:function(n){return function(n,e){n.preventDefault(),X(!0),e[0]===u&&e[1]===p&&e[2]===h&&e[3]===k?(console.log("dobra odp"),o(i+1)):console.log("\u017ale"),e[0]?z(!0):z(!1),e[1]?L(!0):L(!1),e[2]?I(!0):I(!1),e[3]?M(!0):M(!1),console.log(u,p,h,k)}(n,f)},disabled:P?"disabled":null},"Sprawd\u017a"))})))};function Dn(){var n=Object(c.a)(["\n  position: relative;\n  height: 270px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n\n  @media "," {\n    height: 300px;\n  }\n\n  @media "," {\n    width: 60%;\n    margin: auto;\n  }\n"]);return Dn=function(){return n},n}function Qn(){var n=Object(c.a)(["\n  flex-basis: 100%;\n  width: 100%;\n  background-color: #d4b8b8;\n  display: flex;\n  flex-direction: column;\n"]);return Qn=function(){return n},n}var Un=l.b.form(Qn()),In=l.b.div(Dn(),O.mobileL,O.laptop),Fn=function(n){var e=n.questions,t=Object(a.useState)(1),i=Object(un.a)(t,2),o=i[0],c=i[1],l=Object(a.useState)(0),u=Object(un.a)(l,2),s=u[0],d=u[1];return r.a.createElement(Un,null,r.a.createElement(_,null,"Test"),r.a.createElement(vn,null,"Score: ",s,"/",Object.keys(e).length),r.a.createElement(In,null,Object.entries(e).map((function(n){var e=Object(un.a)(n,2),t=e[0],a=e[1];return r.a.createElement(Sn,{key:t,value:a,i:o,score:s,setScore:d})}))),r.a.createElement(kn,{fn:function(){o<Object.keys(e).length?c(o+1):c(1)},black:!0},"Nast\u0119pny"),r.a.createElement(kn,{fn:function(){c(o>1?o-1:Object.keys(e).length)},black:!0},"Poprzedni"))};function Yn(){var n=Object(c.a)(["\n  width: 100%;\n  @media "," {\n    width: 60%;\n    border: 1px solid black;\n  }\n"]);return Yn=function(){return n},n}var Bn=l.b.img(Yn(),O.tablet);function Mn(){var n=Object(c.a)(["\n  margin: 0;\n  flex-basis: 100%;\n  display: flex;\n  justify-content: center;\n\n  @media "," {\n    flex-basis: 70%;\n    margin-left: 30%;\n    margin-top: 0;\n  }\n"]);return Mn=function(){return n},n}var Tn=Object(l.b)(B)(Mn(),O.laptop),Nn=function(n){var e=n.clickedChapter,t=n.subjects;return r.a.createElement(r.a.Fragment,null,t.filter((function(n){return n.title===e})).map((function(n){return r.a.createElement(Tn,{key:n.key},r.a.createElement(C,null,n.title),r.a.createElement(S,null,n.content),r.a.createElement(Bn,{src:n.img}),r.a.createElement(S,null,n.secondContent),r.a.createElement(Fn,{questions:n.test}))})))},Pn=t(25),Xn=t.n(Pn),Jn=t(26),Kn=t.n(Jn),Wn=t(27),Rn=t.n(Wn),$n=t(28),Gn=t.n($n),Hn=[{key:0,title:"To Be",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:Xn.a,secondContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",test:{first:[{Q:"Dok\u0105d noca tutpa je\u017c?",A1:"poprawna",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:1,C:[!0,!0,!0,!1]}],second:[{Q:"Ile n\xf3g ma jele\u0144?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:2,C:[!1,!0,!0,!1]}],third:[{Q:"Ile jajek sk\u0142ada kura?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"poprawne",id:3,C:[!1,!0,!0,!0]}]}},{key:1,title:"Or not to be",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:Kn.a,secondContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",test:{first:[{Q:"Dok\u0105d noca tutpa je\u017c?",A1:"poprawna",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:1,C:[!0,!0,!0,!1]}],second:[{Q:"Ile n\xf3g ma jele\u0144?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:2,C:[!1,!0,!0,!1]}],third:[{Q:"Ile jajek sk\u0142ada kura?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"poprawne",id:3,C:[!1,!0,!0,!0]}]}},{key:2,title:"Present Simple",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:Rn.a,secondContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",test:{first:[{Q:"Dok\u0105d noca tutpa je\u017c?",A1:"poprawna",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:1,C:[!0,!0,!0,!1]}],second:[{Q:"Ile n\xf3g ma jele\u0144?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:2,C:[!1,!0,!0,!1]}],third:[{Q:"Ile jajek sk\u0142ada kura?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"poprawne",id:3,C:[!1,!0,!0,!0]}]}},{key:3,title:"Past Simple",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:Gn.a,secondContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",test:{first:[{Q:"Dok\u0105d noca tutpa je\u017c?",A1:"poprawna",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:1,C:[!0,!0,!0,!1]}],second:[{Q:"Ile n\xf3g ma jele\u0144?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"fa\u0142szywa",id:2,C:[!1,!0,!0,!1]}],third:[{Q:"Ile jajek sk\u0142ada kura?",A1:"fa\u0142szywa",A2:"poprawna",A3:"poprawna",A4:"poprawne",id:3,C:[!1,!0,!0,!0]}]}}],Vn=function(){var n=Object(a.useState)("To Be"),e=Object(un.a)(n,2),t=e[0],i=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,r.a.createElement(h,null),r.a.createElement(gn,{setClickedChapter:i,subjects:Hn}),r.a.createElement(Nn,{clickedChapter:t,subjects:Hn}),r.a.createElement(F,{learn:!0})))};function Zn(){var n=Object(c.a)(["\n  flex-basis: 50%;\n"]);return Zn=function(){return n},n}function _n(){var n=Object(c.a)(["\n  color: black;\n  font-size: 2rem;\n  text-decoration: none;\n  padding: 10px;\n\n  &.active {\n    color: #d6d6d6;\n  }\n\n  @media "," {\n    font-size: 2.5rem;\n  }\n"]);return _n=function(){return n},n}function ne(){var n=Object(c.a)(["\n  background-color: #cf7a7a;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 10vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 5;\n"]);return ne=function(){return n},n}var ee=l.b.nav(ne()),te=Object(l.b)(d.c)(_n(),O.tablet),ae=Object(l.b)(A)(Zn()),re=function(){return r.a.createElement(ee,null,r.a.createElement(ae,null),r.a.createElement("div",null,r.a.createElement(te,{onClick:function(){return window.scroll(0,0)},exact:!0,to:"/"},"Start"),r.a.createElement(te,{onClick:function(){return window.scroll(0,0)},to:"/learn"},"Learn")))},ie=function(){return r.a.createElement(d.a,{basename:"/e-learn"},r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ln}),r.a.createElement(m.a,{path:"/learn",component:Vn})),r.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.059ac3a6.chunk.js.map