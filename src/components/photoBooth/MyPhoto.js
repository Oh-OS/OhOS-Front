import React, { useEffect, useState, useRef } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MyPhoto.module.css'
import axios from 'axios';

import showImageFuntion from './ShowImage';

function MyPhoto({ images, setImages, selectedImage, setSelectedImage, showImage, setShowImage }) {
    const photoListRef = useRef();

    useEffect(() => {
        getPhotos();
    }, [])

    useEffect(() => {
        const photoList = photoListRef.current;
        if(photoList){
            photoList.scrollLeft = photoList.scrollWidth;
        }
    }, [images])


    const getPhotos = async () => {
        try{
            const photos = await axios.get(`${process.env.REACT_APP_PHOTOHOST}/photos`)

            setImages(
                photos.data.map(photo => {
                    return <img src={`${process.env.REACT_APP_PHOTOHOST}/${photo.imagePath}`}
                        className={style['photos']}
                        onClick={() => showImageFuntion(photo.id, setSelectedImage, setShowImage)}
                        key={photo.id}></img>
                })
            )
        }catch(error){
            console.error(error);
        }
    }

    return(
        <>
            {
                showImage &&
                <div className={style['my-photo']}>
                    {selectedImage}
                </div>
            }
            
            <div className={style['photo-list']} ref={photoListRef}>
                {images}
            </div>
        </>
    )
}

export default MyPhoto;