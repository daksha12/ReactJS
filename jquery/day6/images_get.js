$(document).ready(function(){
    $.get( 'images.json/',function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        console.log(data);
    })
})