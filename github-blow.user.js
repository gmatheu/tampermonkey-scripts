// ==UserScript==
// @name        Github Blob View
// @match https://github.com/**/blob/*
// @version     1
// @description Increases Github width on blob view
// @copyright 2014, Gonzalo Matheu
// @grant none
// ==/UserScript==

$(".container").width("95%");
$("#js-repo-pjax-container").width("95%");
$(".meta").css("padding","0px 10px");
$(".file").css("margin-bottom","3px");
