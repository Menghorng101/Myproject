const iconbar = document.querySelector(".icon-bar");
const list = document.querySelector(".list")

iconbar.addEventListener("click", function(){
    list.classList.toggle("active");
});