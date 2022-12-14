// ==UserScript==
// @name        Buy Lottery and Raffle Tickets
// @namespace   Marascripts
// @description Buys the max amount of lottery and raffle tickets.
// @author      marascripts
// @version     1.0.0
// @grant       none
// @match       https://www.marapets.com/raffle.php*
// @match       https://www.marapets.com/lottery.php*
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/marascript/userscripts/master/scripts/buyTickets.user.js
// @homepageURL https://github.com/marascript/userscripts
// @supportURL	https://github.com/marascript/userscripts/issues
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

/**
 * TODO: Will keep trying to buy until error page.
 * * ? Could find number of tickets, but accounting for 2 for 1 weeks, makes it trickier.
 */

(function () {
    'use strict'

    const path = location.pathname

    let buyButton
    if (path === "/lottery.php") {
        buyButton = document.querySelector("input[value='Buy 50 Lucky Dips']")
    }

    else {
        buyButton = document.querySelector("input[value='Buy 10 Raffle Tickets']")
    }

    if (buyButton) {
        setTimeout(() => {
            buyButton.click()
        }, 1500)
    }
})()
