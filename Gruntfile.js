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
                // files: [{
                //     expand: true,
                //     cwd: 'src/scss/components/',
                //     src: ['*.scss'],
                //     dest: 'distr/static/css/',
                //     ext: '.css'
                // }]
                files: {
                    'distr/static/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        babel: {
            options: {
                plugins: ['@babel/plugin-transform-react-jsx'],
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            'modules': false
                        }
                    ],
                    "@babel/preset-react"
                ],
                sourceMap: true
            },
            dist: {
                files:
                    [{
                        expand: true,
                        cwd: 'src/js/components/',
                        src: ['*.jsx'],
                        dest: 'distr/static/js/',
                        ext: '.js'
                    }]
            }
        },
        browserify: {
            dist: {
                // files: [{
                //     expand: true,
                //     cwd: 'src/js/components/',
                //     src: ['*.jsx'],
                //     dest: 'distr/static/js/',
                //     ext: '.js'
                // }],
                files: {
                    'distr/static/js/bundle.js': 'src/js/index.jsx'
                },
                options: {
                    transform: [['babelify', { presets: [["@babel/preset-env", { modules: 'auto' }], "@babel/preset-react"] }]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        watch: {
            dev: {
                files: ['src/**/*'],
                tasks: ['grunt-watch']
            }
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
            bundle: ['src/js/bundle.jsx']
        }
    })

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['babel']);
    grunt.registerTask('default', ['concat:js']);
    grunt.registerTask('default', ['clean:bundle']);
    grunt.registerTask('default', ['browserify:dist']);

    // grunt.registerTask('concatJS', ['clean:bundle', 'concat:js']);
    // grunt.registerTask('sass-babel', ['sass', 'babel']);
    grunt.registerTask('sass-simple', ['concat:scss', 'sass']);
    grunt.registerTask('grunt-watch', ['sass-simple', 'browserify:dist']);
}