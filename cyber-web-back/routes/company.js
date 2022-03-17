var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var companyService = require('../services/service.company')
var EmployeeModel = require('../models/employee.model.js');

var jsonParser = bodyParser.json();

router.post('/', jsonParser, async function (req, res) {

  var domain = req.body.domain;
  var name = req.body.name;

  var data = "";
  if (domain) data = domain;
  if (name) data = name;
  const { exec } = require('child_process');

  let yourscript = exec(`python3 /home/vietvb/Keyce/Code/linkedin-email-extractor/lee.py "${data}" "${domain}" "" 1`,
  (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });

  // companyService.ExportEmployFromTheName(data);

  res.send(JSON.stringify(req.body));
});

router.post('/getemployees', jsonParser, async function (req, res) {
  var name = "neovacom";
  var domain = "";
  if (req.body.domain)
    domain = req.body.domain;
  if (req.body.name)
    name = req.body.name;


  EmployeeModel.find(
    { $or: [{ company: name }, { company: domain }] },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(JSON.stringify(result));
      }
    })

});

module.exports = router;
