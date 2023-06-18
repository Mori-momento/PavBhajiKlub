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
    <Slider className='w-[600px] h-[600px] rounded-lg overflow-hidden m-8  ' {...settings}>
      {items.map((item, index) => (
        <div className='w-[600px] h-[600px] object-cover overflow-hidden' key={index}>
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
