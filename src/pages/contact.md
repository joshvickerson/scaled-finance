---
title: "Scaled Finance - Contact"
description: "Scaled Finance - Contact"
layout: "layouts/page.html"
eleventyNavigation:
  key: "Contact & FAQ"
footerDecoration: "/images/decorative/valley_misty_sunset.webp"
pageStylesheets: ["contact"]

faqAccordion:
- label: "Do I have to live near Bellevue, WA?"
  body: "<p>No! I work with clients virtually. We can work together as long as you:</p><ul><li>reside in the United States and</li><li>have internet connectivity.</li></ul><p>Those generally aren't issues for tech professionals and their families!</p>"
- label: "Do you earn any referral fees or commissions?"
  body: "No! I consider those avoidable conflicts of interest."
- label: "Do I need a certain amount of money or income?"
  body: "Nope! A client need not meet a minimum income or financial net worth. I meet people where they are and help them grow."
- label: "Do I have to conitnue to pay?"
  body: "No way! If you feel you've gotten what you need from our initial engagement, go forth and prosper. Of course, my hope is that you'll get a ton of value from our ongoing relationship."
- label: "Would you require me to move assets to you?"
  body: "Not to manage! It's a hassle to move assets around. In my opinion, there are limited use cases for which doing so would benefit clients."
- label: "Will you trade my accounts?"
  body: "No. I deliberately have neither custody nor discretion of any client accounts. Instead, I teach clients how to make trades themselves."
- label: "What happens if I need to cancel?"
  body: "I will stop work and share what I've done with you. You'll only be charged for work completed. If that's less than the first half paid up front, you’ll receive a partial refund."
- label: "What happens if it takes longer?"
  body: "I'll reach out to you before exceeding the higher end of the cost range. We'll amend our client agreement to either increase the cost estimate or adjust the scope."
- label: "Will you work with me on just one topic?"
  body: "Since all elements of a financial plan work together in concert, I prefer not to provide financial advice on just one topic."
- label: "Do you require implementation through you?"
  body: "Not at all! If you already have professional relationships (CPA, insurance agent, attorney, etc.) please continue working with them."
- label: "What if my partner doesn't work in tech?"
  body: "I can problem help them too! The biggest benefit of my financial planning education has been studying situations different from my own. If I don’t know something, I will either: <ol><li>leverage resources to learn,</li><li>collaborate with another professional,</li><li>limit the scope of our engagement, or</li><li>refer you to another advisor.</li></ol>"
- label: "I'm married. Will you just meet with me?"
  body: "I strongly prefer to meet with both individuals in a committed relationship to ensure alignment on - and implementation of - your goals. Doing so also avoids many conflicts of interest."
- label: "What's with the client agreement?"
  body: "Yes! I helped kill telecommunications contracts and keep them dead when I worked at T-Mobile. Signed client agreements are a regulatory requirement."
- label: "Do you support the LGBTQ+ community, people of color, and those with atypical abilities?"
  body: "Wholeheartedly! I respect and work to effectively serve all of my clients, whatever their needs and backgrounds. I strive to support people who have historically been underrepresented and underserved in tech as well as financial services. That said, please reach out if you'd prefer to work with a planner who is a member of a particular group. I can help connect you."
- label: "What if no-one in my family works in tech?"
  body: "It depends. I do my best work with people who are employed by tech companies, are part of the Financial Independence (FI) community, invest in real estate, are looking to fund education, or some combination of the four. You're the type of person who reads all the way to the bottom of a FAQ section, which is a good sign! Please reach out. If I'm not the best person for your situation, I'll work to find a financial planner who may be a better fit."
---
{% from "macros/cta-button.njk" import ctaButton %}
{% from "macros/accordion.njk" import renderAccordion  %}

{% grid id = "contact-layout" %}
<div>

# Contact

Questions or comments?

Get in Touch!

Kevin.Estes@ScaledFinance.com

{% include "partials/contact-form.html" %}

## Mailing Address
12819 SE 38th St, #214
Bellevue, WA 98006

</div>
<div>

{{ renderAccordion(faqAccordion, 'faq-accordion') }}

</div>
{% endgrid %}
