const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    console.log(this);
    this.classList.toggle("open");
    this.classList.toggle("open-active");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
