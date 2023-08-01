import Animation from './components/Animation'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import Carousel from './components/carousel'
import menu from './assets/menu.json'
import TestimonialSection from './components/testimonial'
import Footer from './components/footer'
import Aboutus from './components/Aboutus'

function App() {

  const carouselItems = menu;

  return (
    < div className='w-full text-white bg-black sml:tracking-tighter	 ' >
    <LandingPage/>
    <Aboutus/>  
    {/* <Carousel items={carouselItems} /> */}
    <TestimonialSection/>
    <Footer/>
    {/* <Menu/> */}
    </div>
  )
}

export default App
