export default function Swirl(ctx, video, canvas, width, height, drawImge){
    canvas.style.filter = "url('#swirlFilter')";
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);
    setTimeout(drawImge, 33);

    return (
        <svg style={{ display: 'none' }}>
            <defs>
            <filter id="swirlFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="10" result="turbulence"/>
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" />
            </filter>
            <filter id="erode">
                <feMorphology operator="erode" radius="2"></feMorphology>
            </filter>
            </defs>
        </svg>
    )
}