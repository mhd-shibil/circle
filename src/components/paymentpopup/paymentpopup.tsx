import CircularLoader from 'components/loader/CircularLoader';
import React from 'react';
import { toast } from 'react-toastify';
//import { useState } from 'react';

interface paymentDetails {
  cancelFn: () => void;
}

const PaymentPopUp: React.FC<paymentDetails> = ({ cancelFn }) => {
  setTimeout(() => {
    cancelFn();
    toast.success('Payment Completed');
  }, 3000);

  return (
    <div className='w-screen h-screen top-0 left-0 flex items-start flex-wrap bg-opacity-50 justify-center fixed  z-10'>
      <div className='bg-white w-96 p-10 my-auto text-center shadow-slate-300 rounded-md'>
        <h2 className='font-bold'>Payment In Progress</h2> <br />
        <CircularLoader fullScreen={false} />
        {/* <p className='font-semibold'>Rs. 20000</p> */}
        {/* <div className='flex justify-center mt-5'>
          <Button className='bg-green-500 w-24 mr-8 font-bold text-white' onClick={() => console.log('Paid')}>
            Pay
          </Button>

          <Button className='bg-red-400 w-24 font-bold text-white' onClick={cancelFn}>
            Cancel
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default PaymentPopUp;
