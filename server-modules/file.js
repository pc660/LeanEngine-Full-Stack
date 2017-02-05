'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
const config = require('./config');
let fileApi = {};

var LIMIT = 50;

fileApi.upload = (req, res) => {
    tool.l("file.uploadfile");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "file.uploadfile");
    log.set("user", req.user);
    log.save();
    var file = req.files.file;
    if (!file) {
        tool.e("find no files when file.uploadfile");
        res.send();
    }

    var path = file.path;
    var fsiz = file.size;
    var buffer = new Buffer(fsiz);
    var filename = req.body.filename;
    if (!filename) {
        filename = file.originalFilename;
    }
    fs.readFile(path, function (err, data) {
        var avFile = new AV.File(req.body.filename, data);
        avFile.save().then(function(obj) {
            res.send();
        }, function(err) {
        });
    });
};
module.exports = fileApi;
