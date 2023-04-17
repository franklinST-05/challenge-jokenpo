const options = ["paper", "rock", "scissors"];
const reloadBtn = document.querySelector(".reload-button");
const actions = document.querySelector(".actions");
const buttons = document.querySelectorAll(".actions button");
const manchineOption = document.querySelector(".option-manchine");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        manchineOption.setAttribute("src", "./assets/" + randomOptionMachine() + ".png");
        addClassList(
            [btn, manchineOption, actions, reloadBtn],
            ["selected", "selected", "events-none", "active"]
        );

    });
});

reloadBtn.addEventListener("click", () => {
    const btn = document.querySelector(".actions button.selected");
    removeClassList(
        [btn, manchineOption, actions, reloadBtn],
        ["selected", "selected", "events-none", "active"]
    );
});

function randomOptionMachine() {
    const min = 0;
    const max = Math.floor(options.length);
    const index = Math.floor(Math.random() * (max - min) + min);

    return options[index];
}

function addClassList(elements = [], attributes = []) {
    elements.forEach((e, i) => {
        e.classList.add(attributes[i]);
    });
}

function removeClassList(elements = [], attributes = []) {
    elements.forEach((e, i) => {
        e.classList.remove(attributes[i]);
    });
}