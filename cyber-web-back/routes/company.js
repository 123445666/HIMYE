var express = require('express');
var router = express.Router();
const { exec } = require('child_process');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.post('/', jsonParser, async function (req, res) {
  const { exec } = require('child_process');

  var domain = req.body.domain;
  var name = req.body.name;

  var data = "";
  if (domain) data = domain;
  if (name) data = name;

  let yourscript = exec(`python3 /home/vietvb/Keyce/Code/linkedin-email-extractor/lee.py "${data}" "" 1`,
    (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });
  res.send(JSON.stringify(req.body));
});

module.exports = router;
