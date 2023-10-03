import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent';

const TypeProductPage = () => {
  return (
    <div className='px-44'>
      <div className='gap-3 mt-5 grid grid-cols-4 w-full h-full px-44 py-10'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default TypeProductPage