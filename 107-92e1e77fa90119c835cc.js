webpackJsonp([107],{1551:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function p(n){return b.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function e(n){return b.default.createElement(p,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return b.default.createElement(p,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),k=s(1),i=t(k),r=s(4),d=t(r),m=s(2),g=t(m),f=s(3),h=t(f),v=s(0),b=t(v),y=s(229),w=t(y),E=s(354),z=function(){return b.default.createElement(E.Badge,{count:5},b.default.createElement(E.Icon,{type:"bell-o",className:"demo-cont"}))},N=function(){return b.default.createElement("div",null,b.default.createElement(E.Badge,{count:99},b.default.createElement(E.Icon,{type:"bell-o",className:"demo-cont"})),b.default.createElement(E.Badge,{count:120},b.default.createElement(E.Icon,{type:"bell-o",className:"demo-cont"})),b.default.createElement(E.Badge,{count:120,maxCount:10},b.default.createElement(E.Icon,{type:"bell-o",className:"demo-cont"})),b.default.createElement(E.Badge,{count:1200,maxCount:999},b.default.createElement(E.Icon,{type:"bell-o",className:"demo-cont"})))},B=function(){var n=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showZero:!0},t.handleChange=function(n){t.setState({showZero:n})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showZero;return b.default.createElement("div",null,b.default.createElement(E.Badge,{count:0,showZero:n},b.default.createElement(E.Icon,{type:"bell-o",className:"demo-cont"})),b.default.createElement(E.Switch,{size:"small",checked:n,onChange:this.handleChange}))}}]),a}(b.default.Component);return b.default.createElement(n,null)},_=function(){var n=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showDot:!0},t.handleChange=function(n){t.setState({showDot:n})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showDot;return b.default.createElement("div",null,b.default.createElement(E.Badge,{dot:n},b.default.createElement(E.Icon,{type:"bell-o",className:"demo-cont"})),b.default.createElement(E.Switch,{size:"small",checked:n,onChange:this.handleChange}))}}]),a}(b.default.Component);return b.default.createElement(n,null)},j=function(){return b.default.createElement("div",null,b.default.createElement("div",{className:"zent-badge-demo-wrapper"},b.default.createElement("span",null,"店铺消息"),b.default.createElement(E.Badge,{count:100})),b.default.createElement("div",{className:"zent-badge-demo-wrapper"},b.default.createElement("span",null,"店铺消息"),b.default.createElement(E.Badge,{count:100,dot:!0})))},C=function(){return b.default.createElement("div",null,b.default.createElement(E.Badge,{count:5,offset:[-5,-5]},b.default.createElement("div",{className:"zent-badge-demo-square"})),b.default.createElement(E.Badge,{dot:!0,offset:[-2,-2]},b.default.createElement("div",{className:"zent-badge-demo-square"})))},x=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return b.default.createElement("div",{className:"zandoc-react-demo"},b.default.createElement("div",{className:"zandoc-react-demo__preview"},e),b.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.default.createElement("div",{className:"zandoc-react-demo__title"},b.default.createElement("p",null,s||"")),b.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.default.createElement("pre",{className:"zandoc-react-demo__code"},b.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),D=function(n){function a(){return(0,i.default)(this,a),(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,w.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return b.default.createElement("div",{className:"zandoc-react-container",key:null},b.default.createElement(o,{style:".zent-badge .demo-cont {\n\twidth: 40px;\n\theight: 40px;\n\tline-height: 40px;\n\tborder-radius: 20px;\n\tbackground: #38f;\n\tcolor: #fff;\n\tfont-size: 20px;\n}\n.zent-badge {\n\tmargin-right: 30px;\n}\n.zent-badge-demo-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n.zent-badge-demo-square {\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 4px;\n\tbackground: #eee;\n}"}),b.default.createElement(e,{html:'<h2 class="anchor-heading"><a href="#badge-hui-biao-shu">¶</a><a href="javascript:void(0)" id="badge-hui-biao-shu" class="anchor-point"></a>Badge 徽标数</h2>\n<p>徽标数，一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>用于提示新的消息，放在文字或者图标右上角或右侧。</li>\n<li>可以显示具体消息的条数。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),b.default.createElement(x,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(z)),b.default.createElement(x,{title:"设置最大显示信息数",id:"Demomaxnum",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span>Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1200</span><span class="token punctuation">}</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">999</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(N)),b.default.createElement(x,{title:"设置是否显示消息数0",id:"Demoshowzero",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span>Icon<span class="token punctuation">,</span>Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>showZero<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>showZero<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showZero <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> showZero <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">showZero</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showZero<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showZero<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(B)),b.default.createElement(x,{title:"小红点，不需要指定具体的count",id:"Demodot",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge<span class="token punctuation">,</span>Icon<span class="token punctuation">,</span>Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>showDot<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>showDot<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showDot <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> showDot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showDot<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showDot<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(_)),b.default.createElement(x,{title:"独立徽标",id:"Demosinglebadge",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>店铺消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>/ <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>店铺消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>Badge count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span> dot<span class="token operator">/</span> <span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(j)),b.default.createElement(x,{title:"自定义偏移量",id:"Demooffset",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-badge-demo-square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.default.createElement(C)),b.default.createElement(e,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>消息条数</td>\n<td><code>number</code></td>\n<td>否</td>\n<td><code>0</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maxCount</td>\n<td>最大完全显示消息条数</td>\n<td><code>number</code></td>\n<td>否</td>\n<td><code>99</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>是否显示为小红点</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code>\n,\n<code>false</code></td>\n</tr>\n<tr>\n<td>showZero</td>\n<td>消息数为0时是否显示</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code>\n,\n<code>false</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>偏移量，格式为 \n<code>[x, y]</code></td>\n<td><code>array</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(v.Component);a.default=D}});