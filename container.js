//window.addEventListener("resize", function(){

setInterval(setContainer, 10)
        
var containerFluid = document.querySelector(".container-fluid")

function setContainer() {

    var container = document.querySelectorAll(".container")
    var i
    for (i = 0; i < container.length; i++) {

        var bodyWidth = document.body.clientWidth
        container[i].style.margin = "auto" 

        if (bodyWidth >= 1200) {
            container[i].style.width = "1140px"
        } else if (bodyWidth >= 992) {
            container[i].style.width = "960px"
        } else if (bodyWidth >= 768) {
            container[i].style.width = "720px"
        } else if (bodyWidth >= 576) {
            container[i].style.width = "540px"
        } else if (bodyWidth < 576) {
            container[i].style.width = "100%"
        }
    }
}

function setContainerFluid() {
        containerFluid.style.width = "100%"
}