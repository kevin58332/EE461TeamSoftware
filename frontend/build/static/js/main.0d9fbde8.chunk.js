(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{110:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var r,s,i,a,c,o,j=n(0),l=n.n(j),d=n(28),u=n.n(d),b=(n(98),n(52)),h=n(38),x=n(83),O=n(81),p=n(13),g=n(32),f=n(24),m=n(45),v=m.a.nav(r||(r=Object(f.a)(["\n  background: #CC5500;\n  height: 85px;\n  display: flex;\n  justify-content: space-around;\n  //padding: 0.2rem calc((100vw - 1000px) / 2);\n  z-index: 12;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),y=Object(m.a)(g.c)(s||(s=Object(f.a)(["\ncolor: #ffffff;\ndisplay: flex;\nfont-size: 2.5em;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n\n"]))),S=m.a.div(i||(i=Object(f.a)(["\ndisplay: flex;\njustify-content: center;\n\n\n"]))),C=m.a.div(a||(a=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),w=m.a.button(c||(c=Object(f.a)(["\n  \n  margin-right: 24px;\n  border-radius: 4px;\n  background: #ffffff;\n  color: #000000;\n  padding: 10px 22px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),k=m.a.button(o||(o=Object(f.a)(["\nborder-radius: 4px;\nbackground: #CC5500;\ncolor: #ffffff;\npadding: 10px 22px;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\n\n"]))),N=n(1),E=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(v,{children:[" ",Object(N.jsx)(C,{children:Object(N.jsx)(y,{to:"/",children:"TEAM SOFTWARE"})}),Object(N.jsxs)(C,{children:[Object(N.jsx)(g.b,{to:"/signin",children:Object(N.jsx)(w,{children:"Sign In"})}),Object(N.jsx)(g.b,{to:"/signup",children:Object(N.jsx)(w,{children:"Sign Up"})})]})]})})},T=n(160),_=n(80),P=n.n(_),U=n(79),F=n.n(U),I=n(72),J=n.n(I),A=n(74),R=n.n(A),z=n(75),B=n.n(z),L=n(76),W=n.n(L),D=n(77),H=n.n(D),M=n(161),Y=(n(110),n(15));function q(){return Object(N.jsxs)(g.a,{children:[Object(N.jsx)(E,{}),Object(N.jsx)("div",{children:Object(N.jsxs)(Y.d,{children:[Object(N.jsx)(Y.b,{path:"/signin",children:Object(N.jsx)(Q,{})}),Object(N.jsx)(Y.b,{path:"/signup",children:Object(N.jsx)(K,{})}),Object(N.jsx)(Y.b,{path:"/",children:Object(N.jsx)(G,{})})]})})]})}function G(){var e=Object(j.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1],s=l.a.useRef(null),i=[Object(N.jsx)(J.a,{className:"large_icon"}),Object(N.jsx)(R.a,{className:"large_icon"}),Object(N.jsx)(B.a,{className:"large_icon"}),Object(N.jsx)(W.a,{className:"large_icon"}),Object(N.jsx)(H.a,{className:"large_icon"})],a=[Object(N.jsx)("p",{className:"bigger_text",children:"Create an account or sign in to get started"}),Object(N.jsx)("p",{className:"bigger_text",children:"High level security with advanced encrytpion"}),Object(N.jsx)("p",{className:"bigger_text",children:"App runs on the cloud so you can access from anywhere"}),Object(N.jsx)("p",{className:"bigger_text",children:"Create multiple projects on your account"}),Object(N.jsx)("p",{className:"bigger_text",children:"Your project information is stored securly in our databases"})];function c(){s.current&&clearTimeout(s.current)}l.a.useEffect((function(){return c(),s.current=setTimeout((function(){return r((function(e){return e===i.length-1?0:e+1}))}),3e3),function(){c()}}),[n]);var o=function(e){"add"===e&&r((function(e){return e===i.length-1?0:e+1})),"sub"===e&&r((function(e){return 0===e?i.length-1:e-1}))};return Object(N.jsxs)("div",{children:[Object(N.jsx)(S,{children:i[n]}),Object(N.jsx)(S,{children:a[n]}),Object(N.jsxs)(S,{children:[Object(N.jsx)(M.a,{onClick:function(){return o("sub")},children:Object(N.jsx)(F.a,{})}),Object(N.jsx)(M.a,{onClick:function(){return o("add")},children:Object(N.jsx)(P.a,{})})]})]})}var K=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={email:"",username:"",password:"",retype:"",error:!1,blank:!0,authenticated:!1,suError:!1,eCode:""},r}return Object(h.a)(n,[{key:"setEmail",value:function(e){this.setState({email:e}),""!==e&&""!==this.state.username&&""!==this.state.password&&""!==this.state.retype&&this.setState({blank:!1})}},{key:"setUsername",value:function(e){this.setState({username:e})}},{key:"setPassword",value:function(e){this.setState({password:e}),this.state.retype===e?this.setState({error:!1}):""!==this.state.retype?this.setState({error:!0}):this.setState({error:!1})}},{key:"checkPassword",value:function(e){this.setState({retype:e}),this.state.password===e?this.setState({error:!1}):""!==e?this.setState({error:!0}):this.setState({error:!1})}},{key:"submitClicked",value:function(){var e=this,t={username:this.state.username,password:this.state.password,email:this.state.email};fetch("http://127.0.0.1:5000/api/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){"done"===t.auth?e.setState({authenticated:!0}):(e.setState({suError:!0}),e.setState({eCode:t.auth}))}))}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsx)(S,{children:Object(N.jsx)("h2",{children:"Sign Up"})}),Object(N.jsx)(S,{children:Object(N.jsx)(T.a,{onChange:function(t){return e.setEmail(t.target.value)},id:"outlined-basic",label:"Email",variant:"outlined",margin:"normal"})}),Object(N.jsx)(S,{children:Object(N.jsx)(T.a,{onChange:function(t){return e.setUsername(t.target.value)},id:"outlined-basic",label:"Username",variant:"outlined",margin:"normal"})}),Object(N.jsx)(S,{children:Object(N.jsx)(T.a,{onChange:function(t){return e.setPassword(t.target.value)},id:"outlined-basic",label:"Password",variant:"outlined",margin:"normal"})}),Object(N.jsx)(S,{children:Object(N.jsx)(T.a,{error:this.state.error,onChange:function(t){return e.checkPassword(t.target.value)},id:"outlined-basic",label:"Retype Password",variant:"outlined",margin:"normal"})}),Object(N.jsx)(S,{children:this.state.suError?Object(N.jsx)("p",{style:{color:"red"},children:this.state.eCode}):Object(N.jsx)("p",{children:" "})}),Object(N.jsx)(S,{children:Object(N.jsx)(k,{onClick:function(t){return e.submitClicked()},type:"submit",children:"Sign Up"})}),Object(N.jsx)(S,{children:Object(N.jsx)("p",{children:"Click here to sign in:"})}),Object(N.jsx)(S,{children:Object(N.jsx)(g.b,{to:"/signin",children:Object(N.jsx)(k,{children:"Sign In"})})}),this.state.authenticated?Object(N.jsx)(Y.a,{to:"/"}):null]})}}]),n}(l.a.Component);function Q(){var e=Object(j.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],s=Object(j.useState)(""),i=Object(p.a)(s,2),a=i[0],c=i[1],o=Object(j.useState)(!1),l=Object(p.a)(o,2),d=l[0],u=l[1],b=Object(j.useState)(!1),h=Object(p.a)(b,2),x=h[0],O=h[1],f=Object(j.useState)(""),m=Object(p.a)(f,2),v=m[0],y=m[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)(S,{children:Object(N.jsx)("h2",{children:"Welcome!"})}),Object(N.jsx)(S,{children:Object(N.jsx)(T.a,{name:"username",onChange:function(e){return r(e.target.value)},id:"outlined-basic",label:"Username",variant:"outlined",margin:"normal"})}),Object(N.jsx)(S,{children:Object(N.jsx)(T.a,{name:"password",onChange:function(e){return c(e.target.value)},id:"outlined-basic",label:"Password",variant:"outlined",margin:"normal"})}),Object(N.jsx)(S,{children:x?Object(N.jsx)("p",{style:{color:"red"},children:v}):Object(N.jsx)("p",{children:" "})}),Object(N.jsx)(S,{children:Object(N.jsx)(k,{onClick:function(){var e={username:n,password:a};console.log(JSON.stringify(e)),fetch("http://127.0.0.1:5000/api/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){"pass"===e.auth?u(!0):(O(!0),y(e.auth))}))},type:"submit",children:"Sign In"})}),Object(N.jsx)(S,{children:Object(N.jsx)("p",{children:"Click here to sign up:"})}),Object(N.jsx)(S,{children:Object(N.jsx)(g.b,{to:"/signup",children:Object(N.jsx)(k,{children:"Sign Up"})})}),d?Object(N.jsx)(Y.a,{to:"/"}):null]})}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),i(e),a(e)}))};u.a.render(Object(N.jsx)(q,{}),document.getElementById("root")),V()},98:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.0d9fbde8.chunk.js.map