var button = document.querySelector(".search-hotel-description-top");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var dateArr = popup.querySelector(".date-arrival");
var dateDep = popup.querySelector(".date-departure");
var map = document.querySelector(".map-window")
var adult = localStorage.getItem(".count-adult");
var child = localStorage.getItem(".count-child");

button.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-error")
    popup.classList.toggle("modal-content-show");
    map.classList.toggle("map-window-hide")
    dateArr.focus();
});

form.addEventListener("submit", function (event) {
     if (!dateArr.value || !dateDep.value)    {
       event.preventDefault();
       popup.classList.toggle("modal-error");
     }
});