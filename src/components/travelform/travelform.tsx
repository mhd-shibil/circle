import { FC } from 'react';

import { useState } from 'react';

const TravelForm: FC = () => {
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
    <>
      <div>
        <form name='TravelForm' className='my-8'>
          <div className='no-scrollbar'>
            <div className=''>
              <div className='flex flex-col  p-3'>
                <label className='mb-2'>Destination</label>
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
                <label className='mb-2'>Pickup Spot</label>

                <select
                   className='rounded-md bg-slate-100  p-1 border-solid border-2 border-gray-400 w-1/2'
                  name='PickupSpot'
                  id='PickupSpot'
                  value={formvalues.PickupSpot}
                  onChange={set('PickupSpot')}
                >
                  <option value='location A'>location A</option>
                  <option value='location B'>location B</option>
                </select>
              </div>
              <div className='flex flex-col  p-3'>
                <label className='mb-2'>Date</label>
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
                <label className='mb-2'>Number of people</label>
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
                <label className='mb-2'>Max Budget</label>

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
                <label className='mb-2'>Hotel Preference</label>
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
                <label className='mb-2'>Notes</label>
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
    </>
  );
};

export default TravelForm;
