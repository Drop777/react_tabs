(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=n(3),u=n(4),s=n(6),i=n(5),b=n(7),m=(n(13),n(14),function(t){var e=t.tabs,n=t.currentTabIndex,a=t.selectTab,r=function(t){return t===n?"nav-item active":"nav-item"};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav-bar"},e.map(function(t,e){return c.a.createElement("button",{type:"button",className:r(e),key:e,onClick:function(){return a(e)}},t.title)})),c.a.createElement("p",{className:"content"},e[n].content))}),p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],currentTabIndex:0},n.selectTab=function(t){n.setState({currentTabIndex:t})},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.tabs,n=t.currentTabIndex,a=this.selectTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,e.length," tabs"),c.a.createElement(m,{tabs:e,currentTabIndex:n,selectTab:a}))}}]),e}(c.a.Component);o.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.679ec526.chunk.js.map