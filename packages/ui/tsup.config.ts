import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    splitting: true,
    entryPoints: ["./**/*.tsx"],
    // format: ["esm"],
    dts: true,
    minify: true,
    clean: true,
    externals: ["react"],
    ...options,
}));
