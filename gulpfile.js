var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fs = require('fs');
var zip = require('gulp-zip');

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
		icons = codepoints.map(function(el) { return 'si-' + el.name; });
      })
    .pipe(gulp.dest('dist/font'))
	.on('end', function(){
		fs.writeFileSync('icon-list.json', JSON.stringify(icons));
		gulp.src('dist/*')
        		.pipe(zip('sushicons.zip'))
        		.pipe(gulp.dest('.'))
			.on('end', done);
	});
});

gulp.task('default', ['iconfont']);
