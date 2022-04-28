import "./topbar.scss";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="wrapper">
      <div className="left">
          <a href="#intro" className="logo">
            eScooter
          </a> 
        <div className="homenav"> 
        <span>Home</span>
        </div>
        <div className="homenav">
          <span>Service</span>
          </div>
        <div className="homenav">
          <span>Contact Us</span>
          </div>
          
      </div>
      <div className="right">
         <div className="rightnav">
           <span>login</span>
         </div>

         <div className="rightbutton">
           <button>book scooter</button>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Topbar