import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = food_list
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({
        ...item,
        quantity: cartItems[item._id],
      }));

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 10),
    };

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("เกิดข้อผิดพลาด");
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาด");
    }
  };

  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0) {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">ข้อมูลการจัดส่ง</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="ชื่อจริง"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="นามสกุล"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="อีเมล"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="ถนน"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="เมือง"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="จังหวัด"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="รหัสไปรษณีย์"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="ประเทศ"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="เบอร์โทรศัพท์"
        />
      </div>
      <div className="place-order-right">
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
              <b>
                ฿{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}
              </b>
            </div>
          </div>
          <button type="submit">ชำระเงิน</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;