const COLORS = 30;
const containerElement = document.querySelector(".container");

for (let i = 0; i < COLORS; i++) {
    const colorContainerElement = document.createElement("div");
    colorContainerElement.classList.add("color-container");
    colorContainerElement.textContent = "#" + generateRandomColor();
    colorContainerElement.style.backgroundColor = colorContainerElement.textContent;
    containerElement.appendChild(colorContainerElement);
}



function generateRandomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
}

function sum (...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

function stringInclues(a, b) {
    if (a.toLowerCase().includes(b.toLowerCase())) {
        console.log("true")
    }
    else {
        console.log("false");
    }
}

function getNames(arr) {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['name']) {
            names.push(arr[i]["name"]);
        }
    }
    return names;
}

function getLargestNumberIndex(nums) {
    return nums.indexOf(Math.max(...nums));
}

console.log("getLargestIndex", getLargestNumberIndex([7, 1, 4, 12, 9]));

console.log("getName", getNames([
    { a: 1},
    { name: "Jane" },
    {},
    { name: "Mark" },
    { name: "Sophie" },
    { b: 2 }
]));

console.log(sum(2, 3, 4, 5));

stringInclues("I drove to New York in a van with my friend", "new");