// ==UserScript==
// @name        Always Active
// @namespace   Marascripts
// @description Makes window always appear as active.
// @author      marascripts
// @version     1.0.0
// @grant       none
// @match       https://www.marapets.com/*
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/marascript/userscripts/master/scripts/alwaysActive.user.js
// @homepageURL https://github.com/marascript/userscripts
// @supportURL	https://github.com/marascript/userscripts/issues
// @license     MIT
// ==/UserScript==
/*jshint -W033 */

/**
 * Makes it so you can play games and they will still run if the tab is not focused.
 */

(function () {
    'use strict'

    Object.defineProperties(document, {
        hidden: { value: false },
        mozHidden: { value: false },
        msHidden: { value: false },
        webkitHidden: { value: false },
        visibilityState: { get: () => "visible" }
    })

    ["visibilitychange", "webkitvisibilitychange", "blur", "mozvisibilitychange", "msvisibilitychange"]
        .forEach(event_name => {
            window.addEventListener(event_name, event => {
                event.stopImmediatePropagation()
            }, true)
        })
})()
