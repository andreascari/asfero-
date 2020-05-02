//this is the function that shows and hides each video and rotates the arrows
// it should be served with identifiers for the row element and the arrow

function showhide(identifier,arrow) {

  console.log(identifier);
  var x = document.getElementById(identifier);
  var a = document.getElementById(arrow);

    if (x.className!="videoOpened"){
      x.className="videoOpened";
      a.className="arrowRotated";
      $([document.documentElement, document.body]).animate({
        scrollTop: $(x).offset().top-80
    }, 300,"swing");
    }else{
      x.className="videoClosed";
      a.className="arrow";
    }
}


// this functions scroll down the page to reach archive or contact sections
// please note: both of them use the close all function

function showArchive() {

var y = document.getElementById('archive');

  $([document.documentElement, document.body]).animate({
    scrollTop: $(y).offset().top-10
}, 300,"swing");

closeAll();
}


function showContact() {

var y = document.getElementById('contact');

  $([document.documentElement, document.body]).animate({
    scrollTop: $(y).offset().top-10
}, 300,"swing");

closeAll();
}


// closing all the elements and putting the arrows to normal orientation


function closeAll(){

  var videos = ["v1", "v2", "v3", "v4", "v5", "v6","v7","v8", "v9","v10","v11","v12","v13","v14","v15"];
  var arrows = ["a1", "a2", "a3", "a4", "a5", "a6","a7","a8", "a9","a10","a11","a12","a13","a14","a15"];
  var i;

  for(i=0; i< videos.length; i++){

    var x = document.getElementById(videos[i]);
    var a = document.getElementById(arrows[i]);

        if (x.className!="videoClosed"){
          x.className="videoClosed";
          a.className="arrow"
        }
  }
}
