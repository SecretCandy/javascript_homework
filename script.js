document.querySelector("#container").addEventListener("click", function (event) {
    event.target.classList.add("clicked")
})

function getSquare(number) {
    return number*number;
}

const result = getSquare(5);
console.log(result);