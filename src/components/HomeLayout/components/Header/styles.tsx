import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Input from 'components/Input';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #f5f5f5;
  padding: 10px 0;
  transition: 0.2s;
  opacity: 1;
  &.hidden {
    z-index: -1;
    opacity: 0;
  }
`;

export const SearchInput = styled(Input)`
  && {
    width: 30%;
    font-size: 20px;
    line-height: 71%;
    padding: 18px 25px;
  }
`;

export const Tabs = styled.div`
  background-color: #d9d9d9;
  border-radius: 100px;
  padding: 3px;
  display: flex;
  align-items: center;
  position: relative;
  :after {
    content: '';
    position: absolute;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: left cubic-bezier(1, 0.5, 0.5, 1) 0.3s;
    border-radius: 27.5px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #43d440;
    height: 85%;
    z-index: 0;
  }
  &.posts:after {
    left: 3px;
  }
  &.users:after {
    left: calc(50% - 3px);
  }
`;

export const Tab = styled(NavLink)`
  font-size: 20px;
  line-height: 71%;
  color: #202124;
  padding: 15px 25px;
  z-index: 1;
  position: relative;
  cursor: pointer;
  transition: color 200ms;
  user-select: none;
  text-transform: uppercase;
  &.active {
    color: #f5f5f5;
    border-radius: 100px;
    padding: 15px 25px;
  }
`;

export const CreateBtn = styled(NavLink)`
  background: #2758d6;
  border-radius: 100px;
  padding: 18px 52px;
  font-size: 20px;
  line-height: 71%;
  color: #ffffff;
  transition: 0.3s;
  text-transform: uppercase;
  :hover {
    opacity: 0.8;
  }
  &.hidden {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
`;
