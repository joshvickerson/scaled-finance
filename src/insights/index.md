---
title: "Scaled Finance Insights Blog"
description: "A description, good"
layout: "layouts/blog/feed.html"
eleventyNavigation:
  order: 5
  key: "Insights"
pagination:
  data: collections.blog
  size: 24
permalink: "/insights{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationAnchor: "#post-list"
pageStylesheets: ["blog"]
footerDecoration: "/images/decorative/girl_coast_binoculars.jpeg"
hero:
  header: "Insights from Scaled Finance"
---
