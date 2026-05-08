---
title: "Scaled Finance - T-Mobile Employee Benefits"
description: "Scaled Finance - T-Mobile Employee Benefits"
layout: "layouts/page.html"
eleventyNavigation:
  parent: "T-Mobile"
  key: "Employee Benefits"
footerDecoration: "/images/decorative/bird_flock_cloudy_day.webp"
pageStylesheets: ["t-mobile"]

hero:
  headline: "Kevin Estes, CFP®, CCFC, MBA"
  text: "Welcome! I’m a financial planner who used to work at T-Mobile. Now, I help T-Mobile employees and their families live great lives! Making the most of the magenta benefits can change an entire family’s financial trajectory."
  image: ""
  imageAlt: ""
---
{% from "macros/cta-button.njk" import ctaButton %}

## T-Mobile's benefits are robust.

{% grid id="t-mobile-benefits-links" %}
  {{ ctaButton(url = "/t-mobile/cash-comp", text = "Cash Comp", buttonClass = "button--outline") }}
  {{ ctaButton(url = "/t-mobile/holidays", text = "Holidays", buttonClass = "button--outline") }}
  {{ ctaButton(url = "/t-mobile/paid-time-off", text = "Paid Time Off", buttonClass = "button--outline") }}
  {{ ctaButton(url = "/t-mobile/stock-comp", text = "Stock Comp", buttonClass = "button--outline") }}
  {{ ctaButton(url = "/t-mobile/401k", text = "401(k)", buttonClass = "button--outline") }}
  {{ ctaButton(url = "/t-mobile/insurance", text = "Insurance", buttonClass = "button--outline") }}
  {{ ctaButton(url = "/t-mobile/other-benefits", text = "Other Benefits", buttonClass = "button--outline") }}
  {{ ctaButton(url = "/t-mobile/insights", text = "T-Mobile Insights", buttonClass = "button--outline") }}
{% endgrid %}
