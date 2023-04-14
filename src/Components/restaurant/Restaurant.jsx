import React from 'react'
import "./style.css"

function Restaurant() {
    return (
        <div className='why-glovo'>
            <h2>Anything delivered</h2>
            <div className="why-us">
                <div className="reason">
                    <img src="topRestaurants.svg" alt="Restaurant" />
                    <h3>Your city's top restaurants</h3>
                    <div className="text-marked">
                        With a great variety of restaurants you can order your favourite food or <mark><span  className="highlighted"> explore new restaurants nearby!</span></mark>
                    </div>
                </div>                
                <div className="reason">
                    <img src="Fast-delivery.svg" alt="Fast delivery" />
                    <h3>Fast delivery</h3>
                    <div className="text-marked">
                        We pride ourselves on speed. Order or send anything in your city and <span className="highlighted">we'll pick it up and deliver it in minutes.</span>
                    </div>
                </div>                
                <div className="reason">
                    <img src="groceries.svg" alt="Restaurant" />
                    <h3>Groceries delivery & more</h3>
                    <div className="text-marked">
                        Find anything you need! From <span className="highlighted">supermarkets to shops, pharmacies to florists</span>
                    </div>
                </div>                
            </div>
            <div className="btnpoint">
                <button type="submit" className='btn'>Explore stores around you</button>
            </div>
        </div>
    )
}


export default Restaurant