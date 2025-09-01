---
layout: blog
permalink: /blog/
---
{% assign post = site.posts[0].url | prepend: site.url %}
  <link rel="canonical" href="{{ post }}">
  <script>location="{{ post }}"</script>
  <meta http-equiv="refresh" content="0; url={{ post }}">
  <meta name="robots" content="noindex">
  <h1>Redirecting&hellip;</h1>
  <a href="{{ post }}">Click here if you are not redirected.</a>