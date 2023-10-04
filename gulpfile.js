const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("src/Fstyles/**/*.scss")
    .pipe(sass())
    .pipe(
      purgecss({
        content: ["*.html"],
      })
    )
    .pipe(dest("dist/css"));
}

function watchTask() {
  watch(["src/Fstyles/**/*.scss,", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
