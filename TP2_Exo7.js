var maze = document.getElementById('maze');
var c= document.getElementsByClassName("boundary");
var start = document.getElementById("start");


start.addEventListener("mouseover", function () {


    maze.addEventListener("mouseleave",function (){
        for (let i = 0; i < c.length; i++){
            c[i].style.background="red";
        }
    })



})





