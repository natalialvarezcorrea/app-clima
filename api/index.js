const express = require('express');
const app = express();
const morgan = require('morgan');
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors());


app.set('port', process.env.PORT || 5000)



app.get('/clima', async (req, res) => {
    const clima_url = `https://api.darksky.net/forecast/e9e4d05665813634af9d806d3851ad63/ 42.3601/-71.0589?units=si`;
    const clima_res = await fetch(clima_url);
    const clima_data = await clima_res.json();

    const aq_url = `https://api.openaq.org/v1/latest?coordinates= 42.3601,-71.0589`;
    const aq_res = await fetch(aq_url);
    const aq_data = await aq_res.json();

    const data = {
        clima: clima_data,
        air_quality: aq_data,

    };

    res.json(data);

    console.log(req.params);

});

app.use(require('./routes/clima'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
});