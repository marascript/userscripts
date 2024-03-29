/**
 * Script to include with others to target a captcha,
 * and once six numbers are entered, click submit.
 * 
 * Paste the following in any userscript:
 * @require https://github.com/marascript/userscripts/raw/master/scripts/utilities/captcha.js
 */

const captcha = document.querySelector("input[name='code']")

if (captcha) {
    captcha.focus()
    captcha.oninput = () => {
        if (captcha.value.length === 6) {
            // TODO: Find consistent selector
            const submitButton = document.querySelector("input[type='submit']")
                ? document.querySelector("input[type='submit']")
                : document.querySelector("button.g-recaptcha")

            submitButton.click()
        }
    }
}
