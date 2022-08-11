import styled from 'styled-components';

export const TableWrapper = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  background-color: #394252;
  border-radius: 5px;
`;

export const TableHeader = styled.thead`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
  background: #394252;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.25);
`;

export const TableBody = styled.tbody`
  border-radius: 0 0 8px 8px;
`;

export const TR = styled.tr`
  position: relative;
  :after {
    position: absolute;
    content: '';
    background-color: rgba(255, 255, 255, 0.75);
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 90%;
    height: 1px;
  }
  :last-child:after {
    display: none;
  }
`;

export const TH = styled.th`
  text-transform: capitalize;
  padding: 10px 25px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

export const TD = styled.td`
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
  padding: 10px 25px;
`;
