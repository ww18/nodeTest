var p = new Promise(function(reslove, reject){
	console.log(1);
	reslove(function(){
		return 'fasdf';
	});
})
p.then(function(res){
	console.log(res);
})