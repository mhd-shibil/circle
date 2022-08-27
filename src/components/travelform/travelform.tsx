import { FC } from 'react';

import { useState } from 'react';
// import background from 'assets/travelformbg.jpg';
import Select from 'react-select';

const TravelForm: FC = () => {
  const [selectedOption, setSelectedOption] = useState(null);
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

  function submitfn() {
    console.log(formvalues);
  }

  return (
    <div>
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
