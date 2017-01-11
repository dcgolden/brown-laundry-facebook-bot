'use strict';

const url = require('url');
const qs = require('querystring');
const request = require('request');
const crypto = require('crypto');

module.exports = {

    getDorm: function(payload) {

        console.log("in dorm " + payload);

        switch (payload.toLowerCase()) {
            case "perkins":
            case "perk":
            case "perkins hall":
                return 1429235;
                
            case "315 thayer":
            case "315 thayer st":
            case "315 thayer street":
              return 1429240;
              
            case "minden":
            case "minden hall":
              return 1429257;
              
            case "olney":
            case "olney house":
              return 1429211;

            case "archibald-bronson":
            case "archibald":
            case "bronson":
            case "archibald bronson":
                return 1429212;

            default:
                return 0;
        }

    },

    getLaundryInfo: function(dormId, cb) {
        if (!cb) cb = Function.prototype;

        request({
            method: 'GET',
            uri: `https://api.students.brown.edu/laundry/rooms/${dormId}/machines?client_id=${process.env.BROWN_API}&get_status=true`,
            json: true
        }, (err, res, body) => {
            if (err) return cb(err)
            if (body.error) return cb(body.error)
            cb(null, body)
        })

    },

    parseLaundry: function(laundryObject) {
        console.log("preParse " + JSON.stringify(laundryObject));
        console.log("type " + typeof(laundryObject));
        var information = JSON.parse((JSON.stringify(laundryObject)));
        var laundryOpen = [];
        var dryerOpen = [];

        for (var i in information.results) {
            if ((information.results[i].avail === true))  
              if (information.results[i].type == "washFL")
                laundryOpen.push(information.results[i].id);
              if( (information.results[i].type == "dblDry") || (information.results[i].type == "dry"))
                dryerOpen.push(information.results[i].id);
        }
       
       return "Washers " + laundryOpen.sort() + " are available. Dryers " + dryerOpen.sort() + " are available.";
        
    }
};