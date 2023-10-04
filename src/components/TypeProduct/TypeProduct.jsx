import React from 'react';

const TypeProduct = ({name}) => {
  return (
    <div className='hover:text-red-700 cursor-pointer w-[368px]'>
      {name}
    </div>
  );
};

export default TypeProduct;
