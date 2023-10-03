import { Card } from 'antd';
import React from 'react'

const CardComponent = () => {
  return (
    <Card
      headStyle={{ width: '368px', height: '207px' }}
      hoverable
      style={{
        width: 368,
      }}
      bodyStyle={{ padding: 20 }}
      cover={
        <img
          className='h-[207px] object-contain'
          alt='example'
          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
      }
    >
      <div className='text-lg '>
        <div className='hover:text-red-700 text-2xl'>718</div>
        <div className='hover:text-red-700'>All car models</div>
      </div>
    </Card>
  );
}

export default CardComponent