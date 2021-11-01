//event click
function changestyle(e){
    //this ---> represent the element
    //e---> event triggered
    e.preventDefault();
    // if the class is answer, change to answer selected
    //else change back to answer
    var currentclass = this.getAttribute('class');
    if(currentclass == "answer"){
    this.setAttribute('class',"answer selected");
    this.children[0].children[0].checked=true;
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(18deg)'}],{duration:3000,fill:"forwards"});
    //for assignment 5... translate (x) 1scale (x,y)
    }
    else{
        this.setAttribute('class',"answer unselected");
    }
}



//change the style of the checkbox screen
var elist = document.getElementsByClassName('answer');
for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click',changestyle);
}