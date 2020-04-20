var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'dMV3_AKBAZ4',
    playerVars: {
      origin: window.location.href,
      theme: 'dark',
      modestBranding: 1,
      start: 146,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  player.setPlaybackRate(0.5);
  document.addEventListener('scroll', scrollPlay);
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player.seekTo(0);
  }
}
function stopVideo() {
  player.stopVideo();
}
function pauseVideo() {
  player.pauseVideo();
}

function scrollPlay(e) {
  var video = document.getElementById('video');
  if (
    window.pageYOffset >= video.scrollHeight &&
    window.pageYOffset < video.scrollHeight + video.offsetHeight
  ) {
    console.log(player.getPlayerState());
    if (player.getPlayerState() == 5 || player.getPlayerState() == 2) {
      player.playVideo();
    }
  } else {
    if (player.getPlayerState() == 1) {
      pauseVideo();
    }
  }
}

var poster = document.getElementById('poster');
poster.src = 'http://img.youtube.com/vi/dMV3_AKBAZ4/hqdefault.jpg';

// https://developers.google.com/youtube/iframe_api_reference
setTimeout(function () {
  window.scrollTo({ top: video.offsetTop, left: 0, behavior: 'smooth' });
}, 3000);
