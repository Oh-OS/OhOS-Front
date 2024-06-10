import axios from 'axios';
import style from '../../styles/photoBooth/MyPhoto.module.css'
import QRCode from 'qrcode.react';

const showImage = async (id, setSelectedImage, setShowImage) => {
    try{
        const myPhoto = await axios.get(`${process.env.REACT_APP_PHOTOHOST}/photos/${id}`)

        setSelectedImage(
            <div>
                <img src={`${process.env.REACT_APP_PHOTOHOST}/${myPhoto.data.imagePath}`} className={'selected-photo'}></img>
                <QRCode
                    value={`${process.env.REACT_APP_PHOTOHOST}/${myPhoto.data.imagePath}`}
                    size={100}
                    bgColor="transparent"
                    fgColor="#000000"
                    className={style['qr-icon']}
                />
            </div>
        )
        setShowImage(true);
    }catch(error){
        console.error(error);
    }
}

export default showImage;