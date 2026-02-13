let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const message = document.getElementById("message");

increaseBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        message.textContent = "";
    } else {
        message.textContent = "Maximum limit reached (10)";
    }
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        message.textContent = "";
    } else {
        message.textContent = "Minimum limit reached (0)";
    }
    countDisplay.textContent = count;
});
