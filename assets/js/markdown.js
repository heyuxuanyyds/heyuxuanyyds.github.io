// Small safe Markdown renderer for the preview. Raw HTML is escaped.
window.renderMarkdown = function(src){
 const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
 let s=esc(src||'');
 s=s.replace(/^### (.*)$/gm,'<h3>$1</h3>').replace(/^## (.*)$/gm,'<h2>$1</h2>').replace(/^# (.*)$/gm,'<h1>$1</h1>');
 s=s.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/`([^`]+)`/g,'<code>$1</code>');
 s=s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" rel="nofollow">$1</a>');
 s=s.replace(/\n/g,'<br>');
 return s;
};
