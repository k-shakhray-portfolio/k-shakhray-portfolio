const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();

function emptyDist() {
    return del('./dist/**');
}

function copyHtml() {
    return src('src/index.html')
        .pipe(dest('./dist'))
        .pipe(browserSync.reload({ stream: true }));
}

function copyCss() {
    return src('./src/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([
            uncss({html: ['src/index.html']})
        ]))
        .pipe(minify())
        .pipe(dest('./dist'))
        .pipe(browserSync.stream());
}
function addPrefix() {
    return src('dist/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest('dist'));
}

function copyImg() {
    return src('./src/img/**')
        .pipe(dest('./dist/img'))
}

function serve() {
    browserSync.init({
        server: './dist'
    });
    watch(['index.html'], copyHtml);
    watch(['./src/scss/*.scss'], copyCss);

}


const build = series(emptyDist, copyHtml,copyCss, addPrefix, copyImg);
exports.build = build;
exports.dev = serve;
exports.default = series(build, serve);
