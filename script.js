const image = document.querySelector('img');

function updateTime() {
  const now = new Date();
  document.getElementById('timeUTC').innerText = now
    .toUTCString()
    .split(' ')[4];
  document.getElementById('currentDay').innerText = now.toLocaleDateString(
    'en-GB',
    { weekday: 'long' }
  );
}

updateTime();
setInterval(updateTime, 1000);

image.addEventListener('load', (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
});
