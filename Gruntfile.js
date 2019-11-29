const sass = require('node-sass');
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'distr/static/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    'distr/static/js/bundle.js': 'src/js/app.jsx'
                },
                options: {
                    transform: [
                        ['babelify',
                            {
                                presets:
                                    [
                                        ["@babel/preset-env", { modules: 'auto' }],
                                        "@babel/preset-react"
                                    ],
                                plugins: [
                                    "@babel/plugin-transform-react-jsx",
                                    "@babel/plugin-proposal-class-properties"
                                ]
                            }
                        ]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        watch: {
            css: {
                files: ['src/scss/**/*', '!src/scss/main.scss'],
                tasks: ['sass-simple'],
            },
            js: {
                files: ['src/js/**/*'],
                tasks: ['jsx-simple'],
            },
            html: {
                files: ['src/index.html'],
                tasks: ['copy:html'],
            },
        },
        concat: {
            options: {
                separator: '//=============NEW FILE=============',
            },
            js: {
                src: [].concat(['src/*.js', 'src/js/components/*.jsx']),
                dest: 'src/js/bundle.jsx'
            },
            scss: {
                src: [
                    'src/scss/components/*.scss',
                ],
                dest: 'src/scss/main.scss',
            }
        },
        clean: {
            scss: ['src/scss/main.scss']
        },
        copy: {
            html: {
                src: 'src/index.html',
                dest: 'distr/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['babel']);
    grunt.registerTask('default', ['concat:js']);
    grunt.registerTask('default', ['clean:bundle']);
    grunt.registerTask('default', ['browserify:dist']);

    grunt.registerTask('sass-simple', ['concat:scss', 'sass', 'clean:scss']);
    grunt.registerTask('jsx-simple', ['browserify:dist']);
    // grunt.registerTask('grunt-watch', ['sass-simple', 'jsx-simple']);
};