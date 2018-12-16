var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    htmlclean = require('gulp-htmlclean'),
    htmlmin = require('gulp-htmlmin'),
    rev = require('gulp-rev-append'),
    sequence = require('gulp-sequence'),
    path = require('path'),
    imagemin = require('gulp-imagemin'),
    paths = {
        root: './',
        source: './themes/snippet/source/' //主题下原文件
    };

/*====================================================
         开发主题
    ====================================================*/

// CSS预处理
/*
gulp.task('less-task', function () {
    return gulp.src(paths.source + 'css/less/_style.less')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(less())
        .pipe(rename({basename: "style"}))
        .pipe(gulp.dest(paths.source + 'css'))
        .pipe(notify({message: 'less compile complete'}));
});
*/

// 校验JS语法和风格
/*
gulp.task('js-task', function () {
    return gulp.src(paths.source + 'js/!*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest(paths.source + 'js/'))
        .pipe(notify({message: 'js compile complete'}));
});
*/

// 监听任务-主题开发模式
/*
gulp.task('dev', function () {
    gulp.watch(paths.source + 'css/less/!*.less', ['less-task']);
    gulp.watch(paths.source + 'js/!*.js', ['js-task']);
});
*/


/*====================================================
    部署前代码处理
====================================================*/

// 压缩处理 css
gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions', 'Firefox >= 20', 'Opera >= 36', 'ie >= 9', 'Android >= 4.0',],
            cascade: false, //是否美化格式
            remove: true //是否删除不必要的前缀
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./public/css'));
        // .pipe(notify({message: 'css minify complete'}));
});

// 压缩处理 js
gulp.task('minify-js', function () {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
        // .pipe(notify({message: 'js minify complete'}));
});

// 压缩 public/demo 目录内图片
gulp.task('minify-images', function() {
    return gulp.src('./public/img/**/*.*')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: false, //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('./public/img'));
});

// 压缩处理 html
gulp.task('minify-html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true, //清除HTML注释
            collapseWhitespace: true, //压缩HTML
            minifyJS: true, //压缩页面JS
            minifyCSS: true, //压缩页面CSS
            minifyURLs: true
        }));
        // .pipe(gulp.dest('./public'));
});

// 添加版本号
/*
gulp.task('rev', function () {
    return gulp.src(['./public/!**!/index.html'])
        .pipe(rev());
        // .pipe(gulp.dest('./public'));
});
*/

// 同步执行task
// gulp.task('deploy', sequence(['minify-css', 'minify-js'], 'rev', 'minify-html'));

// 部署前代码处理 gulp3用该写法
/*gulp.task('default', ['deploy'], function (e) {
    console.log("[complete] please execute： hexo d");
});*/

gulp.task('default', gulp.series('minify-css','minify-js','minify-images', 'minify-html', done => {
    console.log("[complete] please execute： hexo d");
    done();
}));