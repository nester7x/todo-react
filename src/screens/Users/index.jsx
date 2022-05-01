import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles'

const Users = () => {
    const [info, setInfo] = useState([]);

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`./${info[id].username}`, { replace: true });
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setInfo(json))
    }, [])

    return (
        <S.Wrap>
            <S.Title>Users info</S.Title>
            <table cellSpacing='0'>
                <tr>
                    <S.Td>id</S.Td>
                    <S.Td>Name</S.Td>
                    <S.Td>Username</S.Td>
                    <S.Td>Email</S.Td>
                </tr>
                {
                    info.map(item => <S.Tr onClick={()=> handleClick(item.id - 1)}>
                            <S.Td>{item.id}</S.Td>
                            <S.Td>{item.name}</S.Td>
                            <S.Td>{item.username}</S.Td>
                            <S.Td>{item.email}</S.Td>
                        </S.Tr>)
                }
            </table>
        </S.Wrap>
    );
};

export default Users;