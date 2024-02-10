// ==UserScript==
// @name         FuseVideo Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      1.1
// @license      MIT
// @description  Blocks intrusive ads on FuseVideo streaming links.
// @author       Showzur
// @match        *://*.animecat.net/*
// @match        *://*.neko-sama.fr/*
// @match        *://*.fusevideo.io/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    setTimeout(function() {
        var elements = document.querySelectorAll('[rel="noopener noreferrer nofollower"]');
 
        elements.forEach(function(element) {
            element.parentNode.removeChild(element);
        });
 
        console.log(elements.length + " éléments supprimés.");
    }, 1000);
})();
