---
title: Essays
layout: text
---

{% for post in site.categories.dispatches %}
- [{{post.title}}]({{post.url}}), {{ post.date | date: "%d %B %Y" }}
{% endfor %}
