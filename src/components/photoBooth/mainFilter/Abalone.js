export default function Abalone(ctx, video, canvas, width, height, drawImge){
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);

    const imgElem1 = new Image();
    imgElem1.src = '/images/PhotoBooth/abalone.png';
    ctx.drawImage(imgElem1, 0, 0, 600, 600, width - 440, 345, 545, 545);

    const imgElem2 = new Image();
    imgElem2.src = '/images/PhotoBooth/abalone.png';
    ctx.drawImage(imgElem2, 0, 0, 600, 600, width - 820, 270, 545, 545);
    
    const imgElem3 = new Image();
    imgElem3.src = '/images/PhotoBooth/abalone.png';
    ctx.drawImage(imgElem3, 0, 0, 600, 600, width - 1225, 360, 545, 545);

    setTimeout(drawImge, 33);
}