/*megaMenu*/
var width = screen.width;
if(width > 1024){ 
var mainMenu = document.querySelectorAll(".mainCategory");
for(var i=0; i<mainMenu.length; i++) {
    /*sub Menu Open*/
    mainMenu[i].addEventListener("mouseenter", function(){
        this.children[1].classList.add("enable");
        this.children[0].style.color = "#f27a1a"
        this.children[0].classList.add("activeMenu");
    })
    
    /*Sub Menu Close*/
    mainMenu[i].addEventListener("mouseleave", function(){
        this.children[1].classList.remove("enable");
        this.children[0].classList.remove("activeMenu");
        this.children[0].style.color = "#333"
    })
}
}