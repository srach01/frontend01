import React from 'react'

function Banner() {
  return (
<div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://www.playulti.com/static/thumb/2018/11/4/attach-1543895100126.jpg" class="d-block mx-auto" alt="Slide 1" />
    </div>
    <div className="carousel-item">
        <img src="https://www.playulti.com/static/thumb/2018/11/4/attach-1543895100126.jpg" class="d-block mx-auto" alt="Slide 2"  />
    </div>
    <div className="carousel-item">
        <img src="https://www.gamemonday.com/wp-content/uploads/2017/03/10-cassic-mmo-31318-01.jpg" class="d-block mx-auto" alt="Slide 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  )
}

export default Banner
