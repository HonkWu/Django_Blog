# Django Blog

-----
本项目是基于Python + Django的开源博客程序。
基于环境：
> * Python2.7环境
> * Django 1.11
> * Linux （Ubuntu）
> * Markdown
> * Pygments

-----
## 使用方法
### 更新与下载(Linux平台)
首先确保安装有Git
```bash
sudo apt-get install git
git clone https://github.com/Lurance/Django_Blog.git
```
切换至工作目录以及清空预留数据
```bash
cd Django_Blog.git
python manage.py flush
```
创建超级用户以及检视你的博客
```bash
python manage.py createsuperuser
python runserver
```
根据自身需求部署至Apache或者Nginx
[Django官方参考文档](https://docs.djangoproject.com/en/1.11/howto/deployment/)

**And Enjoy it!**
-----
## 基于默认模板的示例
![Example](https://github.com/Lurance/Django_Blog/blob/master/example.png)
-----
## 技术说明
本项目基于Python2.7环境，所以建议基于Python2.7来部署本应用，若你的环境为3.x需手动修改模型层的相关实现,例如：
```python
def __unicode__(self):
    #pass

#修改为
def __str__(self):
    #pass
```
本项目基于最新的Django 1.11(2017.04.23)开发，由于Django并不具有向下兼容的特效，所以推荐安装或者更换至最新的Django，本项目会长期随着Django的更新而更新。

推荐具有相关开发经验的用户使用[Pycharm](https://www.jetbrains.com/pycharm/)进行二次开发（定制模板，添加模型等）,本项目可由Pycharm直接导入。

理论上在Windows与Linux上都能成功部署，不过推荐在Linux上开发以及部署本项目。

项目所用到的两个库：
> * Markdown (Markdown解释器)
> * Pygments (代码高亮样式)
需要用户自行安装，如不需要也可以查阅blog应用的视图层进行修改并删除两个包
代码高亮样式表位于/blog/static/blog/css/friendly.css



