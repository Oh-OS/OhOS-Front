import axios from 'axios';

const showImage = async (id, setSelectedImage, setShowImage) => {
    try{
        const myPhoto = await axios.get(`${process.env.REACT_APP_PHOTOHOST}/photos/${id}`)
        setSelectedImage(
            <img src={`${process.env.REACT_APP_PHOTOHOST}/${myPhoto.data.imagePath}`} className={'selected-photo'}></img>
        )
        setShowImage(true);
    }catch(error){
        console.error(error);
    }
}

export default showImage;