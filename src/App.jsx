import './App.css'
import { LuAArrowDown } from "react-icons/lu";
import a from '../public/a.jpg'

function App() {
  

  return (
    <>
      <div className="container">
        
        <div className="left-side">
        <div className="sidebar">
          <div className="foodicon"></div>
            <div className="dashboard">Dashboard</div>
            <div className="food-order">Food Order</div>
            <div className="feedback">Feedback</div>
            <div className="message">Message</div>
            <div className="order-history">Order History</div>
            <div className="payment">Payment</div>
            <div className="customization">Customization</div>
      </div>


          <div className="foodimg">
            
          </div>
          <div className="text"><b>How to order food?</b></div>
        </div>
      
        <div className="content">
          <div className="header">
            <input type="text" placeholder="Search Food" />
            <button>Filter</button>

          </div>
          <div className="main">
            <div className="middle">
              <div className="explore">Explore Categories
                <div className="menu">Popular  Recent</div>
              </div>
            </div>
              <div className="right-side"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
