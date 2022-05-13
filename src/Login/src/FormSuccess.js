import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Contacted Succesfully</h1>
      <img className='form-img-2'  src={process.env.PUBLIC_URL + '/images/img2.png'}alt='success-image' />
    </div>
  );
};

export default FormSuccess;