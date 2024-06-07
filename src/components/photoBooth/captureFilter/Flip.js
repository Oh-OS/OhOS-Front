export default function Flip(ctx, video, canvas, width, height){
    const videoWidth = video.video.width;
    const videoHeight = video.video.height;
    
    // 오른쪽 이미지 그리기
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, videoWidth / 2, videoHeight, 0, 0, width / 2, height);
    ctx.save();

    // 왼쪽 이미지 그리기
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, videoWidth / 2, videoHeight, 0, 0, width / 2, height);
}