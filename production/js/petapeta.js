(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52752458-4', 'auto');
ga('send', 'pageview');
jQuery.getScript('path/to/file', function(data, textStatus) {
  //optional stuff to do after getScript
});
		
var nav,homeSection,ruleSection,systemSection;
var LeftArray,widthArray;
var sectionNumber;
var navHeight = 60;
var navClicked = false;

$(document).ready(function(){
  $('#menu').slicknav();
});

window.onload = function () {
	getSectionElement();
	setUnderlinePosition();

	setMoviePosition();

	if (window.innerWidth < 560) {
		console.log("sp");

		var contentHeight;
		if (window.innerHeight < 350) {
			contentHeight = 420 + 'px';
		}else{
			 contentHeight = window.innerHeight + 70 + 'px';
		}
		document.getElementById('container').style.minHeight = contentHeight;
	};
	
	setTimeout(function(){
		autoSetUnderline($(window).scrollTop());
	},10);

	setgNavPosition();
}

function setgNavPosition(){
	nav.style.top = ruleSection.offsetTop - navHeight + "px";
}

function setMoviePosition(){
	var playerStyle = document.getElementById('player').style;
	playerStyle.width = homeSection.width;

	playerStyle.height = ruleSection.offsetTop - 60 + "px";
	//会期中
	// playerStyle.height = postSection.offsetTop -60 + "px";
}

var timer = false;

window.onresize=function(){
	if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    console.log('resized');
    setUnderlinePosition();
    autoSetUnderline($(window).scrollTop());
    homeSection = document.getElementById('home');
  }, 100);

  setMoviePosition();

  setPostHeading();
}

function setUnderlinePosition(){
	if (window.innerWidth > 1024) {// 0.7 -7
		LeftArray = ['11.2%', '54.3%', '97.2%'];
		widthArray = ['61px', '61px', '81px'];
	}else if (window.innerWidth > 768) {
		LeftArray = ['12.0%', '52.3%', '92.2%'];
		widthArray = ['61px', '61px', '88px'];
	}else {
		LeftArray = ['12.0%', '52.0%', '91.0%'];
		widthArray = ['53px', '47px', '69px'];
	}
}

function getSectionElement(){
	nav = document.getElementById('navWrapper');
  homeSection = document.getElementById('home');
  ruleSection = document.getElementById('rule');
  systemSection = document.getElementById('system');
}

$(function(){
  $('a[href^=#]').click(function() {
    var href= $(this).attr("href");
    if (href != '#') {
    	scrollToSection(href);
	    enableScroll = false;
	    return false;
    };
  });
});

function scrollToSection(href){
	var speed = 1000;
	var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
}

window.onscroll = function(){
	var scrolled = $(this).scrollTop();
	
	if (scrolled >= ruleSection.offsetTop - navHeight) {
		nav.style.top = '0px';
		nav.style.position = 'fixed';
	}else if (scrolled < ruleSection.offsetTop) {
		nav.style.top = '';
		nav.style.position = 'absolute';

		setgNavPosition();
	};
	autoSetUnderline(scrolled);
}

function autoSetUnderline(scrollTop){
	if (!navClicked) {
		if (scrollTop < ruleSection.offsetTop - navHeight) {
			sectionNumber = 0;
			slideUnderline(0);
		}else if (scrollTop >= ruleSection.offsetTop - navHeight && scrollTop < systemSection.offsetTop - navHeight) {
			sectionNumber = 1;
			slideUnderline(1);
		}else if (scrollTop >= systemSection.offsetTop - navHeight) {
			sectionNumber = 2;
			slideUnderline(2);
		}
	};
}

$('.global-nav li a').hover(
	function(){
		var index = $('.global-nav li a').index(this);
		slideUnderline(index);
	},
	function(){
		slideUnderline(sectionNumber);
	}
)

$('.global-nav li a').click(function(){
	navClicked = true;
	var index = $('.global-nav li a').index(this);
	sectionNumber = index;
	slideUnderline(sectionNumber);

	setTimeout(function(){
		navClicked = false;
	},1000);
})

function slideUnderline(num){
	var underline = document.getElementById('underline');
	underline.style.left = LeftArray[num];
	underline.style.width = widthArray[num];
}


//COMING SOON
$('.play-button').hover(
	function(){
		$('.play-button').html('COMING SOON');
	},
	function(){
		$('.play-button').html('紹介映像再生');
	}
)

//analytics
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.async = true;
//   js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=736328769780364&version=v2.0";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=1468423916750739&version=v2.0";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));










google.maps.event.addDomListener(window, 'load', init);

