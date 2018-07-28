import React from 'react';

const FormSuccess = (showingAlert) => {
  return (
    <div className={showingAlert ? 'alert-shown' : 'alert-hidden'}>
      <p>Дякуємо, ваша думка дуже важлива для нас</p>
    </div>
  );
};
export default FormSuccess;
