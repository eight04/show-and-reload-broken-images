Show and Reload Broken Images
=============================
This script will force Firefox to show broken image icon when image failed loading, wether the image has alt attribute.
You can press Alt+R to reload the broken images.

這個Script會強制Firefox顯示圖片載入失敗的圖示，即使圖片有alt屬性。
按Alt+R會重新載入失敗的圖片。

Example
-------
```
Image without alt. you should see the icon by default.
<img src="https://i.am.broken">

Image with blank alt. By the default, you will see nothing.
<img alt="" src="https://i.am.broken">

Image with alt attribute. You should see the text in alt attribute.
<img alt="There used to be a image, but now it is broken" src="https://i.am.broken">
```
![http://i.imgur.com/TlUcgQH.png](http://i.imgur.com/TlUcgQH.png)
![http://i.imgur.com/EwrhEpi.png](http://i.imgur.com/EwrhEpi.png)

Changelog
---------
* 2.2.1 (Apr 4, 2016)
	- Hide icon if `!image.src`.
