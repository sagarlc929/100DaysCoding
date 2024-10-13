// Current Time API
//   Build an API that returns the current time in JSON format.

const http = require('http');
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday' , 'Thursday', 'Friday', 'Saturday'];
const server = http.createServer((req,res)=>{
  const now = new Date();
  const formattedDate = {
    status: 'true',
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    monthText: monthList[now.getMonth()],
    date: now.getDate(),
    day: dayList[now.getDay()],
    hours24: now.getHours(),
    hours12: {
      hour: now.getHours() > 12 ? now.getHours()%12 : now.getHours(),
      midDay: now.getHours() > 12 ?'pm' : 'am',
    },
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
    }

  res.writeHead(200, {'Content-type': 'application/json'});
  res.end(JSON.stringify(formattedDate));
  
});

server.listen(5000);
