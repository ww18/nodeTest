var http = require('http');
var Promise = require('bluebird');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.learnchapter');
	var title = $('#page_header .path span').text();
	var number = parseInt($('.info_num i').eq(0).text().trim());
	// courseData = {
	// 	title: title,
	// 	number: number,
	// 	videos: [
	// 		chapterTitle: '',
	// 		videos: []
	// 	]
	// }
	var courseData = {
		title: title,
		number: number,
		videos: []
	};
	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos:[]
		};

		videos.each(function(item){
			var video = $(this).find('.studyvideo');
			var videoTitle = video.text();
			var id = video.attr('href').split('video/')[1];
			chapterData.videos.push({
				id: id,
				title: videoTitle
			})
		})
		courseData.videos.push()
	})
	return courseData;
}

function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle + '\n');
		item.videos.forEach(function(video){
			console.log(' [ ' + video.id + ' ]' + video.title + '\n');
		})
	})
}

function getPageAsync(url){
	return new Promise(function()resolve, reject){
		console.log('正在爬取' + url);
		http.get(url, function(res){
			var html = '';
			res.on('data', function(data){
				html += data;
			})
			res.on('end', function(){
				resolve(html);
			})
		}).on('error', function(e){
			reject(e);
			console.log('获取课程数据出错')
		})
	})
}
var fetchCourseArray = [];
videoIds.forEach(function()id{
	fetchCourseArray.push(getPageAsync(baseUrl + id));
})
Promise.all([fetchCourseArray])
.then(function(pages){
	var courseData = [];
	pages.forEach(function(){
		var course = filterChapters(html);
		courseData.push(course);
	})
})