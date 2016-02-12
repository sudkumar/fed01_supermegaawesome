//--------------- get the required modules
const gulp = require("gulp"),
      sass = require("gulp-sass"),
      browserSync = require("browser-sync").create();

//--------------- tasks

// task for server
gulp.task("browser-sync", ["sass"], function(){
  browserSync.init({
    server:{
      baseDir: "./"
    },
    notify: false
  });

  // now add the watch
  gulp.watch("./sass/**/*.sass", ["sass"]);
  gulp.watch("index.html").on('change', browserSync.reload);

});


// task for compiling sass files
gulp.task("sass", function(){
  return gulp.src("./sass/main.sass")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.stream());
});


// default tasks
gulp.task("default", ["browser-sync"])
