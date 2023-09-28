import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const secondsValue = localStorage.getItem('videoplayer-current-time') ?? 0;


player.setCurrentTime(secondsValue);

player.on('timeupdate', throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000));

