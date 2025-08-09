import { haptic } from "https://esm.sh/ios-haptics";

document.getElementById('closeButton').addEventListener('click', function() {
    haptic()
    setTimeout(() => {
        window.close()
    }, 1000);
});
document.getElementById('openButton').addEventListener('click', function() {
    haptic()
    setTimeout(() => {
        window.close()
    }, 1000);
});