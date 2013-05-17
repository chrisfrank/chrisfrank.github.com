---
title: Posts
layout: text
---

{% for post in site.categories.posts %}
- [{{post.title}}]({{post.url}}), {{ post.date | date: "%d %B %Y" }}
{% endfor %}
