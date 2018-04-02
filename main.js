const request = require("./get_request.js");

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_request = function() {
		var options = {
			host: 'somesite.com',
			port: 80,
			method: 'GET',
			headers: {
				'Content-Type ': 'application/json'
			}
	};
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['r', 'Get request url', 'get_request'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Networking', descriptor, ext);
})({});
