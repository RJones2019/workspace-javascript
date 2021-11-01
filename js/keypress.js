//Key up --> display key code
function showkeyCode(e){
    var lastkeyE = document.getElementById('lastKey');
    lastkeyE.textContent = "Last key in ASCII code :" +e.keyCode;
}

// bind the action
$('#message').keyup(showkeyCode);


// press s key, move the + symbol
var posX = 100;
var posY = 10;
function moveit(e){
    if(e.key="s"){
        //animation
        $('img').animate({left:"400px"},500,'linear');
    }
    //**could you use up key to move up */
    /*ArrowUP --- is the up key ArrowDown is the down key */
    if(e.key="ArrowUP"){
        $('img').animate({up:"100px"},500,'linear');
    }
}

// binding
document.addEventListener('keydown',moveit);

// click --- show the position of mouse
function showMouse(e){
    var lastKeyE = document.getElementById('lastKey');
    lastKeyE.textContent = "position ("+e.pageX+" , "+e.pageY+")";
}
document.addEventListener('mousemove',showMouse);
document.addEventListener('click',showMouse);