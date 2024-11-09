import React from 'react';
import Slider from 'react-slick';
import '../App.css';
import './Home.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slider-5.jpg',
  '/images/slider3.jpg',
  '/images/slide_01.jpg'
];

const HomeDashboard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    

  return (
    <div className="home-dashboard">
      {/* Image Carousel */}
      <Slider {...settings} className="carousel">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="card">
          <h3>Orders</h3>
          <p>Manage and track orders</p>
        </div>
        <div className="card">
          <h3>Menu</h3>
          <p>Edit and update menu items</p>
        </div>
        <div className="card">
          <h3>Inventory</h3>
          <p>Monitor stock levels</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
