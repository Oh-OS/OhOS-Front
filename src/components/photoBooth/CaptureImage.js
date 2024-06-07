import XRay from './captureFilter/XRay';
import StretchH from './captureFilter/StretchH';
import Zombie from './captureFilter/Zombie';
import Sunglass from './captureFilter/Sunglass';
import Basic from './captureFilter/Basic';
import Faded from './captureFilter/Faded';
import StretchV from './captureFilter/StretchV';
import Flip from './captureFilter/Flip'
import Abalone from './captureFilter/Abalone'

import axios from 'axios';

const videoFunction = [XRay, StretchH, Zombie, Sunglass, Basic, Faded, Flip, StretchV, Abalone];

export default function startCountdown(canvas, video, index, setCountdown, setImages) {
    let count = 3;
    setCountdown(count);

    const countdownInterval = setInterval(() => {
        count -= 1;
        if (count === 0) {
            clearInterval(countdownInterval);
            setCountdown(null);
            captureImage(canvas, video, index, setImages);
        } else {
            setCountdown(count);
        }
    }, 1000);
}

const captureImage = (canvas, video, index, setImages) => {
    const ctx = canvas.getContext('2d');
    if (video.video && canvas) {
        videoFunction[index](ctx, video, canvas, 1400, 788)

        const image = canvas.toDataURL('image/png');
        DownloadImage(image, setImages);
    }
}

const DownloadImage = async (capturedImage, setImages) => {

    if (capturedImage) {
        try{
            const blob = base64ToBlob(capturedImage); // 이미지 용량 줄이기
            const formData = new FormData();
            formData.append('photo', blob, 'photo.png');

            const photo = await axios.post(`${process.env.REACT_APP_PHOTOHOST}/photos`, formData)

            setImages(prev => prev.concat(photo.data))
        }catch(error){
            console.error(error);
        }
    }
};

const base64ToBlob = (base64) => {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
};