export default function StretchV(ctx, video, canvas, width, height) {
    const canvasWidth1 = width / 5;
    const canvasWidth2 = canvasWidth1 * 3;

    const videoWidth = video.video.width / 3;
    const videoHeight = video.video.height;

    ctx.drawImage(video.video, 0, 0, videoWidth, videoHeight, 0, 0, canvasWidth1, height);
    ctx.drawImage(video.video, videoWidth, 0, videoWidth, videoHeight, canvasWidth1, 0, canvasWidth2, height);
    ctx.drawImage(video.video, videoWidth * 2, 0, videoWidth, videoHeight, canvasWidth1 + canvasWidth2, 0, canvasWidth1, height);
};