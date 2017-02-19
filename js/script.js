var button = document.querySelector(".search-hotel-description-top");
var popup = document.querySelector(".modal-content");
var date = popup.querySelector(".date-arrival")

button.addEventListener("click", function(event)   {
    event.preventDefault();
    popup.classList.toggle("modal-content-show");
    date.focus()
});