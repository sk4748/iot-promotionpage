
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








