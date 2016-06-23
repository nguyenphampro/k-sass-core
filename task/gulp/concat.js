'use strict';

import path from 'path';
import del from 'del';
import FileOrder from 'gulp-order';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import through from 'through2';
import concatCss from 'gulp-concat-css';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import cleanCSS from 'gulp-clean-css';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);
    let destjs = path.join(target, url.scripts.assets);
    let destcss = path.join(target, url.styles.assets);

    // Run task

    gulp.task('concat', function() {
        gulp.src(url.concat.js)
            // .pipe(plugins.FileOrder([
            //   'bower_components/jquery/jquery.js'
            // ]))
            .pipe(gulpif(!setgulp.production, plugins.sourcemaps.init()))
            .pipe(concat('addons.js'))
            .pipe(gulpif(!setgulp.production, plugins.sourcemaps.write('./')))
            .pipe(plugins.changed(dest))
            .pipe(gulp.dest(destjs));

        gulp.src(url.concat.css)
            // .pipe(plugins.FileOrder([
            //   'bower_components/animate.css/animate.css'
            // ]))
            .pipe(concatCss('addons.css', {
                includePaths: '',
                rebaseUrls: false,
                inlineImports: false
            }))
            // .pipe(cleanCSS({compatibility: 'ie8', keepSpecialComments: 0}))
            .pipe(plugins.changed(dest))
            .pipe(gulp.dest(destcss));
    });

}