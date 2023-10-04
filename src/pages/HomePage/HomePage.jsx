import React from 'react'
import { SlidePage } from '../../components/SlideComponent/SlideComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct';
// import CardComponent from '../../components/CardComponent/CardComponent';
import slide1 from '../../assets/image/slide1.jpg';


const HomePage = () => {
  const arr = ['911', '718', 'cayman']
  return (
    <div>
      <SlidePage />
      <div className='px-44 gap-4 grid grid-cols-4 justify-start items-center pt-5 font-normal text-2xl '>
        {/* {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })} */}
        <div>
          <img className='w-[368px] h-[207px]' src={slide1} alt='' />
          <TypeProduct name={arr[0]} />
        </div>
        <div>
          <img className='w-[368px] h-[207px]' src={slide1} alt='' />
          <TypeProduct name={arr[1]} />
        </div>
        <div>
          <img className='w-[368px] h-[207px]' src={slide1} alt='' />
          <TypeProduct name={arr[2]} />
        </div>
        <div>
          <img className='w-[368px] h-[207px]' src={slide1} alt='' />
          <TypeProduct name={arr[2]} />
        </div>
        <div>
          <img className='w-[368px] h-[207px]' src={slide1} alt='' />
          <TypeProduct name={arr[2]} />
        </div>
      </div>
      {/* <div className='gap-3 mt-5 grid grid-cols-4 w-full h-full px-44 py-10'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div> */}
    </div>
  );
}

export default HomePage