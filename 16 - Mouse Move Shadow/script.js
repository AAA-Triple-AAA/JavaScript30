const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = (x / width) * walk - walk / 2;
    const yWalk = (y / height) * walk - walk / 2;

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 ${random}`;
}

function randomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const random = randomRGB();

hero.addEventListener("mousemove", shadow);
