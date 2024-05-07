export default function Circle(ctx, video, canvas, width, height, drawImge){
    const radius = Math.min(width, height) / 2;
    const centerX = width / 2;
    const centerY = height / 2;

    canvas.width = width;
    canvas.height = height;

    ctx.translate(canvas.width, 0);

    ctx.scale(-1, 1);
    ctx.filter = 'blur(5px)';
    ctx.drawImage(video.video, 0, 0, width, height);
    
    ctx.filter = 'none';
    ctx.beginPath();
    
    ctx.arc(width / 2, height / 2, Math.min(width, height) / 3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(video.video, 0, 0, width, height);
    ctx.restore();
    // ctx.save();
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