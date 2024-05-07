export default function Basic(ctx, video, canvas, width, height, drawImge) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);
    setTimeout(drawImge, 33);
};