export default function Comic(ctx, video, canvas, width, height) {
    ctx.drawImage(video.video, 0, 0, width, height);

    // 캔버스의 픽셀 데이터를 가져오기
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    // sepia 필터 적용
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        data[i] = Math.min((r * 0.393) + (g * 0.769) + (b * 0.189), 255);       // R
        data[i + 1] = Math.min((r * 0.349) + (g * 0.686) + (b * 0.168), 255); // G
        data[i + 2] = Math.min((r * 0.272) + (g * 0.534) + (b * 0.131), 255); // B
    }

    // 수정된 데이터를 다시 캔버스에 적용
    ctx.putImageData(imageData, 0, 0);
};