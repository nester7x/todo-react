import React, { FC, useState } from 'react';

import UserIcon from 'assets/Images/user_icon.svg';
import { PostProps } from 'types/postTypes';
import { convertDate } from 'utils/convertDate';

import * as S from './styles';

type Props = {
  postData: PostProps;
};

const Post: FC<Props> = ({ postData, ...rest }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const displayText = showFullText ? postData?.text : postData?.text.slice(0, 160);

  return (
    <S.Post key={postData?.createdAt} {...rest}>
      <S.User>
        <img
          src={postData?.user?.avatarUrl ? postData?.user?.avatarUrl : UserIcon}
          alt='user icon'
        />
        <S.PostInfo>
          <S.Username>{postData?.user?.fullName}</S.Username>
          <S.Date>{convertDate(postData?.createdAt)}</S.Date>
        </S.PostInfo>
      </S.User>
      <S.Title>{postData?.title}</S.Title>
      <S.Text>
        {displayText}
        <span>
          {postData?.text.length > 160 && (
            <span onClick={toggleTextVisibility}>
              {showFullText ? ' ' : '... '}
              <S.ShowMoreBtn>{showFullText ? 'less' : 'more'}</S.ShowMoreBtn>
            </span>
          )}
        </span>
      </S.Text>
    </S.Post>
  );
};

export default Post;
