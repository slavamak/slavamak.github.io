const autoprefixer = require ('autoprefixer'),
			browserSync = require ('browser-sync').create(),
			csso = require('gulp-csso'),
			favicons = require("gulp-favicons"),
			gulp = require ('gulp'),
			gulpif = require ('gulp-if'),
			jsImport = require ('gulp-js-import'),
			imagemin = require('gulp-imagemin'),
			pngquant = require('imagemin-pngquant'),
			postcss = require ('gulp-postcss'),
			pug = require ('gulp-pug'),
			rename = require ('gulp-rename'),
			scss = require ('gulp-sass'),
			sourcemaps = require ('gulp-sourcemaps'),
			pngSprite = require ('gulp.spritesmith'),
			svgmin = require ('gulp-svgmin'),
			svgSprite = require ('gulp-svg-sprite'),
			uglify = require ('gulp-uglify'),
			
			PRODUCTION = process.env.NODE_ENV == 'production',

			paths = {
				views: {
					src: [
						'./source/views/index.pug',
						'./source/views/pages/*.pug'
					],
					dist: './dist/'
				},
				styles: {
					src: {
						common: './source/styles/global.scss',
						vendor: './source/styles/vendor.scss'
					},
					dist: './dist/styles/'
				},
				scripts: {
					src: {
						common: './source/scripts/common.js',
						vendor: './source/scripts/vendor.js'
					},
					dist: './dist/scripts/'
				},
				fonts: {
					src: './source/fonts/*.*',
					dist: './dist/fonts/'
				},
				images: {
					src: './source/images/',
					dist: './dist/images/'
				},
				assets: {
					src: './source/*.*',
					dist: './dist/'
				}
			};

gulp.task('assets', () => {
	return gulp.src(paths.assets.src)
		.pipe(gulp.dest(paths.assets.dist))
});

gulp.task('favicons', () => {
	return gulp.src(paths.images.src + 'favicons/*.*')
		.pipe(favicons({
			icons: {
				android: false,
				appleIcon: true,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				windows: false,
				yandex: false
			}
		}))
		.pipe(gulp.dest(paths.images.dist + 'favicons/'))
});

gulp.task('fonts', () => {
	return gulp.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dist))
});

gulp.task("images", () => {
	return gulp.src(paths.images.src + '*.{jpg,jpeg,png,gif,svg}')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			pngquant({quality: "70-75", speed: 7})
		]))
		.pipe(gulp.dest(paths.images.dist))
		.pipe(gulpif(!PRODUCTION, browserSync.stream()))
});

gulp.task('png-sprite', () => {
	return gulp.src(paths.images.src + 'icons/png/*.png')
		.pipe(pngSprite({
			imgName: 'sprite.png',
			cssName: 'sprite.scss',
			padding: 24
		}))
		.pipe(gulp.dest(paths.images.src))
});

gulp.task('scripts-vendor', () => {
	return gulp.src(paths.scripts.src.vendor)
		.pipe(jsImport({
			hideConsole: true
		}))
		.pipe(gulpif(PRODUCTION, uglify()))
		.pipe(gulp.dest(paths.scripts.dist))
		.pipe(gulpif(!PRODUCTION, browserSync.stream()))
});

gulp.task('scripts', () => {
	return gulp.src(paths.scripts.src.common)
		.pipe(gulpif(PRODUCTION, uglify()))
		.pipe(gulp.dest(paths.scripts.dist))
		.pipe(gulpif(!PRODUCTION, browserSync.stream()))
});

gulp.task('serve', () => {
	browserSync.init({
		server: paths.views.dist,
		ui: false,
		notify: false
	})
});

gulp.task('styles-vendor', () => {
	return gulp.src(paths.styles.src.vendor)
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(scss())
		.pipe(gulpif(PRODUCTION, csso()))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dist))
		.pipe(gulpif(!PRODUCTION, browserSync.stream()))
});

gulp.task('styles', () => {
	return gulp.src(paths.styles.src.common)
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(scss({
			indentType: 'tab',
			indentWidth: 1,
		}))
		.pipe(postcss([
			autoprefixer({
				cascade: false
			})
		]))
		.pipe(gulpif(PRODUCTION, csso()))
		.pipe(rename('common.css'))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dist))
		.pipe(gulpif(!PRODUCTION, browserSync.stream()))
});

gulp.task('svg-sprite', () => {
	return gulp.src(paths.images.src + 'icons/svg/*.*')
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(gulp.dest(paths.images.src))
});

gulp.task('views', () => {
	return gulp.src(paths.views.src)
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(paths.views.dist))
		.pipe(gulpif(!PRODUCTION, browserSync.stream()))
});

gulp.task('watch', () => {
	gulp.watch([
		'./source/styles/**/*.scss',
		'!' + paths.styles.src.vendor
	], gulp.series('styles'))
	gulp.watch(paths.styles.src.vendor, gulp.series('styles-vendor'))
	gulp.watch('./source/views/**/*.pug', gulp.series('views'))
	gulp.watch(paths.scripts.src.common, gulp.series('scripts'))
	gulp.watch(paths.images.src, gulp.series('images'))	
});


gulp.task('build', gulp.series(gulp.parallel('views', 'styles', 'styles-vendor', 'scripts', 'scripts-vendor', 'images', 'favicons', 'fonts', 'assets'), gulp.parallel('serve', 'watch')));

gulp.task('prod', gulp.series(gulp.parallel('views', 'styles', 'styles-vendor', 'scripts', 'scripts-vendor', 'images', 'favicons', 'fonts', 'assets')));

gulp.task('default', gulp.series('build'));