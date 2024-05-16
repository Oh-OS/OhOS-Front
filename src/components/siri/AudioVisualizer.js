import React, { useEffect, useRef } from 'react';

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const analyserRef = useRef(null);
  const freqsRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const context = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = context.createAnalyser();
    analyserRef.current = analyser;

    const bufferLength = analyser.frequencyBinCount;
    const freqs = new Uint8Array(bufferLength);
    freqsRef.current = freqs;

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const source = context.createMediaStreamSource(stream);
        source.connect(analyser);
        visualize();
      })
      .catch(err => console.error('getUserMedia error:', err));

    return () => {
      context.close();
    };
  }, []);

  const visualize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = ctxRef.current;
    const analyser = analyserRef.current;
    const freqs = freqsRef.current;
  
    analyser.getByteFrequencyData(freqs);
  
    canvas.width = canvas.clientWidth;
    canvas.height = 500;
  
    path(0);
    path(1);
    path(2);
  
    requestAnimationFrame(visualize);
  };
  

  const path = (channel) => {
    const ctx = ctxRef.current;
    const analyser = analyserRef.current;
    const freqs = freqsRef.current;

    const opts = {
      smoothing: 0.6,
      fft: 8,
      minDecibels: -70,
      scale: 0.2,
      glow: 10,
      color1: [203, 36, 128],
      color2: [41, 200, 192],
      color3: [24, 137, 218],
      fillOpacity: 0.6,
      lineWidth: 1,
      blend: "screen",
      shift: 50,
      width: 100,
      amp: 1
    };

    const shuffle = [1, 3, 0, 4, 2];
    const freq = (i) => freqs[2 * channel + shuffle[i] * 6];

    const scale = (i) => {
      const x = Math.abs(2 - i);
      const s = 3 - x;
      const centerScale = i === 2 ? 1 : 0.2;
      return s / 3 * opts.amp * centerScale;
    };

    const m = canvasRef.current.height / 2;
    const offset = (canvasRef.current.width - 15 * opts.width) / 2;
    const x = [...Array(15).keys()].map(i => offset + channel * opts.shift + i * opts.width);
    const y = [...Array(5).keys()].map(i => Math.max(0, m - scale(i) * freq(i)));
    const h = 2 * m;

    const color = opts[`color${channel + 1}`].map(Math.floor);
    ctx.fillStyle = `rgba(${color}, ${opts.fillOpacity})`;
    ctx.strokeStyle = ctx.shadowColor = `rgb(${color})`;
    ctx.lineWidth = opts.lineWidth;
    ctx.shadowBlur = opts.glow;
    ctx.globalCompositeOperation = opts.blend;

    ctx.beginPath();
    ctx.moveTo(0, m);
    ctx.lineTo(x[0], m + 1);
    ctx.bezierCurveTo(x[1], m + 1, x[2], y[0], x[3], y[0]);
    ctx.bezierCurveTo(x[4], y[0], x[4], y[1], x[5], y[1]);
    ctx.bezierCurveTo(x[6], y[1], x[6], y[2], x[7], y[2]);
    ctx.bezierCurveTo(x[8], y[2], x[8], y[3], x[9], y[3]);
    ctx.bezierCurveTo(x[10], y[3], x[10], y[4], x[11], y[4]);
    ctx.bezierCurveTo(x[12], y[4], x[12], m, x[13], m);
    ctx.lineTo(canvasRef.current.width, m + 1);
    ctx.lineTo(x[13], m - 1);
    ctx.bezierCurveTo(x[12], m, x[12], h - y[4], x[11], h - y[4]);
    ctx.bezierCurveTo(x[10], h - y[4], x[10], h - y[3], x[9], h - y[3]);
    ctx.bezierCurveTo(x[8], h - y[3], x[8], h - y[2], x[7], h - y[2]);
    ctx.bezierCurveTo(x[6], h - y[2], x[6], h - y[1], x[5], h - y[1]);
    ctx.bezierCurveTo(x[4], h - y[1], x[4], h - y[0], x[3], h - y[0]);
    ctx.bezierCurveTo(x[2], h - y[0], x[1], m, x[0], m);
    ctx.lineTo(0, m);
    ctx.fill();
    ctx.stroke();
  };

  return (
    <canvas ref={canvasRef} style={{ width: '100%', height: '400px' }}></canvas>
  );
};

export default AudioVisualizer;
