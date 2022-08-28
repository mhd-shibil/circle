import { React, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// import { Modal } from '@mui/material';

const PdfViewer = ({ onClosePdf, onClickPayment, fileLink }) => {
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

  const file = `https://circle-bucket-travel.s3.ap-south-1.amazonaws.com/${fileLink}`;

  return (
    <div className='w-screen h-screen bg-opacity-50 top-0 left-0 fixed'>
      <div className=' p-4 mt-4'>
        <div className='flex w-full justify-center'>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page height='800' pageNumber={pageNumber} />
          </Document>
        </div>
        <div className='flex justify-center'>
          <div className='flex  justify-center'>
            <p className=' p-2 rounded-md'>
              Page {pageNumber} of {numPages}
            </p>
          </div>
          <div className='flex justify-center'>
            {pageNumber > 1 && (
              <button className=' p-2 rounded-md' onClick={changePageBack}>
                Previous Page
              </button>
            )}
          </div>
          {pageNumber < numPages && (
            <button className=' p-2 rounded-md ' onClick={changePageForward}>
              Next Page
            </button>
          )}
        </div>
        <div className='flex justify-center'>
          <div className='p-2 flex'>
            <button
              className=' p-2 rounded-md text-white'
              style={{ backgroundColor: 'green' }}
              onClick={() => onClickPayment()}
            >
              Accept
            </button>
          </div>
          <div className='p-2'>
            <button
              className=' p-2 rounded-md  text-white'
              style={{ backgroundColor: 'red' }}
              onClick={() => {
                console.log(99);
                onClosePdf();
              }}
            >
              Not Interested
            </button>
          </div>
          <div className='p-2'>
            <button className=' p-2 rounded-md  ' style={{ backgroundColor: 'lightsteelblue' }}>
              <a href={file} target='_blank' rel='noreferrer'>
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
