import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const EmptyState = () => <div>No data found!</div>;

const TableHeadItem = ({ item }) => <S.TH>{item.label}</S.TH>;

const TableRow = ({ item, colName }) => (
  <S.TR>
    {colName.map(({ label, key, Row }) => {
      if (Row) {
        return <S.TD>{Row(label, key, item)}</S.TD>;
      }

      if (key.includes('.')) {
        const keySplit = key.split('.');
        let res;

        keySplit.forEach((el) => {
          if (res) {
            res = res[el];
          } else {
            res = item[el];
          }
        });

        return <S.TD>{res}</S.TD>;
      }

      return <S.TD>{item[key]}</S.TD>;
    })}
  </S.TR>
);

const Table = ({ data, colName, ...rest }) => {
  if (!data.length) {
    return <EmptyState />;
  }

  return (
    <S.TableWrapper {...rest}>
      <S.TableHeader>
        <tr>
          {colName.map((item, index) => (
            <TableHeadItem key={index} item={item} />
          ))}
        </tr>
      </S.TableHeader>
      <S.TableBody>
        {data.map((item, index) => (
          <TableRow key={index} item={item} colName={colName} />
        ))}
      </S.TableBody>
    </S.TableWrapper>
  );
};

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
