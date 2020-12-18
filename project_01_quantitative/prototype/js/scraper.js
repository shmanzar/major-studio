var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');



var link_array = [];

for (let i = 1; i <= 27; i++) {
    if (i < 10) {
        link_array.push('https://transcription.si.edu/view/7955/NMAAHC-2015_97_42_00' + i);

    }
    if (i >= 10) {
        link_array.push('https://transcription.si.edu/view/7955/NMAAHC-2015_97_42_0' + i);

    }
}

function getData(link) {
    request(link, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response, body);
            var $ = cheerio.load(body);
            let body_text = $('.viewer').text().trim();
            let filename = link.match(/_\d{3}$/g);
            fs.writeFileSync('../data/' + filename + '_text' + '.txt', body_text);
            console.log("File downloaded!");
        }
        else { console.log("Request failed!") }
    });
}

link_array.forEach(link => getData(link));
