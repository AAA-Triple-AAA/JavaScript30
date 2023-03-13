const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

function mouseDownHandler(e) {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function mouseLeaveHandler() {
    isDown = false;
    slider.classList.remove("active");
}

function mouseUpHandler() {
    isDown = false;
    slider.classList.remove("active");
}

function mouseMoveHandler(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk * 3;
}

slider.addEventListener("mousedown", mouseDownHandler);
slider.addEventListener("mouseleave", mouseLeaveHandler);
slider.addEventListener("mouseup", mouseUpHandler);
slider.addEventListener("mousemove", mouseMoveHandler);
