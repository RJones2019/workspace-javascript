// save the registration whenever you click the submit
var guestGroup = new Array(); //global variable
function saveReg(){
    var guest={
        name: $('#name').val(),
        numberofGuest: $('#number').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        roomtype: $('#room').val(),
        display: function(){
            return this.name+ " reserved "+this.roomtype+" at "+this.checkin+ " to "+ this.checkout;
        }

    };
    guestGroup.push(guest);
    console.log(guest.display());
}
$('#submit').click(saveReg);
function displayR(){
    for(i in guestGroup){
        var guest = guestGroup[i];
        console.log(guest.display());
    }
}
$('#lists').click(displayR);