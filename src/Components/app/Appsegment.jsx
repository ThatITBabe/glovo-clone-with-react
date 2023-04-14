import React from 'react'
import "./appstyle.css"

const Appsegment = () => {
  return (
    <div className="svgz">
      <section>
        <div class="custom-shape-divider-top-1681322539">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>

      <div className="appsegment">
        {/* <div className="app-cover"> */}
          <div className="download-texts">
            <img src="https://res.cloudinary.com/glovoapp/image/fetch/w_105,h_122,c_lpad,b_transparent,f_auto,q_auto:low,dpr_1.0/https://glovoapp.com/images/landing/download-app-logo.svg" alt="" />
            <h2>Download the app</h2>
            <p>Order anything and track it in real time with the Glovo app.</p>
            <div className="appdownload">
              <a href="#">
                <img src="playstore.svg" alt="" />
              </a>
              <a href="#">
                <img src="appstore.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="download-img">
            <img src="apps.avif" alt="" />
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Appsegment