var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content': '再测试，嘻嘻，是不是太短了，原来是变成了mid了',
	'mid': 8837
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		"Host": "www.imooc.com",
		"Connection": "keep-alive",
		"Content-Length": postData.length,
		"Pragma": "no-cache",
		"Cache-Control": "no-cache",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Origin": "http://www.imooc.com",
		"X-Requested-With": "XMLHttpRequest",
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
		"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		"Referer": "http://www.imooc.com/video/8837",
		'Accept-Encoding': "gzip, deflate",
		"Accept-Language": "zh-CN,zh;q=0.8,en;q=0.6",
		"Cookie": "imooc_uuid=2e8972b9-f37f-4d2a-9b0d-8e4e7f40a0e9; imooc_isnew_ct=1484101029; loginstate=1; apsid=RkODEwMTQ3NGY2MDQ3M2RkMGY0ZjNlN2MwMTUzYzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTI4ODU0MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NzY4NDg2MDdAcXEuY29tAAAAAAAAAAAAAAAAAAAAADM2OGQxN2MyNjA5NGUwZTA1YjZkMmM0MzhlNjA0ZGQ53dL2WN3S9lg%3DOT; last_login_username=476848607%40qq.com; PHPSESSID=ammgt4t0u4nsku1g4mvrdpudm0; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1492061688,1492570830,1492592001,1492654435; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1492680982; imooc_isnew=2; cvde=58f81962444cb-129"
	}
}

var req = http.request(options, function(res){
	console.log('status:' + res.statusCode);
	console.log('headers:' + JSON.stringify(res.headers));
	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(chunk);
	})
	res.on('end', function(){
		console.log('评论完毕')
	})
})

req.on('error',function(e){
	console.log('Error: ' + e.message)
})
req.write(postData);
req.end();