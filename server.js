const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/calculate', (req, res) => {
    const gemPriceRate = parseFloat(req.body.gemPriceRate);
    const gemsCustomerGetting = parseFloat(req.body.gemsCustomerGetting);
    const customerPays = parseFloat(req.body.customerPays);

    const result = {
        gemPriceRate,
        gemsCustomerGetting,
        customerPays,
    };

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});