import HeroImage from '../assets/menu/heroimage1.png';
import menuPdf from '../assets/menu.pdf'
import Carousel from './carousel';
import Menu from '../assets/menu.json';

const LandingPage = () => {
  
  const carouselItems = Menu;

  const openPdf = () => {
    window.open(menuPdf, '_blank');
  }

return (
<div className="relative bg-black w-full h-screen overflow-hidden">
<div className="absolute w-full h-full"></div>
  {/* <img
    className="object-cover h-screen w-full absolute right-0"
    src={HeroImage}
    alt="heroImage"
  /> */}

  <nav className="fixed top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black ">
    <div className="flex items-center flex-shrink-0 mr-6">
      <span className='font-bold text-[#f97316] text-[30px] ' >PBK</span>
    </div>
    <div className="lg:hidden">
      <button className="flex items-center px-3 py-2 text-white border rounded hover:text-orange-500 hover:border-orange-500">
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            fillRule="evenodd"
            d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z"
          />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:items-center">
      <a
        href="#menu"
        className="block px-4 py-2 text-white hover:text-orange-500"
      >
        Menu
      </a>
      <a
        href="#about"
        className="block px-4 py-2 text-white hover:text-orange-500"
      >
        About Us
      </a>
      <a
        href="#contact"
        className="block px-4 py-2 text-white hover:text-orange-500"
      >
        Contact Us
      </a>
      <button className="inline-block px-4 py-2 ml-4 text-white bg-orange-500 rounded hover:bg-orange-600">
        Order Online
      </button>
    </div>
  </nav>
  <div className="absolute flex sml:flex-col justify-between top-[30%] md:top-[20%] w-full h-full left-0 p-6 bg-opacity-75">
  <div className='w-1/2 sml:w-[80%] '>
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Welcome to <span className='text-orange-500' >Pav Bhaji Klub</span>
    </h1>
    <p className='text-xl font-semibold text-white my-8 ' > Where Innovation Meets Flavor!</p>
    <p className="text-xl my-8 text-white">
    Pav Bhaji Klub, a culinary destination where innovation and flavor collide to create an extraordinary dining experience. Discover a world of tantalizing tastes and vibrant creations that will take your palate on a thrilling adventure. With our unique blend of traditional flavors and creative twists, we invite you to embark on a gastronomic journey that celebrates the art of pav bhaji like never before.
    </p>
    <button onClick={openPdf} className="inline-block px-4 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500">
      View Menu
    </button>
    <a href={menuPdf} download className="inline-block px-4 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500">
      download Menu
    </a>
  </div>
  <div className='relative top-[-10%]' >
  <Carousel items={carouselItems}/>
  </div>

  </div>
</div>
);
};

export default LandingPage;
// import menuPdf from '../assets/menu.pdf';
// import Carousel from './carousel';
// import Menu from '../assets/menu.json';

// const LandingPage = () => {
//   const carouselItems = Menu;

//   const openPdf = () => {
//     window.open(menuPdf, '_blank');
//   };

//   return (
//     <div className="relative bg-black w-full h-screen ">
//       <div className="absolute w-full h-full"></div>

//       <nav className="fixed top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black">
//         <div className="flex items-center flex-shrink-0 mr-6">
//           <span className="font-bold text-[#f97316] text-[30px]">PBK</span>
//         </div>
//         <div className="lg:hidden">
//           <button className="flex items-center px-3 py-2 text-white border rounded hover:text-orange-500 hover:border-orange-500">
//             <svg
//               className="w-4 h-4 fill-current"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <title>Menu</title>
//               <path
//                 fillRule="evenodd"
//                 d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:items-center">
//           <a
//             href="#menu"
//             className="block px-4 py-2 text-white hover:text-orange-500"
//           >
//             Menu
//           </a>
//           <a
//             href="#about"
//             className="block px-4 py-2 text-white hover:text-orange-500"
//           >
//             About Us
//           </a>
//           <a
//             href="#contact"
//             className="block px-4 py-2 text-white hover:text-orange-500"
//           >
//             Contact Us
//           </a>
//           <button className="inline-block px-4 py-2 ml-4 text-white bg-orange-500 rounded hover:bg-orange-600">
//             Order Online
//           </button>
//         </div>
//       </nav>

