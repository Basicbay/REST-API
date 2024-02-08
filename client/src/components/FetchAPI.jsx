import react, { useState, useEffect } from 'react'

function FetchAPI(props) {

  const me = 'Cliect - ';

  const [data, setdata] = useState(null)

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // ยิง request ไปที่ URL API endpoint และเก็บข้อมูลไว้ที่ตัวแปร res
    const convertData = await res.json(); //แปลงข้อมูล JSON เป็น Object
    setdata(convertData); // update ข้อมูลที่เราแปลง JSON เป็น Onject ไปไว้ที่ state (data)
    console.log(convertData);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
    <div>
      <p>
        {data[0].id}
        {data[0].title}
      </p>
    </div>
   {/*  
     <div style={{background:'green', color:'white', padding:'20px', marginTop:'1rem'}}>
    <h2>{me}{props.name}</h2>
      {data && data.map(val => (
        <div className='info' key={val.id}>
          <h2>{val.title}</h2>
          <p>{val.body}</p>
          </div>
      ))}
    </div> */}
    </>
  )
}

export default FetchAPI