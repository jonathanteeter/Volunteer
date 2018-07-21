const router = require("express").Router();
const request = require('request');
const cheerio = require("cheerio");
const async = require('async');
const axios = require('axios');
const db = require("../../models");

router.get("/", function (req, res) {
    async.parallel([
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/handyperson", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/rake-up", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/healthy-aging", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/mission", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/snow-buddies", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/meals-on-wheels", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/meals-on-wheels-2", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/adult-group-and-corporate-volunteer-program", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/yard-angels", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/caring-companion-volunteer", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/handyperson", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/market-meals", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/grocery-program-volunteer", handleRequest(callback))
        },
        (callback) => {
            request("https://www.voacolorado.org/volunteer-opportunities/early-childhood-education-center-general-assistant", handleRequest(callback))
        }

    ], (err, results) => {
        res.json(results);

    });
    
    //-------------------------Trying Waterfall Method (not able to work) ------------------------
    // async.waterfall([
    //     (callback) => {
    //         return (error, reponse, html) => {
    //             request("https://www.voacolorado.org/volunteer-opportunities?opportunity_type=all&audience_type=all&time_required=all&city=all", function (error, response, html) {
    //                 var $ = cheerio.load(html);
    //                 results = [];
    //                 $("h2.list--generic__hdr").each(function (i, element) {
    //                     var link = "https://voacolorado.org" + $(element).children().attr("href");
    //                     results.push({link});
    //                     // results = link;
    //                     // console.log(link);
    //                     // callback(null, link);
    //                 });
    //                 console.log("results: ", results);
    //                 // callback(null, results);
    //             })
    //         }
    //     },
    //     (results, callback) => {
    //         return (error, reponse, html) => {
    //             request("results"), (error, response, html) => {
    //                 var $ = cheerio.load(html);
    //                 const info = {
    //                     organization: $('h1.housing-show__header__hdr').text(),
    //                     coordinator: $('.details__item').eq(1).find('p').text(),
    //                     email: $('ul.housing-show__buttons').find("a").attr("href"),
    //                     phone: $('ul.housing-show__buttons').children().last().text(),
    //                     location: $('.details__item').first().find('p').text(),
    //                     description: $('div.text').find('p').first(0).text(),
    //                     link: "https://voacolorado.org" + $('div.nav--sibling').find('li').find('a').attr('href')
    //                 };
    //                 console.log("info: ", info);
    //                 callback(null, info);
    //             };
    //         }
    //     }
    // ], (error, done) => {
    //     res.json(done);
    // });
    
    // -------------------------------------------------------------------
});

function handleRequest(callback) {
    return (error, reponse, html) => {
        var $ = cheerio.load(html);

        //scrape website
        const info = {
            organization: $('h1.housing-show__header__hdr').text(),
            coordinator: $('.details__item').eq(1).find('p').text(),
            email: $('ul.housing-show__buttons').find("a").attr("href"),
            phone: $('ul.housing-show__buttons').children().last().text(),
            location: $('.details__item').first().find('p').text(),
            description: $('div.text').find('p').first(0).text(),
            link: "https://voacolorado.org" + $('div.nav--sibling').find('li').find('a').attr('href')
        };
        console.log("info: ", info);
        callback(null, info);

        db.Info.create(info)
          .then(function(dbinfo) {
              console.log(dbinfo);
          })
          .catch(function(err) {
              return res.json(error);
          });
    };
};

router.post("/", function(req, res) {

})

module.exports = router;