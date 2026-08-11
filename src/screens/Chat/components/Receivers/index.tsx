import React, { FC, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { api } from 'utils/apiUtils';
import { getCookie } from 'utils/cookieUtils';
import Preloader from 'components/Preloader';
import { Autocomplete, TextField } from '@mui/material';
import useDebounce from '../../../../hooks/useDebounce';
import { Room } from '../../../../types/roomTypes';
import { User } from '../../../../types/userTypes';

type UserData = {
  username: string;
  _id: string;
};

type ReceiversProps = {
  className: string;
  user: User;
};

const Receivers: FC<ReceiversProps> = ({ className, user }) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<UserData[]>([]);
  const defaultProps = {
    options: users,
    getOptionLabel: (option: any) => option.username || '',
  };
  const [autocompleteValue, setAutocompleteValue] = React.useState<any | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const location = useLocation();
  const debouncedSearchTerm = useDebounce(autocompleteValue, 500);

  useEffect(() => {
    (async () => {
      const data = await api.get('rooms', getCookie('token'));
      setRooms(data);
    })();
  }, []);

  // TODO stopped on after room creation update room list; change logic to store everything in Context

  useEffect(() => {
    (async () => {
      if (location.search.split('=')[1]) {
        const data = await api.get(`users/search${location.search}`, getCookie('token'));
        setUsers(data);
      }
    })();
  }, [location.search]);

  useEffect(() => {
    (async () => {
      if (debouncedSearchTerm) {
        const data = await api.get(`users?search=${debouncedSearchTerm}`, getCookie('token'));
        setUsers(data);
      }
    })();
  }, [debouncedSearchTerm]);

  const handleAutocompleteChange = async (_: any, newInputValue: string) => {
    setAutocompleteValue(newInputValue);
  };

  const handelUserChoose = async (_: any, user: any) => {
    const userRoom = rooms?.find((r) => r?.members?.some((m) => m?.id === user?.id));
    if (userRoom) {
      navigate(`/chat/${userRoom.id}`);
    } else {
      const room = await api.post(
        'rooms/dm',
        { targetUserId: user?.id, isDirectMessage: true },
        getCookie('token'),
      );
      if (room?.id) {
        navigate(`/chat/${room.id}`);
      }
    }
  };

  if (!rooms) return <Preloader />;

  const isOpen = className === 'open';

  return (
    <div
      className={`
        w-[30%] relative overflow-y-auto overflow-x-hidden h-full border-r border-t border-black pb-10
        [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-[20px] [&::-webkit-scrollbar-thumb]:rounded-[20px]
        max-tablet:absolute max-tablet:top-0 max-tablet:right-full max-tablet:h-full
        max-tablet:transition-all max-tablet:duration-200 max-tablet:z-[105]
        ${
          isOpen
            ? 'max-tablet:w-[60%] max-tablet:translate-x-full max-tablet:opacity-100'
            : 'max-tablet:w-0 max-tablet:opacity-0'
        }
      `}
    >
      <div>
        <Autocomplete
          {...defaultProps}
          id='clear-on-escape'
          clearOnEscape
          onChange={handelUserChoose}
          onInputChange={handleAutocompleteChange}
          renderOption={(props, option) => {
            const { key, ...rest } = props as any;
            return (
              <li key={key} {...rest}>
                {option.username}
              </li>
            );
          }}
          renderInput={(params) => <TextField {...params} label='Search...' variant='standard' />}
        />
        {/* <Button type='button' text='Add' onClick={onButtonClick} disabled={false} />*/}
      </div>
      {rooms?.map((room, index) => (
        <NavLink
          key={room.id ?? index}
          to={`/chat/${room.id}`}
          className='text-xl !text-black block p-[10px] cursor-pointer transition-colors duration-200 hover:bg-white/10'
        >
          {room.members.find((m) => m.id !== user?.id)?.username || ''}
        </NavLink>
      ))}
    </div>
  );
};

export default Receivers;
