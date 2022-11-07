
import dartsass from "sass"
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import gulp from "gulp";
import include from "gulp-file-include"
import csso from "gulp-csso"
import concat from "gulp-concat"
import {deleteAsync} from "del"
import browserSync  from 'browser-sync'

const { src, dest, watch,series } = gulp;

const sass = gulpSass(dartsass)

gulp.task('html', function () {
    return src('src/**.html')
        .pipe(include({
            prefix:'@@'
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
})
gulp.task("image", function () {
    return src('src/**/*.{jpg,jpeg,png,svg,gif,webp}')
    .pipe(dest('dist'))
})

gulp.task('scss', function() {
    return src('src/sass/**.scss')
     //из scss => css
     .pipe(sass())
     // добавление автопрефиксов
     .pipe(autoprefixer({
        overrideBrowserslist : ['last 2 versions']
        }))
    // минимизирует css
        .pipe(csso())
    // все файлы в один файл
        .pipe(concat('index.css'))
        .pipe(dest('dist'))
})

gulp.task("clean", function clean() {
    return deleteAsync('dist');
})

gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        port: "3001"
    })
    watch ('src/**.html', series('html')).on('change', browserSync .reload)
    watch ('src/sass/**/*.scss', series('scss')).on('change', browserSync .reload)
    watch ('src/**/*.{jpg,jpeg,png,svg,gif,webp}', series('html')).on('change', browserSync .reload)
})

 gulp.task('default', series('clean', 'scss' ,'html',"image", 'serve' ));
//  gulp.parallel('serve');