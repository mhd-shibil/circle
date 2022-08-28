/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import background from 'assets/travelformbg.jpg';
import Select from 'react-select';
import { showSuccessToast } from 'utils/toast.util';
import { createEnquiryMutation } from 'mutation/mutations';
import { useRecoilValue } from 'recoil';
import { userDetails } from 'store/atoms/userdetails.atom';
import { getCustomerEnquiriesQuery, getDestinationQuery } from 'queries/queries';
import { useForm } from 'react-hook-form';
import RhfInput from 'components/RHFInput/RhfInput';
import { Button, MenuItem, TextField } from '@mui/material';
import { DateRange } from 'react-date-range';
import moment from 'moment';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

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
  const { data: destinationPlaces } = useQuery(getDestinationQuery);

  const options = destinationPlaces?.getDestinations?.map((dest) => {
    return { label: dest?.name, value: dest?.name, id: dest?.id };
  });

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

  const [createEnquiry] = useMutation(createEnquiryMutation, {
    refetchQueries: [getCustomerEnquiriesQuery]
  });
  const userId = useRecoilValue(userDetails);

  function submitfn() {
    console.log(7);
    const pickupId = destinationPlaces?.getDestinations?.filter((dest) => {
      return dest.name === selectedOption;
    });

    const enquiryInput: CreateEnquiryInputType = {
      userId: userId,
      pickUpPoint: pickupId[0]?.id,
      destinationId: location?.state?.destination,
      startDate: selectedDate?.startDate,
      returnDate: selectedDate?.endDate,
      budget: Number(formvalues.budget),
      adults: Number(formvalues.people),
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
    const destinationValue = destinationPlaces?.getDestinations?.filter((dest) => {
      return dest.id === location?.state?.destination;
    });

    setFormWithValue('Destination', destinationValue[0]?.name);
  }, [location]);

  useEffect(() => {
    setFormWithValue('PickupSpot', selectedOption?.name);
  }, [selectedOption]);

  const { control, handleSubmit } = useForm();
  const [showStartAndEndDate, setShowStartAndEndDate] = useState(false);
  const [showDatePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState({
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  });
  const onCloseShowDatePicker = () => {
    setDatePicker(false);
    setShowStartAndEndDate(true);
    console.log(startDate);
  };

  const onClickShowDatePicker = () => {
    setDatePicker(true);
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit(submitfn)}>
        <div className='flex flex-col space-y-4 p-8'>
          <TextField
            defaultValue={formvalues.Destination}
            InputProps={{
              readOnly: true
            }}
            className='bg-white m-4 w-1/3'
            label='Destination'
            value={formvalues.Destination}
          />

          <TextField
            id='outlined-select-currency'
            select
            label='Pickup Spot'
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
            className='bg-white m-4 w-1/3'
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <div className='flex flex-col w-1/3'>
            <button
              onClick={onClickShowDatePicker}
              className='h-14 min-h-14 rounded-md bg-white text-gray-500 text-sm border-solid border border-gray-400'
              type='button'
            >
              {showStartAndEndDate ? (
                <div className='flex justify-between px-4 text-base font-medium'>
                  <div>{moment(startDate)?.format('DD-MM-YYYY')}</div>-
                  <div>{moment(endDate)?.format('DD-MM-YYYY')}</div>
                </div>
              ) : (
                <div className='flex flex-start ml-4 font-medium text-base'>Click to Enter Date</div>
              )}
            </button>

            {showDatePicker && (
              <div className='absolute z-10'>
                <DateRange
                  className='pb-10'
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
                <button
                  className='absolute bottom-0 -ml-20 mb-4 border-2 rounded-md px-4 py-0.5 border-blue-800'
                  onClick={onCloseShowDatePicker}
                  type='button'
                >
                  Done
                </button>
              </div>
            )}
          </div>

          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            label='Max Budget'
            className='bg-white m-4 w-1/3'
            value={formvalues.budget}
            onChange={set('budget')}
          />

          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            label='Number of People'
            className='bg-white m-4 w-1/3'
            value={formvalues.people}
            onChange={set('people')}
          />

          <Button variant='outlined' type={'submit'} className='w-1/3 h-10'>
            Submit
          </Button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default TravelForm;
