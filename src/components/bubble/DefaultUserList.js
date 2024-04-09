import '../../styles/common/Style.css'
import style from '../../styles/bubble/DefaultUserList.module.css'

import UserBox from './UserBox';

function DefaultUserList() {
    const username = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];
    return(
        <div className={style['list']}>
            {username.map(name => <UserBox name={name}/>)}
        </div>
    )
}

export default DefaultUserList;