'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';

require('babel-polyfill');

gulp.task('mocha', () => {
	return gulp.src(['src/es6/**/*.js'], {read:false})
	.pipe(mocha({reporter: 'list'}))
	.on('error', gutil.log);
});

gulp.task('watch-mocha', () => {
	gulp.run('mocha');
	gulp.watch(['src/es6/**/*.js'], ['mocha']);
});

gulp.task('default', ['watch-mocha']);
