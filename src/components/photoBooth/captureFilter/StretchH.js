export default function StretchH(ctx, video, canvas, width, height) {
    const videoHeight = video.video.height / 3;
    const videoWidth = video.video.width;

    const canvasHeight1 = height / 5;
    const canvasHeight2 = canvasHeight1 * 3;

    ctx.drawImage(video.video, 0, 0, videoWidth, videoHeight, 0, 0, width, canvasHeight1)
    ctx.drawImage(video.video, 0, videoHeight, videoWidth, videoHeight, 0, canvasHeight1, width, canvasHeight2)
    ctx.drawImage(video.video, 0, videoHeight * 2, videoWidth, videoHeight, 0, canvasHeight1 * 4, width, canvasHeight1)
};