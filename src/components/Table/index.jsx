import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper, TD, TH } from './styles';

const Table = ({ data, colName }) => (
  <TableWrapper>
    <thead>
      <tr>
        {colName.map((item, index) => (
          <TableHeadItem key={index} item={item} />
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} item={item} colName={colName} />
      ))}
    </tbody>
  </TableWrapper>
);

const TableHeadItem = ({ item }) => <TH>{item.value}</TH>;

const TableRow = ({ item, colName }) => (
  <tr>
    {colName.map(({ value, key, Row }) => {
      if (Row) {
        return <TD>{Row(value, key, item)}</TD>;
      }

      return <TD>{`${''}`}</TD>;
    })}
  </tr>
);

Table.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  colName: PropTypes.arrayOf.isRequired
};

TableHeadItem.propTypes = {
  item: PropTypes.arrayOf.isRequired
};

TableRow.propTypes = {
  item: PropTypes.arrayOf.isRequired,
  colName: PropTypes.arrayOf.isRequired
};

export default Table;
