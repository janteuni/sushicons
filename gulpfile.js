var gulp = require('gulp');
var iconfont = require('gulp-iconfont');

gulp.task('iconfont', function(){
  gulp.src(['icons/*.svg'])
    .pipe(iconfont({
      fontName: 'suhicons',
      appendCodepoints: true
    }))
      .on('codepoints', function(codepoints, options) {
        // CSS templating, e.g.
        console.log(codepoints, options);
      })
    .pipe(gulp.dest('font/'));
});

gulp.task('default', ['iconfont']);
