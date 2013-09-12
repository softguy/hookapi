//process.argv is an array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

if (process.argv.length <=2){
	console.log('usage: xxx [require1.js] ... [requiren.js]');
	return;
}

for ( var i=2; i<process.argv.length; i++){
	var f=process.argv[i];
	require(f);
}
