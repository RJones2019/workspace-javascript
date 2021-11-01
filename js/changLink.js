$('a').each(function(){

    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href',"https://www.google.com");
});

//update all image address
$('img').each(function(){

    var imgaddress = $(this).attr('src');
    console.log(imgaddress);
    $(this).attr('src',"img/"+imgaddress);
});