console.log('cucumber.js loaded');

module.exports = {
    default: {
        requireModule: [
            'ts-node/register'
        ],

        require: [
            'step-definitions/**/*.ts',
            'src/support/**/*.ts'
        ],

        format: [
            'progress'
        ]
    }
};