const  app=require("./app");
const dotenv=require('dotenv');
dotenv.config(({path:'./config.env'}))

const port=process.env.RUNNUNG_PORT

app.listen(port,function (){
    console.log("Server run success at port:"+port);
});