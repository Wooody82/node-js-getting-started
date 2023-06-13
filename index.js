const express = require('express')
const path = require('path')
const axios = require('axios');

const PORT = process.env.PORT || 5001


const makeRequestWithoutPool = async () => {
    const start = process.hrtime();
    const response = await axios.get('https://api.kucoin.com/api/v1/market/allTickers');
    const timestamp = response.data.data;
    const end = process.hrtime(start);
    const durationInMs = (end[0] * 1000 + end[1] / 1000000).toFixed(2);
    console.log(`API without Pool Took ${durationInMs} milliseconds.`);
    // console.log('Timestamp:', timestamp);
};

console.log('Hello!!!');
makeRequestWithoutPool();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


 
