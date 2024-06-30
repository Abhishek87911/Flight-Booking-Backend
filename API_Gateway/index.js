const express = require('express');
const morgan =  require('morgan');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 3005;

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000 ,// 2 minutes
    max: 5, // Limit each IP to 100 requests per 'window' (here per 2 minutes)

})

app.use(morgan('combined'));
app.use(limiter);
app.use('/bookingservice', async (req,res,next) => {

   try {
     
    const response = await axios.get('http://localhost:3001/api/v1/isauthenticated', {
        headers: {
            'x-access-token': req.headers['x-access-token']
        }
    });

       console.log(response.data);
       if(response.data.success){
        next();
       }
       else {
        return res.status(401).json({
            message: 'Unauthorised user'
        })
       }
   } catch (error) {
       return res.status(401).json({
        message: 'Unauthorised user'
       })
   }
    
 
})
app.use('/bookingservice', createProxyMiddleware({target: 'http://localhost:3002/', changeOrigin: true}));

app.get('/home', (req,res) => {
    return res.json({
        messahge: 'OK'
    })
});


app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);
});


