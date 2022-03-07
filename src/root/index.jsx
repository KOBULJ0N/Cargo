import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/pages/Header';
import Ourservices from '../components/pages/OurServices';
import OurStory from '../components/pages/OurStory';


export const Root = () => {
  const [count, setCount] = useState(0);

  window.addEventListener('scroll', () => {
    setCount(window.scrollY);
  });

  console.log(count);

  return (
    <div>
      <Navbar />
      <Header />
      <OurStory />
      <Ourservices />
    </div>
  );
};
export default Root;
