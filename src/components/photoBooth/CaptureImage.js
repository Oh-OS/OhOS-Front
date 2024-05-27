import XRay from './captureFilter/XRay';
import StretchH from './captureFilter/StretchH';
import Zombie from './captureFilter/Zombie';
import Circle from './captureFilter/Circle';
import Basic from './captureFilter/Basic';
import Comic from './captureFilter/Comic';
import StretchV from './captureFilter/StretchV';
import Flip from './captureFilter/Flip'
import Swirl from './captureFilter/Swirl'

import axios from 'axios';
import style from '../../styles/photoBooth/MyPhoto.module.css'
import showImage from './ShowImage';

const videoFunction = [XRay, StretchH, Zombie, Circle, Basic, Comic, Flip, StretchV, Swirl];

export default function startCountdown(canvas, video, index, setImages, setSelectedImage, setCountdown) {
    let count = 3;
    setCountdown(count);

    const countdownInterval = setInterval(() => {
        count -= 1;
        if (count === 0) {
            clearInterval(countdownInterval);
            setCountdown(null);
            captureImage(canvas, video, index, setImages, setSelectedImage);
        } else {
            setCountdown(count);
        }
    }, 1000);
}

const captureImage = (canvas, video, index, setImages, setSelectedImage) => {
    const ctx = canvas.getContext('2d');
    if (video.video && canvas) {
        videoFunction[index](ctx, video, canvas, 1400, 788)

        const image = canvas.toDataURL('image/png');
        downloadImage(image, setImages, setSelectedImage);
    }
}

const downloadImage = async (capturedImage, setImages, setSelectedImage) => {
    if (capturedImage) {
        try{
            const blob = base64ToBlob(capturedImage);
            const formData = new FormData();
            formData.append('photo', blob, 'photo.png');

            const photo = await axios.post(`${process.env.REACT_APP_PHOTOHOST}/photos`, formData)

            setImages(prev => 
                prev.concat(
                    <img src={`${process.env.REACT_APP_PHOTOHOST}/${photo.data.imagePath}`}
                    className={style['photos']}
                    onClick={() => showImage(photo.data.id, setSelectedImage)}
                    key={photo.data.id}></img>
                )
            )
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