'use strict';

import path from 'path';
import del from 'del';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task
    gulp.task('delmin', () => {

        return del.sync([
            path.join(target, url.styles.assets, '**/*'),
            '!' + path.join(target, url.styles.assets, '*.min-*.css'),
            '!' + path.join(target, url.styles.assets, '*.min-*.css.map'),
            path.join(target, url.scripts.assets, '**/*'),
            '!' + path.join(target, url.scripts.assets, '*.min-*.js'),
            '!' + path.join(target, url.scripts.assets, '*.min-*.js.map'),
            path.join(target, url.scripts.assets, 'app.bundler.min-*.js')
        ], {dryRun: true});
    });

}
