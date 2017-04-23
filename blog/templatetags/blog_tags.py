from ..models import *

from django import template

register = template.Library()

@register.simple_tag
def get_recent_posts(num=5):
    return Post.objects.all()[:num]


@register.simple_tag
def archives():
    return Post.objects.dates('created_time','year',order='DESC')

@register.simple_tag
def get_categories():
    return Category.objects.all()