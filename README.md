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
![before](https://i.imgur.com/TlUcgQH.png)

After installing the script:

![after](https://i.imgur.com/EwrhEpi.png)

Bookmarklet
-----------

If you just want to reload broken images, you can use the following code as the bookmarklet:
<!--$inline.start("cmd:rollup -c --environment BUILD:bookmarklet --file ''|eval:`javascript:void(${encodeURIComponent($0.slice(0\\, -1))})`|markdown:codeblock")-->
```
javascript:void(!function()%7Bfor(const%20o%20of%20document.images)o.complete%26%26!o.matches(%22%5Bsrc%5D%3A-moz-broken%22)%7C%7C(o.src%2B%3D%22%23%22)%7D()%3B)
```
<!--$inline.end-->

Changelog
---------
* 2.2.1 (Apr 4, 2016)
	- Hide icon if `!image.src`.
