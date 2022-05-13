amis.define('docs/zh-CN/components/carousel.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Carousel 轮播图",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Carousel 幻灯片",
    "icon": null,
    "order": 33,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"carousel\",\n    \"auto\": false,\n    \"thumbMode\": \"cover\",\n    \"animation\": \"slide\",\n    \"height\": 300,\n    \"options\": [\n        {\n            \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2019-12/1577157239810/da6376bf988c.png\"\n        },\n        {\n            \"html\": \"<div style=\\\"width: 100%; height: 300px; background: #e3e3e3; text-align: center; line-height: 300px;\\\">carousel data</div>\"\n        },\n        {\n            \"thumbMode\": \"contain\",\n            \"image\": \"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3893101144,2877209892&fm=23&gp=0.jpg\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E6%80%81%E5%88%97%E8%A1%A8\" href=\"#%E5%8A%A8%E6%80%81%E5%88%97%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动态列表</h2><p>轮播图组件目前没有获取数据的配置，因此需要依赖 <code>service</code> 来获取数据。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"page\",\n  \"body\": {\n    \"type\": \"service\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/options/carousel\",\n    \"body\": {\n      \"type\": \"carousel\",\n      \"name\": \"imageList\"\n    }\n  }\n}\n</script></div><div class=\"markdown-body\">\n<p>目前数据关联是通过 name 的方式，因此 api 返回应该是类似这样的：</p>\n<pre><code>{\n    status: 0,\n    msg: &#39;&#39;,\n    data: {\n        imageList: [{\n            &quot;image&quot;: &quot;https://internal-amis-res.cdn.bcebos.com/images/2019-12/1577157239810/da6376bf988c.png&quot;\n        }]\n    }\n}\n</code></pre>\n<p>其中的 <code>imageList</code> 要和配置的 <code>name</code> 值对应。</p>\n<h2><a class=\"anchor\" name=\"%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%89%93%E5%BC%80%E5%A4%96%E9%83%A8%E9%93%BE%E6%8E%A5\" href=\"#%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%89%93%E5%BC%80%E5%A4%96%E9%83%A8%E9%93%BE%E6%8E%A5\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>点击图片打开外部链接</h2><blockquote>\n<p>1.3.3 及以上版本</p>\n</blockquote>\n<p>需要放回的字段中除了前面的 image，还有 href 属性</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"page\",\n  \"data\": {\n    \"imageList\": [\n      {\n        \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2019-12/1577157239810/da6376bf988c.png\",\n        \"href\": \"https://github.com/baidu/amis\"\n      }\n    ]\n  },\n  \"body\": {\n    \"type\": \"carousel\",\n    \"name\": \"imageList\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BD%AE%E6%92%AD%E5%9B%BE%E7%9A%84%E5%B1%95%E7%8E%B0\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BD%AE%E6%92%AD%E5%9B%BE%E7%9A%84%E5%B1%95%E7%8E%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义轮播图的展现</h2><p>通过配置 <code>itemSchema</code> 可以自定义轮播图的展现，比如图片默认背景配置是 contain，可以改成 cover：</p>\n<pre><code>itemSchema: {\n    type: &#39;tpl&#39;,\n    tpl: &#39;&lt;div style=&quot;background-image: url(&#39;&lt;%= data.image %&gt;&#39;); background-size: cover; background-repeat: no-repeat; background-position: center center;&quot; class=&quot;image &lt;%= data.imageClassName %&gt;&quot;&gt;&lt;/div&gt;&#39;\n}\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;carousel&quot;</code></td>\n<td>指定为 Carousel 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td><code>&quot;panel-default&quot;</code></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>options</td>\n<td><code>array</code></td>\n<td><code>[]</code></td>\n<td>轮播面板数据</td>\n</tr>\n<tr>\n<td>options.image</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片链接</td>\n</tr>\n<tr>\n<td>options.href</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片打开网址的链接</td>\n</tr>\n<tr>\n<td>options.imageClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片类名</td>\n</tr>\n<tr>\n<td>options.title</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片标题</td>\n</tr>\n<tr>\n<td>options.titleClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片标题类名</td>\n</tr>\n<tr>\n<td>options.description</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片描述</td>\n</tr>\n<tr>\n<td>options.descriptionClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片描述类名</td>\n</tr>\n<tr>\n<td>options.html</td>\n<td><code>string</code></td>\n<td></td>\n<td>HTML 自定义，同<a href=\"./tpl\">Tpl</a>一致</td>\n</tr>\n<tr>\n<td>itemSchema</td>\n<td><code>object</code></td>\n<td></td>\n<td>自定义<code>schema</code>来展示数据</td>\n</tr>\n<tr>\n<td>auto</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否自动轮播</td>\n</tr>\n<tr>\n<td>interval</td>\n<td><code>string</code></td>\n<td><code>5s</code></td>\n<td>切换动画间隔</td>\n</tr>\n<tr>\n<td>duration</td>\n<td><code>string</code></td>\n<td><code>0.5s</code></td>\n<td>切换动画时长</td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>string</code></td>\n<td><code>auto</code></td>\n<td>宽度</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>string</code></td>\n<td><code>200px</code></td>\n<td>高度</td>\n</tr>\n<tr>\n<td>controls</td>\n<td><code>array</code></td>\n<td><code>[&#39;dots&#39;, &#39;arrows&#39;]</code></td>\n<td>显示左右箭头、底部圆点索引</td>\n</tr>\n<tr>\n<td>controlsTheme</td>\n<td><code>string</code></td>\n<td><code>light</code></td>\n<td>左右箭头、底部圆点索引颜色，默认<code>light</code>，另有<code>dark</code>模式</td>\n</tr>\n<tr>\n<td>animation</td>\n<td><code>string</code></td>\n<td>fade</td>\n<td>切换动画效果，默认<code>fade</code>，另有<code>slide</code>模式</td>\n</tr>\n<tr>\n<td>thumbMode</td>\n<td><code>string</code></td>\n<td><code>&quot;cover&quot; | &quot;contain&quot;</code></td>\n<td>图片默认缩放模式</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>activeIndex: number</code> 激活图片的索引 <br> <code>prevIndex: number</code> 上一张图片的索引</td>\n<td>轮播图切换时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>next</td>\n<td>-</td>\n<td>下一张</td>\n</tr>\n<tr>\n<td>prev</td>\n<td>-</td>\n<td>上一张</td>\n</tr>\n<tr>\n<td>goto-image</td>\n<td><code>activeIndex: number</code> 切换图片的索引</td>\n<td>切换轮播图</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "动态列表",
          "fragment": "%E5%8A%A8%E6%80%81%E5%88%97%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E6%80%81%E5%88%97%E8%A1%A8",
          "level": 2
        },
        {
          "label": "点击图片打开外部链接",
          "fragment": "%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%89%93%E5%BC%80%E5%A4%96%E9%83%A8%E9%93%BE%E6%8E%A5",
          "fullPath": "#%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%89%93%E5%BC%80%E5%A4%96%E9%83%A8%E9%93%BE%E6%8E%A5",
          "level": 2
        },
        {
          "label": "自定义轮播图的展现",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BD%AE%E6%92%AD%E5%9B%BE%E7%9A%84%E5%B1%95%E7%8E%B0",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BD%AE%E6%92%AD%E5%9B%BE%E7%9A%84%E5%B1%95%E7%8E%B0",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
