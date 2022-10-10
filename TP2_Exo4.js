var start = document.getElementById('start')
var c= document.getElementsByClassName("boundary");


//to change color
for (let i = 0; i < c.length; i++)  {
    c[i].addEventListener("mouseover",function () {
        //boucle pour changer la couleur de tous les element de tableau(classes) apres le mouseover
        for (let i = 0; i < c.length; i++){
            c[i].style.background="red";
            //condition pour que la boucle ne rest pas fonctioner apres la coloeration de tous les boundaries
            if (i==c.length-1){
                break;
            }
        }
    })
}


//to reset
start.addEventListener("mouseover",function () {

    for (let i = 0; i < c.length; i++)  {
        c[i].style.background="#eeeeee";
    }

})