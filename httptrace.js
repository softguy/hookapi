var hookapi=require('hookapi');

hookapi.hook('http', 'request', 
		function(options, callback){
			console.log('*** HOOKED http.request =>'+options);			
			//options.hosts="localhost";

			return hookapi.gethook('http')['request'].oldf.apply(this, arguments);		
			//var oldmod=hookapi.gethook('http')._orig_;
			//var oldf=hookapi.gethook('http')['request'].oldf;
			//console.log(oldf);
			//return oldf(options,callback);			
		}
);

