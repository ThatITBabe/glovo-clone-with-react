import React from 'react'
import "./countries.css"

const Countries = () => {
  return (
    <div>
       <section>
            <div class="custom-shape-divider-bottom-1681317966">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> 
        </section>
        <div className="countries">
            <div className="countries-text">
                <img src="countries.svg" alt="flag" />
                <h2>Countries where we deliver</h2>
                <div className="countries-lists">
                    <a className="countries-link" href="#">Spain</a>
                    <a className="countries-link" href="#">Italy</a>
                    <a className="countries-link" href="#">Ukraine</a>
                    <a className="countries-link" href="#">Romania</a>
                    <a className="countries-link" href="#">Georgia</a>
                    <a className="countries-link" href="#">Portugal</a>
                    <a className="countries-link" href="#">Poland</a>
                    <a className="countries-link" href="#">Morocco</a>
                    <a className="countries-link" href="#">Kazakhtan</a>
                    <a className="countries-link" href="#">Croatia</a>
                    <a className="countries-link" href="#">Kenya</a>
                    <a className="countries-link" href="#">Cote D'Ivoire</a>
                    <a className="countries-link" href="#">Serbia</a>
                    <a className="countries-link" href="#">Moldova</a>
                    <a className="countries-link" href="#">Uganda</a>
                    <a className="countries-link" href="#">Kyrgyzstan</a>
                    <a className="countries-link" href="#">Bosnia and Herzegovina</a>
                    <a className="countries-link" href="#">Bulgaria</a>
                    <a className="countries-link" href="#">Ghana</a>
                    <a className="countries-link" href="#">Montenegro</a>
                    <a className="countries-link" href="#">Slovenia</a>
                    <a className="countries-link" href="#">Nigeria</a>
                    <a className="countries-link" href="#">Armenia</a>
                    <a className="countries-link" href="#">Andorra</a>
                    <a className="countries-link" href="#">Tunisia</a>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Countries