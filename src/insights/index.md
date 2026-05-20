---
title: "Scaled Finance Insights Blog"
description: "A description, good"
layout: "layouts/blog/feed.html"
eleventyNavigation:
  key: "Insights"
pagination:
  data: collections.blog
  size: 25
permalink: "/insights{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationAnchor: "#post-list"
pageStylesheets: ["blog"]

hero:
  header: "Insights from Scaled Finance"
---
