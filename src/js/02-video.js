import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

player.on('timeupdate', throttle(handlerTime, 1000));

function handlerTime(data) {
  const time = data.seconds;
  console.log(time);
  localStorage.setItem('videoplayer-current-time', time);
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {});
