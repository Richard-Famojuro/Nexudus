const config = {
    paths: ['tests/e2e/features/**/*.feature'],
    require: ['tests/e2e/step_definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
        'summary',
        'progress-bar',
    ],
    formatOptions: { snippetInterface: 'async-await' },
};

module.exports = {
    default: config
}
