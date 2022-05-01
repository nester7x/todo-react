import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import * as S from './styles'
import {Td, Tr} from "./styles";

const Users = () => {
    // const [resType, setResType] = useState('');
    const [info, setInfo] = useState([]);

    let navigate = useNavigate();

    function handleClick(id) {
        navigate(`./${info[id].username}`, { replace: true });
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setInfo(json))
    }, [])

    // const handlePageChange = () => history.push('/posts')

    return (
        <S.Wrap>
            <S.Title>Users info</S.Title>
            {/*<ChangeBtn onClick={handlePageChange}>Users</ChangeBtn>*/}
            {/*<ChangeBtn onClick={()=>setResType('Posts')}>Posts</ChangeBtn>*/}
            {/*<ChangeBtn onClick={()=>setResType('Comments')}>Comments</ChangeBtn>*/}
            {/*<p>{resType}</p>*/}
            <table cellSpacing="0">
                <tr>
                    <Td>id</Td>
                    <Td>Name</Td>
                    <Td>Username</Td>
                    <Td>Email</Td>
                </tr>
                {
                    info.map(item => {
                        return <Tr onClick={()=> handleClick(item.id - 1)}>
                            <Td>{item.id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.username}</Td>
                            <Td>{item.email}</Td>
                        </Tr>
                    })
                }
            </table>
            {/*{*/}
            {/*    info.map(item => {*/}
            {/*        return <pre>{JSON.stringify(item)}</pre>*/}
            {/*    })*/}
            {/*}*/}
        </S.Wrap>
    );
};

export default Users;