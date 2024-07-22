const { watch } = require("fs");
const {src,dest,match,series}=require("gulp");
const sass= require ("gulp-sass")(require ("sass"));
function buildStyles(){
    return src('SCSS\index.scss',{allowEmpty:true}).pipe(sass()).pipe(dest("css"));
}
function watchFiles(){
    watch(['SCSS\index.scss'],buildStyles);
}
exports.default=series(buildStyles,watchFiles);