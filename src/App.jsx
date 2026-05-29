import './App.css'
import donuts from './assets/donuts.jpg';
import burger from './assets/burger.jpg';
import ice from './assets/icecream.jpg';
import potato from './assets/potato.jpg';
import fuchka from './assets/fuchka.jpg';
import pizza from './assets/pizza.jpg';
import hotdog from './assets/Hot dog.jpg';
import chicken from './assets/chicken.jpg';
import vegitable from './assets/vegitable.jpg';
import meat from './assets/meat.jpg';
import cheese from './assets/cheese.jpg';
import been from './assets/been.jpg';
import salmon from './assets/salmon.jpg';
import order from './assets/order.jpg';

function App() {

  return (
    <>
      <div className="container">

        <div className="left-side">

          <div className="sidebar">

            <div className="foodicon">foodslice</div>

            <div className="dashboard">Dashboard</div>

            <div className="food-order">Food Order</div>

            <div className="feedback">Feedback</div>

            <div className="message">Message</div>

            <div className="order-history">Order History</div>

            <div className="payment">Payment details</div>

            <div className="customization">Customization</div>

          </div>

          <div className="foodimg">
            <img src={order} alt="Burger" />
          </div>

          <div className="text">
            <b>How to order food?</b>
          </div>

        </div>

        <div className="content">

          <div className="header">

            <input type="text" placeholder="Search Food" />

            <button>Filter</button>

          </div>

          <div className="main">

            <div className="middle">

              <h3>Explore Categories</h3>

              <div className="explore">

                <div className="explore-1">
                  <div className="box">
                  <img src={donuts} alt="Donuts" />
                  <span>Donuts</span>
                </div>

                <div className="box">
                  <img src={burger} alt="Burger" />
                  <span>Burger</span>
                </div>

                <div className="box">
                  <img src={ice} alt="Ice" />
                  <span>Ice</span>
                </div>

                <div className="box">
                  <img src={potato} alt="Potato" />
                  <span>Potato</span>
                </div>

                <div className="box">
                  <img src={potato} alt="Potato" />
                  <span>Potato</span>
                </div>
                </div>

                <div className="explore-2">
                  <div className="box">
                  <img src={fuchka} alt="Fuchka" />
                  <span>Fuchka</span>
                </div>

                <div className="box">
                  <img src={pizza} alt="Pizza" />
                  <span>Pizza</span>
                </div>

                <div className="box">
                  <img src={hotdog} alt="Hot dog" />
                  <span>Hot dog</span>
                </div>

                <div className="box">
                  <img src={chicken} alt="Chicken" />
                  <span>Chicken</span>
                </div>

                <div className="box">
                  <img src={chicken} alt="Chicken" />
                  <span>Chicken</span>
                </div>
                </div>

              </div>

              <div className="popular-head">
                <h3>Popular</h3>
                <h3>Recent</h3>
              </div>

              <div className="menu">

                <div className="menu-1">
                  <div className="menubox">

                  <img src={vegitable} alt="Vegetable Burger" />

                  <p>Vegetable Burger</p>

                  <p>$25</p>

                  <div className="btns">
                    <button>Wishlist</button>
                    <button>Order Now</button>
                  </div>

                </div>

                <div className="menubox">

                  <img src={meat} alt="Meat Burger" />

                  <p>Meat Burger</p>

                  <p>$28</p>

                  <div className="btns">
                    <button>Wishlist</button>
                    <button>Order Now</button>
                  </div>

                </div>

                <div className="menubox">

                  <img src={cheese} alt="Cheese Burger" />

                  <p>Cheese Burger</p>

                  <p>$32</p>

                  <div className="btns">
                    <button>Wishlist</button>
                    <button>Order Now</button>
                  </div>

                </div>
                </div>

                <div className="menu-2">
                  <div className="menubox">

                  <img src={vegitable} alt="Vegetable Burger" />

                  <p>Vegetable Burger</p>

                  <p>$30</p>

                  <div className="btns">
                    <button>Wishlist</button>
                    <button>Order Now</button>
                  </div>

                </div>

                <div className="menubox">

                  <img src={been} alt="Been Burger" />

                  <p>Been Burger</p>

                  <p>$15</p>

                  <div className="btns">
                    <button>Wishlist</button>
                    <button>Order Now</button>
                  </div>

                </div>

                <div className="menubox">

                  <img src={salmon} alt="Wild Salmon Burger" />

                  <p>Wild Salmon Burger</p>

                  <p>$40</p>

                  <div className="btns">
                    <button>Wishlist</button>
                    <button>Order Now</button>
                  </div>

                </div>
                </div>

              </div>

            </div>

<div className="right-side">

  <h3 className="invoice-title">Invoice</h3>

  <div className="invoice-list">

    <div className="invoice-item">

      <img src={vegitable} alt="Vegetable Burger" />

      <div className="invoice-info">
        <p>Vegetable Burger</p>
        <span>$25</span>
      </div>

    </div>

    <div className="invoice-item">

      <img src={meat} alt="Meat Burger" />

      <div className="invoice-info">
        <p>Meat Burger</p>
        <span>$28</span>
      </div>

    </div>

    <div className="invoice-item">

      <img src={cheese} alt="Cheese Burger" />

      <div className="invoice-info">
        <p>Cheese Burger</p>
        <span>$32</span>
      </div>

    </div>

  </div>

  <div className="payment-summary">

    <h4>Payment Summary</h4>

    <div className="summary-line">
      <p>Sub Total</p>
      <span>$85</span>
    </div>

    <div className="summary-line">
      <p>Tax</p>
      <span>-$6</span>
    </div>

    <div className="summary-line total-payment">
      <p>Total Payment</p>
      <span>$79</span>
    </div>

    <div className="payment-method">

      <p>Payment Method</p>

      <div className="payment-images">

        <div className="pay-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="paypal"
          />
        </div>

        <div className="pay-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="visa"
          />
        </div>

        <div className="pay-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="mastercard"
          />
        </div>

      </div>

    </div>

  </div>

  <button className="place-order-btn">
    Place An Order Now
  </button>

</div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App