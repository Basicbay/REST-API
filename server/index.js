const express = require('express'); 
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data',(req, res) =>{   //backend สร้าง API end point
    const data = {
        message: "Server - API from the server !" // สมมุติเราต้องการข้อมูลเป็น message จาก server
    }
    res.json(data);
})

app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
})

