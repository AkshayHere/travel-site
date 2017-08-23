var gulp = require('gulp');
var watch =  require('gulp-watch');

gulp.task('default', function() {
  console.log('Created gulp task');
});

gulp.task('html', function() {
  console.log('html task');
});

gulp.task('styles', function() {
  console.log('styles task');
});

gulp.task('watch', function() {
  watch('./app/index.html',function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/styles.css', function() {
    gulp.start('styles');
  })
});
