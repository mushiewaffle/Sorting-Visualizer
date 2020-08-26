// Values
var margin_size = 0;
var speed = 1000;
var lag = 0;

// GetElementById
var arr_size = document.getElementById("arr-size-bar"),
  array_size = arr_size.value;
var new_arr = document.getElementById("new-arr-btn");
var arr_speed = document.getElementById("arr-speed-bar");
var sort_btns = document.querySelectorAll(".algos button");
var cont = document.getElementById("arr");

// Event Listeners
new_arr.addEventListener("click", generate_new_array);
arr_size.addEventListener("input", update_array_size);
arr_speed.addEventListener("input", display_speed);

// The Div Arrays
var div_sizes = [];
var divs = [];

// Styling + Delay Time
var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
cont.style = "flex-direction:row";

// Work
window.onload = update_array_size();
for (var i = 0; i < sort_btns.length; i++) {
  sort_btns[i].addEventListener("click", run_sort);
}

//Functions
function update_array_size() {
  array_size = arr_size.value;
  generate_new_array();
}

function display_speed() {
  var array_speed = arr_speed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 50;
      break;
    case 2:
      speed = 1000;
      break;
    case 3:
      speed = 4000;
      break;
    case 4:
      speed = 6000;
      break;
    case 5:
      speed = 8000;
      break;
  }
}

function run_sort() {
  this.classList.add("curr-btn");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble_Sort();
      break;
    case "Selection":
      Selection_Sort();
      break;
    case "Insertion":
      Insertion_Sort();
      break;
    case "Merge":
      Merge_Sort();
      break;
    case "Quick":
      Quick_Sort();
      break;
    case "Heap":
      Heap_Sort();
      break;
  }
}

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (lag += delay_time));
}

function generate_new_array() {
  cont.innerHTML = "";
  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (arr_size.max - arr_size.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.15;
    divs[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:#4c9a2a; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}
