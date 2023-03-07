const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
    const date = new Date();

    const seconds = date.getSeconds();
    const mins = date.getMinutes();
    const hour = date.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minsDegrees = (mins / 60) * 360 + 90;
    const hourDegrees = (hour / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    );
};

setInterval(setDate, 1000);
