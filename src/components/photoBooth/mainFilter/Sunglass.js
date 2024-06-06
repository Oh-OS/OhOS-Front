export default function Sunglass(ctx, video, canvas, width, height, drawImge){
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);

    const imgElem1 = new Image();
    imgElem1.src = '/images/PhotoBooth/sunglasses.png';
    ctx.drawImage(imgElem1, 0, 0, 600, 600, width - 600, 180, 300, 300);

    const imgElem2 = new Image();
    imgElem2.src = '/images/PhotoBooth/sunglasses.png';
    ctx.drawImage(imgElem2, 0, 0, 600, 600, width - 1050, 240, 300, 300);

    setTimeout(drawImge, 33);
}