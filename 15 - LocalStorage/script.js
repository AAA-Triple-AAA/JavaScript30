const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];

// Added functionality
const checkAll = document.querySelector("#check-all");
const uncheckAll = document.querySelector("#uncheck-all");
const deleteItems = document.querySelector("#delete-all");

function addItem(e) {
    console.log("item added");
    e.preventDefault();
    const text = this.querySelector("[name=item]").value;
    const item = {
        text,
        done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${
                plate.done ? "checked" : ""
            }>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
        })
        .join("");
}

function toggleDone(e) {
    if (!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

// Added Functionality
function handleCheckAll() {
    items.map((item) => (item.done = true));
    const checkItems = document.querySelectorAll("input[type=checkbox]");
    localStorage.setItem("items", JSON.stringify(items));
    checkItems.forEach((item) => (item.checked = true));
}

function handleUncheckAll() {
    items.map((item) => (item.done = false));
    const checkItems = document.querySelectorAll("input[type=checkbox]");
    localStorage.setItem("items", JSON.stringify(items));
    checkItems.forEach((item) => (item.checked = ""));
}

function handleDeleteAll() {
    itemsList.innerHTML = "<li>Loading Tapas...</li>";
    localStorage.removeItem("items");
    items = [];
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

// Added Functionality
deleteItems.addEventListener("click", handleDeleteAll);
checkAll.addEventListener("click", handleCheckAll);
uncheckAll.addEventListener("click", handleUncheckAll);

populateList(items, itemsList);
