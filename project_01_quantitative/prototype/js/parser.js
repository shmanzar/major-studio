var cheerio = require('cheerio');
var fs = require('fs');

let filename = '../data/_004'
var content = fs.readFileSync(filename + '.txt');


var $ = cheerio.load(content);
let test = $('.viewer').text().trim()
console.log(test)



// var test_obj = {
//     state: '',
//     city: '',
//     locations: {
//         type: '',
//         quant: ''
//     }
// }

// var states_list = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING']



// console.log($('.viewer').html().trim())
// console.log($('.viewer').html().trim().match(/^[^a-z]*$/gm))
// console.log($('.viewer').html().trim().match(/^([A-Z ':]+$)/gm))
// console.log($('.viewer').html().trim().match(/<a.*?<\/a>|(\w[.|a-z]+ | \w[\d+|a-z]+).+/gm))


// console.log($('.viewer').html().trim().match(/<a.*?<\/a>|(\w[.|a-z]+ | \w[\d+|a-z]+).+/gm).splice(22))




// $('.viewer').each(function(I, elem) {
//             $(elem).html()
//         }
