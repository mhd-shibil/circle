import React, { useState } from 'react';
import Select from 'react-select';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { userDetails } from 'store/atoms/userdetails.atom';
import { useRecoilValue } from 'recoil';

const userHome: React.FC = () => {
  const userId = useRecoilValue(userDetails);

  type OptionType = {
    value: string;
    label: string;
  };
  const history = useHistory();

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
    history.push({ pathname: '/user/travelform', state: { destination: place?.value } });
  };

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
