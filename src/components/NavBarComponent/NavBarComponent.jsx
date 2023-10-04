import React from 'react';

const NavBarComponent = () => {
  const arr = ['911', '718', 'Cayman'];
  return (
    <div className=' w-[168px] h-[112px] '>
      {arr.map((item) => {
        return (
          <h1
            key={item}
            className='text-2xl font-medium pb-3 hover:text-red-700 cursor-pointer'
          >
            {item}
          </h1>
        );
      })}
    </div>
  );
};

export default NavBarComponent;
