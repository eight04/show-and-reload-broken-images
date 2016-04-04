// ==UserScript==
// @name        	Show and reload broken images
// @description     The name explained it
// @namespace   	eight04.blogspot.com
// @include       	http*
// @version       	2.2.1
// @grant			GM_addStyle
// ==/UserScript==

(function(){

	GM_addStyle("img[src]{-moz-force-broken-image-icon:1;}");

	function reloadImg(){
		var imagesFailed = document.querySelectorAll("img:-moz-broken"),
			images = document.images,
			i;

		for (i = 0; i < images.length; i++) {
			if (!images[i].complete || images[i].matches("[src]:-moz-broken")) {
				images[i].src += "#";
			}
		}

		for (i = 0; i < frames.length; i++) {
			frame.postMessage("EIGHT_IMAGE_RELOAD", "*");
		}
	}

	function getKey(e){
		if (e.keyCode == 82 && e.altKey) {
			reloadImg();
		}
	}

	function getMessage(e){
		if (e.data == "EIGHT_IMAGE_RELOAD") {
			reloadImg();
		}
	}

	window.addEventListener("keyup", getKey, false);
	window.addEventListener("message", getMessage, false);
})();
