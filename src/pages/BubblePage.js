import TitleBar from "../components/common/TitleBar";
import BubbleBox from '../components/bubble/BubbleBox'
import BubbleProvider from "../components/bubble/BubbleProvider";
function BubblePage() {
    return(
        <BubbleProvider>
            <TitleBar/>
            <BubbleBox />
        </BubbleProvider>
    )
}

export default BubblePage;