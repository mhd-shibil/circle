import React from 'react';

import CheckBox from 'components/checkbox/Checkbox';
import { PaymentStatus, StatusPickerCell } from 'types';

type StatusPickerProps = {
  selectedStatuses: StatusPickerCell[];
  setSelectedStatuses: React.Dispatch<React.SetStateAction<StatusPickerCell[]>>;
};

const StatusPicker: React.FC<StatusPickerProps> = ({ selectedStatuses, setSelectedStatuses }) => {
  const statusValues = Object.values(PaymentStatus);

  return (
    <div className='flex flex-col mt-[10px]'>
      {statusValues.map((item, index) => (
        <div key={item} className='flex items-center mb-[20px]'>
          <CheckBox
            checked={selectedStatuses[index].isSelected}
            disabled={false}
            onPress={() => {
              const selectedItems = [...selectedStatuses];
              const clickedItem = selectedStatuses[index];

              const newItem: StatusPickerCell = { type: clickedItem.type, isSelected: !clickedItem.isSelected };

              selectedItems[index] = newItem;
              setSelectedStatuses(selectedItems);
            }}
          />
          <div className='ml-[10px]'>fdfdsf</div>
        </div>
      ))}
    </div>
  );
};

export default StatusPicker;
