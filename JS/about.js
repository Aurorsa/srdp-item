const content = document.querySelector(".content");
const abouts = document.querySelectorAll(".about");
const button = document.querySelectorAll(".button");
let current = 0;
let prev = 4;
let next = 1;
for(let i =0; i < button.length; i++)
{
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}
const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(abouts.length - 1);
const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);
const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;
    for(let i =0; i < abouts.length; i++)
    {
        abouts[i].classList.remove("active");
        abouts[i].classList.remove("prev");
        abouts[i].classList.remove("next");
    }
    if(next == 4)
    {
        next = 0;
    }
    if(prev == -1)
    {
        prev = 3;
    }
    abouts[current].classList.add("active");
    abouts[prev].classList.add("prev");
    abouts[next].classList.add("next");
}
