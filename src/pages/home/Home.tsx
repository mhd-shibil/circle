import { FC, useState } from 'react';

import Button from 'components/button/Button';
import CustomInput from 'components/input/CustomInput';
import Filter from 'components/filter/Filter';
import { Table } from 'components';
import { ButtonType } from 'components/button/types';
import { PaymentStatus, StatusPickerCell, RequestDetails } from 'types';
import RequestSummary from 'components/request-summary/RequestSummary';
import { newRequestTableHeaders, respondedTableHeaders } from 'constants/table';


const Home: FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedRow, setSelectedRow] = useState<RequestDetails>(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showTransactionSummary, setShowTransactionSummary] = useState(false);
  const [searchText, setSearchText] = useState('');
  // TODO: initial value optimization
  const [selectedStatuses, setSelectedStatuses] = useState<StatusPickerCell[]>(
    Object.values(PaymentStatus).map((item) => ({
      type: item,
      isSelected: false
    }))
  );


  const convertedTransactionData = [{ id: 'probo_jXkRwWECvZcWGFqyGvFNeP_08_25', date: '35-10-2020', amount: '25000', destination: 'Moonar' }, { id: 'probo_jXkRwWECvZcdfdsfsdfsdf', date: '3-10-2020', amount: '55000', destination: 'Kodai' }];
  const convertRefundsData = [{ id: 'probo_jXkRwWECvZcWGFqyGvFNeP_08_25', date: '35-10-2020', amount: '25000', destination: 'Moonar' }, { id: 'probo_jXkRwWECvZcdfdsfsdfsdf', date: '3-10-2020', amount: '55000', destination: 'Kodai' }];

  const getTableData = (activeTab) => (activeTab === 1 ? convertedTransactionData : convertRefundsData);
  const getTableHeaders = (activeTab) => (activeTab === 1 ? newRequestTableHeaders : respondedTableHeaders);


  const clearFilter = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setSearchText('');
    // TODO: optimize initial value
    setSelectedStatuses(
      Object.values(PaymentStatus).map((item) => ({
        type: item,
        isSelected: false
      }))
    );
  };

  const renderStatusCell = () => (
    <div className='flex items-center'>
      <img
        src={'sdsds'}
        alt='Status Icon'
        width='20px'
        className='mr-2'
        role='presentation'
        onClick={() => {}}
      />
     sdsdsdsd
    </div>
  );

  return (
    <div className='px-[40px] py-[40px] h-fit'>
      <div className='font-medium text-center text-[#9D9EAE] mb-[21px] flex justify-between'>
        <ul className='flex flex-wrap -mb-px'>
          <li className='mr-2'>
            <Button
              onClick={() => setActiveTab(1)}
              type={ButtonType.CUSTOM}
              className={`text-base pl-0 ${
                activeTab === 1 && 'text-[#1E3A8A] font-semibold border-b-2 border-[#1E3A8A] rounded-none'
              }`}
            >
             New Requests
            </Button>
          </li>
          <li className='mr-2'>
            <Button
              onClick={() => setActiveTab(2)}
              type={ButtonType.CUSTOM}
              className={`text-base ${
                activeTab === 2 && 'text-[#1E3A8A] font-semibold border-b-2 border-[#1E3A8A] rounded-none'
              }`}
            >
              Accepted
            </Button>
          </li>
        </ul>
        {/* TODO: search design needs to be received */}
        <div className='flex justify-end'>
          <div
            className='flex justify-center items-center text-center text-[14px] text-[#120A29] mr-[14px]
              cursor-pointer border-r border-[#120A29] pr-[12px]'
            role='presentation'
            onClick={clearFilter}
          >
            Clear Filter
          </div>
          <div>
            <Filter
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              selectedStatuses={selectedStatuses}
              setSelectedStatuses={setSelectedStatuses}
            />
          </div>
          <div className='ml-4'>
            <CustomInput
              id='abc'
              value={searchText}
              placeHolder='&#x1F50D;   Search'
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className='text-[black] max-h-[40px] border-b rounded-[40px] border-[#AFAFBE] bg-[#F9F9FB] focus:border-[#120A29]'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-full text-4xl relative overflow-x-hidden'>
        <div className='w-full'>
          {
            <Table
              tableHeads={[
                ...getTableHeaders(activeTab),
                {
                  label: 'Status',
                  value: 'status',
                  custom: renderStatusCell
                }
              ]}
              // Table data needs to be updated for refund
              tableData={getTableData(activeTab)}
              emptyText='No Transactions'
              tbodyClassName='h-[calc(100vh-300px)]'
              selectedRow={selectedRow}
              onRowClick={setSelectedRow}
              setShowTransactionSummary={setShowTransactionSummary}
              isLoading={false}
            />
          }
        </div>
        <div
          className={`${
            showTransactionSummary && activeTab === 1 ? 'transaction-summary-visible' : 'transaction-summary-hide'
          } absolute right-0 top-0`}
        >
          <RequestSummary
            onRefundClick={() => console.log('refund clicked')}
            onClose={() => {
              setShowTransactionSummary(false);
            }}
            selectedRow={selectedRow}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
