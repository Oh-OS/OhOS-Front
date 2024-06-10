export default function StretchH(ctx, video, canvas, width, height, drawImge) {
    const videoHeight = video.video.height / 3;
    const videoWidth = video.video.width;

    const canvasHeight1 = height / 5;
    const canvasHeight2 = canvasHeight1 * 3;

    // 좌우 반전
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    ctx.drawImage(video.video, 0, 0, videoWidth, videoHeight, 0, 0, width, canvasHeight1)
    ctx.drawImage(video.video, 0, videoHeight, videoWidth, videoHeight, 0, canvasHeight1, width, canvasHeight2)
    ctx.drawImage(video.video, 0, videoHeight * 2, videoWidth, videoHeight, 0, canvasHeight1 * 4, width, canvasHeight1)

    // 다음 프레임을 그리기 위해 33ms 후에 다시 호출
    setTimeout(drawImge, 33);
};