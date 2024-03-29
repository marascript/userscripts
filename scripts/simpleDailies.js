// ==UserScript==
// @name        Simple Dailies
// @namespace   Marascripts
// @description Automates most dailies.
// @author      marascripts
// @version     1.2.4
// @grant       none
// @match       https://www.marapets.com/ants.php
// @match       https://www.marapets.com/vending.php
// @match       https://www.marapets.com/archeology.php
// @match       https://www.marapets.com/rack.php
// @match       https://www.marapets.com/potofgold.php
// @match       https://www.marapets.com/undyingfairy.php
// @match       https://www.marapets.com/trash.php
// @match       https://www.marapets.com/telescope.php
// @match       https://www.marapets.com/sword.php
// @match       https://www.marapets.com/magazines.php
// @match       https://www.marapets.com/fishing.php
// @match       https://www.marapets.com/newsagent.php
// @match       https://www.marapets.com/gumball.php*
// @match       https://www.marapets.com/scratchcards2.php*
// @match       https://www.marapets.com/sevenheaven.php*
// @match       https://www.marapets.com/giganticfairy.php
// @match       https://www.marapets.com/sewage.php
// @match       https://www.marapets.com/sugarstack.php*
// @match       https://www.marapets.com/sultan.php
// @match       https://www.marapets.com/darkfairy.php
// @match       https://www.marapets.com/trojan.php
// @match       https://www.marapets.com/guesstheweight.php*
// @match       https://www.marapets.com/tombola*
// @match       https://www.marapets.com/graverobbing.php
// @match       https://www.marapets.com/cloudnine.php*
// @match       https://www.marapets.com/doubleornothing.php
// @match       https://www.marapets.com/pipes.php*
// @match       https://www.marapets.com/scratchcards.php*
// @match       https://www.marapets.com/scratchcards3.php*
// @match       https://www.marapets.com/plushies.php*
// @match       https://www.marapets.com/giveaways.php
// @match       https://www.marapets.com/dash.php*
// @match       https://www.marapets.com/burst.php*
// @match       https://www.marapets.com/spooks.php*
// @match       https://www.marapets.com/wormdigging.php*
// @match       https://www.marapets.com/plushies2.php
// @match       https://www.marapets.com/giveaways.php*
// @match       https://www.marapets.com/burst.php*
// @match       https://www.marapets.com/nuttytree.php
// @match       https://www.marapets.com/jackpot.php*
// @match       https://www.marapets.com/bingo.php*
// @match       https://www.marapets.com/pie.php*
// @match       https://www.marapets.com/multiplier.php*
// @match       https://www.marapets.com/tree.php
// @match       https://www.marapets.com/deal.php*
// @match       https://www.marapets.com/pancakes.php*
// @match       https://www.marapets.com/bingo.php*
// @match       https://www.marapets.com/graves.php*
// @match       https://www.marapets.com/racing.php*
// @match       https://www.marapets.com/jobs.php
// @match       https://www.marapets.com/fruitmachine.php
// @downloadURL https://raw.githubusercontent.com/marascript/userscripts/master/scripts/simpleDailies.user.js
// @homepageURL https://github.com/marascript/userscripts
// @supportURL	https://github.com/marascript/userscripts/issues
// @license     MIT
// ==/UserScript==

