const gulp = require("gulp"); //gives us access to all of gulps stuff.

gulp.task("default", function(done) {//Create a new task called "default" that gulp can run. You could add a dependency with ", ["<dependency>"]" this requires the dependency task to have completed before your task runs.
    done();//once everything has completed, get us out of the function.
});

gulp.task("clean", function(done) {
});

gulp.task("copy:main", function(done) {
    gulp.src("client/**/*.html")
        .pipe(gulp.dest("dist/"));    //.pipe is taking the output of the previous command as the input for the next.
});

gulp.task("copy:vendor", function(done) {//take all our dependencies and put them in the build.
    gulp.src("node_modules/jquery/dist/jquery.js")
        .pipe(gulp.dest("dist/vendor/"));
});

gulp.task("build", function(done) {
});