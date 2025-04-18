import React from 'react'


function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img style={{height:"60vh"}} src="https://www.srvmedia.com/wp-content/uploads/2023/10/Group-255-1.webp" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img style={{height:"60vh"}} src="https://images.vexels.com/content/194698/preview/shop-online-slider-template-4f2c60.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img style={{height:"60vh"}} src="https://pixosoft.com/images/sliders/pixosoft-slider-3.jpg" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel