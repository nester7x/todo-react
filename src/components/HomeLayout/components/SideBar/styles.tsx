import styled from 'styled-components';

export const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  width: 10%;
  position: sticky;
  top: 24px;
  margin: -62px 0 0 -9%;
  &.hidden {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
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

export const LabelName = styled.span`
  text-transform: capitalize;
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
  ${InputCheck}:checked ~ ${LabelName} {
    color: #f5f5f5;
  }
  ${InputCheck}:checked ~ ${LabelName}:after {
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
