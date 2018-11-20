  function loadComments(data) {
    for (var i=0; i<data.length; i++) {
      var cuser = data[i].user.login;
      var cuserlink = data[i].user.html_url;
      var clink = data[i].html_url;
      var cbody = data[i].body_html;
      var cavatarlink = data[i].user.avatar_url;      
      var cdate = new Date(data[i].created_at);
      var dopts = { month: 'short', day: 'numeric', year: 'numeric' }
      $("#comments").append('<br><div class="post-header bg-{{site.default_post_color}}"><span class="post-meta">' + cdate.toLocaleDateString("en", dopts) + '</span><br><a class="post-link" href="' + cuserlink + '"><h3 class="h3 post-title">' + cuser + '</h3></a></div><article class="post-content">' + cbody + '</article>');
    }
  }
  $.ajax("https://api.github.com/repos/basoro/basoro.github.io/issues/{{ page.commentIssueId }}/comments", {
    headers: {Accept: "application/vnd.github.v3.html+json"},
    dataType: "json",
    success: function(msg){
      loadComments(msg);
   }
  });
