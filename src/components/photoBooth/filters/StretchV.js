export default function StretchV(ctx, video, canvas, width, height, drawImge) {
    const width1 = width / 5;
    const width2 = width1 * 3;
    const area = width / 3;
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, area, height, 0, 0, width1, height);
    
    ctx.drawImage(video.video, area, 0, area, height, width1, 0, width2, height);
    ctx.drawImage(video.video, area * 2, 0, area, height, width1 + width2, 0, width1, height);
    // 이미지 객체, 이미지 내 x좌표, 이미지 내 y좌표, 이미지 넓이, 이미지 높이, 캔버스 x좌표, 캔버스 y좌표, 캔버스 넓이, 캔버스 높이
    ctx.save();

    setTimeout(drawImge, 33);
};