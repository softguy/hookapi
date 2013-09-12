var debug=require('util').debug;

//similar to hookapi
//var hookapi=require('hookapi');

function ismatch(name, tomatch){
	var matched=false;
	if (name === tomatch){
		matched=true;
	} else if (tomatch==='*'){
		matched=true;
	} else if (Object.prototype.toString.call(tomatch) == '[object RegExp]') {
		if (tomatch.test(name)){
			matched=true;
		}
	}
	//debug('matched:'+name+','+funcname+'='+matched);
	return matched;
}

//funcname can be filename or 
exports.traceapi=function(modname, funcname){
	debug('traceapi('+modname+','+funcname+')');
	var mod=require(modname);
	for (var i in mod){		
		//debug(typeof mod[i]);
		if (typeof mod[i] === 'function') {
			if (ismatch(i, funcname)){
				debug('tracing '+modname+':'+i);
				
				(function(name){
					var oldf=mod[name];
					mod[name]=function(){
						debug('***'+modname+':'+name);
						
						return oldf.apply(this, arguments);
					}	
				})(i);
			}
		}
	}
	
}

