module.exports = function(grunt) {

    grunt.initConfig({
        less:{
              development:{
                  options:{
                      compress: true,
                      yuicompress: true,
                      optimization: 2
                  },
                files:{
                    'styles/new.css' : 'styles/new.less'
                }
              }
        },
        watch: {
            styles:{
                options:{
                    livereload: true,
                    spawn: false,
                    event: ['added','deleted','changed']
                },
                files:['styles/*.less'],
                tasks:['less']
            }
        },

        copy: {
          main: {
            files: [

              {expand: true, src: ['*.js' , '!Gruntfile.js'], dest: 'scripts'},

              {expand: true, src: ['*.css'], dest: 'styles'},

              {expand: true, src: ['*.jpg'], dest: 'pics'}
            ],
          },
        },

        clean: {
          contents : ['*.*' , '!Gruntfile.js' , '!index.html' , '!package.json' , '!package-lock.json' ]
        }
    });

  grunt.registerTask('build' ,['copy' ,'clean']);


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['jshint']);

};