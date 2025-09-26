var posts=["2025/09/25/hello-world/","2025/09/25/test-my-site/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };