var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

let filename = '../data/_004'
var content = fs.readFileSync(filename + '.txt');


var $ = cheerio.load(content);

console.log($('.viewer').html().trim().match(/^[^a-z]*$/gm))
console.log($('.viewer').html().trim().match(/^([A-Z ':]+$)/gm))

// $('td').each(function(I, elem) {
//             $(elem).html()
//         }
