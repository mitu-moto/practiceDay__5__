document.addEventListener("DOMContentLoaded", function(){
    
    //event object
    //contains information about the event
    
    function handleMouseOver(event){
        console.log(event);
    }
    
    document.getElementById("start").addEventListener("click", function handleClick(){
            document.addEventListener("mouseover", handleMouseOver)
        }
    )
    
    document.getElementById("stop").addEventListener("click", function handleClick(){
            document.removeEventListener("mouseover",  handleMouseOver)
            console.log("removedEventListener");
        } 
    )
    
    document.addEventListener("keypress", function(e){
        console.log("KeyPress");
        console.log(e.key);
        if(e.key == 2) {
            e.preventDefault();
        }
    })
    
    document.addEventListener("keydown", function(e){
        console.log("keydown");
        console.log(e.key);
        if(e.key == 2) {
            e.preventDefault();
        }
    })
    
    document.addEventListener("keyup", function(e){
        console.log("KeyUp");
        console.log(e.key);
        if(e.key == 2) {
            e.preventDefault();
        }
    })
    
    document.getElementById("username").addEventListener("focus", function(event){
        console.log("Focus event Happened");   
    })
    
    document.getElementById("username").addEventListener("blur", function(event){
        console.log("Blur event happened");   
    })
    
    document.querySelector(".parent").addEventListener("click", function(){
        console.log("parent clicked");
    }, true);
    
    document.querySelector(".child").addEventListener("click", function(){
        console.log("child clicked");
    }, true);
    
    document.getElementById("subchild").addEventListener("click", function(event){
        console.log("subchild clicked");
        event.stopPropagation();
    }, true);
    
    
    
    //document.getElementById("clickMe").onclick = handleClick
    
    //recomended
    //document.getElementById("clickMe").addEventListener("click", handleClick )
})





