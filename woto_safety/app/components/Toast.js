'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message, type = 'success') => {
  if (type === 'success') {
    toast.success(message, { position: 'bottom-right', autoClose: 3500 });
  } else if (type === 'error') {
    toast.error(message, { position: 'bottom-right', autoClose: 4000 });
  } else {
    toast.info(message, { position: 'bottom-right', autoClose: 3500 });
  }
};

export default function ToastProvider() {
  return <ToastContainer />;
}