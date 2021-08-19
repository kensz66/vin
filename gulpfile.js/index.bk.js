const { src, dest, series, parallel, task, GulpClient } = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-csso');
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');
const filter = require('gulp-filter');
const del = require('del');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const browserify = require("browserify");
//vinyl-source-stream用于将Browserify的bundle()的输出转换为Gulp可用的vinyl（一种虚拟文件格式）流.
const source = require('vinyl-source-stream');
// vinyl - buffer用于将vinyl流转化为buffered vinyl文件（ gulp - sourcemaps及大部分Gulp插件都需要这种格式）
const buffer = require('vinyl-buffer');
const { stream } = require('browser-sync');

const path = './www.v-in.net';


//************************************

//* 编译前准备：
// 1. 清空
// 2.输出静态文件

//********************************** */

// 1. 运行前清空lefi主题中的文件和文件夹
function del_lefi_theme_and_plugins() {
    return del([
        '!' + path + '/wp-content/themes/lefi',
        '!' + path + '/wp-content/plugins'
    ]);
}

// 2. 输出所有css文件夹
function css() {
    return src([
        './aaa/assets/css/bootstrap.min.css',
        './aaa/assets/css/demo.css',
        './aaa/assets/css/fonts.css'
    ])
        .pipe(changed(path + '/wp-content/themes/lefi/assets/css'))
        .pipe(dest(path + '/wp-content/themes/lefi/assets/css'));
}
// 3. 输出所有js core中文件到 lefi主题中
function core_js() {
    return src(['./aaa/assets/js/core/*','./aaa/assets/js/plugin/webfont/webfont.min.js'])
        .pipe(changed(path + '/wp-content/themes/lefi/assets/js/core'))
        .pipe(dest(path + '/wp-content/themes/lefi/assets/js/core'))
}

// 4. 输出 images 文件到lefi主题中
function images() {
    return src(['./aaa/assets/images/**/*'])
        .pipe(changed(path + '/wp-content/themes/lefi/assets/images'))
        .pipe(dest(path + '/wp-content/themes/lefi/assets/images'))
        .pipe(reload({ stream: true }));
}

// 5. 输出 fonts 字体文件到lefi主题中
function fonts() {
    return src(['./aaa/assets/fonts/**/*'])
        .pipe(changed(path + '/wp-content/themes/lefi/assets/fonts'))
        .pipe(dest(path + '/wp-content/themes/lefi/assets/fonts'))
        .pipe(reload({ stream: true }));
}

// 4. 输出模版文件到lefi主题目录
function templates_to_lefi() {
    return src('./theme/**/*')
        //gulp-changed将2个目录的文件进行对比,
        //只有更改过的文件才会通过进入下一个流程.
        .pipe(changed(path + '/wp-content/themes/lefi'))
        //输入到./templets/default/目录
        .pipe(dest(path + '/wp-content/themes/lefi'))
        .pipe(reload({ stream: true }));
}

// 5.  输出插件目录到 plugins 目录
function plugin_to_plugins() {
    return src('./plugins/**/*')
        //gulp-changed将2个目录的文件进行对比,
        //只有更改过的文件才会通过进入下一个流程.
        .pipe(changed(path + '/wp-content/plugins'))
        //输入到./templets/default/目录
        .pipe(dest(path + '/wp-content/plugins'))
        .pipe(reload({ stream: true }));
}






// 开始编译文件

// 公共函数
function build_scss(scss_file) {
    return src(scss_file)
        .pipe(sourcemaps.init())
        //开始编译sass
        .pipe(
            sass({
                outputStyle: 'nested', //nested (default), compact, compressed, or expanded
                cascade: true, //是否美化
                remove: true //是否删除不必要的前缀
            }).on('error', sass.logError)
        )
        //增加厂商前缀
        .pipe(autoprefixer({
            overrideBrowserslist: [
                // "Android 2.3",
                // "Android >= 4",
                // "Chrome >= 20",
                // "Firefox >= 24",
                // "Explorer >= 8",
                // "iOS >= 6",
                // "Opera >= 12",
                // "Safari >= 6",


                "last 1 major version",
                ">= 1%",
                "Chrome >= 45",
                "Firefox >= 38",
                "Edge >= 12",
                "Explorer >= 10",
                "iOS >= 9",
                "Safari >= 9",
                "Android >= 4.4",
                "Opera >= 30"
            ],
            cascade: true,
            remove: false
        }))
}


// 1. 编译自定义 lefi2.scss 和 main.scss(main.scss 包含在 lefi2 中)
function scss_lefi() {
    return build_scss('./aaa/assets/sass/lefi2.scss')
        .pipe(rename('app.css'))
        // .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(dest(path + '/wp-content/themes/lefi/assets/css/'))
        .pipe(filter(path + '/wp-content/themes/lefi/assets/css/*.css'))  //帅选出所有.css文件
        .pipe(reload({ stream: true }));
}



