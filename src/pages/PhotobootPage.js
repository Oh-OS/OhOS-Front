import TitleBar from "../components/common/TitleBar";
import Photobooth from "../components/photoBooth/PhotoBooth";
import PhotoProvider from '../components/photoBooth/PhotoProvider'

function PhotoboothPage() {
    return(
        <>
            <TitleBar/>
            <PhotoProvider>
                <Photobooth/>
            </PhotoProvider>
        </>
    )
}

export default PhotoboothPage;