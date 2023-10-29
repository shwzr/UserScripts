// ==UserScript==
// @name         FuseVideo Ad Mess Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes messages blocking video playback due to the use of an ad-blocker on fusevideo.io player (e.g. on www.animecat.net or www.animecat.net).
// @author       Showzur
// @match        https://fusevideo.io/*
// @grant        none
// @license      MIT
// ==/UserScript==


(function() {
    'use strict';

    setTimeout(function() {
        const messageElements = document.querySelectorAll('.basic-display');

        messageElements.forEach(element => {
            if(element.textContent.includes('Il semble que vous utilisez un bloqueur de publicite.')) {
                element.remove();
            }
        });

        const emptyDivs = document.querySelectorAll('div[style="display: block !important"]');

        emptyDivs.forEach(div => {
            if(div.textContent.trim() === '') {
                div.remove();
            }
        });
    }, 1000);
})();
