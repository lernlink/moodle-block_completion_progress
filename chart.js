document.addEventListener("DOMContentLoaded", function(event) {
    var buttons = document.getElementsByClassName("chart-table"),
    len = buttons !== null ? buttons.length : 0,
      i = 0;
    for(i; i < len; i++) {
      buttons[i].className += "charttablehidden";
    }
});
