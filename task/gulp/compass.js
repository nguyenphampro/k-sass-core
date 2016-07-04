'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';
import gulpif from 'gulp-if';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target, url.styles.assets);
    let destcore = path.join(target, url.styles.assetscore);
    let lang = url.styles.lang;

    // Run task
    gulp.task('compass', () => {


        if (lang == 'css') {
            gulp.src([
                    path.join(url.source, url.styles.css, '**.css'),
                    '!' + path.join(url.source, '{**/\_*,**/\_*/**}')
                ])
                .pipe(plugins.changed(dest))
                .pipe(gulp.dest(dest))
                .pipe(browserSync.stream({
                    match: '**/*.css'
                }));
        } else if (lang == 'sass' || lang == 'scss') {
            var autoprefixerOpts = {
                browsers: [
                    'last 2 versions',
                    'iOS >= 7',
                    'Android >= 4',
                    'Explorer >= 10',
                    'ExplorerMobile >= 11'
                ],
                cascade: false
            };

            gulp.src([
                    path.join(url.source, url.styles.sass, '**.{sass,scss}')
                ])
                .pipe(plugins.plumber())
                .pipe(gulpif(!setgulp.production, plugins.sourcemaps.init()))
                .pipe(plugins.sass({
                    outputStyle: 'expanded',
                    precision: 10,
                    includePaths: [
                        // 'node_modules/ionic-angular/',
                        // 'node_modules/ionicons/dist/scss',
                        path.join(url.source, url.styles.sass)
                    ]
                }).on('error', plugins.sass.logError))
                .pipe(plugins.postcss([autoprefixer(autoprefixerOpts)]))
                .pipe(gulpif(!setgulp.production, plugins.sourcemaps.write('./')))
                .pipe(gulp.dest(dest))
                .pipe(browserSync.stream({
                    match: '**/*.css'
                }));

                gulp.src([
                    path.join(url.source, url.styles.core, '**.{sass,scss}')
                ])
                .pipe(plugins.plumber())
                .pipe(gulpif(!setgulp.production, plugins.sourcemaps.init()))
                .pipe(plugins.sass({
                    outputStyle: 'expanded',
                    precision: 10,
                    includePaths: [
                        // 'node_modules/ionic-angular/',
                        // 'node_modules/ionicons/dist/scss',
                        path.join(url.source, url.styles.sass)
                    ]
                }).on('error', plugins.sass.logError))
                .pipe(plugins.postcss([autoprefixer(autoprefixerOpts)]))
                .pipe(gulpif(!setgulp.production, plugins.sourcemaps.write('./')))
                .pipe(gulp.dest(destcore))
                .pipe(browserSync.stream({
                    match: '**/*.css'
                }));
        } else if (lang == 'less') {
            gulp.src(path.join(url.source, url.styles.less, '**.less'))
                .pipe(plugins.plumber())
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.less({
                    style: 'expanded'
                }))
                .pipe(plugins.postcss([autoprefixer({
                    browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4']
                })]))
                .pipe(plugins.sourcemaps.write('./'))
                .pipe(gulp.dest(dest))
                .pipe(browserSync.stream({
                    match: '**/*.css'
                }));
        } else if (lang == 'stylus') {

        }

    });
}