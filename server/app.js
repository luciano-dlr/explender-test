const webpush = require('web-push');
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const vapidKeys = {
  publicKey: "BJDOJtzWNAaK801fAXKcMbL1-xp1QPDYRpSuzS-TPKvyCyxc2tLUoFNoQiG_umb4xw0YFd40VTdjjENpJPKl460",
  privateKey: "jLa8n8JQqoJxetv_Ht367H0D_1qoFh9kY12u101HAzA"
};

webpush.setVapidDetails(
  'mailto:delarubialuciano@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const handlerResponse = (res, data, code = 200) => {
  res.status(code).send(data);
};

const savePush = (req, res) => {
  const name = Math.floor(Date.now() / 1000);
  let tokenBrowser = req.body.token;
  let data = JSON.stringify(tokenBrowser, null, 2);
  fs.writeFile(`./tokens/token-${name}.json`, data, (err) => {
    if (err) throw err;
    handlerResponse(res, `save success`);
  });
};

//sendPush


app.post('/save-token', savePush);

const httpServer = app.listen(9000, () => {
  console.log('http server running at http://localhost:' + httpServer.address().port);
});
