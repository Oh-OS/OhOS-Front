export default function Flip(ctx, video, canvas, width, height, drawImge){
    // 오른쪽 이미지 그리기
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width / 2, height, 0, 0, width / 2, height);
    ctx.save();

    // 왼쪽 이미지 그리기
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width / 2, height, 0, 0, width / 2, height);
    setTimeout(drawImge, 33);
}