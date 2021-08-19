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

const path = './zzz';
const templets = './templets/default';

// 公共函数
function build_scss(scss_file) {
    return src(scss_file)
        .pipe(sourcemaps.init())
        //开始编译sass
        .pipe(
            sass({
                outputStyle: 'nested', //nested (default), compact, compressed, or expanded
                cascade: true, //是否美化
                remove: true  //是否删除不必要的前缀
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


                // "last 1 major version",
                // ">= 1%",
                // "Chrome >= 45",
                // "Firefox >= 38",
                // "Edge >= 12",
                // "Explorer >= 10",
                // "iOS >= 9",
                // "Safari >= 9",
                // "Android >= 4.4",
                // "Opera >= 30"
            ],
            cascade: true,
            remove: false
        }))
}

// scss文件编译
function scss() {
    return build_scss([path+'/scss/style.scss'])
        .pipe(rename('style.css'))
        // .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(dest( templets+'/assets/css/'))
        // .pipe(filter(templets+'/assets/css/style.css'))  //帅选出所有.css文件
        .pipe(reload({ stream: true }));
}


//输出main.js文件到asset / js文件夹

function mainjs() {
    return src(path+'/js/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(sourcemaps.write())
        //输入到asset/js目录
        .pipe(dest(templets+'/assets/js/'))
        .pipe(reload({ stream: true }));
}


//启动浏览器同步server
function server() {
    //初始化浏览器同步
    return browserSync.init({
        logFileChanges: true,
        port: 3000,
        online: false,
        browser: "chrome",
        proxy: {
            target: "http://wk.cn"
        },
         "open": false
    });
}

// function reload_browser(){
//     return reload({ stream: true });
// }

//监控文件
function watch_all() {
    return (
        watch(path+'/scss/**/*.scss', parallel(scss)),
        watch(path+'/js/**/*.js', parallel(mainjs)),
        watch(templets+'/**/*.htm', parallel(reload))
    )
}

exports.scss = series(scss);
exports.init = series(scss,mainjs);
exports.default = series(
    series(scss, mainjs),
    parallel(server, watch_all)
);
