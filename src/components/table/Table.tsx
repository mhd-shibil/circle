import React from 'react';
// import { formatDate } from 'app/utils/common-utils';

import './styles.css';

const Table = (props) => {
  const { tableHeads, tableData, emptyText, selectedRow, onRowClick, rowClassName, tbodyClassName } = props;

  const isRepeatingRow = (item, rowIndex) => (rowIndex - 1 >= 0) && tableData[rowIndex][item.value] === tableData[rowIndex - 1][item.value];

  const renderTD = (item, data, rowIndex) => {
    const hideCell = item.hideRepeat && isRepeatingRow(item, rowIndex);

    return <div
      style={{ opacity: hideCell ? 0 : 1 }}
    >
      {data[item.value]}
    </div>;
  };

  const renderTableData = (item, data, rowIndex) => {
    if (item.custom) return item.custom(data);
    if (item.hideRepeat) return renderTD(item, data, rowIndex);
    // if (item.type === 'date') return data[item.value] ? formatDate(new Date(data[item.value]), item.hasTime) : '-';

    return data[item.value];
  };

  const isSelectedRow = (row) => row?.id === selectedRow?.id;


  return (
    <div className="table-wrapper v-scroll h-scroll bg-white rounded-xl">
      <table>
        <thead>
          <tr className="text-[14px]">
            {tableHeads?.map((head, index) => (
              <td key={index}>
                <div className="flex items-center">
                  {head.label}
                </div>
              </td>))}
          </tr>
        </thead>
        <tbody className={tbodyClassName}>
          {tableData?.map((data, rowIndex) => (
            <tr
              key={data.id || data.ID}
              id={data.id || data.ID}
              className={`cursor-pointer text-[14px] text-[#232434] font-medium ${isSelectedRow(data) ? 'selected-row' : ''} ${rowClassName}`}
              role="presentation"
              onClick={() => onRowClick(data)}
            >
              {tableHeads?.map((item, index) => (
                <td key={index}>{renderTableData(item, data, rowIndex) || '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!tableData?.length && <div className="h-[200px] flex items-center justify-center text-[18px] text-[#1E3A8A]">{emptyText}</div>}
    </div>
  );
};

export default Table;
