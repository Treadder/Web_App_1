const gulp = require("gulp"); //gives us access to all of gulps stuff.
const clean = require('gulp-clean');

// gulp.task("clean", function(){   <--another way to create a task.
//     return clean("dist");
// });

//CLEANS
gulp.task("clean:vendor", function(done) {//Cleans and deletes the stuff we tell it to.
    return gulp.src("dist/vendor/*", {read: false})   //The "*" after /vendor/ tells gulp to only delete what's in vendor, and not vendor itself.
        .pipe(clean());
});

gulp.task("clean:main", function(done) {//TODO ask about the 'done' parameter and the pipeline it goes through. How is 'done' useful to us?
    return gulp.src("dist/**/*.js', 'dist/**/*.html', '!dist/vendor/**.*", {read: false})
        .pipe(clean());
});

gulp.task("clean:all", function(done) {
    return gulp.src("dist/*", {read: false})
        .pipe(clean());
});


//COPIES
gulp.task("copy:main", function(done) {
    gulp.src("client/**/*.html")
        .pipe(gulp.dest("dist/"));    //.pipe is taking the output of the previous command as the input for the next.
});

gulp.task("copy:vendor", function(done) {//take all our dependencies and put them in the build.
    gulp.src("node_modules/jquery/dist/jquery.js")
        .pipe(gulp.dest("dist/vendor/"));
});

//WATCHING
//TODO
gulp.task("watch", function(){
    return gulp.watch("client/**/*.js", "client/**/*.html");  //watches all .js files below client and all .html files below client.
});

//BROWSERIFY
//TODO


//DEFAULT TASK
gulp.task("copy", gulp.parallel("copy:main", "copy:vendor"));  //this needs to be above 'default' because 'default' needs it. It has to exist first.
gulp.task("default", gulp.parallel("copy"));//creates a new task named 'default' that runs the task 'copy'  (Default runs automatically with npx gulp)
gulp.task("build", function(done) {});//TODO