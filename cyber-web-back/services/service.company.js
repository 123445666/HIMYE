run_script = require('../Utils/process_utils')
class CompanyService
{
  static ExportEmployFromTheName(data)
	{
    console.log(data);
    command = "python3";
    args = "/home/vietvb/Keyce/Code/linkedin-email-extractor/lee.py \"neovacom\" 1";
    callback = "";
    run_script(command, args, callback);
  }
}
