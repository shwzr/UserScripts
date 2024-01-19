// ==UserScript==
// @name         FuseVideo Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @license      MIT
// @description  Blocks intrusive ads on FuseVideo streaming links.
// @author       Showzur
// @match        *://*/*
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/485272/FuseVideo%20Ad%20Blocker.user.js
// @updateURL https://update.greasyfork.org/scripts/485272/FuseVideo%20Ad%20Blocker.meta.js
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