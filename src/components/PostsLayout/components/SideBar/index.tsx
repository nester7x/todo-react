import React, { FC, useRef, useState } from 'react';

import * as S from './styles';

type Filters = {
  name: string;
  state: boolean;
};

type SideBarProps = {
  className: string;
  filters: Filters[];
  handleFiltersChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SideBar: FC<SideBarProps> = ({ className, filters, handleFiltersChange }) => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper className={className}>
      <S.IconWrapper
        ref={menuRef}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <S.FilterIcon className={isOpen ? 'opened' : ''} />
      </S.IconWrapper>
      <S.FiltersMenu className={isOpen ? 'opened' : ''}>
        {filters?.map((item, index) => (
          <S.MenuItem key={index}>
            <S.CheckboxLabel>
              <S.InputCheck
                type='checkbox'
                name={item.name}
                checked={item.state}
                onChange={handleFiltersChange}
              />
              <S.LabelName>{item.name}</S.LabelName>
            </S.CheckboxLabel>
          </S.MenuItem>
        ))}
      </S.FiltersMenu>
    </S.Wrapper>
  );
};

export default SideBar;
