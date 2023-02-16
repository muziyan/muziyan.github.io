import{_ as e,c as o,o as d,d as c}from"./app.977e195f.js";const l="/assets/url-to-display.6d714499.gif",T=JSON.parse('{"title":"\u4ECE\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u8F93\u5165URL\u5230\u6D4F\u89C8\u5668\u6E32\u67D3\u7684\u8FC7\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u7F6E\u77E5\u8BC6","slug":"\u524D\u7F6E\u77E5\u8BC6"},{"level":3,"title":"\u7EC4\u6210\u6D4F\u89C8\u5668\u7684\u6838\u5FC3\u6A21\u5757","slug":"\u7EC4\u6210\u6D4F\u89C8\u5668\u7684\u6838\u5FC3\u6A21\u5757"},{"level":3,"title":"\u6D4F\u89C8\u5668\u7684\u5185\u6838","slug":"\u6D4F\u89C8\u5668\u7684\u5185\u6838"},{"level":3,"title":"DNS\u662F\u4EC0\u4E48\uFF1F","slug":"dns\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u6B63\u6587","slug":"\u6B63\u6587"}],"relativePath":"web/browser/browser-render.md"}'),i={name:"web/browser/browser-render.md"},r=c('<h1 id="\u4ECE\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u8F93\u5165url\u5230\u6D4F\u89C8\u5668\u6E32\u67D3\u7684\u8FC7\u7A0B" tabindex="-1">\u4ECE\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u8F93\u5165<code>URL</code>\u5230\u6D4F\u89C8\u5668\u6E32\u67D3\u7684\u8FC7\u7A0B <a class="header-anchor" href="#\u4ECE\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u8F93\u5165url\u5230\u6D4F\u89C8\u5668\u6E32\u67D3\u7684\u8FC7\u7A0B" aria-hidden="true">#</a></h1><h2 id="\u524D\u7F6E\u77E5\u8BC6" tabindex="-1">\u524D\u7F6E\u77E5\u8BC6 <a class="header-anchor" href="#\u524D\u7F6E\u77E5\u8BC6" aria-hidden="true">#</a></h2><p>\u4E86\u89E3\u6D4F\u89C8\u5668\u6E32\u67D3\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u6D4F\u89C8\u5668\u7684\u4E00\u4E9B\u57FA\u7840\u6982\u5FF5\uFF0C\u4E0B\u9762\u5C31\u4E00\u8D77\u6765\u770B\u770B\u5427\u3002</p><h3 id="\u7EC4\u6210\u6D4F\u89C8\u5668\u7684\u6838\u5FC3\u6A21\u5757" tabindex="-1">\u7EC4\u6210\u6D4F\u89C8\u5668\u7684\u6838\u5FC3\u6A21\u5757 <a class="header-anchor" href="#\u7EC4\u6210\u6D4F\u89C8\u5668\u7684\u6838\u5FC3\u6A21\u5757" aria-hidden="true">#</a></h3><ul><li>\u7528\u6237\u754C\u9762(User Interface): \u6307\u4E00\u4E9B\u5E38\u7528\u7684\u6D4F\u89C8\u5668\u7EC4\u4EF6\uFF0C\u6BD4\u5982\u5730\u5740\u680F\u3001\u8FD4\u56DE\u3001\u4E66\u7B7E\u7B49\u7B49\u3002</li><li>\u6570\u636E\u6301\u4E45\u5316(Data Persistence): \u6307\u6D4F\u89C8\u5668\u7684<code>Cookie</code>\u3001<code>LocalStorage</code>\u7B49\u7EC4\u4EF6</li><li>\u6D4F\u89C8\u5668\u5F15\u64CE(Browser engine): \u6307\u5E73\u53F0\u5E94\u7528\u7B49\u76F8\u5173\u63A5\u53E3\uFF0C\u5728\u7528\u6237\u754C\u9762\u548C\u5448\u73B0\u5F15\u64CE\u4E4B\u95F4\u4F20\u9001\u6307\u4EE4\u3002</li><li>\u6E32\u67D3\u5F15\u64CE(Rendering engine): \u5904\u7406HTML\u3001CSS\u7684\u89E3\u6790\u548C\u6E32\u67D3</li><li>JavaScript\u89E3\u91CA\u5668(JavaScript Interpreter): \u89E3\u6790\u548C\u6267\u884CJavaScript\u4EE3\u7801</li><li>\u7528\u6237\u754C\u9762\u540E\u7AEF(UI Backend): \u6307\u6D4F\u89C8\u5668\u7684\u56FE\u5F62\u5E93\u7B49</li><li>\u7F51\u7EDC(Networking): \u7528\u4E8E\u7F51\u7EDC\u8C03\u7528\uFF0C\u6BD4\u5982<code>HTTP</code>\u8BF7\u6C42</li></ul><p>\u4EE5\u4E0A\u4E03\u4E2A\u90E8\u5206\u5C31\u662F\u7EC4\u6210\u6D4F\u89C8\u5668\u7684\u6838\u5FC3\u6A21\u5757\u3002</p><h3 id="\u6D4F\u89C8\u5668\u7684\u5185\u6838" tabindex="-1">\u6D4F\u89C8\u5668\u7684\u5185\u6838 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u5185\u6838" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u5185\u6838\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A\u6E32\u67D3\u5F15\u64CE(<code>layout engineer</code>\u6216<code>Rendering Engine</code>)\u548C<code>JS</code>\u5F15\u64CE</p><ul><li>\u6E32\u67D3\u5F15\u64CE\uFF1A \u8D1F\u8D23\u53BB\u7684\u7F51\u9875\u7684\u5185\u5BB9\uFF08<code>HTML</code>\u3001<code>XML</code>\u3001\u56FE\u50CF\u7B49\u7B49\uFF09\u3001\u6574\u7406\u8BAF\u606F\uFF08\u4F8B\u5982\u52A0\u5165CSS\u7B49\uFF09\uFF0C\u4EE5\u53CA\u8BA1\u7B97\u7F51\u9875\u7B49\u663E\u793A\u65B9\u5F0F\uFF0C\u7136\u540E\u56DE\u8F93\u51FA\u81F3\u6D4F\u89C8\u5668\u7A97\u53E3\u6216\u6253\u5370\u673A\u3002</li><li><code>JS</code>\u5F15\u64CE\uFF1A \u8D1F\u8D23\u89E3\u6790\u548C\u6267\u884C<code>JavaScript</code>\u6765\u5B9E\u73B0\u7F51\u9875\u7684\u52A8\u6001\u6548\u679C\uFF0C\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u5185\u6838\u5BF9\u4E8E\u7F51\u9875\u7684\u89E3\u6790\u4F1A\u6709\u4E0D\u540C\uFF0C\u4EE5\u81F3\u4E8E\u9020\u6210\u9875\u9762\u7684\u6E32\u67D3\u6548\u679C\u4E5F\u4E0D\u540C\u3002 \u6240\u6709\u7684\u53EF\u89C6\u7684\u7A0B\u5E8F\u90FD\u9700\u8981\u5185\u6838\u6765\u64CD\u4F5C\u6216\u8005\u5C55\u793A\uFF0C\u6700\u5F00\u59CB\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u5F15\u64CE\u548C<code>JS</code>\u5F15\u64CE\u5E76\u6CA1\u6709\u533A\u5206\u7684\u5F88\u660E\u786E\uFF0C\u968F\u7740<code>JS</code>\u5F15\u64CE\u8D8A\u6765\u8D8A\u72EC\u7ACB\uFF0C\u6D4F\u89C8\u5668\u5185\u6838\u90FD\u6307\u5411\u6E32\u67D3\u5F15\u64CE\u3002</li></ul><h3 id="dns\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">DNS\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#dns\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h3><p>\u57DF\u540D\u7CFB\u7EDFDNS(<code>Domain Name system</code>)\u662F\u56E0\u7279\u7F51\u4F7F\u7528\u7684\u547D\u540D\u7CFB\u7EDF\uFF0C\u7528\u6765\u628A\u4EBA\u4EEC\u4F7F\u7528\u7684\u673A\u5668\u540D\u5B57\u8F6C\u6362\u6210IP\u5730\u5740\u3002DNS\u5C5E\u4E8E\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u662F\u57FA\u4E8EUDP\u534F\u8BAE\u3002</p><p>DNS\u67E5\u8BE2\u7684\u6D41\u7A0B\uFF1A</p><ol><li>\u4E3B\u673A\u5148\u5411\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\u8FDB\u884C\u9012\u5F52\u67E5\u8BE2</li><li>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\u91C7\u7528\u8FED\u4EE3\u7684\u67E5\u8BE2\uFF0C\u5B83\u5148\u5411\u6839\u57DF\u540D\u670D\u52A1\u5668\u67E5\u8BE2</li><li>\u6839\u57DF\u540D\u670D\u52A1\u5668\u4F1A\u544A\u8BC9\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u4E0B\u4E00\u6B21\u5E94\u8BE5\u67E5\u8BE2\u7684\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u7684IP\u5730\u5740\u3002</li><li>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\u5411\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u53D1\u8D77\u67E5\u8BE2\u3002</li><li>\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u544A\u8BC9\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u4E0B\u4E00\u6B21\u5E94\u67E5\u8BE2\u7684\u6743\u9650\u57DF\u540D\u670D\u52A1\u5668\u7684IP\u5730\u5740\u3002</li><li>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\u5411\u6743\u9650\u57DF\u540D\u670D\u52A1\u5668\u53D1\u8D77\u67E5\u8BE2\u3002</li><li>\u6743\u9650\u57DF\u540D\u670D\u52A1\u5668\u544A\u8BC9\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\u6240\u67E5\u8BE2\u7684IP\u5730\u5740\u3002</li><li>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\u628A\u67E5\u8BE2\u7ED3\u679C\u544A\u8BC9\u4E3B\u673A\u3002</li></ol><h2 id="\u6B63\u6587" tabindex="-1">\u6B63\u6587 <a class="header-anchor" href="#\u6B63\u6587" aria-hidden="true">#</a></h2><p>\u4ECE\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u8F93\u5165<code>www.seasonblog.top</code>,\u4F1A\u5C55\u793A\u7B14\u8005\u7684\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u90A3\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u600E\u6837\u7684\u5462\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u770B\u4E00\u5F20\u52A8\u6001\u6D41\u7A0B\u56FE\u3002</p><p><img src="'+l+'" alt="process"></p><p>\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u8FD9\u6D41\u7A0B\u56FE\u6765\u9010\u6B65\u5206\u6790:</p><ol><li>\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u8F93\u5165URL</li><li>\u6D4F\u89C8\u5668\u8BF7\u6C42DNS\u670D\u52A1\u5668\uFF0C\u62FF\u5230IP\u5730\u5740 <ol><li>\u5982\u679C\u6D4F\u89C8\u5668\u6709\u7F13\u5B58\u57DF\u540D\u5BF9\u5E94\u7684IP\u5730\u5740\uFF0C\u5219\u4E0D\u8FDB\u884CDNS\u67E5\u8BE2</li><li>DNS\u67E5\u8BE2\u6D41\u7A0B\u5728\u4E0A\u6587\u4E2D\u6709\u63CF\u8FF0\u3002</li></ol></li><li>\u6D4F\u89C8\u5668\u62FF\u5230\u4E86IP\u5730\u5740\u540E\uFF0C\u901A\u8FC7<code>TCP \u4E09\u6B21\u63E1\u624B</code>\u5411<code>WEB\u670D\u52A1\u5668</code>\u5EFA\u7ACB\u8FDE\u63A5 <ol><li>\u7B2C\u4E00\u6B21\u63E1\u624B\uFF1A \u5BA2\u6237\u7AEF\u53D1\u9001<code>SYN</code>\u62A5\u6587\uFF0C\u5E76\u8FDB\u5165<code>SYN_SENT</code>\u72B6\u6001\uFF0C\u7B49\u5F85\u670D\u52A1\u5668\u7684\u786E\u8BA4</li><li>\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF1A \u670D\u52A1\u5668\u6536\u5230<code>SYN</code>\u8C79\u7EB9\uFF0C\u9700\u8981\u7ED9\u5BA2\u6237\u7AEF\u53D1\u9001<code>ACK</code>\u786E\u8BA4\u8C79\u7EB9\uFF0C\u540C\u65F6\u670D\u52A1\u5668\u4E5F\u8981\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u4E00\u4E2A<code>SYN</code>\u62A5\u6587\uFF0C\u6240\u4EE5\u4E5F\u5C31\u662F\u5411\u5BA2\u6237\u7AEF\u53D1\u9001<code>SYN + ACK</code>\u62A5\u6587\uFF0C\u6B64\u65F6\u670D\u52A1\u5668\u8FDB\u5165<code>SYN_RCVD</code>\u72B6\u6001</li><li>\u7B2C\u4E09\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u6536\u5230<code>SYN + ACK</code>\u62A5\u6587\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u786E\u8BA4\u5305\uFF0C\u5BA2\u6237\u7AEF\u8FDB\u5165<code>ESTABLISHED</code>\u72B6\u6001\u3002\u5F85\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u7684<code>ACK</code>\u5305\u4E5F\u4F1A\u8FDB\u5165<code>SETABLISHED</code>\u72B6\u6001\uFF0C\u5B8C\u6210\u4E09\u6B21\u63E1\u624B\u3002</li></ol></li><li>\u6D4F\u89C8\u5668\u5B8C\u6210\u4E09\u6B21\u63E1\u624B\u5EFA\u7ACBWEB\u670D\u52A1\u5668\u7684\u8FDE\u63A5\u540E\uFF0C\u4F1A\u53D1\u8D77\u521D\u59CB\u5316<code>HTTP GET</code>\u8BF7\u6C42\u3002 <blockquote><p>\u901A\u5E38\uFF0C\u4E00\u4E2A\u7AD9\u70B9\u7684\u521D\u59CB\u5316\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u4F1A\u4F1A\u8FD4\u56DE\u4E00\u4E2AHTML\u6587\u4EF6\u3002</p></blockquote><ol><li>\u54CD\u5E94\u5230\u670D\u52A1\u5668\u8FD4\u56DE\u7684<code>HTML</code>\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u5668\u8FDB\u5165\u4E0B\u4E00\u6B65\u6D41\u7A0B</li></ol></li><li>\u6D4F\u89C8\u5668\u83B7\u53D6\u5230<code>HTML</code>\u6587\u4EF6\u540E\uFF0C\u5F00\u59CB\u89E3\u6790<code>HTML</code>\u6784\u5EFA<code>DOM</code>\u6811 <ol><li>\u5728\u89E3\u6790\u8FC7\u7A0B\u4E2D\u9047\u5230\u975E\u963B\u585E\u8D44\u6E90\uFF0C\u4F8B\u5982\u56FE\u7247\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8BF7\u6C42\u8FD9\u4E9B\u8D44\u6E90\u5E76\u4E14\u7EE7\u7EED\u89E3\u6790\u3002</li><li>\u9047\u5230<code>CSS</code>\u6587\u4EF6\u65F6\uFF0C\u89E3\u6790\u4E5F\u4E0D\u4F1A\u4E2D\u65AD\u3002</li><li>\u5F53\u89E3\u6790\u9047\u5230<code>&lt;script&gt;</code>\u6807\u7B7E\uFF08\u7279\u522B\u6CA1\u6709<code>async</code>\u548C<code>defer</code>\u5C5E\u6027\uFF09\u65F6\uFF0C\u4F1A\u963B\u585E\u6E32\u67D3\u5E76\u505C\u6B62\u89E3\u6790\u3002</li></ol></li><li>\u5F53<code>DOM</code>\u6811\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u4F1A\u83B7\u53D6\u6240\u6709\u7684<code>css</code>\u6784\u5EFA\u6210<code>CSSOM</code>\u6811</li><li>\u73B0\u5728\u5DF2\u7ECF\u6784\u5EFA\u5B8C\u6210<code>DOM</code>\u6811\u548C<code>CSSOM</code>\u6811\uFF0C\u4F1A\u5C06\u8FD9\u4E24\u68F5\u6811\u7EC4\u5408\u6210\u6E32\u67D3\u6811(<code>Render Tree</code>)\u5F00\u59CB\u6E32\u67D3\u3002 <ol><li>\u5E03\u5C40(<code>layout</code>)\uFF1A\u6784\u5EFA\u6E32\u67D3\u6811\u540E\uFF0C\u6807\u8BC6\u663E\u793A\u7684\u8282\u70B9(\u5373\u4F7F\u4E0D\u53EF\u89C1)\u53CA\u5176\u8BA1\u7B97\u6837\u5F0F\uFF0C\u4F46\u4E0D\u8868\u793A\u6BCF\u4E2A\u8282\u70B9\u7684\u5C3A\u5BF8\u6216\u4F4D\u7F6E\uFF0C\u4E3A\u4E86\u786E\u8BA4\u6BCF\u4E2A\u5BF9\u8C61\u7684\u786E\u5207\u5927\u5C0F\u548C\u4F4D\u7F6E\uFF0C\u6D4F\u89C8\u5668\u4ECE\u6E32\u67D3\u6811\u7684\u6839\u8282\u70B9\u5F00\u59CB\u904D\u5386\u3002</li><li>\u56DE\u6D41(<code>reflow</code>)\uFF1A \u5E03\u5C40\u5B8C\u6210\u540E\uFF0C\u5047\u8BBE\u6709\u672A\u77E5\u5927\u5C0F\u548C\u4F4D\u7F6E\u7684\u8282\u70B9\u91CD\u65B0\u8BA1\u7B97\uFF0C\u8FD9\u4E00\u6B65\u64CD\u4F5C\u53EB\u505A\u56DE\u6D41\uFF0C\u5728\u540E\u7EED\u6539\u53D8\u4E86\u6837\u5F0F\u5927\u5C0F\u548C\u4F4D\u7F6E\u540E\u4E5F\u8FD8\u4F1A\u89E6\u53D1\u56DE\u6D41\u3002</li><li>\u7ED8\u5236(<code>draw</code>): \u6211\u4EEC\u5DF2\u7ECF\u5F97\u5230\u6240\u6709\u8282\u70B9\u7684\u5927\u5C0F\u548C\u5728\u9875\u9762\u4E0A\u7684\u4F4D\u7F6E\uFF0C\u6211\u4EEC\u6839\u636E\u8FD9\u4E9B\u6570\u636E\u5C06\u8282\u70B9\u7ED8\u5236\u5230\u9875\u9762\u4E0A\u3002</li><li>\u5408\u6210(<code>compositiong</code>): \u5F53\u6587\u6863\u7684\u5404\u4E2A\u90E8\u5206\u4EE5\u4E0D\u540C\u5C42\u7ED8\u5236\uFF0C\u76F8\u4E92\u91CD\u53E0\u65F6\uFF0C\u5FC5\u987B\u8FDB\u884C\u5408\u6210\uFF0C\u4EE5\u786E\u4FDD\u4ED6\u4EEC\u4EE5\u6B63\u786E\u7684\u987A\u5E8F\u4F1A\u77E5\u9053\u5C4F\u5E55\u4E0A\uFF0C\u5E76\u6B63\u786E\u663E\u793A\u5185\u5BB9\u3002</li></ol><blockquote><p>TIP\uFF1A \u53EF\u53C2\u8003ps\u7684\u56FE\u5C42\u5408\u6210</p></blockquote></li><li>\u6D4F\u89C8\u5668\u5C55\u793A\u9875\u9762\u3002</li></ol><p>\u4E0A\u8FF0\u516B\u4E2A\u6B65\u9AA4\u5C31\u662F\u4ECE\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u8F93\u5165<code>URL</code>\u5230\u9875\u9762\u5C55\u793A\u7684\u6574\u4E2A\u6D41\u7A0B\u4E86\uFF0C\u5173\u4E8E\u8BF7\u6C42\u65B9\u9762\u7684\u7EC6\u8282\uFF0C\u5728\u672C\u6587\u4E2D\u5C31\u4E0D\u8FC7\u591A\u8BB2\u8FF0\uFF0C\u6211\u4EEC\u6765\u91CD\u70B9\u8BB2\u8FF0\u6E32\u67D3\u6D41\u7A0B\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u53C2\u8003\u8D44\u6599 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work" target="_blank" rel="noreferrer">MDN\u6D4F\u89C8\u5668\u7684\u5DE5\u4F5C\u539F\u7406</a></p></div>',20),a=[r];function t(s,n,p,h,S,_){return d(),o("div",null,a)}const b=e(i,[["render",t]]);export{T as __pageData,b as default};