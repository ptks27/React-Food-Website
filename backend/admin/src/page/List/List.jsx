import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("เกิดข้อผิดพลาด")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("เกิดข้อผิดพลาด")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
        <p>เมนูทั้งหมด</p>
        <div className="list-table">
          <div className="list-table-format">
            <b>รูปภาพ</b>
            <b>ชื่อเมนู</b>
            <b>ประเภทอาหาร</b>
            <b>ราคา</b>
            <b>ลบเมนู</b>
          </div>
          {list.map((item,index)=>{
             return (
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>฿{item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
                

              </div>
             ) 
          })}
        </div>
    </div>
  )
}

export default List