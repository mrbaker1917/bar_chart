function drawBarChart(data, options) {
    // element = document.getElementsByClassName("container");
    let chartHeight = options.height;
    let chartWidth = options.width;
    let arr = [];
    for (let i of data) {
        let id = 'bar' + String(i);
        let h = String(i*90) + "px";
        arr.push(document.getElementById(id).style.height=h);
        arr.push(document.getElementById(id).innerHTML=String(i));
    }
    return arr;
};

// function changeBarHeight() {
//     let h = '450px';
//     let h2 = '350px';
//     let heightRaise = document.getElementById('bar1').style.height=h;
//     let colorChange = document.getElementById('bar2').style.height=h2;
//     let numChange = document.getElementById('bar3').innerHTML='Biggest Bar Ever!';
//     let array = [heightRaise, colorChange, numChange];
//     return array;
// };

// console.log(drawBarChart([5,3,2,4,1], {height: 500, width: "100%"} ))