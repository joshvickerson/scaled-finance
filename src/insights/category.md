---
title: "Category Archive"
layout: "layouts/blog/feed.html"
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ["all", "nav", "blog", "people", "rss"]
permalink: "/insights/category/{{ tag | slugify }}/"
---