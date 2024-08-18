import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Kenilworth อาหารอร่อยมีเมนูให้ทุกท่านได้เลือกรับประทานที่หลากหลาย แต่ละเมนูใช้วัตุดิอย่างดีสดใหม่ทุกวันรับรองว่าไม่ผิดหวังอย่างแน่นอน ขอบคุณทุกท่านที่มาใข้บริการ </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+66-091-999-9999</li>
                <li>Contact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 ⓒ Kenilworth.com All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
