import styled from 'styled-components';

export const Post = styled.li`
  background: #e1e1e1;
  border-radius: 25px;
  padding: 25px;
  margin: 0 0 25px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 15px;
`;

export const PostInfo = styled.div`
  margin: 0 0 0 15px;
`;

export const Username = styled.h6`
  font-weight: 500;
  font-size: 20px;
  line-height: 71%;
  color: #000000;
  margin: 0 0 5px;
`;

export const Date = styled.span`
  font-size: 16px;
  line-height: 71%;
  color: #8d8d8d;
`;

export const Title = styled.h6`
  font-weight: 700;
  font-size: 25px;
  line-height: 100%;
  color: #2758d6;
  margin: 0 0 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 100%;
  color: #000000;
  width: fit-content;
`;

export const ShowMoreBtn = styled.span`
  color: #2758d6;
  text-decoration: underline;
  cursor: pointer;
`;
