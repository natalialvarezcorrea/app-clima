const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const app = express();


app.post('/api', (req, res) => {
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json(data);
    res.send('hola');
});


app.get('/hi/:latlong', async (req, res) => {

    console.log(req.params);
    const latlong = req.params.latlong.split(',');
    const lat = latlon[0];
    const lon = latlong[1];

    const api_key = process.env.API_KEY;
    const clima_url = `https://api.darksky.net/forecast/e9e4d05665813634af9d806d3851ad63/ ${lat}/${long}?units=si`;
    const clima_res = await fetch(clima_url);
    const clima_data = await clima_res.json();

    const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${long}`;
    const aq_res = await fetch(aq_url);
    const aq_data = await aq_res.json();

    const data = {
        clima: clima_data,
        air_quality: aq_data,

    };

    res.json(data);



});



module.exports = router;