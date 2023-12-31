import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        />
        <div className="home__row">
          <Product 
          id="12321341"
          title="Apple iPad Air (5th Generation): with M1 chip, 10.9-inch Liquid Retina Display, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera."
          price={643.49}
          rating={7}
          image="https://m.media-amazon.com/images/I/71bDp9XRdKL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product 
          id="49538092"
          title="Apple 2021 iMac All in one Desktop Computer with M1 chip: 8-core CPU, 7-core GPU, 24-inch Retina Display, 8GB RAM, 256GB SSD Storage."
          price={345.72}
          rating={5}
          image="https://m.media-amazon.com/images/I/61p-ADlugUS.__AC_SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
        <Product 
          id="490385"
          title="9 Pieces of Matisse's interesting Black Cat Posters Wall Art Print Monet Eclectic Aesthetics Retro Wall Decoration  Flower Printing Colorful!"
          price={279.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/61LQPipVb9L._AC_UY218_.jpg"
          />

          <Product 
          id="49538096"
          title="AKRacing Masters Series Premium Gaming Chair with High Backrest, Recliner, Swivel, Tilt, Rocker and Seat Height Adjustment Mechanisms with 5/10 Warrantyf"
          price={499.99}
          rating={8}
          image="https://m.media-amazon.com/images/I/61cgwi0sdVL._AC_SY879_.jpg"
          />

          <Product 
          id="49538091"
          title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
          price={99.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/51uzgPygWPL._AC_SX679_.jpg"
          />

        </div>

        <div className="home__row">
          <Product 
          id="49538094"
          title="Rolex Men's Promaster Air Eco-Drive Pilot Chronograph Watch, Atomic Timekeeping Technology, 12/24 Hour Time, Power Reserve Indicator, Luminous Hands and Markers, Sapphire Crystal/"
          price={730.64}
          rating={5}
          image="data:image/jpeg;base64,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"
          />
          
        </div>
        <div className="home__row">
          <Product 
          id="49538095"
          title="Nintendo Switch with Gray Joy‑Con"
          price={59.99}
          rating={6}
          image="https://m.media-amazon.com/images/I/51Gz7IimgoL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />

          <Product 
          id="49538099"
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
          price={30}
          rating={5}
          image="https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY445_SX342_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
