// Basic Calculator API
// Create an API performs basic arithmetic operations (addition, subtraction, etc.).
const http = require('http');

const calReqSend = (res, operand1, operand2, operator)=>{
  res.writeHead(200, {'Content-type': 'application/json'});
  res.end(JSON.stringify({status:true, result:eval(`${operand1}${operator}${operand2}`)}));
}
const calReqSendErr = (res, message)=>{
  res.writeHead(400, {'Content-type': 'application/json'});
  res.end(JSON.stringify({status: false, message: message}))
}
http.createServer((req,res)=>{
  if(req.url === '/' && req.method ==='POST'){
    console.log(req.url);
    let body = '';
    req.on('data', chunk =>{
      body += chunk.toString();
    });
    req.on('end', ()=>{
      const reqData = JSON.parse(body);
      console.log(reqData);
      switch(reqData.operator){
        case '+':
        case 'addition':
          calReqSend(res,reqData.operand1, reqData.operand2, '+')
          break;
        case '-':
        case 'subtraction':
          calReqSend(res,reqData.operand1, reqData.operand2, '-')
        break;
        case '*':
        case 'multiplication':
          calReqSend(res, reqData.operand1, reqData.operand2, '*')
          break;
        case '/':
        case 'division':
          calReqSend(res, reqData.operand1, reqData.operand2, '/')
        case '%':
        case 'remainder':
          calReqSend(res, reqData.operand1, reqData.operand2, '%')
          break;
        case '^':
        case 'power':
          calReqSend(res, reqData.operand1, reqData.operand2, '**')
          break;
        default:
        calReqSendErr(res, 'Invalid operator.')
      }
    });
  } else if(req.url === '/' && req.method === 'GET'){
    res.writeHead(200, {'Content-type': 'application/json'});
    const responseObj = {
      status : true,
      operations: [['addition', '+'],['subtraction', '-'],['multiplication', '*'],['division', '/'], ['remainder', '%'], ['power', '^']]
    }
    res.end(JSON.stringify(responseObj));

  }
}).listen(2000);
