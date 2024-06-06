import React, { useEffect, useState, useRef, useContext } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MyPhoto.module.css'
import axios from 'axios';
import { Icon } from '@iconify/react';

import showImageFuntion from './ShowImage';
import { PhotoContext } from './PhotoProvider';

function MyPhoto({ selectedImage, setSelectedImage, showImage, setShowImage, selectedPhoto, setSelectedPhoto }) {
    const { images, setImages } = useContext(PhotoContext);
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


    const selectPhoto = (id, index) => {
        showImageFuntion(id, setSelectedImage, setShowImage)
        setSelectedPhoto(index);
    }

    const getPhotos = async () => {
        try{
            const photos = await axios.get(`${process.env.REACT_APP_PHOTOHOST}/photos`)

            if(photos.data.length === 0) { // 사진이 없는 경우
                setImages([]);
            }else {
                setImages(photos.data);
            }
        }catch(error){
            console.error(error);
        }
    }

    const deletePhoto = async (id, event) => {
        event.stopPropagation(); // 이벤트 버블링 방지
        try{
            const response = await axios.delete(`${process.env.REACT_APP_PHOTOHOST}/photos/${id}`);
            console.log(response);
            getPhotos();
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
            
            {images && (
                <div className={style['photo-list']} ref={photoListRef}>
                    {images.map((photo, index) => (
                        <div className={style['photos-box']} key={photo.id} onClick={() => selectPhoto(photo.id, index)}>
                            <img
                                src={`${process.env.REACT_APP_PHOTOHOST}/${photo.imagePath}`}
                                className={`${style['photo']} ${selectedPhoto === index ? style['my-photo-list'] : ''}`}
                            />
                            {selectedPhoto === index && (
                                <div className={style['delete-box']} onClick={e => deletePhoto(photo.id, e)}>
                                    <Icon icon="ph:x-bold" className={style['delete-icon']} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            
        </>
    )
}

export default MyPhoto;