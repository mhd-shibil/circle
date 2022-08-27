/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

import StatusPicker from 'components/status-picker/StatusPicker';
import { FilterTabs, FilterText, StatusPickerCell } from 'types';
import { FilterOptions } from 'constants/filterOptions';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

type FilterProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedStatuses: StatusPickerCell[];
  setSelectedStatuses: React.Dispatch<React.SetStateAction<StatusPickerCell[]>>;
};

const FilterModal: React.FC<FilterProps> = ({
  startDate,
  endDate,
  setEndDate,
  setStartDate,
  selectedStatuses,
  setSelectedStatuses
}) => {
  const [selectedTab, setSelectedTab] = useState<FilterTabs>(FilterOptions[0]);
  const [selectedDate, setSelectedDate] = useState({
    startDate: startDate ? startDate : new Date(),
    endDate: endDate ? endDate : new Date(),
    key: 'selection'
  });

  const renderSelectedTab = () => {
    switch (selectedTab.value) {
      case FilterText.DATE:
        return (
          <DateRange
            editableDateInputs={true}
            maxDate={new Date()}
            onChange={(item: any) => {
              setSelectedDate(item.selection);
              setStartDate(item.selection.startDate);
              setEndDate(item.selection.endDate);
            }}
            moveRangeOnFirstSelection={false}
            ranges={[selectedDate]}
          />
        );
      case FilterText.STATUS:
        return <StatusPicker selectedStatuses={selectedStatuses} setSelectedStatuses={setSelectedStatuses} />;
    }
  };

  return (
    <div className='min-w-[660px] min-h-[440px] rounded-lg flex bg-white z-10 border border-1'>
      <div className='h-auto w-[248px] bg-[#120A29] py-[20px] rounded-lg rounded-r-none mr-4'>
        {FilterOptions.map((item) => (
          <div
            className={`rounded-full h-[42px] text-center flex items-center px-[15px] mb-[30px] cursor-pointer mx-[12px] justify-between
                ${selectedTab.index === item.index ? 'bg-[white] text-[#120A29] ' : 'bg-[#120A29] text-[#94A3B8] '}`}
            key={item.index}
            role='presentation'
            onClick={() => {
              setSelectedTab(item);
            }}
          >
            <div className='flex'>
              <img
                src={item.icons[selectedTab.index === item.index ? 'selected' : 'normal']}
                alt='Calender'
                width='20px'
                className='mr-[8px]'
              />
              {item.value}
            </div>
            {selectedTab.index === item.index && <img src='icons/calender.svg' alt='arrow' className='justify-self-end' />}
          </div>
        ))}
      </div>
      <div className='h-full flex flex-col text-left'>
        <div className='text-[#70718C] text-[12px] mb-[10px] mt-[20px]'>{FilterOptions[selectedTab.index].label}</div>
        <div>{renderSelectedTab()}</div>
        <div></div>
      </div>
    </div>
  );
};

export default FilterModal;
