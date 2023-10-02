import React from 'react'
import { SlidePage } from '../../components/SlideComponent/SlideComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct';


const HomePage = () => {
  return (
    <div >
      <SlidePage />
      <div>
        <TypeProduct/>
      </div>
    </div>
  );
}

export default HomePage