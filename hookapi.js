/*
//hookobj
	'mod1':{
		_orig_: original required object
		func1:{
			oldf: oldfunc,
			newf: newfunc
		},
		func2:{ oldfunc,
			oldf: oldfunc,
			newf: newfunc
		}
	}

	...
}
*/
var hooks={};

var _oldrequire=require;

var require=function(f){
	console.log('require:'+f);

	var oldobj= _oldrequire(f);
	if (f=='http8'){
	//	console.log('*** HOOKING :'+f);
	}
	//console.log(oldobj);
	return oldobj;		
}

//returns the hooked obj
exports.hook=function(modname,func,newfunc){
	//## find hook obj, create if nonexist
	if (!hooks[modname]){
		hooks[modname]={};
	}
	var hook1=hooks[modname];

	//## get the original module, save it for future reference
	var _orig_=_oldrequire(modname);
	hook1._orig_=_orig_;

	//## replace the function in the module
	if (!hook1[func]){
		hook1[func]={};
	}	
	hook1[func].oldf=_orig_[func];
	_orig_[func]=newfunc;
	hook1[func].newf=newfunc;
	return hook1;
}

//return the hooked object
exports.unhook=function(modname,func,newfunc){
	var hook1;
	if (hooks[modname]){
		hook1=hooks[modname];
		
		if (hook1[func]){
			delete hook1[func];
		}	
	}
	return hook1;
}

exports.gethook=function(modname){
	return hooks[modname];
}

