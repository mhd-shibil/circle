/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
// import background from 'assets/travelformbg.jpg';
import Select from 'react-select';
import { showSuccessToast } from 'utils/toast.util';
import { createEnquiryMutation } from 'mutation/mutations';

enum HotelStar {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
  Four = 'Four',
  Five = 'Five',
  NoPreference = 'NoPreference'
}

interface CreateEnquiryInputType {
  userId: string;
  pickUpPoint: string;
  destinationId: string;
  startDate: Date;
  returnDate: Date;
  budget: number;
  adults: number;
  children: number;
  hotelStar: HotelStar;
  notes: string;
}

const TravelForm: FC = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useHistory();
  const options = [
    { value: 'Munnar', label: 'Munnar' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Kochi', label: 'Kochi' },
    { value: 'London', label: 'London' },
    { value: 'Manali', label: 'Manali' }
  ];

  const [formvalues, setValues] = useState({
    Destination: '',
    PickupSpot: '',
    Date: '',
    people: '',
    budget: '',
    hotel: '',
    notes: ''
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const [createEnquiry, { data, loading, error }] = useMutation(createEnquiryMutation);

  function submitfn() {
    const enquiryInput: CreateEnquiryInputType = {
      userId: '74bd13af-0337-4bdd-a5c5-9535efdf329d',
      pickUpPoint: formvalues.PickupSpot,
      destinationId: '25d89b80-86d9-45d5-87ec-d25734bd1cf7',
      startDate: new Date(formvalues.Date),
      returnDate: new Date(formvalues.Date),
      budget: Number(formvalues.budget),
      adults: Number(formvalues.budget),
      children: 0,
      hotelStar: HotelStar.NoPreference,
      notes: formvalues.notes
    };

    createEnquiry({ variables: { input: enquiryInput } });

    showSuccessToast('Travel Form Submitted Successfully');
    history.push('/user/enquiries');
  }

  const setFormWithValue = (formKey: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [formKey]: value }));
  };

  const location: any = useLocation();

  console.log(1, formvalues);

  useEffect(() => {
    setFormWithValue('Destination', location?.state?.destination);
  }, [location]);

  useEffect(() => {
    setFormWithValue('PickupSpot', selectedOption?.value);
  }, [selectedOption]);

  return (
    <div className=''>
      <div>
        {' '}
        <form name='TravelForm' className=' px-6'>
          <div className='no-scrollbar'>
            <div className=''>
              <div className='flex flex-col  p-3'>
                <label className='mb-2 text-gray-500'>Destination</label>
                <input
                  className='rounded-md bg-slate-100 text-sm p-2 border-solid border-2 border-gray-400 w-1/2'
                  type='text'
                  name='Destination'
                  placeholder='Enter your detination'
                  value={formvalues.Destination}
                  onChange={set('Destination')}
                />
              </div>
              <div className='flex flex-col  p-3'>
                <label className='mb-2 text-gray-500'>Pickup Spot</label>

                <div className='rounded-md bg-slate-100  text-sm p-2 border-solid border-2 border-gray-400 w-1/2'>
                  <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </div>
              </div>
              <div className='flex flex-col  p-3'>
                <label className='mb-2 text-gray-500'>Date</label>
                <input
                  className='rounded-md bg-slate-100  text-sm p-2 border-solid border-2 border-gray-400 w-1/2'
                  type='Date'
                  id='Date'
                  name='Date'
                  placeholder='Enter the date'
                  value={formvalues.Date}
                  onChange={set('Date')}
                />
              </div>
            </div>

            <div>
              <div className='flex flex-col  p-3'>
                <label className='mb-2 text-gray-500'>Number of people</label>
                <input
                  className='rounded-md bg-slate-100  text-sm p-2 border-solid border-2 border-gray-400 w-1/2'
                  type='text'
                  id='people'
                  name='people'
                  placeholder='Enter the number of people'
                  value={formvalues.people}
                  onChange={set('people')}
                />
              </div>

              <div className='flex flex-col  p-3'>
                <label className='mb-2 text-gray-500'>Max Budget</label>

                <input
                  className='rounded-md bg-slate-100  text-sm p-2 border-solid border-2 border-gray-400 w-1/2'
                  type='text'
                  id='budget'
                  name='budget'
                  placeholder='Enter the maximum budget'
                  value={formvalues.budget}
                  onChange={set('budget')}
                />
              </div>

              <div className='flex flex-col  p-3'>
                <label className='mb-2 text-gray-500'>Hotel Preference</label>
                <input
                  className='rounded-md bg-slate-100  text-sm p-2 border-solid border-2 border-gray-400 w-1/2'
                  type='text'
                  id='hotel'
                  name='hotel'
                  placeholder='Choose the hotel you prefer '
                  value={formvalues.hotel}
                  onChange={set('hotel')}
                />
              </div>
              <div className='flex flex-col  p-3'>
                <label className='mb-2 text-gray-500'>Notes</label>
                <input
                  className='rounded-md bg-slate-100   border-solid border-2 border-gray-400 w-1/2 text-sm p-2'
                  type='textarea'
                  id='notes'
                  name='notes'
                  placeholder='Enter your suggestions'
                  value={formvalues.notes}
                  onChange={set('notes')}
                />
              </div>
            </div>

            <div className='p-3 '>
              <button
                className=' rounded-md bg-blue-900 w-1/2 text-white p-2'
                type='button'
                id='createbutton2'
                onClick={() => {
                  submitfn();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TravelForm;
