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
## 基于默认模板的示例
![Example](https://github.com/Lurance/Django_Blog/blob/master/example.png)