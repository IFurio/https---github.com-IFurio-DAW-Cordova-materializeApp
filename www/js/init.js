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
  $('.tabs').tabs("select","test-swipe-2");
  // fetch 10 dogs pics
  $.ajax({
    method: "GET",
    url: "https://dog.ceo/api/breeds/image/random/10",
    dataType: "json",   // necessitem això pq ens retorni un objecte JSON
  }).done(function (msg) {
    let test2Tag = $("#test-swipe-2");
    test2Tag.empty();

    for(let item in msg.message) {
      let imgElement = $('<img>');
      imgElement.attr('src', msg.message[item]);
      imgElement.attr('alt', 'dog picture');
      test2Tag.append(imgElement);
    };
  }).fail(function () {
    alert("ERROR");
  });
});