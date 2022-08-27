import React, { useState, useRef } from 'react';

import Button from 'components/button/Button';
import FilterModal from './filter-modal/FilterModal';

import { ButtonType } from 'components/button/types';
import { useOnClickOutside } from 'hooks';
import { StatusPickerCell } from 'types';

type FilterProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedStatuses: StatusPickerCell[];
  setSelectedStatuses: React.Dispatch<React.SetStateAction<StatusPickerCell[]>>;
};

const Filter: React.FC<FilterProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  selectedStatuses,
  setSelectedStatuses
}) => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setShowFilterModal(false);
  });

  return (
    <div className='flex justify-center items-center border border-[#120A29] rounded-full'>
      <div className='relative' ref={ref}>
        <Button
          type={ButtonType.TRANSPARENT_BLACK}
          onClick={() => {
            setShowFilterModal(!showFilterModal);
          }}
          className='px-[30px] rounded-[10px] border-none'
        >
          <div className='flex items-center justify-center'>
            <img src='icons/filter-icon.svg' alt='Filter icon' />
            <div className='ml-1'> Filter</div>
          </div>
        </Button>
        {showFilterModal && (
          <div className='ml-2 absolute z-10 top-[50px] right-0'>
            <FilterModal
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              selectedStatuses={selectedStatuses}
              setSelectedStatuses={setSelectedStatuses}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
