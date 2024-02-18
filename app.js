const express=require('express');
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');


const router=require("./src/routes/api");

const app=new express();

//Security Middleware Implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Request Rate Limiting

app.use(rateLimit());
const limiter=rateLimit({
    windowMs:1*60*1000,
    max:5
})
app.use(limiter);



app.use("/api/v1",router)

//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"});
});


module.exports=app;
