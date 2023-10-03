import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';

const TypeProductPage = () => {
  return (
    <div className='px-44 flex'>
      <div className='mt-5 py-10'>
        <NavBarComponent />
      </div>
      <div className='gap-3 mt-5 grid grid-cols-3 w-full h-full py-10 pl-5'>
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