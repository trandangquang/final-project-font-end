import { Button } from 'antd';
import turboscabriolet from '../../assets/image/911-Turbo-S-Cabriolet.png';
import React from 'react'

const ProductDetailPage = () => {
  return (
    <div className='px-44'>
      <h1 className='font-medium text-4xl pt-10'>911 Turbo S Cabriolet.</h1>
      <h3 className='text-xl pt-2'>Price: 712,734 $</h3>
      <h2 className='font-bold text-3xl pt-4 text-center'>Technical Specs</h2>
      <div className='flex pt-6'>
        <div>
          <img src={turboscabriolet} alt='' />
        </div>
        <div className='pl-4 w-[720px] pt-16'>
          <table className='w-full text-lg '>
            <tr className='border-b-4'>
              <td className='font-semibold'>Power</td>
              <td>650 PS (478kW)</td>
            </tr>
            <tr className='border-b-4'>
              <td className='font-semibold'>Maximum torque</td>
              <td>800 Nm</td>
            </tr>
            <tr className='border-b-4'>
              <td className='font-semibold'>
                Acceleration from 0 - 100 km/h (0 - 62 mph)
              </td>
              <td>2.8 seconds</td>
            </tr>
            <tr className='border-b-4'>
              <td className='font-semibold'>Top speed</td>
              <td>330 km/h</td>
            </tr>
            <tr className='border-b-4'>
              <td className='font-semibold'>Height</td>
              <td>1.301 mm</td>
            </tr>
            <tr className='border-b-4'>
              <td className='font-semibold'>Width</td>
              <td>1.900 mm</td>
            </tr>
            <tr className='border-b-4'>
              <td className='font-semibold'>Long</td>
              <td>4.535 mm</td>
            </tr>
          </table>
          <div className='text-center pt-7'>
            <Button type='primary' danger>
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage