module.exports = myTasks;

function myTasks(grunt) {
    grunt.initConfig({
        browserify: {        //Build the code into the /dist directory, in a mode compatible with browsers!
            main: {
                src: ['client/app.js'],
                dest: 'dist/app.js'
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'client/**/*.html'
                        ],
                        dest: 'dist/'
                    }
                ]
            },
            vendor: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['node_modules/jquery/dist/jquery.js'],
                        dest: 'dist/vendor/'
                    }
                ]
            }
        },

        clean: {
            all: ['dist/*'],
            vendor: ['dist/vendor/*'],
            main: ['dist/**/*.js', 'dist/**/*.html', '!dist/vendor/**.*']
        },

        watch: {
            main: {
                files: ['client/**/*.js', 'client/**/*.html'],
                tasks: ['clean:main', 'browserify:main', 'copy:main'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['clean:all', 'build']);
    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('build', ['browserify', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');         //Makes our task available to us via NPM
    grunt.loadNpmTasks('grunt-browserify');
}