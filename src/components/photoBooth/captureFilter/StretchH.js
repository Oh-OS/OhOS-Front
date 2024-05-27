export default function StretchH(ctx, video, canvas, width, height) {
    const height1 = height / 5;
    const height2 = height1 * 3;
    ctx.drawImage(video.video, 0, 0, width, height / 3, 0, 0, width, height1);
    ctx.save();
    ctx.drawImage(video.video, 0, height / 3, width, height / 3, 0, height1, width, height2);
    ctx.drawImage(video.video, 0, height / 3 * 2, width, height / 3, 0, height1 + height2, width, height1);
};