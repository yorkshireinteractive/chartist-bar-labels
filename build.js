var fs = require('fs');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');

console.log('Building site');

Metalsmith(__dirname)
  // Removes the header used for the website layouts and fixes image sources
  .use(function (files, metalsmith, done) {
    fs.readFile('./src/README.md', 'utf8', function (err,data) {
      if (err) return console.log(err);
      var result = data.replace(/---([\S\s]+?)---([\s]+)/, '');
      result = result.replace(/src="images\//g, 'src="src/images\/');
      fs.writeFile('./README.md', result, 'utf8', function (err) {
        if (err) return console.log(err);
        done();
      });
    });
  })

  // Processes markdown and converts them to HTML
  .use(markdown({ gfm: true }))

  // Layouts lets you specify a template file to wrap up your content files in
  // and lets you use things like partials.
  .use(layouts('handlebars'))

  // Renames the README.html to index.html so it works on github pages
  .use(function (files, metalsmith, done) {
    files['index.html'] = files['README.html'];
    delete files['README.html'];
    done();
  })

  // Build all the files into /build
  .build(function(err) {
    if (err) throw err;
    console.log('Site build complete!');
  });
