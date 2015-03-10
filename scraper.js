var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get ('/scrape', function(req, res){
  url = 'http://docquery.fec.gov/cgi-bin/qind/';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var csv = {contributor: "", address: "", corporation: "", recipient: "", date: "", amount: "", filing: ""};
      }
    })
})

app.listen
