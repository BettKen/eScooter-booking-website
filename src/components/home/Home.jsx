import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div className="left">
      <div className="wrapper">
        <h2>Fair price ride</h2>
        <h1>Rent our <span>eScooter</span></h1>
        <p>Search and Compare the World's Leading eScooter Rental Suppliers Today at fair Prices. No Credit Card Fees. We Speak Your Language. Destinations: Kenya, Uganda, Ethopia, Tanzania .</p>
            <div className="button">
        <button class="btn success">Location</button>
        <button class="btn info">Pickup Date</button>
   <       button class="btn warning">Kilometers</button>
         <button class="btn danger">Book Scooter</button>
      </div>
      </div>
      </div>
      <div className="right">
        
        <div className="imagecontainer">
          
          <img src="https://cdn.shopify.com/s/files/1/0030/8183/0512/products/Apollo_Air_Pro_8_630x.png?v=1645189345" alt="" />
        <h1>Starting from</h1>
        </div>
      </div>
    </div>
  )
}

export default Home