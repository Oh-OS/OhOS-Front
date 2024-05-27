export default function XRay(ctx, video, canvas, width, height) {
    console.log('XRay');
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    // 색상 반전 적용
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];       // R
        data[i + 1] = 255 - data[i + 1]; // G
        data[i + 2] = 255 - data[i + 2]; // B
    }

    // 수정된 데이터를 다시 캔버스에 적용
    ctx.putImageData(imageData, 0, 0);
};