const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');


gulp.task('sass' , () => {
	return gulp.src('app/scss/styles.scss')
			.pipe(sass())
			.pipe(gulp.dest('app/css'));
});

gulp.task('es6', () => {
	return gulp.src('app/js/app.js')
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulp.dest('dest/js'));
});

gulp.task('default' , ['es6'] , () => {
	gulp.watch('app/js/app.js',['es6']);
});





















