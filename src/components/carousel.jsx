import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2500,
    speed:2500,
    cssEase: "ease-in-out"
  };

  return (
    <Slider className='w-[600px] h-[500px] sml:h-[300px] sml:w-[full] rounded-lg overflow-hidden md:flex shrink w-[50%] md:w-[30%]  sml:w-full h-full' {...settings}>
      {items.map((item, index) => (
        <div className='w-[600px] h-[500px] sml:h-[300px] sml:w-[300px] rounded-md object-cover overflow-hidden' key={index}>
          <img src={item.image_url} alt={item.dish_name} className="h-full w-full object-cover" />
        </div>
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      dish_name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default Carousel;
