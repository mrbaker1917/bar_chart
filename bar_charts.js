
function drawBarChart(data, options, element) {
  element = document.getElementById("barchart");
  let chartHeight = options.height;
  element.style.height = chartHeight;
  let h1 = Math.max(...data) * 1.1;
  let top = document.getElementById("top");
  top.innerText = String((h1*1.1).toFixed());
  let arr = [];
  let randColor = "";
  for (let i of data) {
    randColor = Math.floor(Math.random() * 16777215).toString(16);
    let h = String((i / h1 * chartHeight)) + "px";
    let bar = document.createElement('div');
    bar.style.height = h;
    bar.className = "bar";
    bar.innerHTML = i;
    bar.style.backgroundColor = "#" + randColor;
    arr.push(element.append(bar));
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


$(function () {
  $("h1").fadeIn(3000);
  $("#btn1").click(function () {
    let data = $("#array").val().split(",");
    drawBarChart(data, { height: 500, width: '100%' });
    $("div.bar").slideDown(3000, function () {
      $(this).animate({ width: "100%" }, 6000);
    })
  })
});