export default function Press(ctx, video, canvas, width, height, drawImge) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    const myWidth = ( width - height ) / 2;
    ctx.drawImage(video.video, myWidth, 0, height, height, 0, 0, width, height);
    // const warpedImageData = warpImage(ctx, width, height);
    // ctx.putImageData(warpedImageData, 0, 0);
    setTimeout(drawImge, 33);
};

function warpImage(ctx, width, height){
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    //데이터 배열을 생성
    const warpedData = new Uint8ClampedArray(data.length);

    console.log(width, height);

    // 각 픽셀에 대해
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // 원본 위치를 변환
        const orig =
          x > 50 && y > 50 && x < 250 && y < 250 //왜곡할 범위를 지정
            ? warpPosition(x, y)  //아까 그 함수
            : { x, y };  //원본 좌표

        // 원본 위치의 색상을 가져옵니다.
        const origX = Math.floor(orig.x);
        const origY = Math.floor(orig.y);
        //4개의 값(RGBA)을 가지므로, 최종 인덱스를 계산할 때 4를 곱함
        if (origX >= 0 && origX < width && origY >= 0 && origY < height) {
          const origIndex = (origY * width + origX) * 4; //2차원 이미지 픽셀 배열을 1차원 배열로 변환
          const r = data[origIndex];
          const g = data[origIndex + 1];
          const b = data[origIndex + 2];
          const index = (y * width + x) * 4;
          warpedData[index] = r;
          warpedData[index + 1] = g;
          warpedData[index + 2] = b;
          warpedData[index + 3] = 255;
        }
      }
    }
    // 왜곡된 이미지 데이터를 반환합니다.
    return new ImageData(warpedData, width, height);
}

const warpPosition = (x, y) => {
    return { x: x + Math.sin(y / 10) * 30, y: y }; //왜곡 정도 결정
};