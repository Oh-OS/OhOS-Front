export default function Circle(ctx, video, canvas, width, height, drawImge){
    canvas.width = width;
    canvas.height = height;

    ctx.translate(canvas.width, 0);

    ctx.scale(-1, 1);
    // const width1 = width / 5;
    const r = height / 3 * 2;
    const startW = (width - r) / 2;
    const startH = height / 3;
    
    // ctx.drawImage(video.video, startW, startH, 20, 20, 0, 0, startW, height);
    // ctx.filter = 'blur(5px)';
    // ctx.drawImage(video.video, 0, 0, width, height);
    // ctx.beginPath();
    // ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
    // ctx.fillStyle = "gray";
    // ctx.fillRect(100, 0, 80, 20);
    // ctx.rotate(0 * Math.PI / 180);
    // ctx.fillStyle = "red";
    // ctx.fillRect(100, 0, 80, 20);

    // 회전된 이미지 크기와 위치 계산
    var offsetX = -width / 2;
    var offsetY = -height / 2;
    var rotatedWidth = height; // 이미지를 45도 회전하면 가로와 세로가 바뀜
    var rotatedHeight = width; 

    // 회전된 이미지 그리기
    // ctx.drawImage(video.video, startW + r, height / 2, 1, 1, startW + r, height / 2, width / 2, 7);

    // ctx.rotate(1 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 3, 1, 1, startW + r, height / 2 - 1, width / 2, 7);

    // ctx.rotate(2 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 6, 1, 1, startW + r, height / 2 - 11, width / 2, 7);

    // ctx.rotate(3 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 9, 1, 1, startW + r, height / 2 - 29, width / 2, 7);
    // ctx.rotate(4 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 9, 1, 1, startW + r, height / 2 - 56, width / 2, 7);
    // ctx.rotate(5 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 9, 1, 1, startW + r, height / 2 - 70, width / 2, 7);
    // ctx.rotate(6 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 9, 1, 1, startW + r, height / 2 - 120, width / 2, 7);
    // ctx.rotate(7 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 9, 1, 1, startW + r, height / 2 - 170, width / 2, 7);
    // ctx.rotate(8 * Math.PI / 180);
    // ctx.drawImage(video.video, startW + r, height / 2 + 9, 1, 1, startW + r, height / 2 - 250, width / 2, 7);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width, height / 2);
    ctx.lineTo(width, height / 2 + 10);
    ctx.lineTo(startW + r, height / 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(video.video, startW + r, height / 2 + 1, 4, 1, 0, 0, width, height);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width, height / 2);
    ctx.lineTo(width, height / 2 - 10);
    ctx.lineTo(startW + r, height / 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(video.video, startW + r, height / 2 - 1, 4, 1, 0, 0, width, height);
    ctx.restore();
    ctx.save();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width, height / 2 + 10);
    ctx.lineTo(width, height / 2 + 30);
    ctx.lineTo(startW + r, height / 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(video.video, startW + r, height / 2 + 3, 4, 2, 0, 0, width, height);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width, height / 2 + 30);
    ctx.lineTo(width, height / 2 + 60);
    ctx.lineTo(startW + r, height / 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(video.video, startW + r, height / 2 + 6, 4, 3, 0, 0, width, height);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width, height / 2 + 60);
    ctx.lineTo(width, height / 2 + 100);
    ctx.lineTo(startW + r, height / 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(video.video, startW + r, height / 2 + 10, 4, 4, 0, 0, width, height);
    ctx.restore();
    
    // 회전된 캔버스 축을 원본 캔버스로 돌려놓기 
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    

    ctx.fillStyle = 'none';
    // ctx.filter = 'none';
    ctx.beginPath();
    
    ctx.arc(width / 2, height / 2, Math.min(width, height) / 3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(video.video, 0, 0, width, height);
    ctx.restore();

    ctx.save();
    // console.log(centerX - radius, centerY - radius, radius * 2, radius * 2)
    // 102 0 262.6666666666667 262.6666666666667

    

    // ctx.clip();
    // ctx.restore();
    // ctx.strokeStyle = 'blue'; // 선 색상 설정
    // ctx.lineWidth = 2; // 선 두께 설정
    // ctx.beginPath();
    // const startAngle = 0; // 시작 각도
    // const endAngle = (30 * Math.PI) / 180; // 30도를 라디안으로 변환
    // ctx.moveTo(centerX, centerY);
    // ctx.lineTo(centerX + radius * Math.cos(startAngle), centerY + radius * Math.sin(startAngle));
    // ctx.moveTo(centerX, centerY);
    // ctx.lineTo(centerX + radius * Math.cos(endAngle), centerY + radius * Math.sin(endAngle));

    setTimeout(drawImge, 33);
}