'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import minifyHtml from 'gulp-htmlmin';
// import htmlReplace from 'gulp-html-replace';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task
    function performChange(content) {
        return content.replace(/css/g, 'min.css');
        // content.replace(/.js/g, '.min.js');
    };

    gulp.task('htmlmin', () => {

        gulp.src(path.join(target, '**/*.html'))
            // .pipe(minifyHtml({
            //     collapseWhitespace: true,
            //     collapseInlineTagWhitespace: true
            // }))
            .pipe(gulpif(setgulp.production, minifyHtml({
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseInlineTagWhitespace: true
            })))
            // .pipe(htmlReplace({
            // 'css': {
            //   src: 'main.css',
            //   tpl: '<link rel="stylesheet" type="text/css" href="%s">'
            // },
            //   'js': ['app.bundle.js', 'app.bundle.min.js']
            // }))
            .pipe(plugins.changed(dest))
            .pipe(gulp.dest(dest));

        // Replace to Min


    });

}