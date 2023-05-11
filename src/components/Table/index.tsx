import React, { FC } from 'react';

import * as S from './styles';

type Item = {
  username: string;
  email: string;
  [key: string]: any;
};

type ColName = {
  label: string;
  key: string;
  Row?: (label: string, key: string, item: Item) => React.ReactNode;
};

type TableProps = {
  data: Item[];
  colName: ColName[];
  style?: React.CSSProperties;
};

type TableHeadItemProps = {
  item: ColName;
};

type TableRowProps = {
  item: Item;
  colName: ColName[];
};

const EmptyState = () => <div>No data found!</div>;

const TableHeadItem: FC<TableHeadItemProps> = ({ item }) => <S.TH>{item.label}</S.TH>;

const TableRow: FC<TableRowProps> = ({ item, colName }) => (
  <S.TR>
    {colName.map(({ label, key, Row }) => {
      if (Row) {
        return <S.TD key={key}>{Row(label, key, item)}</S.TD>;
      }

      if (key.includes('.')) {
        const keySplit = key.split('.');
        let res: any;

        keySplit.forEach((el) => {
          if (res) {
            res = res[el];
          } else {
            res = item[el];
          }
        });

        return <S.TD key={key}>{res}</S.TD>;
      }

      return <S.TD key={key}>{item[key]}</S.TD>;
    })}
  </S.TR>
);

const Table: FC<TableProps> = ({ data, colName, ...rest }) => {
  if (!data.length) {
    return <EmptyState />;
  }

  return (
    <S.TableWrapper style={rest.style}>
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

export default Table;
