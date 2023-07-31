import React, { FC, useState } from 'react';

import UserIcon from 'assets/Images/user_icon.svg';

import * as S from './styles';

type PostProps = {
  createdAt: string;
  avatarUrl: string;
  fullName: string;
  title: string;
  text: string;
};

const Post: FC<PostProps> = ({ createdAt, avatarUrl, fullName, title, text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const displayText = showFullText ? text : text.slice(0, 160);

  const convertDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  return (
    <S.Post key={createdAt}>
      <S.User>
        <img src={avatarUrl ? avatarUrl : UserIcon} alt='user icon' />
        <S.PostInfo>
          <S.Username>{fullName}</S.Username>
          <S.Date>{convertDate(createdAt)}</S.Date>
        </S.PostInfo>
      </S.User>
      <S.Title>{title}</S.Title>
      <S.Text>
        {displayText}
        <span>
          {text.length > 160 && (
            <span onClick={toggleTextVisibility}>
              {showFullText ? ' ' : '... '}
              <S.MoreBtn>{showFullText ? 'less' : 'more'}</S.MoreBtn>
            </span>
          )}
        </span>
      </S.Text>
    </S.Post>
  );
};

export default Post;
