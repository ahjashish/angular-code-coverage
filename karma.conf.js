//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/*.js',
            'test/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        preprocessors: {
            //'src/main/webapp/promotion/js/controllers/**/*.js' : 'coverage',
            'app/*.js' : 'coverage'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','coverage'],

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        // web server port
        port: 9876,

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};

// // Karma configuration
// // Generated on Tue Oct 27 2015 09:56:37 GMT+0530 (India Standard Time)
// // Added a test change
// module.exports = function(config) {
//     config.set({
//
//         // base path that will be used to resolve all patterns (eg. files, exclude)
//         basePath: '',
//
//
//         // frameworks to use
//         // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//         frameworks: ['jasmine'],
//
//
//         // list of files / patterns to load in the browser
//         files: [
//             'node_modules/jquery/dist/jquery.min.js',
//             'node_modules/bootstrap/dist/js/bootstrap.min.js',
//             'node_modules/angular/angular.js',
//             'node_modules/angular-route/angular-route.js',
//             'node_modules/angular-mocks/angular-mocks.js',
//             '../loyalty-program-manager-portal/LPMPortalWAR/src/main/webapp/core/js/config.js',
//             '../loyalty-program-manager-portal/LPMPortalWAR/src/main/webapp/core/js/application.js',
//             'src/main/webapp/promotion/js/*.js',
//             'src/main/webapp/promotion/js/controllers/**/*.js',
//             'src/main/webapp/promotion/js/controllers/eligibility/*.js',
//             'src/main/webapp/promotion/js/controllers/generalInformation/*.js',
//             'src/main/webapp/promotion/js/controllers/period/*.js',
//             'src/main/webapp/promotion/js/controllers/search/*.js',
//             'src/main/webapp/promotion/js/controllers/summary/*.js',
//             'src/main/webapp/promotion/js/services/*.js',
//             'src/main/webapp/promotion/js/util/*.js',
//             'src/main/webapp/promotion/js/metadata/*.js',
//             'src/main/webapp/promotion/js/filters/*.js',
//             'src/main/webapp/promotion/js/directives/*.js',
//             //'src/main/webapp/promotion/js/promotion/util/*.js',
//             'src/test/js/controllers/eligibility/*.js',
//             'src/test/js/controllers/generalInformation/*.js',
//             'src/test/js/controllers/period/*.js',
//             'src/test/js/controllers/search/*.js',
//             'src/test/js/controllers/summary/*.js',
//             'src/test/js/services/promotion/*.js',
//             'src/test/js/controllers/manage/*.js',
//             'src/test/js/directives/*.js',
//             'src/test/js/filters/*.js',
//             'src/test/js/util/*.js'
//         ],
//
//
//         // list of files to exclude
//         exclude: [
//
//             /*// 'src/main/webapp/promotion/js/promotion/controllers/promotion.createPeriod.js',
//              //'src/test/webapp/promotion/js/promotion/controllers/promotion.createPeriodTest.js',
//              'src/main/webapp/promotion/js/controllers/eligibility/*.js',
//              'src/main/webapp/promotion/js/controllers/generalInformation/*.js',
//              'src/main/webapp/promotion/js/controllers/search/*.js',
//              'src/main/webapp/promotion/js/controllers/period/promotion.eventPeriod.js',
//              'src/main/webapp/promotion/js/controllers/period/promotion.redemptionPeriod.js',
//              'src/main/webapp/promotion/js/controllers/period/promotion.spendPeriod.calculation.js',
//              'src/main/webapp/promotion/js/controllers/period/promotion.spendPeriod.js',
//              //  'src/main/webapp/promotion/js/services/promotion.service.js',
//              'src/test/webapp/promotion/js/promotion/services/*.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.createEligibilityTest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.controllerTest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/program.createEligibilityTest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/program.createGITest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.createGITest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.eventPeriodTest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.exportSelectionTest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.refineSearchTest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.spendPeriod.calculationTest.js',
//              'src/test/webapp/promotion/js/promotion/controllers/promotion.eventPeriodTest.js'*/
//         ],
//
//
//         // preprocess matching files before serving them to the browser
//         // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//
//         preprocessors: {
//             //'src/main/webapp/promotion/js/controllers/**/*.js' : 'coverage',
//             'src/main/webapp/promotion/js/**/*.js' : 'coverage'
//         },
//
//
//         // test results reporter to use
//         // possible values: 'dots', 'progress'
//         // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//         reporters: ['progress','coverage'],
//
//         coverageReporter: {
//             type : 'html',
//             dir : 'coverage/'
//         },
//
//         // web server port
//         port: 9876,
//
//
//         // enable / disable colors in the output (reporters and logs)
//         colors: true,
//
//
//         // level of logging
//         // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//         logLevel: config.LOG_INFO,
//
//
//         // enable / disable watching file and executing tests whenever any file changes
//         autoWatch: true,
//
//
//         // start these browsers
//         // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//         browsers: ['Chrome'],
//
//
//         // Continuous Integration mode
//         // if true, Karma captures browsers, runs the tests and exits
//         singleRun: false,
//
//         // Concurrency level
//         // how many browser should be started simultanous
//         concurrency: Infinity
//     })
// }
