var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'sushicons';

gulp.task('iconfont', function(){
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
    .pipe(gulp.dest('dist/font'));
});
gulp.task('default', ['iconfont']);
