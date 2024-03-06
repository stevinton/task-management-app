'use strict';

const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".boxBtn");
const submit = document.querySelector(".submit");

let newBox = document.querySelector(".box");
console.log(newBox);

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const currentBox = this;
        contentCreate();
        removeBtn(currentBox);
    });
});


const createBox = () => {
    newBox = document.createElement('div');
    newBox.classList.add('box');
    const btn = document.createElement('button');
    btn.textContent = "+";
    btn.addEventListener('click', function () {
        removeBtn(btn);
        contentCreate(newBox);
    });
    newBox.appendChild(btn);

    container.appendChild(newBox);

    console.log(container);
};

const removeBtn = (currentBox) => {
    currentBox.remove();
}

const contentCreate = () => {
    document.querySelector(".content").classList.toggle("hide");
    container.classList.toggle("blur");
}

submit.addEventListener("click", function () {
    contentCreate();
    timer();
    createBox();
})

const timer = () => {
    let cont = document.createElement("div");//created to store timer 
    let title = document.createElement("h3");// created to store title
    let endDate = document.createElement("span");//created to store end date
    // console.log(cont);
    newBox.appendChild(title);
    newBox.appendChild(endDate);
    // console.log(newBox);
    newBox.appendChild(cont);
    const taskName = document.getElementById("taskName").value;
    // console.log(taskName);
    title.textContent = taskName;
    const dealineDate = document.getElementById("dealineDate").value;
    console.log(dealineDate.split(",")[0]);
    endDate.textContent = dealineDate.split(",")[0];
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
            let time;
            if(days !== 0){
                time = `${days} left`
            }else{
                time = `${hours}:${minutes}:${seconds} left`
            }
            cont.textContent = time;


            // console.log("Remaining time:", days, "days", hours, "hours", minutes, "minutes", seconds, "seconds");

            setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();
}