'use strict';
// var fs = require('fs');
// var sampleJson = require('./sample');
// sampleJson = sampleJson.splice(0, 10);
// console.log(sampleJson.length);

exports.encode = function (json) {
    this.data = new Array();
    for (var i = 0; i < json.length; i++) {
        this.data.push(Object.values(json[i]))
    }
    return { schema: Object.keys(json[0]), data: this.data };
}

exports.decode = function (cjson) {
    // console.log(cjson);
    this.json = new Array();
    for (var i = 0; i < cjson.data.length; i++) {
        this.json[i] = new Object;
        for (var j = 0; j < cjson.data[i].length; j++) {
            this.json[i][cjson.schema[j]] = cjson.data[i][j];
        }
    }
    return this.json;
}


/*
var encodedJSON = exports.encode(sampleJson);

fs.writeFile("encoded.json", JSON.stringify(encodedJSON), function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The encoded file was saved!");

    var decodedJSON = exports.decode(require('./encoded'));
    fs.writeFile("decoded.json", JSON.stringify(decodedJSON), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The decoded file was saved!");
    });

});
*/

