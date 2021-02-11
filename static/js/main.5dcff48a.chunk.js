(this["webpackJsonpquiz-app-with-concentration"]=this["webpackJsonpquiz-app-with-concentration"]||[]).push([[0],{23:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r,a,c,i=t(0),s=t.n(i),o=t(15),u=t.n(o),d=(t(23),t(3)),l=t(4),b=t.n(l),p=t(9),f=t(2),x=t(5),j=t(6),g=j.b.div(r||(r=Object(x.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  p {\n    font-size: 1rem;\n  }\n"]))),h=j.b.div(a||(a=Object(x.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56FFA4, #59BC86)":!e&&t?"linear-gradient(90deg, #FF5656, #C16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),m=t(1),O=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,c=n.questionNumber,i=n.totalQuestions;return Object(m.jsxs)(g,{children:[Object(m.jsxs)("p",{className:"questionNumber",children:["Question: ",c," / ",i]}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(m.jsx)("div",{children:t.map((function(n,e){return Object(m.jsx)(h,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.userAnswer)===n,children:Object(m.jsxs)("button",{onClick:r,value:n,disabled:!!a,children:[n,Object(m.jsx)("br",{})]})},e)}))})]})},w=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="medium"}(c||(c={}));var v,k,y=function(){var n=Object(p.a)(b.a.mark((function n(e,t){var r,a,c,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&type=multiple"),n.next=3,fetch(r);case 3:return a=n.sent,n.next=6,a.json();case 6:return c=n.sent,i=c.results,n.abrupt("return",i.map((function(n){return Object(w.a)(Object(w.a)({},n),{},{answers:(e=[].concat(Object(d.a)(n.incorrect_answers),[n.correct_answer]),Object(d.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),z=t.p+"static/media/nattu-adnan-unsplash.c866d607.jpg",C=Object(j.a)(v||(v=Object(x.a)(["\n  html {\n    height: 100%;\n  }\n  body {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n  }\n  * {\n    font-family: 'Catamaran', sans-serif;\n    box-sizing: border-box;\n  }\n"])),z),S=j.b.div(k||(k=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    color: white;\n  }\n  .score {\n    color: white;\n    font-size: 2rem;\n    margin: 0;\n  }\n  h1 {\n    font-family: Fascinate Inline;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    font-weight: 400;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #ffffff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n  .start {\n    max-width: 200px;\n  }\n"]))),A=function(){var n=Object(i.useState)(0),e=Object(f.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(!0),s=Object(f.a)(a,2),o=s[0],u=s[1],l=Object(i.useState)(!1),x=Object(f.a)(l,2),j=x[0],g=x[1],h=Object(i.useState)(),w=Object(f.a)(h,2),v=w[0],k=w[1],z=Object(i.useState)([]),A=Object(f.a)(z,2),q=A[0],F=A[1],N=Object(i.useState)(0),_=Object(f.a)(N,2),I=_[0],M=_[1],Q=function(){var n=Object(p.a)(b.a.mark((function n(){var e;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),u(!1),n.next=4,y(10,c.HARD);case 4:e=n.sent,k(e),g(!1),r(0),F([]),M(0);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(C,{}),Object(m.jsxs)(S,{className:"App",children:[Object(m.jsx)("h1",{children:"React Quiz"}),o||10===q.length?Object(m.jsx)("button",{className:"start",onClick:Q,children:"Start"}):null,!o&&Object(m.jsxs)("p",{className:"score",children:["Score: ",I]}),j&&Object(m.jsx)("p",{children:"Loading..."}),void 0!==v?Object(m.jsx)(O,{questionNumber:t+1,question:v[t].question,answers:v[t].answers,callback:function(n){if(v){var e=n.currentTarget.value,r=v[t].correct_answer===e;r&&M((function(n){return n+1}));var a={question:v[t].question,userAnswer:e,isCorrect:r,correctAnswer:v[t].correct_answer};F((function(n){return[].concat(Object(d.a)(n),[a])}))}},userAnswer:q?q[t]:void 0,totalQuestions:10}):null,o||j||q.length!==t+1||9===t?null:Object(m.jsx)("button",{className:"next",onClick:function(){v&&t+1!==v.length?r((function(n){return n+1})):u(!0)},children:"Next Question"})]})]})},q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};u.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),q()}},[[28,1,2]]]);
//# sourceMappingURL=main.5dcff48a.chunk.js.map