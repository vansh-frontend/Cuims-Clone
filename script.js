// button for studnet  login
const stdButton = document.getElementById("std");

stdButton.addEventListener("click", function () {
  window.open("cuims.html", "_blank");
});

//to prevent right click inspect html
window.onload = function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
};
