import Animation from './components/Animation'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import Carousel from './components/carousel'
import menu from './assets/menu.json'

function App() {

  const carouselItems = menu;

  return (
    < div className='w-full' >
    <LandingPage/>  
    <Carousel items={carouselItems} />
    {/* <Menu/> */}
    </div>
  )
}

export default App
