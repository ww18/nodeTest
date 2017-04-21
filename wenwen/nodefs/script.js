/**
 * Created by oak-016 on 17/1/10.
 */
const fs = require('fs');

//fs.mkdir('temp', function(){
//    console.log('successfully create /temp');
//})
//fs.mkdir('temp/hello.html', function(){
//    console.log('successfully create /temp');
//})
//fs.rmdir('temp', function(err){
//    if (err) throw err;
//    console.log('successfully deleted /temp/hello');
//});
fs.watch('watch/style.css', function(change, fileName){
    console.log('watch style.css');
    console.log('event type is: ${eventType}');
    if (fileName){
        console.log('filename provided: ' + fileName);
        fs.stat(fileName, function(err,stats){
            console.log(stats)

        })
    } else {
        console.log('filename not provided');
    }
})