//       <div className="absolute flex flex-col justify-between sm:flex-row top-[30%] md:top-[20%] w-full h-full left-0 p-6 bg-opacity-75">
//         <div className="w-full sm:w-1/2 sm:pr-6">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
//             Welcome to <span className="text-orange-500">Pav Bhaji Klub</span>
//           </h1>
//           <p className="text-xl font-semibold text-white my-8">
//             Where Innovation Meets Flavor!
//           </p>
//           <p className="text-xl my-8 text-white">
//             Pav Bhaji Klub, a culinary destination where innovation and flavor
//             collide to create an extraordinary dining experience. Discover a
//             world of tantalizing tastes and vibrant creations that will take
//             your palate on a thrilling adventure. With our unique blend of
//             traditional flavors and creative twists, we invite you to embark on
//             a gastronomic journey that celebrates the art of pav bhaji like
//             never before.
//           </p>
//           <button
//             onClick={openPdf}
//             className="inline-block px-4 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500"
//           >
//             View Menu
//           </button>
//           <a
//             href={menuPdf}
//             download
//             className="inline-block px-4 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500"
//           >
//             Download Menu
//           </a>
//         </div>
//         <div className="relative sm:top-[-10%]">
//           <Carousel items={carouselItems} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import menuPdf from '../assets/menu.pdf';
// import Carousel from './carousel';
// import Menu from '../assets/menu.json';

// const LandingPage = () => {
//   const carouselItems = Menu;

//   const openPdf = () => {
//     window.open(menuPdf, '_blank');
//   };

//   return (
//     <div className="relative bg-black w-full h-screen">
//       <div className="absolute w-full h-full"></div>

//       <nav className="fixed top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black">
//         <div className="flex items-center flex-shrink-0 mr-6">
//           <span className="font-bold text-[#f97316] text-[30px]">PBK</span>
//         </div>
//         <div className="lg:hidden">
//           <button className="flex items-center px-3 py-2 text-white border rounded hover:text-orange-500 hover:border-orange-500">
//             <svg
//               className="w-4 h-4 fill-current"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <title>Menu</title>
//               <path
//                 fillRule="evenodd"
//                 d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:items-center">
//           <a
//             href="#menu"
//             className="block px-4 py-2 text-white hover:text-orange-500"
//           >
//             Menu
//           </a>
//           <a
//             href="#about"
//             className="block px-4 py-2 text-white hover:text-orange-500"
//           >
//             About Us
//           </a>
//           <a
//             href="#contact"
//             className="block px-4 py-2 text-white hover:text-orange-500"
//           >
//             Contact Us
//           </a>
//           <button className="inline-block px-4 py-2 ml-4 text-white bg-orange-500 rounded hover:bg-orange-600">
//             Order Online
//           </button>
//         </div>
//       </nav>

//       <div className="absolute flex flex-col justify-between sm:flex-row top-[30%] md:top-[20%] w-full h-full left-0 p-6 bg-opacity-75">
//         <div className="w-full sm:w-1/2 sm:pr-6">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
//             Welcome to <span className="text-orange-500">Pav Bhaji Klub</span>
//           </h1>
//           <p className="text-xl font-semibold text-white my-8">
//             Where Innovation Meets Flavor!
//           </p>
//           <p className="text-xl my-8 text-white">
//             Pav Bhaji Klub, a culinary destination where innovation and flavor
//             collide to create an extraordinary dining experience. Discover a
//             world of tantalizing tastes and vibrant creations that will take
//             your palate on a thrilling adventure. With our unique blend of
//             traditional flavors and creative twists, we invite you to embark on
//             a gastronomic journey that celebrates the art of pav bhaji like
//             never before.
//           </p>
//           <button
//             onClick={openPdf}
//             className="inline-block px-4 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500"
//           >
//             View Menu
//           </button>
//           <a
//             href={menuPdf}
//             download
//             className="inline-block px-4 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500"
//           >
//             Download Menu
//           </a>
//         </div>
//         <div className="relative sm:top-[-10%]">
//           <Carousel items={carouselItems} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
