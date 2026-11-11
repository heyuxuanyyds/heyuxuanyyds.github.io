// Safe lightweight Markdown preview. Published pages are rendered by Jekyll/Kramdown.
window.renderMarkdown = function(src){
  const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  let s=esc(src||"");
  s=s.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/gi,(_,lang,code)=>`<pre><code class="language-${esc(lang)}">${code.replace(/\n$/,"")}</code></pre>`);
  s=s.replace(/^### (.*)$/gm,"<h3>$1</h3>").replace(/^## (.*)$/gm,"<h2>$1</h2>").replace(/^# (.*)$/gm,"<h1>$1</h1>");
  s=s.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/~~(.*?)~~/g,"<del>$1</del>").replace(/`([^`]+)`/g,"<code>$1</code>");
  s=s.replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g,'<img alt="$1" src="$2">');
  s=s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" rel="nofollow noopener" target="_blank">$1</a>');
  s=s.replace(/^\s*[-*] (.*)$/gm,"• $1").replace(/\n/g,"<br>");
  return s;
};