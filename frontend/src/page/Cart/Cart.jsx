import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>฿{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>฿{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null; // This return ensures no warnings for missing return statements
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>ยอดรวมจากตะกร้า</h2>
          <div>
            <div className="cart-total-details">
              <p>ราคา</p>
              <p>฿{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>ค่าส่ง</p>
              <p>฿{getTotalCartAmount() === 0 ? 0 : 10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>ราคารวมทั้งหมด</b>
              <b>฿{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>ดำเนินการชำระเงิน</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>คุณสามารถกรอกโค้ดของคุณได้ที่นี่</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>ยืนยัน</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
