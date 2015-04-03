var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fs = require('fs');

var fontName = 'sushicons';

gulp.task('iconfont', function(done){

  var icons;

  gulp.src(['icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'css/template.css',
      targetPath: '../style.css',
      fontPath: 'font/'
    }))
    .pipe(iconfont({
      fontName: fontName
     }))
	.on('codepoints', function(codepoints, options) {
		icons = codepoints.map(function(el) { return 'sushicon-' + el.name; });
      })
    .pipe(gulp.dest('dist/font'))
	.on('end', function(){
		fs.writeFileSync('icon-list.json', JSON.stringify(icons));
		done();
	});
});

gulp.task('default', ['iconfont']);