//编译 plugin 中所有 js 文件到 asset/js文件夹
function js() {
    return src([
        // './aaa/assets/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js',
        // './aaa/assets/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
        // './aaa/assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js',
        // './aaa/assets/js/plugin/moment/moment.min.js',
        // './aaa/assets/js/plugin/chart.js/chart.min.js',
        // './aaa/assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js',
        // './aaa/assets/js/plugin/chart-circle/circles.min.js',
        // './aaa/assets/js/plugin/datatables/datatables.min.js',
        // './aaa/assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js',
        // './aaa/assets/js/plugin/bootstrap-toggle/bootstrap-toggle.min.js',
        // './aaa/assets/js/plugin/jqvmap/jquery.vmap.min.js',
        // './aaa/assets/js/plugin/jqvmap/maps/jquery.vmap.world.js',
        // './aaa/assets/js/plugin/gmaps/gmaps.js',
        // './aaa/assets/js/plugin/dropzone/dropzone.min.js',
        // './aaa/assets/js/plugin/fullcalendar/fullcalendar.min.js',
        // './aaa/assets/js/plugin/datepicker/bootstrap-datetimepicker.min.js',
        // './aaa/assets/js/plugin/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
        // './aaa/assets/js/plugin/bootstrap-wizard/bootstrapwizard.js',
        // './aaa/assets/js/plugin/jquery.validate/jquery.validate.min.js',
        // './aaa/assets/js/plugin/summernote/summernote-bs4.min.js',
        // './aaa/assets/js/plugin/select2/select2.full.min.js',
        // './aaa/assets/js/plugin/sweetalert/sweetalert.min.js',
        // './aaa/assets/js/plugin/jquery.magnific-popup/jquery.magnific-popup.min.js',
        // '../aaa/assets/js/plugin/webfont/webfont.min.js',
        './aaa/assets/js/plugin/**/*',
        './aaa/assets/js/lefi2.js',
        './aaa/assets/js/demo.js'
    ])
        // .pipe(concat('all.js'))
        // // .pipe(sourcemaps.init())
        // .pipe(babel({
        //     presets: ['@babel/preset-env']
        // }))
        // .pipe(uglify())
        // .pipe(rename('app.js'))
        // .pipe(sourcemaps.write())
        //输入到asset/js目录
        .pipe(dest(path + '/wp-content/themes/lefi/assets/js'))
        .pipe(reload({ stream: true }));
}

// 编译自定义js文件 main.js
function js_main() {
    return src('./aaa/assets/js/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename('main.js'))
        .pipe(sourcemaps.write())
        .pipe(dest(path + '/wp-content/themes/lefi/assets/js'))
        .pipe(reload({ stream: true }));
}

//启动浏览器同步server
function server() {
    //初始化浏览器同步
    return browserSync.init({
        logFileChanges: true,
        port: 3000,
        online: false,
        // browser: "firefox",
        proxy: {
            target: "http://www.v-in.net",
        },

    });
}

//监控文件
function watch_all() {
    return (
        //监控所有sass文件
        watch('./aaa/assets/sass/**/*', parallel(scss_lefi)),

        //监控font和img文件夹
        watch('./aaa/assets/images/**/*', parallel(images)),
        watch('./aaa/assets/fonts/**/*', parallel(fonts)),

        watch('./aaa/assets/css/**/*', parallel(css)),
        watch('./aaa/assets/js/main.js', parallel(js_main)),
        watch(['./aaa/assets/js/**/*', '!./aaa/assets/js/main.js'], parallel(js)),
        watch(['./theme/**/*'], parallel(templates_to_lefi)),
        watch(['./plugins/**/*'], parallel(plugin_to_plugins))
    )
}

exports.del_lefi_theme_and_plugins = series(del_lefi_theme_and_plugins);
exports.css = series(css);
exports.core_js = series(core_js);
exports.images = series(images);
exports.fonts = series(fonts);
exports.templates_to_lefi = series(templates_to_lefi);
exports.plugin_to_plugins = series(plugin_to_plugins);
exports.scss_lefi = series(scss_lefi);
exports.js = series(js);
exports.js_main = series(js_main);
exports.server = series(server);
exports.watch_all = series(watch_all);


exports.default = series(
    series(del_lefi_theme_and_plugins, css, core_js, images, fonts, templates_to_lefi, plugin_to_plugins), scss_lefi,
    parallel(js, js_main),
    parallel(server, watch_all)
);
