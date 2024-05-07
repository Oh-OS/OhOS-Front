export default function XRay(ctx, video, canvas, width, height, drawImge) {
    canvas.style.filter = 'invert(100%)';
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);
    setTimeout(drawImge, 33);
};