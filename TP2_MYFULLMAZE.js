var c= document.getElementsByClassName("boundary");
var end= document.getElementById("end");
var start = document.getElementById('start')
var maze = document.getElementById('maze');


function reset() {
    document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin.";
    for (let i = 0; i < c.length; i++)  {
        c[i].style.background="#eeeeee";
    }
}

start.addEventListener("mouseover", function start() {


    reset();


    maze.addEventListener("mouseleave",function (){
        for (let i = 0; i < c.length; i++){
            c[i].style.background="red";
        }
        document.getElementById("status").innerHTML = "you cheated";
    })



    //boucle pour tester si il y a du mouseover
    for (let i = 0; i < c.length; i++)  {

        c[i].addEventListener("mouseover",function () {

            //boucle pour changer la couleur de tous les element de tableau(classes) apres le mouseover
            for (let i = 0; i < c.length; i++){
                c[i].style.background="red";


                //condition pour que la boucle ne rest pas fonctioner apres la coloeration de tous les boundaries
                if (i==c.length-1){
                    document.getElementById("status").innerHTML = "you lose";
                    break;
                }
            }
        })
    }




    end.onmouseover=function (){
        document.getElementById("status").innerHTML = "you won";
    }



})
