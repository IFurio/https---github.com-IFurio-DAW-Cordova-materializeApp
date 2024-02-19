(function($){
  $(function(){

    $('.sidenav').sidenav();

    $('.tabs').tabs({"swipeable":true});

    $('#tabs-swipe-demo').tabs("select", "tab2");

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

$('#generate').click(function() {
  // fetch 10 dogs pics
  $.ajax({
    method: "GET",
    url: "https://dog.ceo/api/breeds/image/random/10",
    dataType: "json",   // necessitem això pq ens retorni un objecte JSON
  }).done(function (msg) {
    // $("#test-swipe-2") hacer aqui lo de añadir las fotos de los perritos
    for(let item in msg.message) {
      console.log(msg.message[item]);

    };
  }).fail(function () {
    alert("ERROR");
  });
});