module.exports = function(grunt) {

  'use strict';

  // Add the jasmine tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine : {
        src : 'src/**/*.js',
        options : {
            specs : 'test/**/*.spec.js',
            template: require('grunt-template-jasmine-requirejs')

        }
    }
  });

  grunt.registerTask('default', 'jasmine');

};
