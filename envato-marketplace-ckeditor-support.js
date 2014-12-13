// ==UserScript==
// @name Envato Marketplace CKEditor Support
// @author 			Adrian Moerchen
// @homepage	    http://codecanyon.net/user/scrobbleme/portfolio?ref=scrobbleme
// @namespace		scrobble.me
// @date			2014-12-13
// @downloadURL     https://raw.githubusercontent.com/scrobbleme/Envato-CKEditor-Support/master/envato-marketplace-ckeditor-support.js
// @updateURL       https://raw.githubusercontent.com/scrobbleme/Envato-CKEditor-Support/master/envato-marketplace-ckeditor-support.js
// @version			1.0.0
// @include			http://activeden.net*
// @include			http://audiojungle.net*
// @include			http://themeforest.net*
// @include			http://videohive.net*
// @include			http://graphicriver.net*
// @include			http://3docean.net*
// @include			http://codecanyon.net*
// @include			http://photodune.net*
// @grant 			none
// ==/UserScript==

var head = document.getElementsByTagName("head")[0];
var script_to_load = document.createElement('script');

script_to_load.setAttribute('src', location.protocol+'//cdn.ckeditor.com/4.4.6/standard/ckeditor.js');	
script_to_load.onload = function(){
	var selector = '#description, #item_comment_content, .js-comment-new-reply-field';
	var editors = document.querySelectorAll(selector);
	for(var i = 0; i < editors.length; i++){
		CKEDITOR.replace(editors[i]);	
	}
};
head.appendChild(script_to_load);

style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = "a.cke_button {height: 25px !important; background: transparent !important;}";
head.appendChild(style);