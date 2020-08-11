function drawBarChart(data, options, element) {
  element = $("div#barchart");
  let chartHeight = parseInt(options.height);
  element.css("height", chartHeight);
  let h1 = Math.max(...data) * 1.1;
  let ticks = $("ul#ticks");
  let ticksHeight = parseInt(chartHeight / 15);
  $("ul#ticks").html("<ul></ul>");
  for (let i = ticksHeight-1; i > 0; i--) {
    if (i % 5 == 0) {
      ticks.append((String((i/(chartHeight/(500/33))*Math.max(...data)*1.1).toFixed(1)) + "__"));
    } else {
      ticks.append(makeTicks("___"));
    }
  };
  $("div.container").css("height", chartHeight);
  $("div.y-axis").css("height", chartHeight);
  let barMargin = options.barMargin;
  element.html("");
  element.css("color", options.dataColor);
  $(".title_head").text(options.barChartTitle);
  let titleFontSize = options.titleFontSize + "px";
  $(".title_head").css("font-size", titleFontSize);
  $(".title_head").css("color", options.titleColor);
  let colors = options.colors;
  let arr = [];
  $("h3#x_axis").text(options.x_axis_label);
  $("h3#y_axis").text(options.y_axis_label);
  for (let i of data) {
    let h = String((i / h1 * chartHeight)) + "px";
    let bar = document.createElement('div');
    bar.style.height = h;
    bar.style.marginRight = barMargin;
    bar.style.alignItems = options.dataPosition;
    bar.className = "bar";
    bar.innerHTML = "<h6>" + i + "</h6>";
    if (colors.length < 2) {
      bar.style.backgroundColor = randColor();
    } else {
      bar.style.backgroundColor = barColor(colors);
    }
    arr.push(element.append(bar));
  }
  return arr;
};

const usedColors = [];
const randColor = () => {
  let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  while (usedColors.indexOf(newColor) != -1) {
    newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
    usedColors.push(newColor);
    return newColor;
};
console.log(usedColors)

let counter = 0;
const barColor = (colors) => {
  if (counter !== colors.length) {
    let newColor = colors[counter];
    counter++;
    return newColor;
  } else {
    counter = 0;
    newColor = colors[counter];
    counter++;
    return newColor;
  }
}

function makeTicks(str) {
  let li = document.createElement('li');
  li.textContent = str;
  return li;
}

function makeRandArr(num) {
  let arr1 = [];
  let i = 0;
  while (i < num) {
    randNum = Math.ceil(Math.random() * 10);
    arr1.push(randNum)
    i++;
  }
  return arr1;
}


$(function () {
  $("h1").fadeIn(3000);
  let data = makeRandArr(20);
  let options = { height: '500', width: '100%', barMargin: '2px', colors: [] };
  drawBarChart(data, options);
  $("div.bar").slideDown(3000, function () {
    $(this).animate({ width: "100%" }, 6000);
  });
  $("button#btn1").click(function () {
    let data = $("input#array").val().split(",");
    let chartHeight = $("input#chartHeight").val();
    let barMargin = $("input#barMargin").val();
    let colors = $("input#colors").val().split(",");
    colors = colors.map(i => i.trim());
    let x_axis_label = $("input#x_axis").val();
    let y_axis_label = $("input#y_axis").val();
    let dataColor = $("input#dataColor").val();
    let barChartTitle = $("input#barChartTitle").val();
    let dataPosition = $("input[name=dataPosition]:checked").val();
    let titleColor = $("input#titleColor").val();
    let titleFontSize = $("input#titleFontSize").val();
    let options = {
      height: chartHeight,
      width: '100%',
      barMargin: barMargin,
      colors: colors,
      x_axis_label: x_axis_label,
      y_axis_label: y_axis_label,
      dataColor: dataColor,
      barChartTitle: barChartTitle,
      dataPosition: dataPosition,
      titleColor: titleColor,
      titleFontSize: titleFontSize
    };
    drawBarChart(data, options);
    $("div.bar").slideDown(3000, function () {
      $(this).animate({ width: "100%" }, 6000);
    })
  })
});

$(document).ready(function() {
  $("div.bar").on("mouseenter", function() {
    $(this).css("background-color", randColor());
  })
})
