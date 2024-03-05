'use strict';

const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".boxBtn");

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const currentBox = this;
        removeBtn(currentBox);
        createBox(currentBox)
    });
});


const createBox = () => {
    const newBox = document.createElement('div');
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
    document.querySelector(".content").classList.remove("hide");
    container.classList.add("blur");
}

const d = new Date("March 15, 2024 12:00:00").getTime();
console.log(d); 
const now = new Date().getTime();
console.log(now);
let rem = d - now;
console.log(rem);
console.log(Math.floor(rem % 24));


// const updateTimer = () => {
//     // Get the current date and time
//     const now = new Date().getTime();

//     // Calculate the remaining time by subtracting the current time from the end time
//     const remainingTime = d - now;

//     // Check if the timer has finished
//     if (remainingTime <= 0) {
//         console.log("Timer finished!");
//     } else {
//         // Calculate remaining days, hours, minutes, and seconds
//         const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//         // Output remaining time
//         console.log("Remaining time:", days, "days", hours, "hours", minutes, "minutes", seconds, "seconds");
        
//         // Call the updateTimer function again after 1 second
//         setTimeout(updateTimer, 1000);
//     }
// }

// // Start the timer
// updateTimer();