const rp = require('request-promise')

module.exports.main = function main (event, context, callback) {
    let account = process.env['spotAccount']
    let token = process.env['spotToken']
    let environment = process.env['spotEnvironment']
    let aliasId = process.env['spotAlias']

    let options = {
		uri:'https://api.spotinst.io/functions/alias/'+ aliasId,
		method:'DELETE' ,
		qs:{accountId:account},
		headers:{
			"Content-Type": "application/json",
			"Authorization": "Bearer " + token},
		json:true
	}

    rp(options).then((res)=>{
    	console.log(res['response'])
    	callback(null, {statusCode: 200, body: "Success"});
    }).catch((err)=>{
    	console.log(err)
    	callback(null, {statusCode: 400, body: "Error Check Logs"});
    })
};
