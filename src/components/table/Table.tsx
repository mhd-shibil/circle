/* eslint-disable curly */
import './styles.css';

const Table = (props) => {
  const {
    tableHeads,
    tableData,
    emptyText,
    selectedRow,
    onRowClick,
    rowClassName,
    tbodyClassName,
    isLoading,
    setShowTransactionSummary
  } = props;

  const isRepeatingRow = (item, rowIndex) =>
    rowIndex - 1 >= 0 && tableData[rowIndex][item.value] === tableData[rowIndex - 1][item.value];

  const renderTD = (item, data, rowIndex) => {
    const hideCell = item.hideRepeat && isRepeatingRow(item, rowIndex);

    return <div style={{ opacity: hideCell ? 0 : 1 }}>{data[item.value]}</div>;
  };

  const renderTableData = (item, data, rowIndex) => {
    if (item.custom) return item.custom(data);
    if (item.hideRepeat) return renderTD(item, data, rowIndex);

    return data[item.value];
  };

  const isSelectedRow = (row) => row?.id === selectedRow?.id;

  const renderTableBody = () => {
    if (isLoading) {
      return (
        <div className='flex justify-center items-center h-[200px]'>
          Loading.....
        </div>
      );
    }

    if (tableData?.length) {
      return (
        <tbody className={tbodyClassName}>
          {tableData?.map((data, rowIndex) => (
            <tr
              key={data.id || data.ID}
              id={data.id || data.ID}
              className={`cursor-pointer text-[14px] text-[#232434] font-medium ${
                isSelectedRow(data) ? 'selected-row' : ''
              } ${rowClassName}`}
              role='presentation'
              onClick={() => {
                onRowClick(data);
                setShowTransactionSummary(true);
              }}
            >
              {tableHeads?.map((item, index) => (
                <td className=' overflow-hidden' key={index} style={{ width: item.width }}>
                  {renderTableData(item, data, rowIndex) || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      );
    }

    return <div className='h-[200px] flex items-center justify-center text-[18px] text-[#1E3A8A]'>{emptyText}</div>;
  };

  return (
    <div className='table-wrapper h-full overflow-hidden bg-white rounded-xl px-[25px]'>
      <table>
        <thead>
          <tr className='text-[14px]'>
            {tableHeads?.map((head, index) => (
              <td key={index} style={{ width: head.width }}>
                <div className='flex items-center'>{head.label}</div>
              </td>
            ))}
          </tr>
        </thead>
        {renderTableBody()}
      </table>
    </div>
  );
};

export default Table;
