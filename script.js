const length = 5;
const countdown = document.getElementById('countdown');
const brief = document.getElementsByClassName('brief')[0];
var start = Date.now();
setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start
    var echo = Math.floor(delta / 1000); // in seconds
    countdown.innerText = parseInt(countdown.innerText, 10) - 1;
    if(echo > length) {
        countdown.innerText = 0;
        brief.style.opacity = 1;
        return
    }
}, 1000); // update about every second

const appName = new URLSearchParams(window.location.search).get('appName');
if(appName == null) {} else {
    document.getElementById('openAddress').href = `shortcuts://x-callback-url/run-shortcut?name=Breath&input=OpenButtonClicked/${appName}`;
}

if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      // Capture the registration for later use, if needed
      let reg;
  
      reg = await navigator.serviceWorker.register('/worker.js');

      console.log('Service Worker registered');
    } catch (err) {
      console.log('Service worker registration failed!!! Application will NOT be available offline!!!: ', err);
    }
  });
}