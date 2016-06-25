'use strict';

import path from 'path';
import csscomb from 'gulp-csscomb';
import atpx from 'gulp-autoprefixer';
import gulpif from 'gulp-if';


module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
  let url = config;
  let dest = path.join(target);
  let destcss = path.join(target, url.styles.assets);

  // Run task
  gulp.task('csscomb',  () => {
    return gulp.src(path.join(target, '**/*.css'))
      .pipe(plugins.postcss([plugins.autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(csscomb())
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });

}
