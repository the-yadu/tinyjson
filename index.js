'use strict';

exports.encode = function (json) {
    this.data = new Array();
    for (var i = 0; i < json.length; i++) {
        this.data.push(Object.values(json[i]))
    }
    return { schema: Object.keys(json[0]), data: this.data };
}

exports.decode = function (cjson) {
    this.json = new Array();
    for (var i = 0; i < cjson.data.length; i++) {
        this.json[i] = new Object;
        for (var j = 0; j < cjson.data[i].length; j++) {
            this.json[i][cjson.schema[j]] = cjson.data[i][j];
        }
    }
    return this.json;
}