// ==UserScript==
// @name        Always Hide Unavailable
// @namespace   Marascripts
// @description Always hides unavailable games/dailies.
// @author      marascripts
// @version     1.0.0
// @grant       none
// @match       https://www.marapets.com/free_games.php
// @match       https://www.marapets.com/pay_games.php
// @match       https://www.marapets.com/pet_dailies.php
// @downloadURL https://raw.githubusercontent.com/marascript/userscripts/master/scripts/hideUnavailable.user.js
// @homepageURL https://github.com/marascript/userscripts
// @supportURL  https://github.com/marascript/userscripts/issues
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

(function () {
    'use strict'

    const allUnavailable = document.querySelectorAll(".fadegame")

    for (const unavailable in allUnavailable) {
        allUnavailable[unavailable].style.display = 'none'
    }
})()
