// Test script to verify karma config loads as Node.js module
const path = require('path');

// Test loading the config file
try {
    const karmaConfig = require('../allowedFormats/typescript/karma.conf.ts');

    console.log('✅ Config loaded successfully');
    console.log('Type:', typeof karmaConfig);
    console.log('Is function:', typeof karmaConfig === 'function');

    // Test calling the function with mock config
    const mockConfig = {
        set: (options) => {
            console.log('✅ config.set() called with options');
            console.log('Options keys:', Object.keys(options));
        },
        LOG_INFO: 'INFO'
    };

    karmaConfig(mockConfig);

} catch (error) {
    console.error('❌ Error loading config:', error.message);
}
