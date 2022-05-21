import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper, TD, TH } from './styles';

const TableHeadItem = ({ item }) => <TH>{item.label}</TH>;

const TableRow = ({ item, colName }) => (
  <tr>
    {colName.map(({ label, key, Row }) => {
      if (Row) {
        return <TD>{Row(label, key, item)}</TD>;
      }

      if (key.includes('.')) {
        const keySplit = key.split('.');
        return <TD>{item[keySplit[0]][keySplit[1]]}</TD>;
      }

      return <TD>{item[key]}</TD>;
    })}
  </tr>
);

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
