var gulp = require("gulp");
var mustache = require("gulp-mustache");
var request = require("request");



gulp.task("default", function(done) {
  console.log('requesting list...');
  request('https://rawgit.com/janteuni/sushicons/master/icon-list.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var icons = JSON.parse(body);
      gulp.src("./template/index.html")
        .pipe(mustache({
          icons: icons
        }))
        .pipe(gulp.dest("."))
	    .on('end', done);
    }
  });
});
