module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ["custom"],
    settings: {
        next: {
            rootDir: ["apps/*/"],
        },
    },
    rules: {
        "no-unused-vars": [1, { args: "after-used", argsIgnorePattern: "^_" }],
    },
};
