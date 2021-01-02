
  var videos = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15", "v16"];
  var arrows = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16"];
  var videocolumn = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15", "c16"];
  var videoframes = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16"];

  var i;





//this is the function that shows and hides each video and rotates the arrows
// it should be served with identifiers for the row element and the arrow

function showhide(identifier,arrow,video,frames) {


  var x = document.getElementById(identifier);
  var a = document.getElementById(arrow);
  var y = document.getElementById(video);


    if (x.className!="videoOpened"){
      x.className="videoOpened";
      a.className="arrowRotated";
      y.className="videoColumn";
      stopPlayExclude(frames);

      $([document.documentElement, document.body]).animate({
          scrollTop: $(x).offset().top-80
      }, 300,"swing");


    }else{
      stopPlayInclude(frames);
      x.className="videoClosed";
      a.className="arrow";
      y.className="videoColumnClosed";
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
}, 120,"swing");

closeAll();
stopPlayExclude();
}


// closing all the elements and putting the arrows to normal orientation


function closeAll(){



  for(i=0; i< videos.length; i++){


    var x = document.getElementById(videos[i]);
    var a = document.getElementById(arrows[i]);
    var y = document.getElementById(videocolumn[i]);


    if (x != null){
          if (x.className!="videoClosed"){
            x.className="videoClosed";
            a.className="arrow";
            y.className="videoColumnClosed"
          }
    }

  }
}


// functions to stop the videos from playing. 2 options:
// - one allows to exclude some frames (variable NOT mandatory)
// - the other allows to stop only for the included frames (variable mandatory)


function stopPlayExclude(excluded) {


  for(i=0; i< videoframes.length; i++){

    if(videoframes[i] != excluded){
      var y = document.getElementById(videoframes[i]);
      $(y).attr('src', $(y).attr('src'));

    }
  }
}


function stopPlayInclude(included) {


  for(i=0; i< videoframes.length; i++){


    if(videoframes[i] == included){
      var y = document.getElementById(videoframes[i]);
      $(y).attr('src', $(y).attr('src'));

    }
  }
}
