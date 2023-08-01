// import HeroImage from '../assets/menu/heroimage1.png';
// import menuPdf from '../assets/menu.pdf'
// import Carousel from './carousel';
// import Menu from '../assets/menu.json';

// const LandingPage = () => {

//   const carouselItems = Menu;

//   const openPdf = () => {
//     window.open(menuPdf, '_blank');
//   }

// return (
// <div className="relative bg-black w-full h-screen sml:overflow-y-scroll">
// <div className="absolute w-full h-full"></div>
//   {/* <img
//     className="object-cover h-screen w-full absolute right-0"
//     src={HeroImage}
//     alt="heroImage"
//   /> */}

//   <nav className="fixed top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black ">
//     <div className="flex items-center shrink-0 mr-6">
//       <span className='font-bold text-[#f97316] text-[30px] ' >PBK</span>
//     </div>
//     <div className="lg:hidden">
//       <button className="flex items-center px-3 py-2 text-white border rounded hover:text-orange-500 hover:border-orange-500">
//         <svg
//           className="w-4 h-4 fill-current"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <title>Menu</title>
//           <path
//             fillRule="evenodd"
//             d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z"
//           />
//         </svg>
//       </button>
//     </div>
//     <div className="hidden lg:flex items-center">
//       <a
//         href="#menu"
//         className="block px-4 py-2 text-white hover:text-orange-500"
//       >
//         Menu
//       </a>
//       <a
//         href="#about"
//         className="block px-4 py-2 text-white hover:text-orange-500"
//       >
//         About Us
//       </a>
//       <a
//         href="#contact"
//         className="block px-4 py-2 text-white hover:text-orange-500"
//       >
//         Contact Us
//       </a>
//       <button className="inline-block px-4 py-2 ml-4 text-white bg-orange-500 rounded hover:bg-orange-600">
//         Order Online
//       </button>
//     </div>
//   </nav>
//   <div className="absolute flex md:shrink sml:flex-col justify-between top-[10%]  md:top-[10%] w-full h-full left-0 p-6 bg-opacity-75">
//   <div className='w-1/2 sml:w-full  sml:px-2 sml:order-1'>
//     <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//       Welcome to <span className='text-orange-500' >Pav Bhaji Klub</span>
//     </h1>
//     <p className='text-xl font-semibold text-white my-8 text-justify' > Where Innovation Meets Flavor!</p>
//       <div className='relative top-[-10%] lg:hidden sml:flex w-full sml:visible' >
//         <Carousel items={carouselItems}/>
//       </div>
//     <p className="text-xl my-8 text-white text-justify">
//     Pav Bhaji Klub, a culinary destination where innovation and flavor collide to create an extraordinary dining experience. Discover a world of tantalizing tastes and vibrant creations that will take your palate on a thrilling adventure. With our unique blend of traditional flavors and creative twists, we invite you to embark on a gastronomic journey that celebrates the art of pav bhaji like never before.
//     </p>
//     <div className='sml:w-full flex flex-row px-0 '>
//     <button onClick={openPdf} className="inline-block px-2 py-2 m-4 sml:w-[70%] text-white border rounded hover:text-orange-500 hover:border-orange-500 ">
//       View Menu
//     </button>
//     <a href={menuPdf} download className="inline-block px-4 py-2 m-4 sml:w-[70%] text-white border rounded hover:text-orange-500 hover:border-orange-500">
//       Download
//     </a>
//     </div>
//   </div>
//   <div className='relative top-[-10%] sml:top-[-5%] flex shrink sml:hidden' >
//     <Carousel items={carouselItems}/>
//   </div>

//   </div>
// </div>
// );
// };

// export default LandingPage;

import menuPdf from "../assets/menu.pdf";
import Carousel from "./carousel";
import Menu from "../assets/menu.json";



export default function LandingPage() {
  const carouselItems = Menu;

  const scrollToSection = (id) => {
    // Scroll to the section using the scrollIntoView method with the unique identifier
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const openPdf = () => {
    window.open(menuPdf, "_blank");
  };
  return (
    <div className="sml:h-[175vh] pt-20 h-screen bg-black">
      <nav className="fixed top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black ">
        <div className="flex items-center shrink-0 mr-6">
          <span className="font-bold text-[#f97316] text-[30px] ">PBK</span>
        </div>
        <div className="lg:hidden">
          {/* <button className="flex items-center px-3 py-2 text-white border rounded hover:text-orange-500 hover:border-orange-500">
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
          </button> */}
        </div>
        <div className="hidden lg:flex items-center">
          <button
            href="#menu"
            onClick={openPdf}
            className="block px-4 py-2 text-white hover:text-orange-500"
          >
            Menu
          </button>
          <button
            href="#about"
            onClick={() => scrollToSection('about')}
            className="block px-4 py-2 text-white hover:text-orange-500"
          >
            About Us
          </button>
          <button
            href="#contact"
            onClick={() => scrollToSection('contact')}
            className="block px-4 py-2 text-white hover:text-orange-500"
          >
            Contact Us
          </button>
          <button className="inline-block px-4 py-2 ml-4 text-white bg-orange-500 rounded hover:bg-orange-600">
            Order Online
          </button>
        </div>
      </nav>
      <div className="flex bg-black flex-wrap w-full grid grid-cols-2 gap-x-32 p-10 sml:p-6 my-10 text-black sml:grid-cols-1">
        <div className="h-[160px] w-full shrink sml:order-1 sml:h-[30vh]">
          <h1 className="text-6xl font-bold text-white mb-4 sml:text-5xl">
            Welcome to <span className="text-orange-500">Pav Bhaji Klub</span>
          </h1>
          <p className="text-xl font-semibold text-white mb-0 text-justify">
            Where Innovation Meets Flavor!
          </p>
        </div>
        <div className="h-full w-full shrink items-center  row-span-3 rounded-lg sml:order-2 sml:h-[40vh]">
          <Carousel items={carouselItems} />
        </div>
        <div className="h-[250px] sml:h-max w-full flex shrink sml:order-4 sml:pt-[20vh] sml:mt-0 sml:relative sml:top-[0%]">
          <p className="text-xl mt-10 mr-8 text-white text-justify sml:mr-0">
            Pav Bhaji Klub, a culinary destination where innovation and flavor
            collide to create an extraordinary dining experience. Discover a
            world of tantalizing tastes and vibrant creations that will take
            your palate on a thrilling adventure. With our unique blend of
            traditional flavors and creative twists, we invite you to embark on
            a gastronomic journey that celebrates the art of pav bhaji like
            never before.
          </p>
        </div>
        <div className="h-[70px] w-full shrink sml:flex sml:justify-center sml:items-center sml:order-3 sml:h-[40px] sml:mb-1 sml:relative sml:top-[0%]">
          <button
            onClick={openPdf}
            className="inline-block px-2 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500 "
          >
            View Menu
          </button>

          <a
            href={menuPdf}
            download
            className="inline-block px-4 py-2 m-4 text-white border rounded hover:text-orange-500 hover:border-orange-500"
          >
            Download 
          </a>
        </div>
      </div>
    </div>
  );
}
