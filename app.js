'use strict';

const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".boxBtn");
const submit = document.querySelector(".submit");

let tempBox;
let newBox = document.querySelector(".box");
console.log(newBox);

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const currentBox = this;
        removeBtn(currentBox);
        contentCreate(currentBox);
        createBox();
    });
});


const createBox = () => {
    newBox = document.createElement('div');
    newBox.classList.add('box');
    const btn = document.createElement('button');
    btn.textContent = "+";
    btn.addEventListener('click', function () {
        createBox();
        removeBtn(btn);
        contentCreate(newBox)
    });
    newBox.appendChild(btn);

    container.appendChild(newBox);

    console.log(container);
};

const removeBtn = (currentBox) => {
    currentBox.remove();
}

const contentCreate = (currentBox) => {
    document.querySelector(".content").classList.toggle("hide");
    container.classList.toggle("blur");
}

submit.addEventListener("click", function () {
    contentCreate(this);
    timer()
})

const timer = () => {
    let cont = document.createElement("div");
    console.log(newBox);
    newBox.appendChild(cont);
    const taskName = document.getElementById("taskName").value;
    console.log(taskName);
    const dealineDate = document.getElementById("dealineDate").value;
    console.log(dealineDate);
    const d = new Date(dealineDate).getTime();

    const updateTimer = () => {
        const now = new Date().getTime();

        const remainingTime = d - now;

        if (remainingTime <= 0) {
            console.log("Timer finished!");
            return true
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            const time = `D: ${days}, H: ${hours}, M: ${minutes}, S: ${seconds}`;
            console.log(time);
            cont.textContent = time;

            console.log("Remaining time:", days, "days", hours, "hours", minutes, "minutes", seconds, "seconds");

            setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();
}