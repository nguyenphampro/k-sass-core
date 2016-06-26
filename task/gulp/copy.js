'use strict';

import path from 'path';
import del from 'del';
import babel from 'gulp-babel';
import through from 'through2';
import sourcemaps from 'gulp-sourcemaps';


module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
  let url = config;
  let dest = path.join(target);
  let destjs = path.join(target, url.scripts.assets);

  // Run task
  gulp.task('copy', function() {
     gulp.src([
        path.join(url.source, '**/*'),
        path.join(url.source, '.htaccess'),
        // '!' + path.join(url.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(url.source, url.ignore.copy)
      ])
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));


      // gulp.src([
      //   path.join(url.source, url.scripts.javascript, '*.js'),
      // ])
      // .pipe(plugins.sourcemaps.init())
      // .pipe(plugins.babel({
      //   presets: ['es2015']
      // }))
      // .pipe(plugins.sourcemaps.write('.'))
      // // .pipe(logFileHelpers)
      // .pipe(plugins.changed(dest))
      // .pipe(gulp.dest(destjs));
  });
}
