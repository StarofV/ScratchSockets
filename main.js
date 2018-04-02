const request = require("./exterbal_block_code/get_request.js");

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	const options = {
		host: 'somesite.com',
		port: 80,
		method: 'GET',
		headers: {
			'Content-Type ': 'application/json'
		}
	};
    
    ext.get_request = function() {
		rest.getJSON(options, function(statusCode, result) {
			// I could work with the result html/json here.  I could also just return it
			return ("onResult: (" + statusCode + ")" + JSON.stringify(result));
			res.statusCode = statusCode;
			res.send(result);
		});

	};
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['r', 'Get request %s', 'get_request'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Networking', descriptor, ext);
});
