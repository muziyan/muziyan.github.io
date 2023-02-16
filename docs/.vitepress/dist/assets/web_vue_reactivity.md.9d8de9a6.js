import{_ as s,c as a,o as n,d as e}from"./app.977e195f.js";const d=JSON.parse('{"title":"Vue3\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"\u6B63\u6587","slug":"\u6B63\u6587"},{"level":3,"title":"","slug":""}],"relativePath":"web/vue/reactivity.md"}'),l={name:"web/vue/reactivity.md"},o=e(`<h1 id="vue3\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F" tabindex="-1">Vue3\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F <a class="header-anchor" href="#vue3\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p><code>vue2</code>\u4E2D\u4F7F\u7528\u4E86<code>defineProperty</code>\u6765\u8FDB\u884C\u6570\u636E\uFF0C\u4E0D\u8FC7\u7531\u4E8E<code>defineProperty</code>\u4E00\u6B21\u53EA\u80FD\u62E6\u622A\u4E00\u4E2A\u5C5E\u6027\u5E76\u65E0\u6CD5\u62E6\u622A\u5230\u65B0\u589E\u5C5E\u6027\uFF0C\u6240\u4EE5\u5728<code>vue3</code>\u4E2D\u4F7F\u7528\u4E86<code>Es6</code>\u7684<code>Proxy Api</code>\u6765\u8FDB\u884C\u6570\u636E\u62E6\u622A,<code>Proxy</code>\u76F8\u8F83\u4E8E<code>defineProperty</code>\u7684\u4F18\u52BF\u5728\u4E8E\u53EF\u4EE5\u62E6\u622A\u5230\u6240\u6709\u5C5E\u6027\u7684\u53D8\u52A8\u3002</p><p><code>Proxy Demo</code>:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">flag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">prop</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">prop</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">prop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">receive</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">prop</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newVal</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> objProxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Proxy</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">handler)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6B63\u6587" tabindex="-1">\u6B63\u6587 <a class="header-anchor" href="#\u6B63\u6587" aria-hidden="true">#</a></h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,7),p=[o];function c(t,r,y,D,F,i){return n(),a("div",null,p)}const C=s(l,[["render",c]]);export{d as __pageData,C as default};