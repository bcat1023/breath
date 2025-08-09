import { haptic } from "https://esm.sh/ios-haptics";

function close() {
    setTimeout(() => {
        window.close()
    }, 2000);
}

document.getElementById('closeButton').addEventListener('click', function () {
    haptic()
    close()
});
document.getElementById('openButton').addEventListener('click', function () {
    haptic()
    close()
});