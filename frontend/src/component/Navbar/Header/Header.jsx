import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>สั่งอาหาร<br/>ที่คุณชื่นชอบได้ที่นี่</h2>
            <p>มีเมนูให้เลือกที่หลากหลายซึ่งมีอาหารแต่ละเมนูมีการปรุงรสที่อร่อยและใช้ส่วนผสมที่ดีที่สุด </p>
            <button>ดูเมนู</button>
        </div>
    </div>
  )
}

export default Header