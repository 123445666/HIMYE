var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var companyService = require('../services/service.company')
var EmployeeModel = require('../models/employee.model.js');
const { route } = require('express/lib/application');

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

router.get('/checkEmploy/:id', async function (req, res, next) {

  const { exec } = require('child_process');

  var ObjectID = require('mongodb').ObjectID;

  var email = "";
  var companyName = "";

  await EmployeeModel.findById(req.params.id).select('-__v')
    .then(async (employ) => {
      if (employ) {
        email = employ.email_pro;
        companyName = employ.company;

        var emailReplace = email.replace('@', '_');
        emailReplace = emailReplace.replace(/\./g, '_');

        let yourscriptholele = exec(`/home/vietvb/Keyce/Code/cyber_web_local2/cyber-web-front/holehe.sh "${email}" "${emailReplace}" "${companyName}"`,
          (error, stdout, stderr) => {
            if (error !== null) {
              console.log(`exec error: ${error}`);
            }
          });

        const filter = { "_id": employ._id };

        const update = { web_account: emailReplace + "_" + companyName + ".txt" };

        await EmployeeModel.findOneAndUpdate(filter, update);

        res.send(JSON.stringify(companyName));
      }
    }).catch(err => {
      res.send(JSON.stringify(err));
    });
})

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

router.delete('/:company', async function (req, res) {
  await EmployeeModel.deleteMany({ company: req.params.company });
  res.send(JSON.stringify(req.params.company));
})

module.exports = router;
