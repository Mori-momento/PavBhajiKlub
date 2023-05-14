import HeroImage from '../assets/menu/heroimage1.png';
import logo from '../assets/menu/react.svg';

const LandingPage = () => {
return (
<div className="relative bg-black w-full h-screen overflow-hidden">
<div className="absolute w-full h-full "></div>

php
Copy code
  <img
    className="object-cover h-screen w-full absolute right-0"
    src={HeroImage}
    alt="heroImage"
  />

  <nav className="fixed top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black">
    <div className="flex items-center flex-shrink-0 mr-6">
      <img src={logo} alt="Pav Bhaji Klub" className="h-8" />
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
  <div className="absolute top-[30%] md:top-[20%] w-full md:w-1/2 h-full left-0 p-6 bg-opacity-75">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Welcome to <span className='text-orange-500' >Pav Bhaji Klub</span>
    </h1>
    <p className="text-lg md:text-xl text-white">
      Our delicious Pav Bhaji is made with the finest ingredients and spices
      to create a unique flavor that will leave you wanting more.
    </p>
    <button className="inline-block px-4 py-2 mt-4 text-white border rounded hover:text-orange-500 hover:border-orange-500">
      View Menu
    </button>
  </div>
</div>
);
};

export default LandingPage;