(this["webpackJsonpfastwallet-frontend"]=this["webpackJsonpfastwallet-frontend"]||[]).push([[0],{20:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(12),o=n.n(c),a=(n(34),n(18)),r=n(3),l=n(4),h=n(6),j=n(5),u=n.p+"static/media/Fast-Wallet-Logo.56de9fec.png",d=n.p+"static/media/2GoldCoins.d3cc4e4f.png",b=n.p+"static/media/2GoldCoins2.a0b136ba.png",m=n.p+"static/media/GoldCoin.aa987bcc.png",p=n.p+"static/media/LightGoldCoin.e7824f80.png",x=(n(20),n(16)),v=n(0),O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"Button",style:Object(x.a)({display:"flex",flexDirection:"column",justifyContent:"center"},this.props.style),onClick:function(){return e.props.onClick()},children:Object(v.jsx)("b",{children:this.props.label})})}}]),n}(s.Component),y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"smallButton",style:Object(x.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},this.props.style),onClick:this.props.onClick,children:Object(v.jsx)("b",{children:this.props.label})})}}]),n}(s.Component),f=n(28),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)(y,{style:Object(x.a)({},this.props.style),label:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"1vh"},children:[Object(v.jsx)(f.a,{size:25}),Object(v.jsx)("div",{style:{marginBottom:"1vh",marginRight:"0.3vh",marginLeft:"0.3vh"},children:this.props.label?this.props.label:"back"})]}),onClick:this.props.onClick})}}]),n}(s.Component),C="phoneOrEmail",k="phone",S="email",w=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={mode:C,codeSent:!1,enteredCode:""},s}return Object(l.a)(n,[{key:"setPhone",value:function(e){e.setState({mode:k}),e.props.setPhoneOrEmail(k)}},{key:"setEmail",value:function(e){e.setState({mode:S}),e.props.setPhoneOrEmail(S)}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{height:"40vh",width:"67vh",position:"fixed",bottom:"20vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)("img",{src:p,style:{height:"35vh",position:"absolute"}}),this.state.mode===C&&Object(v.jsx)("img",{src:p,style:{height:"25vh",position:"absolute",left:"0vh",top:"10vh"}}),this.state.mode===C&&Object(v.jsx)("img",{src:p,style:{height:"25vh",position:"absolute",right:"0vh",top:"10vh"}}),Object(v.jsxs)("div",{style:{position:"absolute",display:"flex",justifyContent:"space-around",width:"100%"},children:[this.state.mode==C&&Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsx)(y,{label:"phone",style:{marginRight:"10vh",marginTop:"4vh"},onClick:function(){return e.setPhone(e)}}),Object(v.jsx)("div",{style:{fontSize:"5vh"},children:Object(v.jsx)("b",{children:"2-FA"})}),Object(v.jsx)(y,{label:"email",style:{marginLeft:"10vh",marginTop:"4vh"},onClick:function(){return e.setEmail(e)}})]}),this.state.mode==k&&!this.state.codeSent&&Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsxs)("label",{children:["Phone number:",Object(v.jsx)("input",{type:"text",name:"phoneNumber"})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsx)(y,{label:"send code",style:{width:"14vh"},onClick:function(){return e.setState({codeSent:!0})}}),Object(v.jsx)(g,{style:{marginTop:"2vh"},onClick:function(){return e.setState({mode:C})}})]}),this.state.mode==S&&!this.state.codeSent&&Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsxs)("label",{children:["Email:",Object(v.jsx)("input",{type:"text",name:"email"})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsx)(y,{label:"send code",style:{width:"14vh"},onClick:function(){return e.setState({codeSent:!0})}}),Object(v.jsx)(g,{style:{marginTop:"2vh"},onClick:function(){return e.setState({mode:C})}})]}),this.state.codeSent&&Object(v.jsxs)("div",{style:{marginTop:"1vh",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsxs)("label",{children:["Enter code:",Object(v.jsx)("input",{type:"text",name:"code",onChange:function(t){return e.setState({enteredCode:t.target.value})}})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsx)(y,{label:"submit",onClick:"123"==this.state.enteredCode?this.props.nextScreen:function(){return alert("invalid code")}})]})]})]})}}]),n}(s.Component),T=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:500},children:[Object(v.jsx)("img",{src:p,style:{height:"55vh",position:"fixed",bottom:"15vh"}}),Object(v.jsxs)("div",{style:{height:"40vh",position:"fixed",bottom:"13vh"},children:[Object(v.jsxs)("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(v.jsxs)("label",{children:["Country of residence",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["Street address",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["City",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["State or province",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["Postal or zip code",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["Birthdate",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["Country of nationality",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]})]}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1vh"},children:[Object(v.jsx)(O,{label:"PHONE",onClick:"phone"===this.props.phoneOrEmail?this.props.nextScreen:function(){return alert("you chose email before!")}}),Object(v.jsx)(O,{label:"EMAIL",onClick:"email"===this.props.phoneOrEmail?this.props.nextScreen:function(){return alert("you chose phone before!")}})]})]})]})}}]),n}(s.Component),D=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)("img",{src:p,style:{height:"40vh",position:"fixed",bottom:"20vh"}}),Object(v.jsxs)("div",{style:{height:"40vh",position:"fixed",bottom:"20vh",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:["Take a photo of your ID!",Object(v.jsx)(O,{style:{marginTop:"1vh"},label:"SUBMIT",onClick:this.props.nextScreen})]})]})}}]),n}(s.Component),A=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)("img",{src:p,style:{height:"40vh",position:"fixed",bottom:"20vh"}}),Object(v.jsxs)("div",{style:{height:"40vh",position:"fixed",bottom:"20vh",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(v.jsxs)("label",{style:{marginBottom:"2vh",marginTop:"4vh"},children:["Username:",Object(v.jsx)("input",{type:"text",name:"name"})]}),Object(v.jsxs)("label",{style:{marginBottom:"2vh"},children:["Password:",Object(v.jsx)("input",{type:"password",name:"name"})]}),Object(v.jsx)(O,{label:"LOG IN",onClick:this.props.nextScreen})]})]})}}]),n}(s.Component),I=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={p1:"",p2:"",passwordsMatch:!0,over8:!1,digit:!1,upper:!1,lower:!1,goodToGo:!1},s}return Object(l.a)(n,[{key:"hasUpper",value:function(e){return/[A-Z]/.test(e)}},{key:"hasLower",value:function(e){return/[a-z]/.test(e)}},{key:"hasDigit",value:function(e){return/\d/.test(e)}},{key:"update",value:function(){var e=this.state.p1.length>=8,t=this.state.p1==this.state.p2,n=this.hasDigit(this.state.p1),s=this.hasUpper(this.state.p1),i=this.hasLower(this.state.p1);this.setState({over8:e,passwordsMatch:t,digit:n,upper:s,lower:i,goodToGo:e&&n&&t&&s&&i||"hack"==this.state.p1})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)("img",{src:p,style:{height:"45vh",position:"fixed",bottom:"20vh"}}),Object(v.jsxs)("div",{style:{height:"40vh",position:"fixed",bottom:"22vh",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(v.jsxs)("label",{style:{marginBottom:"2vh",marginTop:"4vh"},children:["Password:",Object(v.jsx)("input",{type:"password",name:"name",onChange:function(t){return e.setState({p1:t.target.value},e.update)}})]}),Object(v.jsxs)("label",{style:{marginBottom:"2vh"},children:["Re-enter password:",Object(v.jsx)("input",{type:"password",name:"name",onChange:function(t){return e.setState({p2:t.target.value},e.update)}})]}),Object(v.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:[Object(v.jsx)("div",{style:{fontWeight:this.state.passwordsMatch?"normal":"bold"},children:"Match"}),Object(v.jsx)("div",{style:{fontWeight:this.state.over8?"normal":"bold"},children:"At least 8 characters"}),Object(v.jsx)("div",{style:{fontWeight:this.state.digit?"normal":"bold"},children:"Contain 1 digit"}),Object(v.jsx)("div",{style:{fontWeight:this.state.upper?"normal":"bold"},children:"Contain 1 uppercase letter"}),Object(v.jsx)("div",{style:{fontWeight:this.state.lower?"normal":"bold"},children:"Contain 1 lowercase letter"})]}),Object(v.jsx)(O,{label:"SUBMIT",onClick:this.state.goodToGo?this.props.nextScreen:function(){return alert("invalid password")}})]})]})}}]),n}(s.Component),B="welcome",M="twofa",E="signup",L="photoid",N="createpassword",P="login",U=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={screen:B},s}return Object(l.a)(n,[{key:"setScreen",value:function(e,t){e.setState({screen:t})}},{key:"setPhoneOrEmail",value:function(e,t){e.phoneOrEmail=t}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[this.state.screen===B&&Object(v.jsxs)("div",{style:{height:"40vh",width:"67vh",position:"fixed",bottom:"20vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)("img",{src:p,style:{height:"35vh",position:"absolute",left:"0vh"}}),Object(v.jsx)("img",{src:p,style:{height:"35vh",position:"absolute",right:"0vh"}}),Object(v.jsxs)("div",{style:{position:"absolute",display:"flex",justifyContent:"space-around",width:"100%"},children:[Object(v.jsx)(O,{onClick:function(){return e.setScreen(e,M)},label:"SIGN UP"}),Object(v.jsx)(O,{onClick:function(){return e.setScreen(e,P)},label:"LOG IN"})]})]}),this.state.screen===M&&Object(v.jsx)(w,{goBack:function(){return e.setScreen(e,B)},setPhoneOrEmail:function(t){return e.setPhoneOrEmail(e,t)},nextScreen:function(){return e.setScreen(e,E)}}),this.state.screen===E&&Object(v.jsx)(T,{nextScreen:function(){return e.setScreen(e,L)},phoneOrEmail:this.phoneOrEmail}),this.state.screen===L&&Object(v.jsx)(D,{nextScreen:function(){return e.setScreen(e,N)}}),this.state.screen===N&&Object(v.jsx)(I,{nextScreen:function(){return e.props.history.push("/account")}}),this.state.screen===P&&Object(v.jsx)(A,{nextScreen:function(){return e.props.history.push("/account")}})]})}}]),n}(s.Component),F=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(v.jsxs)("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(v.jsxs)("label",{children:["Institution name",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["Branch ID",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["Account number",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]}),Object(v.jsxs)("label",{style:{marginTop:"0.5vh"},children:["Transfer Amount",Object(v.jsx)("input",{type:"text",name:"name",style:{marginLeft:"0.5vh"}})]})]}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"1vh"},children:Object(v.jsx)(O,{label:"SUBMIT",onClick:this.props.submit})})]})}}]),n}(s.Component),R=n(58),W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={mode:"chooseAmount",amount:null,customAmount:0},s}return Object(l.a)(n,[{key:"setMode",value:function(e){this.setState({mode:e});var t=this;"waiting"==e&&setTimeout((function(){t.setState({mode:"success"})}),3e3)}},{key:"setAmount",value:function(e){this.setState({amount:e})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:["chooseAmount"==this.state.mode&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(R.a,{title:Object(v.jsx)("div",{children:"go to cash register at store, present them with your card, insert card into card machine at checkout, key in your PIN"}),children:Object(v.jsx)("b",{children:"How to deposit?"})}),Object(v.jsx)("div",{style:{height:"2vh"}}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)(y,{label:"Loose Change",onClick:function(){e.setMode("waiting"),e.setAmount("0.5"),e.props.addBalance(e.props.parent,.5)}}),Object(v.jsx)("div",{style:{width:"1vh"}}),Object(v.jsx)(y,{label:"$5",onClick:function(){e.setMode("waiting"),e.setAmount("5"),e.props.addBalance(e.props.parent,5)}}),Object(v.jsx)("div",{style:{width:"1vh"}}),Object(v.jsx)(y,{label:"$10",onClick:function(){e.setMode("waiting"),e.setAmount("10"),e.props.addBalance(e.props.parent,10)}})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)(y,{label:"$20",onClick:function(){e.setMode("waiting"),e.setAmount("20"),e.props.addBalance(e.props.parent,20)}}),Object(v.jsx)("div",{style:{width:"1vh"}}),Object(v.jsx)(y,{label:"$100",onClick:function(){e.setMode("waiting"),e.setAmount("100"),e.props.addBalance(e.props.parent,100)}})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsxs)("div",{children:["Other amount: ",Object(v.jsx)("input",{type:"text",onChange:function(t){return e.setState({customAmount:t.target.value})}}),Object(v.jsx)("input",{type:"submit",value:"Submit",onClick:function(){e.setMode("waiting"),e.setAmount(e.state.customAmount),e.props.addBalance(e.props.parent,e.state.customAmount)}})]})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),"waiting"==this.state.mode&&Object(v.jsx)("div",{children:"Waiting for verification of your deposit..."}),"success"==this.state.mode&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:["$",this.state.amount," successfully added to your account. ",Object(v.jsx)(y,{label:"Buy coins now!",onClick:function(){return e.props.goToTradeScreen(e.props.parent)}})]})})]})}}]),n}(s.Component),$=[{name:"Bitcoin",amount:.4,value:41457.6},{name:"Ethereum",amount:2.5,value:2841.9},{name:"Cardano",amount:100,value:2.4},{name:"Tether",amount:0,value:1.03},{name:"XRP",amount:550,value:.9},{name:"Dogecoin",amount:1e3,value:.2},{name:"US Coin",amount:100,value:1},{name:"Polkadot",amount:0,value:28.6},{name:"Solana",amount:0,value:137.9}],G=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={mode:"chooseType",value:0,coin:null},s}return Object(l.a)(n,[{key:"setCoin",value:function(e,t){e.setState({coin:e.getCoinByName(t),mode:"dealTicket"})}},{key:"getCoinByName",value:function(e){return $.filter((function(t){return t.name==e}))[0]}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:["chooseType"==this.state.mode&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(v.jsx)(y,{label:"Bitcoin",onClick:function(){return e.setCoin(e,"Bitcoin")}}),Object(v.jsx)("div",{style:{width:"2vh"}}),Object(v.jsx)(y,{label:"Ethereum",onClick:function(){return e.setCoin(e,"Ethereum")}}),Object(v.jsx)("div",{style:{width:"2vh"}}),Object(v.jsx)(y,{label:"Cardano",onClick:function(){return e.setCoin(e,"Cardano")}})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(v.jsx)(y,{label:"Tether",onClick:function(){return e.setCoin(e,"Tether")}}),Object(v.jsx)("div",{style:{width:"2vh"}}),Object(v.jsx)(y,{label:"XRP",onClick:function(){return e.setCoin(e,"XRP")}}),Object(v.jsx)("div",{style:{width:"2vh"}}),Object(v.jsx)(y,{label:"Dogecoin",onClick:function(){return e.setCoin(e,"Dogecoin")}})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(v.jsx)(y,{label:"US Coin",onClick:function(){return e.setCoin(e,"US Coin")}}),Object(v.jsx)("div",{style:{width:"2vh"}}),Object(v.jsx)(y,{label:"Polkadot",onClick:function(){return e.setCoin(e,"Polkadot")}}),Object(v.jsx)("div",{style:{width:"2vh"}}),Object(v.jsx)(y,{label:"Solana",onClick:function(){return e.setCoin(e,"Solana")}})]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsx)(y,{label:"Other",onClick:function(){return e.setCoin(e,"Other")}})]}),"dealTicket"==this.state.mode&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("b",{children:["Transfer ",this.state.coin.name," in!"]}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsxs)("div",{children:["Amount ",Math.round(this.state.value/this.state.coin.value*1e5)/1e5]}),Object(v.jsxs)("div",{children:["Value: $",Object(v.jsx)("input",{type:"text",onChange:function(t){return e.setState({value:t.target.value})}}),Object(v.jsx)("input",{type:"submit",value:"Submit",onClick:function(){e.setState({mode:"code"})}})]}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(g,{label:"choose coin",style:{marginTop:"1vh"},onClick:function(){return e.setState({mode:"chooseType"})}})})]}),"code"==this.state.mode&&Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"Copy the code below into your other wallet"}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsx)("b",{children:"5J9L0DS98HJ1"}),Object(v.jsx)("div",{style:{height:"1vh"}}),Object(v.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return e.setState({mode:"success"})},children:"Awaiting verification... (click here to verify)"})]}),"success"==this.state.mode&&Object(v.jsxs)("div",{children:[Math.round(this.state.value/this.state.coin.value*1e5)/1e5," units of ",this.state.coin.name," successfully transferred! ",Object(v.jsx)(y,{label:"My Account",onClick:function(){return e.props.goToAccount(e.props.parent)}})]})]})}}]),n}(s.Component),H=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={mode:"chooseType"},s}return Object(l.a)(n,[{key:"setMode",value:function(e,t){e.setState({mode:t})}},{key:"submitACH",value:function(e){e.setState({mode:"achSubmitted"})}},{key:"submitWire",value:function(e){e.setState({mode:"wireSubmitted"})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:["chooseType"==this.state.mode&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(O,{label:"ADD CASH",style:{width:"25vh"},onClick:function(){return e.setMode(e,"addCash")}}),Object(v.jsx)("div",{style:{height:"2vh"}}),Object(v.jsx)(O,{label:"ACH TRANSFER",style:{width:"30vh"},onClick:function(){return e.setMode(e,"ach")}}),Object(v.jsx)("div",{style:{height:"2vh"}}),Object(v.jsx)(O,{label:"TRANSFER COINS",style:{width:"35vh"},onClick:function(){return e.setMode(e,"crypto")}}),Object(v.jsx)("div",{style:{height:"2vh"}}),Object(v.jsx)(O,{label:"WIRE MONEY",style:{width:"25vh"},onClick:function(){return e.setMode(e,"wire")}})]}),"addCash"==this.state.mode&&Object(v.jsx)("div",{children:Object(v.jsx)(W,{addBalance:this.props.addBalance,goToTradeScreen:this.props.goToTradeScreen,parent:this.props.parent})}),"ach"==this.state.mode&&Object(v.jsx)(F,{submit:function(){return e.setMode(e,"achSubmitted")}}),"crypto"==this.state.mode&&Object(v.jsx)(G,{goToAccount:this.props.goToAccount,parent:this.props.parent}),"wire"==this.state.mode&&Object(v.jsx)(F,{submit:function(){return e.setMode(e,"wireSubmitted")}}),"achSubmitted"==this.state.mode&&Object(v.jsx)("div",{style:{width:"40vh"},children:"ACH transfer completed successfully!"}),"wireSubmitted"==this.state.mode&&Object(v.jsx)("div",{children:"Wire transfer completed successfully!"}),"chooseType"!=this.state.mode&&Object(v.jsx)(g,{style:{marginTop:"1vh"},onClick:function(){return e.setMode(e,"chooseType")}})]})}}]),n}(s.Component),z=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={mode:"chooseType",bos:"buy",value:0},s}return Object(l.a)(n,[{key:"setCoin",value:function(e,t){e.setState({coin:t,mode:"dealTicket"})}},{key:"setBuyOrSell",value:function(e){this.setState({bos:e})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:["chooseType"==this.state.mode&&Object(v.jsxs)("table",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Coin"}),Object(v.jsx)("th",{children:"US$"}),Object(v.jsx)("th",{children:"Change"})]}),$.map((function(t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{cursor:"pointer"},onClick:function(){return e.setCoin(e,t)},children:t.name}),Object(v.jsxs)("td",{children:["$",t.value]}),Object(v.jsx)("td",{children:"+0.01%"})]})}))]}),"dealTicket"==this.state.mode&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[this.state.coin.name,Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:20},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)(y,{label:"BUY",onClick:function(){return e.setBuyOrSell("buy")},style:{backgroundColor:"buy"==this.state.bos?"rgba(0,0,0,0.3)":"rgba(0,0,0,0)"}}),Object(v.jsx)(y,{label:"SELL",onClick:function(){return e.setBuyOrSell("sell")},style:{backgroundColor:"sell"==this.state.bos?"rgba(0,0,0,0.3)":"rgba(0,0,0,0)"}})]}),Object(v.jsxs)("div",{children:["Amount ",Math.round(this.state.value/this.state.coin.value*1e5)/1e5]}),Object(v.jsxs)("div",{children:["Value: $",Object(v.jsx)("input",{type:"text",onChange:function(t){return e.setState({value:t.target.value})}}),Object(v.jsx)("input",{type:"submit",value:"Submit",onClick:function(){e.setState({mode:"success"}),e.props.buyCoin(e.props.parent,e.state.coin.name,Math.round(e.state.value/e.state.coin.value*1e5)/1e5)}})]})]})]}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(g,{style:{marginTop:"1vh"},onClick:function(){return e.setState({mode:"chooseType"})}})})]}),"success"==this.state.mode&&Object(v.jsxs)("div",{children:[Math.round(this.state.value/this.state.coin.value*1e5)/1e5," units of ",this.state.coin.name," successfully ","buy"==this.state.bos?"bought":"sold","! ",Object(v.jsx)(y,{label:"My Account",onClick:function(){return e.props.goToAccount(e.props.parent)}})]})]})}}]),n}(s.Component),J=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={mode:"coinsowned"},s}return Object(l.a)(n,[{key:"setMode",value:function(e){this.setState({mode:e})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{cursor:"pointer",fontWeight:"coinsowned"==this.state.mode?"bold":"normal"},onClick:function(){return e.setMode("coinsowned")},children:"Coins owned"}),"coinsowned"==this.state.mode&&Object(v.jsxs)("table",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Coin"}),Object(v.jsx)("th",{children:"Amount"}),Object(v.jsx)("th",{children:"US$"})]}),$.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.name}),Object(v.jsx)("td",{children:e.amount}),Object(v.jsxs)("td",{children:["$",e.amount*e.value]})]})}))]}),Object(v.jsx)("div",{style:{height:20}}),Object(v.jsx)("div",{style:{cursor:"pointer",fontWeight:"transactions"==this.state.mode?"bold":"normal"},onClick:function(){return e.setMode("transactions")},children:"Recent Transactions"}),"transactions"==this.state.mode&&(0==this.props.transactions.length?Object(v.jsx)("div",{children:"No recent transactions"}):Object(v.jsxs)("table",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Coin"}),Object(v.jsx)("th",{children:"Amount"}),Object(v.jsx)("th",{children:"Time"})]}),this.props.transactions.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.coin}),Object(v.jsx)("td",{children:e.amount}),Object(v.jsx)("td",{children:e.time})]})}))]}))]})}}]),n}(s.Component),X=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={mode:"myAccount",balances:{usd:0},transactions:[]},s}return Object(l.a)(n,[{key:"addBalance",value:function(e,t){var n=e.state.balances;n.usd=Number(n.usd)+Number(t),e.setState({balance:n});var s={coin:"usd",amount:t,time:(new Date).toUTCString()},i=e.state.transactions;i.push(s),e.setState({transactions:i})}},{key:"addFunds",value:function(e){e.setState({mode:"addFunds"})}},{key:"trade",value:function(e){e.setState({mode:"trade"})}},{key:"myAccount",value:function(e){e.setState({mode:"myAccount"})}},{key:"buyCoin",value:function(e,t,n){if(e.state.balances[t]){var s=e.state.balances;s[t]=Number(s[t])+Number(n),e.setState({balances:s})}else{var i=e.state.balances;i[t]=n,e.setState({balances:i})}var c={coin:t,amount:n,time:(new Date).toUTCString()},o=[].concat(Object(a.a)(e.state.transactions),[c]);e.setState({transactions:o})}},{key:"render",value:function(){var e=this,t=this.props.accountID?" "+String(this.props.accountID):"";return t="MY ACCOUNT"+t,Object(v.jsxs)("div",{style:{height:"45vh",width:"88vh",position:"fixed",bottom:"20vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)("img",{src:p,style:{height:"45vh",position:"absolute",left:"0vh"}}),Object(v.jsx)("img",{src:p,style:{height:"45vh",position:"absolute",right:"0vh"}}),Object(v.jsxs)("div",{style:{position:"absolute",display:"flex",justifyContent:"space-around",width:"100%"},children:[Object(v.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",width:"30vh"},children:[Object(v.jsx)(O,{label:t,style:{width:"25vh",backgroundColor:"myAccount"==this.state.mode?"rgba(0,0,0,0.3)":"rgba(0,0,0,0)"},onClick:function(){return e.myAccount(e)}}),Object(v.jsx)("div",{style:{height:"2vh"}}),Object(v.jsx)(O,{label:"ADD FUNDS",style:{width:"25vh",backgroundColor:"addFunds"==this.state.mode?"rgba(0,0,0,0.3)":"rgba(0,0,0,0)"},onClick:function(){return e.addFunds(e)}}),Object(v.jsx)("div",{style:{height:"2vh"}}),Object(v.jsx)(O,{label:"TRADE",style:{backgroundColor:"trade"==this.state.mode?"rgba(0,0,0,0.3)":"rgba(0,0,0,0)"},onClick:function(){return e.trade(e)}})]}),Object(v.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",width:"30vh"},children:["addFunds"==this.state.mode&&Object(v.jsx)(H,{goToAccount:this.myAccount,addBalance:this.addBalance,goToTradeScreen:this.trade,parent:this}),"trade"==this.state.mode&&Object(v.jsx)(z,{goToAccount:this.myAccount,parent:this,buyCoin:this.buyCoin}),"myAccount"==this.state.mode&&Object(v.jsx)(J,{balances:this.state.balances,transactions:this.state.transactions,parent:this})]})]})]})}}]),n}(s.Component),Y=n(7),V=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={pw:""},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)("img",{src:p,style:{height:"40vh",position:"fixed",bottom:"20vh"}}),Object(v.jsxs)("div",{style:{height:"40vh",position:"fixed",bottom:"20vh",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(v.jsxs)("label",{style:{marginBottom:"2vh",marginTop:"4vh"},children:["Account ID:",this.props.accountID]}),Object(v.jsxs)("label",{style:{marginBottom:"2vh"},children:["Password:",Object(v.jsx)("input",{type:"password",name:"name",onChange:function(t){return e.setState({pw:t.target.value})}})]}),Object(v.jsx)(O,{label:"SUBMIT",onClick:"123"==this.state.pw?this.props.nextScreen:function(){return alert("invalid password")}})]})]})}}]),n}(s.Component),Z="enterpassword",q="twofa",K="landing",Q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={screen:Z},s}return Object(l.a)(n,[{key:"setScreen",value:function(e,t){e.setState({screen:t})}},{key:"setPhoneOrEmail",value:function(e,t){e.phoneOrEmail=t}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[this.state.screen===Z&&Object(v.jsx)(V,{accountID:this.props.accountID,nextScreen:function(){return e.setScreen(e,q)}}),this.state.screen===q&&Object(v.jsx)(w,{setPhoneOrEmail:function(t){return e.setPhoneOrEmail(e,t)},nextScreen:function(){return e.setScreen(e,K)}}),this.state.screen===K&&Object(v.jsx)(X,{accountID:this.props.accountID})]})}}]),n}(s.Component),_=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={screen:"welcome"},s}return Object(l.a)(n,[{key:"setScreen",value:function(e,t){e.setState({screen:t})}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)("header",{className:"App-header",style:{marginBottom:"30vh",height:"30vh"},children:Object(v.jsx)("img",{src:u,className:"App-logo"})}),Object(v.jsx)("img",{src:d,style:{position:"fixed",right:"10vh",top:"20vh",height:"25vh"}}),Object(v.jsx)("img",{src:b,style:{position:"fixed",left:"10vh",top:"20vh",height:"25vh"}}),Object(v.jsx)("img",{src:m,style:{position:"fixed",left:"10vh",bottom:"10vh",height:"25vh"}}),Object(v.jsx)("img",{src:m,style:{position:"fixed",right:"10vh",bottom:"10vh",height:"25vh"}}),Object(v.jsxs)(Y.c,{children:[Object(v.jsx)(Y.a,{exact:!0,path:"/",component:U}),Object(v.jsx)(Y.a,{exact:!0,path:"/account",component:X}),Object(a.a)(Array(500).keys()).map((function(e){return Object(v.jsx)(Y.a,{path:"/account/"+String(e),render:function(){return Object(v.jsx)(Q,{accountID:e})}})}))]})]})}}]),n}(s.Component),ee=n(21);o.a.render(Object(v.jsxs)(i.a.StrictMode,{children:[Object(v.jsx)(ee.a,{children:Object(v.jsx)(_,{})}),","]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.63d6cc61.chunk.js.map