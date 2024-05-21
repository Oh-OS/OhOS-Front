export default function Zombie(ctx, video, canvas, width, height, drawImge) {
    canvas.style.filter = 'hue-rotate(90deg)';
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);
    setTimeout(drawImge, 33);
};