/* global module, require */

(function (module) {

  'use strict';

  //============================================================
  // [ SETTING ]
  //============================================================
  var NDGE = {};

  NDGE.configuration = {
    /**
     * source mapなど出力する場合はtrue
     */
    isDebug: true,

    /**
     * watch delay milliseconds. default 500 ms
     * ウォッチが実行されるタイミング
     */
    delay : 0,

    /**
     * Boolean
     * uglifyするかどうか
     */
    uglifyFlg: false,

    /**
     * connect時ブラウザを自動で立ち上げる
     * Boolean
     */
    autoOpen : false,

    /**
     * connectのhostname
     */
    hostname:'*',

    banner: '/*!\n' +
      ' * author: <%= pkg.author %> (<%= pkg.homepage %>)\n' +
      ' * version: <%= pkg.version %>\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> \n' +
      ' */\n',

    path: {
      dev: './',
      app: '../production/',
      deploy: './',
      js: './js/',
      debug_local_root: "../",
      sourcemap_root: "http://localhost:9001/development/",
      sourcemap_server: "//localhost:9001/"
    },

    projectName: 'petapeta',

    scripts: [
    '<%= config.path.js %>ganalytics.js',
    '<%= config.path.js %>main.js',
    '<%= config.path.js %>settingMap.js',
    '<%= config.path.js %>topBackground.js',
    '<%= config.path.js %>movie.js'
    ]
  };

  module.exports = NDGE;

}(module));
