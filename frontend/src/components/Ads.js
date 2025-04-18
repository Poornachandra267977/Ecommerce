import React from 'react'

function Ads(props) {
  return (
    <div className='col-md-3 mt-3'>
        <div className="card -w-100">
  <img src="https://img.lovepik.com/free-png/20210926/lovepik-mobile-phone-icon-png-image_401486772_wh1200.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


    </div>
  )
}

export default Ads