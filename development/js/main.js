jQuery.getScript('path/to/file', function(data, textStatus) {
  //optional stuff to do after getScript
});
		
var nav,homeSection,conceptSection,ruleSection,systemSection,futureSection,conceptSection;
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
	nav.style.top = conceptSection.offsetTop - navHeight + "px";
}

function setMoviePosition(){
	var playerStyle = document.getElementById('player').style;
	playerStyle.width = homeSection.width;

	playerStyle.height = conceptSection.offsetTop - 60 + "px";
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
  conceptSection = document.getElementById('concept');
  ruleSection = document.getElementById('rule');
  systemSection = document.getElementById('system');
  futureSection = document.getElementById('future');

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
	console.log(scrolled)
	
	if (scrolled >= conceptSection.offsetTop - navHeight) {
		nav.style.top = '0px';
		nav.style.position = 'fixed';
	}else if (scrolled < conceptSection.offsetTop) {
		nav.style.top = '';
		nav.style.position = 'absolute';

		setgNavPosition();
	};
	autoSetUnderline(scrolled);
}

function autoSetUnderline(scrollTop){
	if (!navClicked) {
		if (scrollTop < conceptSection.offsetTop - navHeight) {
			sectionNumber = 0;
			slideUnderline(0);
		}else if (scrollTop >= conceptSection.offsetTop - navHeight && scrollTop < systemSection.offsetTop - navHeight) {
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








