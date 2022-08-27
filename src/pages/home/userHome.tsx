import React, { useState } from 'react';
import Select from 'react-select';
import { FaArrowRight } from 'react-icons/fa';

const userHome: React.FC = () => {
  type OptionType = {
    value: string;
    label: string;
  };

  const [place, setPlace] = useState<OptionType>(null);

  const places = [
    { label: 'a', value: 'a' },
    { label: 'munnar', value: 'munnar' },
    { label: 'kochi', value: 'kochi' },
    { label: 'calicut', value: 'calicut' },
    { label: 'wayanad', value: 'wayanad' },
    { label: 'vagamon', value: 'vagamon' }
  ];

  const getValue = (option: OptionType) => {
    setPlace(option);
  };

  const navigate = () => {
    console.log('navigated');
  };

  console.log(place?.value);

  return (
    <div className=' h-full flex justify-center '>
      <Select
        placeholder='Where to go?'
        options={places}
        value={place}
        className='w-80 mr-10 my-auto'
        onChange={getValue}
      />
      {place?.value && <FaArrowRight className='my-auto' onClick={navigate} />}
    </div>
  );
};

export default userHome;
