---
title: Sitemap
permalink: "/sitemap/"
layout: page
description: Sitemap for www.deskandstudio.com. Find what you're looking for.
heading: Sitemap
subheading: Find what you're looking for&hellip;
image:
  path: "/images/heros/home-md.jpg"
  width: 1600
  height: 600
sitemap: false
---

{% for entry in site.pages %}
  {% if entry.sitemap != false and entry.url != '/sitemap.xml' %}
[{{ entry.nav }}]({{ entry.url }})
: {{ entry.description }}
  {% endif %}
{% endfor %}