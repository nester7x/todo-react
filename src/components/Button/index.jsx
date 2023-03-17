import React from 'react';
import PropTypes from 'prop-types';

import BtnStyled from './styles';

const Btn = ({ onClick, type, children, ...rest }) => (
  <BtnStyled {...rest} onClick={onClick} type={type}>
    {children}
  </BtnStyled>
);

Btn.defaultProps = {
  onClick: () => {},
  type: 'button',
  text: 'Btn'
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string
};

export default Btn;
