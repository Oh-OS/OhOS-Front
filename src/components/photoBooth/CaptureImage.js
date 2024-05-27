import XRay from './captureFilter/XRay';
import StretchH from './captureFilter/StretchH';
import Zombie from './captureFilter/Zombie';
import Circle from './captureFilter/Circle';
import Basic from './captureFilter/Basic';
import Comic from './captureFilter/Comic';
import StretchV from './captureFilter/StretchV';
import Flip from './captureFilter/Flip'
import Swirl from './captureFilter/Swirl'

const videoFunction = [XRay, StretchH, Zombie, Circle, Basic, Comic, Flip, StretchV, Swirl];

export default function startCountdown(canvas, video, index, setCountdown) {
    let count = 3;
    setCountdown(count);

    const countdownInterval = setInterval(() => {
        count -= 1;
        if (count === 0) {
            clearInterval(countdownInterval);
            setCountdown(null);
            captureImage(canvas, video, index);
        } else {
            setCountdown(count);
        }
    }, 1000);
}

const captureImage = (canvas, video, index) => {
    const ctx = canvas.getContext('2d');
    console.log(canvas);
    if (video.video && canvas) {
        videoFunction[index](ctx, video, canvas, 1400, 788)

        const image = canvas.toDataURL('image/png');
        downloadImage(image);
    }
}

const downloadImage = (capturedImage) => {
    if (capturedImage) {
        const link = document.createElement('a');
        link.href = capturedImage;
        link.download = 'captured_image.png';
        link.click();
    }
};