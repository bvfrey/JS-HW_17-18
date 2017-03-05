module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: 'src/js/*.js',
                dest: 'dest/js/script.main.js'
            },
            css: {
                src: 'src/css/*.css',
                dest: 'dest/css/styles.main.css'
            },
        },

        uglify: {
            js: {
                src: 'dest/js/script.main.js',
                dest: 'dest/js/script.main.min.js'
            },
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dest/img/'
                }]
            }
        },

    });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