(() => {
    "use strict"
    const path = location.pathname

    //* One click games
    const oneClick = [
        "/ants.php",
        "/vending.php",
        "/archeology.php",
        "/rack.php",
        "/potofgold.php",
        "/undyingfairy.php",
        "/trash.php",
        "/telescope.php",
        "/sword.php",
        "/magazines.php",
        "/fishing.php",
        "/newsagent.php",
        "/gumball.php",
        "/scratchcards.php",
        "/scratchcards2.php",
        "/scratchcards3.php",
        "/sevenheaven.php",
        "/giganticfairy.php",
        "/sewage.php",
        "/sugarstack.php",
        "/sultan.php",
        "/darkfairy.php",
        "/graverobbing.php",
        "/jobs.php"
    ]

    if (oneClick.includes(path)) {
        const button = document.querySelector("form input[type='submit']")
        if (button) {
            button.click()
        }
    }

    //* Picks random element and clicks
    function pickRandom(selector) {
        const elements = document.querySelectorAll(selector)
        elements[Math.floor(Math.random() * elements.length)].click()
    }

    //* Guess the Weight
    if (path === "/guesstheweight.php") {
        const weightInput = document.querySelector("input[name='weight'")
        if (weightInput) {
            weightInput.value = Math.floor(Math.random() * 100)
            document.querySelector("input[value='Guess the Weight']").click()
        }
    }

    //* Guess the Flag
    if (path === "/trojan.php") {
        let country = document.querySelector("form .middleit img").getAttribute("src").split("_")[1].split(".")[0]

        switch (country) {
            case "Bosnia":
                country = "Bosnia and Herzegovina"
                break
            case "Trinidad":
                country = "Trinidad and Tobago"
                break
            case "UK":
                country = "United Kingdom"
                break
            case "UAE":
                country = "United Arab Emirates"
                break
            default:
                break
        }

        document.querySelector("input[name='country']").value = country
        document.querySelector("form input[type='submit']").click()
    }

    //* All Tombola
    if (path.includes("tombola")) {
        const takeTicket = document.getElementById("playTombola")
        if (takeTicket) {
            setTimeout(() => {
                takeTicket.click()
            }, 500)
        }
    }

    //* Double or Nothing
    if (path === "/doubleornothing.php") {
        const coins = document.querySelectorAll("input[name='submit']")
        if (coins.length !== 0) {
            setTimeout(() => {
                coins[Math.floor(Math.random() * coins.length)].click()
            }, 1200)
        }
    }

    //* Fruit Machine
    if (path === "/fruitmachine.php") {
        const button = document.getElementById("startSpin")
        if (button) {
            setTimeout(() => {
                button.click()
            }, 1200)
        }
    }

    //* Pipe Dream
    if (path === "/pipes.php") {
        const playButton = document.querySelector("input[value='Play Pipe Dream']")
        if (playButton) { playButton.click() }

        const rollDice = document.querySelector("input[value='Roll Dice']")
        if (rollDice) { rollDice.click() }

        const canBlock = document.querySelector(".maralayoutmiddle .middleit .bigger.middleit").innerText.match(/\d/g)
        const clickPipe = (number) => document.querySelector(`a[href='pipes.php?pipe=${number}']`).click()
        if (canBlock.includes("9")) { clickPipe(9) } // 4 possible
        else if (canBlock.includes("8")) { clickPipe(8) } // 5 possible
        else if (canBlock.includes("7")) { clickPipe(7) } // 6 possible
        else if (canBlock.includes("1")) { clickPipe(1) } // 14 possible
        else if (canBlock.includes("2")) { clickPipe(2) } // 15 possible
        else if (canBlock.includes("3")) { clickPipe(3) } // 16 possible
        else if (canBlock.includes("4")) { clickPipe(4) } // 17 possible
        else if (canBlock.includes("5")) { clickPipe(5) } // 18 possible
        else { clickPipe(6) } // 19 possible
    }

    //* Cloud Nine
    if (path === "/cloudnine.php") {
        const whiteClouds = "img[src='https://images.marapets.com/clouds/cloud.png']"
        const stormClouds = "img[src='https://images.marapets.com/clouds/storm.png']"

        if (whiteClouds.length > 6) { pickRandom(whiteClouds) }
        if (stormClouds.length !== 0) { pickRandom(stormClouds) }
    }

    //* Pie Throw
    if (path === "/pie.php") {
        const playButton = document.querySelector("input[value='Play for 500MP']")
        if (playButton) { playButton.click() }

        const throwPieButtons = Array.from(document.querySelectorAll(".maralayoutmiddle .middleit.flex-table .flex-buttons form input")).slice(0, 6)
        if (throwPieButtons.length > 0) {
            throwPieButtons[Math.floor(Math.random() * throwPieButtons.length)].click()
        }
    }

    //* Dukka Dash
    if (path === '/dash.php') {
        const startGame = document.querySelector("input[value='Play for 3,000MP']")
        if (!startGame) { pickRandom("#eachitemdiv a") }
        else { startGame.click() }
    }

    //* Giveaways, Balloon Burst, Mummy Multiplier, and Spooks Busters
    const randomImgs = [
        '/giveaways.php',
        '/burst.php',
        '/multiplier.php',
        '/spooks.php'
    ]

    if (randomImgs.includes(path)) {
        pickRandom("#eachitemdiv a")
    }

    //* Jackpot Pyramid
    if (path === "/jackpot.php") {
        pickRandom(".pyramid a")
    }

    //* Worm Digging
    if (path === "/wormdigging.php") {
        pickRandom(".wormbox input")
    }

    //* Plushie Machines, Nutty Tree
    const randomButtons = [
        "/plushies.php",
        "/plushies2.php",
        "/nuttytree.php"
    ]

    if (randomButtons.includes(path)) {
        pickRandom("input[type='submit']")
    }

    //* Christmas Tree (Shake for avatar)
    if (path === "/tree.php") {
        document.querySelector("input[value='Shake Tree']").click()
    }

    //* Open Graves
    if (path === "/graves.php") {
        pickRandom(".flex-table .middleit a")
    }

    //* Duck or Dive
    // TODO: Pick best time to stop, maybe
    if (path === "/deal.php") {
        const greyDuck = document.querySelector(".middleit.flex-table #eachitemdiv img[src='https://images.marapets.com/park/Duck3.png']")
        const paleDuck = document.querySelector(".middleit.flex-table #eachitemdiv img[src='https://images.marapets.com/park/Duck4.png']")
        const blackDuck = document.querySelector(".middleit.flex-table #eachitemdiv img[src='https://images.marapets.com/park/Duck2.png']")

        if (paleDuck) { paleDuck.parentElement.parentElement.click() }
        else if (greyDuck) { greyDuck.parentElement.parentElement.click() }
        else if (blackDuck) { blackDuck.parentElement.parentElement.click() }
        pickRandom(".middleit.flex-table #eachitemdiv a")
    }

    //* Newth Racing (Hasty for avatar)
    if (path === "/racing.php") {
				// option13 for Hasty avatar
        // option20 for Snazzy (most reward)
        const newth = document.getElementById("option20")
        if (newth) {
            newth.checked = true
            document.getElementById("option6").checked = true
            document.querySelector("form input[type='submit']").click()
        }
    }

    //* Pancake Pile
    // Only picks from top row
    if (path === "/pancakes.php") {
        const startGame = document.querySelector("input[value='Play for 400MP'")
        if (startGame) {
            startGame.click()
        }

        else {
            const panOne = document.querySelector("a[href='pancakes.php?play=1&id=1']")
            if (panOne) { panOne.click() }
            else {
                const panTwo = document.querySelector("a[href='pancakes.php?play=1&id=2']")
                panTwo.click()
            }
        }
    }
})()
