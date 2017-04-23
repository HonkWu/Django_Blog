from django.conf.urls import url

from . import views

app_name = 'blog'

urlpatterns = [
    url(r'^post/(?P<pk>[0-9]+)/$',views.detail,name='detail'),
    url(r'^archives/$', views.archives, name='archives'),
    url(r'^category/$',views.category,name='category'),
    url(r'^(?P<page>[0-9]*)',views.index,name='index'),

]