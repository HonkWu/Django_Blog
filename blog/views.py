# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,get_object_or_404

from django.http import HttpResponse

from .models import *

import markdown

def index(request,page):
    if not page:
        p = 0
    else:
        p = int(page)
    post_list = Post.objects.all()[p*4:(p+1)*4]
    return render(request,'blog/index.html',{
        'post_list': post_list,
        'page' : p
    })

def detail(request,pk):
    post = get_object_or_404(Post,pk=pk)
    post.body = markdown.markdown(post.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    return render(request,'blog/detail.html',{
        'post':post
    })

def archives(request):
    post_list = Post.objects.all()
    return render(request,'blog/archives.html',{
        'post_list': post_list

    })

def category(request):
    post_list = Post.objects.all()
    return render(request,'blog/category.html',{
        'post_list':post_list,
    })

# Create your views here.
