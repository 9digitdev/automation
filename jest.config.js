module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    'reporters':[
        'default',
        [
            './node_modules/jest-html-reporter', {
                'outputPath': './testresults/results.html',
                'pageTitle':'Maxwell ui tests',
                'includeFailureMsg': true,
                'includeSuiteFailure': true,
                'dateFormat': 'dddd mmm d, yyyy HH:MM:ss',
            },
        ],
    
        [
            'jest-junit', {
                outputDirectory: './testresults',
                outputName: 'jest-junit.xml',
                suiteName: 'Maxwell UI tests',
            },
        ],
    ],
};