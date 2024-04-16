import React, { useRef, useEffect } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MainCam.module.css'

function MainCam({ main }) {
    const videoRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        if(main){
            console.log(main);
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
    
            // 웹캠에서 비디오 스트림 가져오기
            navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
                video.oncanplaythrough = function() {  // 로드 완료되면 실행
                    video.play();
                };
            })
            .catch(error => {
                console.error('Error accessing webcam:', error);
            });
    
            // 비디오 프레임을 Canvas에 그리기
            const drawFrame = () => {
                // Canvas에 좌우 반전 적용
                ctx.save();
                ctx.scale(-1, 1);
                ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
                ctx.restore();
                requestAnimationFrame(drawFrame);
            };
    
            // 비디오가 로드되면 프레임 그리기 시작
            video.addEventListener('loadeddata', drawFrame);
    
            return () => {
                video.removeEventListener('loadeddata', drawFrame);
            };
        }
    }, [main]);


    return(
        <div className={style['cam-area']}>
            <video ref={videoRef} className={style['video']}></video>
            <canvas ref={canvasRef} className={style['canvas']}></canvas>
        </div>
    )
}

export default MainCam;