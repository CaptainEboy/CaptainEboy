
// Created by Captain Eboy



var tag, nav;


onload = function(){

    
    
    tag = document.getElementById("tag");
    nav = document.getElementById("name");
    body = document.getElementById("body");
    
    AOS.init();
    
    
    setTimeout(function() {
        body.style.overflowY = "auto";
        body.style.overflowX = "hidden"
        nav.style.transition = "0.6s";
        nav.style.height = "10vh";
        
        
        
    },00)
    
    
    
    // setTimeout(changeTag, 1000)
    
    // setInterval(function(){
    //     changeTag()
        
    // }, 4000)

}
