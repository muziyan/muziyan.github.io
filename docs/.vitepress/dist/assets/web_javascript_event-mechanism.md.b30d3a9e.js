import{_ as s,c as n,o as a,d as l}from"./app.977e195f.js";const i=JSON.parse('{"title":"\u4E8B\u4EF6\u673A\u5236","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E8B\u4EF6\u6355\u83B7","slug":"\u4E8B\u4EF6\u6355\u83B7"},{"level":2,"title":"\u4E8B\u4EF6\u5192\u6CE1","slug":"\u4E8B\u4EF6\u5192\u6CE1"},{"level":2,"title":"\u4E8B\u4EF6\u59D4\u6258","slug":"\u4E8B\u4EF6\u59D4\u6258"},{"level":2,"title":"TODO \u5F85\u5B8C\u5584","slug":"todo-\u5F85\u5B8C\u5584"}],"relativePath":"web/javascript/event-mechanism.md"}'),p={name:"web/javascript/event-mechanism.md"},o=l(`<h1 id="\u4E8B\u4EF6\u673A\u5236" tabindex="-1">\u4E8B\u4EF6\u673A\u5236 <a class="header-anchor" href="#\u4E8B\u4EF6\u673A\u5236" aria-hidden="true">#</a></h1><blockquote><p>\u4E8B\u4EF6\u673A\u5236\u62E5\u6709\u4E09\u4E2A\u9636\u6BB5\uFF0C\u5206\u522B\u662F\uFF1A<code>\u4E8B\u4EF6\u6355\u83B7</code>\u3001<code>\u5904\u4E8E\u76EE\u6807</code>\u548C<code>\u4E8B\u4EF6\u5192\u6CE1</code>\u3002<br> \u9700\u8981\u6CE8\u610F\u7684\u662F<code>IE</code>\u662F\u6CA1\u6709\u4E8B\u4EF6\u6355\u83B7\u8FD9\u4E00\u9636\u6BB5\uFF0C\u5177\u4F53\u539F\u56E0\u53EF\u81EA\u884C\u67E5\u9605\u3002</p></blockquote><p>\u4E8B\u4EF6\u6267\u884C\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u6574\u4E2A\u6267\u884C\u6D41\u7A0B\u4F1A\u5148\u53BB<code>\u6355\u83B7</code>\u518D\u8FDB\u884C<code>\u5192\u6CE1</code>\u3002</p><ul><li>\u6355\u83B7:<br> \u4F1A\u4ECE<code>Document</code>\u5BF9\u8C61\u53BB\u5411\u4E0B\u4F20\u64AD\u4E8B\u4EF6\uFF0C\u76F4\u5230\u627E\u5230\u76EE\u6807\u5143\u7D20\uFF0C\u624D\u4F1A\u505C\u6B62\u4F20\u64AD\u3002</li><li>\u5192\u6CE1:<br> \u4F1A\u4ECE\u76EE\u6807\u5143\u7D20\u5411\u4E0A\u4F20\u64AD\u4E8B\u4EF6\uFF0C\u76F4\u5230<code>Document</code>\u5BF9\u8C61\uFF0C\u624D\u4F1A\u505C\u6B62\u4F20\u64AD\u3002</li></ul><div style="text-align:center;"><div style="text-align:center;width:400px;display:inline-block;"><p style="text-align:left;">\u6355\u83B7</p> Document -&gt; DIV -&gt; Target -&gt; DIV -&gt; Document <p style="text-align:right;">\u5192\u6CE1</p></div></div> &gt; Target \u524D\u540E\u533A\u5206\u6355\u83B7\u548C\u5192\u6CE1 <p>\u5047\u8BBE\u6211\u4EEC\u62E5\u6709\u4E0B\u5217\u7684DOM\u7ED3\u6784\uFF0C\u6211\u4EEC\u53BB\u4F9D\u6B21\u5206\u6790\u4E8B\u4EF6\u6355\u83B7\u548C\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u518D\u53BB\u4E86\u89E3\u4E8B\u4EF6\u59D4\u6258\u3002</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8B\u4EF6\u6355\u83B7" tabindex="-1">\u4E8B\u4EF6\u6355\u83B7 <a class="header-anchor" href="#\u4E8B\u4EF6\u6355\u83B7" aria-hidden="true">#</a></h2><blockquote><p>\u7531\u7F51\u666F\u6700\u5148\u63D0\u51FA\uFF0C\u4E8B\u4EF6\u4F1A\u4ECE\u6700\u5916\u5C42\u5F00\u59CB\u89E6\u6CD5\uFF0C\u76F4\u5230\u6700\u5177\u4F53\u7684\u5143\u7D20\u3002</p></blockquote><p>\u5982\u4E0A\u5217<code>DOM</code>\u7ED3\u6784\uFF0C\u5047\u8BBE\u6211\u4EEC\u7684<code>ul</code>\u548C<code>span</code>\u90FD\u7ED1\u5B9A\u4E86\u70B9\u51FB\u4E8B\u4EF6\uFF0C<code>span</code>\u6CA1\u6709\u8131\u79BB\u6587\u6863\u6D41\u88AB\u88AB<code>ul</code>\u5305\u542B\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u70B9\u51FB<code>span</code>\u4F1A\u5148\u89E6\u53D1<code>ul</code>\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u7136\u540E\u518D\u89E6\u53D1<code>span</code>\u7684\u70B9\u51FB\u4E8B\u4EF6\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ul</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">span</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// log\u6267\u884C\u987A\u5E8F</span></span>
<span class="line"><span style="color:#676E95;">// ul =&gt; span</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u53EF\u80FD\u6211\u4EEC\u4E0D\u5E0C\u671B\u89E6\u6CD5\u5B50\u5143\u7D20\u7684\u4E8B\u4EF6\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>stopImmediatePropagation()</code>\u65B9\u6CD5\u6765\u963B\u6B62\u4E8B\u4EF6\u6355\u83B7\u3002</p><blockquote><p>\u5173\u4E8E<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation" target="_blank" rel="noreferrer"><code>stopImmediatePropagation</code></a>\u65B9\u6CD5\u7684\u8BE6\u7EC6\u63CF\u8FF0\u8BF7\u67E5\u9605<code>MDN</code></p></blockquote><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ul</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopImmediatePropagation</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// log \u5C06\u4E0D\u4F1A\u6253\u5370 span</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u603B\u5F97\u6765\u8BF4\u5C31\u662F\u4E8B\u4EF6\u6355\u83B7\u5C31\u662F: \u4F18\u5148\u89E6\u53D1\u7236\u5143\u7D20\u7684\u4E8B\u4EF6\u518D\u4F20\u9012\u5230\u5B50\u5143\u7D20\uFF0C \u4E5F\u5C31\u662F <code>\u7236 =&gt; \u5B50</code>\u3002</p><h2 id="\u4E8B\u4EF6\u5192\u6CE1" tabindex="-1">\u4E8B\u4EF6\u5192\u6CE1 <a class="header-anchor" href="#\u4E8B\u4EF6\u5192\u6CE1" aria-hidden="true">#</a></h2><blockquote><p>\u7531\u5FAE\u8F6F\u63D0\u51FA\uFF0C\u4E8B\u4EF6\u4F1A\u4ECE\u6700\u5185\u5C42\u5F00\u59CB\u89E6\u6CD5\uFF0C\u76F4\u5230\u6700\u5916\u5C42\u7684\u5143\u7D20.</p></blockquote><p>\u8FD8\u662F\u4F7F\u7528\u4E8B\u4EF6\u6355\u83B7\u65F6\u7684\u4F8B\u5B50\u6765\u8FDB\u884C\u8BB2\u89E3\uFF0C <code>ul</code>\u548C<code>span</code>\u90FD\u7ED1\u5B9A\u4E86\u70B9\u51FB\u4E8B\u4EF6\uFF0C <code>span</code>\u6CA1\u6709\u8131\u79BB\u6587\u6863\u6D41\uFF0C \u90A3\u4E48\u8FD9\u65F6\u5019\u6211\u4EEC\u70B9\u51FB<code>span</code>\u7684\u65F6\u5019\u4F1A\u548C\u6355\u83B7\u65F6\u7684\u6267\u884C\u987A\u5E8F\u5B8C\u5168\u76F8\u53CD\uFF0C \u4F1A\u4F18\u5148\u89E6\u6CD5<code>span</code>\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u518D\u89E6\u53D1<code>ul</code>\u7684\u70B9\u51FB\u4E8B\u4EF6\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ul</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">span</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// log\u6267\u884C\u987A\u5E8F</span></span>
<span class="line"><span style="color:#676E95;">// span =&gt; ul</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u70B9\u51FB<code>span</code>\u4E0D\u89E6\u6CD5<code>ul</code>\u7684\u4E8B\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>stopPropagation()</code>\u65B9\u6CD5\u6765\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u3002</p><blockquote><p>\u5173\u4E8E<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation" target="_blank" rel="noreferrer"><code>stopPropagation</code></a>\u65B9\u6CD5\u7684\u8BE6\u7EC6\u63CF\u8FF0\u8BF7\u67E5\u9605<code>MDN</code></p></blockquote><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">span</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopPropagation</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// log \u5C06\u4E0D\u4F1A\u6253\u5370 ul</span></span>
<span class="line"></span></code></pre></div><p>\u603B\u5F97\u6765\u8BF4\u4E8B\u4EF6\u5192\u6CE1\u5C31\u662F: \u4F18\u5148\u89E6\u6CD5\u5B50\u5143\u7D20\u7684\u4E8B\u4EF6\u518D\u4F20\u9012\u5230\u7236\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F <code>\u5B50 =&gt; \u7236</code>\u8FD9\u4E48\u4E00\u4E2A\u6D41\u7A0B\u3002</p><blockquote><p>TIP: \u4E0A\u9762\u5DF2\u7ECF\u8BB2\u8FF0\u4E86\u6355\u83B7\u548C\u5192\u6CE1\u8FD9\u4E24\u79CD\u673A\u5236\u548C\u963B\u6B62\u4F20\u64AD\u7684\u65B9\u6CD5\u3002\u7531\u6B64\u53EF\u89C1\u8FD9\u4E24\u79CD\u673A\u5236\u9664\u4E86\u6267\u884C\u987A\u5E8F\u7684\u4E0D\u4E00\u81F4\uFF0C\u5176\u4ED6\u7684\u90FD\u5927\u5DEE\u4E0D\u5DEE.</p></blockquote><h2 id="\u4E8B\u4EF6\u59D4\u6258" tabindex="-1">\u4E8B\u4EF6\u59D4\u6258 <a class="header-anchor" href="#\u4E8B\u4EF6\u59D4\u6258" aria-hidden="true">#</a></h2><blockquote><p><code>\u4E8B\u4EF6\u59D4\u6258</code>\u53C8\u79F0\u4E3A<code>\u4E8B\u4EF6\u4EE3\u7406</code>\uFF0C\u7B80\u5355\u6765\u8BB2\u5C31\u662F\u5C06\u5143\u7D20\u4E00\u6574\u5757\u8FDB\u884C\u76D1\u542C\uFF0C\u662F\u5426\u89E6\u53D1\u4E86\u5236\u5B9A\u7684\u4E8B\u4EF6\u3002</p></blockquote><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ul</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">targetName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nodeName</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">targetName</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">switch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">targetName</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6839\u636E\u6BCF\u6B21\u70B9\u51FB\u5230\u7684\u5143\u7D20\u6253\u5370\uFF1A UL || LI || SPAN || A</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4F8B\u5B50\uFF0C\u5C31\u662F\u7B80\u5355\u7684\u4E8B\u4EF6\u59D4\u6258\u7528\u6CD5,\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u70B9\u51FB\u5230\u7684\u5143\u7D20\u53BB\u6267\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u800C\u4E0D\u9700\u8981\u6BCF\u4E2A\u5143\u7D20\u90FD\u53BB\u7ED1\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\u3002</p><p>\u4E3A\u4EC0\u4E48\u6211\u4EEC\u53EA\u7ED1\u5B9A\u4E86<code>ul</code>\uFF0C\u5374\u53EF\u4EE5\u83B7\u53D6\u5230<code>li</code>\u3001<code>span</code>\u548C<code>a</code>\u8FD9\u4E9B\u5143\u7D20\u5462\u3002\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528\u4E8B\u4EF6\u59D4\u6258\u5C06<code>ul</code>\u6574\u4E2A<code>DOM</code>\u7ED3\u6784\u90FD\u76D1\u542C\u4E86\uFF0C\u4EFB\u4F55\u5904\u4E8E<code>ul</code>\u5185\u90E8\u4E2D\u7684\u5143\u7D20\uFF0C\u90FD\u4F1A\u89E6\u53D1\u70B9\u51FB\u4E8B\u4EF6\u3002</p><p>\u901A\u5E38\u6211\u4EEC\u4F1A\u5728\u62E5\u6709\u591A\u4E2A\u5B50\u5143\u7D20\u4E14\u9700\u8981\u7ED1\u5B9A\u76F8\u540C\u4E8B\u4EF6\u7684\u5143\u7D20\u4E0A\u53BB\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u9700\u8981\u505A\u4E00\u4E2A<code>tab</code>\u5207\u6362\u6BCF\u4E2A<code>li</code>\u90FD\u9700\u8981\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u6211\u4EEC\u5E94\u8BE5\u53BB\u4F7F\u7528\u4E8B\u4EF6\u59D4\u6258\u800C\u4E0D\u662F\u83B7\u53D6\u6240\u6709<code>li</code>\u53BB\u5355\u72EC\u7ED1\u5B9A\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4E0D\u63A8\u8350</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> liList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">li</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> liList</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">liList</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onClick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// TODO</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u63A8\u8350</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ul </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ul</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nodeName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">LI</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// TODO</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E48\u505A\u7684\u597D\u5904\u5728\u4E8E\uFF1A</p><ul><li>\u6211\u4EEC\u53EA\u9700\u8981\u7ED1\u5B9A\u4E00\u6B21\u4E8B\u4EF6\uFF0C\u63D0\u9AD8\u6548\u7387</li><li>\u52A8\u6001\u6DFB\u52A0\u8FDB\u53BB\u7684\u5143\u7D20\u4E5F\u540C\u6837\u62E5\u6709\u4E8B\u4EF6</li><li>\u4E0D\u9700\u8981\u7BA1\u7406\u591A\u4E2A\u51FD\u6570 <b>(\u8FD9\u91CC\u6307js\u5F15\u64CE\uFF0C\u800C\u4E0D\u662F\u4EE3\u7801\u4E0A)</b></li><li>\u51CF\u5C11\u4E86\u5185\u5B58\u7684\u6D88\u8017 <b>(\u4E0D\u9700\u8981\u989D\u5916\u83B7\u53D6dom\u548C\u6267\u884Cloop\u53BB\u6328\u4E2A\u7ED1\u5B9A\u4E8B\u4EF6)</b></li><li>\u51CF\u5C11\u4E86\u4EE3\u7801\u548CDOM\u4E4B\u95F4\u7684\u5173\u8054 <b>(\u53EA\u9700\u8981\u5173\u6CE8\u7236\u5143\u7D20\uFF0C\u4E0D\u9700\u8981\u5173\u6CE8\u5185\u90E8\u5143\u7D20)</b></li><li>\u4FEE\u6539DOM\u7684\u65F6\u5019\u4E0D\u9700\u8981\u8003\u8651\u5220\u9664\u4E8B\u4EF6 <b>(\u4FEE\u6539dom\u7684\u65F6\u5019\u4E0D\u9700\u8981\u601D\u8003\u4E4B\u524D\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u6CA1\u6709\u5220\u9664\u662F\u5426\u4F1A\u9020\u6210\u526F\u4F5C\u7528)</b></li></ul><blockquote><p>TIP: \u5728<code>vue</code>\u6216<code>react</code>\u7B49\u6846\u67B6\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u6CE8\u610F\u5728\u9500\u6BC1\u7EC4\u4EF6\u65F6\u4F7F\u7528<code>removeEventListener</code>\u5220\u9664\u6389\u4E8B\u4EF6\u76D1\u542C,\u5426\u5219\u591A\u6B21\u7ED1\u5B9A\u4F1A\u6267\u884C\u591A\u6B21\uFF0C\u5BB9\u6613\u9020\u6210\u6267\u884C\u6808\u6EA2\u51FA\u3002</p></blockquote><h2 id="todo-\u5F85\u5B8C\u5584" tabindex="-1">TODO \u5F85\u5B8C\u5584 <a class="header-anchor" href="#todo-\u5F85\u5B8C\u5584" aria-hidden="true">#</a></h2>`,38),e=[o];function c(t,r,D,F,y,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};