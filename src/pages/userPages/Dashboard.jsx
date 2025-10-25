import React from 'react';
import Hero from '../../component/carousel/Hero';
import { Home,Home2, Home3, Home4, Home4Left, Home4Right, Home5, Home6 } from '../../component/carousel/Home';
import { slides } from '../../component/data';

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <Home data={slides} tital={"Slider 1"} />
      <Home2 data={slides} tital={"Slider 2"} />
      <Home3 data={slides} tital={"Slider 3"} />
      <Home4 data={slides} tital={"Slider 4"} />
      <Home5 data={slides} tital={"Slider 5"} />
      <Home6 data={slides} tital={"Slider 6"} />
      <Home4Right data={slides} tital={"Slider 6"} />
      <Home4Left data={slides} tital={"Slider 6"} />


    </div>
  );
};

export default Dashboard;
