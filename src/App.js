import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import Partners from './Components/partners/Partners'
import Restaurant from './Components/restaurant/Restaurant'
import Countries from './Components/countries/Countries'
import Appsegment from './Components/app/Appsegment'
import Mission from './Components/mission/Mission'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Partners/>
      <Restaurant/>
      <Countries/>
      <Appsegment/>
      <Mission/>
      <Footer/>
    </div>
  )
}

export default App