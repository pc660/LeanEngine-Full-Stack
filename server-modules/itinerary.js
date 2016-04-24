'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
var pdf = require('html-pdf');
var swig  = require('swig');
var itinerary = {};

itinerary.show = (req, res) => {
  var id = req.params.productId;
  tool.l("show");
};

itinerary.download = (req, res) => {
  //var id = req.body.id;
  var id = '56dd4bab5bbb50004cd1e071';
  tool.l("download");
  // Get product from id.
  var product = AV.Object.createWithoutData('Product', id);
  product.fetch().then(function(data) {
    var file = swig.renderFile('server-modules/static/itinerary.html', {
      saleprice: data.get("saleprice")
    });
    var options = { format: 'Letter' };
    pdf.create(file, options).toFile('server-modules/static/businesscard.pdf',
        function(err, res) {
        if (err) return console.log(err);
        tool.l(res); // { filename: '/app/businesscard.pdf' } 
    });

  }, function(error) {
    // TODO: Handle error.
  });
};

itinerary.getItinerary = (productId) => {
  
};

module.exports = itinerary;
