var end= document.getElementById("end");
var c= document.getElementsByClassName("boundary");


//pour afficher dans h2
end.onmouseover=function (){
    document.getElementById("status").innerHTML = "you won";
}




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
