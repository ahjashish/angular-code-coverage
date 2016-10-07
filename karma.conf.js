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

        autoWatch: false,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        preprocessors: {
            //'src/main/webapp/promotion/js/controllers/**/*.js' : 'coverage',
            'app/*.js' : 'coverage'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['progress','coverage'],

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        
        singleRun : true,
        
        reporters : ['dots', 'junit'],
        
        junitReporter : {
            outputFile: 'test-results.xml'
        },
        // web server port
        port: 9876

        /*junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }*/

    });
};
