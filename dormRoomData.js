'use strict';

const url = require('url');
const qs = require('querystring');
const request = require('request');
const crypto = require('crypto');
 
 var sortNumber = function (a,b) {
    return a - b;
 }


module.exports = {

    getDorm: function(payload) {

        console.log("in dorm " + payload);

        switch (payload.toLowerCase()) 
        {
          
        case "111 brown st":
case "111 brown st.":
case "111 brown street" :
	return 1429213;

case "125-127 waterman street":
case "125 waterman street":
case "127 waterman street":
case "125 127 waterman street":
case "125-127 waterman st":
case "125 waterman st":
case "127 waterman st":
case "125 127 waterman st.":
case "125-127 waterman st.":
case "125 waterman st.":
case "127 waterman st.":
case "125 127 waterman st." :
	return 1429265;

case "315 thayer st":
case "315 thayer st.":
case "315 thayer street" :
	return 1429240;

case "andrews e":
case "andrews east" :
	return 4292350;

case "andrews west":
case "andrews w" :
	return 1429250;

 case "archibald-bronson":
 case "archibald":
 case "bronson":
 case "archibald bronson":
	return 1429212;

case "barbour apts":
case "barbour":
case "barbour apartments" :
	return 1429231;

case "buxton house":
case "buxton" :
	return 1429215;

case "caswell middle":
case "middle caswell hall" :
case "middle caswell":
	return 1429216;

case "caswell north":
case "north caswell" :
case "north caswell hall" :
	return 1429253;

case "champlin" :
case "champlin hall":
	return 1429217;
    
case "chapin house":
case "chapin" :
	return 1429218;

case "diman house rm028" :
case "diman rm028" :
case "diman 28" :
case "diman room 28":
	return 142927;

case "diman house rm106" :
case "diman rm106":
case "diman 106" :
case "diman house 106" :
	return 1429249;

case "everett-poland rme243" :
case "everett-poland 243":
case "everett poland 243" :
case "everett-poland room 243":
case "everett poland room 243" :
	return 1429251;

case "everett-poland-rme166" :
case "everett-poland 166" :
case "everett poland 166" :
case "everett-poland room 166" :
case "everett poland room 166" :
	return 1429267;

case "goddard house rm018" :
case "goddard house 18" :
case "goddard house room 18" :
case "goddard room 18" :
	return 142928;

case "goddard house rm130" :
case "goddard house 130" :
case "goddard house 130" :
case "goddard house room 130" :
case "goddard room 130" :
	return 142922;

case "grad center a":
case "grad a" :
	return 1429221;

case "grad center b":
case "grad b" :
	return 1429222;

case "grad center c":
case "grad c" :
	return 1429220;

case "grad center d":
case "grad d" :
	return 1429223;

case "harkness house rm023" :
case "harkness house 23" :
case "harkness 23" :
case "harkness room 23" :
case "harkness house room 23" :
	return 142929;

case "harkness house rm106" :
case "harkness house 106" :
case "harkness house room 106" :
case "harkness room 106" :
case "harkness 106" :
	return 1429245;

case "hedgeman" :
case "hegeman":
case "hedgeman a" :
case "hedgeman b" :
case "hedgeman c"  :
case "hedgeman d" :
case "hedgeman e" :
	return 1429224;

case "hope college" :
case "hope college" :
case "hope" :
	return 1429225;

case "jamison-mead":
case "jamison mead":
case "jamison":
case "mead":
	return 1429246;

case "king house":
case "king" :
	return 1429226;

case "littlefield hall" :
case "littlefield" :
	return 1429227;

case "machado house" :
case "machado" :
	return 1429237;

case "marcy" :
case "marcy house" :
	return 1429210;

case "metcalf hall" :
case "metcalf" :
	return 1429229;
    
case "miller hall":
case "miller"  :
	return 1429230;
    
case "minden hall":
case "minden"  :
	return 1429257;

case "morriss 211a":
case "morriss 211"  :
case "morriss room 211a":
case "morriss room 211"  :
	return 1429254;
    
case "morriss 311a" :
case "morriss 311" :
case "morriss room 311a" :
case "morriss room 311" :
	return 1429255;
    
case "morriss 411a" :
case "morriss 411" :
case "morriss room 411a" :
case "morriss room 411" :
	return 1429256;
    
case "new pembroke 2":
case "pembroke 2":
case "new pembroke 2 0":
case "pembroke 2 0"  :
case "new pembroke 2 room 0":
case "pembroke 2 room 0"  :
	return 1429232;

case "new  pembroke 3 0" :
case "pembroke 3 0" :
case "new  pembroke 3 room 0" :
case "pembroke 3 room 0" :
	return 1429233;

case "pembroke 3 20":
case "new pembroke 3 20" :
case "pembroke 3 room 20":
case "new pembroke 3 room 20" :
	return 1429252;

case "new pembroke 4":
case "pembroke 4" :
case "new pembroke 4 117":
case "pembroke 4 117" :
case "new pembroke 4 room 117":
case "pembroke 4 room 117" :
	return 1429234;

case "olney":
case "olney house" :
	return 1429211;

case "perkins" :
case "perkins hall" :
case "perk" :
	return 1429235;
    
case "plantations house":
case "plantations":
case "plantations house" :
	return 1429236;

case "sears house 23" :
case "sears 23" :
case "sears house room 23" :
case "sears room 23" :
	return 1429238;

case "sears house 106" :
case "sears 106" :
case "sears house room 106" :
case "sears room 106" :
	return 1429263;

case "slater hall" :
case "slater":
	return 1429239;

case "vgqa rm001" :
	return 1429247;
    
case "vgqa rm007" :
	return 1429288;
    
case "wayland house":
case "wayland" :
	return 1429241;

case "west house":
case "west"  :
	return 1429214;

case "woolley 101a":
case "woolley 101" :
case "woolley 1" :
case "woolley room 101a":
case "woolley room 101" :
	return 1429219;
    
case "woolley 201a" :
case "woolley 201":
case "woolley 2"  :
case "woolley room 201a" :
case "woolley room 201":
	return 1429258;
    
case "woolley 301" :
case "woolley 301a":
case "woolley 3"  :
case "woolley room 301" :
case "woolley room 301a":
	return 1429259;
    
case "woolley 401a":
case "woolley 401" :
case "woolley 4"  :
case "woolley room 401a":
case "woolley room 401":
	return 1429260;
    
case "yo10":
case "young o 10":
case "young orchard 10" :
	return 1429242;
    
case "young orchard 2":
case "yo2":
case "young o 2" :
	return 1429243;
    
case "yo4":
case "young o 4":
case "young orchard 4" :
	return 1429244;

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
       
       return "Washers " + laundryOpen.sort(sortNumber) + " are available. Dryers " + dryerOpen.sort(sortNumber) + " are available.";
        
    }
   
};
