import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/FilterCam.module.css'
import Webcam from 'react-webcam';
function FilterCam({ main }) {
    const videoRef = useRef(null);
    const canvasRefs = Array.from({ length: 9 }, () => React.createRef());

    const drawCanvas = () => {
        if (!main) {
          const video = videoRef.current;
    
          canvasRefs.forEach((canvasRef) => {
            if (canvasRef.current) {
              const ctx = canvasRef.current.getContext('2d');
              ctx.save();
              ctx.scale(-1, 1);
              ctx.drawImage(video, -canvasRef.current.width, 0, canvasRef.current.width, canvasRef.current.height);
              ctx.restore();
            }
          });
        }
        requestAnimationFrame(drawCanvas);

    }

    useEffect(() => {
        if (!main) {
          const constraints = { video: true };
          navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
              videoRef.current.srcObject = stream;
              videoRef.current.onloadedmetadata = () => {
                videoRef.current.play();
              };
            })
            .catch((error) => {
              console.error('Error accessing the camera: ', error);
            });
        } else {
          const stream = videoRef.current.srcObject;
          const tracks = stream.getTracks();
    
          tracks.forEach((track) => {
            track.stop();
          });
        }
      });

    useEffect(() => {
        drawCanvas();
      }, [main]);

    return (
        <div>
            <video ref={videoRef} className={style['video']}></video>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {canvasRefs.map((canvasRef, index) => (
            <canvas key={index} ref={canvasRef} width={640 / 3} height={480 / 3} />
            ))}
        </div>
        </div>
    )
}

export default FilterCam;
