import react, { useState, useEffect } from 'react'
import axios from 'axios'

function AxiosAPI(props) {

  const me = "Client - "; // 
  /* const math = <h2> PI: {Math.PI}</h2> // ตัวแปร = HTML */
  const [data, setData] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3000/api/data') //ยิง request ไปที่ URL API endpoint 
      .then(res => {
        setData(res.data);  // ใช้ state setData เซตค่าไว้ที่ state res.data จากนั้นก็เอาค่ามาแสดงที่ return ได้
      })
      .catch(err => {
        console.error('error fetching data : ', err);
      })
  }, [])


  return (
    <div className="AxiosAPI" style={{background:'blue', padding:'20px', color:'white', marginTop:'1rem'}}>

        <h2>{me}{props.name}</h2>
        {/*  <p>{math}</p> */}
        <h2>{data.message}</h2>

    </div>
  )
}

export default AxiosAPI