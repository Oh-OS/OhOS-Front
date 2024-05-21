export default function Comic(ctx, video, canvas, width, height, drawImge) {
    canvas.style.filter = "sepia(100%)";
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);
    setTimeout(drawImge, 33);

    return (
        <svg style={{ display: 'none' }}>
            <defs>
            <filter id="comicFilter" x="0" y="0" width="100%" height="100%">
                <feComponentTransfer>
                    <feFuncR type="table" tableValues="1 0"/>
                </feComponentTransfer>
            </filter>
            <filter id="erode">
                <feMorphology operator="erode" radius="2"></feMorphology>
            </filter>
            </defs>
        </svg>
    )
};