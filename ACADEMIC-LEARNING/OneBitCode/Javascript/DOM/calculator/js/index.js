import { themeSwitcher } from "./themeSwitcher.js"
import { calculate } from "./calculate.js"
import { copyToClipboard } from "./copyToClipboard.js"
import { clear } from "./clear.js"
import { handleButtonPress, handleTyping } from "./keyHandler.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById('input').addEventListener('keydown', handleTyping)

clear()

calculate()

copyToClipboard()

themeSwitcher()
