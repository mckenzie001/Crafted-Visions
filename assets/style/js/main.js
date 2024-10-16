

window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY > 0);
})