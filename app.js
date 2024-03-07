'use strict';

const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".boxBtn");
const submit = document.querySelector(".submit");

let result = {};// to store the result

let color = ["#6FB372", "#6FA7B3", "#CB84BD", "#7772A3", "#A3729D"];

const coloring = ()=>{
    return Math.floor(Math.random()*color.length);
}

let newBox = document.querySelector(".box");
newBox.style.backgroundColor = color[coloring()];
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
    newBox.classList.add('box', 'emptyBox');
    newBox.style.backgroundColor = color[coloring()];
    const btn = document.createElement('button');
    btn.textContent = "+";
    btn.addEventListener('click', function () {
        removeBtn(btn);
        contentCreate(newBox);
    });
    newBox.appendChild(btn);

    container.appendChild(newBox);

    // console.log(container);
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
    let t1 = document.createElement("text");//ctearted to store e left time
    let t2 = document.createElement("text");//ctearted to store e left text
    let br = document.createElement("br");//created to break the line
    let title = document.createElement("h3");// created to store title
    let endDate = document.createElement("span");//created to store end date
    let endTime = document.createElement("h2"); // created to store end time

    endTime.style.color = "#880808";
    // console.log(cont);
    newBox.appendChild(title);
    newBox.appendChild(endDate);
    newBox.appendChild(endTime);
    newBox.appendChild(cont);
    // console.log(newBox);
    cont.appendChild(t1);
    cont.appendChild(br);
    cont.appendChild(t2);
    const taskName = document.getElementById("taskName").value;
    // styling the left time
    cont.style.color = "#35506E";
    // console.log(taskName);
    title.textContent = taskName;
    const dealineDate = document.getElementById("dealineDate").value;
    endDate.textContent = date(dealineDate);
    endTime.textContent = time(dealineDate.slice(-8, -3));
    const d = new Date(dealineDate).getTime();

    //store the taskname and deadline time to the result 

    result[taskName] = dealineDate;
    localStorage.setItem("result", JSON.stringify(result));

    const updateTimer = () => {
        const now = new Date().getTime();

        const remainingTime = d - now;

        if (remainingTime <= 0) {
            console.log("Timer finished!");
            notify();
            return true
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            let time, text;
            if(days !== 0){
                time = `${days}`;
                text = "days left";
            }else{
                time = `${hours}:${minutes}:${seconds}`;
                text = "hours left";
            }
            t1.textContent = time;
            t2.textContent = text;


            // console.log("Remaining time:", days, "days", hours, "hours", minutes, "minutes", seconds, "seconds");

            setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();
}

const date = (data) =>{
    return data.split(",")[0];
}

const time = (data) =>{
    console.log(data)
    let t = Number(data.slice(0, 2));
    if(t < 12 && t !== 0){
        return data + "AM" ;
    }else if(t === 12){
        return data + "PM"
    }else{
        return t-12 + ":00" + "PM"
    }
}

const notify = () => {
    new Notification("times up");
}