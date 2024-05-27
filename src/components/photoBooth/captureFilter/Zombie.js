function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // 무채색
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // 무채색
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r * 255, g * 255, b * 255];
}

export default function Zombie(ctx, video, canvas, width, height) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video.video, 0, 0, width, height);

    // 캔버스의 픽셀 데이터를 가져오기
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    // hue-rotate(90deg) 필터 적용
    const hueShift = 90 / 360;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // RGB를 HSL로 변환
        let [h, s, l] = rgbToHsl(r, g, b);

        // Hue를 회전
        h = (h + hueShift) % 1;

        // HSL을 RGB로 변환
        const [newR, newG, newB] = hslToRgb(h, s, l);

        // 새로운 RGB 값을 적용
        data[i] = newR;
        data[i + 1] = newG;
        data[i + 2] = newB;
    }

    // 수정된 데이터를 다시 캔버스에 적용
    ctx.putImageData(imageData, 0, 0);
}