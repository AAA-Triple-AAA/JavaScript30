const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Check if shift key down and box checked
    if (e.shiftKey && this.checked) {
        let inBetween = false;
        checkBoxes.forEach((checkBox) => {
            if (checkBox === this || checkBox == lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkBox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkBoxes.forEach((checkBox) =>
    checkBox.addEventListener("click", handleCheck)
);
