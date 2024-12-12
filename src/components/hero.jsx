// import React from 'react';
// import heroImage from '../assets/images/heroimg2.jpg';

// const Hero = () => {
//   return (
//     <section
//       className="  z-0 bg-cover bg-center h-screen bg-no-repeat bg-fixed"
//       id="hero"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className=" flex flex-col items-center justify-center h-full container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 text-white">
//         <h1 className="text-6xl font-bold leading-tight">Welcome to Agriquinns</h1>
//         <p className="text-3xl leading-relaxed mt-4">We produce high-quality fertilizers from coconut husk.</p>
//         <button className="bg-green-700 hover:bg-green-800 hover:text-black text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import heroImage from '../assets/images/heroimg2.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="z-0 bg-cover bg-center h-screen bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Hero background image"
    >
      <div className="flex flex-col items-center justify-center h-full container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 text-white">
        <h1 className="text-6xl font-bold leading-tight">Welcome to Agriquinns</h1>
        <p className="text-3xl leading-relaxed mt-4">
          We produce high-quality fertilizers from coconut husk.
        </p>
        <Link
          to="/about"
          className="bg-green-700 hover:bg-green-800 hover:text-black text-white font-bold py-2 px-4 rounded mt-4"
          aria-label="Learn more about Agriquinns"
        >
          Learn More About Our Sustainable Fertilizers
        </Link>
      </div>
    </div>
  );
};

export default Hero;