var express = require('express');
var router = express.Router();
var CompanyService = require('../services/service.company')
const { exec } = require('child_process');

router.get('/', async function(req, res, next) {
  const { exec } = require('child_process');
  var yourscript = exec('python3 /home/vietvb/Keyce/Code/linkedin-email-extractor/lee.py "neovacom" 1',
          (error, stdout, stderr) => {
              console.log(stdout);
              console.log(stderr);
              if (error !== null) {
                  console.log(`exec error: ${error}`);
              }
          });
  res.send('respond with a resource');
});

module.exports = router;
