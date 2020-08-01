function drawBarChart(data, options, element) {
    element = document.getElementsByClassName("container");
    let chartHeight = options.height;
    let chartWidth = options.width;
    for (let i of data) {

    }


};

function changeBarHeight() {
    let heightRaise = document.getElementById('bar1').style.height='450px';
    let colorChange = document.getElementById('bar1').style.backgroundColor='maroon';
    let numChange = document.getElementById('bar1').innerHTML='Biggest!';
    return heightRaise, colorChange, numChange;
};