/* global module, require */

module.exports = function (grunt) {

  'use strict';

  var Peta = require('./petapetaDev.js');

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

      //============================================================
      // [ Config ]
      //======================================================= =====
      pkg: grunt.file.readJSON('package.json'),
      config: Peta.configuration,

      //============================================================
      // [ CSS ]
      //============================================================
      // compass: {
      //   dist: {
      //     options: {
      //       environment: 'production',
      //       outputStyle: 'compressed',
      //       sassDir: '<%= config.path.dev %>scss',
      //       cssDir: '<%= config.path.dev %>css'
      //     }
      //   },
      //   dev: {
      //     options: {
      //       environment: "development",
      //       outputStyle: '<%= config.isDebug ? "nested" : "compressed" %>',
      //       relativeAssets: true,
      //       noLineComment: false,
      //       debugInfo: false,
      //       sassDir: '<%= config.path.dev %>scss',
      //       cssDir: '<%= config.path.dev %>css',
      //       raw: ' sass_options = { :sourcemap => '+ Peta.configuration.isDebug+'  } ',
      //       sourcemap: Peta.configuration.isDebug
      //     }
      //   }
      // },
      less: {
        //製品版のとき
        dist: {
          options : {
            compress : true,
            paths: ["<%= config.path.dev %>less"]
            
          },
          files: [{
            expand: true,
            cwd: '<%= config.path.dev %>less',
            src: ['*.less'],
            dest: '<%= config.path.dev %>css', // 出力先ディレクトリ
            ext: '.css'
          }]
        },
        //開発版のとき
        dev: {
          options : {
            compress : false,
            paths: ["<%= config.path.dev %>less"],
            optimization: 2,
            sourceMap: true,
            sourceMapFilename: '<%= config.path.dev %>css/style.css.map',
            sourceMapURL: 'css/style.css.map',
            sourceMapBasepath: '<%= config.path.app %>css/',
            sourceMapRootpath: '<%= config.path.app %>'
          },
          files: [{
            expand: true,
            cwd: '<%= config.path.dev %>less',
            src: ['*.less'],
            dest: '<%= config.path.dev %>css', // 出力先ディレクトリ
            ext: '.css'
          }]
        }
      },
      //============================================================
      // [ JS ]
      //============================================================
      uglify: {
        build: {
          options: {
            banner: '<%= config.banner %>',
            sourceMap: Peta.configuration.isDebug,
            compress:{
              drop_console: !Peta.configuration.isDebug
            },
            dead_code: Peta.configuration.isDebug
          },
          src: '<%= config.path.dev %>js/<%= config.projectName %>.js',
          dest: '<%= config.path.app %>js/<%= config.projectName %>.js'
        }
      },

      concat: {
        js: {
          src: Peta.configuration.scripts,
          dest: '<%= config.path.dev %>js/<%= config.projectName %>.js'
        }
      },

      concat_sourcemap: {
        options: {
          sourceRoot:"<%= config.path.sourcemap_server %>",
          sourcesContent: false,
          sourceMap: true
        },
        target: {
          src: Peta.configuration.scripts,
          dest: '<%= config.path.dev %>js/<%= config.projectName %>.js'
        }
      },

      //============================================================
      // [ IMG ]
      //============================================================
      imageoptim: {
        task: {
          options: {
            jpegMini: false,
            imageAlpha: true,
            quitAfter: false
          },
          src: ['<%= config.path.app %>img/**/']
        }
      },

      //============================================================
      // [ OTHER ]
      //============================================================
      copy: {
        img: {
          expand: true,
          src: '<%= config.path.dev %>img/**/*',
          dest: '<%= config.path.app %>'
        },
        js: {
          expand: true,
          cwd: '<%= config.path.dev %>js/',
          src: [
            '<%= config.projectName %>.*',
            'libs/*.*'
          ],
          dest: '<%= config.path.app %>js/',
          flatten: false,
          filter: 'isFile',
          options: {
//            process: function (content, srcpath) {
//              return content.replace(/\/\/\#\ssourceMappingURL=[a-zA-Z0-9.-]+[.map]/g, '');
//            }
          }
          //,
//          src: '<%= config.path.dev %>js/libs.js',
//          dest: '<%= config.path.app %>js/libs.js'
        },
        css:{
          expand: true,
          cwd: '<%= config.path.dev %>css/',
          src: ['*.map','*.css', '**/*.css', '**/*.htc'],
          dest: '<%= config.path.app %>css/',
          flatten: false,
          filter: 'isFile',
          options: {
            process: function (content, srcpath)
            {
//              grunt.log(content.replace(/\.\.\/lsee\//g, 'http://localhost:9001/lsee/'));
//              return content.replace(/\.\.\/lsee\//g, 'http://localhost:9001/lsee/');
              if(Peta.configuration.isDebug)
              {
                return content.replace(/\.\.\/less\//g, 'http://localhost:9001/less/');
              }else{
                return content.replace(/\*\#\ssourceMappingURL=[a-zA-Z0-9.-]+[.map]/g, '');
              }
            }
          }
        },
        deploy_js: {
          expand: true,
          cwd: '<%= config.path.app %>js/',
          src: [
            '<%= config.projectName %>.*',
            'ijc/**/*.*',
            'ijc/*.*',
            'libs/*.*',
            'share/*.*'
          ],
          dest: '<%= config.path.deploy %>js/',
          flatten: false,
          filter: 'isFile',
          options: {
//            process: function (content, srcpath) {
//              return content.replace(/\/\/\#\ssourceMappingURL=[a-zA-Z0-9.-]+[.map]/g, '');
//            }
          }
        },

        deploy_css:{
          expand: true,
          cwd: '<%= config.path.app %>css/',
          src: ['*.map','*.css', '**/*.css'],
          dest: '<%= config.path.deploy %>css/',
          flatten: false,
          filter: 'isFile',
          options: {
//            process: function (content, srcpath)
//            {
//              if(Peta.configuration.isDebug)
//              {
//                return content.replace(/\.\.\/scss\//g, 'http://localhost:9001/scss/');
//              }else{
//                return content.replace(/\*\#\ssourceMappingURL=[a-zA-Z0-9.-]+[.map]/g, '');
//              }
//            }
          }
        }
      },

      clean: {
        options: {
          force: true
        },
        dist: {
          files: [
            {
              dot: true,
              src: [
                '<%= config.path.app %>*',
                '!<%= config.path.app %>.git*'
              ]
            }
          ]
        },
        css: {
          files: [
            {
              dot: true,
              src: [
                '<%= config.path.app %>css'
              ]
            }
          ]
        },
        js: {
          files: [
            {
              dot: true,
              src: [
                '<%= config.path.app %>js'
              ]
            }
          ]
        },
        img: {
          files: [
            {
              dot: true,
              src: [
                '<%= config.path.app %>img'
              ]
            }
          ]
        },
        deploy_js:{
          files: [
            {
              dot: true,
              src: [
                '<%= config.path.deploy %>js'
              ]
            }
          ]
        },
        deploy_css:{
          files: [
            {
              dot: true,
              src: [
                '<%= config.path.deploy %>css'
              ]
            }
          ]
        }
      },

      watch: {
        js:(function(){
          if(Peta.configuration.uglifyFlg && !Peta.configuration.isDebug)
          {
            //圧縮あり
            return {
              files: Peta.configuration.scripts,
              tasks: ['concat:js', 'copy:js', 'uglify'],
              options: {
                livereload: true,
                debounceDelay: Peta.configuration.delay
              }
            }
          }else{
            //圧縮なし
            return {
              files: Peta.configuration.scripts,
              tasks: ['build_js', 'copy:deploy_js'],
              options: {
                livereload: true,
                debounceDelay: Peta.configuration.delay
              }
            }
          }
        }()),
        css: {
          files: ['<%= config.path.dev %>less/**/*.less'],
          tasks:(function(){
            return [ 'build_css', 'copy:deploy_css'];
          }()),
          options: {
            livereload: true,
            debounceDelay: Peta.configuration.delay
          }
        }
      },

      connect: {
        production_server: {
          options: {
            port: 9000,
            open: Peta.configuration.autoOpen,
            base: "<%= config.path.app %>" ,
            hostname: Peta.configuration.hostname
          }
        },
        sourcemap_server: {
          // sourcemap用
          options: {
            port: 9001,
            base: "<%= config.path.dev %>",
            hostname: Peta.configuration.hostname
          }
        },
        livereload: {
          options: {
            middleware: function (connect) {
              return [
                connect.static(Peta.configuration.path.debug_local_root)
              ];
            }
          }
        }
      }
    }
  );
  //============================================================
  // [ 実行 ]
  //============================================================
  grunt.registerTask('build_css',
    (function(){
      if(!Peta.configuration.isDebug)
      {
        //圧縮あり
        return ['clean:css','less:dist','copy:css'];
      }else{
        //圧縮なし
        return ['clean:css','less:dev','copy:css'];
      }
    }())
  );
  grunt.registerTask('build_js',
    (function(){
      if(Peta.configuration.uglifyFlg && !Peta.configuration.isDebug)
      {
        //圧縮あり
        return ['concat:js','clean:js', 'copy:js', 'uglify'];
      }else{
        //圧縮なし
        return ['concat_sourcemap','clean:js', 'copy:js'];
      }
    }())
  );
  grunt.registerTask('build_img', [
    'clean:img',
    'copy:img',
    'imageoptim'
  ]);
  grunt.registerTask('img_copy', [
    'clean:img',
    'copy:img'
  ]);
  grunt.registerTask('deploy_copy',[
      'clean:deploy_js',
      'clean:deploy_css',
      'copy:deploy_js',
      'copy:deploy_css'
    ]
  );
  grunt.registerTask('build_release',[
      'build_css',
      'build_js',
      'deploy_copy',
      'build_img'
    ]
  );
  grunt.registerTask('live', [
    'connect',
    'watch'
  ]);
  grunt.registerTask('watch_task', [
    'watch'
  ]);
};
