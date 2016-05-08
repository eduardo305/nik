module.exports = function(grunt) {

  // Add the jasmine tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'test/**/*.spec.js',
        version: '2.4.1'//,
        //template: require('grunt-template-jasmine-requirejs')
      }
    }
  });

  grunt.registerTask('default', 'jasmine');

};
