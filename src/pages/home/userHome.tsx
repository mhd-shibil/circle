/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Select from 'react-select';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
// import { userDetails } from 'store/atoms/userdetails.atom';
// import { useRecoilValue } from 'recoil';
import { useQuery } from '@apollo/client';
import { getDestinationQuery } from 'queries/queries';

const images = {
  Munnar: 'images/newimg1.jpg',
  Goa: 'images/1431681.jpg',
  Manali: 'images/newimg6.jpg',
  Paris: 'images/newimg7.jpg'
};

const userHome: React.FC = () => {
  // const userId = useRecoilValue(userDetails);

  // const { data: userData } = useQuery(getUserQuery, { variables: { id: userId } });

  // if(!userData?.getUser?.id) {

  // }

  type OptionType = {
    value: string;
    label: string;
  };
  const history = useHistory();

  const [place, setPlace] = useState(null);

  const { data: destinationPlaces } = useQuery(getDestinationQuery);

  const places = destinationPlaces?.getDestinations?.map((dest) => {
    return { label: dest?.name, value: dest?.name, id: dest?.id };
  });

  const getValue = (option: OptionType) => {
    setPlace(option);
  };

  const navigate = () => {
    history.push({ pathname: '/user/travelform', state: { destination: place?.id } });
  };

  const image = images[place?.value] || 'images/IMG11.jpg';

  return (
    <div className='relative h-full flex justify-center '>
      <img src={image} alt='' className='object-cover h-full w-full absolute' />
      <Select
        placeholder='Where to go?'
        options={places}
        value={place}
        className='w-80 mr-10 my-auto'
        onChange={getValue}
      />
      {place?.value && <FaArrowRight className='my-auto z-10' onClick={navigate} />}
    </div>
  );
};

export default userHome;
