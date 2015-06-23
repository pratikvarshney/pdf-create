
var PDFDocument = require('pdfkit');
var fs = require('fs');
var doc = new PDFDocument();

var stream = doc.pipe(fs.createWriteStream('output.pdf'));
 
doc.fontSize(40).text('Pratik', {'align':'center'});
 
doc.addPage().fontSize(25).text('Varshney', 100, 100);

doc.end();

stream.on('finish', function() {
  console.log('Done');
});