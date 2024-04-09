import { useState, useEffect } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/bubble/FilteredUserList.module.css'

import UserBox from './UserBox';

function FilteredUserList({ searhValue }) {
    const username = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];
    const [ filteredUsers, setFilteredUsers ] = useState([]);

    useEffect(() => {
        let filteredUserList = username.map((name, index) => {
            if(name.includes(searhValue)){
                return <UserBox name={name} key={index}/>
            }
        }).filter(element => element);
        setFilteredUsers(filteredUserList);
    }, [searhValue])

    return(
        <div className={style['list-box']}>
            <div className={style['title']}>이름 일치 상위 항목</div>
            { filteredUsers.length ? filteredUsers : 
                <div>일치하는 항목이 없습니다.</div>}
        </div>
    )
}

export default FilteredUserList;