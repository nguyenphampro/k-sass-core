'use strict';


module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    // Run task


    gulp.task('browserSync', () => {
        browserSync.init({
            open: setgulp.open ? 'local' : true,
            startPath: config.url,
            port: config.port || 3000,
            server: {
                baseDir: target,
                routes: (() => {
                    let routes = {};

                    // Map base URL to routes
                    routes[config.url] = target;

                    return routes;
                })()
            }
        });
    });
}