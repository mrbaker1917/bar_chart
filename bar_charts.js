
function drawBarChart(data, options) {
    // element = document.getElementsByClassName("container");
    let chartHeight = options.height;
    let chartWidth = options.width;
    let arr = [];
    let randColor = "";
    for (let i of data) {
        randColor = Math.floor(Math.random() * 16777215).toString(16);
        let h = String((i * 90).toFixed(2))+ "px";
        let bar = document.createElement('div');
        bar.style.height = h;
        bar.className = "bar";
        bar.innerHTML = String((i*90).toFixed(2));
        bar.style.backgroundColor = "#" + randColor;
        arr.push(document.getElementById('barchart').append(bar));
    }
    return arr;
};

function makeTicks(str) {
    let li = document.createElement('li');
    li.textContent = str;
    return li;
}

function makeRandArr(num) {
    let arr1 = [];
    let i = 0;
    while (i < num) {
        randNum = (Math.random() * 5).toFixed(2);
        arr1.push(randNum)
        i++;
    }
    return arr1;
}

let newArr = makeRandArr(10);
console.log(newArr)