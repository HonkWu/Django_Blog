# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import *

class PostAdmin(admin.ModelAdmin):
    list_display = ['title','created_time','category','author']
admin.site.register(Post,PostAdmin)
admin.site.register(Category)
admin.site.register(Tag)

# Register your models here.
