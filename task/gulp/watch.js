'use strict';

import path from 'path';
import runSequence from 'run-sequence';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task
    gulp.task('watch', () => {
        if (!setgulp.production) {
            // Styles
            gulp.watch([
                path.join(url.source, '**/*.{css,sass,scss,less,styl}')
            ], ['compass']);


            // Scripts
            gulp.watch([
                path.join(url.source, url.scripts.root, '**/*.{js,coffee}')
            ], ['babel']);

            // Scripts
            gulp.watch([
                path.join(url.source, '**/*.jade')
            ], ['jade', 'jadeindex']);



            // Copy
            gulp.watch([
                path.join(url.source, '**/*'),
                '!' + path.join(url.source, '{**/\_*,**/\_*/**}'),
                '!' + path.join(url.source, '**/*.jade')
            ], ['copy']);

            // Images
            gulp.watch([
                path.join(url.source, url.images, '**/*.{jpg,jpeg,gif,svg,png}')
            ], ['copy']);

            // All other files
            gulp.watch(path.join(url.views, '**/*')).on('change', browserSync.reload);
        }
    });
}