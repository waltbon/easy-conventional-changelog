const packageJson = require('./package.json');

(() => {
    console.log("Process started...");
    const { version } = packageJson;
    console.log(`Current version: ${version}`);
})();
