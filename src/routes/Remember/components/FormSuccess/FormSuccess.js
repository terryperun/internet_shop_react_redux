import React from 'react';

const FormSuccess = ({ showingAlert }) => (
  <div className={showingAlert ? 'alert-shown' : 'alert-hidden'}>
    <p>Емейл з інструкцією на відновлення відправлено</p>
  </div>
);
export default FormSuccess;
