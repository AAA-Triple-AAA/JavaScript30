window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;

    audio.play();
    key.classList.add("playing");
}

// Function for playing sound when key is clicked by mouse, used for onlcick attribute in HTML
// eslint-disable-next-line no-unused-vars
function playSoundClick(dataKey) {
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

    const key = document.querySelector(`.key[data-key="${dataKey}"]`);

    if (!audio) return;

    audio.currentTime = 0;

    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Function for changing volume of audio
function setVolume(volume) {
    document.querySelectorAll("audio").forEach((audio) => {
        audio.volume = volume / 100;
    });
}

const slider = document.querySelector("input");

slider.oninput = function () {
    const progressBar = document.querySelector("progress");
    progressBar.value = slider.value;

    const sliderValue = document.querySelector(".sliderValue");
    sliderValue.innerHTML = slider.value;

    setVolume(slider.value);
};
