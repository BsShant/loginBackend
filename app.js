const express = require('express');
const dotenv = require('dotenv');
const {conn,db} = require('./utils/db');
const { urlencoded } = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const path = require('path');


//importing routes 
const authRoutes = require('./routes/authRoutes');
const ourTeamRoutes = require('./routes/ourTeamRoutes');
const ourCompanyRoutes = require('./routes/ourCompanyRoutes')
const careerRoutes = require('./routes/careerRoutes')
const contactUsRoutes = require('./routes/contactUsRoutes')
const jobRequestUsRoutes = require('./routes/jobRequestsRoutes')


 



//set dotenv path
dotenv.config({path:'./utils/.env'})

//initialize app
const app = express();

//connect database
conn();


//middlewares
app.use(urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
//enable cors
app.use(cors());

// //set static folder
var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 




//setting up routes
app.use('/auth', authRoutes);
app.use('/ourTeam', ourTeamRoutes);
app.use('/ourCompany', ourCompanyRoutes);
app.use('/careers', careerRoutes);
app.use('/contactUs', contactUsRoutes);
app.use('/jobRequest', jobRequestUsRoutes);







app.set("port", process.env.PORT || 5000)








//listen app
app.listen(process.env.PORT || 5000,()=>{
    console.log('App is listening in port 5000')
})