function init() {
  var ichysCoordinate = new google.maps.LatLng(35.671484,139.720988);

  var mapOptions = {
    center: ichysCoordinate,
    zoom: 15,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: true,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    overviewMapControlOptions: {
        opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // styles: [
    //   {
    //     "featureType": "landscape",
    //     "stylers": [
    //       {
    //         "hue": "#F1FF00"
    //       },
    //       {
    //         "saturation": -27.4
    //       },
    //       {
    //         "lightness": 9.4
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "road.highway",
    //     "stylers": [
    //       {
    //         "hue": "#0099FF"
    //       },
    //       {
    //         "saturation": -20
    //       },
    //       {
    //         "lightness": 36.4
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "road.arterial",
    //     "stylers": [
    //       {
    //         "hue": "#00FF4F"
    //       },
    //       {
    //         "saturation": 0
    //       },
    //       {
    //         "lightness": 0
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "road.local",
    //     "stylers": [
    //       {
    //         "hue": "#FFB300"
    //       },
    //       {
    //         "saturation": -38
    //       },
    //       {
    //         "lightness": 11.2
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "water",
    //     "stylers": [
    //       {
    //         "hue": "#00B6FF"
    //       },
    //       {
    //         "saturation": 0.2
    //       },
    //       {
    //         "lightness": -63.4
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "poi",
    //     "stylers": [
    //       {
    //         "hue": "#9FFF00"
    //       },
    //       {
    //         "saturation": 0
    //       },
    //       {
    //         "lightness": 0
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   }
    // ]
  };

  var map = new google.maps.Map(document.getElementById('ichysMap'),mapOptions);

  var marker = new google.maps.Marker({
        position: ichysCoordinate,
        map: map,
        title: 'ICHYS GALLERY',
    });
  bindInfoWindow(marker, map, '<span style = "color: #3b312b; font-weight:bold">ICHYS GALLERY</span>');

  function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
    var infoWindowVisible = (function () {
      var currentlyVisible = false;
      return function (visible) {
        if (visible !== undefined) {
          currentlyVisible = visible;
        }
        return currentlyVisible;
      };
    }());
    iw = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {
     if (infoWindowVisible()) {
       iw.close();
       infoWindowVisible(false);
      } else {
        var html= "<div style='color:#000;background-color:#fff;padding:5px;width:120px;'><h4>"+title+"</h4></div>";
        iw = new google.maps.InfoWindow({content:html});
        iw.open(map,marker);
        infoWindowVisible(true);
      }
    });
    google.maps.event.addListener(iw, 'closeclick', function () {
      infoWindowVisible(false);
    });
  }
}





// function changeTopBg(){
//   var home = document.getElementById('home');

//   home.style.background = 'url("../img/bg-top01.jpg"), url("../img/bg-diagonal.png")';
//   home.style.backgroundSize = "cover";
//   home.style.backgroundPosition = "100%";
// }

// $(function(){
// 	var player;
// 	var videoID="ASpVbIMjETY";
// 	/* IFrame Player APIのコードをロード */
// 	function fGetScript(){
//  	$.ajax({
//     url:"http://www.youtube.com/player_api/",
//     dataType:"script",
//     success:function(data){

//     },
//     error:function(xhr, status, thrown) {
//        fGetScript();
//     }
// 	}); 
// }

// $('.play-button').click(function(){
//   console.log('play');
// 	// if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('mobile') < 0 ) {
// 	// 	document.getElementById('player').style.opacity = 1.0;

//  //    console.log('aaaa');
// 	// }else{
// 	// 	play();
// 	// }

//   var getDevice = (function(){
//     var ua = navigator.userAgent;
//     if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
//         return 'sp';
//     }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
//         return 'tab';
//     }else{
//         return 'other';
//     }
//   })();

//   if (getDevice == 'other') {
//     play();
//   }else{
//     document.getElementById('player').style.opacity = 1.0;
//   }

// 	var homeInner = document.getElementById('homeInner');
// 	homeInner.style.opacity = 0.0;
// 	setTimeout(function(){
// 		homeInner.style.zIndex = 0;
// 	},700);
// })




// function play(){
//    player.playVideo();
// }
// function pause(){
//    player.pauseVideo();
// }
// function stop(){
//    player.stopVideo();
// }

// fGetScript();
// /* プレーヤーの準備完了時 */
// window.onYouTubeIframeAPIReady=function() {
//    loadPlayer(videoID); 
// }
//  プレーヤー生成 
// function loadPlayer(videoID) {
//    if(!player){
//       player = new YT.Player(
//          'player',{
//             width: '1280',
//             height: '720',
//             videoId: videoID,
//             events: {
//                "onReady": onPlayerReady,
//                "onStateChange": onPlayerStateChange,
//             },
//             playerVars: {
//               "rel":0,         // 関連動画の有無(default:1)
//               "showinfo":0,      // 動画情報表示(default:1)
//               "controls":0      // コントロール有無(default:1)
//             }
//          }
//       );
//    }else{
//       player.loadVideoById(videoID);
//    }
// }
// function onPlayerReady(event){
// 	// console.log("onPlayerReady");
// }
// function onPlayerStateChange(event) {
//    // console.log("onPlayerStateChange");
//    // console.log(event.data);

//    switch(event.data){
//       case YT.PlayerState.ENDED:

//       	ended();

//         //会期中
//         // play();

//       	break;
//       case YT.PlayerState.PAUSED:
//       	// console.log("PAUSED");
//       	break;
//       case YT.PlayerState.CUED:
//       	// console.log("CUED");
//       	break
//       case YT.PlayerState.PLAYING:
// 	      // console.log('PLAYING')
// 	      document.getElementById('player').style.opacity = 1.0;
// 	      break
//       case YT.PlayerState.BUFFERING:
//       	// console.log('BUFFERING')
//       	// document.getElementById('player').style.opacity = 1.0;
//       	break
//       default:
//          break;
//    	}
// 	}
// });

// function ended(){
// 	// console.log("ENDED");
// 	var homeInner = document.getElementById('homeInner');
// 	homeInner.style.zIndex = 2;
// 	homeInner.style.opacity = 1.0;
// }









//# sourceMappingURL=petapeta.js.map