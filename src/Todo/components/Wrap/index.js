import React from 'react';
import { Wrapper } from "./styles";

const Wrap = ({ children }) => {
    return (
        <Wrapper>
            {children || ''}
        </Wrapper>
    );
};

export default Wrap;