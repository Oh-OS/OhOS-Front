export default function StretchH(ctx, video, canvas, width, height, drawImge) {
    const height1 = height / 5;
    const height2 = height1 * 3;
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height / 3, 0, 0, width, height1);
    ctx.save();
    ctx.drawImage(video.video, 0, height / 3, width, height / 3, 0, height1, width, height2);
    ctx.drawImage(video.video, 0, height / 3 * 2, width, height / 3, 0, height1 + height2, width, height1);
    // 이미지 객체, 이미지 내 x좌표, 이미지 내 y좌표, 이미지 넓이, 이미지 높이, 캔버스 x좌표, 캔버스 y좌표, 캔버스 넓이, 캔버스 높이

    setTimeout(drawImge, 33);

    // 오른쪽 이미지 그리기
    // ctx.translate(canvas.width, 0);
    // ctx.scale(-1, 1);
    // ctx.drawImage(video.video, 0, 0, width / 2, height, 0, 0, width / 2, height);
    // ctx.save();

    // // 왼쪽 이미지 그리기
    // ctx.translate(canvas.width, 0);
    // ctx.scale(-1, 1);
    // ctx.drawImage(video.video, 0, 0, width / 2, height, 0, 0, width / 2, height);
    // setTimeout(drawImge, 33);
};