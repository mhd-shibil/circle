import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  className: 'xxs:w-full md:w-max px-6 pt-104px',
  bodyClassName: 'justify-center rounded-4px p-4',
  toastClassName: 'p-0'
});
const POSITION = 'top-center';
const AUTO_CLOSE_DELAY = 5000;
const style = {
  background: '#F7D2D7',
  border: '1px solid #E60225'
};
const successStyle = {
  background: '#CDEDE5',
  border: '1px solid #A3D9CC',
  color: '#136753'
};

export const showErrorToast = (message) => {
  return toast.error(message, {
    position: POSITION,
    autoClose: AUTO_CLOSE_DELAY,
    hideProgressBar: true,
    closeButton: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style
  });
};

export const showSuccessToast = (message) => {
  return toast.success(message, {
    position: POSITION,
    autoClose: AUTO_CLOSE_DELAY,
    hideProgressBar: true,
    closeButton: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: successStyle
  });
};
