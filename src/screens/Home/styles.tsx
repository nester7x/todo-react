import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Input from 'components/Input';

export const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
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

export const Filters = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
`;

export const FilterIcon = styled.span`
  width: 20px;
  height: 20px;
  position: relative;
  &:after,
  &:before {
    transition: 0.4s;
    position: absolute;
    content: '';
    background-color: #f5f5f5;
    width: 11px;
    height: 4px;
  }
  &:after {
    transform: rotateZ(135deg);
    bottom: 7px;
    right: 2px;
  }
  &:before {
    transform: rotateZ(-135deg);
    bottom: 7px;
    right: 7px;
  }
  &.opened:after {
    top: 40%;
    right: -4px;
    width: 28px;
    transform: rotateZ(45deg);
  }
  &.opened:before {
    width: 28px;
    right: -4px;
    bottom: 40%;
    transform: rotateZ(-45deg);
  }
`;

export const IconWrapper = styled.div`
  background-color: #2758d6;
  cursor: pointer;
  display: flex;
  border-radius: 50%;
  padding: 8px;
  transition: 0.3s;
`;

export const FiltersMenu = styled.ul`
  background-color: #e1e1e1;
  width: 105px;
  border-radius: 25px;
  padding: 10px;
  position: absolute;
  left: -80px;
  top: 120%;
  transition: 0.3s;
  opacity: 0;
  &.opened {
    opacity: 1;
  }
`;

export const MenuItem = styled.li`
  margin: 0 0 10px;
  :last-child {
    margin: 0;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  line-height: 71%;
  color: #202124;
`;

export const InputCheck = styled.input`
  position: absolute;
  opacity: 0;
  left: 100%;
`;

export const CheckboxLabel = styled.label`
  position: relative;
  z-index: 10;
  color: #202124;
  font-size: 16px;
  line-height: 71%;
  cursor: pointer;
  padding: 5px 15px;
  background-color: #f5f5f5;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
  ${InputCheck}:checked ~ ${Span} {
    color: #f5f5f5;
  }
  ${InputCheck}:checked ~ ${Span}:after {
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #2758d6;
    border-radius: 25px;
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
    transition: left cubic-bezier(1, 0.5, 0.5, 1) 0.4s;
    border-radius: 27.5px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #43d440;
    height: 85%;
    z-index: 0;
  }
  &.left:after {
    left: 3px;
  }
  &.right:after {
    left: calc(50% - 3px);
  }
`;

export const Tab = styled(NavLink)`
  font-size: 20px;
  line-height: 71%;
  color: #202124;
  padding: 15px 25px;
  width: 50%;
  z-index: 1;
  position: relative;
  cursor: pointer;
  transition: color 200ms;
  user-select: none;
`;

export const ActiveTab = styled(NavLink)`
  font-size: 20px;
  line-height: 71%;
  color: #f5f5f5;
  border-radius: 100px;
  padding: 15px 25px;
  width: 50%;
  z-index: 1;
  position: relative;
  cursor: pointer;
  transition: color 200ms;
  user-select: none;
`;

export const MakePostBtn = styled(NavLink)`
  background: #2758d6;
  border-radius: 100px;
  padding: 18px 52px;
  font-size: 20px;
  line-height: 71%;
  color: #ffffff;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
