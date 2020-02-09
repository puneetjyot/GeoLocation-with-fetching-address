const express=require('express')
const app=express
var http=require('http'),
fs=require('fs');
fs.readFile('./q1_html.html',function(error,html){
    if(error)
    {
        throw error;
    }
    http.createServer(function(request,response){
        response.writeHeader(200,{"Content-Type":"text/html"});
        response.write(html)
        response.end();
    }).listen(8080);
})
console.log('Running on port 8080')

