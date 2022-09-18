(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"basics":{"name":"James Huang","label":"Software Engineer","picture":"images/jameshuang.jpg","x_pictureFallback":"images/jameshuang.jpg","x_title":"Hey There! Glad you\'re here","summary":"Software Engineer with Entrepreneur mindset","location":{"country":"United States","countryCode":"US","region":"East Coast"},"profiles":[{"network":"Email","username":"james","url":"mailto:james201422@outlook.com","x_icon":"fa fa-2x fa-envelope"},{"network":"LinkedIn","username":"Zhiyu Huang","url":"https://www.linkedin.com/in/zhiyu-huang-201b81bb","x_icon":"fab fa-2x fa-linkedin"},{"network":"GitHub","username":"JamesHuangw22","url":"https://github.com/JamesHuang22","x_icon":"fab fa-2x fa-github"}]},"work":[{"company":"Latch","position":"Software Engineer","website":"https://www.latch.com","startDate":"2022-01-18","endDate":"","summary":"The first IPO startup in my professional path, work for the future of the Smart Home and Smart Access","highlights":[]},{"company":"fusionSpan","position":"Software Application Engineer","website":"https://www.fusionspan.com","startDate":"2021-05-17","endDate":"2022-01-07","summary":"Designed and implemented Elastic Search product, provided cloud data integration solution for non-profit clients.","highlights":[]},{"company":"Hughes Network Systems","position":"Software Engineer","website":"https://www.hughes.com","startDate":"2020-08-17","endDate":"2021-05-07","summary":"Full Stack Software development for the No. 1 Satellite Internet Service Provider.","highlights":[]},{"company":"University of Maryland-College Park","position":"","website":"https://www.umd.edu/","startDate":"2020-05-17","endDate":"2020-05-17","summary":"Graduate from UMD with Bachelor\'s degree of Computer Science and Statistics","highlights":[]},{"company":"UMD CS Department","position":"","website":"https://www.cs.umd.edu/","startDate":"2018-08-17","endDate":"2018-12-07","summary":"Undergradute Teaching Assistant for CMSC250-Discrete Structure","highlights":[]}],"education":[{"institution":"University of Maryland-College Park","area":"Computer Science","studyType":"Bachelor","startDate":"2016-08-20","endDate":"2020-05-20","courses":["Object Oriented Programming","Machine Learning","Data Structure and algorithm"]}],"skills":[{"name":"MySQL","level":"Advanced","keywords":["Framework"]},{"name":"MongoDB","level":"Advanced","keywords":["Framework"]},{"name":"Grails","level":"Intermediate","keywords":["Framework"]},{"name":"Flask","level":"Intermediate","keywords":["Framework"]},{"name":"Angular","level":"Intermediate","keywords":["Framework"]},{"name":"gRPC","level":"Intermediate","keywords":["Framework"]},{"name":"Spring Boot","level":"Intermediate","keywords":["Framework"]},{"name":"Guice","level":"Intermediate","keywords":["Framework"]},{"name":"AWS","level":"Intermediate","keywords":["Framework"]},{"name":"React","level":"Basic","keywords":["Framework"]},{"name":"Java","level":"Advanced","keywords":["Software Developer"]},{"name":"Python","level":"Advanced","keywords":["Software Developer"]},{"name":"C","level":"Intermediate","keywords":["Software Developer"]},{"name":"JavaScript","level":"Basic","keywords":["Software Developer"]},{"name":"Ruby","level":"Intermediate","keywords":["Software Developer"]},{"name":"Swift","level":"Basic","keywords":["Software Developer"]},{"name":"Kotlin","level":"Basic","keywords":["Software Developer"]},{"name":"TypeScript","level":"Basic","keywords":["Software Developer"]}],"languages":[{"language":"English","fluency":"Fluent speaker"},{"language":"Chinese","fluency":"Native speaker"}],"interests":[]}')},4:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(3),r=t.n(l);var i=function(e){return s.a.createElement("a",{href:e.href,className:"navbar-item is-unselectable"},e.text)},c=t(1);class m extends s.a.Component{constructor(e){super(e),this.state={showMenu:!1},this.handleMenuClick=this.handleMenuClick.bind(this)}handleMenuClick(e){const a=this.state.showMenu;this.setState({showMenu:!a})}render(){return s.a.createElement("nav",{className:"navbar is-transparent"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{href:"/",className:"navbar-item title is-unselectable my-name"},c.basics.name),s.a.createElement("span",{className:"navbar-burger burger",onClick:this.handleMenuClick},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{className:"navbar-menu nav-menu "+(this.state.showMenu?"is-active":null)},s.a.createElement("div",{className:"navbar-end",onClick:this.handleMenuClick},s.a.createElement(i,{text:"About Me",href:"#aboutMe"}),s.a.createElement(i,{text:"Skills",href:"#skills"}),s.a.createElement(i,{text:"Experience",href:"#experience"})))))}}var o=m;var u=function(){return s.a.createElement("section",{className:"hero is-dark is-fullheight has-bg-image"},s.a.createElement("div",{className:"hero-head"},s.a.createElement(o,null)),s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"subtitle is-5 has-text-weight-light"},"I'm a"),s.a.createElement("h1",{className:"title"},c.basics.label),s.a.createElement("h2",{className:"subtitle"},c.basics.location.region,", ",c.basics.location.country))),s.a.createElement("div",{className:"hero-foot",style:{paddingBottom:"20px"}},s.a.createElement("div",{className:"columns is-mobile"},s.a.createElement("div",{className:"column"}),c.basics.profiles.map((e,a)=>s.a.createElement("div",{key:a,className:"column has-text-centered"},s.a.createElement("a",{href:e.url,target:"blank",className:"is-hovered",title:e.network},s.a.createElement("span",{className:"icon is-medium is-"},s.a.createElement("i",{className:e.x_icon}))))),s.a.createElement("div",{className:"column"}))))};var d=function(){return s.a.createElement("header",null,s.a.createElement(u,null))};var h=function(e){const a="fas fa-1x "+e.faIcon;return s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},e.text),s.a.createElement("span",{className:"tag is-success"},s.a.createElement("i",{className:a}))))};var E=function(){return s.a.createElement("section",{className:"section has-background-link",id:"aboutMe"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("figure",{className:"image container is-180x180"},s.a.createElement("img",{width:"180px",height:"180px",src:c.basics.picture,alt:c.basics.name,className:"is-rounded",onError:e=>{e.target.onerror=null,e.target.src=c.basics.x_pictureFallback}})),s.a.createElement("p",{className:"subtitle is-4 has-text-white has-text-weight-bold"},c.basics.x_title),s.a.createElement("p",{className:"subtitle is-5 has-text-white has-text-weight-light summary-text"},c.basics.summary),s.a.createElement("p",{className:"subtitle is-5 has-text-white has-text-weight-light summary-text"},"A kid from Wuhan with... ",s.a.createElement("a",{href:"https://www.youtube.com/watch?v=4gi9y3sTrXE"}," Mamba Mentality ")),s.a.createElement("div",{className:"container interests"},s.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered"},c.interests.map((e,a)=>s.a.createElement(h,{key:a,text:e.name,faIcon:e.x_icon}))))))},p={Advanced:100,Intermediate:66,Basic:33};var w=function(e){return s.a.createElement("div",null,s.a.createElement("span",{className:"title is-5 is-spaced"},e.text),s.a.createElement("span",{className:"subtitle is-6 skill-percentage"},e.level),s.a.createElement("progress",{className:"progress is-success",value:p[e.level],max:"100"},p[e.level],"%"))};var v=function(e){const a=e.skills;return s.a.createElement("ul",{className:"skill-list"},function(e){let a=[],t=0;return Object.entries(e).forEach(([e,n])=>{a.push(s.a.createElement("li",{key:t},s.a.createElement(w,{key:t,text:e,level:n}))),t++}),a}(a))};var g=function(){return s.a.createElement("section",{className:"section",id:"skills"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"Skills"),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6"},s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("span",{className:"icon has-text-link"},s.a.createElement("i",{className:"fas fa-3x fa-cogs"})),s.a.createElement("h2",{className:"title is-5"},"Framework and Tool")),s.a.createElement(v,{skills:c.skills.filter(e=>e.keywords.includes("Framework")).reduce((e,a)=>(e[a.name]=a.level,e),{})})),s.a.createElement("div",{className:"column is-6"},s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("span",{className:"icon has-text-link"},s.a.createElement("i",{className:"fas fa-3x fa-laptop-code"})),s.a.createElement("h2",{className:"title is-5"},"Software Development")),s.a.createElement(v,{skills:c.skills.filter(e=>e.keywords.includes("Software Developer")).reduce((e,a)=>(e[a.name]=a.level,e),{})})))))};var f=function(e){return s.a.createElement("div",{className:"timeline-item is-success"},s.a.createElement("div",{className:"timeline-marker is-image is-32x32"},s.a.createElement("img",{src:"",alt:""})),s.a.createElement("div",{className:"timeline-content"},s.a.createElement("p",{className:"heading"},e.date),s.a.createElement("h1",{className:"title is-4"},s.a.createElement("a",{href:e.website},e.company)),s.a.createElement("p",{style:{maxWidth:"25em"}},e.summary)))};var k=function(e){return s.a.createElement("header",{className:"timeline-header"},s.a.createElement("span",{className:"tag is-success"},e.year))};var y=function(){return s.a.createElement("div",{className:"timeline is-centered"},s.a.createElement("header",{className:"timeline-header"},s.a.createElement("span",{className:"tag is-medium is-dark"},(new Date).getFullYear())),s.a.createElement("div",{className:"timeline-item"},s.a.createElement("div",{className:"timeline-marker is-success"}),s.a.createElement("div",{className:"timeline-content"})),c.work.map(e=>new Date(e.startDate).getFullYear()).filter((e,a,t)=>t.indexOf(e)===a).map((e,a)=>{let t=[];return t.push(s.a.createElement(k,{key:a,year:e})),t.push(c.work.filter(a=>new Date(a.startDate).getFullYear()===e).map((e,a)=>s.a.createElement(f,{key:a,date:new Date(e.startDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),company:e.company,summary:e.summary,website:e.website}))),t}))};var N=function(){return s.a.createElement("section",{className:"section",id:"experience"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"Experience"),s.a.createElement(y,null)))};var b=function(){return s.a.createElement("main",null,s.a.createElement(E,null),s.a.createElement(g,null),s.a.createElement(N,null))};var x=function(){return s.a.createElement("footer",{className:"footer has-background-link"},s.a.createElement("div",{className:"content has-text-centered has-text-white"},s.a.createElement("p",null,"Built at ",s.a.createElement("i",{className:"fas fa-moon"})," by"," ",s.a.createElement("a",{className:"has-text-white"},s.a.createElement("strong",null,"James Huang"))),s.a.createElement("p",null,s.a.createElement("img",{width:"512",height:"96",src:"https://bulma.io/images/made-with-bulma--semiwhite.png",className:"bulma-image",alt:""}))))};class S extends n.Component{componentDidMount(){document.title=[c.basics.name,c.basics.label,[c.basics.location.region,c.basics.location.country].join(", ")].join(" | ")}render(){return s.a.createElement("div",null,s.a.createElement(d,null),s.a.createElement(b,null),s.a.createElement(x,null))}}var D=S;r.a.render(s.a.createElement(D,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.c9d6ffe9.chunk.js.map