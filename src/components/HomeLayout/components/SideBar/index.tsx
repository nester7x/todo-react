import React, { FC, useRef, useState } from 'react';

import * as S from './styles';

type Filters = {
  name: string;
  value: string;
};

type SideBarProps = {
  className: string;
  filters: Filters[];
  handleSelectFilter: (name: string, value: string) => void;
  getDefaultParamValue: (name: string, defaultValue: string) => string;
};

const SideBar: FC<SideBarProps> = ({
  className,
  filters,
  handleSelectFilter,
  getDefaultParamValue,
}) => {
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
        {filters?.map((filter, index) => (
          <S.MenuItem key={index}>
            <S.CheckboxLabel>
              <S.InputCheck
                name='filter'
                onChange={(e) => handleSelectFilter(e.target.name, e.target.value)}
                defaultValue={getDefaultParamValue('filter', '')}
                type='radio'
                value={filter.value}
              />
              <S.LabelName>{filter.name}</S.LabelName>
            </S.CheckboxLabel>
          </S.MenuItem>
        ))}
      </S.FiltersMenu>
    </S.Wrapper>
  );
};

export default SideBar;
