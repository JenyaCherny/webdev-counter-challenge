"using strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");


function incrementCount() {
    // Write the relevant code in this block
    count++;
    countElement.textContent = count;
    //console.log(count);
}


function decrementCount() {
    // Write the relevant code in this block
    count--;
    countElement.textContent = count;
}


function resetCount() {
    // Write the relevant code in this block
    count = 0;
    countElement.textContent = count;
}

function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", incrementCount);
    // Write code below this line
    resetBtn.addEventListener("click", resetCount); 
    decrementBtn.addEventListener("click", decrementCount);


    // STOP HERE


    renderUpdatedCount();


resetBtn.addEventListener("click", function () {
    // Write code below this line
    

    // STOP HERE
    
    
    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function () {
    // Write code below this line


    // STOP HERE


    renderUpdatedCount();
});
