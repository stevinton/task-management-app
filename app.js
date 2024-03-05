'use strict';

const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", function () {
        const currentBox = this;
        contentCreate(currentBox);
        createBox();
    });
});


const createBox = () => {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    const btn = document.createElement('button');
    btn.textContent = "+";
    btn.addEventListener('click', function () {
        createBox()
    });
    newBox.appendChild(btn);

    container.appendChild(newBox);
};

const contentCreate = (currentBox) => {

    console.log(currentBox.children);
    currentBox.children.remove()
    console.log(currentBox.children);
}
