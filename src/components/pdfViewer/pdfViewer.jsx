import { React, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import pdf from '../../assets/sample.pdf';
import PaymentPopUp from '../paymentpopup/paymentpopup';
// import { Modal } from '@mui/material';

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }
  function changePageBack() {
    changePage(-1);
  }
  function changePageForward() {
    changePage(1);
  }
  const [paymentModal, setPaymentModalOpen] = useState(false);
  const cancelFn = () => {
    setPaymentModalOpen(false);
  };

  return (
    <>
      {paymentModal && <PaymentPopUp cancelFn={cancelFn} />}
      <div className=' p-4'>
        <div className='flex w-full justify-center'>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page height='600' pageNumber={pageNumber} />
          </Document>
        </div>

        <div className=''>
          <p className=' p-2 rounded-md'>
            Page {pageNumber} of {numPages}
          </p>
        </div>
        <div className=''>
          {pageNumber > 1 && (
            <button className=' p-2 rounded-md' onClick={changePageBack}>
              Previous Page
            </button>
          )}
          {pageNumber < numPages && (
            <button className=' p-2 rounded-md' onClick={changePageForward}>
              Next Page
            </button>
          )}
        </div>
        <div className='p-2'>
          <button
            className=' p-2 rounded-md text-white'
            style={{ backgroundColor: 'green' }}
            onClick={() => setPaymentModalOpen(true)}
          >
            Accept
          </button>
        </div>
        <div className='p-2'>
          <button className=' p-2 rounded-md  text-white' style={{ backgroundColor: 'red' }} onClick={''}>
            Not Interested
          </button>
        </div>
        <div className='p-2'>
          <button className=' p-2 rounded-md  ' style={{ backgroundColor: 'lightsteelblue' }}>
            <a href='http://www.africau.edu/images/default/sample.pdf' target='_blank' rel='noreferrer'>
              Download
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default PdfViewer;