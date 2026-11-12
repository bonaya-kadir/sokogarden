import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/Snacks to Savor.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/Sweet Treats.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/Freshness Delivered.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/Fresh Picks.png" class="d-block w-100" alt="..." />
        </div><div class="carousel-item">
          <img src="/images/Everyday Goodness.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/A Rainbow of Fruit.png" class="d-block w-100" alt="..." />
        </div>


      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel