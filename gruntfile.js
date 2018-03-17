module.exports = function(grunt) {

    //Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "css/main.css" : "sass/main.sass"
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ["sass/*.sass"],
                tasks: ["sass"],
                options: {
                    spawn: false,
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        "app/css/*.css",
                        "app/*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: "./app"
                }
            }
        },

        px_to_rem: {
            dist: {
              options: {
                base: 16,
                fallback: false,
                fallback_existing_rem: false,
                ignore: [],
                map: false
              },
              files: {
                'dest/style.css': ['src/style.css']
              }
            }
          }
    });

    //Load the plugins tasks
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks('grunt-px-to-rem');

    //Default task(s).
    grunt.registerTask("default", ["sass", "watch", "browserSync", "px_to_rem"]);
};
