import React from 'react'
import { SlidePage } from '../../components/SlideComponent/SlideComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import CardComponent from '../../components/CardComponent/CardComponent';


const HomePage = () => {
  const arr = ['911', '718', 'cayman']
  return (
    <div>
      <SlidePage />
      <div className='px-44 flex gap-4 justify-start items-center pt-5 font-normal text-2xl'>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </div>
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

export default HomePage