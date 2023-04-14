import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div>
        <div class="container-fluid mainz">
            <div class="row">
                <div class="col-4 colz">
                    <video loop autoPlay>
                        <source src="./anime1.webm" type="video/mp4" />
                    </video>
                </div>
                <div class="col-8 colz rowz">
                    <h1>Food delivery and <br /> more</h1>
                    <p>Groceries, shops, pharmacies, anything!</p>
                    <div className="inputz">
                        <div className="iconzt">
                            <i class="fa-solid fa-map-location fa-beat iconz"></i>
                        </div>
                        <input type="text" name="text" id="text" placeholder="What's your current location?" />
                        <div className="icont">
                            <i class="fa-solid fa-location-arrow fa-beat iconw"></i>
                        </div>
                        <a href="#" className='linkz'>Use current location</a>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div class="custom-shape-divider-top-1681233875">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    </div>
  )
}

export default Home