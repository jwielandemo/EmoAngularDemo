"use strict";

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 5000,
                    base: 'app',
                    keepalive: true
                }
            }
        },

        less: {
            dev: {
                files: {
                    'app/css/styles.css': 'app/css/styles.less'
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'connect:server']);
};
